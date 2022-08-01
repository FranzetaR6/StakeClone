import{S as g,a as S,b as v}from"./CompetitorFragment.generated-fe61321c.js";import{S as _}from"./SportFixtureEventStatus.generated-36e4eb90.js";import{T as h}from"./TournamentTree.generated-2e859bf6.js";import{S as F,i as N,s as b,j as D,m as $,o as x,x as m,u as c,v as T,e as M,c as y,a as j,d,b as w,f as u,r as O,w as I,a4 as V,t as L,k as q,g as C,n as E,h as z}from"./vendor-202ba1b8.js";import{L as A}from"./index-21535704.js";import"./index-f3ec258a.js";const W={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SportMarketNews"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"marketId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sportMarket"},arguments:[{kind:"Argument",name:{kind:"Name",value:"marketId"},value:{kind:"Variable",name:{kind:"Name",value:"marketId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportMarket"}},{kind:"Field",name:{kind:"Name",value:"outcomes"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportMarketOutcome"}}]}},{kind:"Field",name:{kind:"Name",value:"fixture"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"status"}},{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportFixtureDataMatch"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SportFixtureDataOutright"}},{kind:"Field",name:{kind:"Name",value:"__typename"}}]}},{kind:"Field",name:{kind:"Name",value:"tournament"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"TournamentTree"}}]}}]}}]}}]}},...g.definitions,..._.definitions,...S.definitions,...v.definitions,...h.definitions]};function f(l,n,r){const t=l.slice();return t[1]=n[r],t}function B(l){let n=l[1].name+"",r,t;return{c(){r=L(n),t=q()},l(e){r=C(e,n),t=E(e)},m(e,s){u(e,r,s),u(e,t,s)},p(e,s){s&1&&n!==(n=e[1].name+"")&&z(r,n)},d(e){e&&d(r),e&&d(t)}}}function p(l){let n,r;return n=new A({props:{size:"small",weight:"semibold",spacing:"compact",variant:"tab",to:l[1].url,$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){D(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,e){x(n,t,e),r=!0},p(t,e){const s={};e&1&&(s.to=t[1].url),e&17&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){c(n.$$.fragment,t),r=!1},d(t){T(n,t)}}}function G(l){let n,r,t=l[0],e=[];for(let a=0;a<t.length;a+=1)e[a]=p(f(l,t,a));const s=a=>c(e[a],1,1,()=>{e[a]=null});return{c(){n=M("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){n=y(a,"DIV",{class:!0});var o=j(n);for(let i=0;i<e.length;i+=1)e[i].l(o);o.forEach(d),this.h()},h(){w(n,"class","tag-list svelte-a1vtnd")},m(a,o){u(a,n,o);for(let i=0;i<e.length;i+=1)e[i].m(n,null);r=!0},p(a,[o]){if(o&1){t=a[0];let i;for(i=0;i<t.length;i+=1){const k=f(a,t,i);e[i]?(e[i].p(k,o),m(e[i],1)):(e[i]=p(k),e[i].c(),m(e[i],1),e[i].m(n,null))}for(O(),i=t.length;i<e.length;i+=1)s(i);I()}},i(a){if(!r){for(let o=0;o<t.length;o+=1)m(e[o]);r=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)c(e[o]);r=!1},d(a){a&&d(n),V(e,a)}}}function H(l,n,r){let{tags:t}=n;return l.$$set=e=>{"tags"in e&&r(0,t=e.tags)},[t]}class X extends F{constructor(n){super();N(this,n,H,G,b,{tags:0})}}export{W as S,X as T};