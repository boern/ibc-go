(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{701:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"fee-distribution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fee-distribution"}},[e._v("#")]),e._v(" Fee distribution")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators.")]),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/middleware/ics29-fee/overview.html"}},[e._v("Fee Middleware")])],1)]),e._v(" "),o("p",[e._v("Packet fees are divided into 3 distinct amounts in order to compensate relayer operators for packet relaying on fee enabled IBC channels.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("RecvFee")]),e._v(": The sum of all packet receive fees distributed to a payee for successful execution of "),o("code",[e._v("MsgRecvPacket")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("AckFee")]),e._v(": The sum of all packet acknowledgement fees distributed to a payee for successful execution of "),o("code",[e._v("MsgAcknowledgement")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("TimeoutFee")]),e._v(": The sum of all packet timeout fees distributed to a payee for successful execution of "),o("code",[e._v("MsgTimeout")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"register-a-counterparty-payee-address-for-forward-relaying"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#register-a-counterparty-payee-address-for-forward-relaying"}},[e._v("#")]),e._v(" Register a counterparty payee address for forward relaying")]),e._v(" "),o("p",[e._v("As mentioned in "),o("RouterLink",{attrs:{to:"/middleware/ics29-fee/overview.html#concepts"}},[e._v("ICS29 Concepts")]),e._v(", the forward relayer describes the actor who performs the submission of "),o("code",[e._v("MsgRecvPacket")]),e._v(" on the destination chain.\nFee distribution for incentivized packet relays takes place on the packet source chain.")],1),e._v(" "),o("blockquote",[o("p",[e._v("Relayer operators are expected to register a counterparty payee address, in order to be compensated accordingly with "),o("code",[e._v("RecvFee")]),e._v("s upon completion of a packet lifecycle.")])]),e._v(" "),o("p",[e._v("The counterparty payee address registered on the destination chain is encoded into the packet acknowledgement and communicated as such to the source chain for fee distribution.\n"),o("strong",[e._v("If a counterparty payee is not registered for the forward relayer on the destination chain, the escrowed fees will be refunded upon fee distribution.")])]),e._v(" "),o("h3",{attrs:{id:"relayer-operator-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relayer-operator-actions"}},[e._v("#")]),e._v(" Relayer operator actions")]),e._v(" "),o("p",[e._v("A transaction must be submitted "),o("strong",[e._v("to the destination chain")]),e._v(" including a "),o("code",[e._v("CounterpartyPayee")]),e._v(" address of an account on the source chain.\nThe transaction must be signed by the "),o("code",[e._v("Relayer")]),e._v(".")]),e._v(" "),o("p",[e._v("Note: If a module account address is used as the "),o("code",[e._v("CounterpartyPayee")]),e._v(" but the module has been set as a blocked address in the "),o("code",[e._v("BankKeeper")]),e._v(", the refunding to the module account will fail. This is because many modules use invariants to compare internal tracking of module account balances against the actual balance of the account stored in the "),o("code",[e._v("BankKeeper")]),e._v(". If a token transfer to the module account occurs without going through this module and updating the account balance of the module on the "),o("code",[e._v("BankKeeper")]),e._v(", then invariants may break and unknown behaviour could occur depending on the module implementation. Therefore, if it is desirable to use a module account that is currently blocked, the module developers should be consulted to gauge to possibility of removing the module account from the blocked list.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZWdpc3RlckNvdW50ZXJwYXJ0eVBheWVlIHN0cnVjdCB7CiAgLy8gdW5pcXVlIHBvcnQgaWRlbnRpZmllcgogIFBvcnRJZCBzdHJpbmcKICAvLyB1bmlxdWUgY2hhbm5lbCBpZGVudGlmaWVyCiAgQ2hhbm5lbElkIHN0cmluZwogIC8vIHRoZSByZWxheWVyIGFkZHJlc3MKICBSZWxheWVyIHN0cmluZwogIC8vIHRoZSBjb3VudGVycGFydHkgcGF5ZWUgYWRkcmVzcwogIENvdW50ZXJwYXJ0eVBheWVlIHN0cmluZwp9Cg=="}}),e._v(" "),o("blockquote",[o("p",[e._v("This message is expected to fail if:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("PortId")]),e._v(" is invalid (see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("ChannelId")]),e._v(" is invalid (see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[o("code",[e._v("Relayer")]),e._v(" is an invalid address (see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/docs/basics/03-accounts.md#addresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Addresses"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[o("code",[e._v("CounterpartyPayee")]),e._v(" is empty.")])])]),e._v(" "),o("p",[e._v("See below for an example CLI command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBpYmMtZmVlIHJlZ2lzdGVyLWNvdW50ZXJwYXJ0eS1wYXllZSB0cmFuc2ZlciBjaGFubmVsLTAgXAogIGNvc21vczFyc3A4MzdhNGt2dGdwMm00dXF6ZGdlMHp6dTZlZnFndWNtMHFkaCBcCiAgb3NtbzF2NXkwdHowMWxseHpmNGMyYWZtbDhzM2F3dWUweW1qdTIyd3h4MiBcCiAgLS1mcm9tIGNvc21vczFyc3A4MzdhNGt2dGdwMm00dXF6ZGdlMHp6dTZlZnFndWNtMHFkaAo="}}),e._v(" "),o("h2",{attrs:{id:"register-an-alternative-payee-address-for-reverse-and-timeout-relaying"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#register-an-alternative-payee-address-for-reverse-and-timeout-relaying"}},[e._v("#")]),e._v(" Register an alternative payee address for reverse and timeout relaying")]),e._v(" "),o("p",[e._v("As mentioned in "),o("RouterLink",{attrs:{to:"/middleware/ics29-fee/overview.html#concepts"}},[e._v("ICS29 Concepts")]),e._v(", the reverse relayer describes the actor who performs the submission of "),o("code",[e._v("MsgAcknowledgement")]),e._v(" on the source chain.\nSimilarly the timeout relayer describes the actor who performs the submission of "),o("code",[e._v("MsgTimeout")]),e._v(" (or "),o("code",[e._v("MsgTimeoutOnClose")]),e._v(") on the source chain.")],1),e._v(" "),o("blockquote",[o("p",[e._v("Relayer operators "),o("strong",[e._v("may choose")]),e._v(" to register an optional payee address, in order to be compensated accordingly with "),o("code",[e._v("AckFee")]),e._v("s and "),o("code",[e._v("TimeoutFee")]),e._v("s upon completion of a packet life cycle.")])]),e._v(" "),o("p",[e._v("If a payee is not registered for the reverse or timeout relayer on the source chain, then fee distribution assumes the default behaviour, where fees are paid out to the relayer account which delivers "),o("code",[e._v("MsgAcknowledgement")]),e._v(" or "),o("code",[e._v("MsgTimeout")]),e._v("/"),o("code",[e._v("MsgTimeoutOnClose")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"relayer-operator-actions-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relayer-operator-actions-2"}},[e._v("#")]),e._v(" Relayer operator actions")]),e._v(" "),o("p",[e._v("A transaction must be submitted "),o("strong",[e._v("to the source chain")]),e._v(" including a "),o("code",[e._v("Payee")]),e._v(" address of an account on the source chain.\nThe transaction must be signed by the "),o("code",[e._v("Relayer")]),e._v(".")]),e._v(" "),o("p",[e._v("Note: If a module account address is used as the "),o("code",[e._v("Payee")]),e._v(" it is recommended to "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/71d7480c923f4227453e8a80f51be01ae7ee845e/testing/simapp/app.go#L659",target:"_blank",rel:"noopener noreferrer"}},[e._v("turn off invariant checks"),o("OutboundLink")],1),e._v(" for that module.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZWdpc3RlclBheWVlIHN0cnVjdCB7CiAgLy8gdW5pcXVlIHBvcnQgaWRlbnRpZmllcgogIFBvcnRJZCBzdHJpbmcKICAvLyB1bmlxdWUgY2hhbm5lbCBpZGVudGlmaWVyCiAgQ2hhbm5lbElkIHN0cmluZwogIC8vIHRoZSByZWxheWVyIGFkZHJlc3MKICBSZWxheWVyIHN0cmluZwogIC8vIHRoZSBwYXllZSBhZGRyZXNzCiAgUGF5ZWUgc3RyaW5nCn0K"}}),e._v(" "),o("blockquote",[o("p",[e._v("This message is expected to fail if:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("PortId")]),e._v(" is invalid (see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("ChannelId")]),e._v(" is invalid (see "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[o("code",[e._v("Relayer")]),e._v(" is an invalid address (see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/docs/basics/03-accounts.md#addresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Addresses"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[o("code",[e._v("Payee")]),e._v(" is an invalid address (see "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/docs/basics/03-accounts.md#addresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Addresses"),o("OutboundLink")],1),e._v(").")])])]),e._v(" "),o("p",[e._v("See below for an example CLI command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBpYmMtZmVlIHJlZ2lzdGVyLXBheWVlIHRyYW5zZmVyIGNoYW5uZWwtMCBcCiAgY29zbW9zMXJzcDgzN2E0a3Z0Z3AybTR1cXpkZ2Uwenp1NmVmcWd1Y20wcWRoIFwKICBjb3Ntb3MxNTNsZjR6bnRxdDMzYTR2MHNtNWN5dHJ4eXFuNzhxN2t6OGo4eDUgXAogIC0tZnJvbSBjb3Ntb3MxcnNwODM3YTRrdnRncDJtNHVxemRnZTB6enU2ZWZxZ3VjbTBxZGgK"}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);