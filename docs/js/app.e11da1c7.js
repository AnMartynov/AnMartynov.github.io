(function(t){function i(i){for(var o,n,r=i[0],l=i[1],u=i[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(i);while(p.length)p.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,i=0;i<s.length;i++){for(var e=s[i],o=!0,r=1;r<e.length;r++){var l=e[r];0!==a[l]&&(o=!1)}o&&(s.splice(i--,1),t=n(n.s=e[0]))}return t}var o={},a={app:0},s=[];function n(i){if(o[i])return o[i].exports;var e=o[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=o,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)n.d(e,o,function(i){return t[i]}.bind(null,o));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var u=0;u<r.length;u++)i(r[u]);var c=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"0049":function(t,i,e){},"034f":function(t,i,e){"use strict";e("85ec")},"0706":function(t,i,e){"use strict";e("863f")},"0bf9":function(t,i,e){},"41df":function(t,i,e){"use strict";e("0bf9")},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("6d93"),e("5363");var o=e("2b0e"),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-app",{staticClass:"pageWrap",attrs:{id:"inspire"}},[e("v-main",[e("v-app-bar",{attrs:{color:"#161616",dark:"",elevation:"0"}},[e("v-toolbar-title",{staticClass:"customTitle"},[t._v("Andre"),e("span",{staticClass:"redLetter"},[t._v("Martin")])]),e("v-tabs",{staticClass:"ml-n9 hidden-sm-and-down",attrs:{right:"",color:"#cf0010"},model:{value:t.$store.state.menu,callback:function(i){t.$set(t.$store.state,"menu",i)},expression:"$store.state.menu"}},t._l(t.links,(function(i){return e("v-tab",{key:i.id,attrs:{value:i.id},on:{click:function(e){return e.preventDefault(),t.$router.push(""+i.link)}}},[t._v(" "+t._s(i.title)+" ")])})),1),e("v-spacer",{staticClass:"hidden-md-and-up"}),e("v-app-bar-nav-icon",{staticClass:"ml-n9 hidden-md-and-up",on:{click:function(i){t.drawer=!0}}})],1),e("router-view"),e("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-h6"},[t._v(" Андрей Мартынов ")]),e("v-list-item-subtitle",[t._v(" писатель ")])],1)],1),e("v-divider"),e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item-group",{attrs:{"active-class":"red--text text--accent-4"},model:{value:t.group,callback:function(i){t.group=i},expression:"group"}},t._l(t.links,(function(i){return e("v-list-item",{key:i.id,attrs:{to:i.link}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(i.icon))])],1),e("v-list-item-title",[t._v(" "+t._s(i.title)+" ")])],1)})),1)],1)],1)],1)],1)],1)},s=[],n={data:function(){return{drawer:!1,group:null,links:[{id:0,icon:"mdi-home",title:"Главная",link:"/"},{id:1,icon:"mdi-book-open-page-variant-outline",title:"Книги",link:"/sections"},{id:2,icon:"mdi-check-circle-outline",title:"Рецензии",link:"/reviews"},{id:3,icon:"mdi-account-supervisor",title:"Отзывы",link:"/comments"}]}}},r=n,l=(e("034f"),e("2877")),u=e("6544"),c=e.n(u),d=e("7496"),p=e("40dc"),m=e("5bc1"),v=e("ce7e"),h=e("132d"),b=e("8860"),f=e("da13"),k=e("5d23"),g=e("1baa"),_=e("34c3"),y=e("f6c4"),x=e("f774"),C=e("2fa4"),$=e("71a3"),j=e("fe57"),q=e("2a7f"),w=Object(l["a"])(r,a,s,!1,null,null,null),W=w.exports;c()(w,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:m["a"],VDivider:v["a"],VIcon:h["a"],VList:b["a"],VListItem:f["a"],VListItemContent:k["a"],VListItemGroup:g["a"],VListItemIcon:_["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:y["a"],VNavigationDrawer:x["a"],VSpacer:C["a"],VTab:$["a"],VTabs:j["a"],VToolbarTitle:q["a"]});var P=e("bc3a"),E=e.n(P),T=e("8c4f"),S=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pageWrapper"},[e("p",{staticClass:"myName"},[t._v("Андрей Мартынов")]),e("p",{staticClass:"myPosition"},[t._v("Писатель / Член Союза писателей / Школьный учитель")]),e("div",{staticClass:"underLine"}),e("a",{staticClass:"myIcon",attrs:{href:"mailto:nadym7@mail.ru"}},[e("v-icon",[t._v("mdi-email")]),t._v(" nadym7@mail.ru ")],1),e("a",{staticClass:"myIcon",attrs:{href:"https://proza.ru/avtor/nadym7",target:"_blank"}},[e("v-icon",[t._v("mdi-book-open-page-variant-outline")]),t._v(" Проза.ру ")],1)])},V=[],O={name:"Home",data:function(){return{}},methods:{loadPage:function(){this.$store.state.menu=0}},created:function(){this.loadPage()}},L=O,N=(e("cccb"),Object(l["a"])(L,S,V,!1,null,null,null)),I=N.exports;c()(N,{VIcon:h["a"]});var D=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pageWrapper2"},[e("p",{staticClass:"myTitle"},[t._v("Книги")]),e("p",{staticClass:"mySubTitle"},[t._v("Русский язык")]),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"bookWrapper bookWrapper1",on:{click:function(i){return t.$router.push("/sections/1")}}},[t._v(" Романы ")]),e("div",{staticClass:"bookWrapper bookWrapper2",on:{click:function(i){return t.$router.push("/sections/2")}}},[t._v(" Повести ")]),e("div",{staticClass:"bookWrapper bookWrapper3",on:{click:function(i){return t.$router.push("/sections/3")}}},[t._v(" Сказки ")])]),e("p",{staticClass:"mySubTitle"},[t._v("English language")]),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"bookWrapper bookWrapper1",on:{click:function(i){return t.$router.push("/sections/4")}}},[t._v(" Novels ")]),e("div",{staticClass:"bookWrapper bookWrapper2",on:{click:function(i){return t.$router.push("/sections/5")}}},[t._v(" Stories ")]),e("div",{staticClass:"bookWrapper bookWrapper3",on:{click:function(i){return t.$router.push("/sections/6")}}},[t._v(" Fairy tales ")])]),e("p",{staticClass:"mySubTitle"},[t._v("Русский язык / English language")]),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"bookWrapper bookWrapper1",on:{click:function(i){return t.$router.push("/sections/7")}}},[t._v(" Романы "),e("br"),t._v(" Novels ")]),e("div",{staticClass:"bookWrapper bookWrapper2",on:{click:function(i){return t.$router.push("/sections/8")}}},[t._v(" Повести "),e("br"),t._v(" Stories ")]),e("div",{staticClass:"bookWrapper bookWrapper3",on:{click:function(i){return t.$router.push("/sections/9")}}},[t._v(" Сказки "),e("br"),t._v(" Fairy tales ")])])])},U=[],K={name:"Books",data:function(){return{}},methods:{loadPage:function(){this.$store.state.menu=1}},created:function(){this.loadPage()}},M=K,A=(e("41df"),Object(l["a"])(M,D,U,!1,null,null,null)),F=A.exports,B=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pageWrapper2"},[e("p",{staticClass:"myTitle"},[t._v(t._s(t.title))]),e("p",{staticClass:"mySubTitle"},[t._v(t._s(t.subtitle))]),t._l(t.books,(function(i){return e("div",{key:i.id,staticClass:"bookWrap"},[e("a",{attrs:{href:i.link,target:"_blank"}},[e("img",{staticClass:"book",attrs:{src:t.publicPath+"books/"+i.title}})])])}))],2)},H=[],J={name:"Section",data:function(){return{id:0,title:"",subtitle:"",books:[],publicPath:"/"}},methods:{loadPage:function(){this.$store.state.menu=1,this.id=this.$route.params.id,"1"==this.id?(this.title="Романы",this.subtitle="Русский язык",this.books=this.$store.state.b1):"2"==this.id?(this.title="Повести",this.subtitle="Русский язык",this.books=this.$store.state.b2):"3"==this.id?(this.title="Сказки",this.subtitle="Русский язык",this.books=this.$store.state.b3):"4"==this.id?(this.title="Novels",this.subtitle="English language",this.books=this.$store.state.b4):"5"==this.id?(this.title="Stories",this.subtitle="English language",this.books=this.$store.state.b5):"6"==this.id?(this.title="Fairy tales",this.subtitle="English language",this.books=this.$store.state.b6):"7"==this.id?(this.title="Романы / Novels",this.subtitle="Русский язык / English language",this.books=this.$store.state.b7):"8"==this.id?(this.title="Повести / Stories",this.subtitle="Русский язык / English language",this.books=this.$store.state.b8):"9"==this.id?(this.title="Сказки / Fairy tales",this.subtitle="Русский язык / English language",this.books=this.$store.state.b9):this.$router.push("/sections")}},created:function(){this.loadPage()},watch:{$route:function(t,i){this.id=t.params["id"],this.loadPage()}}},R=J,z=(e("a29f"),Object(l["a"])(R,B,H,!1,null,null,null)),G=z.exports,Q=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pageWrapper2"},[e("p",{staticClass:"myTitle"},[t._v("Рецензии")]),t._l(t.$store.state.reviews,(function(i){return e("div",{key:i.id,staticClass:"commentWrap"},[e("p",{staticClass:"commentTitle"},[t._v(t._s(i.title))]),e("p",{staticClass:"commentText"},[t._v(t._s(i.text))]),e("p",{staticClass:"commentPerson"},[t._v(t._s(i.person))])])}))],2)},X=[],Y={name:"Reviews",data:function(){return{}},methods:{loadPage:function(){this.$store.state.menu=2}},created:function(){this.loadPage()}},Z=Y,tt=(e("e478"),Object(l["a"])(Z,Q,X,!1,null,null,null)),it=tt.exports,et=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pageWrapper3"},[e("p",{staticClass:"myTitle"},[t._v("Отзывы")]),t._l(t.$store.state.comments,(function(i){return e("div",{key:i.id,staticClass:"commentWrap"},[e("p",{staticClass:"commentText"},[t._v(t._s(i.text))]),e("p",{staticClass:"commentPerson"},[t._v(t._s(i.person))])])}))],2)},ot=[],at={name:"Comments",data:function(){return{}},methods:{loadPage:function(){this.$store.state.menu=3}},created:function(){this.loadPage()}},st=at,nt=(e("0706"),Object(l["a"])(st,et,ot,!1,null,null,null)),rt=nt.exports;o["a"].use(T["a"]);var lt=[{path:"/",name:"Home",component:I},{path:"/sections/:id",name:"Section",component:G},{path:"/sections",name:"Sections",component:F},{path:"/reviews",name:"Reviews",component:it},{path:"/comments",name:"Comments",component:rt},{path:"*",redirect:"/"}],ut=new T["a"]({routes:lt}),ct=ut,dt=(e("fb6a"),e("2f62"));o["a"].use(dt["a"]);var pt=new dt["a"].Store({state:{baseUrl:document.location.href.slice(0,document.location.href.indexOf("#",0)),menu:1,b1:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"},{id:2,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"},{id:3,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"},{id:4,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"},{id:5,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"},{id:6,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"},{id:7,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b2:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b3:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b4:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b5:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b6:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b7:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b8:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],b9:[{id:1,link:"https://ridero.ru/books/yotkhi_trilogiya/",title:"1.jpg"}],comments:[{id:1,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",person:"Nick Kovtunov"},{id:2,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",person:"Nick Kovtunov"},{id:3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",person:"Nick Kovtunov"}],reviews:[{id:1,title:"Рецензия на книгу 1",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",person:"Nick Kovtunov"},{id:2,title:"Рецензия на книгу 2",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",person:"Nick Kovtunov"},{id:3,title:"Рецензия на книгу 3",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",person:"Nick Kovtunov"}]}}),mt=e("f309");o["a"].use(mt["a"]);var vt=new mt["a"]({});o["a"].config.productionTip=!1,o["a"].prototype.$http=E.a,new o["a"]({router:ct,store:pt,vuetify:vt,render:function(t){return t(W)}}).$mount("#app")},"5ced":function(t,i,e){},"785c":function(t,i,e){},"85ec":function(t,i,e){},"863f":function(t,i,e){},a29f:function(t,i,e){"use strict";e("785c")},cccb:function(t,i,e){"use strict";e("5ced")},e478:function(t,i,e){"use strict";e("0049")}});
//# sourceMappingURL=app.e11da1c7.js.map