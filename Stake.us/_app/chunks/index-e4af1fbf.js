import{S as P,i as U,s as k,e as g,j as c,c as h,a as d,m as _,d as o,b as m,a0 as b,f as v,o as y,x as w,u as j,v as z}from"./vendor-202ba1b8.js";import{g as C}from"./generatePath-ae50dfa0.js";import{p as G}from"./paths-e7d101d3.js";import{L as S}from"./index-21535704.js";import{I as q}from"./index-481a1ccf.js";function D(l){let e,s,n,a;return s=new q({props:{src:l[1],width:200,imgixParams:{q:50},alt:l[0],draggable:!1}}),{c(){e=g("div"),c(s.$$.fragment),this.h()},l(t){e=h(t,"DIV",{class:!0});var i=d(e);_(s.$$.fragment,i),i.forEach(o),this.h()},h(){m(e,"class",n="img-wrap "+l[6][l[2]]+" svelte-bfcg5l")},m(t,i){v(t,e,i),y(s,e,null),a=!0},p(t,i){const f={};i&2&&(f.src=t[1]),i&1&&(f.alt=t[0]),s.$set(f),(!a||i&4&&n!==(n="img-wrap "+t[6][t[2]]+" svelte-bfcg5l"))&&m(e,"class",n)},i(t){a||(w(s.$$.fragment,t),a=!0)},o(t){j(s.$$.fragment,t),a=!1},d(t){t&&o(e),z(s)}}}function E(l){let e,s,n;return s=new S({props:{prefetch:!0,to:l[5],$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){e=g("div"),c(s.$$.fragment),this.h()},l(a){e=h(a,"DIV",{class:!0,style:!0});var t=d(e);_(s.$$.fragment,t),t.forEach(o),this.h()},h(){m(e,"class","wrap svelte-bfcg5l"),m(e,"style",l[3]),b(e,"is-mobile",l[4])},m(a,t){v(a,e,t),y(s,e,null),n=!0},p(a,[t]){const i={};t&263&&(i.$$scope={dirty:t,ctx:a}),s.$set(i),(!n||t&8)&&m(e,"style",a[3]),t&16&&b(e,"is-mobile",a[4])},i(a){n||(w(s.$$.fragment,a),n=!0)},o(a){j(s.$$.fragment,a),n=!1},d(a){a&&o(e),z(s)}}}function L(l,e,s){let{slug:n=void 0}=e,{name:a=void 0}=e,{thumbnailUrl:t}=e,{size:i="1/1"}=e,{style:f=void 0}=e,{isMobile:u=!1}=e;var I=n&&C(G.casinoGroup,{groupSlug:n})||"",M={"5/2":"five-by-two","1/1":"one-by-one","27/17":"twenty-seven-by-seventeen"};return l.$$set=r=>{"slug"in r&&s(7,n=r.slug),"name"in r&&s(0,a=r.name),"thumbnailUrl"in r&&s(1,t=r.thumbnailUrl),"size"in r&&s(2,i=r.size),"style"in r&&s(3,f=r.style),"isMobile"in r&&s(4,u=r.isMobile)},[a,t,i,f,u,I,M,n]}class H extends P{constructor(e){super();U(this,e,L,E,k,{slug:7,name:0,thumbnailUrl:1,size:2,style:3,isMobile:4})}}export{H as G};
