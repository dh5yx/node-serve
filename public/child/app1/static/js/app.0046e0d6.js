(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["app1-app"]=t():e["app1-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,o,i=t[0],c=t[1],p=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"static/js/"+({about3:"about3",home2:"home2",main3:"main3"}[e]||e)+"."+{about3:"93281bf3",home2:"2731587b",main3:"89f2f75a","chunk-2d0b1637":"2391b2b7","chunk-2d0a47b9":"76cdcb7e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={main3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({about3:"about3",home2:"home2",main3:"main3"}[e]||e)+"."+{about3:"31d6cfe0",home2:"31d6cfe0",main3:"6ca45e50","chunk-2d0b1637":"31d6cfe0","chunk-2d0a47b9":"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var p=u[i],l=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){p=f[i],l=p.getAttribute("data-href");if(l===r||l===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),n(u)},s.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var p,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;p=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var s=setTimeout((function(){p({type:"timeout",target:l})}),12e4);l.onerror=l.onload=p,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/child/app1/",c.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp_app1"]=window["webpackJsonp_app1"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var f=0;f<p.length;f++)t(p[f]);var s=l;return u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"48d5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return w})),n.d(t,"mount",(function(){return j})),n.d(t,"unmount",(function(){return k}));n("6a61");var r=n("4a97"),o=(n("44a9"),n("3a99"),n("2c238"),n("6ae4"),n("a593")),a=n("8aaf"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"App"},p=c,l=(n("d12a"),n("5d22")),f=Object(l["a"])(p,u,i,!1,null,"35ae8da9",null),s=f.exports;n("bc4a");o["default"].use(a["a"]);var d=[{path:"/",component:function(){return n.e("main3").then(n.bind(null,"50f9"))},redirect:"/home",children:[{path:"/home",name:"home",component:function(){return n.e("home2").then(n.bind(null,"7abe"))}},{path:"/about",name:"about",component:function(){return n.e("about3").then(n.bind(null,"613f"))}}]}],h=d,m=(n("7371"),n("7cde"),n("9b212"),n("6255")),b=n.n(m);o["default"].use(b.a,{size:"small",zIndex:3e3}),o["default"].config.productionTip=!1;var v=null,g=null;function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container;v=new a["a"]({base:"/app1",mode:"history",routes:h}),g=new o["default"]({router:v,render:function(e){return e(s)}}).$mount(t?t.querySelector("#app"):"#app")}function w(){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue app bootstraped");case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] props from main framework",t),t.onGlobalStateChange((function(e,t){console.log(e,t)})),t.setGlobalState({name:"hong",age:10}),y(t);case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function k(){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:g.$destroy(),g.$el.innerHTML="",g=null,v=null;case 4:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__),window.__POWERED_BY_QIANKUN__||y()},7371:function(e,t,n){},"7cde":function(e,t,n){},"9b212":function(e,t,n){},d12a:function(e,t,n){"use strict";n("48d5")}})}));
//# sourceMappingURL=app.0046e0d6.js.map