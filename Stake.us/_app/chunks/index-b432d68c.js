import{a7 as O,S as Q,i as R,s as W,l as h,f as b,r as T,u as d,w as G,x as m,d as g,a6 as Y,j as S,m as j,o as U,v as V,e as E,k as X,c as M,a as N,n as z,b as Z,a0 as K,a1 as q,a8 as I,a9 as A,t as x,g as ee,h as le}from"./vendor-202ba1b8.js";import{K as te}from"./KuratorCollection.generated-2ea99aa6.js";import{K as re}from"./index-239f6385.js";import{i as oe}from"./index-818f9b69.js";import{G as L}from"./index-e4af1fbf.js";import{C as ie}from"./index-6d40b083.js";import{G as se,S as ne}from"./Slide-a5b49d5e.js";import{g as ae}from"./helpers-d1c659e2.js";import{r as fe}from"./requestClient-501ba30b.js";var P={providers:O._("Providers")};function y(f,e,r){const l=f.slice();return l[8]=e[r],l}function B(f,e,r){const l=f.slice();return l[8]=e[r],l[10]=r,l}function F(f){let e,r,l,t;const o=[ce,ue],u=[];function a(s,c){return s[1]?0:1}return e=a(f),r=u[e]=o[e](f),{c(){r.c(),l=h()},l(s){r.l(s),l=h()},m(s,c){u[e].m(s,c),b(s,l,c),t=!0},p(s,c){let n=e;e=a(s),e===n?u[e].p(s,c):(T(),d(u[n],1,1,()=>{u[n]=null}),G(),r=u[e],r?r.p(s,c):(r=u[e]=o[e](s),r.c()),m(r,1),r.m(l.parentNode,l))},i(s){t||(m(r),t=!0)},o(s){d(r),t=!1},d(s){u[e].d(s),s&&g(l)}}}function ue(f){let e,r,l,t,o=[],u=new Map,a;r=new ie({props:{icon:"group-providers",to:"/casino/collections/provider",$$slots:{default:[_e]},$$scope:{ctx:f}}});let s=f[2];const c=n=>n[8].id;for(let n=0;n<s.length;n+=1){let i=y(f,s,n),_=c(i);u.set(_,o[n]=H(_,i))}return{c(){e=E("div"),S(r.$$.fragment),l=X(),t=E("div");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=M(n,"DIV",{});var i=N(e);j(r.$$.fragment,i),l=z(i),t=M(i,"DIV",{class:!0});var _=N(t);for(let p=0;p<o.length;p+=1)o[p].l(_);_.forEach(g),i.forEach(g),this.h()},h(){Z(t,"class","wrap scrollX svelte-1nkmpx3"),K(t,"wrap",f[1]),K(t,"scrollX",f[1])},m(n,i){b(n,e,i),U(r,e,null),q(e,l),q(e,t);for(let _=0;_<o.length;_+=1)o[_].m(t,null);a=!0},p(n,i){const _={};i&8320&&(_.$$scope={dirty:i,ctx:n}),r.$set(_),i&4&&(s=n[2],T(),o=I(o,i,c,1,n,s,u,t,A,H,null,y),G()),i&2&&K(t,"wrap",n[1]),i&2&&K(t,"scrollX",n[1])},i(n){if(!a){m(r.$$.fragment,n);for(let i=0;i<s.length;i+=1)m(o[i]);a=!0}},o(n){d(r.$$.fragment,n);for(let i=0;i<o.length;i+=1)d(o[i]);a=!1},d(n){n&&g(e),V(r);for(let i=0;i<o.length;i+=1)o[i].d()}}}function ce(f){var l;let e,r;return e=new se({props:{group:{to:"/casino/collection/provider",translation:f[7]._(P.providers),icon:"group-providers"},slideCount:(l=f[2])==null?void 0:l.length,mobileView:f[3],gap:f[6],slidesToScroll:f[4],slidesToShow:f[5],width:f[0],$$slots:{default:[pe]},$$scope:{ctx:f}}}),{c(){S(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,o){U(e,t,o),r=!0},p(t,o){var a;const u={};o&128&&(u.group={to:"/casino/collection/provider",translation:t[7]._(P.providers),icon:"group-providers"}),o&4&&(u.slideCount=(a=t[2])==null?void 0:a.length),o&8&&(u.mobileView=t[3]),o&64&&(u.gap=t[6]),o&16&&(u.slidesToScroll=t[4]),o&32&&(u.slidesToShow=t[5]),o&1&&(u.width=t[0]),o&8260&&(u.$$scope={dirty:o,ctx:t}),e.$set(u)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){V(e,t)}}}function _e(f){let e,r=f[7]._(P.providers)+"",l;return{c(){e=E("span"),l=x(r)},l(t){e=M(t,"SPAN",{});var o=N(e);l=ee(o,r),o.forEach(g)},m(t,o){b(t,e,o),q(e,l)},p(t,o){o&128&&r!==(r=t[7]._(P.providers)+"")&&le(l,r)},d(t){t&&g(e)}}}function H(f,e){var o,u,a,s,c,n;let r,l,t;return l=new L({props:{size:"5/2",name:(u=(o=e[8])==null?void 0:o.group)==null?void 0:u.name,slug:(s=(a=e[8])==null?void 0:a.group)==null?void 0:s.slug,thumbnailUrl:(n=(c=e[8])==null?void 0:c.group)==null?void 0:n.thumbnailUrl,loading:!1}}),{key:f,first:null,c(){r=h(),S(l.$$.fragment),this.h()},l(i){r=h(),j(l.$$.fragment,i),this.h()},h(){this.first=r},m(i,_){b(i,r,_),U(l,i,_),t=!0},p(i,_){var k,v,$,w,C,D;e=i;const p={};_&4&&(p.name=(v=(k=e[8])==null?void 0:k.group)==null?void 0:v.name),_&4&&(p.slug=(w=($=e[8])==null?void 0:$.group)==null?void 0:w.slug),_&4&&(p.thumbnailUrl=(D=(C=e[8])==null?void 0:C.group)==null?void 0:D.thumbnailUrl),l.$set(p)},i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){d(l.$$.fragment,i),t=!1},d(i){i&&g(r),V(l,i)}}}function me(f){var t,o,u,a,s,c;let e,r,l;return e=new L({props:{size:"5/2",name:(o=(t=f[8])==null?void 0:t.group)==null?void 0:o.translation,slug:(a=(u=f[8])==null?void 0:u.group)==null?void 0:a.slug,thumbnailUrl:(c=(s=f[8])==null?void 0:s.group)==null?void 0:c.thumbnailUrl,loading:!1,isMobile:f[6]===5}}),{c(){S(e.$$.fragment),r=X()},l(n){j(e.$$.fragment,n),r=z(n)},m(n,i){U(e,n,i),b(n,r,i),l=!0},p(n,i){var p,k,v,$,w,C;const _={};i&4&&(_.name=(k=(p=n[8])==null?void 0:p.group)==null?void 0:k.translation),i&4&&(_.slug=($=(v=n[8])==null?void 0:v.group)==null?void 0:$.slug),i&4&&(_.thumbnailUrl=(C=(w=n[8])==null?void 0:w.group)==null?void 0:C.thumbnailUrl),i&64&&(_.isMobile=n[6]===5),e.$set(_)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){d(e.$$.fragment,n),l=!1},d(n){V(e,n),n&&g(r)}}}function J(f,e){let r,l,t;return l=new ne({props:{index:e[10],$$slots:{default:[me]},$$scope:{ctx:e}}}),{key:f,first:null,c(){r=h(),S(l.$$.fragment),this.h()},l(o){r=h(),j(l.$$.fragment,o),this.h()},h(){this.first=r},m(o,u){b(o,r,u),U(l,o,u),t=!0},p(o,u){e=o;const a={};u&4&&(a.index=e[10]),u&8260&&(a.$$scope={dirty:u,ctx:e}),l.$set(a)},i(o){t||(m(l.$$.fragment,o),t=!0)},o(o){d(l.$$.fragment,o),t=!1},d(o){o&&g(r),V(l,o)}}}function pe(f){let e=[],r=new Map,l,t,o=f[2];const u=a=>a[8].id;for(let a=0;a<o.length;a+=1){let s=B(f,o,a),c=u(s);r.set(c,e[a]=J(c,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=h()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);l=h()},m(a,s){for(let c=0;c<e.length;c+=1)e[c].m(a,s);b(a,l,s),t=!0},p(a,s){s&68&&(o=a[2],T(),e=I(e,s,u,1,a,o,r,l.parentNode,A,J,l,B),G())},i(a){if(!t){for(let s=0;s<o.length;s+=1)m(e[s]);t=!0}},o(a){for(let s=0;s<e.length;s+=1)d(e[s]);t=!1},d(a){for(let s=0;s<e.length;s+=1)e[s].d(a);a&&g(l)}}}function de(f){let e,r,l=f[2]&&F(f);return{c(){l&&l.c(),e=h()},l(t){l&&l.l(t),e=h()},m(t,o){l&&l.m(t,o),b(t,e,o),r=!0},p(t,[o]){t[2]?l?(l.p(t,o),o&4&&m(l,1)):(l=F(t),l.c(),m(l,1),l.m(e.parentNode,e)):l&&(T(),d(l,1,1,()=>{l=null}),G())},i(t){r||(m(l),r=!0)},o(t){d(l),r=!1},d(t){l&&l.d(t),t&&g(e)}}}function Ue(f){var{load:e}=f;return fe({load:e,doc:te,variables:{type:re.provider},cache:{name:"kurator-collection-providers"}})}function ge(f,e,r){let l,t,o,u;Y(f,oe,i=>r(7,u=i));let{width:a}=e,{slidey:s}=e,{kuratorCollection:c=[]}=e,{mobileView:n=!1}=e;return f.$$set=i=>{"width"in i&&r(0,a=i.width),"slidey"in i&&r(1,s=i.slidey),"kuratorCollection"in i&&r(2,c=i.kuratorCollection),"mobileView"in i&&r(3,n=i.mobileView)},f.$$.update=()=>{f.$$.dirty&1&&r(6,{gap:l,slidesToShow:t,slidesToScroll:o}=ae(a),l,(r(5,t),r(0,a)),(r(4,o),r(0,a)))},[a,s,c,n,o,t,l,u]}class Ve extends Q{constructor(e){super();R(this,e,ge,de,W,{width:0,slidey:1,kuratorCollection:2,mobileView:3})}}export{Ve as P,Ue as f};