!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=125)}({0:function(t,e,n){t.exports=n(26)},1:function(t,e,n){"use strict";var r,i=n(0),o=n.n(i),a=n(2),s=n.n(a),c=n(3),l=n.n(c),u=function t(){return l()(this,t),this.overlay=document.createElement("article"),this.overlay.classList.add("loading"),this.overlay},d=function t(){return l()(this,t),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.classList.add("loading__svg"),this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.svg.append(this.rect),this.svg},_=function(t){return new Promise((function(e){setTimeout(e,1e3*Number(t))}))},f={minWaitTime:.3,maxWaitTime:3,isExcuting:!1,on:(r=s()(o.a.mark((function t(){var e,n,r,i,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=a.length>0&&void 0!==a[0]?a[0]:null)){t.next=6;break}if(!(e>this.maxWaitTime||"number"!=typeof e)){t.next=4;break}throw new Error("loading.on 함수의 인자가 숫자가 아니거나 최대값을 초과했습니다.");case 4:return t.next=6,_(e);case 6:return this.isExcuting=!0,n=document.createDocumentFragment(),r=new u,i=new d,r.append(i),n.append(r),document.body.append(n),t.next=15,_(this.maxWaitTime);case 15:!0===this.isExcuting&&(console.warn("loading.off 가 호출되지 않아 로딩 컴포넌트가 자동 삭제처리 되었습니다."),this.deleteLoading());case 16:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),off:function(){var t=this;!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.minWaitTime;setTimeout((function(){return t.deleteLoading()?void(t.waitTimeCnt=0):t.off()}),1e3*e)}(.25)},deleteLoading:function(){var t=document.querySelector(".loading");return!!t&&(t.remove(),this.isExcuting=!1,!0)}};e.a=f},10:function(t,e,n){var r=n(27),i=n(28),o=n(18),a=n(29);t.exports=function(t){return r(t)||i(t)||o(t)||a()}},11:function(t,e,n){var r=n(30),i=n(31),o=n(18),a=n(32);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()}},125:function(t,e,n){"use strict";n.r(e);n(71),n(72);var r=n(25),i={parentElem:document.querySelector(".post-list__posts"),path:"community/notice",limit:15};document.addEventListener("DOMContentLoaded",(function(){Object(r.a)(Object.values(i))}),!1)},18:function(t,e,n){var r=n(9);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},2:function(t,e){function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}},25:function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(11),a=n.n(o),s=n(2),c=n.n(s),l=n(6),u=n(8),d=n(10),_=n.n(d),f=n(7),h=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return Object.defineProperty(t,e,{value:"post-list__item__".concat(e)})}),{})},p=function(t,e){var n=h.apply(void 0,["number","title","writer","hit","createdAt"]),r=f.a,i=f.d,o=f.b,a=e.reduce((function(e,a){var s=document.createElement("a");s.setAttribute("class","post-list__".concat("item")),s.setAttribute("href","/".concat(t,"/").concat(a.id));var c=r(a.createdAt,9),l=o(a.createdAt),u=i(c,l);return s.innerHTML="\n<p class=".concat(n.number,">").concat(a.id||"0000","</p>\n<p class=").concat(n.title,">").concat(a.title||"[ 빈 제목입니다 ]","</p>\n<p class=").concat(n.writer,">").concat(a.UserId||"Annonymous","</p>\n<p class=").concat(n.hit,">").concat(a.Inquiries[0].count||"0","</p>\n<p class=").concat(n.createdAt,">").concat(u,"</p>\n").trim(),e.push(s),e}),[]),s=new DocumentFragment;return s.append.apply(s,_()(a)),s},m=n(1),v=document.body.querySelector(".post-list__inner-paging"),b=v.querySelector(".post-list__paging-numbers"),g=!0,y=1,w=!1,x=function(){var t=document.body.querySelector(".post-list"),e=t.querySelector(".post-list__posts"),n=document.createElement("section");n.setAttribute("class","post-list__empty-guide-msg"),n.innerHTML='\n<div class="post-list__empty-guide-msg__wrapper">\n  <p class="post-list__empty-guide-msg__title">⚠ 아직 게시글이 존재하지 않습니다.</p>\n  <p class="post-list__empty-guide-msg__txt">첫 게시글의 주인공이 되어주세요!</p>\n</div>\n'.trim();var r=new DocumentFragment;r.append(n),t.replaceChild(r,e)},k=function(t){return window[Symbol.for(t)]||console.error("⛔ [ _paginate.js ] 모듈이 export하는 paginatePostList() 에서 전역변수가 생성된 후에 이 함수를 호출해야 유효한 동작을 수행합니다."),window[Symbol.for(t)][0]},j=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return window[Symbol.for(t)]=n},L=function(){var t=c()(i.a.mark((function t(){var e,n,r,o,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=k("option"),n=a()(e,3),r=n[1],o=n[2],s="/".concat(r,"/api/index?limit=").concat(o),l.a.path=s,t.next=5,Object(u.a)(l.a.url).then((function(t){return t.idx?t.idx:(w=!0,1)}));case 5:c=t.sent,j("LAST_PAGE",c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=document.createDocumentFragment(),e=document.createElement("li");e.setAttribute("class","post-list__paging-numbers__number");var n=function(n){for(var r=0;r<n;r++){var i=e.cloneNode();i.textContent=r+1,t.appendChild(i)}},r=k("LAST_PAGE");n(r<10?r:10),b.appendChild(t)},S=function(){var t=k("LAST_PAGE"),e=document.body.querySelector(".post-list__paging-chevron--left");1==y?e.classList.add("post-list__paging-chevron--disabled"):e.classList.remove("post-list__paging-chevron--disabled");var n=document.body.querySelector(".post-list__paging-chevron--right");y==t?n.classList.add("post-list__paging-chevron--disabled"):n.classList.remove("post-list__paging-chevron--disabled")},O=function(){Array.from(b.children).forEach((function(t){t.textContent==y&&t.classList.toggle("post-list__paging-numbers__number--highlight")}))},A=function(t){var e=k("option"),n=a()(e,3),r=n[0],i=n[1],o=n[2];return r.innerHTML="",function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i="/".concat(e,"/api?limit=").concat(n,"&page=").concat(r);l.a.path=i;var o=function(t){return t};return Object(u.a)(l.a.url).then((function(t){return o(t)})).then((function(t){return p(e,t.postsList)})).then((function(e){return t.appendChild(e)})).catch(console.error)}(r,i,o,y=isNaN(t)?t.textContent:t)},T=function(t){var e=k("LAST_PAGE"),n=Array.from(b.children),r=n.length,i=n.map((function(t){return parseInt(t.textContent)})),o=Math.ceil(r/2)-1,a=r%2==1?o:o+1,s=i[r%2==1?o:o-1],c=i[a],l=i[0],u=i[r-1],d=function(t){l+t<1?n.forEach((function(t,e){return t.textContent=e+1})):u+t>e?n.forEach((function(t,n){return t.textContent=e-r+n+1})):n.forEach((function(e){e.textContent=parseInt(e.textContent)+t}))};switch(t.textContent){case"이전 페이지":1!==l&&y<=s&&d(-1),y--;break;case"다음 페이지":u!==e&&y>=c&&d(1),y++;break;default:var _=parseInt(t.textContent),f=_-y;d(_-c),y+=f}},M=function(){var t=c()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("UL"!==(n=e.target).tagName){t.next=3;break}return t.abrupt("return");case 3:if("LI"!==n.tagName||n.textContent!=y){t.next=5;break}return t.abrupt("return");case 5:return"path"===n.tagName&&(n=e.target.closest("svg")),m.a.on(),O(),T(n),t.next=11,A(y);case 11:O(),S(),m.a.off();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=c()(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j("option",e),m.a.on(),!g){t.next=13;break}return t.next=5,L();case 5:if(E(),S(),O(),!w){t.next=12;break}return m.a.off(),x(),t.abrupt("return");case 12:g=!1;case 13:return t.next=15,A(y);case 15:m.a.off(),v.addEventListener("click",M,!1);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.a=C},26:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return L()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=y(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function d(){}function _(){}function f(){}var h={};h[i]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(j([])));m&&m!==e&&n.call(m,i)&&(h=m);var v=f.prototype=d.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var r;this._invoke=function(i,o){function a(){return new e((function(r,a){!function r(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}(i,o,r,a)}))}return r=r?r.then(a,a):a()}}function y(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return _.prototype=v.constructor=f,f.constructor=_,_.displayName=s(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new g(c(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(v),s(v,a,"Generator"),v[i]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},27:function(t,e,n){var r=n(9);t.exports=function(t){if(Array.isArray(t))return r(t)}},28:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},29:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},30:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},31:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}},32:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},4:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;function i(t,e){return Array.isArray(t)?function(t,e){for(var n,r="",o="",a=Array.isArray(e),s=0;s<t.length;s++)(n=i(t[s]))&&(a&&e[s]&&(n=c(n)),r=r+o+n,o=" ");return r}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var i in t)i&&t[i]&&r.call(t,i)&&(e=e+n+i,n=" ");return e}(t):t||""}function o(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)r.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function a(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var i=typeof e;return"object"!==i&&"function"!==i||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=c(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,n){if(1===arguments.length){for(var r=e[0],i=1;i<e.length;i++)r=t(r,e[i]);return r}for(var a in n)if("class"===a){var s=e[a]||[];e[a]=(Array.isArray(s)?s:[s]).concat(n[a]||[])}else if("style"===a){s=(s=o(e[a]))&&";"!==s[s.length-1]?s+";":s;var c=o(n[a]);c=c&&";"!==c[c.length-1]?c+";":c,e[a]=s+c}else e[a]=n[a];return e},e.classes=i,e.style=o,e.attr=a,e.attrs=function(t,e){var n="";for(var s in t)if(r.call(t,s)){var c=t[s];if("class"===s){c=i(c),n=a(s,c,!1,e)+n;continue}"style"===s&&(c=o(c)),n+=a(s,c,!1,e)}return n};var s=/["&<>]/;function c(t){var e=""+t,n=s.exec(e);if(!n)return t;var r,i,o,a="";for(r=n.index,i=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==r&&(a+=e.substring(i,r)),i=r+1,a+=o}return i!==r?a+e.substring(i,r):a}e.escape=c,e.rethrow=function t(e,r,i,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||o))throw e.message+=" on line "+i,e;try{o=o||n(5).readFileSync(r,"utf8")}catch(n){t(e,null,i)}var a=3,s=o.split("\n"),c=Math.max(i-a,0),l=Math.min(s.length,i+a);a=s.slice(c,l).map((function(t,e){var n=e+c+1;return(n==i?"  > ":"    ")+n+"| "+t})).join("\n");e.path=r;try{e.message=(r||"Pug")+":"+i+"\n"+a+"\n\n"+e.message}catch(t){}throw e}},5:function(t,e){},6:function(t,e,n){"use strict";var r={host:"https://www.ddccomputer.com",localhost:"http://localhost:8001",get url(){if(this._path)return this.host+this._path;console.error("requestURL(): path를 설정해주세요")},set path(t){this._path=t}};e.a=r},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return a}));var r=function(t,e){var n=new Date(t),r=new Date;return r.setTime(n.getTime()+60*e*60*1e3),r},i=function(t){var e=new Date(t);return(new Date).getTime()-e.getTime()},o=function(t){return t.toISOString().match(/^\d{4}-\d{2}-\d{2}(?=T)/)[0]},a=function(t){return t.toISOString().match(/(?<=T)\d{2}:\d{2}(?=:\d{2})/)[0]},s=function(t){return t.toISOString().match(/(?<=^\d{2,4}-)\d+-\d+(?=T)/)[0]},c=function(t,e){var n=r(new Date,9),i=s(n),o=s(t);return o===i?function(t){if(!(t>864e5)){var e=function(t){return"".concat(t,"시간 전")},n=function(t){return"".concat(t,"분 전")},r=function(t){return"".concat(t,"초 전")},i=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),a=Math.floor(t/1e3/60/60);return a>=1?e(a):o>=1?n(o):i>=0?r(i):void 0}}(e):o}},71:function(t,e,n){var r=n(4);t.exports=function(t){var e,n="",i={},o=t||{};return function(t,o){const a="https://www.ddccomputer.com";n=(n+='<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">')+'<meta http-equiv="Content-Security-Policy"'+r.attr("content",`default-src 'self' ${a}; script-src 'self' ${a} https: 'unsafe-inline'; font-src 'self' ${a} http://fonts.gstatic.com; connect-src 'self' ${a}`,!0,!0)+'><title>공지사항</title><link rel="stylesheet" href="/css/common.css"><link rel="stylesheet" href="/css/notice.css"><script defer src="/es5/common.js"><\/script><script defer src="/es5/notice.js"><\/script></head><body>',i.icon=e=function(i,o,a){this&&this.block,this&&this.attributes;switch(i){case"close":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 105 300 300"><title>'+r.escape(null==(e=o)?"":e)+'</title><path fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M368 368L144 144M368 144L144 368"></path></svg>';break;case"chevronForward":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 100 300 320"><title>'+r.escape(null==(e=o)?"":e)+'</title><path fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M184 112l144 144-144 144"></path></svg>';break;case"chevronBackward":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 100 300 320"><title>'+r.escape(null==(e=o)?"":e)+'</title><path fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M328 112L184 256l144 144"></path></svg>';break;case"chevronDown":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 105 300 300"><title>'+r.escape(null==(e=o)?"":e)+'</title><path fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 184l144 144 144-144"></path></svg>';break;case"caretDown":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="91 91 330 330"><title>'+r.escape(null==(e=o)?"":e)+"</title><path"+r.attr("fill",a,!0,!0)+' d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path></svg>';break;case"home":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 480 480"><title>'+r.escape(null==(e=o)?"":e)+'</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>';break;case"menu":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewbox="105 105 300 300"><title>'+r.escape(null==(e=o)?"":e)+'</title><path fill="none"'+r.attr("stroke",a,!0,!0)+' stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M80 160h352M80 256h352M80 352h352"></path></svg>';break;case"github":n=n+'<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 1000"><title>'+r.escape(null==(e=o)?"":e)+"</title><path"+r.attr("fill",a,!0,!0)+' d="M500,10C236.3,10,22.6,229.4,22.6,500c0,270.6,213.8,490,477.4,490c263.7,0,477.4-219.4,477.4-490C977.4,229.4,763.7,10,500,10z M643.3,940.1c-23,4.6-31.1-9.9-31.1-22.3c0-15.2,0.5-65.2,0.5-127.2c0-43.3-14.5-71.6-30.7-86c100.8-11.4,206.5-50.7,206.5-228.8c0-50.6-17.5-92.1-46.5-124.5c4.6-11.7,20.2-58.8-4.5-122.7c0,0-37.9-12.5-124.3,47.6c-36.1-10.3-74.8-15.5-113.2-15.7c-38.5,0.2-77.2,5.3-113.2,15.7c-86.4-60-124.4-47.6-124.4-47.6c-24.6,63.9-9.1,111-4.4,122.7c-28.9,32.4-46.5,73.8-46.5,124.5c0,177.7,105.6,217.5,206,229.2c-12.9,11.6-24.6,32-28.7,62c-25.8,11.8-91.3,32.3-131.6-38.6c0,0-23.9-44.5-69.3-47.8c0,0-44.2-0.6-3.1,28.2c0,0,29.7,14.2,50.2,67.8c0,0,26.6,90.2,152.4,62.2c0.2,38.7,0.6,67.9,0.6,78.9c0,12.3-8.2,26.6-30.9,22.3c-179.8-61.3-309.3-235.1-309.3-440C47.7,244,250.2,36.4,500,36.4c249.8,0,452.3,207.6,452.3,463.8C952.3,705,822.8,878.7,643.3,940.1z"></path></svg>';break;default:n=n+'<p style="color:red;">icon mixin에 존재하지 않는 인자 '+r.escape(null==(e=t)?"":e)+"이(가) 전달되었습니다.</p>"}},i["sub-contents__item__icon"]=e=function(t){this&&this.block,this&&this.attributes;n+='<div class="sub-contents__item__icon">',i.icon(t,"","#0f0f0f"),n+="</div>"},i.postList=e=function(t=!1,e){this&&this.block,this&&this.attributes;n+='<article class="post-list">\n\x3c!-- 게시판 글 목록 헤더--\x3e<section class="post-list__header"><div class="post-list__header__prop post-list__header__number">번호</div><div class="post-list__header__prop post-list__header__title">제목</div><div class="post-list__header__prop post-list__header__writer">작성자</div><div class="post-list__header__prop post-list__header__hit">조회수</div><div class="post-list__header__prop post-list__header__createdAt">등록일</div></section>\n\x3c!-- 게시판 글 목록--\x3e<section class="post-list__posts"></section>\n\x3c!-- 게시판 글 목록 버튼들--\x3e<section class="post-list__btns">\x3c!-- 페이지네이션--\x3e<section class="post-list__inner-paging">\x3c!-- 페이지 번호 리스트--\x3e<ul class="post-list__paging-numbers"></ul>\x3c!-- 버튼들--\x3e<div class="post-list__paging-chevron post-list__paging-chevron--left">',i.icon("chevronBackward","이전 페이지","#6e6e6e"),n+='</div><div class="post-list__paging-chevron post-list__paging-chevron--right">',i.icon("chevronForward","다음 페이지","#6e6e6e"),n+="</div></section>\x3c!-- TODO: 제일 앞으로 가기, 제일 뒤로 가기 부분 구현--\x3e\n",t&&(n+="\x3c!-- 글쓰기 버튼--\x3e",o?n=n+'<a class="post-list__write-btn"'+r.attr("href","/"+e+"/create",!0,!0)+">글쓰기</a>":n+='<p class="js-recommendLoginMsg" style="margin-top: 1rem; text-align: right; font-weight: 700">로그인하여 글을 작성해보세요!</p>'),n+="</section></article>"},n+='\n<header class="header"><a class="header__logo" href="/"><div class="header__logo__icon"></div><div class="header__logo__txt"><span>대덕대학교</span><span>컴퓨터정보학과</span></div></a><div class="header-menu"><ul class="header-menu__list"><li class="header-menu__item"><a class="header-menu__title" href="/intro/info">학과소개</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/intro/info">학과소개</a><a class="header-menu-dropdown__link" href="/intro/member">구성원</a><a class="header-menu-dropdown__link" href="/intro/env">교육 환경</a><a class="header-menu-dropdown__link" href="/intro/club">동아리</a></div></div></li><li class="header-menu__item"><a class="header-menu__title" href="/milestone/curriculum">학과진로</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/milestone/curriculum">교육 목표</a><a class="header-menu-dropdown__link" href="/milestone/cert">자격증 소개</a><a class="header-menu-dropdown__link" href="/milestone/career">진로 설정</a>\n</div></div></li><li class="header-menu__item"><a class="header-menu__title" href="/community/board">커뮤니티</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/community/board">학과 이야기</a><a class="header-menu-dropdown__link" href="/community/suggestion">바라는 점</a><a class="header-menu-dropdown__link" href="/community/donation">나눔의 공간</a><a class="header-menu-dropdown__link" href="/community/notice">공지사항</a>\n</div></div></li><li class="header-menu__item"><a class="header-menu__title" href="/footprint/acquisition">학생 자취록</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/footprint/acquisition">자격증 취득</a><a class="header-menu-dropdown__link" href="/footprint/awards">대회 수상</a><a class="header-menu-dropdown__link" href="/footprint/portfolio">포트폴리오</a>\n</div></div></li></ul></div><div class="header-util"><ul class="header-util__list">',n+=o?'<li class="header-util__item"><a class="header-util__link header-util__link--logout js-logoutBtn">로그아웃</a></li>':'<li class="header-util__item"><div class="header-util__link header-util__link--login js-loginOpenBtn">로그인</div></li><li class="header-util__item"><div class="header-util__link header-util__link--join js-joinOpenBtn">회원가입</div></li>',n+='<li class="header-util__item"><div class="header-util__btn">',i.icon("menu","사이드바 열기","#eee"),n+="</div></li></ul></div></header>\n",i.sidebar__header__icon=e=function(){this&&this.block,this&&this.attributes;n+='<div class="sidebar__header__icon">',i.icon("close","닫기","#0f0f0f"),n+="</div>"},i.sidebar__item__icon=e=function(){this&&this.block,this&&this.attributes;n+='<div class="sidebar__item__icon">',i.icon("caretDown","여닫기","#f5f5f5"),n+="</div>"},n+='<div class="cover"></div><div class="sidebar"><section class="sidebar__header"><div class="sidebar__header__logo"><div class="sidebar__header__logo__icon"></div><div class="sidebar__header__logo__txt"><span>대덕대학교</span><span>컴퓨터정보학과</span></div></div>',i.sidebar__header__icon(),n+='</section><section class="sidebar__auth">',n+=o?'<div class="sidebar__auth__item"><a class="sidebar__auth__link--logout js-logoutBtn">로그아웃</a></div>':'<div class="sidebar__auth__item"><div class="sidebar__auth__link--login js-loginOpenBtn">로그인</div></div>',n+='</section><ul class="sidebar__list"><li class="sidebar__item">',i.sidebar__item__icon(),n+='<div class="sidebar__btn sidebar__intro">학과소개</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/info">학과소개</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/member">구성원</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/env">교육환경</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/club">동아리</a></li></ul></li><li class="sidebar__item">',i.sidebar__item__icon(),n+='<div class="sidebar__btn sidebar__career">학과진로</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/milestone/curriculum">교육 목표</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/milestone/cert">자격증 소개</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/milestone/career">진로 설정</a></li></ul></li><li class="sidebar__item">',i.sidebar__item__icon(),n+='<div class="sidebar__btn sidebar__community">커뮤니티</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/board">학과 이야기</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/suggestion">바라는 점</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/donation">나눔의 공간</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/notice">공지사항</a></li></ul></li><li class="sidebar__item">',i.sidebar__item__icon(),n+='<div class="sidebar__btn sidebar__history">학생 자취록</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/footprint/acquisition">자격증 취득</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/footprint/awards">대회수상</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/footprint/portfolio">포트폴리오</a></li></ul></li></ul></div>\n<main class="sub-main"><div class="sub-background"></div><div class="sub-main__wrap">\x3c!-- 여기서부터 네비게이션 바 시작--\x3e<div class="sub-nav"><div class="sub-nav__title-wrap"><h3 class="sub-nav__title">커뮤니티</h3></div><div class="sub-nav__list-wrap"><ul class="sub-nav__list"><li class="sub-nav__item"><a class="sub-nav__link" href="/community/board">학과 이야기</a></li><li class="sub-nav__item"><a class="sub-nav__link" href="/community/suggestion">바라는 점</a></li><li class="sub-nav__item"><a class="sub-nav__link" href="/community/donation">나눔의 공간</a></li><li class="sub-nav__item"><a class="sub-nav__link" href="/community/notice">공지사항</a></li></ul></div></div>\x3c!-- 여기서부터 콘텐츠 시작--\x3e<div class="sub-contents"><div class="sub-contents__wrap"><div class="sub-contents__header"><h2 class="sub-contents__title">공지사항</h2><div class="sub-contents__util-wrap"><ul class="sub-contents__util-list"><li class="sub-contents__item">',i["sub-contents__item__icon"]("home"),n+='<a class="sub-contents__item__link" href="/">HOME</a>',i["sub-contents__item__icon"]("chevronForward"),n+='</li><li class="sub-contents__item"><a class="sub-contents__item__link" href="/community/board">커뮤니티</a>',i["sub-contents__item__icon"]("chevronForward"),n+='</li><li class="sub-contents__item"><a class="sub-contents__item__link" href="/community/notice">공지사항</a></li></ul></div></div><div class="sub-contents__content">\x3c!-- 게시판 글 목록--\x3e',i.postList(!1,"community/notice",o),n+='</div></div></div></div></main>\n<footer class="footer"><a class="footer__logo" href="/"><div class="footer__logo__icon"></div><div class="footer__logo__txt"><span>대덕대학교</span><span>컴퓨터정보학과</span></div></a><div class="footer__wrap"><section class="footer__privacy-policy"><a href="http://www.ddu.ac.kr/msi/cntntsService.do?menuId=MNU_0000000000000317">개인정보처리방침</a></section><section class="footer__location"><span>305-715 대전광역시 유성구 가정북로 68 대덕대학교(장동 48번지) 정곡관 6층</span></section><section class="footer__number"><span>Tel. 042-866-0307</span><span>Fax. 042-866-0371</span></section><section class="footer__copyright"><span>Github</span><div class="footer__copyright__icon">',i.icon("github","","#999"),n+='</div><a href="https://github.com/galaxy4276">galaxy4276</a><a href="https://github.com/wscrg">wscrg</a><a href="https://github.com/bear-bear-bear">bear-bear-bear</a></section></div></footer>\n\n\n',o||(n+='\x3c!-- default >> hide--\x3e<article class="login">\n<div class="login__overlay"></div>\n<form class="login__form" action="/auth/login" method="post" autocomplete="off">\n<div class="login__form__close-btn">',i.icon("close","닫기","#f5f5f5"),n+='</div><div class="login__form__title">로그인</div>\n<div class="login__form__input-box"><input class="login__form__input js-authInput" type="text" name="id" minlength="1" required><label class="login__form__input-label">사용자 이름</label></div><div class="login__form__input-box"><input class="login__form__input js-authInput" type="password" name="password" minlength="1" autocomplete="new-password" required><label class="login__form__input-label">비밀번호</label></div>\n<input class="login__form__login-btn" type="submit" value="로그인"><button class="login__form__join-open-btn js-joinOpenBtn" type="button">회원가입</button>\n<div class="login__form__find-password"><a class="login__form__find-password-link js-findBtn" href="/auth/forgot_sendEmail">비밀번호를 잊으셨나요?</a></div></form></article><article class="join">\n<div class="join__overlay"></div>\n<form class="join__form" action="/auth/join" method="post" autocomplete="off">\n<div class="join__form__close-btn">',i.icon("close","닫기","#f5f5f5"),n+='</div><div class="join__form__title">회원가입</div>\n<div class="join__form__input-box"><input class="join__form__input js-authInput" type="text" name="id" minlength="4" maxlength="10" required><label class="join__form__input-label">사용자 이름 (영문 4자 이상 10자 이하)</label><span class="join__form__input-check js-inputCheck"></span></div><div class="join__form__input-box"><input class="join__form__input js-authInput" type="password" name="password" minlength="8" maxlength="50" autocomplete="new-password" required><label class="join__form__input-label">비밀번호 (영문, 숫자, 기호를 조합하여 8자 이상)</label><span class="join__form__input-check js-inputCheck"></span></div><div class="join__form__input-box"><input class="join__form__input js-authInput" type="password" name="pwcheck" minlength="1" autocomplete="new-password" required><label class="join__form__input-label">비밀번호 확인</label><span class="join__form__input-check js-inputCheck"></span></div><div class="join__form__input-box"><input class="join__form__input js-authInput" type="email" name="email" required><label class="join__form__input-label">이메일 (비밀번호 찾기에 사용됩니다)</label><span class="join__form__input-check js-inputCheck"></span></div>\n<input class="join__form__join-btn" type="submit" value="회원가입" disabled></form></article>'),n+="</body></html>"}.call(this,"currentIcon"in o?o.currentIcon:"undefined"!=typeof currentIcon?currentIcon:void 0,"user"in o?o.user:"undefined"!=typeof user?user:void 0),n}},72:function(t,e,n){},8:function(t,e,n){"use strict";var r=n(1);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(t,{method:"GET",cache:"no-cache",mode:"same-origin",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.error(t),r.a.off()}))}},9:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}}});