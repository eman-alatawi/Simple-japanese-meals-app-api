(this["webpackJsonpmeals-api"]=this["webpackJsonpmeals-api"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),s=n.n(r),i=(n(20),n(21),n(11)),j=n.n(i),l=n(13),o=n.n(l),b=n(1);var d=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("div",{className:"footerContainer",children:[Object(b.jsx)("p",{children:"\u24b8 Copy right for Eman Alatawi 2021"}),Object(b.jsxs)("div",{className:" iconsContainer  ",children:[Object(b.jsx)("div",{className:"me-4",children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/eman-alatawi/",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)(j.a,{})})})}),Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"https://github.com/eman-alatawi",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("span",{className:"icon me-4",children:Object(b.jsx)(o.a,{})})})})]})]})})};function h(){return Object(b.jsx)("div",{className:"header-container"})}var m=n(14),u=n(4);function O(e){var t=e.name,n=e.picture;return Object(b.jsxs)(u.a,{className:"card",children:[Object(b.jsx)(u.a.Img,{variant:"top",src:n,className:"card-img"}),Object(b.jsx)(u.a.Body,{children:Object(b.jsx)(u.a.Title,{className:"card-title",children:t})})]})}function f(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese").then((function(e){return e.json()})).then((function(e){console.log(e.meals),a(e.meals)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"meals-container",children:n.map((function(e){return Object(b.jsx)(O,{name:e.strMeal,picture:e.strMealThumb},e.idMeal)}))})})}var x=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(f,{}),Object(b.jsx)(d,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.1148529d.chunk.js.map