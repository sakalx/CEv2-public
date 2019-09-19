!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){var o=e(6),r=e(7),a=e(8);t.exports=function(t,n){return o(t)||r(t,n)||a()}},function(t,n,e){var o=e(3),r=e(4),a=e(5);t.exports=function(t){return o(t)||r(t)||a()}},function(t,n,e){"use strict";e.r(n);var o=e(1),r=e.n(o),a=e(0),i=e.n(a);e(9),function(t){var n,e,o,a,c,s,l={},u=function(n){var e=t.getElementById("_S_APP_OUTPUT"),o=Object.entries(n.table).reduce(function(t,n){var e=i()(n,2),o=e[0],r=i()(e[1],2),a=r[0],c=r[1];return t+"\n        <li>\n          <h6 class='_S_TITLE_RESULT'>".concat(o,"</h6>\n          <div>\n            <span class='_S_TRADITIONAL_RESULT'>").concat(a,"</span>\n            <span class='_S_CASHLESS_RESULT'>").concat(c,"</span>\n          </div>\n        </li>\n      ")},"");e.innerHTML="\n       ".concat("\n      <section class='_S_TABLE_BAR'>\n        <h5>Traditional</h5>\n        <h5>Cashless</h5>\n      </section>\n    ","\n      <ul>\n        ").concat(o,"\n      </ul>\n    "),google.charts.setOnLoadCallback(T(n.chart))},_=function(n){n.preventDefault(),t.getElementById("_S_APP_CONTAINER").classList.add("_S_SHOW_APP")},d=function(n){n.preventDefault(),t.getElementById("_S_APP_CONTAINER").classList.remove("_S_SHOW_APP")},p=function(n){if(t.getElementById("_S_APP_CONTAINER").checkValidity()){n.preventDefault();var e=t.getElementById("_S_COMPANY_NAME").value,o=t.getElementById("_S_AVG_CONTRIBUTION_INPUT").value,r=t.getElementById("_S_PARTICIPATION_RATE_INPUT").value,a=t.getElementById("_S_STOCK_PLAN_INPUT").value;f({COMPANY_NAME_VALUE:e,AVG_CONTRIBUTION_VALUE:o,PARTICIPATION_RATE_VALUE:r,STOCK_PLAN_VALUE:a})}},f=function(n){var e=t.getElementById("_S_SUBMIT_BUTTON"),o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Accept:"application/json"}};e.textContent="LOADING...",e.disabled=!0,fetch("https://ql6ajyp9r6.execute-api.us-east-1.amazonaws.com/api/get_chart",o).then(function(t){return"OK"===t.statusText||200===t.status?Promise.resolve(t.json()):Promise.reject(new Error(t.statusText))}).then(u).catch(function(t){alert("We have some issue to processing data."),console.log(t)}).finally(function(){e.textContent="CALCULATE",e.disabled=!1})},T=function(t){var n=google.visualization.arrayToDataTable([["Month","Traditional","Cashless"]].concat(r()(t)));l.draw(n,{curveType:"function",legend:{position:"bottom"},colors:["#666","#f5803c"],animation:{duration:600,easing:"linear",startup:!0}})};n=t.getElementsByTagName("head")[0],(e=t.createElement("script")).type="text/javascript",e.onload=function(n){google.charts.load("current",{packages:["corechart"]}),google.setOnLoadCallback(function(){return l=new google.visualization.LineChart(t.getElementById("_S_CHART_CONTAINER"))})},e.src="https://www.gstatic.com/charts/loader.js",n.appendChild(e),(o=t.createElement("form")).id="_S_APP_CONTAINER",t.body.appendChild(o),t.getElementById("_S_APP_CONTAINER").innerHTML="\n      <fieldset>\n        <legend>Calculator</legend>\n        ".concat("\n      <span id=".concat("_S_CLOSE_BUTTON",">&times;</span>\n    "),"\n        \n        ").concat("\n      <div class='_S_SELECT_CONTAINER'>\n        <label class='_S_SELECT_LABEL' for=".concat("_S_COMPANY_NAME",">Company name:</label>\n        <select id=").concat("_S_COMPANY_NAME"," required>\n          <option value=''>Choose a company</option>\n          <option value='TGT'>TGT</option>\n          <option value='AAPL'>AAPL</option>\n          <option value='IBM'>IBM</option>\n          <option value='MSFT'>MSFT</option>\n        </select>   \n      </div>\n    "),"\n        ").concat("\n      <div class='_S_INPUT_CONTAINER'>\n        <input class='_S_INPUT' placeholder='$' type='number' id=".concat("_S_AVG_CONTRIBUTION_INPUT"," min='1' max='99999' required>\n        <label class='_S_INPUT_LABEL' for=").concat("_S_AVG_CONTRIBUTION_INPUT",">Average contribution : </label>\n      </div>\n    "),"\n        ").concat("\n      <div class='_S_INPUT_CONTAINER'>\n        <input class='_S_INPUT' placeholder='%' type='number' id=".concat("_S_PARTICIPATION_RATE_INPUT"," min='1' max='100' required>\n        <label class='_S_INPUT_LABEL' for=").concat("_S_PARTICIPATION_RATE_INPUT",">Participation rate : </label>\n      </div>\n    "),"\n        ").concat("\n      <div class='_S_INPUT_CONTAINER'>\n        <input class='_S_INPUT' placeholder='%' type='number' id=".concat("_S_STOCK_PLAN_INPUT"," min='-20' max='100' required>\n        <label class='_S_INPUT_LABEL' for=").concat("_S_STOCK_PLAN_INPUT",">Stock plan scenario : </label>\n      </div>\n    "),"\n        ").concat("\n      <button id=".concat("_S_SUBMIT_BUTTON",">CALCULATE</button>\n    "),"\n        \n        <div id=").concat("_S_CHART_CONTAINER","></div>\n        <section id=").concat("_S_APP_OUTPUT","></section>\n      </fieldset>\n    "),a=t.querySelector("[data-CE_CALCULATOR]"),c=t.getElementById("_S_CLOSE_BUTTON"),s=t.getElementById("_S_SUBMIT_BUTTON"),a.addEventListener("click",_),c.addEventListener("click",d),s.addEventListener("click",p)}(document)},function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},function(t,n){t.exports=function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],o=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);o=!0);}catch(t){r=!0,a=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return e}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,n,e){var o=e(10);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};e(12)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){(t.exports=e(11)(!1)).push([t.i,'#_S_APP_CONTAINER{height:95vh;overflow-y:auto;position:fixed;right:16px;top:16px;transform:translateX(100vw);transition:transform .275s ease-in-out;width:325px;will-change:transform}#_S_APP_CONTAINER fieldset{background:#fff;margin:0;padding:48px 12px 12px}#_S_CLOSE_BUTTON{color:#f5803c;cursor:pointer;font-size:21px;position:absolute;right:18px;top:14px}#_S_SUBMIT_BUTTON{background:#f5803c;border-radius:6px;color:#fff;cursor:pointer;font-size:14px;margin:0 0 28px;outline:none;padding:8px;width:120px}#_S_SUBMIT_BUTTON:disabled{background:#d1d1d1!important;cursor:not-allowed}#_S_APP_OUTPUT{padding:32px 0}#_S_APP_OUTPUT section{align-items:center;display:flex;justify-content:flex-end}#_S_APP_OUTPUT ul{list-style:none;margin:0;padding:0}#_S_APP_OUTPUT li:nth-child(odd){background:#fef7f3}#_S_APP_OUTPUT li{padding:12px 8px 14px}#_S_APP_OUTPUT li span{font-size:14px;margin-left:21px;min-width:93px;text-align:right}#_S_APP_OUTPUT div{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}#_S_APP_OUTPUT hr{margin:8px 0 21px}._S_TABLE_BAR h5{color:#3d3d3d;font-size:16px;font-weight:400;margin:0 0 21px 21px;min-width:93px;text-align:right}._S_TITLE_RESULT{color:#3d3d3d;font-size:14px;font-weight:400;margin:0 0 10px}._S_TRADITIONAL_RESULT{color:#666}._S_CASHLESS_RESULT{color:#f5803c}._S_INPUT_CONTAINER{margin:43px 0;position:relative}._S_SELECT_CONTAINER{align-items:center;display:flex;justify-content:space-between;margin-bottom:43px}._S_INPUT,._S_SELECT_CONTAINER select{font-size:14px}._S_INPUT{background:transparent;border-radius:0;border:none;border-bottom:1px solid #666;box-shadow:none;box-sizing:border-box;color:#000;cursor:text;outline:none;padding:.5em;width:100%}._S_INPUT:hover{border-bottom:1px solid #323232}._S_INPUT:focus{border-bottom:1px solid #f5803c}._S_SELECT_LABEL{color:#666;font-size:14px;margin-right:16px}._S_INPUT_LABEL{bottom:100%;color:#666;font-size:14px;left:0;position:absolute}._S_INPUT:hover~._S_INPUT_LABEL{color:#323232}._S_INPUT:focus~._S_INPUT_LABEL{color:#f5803c}._S_INPUT:valid~._S_INPUT_LABEL:after{color:#f5803c;content:"✓";position:absolute;right:-20px;top:-2px}._S_SHOW_APP{transform:translateX(0)!important}',""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[e].concat(a).concat([r]).join("\n")}var i,c,s;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<t.length;i++){var c=t[i];null!=c[0]&&o[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),n.push(c))}},n}},function(t,n,e){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}();function c(t,n){for(var e=[],o={},r=0;r<t.length;r++){var a=t[r],i=n.base?a[0]+n.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(c):e.push(o[i]={id:i,parts:[c]})}return e}function s(t,n){for(var e=0;e<t.length;e++){var o=t[e],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(T(o.parts[i],n))}else{for(var c=[];i<o.parts.length;i++)c.push(T(o.parts[i],n));r[o.id]={id:o.id,refs:1,parts:c}}}}function l(t){var n=document.createElement("style");if(void 0===t.attributes.nonce){var o=e.nc;o&&(t.attributes.nonce=o)}if(Object.keys(t.attributes).forEach(function(e){n.setAttribute(e,t.attributes[e])}),"function"==typeof t.insert)t.insert(n);else{var r=i(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var u,_=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function d(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=_(n,r);else{var a=document.createTextNode(r),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a)}}var p=null,f=0;function T(t,n){var e,o,r;if(n.singleton){var a=f++;e=p||(p=l(n)),o=d.bind(null,e,a,!1),r=d.bind(null,e,a,!0)}else e=l(n),o=function(t,n,e){var o=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var e=c(t,n);return s(e,n),function(t){for(var o=[],a=0;a<e.length;a++){var i=e[a],l=r[i.id];l&&(l.refs--,o.push(l))}t&&s(c(t,n),n);for(var u=0;u<o.length;u++){var _=o[u];if(0===_.refs){for(var d=0;d<_.parts.length;d++)_.parts[d]();delete r[_.id]}}}}}]);