import{S as H,i as I,s as O,am as S,e as m,k as V,c as g,a as b,d as v,n as k,b as p,a0 as r,f as w,a1 as j,a3 as C,aC as L,an as q,ao as y,ap as M,x as A,u as B}from"./vendor-202ba1b8.js";import{s as F}from"./context-e1974520.js";import{r as G}from"./resizeObserver-626ed4b4.js";import{i as J}from"./variables-863c2d32.js";import{c as K}from"./context-cc7b6928.js";const N=a=>({mobile:a&4}),E=a=>({mobile:a[2]});function P(a){let t,i,f,u,_,o,n,c,d;const h=a[6].default,e=S(h,a,a[5],E);return{c(){t=m("div"),i=m("div"),f=m("div"),_=V(),o=m("div"),e&&e.c(),this.h()},l(s){t=g(s,"DIV",{class:!0});var l=b(t);i=g(l,"DIV",{class:!0});var z=b(i);f=g(z,"DIV",{class:!0}),b(f).forEach(v),z.forEach(v),_=k(l),o=g(l,"DIV",{class:!0});var D=b(o);e&&e.l(D),D.forEach(v),l.forEach(v),this.h()},h(){p(f,"class","sizer svelte-x7f9v0"),p(i,"class","container no-height svelte-x7f9v0"),r(i,"reset",a[0]),p(o,"class","container svelte-x7f9v0"),r(o,"reset",a[0]),r(o,"full-height",a[1]),p(t,"class","parent svelte-x7f9v0"),r(t,"mobile",a[2]),r(t,"reset",a[0]),r(t,"full-height",a[1])},m(s,l){w(s,t,l),j(t,i),j(i,f),j(t,_),j(t,o),e&&e.m(o,null),n=!0,c||(d=C(u=G.call(null,f,a[7])),c=!0)},p(s,[l]){u&&L(u.update)&&l&4&&u.update.call(null,s[7]),l&1&&r(i,"reset",s[0]),e&&e.p&&(!n||l&36)&&q(e,h,s,s[5],n?M(h,s[5],l,N):y(s[5]),E),l&1&&r(o,"reset",s[0]),l&2&&r(o,"full-height",s[1]),l&4&&r(t,"mobile",s[2]),l&1&&r(t,"reset",s[0]),l&2&&r(t,"full-height",s[1])},i(s){n||(A(e,s),n=!0)},o(s){B(e,s),n=!1},d(s){s&&v(t),e&&e.d(s),c=!1,d()}}}function Q(a,t,i){let{$$slots:f={},$$scope:u}=t,{reset:_=!1}=t,{fullHeight:o=!1}=t;var n=K(),c=F(),d=!1;const h=e=>{n.set(e.width),c.set(e.width),i(2,d=J(e.width))};return a.$$set=e=>{"reset"in e&&i(0,_=e.reset),"fullHeight"in e&&i(1,o=e.fullHeight),"$$scope"in e&&i(5,u=e.$$scope)},[_,o,d,n,c,u,f,h]}class Z extends H{constructor(t){super();I(this,t,Q,P,O,{reset:0,fullHeight:1})}}export{Z as L};
