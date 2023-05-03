package types

import (
	"errors"
	"log"
	"time"

	ics23 "github.com/confio/ics23/go"
	"github.com/octopus-network/beefy-go/beefy"

	gsrpccodec "github.com/centrifuge/go-substrate-rpc-client/v4/types/codec"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	connectiontypes "github.com/cosmos/ibc-go/v6/modules/core/03-connection/types"
	channeltypes "github.com/cosmos/ibc-go/v6/modules/core/04-channel/types"
	commitmenttypes "github.com/cosmos/ibc-go/v6/modules/core/23-commitment/types"
	"github.com/cosmos/ibc-go/v6/modules/core/exported"
	// ibcgptypes "github.com/cosmos/ibc-go/v6/modules/light-clients/10-grandpa/types"
)

var _ exported.ClientState = (*ClientState)(nil)

// NewClientState creates a new ClientState instance
func NewClientState(
	chainType uint32,
	chainId string,
	parachainId uint32,
	latestBeefyHeight clienttypes.Height,
	mmrRootHash []byte,
	latestHeight clienttypes.Height,
	frozenHeight clienttypes.Height,
	authoritySet BeefyAuthoritySet,
) *ClientState {
	return &ClientState{
		ChainType:          chainType,
		ChainId:            chainId,
		ParachainId:        parachainId,
		LatestBeefyHeight:  latestBeefyHeight,
		LatestMmrRoot:      mmrRootHash,
		LatestChainHeight:  latestHeight,
		FrozenHeight:       frozenHeight,
		LatestAuthoritySet: authoritySet,
	}
}

// GetChainID returns the chain-id
func (cs ClientState) GetChainID() string {
	log.Printf("ics10-debug::GetChainID -> cs.ChainId: %+v ", cs.ChainId)
	return cs.ChainId
}

// ClientType is tendermint.
func (cs ClientState) ClientType() string {
	log.Printf("ics10-debug::ClientType -> exported.Grandpa: %+v ", exported.Grandpa)

	return exported.Grandpa
}

// TODO: which height? latest beefy height or latest chain height.
func (cs ClientState) GetLatestHeight() exported.Height {
	log.Printf("ics10-debug::GetLatestHeight -> cs.LatestChainHeight: %+v ", cs.LatestChainHeight)
	return cs.LatestChainHeight
}

// Status returns the status of the Grandpa client.
// The client may be:
// - Active: FrozenHeight is zero and client is not expired
// - Frozen: Frozen Height is not zero
// - Expired: the latest consensus state timestamp + trusting period <= current time
//
// A frozen client will become expired, so the Frozen status
// has higher precedence.
func (cs ClientState) Status(
	ctx sdk.Context,
	clientStore sdk.KVStore,
	cdc codec.BinaryCodec,
) exported.Status {

	if !cs.FrozenHeight.IsZero() {
		return exported.Frozen
	}
	log.Printf("ics10-debug::Status -> exported.Active: %+v ", exported.Active)
	return exported.Active
}

// TODO: check expired
// IsExpired returns whether or not the client has passed the trusting period since the last
// update (in which case no headers are considered valid).
func (cs ClientState) IsExpired(latestTimestamp, now time.Time) bool {
	log.Printf("ics10-debug::IsExpired -> result: %+v ", false)

	return false
}

// Validate performs a basic validation of the client state fields.
func (cs ClientState) Validate() error {
	if cs.LatestBeefyHeight.RevisionHeight == 0 {

		return sdkerrors.Wrap(ErrInvalidHeaderHeight, "beefy height cannot be zero")
	}
	log.Printf("ics10-debug::Validate -> result: %+v ", nil)

	return nil
}

// GetProofSpecs returns the format the client expects for proof verification
// as a string array specifying the proof type for each position in chained proof
func (cs ClientState) GetProofSpecs() []*ics23.ProofSpec {
	//ps := []*ics23.ProofSpec{}
	ps := commitmenttypes.GetSDKSpecs()
	log.Printf("ics10-debug::GetProofSpecs -> result: %+v ", ps)
	return ps

}

// ZeroCustomFields returns a ClientState that is a copy of the current ClientState
// with all client customizable fields zeroed out
func (cs ClientState) ZeroCustomFields() exported.ClientState {
	// copy over all chain-specified fields
	// and leave custom fields empty
	zcs := &ClientState{
		ChainId:            cs.ChainId,
		ChainType:          cs.ChainType,
		LatestBeefyHeight:  cs.LatestBeefyHeight,
		LatestMmrRoot:      cs.LatestMmrRoot,
		LatestChainHeight:  cs.LatestChainHeight,
		FrozenHeight:       cs.FrozenHeight,
		LatestAuthoritySet: cs.LatestAuthoritySet,
	}
	log.Printf("ics10-debug::ZeroCustomFields -> result: %+v ", zcs)

	return zcs
}

// Initialize will check that initial consensus state is a Grandpa consensus state
// and will store ProcessedTime for initial consensus state as ctx.BlockTime()
func (cs ClientState) Initialize(ctx sdk.Context, _ codec.BinaryCodec, clientStore sdk.KVStore, consState exported.ConsensusState) error {
	log.Println("ics10-grandpa client state Initialize")
	if _, ok := consState.(*ConsensusState); !ok {
		return sdkerrors.Wrapf(clienttypes.ErrInvalidConsensus, "invalid initial consensus state. expected type: %T, got: %T",
			&ConsensusState{}, consState)
	}
	// set metadata for initial consensus state.
	//Note,this height must be subchain or parachain height,not beefy height
	latestChainHeigh := cs.GetLatestHeight()
	setConsensusMetadata(ctx, clientStore, latestChainHeigh)

	return nil
}

// VerifyClientState verifies a proof of the client state of the running chain
// stored on the target machine
func (cs ClientState) VerifyClientState(
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	prefix exported.Prefix,
	counterpartyClientIdentifier string,
	proof []byte,
	clientState exported.ClientState,
) error {
	log.Printf("ics10-debug::VerifyClientState -> height:%+v, prefix:%+v, counterpartyClientIdentifier:%+v, proof:%+v", height, prefix,
		counterpartyClientIdentifier, proof)

	if clientState == nil {
		return sdkerrors.Wrap(clienttypes.ErrInvalidClient, "client state cannot be empty")
	}
	// asset grandpa clientstate
	_, ok := clientState.(*ClientState)
	if !ok {
		return sdkerrors.Wrapf(clienttypes.ErrInvalidClient, "invalid client type %T, expected %T", clientState, &ClientState{})
	}

	// clientPrefixedPath := commitmenttypes.NewMerklePath(host.FullClientStatePath(counterpartyClientIdentifier))
	// path, err := commitmenttypes.ApplyPrefix(prefix, clientPrefixedPath)
	// if err != nil {
	// 	return err
	// }

	// build state key,I think don`t build state key for substrate state proof
	// just upload in proof
	// key:=beefy.CreateStorageKeyPrefix(prefix, method string)
	// the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	encodedClientState, err := gsrpccodec.Encode(clientState)
	if err != nil {
		return sdkerrors.Wrap(err, "clientState could not be scale encoded")
	}
	log.Printf("ics10-debug::VerifyClientState -> clientState:%+v ", clientState)
	log.Printf("ics10-debug::VerifyClientState -> encodedClientState:%+v ", encodedClientState)

	// get state proof
	stateProof, provingConsensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// err = beefy.VerifyStateProof(stateProof.Proofs, provingConsensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, provingConsensusState.Root, stateProof.Key, encodedClientState)
	if err != nil {
		log.Printf("ics10-debug::VerifyClientState -> VerifyStateProof error :%+v ", err)
		return err
	}

	return nil

}

// VerifyClientConsensusState verifies a proof of the consensus state of the
// Tendermint client stored on the target machine.
func (cs ClientState) VerifyClientConsensusState(
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	counterpartyClientIdentifier string,
	consensusHeight exported.Height,
	prefix exported.Prefix,
	proof []byte,
	consensusState exported.ConsensusState,
) error {
	log.Printf("ics10-debug::VerifyClientConsensusState -> height:%+v, prefix:%+v, counterpartyClientIdentifier:%+v, consensusHeight:%+v, proof:%+v",
		height, prefix,
		counterpartyClientIdentifier,
		consensusHeight, proof)

	if consensusState == nil {
		return sdkerrors.Wrap(clienttypes.ErrInvalidClient, "consensus state cannot be empty")
	}

	// asset grandpa consensuse state
	_, ok := consensusState.(*ConsensusState)
	if !ok {
		return sdkerrors.Wrapf(clienttypes.ErrInvalidClient, "invalid client type %T, expected %T", consensusState, &ConsensusState{})
	}

	// encode consensue state
	encodedConsensueState, err := gsrpccodec.Encode(consensusState)
	if err != nil {
		return sdkerrors.Wrap(err, "consensusState could not be scale encoded")
	}
	log.Printf("ics10-debug::VerifyClientConsensusState -> consensusState:%+v ", consensusState)
	log.Printf("ics10-debug::VerifyClientConsensusState -> encodedConsensueState:%+v ", encodedConsensueState)

	// clientPrefixedPath := commitmenttypes.NewMerklePath(host.FullConsensusStatePath(counterpartyClientIdentifier, consensusHeight))
	// path, err := commitmenttypes.ApplyPrefix(prefix, clientPrefixedPath)
	// if err != nil {
	// 	return err
	// }

	// the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	stateProof, provingConsensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// verify state proof
	// err = beefy.VerifyStateProof(stateProof.Proofs, provingConsensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, provingConsensusState.Root, stateProof.Key, encodedConsensueState)
	if err != nil {
		log.Printf("ics10-debug::VerifyClientConsensusState -> VerifyStateProof error :%+v ", err)
		return err
	}

	return nil
}

// VerifyConnectionState verifies a proof of the connection state of the
// specified connection end stored on the target machine.
func (cs ClientState) VerifyConnectionState(
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	prefix exported.Prefix,
	proof []byte,
	connectionID string,
	connectionEnd exported.ConnectionI,
) error {
	log.Printf("ics10-debug::VerifyConnectionState -> height:%+v, prefix:%+v, connectionID:%+v, proof:%+v",
		height, prefix, connectionID, proof)

	stateProof, consensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// connectionPath := commitmenttypes.NewMerklePath(host.ConnectionPath(connectionID))
	// path, err := commitmenttypes.ApplyPrefix(prefix, connectionPath)
	// if err != nil {
	// 	return err
	// }
	// the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	connection, ok := connectionEnd.(connectiontypes.ConnectionEnd)
	if !ok {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidType, "invalid connection type %T", connectionEnd)
	}

	//encode connectionend
	encodedConnEnd, err := gsrpccodec.Encode(connection)
	if err != nil {
		return sdkerrors.Wrap(err, "connection state could not be scale encoded")
	}
	log.Printf("ics10-debug::VerifyConnectionState -> connectionEnd:%+v ", connectionEnd)
	log.Printf("ics10-debug::VerifyClientConsensusState -> encodedConnEnd:%+v ", encodedConnEnd)

	// err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, encodedConnEnd)

	if err != nil {
		log.Printf("ics10-debug::VerifyConnectionState -> VerifyStateProof error :%+v ", err)
		return err
	}

	return nil

}

// VerifyChannelState verifies a proof of the channel state of the specified
// channel end, under the specified port, stored on the target machine.
func (cs ClientState) VerifyChannelState(
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	prefix exported.Prefix,
	proof []byte,
	portID,
	channelID string,
	channel exported.ChannelI,
) error {
	log.Printf("ics10-debug::VerifyChannelState -> height:%+v, prefix:%+v, channelID:%+v, portID:%+v, proof:%+v",
		height, prefix, channelID, portID, proof)

	stateProof, consensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// channelPath := commitmenttypes.NewMerklePath(host.ChannelPath(portID, channelID))
	// path, err := commitmenttypes.ApplyPrefix(prefix, channelPath)
	// if err != nil {
	// 	return err
	// }

	// the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	channelEnd, ok := channel.(channeltypes.Channel)
	if !ok {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidType, "invalid channel type %T", channel)
	}

	//encode channel end
	encodedChanEnd, err := gsrpccodec.Encode(channelEnd)
	if err != nil {
		return sdkerrors.Wrap(err, "channel end could not be scale encoded")
	}

	log.Printf("ics10-debug::VerifyChannelState -> channel:%+v ", channelEnd)
	log.Printf("ics10-debug::VerifyChannelState -> encodedConnEnd:%+v ", encodedChanEnd)

	// err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, encodedChanEnd)
	if err != nil {
		log.Printf("ics10-debug::VerifyChannelState -> VerifyStateProof error :%+v ", err)

		return err
	}

	return nil
}

// VerifyPacketCommitment verifies a proof of an outgoing packet commitment at
// the specified port, specified channel, and specified sequence.
func (cs ClientState) VerifyPacketCommitment(
	ctx sdk.Context,
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	delayTimePeriod uint64,
	delayBlockPeriod uint64,
	prefix exported.Prefix,
	proof []byte,
	portID,
	channelID string,
	sequence uint64,
	commitmentBytes []byte,
) error {
	log.Printf("ics10-debug::VerifyPacketCommitment -> height:%+v, prefix:%+v, channelID:%+v, portID:%+v,sequence:%+v, proof:%+v",
		height, prefix, channelID, portID, sequence, proof)

	stateProof, consensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// check delay period has passed
	if err := verifyDelayPeriodPassed(ctx, store, height, delayTimePeriod, delayBlockPeriod); err != nil {
		return err
	}

	// check delay period has passed
	// if err := verifyDelayPeriodPassed(ctx, store, height, delayTimePeriod, delayBlockPeriod); err != nil {
	// 	return err
	// }

	// commitmentPath := commitmenttypes.NewMerklePath(host.PacketCommitmentPath(portID, channelID, sequence))
	// path, err := commitmenttypes.ApplyPrefix(prefix, commitmentPath)
	// if err != nil {
	// 	return err
	// }

	// the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	// TODO:confirm the commitmentBytes is scale encode?
	encodedCZ, err := gsrpccodec.Encode(commitmentBytes)
	if err != nil {
		return sdkerrors.Wrap(err, "commitmentBytes could not be scale encoded")
	}

	log.Printf("ics10-debug::VerifyPacketCommitment -> commitmentBytes:%+v ", commitmentBytes)
	log.Printf("ics10-debug::VerifyPacketCommitment -> encodedCZ:%+v ", encodedCZ)

	// err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, encodedCZ)

	if err != nil {
		log.Printf("ics10-debug::VerifyPacketCommitment -> VerifyStateProof error :%+v ", err)
		return err
	}

	return nil
}

// VerifyPacketAcknowledgement verifies a proof of an incoming packet
// acknowledgement at the specified port, specified channel, and specified sequence.
func (cs ClientState) VerifyPacketAcknowledgement(
	ctx sdk.Context,
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	delayTimePeriod uint64,
	delayBlockPeriod uint64,
	prefix exported.Prefix,
	proof []byte,
	portID,
	channelID string,
	sequence uint64,
	acknowledgement []byte,
) error {
	log.Printf("ics10-debug::VerifyPacketAcknowledgement -> height:%+v, prefix:%+v, channelID:%+v, portID:%+v, sequence:%+v ",
		height, prefix, channelID, portID, sequence)

	stateProof, consensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// check delay period has passed
	if err := verifyDelayPeriodPassed(ctx, store, height, delayTimePeriod, delayBlockPeriod); err != nil {
		return err
	}

	// ackPath := commitmenttypes.NewMerklePath(host.PacketAcknowledgementPath(portID, channelID, sequence))
	// path, err := commitmenttypes.ApplyPrefix(prefix, ackPath)
	// if err != nil {
	// 	return err
	// }

	// // the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	// acknowledgement
	// TODO: confirm the acknowledgement is scale encode?
	encodedAck, err := gsrpccodec.Encode(acknowledgement)
	if err != nil {
		return sdkerrors.Wrap(err, "acknowledgement could not be scale encoded")
	}

	log.Printf("ics10-debug::VerifyPacketAcknowledgement -> acknowledgement:%+v ", acknowledgement)
	log.Printf("ics10-debug::VerifyPacketAcknowledgement -> encodedAck:%+v ", encodedAck)

	// err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, encodedAck)
	if err != nil {
		log.Printf("ics10-debug::VerifyPacketAcknowledgement -> VerifyStateProof error :%+v ", err)
		return err
	}
	return nil
}

// TODO: confirm process
// VerifyPacketReceiptAbsence verifies a proof of the absence of an
// incoming packet receipt at the specified port, specified channel, and
// specified sequence.
func (cs ClientState) VerifyPacketReceiptAbsence(
	ctx sdk.Context,
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	delayTimePeriod uint64,
	delayBlockPeriod uint64,
	prefix exported.Prefix,
	proof []byte,
	portID,
	channelID string,
	sequence uint64,
) error {
	log.Printf("ics10-debug::VerifyPacketReceiptAbsence -> height:%+v, prefix:%+v, channelID:%+v, portID:%+v, sequence:%+v ",
		height, prefix, channelID, portID, sequence)

	stateProof, _, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}
	// check delay period has passed
	if err := verifyDelayPeriodPassed(ctx, store, height, delayTimePeriod, delayBlockPeriod); err != nil {
		return err
	}

	// receiptPath := commitmenttypes.NewMerklePath(host.PacketReceiptPath(portID, channelID, sequence))
	// _, err = commitmenttypes.ApplyPrefix(prefix, receiptPath)
	// if err != nil {
	// 	return err
	// }
	// path, err := commitmenttypes.ApplyPrefix(prefix, receiptPath)
	// if err != nil {
	// 	return err
	// }

	// // the key is just the raw utf-8 bytes of the prefix + path
	// key := []byte(strings.Join(path.GetKeyPath(), ""))
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "keyPath could not be scale encoded")
	// }

	// TODO: asset stateProof.Key == beefy.CreateStorageKeyPrefix(path,method)

	// build trie proof tree
	// trie, err := trieproof.BuildTrie(stateProof.Proofs, consensusState.Root)
	// if err != nil {
	// 	Logger.Error("LightClient:", "10-Grandpa", "method:",
	// 		"ClientState.VerifyPacketReceiptAbsence()", "failure to build trie proof: ", err)

	// 	return err
	// }
	// // try to find value
	// value := trie.Get(stateProof.Key)
	// if value != nil {
	// 	Logger.Error("LightClient:", "10-Grandpa", "method:",
	// 		"ClientState.VerifyPacketReceiptAbsence()", "found value : ", value)

	// 	return sdkerrors.Wrap(errors.New("VerifyPacketReceiptAbsence error "), "found value")
	// }
	if stateProof.Proofs != nil {
		return sdkerrors.Wrap(errors.New("VerifyPacketReceiptAbsence error "), "state proof is not nil")
	}
	return nil
}

// VerifyNextSequenceRecv verifies a proof of the next sequence number to be
// received of the specified channel at the specified port.
func (cs ClientState) VerifyNextSequenceRecv(
	ctx sdk.Context,
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	height exported.Height,
	delayTimePeriod uint64,
	delayBlockPeriod uint64,
	prefix exported.Prefix,
	proof []byte,
	portID,
	channelID string,
	nextSequenceRecv uint64,
) error {
	log.Printf("ics10-debug::VerifyPacketAcknowledgement -> height:%+v, prefix:%+v, channelID:%+v, portID:%+v, nextSequenceRecv:%+v ",
		height, prefix, channelID, portID, nextSequenceRecv)

	stateProof, consensusState, err := produceVerificationArgs(store, cdc, cs, height, prefix, proof)
	if err != nil {
		return err
	}

	// check delay period has passed
	if err := verifyDelayPeriodPassed(ctx, store, height, delayTimePeriod, delayBlockPeriod); err != nil {
		return err
	}
	// nextSequenceRecvPath := commitmenttypes.NewMerklePath(host.NextSequenceRecvPath(portID, channelID))
	// path, err := commitmenttypes.ApplyPrefix(prefix, nextSequenceRecvPath)
	// if err != nil {
	// 	return err
	// }

	// key, err := scale.Encode(path)
	// if err != nil {
	// 	return sdkerrors.Wrap(err, "next sequence recv path could not be scale encoded")
	// }
	// TODO: confirm the nextSequenceRecv is scale encode or Uint64ToBigEndian?
	// bz := sdk.Uint64ToBigEndian(nextSequenceRecv)
	//encode channel end
	encodedNextSequenceRecv, err := gsrpccodec.Encode(nextSequenceRecv)
	if err != nil {
		return sdkerrors.Wrap(err, "channel end could not be scale encoded")
	}
	log.Printf("ics10-debug::VerifyPacketAcknowledgement -> nextSequenceRecv:%+v ", nextSequenceRecv)
	log.Printf("ics10-debug::VerifyPacketAcknowledgement -> encodedNextSequenceRecv:%+v ", encodedNextSequenceRecv)

	// err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, stateProof.Value)
	err = beefy.VerifyStateProof(stateProof.Proofs, consensusState.Root, stateProof.Key, encodedNextSequenceRecv)

	if err != nil {
		log.Printf("ics10-debug::VerifyNextSequenceRecv -> VerifyStateProof error :%+v ", err)

		return err
	}

	return nil
}

// verifyDelayPeriodPassed will ensure that at least delayTimePeriod amount of time and delayBlockPeriod number of blocks have passed
// since consensus state was submitted before allowing verification to continue.
func verifyDelayPeriodPassed(ctx sdk.Context, store sdk.KVStore, proofHeight exported.Height, delayTimePeriod, delayBlockPeriod uint64) error {
	// check that executing chain's timestamp has passed consensusState's processed time + delay time period
	/*
		processedTime, ok := GetProcessedTime(store, proofHeight)
		if !ok {
			return sdkerrors.Wrapf(ErrProcessedTimeNotFound, "processed time not found for height: %s", proofHeight)
		}
		currentTimestamp := uint64(ctx.BlockTime().UnixNano())
		validTime := processedTime + delayTimePeriod
		// NOTE: delay time period is inclusive, so if currentTimestamp is validTime, then we return no error
		if currentTimestamp < validTime {
			return sdkerrors.Wrapf(ErrDelayPeriodNotPassed, "cannot verify packet until time: %d, current time: %d",
				validTime, currentTimestamp)
		}
		// check that executing chain's height has passed consensusState's processed height + delay block period
		processedHeight, ok := GetProcessedHeight(store, proofHeight)
		if !ok {
			return sdkerrors.Wrapf(ErrProcessedHeightNotFound, "processed height not found for height: %s", proofHeight)
		}
		currentHeight := clienttypes.GetSelfHeight(ctx)
		validHeight := clienttypes.NewHeight(processedHeight.GetRevisionNumber(), processedHeight.GetRevisionHeight()+delayBlockPeriod)
		// NOTE: delay block period is inclusive, so if currentHeight is validHeight, then we return no error
		if currentHeight.LT(validHeight) {
			return sdkerrors.Wrapf(ErrDelayPeriodNotPassed, "cannot verify packet until height: %s, current height: %s",
				validHeight, currentHeight)
		}
	*/
	return nil
}

// produceVerificationArgs perfoms the basic checks on the arguments that are
// shared between the verification functions and returns the unmarshalled
// merkle proof, the consensus state and an error if one occurred.
func produceVerificationArgs(
	store sdk.KVStore,
	cdc codec.BinaryCodec,
	cs ClientState,
	height exported.Height,
	prefix exported.Prefix,
	proof []byte,
) (stateProof StateProof, consensusState *ConsensusState, err error) {
	log.Printf("ics10-debug::produceVerificationArgs -> ClientState:%+v, height:%+v, prefix:%+v", cs, height, prefix)

	if cs.GetLatestHeight().LT(height) {
		return StateProof{}, nil, sdkerrors.Wrapf(
			sdkerrors.ErrInvalidHeight,
			"client state height < proof height (%d < %d), please ensure the client has been updated", cs.GetLatestHeight(), height,
		)
	}
	if prefix == nil {
		return StateProof{}, nil, sdkerrors.Wrap(commitmenttypes.ErrInvalidPrefix, "prefix cannot be empty")
	}

	_, ok := prefix.(*commitmenttypes.MerklePrefix)
	if !ok {
		return StateProof{}, nil, sdkerrors.Wrapf(commitmenttypes.ErrInvalidPrefix, "invalid prefix type %T, expected *MerklePrefix", prefix)
	}

	if proof == nil {
		return StateProof{}, nil, sdkerrors.Wrap(commitmenttypes.ErrInvalidProof, "proof cannot be empty")
	}

	log.Printf("ics10-debug::produceVerificationArgs -> proof:%+v ", proof)

	var merkleProof commitmenttypes.MerkleProof
	if err = cdc.Unmarshal(proof, &merkleProof); err != nil {
		return StateProof{}, nil, sdkerrors.Wrap(commitmenttypes.ErrInvalidProof, "failed to unmarshal proof into commitment merkle proof")
	}

	//just one proof
	commitmentProof := merkleProof.GetProofs()[0]
	log.Printf("ics10-debug::produceVerificationArgs -> commitmentProof:%+v ", commitmentProof)

	switch proofType := commitmentProof.Proof.(type) {
	case *ics23.CommitmentProof_Exist:
		existenceProof := commitmentProof.GetExist()
		if existenceProof == nil {
			return StateProof{}, nil, sdkerrors.Wrap(commitmenttypes.ErrInvalidProof, "existence proof is nil")

		}
		log.Printf("ics10-debug::produceVerificationArgs -> existenceProof.Key:%+v ", existenceProof.Key)
		log.Printf("ics10-debug::produceVerificationArgs -> existenceProof.Value:%+v ", existenceProof.Value)

		// Note: decode proof
		// err = gsrpccodec.Decode(proof, &stateProof)
		err = cdc.Unmarshal(existenceProof.Value, &stateProof)
		if err != nil {
			return StateProof{}, nil, sdkerrors.Wrap(err, "proof couldn't be decoded into StateProof struct")
		}
		log.Printf("ics10-debug::produceVerificationArgs -> decoded stateProof:%+v ", stateProof)

	case *ics23.CommitmentProof_Nonexist:
		nonExistenceProof := commitmentProof.GetNonexist()
		if nonExistenceProof == nil {
			return StateProof{}, nil, sdkerrors.Wrap(commitmenttypes.ErrInvalidProof, "existence proof is nil")

		}
		log.Printf("ics10-debug::produceVerificationArgs -> nonExistenceProof.Key:%+v ", nonExistenceProof.Key)

		// Note: decode proof
		// err = gsrpccodec.Decode(proof, &stateProof)
		// err = cdc.Unmarshal(nonExistenceProof.Value, &stateProof)
		// if err != nil {
		// 	return StateProof{}, nil, sdkerrors.Wrap(err, "proof couldn't be decoded into StateProof struct")
		// }
		// TODO: how to build nonExistenceProof for state proof
		stateProof = StateProof{}

	default:
		return StateProof{}, nil, sdkerrors.Wrapf(commitmenttypes.ErrInvalidProof,
			"expected proof type: %T ", proofType)

	}

	consensusState, err = GetConsensusState(store, cdc, height)
	log.Printf("ics10-debug::produceVerificationArgs -> height:%+v : consensus state:%+v ", height, consensusState)

	if err != nil {
		return StateProof{}, nil, sdkerrors.Wrap(err, "please ensure the proof was constructed against a height that exists on the client")
	}

	return stateProof, consensusState, nil
}
