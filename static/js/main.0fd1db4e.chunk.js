(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(10),l=a.n(r),o=a(9),i=a(20),m=a(6),s="toggle_form",u="toggle_edit_form",d="add_item",E="edit_item",f="delete_item",g="complete_task",p=function(e,t){var a=[];switch(t.type){case d:return Object(m.a)(Object(m.a)({},e),{},{list:[].concat(Object(i.a)(e.list),[{id:Date.now(),item:t.payload.item,isDone:!1}]),toggleForm:!1});case E:return a=e.list.map((function(a){return a.id===e.itemToEdit.id&&(a.item=t.payload.item),a})),Object(m.a)(Object(m.a)({},e),{},{list:a,isEditing:!1,itemToEdit:{},toggleForm:!1});case g:return a=e.list.map((function(e){return e.id===t.payload.id&&(e.isDone=!0),e})),Object(m.a)(Object(m.a)({},e),{},{list:a});case f:return a=e.list.filter((function(e){return e.id!==t.payload.id})),Object(m.a)(Object(m.a)({},e),{},{list:a});case s:return e.toggleForm?Object(m.a)(Object(m.a)({},e),{},{toggleForm:!1,isEditing:!1,itemToEdit:{}}):Object(m.a)(Object(m.a)({},e),{},{toggleForm:!0});case u:return Object(m.a)(Object(m.a)({},e),{},{toggleForm:!0,isEditing:!0,itemToEdit:t.payload});default:return t}},y=c.a.createContext(),b=function(){return c.a.useContext(y)},j=function(e){var t=e.children,a=Object(n.useReducer)(p,{list:[],toggleForm:!1,isEditing:!1,itemToEdit:{}}),r=Object(o.a)(a,2),l=r[0],i=r[1];return c.a.createElement(y.Provider,{value:[l,i]},t)},O=function(){return{type:s}},h=a(43),N=a(38),k=a(39),x=a(41),v=a(44),w=a(40),C=function(){var e=b(),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],s=i[1];return c.a.createElement(N.a,{className:"py-4 d-flex flex-column"},c.a.createElement(k.a,{className:"h5 d-flex justify-content-center mt-3"},"New Task"),c.a.createElement("hr",{className:"w-100"}),c.a.createElement(k.a,{className:"ml-5 my-2"},"Task Name"),c.a.createElement(w.a,{className:"col-10 mx-auto",onChange:function(e){return s(e.target.value)},defaultValue:a.isEditing?a.itemToEdit.item:""}),c.a.createElement("div",{className:"mx-auto mt-3"},a.isEditing?c.a.createElement(x.a,{color:"warning",className:"mr-1",onClick:function(){r({type:E,payload:{item:m}}),s("")}},"Edit"):c.a.createElement(x.a,{color:"success",className:"mr-1",onClick:function(){r({type:d,payload:{item:m}}),s("")}},"Add"),c.a.createElement(x.a,{color:"danger",className:"ml-1",onClick:function(){return r(O())}},"Close")))},T=a(42),F=function(){var e=b(),t=Object(o.a)(e,2),a=t[0],n=t[1],r={width:"33%",textAlign:"center"};return c.a.createElement(T.a,{borderless:!0,size:"sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{style:r},"Task"),c.a.createElement("th",{style:r},"Status"),c.a.createElement("th",{style:r},"Action"))),c.a.createElement("tbody",null,a.list.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"text-center"},e.item),c.a.createElement("td",{className:"text-center"},e.isDone?"Completed":"Incomplete"),c.a.createElement("td",{className:"d-flex justify-content-center"},c.a.createElement(x.a,{size:"sm",color:"warning",className:"mx-1",onClick:function(){return n({type:u,payload:e})}},"Edit"),c.a.createElement(x.a,{size:"sm",color:"info",className:"mx-1",onClick:function(){return n((t=e.id,{type:g,payload:{id:t}}));var t}},"Done"),c.a.createElement(x.a,{size:"sm",color:"danger",className:"mx-1",onClick:function(){return n((t=e.id,{type:f,payload:{id:t}}));var t}},"Delete")))}))))},D=function(){var e=b(),t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement(h.a,null,c.a.createElement(N.a,{className:"col-8 mt-5 mx-auto border rounded"},c.a.createElement(k.a,{className:"h3 mt-3 d-flex justify-content-center"},"To Do"),c.a.createElement(x.a,{className:"btn-success",onClick:function(){return n(O())}},"Add New Task"),c.a.createElement("hr",null),c.a.createElement(F,null)),c.a.createElement(v.a,{isOpen:a.toggleForm},c.a.createElement(C,null)))},_=function(){return c.a.createElement(j,null,c.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35),a(36);l.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0fd1db4e.chunk.js.map