var Q=Object.defineProperty,R=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var B=(o,e,t)=>e in o?Q(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,C=(o,e)=>{for(var t in e||(e={}))Y.call(e,t)&&B(o,t,e[t]);if(A)for(var t of A(e))Z.call(e,t)&&B(o,t,e[t]);return o},N=(o,e)=>R(o,X(e));import{S as ee,i as te,s as ne,j as h,m as b,o as k,x as g,u as _,v as y,k as S,l as V,n as F,f as $,w as P,d,C as re,a6 as D,bb as se,r as L,ae as I,e as T,t as M,c as E,a as q,g as O,a1 as U,h as W,b as ae}from"../../../chunks/vendor-202ba1b8.js";import{g as z}from"../../../chunks/groq-c0f2c31a.js";import{g as oe,c as G}from"../../../chunks/seoPagination-afc11076.js";import{P as ie}from"../../../chunks/Pagination-da9ca162.js";import{A as le}from"../../../chunks/index-a9ff2195.js";import{B as ce}from"../../../chunks/index-7d3816e9.js";import{M as ue}from"../../../chunks/index-caf95cd0.js";import{i as fe}from"../../../chunks/index-818f9b69.js";import{c as me}from"../../../chunks/combineLocales-b921b40a.js";import{p as pe}from"../../../chunks/stores-5d02eee0.js";import{E as ge}from"../../../chunks/index-e9c9b175.js";import{E as _e}from"../../../chunks/index-9189cc34.js";import{m as w}from"../../../chunks/messages-3f66014d.js";import"../../../chunks/index-78395626.js";import"../../../chunks/index-239f6385.js";import"../../../chunks/goto-7d4088c3.js";import"../../../chunks/singletons-4b6b0cdf.js";import"../../../chunks/scrollTopContainer-79821d29.js";import"../../../chunks/index-4e53ca7a.js";import"../../../chunks/context-88a045a1.js";import"../../../chunks/types-0152c01c.js";import"../../../chunks/context-8abb743c.js";import"../../../chunks/index-5469be8d.js";/* empty css                                                          */import"../../../chunks/index-ad8572b8.js";import"../../../chunks/index-dde39cdb.js";import"../../../chunks/index-6a93cc39.js";import"../../../chunks/helpers-3511dbf4.js";import"../../../chunks/index-743ec33a.js";/* empty css                                                           */const de=z` {
    "promotions": * [
        _type == "promotionFresh" 
        && __i18n_lang == $lang 
        && !(_id in path("drafts.**")) 
        && (singleLanguage == 'all' || singleLanguage == $lang )
        && references(*[_type == 'category' && slug.current == $category]._id)
      ]
    | order(order asc) [$start...$end]
    {
      ...,
      'image': {
        'asset': image.asset->{url,altText}
      }
    },
    "fallbackPromotions": * [
        _type == "promotionFresh" 
        && __i18n_lang == "en"
        && singleLanguage == 'all' 
        && references(*[_type == 'category' && slug.current == $category]._id)
      ]
    | order(order asc) [$start...$end]
    {
      ...,
      'image': {
        'asset': image.asset->{url,altText}
      }
    },
    "categories": * [_type == "category" && slug.current == $category] {
      name,
      slug,
        'image': { 'asset': image.asset->{ url }  }
      }
  }`();z` {
    "promotions": * [
        _type == "promotionFresh" 
        && __i18n_lang == $lang 
        && !(_id in path("drafts.**")) &&
        references(*[_type == 'category' && slug.current == $category]._id)
      ]
    | order(order asc) [$start...$end]
    {
      ...,
      'image': {
        'asset': image.asset->{url,altText}
      }
    },
    "fallbackPromotions": * [
        _type == "promotionFresh" &&
         __i18n_lang == "en" 
         && references(*[_type == 'category' && slug.current == $category]._id)
      ]
    | order(order asc) [$start...$end]
    {
      ...,
      'image': {
        'asset': image.asset->{url,altText}
      }
    },
  }`();function H(o){var n;let e,t;return e=new ce({props:{title:(n=o[0])==null?void 0:n.name,loading:o[5]}}),{c(){h(e.$$.fragment)},l(r){b(e.$$.fragment,r)},m(r,a){k(e,r,a),t=!0},p(r,a){var c;const i={};a&1&&(i.title=(c=r[0])==null?void 0:c.name),a&32&&(i.loading=r[5]),e.$set(i)},i(r){t||(g(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){y(e,r)}}}function he(o){var f;let e,t,n,r,a;const i=[$e,ye,ke],c=[];function u(s,l){var p;return s[5]?0:((p=s[1])==null?void 0:p.length)===0?1:2}return e=u(o),t=c[e]=i[e](o),r=new ie({props:{limit:J,offset:o[2]-1,listLength:((f=o[1])==null?void 0:f.length)||0}}),r.$on("previous",o[8]),r.$on("next",o[9]),{c(){t.c(),n=S(),h(r.$$.fragment)},l(s){t.l(s),n=F(s),b(r.$$.fragment,s)},m(s,l){c[e].m(s,l),$(s,n,l),k(r,s,l),a=!0},p(s,l){var v;let p=e;e=u(s),e===p?c[e].p(s,l):(L(),_(c[p],1,1,()=>{c[p]=null}),P(),t=c[e],t?t.p(s,l):(t=c[e]=i[e](s),t.c()),g(t,1),t.m(n.parentNode,n));const j={};l&4&&(j.offset=s[2]-1),l&2&&(j.listLength=((v=s[1])==null?void 0:v.length)||0),r.$set(j)},i(s){a||(g(t),g(r.$$.fragment,s),a=!0)},o(s){_(t),_(r.$$.fragment,s),a=!1},d(s){c[e].d(s),s&&d(n),y(r,s)}}}function be(o){let e,t;return e=new ge({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,r){k(e,n,r),t=!0},p(n,r){const a={};r&1088&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function ke(o){let e,t;return e=new le({props:{articles:o[1].map(K)}}),{c(){h(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,r){k(e,n,r),t=!0},p(n,r){const a={};r&2&&(a.articles=n[1].map(K)),e.$set(a)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function ye(o){let e,t,n;return t=new _e({props:{icon:"empty-promotions",$$slots:{default:[je]},$$scope:{ctx:o}}}),{c(){e=T("div"),h(t.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0});var a=q(e);b(t.$$.fragment,a),a.forEach(d),this.h()},h(){ae(e,"class","empty-list-wrap svelte-1kaqqkg")},m(r,a){$(r,e,a),k(t,e,null),n=!0},p(r,a){const i={};a&1088&&(i.$$scope={dirty:a,ctx:r}),t.$set(i)},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){_(t.$$.fragment,r),n=!1},d(r){r&&d(e),y(t)}}}function $e(o){let e,t;return e=new ue({}),{c(){h(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,r){k(e,n,r),t=!0},p:I,i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function je(o){let e,t=o[6]._(w.noPromotions)+"",n;return{c(){e=T("span"),n=M(t)},l(r){e=E(r,"SPAN",{});var a=q(e);n=O(a,t),a.forEach(d)},m(r,a){$(r,e,a),U(e,n)},p(r,a){a&64&&t!==(t=r[6]._(w.noPromotions)+"")&&W(n,t)},d(r){r&&d(e)}}}function ve(o){let e,t=o[6]._(w.failedToLoadPromotions)+"",n;return{c(){e=T("span"),n=M(t)},l(r){e=E(r,"SPAN",{});var a=q(e);n=O(a,t),a.forEach(d)},m(r,a){$(r,e,a),U(e,n)},p(r,a){a&64&&t!==(t=r[6]._(w.failedToLoadPromotions)+"")&&W(n,t)},d(r){r&&d(e)}}}function we(o){let e,t,n,r,a,i=o[0]&&H(o);const c=[be,he],u=[];function f(s,l){return s[4]?0:1}return t=f(o),n=u[t]=c[t](o),{c(){i&&i.c(),e=S(),n.c(),r=V()},l(s){i&&i.l(s),e=F(s),n.l(s),r=V()},m(s,l){i&&i.m(s,l),$(s,e,l),u[t].m(s,l),$(s,r,l),a=!0},p(s,[l]){s[0]?i?(i.p(s,l),l&1&&g(i,1)):(i=H(s),i.c(),g(i,1),i.m(e.parentNode,e)):i&&(L(),_(i,1,1,()=>{i=null}),P());let p=t;t=f(s),t===p?u[t].p(s,l):(L(),_(u[p],1,1,()=>{u[p]=null}),P(),n=u[t],n?n.p(s,l):(n=u[t]=c[t](s),n.c()),g(n,1),n.m(r.parentNode,r))},i(s){a||(g(i),g(n),a=!0)},o(s){_(i),_(n),a=!1},d(s){i&&i.d(s),s&&d(e),u[t].d(s),s&&d(r)}}}var xe=globalThis&&globalThis.__awaiter||function(o,e,t,n){function r(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function c(s){try{f(n.next(s))}catch(l){i(l)}}function u(s){try{f(n.throw(s))}catch(l){i(l)}}function f(s){s.done?a(s.value):r(s.value).then(c,u)}f((n=n.apply(o,e||[])).next())})},J=9,x=re(!1);function st(o){return xe(this,void 0,void 0,function*(){try{x.set(!0);var e=o.page.params.category,{startValue:t,endValue:n,pageValue:r}=oe(o,J);if(t===null)return{props:{error:!0}};var{promotions:a,categories:i,fallbackPromotions:c}=yield de.load(o,{start:t,end:n,lang:o.session.locale,category:e}),u=me({original:a,fallback:c});return x.set(!1),{props:{promotions:u.map(f=>Object.assign(Object.assign({},f),{name:f.title})),category:i==null?void 0:i[0],pageValue:r,loading:x,error:!1}}}catch{return{props:{promotions:void 0,category:void 0,pageValue:0,loading:x,error:!0}}}})}const K=o=>N(C({},o),{url:`/promotions/promotion/${o.slug.current}`});function Pe(o,e,t){let n,r=I,a=()=>(r(),r=se(l,m=>t(5,n=m)),l),i,c;D(o,fe,m=>t(6,i=m)),D(o,pe,m=>t(7,c=m)),o.$$.on_destroy.push(()=>r());let{category:u}=e,{promotions:f}=e,{pageValue:s}=e,{loading:l}=e;a();let{error:p}=e;const j=()=>G({action:"previous",pageValue:s,page:c}),v=()=>G({action:"next",pageValue:s,page:c});return o.$$set=m=>{"category"in m&&t(0,u=m.category),"promotions"in m&&t(1,f=m.promotions),"pageValue"in m&&t(2,s=m.pageValue),"loading"in m&&a(t(3,l=m.loading)),"error"in m&&t(4,p=m.error)},[u,f,s,l,p,n,i,c,j,v]}class at extends ee{constructor(e){super();te(this,e,Pe,we,ne,{category:0,promotions:1,pageValue:2,loading:3,error:4})}}export{at as default,st as load};
