!function(e){function t(t){for(var r,l,c=t[0],u=t[1],i=t[2],f=0,m=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);m.length;)m.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={0:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=u;o.push([53,1]),n()}({52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),l=n.n(o),c=n(6),u=n(1),i=function(){return a.a.createElement("header",null,a.a.createElement("h2",null,"To do list"))},s=function(){return a.a.createElement("footer",null,a.a.createElement("hr",null),a.a.createElement("h2",null,a.a.createElement("span",{className:"small"},"by React and Redux")),a.a.createElement("a",{href:"https://github.com/phamthainb/reactjs/tree/master/to-do-list",target:"_blank"},"view source in github"))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){var e=f(Object(r.useState)(""),2),t=e[0],n=e[1],o=Object(u.b)(),l=Object(u.b)(),c=Object(u.b)();return a.a.createElement("div",{className:"input--name"},a.a.createElement("input",{type:"text",name:"input",value:t,onChange:function(e){return n(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(c({type:"ADD",value:t}),n(""))},onClick:function(e){e.target.value=""},onBlur:function(e){e.target.value=""}}),a.a.createElement("button",{className:"btn",onClick:function(){return o({type:"SEARCH",valueSearch:t})}},"search"),a.a.createElement("button",{className:"btn",onClick:function(){return l({type:"UNSEARCH"})}},"unsearch"),a.a.createElement("button",{className:"btn",onClick:function(){""!==t&&(c({type:"ADD",value:t}),n(""))}},"add"))};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(){var e,t=Object(u.c)(function(e){return e.listTask}),n=Object(u.c)(function(e){return e.searchValue});return""!==n?(e=t.filter(function(e){return-1!==e.name.indexOf(n)})).length<1&&e.push({id:"000",name:"no match",status:!0}):e=t,a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement("div",{className:"list--task"},e.map(function(e,t){return a.a.createElement(E,{key:t,item:e})})))},E=function(e){var t=e.item,n=Object(u.b)(),r=Object(u.b)();return"000"===t.id?a.a.createElement("div",{className:"task"},a.a.createElement("div",{className:"task--name"},t.name)):a.a.createElement("div",{className:"task"},a.a.createElement("div",{className:"task--name ".concat(t.status?"strikeout":"")},t.name),a.a.createElement("div",{className:"task--btn"},a.a.createElement("button",{className:"btn btn-secondary task--btn--edit","data-toggle":"modal","data-target":"#modelId",onClick:function(){return r({type:"EDIT_TASK",idEdit:t.id})}},"edit"),a.a.createElement("button",{className:"btn btn-secondary task--btn--delete",onClick:function(){return n({type:"DELETE",idDelete:t.id})}},"delete")))};function h(){var e=Object(u.c)(function(e){return e.taskEdit}),t=y(Object(r.useState)(e),2),n=t[0],o=t[1];Object(r.useEffect)(function(){o(e)},[e]);var l=Object(u.b)();return a.a.createElement("div",{className:"modal fade",id:"modelId",tabIndex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},a.a.createElement("div",{className:"modal-dialog",role:"document"},a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("h5",{className:"modal-title"},"Edit task"),a.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},a.a.createElement("span",{"aria-hidden":"true"},"×"))),a.a.createElement("div",{className:"modal-body"},a.a.createElement("br",null),a.a.createElement("input",{type:"text",name:"inputEdit",value:n.name,onChange:function(e){o(d({},n,{name:e.target.value}))}}),a.a.createElement("hr",null),a.a.createElement("label",null,"Trạng thái")," ",a.a.createElement("br",null),a.a.createElement("input",{type:"radio",name:"status",value:!0,checked:n.status,onChange:function(){return o(d({},n,{status:!0}))}}),"done",a.a.createElement("br",null),a.a.createElement("input",{type:"radio",name:"status",value:!1,checked:!n.status,onChange:function(){return o(d({},n,{status:!1}))}})," process ",a.a.createElement("br",null)),a.a.createElement("div",{className:"modal-footer"},a.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),a.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return l({type:"ON_SAVE",taskNew:n})}},"Save")))))}var O=function(){var e=Object(u.c)(function(e){return e});return console.log("state",e),a.a.createElement("main",null,a.a.createElement(m,null),a.a.createElement(v,null))};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,w(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(i,null),a.a.createElement("hr",null),a.a.createElement(O,null),a.a.createElement("hr",null),a.a.createElement(s,null))}}])&&j(n.prototype,o),l&&j(n,l),t}(),P=n(7),T=n.n(P);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={listTask:[{id:T()(),name:"learn",status:!1}],searchValue:"",taskEdit:{id:T()(),name:"learn",status:!1}};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":var n=e.listTask.filter(function(e){return e.id!==t.idDelete});return D({},e,{listTask:n});case"EDIT_TASK":var r=e.listTask.filter(function(e){return e.id===t.idEdit});return D({},e,{taskEdit:r[0]});case"ON_SAVE":var a=e.listTask.map(function(e){return e.id===t.taskNew.id?t.taskNew:e});return D({},e,{listTask:a});case"ADD":var o=e.listTask;return o.push({id:T()(),name:t.value,status:!1}),D({},e,{listTask:o});case"SEARCH":return D({},e,{searchValue:t.valueSearch});case"UNSEARCH":return D({},e,{searchValue:""});default:return e}},I=(n(29),n(2),n(39),n(52),Object(c.b)(x));console.log(I),l.a.render(a.a.createElement(u.a,{store:I},a.a.createElement(N,null)),document.getElementById("root"))}});