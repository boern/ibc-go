(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{677:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"roadmap-ibc-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-ibc-go"}},[e._v("#")]),e._v(" Roadmap ibc-go")]),e._v(" "),a("p",[a("em",[e._v("Lastest update: July 7, 2022")])]),e._v(" "),a("p",[e._v("This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications.")]),e._v(" "),a("p",[e._v("This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans.")]),e._v(" "),a("h2",{attrs:{id:"q3-2022"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-2022"}},[e._v("#")]),e._v(" Q3 - 2022")]),e._v(" "),a("p",[e._v("At a high level we will focus on:")]),e._v(" "),a("h3",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Releasing "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/26",target:"_blank",rel:"noopener noreferrer"}},[e._v("v4.0.0"),a("OutboundLink")],1),e._v(", which includes the ICS-29 Fee Middleware module.")]),e._v(" "),a("li",[e._v("Finishing and releasing the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/16",target:"_blank",rel:"noopener noreferrer"}},[e._v("refactoring of 02-client"),a("OutboundLink")],1),e._v(". This refactor will make the development of light clients easier.")]),e._v(" "),a("li",[e._v("Starting the implementation of channel upgradability (see "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1599",target:"_blank",rel:"noopener noreferrer"}},[e._v("epic"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/29",target:"_blank",rel:"noopener noreferrer"}},[e._v("alpha milestone"),a("OutboundLink")],1),e._v(") with the goal of cutting an alpha1 pre-release by the end of the quarter. Channel upgradability will allow chains to renegotiate an existing channel to take advantage of new features without having to create a new channel, thus preserving all existing packet state processed on the channel.")]),e._v(" "),a("li",[e._v("Implementing the new "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/31",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ORDERED_ALLOW_TIMEOUT")]),e._v(" channel type"),a("OutboundLink")],1),e._v(" and hopefully releasing it as well. This new channel type will allow packets on an ordered channel to timeout without causing the closure of the channel.")])]),e._v(" "),a("h3",{attrs:{id:"testing-and-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-and-infrastructure"}},[e._v("#")]),e._v(" Testing and infrastructure")]),e._v(" "),a("ul",[a("li",[e._v("Adding "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/32",target:"_blank",rel:"noopener noreferrer"}},[e._v("automated e2e tests"),a("OutboundLink")],1),e._v(" to the repo's CI.")])]),e._v(" "),a("h3",{attrs:{id:"documentation-and-backlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation-and-backlog"}},[e._v("#")]),e._v(" Documentation and backlog")]),e._v(" "),a("ul",[a("li",[e._v("Finishing and releasing the upgrade to Cosmos SDK v0.46.")]),e._v(" "),a("li",[e._v("Writing the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/59",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client implementation guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Working on "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/28",target:"_blank",rel:"noopener noreferrer"}},[e._v("core backlog issues"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Depending on the timeline of the Cosmos SDK, implementing and testing the changes needed to support the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/21",target:"_blank",rel:"noopener noreferrer"}},[e._v("transtion to SMT storage"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("We have also received a lot of feedback to improve Interchain Accounts and we might also work on a few things, but will depend on priorities and availability.")]),e._v(" "),a("p",[e._v("For a detail view of each iteration's planned work, please check out our "),a("a",{attrs:{href:"https://github.com/orgs/cosmos/projects/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("project board"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"release-schedule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-schedule"}},[e._v("#")]),e._v(" Release schedule")]),e._v(" "),a("h4",{attrs:{id:"july"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#july"}},[e._v("#")]),e._v(" "),a("strong",[e._v("July")])]),e._v(" "),a("p",[e._v("We will probably cut at least one more release candidate of v4.0.0 before the final release, which should happen around the end of the month.")]),e._v(" "),a("p",[e._v("For the Rho upgrade of the Cosmos Hub we will also release a new minor version of v3 with SDK 0.46.")]),e._v(" "),a("h4",{attrs:{id:"august"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#august"}},[e._v("#")]),e._v(" "),a("strong",[e._v("August")])]),e._v(" "),a("p",[e._v("In the first half we will probably start cutting release candidates for the 02-client refactor. Final release would most likely come out at the end of the month or beginning of September.")]),e._v(" "),a("h4",{attrs:{id:"september"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#september"}},[e._v("#")]),e._v(" "),a("strong",[e._v("September")])]),e._v(" "),a("p",[e._v("We might cut some pre-releases for the new channel type, and by the end of the month we expect to cut the first alpha pre-release for channel upgradability.")]),e._v(" "),a("h2",{attrs:{id:"q4-2022"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-2022"}},[e._v("#")]),e._v(" Q4 - 2022")]),e._v(" "),a("p",[e._v("We will continue the implementation and cut the final release of "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics/UPGRADES.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("channel upgradability"),a("OutboundLink")],1),e._v(". At the end of Q3 or maybe beginning of Q4 we might also work on designing the implementation and scoping the engineering work to add support for "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/pull/741/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("multihop channels"),a("OutboundLink")],1),e._v(", so that we could start the implementation of this feature during Q4 (but this is still be decided).")])])}),[],!1,null,null,null);t.default=n.exports}}]);