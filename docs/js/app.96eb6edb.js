(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"047b":function(t,e,a){t.exports=a.p+"media/08.5c1e58a1.mp3"},1319:function(t,e,a){t.exports=a.p+"media/f03.2592873d.mp4"},"15c6":function(t,e,a){t.exports=a.p+"media/f06.d25a25f3.mp4"},1694:function(t,e,a){t.exports=a.p+"img/choir.cc5dd763.png"},"1cf5":function(t,e,a){t.exports=a.p+"media/f01.d30fe8e8.mp4"},2484:function(t,e,a){t.exports=a.p+"img/thumb-flappy.3c6493d6.png"},"2fc6":function(t,e,a){t.exports=a.p+"media/f05.f51513c3.mp4"},3843:function(t,e,a){},"4e4d":function(t,e,a){t.exports=a.p+"media/03.52e055c1.mp3"},"4eff":function(t){t.exports=JSON.parse('{"frames":{"random":{"frame":{"x":1,"y":1,"w":139,"h":44},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":139,"h":44},"sourceSize":{"w":139,"h":44}},"auto":{"frame":{"x":142,"y":1,"w":139,"h":44},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":139,"h":44},"sourceSize":{"w":139,"h":44}},"manual":{"frame":{"x":283,"y":1,"w":139,"h":44},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":139,"h":44},"sourceSize":{"w":139,"h":44}},"background":{"frame":{"x":1,"y":47,"w":854,"h":480},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":854,"h":480},"sourceSize":{"w":854,"h":480}}},"meta":{"image":"choir.png","format":"RGBA8888","size":{"w":856,"h":528},"scale":"1"}}')},5313:function(t,e,a){"use strict";a("3843")},"56a2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("3f9b"),r=(a("13ea"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"header",attrs:{id:"header"}},[n("div",{staticClass:"headbg mx-auto"}),n("div",{staticClass:"wings mx-auto"})]),n("div",{staticClass:"bar text-center"},[n("div",{staticClass:"mainphoto"},[n("div",{staticClass:"mainphoto-box"},[n("v-img",{attrs:{"aspect-ratio":1,"lazy-src":a("cf05"),src:a("cf05")}})],1)])]),n("div",{staticClass:"content"},[n("router-view")],1)])}),o=[],i={data:function(){return{}}},c=i,l=(a("d65f"),a("2877")),u=a("6544"),d=a.n(u),p=a("7496"),f=a("adda"),m=Object(l["a"])(c,r,o,!1,null,"ee0000a4",null),h=m.exports;d()(m,{VApp:p["a"],VImg:f["a"]});var v=a("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var g=a("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("v-container",{staticClass:"content-grid pt-8"},[n("div",{staticClass:"ribbon ribbon-left"}),n("div",{staticClass:"ribbon ribbon-right"}),n("p",{staticClass:"text-center text-h5 mt-2 mb-4"},[t._v(" Congratulations to "),n("a",{staticClass:"font-weight-bold blue--text text-decoration-none",attrs:{href:"https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow",target:"_blank"}},[t._v(" Enna Alouette")]),t._v(" for reaching 100,000 subscribers on YouTube! ")]),n("v-row",{staticClass:"cards px-4 mb-8",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-center"},[n("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#mural")}}},[n("v-avatar",{attrs:{left:"",size:"40"}},[n("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),n("span",{staticClass:"pl-4 text-h6"},[t._v("Mural")])],1),n("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#messages")}}},[n("v-avatar",{attrs:{left:"",size:"40"}},[n("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),n("span",{staticClass:"pl-4 text-h6"},[t._v("Messages")])],1),n("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#games")}}},[n("v-avatar",{attrs:{left:"",size:"40"}},[n("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),n("span",{staticClass:"pl-4 text-h6"},[t._v("Games")])],1),n("v-btn",{staticClass:"purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#artworks")}}},[n("v-avatar",{attrs:{left:"",size:"40"}},[n("img",{staticClass:"navimg",attrs:{src:a("c2cd")}})]),n("span",{staticClass:"pl-4 text-h6"},[t._v("Artworks")])],1)],1)],1),n("v-row",{staticClass:"cards px-16 mb-4",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-center"},[n("v-alert",{staticClass:"text-h6 px-16",attrs:{border:"bottom",color:"pink darken-1",dark:""}},[n("p",[t._v(" It's not too late! You can still celebrate Enna's milestone with everyone!"),n("br"),n("a",{staticClass:"text-h5 lime--text lighten-5 text-decoration-none",attrs:{href:"https://forms.gle/aVxT2r8NxZMBdmFr6",target:"_blank"}},[t._v(" Add a message ")]),t._v(" and "),n("a",{staticClass:"text-h5 lime--text lighten-5 text-decoration-none",attrs:{href:"https://aggie.io/9uoq9qnmty",target:"_blank"}},[t._v(" Doodle on the Wall ")]),t._v("! ")]),n("p",[t._v(" To those who are drawing her a fanart as congratulations on 100k, please submit a message, then specify your twitter handle to get whitelisted. You'll also need to add the hashtag #enna100k to be included in the gallery section. ")])])],1)],1),n("v-row",{staticClass:"mb-2",attrs:{"no-gutters":"",id:"mural"}},[n("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" WALL OF THE SONGBIRD "),n("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),n("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mural",attrs:{sm:"10","offset-sm":"1"}},[n("div",{staticClass:"mural-container mx-auto"},[n("inner-image-zoom",{attrs:{src:t.MuralImg,zoomSrc:t.MuralImg}})],1)])],1),n("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"messages"}},[n("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" MESSAGES FOR THE SONGBIRD "),n("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"cards px-4"},[n("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".card"}},t._l(t.cards,(function(e,s){return n("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:"card-"+s,staticClass:"card"},[n("div",{staticClass:"binder"}),n("div",{staticClass:"wings"},[n("img",{attrs:{src:a("b66f")}})]),n("div",{staticClass:"card-name text-h6 pr-12 py-2"},[t._v(t._s(e.name))]),n("div",{staticClass:"card-text text-h6 pr-4 pb-2"},[t._v(t._s(e.message))])])})),0)])],1),n("v-row",{staticClass:"mt-8 mb-4",attrs:{"no-gutters":"",id:"games"}},[n("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" GAMES and OTHER CONTENT "),n("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),n("v-row",{staticClass:"mb-8 mx-14",attrs:{id:"games"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/flappy-enna",target:"_blank"}},[n("div",{staticClass:"text-h6 text-center deep-purple lighten-2 white--text rounded-xl mb-2"},[t._v(" Flight of this Songbird ")]),n("div",{staticClass:"px-4"},[n("v-img",{attrs:{"lazy-src":t.ThumbFlappy,src:t.ThumbFlappy,to:"/flappy-enna"}})],1)])],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("router-link",{staticClass:"text-decoration-none",attrs:{to:"/choir",target:"_blank"}},[n("div",{staticClass:"text-h6 text-center deep-purple lighten-2 white--text rounded-xl mb-2"},[t._v(" Choir of Heaven ")]),n("div",{staticClass:"px-4"},[n("v-img",{attrs:{"lazy-src":t.ThumbChoir,src:t.ThumbChoir}})],1)])],1)],1),n("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"artworks"}},[n("v-col",{staticClass:"text-h6 text-center px-2 deep-purple lighten-4 mx-8 rounded-xl"},[t._v(" ARTWORKS "),n("v-btn",{staticClass:"float-right purple--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),n("v-row",{staticClass:"px-8"},t._l(t.tweets,(function(t,e){return n("v-col",{key:"tweet-"+e,attrs:{cols:"12",sm:"6",lg:"4",xl:"3"}},[n("v-card",{attrs:{elevation:"1",shaped:""}},[n("Tweet",{attrs:{id:t}})],1)],1)})),1)],1)],1)},b=[],C=a("1da1"),w=(a("96cf"),a("4e82"),a("07ac"),a("d81d"),a("bc3a")),y=a.n(w),_=a("01ff"),k=a.n(_),T=a("7397"),O=a("c1f0"),S=a.n(O),A=a("2484"),E=a.n(A),j=a("e914"),z=a.n(j),I={data:function(){return{source:"https://vtubertools.sfo3.digitaloceanspaces.com/tribute/enna100k.json",cards:[],tweets:[],MuralImg:S.a,ThumbFlappy:E.a,ThumbChoir:z.a}},methods:{scrollTo:function(t){this.$vuetify.goTo(t,{duration:1e3,offset:20,easing:"easeInOutCubic"})}},mounted:function(){var t=this;Object(C["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(t.source).catch((function(){return null}));case 2:a=e.sent,n=a&&a.data?a.data:{},t.cards=Object.values(n.messages).sort((function(t,e){return t.time-e.time})),t.tweets=Object.values(n.tweets).map((function(t){return String(t.id)}));case 6:case"end":return e.stop()}}),e)})))()},components:{"inner-image-zoom":k.a,Tweet:T["Tweet"]}},M=I,V=(a("9cfc"),a("0798")),F=a("8212"),P=a("8336"),N=a("b0af"),R=a("62ad"),$=a("a523"),B=a("0fd9"),G=Object(l["a"])(M,x,b,!1,null,"304adee2",null),H=G.exports;d()(G,{VAlert:V["a"],VAvatar:F["a"],VBtn:P["a"],VCard:N["a"],VCol:R["a"],VContainer:$["a"],VImg:f["a"],VRow:B["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("v-container",{staticClass:"content-grid pt-2"},[a("p",{staticClass:"text-h4 text-center mt-8 mb-4",attrs:{id:"game-title"}},[t._v("Flight of this Songbird")]),a("iframe",{attrs:{src:"https://itch.io/embed-upload/4978587?color=858ED1",allowfullscreen:"",width:"100%",height:"750",frameborder:"0"}},[a("a",{attrs:{href:"https://wikidude.itch.io/birb2"}},[t._v("Play Flight of this Songbird on itch.io")])])])],1)},L=[],W={mounted:function(){var t=this;this.$nextTick((function(){t.$vuetify.goTo("#game-title",{duration:1e3,offset:20,easing:"easeInOutCubic"})}))}},q=W,J=(a("be58"),Object(l["a"])(q,D,L,!1,null,"5f725ee4",null)),Y=J.exports;d()(J,{VContainer:$["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"/choir"===t.$route.path?a("div",{staticClass:"content"},[a("v-container",{staticClass:"content-grid pt-2 pb-16"},[a("p",{staticClass:"text-h4 text-center mt-8 mb-2",attrs:{id:"game-title"}},[t._v("Choir of Heaven")]),a("p",{staticClass:"text-h6 text-center mb-4"},[t._v("by jetrico, Deemo Harlos, mattvent")]),a("div",{attrs:{id:"game-container"}},[a("div",{attrs:{id:"game"}})])])],1):t._e()},U=[],Z=(a("d3b7"),a("4de4"),a("d4ef")),Q=a.n(Z),X=a("eea3"),tt=a.n(X),et=a("c21d"),at=a.n(et),nt=a("4e4d"),st=a.n(nt),rt=a("92e4"),ot=a.n(rt),it=a("a8b0"),ct=a.n(it),lt=a("6101"),ut=a.n(lt),dt=a("a23a"),pt=a.n(dt),ft=a("047b"),mt=a.n(ft),ht=a("1cf5"),vt=a.n(ht),gt=a("eb04"),xt=a.n(gt),bt=a("1319"),Ct=a.n(bt),wt=a("a3b9"),yt=a.n(wt),_t=a("2fc6"),kt=a.n(_t),Tt=a("15c6"),Ot=a.n(Tt),St=a("e079"),At=a.n(St),Et=a("e949"),jt=a.n(Et),zt=a("4eff"),It=a("1694"),Mt=a.n(It),Vt={data:function(){return{game:null}},methods:{},mounted:function(){var t=this;this.game=new Q.a.Game({type:Q.a.WEBGL,parent:"game",banner:!1,disableContextMenu:!0,scale:{mode:Q.a.Scale.FIT,autoCenter:Q.a.Scale.CENTER_BOTH,width:854,height:480},backgroundColor:Q.a.Display.Color.HexStringToColor("#000000").color,scene:{preload:function(){this.load.audio("v01",tt.a),this.load.audio("v02",at.a),this.load.audio("v03",st.a),this.load.audio("v04",ot.a),this.load.audio("v05",ct.a),this.load.audio("v06",ut.a),this.load.audio("v07",pt.a),this.load.audio("v08",mt.a),this.load.video("f01",vt.a),this.load.video("f02",xt.a),this.load.video("f03",Ct.a),this.load.video("f04",yt.a),this.load.video("f05",kt.a),this.load.video("f06",Ot.a),this.load.video("f07",At.a),this.load.video("f08",jt.a),this.load.atlas("img",Mt.a,zt)},create:function(){var t=this;this.sound.pauseOnBlur=!1;var e="random",a=0,n=[!1,!1,!1,!1,!1,!1,!1,!1];this.add.sprite(0,0,"img","background").setOrigin(0,0).setDisplaySize(855,481);var s=this.make.graphics();s.fillStyle(16777215),s.beginPath();var r=[],o=[];[{x:17,y:67},{x:77,y:182},{x:172,y:272},{x:307,y:312},{x:447,y:312},{x:582,y:272},{x:677,y:182},{x:737,y:67}].forEach((function(a,i){var c=t.add.video(a.x,a.y,"f0".concat(i+1));c.setInteractive().on("pointerdown",(function(){"manual"===e&&(n[i]=!n[i],p())})),o.push(c),r.push(t.sound.add("v0".concat(i+1))),s.fillCircle(a.x+50,a.y+50,50)}));var i=s.createGeometryMask();o.forEach((function(t){t.setOrigin(0,0).setMask(i)}));var c=function(){r.forEach((function(t,e){n[e]=Math.random()<.4})),p()},l=this.add.sprite(357,118,"img","random").setOrigin(0,0).setInteractive().on("pointerdown",(function(){e="random",l.setAlpha(1),u.setAlpha(.8),d.setAlpha(.8),c()})),u=this.add.sprite(357,168,"img","auto").setOrigin(0,0).setInteractive().on("pointerdown",(function(){e="auto",a=0,l.setAlpha(.8),u.setAlpha(1),d.setAlpha(.8)})),d=this.add.sprite(357,218,"img","manual").setOrigin(0,0).setInteractive().on("pointerdown",(function(){e="manual",l.setAlpha(.8),u.setAlpha(.8),d.setAlpha(1)})),p=function(){var t=n.filter((function(t){return t})).length,e=(30+70/t)/100;n.forEach((function(t,a){t?(r[a].setVolume(a<4?1:e),o[a].setAlpha(1)):(r[a].setVolume(0),o[a].setAlpha(.01))}))},f=function(){"random"===e?c():"manual"===e||"auto"===e&&(a+=1,a>8&&(a=1),n.forEach((function(t,e){n[e]=e<a}))),r.forEach((function(t,e){t.play({loop:!1}),o[e].play()})),p()};this.input.once("pointerdown",(function(){f(),setInterval((function(){f()}),1e4)}))}}}),this.$nextTick((function(){t.$vuetify.goTo("#game-title",{duration:1e3,offset:20,easing:"easeInOutCubic"})}))}},Ft=Vt,Pt=(a("5313"),Object(l["a"])(Ft,K,U,!1,null,"089e6e80",null)),Nt=Pt.exports;d()(Pt,{VContainer:$["a"]}),n["default"].use(g["a"]);var Rt=[{path:"/",name:"Home",component:H},{path:"/flappy-enna",name:"Flappy Enna",component:Y},{path:"/choir",name:"Choir",component:Nt}],$t=new g["a"]({routes:Rt}),Bt=$t,Gt=a("2f62");n["default"].use(Gt["a"]);var Ht=new Gt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Dt=a("f309");n["default"].use(Dt["a"]);var Lt=new Dt["a"]({});n["default"].use(s["a"]),n["default"].config.productionTip=!1,new n["default"]({router:Bt,store:Ht,vuetify:Lt,render:function(t){return t(h)}}).$mount("#app")},6101:function(t,e,a){t.exports=a.p+"media/06.c30cb481.mp3"},"920e":function(t,e,a){},"92e4":function(t,e,a){t.exports=a.p+"media/04.1ee905c6.mp3"},"9cfc":function(t,e,a){"use strict";a("920e")},a23a:function(t,e,a){t.exports=a.p+"media/07.4eb67bfc.mp3"},a3b9:function(t,e,a){t.exports=a.p+"media/f04.2224795b.mp4"},a8b0:function(t,e,a){t.exports=a.p+"media/05.5dec02f8.mp3"},b388:function(t,e,a){},b66f:function(t,e,a){t.exports=a.p+"img/wing.c736222f.png"},be58:function(t,e,a){"use strict";a("b388")},c1f0:function(t,e,a){t.exports=a.p+"img/mural.fbdfb41f.jpg"},c21d:function(t,e,a){t.exports=a.p+"media/02.a026668d.mp3"},c2cd:function(t,e,a){t.exports=a.p+"img/gem.752378f7.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.77ea4341.png"},d65f:function(t,e,a){"use strict";a("56a2")},e079:function(t,e,a){t.exports=a.p+"media/f07.a715b055.mp4"},e914:function(t,e,a){t.exports=a.p+"img/thumb-choir.dfd09707.png"},e949:function(t,e,a){t.exports=a.p+"media/f08.65afd1db.mp4"},eb04:function(t,e,a){t.exports=a.p+"media/f02.f1f07953.mp4"},eea3:function(t,e,a){t.exports=a.p+"media/01.d59cdaf9.mp3"}});
//# sourceMappingURL=app.96eb6edb.js.map