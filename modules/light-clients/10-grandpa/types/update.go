package types

import (
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/ComposableFi/go-merkle-trees/mmr"
	gsrpctypes "github.com/centrifuge/go-substrate-rpc-client/v4/types"
	gsrpccodec "github.com/centrifuge/go-substrate-rpc-client/v4/types/codec"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	"github.com/cosmos/ibc-go/v6/modules/core/exported"
	"github.com/octopus-network/beefy-go/beefy"
)

// step1: verify signature
// step2: verify mmr
// step3: verfiy header
// step4: update client state and consensuse state
func (cs ClientState) CheckHeaderAndUpdateState(
	ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore,
	header exported.Header,
) (exported.ClientState, exported.ConsensusState, error) {

	pbHeader, ok := header.(*Header)
	if !ok {
		return nil, nil, sdkerrors.Wrapf(
			clienttypes.ErrInvalidHeader, "expected type %T, got %T", &Header{}, header,
		)
	}

	var newBeefyMmr bool = false
	beefyMMR := pbHeader.GetBeefyMmr()
	//TODO: check beefymmr is nil ?
	if beefyMMR != nil {

		// step1:  verify signature
		// convert signedcommitment
		bsc := ToBeefySC(beefyMMR.SignedCommitment)
		log.Printf("ics10-debug::CheckHeaderAndUpdateState -> SignedCommitment: %+v", bsc)

		err := cs.VerifySignatures(bsc, beefyMMR.SignatureProofs)
		if err != nil {
			log.Printf("ics10-debug::CheckHeaderAndUpdateState -> VerifySignatures failed : %+v", err)
			return nil, nil, sdkerrors.Wrap(err, "failed to verify signatures")
		}

		// step2: verify beefy mmr

		// mmrSize := beefyMMR.MmrSize
		// log.Printf("ics10-debug::CheckHeaderAndUpdateState -> recv mmrSize: %+v", mmrSize)
		leafIndex := beefy.ConvertBlockNumberToMmrLeafIndex(uint32(beefy.BEEFY_ACTIVATION_BLOCK), bsc.Commitment.BlockNumber)
		calMmrSize := mmr.LeafIndexToMMRSize(uint64(leafIndex))
		log.Printf("ics10-debug::CheckHeaderAndUpdateState -> cal mmrSize: %+v", calMmrSize)

		// convert mmrleaf
		beefyMMRLeaves := ToBeefyMMRLeaves(beefyMMR.MmrLeavesAndBatchProof.Leaves)
		log.Printf("ics10-debug::CheckHeaderAndUpdateState -> beefyMMRLeaves: %+v", beefyMMRLeaves)

		// convert mmr proof
		beefyBatchProof := ToMMRBatchProof(beefyMMR.MmrLeavesAndBatchProof.MmrBatchProof)
		log.Printf("ics10-debug::CheckHeaderAndUpdateState -> beefyBatchProof: %+v", beefyBatchProof)

		// check mmr height
		if bsc.Commitment.BlockNumber <= uint32(cs.LatestBeefyHeight.RevisionHeight) {
			log.Printf("ics10-debug::VerifyMMR -> Commitment.BlockNumber[%d] < cs.LatestBeefyHeight[%d]", bsc.Commitment.BlockNumber, cs.LatestBeefyHeight.RevisionHeight)
			return nil, nil, sdkerrors.Wrap(errors.New("Commitment.BlockNumber < cs.LatestBeefyHeight"), "")
		}
		// verify mmr
		err = cs.VerifyMMR(bsc.Commitment.Payload[0].Data, calMmrSize, beefyMMRLeaves, beefyBatchProof)
		if err != nil {
			log.Printf("ics10-debug::CheckHeaderAndUpdateState -> use cal mmrsize to verify mmr error!")
			// return nil, nil, sdkerrors.Wrap(err, "failed to verify mmr")
		}
		newBeefyMmr = true
	}

	msg := pbHeader.GetMessage()
	if msg == nil {
		return nil, nil, errors.New("header is nil !")
	}

	// step3: verify header
	var mmrSize uint64 
	var mmrRoot []byte
	var latestBeefyHeight clienttypes.Height
	if newBeefyMmr {
		leafIndex := beefy.ConvertBlockNumberToMmrLeafIndex(uint32(beefy.BEEFY_ACTIVATION_BLOCK), beefyMMR.SignedCommitment.Commitment.BlockNumber)
		mmrSize = mmr.LeafIndexToMMRSize(uint64(leafIndex))
		mmrRoot = beefyMMR.SignedCommitment.Commitment.Payloads[0].Data
		latestBeefyHeight = clienttypes.NewHeight(clienttypes.ParseChainID(cs.ChainId), uint64(beefyMMR.SignedCommitment.Commitment.BlockNumber))
	} else {
		leafIndex := beefy.ConvertBlockNumberToMmrLeafIndex(uint32(beefy.BEEFY_ACTIVATION_BLOCK), uint32(cs.LatestBeefyHeight.RevisionHeight))
		mmrSize = mmr.LeafIndexToMMRSize(uint64(leafIndex))
		mmrRoot = cs.LatestMmrRoot
		latestBeefyHeight = cs.LatestBeefyHeight
	}
	log.Printf("ics10-debug::CheckHeaderAndUpdateState -> mmrSize: %d,  mmrRoot: %+v ", mmrSize, mmrRoot)

	latestChainHeight := clienttypes.NewHeight(pbHeader.GetHeight().GetRevisionNumber(), pbHeader.GetHeight().GetRevisionHeight())
	// check height:latest block height must less LatestBeefyHeight
	if latestChainHeight.RevisionHeight > latestBeefyHeight.RevisionHeight {
		errMsg := fmt.Sprintf("latestChainHeight[%d] > latestBeefyHeight[%d], not enough to verify !", latestChainHeight.RevisionHeight, latestBeefyHeight.RevisionHeight)
		return nil, nil, errors.New(errMsg)
	}
	err := cs.VerifyHeader(*pbHeader, mmrRoot, mmrSize)
	if err != nil {
		return nil, nil, sdkerrors.Wrap(err, "failed to verify header")
	}

	// step4: update state
	// update client state and build new client state
	var newClientState *ClientState

	if newBeefyMmr {
		newClientState, err = cs.UpdateClientState(ctx, beefyMMR.SignedCommitment.Commitment,
			beefyMMR.MmrLeavesAndBatchProof.Leaves, latestChainHeight)
		if err != nil {
			return nil, nil, err
		}
	} else {
		// just update latestChainHeight
		newClientState = &ClientState{
			ChainType: cs.ChainType, ChainId: cs.ChainId, ParachainId: cs.ParachainId,
			LatestBeefyHeight:  cs.LatestBeefyHeight,
			LatestMmrRoot:      cs.LatestMmrRoot,
			LatestChainHeight:  latestChainHeight,
			FrozenHeight:       cs.FrozenHeight,
			LatestAuthoritySet: cs.LatestAuthoritySet,
		}
	}
	log.Printf("ics10-debug::CheckHeaderAndUpdateState -> latest client state: %+v", *newClientState)
	// update consensue state and build latest new consensue state
	newConsensusState, err := cs.UpdateConsensusStates(ctx, cdc, clientStore, pbHeader)
	if err != nil {
		return nil, nil, err
	}
	log.Printf("ics10-debug::CheckHeaderAndUpdateState -> latest consensuse state: %+v", *newConsensusState)

	return newClientState, newConsensusState, nil
}

// verify signatures
func (cs ClientState) VerifySignatures(bsc beefy.SignedCommitment, SignatureProofs [][]byte) error {

	// checking signatures Threshold
	if beefy.SignatureThreshold(cs.LatestAuthoritySet.Len) > uint32(len(bsc.Signatures)) {
		return sdkerrors.Wrap(errors.New("verify signature error "), ErrInvalidValidatorSet.Error())

	}

	// // check bsc.Commitment.ValidatorSetID is cs.AuthoritySet.Id or cs.NextAuthoritySet.Id
	// log.Printf("ics10-debug::VerifySignatures -> bsc.Commitment.ValidatorSetID: %+v ,cs.AuthoritySet.Id:%+v ,cs.NextAuthoritySet.Id:%+v ",
	// 	bsc.Commitment.ValidatorSetID, cs.AuthoritySet.Id, cs.NextAuthoritySet.Id)
	// if bsc.Commitment.ValidatorSetID != cs.AuthoritySet.Id && bsc.Commitment.ValidatorSetID != cs.NextAuthoritySet.Id {
	// 	return sdkerrors.Wrap(errors.New("ValidatorSetID Mismatch "), ErrInvalidValidatorSet.Error())

	// }

	// verify signatures
	// switch bsc.Commitment.ValidatorSetID {
	// case cs.AuthoritySet.Id:
	// 	err := beefy.VerifySignature(bsc, uint64(cs.AuthoritySet.Len), beefy.Bytes32(cs.AuthoritySet.Root), SignatureProofs)
	// 	if err != nil {
	// 		return sdkerrors.Wrap(err, ErrInvalidValidatorSet.Error())
	// 	}

	// case cs.NextAuthoritySet.Id:
	// 	err := beefy.VerifySignature(bsc, uint64(cs.NextAuthoritySet.Len), beefy.Bytes32(cs.NextAuthoritySet.Root), SignatureProofs)
	// 	if err != nil {
	// 		return sdkerrors.Wrap(err, ErrInvalidValidatorSet.Error())
	// 	}

	// }

	err := beefy.VerifySignature(bsc, uint64(cs.LatestAuthoritySet.Len), beefy.Bytes32(cs.LatestAuthoritySet.Root), SignatureProofs)
	if err != nil {
		return sdkerrors.Wrap(err, ErrInvalidValidatorSet.Error())
	}

	return nil
}

// verify batch mmr proof
func (cs ClientState) VerifyMMR(mmrRoot []byte, mmrSize uint64,
	beefyMMRLeaves []gsrpctypes.MMRLeaf, mmrBatchProof beefy.MMRBatchProof) error {
	// check mmr height
	// if bsc.Commitment.BlockNumber <= uint32(cs.LatestBeefyHeight.RevisionHeight) {
	// 	log.Printf("ics10-debug::VerifyMMR -> Commitment.BlockNumber[%d] < cs.LatestBeefyHeight[%d]", bsc.Commitment.BlockNumber, cs.LatestBeefyHeight.RevisionHeight)
	// 	return sdkerrors.Wrap(errors.New("Commitment.BlockNumber < cs.LatestBeefyHeight"), "")
	// }

	//verify mmr proof
	result, err := beefy.VerifyMMRBatchProof(mmrRoot, mmrSize, beefyMMRLeaves, mmrBatchProof)
	if err != nil || !result {
		log.Printf("ics10-debug::VerifyMMR -> failed to verify mmr proof: %+v", err)
		return sdkerrors.Wrap(err, "failed to verify mmr proof")
	}
	return nil
}

// verify solochain header or parachain header
func (cs ClientState) VerifyHeader(gpHeader Header, mmrRoot []byte, mmrSize uint64) error {

	switch cs.ChainType {
	case beefy.CHAINTYPE_SUBCHAIN:
		headers := gpHeader.GetSubchainHeaders().SubchainHeaders
		// convert pb solochain header to beefy solochain header
		beefySubchainHeaderMap := make(map[uint32]beefy.SubchainHeader)
		for _, header := range headers {
			beefySubchainHeaderMap[header.BlockNumber] = beefy.SubchainHeader{
				ChainId:     header.ChainId,
				BlockNumber: header.BlockNumber,
				BlockHeader: header.BlockHeader,
				Timestamp:   beefy.StateProof(header.Timestamp),
			}
		}
		log.Printf("ics10-debug::VerifyHeader -> subchain headers : %+v", beefySubchainHeaderMap)

		headerMMRLeaves := ToBeefyMMRLeaves(gpHeader.GetSubchainHeaders().MmrLeavesAndBatchProof.Leaves)
		log.Printf("ics10-debug::VerifyHeader -> subchain headerMMRLeaves : %+v", headerMMRLeaves)
		headerMMRProof := ToMMRBatchProof(gpHeader.GetSubchainHeaders().MmrLeavesAndBatchProof.MmrBatchProof)
		log.Printf("ics10-debug::VerifyHeader -> subchain headerMMRProof : %+v", headerMMRProof)

		// verify mmr proof for subchain header
		err := cs.VerifyMMR(mmrRoot, mmrSize, headerMMRLeaves, headerMMRProof)
		if err != nil {
			return err
		}
		// verify subchain header
		err = beefy.VerifySubchainHeader(headerMMRLeaves, beefySubchainHeaderMap)
		if err != nil {
			return err
		}

	case beefy.CHAINTYPE_PARACHAIN:
		headers := gpHeader.GetParachainHeaders().ParachainHeaders
		// convert pb parachain header to beefy parachain header
		beefyParachainHeaderMap := make(map[uint32]beefy.ParachainHeader)
		for _, header := range headers {
			beefyParachainHeaderMap[header.RelayerChainNumber] = beefy.ParachainHeader{
				ChainId:            header.ChainId,
				ParaId:             header.ParachainId,
				RelayerChainNumber: header.RelayerChainNumber,
				BlockHeader:        header.BlockHeader,
				Proof:              header.Proofs,
				HeaderIndex:        header.HeaderIndex,
				HeaderCount:        header.HeaderCount,
				Timestamp:          beefy.StateProof(header.Timestamp),
			}
		}
		log.Printf("ics10-debug::VerifyHeader -> parachain headers : %+v", beefyParachainHeaderMap)

		headerMMRLeaves := ToBeefyMMRLeaves(gpHeader.GetParachainHeaders().MmrLeavesAndBatchProof.Leaves)
		log.Printf("ics10-debug::VerifyHeader -> parachain headerMMRLeaves : %+v", headerMMRLeaves)
		headerMMRProof := ToMMRBatchProof(gpHeader.GetParachainHeaders().MmrLeavesAndBatchProof.MmrBatchProof)
		log.Printf("ics10-debug::VerifyHeader -> parachain headerMMRProof : %+v", headerMMRProof)
		// verify mmr proof for parachain header
		err := cs.VerifyMMR(mmrRoot, mmrSize, headerMMRLeaves, headerMMRProof)
		if err != nil {
			return err
		}
		// verify parachain header
		err = beefy.VerifyParachainHeader(headerMMRLeaves, beefyParachainHeaderMap)
		if err != nil {
			return err
		}
	}
	return nil
}

// update client state
func (cs ClientState) UpdateClientState(ctx sdk.Context, commitment Commitment, mmrLeaves []MMRLeaf,
	latestChainHeight clienttypes.Height) (*ClientState, error) {
	// var newClientState *ClientState

	latestBeefyHeight := clienttypes.NewHeight(clienttypes.ParseChainID(cs.ChainId), uint64(commitment.BlockNumber))
	// latestChainHeight := latestChainHeight
	latestMmrRoot := commitment.Payloads[0].Data

	// find latest authority set from mmrleaves
	var latestAuthoritySet *BeefyAuthoritySet
	var latestAuthoritySetId uint64
	for _, leaf := range mmrLeaves {
		if latestAuthoritySetId < leaf.BeefyNextAuthoritySet.Id {
			latestAuthoritySetId = leaf.BeefyNextAuthoritySet.Id
			latestAuthoritySet = &BeefyAuthoritySet{
				Id:   leaf.BeefyNextAuthoritySet.Id,
				Len:  leaf.BeefyNextAuthoritySet.Len,
				Root: leaf.BeefyNextAuthoritySet.Root,
			}
		}

	}

	// update authority set
	// newNextAuthoritySet := *latestAuthoritySet
	log.Printf("ics10-debug::UpdateClientState -> latest AuthoritySet:%+v ",
		*latestAuthoritySet)

	newClientState := NewClientState(
		cs.ChainType, cs.ChainId,
		cs.ParachainId,
		latestBeefyHeight,
		latestMmrRoot,
		latestChainHeight,
		cs.FrozenHeight,
		*latestAuthoritySet)

	return newClientState, nil

}

// Save all the consensue state at height,but just return latest block header
func (cs ClientState) UpdateConsensusStates(ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore, header *Header) (*ConsensusState, error) {

	var newConsensueState *ConsensusState
	var latestChainHeight uint32
	var latestBlockHeader gsrpctypes.Header
	var latestTimestamp uint64
	switch cs.ChainType {
	case beefy.CHAINTYPE_SUBCHAIN:
		subchainHeaders := header.GetSubchainHeaders().SubchainHeaders

		for _, header := range subchainHeaders {
			var decodeHeader gsrpctypes.Header
			err := gsrpccodec.Decode(header.BlockHeader, &decodeHeader)
			if err != nil {
				return nil, sdkerrors.Wrapf(err, "decode header error")
			}
			var decodeTimestamp gsrpctypes.U64
			err = gsrpccodec.Decode(header.Timestamp.Value, &decodeTimestamp)
			if err != nil {
				return nil, sdkerrors.Wrapf(err, "decode timestamp error")
			}
			err = updateConsensuestate(clientStore, cdc, decodeHeader, uint64(decodeTimestamp))
			if err != nil {
				return nil, sdkerrors.Wrapf(clienttypes.ErrFailedClientConsensusStateVerification, "update consensus state failed")
			}
			//find latest header and timestmap
			if latestChainHeight < uint32(decodeHeader.Number) {
				latestChainHeight = uint32(decodeHeader.Number)
				latestBlockHeader = decodeHeader
				latestTimestamp = uint64(decodeTimestamp)
			}
		}

	case beefy.CHAINTYPE_PARACHAIN:
		parachainHeaders := header.GetParachainHeaders().ParachainHeaders
		for _, header := range parachainHeaders {
			var decodeHeader gsrpctypes.Header
			err := gsrpccodec.Decode(header.BlockHeader, &decodeHeader)
			if err != nil {
				return nil, sdkerrors.Wrapf(err, "decode header error")
			}
			var decodeTimestamp gsrpctypes.U64
			err = gsrpccodec.Decode(header.Timestamp.Value, &decodeTimestamp)
			if err != nil {
				return nil, sdkerrors.Wrapf(err, "decode timestamp error")
			}
			err = updateConsensuestate(clientStore, cdc, decodeHeader, uint64(decodeTimestamp))
			if err != nil {
				return nil, sdkerrors.Wrapf(clienttypes.ErrFailedClientConsensusStateVerification, "update consensus state failed")
			}
			//find latest header and timestmap
			if latestChainHeight < uint32(decodeHeader.Number) {
				latestChainHeight = uint32(decodeHeader.Number)
				latestBlockHeader = decodeHeader
				latestTimestamp = uint64(decodeTimestamp)
			}

		}
	}
	log.Printf("ics10-debug::UpdateConsensusStates -> latestChainHeight: %+v \nlatestTimestamp: %+v \nlatestBlockHeader: %+v ",
		latestChainHeight,
		latestTimestamp,
		latestBlockHeader)
	// TODO: asset blockheader and timestamp is not nil
	newConsensueState = NewConsensusState(latestBlockHeader.StateRoot[:], time.UnixMilli(int64(latestTimestamp)))

	// set metadata for this consensus
	latestHeigh := clienttypes.Height{
		RevisionNumber: 0,
		RevisionHeight: uint64(latestChainHeight),
	}
	setConsensusMetadata(ctx, clientStore, latestHeigh)
	// TODO: consider to pruning!
	//
	return newConsensueState, nil

}
