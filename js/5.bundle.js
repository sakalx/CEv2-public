(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,n){"use strict";var a=n(13),i=n.n(a),o=n(21),r=n.n(o),l=n(0),c=n.n(l),s=n(4),d=n(181),u=Object(s.c)(d.a).withConfig({displayName:"Style__Typography",componentId:"slyv2-0"})(["a{display:none;visibility:hidden;};"]);t.a=function(e){var t=e.title,n=r()(e,["title"]),a=t.toLowerCase().replace(/\W/g,"_");return c.a.createElement(u,i()({id:a},n),t)}},193:function(e,t,n){"use strict";var a=n(0);t.a=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(a.useLayoutEffect)(function(){var e=window.location.hash;if(e){var t=document.querySelector(e);t&&t.scrollIntoView(!0)}else window.scrollTo(0,0)},[])}},194:function(e,t,n){"use strict";var a=n(14),i=n.n(a),o=n(0),r=n.n(o),l=n(73),c=n(186),s=n(181),d=n(4),u=Object(d.c)(s.a).withConfig({displayName:"Style__Subtitle",componentId:"sc-1a55qkq-0"})(["line-height:1.6 !important;"]),p=Object(d.c)(s.a).withConfig({displayName:"Style__Label",componentId:"sc-1a55qkq-1"})(["font-weight:bold !important;padding-bottom:32px;letter-spacing:0.5px;"]),m=Object(d.c)("header").withConfig({displayName:"Style__Wrap",componentId:"sc-1a55qkq-2"})(["background:var(--background-secondary-color);display:flex;flex-direction:column;padding:11vmin var(--padding-site) 0 var(--padding-site);width:100%;sup{font-size:0.3em;};",";"],function(e){var t=e.height;return t&&"\n    min-height: ".concat(t,";\n  ")});t.a=function(e){var t=e.height,n=e.label,a=e.subtitle,o=e.title,d=Object(l.a)(),h=i()(d,2),g=h[0],f=h[1];return r.a.createElement(c.a,{in:g>.25},r.a.createElement(m,{height:t,ref:f},r.a.createElement(p,{align:"center",color:"primary",gutterBottom:!0,variant:"h6"},n),r.a.createElement(s.a,{gutterBottom:!0,align:"center",variant:"h2"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:o}})),r.a.createElement(u,{align:"center",variant:"h6"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))))}},239:function(e,t,n){"use strict";var a=n(1),i=n(2),o=n(0),r=n.n(o),l=n(3),c=(n(5),n(72)),s=n(6),d=n(25),u=n(23),p=r.a.forwardRef(function(e,t){var n=e.children,o=e.classes,s=e.className,p=e.collapsedHeight,m=void 0===p?"0px":p,h=e.component,g=void 0===h?"div":h,f=e.in,b=e.onEnter,y=e.onEntered,v=e.onEntering,E=e.onExit,w=e.onExiting,x=e.style,j=e.theme,O=e.timeout,C=void 0===O?d.b.standard:O,k=Object(i.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","theme","timeout"]),S=r.a.useRef(),_=r.a.useRef(null),I=r.a.useRef();r.a.useEffect(function(){return function(){clearTimeout(S.current)}},[]);return r.a.createElement(c.a,Object(a.a)({in:f,onEnter:function(e,t){e.style.height=m,b&&b(e,t)},onEntered:function(e,t){e.style.height="auto",y&&y(e,t)},onEntering:function(e,t){var n=_.current?_.current.clientHeight:0,a=Object(u.a)({style:x,timeout:C},{mode:"enter"}).duration;if("auto"===C){var i=j.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),I.current=i}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),v&&v(e,t)},onExit:function(e){var t=_.current?_.current.clientHeight:0;e.style.height="".concat(t,"px"),E&&E(e)},onExiting:function(e){var t=_.current?_.current.clientHeight:0,n=Object(u.a)({style:x,timeout:C},{mode:"exit"}).duration;if("auto"===C){var a=j.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),I.current=a}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=m,w&&w(e)},addEndListener:function(e,t){"auto"===C&&(S.current=setTimeout(t,I.current||0))},timeout:"auto"===C?null:C},k),function(e,i){return r.a.createElement(g,Object(a.a)({className:Object(l.default)(o.container,s,{entered:o.entered,exited:!f&&"0px"===m&&o.hidden}[e]),style:Object(a.a)({minHeight:m},x),ref:t},i),r.a.createElement("div",{className:o.wrapper,ref:_},r.a.createElement("div",{className:o.wrapperInner},n)))})});p.muiSupportAuto=!0,t.a=Object(s.a)(function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},{withTheme:!0,name:"MuiCollapse"})(p)},240:function(e,t,n){"use strict";var a=n(58);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=(0,a(n(77)).default)(i.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},329:function(e,t,n){e.exports=n.p+"static/Team.jpg"},330:function(e,t,n){e.exports=n.p+"static/AS_CE19-min.jpg"},331:function(e,t,n){e.exports=n.p+"static/PS_CE19-min.jpg"},332:function(e,t,n){e.exports=n.p+"static/SG_CE19-min.jpg"},333:function(e,t,n){e.exports=n.p+"static/SP_CE19-min.jpg"},334:function(e,t,n){"use strict";var a=n(1),i=n(2),o=n(0),r=n.n(o),l=(n(5),n(3)),c=n(6),s=r.a.forwardRef(function(e,t){var n=e.classes,o=e.className,c=Object(i.a)(e,["classes","className"]);return r.a.createElement("div",Object(a.a)({className:Object(l.default)(n.root,o),ref:t},c))});t.a=Object(c.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(s)},335:function(e,t,n){"use strict";var a=n(1),i=n(8),o=n(2),r=n(0),l=n.n(r),c=(n(5),n(3)),s=n(71),d=n(185),u=n(6),p=l.a.forwardRef(function(e,t){var n=e.children,r=e.classes,u=e.className,p=e.disabled,m=void 0!==p&&p,h=e.expanded,g=e.expandIcon,f=e.IconButtonProps,b=e.onBlur,y=e.onChange,v=e.onClick,E=e.onFocusVisible,w=Object(o.a)(e,["children","classes","className","disabled","expanded","expandIcon","IconButtonProps","onBlur","onChange","onClick","onFocusVisible"]),x=l.a.useState(!1),j=Object(i.a)(x,2),O=j[0],C=j[1];return l.a.createElement(s.a,Object(a.a)({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":h,className:Object(c.default)(r.root,u,m&&r.disabled,h&&r.expanded,O&&r.focused),onFocusVisible:function(e){C(!0),E&&E(e)},onBlur:function(e){C(!1),b&&b(e)},onClick:function(e){y&&y(e),v&&v(e)},ref:t},w),l.a.createElement("div",{className:Object(c.default)(r.content,h&&r.expanded)},n),g&&l.a.createElement(d.a,Object(a.a)({disabled:m,className:Object(c.default)(r.expandIcon,h&&r.expanded),edge:"end",component:"div",tabIndex:-1,"aria-hidden":!0},f),g))});t.a=Object(u.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}},{name:"MuiExpansionPanelSummary"})(p)},523:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(193),r=n(194),l=n(180),c=n(4),s=n(48),d=Object(c.c)("a").withConfig({displayName:"Style__Link",componentId:"sc-1rzqwzl-0"})(["display:none;visibility:hidden;"]),u=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-1rzqwzl-1"})(["background:var(--background-secondary-color);display:flex;justify-content:center;padding-bottom:",";"],function(){return window.isMobile?"5vh":"24vh"}),p=function(){var e=Object(a.useRef)(null);return i.a.createElement(u,null,i.a.createElement(d,{href:"#open_positions",ref:e}),i.a.createElement(l.a,{color:"primary",onClick:function(){return e.current.click()},size:"large",variant:"contained"},"Open positions"))},m=n(14),h=n.n(m),g=n(73),f=n(184),b=n(60),y=n(329),v=n.n(y),E=Object(c.c)("div").withConfig({displayName:"Style__ImgContainer",componentId:"sc-8l7btk-0"})(["",";"],function(){return!window.isMobile&&Object(c.b)(["left:calc(50% - 390px);position:absolute;top:-17vh;"])}),w=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-8l7btk-1"})(["align-items:center;background:var(--background-default-color);display:flex;justify-content:center;padding:",";position:relative;",";"],function(){return window.isMobile?"0":"16px 0"},function(){return!window.isMobile&&Object(c.b)(["min-height:400px;"])}),x=function(){var e=Object(g.a)(),t=h()(e,2),n=t[0],a=t[1];return i.a.createElement(w,{ref:a},window.isMobile?i.a.createElement(b.a,{alt:"careers",src:v.a,width:"780px"}):i.a.createElement(f.a,{direction:"up",in:n>.1},i.a.createElement(E,null,i.a.createElement(b.a,{alt:"careers",src:v.a,width:"780px"}))))},j=n(181),O=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"oszpdj-0"})(["align-items:center;background:var(--text-default-color);color:var(--text-invert-color);display:flex;justify-content:center;h3{max-width:70vw;};"]),C=function(){return i.a.createElement(O,{padding:"10vh"},i.a.createElement(j.a,{align:"center",color:"inherit",variant:"h3"},"We build the technology and the tools to help\ncompanies and employees build wealth together."))},k=n(330),S=n.n(k),_=n(331),I=n.n(_),N=n(332),R=n.n(N),P=n(333),A=n.n(P),T=n(74),M=Object(c.c)("div").withConfig({displayName:"Style__Avatar",componentId:"sc-14pp9yq-0"})(["margin:16px 2.5vw;",";"],function(){return window.isMobile&&"\n    h5 {\n      color: var(--text-invert-color) !important;\n    };\n  "}),q=Object(c.c)(T.a).withConfig({displayName:"Style__AvatarContainer",componentId:"sc-14pp9yq-1"})(["",";"],function(){return!window.isMobile&&Object(c.b)(["position:absolute;top:130px;"])}),B=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-14pp9yq-2"})(["align-items:center;background:var(--secondary-color);color:var(--text-invert-color);display:flex;flex-direction:column;justify-content:flex-start;min-height:370px;position:relative;h3{",";};"],function(){return window.isMobile&&"\n    margin-bottom: 16px;\n  "}),D=function(){return i.a.createElement(B,{padding:"5vh"},i.a.createElement(j.a,{align:"center",color:"inherit",variant:"h3"},"Senior Leadership"),i.a.createElement(q,{justify:"center"},i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Aaron Shapiro",src:S.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"FOUNDER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Aaron Shapiro")),i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Susan Peters",src:A.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"CHIEF OPERATING OFFICER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Susan Peters")),i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Prakash Sinha",src:I.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"CHIEF TECHNOLOGY OFFICER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Prakash Sinha")),i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Sarah Gielchinsky",src:R.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"CHIEF CREATIVE OFFICER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Sarah Gielchinsky"))))},F=[{id:1,role:"Back-end Engineer",summary:"Carver Edison is looking to hire several back-end Engineers to help us build the next generation of our flagship products. You’ll have the chance to solve complex problems with global reach and impact. The ideal candidates are relentless problem solvers who can design, architect and execute end-to-end technology solution using Python, Docker, Flask, Node.js, PostgreSQL, GraphQL and AWS. You will partner with the team to bring customer touchpoints to life and will be responsible for the technical execution of back-end projects through hands-on development and prototyping. This position reports directly to the CTO.",department:"Tech & Engineering",responsibilities:["Develop Python applications (we use Flask/GraphQL and host everything on AWS)","Build technology that bridges the complex operational and digital worlds.","Architect and build complex APIs","Work with large datasets to optimize the client experience."],qualifications:["B.S. in Computer Science or equivalent.","5+ years of experience working as a backend engineer.","Experience with Python, SqlAlchemy, and Flask in a production environment","Deep understanding of scalable web applications","Deep understanding of core modern web service concepts such as API design and data modeling","Experience with Design Patterns, Distributed Application Architecture, FINRA and NSA standard security practices."]},{id:2,role:"Brand Copywriter",summary:"Carver Edison is looking for a Brand Copywriter to join our internal brand team. This role is perfect for a self-starting, passionate creative who is financial savvy and able to quickly adopt to our brand promise and tone across all mediums in a fast-paced, high growth environment. Your primary role will be to write branded communications across web, digital, blog, and print. This position reports directly to the Chief Creative Officer.",department:"Creative",responsibilities:["Product copy","Client communications","Blog content","Ad campaign content","FAQs","Collaborate with marketing designers to elevate the visuals on our campaign"],qualifications:["Bachelor's Degree","3+ years of startup marketing experience","Excellent writer","Fintech or B2B experience a strong plus","Strong organizational and time management skills; ability to shift gears quickly and effectively","Effective communication and interpersonal skills, internally and with outside vendors and partners w/ extreme attention to detail"]},{id:3,role:"Senior Product Manager",summary:"As a Senior Product Manager for financial products, you will work on designing, enhancing and supporting products across the company. You will work closely with cross functional teams including strategy, design, engineering and marketing to define our roadmap and launch new products. You will own both the user experience and back end integration with technology partners.",department:"Product",responsibilities:["Drive the entire product lifecycle of your product - from conception, requirements gathering & design, development, and testing all the way through launch","Collaborate with business owners and stakeholders across the company to identify opportunities and align requirements","Establish and communicate the product strategy and roadmap to other teams and executives","Prioritize features and coordinate product delivery with a dedicated team of engineers and designers","Lead discussions with vendors at all phases of the engagement: selection, integration and operation"],qualifications:["5+ years of prior product management experience with a focus on financial products","Experience working on product roles in a high-growth company","Strong understanding of market and technology landscape in banking","Experience with one or more financial products including deposits, cash management, payments, cards, and lending","Experience with partner API integrations, developer platforms and ecosystem programs","B.S. in Engineering, Computer Science, Math, Statistics or other quantitative field (preferred)"]},{id:4,role:"Front-end Engineer",summary:"Carver Edison is looking to hire several front-end engineers to help us build the next generation of our flagship products. You’ll have the chance to solve complex problems with global reach and impact. The ideal candidates are relentless problem solvers who can design, architect and execute end-to-end technology solution using a variety of modern front-end technologies. You will partner with the team to bring customer touchpoints to life and will be responsible for the technical execution of front-end projects through hands-on development and prototyping. This position reports directly to the CTO.",department:"Tech & Engineering",responsibilities:["Collaborate with Product & Design teams to implement features based on mockups and prototypes.","Partner with the back-end team to architect and consume data.","Build fast, easy-to-use and functional web-applications with scale."],qualifications:["Demonstrated passion for building comprehensive, intelligent and elegant solutions","3 to 5 years of relevant work experience in React (or similar), MobX and CSS.","BS/MS in Computer Science or similar","Strong communication & team collaboration skills and willingness to learn."]}],L=n(1),H=n(2),z=(n(5),n(3)),W=n(6),$=n(12),G=i.a.forwardRef(function(e,t){var n=e.absolute,a=void 0!==n&&n,o=e.classes,r=e.className,l=e.component,c=void 0===l?"hr":l,s=e.light,d=void 0!==s&&s,u=e.role,p=void 0===u?"hr"!==c?"separator":void 0:u,m=e.variant,h=void 0===m?"fullWidth":m,g=Object(H.a)(e,["absolute","classes","className","component","light","role","variant"]);return i.a.createElement(c,Object(L.a)({className:Object(z.default)(o.root,r,a&&o.absolute,d&&o.light,{inset:o.inset,middle:o.middle}[h]),role:p,ref:t},g))}),Y=Object(W.a)(function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object($.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}}},{name:"MuiDivider"})(G),V=n(240),Q=n.n(V),J=n(334),U=n(335),X=n(89),K=n(88),Z=n(90);var ee=n(8),te=n(239),ne=n(153),ae=i.a.forwardRef(function(e,t){var n,a=e.children,o=e.classes,r=e.className,l=e.defaultExpanded,c=void 0!==l&&l,s=e.disabled,d=void 0!==s&&s,u=e.expanded,p=e.onChange,m=e.square,h=void 0!==m&&m,g=e.TransitionComponent,f=void 0===g?te.a:g,b=e.TransitionProps,y=Object(H.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),v=i.a.useRef(null!=u).current,E=i.a.useState(c),w=Object(ee.a)(E,2),x=w[0],j=w[1],O=v?u:x,C=i.a.Children.toArray(a),k=(n=C,Object(X.a)(n)||Object(K.a)(n)||Object(Z.a)()),S=k[0],_=k.slice(1);return i.a.createElement(ne.a,Object(L.a)({className:Object(z.default)(o.root,r,O&&o.expanded,d&&o.disabled,!h&&o.rounded),ref:t,square:h},y),i.a.cloneElement(S,{disabled:d,expanded:O,onChange:function(e){v||j(!O),p&&p(e,!O)}}),i.a.createElement(f,Object(L.a)({in:O,timeout:"auto"},b),i.a.createElement("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region"},_)))}),ie=Object(W.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}},{name:"MuiExpansionPanel"})(ae),oe=n(191),re=Object(c.c)(oe.a).withConfig({displayName:"Style__Anchor",componentId:"o70jao-0"})(["padding-bottom:3vw;"]),le=Object(c.c)(j.a).withConfig({displayName:"Style__Department",componentId:"o70jao-1"})(["",";"],function(){return window.isMobile&&"\n    padding-left: 25px;\n  "}),ce=Object(c.c)(ie).withConfig({displayName:"Style__ExpansionPanel",componentId:"o70jao-2"})(["box-shadow:none !important;display:flex;flex-direction:column;justify-content:flex-end;min-height:105px;&::before{bottom:0 !important;height:2px !important;top:auto !important;};"]),se=Object(c.c)(J.a).withConfig({displayName:"Style__ExpansionPanelDetails",componentId:"o70jao-3"})(["flex-direction:column;li{margin:6px 0;list-style:none;};li::before{color:var(--primary-color);content:'•';display:inline-block;margin-right:3px;width:1em;};a{align-self:flex-start;margin-bottom:16px;};"]),de=Object(c.c)(U.a).withConfig({displayName:"Style__Position",componentId:"o70jao-4"})(["padding:6px 0 !important;h6{flex:1;padding-right:6px;};svg{font-size:"," !important;};"],function(){return window.isMobile?"23px":"3.5vmin"}),ue=Object(c.c)(T.a).withConfig({displayName:"Style__PositionBar",componentId:"o70jao-5"})(["padding:21px;margin-left:-21px;h6{flex:1;font-weight:bold;};"]),pe=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"o70jao-6"})(["background:var(--background-default-color);padding-bottom:15vmin;padding-top:",";padding-left:",";padding-right:",";"],function(){return window.isMobile?"15vmin":"30vh"},function(){return!window.isMobile&&"10min"},function(){return!window.isMobile&&"10vmin"}),me=function(){var e=Object(a.useState)(-1),t=h()(e,2),n=t[0],o=t[1];return i.a.createElement(pe,null,i.a.createElement(re,{align:"center",gutterBottom:!0,title:"Open positions",variant:"h3"}),i.a.createElement(ue,null,i.a.createElement(j.a,{color:"primary",variant:"subtitle1"},"ROLE"),i.a.createElement(le,{color:"primary",variant:"subtitle1"},"DEPARTMENT")),F.map(function(e,t){return i.a.createElement(ce,{expanded:n===e.id,key:String(t),onChange:(a=e.id,function(e,t){o(!!t&&a)})},i.a.createElement(de,{expandIcon:i.a.createElement(Q.a,{color:"primary"})},i.a.createElement(j.a,{variant:"h6"},i.a.createElement("b",null,e.role)),i.a.createElement(le,{variant:"h6"},e.department)),i.a.createElement(se,null,i.a.createElement(j.a,null,i.a.createElement("b",null,"Job Summary:")),i.a.createElement(j.a,null,e.summary),i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement("b",null,"Responsibilities:")),e.responsibilities.map(function(e,t){return i.a.createElement(j.a,{key:t,component:"li"},e)}),i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement("b",null,"Qualifications:")),e.qualifications.map(function(e,t){return i.a.createElement(j.a,{key:t,component:"li"},e)}),i.a.createElement("br",null),i.a.createElement(l.a,{href:"mailto:issuers@carveredison.com?subject=".concat(e.role)},"Apply now"),i.a.createElement(Y,null)));var a}))};t.default=function(){return Object(o.a)(),i.a.createElement(a.Fragment,null,i.a.createElement(r.a,{label:"CAREERS",title:"Join the team."}),i.a.createElement("br",null),i.a.createElement(p,null),i.a.createElement(x,null),i.a.createElement(C,null),i.a.createElement(D,null),i.a.createElement(me,null))}}}]);