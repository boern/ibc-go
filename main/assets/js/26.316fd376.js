(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{568:function(l,c,a){l.exports=a.p+"assets/img/ica-v6.cb9136c7.png"},628:function(l,c,a){"use strict";a.r(c);var t=a(1),o=Object(t.a)({},(function(){var l=this,c=l.$createElement,t=l._self._c||c;return t("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[t("h1",{attrs:{id:"integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[l._v("#")]),l._v(" Integration")]),l._v(" "),t("p",{attrs:{synopsis:""}},[l._v("Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains.")]),l._v(" "),t("p",[l._v("The Interchain Accounts module contains two submodules. Each submodule has its own IBC application. The Interchain Accounts module should be registered as an "),t("code",[l._v("AppModule")]),l._v(" in the same way all SDK modules are registered on a chain, but each submodule should create its own "),t("code",[l._v("IBCModule")]),l._v(" as necessary. A route should be added to the IBC router for each submodule which will be used.")]),l._v(" "),t("p",[l._v("Chains who wish to support ICS-27 may elect to act as a host chain, a controller chain or both. Disabling host or controller functionality may be done statically by excluding the host or controller submodule entirely from the "),t("code",[l._v("app.go")]),l._v(" file or it may be done dynamically by taking advantage of the on-chain parameters which enable or disable the host or controller submodules.")]),l._v(" "),t("p",[l._v("Interchain Account authentication modules (both custom or generic, such as the "),t("code",[l._v("x/gov")]),l._v(", "),t("code",[l._v("x/group")]),l._v(" or "),t("code",[l._v("x/auth")]),l._v(" Cosmos SDK modules) can send messages to the controller submodule's "),t("RouterLink",{attrs:{to:"/apps/interchain-accounts/messages.html"}},[t("code",[l._v("MsgServer")])]),l._v(" to register interchain accounts and send packets to the interchain account. To accomplish this, the authentication module needs to be composed with "),t("code",[l._v("baseapp")]),l._v("'s "),t("code",[l._v("MsgServiceRouter")]),l._v(".")],1),l._v(" "),t("p",[t("img",{attrs:{src:a(568),alt:"ICAv6"}})]),l._v(" "),t("h2",{attrs:{id:"example-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-integration"}},[l._v("#")]),l._v(" Example integration")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvCgovLyBSZWdpc3RlciB0aGUgQXBwTW9kdWxlIGZvciB0aGUgSW50ZXJjaGFpbiBBY2NvdW50cyBtb2R1bGUgYW5kIHRoZSBhdXRoZW50aWNhdGlvbiBtb2R1bGUKLy8gTm90ZTogTm8gYGljYWF1dGhgIGV4aXN0cywgdGhpcyBtdXN0IGJlIHN1YnN0aXR1dGVkIHdpdGggYW4gYWN0dWFsIEludGVyY2hhaW4gQWNjb3VudHMgYXV0aGVudGljYXRpb24gbW9kdWxlCk1vZHVsZUJhc2ljcyA9IG1vZHVsZS5OZXdCYXNpY01hbmFnZXIoCiAgLi4uCiAgaWNhLkFwcE1vZHVsZUJhc2lje30sCiAgaWNhYXV0aC5BcHBNb2R1bGVCYXNpY3t9LAogIC4uLgopCgouLi4gCgovLyBBZGQgbW9kdWxlIGFjY291bnQgcGVybWlzc2lvbnMgZm9yIHRoZSBJbnRlcmNoYWluIEFjY291bnRzIG1vZHVsZQovLyBPbmx5IG5lY2Vzc2FyeSBmb3IgaG9zdCBjaGFpbiBmdW5jdGlvbmFsaXR5Ci8vIEVhY2ggSW50ZXJjaGFpbiBBY2NvdW50IGNyZWF0ZWQgb24gdGhlIGhvc3QgY2hhaW4gaXMgZGVyaXZlZCBmcm9tIHRoZSBtb2R1bGUgYWNjb3VudCBjcmVhdGVkCm1hY2NQZXJtcyA9IG1hcFtzdHJpbmddW11zdHJpbmd7CiAgLi4uCiAgaWNhdHlwZXMuTW9kdWxlTmFtZTogICAgICAgICAgICBuaWwsCn0KCi4uLgoKLy8gQWRkIEludGVyY2hhaW4gQWNjb3VudHMgS2VlcGVycyBmb3IgZWFjaCBzdWJtb2R1bGUgdXNlZCBhbmQgdGhlIGF1dGhlbnRpY2F0aW9uIG1vZHVsZQovLyBJZiBhIHN1Ym1vZHVsZSBpcyBiZWluZyBzdGF0aWNhbGx5IGRpc2FibGVkLCB0aGUgYXNzb2NpYXRlZCBLZWVwZXIgZG9lcyBub3QgbmVlZCB0byBiZSBhZGRlZC4gCnR5cGUgQXBwIHN0cnVjdCB7CiAgLi4uCgogIElDQUNvbnRyb2xsZXJLZWVwZXIgaWNhY29udHJvbGxlcmtlZXBlci5LZWVwZXIKICBJQ0FIb3N0S2VlcGVyICAgICAgIGljYWhvc3RrZWVwZXIuS2VlcGVyCiAgSUNBQXV0aEtlZXBlciAgICAgICBpY2FhdXRoa2VlcGVyLktlZXBlcgoKICAuLi4KfQoKLi4uCgovLyBDcmVhdGUgc3RvcmUga2V5cyBmb3IgZWFjaCBzdWJtb2R1bGUgS2VlcGVyIGFuZCB0aGUgYXV0aGVudGljYXRpb24gbW9kdWxlCmtleXMgOj0gc2RrLk5ld0tWU3RvcmVLZXlzKAogIC4uLgogIGljYWNvbnRyb2xsZXJ0eXBlcy5TdG9yZUtleSwKICBpY2Fob3N0dHlwZXMuU3RvcmVLZXksCiAgaWNhYXV0aHR5cGVzLlN0b3JlS2V5LAogIC4uLgopCgouLi4gCgovLyBDcmVhdGUgdGhlIHNjb3BlZCBrZWVwZXJzIGZvciBlYWNoIHN1Ym1vZHVsZSBrZWVwZXIgYW5kIGF1dGhlbnRpY2F0aW9uIGtlZXBlcgpzY29wZWRJQ0FDb250cm9sbGVyS2VlcGVyIDo9IGFwcC5DYXBhYmlsaXR5S2VlcGVyLlNjb3BlVG9Nb2R1bGUoaWNhY29udHJvbGxlcnR5cGVzLlN1Yk1vZHVsZU5hbWUpCnNjb3BlZElDQUhvc3RLZWVwZXIgOj0gYXBwLkNhcGFiaWxpdHlLZWVwZXIuU2NvcGVUb01vZHVsZShpY2Fob3N0dHlwZXMuU3ViTW9kdWxlTmFtZSkKc2NvcGVkSUNBQXV0aEtlZXBlciA6PSBhcHAuQ2FwYWJpbGl0eUtlZXBlci5TY29wZVRvTW9kdWxlKGljYWF1dGh0eXBlcy5Nb2R1bGVOYW1lKQoKLi4uCgovLyBDcmVhdGUgdGhlIEtlZXBlciBmb3IgZWFjaCBzdWJtb2R1bGUKYXBwLklDQUNvbnRyb2xsZXJLZWVwZXIgPSBpY2Fjb250cm9sbGVya2VlcGVyLk5ld0tlZXBlcigKICBhcHBDb2RlYywga2V5c1tpY2Fjb250cm9sbGVydHlwZXMuU3RvcmVLZXldLCBhcHAuR2V0U3Vic3BhY2UoaWNhY29udHJvbGxlcnR5cGVzLlN1Yk1vZHVsZU5hbWUpLAogIGFwcC5JQkNLZWVwZXIuQ2hhbm5lbEtlZXBlciwgLy8gbWF5IGJlIHJlcGxhY2VkIHdpdGggbWlkZGxld2FyZSBzdWNoIGFzIGljczI5IGZlZQogIGFwcC5JQkNLZWVwZXIuQ2hhbm5lbEtlZXBlciwgJmFtcDthcHAuSUJDS2VlcGVyLlBvcnRLZWVwZXIsCiAgc2NvcGVkSUNBQ29udHJvbGxlcktlZXBlciwgYXBwLk1zZ1NlcnZpY2VSb3V0ZXIoKSwKKQphcHAuSUNBSG9zdEtlZXBlciA9IGljYWhvc3RrZWVwZXIuTmV3S2VlcGVyKAogIGFwcENvZGVjLCBrZXlzW2ljYWhvc3R0eXBlcy5TdG9yZUtleV0sIGFwcC5HZXRTdWJzcGFjZShpY2Fob3N0dHlwZXMuU3ViTW9kdWxlTmFtZSksCiAgYXBwLklCQ0tlZXBlci5DaGFubmVsS2VlcGVyLCAvLyBtYXkgYmUgcmVwbGFjZWQgd2l0aCBtaWRkbGV3YXJlIHN1Y2ggYXMgaWNzMjkgZmVlCiAgYXBwLklCQ0tlZXBlci5DaGFubmVsS2VlcGVyLCAmYW1wO2FwcC5JQkNLZWVwZXIuUG9ydEtlZXBlciwKICBhcHAuQWNjb3VudEtlZXBlciwgc2NvcGVkSUNBSG9zdEtlZXBlciwgYXBwLk1zZ1NlcnZpY2VSb3V0ZXIoKSwKKQoKLy8gQ3JlYXRlIEludGVyY2hhaW4gQWNjb3VudHMgQXBwTW9kdWxlCmljYU1vZHVsZSA6PSBpY2EuTmV3QXBwTW9kdWxlKCZhbXA7YXBwLklDQUNvbnRyb2xsZXJLZWVwZXIsICZhbXA7YXBwLklDQUhvc3RLZWVwZXIpCgovLyBDcmVhdGUgeW91ciBJbnRlcmNoYWluIEFjY291bnRzIGF1dGhlbnRpY2F0aW9uIG1vZHVsZQphcHAuSUNBQXV0aEtlZXBlciA9IGljYWF1dGhrZWVwZXIuTmV3S2VlcGVyKGFwcENvZGVjLCBrZXlzW2ljYWF1dGh0eXBlcy5TdG9yZUtleV0sIGFwcC5Nc2dTZXJ2aWNlUm91dGVyKCkpCgovLyBJQ0EgYXV0aCBBcHBNb2R1bGUKaWNhQXV0aE1vZHVsZSA6PSBpY2FhdXRoLk5ld0FwcE1vZHVsZShhcHBDb2RlYywgYXBwLklDQUF1dGhLZWVwZXIpCgovLyBDcmVhdGUgY29udHJvbGxlciBJQkMgYXBwbGljYXRpb24gc3RhY2sgYW5kIGhvc3QgSUJDIG1vZHVsZSBhcyBkZXNpcmVkCmljYUNvbnRyb2xsZXJTdGFjayA6PSBpY2Fjb250cm9sbGVyLk5ld0lCQ01pZGRsZXdhcmUobmlsLCBhcHAuSUNBQ29udHJvbGxlcktlZXBlcikKaWNhSG9zdElCQ01vZHVsZSA6PSBpY2Fob3N0Lk5ld0lCQ01vZHVsZShhcHAuSUNBSG9zdEtlZXBlcikKCi8vIFJlZ2lzdGVyIGhvc3QgYW5kIGF1dGhlbnRpY2F0aW9uIHJvdXRlcwppYmNSb3V0ZXIuCiAgQWRkUm91dGUoaWNhY29udHJvbGxlcnR5cGVzLlN1Yk1vZHVsZU5hbWUsIGljYUNvbnRyb2xsZXJTdGFjaykuCiAgQWRkUm91dGUoaWNhaG9zdHR5cGVzLlN1Yk1vZHVsZU5hbWUsIGljYUhvc3RJQkNNb2R1bGUpCi4uLgoKLy8gUmVnaXN0ZXIgSW50ZXJjaGFpbiBBY2NvdW50cyBhbmQgYXV0aGVudGljYXRpb24gbW9kdWxlIEFwcE1vZHVsZSdzCmFwcC5tb2R1bGVNYW5hZ2VyID0gbW9kdWxlLk5ld01hbmFnZXIoCiAgLi4uCiAgaWNhTW9kdWxlLAogIGljYUF1dGhNb2R1bGUsCikKCi4uLgoKLy8gQWRkIEludGVyY2hhaW4gQWNjb3VudHMgdG8gYmVnaW4gYmxvY2tlciBsb2dpYwphcHAubW9kdWxlTWFuYWdlci5TZXRPcmRlckJlZ2luQmxvY2tlcnMoCiAgLi4uCiAgaWNhdHlwZXMuTW9kdWxlTmFtZSwKICAuLi4KKQoKLy8gQWRkIEludGVyY2hhaW4gQWNjb3VudHMgdG8gZW5kIGJsb2NrZXIgbG9naWMKYXBwLm1vZHVsZU1hbmFnZXIuU2V0T3JkZXJFbmRCbG9ja2VycygKICAuLi4KICBpY2F0eXBlcy5Nb2R1bGVOYW1lLAogIC4uLgopCgovLyBBZGQgSW50ZXJjaGFpbiBBY2NvdW50cyBtb2R1bGUgSW5pdEdlbmVzaXMgbG9naWMKYXBwLm1vZHVsZU1hbmFnZXIuU2V0T3JkZXJJbml0R2VuZXNpcygKICAuLi4KICBpY2F0eXBlcy5Nb2R1bGVOYW1lLAogIC4uLgopCgovLyBpbml0UGFyYW1zS2VlcGVyIGluaXQgcGFyYW1zIGtlZXBlciBhbmQgaXRzIHN1YnNwYWNlcwpmdW5jIGluaXRQYXJhbXNLZWVwZXIoYXBwQ29kZWMgY29kZWMuQmluYXJ5Q29kZWMsIGxlZ2FjeUFtaW5vICpjb2RlYy5MZWdhY3lBbWlubywga2V5LCB0a2V5IHNkay5TdG9yZUtleSkgcGFyYW1za2VlcGVyLktlZXBlciB7CiAgLi4uCiAgcGFyYW1zS2VlcGVyLlN1YnNwYWNlKGljYWhvc3R0eXBlcy5TdWJNb2R1bGVOYW1lKQogIHBhcmFtc0tlZXBlci5TdWJzcGFjZShpY2Fjb250cm9sbGVydHlwZXMuU3ViTW9kdWxlTmFtZSkKICAuLi4KfQo="}}),l._v(" "),t("p",[l._v("If no custom athentication module is needed and a generic Cosmos SDK authentication module can be used, then from the sample integration code above all references to "),t("code",[l._v("ICAAuthKeeper")]),l._v(" and "),t("code",[l._v("icaAuthModule")]),l._v(" can be removed. That's it, the following code would not be needed:")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlIHlvdXIgSW50ZXJjaGFpbiBBY2NvdW50cyBhdXRoZW50aWNhdGlvbiBtb2R1bGUKYXBwLklDQUF1dGhLZWVwZXIgPSBpY2FhdXRoa2VlcGVyLk5ld0tlZXBlcihhcHBDb2RlYywga2V5c1tpY2FhdXRodHlwZXMuU3RvcmVLZXldLCBhcHAuTXNnU2VydmljZVJvdXRlcigpKQoKLy8gSUNBIGF1dGggQXBwTW9kdWxlCmljYUF1dGhNb2R1bGUgOj0gaWNhYXV0aC5OZXdBcHBNb2R1bGUoYXBwQ29kZWMsIGFwcC5JQ0FBdXRoS2VlcGVyKQo="}}),l._v(" "),t("h3",{attrs:{id:"using-submodules-exclusively"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-submodules-exclusively"}},[l._v("#")]),l._v(" Using submodules exclusively")]),l._v(" "),t("p",[l._v("As described above, the Interchain Accounts application module is structured to support the ability of exclusively enabling controller or host functionality.\nThis can be achieved by simply omitting either controller or host "),t("code",[l._v("Keeper")]),l._v(" from the Interchain Accounts "),t("code",[l._v("NewAppModule")]),l._v(" constructor function, and mounting only the desired submodule via the "),t("code",[l._v("IBCRouter")]),l._v(".\nAlternatively, submodules can be enabled and disabled dynamically using "),t("RouterLink",{attrs:{to:"/apps/interchain-accounts/parameters.html"}},[l._v("on-chain parameters")]),l._v(".")],1),l._v(" "),t("p",[l._v("The following snippets show basic examples of statically disabling submodules using "),t("code",[l._v("app.go")]),l._v(".")]),l._v(" "),t("h4",{attrs:{id:"disabling-controller-chain-functionality"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-controller-chain-functionality"}},[l._v("#")]),l._v(" Disabling controller chain functionality")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlIEludGVyY2hhaW4gQWNjb3VudHMgQXBwTW9kdWxlIG9taXR0aW5nIHRoZSBjb250cm9sbGVyIGtlZXBlcgppY2FNb2R1bGUgOj0gaWNhLk5ld0FwcE1vZHVsZShuaWwsICZhbXA7YXBwLklDQUhvc3RLZWVwZXIpCgovLyBDcmVhdGUgaG9zdCBJQkMgTW9kdWxlCmljYUhvc3RJQkNNb2R1bGUgOj0gaWNhaG9zdC5OZXdJQkNNb2R1bGUoYXBwLklDQUhvc3RLZWVwZXIpCgovLyBSZWdpc3RlciBob3N0IHJvdXRlCmliY1JvdXRlci5BZGRSb3V0ZShpY2Fob3N0dHlwZXMuU3ViTW9kdWxlTmFtZSwgaWNhSG9zdElCQ01vZHVsZSkK"}}),l._v(" "),t("h4",{attrs:{id:"disabling-host-chain-functionality"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-host-chain-functionality"}},[l._v("#")]),l._v(" Disabling host chain functionality")]),l._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlIEludGVyY2hhaW4gQWNjb3VudHMgQXBwTW9kdWxlIG9taXR0aW5nIHRoZSBob3N0IGtlZXBlcgppY2FNb2R1bGUgOj0gaWNhLk5ld0FwcE1vZHVsZSgmYW1wO2FwcC5JQ0FDb250cm9sbGVyS2VlcGVyLCBuaWwpCgoKLy8gT3B0aW9uYWxseSBpbnN0YW50aWF0ZSB5b3VyIGN1c3RvbSBhdXRoZW50aWNhdGlvbiBtb2R1bGUgaWYgbmVlZGVkLCBvciBub3Qgb3RoZXJ3aXNlCi4uLgoKLy8gQ3JlYXRlIGNvbnRyb2xsZXIgSUJDIGFwcGxpY2F0aW9uIHN0YWNrCmljYUNvbnRyb2xsZXJTdGFjayA6PSBpY2Fjb250cm9sbGVyLk5ld0lCQ01pZGRsZXdhcmUobmlsLCBhcHAuSUNBQ29udHJvbGxlcktlZXBlcikKCi8vIFJlZ2lzdGVyIGNvbnRyb2xsZXIgcm91dGUKaWJjUm91dGVyLkFkZFJvdXRlKGljYWNvbnRyb2xsZXJ0eXBlcy5TdWJNb2R1bGVOYW1lLCBpY2FDb250cm9sbGVyU3RhY2spCg=="}})],1)}),[],!1,null,null,null);c.default=o.exports}}]);