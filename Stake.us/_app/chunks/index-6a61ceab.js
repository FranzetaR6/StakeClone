import{S as H,i as S,s as D,am as h,e as J,c as K,a as P,d as _,b as Q,f as v,a2 as E,an as $,ao as g,ap as b,x as u,u as p,a5 as R,a6 as T,ah as U,V as W,av as X,j as N,m as q,o as y,v as I,k as Y,l as M,n as Z,r as x,w as ee,aj as O}from"./vendor-202ba1b8.js";import{c as te}from"./shared-dc1dad71.js";import{g as oe}from"./context-fa7439dc.js";import{T as se}from"./index-a6d5af8e.js";const ae=t=>({hovering:t&14,node:t&1}),V=t=>({hovering:t[1]?!1:t[2]&&t[3],node:t[0]});function ne(t){let o,r,e,a;const l=t[11].default,n=h(l,t,t[10],V);return{c(){o=J("div"),n&&n.c(),this.h()},l(s){o=K(s,"DIV",{class:!0});var i=P(o);n&&n.l(i),i.forEach(_),this.h()},h(){Q(o,"class","hoverable svelte-bbyuql")},m(s,i){v(s,o,i),n&&n.m(o,null),t[12](o),r=!0,e||(a=[E(o,"pointerenter",t[7]),E(o,"pointerleave",t[8])],e=!0)},p(s,[i]){n&&n.p&&(!r||i&1039)&&$(n,l,s,s[10],r?b(l,s[10],i,ae):g(s[10]),V)},i(s){r||(u(n,s),r=!0)},o(s){p(n,s),r=!1},d(s){s&&_(o),n&&n.d(s),t[12](null),e=!1,R(a)}}}function re(t,o,r){let e,a,l,n,{$$slots:s={},$$scope:i}=o;var c=oe();T(t,c,f=>r(9,a=f));var w=U(),m,A,d=te(),{hovering:j,sharedHovering:k}=d;T(t,j,f=>r(2,l=f)),T(t,k,f=>r(3,n=f)),W(()=>{clearTimeout(A)});var B=f=>{f.pointerType!=="touch"&&(d.enter(),w("mouseenter"))},F=f=>{f.pointerType!=="touch"&&(d.leave(),w("mouseleave"))};function G(f){X[f?"unshift":"push"](()=>{m=f,r(0,m)})}return t.$$set=f=>{"$$scope"in f&&r(10,i=f.$$scope)},t.$$.update=()=>{t.$$.dirty&512&&r(1,e=c?a.isOpen:!1)},[m,e,l,n,c,j,k,B,F,a,i,s,G]}class le extends H{constructor(o){super();S(this,o,re,ne,D,{})}}const ie=t=>({showTooltip:t&16}),C=t=>({showTooltip:t[4]}),fe=t=>({showTooltip:t&16}),L=t=>({showTooltip:t[4]});function z(t){let o,r;return o=new se({props:{parentNode:t[5],$$slots:{default:[ue]},$$scope:{ctx:t}}}),{c(){N(o.$$.fragment)},l(e){q(o.$$.fragment,e)},m(e,a){y(o,e,a),r=!0},p(e,a){const l={};a&32&&(l.parentNode=e[5]),a&24&&(l.$$scope={dirty:a,ctx:e}),o.$set(l)},i(e){r||(u(o.$$.fragment,e),r=!0)},o(e){p(o.$$.fragment,e),r=!1},d(e){I(o,e)}}}function ue(t){let o;const r=t[0].tooltip,e=h(r,t,t[3],C);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,l){e&&e.m(a,l),o=!0},p(a,l){e&&e.p&&(!o||l&24)&&$(e,r,a,a[3],o?b(r,a[3],l,ie):g(a[3]),C)},i(a){o||(u(e,a),o=!0)},o(a){p(e,a),o=!1},d(a){e&&e.d(a)}}}function pe(t){let o,r,e;const a=t[0].default,l=h(a,t,t[3],L);let n=t[4]&&z(t);return{c(){l&&l.c(),o=Y(),n&&n.c(),r=M()},l(s){l&&l.l(s),o=Z(s),n&&n.l(s),r=M()},m(s,i){l&&l.m(s,i),v(s,o,i),n&&n.m(s,i),v(s,r,i),e=!0},p(s,i){l&&l.p&&(!e||i&24)&&$(l,a,s,s[3],e?b(a,s[3],i,fe):g(s[3]),L),s[4]?n?(n.p(s,i),i&16&&u(n,1)):(n=z(s),n.c(),u(n,1),n.m(r.parentNode,r)):n&&(x(),p(n,1,1,()=>{n=null}),ee())},i(s){e||(u(l,s),u(n),e=!0)},o(s){p(l,s),p(n),e=!1},d(s){l&&l.d(s),s&&_(o),n&&n.d(s),s&&_(r)}}}function _e(t){let o,r;return o=new le({props:{$$slots:{default:[pe,({hovering:e,node:a})=>({4:e,5:a}),({hovering:e,node:a})=>(e?16:0)|(a?32:0)]},$$scope:{ctx:t}}}),o.$on("mouseenter",t[1]),o.$on("mouseleave",t[2]),{c(){N(o.$$.fragment)},l(e){q(o.$$.fragment,e)},m(e,a){y(o,e,a),r=!0},p(e,[a]){const l={};a&56&&(l.$$scope={dirty:a,ctx:e}),o.$set(l)},i(e){r||(u(o.$$.fragment,e),r=!0)},o(e){p(o.$$.fragment,e),r=!1},d(e){I(o,e)}}}function ce(t,o,r){let{$$slots:e={},$$scope:a}=o;function l(s){O.call(this,t,s)}function n(s){O.call(this,t,s)}return t.$$set=s=>{"$$scope"in s&&r(3,a=s.$$scope)},[e,l,n,a]}class $e extends H{constructor(o){super();S(this,o,ce,_e,D,{})}}export{$e as H};
