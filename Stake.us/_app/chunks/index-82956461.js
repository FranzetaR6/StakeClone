import{S as W,i as X,s as Y,B as D,e as b,j as Z,k as T,c as g,a as E,m as w,n as A,d,b as O,f as N,o as y,a1 as k,x as h,an as I,ao as B,ap as L,u as p,r as V,w as q,v as $,aO as F,a0 as m,a2 as C,p as x,a5 as ee,ag as G,bk as le,ah as se,ai as ae,am as U,aj as te}from"./vendor-202ba1b8.js";import{T as ne}from"./index-ad8572b8.js";import"./slots-b21b5de5.js";/* empty css                                             */const ie=t=>({}),H=t=>({}),oe=t=>({}),J=t=>({}),ce=t=>({}),K=t=>({});function M(t){let l,a,i,s;a=new ne({props:{weight:"semibold",$$slots:{default:[fe]},$$scope:{ctx:t}}});let e=t[4].explain&&Q(t);return{c(){l=b("div"),Z(a.$$.fragment),i=T(),e&&e.c(),this.h()},l(n){l=g(n,"DIV",{class:!0});var _=E(l);w(a.$$.fragment,_),i=A(_),e&&e.l(_),_.forEach(d),this.h()},h(){O(l,"class","toggle-label svelte-1cm41hj")},m(n,_){N(n,l,_),y(a,l,null),k(l,i),e&&e.m(l,null),s=!0},p(n,_){const u={};_&512&&(u.$$scope={dirty:_,ctx:n}),a.$set(u),n[4].explain?e?(e.p(n,_),_&16&&h(e,1)):(e=Q(n),e.c(),h(e,1),e.m(l,null)):e&&(V(),p(e,1,1,()=>{e=null}),q())},i(n){s||(h(a.$$.fragment,n),h(e),s=!0)},o(n){p(a.$$.fragment,n),p(e),s=!1},d(n){n&&d(l),$(a),e&&e.d()}}}function fe(t){let l;const a=t[5].label,i=U(a,t,t[9],K);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,e){i&&i.m(s,e),l=!0},p(s,e){i&&i.p&&(!l||e&512)&&I(i,a,s,s[9],l?L(a,s[9],e,ce):B(s[9]),K)},i(s){l||(h(i,s),l=!0)},o(s){p(i,s),l=!1},d(s){i&&i.d(s)}}}function Q(t){let l,a;const i=t[5].explain,s=U(i,t,t[9],J);return{c(){l=b("span"),s&&s.c(),this.h()},l(e){l=g(e,"SPAN",{class:!0});var n=E(l);s&&s.l(n),n.forEach(d),this.h()},h(){O(l,"class","explain svelte-1cm41hj")},m(e,n){N(e,l,n),s&&s.m(l,null),a=!0},p(e,n){s&&s.p&&(!a||n&512)&&I(s,i,e,e[9],a?L(i,e[9],n,oe):B(e[9]),J)},i(e){a||(h(s,e),a=!0)},o(e){p(s,e),a=!1},d(e){e&&d(l),s&&s.d(e)}}}function R(t){let l,a;const i=t[5].labelOff,s=U(i,t,t[9],H);return{c(){l=b("span"),s&&s.c(),this.h()},l(e){l=g(e,"SPAN",{class:!0});var n=E(l);s&&s.l(n),n.forEach(d),this.h()},h(){O(l,"class","label-content svelte-1cm41hj")},m(e,n){N(e,l,n),s&&s.m(l,null),a=!0},p(e,n){s&&s.p&&(!a||n&512)&&I(s,i,e,e[9],a?L(i,e[9],n,ie):B(e[9]),H)},i(e){a||(h(s,e),a=!0)},o(e){p(s,e),a=!1},d(e){e&&d(l),s&&s.d(e)}}}function re(t){let l,a,i,s,e,n,_,u,v,P,S=[{type:"checkbox"},{disabled:t[1]},t[3]],j={};for(let c=0;c<S.length;c+=1)j=D(j,S[c]);let f=(t[4].label||t[4].explain)&&M(t),o=t[4].labelOff&&R(t);return{c(){l=b("label"),a=b("input"),i=T(),s=b("span"),e=b("div"),n=T(),f&&f.c(),_=T(),o&&o.c(),this.h()},l(c){l=g(c,"LABEL",{class:!0});var r=E(l);a=g(r,"INPUT",{type:!0}),i=A(r),s=g(r,"SPAN",{class:!0});var z=E(s);e=g(z,"DIV",{class:!0}),E(e).forEach(d),z.forEach(d),n=A(r),f&&f.l(r),_=A(r),o&&o.l(r),r.forEach(d),this.h()},h(){F(a,j),m(a,"svelte-1cm41hj",!0),O(e,"class","indicator svelte-1cm41hj"),m(e,"checked",t[0]),O(s,"class","slider svelte-1cm41hj"),m(s,"disabled",t[1]),O(l,"class","svelte-1cm41hj"),m(l,"checked",t[0])},m(c,r){N(c,l,r),k(l,a),a.autofocus&&a.focus(),a.checked=t[0],k(l,i),k(l,s),k(s,e),k(l,n),f&&f.m(l,null),k(l,_),o&&o.m(l,null),u=!0,v||(P=[C(a,"change",t[7]),C(a,"change",t[8]),C(l,"click",t[6])],v=!0)},p(c,[r]){F(a,j=x(S,[{type:"checkbox"},(!u||r&2)&&{disabled:c[1]},r&8&&c[3]])),r&1&&(a.checked=c[0]),m(a,"svelte-1cm41hj",!0),r&1&&m(e,"checked",c[0]),r&2&&m(s,"disabled",c[1]),c[4].label||c[4].explain?f?(f.p(c,r),r&16&&h(f,1)):(f=M(c),f.c(),h(f,1),f.m(l,_)):f&&(V(),p(f,1,1,()=>{f=null}),q()),c[4].labelOff?o?(o.p(c,r),r&16&&h(o,1)):(o=R(c),o.c(),h(o,1),o.m(l,null)):o&&(V(),p(o,1,1,()=>{o=null}),q()),r&1&&m(l,"checked",c[0])},i(c){u||(h(f),h(o),u=!0)},o(c){p(f),p(o),u=!1},d(c){c&&d(l),f&&f.d(),o&&o.d(),v=!1,ee(P)}}}function _e(t,l,a){const i=["checked","disabled"];let s=G(l,i),{$$slots:e={},$$scope:n}=l;const _=le(e);let{checked:u=!1}=l,{disabled:v=!1}=l;var P=se();function S(o){te.call(this,t,o)}function j(){u=this.checked,a(0,u)}const f=o=>P("change",o);return t.$$set=o=>{l=D(D({},l),ae(o)),a(3,s=G(l,i)),"checked"in o&&a(0,u=o.checked),"disabled"in o&&a(1,v=o.disabled),"$$scope"in o&&a(9,n=o.$$scope)},[u,v,P,s,_,e,S,j,f,n]}class me extends W{constructor(l){super();X(this,l,_e,re,Y,{checked:0,disabled:1})}}export{me as T};