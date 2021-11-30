(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0927":function(e,t,a){"use strict";a("5bd3")},3040:function(e,t,a){},"56ca":function(e,t,a){"use strict";a("3040")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"menu"}},[a("div",{attrs:{id:"brand"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])],1),a("div",{attrs:{id:"side"}},[a("router-link",{attrs:{to:"/browse"}},[a("div",{staticClass:"menu-item browse"},[a("img",{attrs:{src:"/images/browse.png"}}),a("p",[e._v("Browse")])])]),a("router-link",{attrs:{to:"/cart"}},[a("div",{staticClass:"menu-item browse"},[a("img",{attrs:{src:"/images/cart.png"}}),a("p",[e._v(e._s(e.numItems)+" items")])])]),a("router-link",{attrs:{to:"/admin"}},[a("div",{staticClass:"menu-item"},[a("img",{attrs:{src:"/images/admin.jpg"}}),a("p",[e._v("Admin")])])])],1)]),a("router-view")],1)},s=[],i=a("1da1"),o=(a("96cf"),a("bc3a")),c=a.n(o),u={created:function(){this.getItems()},methods:{getItems:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/games");case 3:return a=t.sent,e.$root.$data.products=a.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},computed:{numItems:function(){return void 0===this.$root.$data.cart.length?0:this.$root.$data.cart.length}}},d=u,l=(a("034f"),a("2877")),p=Object(l["a"])(d,n,s,!1,null,null,null),m=p.exports,f=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"search"},[a("form",{staticClass:"pure-form"},[a("i",{staticClass:"fas fa-search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])])]),a("ProductList",{attrs:{products:e.products}})],1)},h=[],g=(a("4de4"),a("ac1f"),a("841c"),a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"products"},e._l(e.products,(function(t){return a("div",{key:t.id,staticClass:"product"},[a("div",{staticClass:"info"},[a("h1",[e._v(e._s(t.name))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:t.path}})]),a("div",{staticClass:"year"},[a("h1",[e._v("Year Released: "+e._s(t.year))])]),a("div",{staticClass:"price"},[a("h2",[e._v("$"+e._s(t.price))]),a("button",{staticClass:"auto",on:{click:function(a){return e.addToCart(t)}}},[e._v("Add to Cart")])])])})),0)])}),_=[],b={name:"ProductList",props:{products:Array},methods:{addToCart:function(e){this.$root.$data.cart.push(e),this.$root.$data.isEmpty=!1}}},w=b,C=(a("56ca"),Object(l["a"])(w,g,_,!1,null,"30a1750e",null)),$=C.exports,x={name:"Home",components:{ProductList:$},data:function(){return{searchText:""}},created:function(){this.getItems()},methods:{getItems:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/games");case 3:return a=t.sent,e.$root.$data.products=a.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},computed:{products:function(){var e=this;return this.$root.$data.products.filter((function(t){return t.name.toLowerCase().search(e.searchText.toLowerCase())>=0}))}}},y=x,G=(a("0927"),Object(l["a"])(y,v,h,!1,null,"c3d812c0",null)),k=G.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"pure-menu pure-menu-horizontal"},[a("ul",{staticClass:"pure-menu-list"},[a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("10")}}},[e._v("Under $10")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("15")}}},[e._v("Under $15")])]),a("li",{staticClass:"pure-menu-item"},[a("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(t){return e.select("20")}}},[e._v("Under $20")])])])]),a("ProductList",{attrs:{products:e.products}})],1)},j=[],P={name:"Browse",components:{ProductList:$},data:function(){return{price:""}},computed:{products:function(){var e=this;return this.$root.$data.products.filter((function(t){return t.price<=e.price}))}},created:function(){this.getGames()},methods:{select:function(e){this.price=e},getGames:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/games");case 3:return a=t.sent,e.$root.$data.products=a.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},R=P,E=Object(l["a"])(R,O,j,!1,null,null,null),N=E.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Shopping Cart")]),this.$root.$data.isEmpty?a("div",[a("h2",[e._v("Cart Is Empty")])]):a("div",[a("CartList",{attrs:{products:e.products}})],1)])},T=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"products"},e._l(e.products,(function(t){return a("div",{key:t.id,staticClass:"product"},[a("div",{staticClass:"info"},[a("h1",[e._v(e._s(t.name))])]),a("div",{staticClass:"image"},[a("img",{attrs:{src:t.path}})]),a("div",{staticClass:"year"},[a("h1",[e._v("Year Released: "+e._s(t.year))])]),a("div",{staticClass:"price"},[a("h2",[e._v("$"+e._s(t.price))]),a("button",{staticClass:"auto",on:{click:function(a){return e.remove(t)}}},[e._v("Remove")])])])})),0)])},S=[],A=(a("a434"),{name:"ProductList",props:{products:Array},methods:{remove:function(e){for(var t=0;t<this.$root.$data.cart.length;++t)if(this.$root.$data.cart[t]===e){this.$root.$data.cart.splice(t,1),0===this.$root.$data.cart.length&&(this.$root.$data.isEmpty=!0);break}}}}),Y=A,M=(a("dfb2"),Object(l["a"])(Y,I,S,!1,null,"75dab455",null)),U=M.exports,B={name:"Cart",components:{CartList:U},data:function(){return{searchText:""}},created:function(){this.getItems()},methods:{getItems:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/games");case 3:return a=t.sent,e.$root.$data.products=a.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},computed:{products:function(){return this.$root.$data.cart}}},D=B,H=(a("a644"),Object(l["a"])(D,L,T,!1,null,"5b85768e",null)),J=H.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin"},[e._m(0),a("div",{staticClass:"add"},[a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{placeholder:"Year"},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}}),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{placeholder:"Price"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),a("p"),a("input",{attrs:{type:"file",name:"photo"},on:{change:e.fileChanged}}),a("button",{on:{click:e.upload}},[e._v("Upload")])]),e.addGame?a("div",{staticClass:"upload"},[a("h2",[e._v(e._s(e.addGame.name))]),a("img",{attrs:{src:e.addGame.path}})]):e._e()]),e._m(1),a("div",{staticClass:"edit"},[a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.findName,expression:"findName"}],attrs:{placeholder:"Search"},domProps:{value:e.findName},on:{input:function(t){t.target.composing||(e.findName=t.target.value)}}}),e.suggestions.length>0?a("div",{staticClass:"suggestions"},e._l(e.suggestions,(function(t){return a("div",{key:t.id,staticClass:"suggestion",on:{click:function(a){return e.selectGame(t)}}},[e._v(e._s(t.name)+" ")])})),0):e._e()]),e.findGame?a("div",{staticClass:"upload"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.findGame.name,expression:"findGame.name"}],domProps:{value:e.findGame.name},on:{input:function(t){t.target.composing||e.$set(e.findGame,"name",t.target.value)}}}),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.findGame.year,expression:"findGame.year"}],domProps:{value:e.findGame.year},on:{input:function(t){t.target.composing||e.$set(e.findGame,"year",t.target.value)}}}),a("p"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.findGame.price,expression:"findGame.price"}],domProps:{value:e.findGame.price},on:{input:function(t){t.target.composing||e.$set(e.findGame,"price",t.target.value)}}}),a("p"),a("img",{attrs:{src:e.findGame.path}})]):e._e(),e.findGame?a("div",{staticClass:"actions"},[a("button",{on:{click:function(t){return e.deleteGame(e.findGame)}}},[e._v("Delete")]),a("button",{on:{click:function(t){return e.editGame(e.findGame)}}},[e._v("Edit")])]):e._e()])])},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"heading"},[a("h2",[e._v("Add a Game")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"heading"},[a("h2",[e._v("Edit/Delete an Item")])])}],W=(a("2ca0"),a("4e82"),{name:"Admin",data:function(){return{name:"",year:"",price:"",file:null,addGame:null,games:[],findName:"",findYear:"",findPrice:"",findGame:null}},computed:{suggestions:function(){var e=this,t=this.games.filter((function(t){return t.name.toLowerCase().startsWith(e.findName.toLowerCase())}));return t.sort((function(e,t){return e.name>t.name}))}},created:function(){this.getGames()},methods:{fileChanged:function(e){this.file=e.target.files[0]},selectGame:function(e){this.findName="",this.findYear="",this.findPrice="",this.findGame=e},getGames:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/games");case 3:return a=t.sent,e.games=a.data,e.$root.$data.products=a.data,t.abrupt("return",!0);case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},upload:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=new FormData,a.append("photo",e.file,e.file.name),t.next=5,c.a.post("/api/photos",a);case 5:return r=t.sent,n=e.$root.$data.products.length,console.log(n),t.next=10,c.a.post("/api/games",{id:n+1,name:e.name,price:e.price,year:e.year,path:r.data.path});case 10:s=t.sent,e.addGame=s.data,e.getGames(),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},deleteGame:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.a.delete("/api/games/"+e._id);case 3:return t.findGame=null,t.getGames(),a.abrupt("return",!0);case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},editGame:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.a.put("/api/games/"+e._id,{name:t.findGame.name,price:t.findGame.price,year:t.findGame.year});case 3:return t.findGame=null,t.getGames(),a.abrupt("return",!0);case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}}),q=W,K=(a("acad"),Object(l["a"])(q,z,F,!1,null,"fcc40204",null)),Q=K.exports;r["a"].use(f["a"]);var V=[{path:"/",name:"Home",component:k},{path:"/browse",name:"Browse",component:N},{path:"/cart",name:"Cart",component:J},{path:"/admin",name:"admin",component:Q}],X=new f["a"]({mode:"history",base:"/",routes:V}),Z=X;r["a"].config.productionTip=!1;var ee={isEmpty:!0,products:[],cart:[]};new r["a"]({router:Z,data:ee,render:function(e){return e(m)}}).$mount("#app")},"5bd3":function(e,t,a){},"85ec":function(e,t,a){},a644:function(e,t,a){"use strict";a("e114")},acad:function(e,t,a){"use strict";a("d1f1")},d1f1:function(e,t,a){},dfb2:function(e,t,a){"use strict";a("f98b")},e114:function(e,t,a){},f98b:function(e,t,a){}});
//# sourceMappingURL=app.7056d651.js.map