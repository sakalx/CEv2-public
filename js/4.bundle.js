(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,t,a){"use strict";var n=a(34),r=a.n(n),o=a(0),i=a.n(o),c=a(19),l=a.n(c),s=a(48),u=function(e){return i.a.createElement(s.a,l()({id:"anchor_icon",viewBox:"0 0 16 16"},e),i.a.createElement("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))},m=a(6),p=a(150),d=Object(m.c)(p.a).withConfig({displayName:"Style__Typography",componentId:"slyv2-0"})(["a{color:inherit;margin-left:-30px;opacity:0;padding-right:6px;transition:opacity .4s;};:hover a{opacity:.5;};a:visited:after,a:active:after,a:hover:after{color:inherit;width:0 !important;};"]);t.a=function(e){var t=e.title,a=r()(e,["title"]),n=t.toLowerCase().replace(/\W/g,"_");return i.a.createElement(d,a,i.a.createElement("a",{id:n,href:"#".concat(n)},i.a.createElement(u,{color:"inherit"})),t)}},162:function(e,t,a){"use strict";var n=a(0);t.a=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(n.useLayoutEffect)(function(){var e=window.location.hash;if(e){var t=document.querySelector(e);t&&t.scrollIntoView(!0)}else window.scrollTo(0,0)},[])}},164:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=a(67),l=a(155),s=a(150),u=a(6),m=Object(u.c)("header").withConfig({displayName:"Style__Wrap",componentId:"sc-1a55qkq-0"})(["background:var(--background-secondary-color);display:flex;flex-direction:column;justify-content:center;padding:65px var(--padding-site) 21px var(--padding-site);width:100%;",";"],function(e){var t=e.height;return t&&"\n    min-height: ".concat(t,";\n  ")});t.a=function(e){var t=e.height,a=e.label,n=e.subtitle,o=e.title,u=Object(c.a)(),p=r()(u,2),d=p[0],f=p[1];return i.a.createElement(l.a,{in:d>.25},i.a.createElement(m,{height:t,ref:f},i.a.createElement(s.a,{align:"center",color:"primary",gutterBottom:!0,variant:"h6"},a),i.a.createElement(s.a,{gutterBottom:!0,align:"center",variant:"h2"},o),i.a.createElement(s.a,{align:"center",variant:"subtitle1"},n)))}},165:function(e,t,a){"use strict";var n=a(19),r=a.n(n),o=a(34),i=a.n(o),c=a(0),l=a.n(c),s=a(6),u=Object(s.c)("img").withConfig({displayName:"Style__Img",componentId:"sc-1xu614a-0"})(["align-self:center;width:100%;",";"],function(e){var t=e.width;return t&&"\n    max-width: ".concat(t,";\n  ")}),m=Object(c.forwardRef)(function(e,t){var a=e.alt,n=e.src,o=e.width,c=i()(e,["alt","src","width"]);return l.a.createElement(u,r()({alt:a,src:n,width:o,ref:t},c))});t.a=m},167:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=a(30),l=a(67),s=a(149),u=a(150),m=a(155),p=a(161),d=a(6),f=a(47),g=Object(d.c)("section").withConfig({displayName:"Style__Content",componentId:"sc-6ns15j-0"})(["flex:1 1 250px;margin-right:16px;"]),v=Object(d.c)(f.a).withConfig({displayName:"Style__Wrap",componentId:"sc-6ns15j-1"})(["   align-items:center;background:var(--secondary-color);color:var(--text-invert-color);display:flex;flex-wrap:wrap;"]);t.a=Object(c.f)(function(e){var t=e.history,a=e.subtitle,n=void 0===a?"We'll have a member of our team reach out to you right away.":a,o=e.title,c=void 0===o?"Ready to get started?":o,d=Object(l.a)(),f=r()(d,2),b=f[0],y=f[1];return i.a.createElement(v,{padding:"9vh",ref:y},i.a.createElement(m.a,{in:b>.25,timeout:400},i.a.createElement(g,null,i.a.createElement(p.a,{gutterBottom:!0,color:"inherit",title:c,variant:"h3"}),i.a.createElement(u.a,{color:"inherit",paragraph:!0,variant:"h6"},n))),i.a.createElement(s.a,{color:"primary",onClick:function(){return t.push("/contact")},size:"large",variant:"contained"},"Contact us"))})},176:function(e,t,a){"use strict";var n=a(19),r=a.n(n),o=a(45),i=a.n(o),c=a(15),l=a.n(c),s=a(34),u=a.n(s),m=a(0),p=a.n(m),d=a(203),f=a.n(d),g=function(e){try{return e()}catch(e){return console.error("Local Storage: ",e),g(function(){return window.localStorage.clear(),!0}),null}},v=function(e){return g(function(){return JSON.parse(window.localStorage.getItem(e.toLowerCase()))})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.trim().toLowerCase();return e.filter(function(e){return e.label.toLowerCase().includes(a)})},y=a(157),h=function(e){var t=e.inputRef,a=void 0===t?function(){}:t,n=e.ref,o=u()(e,["inputRef","ref"]);return p.a.createElement(y.a,r()({fullWidth:!0,InputProps:{inputRef:function(e){n(e),a(e)}}},o))},E=a(488),w=function(e,t){var a=t.isHighlighted;return p.a.createElement(E.a,{selected:a,component:"section"},p.a.createElement("div",null,p.a.createElement("span",null,e.label)))},x=a(6),O=a(152),j=Object(x.c)(O.a).withConfig({displayName:"style__SuggestionsContainer",componentId:"sc-1njizm2-0"})(["left:0;position:absolute;top:55px;width:100%;z-index:1;ul{list-style-type:none;padding:0;};"]),S=Object(x.c)("div").withConfig({displayName:"style__Wrap",componentId:"sc-1njizm2-1"})(["position:relative;"]);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){i()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}t.a=function(e){var t=e.fetchSuggestion,a=e.onChange,n=e.suggestionsList,o=u()(e,["fetchSuggestion","onChange","suggestionsList"]),i=Object(m.useState)([]),c=l()(i,2),s=c[0],d=c[1],y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:325,a=null;return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=function(){return e.apply(void 0,r)};clearTimeout(a),a=setTimeout(i,t)}}(function(e){var a=e.value;if(!(a.length<3)){if(t){var r=v(a);if(r)return d(r);t(a).then(function(e){e.length&&(!function(e,t){g(function(){return window.localStorage.setItem(e.toLowerCase(),JSON.stringify(t)),!0})}(a,e),d(e))}).catch(function(e){return console.error(e)})}d(b(n,a))}}),E={renderInputComponent:h,suggestions:s,onSuggestionsFetchRequested:y,onSuggestionsClearRequested:function(){return d([])},getSuggestionValue:function(e){return e.label},renderSuggestion:w};return p.a.createElement(S,null,p.a.createElement(f.a,r()({},E,{inputProps:L({onChange:function(e,t){var n=t.newValue;return a(n)}},o),renderSuggestionsContainer:function(e){return p.a.createElement(j,r()({},e.containerProps,{square:!0}),e.children)}})))}},180:function(e,t,a){"use strict";var n=a(59),r="https://api.carveredison.com";t.a={fetchSuggestionCompanies:Object(n.b)(r+"/companies/search/"),fetchCompanyInfo:Object(n.b)(r+"/companies/"),fetchTopChartCompany:Object(n.b)(r+"/companies/chart/")}},185:function(e,t,a){"use strict";t.a=function(e,t,a){return t(String(Number(e)+a))}},186:function(e,t,a){"use strict";t.a={down:function(e){return function(t){40!==t.which&&"ArrowDown"!==t.key||(t.preventDefault(),e())}},up:function(e){return function(t){38!==t.which&&"ArrowUp"!==t.key||(t.preventDefault(),e())}}}},187:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"$";return a+Number(e).toLocaleString("en-US",{style:"decimal",maximumFractionDigits:t,minimumFractionDigits:t})}},202:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=a.n(o),c=(a(5),a(66)),l=a(17),s=a(36),u=a(22),m=a(7),p={entering:{transform:"none"},entered:{transform:"none"}},d={enter:l.b.enteringScreen,exit:l.b.leavingScreen},f=i.a.forwardRef(function(e,t){var a=e.children,o=e.in,l=e.onEnter,f=e.onExit,g=e.style,v=e.timeout,b=void 0===v?d:v,y=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),h=Object(s.a)(),E=Object(m.c)(a.ref,t);return i.a.createElement(c.a,Object(n.a)({appear:!0,in:o,onEnter:function(e,t){Object(u.b)(e);var a=Object(u.a)({style:g,timeout:b},{mode:"enter"});e.style.webkitTransition=h.transitions.create("transform",a),e.style.transition=h.transitions.create("transform",a),l&&l(e,t)},onExit:function(e){var t=Object(u.a)({style:g,timeout:b},{mode:"exit"});e.style.webkitTransition=h.transitions.create("transform",t),e.style.transition=h.transitions.create("transform",t),f&&f(e)},timeout:b},y),function(e,t){return i.a.cloneElement(a,Object(n.a)({style:Object(n.a)({transform:"scale(0)",visibility:"exited"!==e||o?void 0:"hidden"},p[e],{},g,{},a.props.style),ref:E},t))})});t.a=f},242:function(e,t,a){"use strict";var n=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(94)).default)(r.default.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=o},246:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=a(72),l=a(180),s=a(185),u=function(e){return.15*e},m=function(e){return u(e)>21250?21250:u(e)},p=function(){return 21250},d=function(e,t){return 13*t>m(e)?m(e):13*t},f=a(186),g=a(187),v=a(149),b=a(242),y=a.n(b),h=a(150),E=a(73),w=a(68),x=a(6),O=a(152),j=a(157),S=a(176),C=Object(x.c)(S.a).withConfig({displayName:"Style__Autosuggest",componentId:"sc-1rwgcy1-0"})(["min-width:250px !important;"]),L=Object(x.c)(v.a).withConfig({displayName:"Style__CalculateButton",componentId:"sc-1rwgcy1-1"})(["margin:21px 50px !important;"]),_=Object(x.c)(O.a).withConfig({displayName:"Style__CalculatorResult",componentId:"sc-1rwgcy1-2"})(["display:flex;flex-direction:column;flex:1 1 250px;justify-content:center;min-height:150px;"]),k=Object(x.c)(h.a).withConfig({displayName:"Style__Caption",componentId:"sc-1rwgcy1-3"})(["padding:28px 0;"]),N=Object(x.c)(j.a).withConfig({displayName:"Style__TextField",componentId:"sc-1rwgcy1-4"})(["margin:21px !important;min-width:250px !important;"]),I=Object(x.c)("div").withConfig({displayName:"Style__Wrap",componentId:"sc-1rwgcy1-5"})(["text-align:center;width:100%;"]),z=Object(x.c)(O.a).withConfig({displayName:"Style__Footer",componentId:"sc-1rwgcy1-6"})(["background:var(--secondary-color) !important;color:var(--text-invert-color) !important;padding:18px;button{text-transform:unset !important;};svg{margin-left:16px;transform:rotate(-45deg);transition:transform .6s ease-out;};:hover svg{transform:translateX(25px) rotate(0);};"]),P=Object(E.a)({prefix:"$",thousandSeparator:!0,max:999999}),B=Object(E.a)({prefix:"$",suffix:" / paycheck",thousandSeparator:!0,max:99999}),T={company:"",contribution:"",email:"employee.calculator@carveredison.com",salary:""};t.a=function(){var e=Object(c.a)(T),t=r()(e,4),a=t[0],n=t[1],u=t[2],m=t[3],b=Object(o.useState)({participation:0,traditional:0}),E=r()(b,2),x=E[0],O=E[1],j=function(e,t){return function(){return Object(s.a)(n[e],u(e),t)}},S=function(e){return function(t){f.a.down(j(e,-100))(t),f.a.up(j(e,100))(t)}};return i.a.createElement(I,null,i.a.createElement(w.a,{align:"center",justify:"center"},i.a.createElement(C,{fetchSuggestion:l.a.fetchSuggestionCompanies,label:"My company is",onChange:u("company"),placeholder:"Company name",value:n.company}),i.a.createElement(N,{InputProps:{inputComponent:P},label:"My annual salary is",onChange:u("salary"),onKeyUp:S("salary"),placeholder:"Max allowed: $999,999",value:n.salary}),i.a.createElement(N,{InputProps:{inputComponent:B},label:"I can contribute",onChange:u("contribution"),onKeyUp:S("contribution"),placeholder:"Max allowed: $99,999",value:n.contribution}),i.a.createElement(L,{color:"primary",disabled:!m,onClick:function(){a({subject:"Employee calculator was invoked"},!0),O({participation:p(),traditional:d(n.salary,n.contribution)})},size:"large",variant:"contained"},"Calculate")),i.a.createElement(k,{align:"center",color:"textSecondary",component:"p",variant:"caption"},'* The information provided by the Paycheck Calculator provides general information regarding the calculation of taxes on wages for CA residents only. It is not a substitute for the advice of an accountant or other tax professional. The Paycheck Calculator may not account for every tax or fee that applies to you or your employer at any time. ZenPayroll, Inc., dba Gusto ("Gusto") does not warrant, promise or guarantee that the information in the Paycheck Calculator is accurate or complete, and Gusto expressly disclaims all liability, loss or risk incurred by employers or employees as a direct or indirect consequence of its use. By using the Paycheck Calculator, you waive any rights or claims you may have against Gusto in connection with its use.'),i.a.createElement(w.a,null,i.a.createElement(_,{square:!0},i.a.createElement(h.a,{align:"center",gutterBottom:!0,variant:"subtitle2"},"Buying Power\n",i.a.createElement("b",null,"Traditional")),i.a.createElement(w.a,{align:"center",justify:"center"},i.a.createElement(h.a,{align:"center",color:"textSecondary",variant:"h4"},"".concat(Object(g.a)(x.traditional,0),"  /  ")),i.a.createElement(h.a,{align:"left",color:"textSecondary",variant:"body2"},"six\nmonth*"))),i.a.createElement(_,{square:!0},i.a.createElement(h.a,{align:"center",gutterBottom:!0,variant:"subtitle2"},"Buying Power\n",i.a.createElement("b",null,"with Cashless Participation")),i.a.createElement(w.a,{align:"center",justify:"center"},i.a.createElement(h.a,{align:"center",color:"primary",variant:"h4"},"".concat(Object(g.a)(x.participation,0),"  /  ")),i.a.createElement(h.a,{align:"left",color:"primary",variant:"body2"},"six\nmonth*")))),i.a.createElement(z,{square:!0},i.a.createElement(v.a,{color:"inherit",disabled:!m,onClick:function(){return a({subject:"I want this from my company"})},size:"large"},"Click here to let your company know you want this",i.a.createElement(y.a,{color:"primary",size:"large"}))))}},247:function(e,t,a){"use strict";var n,r,o=a(0),i=a.n(o),c=a(6),l=Object(c.c)("div").withConfig({displayName:"Style__Wrap",componentId:"sc-48h65o-0"})(["display:flex;overflow-x:scroll;width:100%;::-webkit-scrollbar{display:none;};-ms-overflow-style:none;overflow:-moz-scrollbars-none;"]),s=!1;t.a=function(e){var t=e.children,a=Object(o.useRef)(null);return i.a.createElement(l,{onMouseDown:function(e){var t=e.pageX,o=a.current;s=!0,r=o.scrollLeft,n=t-o.offsetLeft},onMouseLeave:function(){return s=!1},onMouseMove:function(e){if(s){e.preventDefault();var t=a.current,o=1*(e.pageX-t.offsetLeft-n);t.scrollLeft=r-o}},onMouseUp:function(){return s=!1},ref:a},t)}},446:function(e,t,a){e.exports=a.p+"static/Employee.png"},447:function(e,t,a){e.exports=a.p+"static/Employees_Laptop1.png"},448:function(e,t,a){e.exports=a.p+"static/Employees_Laptop2.png"},449:function(e,t,a){e.exports=a.p+"static/Employees_Laptop3.png"},494:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(162),i=a(164),c=a(246),l=a(6),s=a(47),u=Object(l.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-1bnhyft-0"})(["background:var(--background-secondary-color);"]),m=function(){return r.a.createElement(u,{padding:"3vh"},r.a.createElement(c.a,null))},p=a(150),d=a(161),f=a(152),g=Object(l.c)("ul").withConfig({displayName:"Style__List",componentId:"sc-1tdtwym-0"})(["align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:0;"]),v=Object(l.c)(f.a).withConfig({displayName:"Style__ListItem",componentId:"sc-1tdtwym-1"})(["flex:0 1 350px;margin:4vw;padding:16px;"]),b=Object(l.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-1tdtwym-2"})(["background:var(--background-default-color);padding-bottom:30vmin;padding-top:12vh;"]),y=function(){return r.a.createElement(b,null,r.a.createElement(d.a,{align:"center",gutterBottom:!0,title:"What’s in it for you?",variant:"h3"}),r.a.createElement(p.a,{align:"center",variant:"subtitle1"},"!!!!!!"),r.a.createElement(g,null,r.a.createElement(v,{component:"li"},r.a.createElement(p.a,{align:"center",gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Advantage Title 1")),r.a.createElement(p.a,{variant:"subtitle1"},"!!!!!!")),r.a.createElement(v,null,r.a.createElement(p.a,{align:"center",gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Advantage Title 2")),r.a.createElement(p.a,{variant:"subtitle1"},"!!!!!!")),r.a.createElement(v,null,r.a.createElement(p.a,{align:"center",gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Advantage Title 3")),r.a.createElement(p.a,{variant:"subtitle1"},"!!!!!!")),r.a.createElement(v,null,r.a.createElement(p.a,{align:"center",gutterBottom:!0,variant:"h6"},r.a.createElement("strong",null,"Advantage Title 4")),r.a.createElement(p.a,{variant:"subtitle1"},"!!!!!"))))},h=a(15),E=a.n(h),w=a(67),x=a(154),O=a(202),j=a(247),S=a(446),C=a.n(S),L=[{photo:C.a,name:"Bublik",company:"AMAZON",feedBack:"Utilizing ESPP has allowed me and my family to do the things we always wanted."},{photo:C.a,name:"Anna",company:"GOOGLE",feedBack:"Essential JavaScript development tools that help you go to market faster and build powerful applications using modern open source code."},{photo:C.a,name:"Homer",company:"SPRINT",feedBack:"Your developers already use it. Your company depends on it. Create an Org and get more out of the tools your team already knows and loves."},{photo:C.a,name:"Bart",company:"AMAZON",feedBack:"Create an org, add your team, and start collaborating. Nothing to configure, set up, or manage."},{photo:C.a,name:"Lissa",company:"GOOGLE",feedBack:"Enjoy the security auditing features built into the npm client, a zero-friction way to make open source software safer."}],_=Object(l.c)(f.a).withConfig({displayName:"Style__Avatar",componentId:"sc-17pbtcb-0"})(["cursor:pointer;display:flex;flex-direction:column;flex:1 0 40vmin;justify-content:flex-end;margin:16px 28px;min-height:40vmin;padding-bottom:4vmin;padding-left:4vmin;",";",";"],function(e){return e.photo&&Object(l.b)(["background:url(",") no-repeat center center;background-size:cover;"],e.photo)},function(e){return e.active&&Object(l.b)(["background:linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,1)),url(",") no-repeat center center;background-size:cover;"],e.photo)}),k=Object(l.c)("div").withConfig({displayName:"Style__EmployeesList",componentId:"sc-17pbtcb-1"})(["left:0;position:absolute;top:-25vmin;width:100%;"]),N=Object(l.c)("article").withConfig({displayName:"Style__Feedback",componentId:"sc-17pbtcb-2"})(["width:100%;"]),I=Object(l.c)(p.a).withConfig({displayName:"Style__Quotes",componentId:"sc-17pbtcb-3"})(["font-size:18vh !important;height:12vh;"]),z=Object(l.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"sc-17pbtcb-4"})(["align-items:flex-end;background:var(--background-invert-color);color:var(--text-invert-color);display:flex;min-height:55vmin;position:relative;"]),P=function(){var e=Object(w.a)(),t=E()(e,2),a=t[0],o=t[1],i=Object(n.useState)(1),c=E()(i,2),l=c[0],s=c[1],u=function(e){return function(){return s(e)}},m=a>.1;return r.a.createElement(z,{padding:"8vh",ref:o},r.a.createElement(k,null,r.a.createElement(j.a,null,L.map(function(e,t){var a=l===t;return r.a.createElement(x.a,{direction:"left",in:m,key:e.name,timeout:500+100*t},r.a.createElement(_,{active:a?1:0,elevation:3,onClick:u(t),photo:e.photo},r.a.createElement(O.a,{in:a},r.a.createElement("section",null,r.a.createElement(p.a,{variant:"h6"},e.company),r.a.createElement(p.a,{color:"primary",variant:"h4"},r.a.createElement("strong",null,e.name))))))}))),r.a.createElement(N,null,r.a.createElement(I,{align:"center",variant:"h3"},"“"),r.a.createElement(p.a,{align:"center",color:"inherit",variant:"h4"},L[l].feedBack)))},B=a(447),T=a.n(B),M=a(448),R=a.n(M),W=a(449),A=a.n(W),$=[{img:T.a,title:"Backed by a secure login"},{img:R.a,title:"Select your contribution"},{img:A.a,title:"Spread the news"},{img:A.a,title:""}],D=a(1),q=a(2),F=(a(5),a(3)),V=(a(11),a(4)),G=r.a.forwardRef(function(e,t){var a=e.active,n=void 0!==a&&a,o=e.alternativeLabel,i=e.children,c=e.classes,l=e.className,s=e.completed,u=void 0!==s&&s,m=e.connector,p=e.disabled,d=void 0!==p&&p,f=e.index,g=e.last,v=e.orientation,b=Object(q.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","index","last","orientation"]),y=Object(F.a)(c.root,c[v],l,o&&c.alternativeLabel,u&&c.completed);return r.a.createElement("div",Object(D.a)({className:y,ref:t},b),m&&o&&0!==f&&r.a.cloneElement(m,{orientation:v,alternativeLabel:o,index:f,active:n,completed:u,disabled:d}),r.a.Children.map(i,function(e){return r.a.isValidElement(e)?r.a.cloneElement(e,Object(D.a)({active:n,alternativeLabel:o,completed:u,disabled:d,last:g,icon:f+1,orientation:v},e.props)):null}))}),H=Object(V.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(G),U=a(71),J=Object(U.a)(r.a.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),X=Object(U.a)(r.a.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),Y=a(48),Z=r.a.createElement("circle",{cx:"12",cy:"12",r:"12"}),K=r.a.forwardRef(function(e,t){var a=e.completed,n=void 0!==a&&a,o=e.icon,i=e.active,c=void 0!==i&&i,l=e.error,s=void 0!==l&&l,u=e.classes;return"number"==typeof o||"string"==typeof o?s?r.a.createElement(X,{className:Object(F.a)(u.root,u.error),ref:t}):n?r.a.createElement(J,{className:Object(F.a)(u.root,u.completed),ref:t}):r.a.createElement(Y.a,{className:Object(F.a)(u.root,c&&u.active),ref:t},Z,r.a.createElement("text",{className:u.text,x:"12",y:"16",textAnchor:"middle"},o)):o}),Q=Object(V.a)(function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$active":{color:e.palette.primary.main},"&$completed":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}},{name:"MuiStepIcon"})(K),ee=r.a.forwardRef(function(e,t){var a=e.active,n=void 0!==a&&a,o=e.alternativeLabel,i=void 0!==o&&o,c=e.children,l=e.classes,s=e.className,u=e.completed,m=void 0!==u&&u,d=e.disabled,f=void 0!==d&&d,g=e.error,v=void 0!==g&&g,b=e.icon,y=(e.last,e.optional),h=e.orientation,E=void 0===h?"horizontal":h,w=e.StepIconComponent,x=e.StepIconProps,O=Object(q.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),j=w;return b&&!j&&(j=Q),r.a.createElement("span",Object(D.a)({className:Object(F.a)(l.root,l[E],s,f&&l.disabled,i&&l.alternativeLabel,v&&l.error),ref:t},O),b||j?r.a.createElement("span",{className:Object(F.a)(l.iconContainer,i&&l.alternativeLabel)},r.a.createElement(j,Object(D.a)({completed:m,active:n,error:v,icon:b},x))):null,r.a.createElement("span",{className:l.labelContainer},r.a.createElement(p.a,{variant:"body2",component:"span",className:Object(F.a)(l.label,i&&l.alternativeLabel,m&&l.completed,n&&l.active,v&&l.error),display:"block"},c),y))});ee.muiName="StepLabel";var te=Object(V.a)(function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}},{name:"MuiStepLabel"})(ee),ae=r.a.forwardRef(function(e,t){var a=e.active,n=e.alternativeLabel,o=void 0!==n&&n,i=e.classes,c=e.className,l=e.completed,s=e.disabled,u=(e.index,e.orientation),m=void 0===u?"horizontal":u,p=Object(q.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return r.a.createElement("div",Object(D.a)({className:Object(F.a)(i.root,i[m],c,o&&i.alternativeLabel,a&&i.active,l&&i.completed,s&&i.disabled),ref:t},p),r.a.createElement("span",{className:Object(F.a)(i.line,"vertical"===m?i.lineVertical:i.lineHorizontal)}))}),ne=Object(V.a)(function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}},{name:"MuiStepConnector"})(ae),re=r.a.createElement(ne,null),oe=r.a.forwardRef(function(e,t){var a=e.activeStep,n=void 0===a?0:a,o=e.alternativeLabel,i=void 0!==o&&o,c=e.children,l=e.classes,s=e.className,u=e.connector,m=void 0===u?re:u,p=e.nonLinear,d=void 0!==p&&p,g=e.orientation,v=void 0===g?"horizontal":g,b=Object(q.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),y=Object(F.a)(l.root,l[v],s,i&&l.alternativeLabel),h=r.a.isValidElement(m)?r.a.cloneElement(m,{orientation:v}):null,E=r.a.Children.toArray(c),w=E.map(function(e,t){var a={alternativeLabel:i,connector:m,last:t+1===E.length,orientation:v},o={index:t,active:!1,completed:!1,disabled:!1};return n===t?o.active=!0:!d&&n>t?o.completed=!0:!d&&n<t&&(o.disabled=!0),[!i&&h&&0!==t&&r.a.cloneElement(h,Object(D.a)({key:t},o)),r.a.cloneElement(e,Object(D.a)({},a,{},o,{},e.props))]});return r.a.createElement(f.a,Object(D.a)({square:!0,elevation:0,className:y,ref:t},b),w)}),ie=Object(V.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(oe),ce=a(165),le=a(68),se=Object(l.c)(ce.a).withConfig({displayName:"Style__Img",componentId:"x37ro1-0"})(["align-self:center;padding:7vmin 0;"]),ue=Object(V.a)({active:{"& $line":{borderColor:"var(--primary-color)"}},completed:{"& $line":{borderColor:"var(--primary-color)"}},line:{borderColor:"#eaeaf0",borderRadius:1,borderTopWidth:3,marginLeft:14,marginRight:14,marginTop:6}})(ne),me=Object(l.c)(ie).withConfig({displayName:"Style__Stepper",componentId:"x37ro1-1"})(["svg{font-size:39px;};text{fill:var(--text-invert-color);};"]),pe=Object(l.c)(le.a).withConfig({displayName:"Style__StepperContent",componentId:"x37ro1-2"})(["align-self:center;flex-wrap:nowrap;section{flex:1};"]),de=Object(l.c)(s.a).withConfig({displayName:"Style__Wrap",componentId:"x37ro1-3"})(["background:var(--background-default-color);display:flex;flex-direction:column;"]),fe=function(){var e=Object(w.a)(),t=E()(e,2),a=t[0],o=t[1],i=Object(n.useState)(0),c=E()(i,2),l=c[0],s=c[1];Object(n.useLayoutEffect)(function(){var e=setTimeout(function(){l===$.length-1?m():u()},1200);return function(){return clearTimeout(e)}},[l]);var u=function(){return s(function(e){return e+1})},m=function(){return s(0)};return r.a.createElement(de,{padding:"12vh",ref:o},r.a.createElement(d.a,{align:"center",gutterBottom:!0,title:"Easy enrolment, easy money",variant:"h3"}),r.a.createElement(O.a,{in:a>.25},r.a.createElement(se,{alt:$[l].title,src:$[l].img,width:"700px"})),r.a.createElement(me,{alternativeLabel:!0,activeStep:l,connector:r.a.createElement(ue,null)},$.slice(0,-1).map(function(e,t){return r.a.createElement(H,{key:e.title},r.a.createElement(te,null))})),r.a.createElement(pe,null,$.slice(0,-1).map(function(e,t){return r.a.createElement(O.a,{key:String(t),in:t===l},r.a.createElement("section",null,r.a.createElement(p.a,{align:"center",variant:"h5"},e.title)))})))},ge=a(167);t.default=function(){return Object(o.a)(),r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{label:"EMPLOYEES",title:"Take advantage today.",subtitle:"!!!!!!!!!"}),r.a.createElement(m,null),r.a.createElement(y,null),r.a.createElement(P,null),r.a.createElement(fe,null),r.a.createElement(ge.a,{title:"Could your company be a fit?"}))}}}]);