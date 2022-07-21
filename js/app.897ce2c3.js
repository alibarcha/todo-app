(function(){"use strict";var t={7283:function(t,o,e){var n=e(6369),r=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},d=[],i=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,o=t._self._c;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")])])}],l={name:"Header"},a=l,c=e(1001),u=(0,c.Z)(a,i,s,!1,null,"9241db86",null),p=u.exports,f=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"todos"}},t._l(t.todos,(function(e){return o("div",{key:e.item},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},h=[],m=function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(o){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},v=[],_={name:"TodoItem",props:["todo"],methods:{markComplete(){this.todo.completed=!this.todo.completed}}},b=_,T=(0,c.Z)(b,m,v,!1,null,"6d48320e",null),g=T.exports,y={name:"Todos",components:{TodoItem:g},props:["todos"]},x=y,O=(0,c.Z)(x,f,h,!1,null,"440f5abe",null),k=O.exports,w=function(){var t=this,o=t._self._c;return o("div",[o("form",{on:{submit:function(o){return o.preventDefault(),t.addTodo.apply(null,arguments)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(o){o.target.composing||(t.title=o.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},j=[],C={name:"AddTodo",data(){return{title:""}},methods:{addTodo(t){t.preventDefault();const o={title:this.title,completed:!1};this.$emit("add-todo",o),this.title=""}}},Z=C,A=(0,c.Z)(Z,w,j,!1,null,"c4196f7e",null),P=A.exports,$=e(6265),H=e.n($),I={name:"App",components:{Header:p,Todos:k,AddTodo:P},data(){return{todos:[]}},methods:{deleteTodo(t){H()["delete"](`https://jsonplaceholder.typicode.com/todos/${t}`).then((o=>this.todos=this.todos.filter((o=>o.id!==t)))).catch((t=>console.log(t)))},addTodo(t){const{title:o,completed:e}=t;H().post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:e}).then((o=>this.todos=[...this.todos,t])).catch((t=>console.log(t)))}},created(){H().get("https://jsonplaceholder.typicode.com/todos").then((t=>this.todos=t.data.slice(0,10))).catch((t=>{console.log("api error",t)}))}},D=I,E=(0,c.Z)(D,r,d,!1,null,null,null),F=E.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(F)}).$mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var d=o[n]={exports:{}};return t[n](d,d.exports,e),d.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,d){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],d=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&d||i>=d)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(s=!1,d<i&&(i=d));if(s){t.splice(c--,1);var a=r();void 0!==a&&(o=a)}}return o}d=d||0;for(var c=t.length;c>0&&t[c-1][2]>d;c--)t[c]=t[c-1];t[c]=[n,r,d]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,d,i=n[0],s=n[1],l=n[2],a=0;if(i.some((function(o){return 0!==t[o]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(l)var c=l(e)}for(o&&o(n);a<i.length;a++)d=i[a],e.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return e.O(c)},n=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(7283)}));n=e.O(n)})();
//# sourceMappingURL=app.897ce2c3.js.map