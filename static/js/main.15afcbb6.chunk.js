(this["webpackJsonpmy-app-api"]=this["webpackJsonpmy-app-api"]||[]).push([[0],[,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(6),l=n.n(s),r=(n(12),n(13),n(3)),u=n(2),o=(n(5),function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=e.current.children;r.a.timeline({defaults:{ease:"power3.inOut"}}).fromTo(t,{autoAlpha:.2,y:"-=5",scale:.98},{duration:1,autoAlpha:1,y:"+=5",scale:1})})),Object(a.jsxs)("div",{className:"message-field",ref:e,children:[Object(a.jsx)("p",{children:"Have you always wanted to implement responsive font sizes in your projects but never knew how to calculate CSS locks?"}),Object(a.jsxs)("p",{children:["Fear no more! This app will handle all that complicated math for you! ",Object(a.jsx)("i",{className:"fas fa-smile-wink"})," "]}),Object(a.jsx)("p",{children:"Simply specify values of minimum and maximum font-size property that you want on your two breakpoints (media queries) and paste the code below straight into your SASS/CSS file. "}),Object(a.jsx)("p",{className:"bold",children:"Easy!"})]})}),j=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)("div",{className:"description-container",children:[Object(a.jsx)("button",{onClick:function(){return i(!n)},className:"message-btn",children:"How does it work?"}),Object(a.jsx)("div",{children:n&&Object(a.jsx)(o,{})})]})},d=(n(14),Object(c.createContext)()),b=function(e){var t=e.children,n=Object(c.useState)(""),i=Object(u.a)(n,2),s=i[0],l=i[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),j=o[0],b=o[1],h=Object(c.useState)(""),O=Object(u.a)(h,2),x=O[0],p=O[1],m=Object(c.useState)(""),f=Object(u.a)(m,2),v=f[0],w=f[1],S=Object(c.useState)(""),y=Object(u.a)(S,2),g=y[0],k=y[1],C=Object(c.useState)(""),N=Object(u.a)(C,2),V=N[0],M=N[1],W=Object(c.useState)(""),E=Object(u.a)(W,2),R=E[0],A=E[1],L=Object(c.useState)(""),z=Object(u.a)(L,2),P=z[0],F=z[1],T=Object(c.useState)(!1),q=Object(u.a)(T,2),D={minValue:s,setMinValue:l,minWidth:j,setMinWidth:b,maxValue:x,setMaxValue:p,maxWidth:v,setMaxWidth:w,calculateLock:function(e,t,n,a){var c=e/16,i=(n-e)/(a-t),s=n-e,l=Math.round(1e3*(0-i*t+Number.EPSILON))/1e3,r=Math.round(1e3*(100*i+Number.EPSILON))/1e3;k(c),M(s),A(l),F(r)},minValueRem:g,valueDifference:V,bValue:R,mValuevw:P,showResult:q[0],setShowResult:q[1]};return Object(a.jsx)(d.Provider,{value:D,children:t})},h=function(){var e=Object(c.useContext)(d),t=e.minValue,n=e.setMinValue,i=e.minWidth,s=e.setMinWidth,l=e.maxValue,r=e.setMaxValue,u=e.maxWidth,o=e.setMaxWidth;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{className:"breakpoint-title",children:"Lower breakpoint"}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("label",{children:"Enter font size (px)"}),Object(a.jsx)("input",{placeholder:"value(px)",type:"text",value:t,onChange:function(e){n(e.target.value)},required:!0}),Object(a.jsx)("label",{children:"Enter breakpoint width (px)"}),Object(a.jsx)("input",{placeholder:"at width(px)",type:"text",value:i,onChange:function(e){s(e.target.value)},required:!0})]}),Object(a.jsx)("h3",{className:"breakpoint-title",children:"Higher breakpoint"}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("label",{children:"Enter font size (px)"}),Object(a.jsx)("input",{placeholder:"value(px)",type:"text",value:l,onChange:function(e){r(e.target.value)},required:!0}),Object(a.jsx)("label",{children:"Enter breakpoint width (px)"}),Object(a.jsx)("input",{placeholder:"at width(px)",type:"text",value:u,onChange:function(e){o(e.target.value)},required:!0})]})]})},O=(n(15),function(){var e=Object(c.useContext)(d).showResult,t=Object(c.useContext)(d),n=t.minWidth,i=t.maxWidth,s=t.minValueRem,l=t.valueDifference,u=t.bValue,o=t.mValuevw,j={display:e?"inherit":"none"},b=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=b.current.children;r.a.timeline({defaults:{ease:"power3.inOut"}}).fromTo(e,{autoAlpha:.2,scale:.95},{duration:1,autoAlpha:1,scale:1,transformOrigin:"0% 50%"})})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:"Paste into your project: "}),Object(a.jsx)("div",{className:"result-container",children:Object(a.jsxs)("div",{style:j,ref:b,children:[Object(a.jsxs)("p",{children:["font-size: ",s,"rem;"]}),Object(a.jsxs)("p",{children:["@media (min-width: ",n,"px) font-size: calc(",s,"rem + ",o,"vw + ",u,"px);"]}),Object(a.jsxs)("p",{children:["@media (min-width: ",i,"px) font-size: calc(",s,"rem + ",l,"px);"]})]})})]})}),x=function(){var e=Object(c.useContext)(d),t=e.minValue,n=e.maxValue,i=e.minWidth,s=e.maxWidth,l=e.setMinValue,r=e.setMinWidth,u=e.setMaxValue,o=e.setMaxWidth,j=e.calculateLock,b=e.setShowResult;return Object(a.jsxs)("div",{className:"button-container",children:[Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),""===t||""===n||""===i||""===s?alert("Please fill all the fields."):(j(t,i,n,s),b(!0))},children:"Calculate"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),l(""),u(""),r(""),o(""),b(!1)},children:"Reset"})]})},p=function(){return Object(a.jsxs)(b,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(x,{}),Object(a.jsx)(O,{})]})};var m=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=e.current.children;r.a.timeline({defaults:{ease:"power3.inOut"}}).fromTo([t],{autoAlpha:0,scale:.97},{duration:1,autoAlpha:1,scale:1})})),Object(a.jsxs)("div",{className:"App",ref:e,children:[Object(a.jsx)("h1",{className:"title",children:" CSS Locks Generator"}),Object(a.jsx)(j,{}),Object(a.jsx)(p,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),f()}],[[16,1,2]]]);
//# sourceMappingURL=main.15afcbb6.chunk.js.map