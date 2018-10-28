(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],u=0,d=[];u<l.length;u++)i=l[u],n[i]&&d.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,i=1;i<o.length;i++){var s=o[i];0!==n[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},n={app:0},r=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2057a07e"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,a){o=n[t]=[e,a]});e.push(o[2]=a);var r,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t),r=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,o[1](i)}n[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,s.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),n=o("bb71");o("da64");a["a"].use(n["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("navbar"),o("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("Bookman")]),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[o("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Home")]),o("v-btn",{attrs:{flat:"",to:"/about"}},[t._v("About")]),o("v-btn",{attrs:{flat:"",to:"/login"}},[t._v("Login")]),o("v-btn",{attrs:{flat:"",to:"/signup"}},[t._v("Signup")])],1)],1)},s=[],c={name:"Navbar",mounted(){console.log("Hello")}},u=c,p=o("2877"),d=o("6544"),v=o.n(d),f=o("8336"),b=o("9910"),m=o("71d9"),h=o("2a7f"),w=Object(p["a"])(u,l,s,!1,null,null,null);w.options.__file="Navbar.vue";var g=w.exports;v()(w,{VBtn:f["a"],VSpacer:b["a"],VToolbar:m["a"],VToolbarItems:h["a"],VToolbarTitle:h["b"]});var _={name:"App",components:{Navbar:g},data(){return{}}},y=_,x=o("7496"),k=Object(p["a"])(y,r,i,!1,null,null,null);k.options.__file="App.vue";var V=k.exports;v()(k,{VApp:x["a"]});var T=o("8c4f"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"home"}},[o("h1",[t._v("This is your bookmark manager 🚀")]),o("br"),o("p",[t._v("We create this webapp to allow you to manage your bookmarks easily "),o("br"),t._v("\n    We also did it for the Node Knockout hackaton")])])}],S={},P=S,C=(o("cccb"),Object(p["a"])(P,j,O,!1,null,null,null));C.options.__file="Home.vue";var E=C.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","fill-height":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("Login")])],1),o("v-card-text",[o("v-alert",{attrs:{value:t.error,type:"error"}},[t._v("\n          Something got wrong with your credentials\n        ")]),o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-container",[o("v-text-field",{attrs:{"prepend-icon":"person",label:"E-mail",name:"email",required:"",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password","append-icon":t.show1?"visibility_off":"visibility",type:t.show1?"text":"password",name:"password",required:"",solo:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-btn",{on:{click:t.submit}},[t._v("\n              submit\n            ")])],1)],1)],1)],1)],1)],1)},A=[],N={data(){return{email:"",password:"",show1:!1,error:!1}},methods:{submit(){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:this.email,password:this.password})}).then(t=>t.text()).then(t=>"loggedin"==t?at.push("dashboard"):this.error=trues)}}},q=N,B=o("0798"),L=o("b0af"),F=o("99d9"),J=o("a523"),M=o("4bd4"),H=o("a722"),D=o("2677"),W=Object(p["a"])(q,$,A,!1,null,null,null);W.options.__file="Login.vue";var z=W.exports;v()(W,{VAlert:B["a"],VBtn:f["a"],VCard:L["a"],VCardText:F["a"],VContainer:J["a"],VForm:M["a"],VLayout:H["a"],VTextField:D["a"],VToolbar:m["a"],VToolbarTitle:h["b"]});var I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","fill-height":""}},[o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"black"}},[o("v-toolbar-title",[t._v("Signup")])],1),o("v-card-text",[o("v-alert",{attrs:{value:t.error,type:"error"}},[t._v("\n          Something got wrong with your credentials\n        ")]),o("v-form",{ref:"form"},[o("v-container",[o("v-text-field",{attrs:{"prepend-icon":"person",label:"E-mail",required:"",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password","append-icon":t.show1?"visibility_off":"visibility",type:t.show1?"text":"password",name:"password",required:"",solo:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password confirmation","append-icon":t.show2?"visibility_off":"visibility",type:t.show2?"text":"password",name:"password_confirmation",required:"",solo:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),o("v-btn",{on:{click:t.submit}},[t._v("\n              submit\n            ")])],1)],1)],1)],1)],1)],1)},K=[],G={data(){return{email:"",password:"",password_confirmation:"",show1:!1,show2:!1,error:!1}},methods:{submit(){fetch("/signup",{method:"POST",mode:"cors",body:JSON.stringify({email:this.email,password:this.password,password_confirmation:this.password_confirmation}),headers:{"Content-Type":"application/json"}}).then(t=>t.text()).then(t=>"loggedin"==t?at.push("dashboard"):this.error=!0)}}},Q=G,R=Object(p["a"])(Q,I,K,!1,null,null,null);R.options.__file="Signup.vue";var U=R.exports;v()(R,{VAlert:B["a"],VBtn:f["a"],VCard:L["a"],VCardText:F["a"],VContainer:J["a"],VForm:M["a"],VLayout:H["a"],VTextField:D["a"],VToolbar:m["a"],VToolbarTitle:h["b"]});var X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("h1",[t._v("Dashboard page")]),o("v-btn",{attrs:{color:"danger"},on:{click:t.logout}},[t._v("\n    logout\n  ")])],1)},Y=[],Z={methods:{logout(){fetch("http://localhost:3333/logout").then(t=>t.text()).then(t=>"loggedout"==t?at.push("/"):console.log("not logged out"))}}},tt=Z,et=Object(p["a"])(tt,X,Y,!1,null,null,null);et.options.__file="Dashboard.vue";var ot=et.exports;v()(et,{VBtn:f["a"],VContainer:J["a"]}),a["a"].use(T["a"]);var at=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>o.e("about").then(o.bind(null,"f820"))},{path:"/login",name:"login",component:z},{path:"/signup",name:"signup",component:U},{path:"/dashboard",name:"dashboard",component:ot}]});a["a"].config.productionTip=!1,new a["a"]({router:at,render:t=>t(V)}).$mount("#app")},"9ba7":function(t,e,o){},cccb:function(t,e,o){"use strict";var a=o("9ba7"),n=o.n(a);n.a}});
//# sourceMappingURL=app.a8023d51.js.map