(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4239:function(t,e,a){"use strict";a("ffa5")},"46f7":function(t,e,a){t.exports=a.p+"img/mainphoto.efa54c8a.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("3f9b"),n=(a("13ea"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)}),i=[],o={data:function(){return{}}},c=o,l=a("2877"),u=a("6544"),d=a.n(u),m=a("7496"),p=a("f6c4"),v=Object(l["a"])(c,n,i,!1,null,null,null),f=v.exports;d()(v,{VApp:m["a"],VMain:p["a"]});var g=a("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=a("8c4f"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bar text-center"},[t._m(1),s("div",{staticClass:"mainphoto"},[s("div",{staticClass:"mainphoto-box"},[s("v-img",{attrs:{"aspect-ratio":1,"lazy-src":"https://pbs.twimg.com/media/FBrWlNTVgAQcJt2?format=jpg&name=medium",src:"https://pbs.twimg.com/media/FBrWlNTVgAQcJt2?format=jpg&name=medium"}})],1)])]),s("div",{staticClass:"content"},[s("v-container",{staticClass:"content-grid pt-16"},[s("div",{staticClass:"ribbon ribbon-left"}),s("div",{staticClass:"ribbon ribbon-right"}),s("p",{staticClass:"text-center mb-2"},[s("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"red",elevation:"0",href:"https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow",target:"_blank"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-youtube")]),t._v(" YouTube ")],1),s("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"blue lighten-2",elevation:"0",href:"https://twitter.com/EnnaAlouette",target:"_blank"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-twitter")]),t._v(" Twitter ")],1)],1),s("p",{staticClass:"text-center text-h6 mb-2"},[t._v(" Congratulations to Enna Alouette for reaching 100,000 subscribers on YouTube! ")]),s("v-row",{staticClass:"cards px-4 mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"text-center"},[s("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#mural")}}},[s("v-avatar",{attrs:{left:"",size:"40"}},[s("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),s("span",{staticClass:"pl-4 text-h6"},[t._v("Mural")])],1),s("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#messages")}}},[s("v-avatar",{attrs:{left:"",size:"40"}},[s("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),s("span",{staticClass:"pl-4 text-h6"},[t._v("Messages")])],1),s("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#artworks")}}},[s("v-avatar",{attrs:{left:"",size:"40"}},[s("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),s("span",{staticClass:"pl-4 text-h6"},[t._v("Artworks")])],1),s("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#games")}}},[s("v-avatar",{attrs:{left:"",size:"40"}},[s("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),s("span",{staticClass:"pl-4 text-h6"},[t._v("Games")])],1)],1)],1),s("v-row",{staticClass:"mb-2",attrs:{"no-gutters":"",id:"mural"}},[s("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" MURAL "),s("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"mural",attrs:{sm:"10","offset-sm":"1"}},[s("div",{staticClass:"mural-container mx-auto"},[s("inner-image-zoom",{attrs:{src:t.MuralImg,zoomSrc:t.MuralImg}})],1)])],1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"messages"}},[s("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" MESSAGES "),s("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"cards px-4"},[s("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".card"}},t._l(t.cards,(function(e,r){return s("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:"card-"+r,staticClass:"card"},[s("div",{staticClass:"binder"}),s("div",{staticClass:"wings"},[s("img",{attrs:{src:a("b66f")}})]),s("div",{staticClass:"card-name text-subtitle-2 pr-12 py-2"},[t._v(t._s(e.name))]),s("div",{staticClass:"card-text text-body-2 pr-4 pb-2"},[t._v(t._s(e.text))])])})),0)])],1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"artworks"}},[s("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" ARTWORKS "),s("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"px-8"},t._l(t.tweets,(function(t,e){return s("v-col",{key:"tweet-"+e,attrs:{cols:"12",sm:"6",lg:"4",xl:"3"}},[s("v-card",{attrs:{elevation:"1",shaped:""}},[s("Tweet",{attrs:{id:t}})],1)],1)})),1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"games"}},[s("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" GAMES and OTHER CONTENT "),s("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"mt-8 mb-8 mx-14",attrs:{id:"games"}},[s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"text-h6 text-center amber lighten-4 deep-orange--text rounded-xl mb-2"},[t._v(" Flappy Enna ")]),s("div",{staticClass:"px-4"},[s("router-link",{attrs:{to:"/flappy-enna"}},[s("v-img",{attrs:{"lazy-src":t.MuralImg,src:t.MuralImg,to:"/flappy-enna"}})],1)],1)]),s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"text-h6 text-center amber lighten-4 deep-orange--text rounded-xl mb-2"},[t._v(" I Could Be Choir ")]),s("div",{staticClass:"px-4"},[s("v-img",{attrs:{"lazy-src":t.MuralImg,src:t.MuralImg}})],1)]),s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"text-h6 text-center amber lighten-4 deep-orange--text rounded-xl mb-2"},[t._v(" Enna Button ")]),s("div",{staticClass:"px-4"},[s("v-img",{attrs:{"lazy-src":t.MuralImg,src:t.MuralImg}})],1)]),s("v-col",{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"text-h6 text-center amber lighten-4 deep-orange--text rounded-xl mb-2"},[t._v(" Video Tribute ")]),s("div",{staticClass:"px-4"},[s("v-img",{attrs:{"lazy-src":t.MuralImg,src:t.MuralImg}})],1)])],1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"games"}},[s("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" CREDITS "),s("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"cards px-16"},[t._v(" credits ")])],1)],1)],1)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{id:"header"}},[a("div",{staticClass:"headbg mx-auto"}),a("div",{staticClass:"wings mx-auto"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"photoframe"},[s("div",{staticClass:"photoframe-box"},[s("img",{attrs:{src:a("46f7")}})])])}],C=a("2909"),w=(a("d81d"),a("4de4"),a("d3b7"),a("ac1f"),a("1276"),a("5319"),a("a15b"),a("fb6a"),a("01ff")),_=a.n(w),y=a("7397"),k=a("7ca7"),T=a.n(k),M="\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Suspendisse viverra, eros vel venenatis pharetra,\n  nisi neque porta enim, vitae tincidunt turpis metus a tellus.\n  Quisque dictum fringilla felis eu ornare.\n  Nulla non urna vitae neque pretium pharetra id eget elit.\n  Aenean blandit magna quis augue dignissim, eu tincidunt dolor iaculis.\n  Nunc scelerisque nibh et varius imperdiet.\n  Phasellus sagittis, nunc et pharetra viverra, libero purus sodales ex,\n  ut mattis enim lectus auctor felis. Donec ut lobortis leo.\n  ".split(/\s/g).filter((function(t){return!!t})).map((function(t){return t.replace(/[\W_]+/g,"")})),O={data:function(){return{cards:[],tweets:["1458385975046852612","1458386426802802690","1458410352006209543","1458381229435199489","1458075316350382086","1458102086432813056","1458061145496035332","1458431187030999044"],MuralImg:T.a}},methods:{randomName:function(){return M[Math.floor(Math.random()*M.length)]},randomMessage:function(){var t=10+Math.floor(Math.random()*(M.length-10)),e=Math.floor(Math.random()*(M.length-t));return M.slice(e,e+t).join(" ")},scrollTo:function(t){this.$vuetify.goTo(t,{duration:1e3,offset:20,easing:"easeInOutCubic"})}},mounted:function(){var t=this;this.cards=Object(C["a"])(new Array(50)).map((function(){return{name:t.randomName(),text:t.randomMessage()}}))},components:{"inner-image-zoom":_.a,Tweet:y["Tweet"]}},j=O,E=(a("4239"),a("8212")),A=a("8336"),V=a("b0af"),I=a("62ad"),N=a("a523"),S=a("132d"),z=a("adda"),P=a("0fd9"),B=Object(l["a"])(j,x,b,!1,null,"6a681ee4",null),$=B.exports;d()(B,{VAvatar:E["a"],VBtn:A["a"],VCard:V["a"],VCol:I["a"],VContainer:N["a"],VIcon:S["a"],VImg:z["a"],VRow:P["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"bar text-center"},[t._m(1),a("div",{staticClass:"mainphoto"},[a("div",{staticClass:"mainphoto-box"},[a("v-img",{attrs:{"aspect-ratio":1,"lazy-src":"https://pbs.twimg.com/media/FBrWlNTVgAQcJt2?format=jpg&name=medium",src:"https://pbs.twimg.com/media/FBrWlNTVgAQcJt2?format=jpg&name=medium"}})],1)])]),a("div",{staticClass:"content"},[a("v-container",{staticClass:"content-grid pt-16"},[t._v(" 1 ")])],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{id:"header"}},[a("div",{staticClass:"headbg mx-auto"}),a("div",{staticClass:"wings mx-auto"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"photoframe"},[s("div",{staticClass:"photoframe-box"},[s("img",{attrs:{src:a("46f7")}})])])}],R={data:function(){return{}},methods:{},mounted:function(){}},W=R,J=(a("e502"),Object(l["a"])(W,F,q,!1,null,"2372ed14",null)),Q=J.exports;d()(J,{VContainer:N["a"],VImg:z["a"]}),s["default"].use(h["a"]);var L=[{path:"/",name:"Home",component:$},{path:"/flappy-enna",name:"Flappy Enna",component:Q}],G=new h["a"]({routes:L}),D=G,H=a("2f62");s["default"].use(H["a"]);var K=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=a("f309");s["default"].use(U["a"]);var Y=new U["a"]({});s["default"].use(r["a"]),s["default"].config.productionTip=!1,new s["default"]({router:D,store:K,vuetify:Y,render:function(t){return t(f)}}).$mount("#app")},"7ca7":function(t,e,a){t.exports=a.p+"img/sample1.a496fda5.png"},afe5:function(t,e,a){},b66f:function(t,e,a){t.exports=a.p+"img/wing.c736222f.png"},c2cd:function(t,e,a){t.exports=a.p+"img/gem.752378f7.png"},e502:function(t,e,a){"use strict";a("afe5")},ffa5:function(t,e,a){}});
//# sourceMappingURL=app.069eb317.js.map