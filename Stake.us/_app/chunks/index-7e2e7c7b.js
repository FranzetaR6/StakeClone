import{S as Q,i as X,s as Y,j as d,m as _,o as b,x as c,u as m,v as p,a6 as T,b0 as j,p as A,q as h,k as I,l as H,n as R,f as $,r as B,w,d as g,B as O,t as U,g as V,h as W,ae as Z}from"./vendor-202ba1b8.js";import{T as y}from"./index-7a29fbcc.js";import{B as D}from"./index-4e53ca7a.js";import{I as x}from"./context-88a045a1.js";import{g as ee}from"./setup-0524d8dd.js";import{i as te}from"./index-818f9b69.js";import{b as ae}from"./index-0ce918a4.js";import{m as k}from"./index-26f46f85.js";function z(l){let t,n;const a=[l[13],{disabled:l[6]},{active:l[5]},{"data-test":"manual-tab"},{"data-analytics":"manual-bet-button"}];let o={$$slots:{default:[ne]},$$scope:{ctx:l}};for(let e=0;e<a.length;e+=1)o=O(o,a[e]);return t=new D({props:o}),t.$on("click",l[15]),{c(){d(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,s){b(t,e,s),n=!0},p(e,s){const f=s&8288?A(a,[s&8192&&h(e[13]),s&64&&{disabled:e[6]},s&32&&{active:e[5]},a[3],a[4]]):{};s&524416&&(f.$$scope={dirty:s,ctx:e}),t.$set(f)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function ne(l){let t=l[7]._(k.manual)+"",n;return{c(){n=U(t)},l(a){n=V(a,t)},m(a,o){$(a,n,o)},p(a,o){o&128&&t!==(t=a[7]._(k.manual)+"")&&W(n,t)},d(a){a&&g(n)}}}function F(l){let t,n;const a=[l[13],{disabled:l[6]},{active:l[4]},{"data-test":"auto-tab"},{"data-analytics":"auto-bet-button"}];let o={$$slots:{default:[se]},$$scope:{ctx:l}};for(let e=0;e<a.length;e+=1)o=O(o,a[e]);return t=new D({props:o}),t.$on("click",l[16]),{c(){d(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,s){b(t,e,s),n=!0},p(e,s){const f=s&8272?A(a,[s&8192&&h(e[13]),s&64&&{disabled:e[6]},s&16&&{active:e[4]},a[3],a[4]]):{};s&524416&&(f.$$scope={dirty:s,ctx:e}),t.$set(f)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function se(l){let t=l[7]._(k.automated)+"",n;return{c(){n=U(t)},l(a){n=V(a,t)},m(a,o){$(a,n,o)},p(a,o){o&128&&t!==(t=a[7]._(k.automated)+"")&&W(n,t)},d(a){a&&g(n)}}}function J(l){let t,n;const a=[l[13],{style:void 0},{iconOnly:!0},{disabled:l[6]},{active:l[3]},{"data-test":"advanced-tab"},{"data-testid":"advanced-tab"},{"data-analytics":"advanced-bet-button"}];let o={$$slots:{default:[le]},$$scope:{ctx:l}};for(let e=0;e<a.length;e+=1)o=O(o,a[e]);return t=new D({props:o}),t.$on("click",l[17]),{c(){d(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,s){b(t,e,s),n=!0},p(e,s){const f=s&8264?A(a,[s&8192&&h(e[13]),s&0&&{style:void 0},a[2],s&64&&{disabled:e[6]},s&8&&{active:e[3]},a[5],a[6],a[7]]):{};s&524288&&(f.$$scope={dirty:s,ctx:e}),t.$set(f)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function le(l){let t,n;return t=new x({props:{icon:"bet-advanced"}}),{c(){d(t.$$.fragment)},l(a){_(t.$$.fragment,a)},m(a,o){b(t,a,o),n=!0},p:Z,i(a){n||(c(t.$$.fragment,a),n=!0)},o(a){m(t.$$.fragment,a),n=!1},d(a){p(t,a)}}}function oe(l){let t,n,a,o,e=l[0]&&z(l),s=l[1]&&F(l),f=l[2]&&J(l);return{c(){e&&e.c(),t=I(),s&&s.c(),n=I(),f&&f.c(),a=H()},l(r){e&&e.l(r),t=R(r),s&&s.l(r),n=R(r),f&&f.l(r),a=H()},m(r,u){e&&e.m(r,u),$(r,t,u),s&&s.m(r,u),$(r,n,u),f&&f.m(r,u),$(r,a,u),o=!0},p(r,u){r[0]?e?(e.p(r,u),u&1&&c(e,1)):(e=z(r),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(B(),m(e,1,1,()=>{e=null}),w()),r[1]?s?(s.p(r,u),u&2&&c(s,1)):(s=F(r),s.c(),c(s,1),s.m(n.parentNode,n)):s&&(B(),m(s,1,1,()=>{s=null}),w()),r[2]?f?(f.p(r,u),u&4&&c(f,1)):(f=J(r),f.c(),c(f,1),f.m(a.parentNode,a)):f&&(B(),m(f,1,1,()=>{f=null}),w())},i(r){o||(c(e),c(s),c(f),o=!0)},o(r){m(e),m(s),m(f),o=!1},d(r){e&&e.d(r),r&&g(t),s&&s.d(r),r&&g(n),f&&f.d(r),r&&g(a)}}}function re(l){let t,n;return t=new y({props:{fullWidth:!0,$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){d(t.$$.fragment)},l(a){_(t.$$.fragment,a)},m(a,o){b(t,a,o),n=!0},p(a,[o]){const e={};o&524799&&(e.$$scope={dirty:o,ctx:a}),t.$set(e)},i(a){n||(c(t.$$.fragment,a),n=!0)},o(a){m(t.$$.fragment,a),n=!1},d(a){p(t,a)}}}function fe(l,t,n){let a,o,e,s,f,r,u;T(l,te,i=>n(7,r=i)),T(l,ae,i=>n(8,u=i));var{xstate:E,disabled:N,send:v,modal:S}=ee();T(l,E,i=>n(14,s=i)),T(l,N,i=>n(6,f=i));let{manual:C=!0}=t,{automated:G=!0}=t,{advanced:q=!1}=t;var K={align:"center",style:"flex: 1",spacing:"normal"};const L=()=>v({type:"TO_BET"}),M=()=>{v({type:"TO_AUTOBET"})},P=()=>{u===!1&&S.set("advancedDisclaimer"),v({type:"TO_ADVANCED"})};return l.$$set=i=>{"manual"in i&&n(0,C=i.manual),"automated"in i&&n(1,G=i.automated),"advanced"in i&&n(2,q=i.advanced)},l.$$.update=()=>{l.$$.dirty&7,l.$$.dirty&16384&&n(5,a=j("betTab",s)),l.$$.dirty&16384&&n(4,o=j("autobetTab",s)),l.$$.dirty&16384&&n(3,e=j("advancedTab",s))},[C,G,q,e,o,a,f,r,u,E,N,v,S,K,s,L,M,P]}class $e extends Q{constructor(t){super();X(this,t,fe,re,Y,{manual:0,automated:1,advanced:2})}}export{$e as G};
