import{S as v,i as y,s as b,am as E,e as c,c as _,a as m,d as f,$ as C,f as S,a1 as w,an as N,ao as A,ap as I,x as M,u as T,A as k,av as h}from"./vendor-202ba1b8.js";function q(s){let a,o,r;const d=s[5].default,n=E(d,s,s[4],null);return{c(){a=c("div"),o=c("div"),n&&n.c(),this.h()},l(e){a=_(e,"DIV",{style:!0});var i=m(a);o=_(i,"DIV",{});var l=m(o);n&&n.l(l),l.forEach(f),i.forEach(f),this.h()},h(){C(a,"display","none")},m(e,i){S(e,a,i),w(a,o),n&&n.m(o,null),s[6](o),s[7](a),r=!0},p(e,[i]){n&&n.p&&(!r||i&16)&&N(n,d,e,e[4],r?I(d,e[4],i,null):A(e[4]),null)},i(e){r||(M(n,e),r=!0)},o(e){T(n,e),r=!1},d(e){e&&f(a),n&&n.d(e),s[6](null),s[7](null)}}}function D(s,a,o){let{$$slots:r={},$$scope:d}=a,{target:n=document.body}=a;var e,i;let{node:l=void 0}=a,{parentNode:u=void 0}=a;k(()=>{if(typeof n=="string"){if(e=document.querySelector(n),e===null)return()=>{}}else if(n instanceof HTMLElement)e=n;else throw new TypeError("Unknown target type: "+typeof n+". Allowed types: String (CSS selector), HTMLElement.");var t=document.createElement("div");return t.setAttribute("data-portal","true"),e.appendChild(t),t.appendChild(i),()=>{t.contains(i)&&t.removeChild(i),e.contains(t)&&e.removeChild(t)}});function p(t){h[t?"unshift":"push"](()=>{i=t,o(1,i)})}function g(t){h[t?"unshift":"push"](()=>{l=t,o(0,l)})}return s.$$set=t=>{"target"in t&&o(2,n=t.target),"node"in t&&o(0,l=t.node),"parentNode"in t&&o(3,u=t.parentNode),"$$scope"in t&&o(4,d=t.$$scope)},s.$$.update=()=>{s.$$.dirty&9&&l&&(l==null?void 0:l.parentElement)&&u&&u.set(l.parentElement)},[l,i,n,u,d,r,p,g]}class L extends v{constructor(a){super();y(this,a,D,q,b,{target:2,node:0,parentNode:3})}}export{L as P};