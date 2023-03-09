(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{573:function(e,t,o){e.exports=o.p+"assets/img/auth-module-decision-tree.b2c6303f.png"},712:function(e,t,o){"use strict";o.r(t);var a=o(1),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migrating-from-ibc-go-v5-to-v6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-ibc-go-v5-to-v6"}},[e._v("#")]),e._v(" Migrating from ibc-go v5 to v6")]),e._v(" "),a("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),a("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),a("ul",[a("li",[e._v("Chains")]),e._v(" "),a("li",[e._v("IBC Apps")]),e._v(" "),a("li",[e._v("Relayers")]),e._v(" "),a("li",[e._v("IBC Light Clients")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),a("h2",{attrs:{id:"chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ibc-go/v6")]),e._v(" release introduces a new set of migrations for "),a("code",[e._v("27-interchain-accounts")]),e._v(". Ownership of ICS27 channel capabilities is transferred from ICS27 authentication modules and will now reside with the ICS27 controller submodule moving forward.")]),e._v(" "),a("p",[e._v("For chains which contain a custom authentication module using the ICS27 controller submodule this requires a migration function to be included in the chain upgrade handler. A subsequent migration handler is run automatically, asserting the ownership of ICS27 channel capabilities has been transferred successfully.")]),e._v(" "),a("p",[e._v("This migration is not required for chains which "),a("em",[e._v("do not")]),e._v(" contain a custom authentication module using the ICS27 controller submodule.")]),e._v(" "),a("p",[e._v("This migration facilitates the addition of the ICS27 controller submodule "),a("code",[e._v("MsgServer")]),e._v(" which provides a standardised approach to integrating existing forms of authentication such as "),a("code",[e._v("x/gov")]),e._v(" and "),a("code",[e._v("x/group")]),e._v(" provided by the Cosmos SDK.")]),e._v(" "),a("p",[e._v("For more information please refer to "),a("RouterLink",{attrs:{to:"/architecture/adr-009-v6-ics27-msgserver.html"}},[e._v("ADR 009")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"upgrade-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposal"}},[e._v("#")]),e._v(" Upgrade proposal")]),e._v(" "),a("p",[e._v("Please refer to "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2383",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR #2383"),a("OutboundLink")],1),e._v(" for integrating the ICS27 channel capability migration logic or follow the steps outlined below:")]),e._v(" "),a("ol",[a("li",[e._v("Add the upgrade migration logic to chain distribution. This may be, for example, maintained under a package "),a("code",[e._v("app/upgrades/v6")]),e._v(".")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB2NgoKaW1wb3J0ICgKICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CiAgc3RvcmV0eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3N0b3JlL3R5cGVzJnF1b3Q7CiAgc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL21vZHVsZSZxdW90OwogIGNhcGFiaWxpdHlrZWVwZXIgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2NhcGFiaWxpdHkva2VlcGVyJnF1b3Q7CiAgdXBncmFkZXR5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC91cGdyYWRlL3R5cGVzJnF1b3Q7CgogIHY2ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2liYy1nby92Ni9tb2R1bGVzL2FwcHMvMjctaW50ZXJjaGFpbi1hY2NvdW50cy9jb250cm9sbGVyL21pZ3JhdGlvbnMvdjYmcXVvdDsKKQoKY29uc3QgKAogIFVwZ3JhZGVOYW1lID0gJnF1b3Q7djYmcXVvdDsKKQoKZnVuYyBDcmVhdGVVcGdyYWRlSGFuZGxlcigKICBtbSAqbW9kdWxlLk1hbmFnZXIsCiAgY29uZmlndXJhdG9yIG1vZHVsZS5Db25maWd1cmF0b3IsCiAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLAogIGNhcGFiaWxpdHlTdG9yZUtleSAqc3RvcmV0eXBlcy5LVlN0b3JlS2V5LAogIGNhcGFiaWxpdHlLZWVwZXIgKmNhcGFiaWxpdHlrZWVwZXIuS2VlcGVyLAogIG1vZHVsZU5hbWUgc3RyaW5nLAopIHVwZ3JhZGV0eXBlcy5VcGdyYWRlSGFuZGxlciB7CiAgcmV0dXJuIGZ1bmMoY3R4IHNkay5Db250ZXh0LCBfIHVwZ3JhZGV0eXBlcy5QbGFuLCB2bSBtb2R1bGUuVmVyc2lvbk1hcCkgKG1vZHVsZS5WZXJzaW9uTWFwLCBlcnJvcikgewogICAgaWYgZXJyIDo9IHY2Lk1pZ3JhdGVJQ1MyN0NoYW5uZWxDYXBhYmlsaXR5KGN0eCwgY2RjLCBjYXBhYmlsaXR5U3RvcmVLZXksIGNhcGFiaWxpdHlLZWVwZXIsIG1vZHVsZU5hbWUpOyBlcnIgIT0gbmlsIHsKICAgICAgcmV0dXJuIG5pbCwgZXJyCiAgICB9CgogICAgcmV0dXJuIG1tLlJ1bk1pZ3JhdGlvbnMoY3R4LCBjb25maWd1cmF0b3IsIHZtKQogIH0KfQo="}}),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Set the upgrade handler in "),a("code",[e._v("app.go")]),e._v(". The "),a("code",[e._v("moduleName")]),e._v(" parameter refers to the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" name. This is the name provided upon instantiation in "),a("code",[e._v("app.go")]),e._v(" via the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.1/x/capability/keeper/keeper.go#L70",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("x/capability")]),e._v(" keeper "),a("code",[e._v("ScopeToModule(moduleName string)")]),a("OutboundLink")],1),e._v(" method. "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.0.0/testing/simapp/app.go#L304",target:"_blank",rel:"noopener noreferrer"}},[e._v("See here for an example in "),a("code",[e._v("simapp")]),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLlVwZ3JhZGVLZWVwZXIuU2V0VXBncmFkZUhhbmRsZXIoCiAgdjYuVXBncmFkZU5hbWUsCiAgdjYuQ3JlYXRlVXBncmFkZUhhbmRsZXIoCiAgICBhcHAubW0sIAogICAgYXBwLmNvbmZpZ3VyYXRvciwgCiAgICBhcHAuYXBwQ29kZWMsIAogICAgYXBwLmtleXNbY2FwYWJpbGl0eXR5cGVzLk1vZHVsZU5hbWVdLCAKICAgIGFwcC5DYXBhYmlsaXR5S2VlcGVyLCAKICAgICZndDsmZ3Q7Jmd0OyZndDsgbW9kdWxlTmFtZSAmbHQ7Jmx0OyZsdDsmbHQ7LAogICksCikK"}}),e._v(" "),a("h2",{attrs:{id:"ibc-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),a("h3",{attrs:{id:"ics27-interchain-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),a("h4",{attrs:{id:"controller-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-apis"}},[e._v("#")]),e._v(" Controller APIs")]),e._v(" "),a("p",[e._v("In previous releases of ibc-go, chain developers integrating the ICS27 interchain accounts controller functionality were expected to create a custom "),a("code",[e._v("Base Application")]),e._v(" referred to as an authentication module, see the section "),a("RouterLink",{attrs:{to:"/apps/interchain-accounts/auth-modules.html"}},[e._v("Building an authentication module")]),e._v(" from the documentation.")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Base Application")]),e._v(" was intended to be composed with the ICS27 controller submodule "),a("code",[e._v("Keeper")]),e._v(" and faciliate many forms of message authentication depending on a chain's particular use case.")]),e._v(" "),a("p",[e._v("Prior to ibc-go v6 the controller submodule exposed only these two functions (to which we will refer as the legacy APIs):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.0.0/modules/apps/27-interchain-accounts/controller/keeper/account.go#L19",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("RegisterInterchainAccount")]),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.0.0/modules/apps/27-interchain-accounts/controller/keeper/relay.go#L18",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("SendTx")]),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("However, these functions have now been deprecated in favour of the new controller submodule "),a("code",[e._v("MsgServer")]),e._v(" and will be removed in later releases.")]),e._v(" "),a("p",[e._v("Both APIs remain functional and maintain backwards compatibility in ibc-go v6, however consumers of these APIs are now recommended to follow the message passing paradigm outlined in Cosmos SDK "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-031-msg-service.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 031"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-033-protobuf-inter-module-comm.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 033"),a("OutboundLink")],1),e._v(". This is facilitated by the Cosmos SDK "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/baseapp/msg_service_router.go#L17",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("MsgServiceRouter")]),a("OutboundLink")],1),e._v(" and chain developers creating custom application logic can now omit the ICS27 controller submodule "),a("code",[e._v("Keeper")]),e._v(" from their module and instead depend on message routing.")]),e._v(" "),a("p",[e._v("Depending on the use case, developers of custom authentication modules face one of three scenarios:")]),e._v(" "),a("p",[a("img",{attrs:{src:o(573),alt:"AuthModuleDecisionTree"}})]),e._v(" "),a("p",[a("strong",[e._v("My authentication module needs to access IBC packet callbacks")])]),e._v(" "),a("p",[e._v("Application developers that wish to consume IBC packet callbacks and react upon packet acknowledgements "),a("strong",[e._v("must")]),e._v(" continue using the controller submodule's legacy APIs. The authentication modules will not need a "),a("code",[e._v("ScopedKeeper")]),e._v(" anymore, though, because the channel capability will be claimed by the controller submodule. For example, given an Interchain Accounts authentication module keeper "),a("code",[e._v("ICAAuthKeeper")]),e._v(", the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" ("),a("code",[e._v("scopedICAAuthKeeper")]),e._v(") is not needed anymore and can be removed for the argument list of the keeper constructor function, as shown here:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"YXBwLklDQUF1dGhLZWVwZXIgPSBpY2FhdXRoa2VlcGVyLk5ld0tlZXBlcigKICBhcHBDb2RlYywgCiAga2V5c1tpY2FhdXRodHlwZXMuU3RvcmVLZXldLCAKICBhcHAuSUNBQ29udHJvbGxlcktlZXBlciwgCi0gc2NvcGVkSUNBQXV0aEtlZXBlciwKKQo="}}),e._v(" "),a("p",[e._v("Please note that the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" name is still needed as part of the channel capability migration described in section "),a("a",{attrs:{href:"#upgrade-proposal"}},[e._v("Upgrade proposal")]),e._v(" above. Therefore the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" cannot be completely removed from the chain code until the migration has run.")]),e._v(" "),a("p",[e._v("In the future, the use of the legacy APIs for accessing packet callbacks will be replaced by IBC Actor Callbacks (see "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1976",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 008"),a("OutboundLink")],1),e._v(" for more details) and it will also be possible to access them with the "),a("code",[e._v("MsgServiceRouter")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("My authentication module does not need access to IBC packet callbacks")])]),e._v(" "),a("p",[e._v("The authentication module can migrate from using the legacy APIs and it can be composed instead with the "),a("code",[e._v("MsgServiceRouter")]),e._v(", so that the authentication module is able to pass messages to the controller submodule's "),a("code",[e._v("MsgServer")]),e._v(" to register interchain accounts and send packets to the interchain account. For example, given an Interchain Accounts authentication module keeper "),a("code",[e._v("ICAAuthKeeper")]),e._v(", the ICS27 controller submodule keeper ("),a("code",[e._v("ICAControllerKeeper")]),e._v(") and authentication module scoped keeper ("),a("code",[e._v("scopedICAAuthKeeper")]),e._v(") are not needed anymore and can be replaced with the "),a("code",[e._v("MsgServiceRouter")]),e._v(", as shown here:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"YXBwLklDQUF1dGhLZWVwZXIgPSBpY2FhdXRoa2VlcGVyLk5ld0tlZXBlcigKICBhcHBDb2RlYywgCiAga2V5c1tpY2FhdXRodHlwZXMuU3RvcmVLZXldLCAKLSBhcHAuSUNBQ29udHJvbGxlcktlZXBlciwgCi0gc2NvcGVkSUNBQXV0aEtlZXBlciwKKyBhcHAuTXNnU2VydmljZVJvdXRlcigpLAopCg=="}}),e._v(" "),a("p",[e._v("In your authentication module you can route messages to the controller submodule's "),a("code",[e._v("MsgServer")]),e._v(" instead of using the legacy APIs. For example, for registering an interchain account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"LSBpZiBlcnIgOj0ga2VlcGVyLmljYUNvbnRyb2xsZXJLZWVwZXIuUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCgKLSAgIGN0eCwgCi0gICBjb25uZWN0aW9uSUQsIAotICAgb3duZXIuU3RyaW5nKCksIAotICAgdmVyc2lvbiwKLSApOyBlcnIgIT0gbmlsIHsKLSAgIHJldHVybiBlcnIKLSB9CisgbXNnIDo9IGNvbnRyb2xsZXJ0eXBlcy5OZXdNc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50KAorICAgY29ubmVjdGlvbklELCAKKyAgIG93bmVyLlN0cmluZygpLCAKKyAgIHZlcnNpb24sCisgKQorIGhhbmRsZXIgOj0ga2VlcGVyLm1zZ1JvdXRlci5IYW5kbGVyKG1zZykKKyByZXMsIGVyciA6PSBoYW5kbGVyKGN0eCwgbXNnKQorIGlmIGVyciAhPSBuaWwgeworICAgcmV0dXJuIGVycgorIH0K"}}),e._v(" "),a("p",[e._v("where "),a("code",[e._v("controllertypes")]),e._v(" is an import alias for "),a("code",[e._v('"github.com/cosmos/ibc-go/v6/modules/apps/27-interchain-accounts/controller/types"')]),e._v(".")]),e._v(" "),a("p",[e._v("In addition, in this use case the authentication module does not need to implement the "),a("code",[e._v("IBCModule")]),e._v(" interface anymore.")]),e._v(" "),a("p",[a("strong",[e._v("I do not need a custom authentication module anymore")])]),e._v(" "),a("p",[e._v("If your authentication module does not have any extra functionality compared to the default authentication module added in ibc-go v6 (the "),a("code",[e._v("MsgServer")]),e._v("), or if you can use a generic authentication module, such as the "),a("code",[e._v("x/auth")]),e._v(", "),a("code",[e._v("x/gov")]),e._v(" or "),a("code",[e._v("x/group")]),e._v(" modules from the Cosmos SDK (v0.46 and later), then you can remove your authentication module completely and use instead the gRPC endpoints of the "),a("code",[e._v("MsgServer")]),e._v(" or the CLI added in ibc-go v6.")]),e._v(" "),a("p",[e._v("Please remember that the authentication module's "),a("code",[e._v("ScopedKeeper")]),e._v(" name is still needed as part of the channel capability migration described in section "),a("a",{attrs:{href:"#upgrade-proposal"}},[e._v("Upgrade proposal")]),e._v(" above.")]),e._v(" "),a("h4",{attrs:{id:"host-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-params"}},[e._v("#")]),e._v(" Host params")]),e._v(" "),a("p",[e._v("The ICS27 host submodule default params have been updated to include the "),a("code",[e._v("AllowAllHostMsgs")]),e._v(" wildcard "),a("code",[e._v("*")]),e._v(".\nThis enables execution of any "),a("code",[e._v("sdk.Msg")]),e._v(" type for ICS27 registered on the host chain "),a("code",[e._v("InterfaceRegistry")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gQWxsb3dBbGxIb3N0TXNncyBob2xkcyB0aGUgc3RyaW5nIGtleSB0aGF0IGFsbG93cyBhbGwgbWVzc2FnZSB0eXBlcyBvbiBpbnRlcmNoYWluIGFjY291bnRzIGhvc3QgbW9kdWxlCmNvbnN0IEFsbG93QWxsSG9zdE1zZ3MgPSAmcXVvdDsqJnF1b3Q7CgouLi4KCi8vIERlZmF1bHRQYXJhbXMgaXMgdGhlIGRlZmF1bHQgcGFyYW1ldGVyIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBob3N0IHN1Ym1vZHVsZQpmdW5jIERlZmF1bHRQYXJhbXMoKSBQYXJhbXMgewotICByZXR1cm4gTmV3UGFyYW1zKERlZmF1bHRIb3N0RW5hYmxlZCwgbmlsKQorICByZXR1cm4gTmV3UGFyYW1zKERlZmF1bHRIb3N0RW5hYmxlZCwgW11zdHJpbmd7QWxsb3dBbGxIb3N0TXNnc30pCn0K"}}),e._v(" "),a("h4",{attrs:{id:"api-breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-breaking-changes"}},[e._v("#")]),e._v(" API breaking changes")]),e._v(" "),a("p",[a("code",[e._v("SerializeCosmosTx")]),e._v(" takes in a "),a("code",[e._v("[]proto.Message")]),e._v(" instead of "),a("code",[e._v("[]sdk.Message")]),e._v(". This allows for the serialization of proto messages without requiring the fulfillment of the "),a("code",[e._v("sdk.Msg")]),e._v(" interface.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("27-interchain-accounts")]),e._v(" genesis types have been moved to their own package: "),a("code",[e._v("modules/apps/27-interchain-acccounts/genesis/types")]),e._v(".\nThis change facilitates the addition of the ICS27 controller submodule "),a("code",[e._v("MsgServer")]),e._v(" and avoids cyclic imports. This should have minimal disruption to chain developers integrating "),a("code",[e._v("27-interchain-accounts")]),e._v(".")]),e._v(" "),a("p",[e._v("The ICS27 host submodule "),a("code",[e._v("NewKeeper")]),e._v(" function in "),a("code",[e._v("modules/apps/27-interchain-acccounts/host/keeper")]),e._v(" now includes an additional parameter of type "),a("code",[e._v("ICS4Wrapper")]),e._v(".\nThis provides the host submodule with the ability to correctly unwrap channel versions in the event of a channel reopening handshake.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCiAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLCBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAotIGNoYW5uZWxLZWVwZXIgaWNhdHlwZXMuQ2hhbm5lbEtlZXBlciwgcG9ydEtlZXBlciBpY2F0eXBlcy5Qb3J0S2VlcGVyLAorIGljczRXcmFwcGVyIGljYXR5cGVzLklDUzRXcmFwcGVyLCBjaGFubmVsS2VlcGVyIGljYXR5cGVzLkNoYW5uZWxLZWVwZXIsIHBvcnRLZWVwZXIgaWNhdHlwZXMuUG9ydEtlZXBlciwKICBhY2NvdW50S2VlcGVyIGljYXR5cGVzLkFjY291bnRLZWVwZXIsIHNjb3BlZEtlZXBlciBpY2F0eXBlcy5TY29wZWRLZWVwZXIsIG1zZ1JvdXRlciBpY2F0eXBlcy5NZXNzYWdlUm91dGVyLAopIEtlZXBlcgo="}}),e._v(" "),a("h3",{attrs:{id:"ics29-newkeeper-api-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics29-newkeeper-api-change"}},[e._v("#")]),e._v(" ICS29 - "),a("code",[e._v("NewKeeper")]),e._v(" API change")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("NewKeeper")]),e._v(" function of ICS29 has been updated to remove the "),a("code",[e._v("paramSpace")]),e._v(" parameter as it was unused.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"ZnVuYyBOZXdLZWVwZXIoCi0gY2RjIGNvZGVjLkJpbmFyeUNvZGVjLCBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwgcGFyYW1TcGFjZSBwYXJhbXR5cGVzLlN1YnNwYWNlLAotIGljczRXcmFwcGVyIHR5cGVzLklDUzRXcmFwcGVyLCBjaGFubmVsS2VlcGVyIHR5cGVzLkNoYW5uZWxLZWVwZXIsIHBvcnRLZWVwZXIgdHlwZXMuUG9ydEtlZXBlciwgYXV0aEtlZXBlciB0eXBlcy5BY2NvdW50S2VlcGVyLCBiYW5rS2VlcGVyIHR5cGVzLkJhbmtLZWVwZXIsCisgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLCBrZXkgc3RvcmV0eXBlcy5TdG9yZUtleSwKKyBpY3M0V3JhcHBlciB0eXBlcy5JQ1M0V3JhcHBlciwgY2hhbm5lbEtlZXBlciB0eXBlcy5DaGFubmVsS2VlcGVyLAorIHBvcnRLZWVwZXIgdHlwZXMuUG9ydEtlZXBlciwgYXV0aEtlZXBlciB0eXBlcy5BY2NvdW50S2VlcGVyLCBiYW5rS2VlcGVyIHR5cGVzLkJhbmtLZWVwZXIsCikgS2VlcGVyIHsK"}}),e._v(" "),a("h3",{attrs:{id:"ics20-sendtransfer-is-no-longer-exported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics20-sendtransfer-is-no-longer-exported"}},[e._v("#")]),e._v(" ICS20 - "),a("code",[e._v("SendTransfer")]),e._v(" is no longer exported")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SendTransfer")]),e._v(" function of ICS20 has been removed. IBC transfers should now be initiated with "),a("code",[e._v("MsgTransfer")]),e._v(" and routed to the ICS20 "),a("code",[e._v("MsgServer")]),e._v(".")]),e._v(" "),a("p",[e._v("See below for example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgaGFuZGxlciA6PSBtc2dSb3V0ZXIuSGFuZGxlcihtc2dUcmFuc2Zlcik7IGhhbmRsZXIgIT0gbmlsIHsKICBpZiBlcnIgOj0gbXNnVHJhbnNmZXIuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBuaWwsIGVycgogIH0KCiAgcmVzLCBlcnIgOj0gaGFuZGxlcihjdHgsIG1zZ1RyYW5zZmVyKQogIGlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuIG5pbCwgZXJyCiAgfQp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"ics04-sendpacket-api-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics04-sendpacket-api-change"}},[e._v("#")]),e._v(" ICS04 - "),a("code",[e._v("SendPacket")]),e._v(" API change")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SendPacket")]),e._v(" API has been simplified:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gU2VuZFBhY2tldCBpcyBjYWxsZWQgYnkgYSBtb2R1bGUgaW4gb3JkZXIgdG8gc2VuZCBhbiBJQkMgcGFja2V0IG9uIGEgY2hhbm5lbApmdW5jIChrIEtlZXBlcikgU2VuZFBhY2tldCgKICBjdHggc2RrLkNvbnRleHQsCiAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCi0gcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCi0pIGVycm9yIHsKKyBzb3VyY2VQb3J0IHN0cmluZywKKyBzb3VyY2VDaGFubmVsIHN0cmluZywKKyB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKKyB0aW1lb3V0VGltZXN0YW1wIHVpbnQ2NCwKKyBkYXRhIFtdYnl0ZSwKKykgKHVpbnQ2NCwgZXJyb3IpIHsK"}}),e._v(" "),a("p",[e._v("Callers no longer need to pass in a pre-constructed packet.\nThe destination port/channel identifiers and the packet sequence will be determined by core IBC.\n"),a("code",[e._v("SendPacket")]),e._v(" will return the packet sequence.")]),e._v(" "),a("h3",{attrs:{id:"ibc-testing-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-testing-package"}},[e._v("#")]),e._v(" IBC testing package")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SendPacket")]),e._v(" API has been simplified:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff",base64:"Ly8gU2VuZFBhY2tldCBpcyBjYWxsZWQgYnkgYSBtb2R1bGUgaW4gb3JkZXIgdG8gc2VuZCBhbiBJQkMgcGFja2V0IG9uIGEgY2hhbm5lbApmdW5jIChrIEtlZXBlcikgU2VuZFBhY2tldCgKICBjdHggc2RrLkNvbnRleHQsCiAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCi0gcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCi0pIGVycm9yIHsKKyBzb3VyY2VQb3J0IHN0cmluZywKKyBzb3VyY2VDaGFubmVsIHN0cmluZywKKyB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKKyB0aW1lb3V0VGltZXN0YW1wIHVpbnQ2NCwKKyBkYXRhIFtdYnl0ZSwKKykgKHVpbnQ2NCwgZXJyb3IpIHsK"}}),e._v(" "),a("p",[e._v("Callers no longer need to pass in a pre-constructed packet. "),a("code",[e._v("SendPacket")]),e._v(" will return the packet sequence.")]),e._v(" "),a("h2",{attrs:{id:"relayers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),a("h2",{attrs:{id:"ibc-light-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-light-clients"}},[e._v("#")]),e._v(" IBC Light Clients")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);