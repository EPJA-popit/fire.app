var fireApp;(()=>{var e={161:(e,t,n)=>{!function(){function e(e,t){return(t||"")+" (SystemJS Error#"+e+" https://git.io/JvFET#"+e+")"}!function(t){function n(){throw Error(e(5,"AMD require not supported."))}var r=["require","exports","module"];t.define=function(t,i,o){var s,u,a="string"==typeof t,c=a?t:null,f=a?i:t,l=a?o:i;if(Array.isArray(f))s=f,u=l;else if("object"==typeof f)s=[],u=function(){return f};else{if("function"!=typeof f)throw Error(e(9,"Invalid call to AMD define()"));s=r,u=f}var p=function(e,t){for(var r={},i={exports:r},o=[],s=[],u=0,a=0;a<e.length;a++){var c=e[a],f=s.length;"require"===c?(o[a]=n,u++):"module"===c?(o[a]=i,u++):"exports"===c?(o[a]=r,u++):p(a),u&&(e[f]=c)}u&&(e.length-=u);var l=t;return[e,function(e){return e({default:r,__useDefault:!0}),{setters:s,execute:function(){var t=l.apply(r,o);void 0!==t&&(i.exports=t),e(i.exports),e("default",i.exports)}}}];function p(e){s.push((function(t){o[e]=t.__useDefault?t.default:t}))}}(s,u);a?(System.registerRegistry?(System.registerRegistry[c]=p,System.register(c,p[0],p[1])):console.warn(e("W6","Include named-register.js for full named define support")),System.register(p[0],p[1])):System.register(p[0],p[1])},t.define.amd={}}("undefined"!=typeof self?self:n.g)}()},634:(e,t,n)=>{!function(e){var t,n=e.System.constructor.prototype,r=n.register;n.register=function(e,n,i){t="string"==typeof e?i:n,r.apply(this,arguments)};var i=n.getRegister;n.getRegister=function(){var e=i.call(this);if(!e||e[1]===t||0===e[1].length)return e;var n=e[1];return e[1]=function(e,t){var r,i=!1,o=n.call(this,(function(t,n){"object"==typeof t&&t&&t.__useDefault?(r=t.default,i=!0):"default"===t?r=n:"__useDefault"===t&&(i=!0),e(t,n)}),t),s=o.execute;return s&&(o.execute=function(){if(s.call(this),i)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&"default"!==t&&e(t,r[t])}),o},e}}("undefined"!=typeof self?self:n.g)},15:(e,t,n)=>{!function(e){var t=e.System;u(t);var n,r,i=t.constructor.prototype,o=t.constructor,s=function(){o.call(this),u(this)};function u(e){e.registerRegistry=Object.create(null),e.namedRegisterAliases=Object.create(null)}s.prototype=i,t.constructor=s;var a=i.register;i.register=function(e,t,i){if("string"!=typeof e)return a.apply(this,arguments);var o=[t,i];return this.registerRegistry[e]=o,n||(n=o,r=e),setTimeout((function(){n=null,r=null})),a.apply(this,[t,i])};var c=i.resolve;i.resolve=function(e,t){try{return c.call(this,e,t)}catch(t){if(e in this.registerRegistry)return this.namedRegisterAliases[e]||e;throw t}};var f=i.instantiate;i.instantiate=function(e,t){var n=this.registerRegistry[e];return n?(this.registerRegistry[e]=null,n):f.call(this,e,t)};var l=i.getRegister;i.getRegister=function(e){var t=l.call(this,e);r&&e&&(this.namedRegisterAliases[r]=e);var i=n||t;return n=null,r=null,i}}("undefined"!=typeof self?self:n.g)},365:(e,t,n)=>{var r,i;r=("undefined"!=typeof self?self:n.g).System.constructor.prototype,i=r.instantiate,r.instantiate=function(e,t){if(".wasm"===e.slice(-5))return i.call(this,e,t);var n=this;return fetch(e,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw Error((7,("Fetch error: "+e.status+" "+e.statusText+(t?" loading from "+t:"")||"")+" (SystemJS Error#7 https://git.io/JvFET#7)"));return e.text()})).then((function(t){return n.transform.call(this,e,t)})).then((function(t){return(0,eval)(t+"\n//# sourceURL="+e),n.getRegister(e)}))},r.transform=function(e,t){return t}},534:(e,t,n)=>{!function(){function e(e,t){return(t||"")+" (SystemJS Error#"+e+" https://git.io/JvFET#"+e+")"}var t,r="undefined"!=typeof Symbol,i="undefined"!=typeof self,o="undefined"!=typeof document,s=i?self:n.g;if(o){var u=document.querySelector("base[href]");u&&(t=u.href)}if(!t&&"undefined"!=typeof location){var a=(t=location.href.split("#")[0].split("?")[0]).lastIndexOf("/");-1!==a&&(t=t.slice(0,a+1))}var c=/\\/g;function f(e,t){if(-1!==e.indexOf("\\")&&(e=e.replace(c,"/")),"/"===e[0]&&"/"===e[1])return t.slice(0,t.indexOf(":")+1)+e;if("."===e[0]&&("/"===e[1]||"."===e[1]&&("/"===e[2]||2===e.length&&(e+="/"))||1===e.length&&(e+="/"))||"/"===e[0]){var n,r=t.slice(0,t.indexOf(":")+1);if(n="/"===t[r.length+1]?"file:"!==r?(n=t.slice(r.length+2)).slice(n.indexOf("/")+1):t.slice(8):t.slice(r.length+("/"===t[r.length])),"/"===e[0])return t.slice(0,t.length-n.length-1)+e;for(var i=n.slice(0,n.lastIndexOf("/")+1)+e,o=[],s=-1,u=0;u<i.length;u++)-1!==s?"/"===i[u]&&(o.push(i.slice(s,u+1)),s=-1):"."===i[u]?"."!==i[u+1]||"/"!==i[u+2]&&u+2!==i.length?"/"===i[u+1]||u+1===i.length?u+=1:s=u:(o.pop(),u+=2):s=u;return-1!==s&&o.push(i.slice(s)),t.slice(0,t.length-n.length)+o.join("")}}function l(e,t){return f(e,t)||(-1!==e.indexOf(":")?e:f("./"+e,t))}function p(e,t,n,r,i){for(var o in e){var s=f(o,n)||o,u=e[o];if("string"==typeof u){var a=g(r,f(u,n)||u,i);a?t[s]=a:v("W1",o,u,"bare specifier did not resolve")}}}function h(e,t){if(t[e])return e;var n=e.length;do{var r=e.slice(0,n+1);if(r in t)return r}while(-1!==(n=e.lastIndexOf("/",n-1)))}function d(e,t){var n=h(e,t);if(n){var r=t[n];if(null===r)return;if(!(e.length>n.length&&"/"!==r[r.length-1]))return r+e.slice(n.length);v("W2",n,r,"should have a trailing '/'")}}function v(t,n,r,i){console.warn(e(t,"Package target "+i+", resolving target '"+r+"' for "+n))}function g(e,t,n){for(var r=e.scopes,i=n&&h(n,r);i;){var o=d(t,r[i]);if(o)return o;i=h(i.slice(0,i.lastIndexOf("/")),r)}return d(t,e.imports)||-1!==t.indexOf(":")&&t}var y=r&&Symbol.toStringTag,m=r?Symbol():"@";function w(){this[m]={}}var b,S=w.prototype;function x(e){return e.id}function E(e,t,n,r){if(e.onload(n,t.id,t.d&&t.d.map(x),!!r),n)throw n}function O(t,n,r){var i=t[m][n];if(i)return i;var o=[],s=Object.create(null);y&&Object.defineProperty(s,y,{value:"Module"});var u=Promise.resolve().then((function(){return t.instantiate(n,r)})).then((function(r){if(!r)throw Error(e(2,"Module "+n+" did not instantiate"));var u=r[1]((function(e,t){i.h=!0;var n=!1;if("string"==typeof e)e in s&&s[e]===t||(s[e]=t,n=!0);else{for(var r in e)t=e[r],r in s&&s[r]===t||(s[r]=t,n=!0);e&&e.__esModule&&(s.__esModule=e.__esModule)}if(n)for(var u=0;u<o.length;u++){var a=o[u];a&&a(s)}return t}),2===r[1].length?{import:function(e){return t.import(e,n)},meta:t.createContext(n)}:void 0);return i.e=u.execute||function(){},[r[0],u.setters||[]]}),(function(e){throw i.e=null,i.er=e,E(t,i,e,!0),e})),a=u.then((function(e){return Promise.all(e[0].map((function(r,i){var o=e[1][i];return Promise.resolve(t.resolve(r,n)).then((function(e){var r=O(t,e,n);return Promise.resolve(r.I).then((function(){return o&&(r.i.push(o),!r.h&&r.I||o(r.n)),r}))}))}))).then((function(e){i.d=e}))}));return i=t[m][n]={id:n,i:o,n:s,I:u,L:a,h:!1,d:void 0,e:void 0,er:void 0,E:void 0,C:void 0,p:void 0}}function j(e,t,n,r){if(!r[t.id])return r[t.id]=!0,Promise.resolve(t.L).then((function(){return t.p&&null!==t.p.e||(t.p=n),Promise.all(t.d.map((function(t){return j(e,t,n,r)})))})).catch((function(n){if(t.er)throw n;throw t.e=null,E(e,t,n,!1),n}))}S.import=function(e,t){var n=this;return Promise.resolve(n.prepareImport()).then((function(){return n.resolve(e,t)})).then((function(e){var t=O(n,e);return t.C||function(e,t){return t.C=j(e,t,t,{}).then((function(){return P(e,t,{})})).then((function(){return t.n}))}(n,t)}))},S.createContext=function(e){var t=this;return{url:e,resolve:function(n,r){return Promise.resolve(t.resolve(n,r||e))}}},S.onload=function(){},S.register=function(e,t){b=[e,t]},S.getRegister=function(){var e=b;return b=void 0,e};var R=Object.freeze(Object.create(null));function P(e,t,n){if(!n[t.id]){if(n[t.id]=!0,!t.e){if(t.er)throw t.er;return t.E?t.E:void 0}var r;return t.d.forEach((function(i){try{var o=P(e,i,n);o&&(r=r||[]).push(o)}catch(n){throw t.e=null,t.er=n,E(e,t,n,!1),n}})),r?Promise.all(r).then(i):i()}function i(){try{var n=t.e.call(R);if(n)return n=n.then((function(){t.C=t.n,t.E=null,E(e,t,null,!0)}),(function(n){throw t.er=n,t.E=null,E(e,t,n,!0),n})),t.E=n;t.C=t.n,t.L=t.I=void 0}catch(e){throw t.er=e,e}finally{t.e=null,E(e,t,t.er,!0)}}}s.System=new w;var _,A,M=Promise.resolve(),T={imports:{},scopes:{},depcache:{},integrity:{}},I=o;function L(){[].forEach.call(document.querySelectorAll("script"),(function(n){if(!n.sp)if("systemjs-module"===n.type){if(n.sp=!0,!n.src)return;System.import("import:"===n.src.slice(0,7)?n.src.slice(7):l(n.src,t)).catch((function(e){if(e.message.indexOf("https://git.io/JvFET#3")>-1){var t=document.createEvent("Event");t.initEvent("error",!1,!1),n.dispatchEvent(t)}return Promise.reject(e)}))}else if("systemjs-importmap"===n.type){n.sp=!0;var r=n.src?fetch(n.src,{integrity:n.integrity}).then((function(e){if(!e.ok)throw Error("Invalid status code: "+e.status);return e.text()})).catch((function(t){return t.message=e("W4","Error fetching systemjs-import map "+n.src)+"\n"+t.message,console.warn(t),"function"==typeof n.onerror&&n.onerror(),"{}"})):n.innerHTML;M=M.then((function(){return r})).then((function(r){!function(t,n,r){var i={};try{i=JSON.parse(n)}catch(t){console.warn(Error(e("W5","systemjs-importmap contains invalid JSON")+"\n\n"+n+"\n"))}!function(e,t,n){var r;for(r in e.imports&&p(e.imports,n.imports,t,n,null),e.scopes||{}){var i=l(r,t);p(e.scopes[r],n.scopes[i]||(n.scopes[i]={}),t,n,i)}for(r in e.depcache||{})n.depcache[l(r,t)]=e.depcache[r];for(r in e.integrity||{})n.integrity[l(r,t)]=e.integrity[r]}(i,r,t)}(T,r,n.src||t)}))}}))}if(S.prepareImport=function(e){return(I||e)&&(L(),I=!1),M},o&&(L(),window.addEventListener("DOMContentLoaded",L)),o){window.addEventListener("error",(function(e){C=e.filename,W=e.error}));var J=location.origin}S.createScript=function(e){var t=document.createElement("script");t.async=!0,e.indexOf(J+"/")&&(t.crossOrigin="anonymous");var n=T.integrity[e];return n&&(t.integrity=n),t.src=e,t};var C,W,k={},N=S.register;S.register=function(e,t){if(o&&"loading"===document.readyState&&"string"!=typeof e){var n=document.querySelectorAll("script[src]"),r=n[n.length-1];if(r){r.src,_=e;var i=this;A=setTimeout((function(){k[r.src]=[e,t],i.import(r.src)}))}}else _=void 0;return N.call(this,e,t)},S.instantiate=function(t,n){var r=k[t];if(r)return delete k[t],r;var i=this;return new Promise((function(r,o){var s=S.createScript(t);s.addEventListener("error",(function(){o(Error(e(3,"Error loading "+t+(n?" from "+n:""))))})),s.addEventListener("load",(function(){if(document.head.removeChild(s),C===t)o(W);else{var e=i.getRegister(t);e&&e[0]===_&&clearTimeout(A),r(e)}})),document.head.appendChild(s)}))},S.shouldFetch=function(){return!1},"undefined"!=typeof fetch&&(S.fetch=fetch);var F=S.instantiate,D=/^(text|application)\/(x-)?javascript(;|$)/;S.instantiate=function(t,n){var r=this;return this.shouldFetch(t)?this.fetch(t,{credentials:"same-origin",integrity:T.integrity[t]}).then((function(i){if(!i.ok)throw Error(e(7,i.status+" "+i.statusText+", loading "+t+(n?" from "+n:"")));var o=i.headers.get("content-type");if(!o||!D.test(o))throw Error(e(4,'Unknown Content-Type "'+o+'", loading '+t+(n?" from "+n:"")));return i.text().then((function(e){return e.indexOf("//# sourceURL=")<0&&(e+="\n//# sourceURL="+t),(0,eval)(e),r.getRegister(t)}))})):F.apply(this,arguments)},S.resolve=function(n,r){return g(T,f(n,r=r||t)||n,r)||function(t,n){throw Error(e(8,"Unable to resolve bare specifier '"+t+(n?"' from "+n:"'")))}(n,r)};var U=S.instantiate;S.instantiate=function(e,t){var n=T.depcache[e];if(n)for(var r=0;r<n.length;r++)O(this,this.resolve(n[r],e),e);return U.call(this,e,t)},i&&"function"==typeof importScripts&&(S.instantiate=function(e){var t=this;return Promise.resolve().then((function(){return importScripts(e),t.getRegister(e)}))}),function(e){var t,n,r,i=e.System.constructor.prototype,o=i.import;i.import=function(i,s){return function(){for(var i in t=n=void 0,e)c(i)||(t?n||(n=i):t=i,r=i)}(),o.call(this,i,s)};var s=[[],function(){return{}}],u=i.getRegister;i.getRegister=function(){var i=u.call(this);if(i)return i;var o,a=function(i){var o,s,u=0;for(var a in e)if(!c(a)){if(0===u&&a!==t||1===u&&a!==n)return a;o?(r=a,s=i&&s||a):o=a===r,u++}return s}(this.firstGlobalProp);if(!a)return s;try{o=e[a]}catch(e){return s}return[[],function(e){return{execute:function(){e(o),e({default:o,__useDefault:!0})}}}]};var a="undefined"!=typeof navigator&&-1!==navigator.userAgent.indexOf("Trident");function c(t){return!e.hasOwnProperty(t)||!isNaN(t)&&t<e.length||a&&e[t]&&"undefined"!=typeof window&&e[t].parent===window}}("undefined"!=typeof self?self:n.g),function(e){var t=e.System.constructor.prototype,n=/^[^#?]+\.(css|html|json|wasm)([?#].*)?$/;t.shouldFetch=function(e){return n.test(e)};var r=/^application\/json(;|$)/,i=/^text\/css(;|$)/,o=/^application\/wasm(;|$)/,s=t.fetch;t.fetch=function(t,n){return s(t,n).then((function(n){if(!n.ok)return n;var s=n.headers.get("content-type");return r.test(s)?n.json().then((function(e){return new Response(new Blob(['System.register([],function(e){return{execute:function(){e("default",'+JSON.stringify(e)+")}}})"],{type:"application/javascript"}))})):i.test(s)?n.text().then((function(e){return e=e.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,(function(e,n,r,i){return"url("+n+l(r||i,t)+n+")"})),new Response(new Blob(["System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync("+JSON.stringify(e)+');e("default",s)}}})'],{type:"application/javascript"}))})):o.test(s)?(WebAssembly.compileStreaming?WebAssembly.compileStreaming(n):n.arrayBuffer().then(WebAssembly.compile)).then((function(n){e.System.wasmModules||(e.System.wasmModules=Object.create(null)),e.System.wasmModules[t]=n;var r=[],i=[];return WebAssembly.Module.imports&&WebAssembly.Module.imports(n).forEach((function(e){var t=JSON.stringify(e.module);-1===r.indexOf(t)&&(r.push(t),i.push("function(m){i["+t+"]=m}"))})),new Response(new Blob(["System.register(["+r.join(",")+"],function(e){var i={};return{setters:["+i.join(",")+"],execute:function(){return WebAssembly.instantiate(System.wasmModules["+JSON.stringify(t)+"],i).then(function(m){e(m.exports)})}}})"],{type:"application/javascript"}))})):n}))}}("undefined"!=typeof self?self:n.g);var q="undefined"!=typeof Symbol&&Symbol.toStringTag;S.get=function(e){var t=this[m][e];if(t&&null===t.e&&!t.E)return t.er?null:t.n},S.set=function(t,n){try{new URL(t)}catch(n){console.warn(Error(e("W3",'"'+t+'" is not a valid URL to set in the module registry')))}var r;q&&"Module"===n[q]?r=n:(r=Object.assign(Object.create(null),n),q&&Object.defineProperty(r,q,{value:"Module"}));var i=Promise.resolve(r),o=this[m][t]||(this[m][t]={id:t,i:[],h:!1,d:[],e:null,er:void 0,E:void 0});return!o.e&&!o.E&&(Object.assign(o,{n:r,I:void 0,L:void 0,C:i}),r)},S.has=function(e){return!!this[m][e]},S.delete=function(e){var t=this[m],n=t[e];if(!n||n.p&&null!==n.p.e||n.E)return!1;var r=n.i;return n.d&&n.d.forEach((function(e){var t=e.i.indexOf(n);-1!==t&&e.i.splice(t,1)})),delete t[e],function(){var n=t[e];if(!n||!r||null!==n.e||n.E)return!1;r.forEach((function(e){n.i.push(e),e(n.n)})),r=null}};var $="undefined"!=typeof Symbol&&Symbol.iterator;S.entries=function(){var e,t,n=this,r=Object.keys(n[m]),i=0,o={next:function(){for(;void 0!==(t=r[i++])&&void 0===(e=n.get(t)););return{done:void 0===t,value:void 0!==t&&[t,e]}}};return o[$]=function(){return this},o}}()},519:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function u(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),n(534),n(161),n(15),n(634),n(365),t.default=function(e){var t=e.apps;return e.navigation,e.config,r(void 0,void 0,void 0,(function(){var e,n,r,o,s;return i(this,(function(i){switch(i.label){case 0:return(e=location.pathname.replace("/",""))in t||console.log("WARNING: app "+e+" is not provided in apps: "+JSON.stringify(t)),n="/static/"+e+"/"+t[e].version+"/index.js",console.log("in fire.app, appPath=",n),[4,System.import(n)];case 1:return r=i.sent(),o=r.default,s=r.mount,r.unmount,console.log("in fire.app, component, mount=",o,s),s(o.default),[2]}}))}))}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var r=n(519);fireApp=r.default})();