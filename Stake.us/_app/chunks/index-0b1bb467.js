import{C as $,S as j,i as I,s as y,am as z,e as d,c as h,a as v,d as c,b,$ as D,a0 as p,f as k,a1 as S,an as H,ao as J,ap as K,x as m,u as _,j as M,k as O,t as Q,m as w,n as A,g as R,o as F,h as T,v as N,a6 as q,a7 as X,l as E,r as C,w as L,a4 as Z}from"./vendor-202ba1b8.js";import{b as x,g as ee,c as P}from"./index-101fb270.js";import{P as te}from"./index-b100953a.js";import{i as W}from"./index-818f9b69.js";import{I as se}from"./context-88a045a1.js";const Ve={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"VipProgressMeta"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"flagProgress"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"flag"}},{kind:"Field",name:{kind:"Name",value:"progress"}}]}}]}}]}}]},re=$(null);function ne(o){let s,r,t;const e=o[8].default,a=z(e,o,o[7],null);return{c(){s=d("div"),r=d("div"),a&&a.c(),this.h()},l(n){s=h(n,"DIV",{class:!0,style:!0});var l=v(s);r=h(l,"DIV",{class:!0,style:!0});var i=v(r);a&&a.l(i),i.forEach(c),l.forEach(c),this.h()},h(){b(r,"class","milestone-center svelte-bq2fhj"),D(r,"transform","translate("+(o[3]==="left"?"-10%":o[3]==="right"?"-90%":"-50%")+", "+(o[2]==="top"?"-50%":"50%")+")"),p(r,"orientation-top",o[2]==="top"),p(r,"orientation-bottom",o[2]==="bottom"),b(s,"class","milestone-outer svelte-bq2fhj"),D(s,"left",o[0]+"%"),p(s,"passed",o[1]),p(s,"orientation-top",o[2]==="top"),p(s,"orientation-bottom",o[2]==="bottom")},m(n,l){k(n,s,l),S(s,r),a&&a.m(r,null),t=!0},p(n,[l]){a&&a.p&&(!t||l&128)&&H(a,e,n,n[7],t?K(e,n[7],l,null):J(n[7]),null),(!t||l&12)&&D(r,"transform","translate("+(n[3]==="left"?"-10%":n[3]==="right"?"-90%":"-50%")+", "+(n[2]==="top"?"-50%":"50%")+")"),l&4&&p(r,"orientation-top",n[2]==="top"),l&4&&p(r,"orientation-bottom",n[2]==="bottom"),(!t||l&1)&&D(s,"left",n[0]+"%"),l&2&&p(s,"passed",n[1]),l&4&&p(s,"orientation-top",n[2]==="top"),l&4&&p(s,"orientation-bottom",n[2]==="bottom")},i(n){t||(m(a,n),t=!0)},o(n){_(a,n),t=!1},d(n){n&&c(s),a&&a.d(n)}}}function oe(o,s,r){let t,e,{$$slots:a={},$$scope:n}=s,{i:l=0}=s,{totalMilestones:i=0}=s,{orientation:f="alternate"}=s,{progress:g=0}=s,{passed:V}=s;return o.$$set=u=>{"i"in u&&r(4,l=u.i),"totalMilestones"in u&&r(5,i=u.totalMilestones),"orientation"in u&&r(6,f=u.orientation),"progress"in u&&r(0,g=u.progress),"passed"in u&&r(1,V=u.passed),"$$scope"in u&&r(7,n=u.$$scope)},o.$$.update=()=>{o.$$.dirty&48&&r(3,t=l===0?"left":l===i-1?"right":"center"),o.$$.dirty&80&&r(2,e=f==="alternate"?l%2==0?"bottom":"top":f)},[g,V,e,t,l,i,f,n,a]}class ae extends j{constructor(s){super();I(this,s,oe,ne,y,{i:4,totalMilestones:5,orientation:6,progress:0,passed:1})}}function le(o){let s,r,t,e,a,n=o[0]._(o[2])+"",l,i;return t=new se({props:{icon:o[1]}}),{c(){s=d("div"),r=d("span"),M(t.$$.fragment),e=O(),a=d("span"),l=Q(n),this.h()},l(f){s=h(f,"DIV",{class:!0});var g=v(s);r=h(g,"SPAN",{class:!0});var V=v(r);w(t.$$.fragment,V),V.forEach(c),e=A(g),a=h(g,"SPAN",{class:!0});var u=v(a);l=R(u,n),u.forEach(c),g.forEach(c),this.h()},h(){b(r,"class","svelte-lho1va"),b(a,"class","svelte-lho1va"),b(s,"class","miletone-wrap svelte-lho1va")},m(f,g){k(f,s,g),S(s,r),F(t,r,null),S(s,e),S(s,a),S(a,l),i=!0},p(f,[g]){(!i||g&1)&&n!==(n=f[0]._(f[2])+"")&&T(l,n)},i(f){i||(m(t.$$.fragment,f),i=!0)},o(f){_(t.$$.fragment,f),i=!1},d(f){f&&c(s),N(t)}}}function ie(o,s,r){let t;q(o,W,l=>r(0,t=l));let{flag:e}=s;var a=x(e),n=ee(e);return o.$$set=l=>{"flag"in l&&r(3,e=l.flag)},[t,a,n,e]}class fe extends j{constructor(s){super();I(this,s,ie,le,y,{flag:3})}}var B={yourVipProgress:X._("Your VIP Progress")};function G(o,s,r){const t=o.slice();return t[7]=s[r],t[9]=r,t}function ge(o){let s,r,t;return s=new fe({props:{flag:o[7].flag}}),{c(){M(s.$$.fragment),r=O()},l(e){w(s.$$.fragment,e),r=A(e)},m(e,a){F(s,e,a),k(e,r,a),t=!0},p(e,a){const n={};a&4&&(n.flag=e[7].flag),s.$set(n)},i(e){t||(m(s.$$.fragment,e),t=!0)},o(e){_(s.$$.fragment,e),t=!1},d(e){N(s,e),e&&c(r)}}}function U(o){let s,r;return s=new ae({props:{passed:o[0]*100>1&&o[0]*100>=o[7].progress,i:o[9],orientation:"bottom",totalMilestones:o[2].length,progress:o[7].progress,$$slots:{default:[ge]},$$scope:{ctx:o}}}),{c(){M(s.$$.fragment)},l(t){w(s.$$.fragment,t)},m(t,e){F(s,t,e),r=!0},p(t,e){const a={};e&5&&(a.passed=t[0]*100>1&&t[0]*100>=t[7].progress),e&4&&(a.totalMilestones=t[2].length),e&4&&(a.progress=t[7].progress),e&1028&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(m(s.$$.fragment,t),r=!0)},o(t){_(s.$$.fragment,t),r=!1},d(t){N(s,t)}}}function ue(o){let s,r,t=o[2],e=[];for(let n=0;n<t.length;n+=1)e[n]=U(G(o,t,n));const a=n=>_(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();s=E()},l(n){for(let l=0;l<e.length;l+=1)e[l].l(n);s=E()},m(n,l){for(let i=0;i<e.length;i+=1)e[i].m(n,l);k(n,s,l),r=!0},p(n,l){if(l&5){t=n[2];let i;for(i=0;i<t.length;i+=1){const f=G(n,t,i);e[i]?(e[i].p(f,l),m(e[i],1)):(e[i]=U(f),e[i].c(),m(e[i],1),e[i].m(s.parentNode,s))}for(C(),i=t.length;i<e.length;i+=1)a(i);L()}},i(n){if(!r){for(let l=0;l<t.length;l+=1)m(e[l]);r=!0}},o(n){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)_(e[l]);r=!1},d(n){Z(e,n),n&&c(s)}}}function ce(o){let s,r,t;return r=new te({props:{progress:o[1]?100:o[0]?o[0]*100:0,label:o[3]._(B.yourVipProgress),$$slots:{default:[ue]},$$scope:{ctx:o}}}),{c(){s=d("div"),M(r.$$.fragment),this.h()},l(e){s=h(e,"DIV",{class:!0});var a=v(s);w(r.$$.fragment,a),a.forEach(c),this.h()},h(){b(s,"class","vip-progress-wrapper svelte-c69d3g")},m(e,a){k(e,s,a),F(r,s,null),t=!0},p(e,[a]){const n={};a&3&&(n.progress=e[1]?100:e[0]?e[0]*100:0),a&8&&(n.label=e[3]._(B.yourVipProgress)),a&1029&&(n.$$scope={dirty:a,ctx:e}),r.$set(n)},i(e){t||(m(r.$$.fragment,e),t=!0)},o(e){_(r.$$.fragment,e),t=!1},d(e){e&&c(s),N(r)}}}function me(o,s,r){let t,e,a,n;q(o,W,g=>r(3,n=g));var l=Object.values(P);let{progress:i=0}=s,{flag:f=P.none}=s;return o.$$set=g=>{"progress"in g&&r(0,i=g.progress),"flag"in g&&r(4,f=g.flag)},o.$$.update=()=>{o.$$.dirty&16&&r(1,t=f===l[l.length-1]),o.$$.dirty&16&&r(5,e=l[l.indexOf(f)+1]),o.$$.dirty&50&&r(2,a=t?[{progress:0,flag:l[l.length-2]},{progress:100,flag:f}]:[{progress:0,flag:f},{progress:100,flag:e}])},[i,t,a,n,f,e]}class pe extends j{constructor(s){super();I(this,s,me,ce,y,{progress:0,flag:4})}}function Y(o){let s,r;return s=new pe({props:{flag:P[o[1]],progress:o[2]}}),{c(){M(s.$$.fragment)},l(t){w(s.$$.fragment,t)},m(t,e){F(s,t,e),r=!0},p(t,e){const a={};e&2&&(a.flag=P[t[1]]),e&4&&(a.progress=t[2]),s.$set(a)},i(t){r||(m(s.$$.fragment,t),r=!0)},o(t){_(s.$$.fragment,t),r=!1},d(t){N(s,t)}}}function _e(o){let s,r,t=o[0]&&o[1]in P&&Y(o);return{c(){t&&t.c(),s=E()},l(e){t&&t.l(e),s=E()},m(e,a){t&&t.m(e,a),k(e,s,a),r=!0},p(e,[a]){e[0]&&e[1]in P?t?(t.p(e,a),a&3&&m(t,1)):(t=Y(e),t.c(),m(t,1),t.m(s.parentNode,s)):t&&(C(),_(t,1,1,()=>{t=null}),L())},i(e){r||(m(t),r=!0)},o(e){_(t),r=!1},d(e){t&&t.d(e),e&&c(s)}}}function de(o,s,r){let t,e,a;q(o,re,l=>r(0,a=l));var n;return o.$$.update=()=>{o.$$.dirty&9&&r(2,{progress:t,flag:e}=(r(3,n=a==null?void 0:a.user)===null||n===void 0?void 0:n.flagProgress)||{progress:0,flag:"none"},t,(r(1,e),r(0,a),r(3,n)))},[a,e,t,n]}class Se extends j{constructor(s){super();I(this,s,de,_e,y,{})}}export{Se as V,Ve as a,re as v};
