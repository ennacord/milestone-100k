(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"356d":function(t,e,a){"use strict";a("58d3")},"46f7":function(t,e,a){t.exports=a.p+"img/mainphoto.efa54c8a.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("3f9b"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},i=[],o={data:function(){return{}}},c=o,l=a("2877"),u=a("6544"),d=a.n(u),p=a("7496"),v=a("f6c4"),f=Object(l["a"])(c,n,i,!1,null,null,null),m=f.exports;d()(f,{VApp:p["a"],VMain:v["a"]});var g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=a("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{staticClass:"bar text-center"},[t._m(1),r("div",{staticClass:"mainphoto"},[r("div",{staticClass:"mainphoto-box"},[r("v-img",{attrs:{"aspect-ratio":1,"lazy-src":"https://pbs.twimg.com/profile_images/1455676707751485451/2DqZ4Q-g_400x400.jpg",src:"https://pbs.twimg.com/profile_images/1455676707751485451/2DqZ4Q-g_400x400.jpg"}})],1)])]),r("div",{staticClass:"content"},[r("v-container",{staticClass:"content-grid pt-16"},[r("div",{staticClass:"ribbon ribbon-left"}),r("div",{staticClass:"ribbon ribbon-right"}),r("p",{staticClass:"text-center mb-2"},[r("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"red",elevation:"0",href:"https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-youtube")]),t._v(" YouTube ")],1),r("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"blue lighten-2",elevation:"0",href:"https://twitter.com/EnnaAlouette",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-twitter")]),t._v(" Twitter ")],1)],1),r("p",{staticClass:"text-center text-h6 mb-2"},[t._v(" Congratulations to Enna Alouette for reaching 100,000 subscribers on YouTube! ")]),r("v-row",{staticClass:"cards px-4 mb-8",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"text-center"},[r("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#canvas")}}},[r("v-avatar",{attrs:{left:"",size:"40"}},[r("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),r("span",{staticClass:"pl-4 text-h6"},[t._v("Canvas")])],1),r("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#messages")}}},[r("v-avatar",{attrs:{left:"",size:"40"}},[r("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),r("span",{staticClass:"pl-4 text-h6"},[t._v("Messages")])],1),r("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#artworks")}}},[r("v-avatar",{attrs:{left:"",size:"40"}},[r("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),r("span",{staticClass:"pl-4 text-h6"},[t._v("Artworks")])],1),r("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#games")}}},[r("v-avatar",{attrs:{left:"",size:"40"}},[r("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),r("span",{staticClass:"pl-4 text-h6"},[t._v("Games")])],1)],1)],1),r("v-row",{staticClass:"mb-8",attrs:{"no-gutters":"",id:"canvas"}},[r("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" CANVAS "),r("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),r("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"cards px-4"},[t._v(" canvas ")])],1),r("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"messages"}},[r("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" MESSAGES "),r("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"cards px-4"},[r("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".card"}},t._l(t.cards,(function(e,s){return r("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:"card-"+s,staticClass:"card"},[r("div",{staticClass:"binder"}),r("div",{staticClass:"wings"},[r("img",{attrs:{src:a("b66f")}})]),r("div",{staticClass:"card-name text-subtitle-2 pr-12 py-2"},[t._v(t._s(e.name))]),r("div",{staticClass:"card-text text-body-2 pr-4 pb-2"},[t._v(t._s(e.text))])])})),0)])],1),r("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"artworks"}},[r("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" ARTWORKS "),r("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"cards px-4"},[t._v(" artworks ")])],1),r("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"games"}},[r("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" GAMES "),r("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),r("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"cards px-4"},[t._v(" games ")])],1)],1)],1)])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{id:"header"}},[a("div",{staticClass:"headbg mx-auto"}),a("div",{staticClass:"wings mx-auto"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"photoframe"},[r("div",{staticClass:"photoframe-box"},[r("img",{attrs:{src:a("46f7")}})])])}],C=a("2909"),w=(a("d81d"),a("4de4"),a("d3b7"),a("ac1f"),a("1276"),a("5319"),a("a15b"),a("fb6a"),"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Suspendisse viverra, eros vel venenatis pharetra,\n  nisi neque porta enim, vitae tincidunt turpis metus a tellus.\n  Quisque dictum fringilla felis eu ornare.\n  Nulla non urna vitae neque pretium pharetra id eget elit.\n  Aenean blandit magna quis augue dignissim, eu tincidunt dolor iaculis.\n  Nunc scelerisque nibh et varius imperdiet.\n  Phasellus sagittis, nunc et pharetra viverra, libero purus sodales ex,\n  ut mattis enim lectus auctor felis. Donec ut lobortis leo.\n  ".split(/\s/g).filter((function(t){return!!t})).map((function(t){return t.replace(/[\W_]+/g,"")}))),_={data:function(){return{cards:[]}},methods:{randomName:function(){return w[Math.floor(Math.random()*w.length)]},randomMessage:function(){var t=10+Math.floor(Math.random()*(w.length-10)),e=Math.floor(Math.random()*(w.length-t));return w.slice(e,e+t).join(" ")},scrollTo:function(t){this.$vuetify.goTo(t,{duration:1e3,offset:20,easing:"easeInOutCubic"})}},mounted:function(){var t=this;this.cards=Object(C["a"])(new Array(50)).map((function(){return{name:t.randomName(),text:t.randomMessage()}}))}},k=_,y=(a("356d"),a("8212")),O=a("8336"),T=a("62ad"),j=a("a523"),M=a("132d"),A=a("adda"),S=a("0fd9"),P=Object(l["a"])(k,b,x,!1,null,"07840f42",null),V=P.exports;d()(P,{VAvatar:y["a"],VBtn:O["a"],VCol:T["a"],VContainer:j["a"],VIcon:M["a"],VImg:A["a"],VRow:S["a"]}),r["a"].use(h["a"]);var E=[{path:"/",name:"Home",component:V}],N=new h["a"]({routes:E}),q=N,$=a("2f62");r["a"].use($["a"]);var z=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=a("f309");r["a"].use(R["a"]);var B=new R["a"]({});r["a"].use(s["a"]),r["a"].config.productionTip=!1,new r["a"]({router:q,store:z,vuetify:B,render:function(t){return t(m)}}).$mount("#app")},"58d3":function(t,e,a){},b66f:function(t,e,a){t.exports=a.p+"img/wing.c736222f.png"},c2cd:function(t,e,a){t.exports=a.p+"img/gem.752378f7.png"}});
//# sourceMappingURL=app.30ca770a.js.map