(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{687:function(e,a,t){"use strict";t.r(a);var l=t(1),o=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ibc-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-middleware"}},[e._v("#")]),e._v(" IBC middleware")]),e._v(" "),t("p",[e._v("Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks {synopsis}.")]),e._v(" "),t("p",[e._v("This document serves as a guide for middleware developers who want to write their own middleware and for chain developers who want to use IBC middleware on their chains.")]),e._v(" "),t("p",[e._v("IBC applications are designed to be self-contained modules that implement their own application-specific logic through a set of interfaces with the core IBC handlers. These core IBC handlers, in turn, are designed to enforce the correctness properties of IBC (transport, authentication, ordering) while delegating all application-specific handling to the IBC application modules. However, there are cases where some functionality may be desired by many applications, yet not appropriate to place in core IBC.")]),e._v(" "),t("p",[e._v("Middleware allows developers to define the extensions as separate modules that can wrap over the base application. This middleware can thus perform its own custom logic, and pass data into the application so that it may run its logic without being aware of the middleware's existence. This allows both the application and the middleware to implement its own isolated logic while still being able to run as part of a single packet flow.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")])],1),e._v(" "),t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC Integration")])],1),e._v(" "),t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/ibc/apps/apps.html"}},[e._v("IBC Application Developer Guide")])],1)]),e._v(" "),t("h2",{attrs:{id:"definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),t("p",[t("code",[e._v("Middleware")]),e._v(": A self-contained module that sits between core IBC and an underlying IBC application during packet execution. All messages between core IBC and underlying application must flow through middleware, which may perform its own custom logic.")]),e._v(" "),t("p",[t("code",[e._v("Underlying Application")]),e._v(": An underlying application is the application that is directly connected to the middleware in question. This underlying application may itself be middleware that is chained to a base application.")]),e._v(" "),t("p",[t("code",[e._v("Base Application")]),e._v(": A base application is an IBC application that does not contain any middleware. It may be nested by 0 or multiple middleware to form an application stack.")]),e._v(" "),t("p",[t("code",[e._v("Application Stack (or stack)")]),e._v(": A stack is the complete set of application logic (middleware(s) + base application) that gets connected to core IBC. A stack may be just a base application, or it may be a series of middlewares that nest a base application.")]),e._v(" "),t("h2",{attrs:{id:"create-a-custom-ibc-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-custom-ibc-middleware"}},[e._v("#")]),e._v(" Create a custom IBC middleware")]),e._v(" "),t("p",[e._v("IBC middleware will wrap over an underlying IBC application and sits between core IBC and the application. It has complete control in modifying any message coming from IBC to the application, and any message coming from the application to core IBC. Thus, middleware must be completely trusted by chain developers who wish to integrate them, however this gives them complete flexibility in modifying the application(s) they wrap.")]),e._v(" "),t("h3",{attrs:{id:"interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWlkZGxld2FyZSBpbXBsZW1lbnRzIHRoZSBJQ1MyNiBNb2R1bGUgaW50ZXJmYWNlCnR5cGUgTWlkZGxld2FyZSBpbnRlcmZhY2UgewogIHBvcnR0eXBlcy5JQkNNb2R1bGUgLy8gbWlkZGxld2FyZSBoYXMgYWNjY2VzcyB0byBhbiB1bmRlcmx5aW5nIGFwcGxpY2F0aW9uIHdoaWNoIG1heSBiZSB3cmFwcGVkIGJ5IG1vcmUgbWlkZGxld2FyZQogIGljczRXcmFwcGVyOiBJQ1M0V3JhcHBlciAvLyBtaWRkbGV3YXJlIGhhcyBhY2Nlc3MgdG8gSUNTNFdyYXBwZXIgd2hpY2ggbWF5IGJlIGNvcmUgSUJDIENoYW5uZWwgSGFuZGxlciBvciBhIGhpZ2hlci1sZXZlbCBtaWRkbGV3YXJlIHRoYXQgd3JhcHMgdGhpcyBtaWRkbGV3YXJlLgp9Cg=="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"Ly8gVGhpcyBpcyBpbXBsZW1lbnRlZCBieSBJQ1M0IGFuZCBhbGwgbWlkZGxld2FyZSB0aGF0IGFyZSB3cmFwcGluZyBiYXNlIGFwcGxpY2F0aW9uLgovLyBUaGUgYmFzZSBhcHBsaWNhdGlvbiB3aWxsIGNhbGwgYHNlbmRQYWNrZXRgIG9yIGB3cml0ZUFja25vd2xlZGdlbWVudGAgb2YgdGhlIG1pZGRsZXdhcmUgZGlyZWN0bHkgYWJvdmUgdGhlbQovLyB3aGljaCB3aWxsIGNhbGwgdGhlIG5leHQgbWlkZGxld2FyZSB1bnRpbCBpdCByZWFjaGVzIHRoZSBjb3JlIElCQyBoYW5kbGVyLgp0eXBlIElDUzRXcmFwcGVyIGludGVyZmFjZSB7CiAgU2VuZFBhY2tldCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNoYW5DYXAgKmNhcGFiaWxpdHl0eXBlcy5DYXBhYmlsaXR5LAogICAgc291cmNlUG9ydCBzdHJpbmcsCiAgICBzb3VyY2VDaGFubmVsIHN0cmluZywKICAgIHRpbWVvdXRIZWlnaHQgY2xpZW50dHlwZXMuSGVpZ2h0LAogICAgdGltZW91dFRpbWVzdGFtcCB1aW50NjQsCiAgICBkYXRhIFtdYnl0ZSwKICApIChzZXF1ZW5jZSB1aW50NjQsIGVyciBlcnJvcikKCiAgV3JpdGVBY2tub3dsZWRnZW1lbnQoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICAgIHBhY2tldCBleHBvcnRlZC5QYWNrZXRJLAogICAgYWNrIGV4cG9ydGVkLkFja25vd2xlZGdlbWVudCwKICApIGVycm9yCgogIEdldEFwcFZlcnNpb24oCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBwb3J0SUQsCiAgICBjaGFubmVsSUQgc3RyaW5nLAogICkgKHN0cmluZywgYm9vbCkKfQo="}}),e._v(" "),t("h3",{attrs:{id:"implement-ibcmodule-interface-and-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implement-ibcmodule-interface-and-callbacks"}},[e._v("#")]),e._v(" Implement "),t("code",[e._v("IBCModule")]),e._v(" interface and callbacks")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("IBCModule")]),e._v(" is a struct that implements the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port/types/module.go#L11-L106",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-26 interface ("),t("code",[e._v("porttypes.IBCModule")]),e._v(")"),t("OutboundLink")],1),e._v(". It is recommended to separate these callbacks into a separate file "),t("code",[e._v("ibc_module.go")]),e._v(". As will be mentioned in the "),t("RouterLink",{attrs:{to:"/ibc/middleware/integration.html"}},[e._v("integration section")]),e._v(", this struct should be different than the struct that implements "),t("code",[e._v("AppModule")]),e._v(" in case the middleware maintains its own internal state and processes separate SDK messages.")],1),e._v(" "),t("p",[e._v("The middleware must have access to the underlying application, and be called before during all ICS-26 callbacks. It may execute custom logic during these callbacks, and then call the underlying application's callback. Middleware "),t("strong",[e._v("may")]),e._v(" choose not to call the underlying application's callback at all. Though these should generally be limited to error cases.")]),e._v(" "),t("p",[e._v("In the case where the IBC middleware expects to speak to a compatible IBC middleware on the counterparty chain, they must use the channel handshake to negotiate the middleware version without interfering in the version negotiation of the underlying application.")]),e._v(" "),t("p",[e._v("Middleware accomplishes this by formatting the version in a JSON-encoded string containing the middleware version and the application version. The application version may as well be a JSON-encoded string, possibly including further middleware and app versions, if the application stack consists of multiple milddlewares wrapping a base application. The format of the version is specified in ICS-30 as the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90OyZsdDttaWRkbGV3YXJlX3ZlcnNpb25fa2V5Jmd0OyZxdW90OzogJnF1b3Q7Jmx0O21pZGRsZXdhcmVfdmVyc2lvbl92YWx1ZSZndDsmcXVvdDssCiAgJnF1b3Q7YXBwX3ZlcnNpb24mcXVvdDs6ICZxdW90OyZsdDthcHBsaWNhdGlvbl92ZXJzaW9uX3ZhbHVlJmd0OyZxdW90Owp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("<middleware_version_key>")]),e._v(" key in the JSON struct should be replaced by the actual name of the key for the corresponding middleware (e.g. "),t("code",[e._v("fee_version")]),e._v(").")]),e._v(" "),t("p",[e._v("During the handshake callbacks, the middleware can unmarshal the version string and retrieve the middleware and application versions. It can do its negotiation logic on "),t("code",[e._v("<middleware_version_value>")]),e._v(", and pass the "),t("code",[e._v("<application_version_value>")]),e._v(" to the underlying application.")]),e._v(" "),t("p",[e._v("The middleware should simply pass the capability in the callback arguments along to the underlying application so that it may be claimed by the base application. The base application will then pass the capability up the stack in order to authenticate an outgoing packet/acknowledgement.")]),e._v(" "),t("p",[e._v("In the case where the middleware wishes to send a packet or acknowledgment without the involvement of the underlying application, it should be given access to the same "),t("code",[e._v("scopedKeeper")]),e._v(" as the base application so that it can retrieve the capabilities by itself.")]),e._v(" "),t("h3",{attrs:{id:"handshake-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshake-callbacks"}},[e._v("#")]),e._v(" Handshake callbacks")]),e._v(" "),t("h4",{attrs:{id:"onchanopeninit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopeninit"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenInit")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoaW0gSUJDTW9kdWxlKSBPbkNoYW5PcGVuSW5pdCgKICBjdHggc2RrLkNvbnRleHQsCiAgb3JkZXIgY2hhbm5lbHR5cGVzLk9yZGVyLAogIGNvbm5lY3Rpb25Ib3BzIFtdc3RyaW5nLAogIHBvcnRJRCBzdHJpbmcsCiAgY2hhbm5lbElEIHN0cmluZywKICBjaGFubmVsQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICBjb3VudGVycGFydHkgY2hhbm5lbHR5cGVzLkNvdW50ZXJwYXJ0eSwKICB2ZXJzaW9uIHN0cmluZywKKSAoc3RyaW5nLCBlcnJvcikgewogIGlmIHZlcnNpb24gIT0gJnF1b3Q7JnF1b3Q7IHsKICAgIC8vIHRyeSB0byB1bm1hcnNoYWwgSlNPTi1lbmNvZGVkIHZlcnNpb24gc3RyaW5nIGFuZCBwYXNzCiAgICAvLyB0aGUgYXBwLXNwZWNpZmljIHZlcnNpb24gdG8gYXBwIGNhbGxiYWNrLgogICAgLy8gb3RoZXJ3aXNlLCBwYXNzIHZlcnNpb24gZGlyZWN0bHkgdG8gYXBwIGNhbGxiYWNrLgogICAgbWV0YWRhdGEsIGVyciA6PSBVbm1hcnNoYWwodmVyc2lvbikKICAgIGlmIGVyciAhPSBuaWwgewogICAgLy8gU2luY2UgaXQgaXMgdmFsaWQgZm9yIGZlZSB2ZXJzaW9uIHRvIG5vdCBiZSBzcGVjaWZpZWQsCiAgICAvLyB0aGUgYWJvdmUgbWlkZGxld2FyZSB2ZXJzaW9uIG1heSBiZSBmb3IgYW5vdGhlciBtaWRkbGV3YXJlLgogICAgLy8gUGFzcyB0aGUgZW50aXJlIHZlcnNpb24gc3RyaW5nIG9udG8gdGhlIHVuZGVybHlpbmcgYXBwbGljYXRpb24uCiAgICByZXR1cm4gaW0uYXBwLk9uQ2hhbk9wZW5Jbml0KAogICAgICBjdHgsCiAgICAgIG9yZGVyLAogICAgICBjb25uZWN0aW9uSG9wcywKICAgICAgcG9ydElELAogICAgICBjaGFubmVsSUQsCiAgICAgIGNoYW5uZWxDYXAsCiAgICAgIGNvdW50ZXJwYXJ0eSwKICAgICAgdmVyc2lvbiwKICAgICkKICB9CiAgZWxzZSB7CiAgICBtZXRhZGF0YSA9IHsKICAgICAgLy8gc2V0IG1pZGRsZXdhcmUgdmVyc2lvbiB0byBkZWZhdWx0IHZhbHVlCiAgICAgIE1pZGRsZXdhcmVWZXJzaW9uOiBkZWZhdWx0TWlkZGxld2FyZVZlcnNpb24sCiAgICAgIC8vIGFsbG93IGFwcGxpY2F0aW9uIHRvIHJldHVybiBpdHMgZGVmYXVsdCB2ZXJzaW9uCiAgICAgIEFwcFZlcnNpb246ICZxdW90OyZxdW90OywKICAgIH0KICB9CgogIGRvQ3VzdG9tTG9naWMoKQoKICAvLyBpZiB0aGUgdmVyc2lvbiBzdHJpbmcgaXMgZW1wdHksIE9uQ2hhbk9wZW5Jbml0IGlzIGV4cGVjdGVkIHRvIHJldHVybgogIC8vIGEgZGVmYXVsdCB2ZXJzaW9uIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZlcnNpb24ocykgaXQgc3VwcG9ydHMKICBhcHBWZXJzaW9uLCBlcnIgOj0gaW0uYXBwLk9uQ2hhbk9wZW5Jbml0KAogICAgY3R4LAogICAgb3JkZXIsCiAgICBjb25uZWN0aW9uSG9wcywKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCwKICAgIGNoYW5uZWxDYXAsCiAgICBjb3VudGVycGFydHksCiAgICBtZXRhZGF0YS5BcHBWZXJzaW9uLCAvLyBub3RlIHdlIG9ubHkgcGFzcyBhcHAgdmVyc2lvbiBoZXJlCiAgKQogIGlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgfQoKICB2ZXJzaW9uIDo9IGNvbnN0cnVjdFZlcnNpb24obWV0YWRhdGEuTWlkZGxld2FyZVZlcnNpb24sIGFwcFZlcnNpb24pCgogIHJldHVybiB2ZXJzaW9uLCBuaWwKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L34-L82",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchanopentry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopentry"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenTry")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuVHJ5KAogIGN0eCBzZGsuQ29udGV4dCwKICBvcmRlciBjaGFubmVsdHlwZXMuT3JkZXIsCiAgY29ubmVjdGlvbkhvcHMgW11zdHJpbmcsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCiAgY2hhbm5lbENhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgY291bnRlcnBhcnR5IGNoYW5uZWx0eXBlcy5Db3VudGVycGFydHksCiAgY291bnRlcnBhcnR5VmVyc2lvbiBzdHJpbmcsCikgKHN0cmluZywgZXJyb3IpIHsKICAvLyB0cnkgdG8gdW5tYXJzaGFsIEpTT04tZW5jb2RlZCB2ZXJzaW9uIHN0cmluZyBhbmQgcGFzcwogIC8vIHRoZSBhcHAtc3BlY2lmaWMgdmVyc2lvbiB0byBhcHAgY2FsbGJhY2suCiAgLy8gb3RoZXJ3aXNlLCBwYXNzIHZlcnNpb24gZGlyZWN0bHkgdG8gYXBwIGNhbGxiYWNrLgogIGNwTWV0YWRhdGEsIGVyciA6PSBVbm1hcnNoYWwoY291bnRlcnBhcnR5VmVyc2lvbikKICBpZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBhcHAuT25DaGFuT3BlblRyeSgKICAgICAgY3R4LAogICAgICBvcmRlciwKICAgICAgY29ubmVjdGlvbkhvcHMsCiAgICAgIHBvcnRJRCwKICAgICAgY2hhbm5lbElELAogICAgICBjaGFubmVsQ2FwLAogICAgICBjb3VudGVycGFydHksCiAgICAgIGNvdW50ZXJwYXJ0eVZlcnNpb24sCiAgICApCiAgfQoKICBkb0N1c3RvbUxvZ2ljKCkKCiAgLy8gQ2FsbCB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbidzIE9uQ2hhbk9wZW5UcnkgY2FsbGJhY2suCiAgLy8gVGhlIHRyeSBjYWxsYmFjayBtdXN0IHNlbGVjdCB0aGUgZmluYWwgYXBwLXNwZWNpZmljIHZlcnNpb24gc3RyaW5nIGFuZCByZXR1cm4gaXQuCiAgYXBwVmVyc2lvbiwgZXJyIDo9IGFwcC5PbkNoYW5PcGVuVHJ5KAogICAgY3R4LAogICAgb3JkZXIsCiAgICBjb25uZWN0aW9uSG9wcywKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCwKICAgIGNoYW5uZWxDYXAsCiAgICBjb3VudGVycGFydHksCiAgICBjcE1ldGFkYXRhLkFwcFZlcnNpb24sIC8vIG5vdGUgd2Ugb25seSBwYXNzIGNvdW50ZXJwYXJ0eSBhcHAgdmVyc2lvbiBoZXJlCiAgKQogIGlmIGVyciAhPSBuaWwgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgfQoKICAvLyBuZWdvdGlhdGUgZmluYWwgbWlkZGxld2FyZSB2ZXJzaW9uCiAgbWlkZGxld2FyZVZlcnNpb24gOj0gbmVnb3RpYXRlTWlkZGxld2FyZVZlcnNpb24oY3BNZXRhZGF0YS5NaWRkbGV3YXJlVmVyc2lvbikKICB2ZXJzaW9uIDo9IGNvbnN0cnVjdFZlcnNpb24obWlkZGxld2FyZVZlcnNpb24sIGFwcFZlcnNpb24pCgogIHJldHVybiB2ZXJzaW9uLCBuaWwKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L84-L124",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchanopenack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenack"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenAck")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuQWNrKAogIGN0eCBzZGsuQ29udGV4dCwKICBwb3J0SUQsCiAgY2hhbm5lbElEIHN0cmluZywKICBjb3VudGVycGFydHlDaGFubmVsSUQgc3RyaW5nLAogIGNvdW50ZXJwYXJ0eVZlcnNpb24gc3RyaW5nLAopIGVycm9yIHsKICAvLyB0cnkgdG8gdW5tYXJzaGFsIEpTT04tZW5jb2RlZCB2ZXJzaW9uIHN0cmluZyBhbmQgcGFzcwogIC8vIHRoZSBhcHAtc3BlY2lmaWMgdmVyc2lvbiB0byBhcHAgY2FsbGJhY2suCiAgLy8gb3RoZXJ3aXNlLCBwYXNzIHZlcnNpb24gZGlyZWN0bHkgdG8gYXBwIGNhbGxiYWNrLgogIGNwTWV0YWRhdGEsIGVyciA9IFVubWFyc2hhbEpTT04oY291bnRlcnBhcnR5VmVyc2lvbikKICBpZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBhcHAuT25DaGFuT3BlbkFjayhjdHgsIHBvcnRJRCwgY2hhbm5lbElELCBjb3VudGVycGFydHlDaGFubmVsSUQsIGNvdW50ZXJwYXJ0eVZlcnNpb24pCiAgfQoKICBpZiAhaXNDb21wYXRpYmxlKGNwTWV0YWRhdGEuTWlkZGxld2FyZVZlcnNpb24pIHsKICAgIHJldHVybiBlcnJvcgogIH0KICBkb0N1c3RvbUxvZ2ljKCkKCiAgLy8gY2FsbCB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbidzIE9uQ2hhbk9wZW5UcnkgY2FsbGJhY2sKICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5BY2soY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCwgY291bnRlcnBhcnR5Q2hhbm5lbElELCBjcE1ldGFkYXRhLkFwcFZlcnNpb24pCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L126-L152",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h3",{attrs:{id:"onchanopenconfirm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchanopenconfirm"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanOpenConfirm")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5PcGVuQ29uZmlybSgKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCikgZXJyb3IgewogIGRvQ3VzdG9tTG9naWMoKQoKICByZXR1cm4gYXBwLk9uQ2hhbk9wZW5Db25maXJtKGN0eCwgcG9ydElELCBjaGFubmVsSUQpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L154-L162",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchancloseinit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchancloseinit"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanCloseInit")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5DbG9zZUluaXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICBkb0N1c3RvbUxvZ2ljKCkKCiAgcmV0dXJuIGFwcC5PbkNoYW5DbG9zZUluaXQoY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L164-L187",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onchancloseconfirm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onchancloseconfirm"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnChanCloseConfirm")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkNoYW5DbG9zZUNvbmZpcm0oCiAgY3R4IHNkay5Db250ZXh0LAogIHBvcnRJRCwKICBjaGFubmVsSUQgc3RyaW5nLAopIGVycm9yIHsKICBkb0N1c3RvbUxvZ2ljKCkKCiAgcmV0dXJuIGFwcC5PbkNoYW5DbG9zZUNvbmZpcm0oY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L189-L212",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("p",[t("strong",[e._v("NOTE")]),e._v(": Middleware that does not need to negotiate with a counterparty middleware on the remote stack will not implement the version unmarshalling and negotiation, and will simply perform its own custom logic on the callbacks without relying on the counterparty behaving similarly.")]),e._v(" "),t("h3",{attrs:{id:"packet-callbacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packet-callbacks"}},[e._v("#")]),e._v(" Packet callbacks")]),e._v(" "),t("p",[e._v("The packet callbacks just like the handshake callbacks wrap the application's packet callbacks. The packet callbacks are where the middleware performs most of its custom logic. The middleware may read the packet flow data and perform some additional packet handling, or it may modify the incoming data before it reaches the underlying application. This enables a wide degree of usecases, as a simple base application like token-transfer can be transformed for a variety of usecases by combining it with custom middleware.")]),e._v(" "),t("h4",{attrs:{id:"onrecvpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onrecvpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnRecvPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPblJlY3ZQYWNrZXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAogIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgaWJjZXhwb3J0ZWQuQWNrbm93bGVkZ2VtZW50IHsKICBkb0N1c3RvbUxvZ2ljKHBhY2tldCkKCiAgYWNrIDo9IGFwcC5PblJlY3ZQYWNrZXQoY3R4LCBwYWNrZXQsIHJlbGF5ZXIpCgogIGRvQ3VzdG9tTG9naWMoYWNrKSAvLyBtaWRkbGV3YXJlIG1heSBtb2RpZnkgb3V0Z29pbmcgYWNrCiAgcmV0dXJuIGFjawp9Cg=="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L214-L237",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"onacknowledgementpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onacknowledgementpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnAcknowledgementPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPbkFja25vd2xlZGdlbWVudFBhY2tldCgKICBjdHggc2RrLkNvbnRleHQsCiAgcGFja2V0IGNoYW5uZWx0eXBlcy5QYWNrZXQsCiAgYWNrbm93bGVkZ2VtZW50IFtdYnl0ZSwKICByZWxheWVyIHNkay5BY2NBZGRyZXNzLAopIGVycm9yIHsKICBkb0N1c3RvbUxvZ2ljKHBhY2tldCwgYWNrKQoKICByZXR1cm4gYXBwLk9uQWNrbm93bGVkZ2VtZW50UGFja2V0KGN0eCwgcGFja2V0LCBhY2ssIHJlbGF5ZXIpCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L239-L292",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"ontimeoutpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ontimeoutpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("OnTimeoutPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBPblRpbWVvdXRQYWNrZXQoCiAgY3R4IHNkay5Db250ZXh0LAogIHBhY2tldCBjaGFubmVsdHlwZXMuUGFja2V0LAogIHJlbGF5ZXIgc2RrLkFjY0FkZHJlc3MsCikgZXJyb3IgewogIGRvQ3VzdG9tTG9naWMocGFja2V0KQoKICByZXR1cm4gYXBwLk9uVGltZW91dFBhY2tldChjdHgsIHBhY2tldCwgcmVsYXllcikKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L294-L334",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this callback for the ICS29 Fee Middleware module.")]),e._v(" "),t("h3",{attrs:{id:"ics-4-wrappers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics-4-wrappers"}},[e._v("#")]),e._v(" ICS-4 wrappers")]),e._v(" "),t("p",[e._v("Middleware must also wrap ICS-4 so that any communication from the application to the "),t("code",[e._v("channelKeeper")]),e._v(" goes through the middleware first. Similar to the packet callbacks, the middleware may modify outgoing acknowledgements and packets in any way it wishes.")]),e._v(" "),t("h4",{attrs:{id:"sendpacket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendpacket"}},[e._v("#")]),e._v(" "),t("code",[e._v("SendPacket")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTZW5kUGFja2V0KAogIGN0eCBzZGsuQ29udGV4dCwKICBjaGFuQ2FwICpjYXBhYmlsaXR5dHlwZXMuQ2FwYWJpbGl0eSwKICBzb3VyY2VQb3J0IHN0cmluZywKICBzb3VyY2VDaGFubmVsIHN0cmluZywKICB0aW1lb3V0SGVpZ2h0IGNsaWVudHR5cGVzLkhlaWdodCwKICB0aW1lb3V0VGltZXN0YW1wIHVpbnQ2NCwKICBhcHBEYXRhIFtdYnl0ZSwKKSB7CiAgLy8gbWlkZGxld2FyZSBtYXkgbW9kaWZ5IGRhdGEKICBkYXRhID0gZG9DdXN0b21Mb2dpYyhhcHBEYXRhKQoKICByZXR1cm4gaWNzNEtlZXBlci5TZW5kUGFja2V0KAogICAgY3R4LCAKICAgIGNoYW5DYXAsIAogICAgc291cmNlUG9ydCwgCiAgICBzb3VyY2VDaGFubmVsLCAKICAgIHRpbWVvdXRIZWlnaHQsIAogICAgdGltZW91dFRpbWVzdGFtcCwgCiAgICBkYXRhLAogICkKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L336-L343",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this function for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"writeacknowledgement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writeacknowledgement"}},[e._v("#")]),e._v(" "),t("code",[e._v("WriteAcknowledgement")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gb25seSBjYWxsZWQgZm9yIGFzeW5jIGFja3MKZnVuYyBXcml0ZUFja25vd2xlZGdlbWVudCgKICBjdHggc2RrLkNvbnRleHQsCiAgY2hhbkNhcCAqY2FwYWJpbGl0eXR5cGVzLkNhcGFiaWxpdHksCiAgcGFja2V0IGV4cG9ydGVkLlBhY2tldEksCiAgYWNrIGV4cG9ydGVkLkFja25vd2xlZGdlbWVudCwKKSB7CiAgLy8gbWlkZGxld2FyZSBtYXkgbW9kaWZ5IGFja25vd2xlZGdlbWVudAogIGFja19ieXRlcyA9IGRvQ3VzdG9tTG9naWMoYWNrKQoKICByZXR1cm4gaWNzNEtlZXBlci5Xcml0ZUFja25vd2xlZGdlbWVudChwYWNrZXQsIGFja19ieXRlcykKfQo="}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L345-L353",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this function for the ICS29 Fee Middleware module.")]),e._v(" "),t("h4",{attrs:{id:"getappversion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getappversion"}},[e._v("#")]),e._v(" "),t("code",[e._v("GetAppVersion")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gbWlkZGxld2FyZSBtdXN0IHJldHVybiB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbiB2ZXJzaW9uCmZ1bmMgR2V0QXBwVmVyc2lvbigKICBjdHggc2RrLkNvbnRleHQsCiAgcG9ydElELAogIGNoYW5uZWxJRCBzdHJpbmcsCikgKHN0cmluZywgYm9vbCkgewogIHZlcnNpb24sIGZvdW5kIDo9IGljczRLZWVwZXIuR2V0QXBwVmVyc2lvbihjdHgsIHBvcnRJRCwgY2hhbm5lbElEKQogIGlmICFmb3VuZCB7CiAgICByZXR1cm4gJnF1b3Q7JnF1b3Q7LCBmYWxzZQogIH0KCiAgaWYgIU1pZGRsZXdhcmVFbmFibGVkIHsKICAgIHJldHVybiB2ZXJzaW9uLCB0cnVlCiAgfQoKICAvLyB1bndyYXAgY2hhbm5lbCB2ZXJzaW9uCiAgbWV0YWRhdGEsIGVyciA6PSBVbm1hcnNoYWwodmVyc2lvbikKICBpZiBlcnIgIT0gbmlsIHsKICAgIHBhbmljKGZtdC5FcnJvZigmcXVvdDt1bmFibGUgdG8gdW5tYXJzaGFsIHZlcnNpb246ICV3JnF1b3Q7LCBlcnIpKQogIH0KCiAgcmV0dXJuIG1ldGFkYXRhLkFwcFZlcnNpb24sIHRydWUKfQoKLy8gbWlkZGxld2FyZSBtdXN0IHJldHVybiB0aGUgdW5kZXJseWluZyBhcHBsaWNhdGlvbiB2ZXJzaW9uIApmdW5jIEdldEFwcFZlcnNpb24oY3R4IHNkay5Db250ZXh0LCBwb3J0SUQsIGNoYW5uZWxJRCBzdHJpbmcpIChzdHJpbmcsIGJvb2wpIHsKICB2ZXJzaW9uLCBmb3VuZCA6PSBpY3M0S2VlcGVyLkdldEFwcFZlcnNpb24oY3R4LCBwb3J0SUQsIGNoYW5uZWxJRCkKICBpZiAhZm91bmQgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZmFsc2UKICB9CgogIGlmICFNaWRkbGV3YXJlRW5hYmxlZCB7CiAgICByZXR1cm4gdmVyc2lvbiwgdHJ1ZQogIH0KCiAgLy8gdW53cmFwIGNoYW5uZWwgdmVyc2lvbgogIG1ldGFkYXRhLCBlcnIgOj0gVW5tYXJzaGFsKHZlcnNpb24pCiAgaWYgZXJyICE9IG5pbCB7CiAgICBwYW5pYyhmbXQuRXJyb2YoJnF1b3Q7dW5hYmxlIHRvIHVubWFyc2hhbCB2ZXJzaW9uOiAldyZxdW90OywgZXJyKSkKICB9CgogIHJldHVybiBtZXRhZGF0YS5BcHBWZXJzaW9uLCB0cnVlCn0K"}}),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/48a6ae512b4ea42c29fdf6c6f5363f50645591a2/modules/apps/29-fee/ibc_middleware.go#L355-L358",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" an example implementation of this function for the ICS29 Fee Middleware module.")])],1)}),[],!1,null,null,null);a.default=o.exports}}]);