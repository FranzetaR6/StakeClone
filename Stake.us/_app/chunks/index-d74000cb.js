import{S as N,i as z,s as V,l as k,f as g,r as T,u as h,w as B,x as c,d as _,e as v,c as b,a as w,b as p,a8 as q,a9 as H,j as y,m as D,o as E,v as I,B as De,p as Ee,q as Ie,t as U,k as F,g as C,n as M,h as P,a1 as L,ae as j,bg as Te,aH as G,a6 as Be,aB as R,a4 as K}from"./vendor-202ba1b8.js";import{T as O}from"./index-ad8572b8.js";import{L as Le}from"./index-21535704.js";import{T as Se}from"./index-234470d1.js";import{M as je}from"./index-03e84442.js";import{g as Fe}from"./context-cc7b6928.js";/* empty css                                             */import{F as Me}from"./index-991ddd05.js";function Q(a,t,l){const e=a.slice();return e[4]=t[l]._type,e[5]=t[l].text,e[6]=t[l].marks,e[8]=l,e}function Ne(a){let t,l;return t=new O({props:{inline:!0,lineHeight:"base",tag:a[4],weight:a[6].includes("strong")?"semibold":"normal",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&1&&(s.tag=e[4]),r&1&&(s.weight=e[6].includes("strong")?"semibold":"normal"),r&513&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function ze(a){var f;let t,l;function e(...n){return a[3](a[6],...n)}const r=[{inline:!0},{lineHeight:"base"},{variant:"subtle-link"},{textDecoration:"underline"},Y(((f=a[1])==null?void 0:f.find(e).href)||"")];let s={$$slots:{default:[qe]},$$scope:{ctx:a}};for(let n=0;n<r.length;n+=1)s=De(s,r[n]);return t=new Le({props:s}),{c(){y(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,i){E(t,n,i),l=!0},p(n,i){var u;a=n;const o=i&3?Ee(r,[r[0],r[1],r[2],r[3],Ie(Y(((u=a[1])==null?void 0:u.find(e).href)||""))]):{};i&513&&(o.$$scope={dirty:i,ctx:a}),t.$set(o)},i(n){l||(c(t.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),l=!1},d(n){I(t,n)}}}function Ve(a){let t=a[5]+"",l,e;return{c(){l=U(t),e=F()},l(r){l=C(r,t),e=M(r)},m(r,s){g(r,l,s),g(r,e,s)},p(r,s){s&1&&t!==(t=r[5]+"")&&P(l,t)},d(r){r&&_(l),r&&_(e)}}}function qe(a){let t,l=a[5]+"",e,r;return{c(){t=v("span"),e=U(l),r=F()},l(s){t=b(s,"SPAN",{});var f=w(t);e=C(f,l),f.forEach(_),r=M(s)},m(s,f){g(s,t,f),L(t,e),g(s,r,f)},p(s,f){f&1&&l!==(l=s[5]+"")&&P(e,l)},d(s){s&&_(t),s&&_(r)}}}function X(a,t){let l,e,r,s,f,n;function i(...m){return t[2](t[6],...m)}const o=[ze,Ne],u=[];function d(m,$){var S;return $&3&&(e=null),e==null&&(e=!!(m[6]&&((S=m[1])==null?void 0:S.some(i)))),e?0:1}return r=d(t,-1),s=u[r]=o[r](t),{key:a,first:null,c(){l=k(),s.c(),f=k(),this.h()},l(m){l=k(),s.l(m),f=k(),this.h()},h(){this.first=l},m(m,$){g(m,l,$),u[r].m(m,$),g(m,f,$),n=!0},p(m,$){t=m;let S=r;r=d(t,$),r===S?u[r].p(t,$):(T(),h(u[S],1,1,()=>{u[S]=null}),B(),s=u[r],s?s.p(t,$):(s=u[r]=o[r](t),s.c()),c(s,1),s.m(f.parentNode,f))},i(m){n||(c(s),n=!0)},o(m){h(s),n=!1},d(m){m&&_(l),u[r].d(m),m&&_(f)}}}function He(a){let t,l=[],e=new Map,r,s=a[0];const f=n=>n[8];for(let n=0;n<s.length;n+=1){let i=Q(a,s,n),o=f(i);e.set(o,l[n]=X(o,i))}return{c(){t=v("p");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=b(n,"P",{class:!0});var i=w(t);for(let o=0;o<l.length;o+=1)l[o].l(i);i.forEach(_),this.h()},h(){p(t,"class","inline-text")},m(n,i){g(n,t,i);for(let o=0;o<l.length;o+=1)l[o].m(t,null);r=!0},p(n,[i]){i&3&&(s=n[0],T(),l=q(l,i,f,1,n,s,e,t,H,X,null,Q),B())},i(n){if(!r){for(let i=0;i<s.length;i+=1)c(l[i]);r=!0}},o(n){for(let i=0;i<l.length;i+=1)h(l[i]);r=!1},d(n){n&&_(t);for(let i=0;i<l.length;i+=1)l[i].d()}}}function Y(a){var t="https://stake.com",l=a.startsWith(t),e=l?a.replace(t,""):a;return{external:!l&&a.startsWith("/")===!1,to:e}}function Ue(a,t,l){let{children:e}=t,{markDefs:r}=t;const s=(n,{_key:i,_type:o})=>n.includes(i)&&o==="link",f=(n,{_key:i})=>n.includes(i);return a.$$set=n=>{"children"in n&&l(0,e=n.children),"markDefs"in n&&l(1,r=n.markDefs)},[e,r,s,f]}class J extends N{constructor(t){super();z(this,t,Ue,He,V,{children:0,markDefs:1})}}function Z(a,t,l){const e=a.slice();return e[7]=t[l],e[3]=l,e}function A(a,t,l){const e=a.slice();return e[1]=t[l],e[3]=l,e}function x(a,t,l){const e=a.slice();return e[4]=t[l],e[6]=l,e}function Ce(a){let t=a[7]+"",l;return{c(){l=U(t)},l(e){l=C(e,t)},m(e,r){g(e,l,r)},p(e,r){r&1&&t!==(t=e[7]+"")&&P(l,t)},d(e){e&&_(l)}}}function ee(a,t){let l,e,r,s;return e=new O({props:{tag:"span",weight:"bold",variant:"highlighted",$$slots:{default:[Ce]},$$scope:{ctx:t}}}),{key:a,first:null,c(){l=v("th"),y(e.$$.fragment),r=F(),this.h()},l(f){l=b(f,"TH",{});var n=w(l);D(e.$$.fragment,n),r=M(n),n.forEach(_),this.h()},h(){this.first=l},m(f,n){g(f,l,n),E(e,l,null),L(l,r),s=!0},p(f,n){t=f;const i={};n&513&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(f){s||(c(e.$$.fragment,f),s=!0)},o(f){h(e.$$.fragment,f),s=!1},d(f){f&&_(l),I(e)}}}function Pe(a){let t,l,e=[],r=new Map,s,f=a[0][0].cells;const n=i=>i[3];for(let i=0;i<f.length;i+=1){let o=Z(a,f,i),u=n(o);r.set(u,e[i]=ee(u,o))}return{c(){t=v("thead"),l=v("tr");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){t=b(i,"THEAD",{slot:!0});var o=w(t);l=b(o,"TR",{});var u=w(l);for(let d=0;d<e.length;d+=1)e[d].l(u);u.forEach(_),o.forEach(_),this.h()},h(){p(t,"slot","thead")},m(i,o){g(i,t,o),L(t,l);for(let u=0;u<e.length;u+=1)e[u].m(l,null);s=!0},p(i,o){o&1&&(f=i[0][0].cells,T(),e=q(e,o,n,1,i,f,r,l,H,ee,null,Z),B())},i(i){if(!s){for(let o=0;o<f.length;o+=1)c(e[o]);s=!0}},o(i){for(let o=0;o<e.length;o+=1)h(e[o]);s=!1},d(i){i&&_(t);for(let o=0;o<e.length;o+=1)e[o].d()}}}function Re(a){let t,l=[],e=new Map,r,s,f=a[1].cells;const n=i=>i[6];for(let i=0;i<f.length;i+=1){let o=x(a,f,i),u=n(o);e.set(u,l[i]=te(u,o))}return{c(){t=v("tr");for(let i=0;i<l.length;i+=1)l[i].c();r=F()},l(i){t=b(i,"TR",{});var o=w(t);for(let u=0;u<l.length;u+=1)l[u].l(o);r=M(o),o.forEach(_)},m(i,o){g(i,t,o);for(let u=0;u<l.length;u+=1)l[u].m(t,null);L(t,r),s=!0},p(i,o){o&1&&(f=i[1].cells,T(),l=q(l,o,n,1,i,f,e,t,H,te,r,x),B())},i(i){if(!s){for(let o=0;o<f.length;o+=1)c(l[o]);s=!0}},o(i){for(let o=0;o<l.length;o+=1)h(l[o]);s=!1},d(i){i&&_(t);for(let o=0;o<l.length;o+=1)l[o].d()}}}function Oe(a){return{c:j,l:j,m:j,p:j,i:j,o:j,d:j}}function We(a){let t=a[4]+"",l;return{c(){l=U(t)},l(e){l=C(e,t)},m(e,r){g(e,l,r)},p(e,r){r&1&&t!==(t=e[4]+"")&&P(l,t)},d(e){e&&_(l)}}}function te(a,t){let l,e,r;return e=new O({props:{tag:"span",$$slots:{default:[We]},$$scope:{ctx:t}}}),{key:a,first:null,c(){l=v("td"),y(e.$$.fragment),this.h()},l(s){l=b(s,"TD",{});var f=w(l);D(e.$$.fragment,f),f.forEach(_),this.h()},h(){this.first=l},m(s,f){g(s,l,f),E(e,l,null),r=!0},p(s,f){t=s;const n={};f&513&&(n.$$scope={dirty:f,ctx:t}),e.$set(n)},i(s){r||(c(e.$$.fragment,s),r=!0)},o(s){h(e.$$.fragment,s),r=!1},d(s){s&&_(l),I(e)}}}function le(a,t){let l,e,r,s,f;const n=[Oe,Re],i=[];function o(u,d){return u[3]===0?0:1}return e=o(t),r=i[e]=n[e](t),{key:a,first:null,c(){l=k(),r.c(),s=k(),this.h()},l(u){l=k(),r.l(u),s=k(),this.h()},h(){this.first=l},m(u,d){g(u,l,d),i[e].m(u,d),g(u,s,d),f=!0},p(u,d){t=u;let m=e;e=o(t),e===m?i[e].p(t,d):(T(),h(i[m],1,1,()=>{i[m]=null}),B(),r=i[e],r?r.p(t,d):(r=i[e]=n[e](t),r.c()),c(r,1),r.m(s.parentNode,s))},i(u){f||(c(r),f=!0)},o(u){h(r),f=!1},d(u){u&&_(l),i[e].d(u),u&&_(s)}}}function Ge(a){let t=[],l=new Map,e,r,s=a[0];const f=n=>n[3];for(let n=0;n<s.length;n+=1){let i=A(a,s,n),o=f(i);l.set(o,t[n]=le(o,i))}return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=k()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=k()},m(n,i){for(let o=0;o<t.length;o+=1)t[o].m(n,i);g(n,e,i),r=!0},p(n,i){i&1&&(s=n[0],T(),t=q(t,i,f,1,n,s,l,e.parentNode,H,le,e,A),B())},i(n){if(!r){for(let i=0;i<s.length;i+=1)c(t[i]);r=!0}},o(n){for(let i=0;i<t.length;i+=1)h(t[i]);r=!1},d(n){for(let i=0;i<t.length;i+=1)t[i].d(n);n&&_(e)}}}function Je(a){let t,l,e;return l=new Se({props:{$$slots:{body:[Ge],thead:[Pe]},$$scope:{ctx:a}}}),{c(){t=v("div"),y(l.$$.fragment),this.h()},l(r){t=b(r,"DIV",{class:!0});var s=w(t);D(l.$$.fragment,s),s.forEach(_),this.h()},h(){p(t,"class","table-wrap svelte-1h85dj6")},m(r,s){g(r,t,s),E(l,t,null),e=!0},p(r,[s]){const f={};s&513&&(f.$$scope={dirty:s,ctx:r}),l.$set(f)},i(r){e||(c(l.$$.fragment,r),e=!0)},o(r){h(l.$$.fragment,r),e=!1},d(r){r&&_(t),I(l)}}}function Ke(a,t,l){let{rows:e}=t;return a.$$set=r=>{"rows"in r&&l(0,e=r.rows)},[e]}class Qe extends N{constructor(t){super();z(this,t,Ke,Je,V,{rows:0})}}function re(a,t,l){const e=a.slice();return e[3]=t[l].text,e[5]=l,e}function ne(a,t){let l,e=t[3]+"",r,s,f;return{key:a,first:null,c(){l=v("span"),r=U(e),s=F(),this.h()},l(n){l=b(n,"SPAN",{id:!0});var i=w(l);r=C(i,e),s=M(i),i.forEach(_),this.h()},h(){p(l,"id",f=t[3].replace(/\s/g,"_")),this.first=l},m(n,i){g(n,l,i),L(l,r),L(l,s)},p(n,i){t=n,i&1&&e!==(e=t[3]+"")&&P(r,e),i&1&&f!==(f=t[3].replace(/\s/g,"_"))&&p(l,"id",f)},d(n){n&&_(l)}}}function Xe(a){let t=[],l=new Map,e,r=a[0];const s=f=>f[5];for(let f=0;f<r.length;f+=1){let n=re(a,r,f),i=s(n);l.set(i,t[f]=ne(i,n))}return{c(){for(let f=0;f<t.length;f+=1)t[f].c();e=k()},l(f){for(let n=0;n<t.length;n+=1)t[n].l(f);e=k()},m(f,n){for(let i=0;i<t.length;i+=1)t[i].m(f,n);g(f,e,n)},p(f,n){n&1&&(r=f[0],t=q(t,n,s,1,f,r,l,e.parentNode,Te,ne,e,re))},d(f){for(let n=0;n<t.length;n+=1)t[n].d(f);f&&_(e)}}}function Ye(a){let t,l;return t=new O({props:{inline:!0,lineHeight:"base",tag:a[1],size:a[2],variant:"highlighted",$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,[r]){const s={};r&2&&(s.tag=e[1]),r&4&&(s.size=e[2]),r&65&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function Ze(a,t,l){let{children:e}=t,{tag:r}=t,{size:s}=t;return a.$$set=f=>{"children"in f&&l(0,e=f.children),"tag"in f&&l(1,r=f.tag),"size"in f&&l(2,s=f.size)},[e,r,s]}class Ae extends N{constructor(t){super();z(this,t,Ze,Ye,V,{children:0,tag:1,size:2})}}function ie(a,t,l){const e=a.slice();return e[1]=t[l],e[3]=l,e}function se(a,t){let l,e,r,s,f;return e=new J({props:{children:t[1].children,markDefs:t[1].markDefs}}),{key:a,first:null,c(){l=v("li"),y(e.$$.fragment),r=F(),this.h()},l(n){l=b(n,"LI",{class:!0});var i=w(l);D(e.$$.fragment,i),r=M(i),i.forEach(_),this.h()},h(){var n;p(l,"class",s=""+(G(`level-${(n=t[1])==null?void 0:n.level}`)+" svelte-kxe9ji")),this.first=l},m(n,i){g(n,l,i),E(e,l,null),L(l,r),f=!0},p(n,i){var u;t=n;const o={};i&1&&(o.children=t[1].children),i&1&&(o.markDefs=t[1].markDefs),e.$set(o),(!f||i&1&&s!==(s=""+(G(`level-${(u=t[1])==null?void 0:u.level}`)+" svelte-kxe9ji")))&&p(l,"class",s)},i(n){f||(c(e.$$.fragment,n),f=!0)},o(n){h(e.$$.fragment,n),f=!1},d(n){n&&_(l),I(e)}}}function xe(a){let t,l=[],e=new Map,r,s=a[0];const f=n=>n[3];for(let n=0;n<s.length;n+=1){let i=ie(a,s,n),o=f(i);e.set(o,l[n]=se(o,i))}return{c(){t=v("ul");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=b(n,"UL",{class:!0});var i=w(t);for(let o=0;o<l.length;o+=1)l[o].l(i);i.forEach(_),this.h()},h(){p(t,"class","svelte-kxe9ji")},m(n,i){g(n,t,i);for(let o=0;o<l.length;o+=1)l[o].m(t,null);r=!0},p(n,[i]){i&1&&(s=n[0],T(),l=q(l,i,f,1,n,s,e,t,H,se,null,ie),B())},i(n){if(!r){for(let i=0;i<s.length;i+=1)c(l[i]);r=!0}},o(n){for(let i=0;i<l.length;i+=1)h(l[i]);r=!1},d(n){n&&_(t);for(let i=0;i<l.length;i+=1)l[i].d()}}}function et(a,t,l){let{blocks:e}=t;return a.$$set=r=>{"blocks"in r&&l(0,e=r.blocks)},[e]}class tt extends N{constructor(t){super();z(this,t,et,xe,V,{blocks:0})}}function fe(a,t,l){const e=a.slice();return e[1]=t[l],e[3]=l,e}function ae(a,t){let l,e,r,s,f;return e=new J({props:{children:t[1].children,markDefs:t[1].markDefs}}),{key:a,first:null,c(){l=v("li"),y(e.$$.fragment),r=F(),this.h()},l(n){l=b(n,"LI",{class:!0});var i=w(l);D(e.$$.fragment,i),r=M(i),i.forEach(_),this.h()},h(){var n;p(l,"class",s=""+(G(`level-${(n=t[1])==null?void 0:n.level}`)+" svelte-u9pl51")),this.first=l},m(n,i){g(n,l,i),E(e,l,null),L(l,r),f=!0},p(n,i){var u;t=n;const o={};i&1&&(o.children=t[1].children),i&1&&(o.markDefs=t[1].markDefs),e.$set(o),(!f||i&1&&s!==(s=""+(G(`level-${(u=t[1])==null?void 0:u.level}`)+" svelte-u9pl51")))&&p(l,"class",s)},i(n){f||(c(e.$$.fragment,n),f=!0)},o(n){h(e.$$.fragment,n),f=!1},d(n){n&&_(l),I(e)}}}function lt(a){let t,l=[],e=new Map,r,s=a[0];const f=n=>n[3];for(let n=0;n<s.length;n+=1){let i=fe(a,s,n),o=f(i);e.set(o,l[n]=ae(o,i))}return{c(){t=v("ol");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=b(n,"OL",{class:!0});var i=w(t);for(let o=0;o<l.length;o+=1)l[o].l(i);i.forEach(_),this.h()},h(){p(t,"class","svelte-u9pl51")},m(n,i){g(n,t,i);for(let o=0;o<l.length;o+=1)l[o].m(t,null);r=!0},p(n,[i]){i&1&&(s=n[0],T(),l=q(l,i,f,1,n,s,e,t,H,ae,null,fe),B())},i(n){if(!r){for(let i=0;i<s.length;i+=1)c(l[i]);r=!0}},o(n){for(let i=0;i<l.length;i+=1)h(l[i]);r=!1},d(n){n&&_(t);for(let i=0;i<l.length;i+=1)l[i].d()}}}function rt(a,t,l){let{blocks:e}=t;return a.$$set=r=>{"blocks"in r&&l(0,e=r.blocks)},[e]}class nt extends N{constructor(t){super();z(this,t,rt,lt,V,{blocks:0})}}function oe(a){let t,l;return t=new O({props:{variant:"subtle",tag:"h3",$$slots:{default:[it]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&17&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function it(a){let t=a[0].title+"",l;return{c(){l=U(t)},l(e){l=C(e,t)},m(e,r){g(e,l,r)},p(e,r){r&1&&t!==(t=e[0].title+"")&&P(l,t)},d(e){e&&_(l)}}}function ce(a){let t,l;return t=new O({props:{$$slots:{default:[st]},$$scope:{ctx:a}}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&17&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function st(a){let t=a[0].description+"",l;return{c(){l=U(t)},l(e){l=C(e,t)},m(e,r){g(e,l,r)},p(e,r){r&1&&t!==(t=e[0].description+"")&&P(l,t)},d(e){e&&_(l)}}}function ue(a){let t,l;return t=new je({props:{stacked:a[1],market:a[0],fixture:a[0].fixture}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&2&&(s.stacked=e[1]),r&1&&(s.market=e[0]),r&1&&(s.fixture=e[0].fixture),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function ft(a){var u,d;let t,l,e,r,s,f,n=((u=a[0])==null?void 0:u.title)&&oe(a),i=((d=a[0])==null?void 0:d.description)&&ce(a),o=a[0]&&ue(a);return{c(){t=v("div"),n&&n.c(),l=F(),i&&i.c(),e=F(),r=v("div"),s=v("div"),o&&o.c(),this.h()},l(m){t=b(m,"DIV",{class:!0});var $=w(t);n&&n.l($),l=M($),i&&i.l($),e=M($),r=b($,"DIV",{class:!0});var S=w(r);s=b(S,"DIV",{class:!0});var W=w(s);o&&o.l(W),W.forEach(_),S.forEach(_),$.forEach(_),this.h()},h(){p(s,"class","outcome-wrapper svelte-1sf4qx4"),p(r,"class","outcome-wrap svelte-1sf4qx4"),p(t,"class","news-market svelte-1sf4qx4")},m(m,$){g(m,t,$),n&&n.m(t,null),L(t,l),i&&i.m(t,null),L(t,e),L(t,r),L(r,s),o&&o.m(s,null),f=!0},p(m,[$]){var S,W;((S=m[0])==null?void 0:S.title)?n?(n.p(m,$),$&1&&c(n,1)):(n=oe(m),n.c(),c(n,1),n.m(t,l)):n&&(T(),h(n,1,1,()=>{n=null}),B()),((W=m[0])==null?void 0:W.description)?i?(i.p(m,$),$&1&&c(i,1)):(i=ce(m),i.c(),c(i,1),i.m(t,e)):i&&(T(),h(i,1,1,()=>{i=null}),B()),m[0]?o?(o.p(m,$),$&1&&c(o,1)):(o=ue(m),o.c(),c(o,1),o.m(s,null)):o&&(T(),h(o,1,1,()=>{o=null}),B())},i(m){f||(c(n),c(i),c(o),f=!0)},o(m){h(n),h(i),h(o),f=!1},d(m){m&&_(t),n&&n.d(),i&&i.d(),o&&o.d()}}}function at(a,t,l){let e,r,{market:s}=t;var f=Fe();return Be(a,f,n=>l(3,r=n)),a.$$set=n=>{"market"in n&&l(0,s=n.market)},a.$$.update=()=>{a.$$.dirty&8&&l(1,e=r<600)},[s,e,f,r]}class ot extends N{constructor(t){super();z(this,t,at,ft,V,{market:0})}}function ct(a){let t,l;return{c(){t=v("iframe"),this.h()},l(e){t=b(e,"IFRAME",{src:!0,allow:!0,class:!0}),w(t).forEach(_),this.h()},h(){R(t.src,l=a[0])||p(t,"src",l),p(t,"allow",a[1]),t.allowFullscreen=a[2],p(t,"class","svelte-1etyrx8")},m(e,r){g(e,t,r)},p(e,r){r&1&&!R(t.src,l=e[0])&&p(t,"src",l),r&2&&p(t,"allow",e[1]),r&4&&(t.allowFullscreen=e[2])},d(e){e&&_(t)}}}function ut(a){let t,l;return{c(){t=v("iframe"),this.h()},l(e){t=b(e,"IFRAME",{src:!0,allow:!0,class:!0}),w(t).forEach(_),this.h()},h(){R(t.src,l="https://www.youtube.com/embed/"+a[0])||p(t,"src",l),p(t,"allow",a[1]),t.allowFullscreen=a[2],p(t,"class","svelte-1etyrx8")},m(e,r){g(e,t,r)},p(e,r){r&1&&!R(t.src,l="https://www.youtube.com/embed/"+e[0])&&p(t,"src",l),r&2&&p(t,"allow",e[1]),r&4&&(t.allowFullscreen=e[2])},d(e){e&&_(t)}}}function _t(a){let t,l;function e(f,n){return f[4]==="youtube"?ut:ct}let r=e(a),s=r(a);return{c(){t=v("div"),l=v("div"),s.c(),this.h()},l(f){t=b(f,"DIV",{class:!0,style:!0});var n=w(t);l=b(n,"DIV",{class:!0});var i=w(l);s.l(i),i.forEach(_),n.forEach(_),this.h()},h(){p(l,"class","video-wrapper chromatic-ignore svelte-1etyrx8"),p(t,"class","video-container svelte-1etyrx8"),p(t,"style",a[3])},m(f,n){g(f,t,n),L(t,l),s.m(l,null)},p(f,[n]){r===(r=e(f))&&s?s.p(f,n):(s.d(1),s=r(f),s&&(s.c(),s.m(l,null))),n&8&&p(t,"style",f[3])},i:j,o:j,d(f){f&&_(t),s.d()}}}function ht(a,t,l){let{src:e=void 0}=t,{allow:r="autoplay; fullscreen; picture-in-picture"}=t,{allowFullScreen:s=!0}=t,{style:f=void 0}=t,{type:n=void 0}=t;return a.$$set=i=>{"src"in i&&l(0,e=i.src),"allow"in i&&l(1,r=i.allow),"allowFullScreen"in i&&l(2,s=i.allowFullScreen),"style"in i&&l(3,f=i.style),"type"in i&&l(4,n=i.type)},[e,r,s,f,n]}class _e extends N{constructor(t){super();z(this,t,ht,_t,V,{src:0,allow:1,allowFullScreen:2,style:3,type:4})}}const mt=a=>{var e;let t={listTag:null,listBlocks:[]},l=[];if(a==null?void 0:a.length)for(let r=0;r<a.length;r++){const s=a[r];((s==null?void 0:s.listItem)===void 0||(s==null?void 0:s.listItem)!==((e=a[r-1])==null?void 0:e.listItem))&&(t.listBlocks.length&&l.push(t),t={listTag:null,listBlocks:[]}),(s==null?void 0:s.listItem)===void 0?l.push(s):(s==null?void 0:s.listItem)==="bullet"?(t.listTag="ul",t.listBlocks=[...t.listBlocks,s]):(s==null?void 0:s.listItem)==="number"&&(t.listTag="ol",t.listBlocks=[...t.listBlocks,s]),r+1===a.length&&t.listBlocks.length&&l.push(t)}return l};function he(a,t,l){const e=a.slice();return e[6]=t[l],e[8]=l,e}function me(a,t,l){const e=a.slice();return e[12]=t[l],e}function de(a,t,l){const e=a.slice();return e[9]=t[l],e}function dt(a){var e,r;let t,l;return t=new J({props:{children:(e=a[6])==null?void 0:e.children,markDefs:(r=a[6])==null?void 0:r.markDefs}}),{c(){y(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,f){E(t,s,f),l=!0},p(s,f){var i,o;const n={};f&8&&(n.children=(i=s[6])==null?void 0:i.children),f&8&&(n.markDefs=(o=s[6])==null?void 0:o.markDefs),t.$set(n)},i(s){l||(c(t.$$.fragment,s),l=!0)},o(s){h(t.$$.fragment,s),l=!1},d(s){I(t,s)}}}function gt(a){let t,l;return t=new Ae({props:{tag:a[6].style,size:a[0],children:a[6].children}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.tag=e[6].style),r&1&&(s.size=e[0]),r&8&&(s.children=e[6].children),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function pt(a){let t,l;return t=new J({props:{children:a[6].children,markDefs:a[6].markDefs}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.children=e[6].children),r&8&&(s.markDefs=e[6].markDefs),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function $t(a){let t,l;return t=new _e({props:{type:a[6]._type,src:a[6].youtubeID}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.type=e[6]._type),r&8&&(s.src=e[6].youtubeID),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function kt(a){let t,l;return t=new _e({props:{type:a[6]._type,src:"https://player.vimeo.com/video/"+a[6].vimeoId+"?title=0&byline=0&portrait=0"}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.type=e[6]._type),r&8&&(s.src="https://player.vimeo.com/video/"+e[6].vimeoId+"?title=0&byline=0&portrait=0"),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function vt(a){let t,l,e=a[1]&&ge(a);return{c(){e&&e.c(),t=k()},l(r){e&&e.l(r),t=k()},m(r,s){e&&e.m(r,s),g(r,t,s),l=!0},p(r,s){r[1]?e?(e.p(r,s),s&2&&c(e,1)):(e=ge(r),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(T(),h(e,1,1,()=>{e=null}),B())},i(r){l||(c(e),l=!0)},o(r){h(e),l=!1},d(r){e&&e.d(r),r&&_(t)}}}function bt(a){let t,l,e=a[2]&&ve(a);return{c(){e&&e.c(),t=k()},l(r){e&&e.l(r),t=k()},m(r,s){e&&e.m(r,s),g(r,t,s),l=!0},p(r,s){r[2]?e?(e.p(r,s),s&4&&c(e,1)):(e=ve(r),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(T(),h(e,1,1,()=>{e=null}),B())},i(r){l||(c(e),l=!0)},o(r){h(e),l=!1},d(r){e&&e.d(r),r&&_(t)}}}function wt(a){let t,l,e;return{c(){t=v("img"),this.h()},l(r){t=b(r,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){var r,s;p(t,"class","thumbnail"),p(t,"alt",l=(r=a[6].asset)==null?void 0:r.altText),R(t.src,e=""+(((s=a[6].asset)==null?void 0:s.url)+"?q=80&auto=format"))||p(t,"src",e)},m(r,s){g(r,t,s)},p(r,s){var f,n;s&8&&l!==(l=(f=r[6].asset)==null?void 0:f.altText)&&p(t,"alt",l),s&8&&!R(t.src,e=""+(((n=r[6].asset)==null?void 0:n.url)+"?q=80&auto=format"))&&p(t,"src",e)},i:j,o:j,d(r){r&&_(t)}}}function yt(a){let t,l;return t=new Qe({props:{rows:a[6].rows}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.rows=e[6].rows),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function Dt(a){let t,l;return t=new nt({props:{blocks:a[6].listBlocks}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.blocks=e[6].listBlocks),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function Et(a){let t,l;return t=new tt({props:{blocks:a[6].listBlocks}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&8&&(s.blocks=e[6].listBlocks),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function ge(a){let t,l,e=a[1],r=[];for(let f=0;f<e.length;f+=1)r[f]=ke(me(a,e,f));const s=f=>h(r[f],1,1,()=>{r[f]=null});return{c(){for(let f=0;f<r.length;f+=1)r[f].c();t=k()},l(f){for(let n=0;n<r.length;n+=1)r[n].l(f);t=k()},m(f,n){for(let i=0;i<r.length;i+=1)r[i].m(f,n);g(f,t,n),l=!0},p(f,n){if(n&10){e=f[1];let i;for(i=0;i<e.length;i+=1){const o=me(f,e,i);r[i]?(r[i].p(o,n),c(r[i],1)):(r[i]=ke(o),r[i].c(),c(r[i],1),r[i].m(t.parentNode,t))}for(T(),i=e.length;i<r.length;i+=1)s(i);B()}},i(f){if(!l){for(let n=0;n<e.length;n+=1)c(r[n]);l=!0}},o(f){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)h(r[n]);l=!1},d(f){K(r,f),f&&_(t)}}}function pe(a){let t,l,e,r=a[12].tournament&&$e(a);return{c(){t=v("div"),r&&r.c(),l=F(),this.h()},l(s){t=b(s,"DIV",{class:!0});var f=w(t);r&&r.l(f),l=M(f),f.forEach(_),this.h()},h(){p(t,"class","group")},m(s,f){g(s,t,f),r&&r.m(t,null),L(t,l),e=!0},p(s,f){s[12].tournament?r?(r.p(s,f),f&2&&c(r,1)):(r=$e(s),r.c(),c(r,1),r.m(t,l)):r&&(T(),h(r,1,1,()=>{r=null}),B())},i(s){e||(c(r),e=!0)},o(s){h(r),e=!1},d(s){s&&_(t),r&&r.d()}}}function $e(a){var e,r,s,f;let t,l;return t=new Me({props:{isOpenByDefault:!0,addTimeElements:!0,removePadding:!0,group:a[12].tournament.group,loading:!1,name:(e=a[12].tournament)==null?void 0:e.name,fixtureCount:a[12].tournament.activeFixtureCount,fixtureList:a[12].tournament.fixtureList,sortedTemplates:((f=(s=(r=a[12].tournament)==null?void 0:r.category)==null?void 0:s.sport)==null?void 0:f.templates)||[]}}),{c(){y(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,i){E(t,n,i),l=!0},p(n,i){var u,d,m,$;const o={};i&2&&(o.group=n[12].tournament.group),i&2&&(o.name=(u=n[12].tournament)==null?void 0:u.name),i&2&&(o.fixtureCount=n[12].tournament.activeFixtureCount),i&2&&(o.fixtureList=n[12].tournament.fixtureList),i&2&&(o.sortedTemplates=(($=(m=(d=n[12].tournament)==null?void 0:d.category)==null?void 0:m.sport)==null?void 0:$.templates)||[]),t.$set(o)},i(n){l||(c(t.$$.fragment,n),l=!0)},o(n){h(t.$$.fragment,n),l=!1},d(n){I(t,n)}}}function ke(a){var r;let t,l,e=((r=a[12].tournament)==null?void 0:r.slug)===a[6].tournament&&pe(a);return{c(){e&&e.c(),t=k()},l(s){e&&e.l(s),t=k()},m(s,f){e&&e.m(s,f),g(s,t,f),l=!0},p(s,f){var n;((n=s[12].tournament)==null?void 0:n.slug)===s[6].tournament?e?(e.p(s,f),f&10&&c(e,1)):(e=pe(s),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(T(),h(e,1,1,()=>{e=null}),B())},i(s){l||(c(e),l=!0)},o(s){h(e),l=!1},d(s){e&&e.d(s),s&&_(t)}}}function ve(a){let t,l,e=a[2],r=[];for(let f=0;f<e.length;f+=1)r[f]=we(de(a,e,f));const s=f=>h(r[f],1,1,()=>{r[f]=null});return{c(){for(let f=0;f<r.length;f+=1)r[f].c();t=k()},l(f){for(let n=0;n<r.length;n+=1)r[n].l(f);t=k()},m(f,n){for(let i=0;i<r.length;i+=1)r[i].m(f,n);g(f,t,n),l=!0},p(f,n){if(n&12){e=f[2];let i;for(i=0;i<e.length;i+=1){const o=de(f,e,i);r[i]?(r[i].p(o,n),c(r[i],1)):(r[i]=we(o),r[i].c(),c(r[i],1),r[i].m(t.parentNode,t))}for(T(),i=e.length;i<r.length;i+=1)s(i);B()}},i(f){if(!l){for(let n=0;n<e.length;n+=1)c(r[n]);l=!0}},o(f){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)h(r[n]);l=!1},d(f){K(r,f),f&&_(t)}}}function be(a){let t,l;return t=new ot({props:{market:a[9]}}),{c(){y(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,r){E(t,e,r),l=!0},p(e,r){const s={};r&4&&(s.market=e[9]),t.$set(s)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){I(t,e)}}}function we(a){let t,l,e=a[9].id===a[6].marketId&&be(a);return{c(){e&&e.c(),t=k()},l(r){e&&e.l(r),t=k()},m(r,s){e&&e.m(r,s),g(r,t,s),l=!0},p(r,s){r[9].id===r[6].marketId?e?(e.p(r,s),s&12&&c(e,1)):(e=be(r),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(T(),h(e,1,1,()=>{e=null}),B())},i(r){l||(c(e),l=!0)},o(r){h(e),l=!1},d(r){e&&e.d(r),r&&_(t)}}}function ye(a,t){let l,e,r,s,f,n;const i=[Et,Dt,yt,wt,bt,vt,kt,$t,pt,gt,dt],o=[];function u(d,m){return m&8&&(e=null),d[6].listTag==="ul"?0:d[6].listTag==="ol"?1:d[6]._type==="table"?2:d[6]._type==="image"?3:d[6]._type==="market"?4:d[6]._type==="tournament"?5:d[6]._type==="vimeo"?6:d[6]._type==="youtube"?7:d[6].style==="normal"?8:(e==null&&(e=!!d[4].includes(d[6].style)),e?9:10)}return r=u(t,-1),s=o[r]=i[r](t),{key:a,first:null,c(){l=k(),s.c(),f=k(),this.h()},l(d){l=k(),s.l(d),f=k(),this.h()},h(){this.first=l},m(d,m){g(d,l,m),o[r].m(d,m),g(d,f,m),n=!0},p(d,m){t=d;let $=r;r=u(t,m),r===$?o[r].p(t,m):(T(),h(o[$],1,1,()=>{o[$]=null}),B(),s=o[r],s?s.p(t,m):(s=o[r]=i[r](t),s.c()),c(s,1),s.m(f.parentNode,f))},i(d){n||(c(s),n=!0)},o(d){h(s),n=!1},d(d){d&&_(l),o[r].d(d),d&&_(f)}}}function It(a){let t,l=[],e=new Map,r,s=a[3];const f=n=>n[8];for(let n=0;n<s.length;n+=1){let i=he(a,s,n),o=f(i);e.set(o,l[n]=ye(o,i))}return{c(){t=v("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=b(n,"DIV",{class:!0});var i=w(t);for(let o=0;o<l.length;o+=1)l[o].l(i);i.forEach(_),this.h()},h(){p(t,"class","content-block svelte-1ukwore")},m(n,i){g(n,t,i);for(let o=0;o<l.length;o+=1)l[o].m(t,null);r=!0},p(n,[i]){i&31&&(s=n[3],T(),l=q(l,i,f,1,n,s,e,t,H,ye,null,he),B())},i(n){if(!r){for(let i=0;i<s.length;i+=1)c(l[i]);r=!0}},o(n){for(let i=0;i<l.length;i+=1)h(l[i]);r=!1},d(n){n&&_(t);for(let i=0;i<l.length;i+=1)l[i].d()}}}function Tt(a,t,l){let e,{blocks:r}=t;var s=["h1","h2","h3","h4","h5","h6"];let{headingSize:f=void 0}=t,{tournaments:n=[]}=t,{markets:i=void 0}=t;return a.$$set=o=>{"blocks"in o&&l(5,r=o.blocks),"headingSize"in o&&l(0,f=o.headingSize),"tournaments"in o&&l(1,n=o.tournaments),"markets"in o&&l(2,i=o.markets)},a.$$.update=()=>{a.$$.dirty&32&&l(3,e=mt(r))},[f,n,i,e,s,r]}class Vt extends N{constructor(t){super();z(this,t,Tt,It,V,{blocks:5,headingSize:0,tournaments:1,markets:2})}}export{Vt as S,_e as V,mt as g};