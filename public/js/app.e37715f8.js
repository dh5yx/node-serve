(function(e){function n(n){for(var o,a,i=n[0],c=n[1],l=n[2],s=0,p=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(p.length)p.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==r[i]&&(o=!1)}o&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},a={app:0},r={app:0},u=[];function i(e){return c.p+"js/"+({about:"about",home:"home",main:"main"}[e]||e)+"."+{about:"59a43fbf",home:"7c70e1de",main:"d76a4370","chunk-6ee6f266":"aa161163","chunk-2d0a47b9":"178bfcdf"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={main:1,"chunk-6ee6f266":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({about:"about",home:"home",main:"main"}[e]||e)+"."+{about:"31d6cfe0",home:"31d6cfe0",main:"29c49de6","chunk-6ee6f266":"37a31cb5","chunk-2d0a47b9":"31d6cfe0"}[e]+".css",r=c.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===r))return n()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],s=l.getAttribute("data-href");if(s===o||s===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var p=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,t[1](p)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var p=0;p<l.length;p++)n(l[p]);var f=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"42ee":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("44a9"),t("3a99"),t("2c238"),t("6ae4");var o=t("a593"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"base-vue",attrs:{id:"app"}},[t("ul",{staticClass:"menu-parent-list"},e._l(e.menu,(function(n){return t("li",{key:n.name,staticClass:"menu-item",class:{active:e.acitveClass(n.index)},on:{click:function(t){return e.checkMenu(n)}}},[t("span",{staticClass:"iconfont",class:n.icon}),t("span",[e._v(e._s(n.name))])])})),0),t("router-view"),t("div",{attrs:{id:"vue-cli3"}}),t("div",{attrs:{id:"app1"}}),t("div",{attrs:{id:"app2"}})],1)},r=[],u=(t("883f"),t("1719"),t("079b"),t("5faa"),["/app1","app2","vue-cli3"]),i={name:"App",data:function(){return{menu:[{index:"/",name:"主应用",icon:"el-icon-s-home",children:[]},{index:"/vue-cli3",name:"vue-cli3",icon:"el-icon-s-home",children:[]},{index:"/app1",name:"子应用一",icon:"el-icon-s-home",children:[]},{index:"/app2",name:"子应用二",icon:"el-icon-s-home",children:[]}]}},methods:{checkMenu:function(e){this.$router.push(e.index).catch((function(){}))}},computed:{acitveClass:function(){var e=this;return function(n){return n.length>1?e.$route.path.startsWith(n):!u.some((function(n){return e.$route.path.includes(n)}))}}}},c=i,l=(t("6544"),t("5d22")),s=Object(l["a"])(c,a,r,!1,null,"57a09b32",null),p=s.exports,f=(t("bc4a"),t("8aaf"));o["default"].use(f["a"]);var d=[{path:"/",redirect:{name:"main"}},{path:"/main",name:"main",component:function(){return t.e("main").then(t.bind(null,"50f9"))},redirect:{name:"home"},children:[{path:"/home",name:"home",component:function(){return t.e("home").then(t.bind(null,"7abe"))}},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"613f"))}}]}],m=new f["a"]({mode:"history",routes:d}),h=m,v=(t("7371"),t("7cde"),t("a675"),t("6255")),b=t.n(v),g=t("c225"),y=t("2e47"),w=t("a652");o["default"].use(b.a,{size:"small",zIndex:3e3}),o["default"].config.productionTip=!1,new o["default"]({router:h,render:function(e){return e(p)}}).$mount("#app"),Object(g["b"])([{name:"vue-app-cli3",entry:"http://localhost:9999",container:"#vue-cli3",activeRule:"/vue-cli3",loader:function(){},props:{msg:"你是子应用-vue-cli3"}},{name:"vue-app1",entry:"http://localhost:9999/app1",container:"#app1",activeRule:"/app1",loader:function(){},props:{msg:"你是子应用-app1"}},{name:"vue-app2",entry:"http://localhost:9999",container:"#app2",activeRule:"/app2",props:{msg:"你是子应用-app2"}}],{beforeLoad:[function(e){console.log("before load")}],beforeMount:[function(e){console.log("before mount")}],afterMount:[function(e){}],beforeUnmount:[function(e){}],afterUnmount:[function(e){console.log("after unload")}]}),Object(y["a"])((function(){console.log("第一个微应用开启")}));var k={name:"deng",age:20},O=Object(w["b"])(k);O.onGlobalStateChange((function(e,n){console.log(e,n)})),O.offGlobalStateChange(),Object(g["c"])({prefetch:"all"})},6544:function(e,n,t){"use strict";t("42ee")},7371:function(e,n,t){},"7cde":function(e,n,t){}});
//# sourceMappingURL=app.e37715f8.js.map