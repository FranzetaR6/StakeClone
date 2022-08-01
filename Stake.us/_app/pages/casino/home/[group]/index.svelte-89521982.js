import{a7 as D,S as I,i as E,s as O,e as x,c as H,a as z,d as f,b as B,f as p,u as k,w as A,x as d,j as N,k as h,l as C,m as $,n as G,o as j,v as y,a6 as T,r as F,t as _,g,h as b}from"../../../../chunks/vendor-202ba1b8.js";import{G as M}from"../../../../chunks/GameKuratorGroup.generated-46acdc10.js";import{G as Q}from"../../../../chunks/GameKuratorGroupGame.generated-133f4475.js";import{at as U}from"../../../../chunks/index-239f6385.js";import{i as J}from"../../../../chunks/index-818f9b69.js";import{p as P}from"../../../../chunks/stores-5d02eee0.js";import{g as S}from"../../../../chunks/generatePath-ae50dfa0.js";import{r as R}from"../../../../chunks/requestClient-501ba30b.js";import{p as K}from"../../../../chunks/paths-e7d101d3.js";import{K as W}from"../../../../chunks/index-4cd42c1b.js";import{L}from"../../../../chunks/index-21535704.js";import"../../../../chunks/goto-7d4088c3.js";import"../../../../chunks/singletons-4b6b0cdf.js";import"../../../../chunks/types-0152c01c.js";import"../../../../chunks/index-9cf645ec.js";import"../../../../chunks/index-481a1ccf.js";import"../../../../chunks/index-743ec33a.js";import"../../../../chunks/context-88a045a1.js";import"../../../../chunks/context-8abb743c.js";import"../../../../chunks/index-6d40b083.js";import"../../../../chunks/context-cc7b6928.js";import"../../../../chunks/helpers-d1c659e2.js";const X={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SlugKuratorGroupHome"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"GameKuratorGroupGameSortEnum"}},defaultValue:{kind:"EnumValue",value:"popular"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slugKuratorGroup"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGroup"}},{kind:"Field",name:{kind:"Name",value:"gameCount"}},{kind:"Field",name:{kind:"Name",value:"groupGamesList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGroupGame"}}]}}]}}]}},...M.definitions,...Q.definitions]};var v={viewAll:D._("View All"),slots:D._("Slots")};function q(u){let a,t,e,o;const n=[Z,Y],l=[];function i(s,m){return s[3]?0:1}return t=i(u),e=l[t]=n[t](u),{c(){a=x("div"),e.c(),this.h()},l(s){a=H(s,"DIV",{class:!0});var m=z(a);e.l(m),m.forEach(f),this.h()},h(){B(a,"class","view-all-wrapper svelte-15zihee")},m(s,m){p(s,a,m),l[t].m(a,null),o=!0},p(s,m){let r=t;t=i(s),t===r?l[t].p(s,m):(F(),k(l[r],1,1,()=>{l[r]=null}),A(),e=l[t],e?e.p(s,m):(e=l[t]=n[t](s),e.c()),d(e,1),e.m(a,null))},i(s){o||(d(e),o=!0)},o(s){k(e),o=!1},d(s){s&&f(a),l[t].d()}}}function Y(u){let a,t;return a=new L({props:{disabled:!1,variant:"game",square:!0,loading:!1,prefetch:!0,align:"center",to:S(K.casinoGroup,{groupSlug:u[1].to}),active:!1,$$slots:{default:[ee]},$$scope:{ctx:u}}}),{c(){N(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,o){j(a,e,o),t=!0},p(e,o){const n={};o&2&&(n.to=S(K.casinoGroup,{groupSlug:e[1].to})),o&147&&(n.$$scope={dirty:o,ctx:e}),a.$set(n)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){k(a.$$.fragment,e),t=!1},d(e){y(a,e)}}}function Z(u){let a,t;return a=new L({props:{disabled:!1,variant:"game",square:!0,loading:!1,align:"center",prefetch:!0,to:S(K.casinoGroup,{groupSlug:"slots"}),active:!1,$$slots:{default:[ae]},$$scope:{ctx:u}}}),{c(){N(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,o){j(a,e,o),t=!0},p(e,o){const n={};o&144&&(n.$$scope={dirty:o,ctx:e}),a.$set(n)},i(e){t||(d(a.$$.fragment,e),t=!0)},o(e){k(a.$$.fragment,e),t=!1},d(e){y(a,e)}}}function ee(u){var m;let a=u[4]._(v.viewAll)+"",t,e,o=((m=u[0])==null?void 0:m.gameCount)+"",n,l,i=u[1].name+"",s;return{c(){t=_(a),e=h(),n=_(o),l=h(),s=_(i)},l(r){t=g(r,a),e=G(r),n=g(r,o),l=G(r),s=g(r,i)},m(r,c){p(r,t,c),p(r,e,c),p(r,n,c),p(r,l,c),p(r,s,c)},p(r,c){var V;c&16&&a!==(a=r[4]._(v.viewAll)+"")&&b(t,a),c&1&&o!==(o=((V=r[0])==null?void 0:V.gameCount)+"")&&b(n,o),c&2&&i!==(i=r[1].name+"")&&b(s,i)},d(r){r&&f(t),r&&f(e),r&&f(n),r&&f(l),r&&f(s)}}}function ae(u){let a=u[4]._(v.viewAll)+"",t,e,o=u[4]._(v.slots)+"",n;return{c(){t=_(a),e=h(),n=_(o)},l(l){t=g(l,a),e=G(l),n=g(l,o)},m(l,i){p(l,t,i),p(l,e,i),p(l,n,i)},p(l,i){i&16&&a!==(a=l[4]._(v.viewAll)+"")&&b(t,a),i&16&&o!==(o=l[4]._(v.slots)+"")&&b(n,o)},d(l){l&&f(t),l&&f(e),l&&f(n)}}}function te(u){var l;let a,t,e,o;a=new W({props:{loading:!1,list:u[2],group:u[0]}});let n=((l=u[0])==null?void 0:l.gameCount)>w&&q(u);return{c(){N(a.$$.fragment),t=h(),n&&n.c(),e=C()},l(i){$(a.$$.fragment,i),t=G(i),n&&n.l(i),e=C()},m(i,s){j(a,i,s),p(i,t,s),n&&n.m(i,s),p(i,e,s),o=!0},p(i,[s]){var r;const m={};s&4&&(m.list=i[2]),s&1&&(m.group=i[0]),a.$set(m),((r=i[0])==null?void 0:r.gameCount)>w?n?(n.p(i,s),s&1&&d(n,1)):(n=q(i),n.c(),d(n,1),n.m(e.parentNode,e)):n&&(F(),k(n,1,1,()=>{n=null}),A())},i(i){o||(d(a.$$.fragment,i),d(n),o=!0)},o(i){k(a.$$.fragment,i),k(n),o=!1},d(i){y(a,i),i&&f(t),n&&n.d(i),i&&f(e)}}}var ne=globalThis&&globalThis.__awaiter||function(u,a,t,e){function o(n){return n instanceof t?n:new t(function(l){l(n)})}return new(t||(t=Promise))(function(n,l){function i(r){try{m(e.next(r))}catch(c){l(c)}}function s(r){try{m(e.throw(r))}catch(c){l(c)}}function m(r){r.done?n(r.value):o(r.value).then(i,s)}m((e=e.apply(u,a||[])).next())})},w=21,ie={limit:w,offset:0,sort:U.userCount};function we(u){var a;return ne(this,void 0,void 0,function*(){try{var t=yield R({doc:X,variables:Object.assign(Object.assign({},ie),{slug:u.page.params.group}),load:u,cache:{name:"casino-home-"+u.page.params.group}});return{props:{slugKuratorGroup:(a=t==null?void 0:t.data)===null||a===void 0?void 0:a.slugKuratorGroup}}}catch{return{props:{slugKuratorGroup:void 0}}}})}function re(u,a,t){let e,o,n,l,i,s;T(u,P,r=>t(6,i=r)),T(u,J,r=>t(4,s=r));let{slugKuratorGroup:m}=a;return u.$$set=r=>{"slugKuratorGroup"in r&&t(0,m=r.slugKuratorGroup)},u.$$.update=()=>{u.$$.dirty&64&&t(5,e=i.params.group),u.$$.dirty&32&&t(3,o=e==="featured-slots"),u.$$.dirty&1&&t(2,n=(m==null?void 0:m.groupGamesList)||[]),u.$$.dirty&1&&t(1,l={to:(m==null?void 0:m.slug)||"",name:m==null?void 0:m.translation})},[m,l,n,o,s,e,i]}class Ve extends I{constructor(a){super();E(this,a,re,te,O,{slugKuratorGroup:0})}}export{Ve as default,we as load};
