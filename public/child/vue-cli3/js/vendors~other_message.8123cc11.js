(window["webpackJsonp_demo"]=window["webpackJsonp_demo"]||[]).push([["vendors~other_message"],{"5c45":function(t,e,n){"use strict";var r;n.r(e),n.d(e,"v1",(function(){return g})),n.d(e,"v3",(function(){return F})),n.d(e,"v4",(function(){return D})),n.d(e,"v5",(function(){return $})),n.d(e,"NIL",(function(){return B})),n.d(e,"version",(function(){return K})),n.d(e,"validate",(function(){return c})),n.d(e,"stringify",(function(){return p})),n.d(e,"parse",(function(){return k}));var o=new Uint8Array(16);function i(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function u(t){return"string"===typeof t&&a.test(t)}for(var c=u,s=[],l=0;l<256;++l)s.push((l+256).toString(16).substr(1));function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}var d,h,p=f,y=0,v=0;function m(t,e,n){var r=e&&n||0,o=e||new Array(16);t=t||{};var a=t.node||d,u=void 0!==t.clockseq?t.clockseq:h;if(null==a||null==u){var c=t.random||(t.rng||i)();null==a&&(a=d=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==u&&(u=h=16383&(c[6]<<8|c[7]))}var s=void 0!==t.msecs?t.msecs:Date.now(),l=void 0!==t.nsecs?t.nsecs:v+1,f=s-y+(l-v)/1e4;if(f<0&&void 0===t.clockseq&&(u=u+1&16383),(f<0||s>y)&&void 0===t.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=s,v=l,h=u,s+=122192928e5;var m=(1e4*(268435455&s)+l)%4294967296;o[r++]=m>>>24&255,o[r++]=m>>>16&255,o[r++]=m>>>8&255,o[r++]=255&m;var g=s/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=u>>>8|128,o[r++]=255&u;for(var b=0;b<6;++b)o[r+b]=a[b];return e||p(o)}var g=m;function b(t){if(!c(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n}var k=b;function w(t){t=unescape(encodeURIComponent(t));for(var e=[],n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}var E="6ba7b810-9dad-11d1-80b4-00c04fd430c8",S="6ba7b811-9dad-11d1-80b4-00c04fd430c8",A=function(t,e,n){function r(t,r,o,i){if("string"===typeof t&&(t=w(t)),"string"===typeof r&&(r=k(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+t.length);if(a.set(r),a.set(t,r.length),a=n(a),a[6]=15&a[6]|e,a[8]=63&a[8]|128,o){i=i||0;for(var u=0;u<16;++u)o[i+u]=a[u];return o}return p(a)}try{r.name=t}catch(o){}return r.DNS=E,r.URL=S,r};function T(t){if("string"===typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return x(_(O(t),8*t.length))}function x(t){for(var e=[],n=32*t.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=t[o>>5]>>>o%32&255,a=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);e.push(a)}return e}function C(t){return 14+(t+64>>>9<<4)+1}function _(t,e){t[e>>5]|=128<<e%32,t[C(e)-1]=e;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,a=0;a<t.length;a+=16){var u=n,c=r,s=o,l=i;n=M(n,r,o,i,t[a],7,-680876936),i=M(i,n,r,o,t[a+1],12,-389564586),o=M(o,i,n,r,t[a+2],17,606105819),r=M(r,o,i,n,t[a+3],22,-1044525330),n=M(n,r,o,i,t[a+4],7,-176418897),i=M(i,n,r,o,t[a+5],12,1200080426),o=M(o,i,n,r,t[a+6],17,-1473231341),r=M(r,o,i,n,t[a+7],22,-45705983),n=M(n,r,o,i,t[a+8],7,1770035416),i=M(i,n,r,o,t[a+9],12,-1958414417),o=M(o,i,n,r,t[a+10],17,-42063),r=M(r,o,i,n,t[a+11],22,-1990404162),n=M(n,r,o,i,t[a+12],7,1804603682),i=M(i,n,r,o,t[a+13],12,-40341101),o=M(o,i,n,r,t[a+14],17,-1502002290),r=M(r,o,i,n,t[a+15],22,1236535329),n=R(n,r,o,i,t[a+1],5,-165796510),i=R(i,n,r,o,t[a+6],9,-1069501632),o=R(o,i,n,r,t[a+11],14,643717713),r=R(r,o,i,n,t[a],20,-373897302),n=R(n,r,o,i,t[a+5],5,-701558691),i=R(i,n,r,o,t[a+10],9,38016083),o=R(o,i,n,r,t[a+15],14,-660478335),r=R(r,o,i,n,t[a+4],20,-405537848),n=R(n,r,o,i,t[a+9],5,568446438),i=R(i,n,r,o,t[a+14],9,-1019803690),o=R(o,i,n,r,t[a+3],14,-187363961),r=R(r,o,i,n,t[a+8],20,1163531501),n=R(n,r,o,i,t[a+13],5,-1444681467),i=R(i,n,r,o,t[a+2],9,-51403784),o=R(o,i,n,r,t[a+7],14,1735328473),r=R(r,o,i,n,t[a+12],20,-1926607734),n=U(n,r,o,i,t[a+5],4,-378558),i=U(i,n,r,o,t[a+8],11,-2022574463),o=U(o,i,n,r,t[a+11],16,1839030562),r=U(r,o,i,n,t[a+14],23,-35309556),n=U(n,r,o,i,t[a+1],4,-1530992060),i=U(i,n,r,o,t[a+4],11,1272893353),o=U(o,i,n,r,t[a+7],16,-155497632),r=U(r,o,i,n,t[a+10],23,-1094730640),n=U(n,r,o,i,t[a+13],4,681279174),i=U(i,n,r,o,t[a],11,-358537222),o=U(o,i,n,r,t[a+3],16,-722521979),r=U(r,o,i,n,t[a+6],23,76029189),n=U(n,r,o,i,t[a+9],4,-640364487),i=U(i,n,r,o,t[a+12],11,-421815835),o=U(o,i,n,r,t[a+15],16,530742520),r=U(r,o,i,n,t[a+2],23,-995338651),n=P(n,r,o,i,t[a],6,-198630844),i=P(i,n,r,o,t[a+7],10,1126891415),o=P(o,i,n,r,t[a+14],15,-1416354905),r=P(r,o,i,n,t[a+5],21,-57434055),n=P(n,r,o,i,t[a+12],6,1700485571),i=P(i,n,r,o,t[a+3],10,-1894986606),o=P(o,i,n,r,t[a+10],15,-1051523),r=P(r,o,i,n,t[a+1],21,-2054922799),n=P(n,r,o,i,t[a+8],6,1873313359),i=P(i,n,r,o,t[a+15],10,-30611744),o=P(o,i,n,r,t[a+6],15,-1560198380),r=P(r,o,i,n,t[a+13],21,1309151649),n=P(n,r,o,i,t[a+4],6,-145523070),i=P(i,n,r,o,t[a+11],10,-1120210379),o=P(o,i,n,r,t[a+2],15,718787259),r=P(r,o,i,n,t[a+9],21,-343485551),n=j(n,u),r=j(r,c),o=j(o,s),i=j(i,l)}return[n,r,o,i]}function O(t){if(0===t.length)return[];for(var e=8*t.length,n=new Uint32Array(C(e)),r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}function j(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function I(t,e){return t<<e|t>>>32-e}function L(t,e,n,r,o,i){return j(I(j(j(e,t),j(r,i)),o),n)}function M(t,e,n,r,o,i,a){return L(e&n|~e&r,t,e,o,i,a)}function R(t,e,n,r,o,i,a){return L(e&r|n&~r,t,e,o,i,a)}function U(t,e,n,r,o,i,a){return L(e^n^r,t,e,o,i,a)}function P(t,e,n,r,o,i,a){return L(n^(e|~r),t,e,o,i,a)}var H=T,N=A("v3",48,H),F=N;function q(t,e,n){t=t||{};var r=t.random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return p(r)}var D=q;function V(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:return e^n^r;case 2:return e&n^e&r^n&r;case 3:return e^n^r}}function z(t,e){return t<<e|t>>>32-e}function J(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var o=0;o<r.length;++o)t.push(r.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,a=Math.ceil(i/16),u=new Array(a),c=0;c<a;++c){for(var s=new Uint32Array(16),l=0;l<16;++l)s[l]=t[64*c+4*l]<<24|t[64*c+4*l+1]<<16|t[64*c+4*l+2]<<8|t[64*c+4*l+3];u[c]=s}u[a-1][14]=8*(t.length-1)/Math.pow(2,32),u[a-1][14]=Math.floor(u[a-1][14]),u[a-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<a;++f){for(var d=new Uint32Array(80),h=0;h<16;++h)d[h]=u[f][h];for(var p=16;p<80;++p)d[p]=z(d[p-3]^d[p-8]^d[p-14]^d[p-16],1);for(var y=n[0],v=n[1],m=n[2],g=n[3],b=n[4],k=0;k<80;++k){var w=Math.floor(k/20),E=z(y,5)+V(w,v,m,g)+b+e[w]+d[k]>>>0;b=g,g=m,m=z(v,30)>>>0,v=y,y=E}n[0]=n[0]+y>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}var Y=J,X=A("v5",80,Y),$=X,B="00000000-0000-0000-0000-000000000000";function G(t){if(!c(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}var K=G},f348:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return u(t,e,n);if(r.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function u(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function c(t,e,n){return o(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(5);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function o(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e){u(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),s=c,l=n(1),f=n.n(l),d=n(2),h=n.n(d),p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var b=function(t){function e(t,n){v(this,e);var r=m(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return g(e,t),y(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=h()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return k("action",t)}},{key:"defaultTarget",value:function(t){var e=k("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return k("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(f.a);function k(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e["default"]=b}])["default"]}))}}]);