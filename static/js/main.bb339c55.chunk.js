(this["webpackJsonptravelport-frontend-test"]=this["webpackJsonptravelport-frontend-test"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),r=n(6),u=n(8),o=n(2),d=(n(13),n(0)),l=function(t){var e=t.addItem,n=Object(c.useState)(""),i=Object(o.a)(n,2),s=i[0],a=i[1];return Object(d.jsx)("div",{className:"add-item-container",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{className:"add-item-input",placeholder:"Type something..",value:s,onChange:function(t){return a(t.target.value)}}),Object(d.jsx)("button",{className:"add-item-button",onClick:function(t){return function(t){if(!s)return t.preventDefault(),"";t.preventDefault(),e(s),a("")}(t)},"data-testid":"form-button",children:"Add Item"})]})})},j=function(t){var e=t.item,n=t.editItem,i=t.deleteItem,s=Object(c.useState)(!1),a=Object(o.a)(s,2),r=a[0],u=a[1],l=Object(c.useState)(e.item),j=Object(o.a)(l,2),b=j[0],m=j[1],f=Object(c.useRef)(null);return Object(c.useEffect)((function(){r&&f.current.focus()}),[r]),Object(d.jsxs)("div",{className:"item",children:[r?Object(d.jsx)("input",{ref:f,type:"text","data-testid":"edit-input",value:b,onChange:function(t){return m(t.target.value)}}):Object(d.jsx)("h3",{"data-testid":"item-title",children:e.item}),Object(d.jsxs)("div",{className:"item-buttons",children:[r?Object(d.jsx)("button",{className:"item-button-submit",onClick:function(){return n(e,b),void u(!1)},children:"Submit"}):Object(d.jsx)("button",{className:"item-button-edit","data-testid":"edit-button",onClick:function(){u(!0)},children:"Edit"}),Object(d.jsx)("button",{className:"item-button-delete",onClick:function(){i(e.id)},children:"Delete"})]})]})},b=function(t){var e=t.items,n=t.editItem,c=t.deleteItem;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-testid":"item-mock",children:Object(d.jsx)(j,{item:t,editItem:n,deleteItem:c})},t.id)}))})},m=function(t){var e=t.reset;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"reset-button","data-testid":"reset-mock",onClick:e,children:"Reset"})})},f="items-list",O=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],i=e[1];Object(c.useEffect)((function(){var t=localStorage.getItem(f);null!==t&&i(JSON.parse(t))}),[]),Object(c.useEffect)((function(){localStorage.setItem(f,JSON.stringify(n))}),[n]);return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h1",{children:"Things to be done"}),Object(d.jsx)(l,{addItem:function(t){var e={id:Date.now(),item:t};i((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.length>0&&Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{reset:function(){i([])}}),Object(d.jsx)(b,{items:n,editItem:function(t,e){if(console.log(t),console.log(e),""!==e){var c=n.map((function(n){return n.id===t.id?Object(r.a)(Object(r.a)({},t),{},{item:e}):n}));i(c)}},deleteItem:function(t){var e=n.filter((function(e){return e.id!==t}));i(e)}})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.bb339c55.chunk.js.map