(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(e,t,n){"use strict";var a=n(12),i=n.n(a),r=n(20),o=n.n(r),l=n(0),c=n.n(l),s=n(4),d=n(178),u=Object(s.c)(d.a).withConfig({displayName:"Style__Typography",componentId:"slyv2-0"})(["a{display:none;visibility:hidden;};"]);t.a=function(e){var t=e.title,n=o()(e,["title"]),a=t.toLowerCase().replace(/\W/g,"_");return c.a.createElement(u,i()({id:a},n),t)}},190:function(e,t,n){"use strict";var a=n(0);t.a=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(a.useLayoutEffect)(function(){window.scrollTo(0,0)},[])}},191:function(e,t,n){"use strict";var a=n(13),i=n.n(a),r=n(0),o=n.n(r),l=n(71),c=n(183),s=n(178),d=n(4),u=Object(d.c)(s.a).withConfig({displayName:"Style__Subtitle",componentId:"sc-1a55qkq-0"})(["line-height:1.6 !important;"]),p=Object(d.c)(s.a).withConfig({displayName:"Style__Label",componentId:"sc-1a55qkq-1"})(["font-weight:bold !important;padding-bottom:32px;letter-spacing:0.5px;"]),m=Object(d.c)("header").withConfig({displayName:"Style__Wrap",componentId:"sc-1a55qkq-2"})(["background:var(--background-secondary-color);display:flex;flex-direction:column;padding:11vmin var(--padding-site) 0 var(--padding-site);width:100%;sup{font-size:0.3em;};",";"],function(e){var t=e.height;return t&&"\n    min-height: ".concat(t,";\n  ")});t.a=function(e){var t=e.height,n=e.label,a=e.subtitle,r=e.title,d=Object(l.a)(),h=i()(d,2),g=h[0],f=h[1];return o.a.createElement(c.a,{in:g>.25},o.a.createElement(m,{height:t,ref:f},o.a.createElement(p,{align:"center",color:"primary",gutterBottom:!0,variant:"h6"},n),o.a.createElement(s.a,{gutterBottom:!0,align:"center",variant:"h2"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:r}})),o.a.createElement(u,{align:"center",variant:"h6"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}}))))}},236:function(e,t,n){"use strict";var a=n(1),i=n(2),r=n(0),o=n.n(r),l=n(3),c=(n(5),n(70)),s=n(6),d=n(25),u=n(23),p=n(22),m=o.a.forwardRef(function(e,t){var n=e.children,r=e.classes,s=e.className,m=e.collapsedHeight,h=void 0===m?"0px":m,g=e.component,f=void 0===g?"div":g,b=e.in,y=e.onEnter,v=e.onEntered,E=e.onEntering,w=e.onExit,x=e.onExiting,j=e.style,O=e.timeout,C=void 0===O?d.b.standard:O,k=Object(i.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),S=Object(p.a)(),_=o.a.useRef(),I=o.a.useRef(null),N=o.a.useRef();o.a.useEffect(function(){return function(){clearTimeout(_.current)}},[]);return o.a.createElement(c.a,Object(a.a)({in:b,onEnter:function(e,t){e.style.height=h,y&&y(e,t)},onEntered:function(e,t){e.style.height="auto",v&&v(e,t)},onEntering:function(e,t){var n=I.current?I.current.clientHeight:0,a=Object(u.a)({style:j,timeout:C},{mode:"enter"}).duration;if("auto"===C){var i=S.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),N.current=i}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),E&&E(e,t)},onExit:function(e){var t=I.current?I.current.clientHeight:0;e.style.height="".concat(t,"px"),w&&w(e)},onExiting:function(e){var t=I.current?I.current.clientHeight:0,n=Object(u.a)({style:j,timeout:C},{mode:"exit"}).duration;if("auto"===C){var a=S.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),N.current=a}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=h,x&&x(e)},addEndListener:function(e,t){"auto"===C&&(_.current=setTimeout(t,N.current||0))},timeout:"auto"===C?null:C},k),function(e,i){return o.a.createElement(f,Object(a.a)({className:Object(l.default)(r.container,s,{entered:r.entered,exited:!b&&"0px"===h&&r.hidden}[e]),style:Object(a.a)({minHeight:h},j),ref:t},i),o.a.createElement("div",{className:r.wrapper,ref:I},o.a.createElement("div",{className:r.wrapperInner},n)))})});m.muiSupportAuto=!0,t.a=Object(s.a)(function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},{name:"MuiCollapse"})(m)},237:function(e,t,n){"use strict";var a=n(57);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,a(n(75)).default)(i.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=r},326:function(e,t,n){e.exports=n.p+"static/Team.jpg"},327:function(e,t,n){e.exports=n.p+"static/AS_CE19-min.jpg"},328:function(e,t,n){e.exports=n.p+"static/PS_CE19-min.jpg"},329:function(e,t,n){e.exports=n.p+"static/SG_CE19-min.jpg"},330:function(e,t,n){e.exports=n.p+"static/SP_CE19-min.jpg"},331:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",function(){return a})},332:function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",function(){return a})},333:function(e,t,n){"use strict";var a=n(1),i=n(2),r=n(0),o=n.n(r),l=(n(5),n(3)),c=n(6),s=o.a.forwardRef(function(e,t){var n=e.classes,r=e.className,c=Object(i.a)(e,["classes","className"]);return o.a.createElement("div",Object(a.a)({className:Object(l.default)(n.root,r),ref:t},c))});t.a=Object(c.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(s)},334:function(e,t,n){"use strict";var a=n(1),i=n(2),r=n(0),o=n.n(r),l=(n(5),n(3)),c=n(69),s=n(182),d=n(6),u=o.a.forwardRef(function(e,t){var n=e.children,r=e.classes,d=e.className,u=e.disabled,p=void 0!==u&&u,m=e.expanded,h=e.expandIcon,g=e.IconButtonProps,f=e.onBlur,b=e.onChange,y=e.onClick,v=e.onFocusVisible,E=Object(i.a)(e,["children","classes","className","disabled","expanded","expandIcon","IconButtonProps","onBlur","onChange","onClick","onFocusVisible"]),w=o.a.useState(!1),x=w[0],j=w[1];return o.a.createElement(c.a,Object(a.a)({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":m,className:Object(l.default)(r.root,d,p&&r.disabled,m&&r.expanded,x&&r.focused),onFocusVisible:function(e){j(!0),v&&v(e)},onBlur:function(e){j(!1),f&&f(e)},onClick:function(e){b&&b(e),y&&y(e)},ref:t},E),o.a.createElement("div",{className:Object(l.default)(r.content,m&&r.expanded)},n),h&&o.a.createElement(s.a,Object(a.a)({disabled:p,className:Object(l.default)(r.expandIcon,m&&r.expanded),edge:"end",component:"div",tabIndex:-1,"aria-hidden":!0},g),h))});t.a=Object(d.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}},{name:"MuiExpansionPanelSummary"})(u)},522:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(190),o=n(191),l=n(177),c=n(4),s=n(47),d=Object(c.c)("a").withConfig({displayName:"Style__Link",componentId:"sc-1rzqwzl-0"})(["display:none;visibility:hidden;"]),u=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-1rzqwzl-1"})(["background:var(--background-secondary-color);display:flex;justify-content:center;padding-bottom:",";"],function(){return window.isMobile?"5vh":"24vh"}),p=function(){var e=Object(a.useRef)(null);return i.a.createElement(u,null,i.a.createElement(d,{href:"#open_positions",ref:e}),i.a.createElement(l.a,{color:"primary",onClick:function(){return e.current.click()},size:"large",variant:"contained"},"Open positions"))},m=n(13),h=n.n(m),g=n(71),f=n(181),b=n(59),y=n(326),v=n.n(y),E=Object(c.c)("div").withConfig({displayName:"Style__ImgContainer",componentId:"sc-8l7btk-0"})(["",";"],function(){return!window.isMobile&&Object(c.b)(["left:calc(50% - 390px);position:absolute;top:-17vh;"])}),w=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-8l7btk-1"})(["align-items:center;background:var(--background-default-color);display:flex;justify-content:center;padding:",";position:relative;",";"],function(){return window.isMobile?"0":"16px 0"},function(){return!window.isMobile&&Object(c.b)(["min-height:400px;"])}),x=function(){var e=Object(g.a)(),t=h()(e,2),n=t[0],a=t[1];return i.a.createElement(w,{ref:a},window.isMobile?i.a.createElement(b.a,{alt:"careers",src:v.a,width:"780px"}):i.a.createElement(f.a,{direction:"up",in:n>.1},i.a.createElement(E,null,i.a.createElement(b.a,{alt:"careers",src:v.a,width:"780px"}))))},j=n(178),O=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"oszpdj-0"})(["align-items:center;background:var(--text-default-color);color:var(--text-invert-color);display:flex;justify-content:center;h3{max-width:70vw;};"]),C=function(){return i.a.createElement(O,{padding:"10vh"},i.a.createElement(j.a,{align:"center",color:"inherit",variant:"h3"},"We build the technology and the tools to help\ncompanies and employees build wealth together."))},k=n(327),S=n.n(k),_=n(328),I=n.n(_),N=n(329),R=n.n(N),P=n(330),A=n.n(P),T=n(72),M=Object(c.c)("div").withConfig({displayName:"Style__Avatar",componentId:"sc-14pp9yq-0"})(["margin:16px 2.5vw;",";"],function(){return window.isMobile&&"\n    h5 {\n      color: var(--text-invert-color) !important;\n    };\n  "}),B=Object(c.c)(T.a).withConfig({displayName:"Style__AvatarContainer",componentId:"sc-14pp9yq-1"})(["",";"],function(){return!window.isMobile&&Object(c.b)(["position:absolute;top:130px;"])}),q=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-14pp9yq-2"})(["align-items:center;background:var(--secondary-color);color:var(--text-invert-color);display:flex;flex-direction:column;justify-content:flex-start;min-height:370px;position:relative;h3{",";};"],function(){return window.isMobile&&"\n    margin-bottom: 16px;\n  "}),D=function(){return i.a.createElement(q,{padding:"5vh"},i.a.createElement(j.a,{align:"center",color:"inherit",variant:"h3"},"Senior Leadership"),i.a.createElement(B,{justify:"center"},i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Aaron Shapiro",src:S.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"FOUNDER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Aaron Shapiro")),i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Susan Peters",src:A.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"CHIEF OPERATING OFFICER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Susan Peters")),i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Prakash Sinha",src:I.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"CHIEF TECHNOLOGY OFFICER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Prakash Sinha")),i.a.createElement(M,null,i.a.createElement(b.a,{alt:"Sarah Gielchinsky",src:R.a,width:"200px"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(j.a,{align:"center",color:"primary",variant:"subtitle2"},i.a.createElement("b",null,"CHIEF CREATIVE OFFICER")),i.a.createElement(j.a,{align:"center",color:"textPrimary",variant:"h5"},"Sarah Gielchinsky"))))},F=[{id:1,role:"Back-end Engineer",summary:"Carver Edison is looking to hire several back-end Engineers to help us build the next generation of our flagship products. You’ll have the chance to solve complex problems with global reach and impact. The ideal candidates are relentless problem solvers who can design, architect and execute end-to-end technology solution using Python, Docker, Flask, Node.js, PostgreSQL, GraphQL and AWS. You will partner with the team to bring customer touchpoints to life and will be responsible for the technical execution of back-end projects through hands-on development and prototyping. This position reports directly to the CTO.",department:"Tech & Engineering",responsibilities:["Develop Python applications (we use Flask/GraphQL and host everything on AWS)","Build technology that bridges the complex operational and digital worlds.","Architect and build complex APIs","Work with large datasets to optimize the client experience."],qualifications:["B.S. in Computer Science or equivalent.","5+ years of experience working as a backend engineer.","Experience with Python, SqlAlchemy, and Flask in a production environment","Deep understanding of scalable web applications","Deep understanding of core modern web service concepts such as API design and data modeling","Experience with Design Patterns, Distributed Application Architecture, FINRA and NSA standard security practices."]},{id:2,role:"Brand Copywriter",summary:"Carver Edison is looking for a Brand Copywriter to join our internal brand team. This role is perfect for a self-starting, passionate creative who is financial savvy and able to quickly adopt to our brand promise and tone across all mediums in a fast-paced, high growth environment. Your primary role will be to write branded communications across web, digital, blog, and print. This position reports directly to the Chief Creative Officer.",department:"Creative",responsibilities:["Product copy","Client communications","Blog content","Ad campaign content","FAQs","Collaborate with marketing designers to elevate the visuals on our campaign"],qualifications:["Bachelor's Degree","3+ years of startup marketing experience","Excellent writer","Fintech or B2B experience a strong plus","Strong organizational and time management skills; ability to shift gears quickly and effectively","Effective communication and interpersonal skills, internally and with outside vendors and partners w/ extreme attention to detail"]},{id:3,role:"Senior Product Manager",summary:"As a Senior Product Manager for financial products, you will work on designing, enhancing and supporting products across the company. You will work closely with cross functional teams including strategy, design, engineering and marketing to define our roadmap and launch new products. You will own both the user experience and back end integration with technology partners.",department:"Product",responsibilities:["Drive the entire product lifecycle of your product - from conception, requirements gathering & design, development, and testing all the way through launch","Collaborate with business owners and stakeholders across the company to identify opportunities and align requirements","Establish and communicate the product strategy and roadmap to other teams and executives","Prioritize features and coordinate product delivery with a dedicated team of engineers and designers","Lead discussions with vendors at all phases of the engagement: selection, integration and operation"],qualifications:["5+ years of prior product management experience with a focus on financial products","Experience working on product roles in a high-growth company","Strong understanding of market and technology landscape in banking","Experience with one or more financial products including deposits, cash management, payments, cards, and lending","Experience with partner API integrations, developer platforms and ecosystem programs","B.S. in Engineering, Computer Science, Math, Statistics or other quantitative field (preferred)"]},{id:4,role:"Front-end Engineer",summary:"Carver Edison is looking to hire several front-end engineers to help us build the next generation of our flagship products. You’ll have the chance to solve complex problems with global reach and impact. The ideal candidates are relentless problem solvers who can design, architect and execute end-to-end technology solution using a variety of modern front-end technologies. You will partner with the team to bring customer touchpoints to life and will be responsible for the technical execution of front-end projects through hands-on development and prototyping. This position reports directly to the CTO.",department:"Tech & Engineering",responsibilities:["Collaborate with Product & Design teams to implement features based on mockups and prototypes.","Partner with the back-end team to architect and consume data.","Build fast, easy-to-use and functional web-applications with scale."],qualifications:["Demonstrated passion for building comprehensive, intelligent and elegant solutions","3 to 5 years of relevant work experience in React (or similar), MobX and CSS.","BS/MS in Computer Science or similar","Strong communication & team collaboration skills and willingness to learn."]}],L=n(1),H=n(2),z=(n(5),n(3)),W=n(6),$=n(11),G=i.a.forwardRef(function(e,t){var n=e.absolute,a=void 0!==n&&n,r=e.classes,o=e.className,l=e.component,c=void 0===l?"hr":l,s=e.light,d=void 0!==s&&s,u=e.orientation,p=void 0===u?"horizontal":u,m=e.role,h=void 0===m?"hr"!==c?"separator":void 0:m,g=e.variant,f=void 0===g?"fullWidth":g,b=Object(H.a)(e,["absolute","classes","className","component","light","orientation","role","variant"]);return i.a.createElement(c,Object(L.a)({className:Object(z.default)(r.root,o,"fullWidth"!==f&&r[f],a&&r.absolute,d&&r.light,{vertical:r.vertical}[p]),role:h,ref:t},b))}),Y=Object(W.a)(function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object($.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1}}},{name:"MuiDivider"})(G),Q=n(237),V=n.n(Q),J=n(333),U=n(334),X=n(331),K=n(86),Z=n(332);var ee=n(236),te=n(150),ne=i.a.forwardRef(function(e,t){var n,a=e.children,r=e.classes,o=e.className,l=e.defaultExpanded,c=void 0!==l&&l,s=e.disabled,d=void 0!==s&&s,u=e.expanded,p=e.onChange,m=e.square,h=void 0!==m&&m,g=e.TransitionComponent,f=void 0===g?ee.a:g,b=e.TransitionProps,y=Object(H.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),v=i.a.useRef(null!=u).current,E=i.a.useState(c),w=E[0],x=E[1],j=v?u:w,O=i.a.Children.toArray(a),C=(n=O,Object(X.a)(n)||Object(K.a)(n)||Object(Z.a)()),k=C[0],S=C.slice(1);return i.a.createElement(te.a,Object(L.a)({className:Object(z.default)(r.root,o,j&&r.expanded,d&&r.disabled,!h&&r.rounded),ref:t,square:h},y),i.a.cloneElement(k,{disabled:d,expanded:j,onChange:function(e){v||x(!j),p&&p(e,!j)}}),i.a.createElement(f,Object(L.a)({in:j,timeout:"auto"},b),i.a.createElement("div",{"aria-labelledby":k.props.id,id:k.props["aria-controls"],role:"region"},S)))}),ae=Object(W.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}},{name:"MuiExpansionPanel"})(ne),ie=n(188),re=Object(c.c)(ie.a).withConfig({displayName:"Style__Anchor",componentId:"o70jao-0"})(["padding-bottom:3vw;"]),oe=Object(c.c)(j.a).withConfig({displayName:"Style__Department",componentId:"o70jao-1"})(["",";"],function(){return window.isMobile&&"\n    padding-left: 25px;\n  "}),le=Object(c.c)(ae).withConfig({displayName:"Style__ExpansionPanel",componentId:"o70jao-2"})(["box-shadow:none !important;display:flex;flex-direction:column;justify-content:flex-end;min-height:105px;&::before{bottom:0 !important;height:2px !important;top:auto !important;};"]),ce=Object(c.c)(J.a).withConfig({displayName:"Style__ExpansionPanelDetails",componentId:"o70jao-3"})(["flex-direction:column;li{margin:6px 0;list-style:none;};li::before{color:var(--primary-color);content:'•';display:inline-block;margin-right:3px;width:1em;};a{align-self:flex-start;margin-bottom:16px;};"]),se=Object(c.c)(U.a).withConfig({displayName:"Style__Position",componentId:"o70jao-4"})(["padding:6px 0 !important;h6{flex:1;padding-right:6px;};svg{font-size:"," !important;};"],function(){return window.isMobile?"23px":"3.5vmin"}),de=Object(c.c)(T.a).withConfig({displayName:"Style__PositionBar",componentId:"o70jao-5"})(["padding:21px;margin-left:-21px;h6{flex:1;font-weight:bold;};"]),ue=Object(c.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"o70jao-6"})(["background:var(--background-default-color);padding-bottom:15vmin;padding-top:",";padding-left:",";padding-right:",";"],function(){return window.isMobile?"15vmin":"30vh"},function(){return!window.isMobile&&"10min"},function(){return!window.isMobile&&"10vmin"}),pe=function(){var e=Object(a.useState)(-1),t=h()(e,2),n=t[0],r=t[1];return i.a.createElement(ue,null,i.a.createElement(re,{align:"center",gutterBottom:!0,title:"Open positions",variant:"h3"}),i.a.createElement(de,null,i.a.createElement(j.a,{color:"primary",variant:"subtitle1"},"ROLE"),i.a.createElement(oe,{color:"primary",variant:"subtitle1"},"DEPARTMENT")),F.map(function(e,t){return i.a.createElement(le,{expanded:n===e.id,key:String(t),onChange:(a=e.id,function(e,t){r(!!t&&a)})},i.a.createElement(se,{expandIcon:i.a.createElement(V.a,{color:"primary"})},i.a.createElement(j.a,{variant:"h6"},i.a.createElement("b",null,e.role)),i.a.createElement(oe,{variant:"h6"},e.department)),i.a.createElement(ce,null,i.a.createElement(j.a,null,i.a.createElement("b",null,"Job Summary:")),i.a.createElement(j.a,null,e.summary),i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement("b",null,"Responsibilities:")),e.responsibilities.map(function(e,t){return i.a.createElement(j.a,{key:t,component:"li"},e)}),i.a.createElement("br",null),i.a.createElement(j.a,null,i.a.createElement("b",null,"Qualifications:")),e.qualifications.map(function(e,t){return i.a.createElement(j.a,{key:t,component:"li"},e)}),i.a.createElement("br",null),i.a.createElement(l.a,{href:"mailto:issuers@carveredison.com?subject=".concat(e.role)},"Apply now"),i.a.createElement(Y,null)));var a}))};t.default=function(){return Object(r.a)(),i.a.createElement(a.Fragment,null,i.a.createElement(o.a,{label:"CAREERS",title:"Join the team."}),i.a.createElement("br",null),i.a.createElement(p,null),i.a.createElement(x,null),i.a.createElement(C,null),i.a.createElement(D,null),i.a.createElement(pe,null))}}}]);