import{a7 as x,S as z,i as A,s as D,j as h,m as g,o as b,x as f,u as m,v as w,e as v,k as F,c as j,a as B,n as H,d,b as C,f as y,a1 as $,r as T,w as I,a6 as p,l as P,ae as k,t as V,g as G,h as J}from"./vendor-202ba1b8.js";import{d as W,h as K,v as E}from"./index-da75da01.js";import{C as L}from"./index-eb155452.js";import{B as M}from"./index-4e53ca7a.js";import{I as O}from"./context-88a045a1.js";import{i as Q}from"./index-818f9b69.js";import{m as R}from"./utils-2db7bfcb.js";import{H as Z,z as U}from"./index-239f6385.js";import{i as X}from"./index-1d03818a.js";var S={wallet:x._("Wallet")};function q(l){let e,t;return e=new M({props:{style:"border-radius: 0 var(--border-radius-0-25) var(--border-radius-0-25) 0",variant:"action","data-test":"wallet",square:!0,$$slots:{default:[te]},$$scope:{ctx:l}}}),e.$on("click",l[8]),{c(){h(e.$$.fragment)},l(a){g(e.$$.fragment,a)},m(a,s){b(e,a,s),t=!0},p(a,s){const n={};s&577&&(n.$$scope={dirty:s,ctx:a}),e.$set(n)},i(a){t||(f(e.$$.fragment,a),t=!0)},o(a){m(e.$$.fragment,a),t=!1},d(a){w(e,a)}}}function Y(l){let e,t;return e=new O({props:{icon:"coins"}}),{c(){h(e.$$.fragment)},l(a){g(e.$$.fragment,a)},m(a,s){b(e,a,s),t=!0},p:k,i(a){t||(f(e.$$.fragment,a),t=!0)},o(a){m(e.$$.fragment,a),t=!1},d(a){w(e,a)}}}function ee(l){let e,t=l[6]._(S.wallet)+"",a;return{c(){e=v("span"),a=V(t)},l(s){e=j(s,"SPAN",{});var n=B(e);a=G(n,t),n.forEach(d)},m(s,n){y(s,e,n),$(e,a)},p(s,n){n&64&&t!==(t=s[6]._(S.wallet)+"")&&J(a,t)},i:k,o:k,d(s){s&&d(e)}}}function te(l){let e,t,a,s;const n=[ee,Y],r=[];function i(o,u){return o[0]?0:1}return e=i(l),t=r[e]=n[e](l),{c(){t.c(),a=P()},l(o){t.l(o),a=P()},m(o,u){r[e].m(o,u),y(o,a,u),s=!0},p(o,u){let _=e;e=i(o),e===_?r[e].p(o,u):(T(),m(r[_],1,1,()=>{r[_]=null}),I(),t=r[e],t?t.p(o,u):(t=r[e]=n[e](o),t.c()),f(t,1),t.m(a.parentNode,a))},i(o){s||(f(t),s=!0)},o(o){m(t),s=!1},d(o){r[e].d(o),o&&d(a)}}}function ae(l){let e,t,a,s;t=new L({props:{header:l[2],currency:l[3],hideZeroBalances:l[4],spacing:"primary",tabs:["sweeps"],view:l[5]?"inPlay":"default"}}),t.$on("changeCurrency",l[7]);let n=(l[1]||l[0])&&q(l);return{c(){e=v("div"),h(t.$$.fragment),a=F(),n&&n.c(),this.h()},l(r){e=j(r,"DIV",{class:!0,"data-test":!0});var i=B(e);g(t.$$.fragment,i),a=H(i),n&&n.l(i),i.forEach(d),this.h()},h(){C(e,"class","balance-toggle svelte-1rik8j6"),C(e,"data-test","balance-toggle")},m(r,i){y(r,e,i),b(t,e,null),$(e,a),n&&n.m(e,null),s=!0},p(r,[i]){const o={};i&4&&(o.header=r[2]),i&8&&(o.currency=r[3]),i&16&&(o.hideZeroBalances=r[4]),i&32&&(o.view=r[5]?"inPlay":"default"),t.$set(o),r[1]||r[0]?n?(n.p(r,i),i&3&&f(n,1)):(n=q(r),n.c(),f(n,1),n.m(e,null)):n&&(T(),m(n,1,1,()=>{n=null}),I())},i(r){s||(f(t.$$.fragment,r),f(n),s=!0)},o(r){m(t.$$.fragment,r),m(n),s=!1},d(r){r&&d(e),w(t),n&&n.d()}}}function ne(l,e,t){let a,s,n,r;p(l,W,c=>t(3,a=c)),p(l,K,c=>t(4,s=c)),p(l,X,c=>t(5,n=c)),p(l,Q,c=>t(6,r=c));let{showText:i=!0}=e,{showWallet:o=!0}=e,{header:u=!0}=e;const _=({detail:c})=>{c in Z?E.set(c):a in Z&&E.set("crypto"),W.set(c)},N=()=>R.wallet.open({tab:"deposit",currency:U.btc});return l.$$set=c=>{"showText"in c&&t(0,i=c.showText),"showWallet"in c&&t(1,o=c.showWallet),"header"in c&&t(2,u=c.header)},[i,o,u,a,s,n,r,_,N]}class _e extends z{constructor(e){super();A(this,e,ne,ae,D,{showText:0,showWallet:1,header:2})}}export{_e as B};
