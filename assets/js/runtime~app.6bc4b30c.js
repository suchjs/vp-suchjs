(()=>{"use strict";var e,t,r,a,c,o,n,d={},f={};function s(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return d[e].call(r.exports,r,r.exports,s),r.exports}s.m=d,e=[],s.O=(t,r,a,c)=>{if(!r){var o=1/0;for(i=0;i<e.length;i++){for(var[r,a,c]=e[i],n=!0,d=0;d<r.length;d++)(!1&c||o>=c)&&Object.keys(s.O).every((e=>s.O[e](r[d])))?r.splice(d--,1):(n=!1,c<o&&(o=c));if(n){e.splice(i--,1);var f=a();void 0!==f&&(t=f)}}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[r,a,c]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var c=Object.create(null);s.r(c);var o={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,s.d(c,o),c},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"assets/js/"+({0:"v-57ff310c",67:"v-5892c2b6",74:"v-771935b0",88:"v-3706649a",126:"v-468115f0",129:"v-5ab68522",163:"v-5e8823bc",181:"v-33e04cb4",183:"v-b96bffba",255:"v-0d9af0f8",272:"v-67b5eca6",327:"v-d32669e2",332:"v-2e3bde7e",338:"v-5eefcd6e",394:"v-7bc8da49",397:"v-37b4016d",398:"v-fdfab1a6",413:"v-321506ec",464:"v-d83770ce",494:"v-7bb559d8",495:"v-8daa1a0e",509:"v-58d5c15c",529:"v-61cc8b72",532:"v-207f0850",538:"v-3c97c896",539:"v-3c0cccac",564:"v-62e148f9",586:"v-4e617818",592:"v-09fc4136",625:"v-c0d929fe",661:"v-6ca815f4",750:"v-9237655e",835:"v-2d0a870d",837:"v-547eb2b0",850:"v-cc68e3c0",886:"v-50f90be5",888:"v-30573835"}[e]||e)+"."+{0:"810ea565",67:"2c5e4109",74:"f755c79e",88:"d5c0cbfa",126:"e8d0326d",129:"cf3bbf70",163:"e97de3b6",181:"ccd48674",183:"e6f9fb0a",194:"f80d692f",255:"5d63e4eb",272:"c8e91517",327:"ae26115a",332:"231744a4",338:"88560ccc",371:"68073250",383:"7f2657ec",394:"5327fb94",397:"b848bddf",398:"ed7d3c11",413:"01305891",464:"0e752ccb",494:"e21e8013",495:"b8462cbe",509:"52d8cb30",529:"f99e1be2",532:"44794f16",538:"5a855975",539:"dcfeae8b",564:"a918754c",586:"5b00bb1a",592:"c464e07c",616:"e1f64bd2",625:"4d48a869",661:"1e2b4ba0",750:"3a969214",782:"a67c3666",835:"5aaf3c82",837:"d41dc5eb",850:"dee2d101",886:"c159e901",888:"fd76513a"}[e]+".js",s.miniCssF=e=>460===e?"assets/css/styles.e31f8a88.css":"assets/css/"+e+".styles.a67c3666.css",s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},c="suchjs.com:",s.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var n,d;if(void 0!==r)for(var f=document.getElementsByTagName("script"),i=0;i<f.length;i++){var l=f[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+r){n=l;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",c+r),n.src=e),a[e]=[t];var v=(t,r)=>{n.onerror=n.onload=null,clearTimeout(b);var c=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),c&&c.forEach((e=>e(r))),t)return t(r)},b=setTimeout(v.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=v.bind(null,n.onerror),n.onload=v.bind(null,n.onload),d&&document.head.appendChild(n)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/vp-suchjs/",o=e=>new Promise(((t,r)=>{var a=s.miniCssF(e),c=s.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var c=(n=r[a]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(c===e||c===t))return n}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var n;if((c=(n=o[a]).getAttribute("data-href"))===e||c===t)return n}})(a,c))return t();((e,t,r,a)=>{var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onerror=c.onload=o=>{if(c.onerror=c.onload=null,"load"===o.type)r();else{var n=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=n,f.request=d,c.parentNode.removeChild(c),a(f)}},c.href=t,document.head.appendChild(c)})(e,c,t,r)})),n={523:0},s.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{782:1}[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={523:0,460:0};s.f.j=(t,r)=>{var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(460|523|782)$/.test(t))e[t]=0;else{var c=new Promise(((r,c)=>a=e[t]=[r,c]));r.push(a[2]=c);var o=s.p+s.u(t),n=new Error;s.l(o,(r=>{if(s.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var c=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",n.name="ChunkLoadError",n.type=c,n.request=o,a[1](n)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var a,c,[o,n,d]=r,f=0;for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(d)var i=d(s);for(t&&t(r);f<o.length;f++)c=o[f],s.o(e,c)&&e[c]&&e[c][0](),e[o[f]]=0;return s.O(i)},r=self.webpackChunksuchjs_com=self.webpackChunksuchjs_com||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();