(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{191:function(e,t,n){"use strict";var a=n(13),r=n.n(a),i=n(21),o=n.n(i),l=n(0),c=n.n(l),s=n(4),m=n(181),u=Object(s.c)(m.a).withConfig({displayName:"Style__Typography",componentId:"slyv2-0"})(["a{display:none;visibility:hidden;};"]);t.a=function(e){var t=e.title,n=o()(e,["title"]),a=t.toLowerCase().replace(/\W/g,"_");return c.a.createElement(u,r()({id:a},n),t)}},193:function(e,t,n){"use strict";n(0);t.a=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.scrollTo(0,0)}},194:function(e,t,n){"use strict";var a=n(14),r=n.n(a),i=n(0),o=n.n(i),l=n(73),c=n(186),s=n(181),m=n(4),u=Object(m.c)(s.a).withConfig({displayName:"Style__Subtitle",componentId:"sc-1a55qkq-0"})(["line-height:1.6 !important;"]),d=Object(m.c)(s.a).withConfig({displayName:"Style__Label",componentId:"sc-1a55qkq-1"})(["font-weight:bold !important;padding-bottom:32px;letter-spacing:0.5px;"]),p=Object(m.c)("header").withConfig({displayName:"Style__Wrap",componentId:"sc-1a55qkq-2"})(["background:var(--background-secondary-color);display:flex;flex-direction:column;padding:11vmin var(--padding-site) 0 var(--padding-site);width:100%;sup{font-size:0.3em;};",";"],function(e){var t=e.height;return t&&"\n    min-height: ".concat(t,";\n  ")});t.a=function(e){var t=e.height,n=e.label,a=e.subtitle,i=e.title,m=Object(l.a)(),g=r()(m,2),f=g[0],h=g[1];return o.a.createElement(c.a,{in:f>.25},o.a.createElement(p,{height:t,ref:h},o.a.createElement(d,{align:"center",color:"primary",gutterBottom:!0,variant:"h6"},n),o.a.createElement(s.a,{gutterBottom:!0,align:"center",variant:"h2"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:i}})),o.a.createElement(u,{align:"center",variant:"h6"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))))}},198:function(e,t,n){"use strict";var a=n(14),r=n.n(a),i=n(0),o=n.n(i),l=n(32),c=n(73),s=n(181),m=n(186),u=n(4),d=n(180),p=n(191),g=n(48),f=Object(u.c)(p.a).withConfig({displayName:"Style__Anchor",componentId:"sc-6ns15j-0"})(["font-family:Lato,sans-serif !important;font-weight:bold !important;"]),h=Object(u.c)(d.a).withConfig({displayName:"Style__Button",componentId:"sc-6ns15j-1"})(["background:var(--primary-color) !important;margin-top:21px !important;span{color:var(--background-default-color);};",""],function(e){return e.primary&&"\n    background: var(--background-secondary-color) !important;\n  \n    span {\n      color: var(--secondary-color);\n    };\n  "}),b=Object(u.c)("section").withConfig({displayName:"Style__Content",componentId:"sc-6ns15j-2"})(["flex:1 1 550px;",";",";"],function(){return window.isMobile&&"\n    h3, p {\n      text-align: center;\n    };\n  "},function(){return!window.isMobile&&"\n    margin-right: 16px;\n  "}),y=Object(u.c)(g.a).withConfig({displayName:"Style__Wrap",componentId:"sc-6ns15j-3"})(["   align-items:center;background:var(--secondary-color);color:var(--text-invert-color);display:flex;flex-wrap:wrap;justify-content:center;",";"],function(e){return e.primary&&"\n    background: var(--primary-color);\n  "});t.a=Object(l.f)(function(e){var t=e.primary,n=e.history,a=e.subtitle,i=void 0===a?"We'll have a member of our team reach out to you right away.":a,l=e.title,u=void 0===l?"Ready to get started?":l,d=Object(c.a)(),p=r()(d,2),g=p[0],v=p[1];return o.a.createElement(y,{primary:t?1:0,padding:"9vh",ref:v},o.a.createElement(m.a,{in:g>.25,timeout:400},o.a.createElement(b,null,o.a.createElement(f,{gutterBottom:!0,color:"inherit",title:u,variant:"h3"}),o.a.createElement(s.a,{color:"inherit",paragraph:!0,variant:"h6"},i))),o.a.createElement(h,{onClick:function(){return n.push("/contact")},primary:t?1:0,size:"large",variant:"contained"},"Contact us"))})},238:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),o=n.n(i),l=(n(5),n(72)),c=n(25),s=n(40),m=n(23),u=n(7),d={entering:{transform:"none"},entered:{transform:"none"}},p={enter:c.b.enteringScreen,exit:c.b.leavingScreen},g=o.a.forwardRef(function(e,t){var n=e.children,i=e.in,c=e.onEnter,g=e.onExit,f=e.style,h=e.timeout,b=void 0===h?p:h,y=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),v=Object(s.a)(),E=Object(u.c)(n.ref,t);return o.a.createElement(l.a,Object(a.a)({appear:!0,in:i,onEnter:function(e,t){Object(m.b)(e);var n=Object(m.a)({style:f,timeout:b},{mode:"enter"});e.style.webkitTransition=v.transitions.create("transform",n),e.style.transition=v.transitions.create("transform",n),c&&c(e,t)},onExit:function(e){var t=Object(m.a)({style:f,timeout:b},{mode:"exit"});e.style.webkitTransition=v.transitions.create("transform",t),e.style.transition=v.transitions.create("transform",t),g&&g(e)},timeout:b},y),function(e,t){return o.a.cloneElement(n,Object(a.a)({style:Object(a.a)({transform:"scale(0)",visibility:"exited"!==e||i?void 0:"hidden"},d[e],{},f,{},n.props.style),ref:E},t))})});t.a=g},451:function(e,t,n){e.exports=n.p+"static/Education_Phone.png"},526:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(193),o=n(194),l=n(14),c=n.n(l),s=n(73),m=n(181),u=n(238),d=n(191),p=n(60),g=n(451),f=n.n(g),h=n(4),b=n(48),y=Object(h.c)("article").withConfig({displayName:"Style__Article",componentId:"sc-1xqju58-0"})(["align-items:stretch;display:flex;flex-wrap:wrap;justify-content:center;"]),v=Object(h.c)(m.a).withConfig({displayName:"Style__Subtitle",componentId:"sc-1xqju58-1"})(["margin:auto !important;max-width:840px;padding-bottom:7vmin;"]),E=Object(h.c)("ul").withConfig({displayName:"Style__List",componentId:"sc-1xqju58-2"})(["display:flex;flex-direction:column;flex:0 1 550px;padding-left:8vw;",";"],function(){return!window.isMobile&&"\n    li:nth-child(1) {\n      padding-top: 20%;\n    };\n    li:nth-child(2) {\n      padding-top: 25%;\n    };\n    li:nth-child(3) {\n      padding-top: 12%;\n    };\n  "}),w=Object(h.c)("li").withConfig({displayName:"Style__ListItem",componentId:"sc-1xqju58-3"})(["position:relative;padding:6px 0;",";"],function(){return!window.isMobile&&Object(h.b)(["&::before{border-top:2px solid var(--text-secondary-color);bottom:30%;content:'';left:-10vw;position:absolute;width:8vw;};"])}),j=Object(h.c)(b.a).withConfig({displayName:"Style__Wrap",componentId:"sc-1xqju58-4"})(["background:var(--background-default-color);"]),x=function(){var e=Object(s.a)(),t=c()(e,2),n=t[0],a=t[1];return r.a.createElement(j,{padding:"12vmin",ref:a},r.a.createElement(d.a,{align:"center",gutterBottom:!0,title:"Build. Manage. Deploy.",variant:"h3"}),r.a.createElement(v,{align:"center",variant:"h6"},"Introducing the world’s first platform that allows companies to design, schedule, and launch global equity compensation education campaigns, all from a mobile device."),r.a.createElement("br",null),r.a.createElement(y,null,r.a.createElement(u.a,{in:n>.1,timeout:500},r.a.createElement(p.a,{alt:"Phone",src:f.a,width:"380px"})),r.a.createElement(E,null,r.a.createElement(w,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Build a campaign fit for your company")),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0},"Mix and match ready-made content to help tailor your company's education campaign.")),r.a.createElement(w,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Scheduled deployment globally")),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0},"Pick when, where, and how you want to launch your campaign to your global workforce.")),r.a.createElement(w,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Measure the results")),r.a.createElement(m.a,{variant:"subtitle1",paragraph:!0},"We'll send you regular updates to help you measure the effectiveness of your education campaign globally.")))))},_=n(186),O=Object(h.c)(m.a).withConfig({displayName:"Style__Source",componentId:"sc-11jf6b4-0"})(["align-self:flex-end;padding-top:38px;width:100%;"]),S=Object(h.c)(b.a).withConfig({displayName:"Style__Wrap",componentId:"sc-11jf6b4-1"})(["background:var(--background-invert-color);color:var(--text-invert-color);display:flex;flex-direction:column;justify-content:center;align-items:center;"]),k=function(){var e=Object(s.a)(),t=c()(e,2),n=t[0],a=t[1];return r.a.createElement(S,{padding:"12vh",ref:a},r.a.createElement("div",null,r.a.createElement(d.a,{paragraph:!0,title:"DID YOU KNOW...",variant:"subtitle1"}),r.a.createElement(_.a,{in:n>.25},r.a.createElement("div",null,r.a.createElement(m.a,{variant:"h3"},"70% of employees are not participating in"),r.a.createElement(m.a,{variant:"h3"},"their ESPP, ",r.a.createElement("u",null,"forfeiting $48 billion annually"),"."))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,{variant:"caption"},"Source: NASPP Stock Plan Administration Survey, Babenko & Sen: Money Left On The Table: An Analysis Of Participation In Employee Stock Purchase Plans.")))},C=Object(h.c)("section").withConfig({displayName:"Style__VideoContainer",componentId:"h7llu-0"})(["  width:50%;display:flex;flex:1 1 auto;.video-js .vjs-big-play-button{display:none !important;}"]),I=Object(h.c)("section").withConfig({displayName:"Style__Wrap",componentId:"h7llu-1"})(["  display:flex;align-items:center;flex-wrap:wrap;h3{flex:1 1 auto;",";",";};sup{font-size:18px;};"],function(){return!window.isMobile&&"\n      padding-left: var(--padding-site);\n    "},function(){return window.isMobile&&"\n      background: var(--background-invert-color);\n      color: var(--text-invert-color);\n      padding: 26px 0;\n      text-align: center;\n    "}),N=function(){return r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement(m.a,{variant:"h3"},"Why we built Carbon",r.a.createElement("sup",null,"TM"),"."),r.a.createElement(C,null,r.a.createElement("video",{id:"my-player",className:"video-js",controls:!0,preload:"auto",style:{height:300},"data-setup":"{}"},r.a.createElement("source",{src:"https://sitedev.carveredison.com/assets/A002_08020140_C007+1080.mp4",type:"video/mp4"}),r.a.createElement("p",{className:"vjs-no-js"},"To view this video please enable JavaScript, and consider upgrading to a web browser that",r.a.createElement("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video"))))))},M=n(198);t.default=function(){return Object(i.a)(),r.a.createElement(a.Fragment,null,r.a.createElement(o.a,{label:"EDUCATION",title:"Introducing Carbon<sup>TM</sup>"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x,null),r.a.createElement(k,null),r.a.createElement(N,null),r.a.createElement(M.a,null))}}}]);