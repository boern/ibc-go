(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{663:function(e,a,t){"use strict";t.r(a);var n=t(1),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ibc-applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-applications"}},[e._v("#")]),e._v(" IBC Applications")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn how to configure your application to use IBC and send data packets to other chains.")]),e._v(" "),t("p",[e._v("This document serves as a guide for developers who want to write their own Inter-blockchain\nCommunication Protocol (IBC) applications for custom use cases.")]),e._v(" "),t("p",[e._v("Due to the modular design of the IBC protocol, IBC\napplication developers do not need to concern themselves with the low-level details of clients,\nconnections, and proof verification. Nevertheless a brief explanation of the lower levels of the\nstack is given so that application developers may have a high-level understanding of the IBC\nprotocol. Then the document goes into detail on the abstraction layer most relevant for application\ndevelopers (channels and ports), and describes how to define your own custom packets, and\n"),t("code",[e._v("IBCModule")]),e._v(" callbacks.")]),e._v(" "),t("p",[e._v("To have your module interact over IBC you must: bind to a port(s), define your own packet data and acknowledgement structs as well as how to encode/decode them, and implement the\n"),t("code",[e._v("IBCModule")]),e._v(" interface. Below is a more detailed explanation of how to write an IBC application\nmodule correctly.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisites-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[e._v("#")]),e._v(" Pre-requisites Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")]),e._v(")")],1),e._v(" "),t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC default integration")])],1)]),e._v(" "),t("h2",{attrs:{id:"create-a-custom-ibc-application-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-ibc-application-module"}},[e._v("#")]),e._v(" Create a custom IBC application module")]),e._v(" "),t("h3",{attrs:{id:"implement-ibcmodule-interface-and-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implement-ibcmodule-interface-and-callbacks"}},[e._v("#")]),e._v(" Implement "),t("code",[e._v("IBCModule")]),e._v(" Interface and callbacks")]),e._v(" "),t("p",[e._v("The Cosmos SDK expects all IBC modules to implement the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/05-port/types/module.go",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("IBCModule")]),e._v("\ninterface"),t("OutboundLink")],1),e._v(". This\ninterface contains all of the callbacks IBC expects modules to implement. This section will describe\nthe callbacks that are called during channel handshake execution.")]),e._v(" "),t("p",[e._v("Here are the channel handshake callbacks that modules are expected to implement:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ09wZW5Jbml0CmZ1bmMgKGsgS2VlcGVyKSBPbkNoYW5PcGVuSW5pdChjdHggc2RrLkNvbnRleHQsCiAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogIHBvcnRJRCBzdHJpbmcsCiAgY2hhbm5lbElEIHN0cmluZywKICBjaGFubmVsQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICBjb3VudGVycGFydHkgY2hhbm5lbHR5cGVzLkNvdW50ZXJwYXJ0eSwKICB2ZXJzaW9uIHN0cmluZywKKSBlcnJvciB7CiAgLy8gT3BlbkluaXQgbXVzdCBjbGFpbSB0aGUgY2hhbm5lbENhcGFiaWxpdHkgdGhhdCBJQkMgcGFzc2VzIGludG8gdGhlIGNhbGxiYWNrCiAgaWYgZXJyIDo9IGsuQ2xhaW1DYXBhYmlsaXR5KGN0eCwgY2hhbkNhcCwgaG9zdC5DaGFubmVsQ2FwYWJpbGl0eVBhdGgocG9ydElELCBjaGFubmVsSUQpKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCiB9CgogIC8vIC4uLiBkbyBjdXN0b20gaW5pdGlhbGl6YXRpb24gbG9naWMKCiAgLy8gVXNlIGFib3ZlIGFyZ3VtZW50cyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBhYm9ydCBoYW5kc2hha2UKICAvLyBFeGFtcGxlczogQWJvcnQgaWYgb3JkZXIgPT0gVU5PUkRFUkVELAogIC8vIEFib3J0IGlmIHZlcnNpb24gaXMgdW5zdXBwb3J0ZWQKICBlcnIgOj0gY2hlY2tBcmd1bWVudHMoYXJncykKICByZXR1cm4gZXJyCn0KCi8vIENhbGxlZCBieSBJQkMgSGFuZGxlciBvbiBNc2dPcGVuVHJ5Ck9uQ2hhbk9wZW5UcnkoCiAgY3R4IHNkay5Db250ZXh0LAogIG9yZGVyIGNoYW5uZWx0eXBlcy5PcmRlciwKICBjb25uZWN0aW9uSG9wcyBbXXN0cmluZywKICBwb3J0SUQsCiAgY2hhbm5lbElEIHN0cmluZywKICBjaGFubmVsQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICBjb3VudGVycGFydHkgY2hhbm5lbHR5cGVzLkNvdW50ZXJwYXJ0eSwKICBjb3VudGVycGFydHlWZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogIC8vIE9wZW5UcnkgbXVzdCBjbGFpbSB0aGUgY2hhbm5lbENhcGFiaWxpdHkgdGhhdCBJQkMgcGFzc2VzIGludG8gdGhlIGNhbGxiYWNrCiAgaWYgZXJyIDo9IGsuc2NvcGVkS2VlcGVyLkNsYWltQ2FwYWJpbGl0eShjdHgsIGNoYW5DYXAsIGhvc3QuQ2hhbm5lbENhcGFiaWxpdHlQYXRoKHBvcnRJRCwgY2hhbm5lbElEKSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgogIH0KICAKICAvLyAuLi4gZG8gY3VzdG9tIGluaXRpYWxpemF0aW9uIGxvZ2ljCgogIC8vIFVzZSBhYm92ZSBhcmd1bWVudHMgdG8gZGV0ZXJtaW5lIGlmIHdlIHdhbnQgdG8gYWJvcnQgaGFuZHNoYWtlCiAgaWYgZXJyIDo9IGNoZWNrQXJndW1lbnRzKGFyZ3MpOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBlcnIKICB9CgogIC8vIENvbnN0cnVjdCBhcHBsaWNhdGlvbiB2ZXJzaW9uIAogIC8vIElCQyBhcHBsaWNhdGlvbnMgbXVzdCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGFwcGxpY2F0aW9uIHZlcnNpb24KICAvLyBUaGlzIGNhbiBiZSBhIHNpbXBsZSBzdHJpbmcgb3IgaXQgY2FuIGJlIGEgY29tcGxleCB2ZXJzaW9uIGNvbnN0cnVjdGVkCiAgLy8gZnJvbSB0aGUgY291bnRlcnBhcnR5VmVyc2lvbiBhbmQgb3RoZXIgYXJndW1lbnRzLiAKICAvLyBUaGUgdmVyc2lvbiByZXR1cm5lZCB3aWxsIGJlIHRoZSBjaGFubmVsIHZlcnNpb24gdXNlZCBmb3IgYm90aCBjaGFubmVsIGVuZHMuIAogIGFwcFZlcnNpb24gOj0gbmVnb3RpYXRlQXBwVmVyc2lvbihjb3VudGVycGFydHlWZXJzaW9uLCBhcmdzKQogIAogIHJldHVybiBhcHBWZXJzaW9uLCBuaWwKfQoKLy8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ09wZW5BY2sKT25DaGFuT3BlbkFjaygKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCiAgY291bnRlcnBhcnR5VmVyc2lvbiBzdHJpbmcsCikgZXJyb3IgewogIC8vIC4uLiBkbyBjdXN0b20gaW5pdGlhbGl6YXRpb24gbG9naWMKCiAgLy8gVXNlIGFib3ZlIGFyZ3VtZW50cyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBhYm9ydCBoYW5kc2hha2UKICBlcnIgOj0gY2hlY2tBcmd1bWVudHMoYXJncykKICByZXR1cm4gZXJyCn0KCi8vIENhbGxlZCBieSBJQkMgSGFuZGxlciBvbiBNc2dPcGVuQ29uZmlybQpPbkNoYW5PcGVuQ29uZmlybSgKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogIC8vIC4uLiBkbyBjdXN0b20gaW5pdGlhbGl6YXRpb24gbG9naWMKCiAgLy8gVXNlIGFib3ZlIGFyZ3VtZW50cyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBhYm9ydCBoYW5kc2hha2UKICBlcnIgOj0gY2hlY2tBcmd1bWVudHMoYXJncykKICByZXR1cm4gZXJyCn0K"}}),e._v(" "),t("p",[e._v("The channel closing handshake will also invoke module callbacks that can return errors to abort the\nclosing handshake. Closing a channel is a 2-step handshake, the initiating chain calls\n"),t("code",[e._v("ChanCloseInit")]),e._v(" and the finalizing chain calls "),t("code",[e._v("ChanCloseConfirm")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ0Nsb3NlSW5pdApPbkNoYW5DbG9zZUluaXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICAvLyAuLi4gZG8gY3VzdG9tIGZpbmFsaXphdGlvbiBsb2dpYwoKICAvLyBVc2UgYWJvdmUgYXJndW1lbnRzIHRvIGRldGVybWluZSBpZiB3ZSB3YW50IHRvIGFib3J0IGhhbmRzaGFrZQogIGVyciA6PSBjaGVja0FyZ3VtZW50cyhhcmdzKQogIHJldHVybiBlcnIKfQoKLy8gQ2FsbGVkIGJ5IElCQyBIYW5kbGVyIG9uIE1zZ0Nsb3NlQ29uZmlybQpPbkNoYW5DbG9zZUNvbmZpcm0oCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICAvLyAuLi4gZG8gY3VzdG9tIGZpbmFsaXphdGlvbiBsb2dpYwoKICAvLyBVc2UgYWJvdmUgYXJndW1lbnRzIHRvIGRldGVybWluZSBpZiB3ZSB3YW50IHRvIGFib3J0IGhhbmRzaGFrZQogIGVyciA6PSBjaGVja0FyZ3VtZW50cyhhcmdzKQogIHJldHVybiBlcnIKfQo="}}),e._v(" "),t("h4",{attrs:{id:"channel-handshake-version-negotiation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channel-handshake-version-negotiation"}},[e._v("#")]),e._v(" Channel Handshake Version Negotiation")]),e._v(" "),t("p",[e._v("Application modules are expected to verify versioning used during the channel handshake procedure.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ChanOpenInit")]),e._v(" callback should verify that the "),t("code",[e._v("MsgChanOpenInit.Version")]),e._v(" is valid")]),e._v(" "),t("li",[t("code",[e._v("ChanOpenTry")]),e._v(" callback should construct the application version used for both channel ends. If no application version can be constructed, it must return an error.")]),e._v(" "),t("li",[t("code",[e._v("ChanOpenAck")]),e._v(" callback should verify that the "),t("code",[e._v("MsgChanOpenAck.CounterpartyVersion")]),e._v(" is valid and supported.")])]),e._v(" "),t("p",[e._v("IBC expects application modules to perform application version negotiation in "),t("code",[e._v("OnChanOpenTry")]),e._v(". The negotiated version\nmust be returned to core IBC. If the version cannot be negotiated, an error should be returned.")]),e._v(" "),t("p",[e._v("Versions must be strings but can implement any versioning structure. If your application plans to\nhave linear releases then semantic versioning is recommended. If your application plans to release\nvarious features in between major releases then it is advised to use the same versioning scheme\nas IBC. This versioning scheme specifies a version identifier and compatible feature set with\nthat identifier. Valid version selection includes selecting a compatible version identifier with\na subset of features supported by your application for that version. The struct is used for this\nscheme can be found in "),t("code",[e._v("03-connection/types")]),e._v(".")]),e._v(" "),t("p",[e._v("Since the version type is a string, applications have the ability to do simple version verification\nvia string matching or they can use the already impelemented versioning system and pass the proto\nencoded version into each handhshake call as necessary.")]),e._v(" "),t("p",[e._v("ICS20 currently implements basic string matching with a single supported version.")]),e._v(" "),t("h3",{attrs:{id:"bind-ports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind-ports"}},[e._v("#")]),e._v(" Bind Ports")]),e._v(" "),t("p",[e._v("Currently, ports must be bound on app initialization. A module may bind to ports in "),t("code",[e._v("InitGenesis")]),e._v("\nlike so:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJbml0R2VuZXNpcyhjdHggc2RrLkNvbnRleHQsIGtlZXBlciBrZWVwZXIuS2VlcGVyLCBzdGF0ZSB0eXBlcy5HZW5lc2lzU3RhdGUpIHsKICAvLyAuLi4gb3RoZXIgaW5pdGlhbGl6YXRpb24gbG9naWMKCiAgLy8gT25seSB0cnkgdG8gYmluZCB0byBwb3J0IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGJvdW5kLCBzaW5jZSB3ZSBtYXkgYWxyZWFkeSBvd24KICAvLyBwb3J0IGNhcGFiaWxpdHkgZnJvbSBjYXBhYmlsaXR5IEluaXRHZW5lc2lzCiAgaWYgIWlzQm91bmQoY3R4LCBzdGF0ZS5Qb3J0SUQpIHsKICAgIC8vIG1vZHVsZSBiaW5kcyB0byBkZXNpcmVkIHBvcnRzIG9uIEluaXRDaGFpbgogICAgLy8gYW5kIGNsYWltcyByZXR1cm5lZCBjYXBhYmlsaXRpZXMKICAgIGNhcDEgOj0ga2VlcGVyLklCQ1BvcnRLZWVwZXIuQmluZFBvcnQoY3R4LCBwb3J0MSkKICAgIGNhcDIgOj0ga2VlcGVyLklCQ1BvcnRLZWVwZXIuQmluZFBvcnQoY3R4LCBwb3J0MikKICAgIGNhcDMgOj0ga2VlcGVyLklCQ1BvcnRLZWVwZXIuQmluZFBvcnQoY3R4LCBwb3J0MykKCiAgICAvLyBOT1RFOiBUaGUgbW9kdWxlJ3Mgc2NvcGVkIGNhcGFiaWxpdHkga2VlcGVyIG11c3QgYmUgcHJpdmF0ZQogICAga2VlcGVyLnNjb3BlZEtlZXBlci5DbGFpbUNhcGFiaWxpdHkoY2FwMSkKICAgIGtlZXBlci5zY29wZWRLZWVwZXIuQ2xhaW1DYXBhYmlsaXR5KGNhcDIpCiAgICBrZWVwZXIuc2NvcGVkS2VlcGVyLkNsYWltQ2FwYWJpbGl0eShjYXAzKQogIH0KCiAgLy8gLi4uIG1vcmUgaW5pdGlhbGl6YXRpb24gbG9naWMKfQo="}}),e._v(" "),t("h3",{attrs:{id:"custom-packets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-packets"}},[e._v("#")]),e._v(" Custom Packets")]),e._v(" "),t("p",[e._v("Modules connected by a channel must agree on what application data they are sending over the\nchannel, as well as how they will encode/decode it. This process is not specified by IBC as it is up\nto each application module to determine how to implement this agreement. However, for most\napplications this will happen as a version negotiation during the channel handshake. While more\ncomplex version negotiation is possible to implement inside the channel opening handshake, a very\nsimple version negotation is implemented in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/transfer/module.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("ibc-transfer module"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Thus, a module must define its a custom packet data structure, along with a well-defined way to\nencode and decode it to and from "),t("code",[e._v("[]byte")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3VzdG9tIHBhY2tldCBkYXRhIGRlZmluZWQgaW4gYXBwbGljYXRpb24gbW9kdWxlCnR5cGUgQ3VzdG9tUGFja2V0RGF0YSBzdHJ1Y3QgewogIC8vIEN1c3RvbSBmaWVsZHMgLi4uCn0KCkVuY29kZVBhY2tldERhdGEocGFja2V0RGF0YSBDdXN0b21QYWNrZXREYXRhKSBbXWJ5dGUgewogIC8vIGVuY29kZSBwYWNrZXREYXRhIHRvIGJ5dGVzCn0KCkRlY29kZVBhY2tldERhdGEoZW5jb2RlZCBbXWJ5dGUpIChDdXN0b21QYWNrZXREYXRhKSB7CiAgLy8gZGVjb2RlIGZyb20gYnl0ZXMgdG8gcGFja2V0IGRhdGEKfQo="}}),e._v(" "),t("p",[e._v("Then a module must encode its packet data before sending it through IBC.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcmV0cmlldmUgdGhlIGR5bmFtaWMgY2FwYWJpbGl0eSBmb3IgdGhpcyBjaGFubmVsCmNoYW5uZWxDYXAgOj0gc2NvcGVkS2VlcGVyLkdldENhcGFiaWxpdHkoY3R4LCBjaGFubmVsQ2FwTmFtZSkKLy8gU2VuZGluZyBjdXN0b20gYXBwbGljYXRpb24gcGFja2V0IGRhdGEKZGF0YSA6PSBFbmNvZGVQYWNrZXREYXRhKGN1c3RvbVBhY2tldERhdGEpCnBhY2tldC5EYXRhID0gZGF0YQovLyBTZW5kIHBhY2tldCB0byBJQkMsIGF1dGhlbnRpY2F0aW5nIHdpdGggY2hhbm5lbENhcApzZXF1ZW5jZSwgZXJyIDo9IElCQ0NoYW5uZWxLZWVwZXIuU2VuZFBhY2tldCgKICBjdHgsIAogIGNoYW5uZWxDYXAsIAogIHNvdXJjZVBvcnQsIAogIHNvdXJjZUNoYW5uZWwsIAogIHRpbWVvdXRIZWlnaHQsIAogIHRpbWVvdXRUaW1lc3RhbXAsIAogIGRhdGEsCikK"}}),e._v(" "),t("p",[e._v("A module receiving a packet must decode the "),t("code",[e._v("PacketData")]),e._v(" into a structure it expects so that it can\nact on it.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVjZWl2aW5nIGN1c3RvbSBhcHBsaWNhdGlvbiBwYWNrZXQgZGF0YSAoaW4gT25SZWN2UGFja2V0KQpwYWNrZXREYXRhIDo9IERlY29kZVBhY2tldERhdGEocGFja2V0LkRhdGEpCi8vIGhhbmRsZSByZWNlaXZlZCBjdXN0b20gcGFja2V0IGRhdGEK"}}),e._v(" "),t("h4",{attrs:{id:"packet-flow-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packet-flow-handling"}},[e._v("#")]),e._v(" Packet Flow Handling")]),e._v(" "),t("p",[e._v("Just as IBC expected modules to implement callbacks for channel handshakes, IBC also expects modules\nto implement callbacks for handling the packet flow through a channel.")]),e._v(" "),t("p",[e._v("Once a module A and module B are connected to each other, relayers can start relaying packets and\nacknowledgements back and forth on the channel.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://media.githubusercontent.com/media/cosmos/ibc/old/spec/ics-004-channel-and-packet-semantics/channel-state-machine.png",alt:"IBC packet flow diagram"}})]),e._v(" "),t("p",[e._v("Briefly, a successful packet flow works as follows:")]),e._v(" "),t("ol",[t("li",[e._v("module A sends a packet through the IBC module")]),e._v(" "),t("li",[e._v("the packet is received by module B")]),e._v(" "),t("li",[e._v("if module B writes an acknowledgement of the packet then module A will process the\nacknowledgement")]),e._v(" "),t("li",[e._v("if the packet is not successfully received before the timeout, then module A processes the\npacket's timeout.")])]),e._v(" "),t("h5",{attrs:{id:"sending-packets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-packets"}},[e._v("#")]),e._v(" Sending Packets")]),e._v(" "),t("p",[e._v("Modules do not send packets through callbacks, since the modules initiate the action of sending\npackets to the IBC module, as opposed to other parts of the packet flow where msgs sent to the IBC\nmodule must trigger execution on the port-bound module through the use of callbacks. Thus, to send a\npacket a module simply needs to call "),t("code",[e._v("SendPacket")]),e._v(" on the "),t("code",[e._v("IBCChannelKeeper")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gcmV0cmlldmUgdGhlIGR5bmFtaWMgY2FwYWJpbGl0eSBmb3IgdGhpcyBjaGFubmVsCmNoYW5uZWxDYXAgOj0gc2NvcGVkS2VlcGVyLkdldENhcGFiaWxpdHkoY3R4LCBjaGFubmVsQ2FwTmFtZSkKLy8gU2VuZGluZyBjdXN0b20gYXBwbGljYXRpb24gcGFja2V0IGRhdGEKZGF0YSA6PSBFbmNvZGVQYWNrZXREYXRhKGN1c3RvbVBhY2tldERhdGEpCi8vIFNlbmQgcGFja2V0IHRvIElCQywgYXV0aGVudGljYXRpbmcgd2l0aCBjaGFubmVsQ2FwCnNlcXVlbmNlLCBlcnIgOj0gSUJDQ2hhbm5lbEtlZXBlci5TZW5kUGFja2V0KAogIGN0eCwgCiAgY2hhbm5lbENhcCwgCiAgc291cmNlUG9ydCwgCiAgc291cmNlQ2hhbm5lbCwgCiAgdGltZW91dEhlaWdodCwgCiAgdGltZW91dFRpbWVzdGFtcCwgCiAgZGF0YSwKKQo="}}),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("In order to prevent modules from sending packets on channels they do not own, IBC expects\nmodules to pass in the correct channel capability for the packet's source channel.")])]),e._v(" "),t("h5",{attrs:{id:"receiving-packets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiving-packets"}},[e._v("#")]),e._v(" Receiving Packets")]),e._v(" "),t("p",[e._v("To handle receiving packets, the module must implement the "),t("code",[e._v("OnRecvPacket")]),e._v(" callback. This gets\ninvoked by the IBC module after the packet has been proved valid and correctly processed by the IBC\nkeepers. Thus, the "),t("code",[e._v("OnRecvPacket")]),e._v(" callback only needs to worry about making the appropriate state\nchanges given the packet data without worrying about whether the packet is valid or not.")]),e._v(" "),t("p",[e._v("Modules may return to the IBC handler an acknowledgement which implements the Acknowledgement interface.\nThe IBC handler will then commit this acknowledgement of the packet so that a relayer may relay the\nacknowledgement back to the sender module.")]),e._v(" "),t("p",[e._v("The state changes that occurred during this callback will only be written if:")]),e._v(" "),t("ul",[t("li",[e._v("the acknowledgement was successful as indicated by the "),t("code",[e._v("Success()")]),e._v(" function of the acknowledgement")]),e._v(" "),t("li",[e._v("if the acknowledgement returned is nil indicating that an asynchronous process is occurring")])]),e._v(" "),t("p",[e._v("NOTE: Applications which process asynchronous acknowledgements must handle reverting state changes\nwhen appropriate. Any state changes that occurred during the "),t("code",[e._v("OnRecvPacket")]),e._v(" callback will be written\nfor asynchronous acknowledgements.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"T25SZWN2UGFja2V0KAogIGN0eCBzZGsuQ29udGV4dCwKICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKKSBpYmNleHBvcnRlZC5BY2tub3dsZWRnZW1lbnQgewogIC8vIERlY29kZSB0aGUgcGFja2V0IGRhdGEKICBwYWNrZXREYXRhIDo9IERlY29kZVBhY2tldERhdGEocGFja2V0LkRhdGEpCgogIC8vIGRvIGFwcGxpY2F0aW9uIHN0YXRlIGNoYW5nZXMgYmFzZWQgb24gcGFja2V0IGRhdGEgYW5kIHJldHVybiB0aGUgYWNrbm93bGVkZ2VtZW50CiAgLy8gTk9URTogVGhlIGFja25vd2xlZGdlbWVudCB3aWxsIGluZGljYXRlIHRvIHRoZSBJQkMgaGFuZGxlciBpZiB0aGUgYXBwbGljYXRpb24gCiAgLy8gc3RhdGUgY2hhbmdlcyBzaG91bGQgYmUgd3JpdHRlbiB2aWEgdGhlIGBTdWNjZXNzKClgIGZ1bmN0aW9uLiBBcHBsaWNhdGlvbiBzdGF0ZQogIC8vIGNoYW5nZXMgYXJlIG9ubHkgd3JpdHRlbiBpZiB0aGUgYWNrbm93bGVkZ2VtZW50IGlzIHN1Y2Nlc3NmdWwgb3IgdGhlIGFja25vd2xlZGdlbWVudAogIC8vIHJldHVybmVkIGlzIG5pbCBpbmRpY2F0aW5nIHRoYXQgYW4gYXN5bmNocm9ub3VzIGFja25vd2xlZGdlbWVudCB3aWxsIG9jY3VyLgogIGFjayA6PSBwcm9jZXNzUGFja2V0KGN0eCwgcGFja2V0LCBwYWNrZXREYXRhKQoKICByZXR1cm4gYWNrCn0K"}}),e._v(" "),t("p",[e._v("The Acknowledgement interface:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWNrbm93bGVkZ2VtZW50IGRlZmluZXMgdGhlIGludGVyZmFjZSB1c2VkIHRvIHJldHVybgovLyBhY2tub3dsZWRnZW1lbnRzIGluIHRoZSBPblJlY3ZQYWNrZXQgY2FsbGJhY2suCnR5cGUgQWNrbm93bGVkZ2VtZW50IGludGVyZmFjZSB7CiAgU3VjY2VzcygpIGJvb2wKICBBY2tub3dsZWRnZW1lbnQoKSBbXWJ5dGUKfQo="}}),e._v(" "),t("h3",{attrs:{id:"acknowledgements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),t("p",[e._v("Modules may commit an acknowledgement upon receiving and processing a packet in the case of synchronous packet processing.\nIn the case where a packet is processed at some later point after the packet has been received (asynchronous execution), the acknowledgement\nwill be written once the packet has been processed by the application which may be well after the packet receipt.")]),e._v(" "),t("p",[e._v("NOTE: Most blockchain modules will want to use the synchronous execution model in which the module processes and writes the acknowledgement\nfor a packet as soon as it has been received from the IBC module.")]),e._v(" "),t("p",[e._v("This acknowledgement can then be relayed back to the original sender chain, which can take action\ndepending on the contents of the acknowledgement.")]),e._v(" "),t("p",[e._v("Just as packet data was opaque to IBC, acknowledgements are similarly opaque. Modules must pass and\nreceive acknowledegments with the IBC modules as byte strings.")]),e._v(" "),t("p",[e._v("Thus, modules must agree on how to encode/decode acknowledgements. The process of creating an\nacknowledgement struct along with encoding and decoding it, is very similar to the packet data\nexample above. "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 04"),t("OutboundLink")],1),e._v("\nspecifies a recommended format for acknowledgements. This acknowledgement type can be imported from\n"),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/04-channel/types",target:"_blank",rel:"noopener noreferrer"}},[e._v("channel types"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("While modules may choose arbitrary acknowledgement structs, a default acknowledgement types is provided by IBC "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/channel/v1/channel.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gQWNrbm93bGVkZ2VtZW50IGlzIHRoZSByZWNvbW1lbmRlZCBhY2tub3dsZWRnZW1lbnQgZm9ybWF0IHRvIGJlIHVzZWQgYnkKLy8gYXBwLXNwZWNpZmljIHByb3RvY29scy4KLy8gTk9URTogVGhlIGZpZWxkIG51bWJlcnMgMjEgYW5kIDIyIHdlcmUgZXhwbGljaXRseSBjaG9zZW4gdG8gYXZvaWQgYWNjaWRlbnRhbAovLyBjb25mbGljdHMgd2l0aCBvdGhlciBwcm90b2J1ZiBtZXNzYWdlIGZvcm1hdHMgdXNlZCBmb3IgYWNrbm93bGVkZ2VtZW50cy4KLy8gVGhlIGZpcnN0IGJ5dGUgb2YgYW55IG1lc3NhZ2Ugd2l0aCB0aGlzIGZvcm1hdCB3aWxsIGJlIHRoZSBub24tQVNDSUkgdmFsdWVzCi8vIGAweGFhYCAocmVzdWx0KSBvciBgMHhiMmAgKGVycm9yKS4gSW1wbGVtZW50ZWQgYXMgZGVmaW5lZCBieSBJQ1M6Ci8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvaWJjL3RyZWUvbWFzdGVyL3NwZWMvY29yZS9pY3MtMDA0LWNoYW5uZWwtYW5kLXBhY2tldC1zZW1hbnRpY3MjYWNrbm93bGVkZ2VtZW50LWVudmVsb3BlCm1lc3NhZ2UgQWNrbm93bGVkZ2VtZW50IHsKICAvLyByZXNwb25zZSBjb250YWlucyBlaXRoZXIgYSByZXN1bHQgb3IgYW4gZXJyb3IgYW5kIG11c3QgYmUgbm9uLWVtcHR5CiAgb25lb2YgcmVzcG9uc2UgewogICAgYnl0ZXMgIHJlc3VsdCA9IDIxOwogICAgc3RyaW5nIGVycm9yICA9IDIyOwogIH0KfQo="}}),e._v(" "),t("h4",{attrs:{id:"acknowledging-packets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acknowledging-packets"}},[e._v("#")]),e._v(" Acknowledging Packets")]),e._v(" "),t("p",[e._v("After a module writes an acknowledgement, a relayer can relay back the acknowledgement to the sender module. The sender module can\nthen process the acknowledgement using the "),t("code",[e._v("OnAcknowledgementPacket")]),e._v(" callback. The contents of the\nacknowledgement is entirely upto the modules on the channel (just like the packet data); however, it\nmay often contain information on whether the packet was successfully processed along\nwith some additional data that could be useful for remediation if the packet processing failed.")]),e._v(" "),t("p",[e._v("Since the modules are responsible for agreeing on an encoding/decoding standard for packet data and\nacknowledgements, IBC will pass in the acknowledgements as "),t("code",[e._v("[]byte")]),e._v(" to this callback. The callback\nis responsible for decoding the acknowledgement and processing it.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"T25BY2tub3dsZWRnZW1lbnRQYWNrZXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAogIGFja25vd2xlZGdlbWVudCBbXWJ5dGUsCikgKCpzZGsuUmVzdWx0LCBlcnJvcikgewogIC8vIERlY29kZSBhY2tub3dsZWRnZW1lbnQKICBhY2sgOj0gRGVjb2RlQWNrbm93bGVkZ2VtZW50KGFja25vd2xlZGdlbWVudCkKCiAgLy8gcHJvY2VzcyBhY2sKICByZXMsIGVyciA6PSBwcm9jZXNzQWNrKGFjaykKICByZXR1cm4gcmVzLCBlcnIKfQo="}}),e._v(" "),t("h4",{attrs:{id:"timeout-packets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeout-packets"}},[e._v("#")]),e._v(" Timeout Packets")]),e._v(" "),t("p",[e._v("If the timeout for a packet is reached before the packet is successfully received or the\ncounterparty channel end is closed before the packet is successfully received, then the receiving\nchain can no longer process it. Thus, the sending chain must process the timeout using\n"),t("code",[e._v("OnTimeoutPacket")]),e._v(" to handle this situation. Again the IBC module will verify that the timeout is\nindeed valid, so our module only needs to implement the state machine logic for what to do once a\ntimeout is reached and the packet can no longer be received.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"T25UaW1lb3V0UGFja2V0KAogIGN0eCBzZGsuQ29udGV4dCwKICBwYWNrZXQgY2hhbm5lbHR5cGVzLlBhY2tldCwKKSAoKnNkay5SZXN1bHQsIGVycm9yKSB7CiAgLy8gZG8gY3VzdG9tIHRpbWVvdXQgbG9naWMKfQo="}}),e._v(" "),t("h3",{attrs:{id:"routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),t("p",[e._v("As mentioned above, modules must implement the IBC module interface (which contains both channel\nhandshake callbacks and packet handling callbacks). The concrete implementation of this interface\nmust be registered with the module name as a route on the IBC "),t("code",[e._v("Router")]),e._v(".")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCmZ1bmMgTmV3QXBwKC4uLmFyZ3MpICpBcHAgewovLyAuLi4KCi8vIENyZWF0ZSBzdGF0aWMgSUJDIHJvdXRlciwgYWRkIG1vZHVsZSByb3V0ZXMsIHRoZW4gc2V0IGFuZCBzZWFsIGl0CmliY1JvdXRlciA6PSBwb3J0Lk5ld1JvdXRlcigpCgppYmNSb3V0ZXIuQWRkUm91dGUoaWJjdHJhbnNmZXJ0eXBlcy5Nb2R1bGVOYW1lLCB0cmFuc2Zlck1vZHVsZSkKLy8gTm90ZTogbW9kdWxlQ2FsbGJhY2tzIG11c3QgaW1wbGVtZW50IElCQ01vZHVsZSBpbnRlcmZhY2UKaWJjUm91dGVyLkFkZFJvdXRlKG1vZHVsZU5hbWUsIG1vZHVsZUNhbGxiYWNrcykKCi8vIFNldHRpbmcgUm91dGVyIHdpbGwgZmluYWxpemUgYWxsIHJvdXRlcyBieSBzZWFsaW5nIHJvdXRlcgovLyBObyBtb3JlIHJvdXRlcyBjYW4gYmUgYWRkZWQKYXBwLklCQ0tlZXBlci5TZXRSb3V0ZXIoaWJjUm91dGVyKQo="}}),e._v(" "),t("h2",{attrs:{id:"working-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-example"}},[e._v("#")]),e._v(" Working Example")]),e._v(" "),t("p",[e._v("For a real working example of an IBC application, you can look through the "),t("code",[e._v("ibc-transfer")]),e._v(" module\nwhich implements everything discussed above.")]),e._v(" "),t("p",[e._v("Here are the useful parts of the module to look at:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/genesis.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Binding to transfer\nport"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/relay.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sending transfer\npackets"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/ibc_module.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementing IBC\ncallbacks"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/docs/building-modules/01-intro.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("building modules"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=o.exports}}]);