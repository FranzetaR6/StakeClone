import{S,i as F,al as L,l as A,f as h,r as q,u as g,w as z,x as _,d as m,a6 as O,V as B,e as k,j as b,c as I,a as P,m as v,b as w,o as p,v as y,s as C,t as X,g as G,h as H,B as j,k as J,n as K,aO as E,a0 as M,a1 as Q,p as R,ag as T,ai as U}from"./vendor-202ba1b8.js";import{I as N}from"./context-88a045a1.js";import{o as W}from"./index-0ce918a4.js";import{t as V,X as Y}from"./index-239f6385.js";import{T as Z}from"./index-ad8572b8.js";import{i as $}from"./index-818f9b69.js";function tt(i){let t,e,a,o;return e=new N({props:{icon:i[4]}}),{c(){t=k("div"),b(e.$$.fragment),this.h()},l(s){t=I(s,"DIV",{class:!0});var l=P(t);v(e.$$.fragment,l),l.forEach(m),this.h()},h(){w(t,"class",a="static-arrow "+i[2]+" align-"+i[1]+" svelte-12rtvy9")},m(s,l){h(s,t,l),p(e,t,null),o=!0},p(s,l){const c={};l&16&&(c.icon=s[4]),e.$set(c),(!o||l&6&&a!==(a="static-arrow "+s[2]+" align-"+s[1]+" svelte-12rtvy9"))&&w(t,"class",a)},i(s){o||(_(e.$$.fragment,s),o=!0)},o(s){g(e.$$.fragment,s),o=!1},d(s){s&&m(t),y(e)}}}function et(i){let t,e,a,o;return e=new N({props:{icon:i[4]}}),{c(){t=k("div"),b(e.$$.fragment),this.h()},l(s){t=I(s,"DIV",{class:!0});var l=P(t);v(e.$$.fragment,l),l.forEach(m),this.h()},h(){w(t,"class",a="arrow-odds "+i[2]+" align-"+i[1]+" svelte-12rtvy9")},m(s,l){h(s,t,l),p(e,t,null),o=!0},p(s,l){const c={};l&16&&(c.icon=s[4]),e.$set(c),(!o||l&6&&a!==(a="arrow-odds "+s[2]+" align-"+s[1]+" svelte-12rtvy9"))&&w(t,"class",a)},i(s){o||(_(e.$$.fragment,s),o=!0)},o(s){g(e.$$.fragment,s),o=!1},d(s){s&&m(t),y(e)}}}function it(i){let t,e,a,o;const s=[et,tt],l=[];function c(r,n){return(r[0]?typeof r[3]=="number":!0)?0:r[2]?1:-1}return~(t=c(i))&&(e=l[t]=s[t](i)),{c(){e&&e.c(),a=A()},l(r){e&&e.l(r),a=A()},m(r,n){~t&&l[t].m(r,n),h(r,a,n),o=!0},p(r,[n]){let d=t;t=c(r),t===d?~t&&l[t].p(r,n):(e&&(q(),g(l[d],1,1,()=>{l[d]=null}),z()),~t?(e=l[t],e?e.p(r,n):(e=l[t]=s[t](r),e.c()),_(e,1),e.m(a.parentNode,a)):e=null)},i(r){o||(_(e),o=!0)},o(r){g(e),o=!1},d(r){~t&&l[t].d(r),r&&m(a)}}}function nt(i,t,e){let a,o;O(i,W,f=>e(8,o=f));var s={increased:"odd-up",decreased:"odd-down"};let{odds:l}=t,{persistent:c=!1}=t,{align:r="right"}=t,{initialDirection:n=void 0}=t;var d=n,u,D=l;return B(()=>{u&&clearTimeout(u)}),i.$$set=f=>{"odds"in f&&e(5,l=f.odds),"persistent"in f&&e(0,c=f.persistent),"align"in f&&e(1,r=f.align),"initialDirection"in f&&e(6,n=f.initialDirection)},i.$$.update=()=>{i.$$.dirty&429&&l!==D&&(clearTimeout(u),e(2,d=l>D?"increased":"decreased"),e(7,D=l),e(3,u=setTimeout(()=>{if(!c)e(2,d=void 0);else switch(o){case V.any:e(2,d=void 0);case V.higher:d==="increased"&&e(2,d=void 0)}e(3,u=null)},3200))),i.$$.dirty&4&&e(4,a=s[d])},[c,r,d,u,a,l,n,D,o]}class st extends S{constructor(t){super();F(this,t,nt,it,L,{odds:5,persistent:0,align:1,initialDirection:6})}}const at=Y("oddsFormat","decimal"),rt=i=>{let t=null,e=i.toString().indexOf("E");e===-1&&(e=i.toString().indexOf("e")),e===-1?t=i.toString():t=i.toString().substring(0,e);let a=null;const o=t.toString().indexOf(".");o===-1?a=t:o===0?a=t.substring(1,t.length):o<t.length&&(a=t.substring(0,o)+t.substring(o+1,t.length));let s=a;const l=s.toString().length,c=i;let r=c.toString().length;c===0&&(r=0);const n=l-r;let d;for(d=n;d>0&&s%2==0;d--)s/=2;for(d=n;d>0&&s%5==0;d--)s/=5;return s},ot=i=>{const t=12,e=[0,1],a=[1,0],o=rt(i);let s=i,l;const c=NaN,r=Math.pow(10,-t)/2;for(let n=2;n<1e3;n++){const d=Math.floor(s);if(e[n]=d*e[n-1]+e[n-2],Math.abs(e[n])>o)return;if(a[n]=d*a[n-1]+a[n-2],l=e[n]/a[n],Math.abs(l-i)<r||l===c)return`${e[n].toString()}/${a[n].toString()}`;s=1/(s-d)}},x=i=>i>=2?(i-1)*100:-100/(i-1),lt=i=>x(i)/100,ct=i=>i>2?-1/(i-1):i-1,dt={decimal:({odds:i,format:t})=>t(i,{maximumFractionDigits:2,minimumFractionDigits:2}),fractional:({odds:i})=>ot(i-1),american:({odds:i,format:t})=>`${i>=2?"+":""}${t(x(i),{maximumFractionDigits:0,minimumFractionDigits:0})}`,indonesian:({odds:i,format:t})=>`${i>=2?"+":""}${t(lt(i),{maximumFractionDigits:2,minimumFractionDigits:0})}`,hongkong:({odds:i,format:t})=>`+${t(i-1,{maximumFractionDigits:2,minimumFractionDigits:0})}`,malaysian:({odds:i,format:t})=>`${i<=2?"+":""}${t(ct(i),{maximumFractionDigits:2,minimumFractionDigits:0})}`};function ut(i){let t;return{c(){t=X(i[2])},l(e){t=G(e,i[2])},m(e,a){h(e,t,a)},p(e,a){a&4&&H(t,e[2])},d(e){e&&m(t)}}}function ft(i){let t,e;return t=new Z({props:{variant:i[0],weight:i[1],$$slots:{default:[ut]},$$scope:{ctx:i}}}),{c(){b(t.$$.fragment)},l(a){v(t.$$.fragment,a)},m(a,o){p(t,a,o),e=!0},p(a,[o]){const s={};o&1&&(s.variant=a[0]),o&2&&(s.weight=a[1]),o&68&&(s.$$scope={dirty:o,ctx:a}),t.$set(s)},i(a){e||(_(t.$$.fragment,a),e=!0)},o(a){g(t.$$.fragment,a),e=!1},d(a){y(t,a)}}}function mt(i,t,e){let a,o,s;O(i,$,n=>e(4,o=n)),O(i,at,n=>e(5,s=n));let{odds:l}=t,{variant:c="highlighted"}=t,{weight:r="bold"}=t;return i.$$set=n=>{"odds"in n&&e(3,l=n.odds),"variant"in n&&e(0,c=n.variant),"weight"in n&&e(1,r=n.weight)},i.$$.update=()=>{i.$$.dirty&56&&e(2,a=dt[s]({odds:l,format:(n,d)=>o.number(n,d)}))},[c,r,a,l,o,s]}class gt extends S{constructor(t){super();F(this,t,mt,ft,C,{odds:3,variant:0,weight:1})}}function _t(i){let t,e,a,o,s;e=new gt({props:{variant:i[1]?"highlighted":"action",odds:i[0]}}),o=new st({props:{align:i[3],persistent:i[2],odds:i[0]}});let l=[{class:"odds"},{"data-test":"odds"},i[4]],c={};for(let r=0;r<l.length;r+=1)c=j(c,l[r]);return{c(){t=k("div"),b(e.$$.fragment),a=J(),b(o.$$.fragment),this.h()},l(r){t=I(r,"DIV",{class:!0,"data-test":!0});var n=P(t);v(e.$$.fragment,n),a=K(n),v(o.$$.fragment,n),n.forEach(m),this.h()},h(){E(t,c),M(t,"svelte-bbfzn7",!0)},m(r,n){h(r,t,n),p(e,t,null),Q(t,a),p(o,t,null),s=!0},p(r,[n]){const d={};n&2&&(d.variant=r[1]?"highlighted":"action"),n&1&&(d.odds=r[0]),e.$set(d);const u={};n&8&&(u.align=r[3]),n&4&&(u.persistent=r[2]),n&1&&(u.odds=r[0]),o.$set(u),E(t,c=R(l,[{class:"odds"},{"data-test":"odds"},n&16&&r[4]])),M(t,"svelte-bbfzn7",!0)},i(r){s||(_(e.$$.fragment,r),_(o.$$.fragment,r),s=!0)},o(r){g(e.$$.fragment,r),g(o.$$.fragment,r),s=!1},d(r){r&&m(t),y(e),y(o)}}}function ht(i,t,e){const a=["odds","selected","persistent","alignArrow"];let o=T(t,a),{odds:s}=t,{selected:l=!1}=t,{persistent:c=!1}=t,{alignArrow:r="right"}=t;return i.$$set=n=>{t=j(j({},t),U(n)),e(4,o=T(t,a)),"odds"in n&&e(0,s=n.odds),"selected"in n&&e(1,l=n.selected),"persistent"in n&&e(2,c=n.persistent),"alignArrow"in n&&e(3,r=n.alignArrow)},[s,l,c,r,o]}class St extends S{constructor(t){super();F(this,t,ht,_t,C,{odds:0,selected:1,persistent:2,alignArrow:3})}}export{St as O,dt as a,gt as b,at as o};