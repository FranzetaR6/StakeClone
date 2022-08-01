import{a7 as z,S as ae,i as oe,s as ce,B as ue,j as x,m as y,o as S,x as h,u as g,v as G,e as A,t as V,c as C,a as E,g as F,d as _,b as Q,f as j,a1 as Y,h as H,k as P,n as D,p as le,q as fe,w as K,a6 as I,r as q,l as B,a4 as me,ae as J}from"../../../chunks/vendor-202ba1b8.js";import{g as pe,c as Z}from"../../../chunks/seoPagination-afc11076.js";import{s as de}from"../../../chunks/pageSeo-16c441c8.js";import{c as ke}from"../../../chunks/sanity-10ab6880.js";import{G as he}from"../../../chunks/GameKuratorGameFragment.generated-d495bf6c.js";import{i as _e}from"../../../chunks/index-818f9b69.js";import{r as ge}from"../../../chunks/requestClient-501ba30b.js";import{I as je}from"../../../chunks/context-88a045a1.js";import{T as ee}from"../../../chunks/index-ad8572b8.js";import{S as ve}from"../../../chunks/index-78a8619a.js";import{S as be}from"../../../chunks/index-ed0c4dd7.js";import{B as $e}from"../../../chunks/index-7d3816e9.js";import{K as xe}from"../../../chunks/index-4cd42c1b.js";import{g as ye}from"../../../chunks/context-cc7b6928.js";import{a as Se}from"../../../chunks/index-7857f4f9.js";import{m as Ge}from"../../../chunks/index-4a1eddb6.js";import{P as Ne}from"../../../chunks/Pagination-da9ca162.js";import{p as we}from"../../../chunks/stores-5d02eee0.js";import"../../../chunks/index-239f6385.js";import"../../../chunks/goto-7d4088c3.js";import"../../../chunks/singletons-4b6b0cdf.js";import"../../../chunks/scrollTopContainer-79821d29.js";import"../../../chunks/index-78395626.js";import"../../../chunks/groq-c0f2c31a.js";import"../../../chunks/types-0152c01c.js";import"../../../chunks/context-8abb743c.js";import"../../../chunks/DropdownContent-fde98b9a.js";import"../../../chunks/resizeObserver-626ed4b4.js";import"../../../chunks/context-fa7439dc.js";/* empty css                                                                         */import"../../../chunks/index-4e53ca7a.js";import"../../../chunks/index-c5a03082.js";import"../../../chunks/DropdownArrow-76013f55.js";import"../../../chunks/index-a8682839.js";import"../../../chunks/index-44c197fe.js";import"../../../chunks/GameKuratorGroup.generated-46acdc10.js";import"../../../chunks/GameKuratorGroupGame.generated-133f4475.js";import"../../../chunks/getGameInfo-ff5aa696.js";import"../../../chunks/Slide-a5b49d5e.js";import"../../../chunks/index-6d40b083.js";import"../../../chunks/index-21535704.js";import"../../../chunks/index-743ec33a.js";import"../../../chunks/index-9cf645ec.js";import"../../../chunks/index-481a1ccf.js";import"../../../chunks/generatePath-ae50dfa0.js";import"../../../chunks/paths-e7d101d3.js";import"../../../chunks/helpers-d1c659e2.js";import"../../../chunks/index-b069bb96.js";import"../../../chunks/sessionInfo-312c9146.js";import"../../../chunks/UserSession.generated-47f74936.js";import"../../../chunks/variables-863c2d32.js";import"../../../chunks/makeFetchStore-06397d55.js";import"../../../chunks/index-7a29fbcc.js";import"../../../chunks/index-03e84442.js";import"../../../chunks/getLiveStreamExists-6ae50025.js";import"../../../chunks/SportFixtureEventStatus.generated-36e4eb90.js";import"../../../chunks/fixture-2e658e15.js";import"../../../chunks/context-e1974520.js";import"../../../chunks/index-4e634fae.js";import"../../../chunks/index-aee9f5f4.js";import"../../../chunks/index-dde39cdb.js";import"../../../chunks/index-6a93cc39.js";import"../../../chunks/index-f3ec258a.js";import"../../../chunks/index-83d5778a.js";import"../../../chunks/index-1d03818a.js";import"../../../chunks/index-da75da01.js";import"../../../chunks/index-0ce918a4.js";import"../../../chunks/SportBet.generated-88f1742a.js";import"../../../chunks/CompetitorFragment.generated-fe61321c.js";import"../../../chunks/PlayerPropBetFragment.generated-cd4c3d19.js";import"../../../chunks/index-6a61ceab.js";import"../../../chunks/shared-dc1dad71.js";import"../../../chunks/index-a6d5af8e.js";import"../../../chunks/index-15ea3a2f.js";import"../../../chunks/index-b64765d7.js";import"../../../chunks/index-70f482ed.js";import"../../../chunks/index-c961e4f3.js";import"../../../chunks/index-63367f04.js";import"../../../chunks/index-a7a6ffa9.js";import"../../../chunks/index-4371838a.js";import"../../../chunks/UserTags.generated-5f0e6eb8.js";import"../../../chunks/index-101fb270.js";import"../../../chunks/utils-2db7bfcb.js";import"../../../chunks/query-string-674ed16b.js";import"../../../chunks/preload-helper-ec9aa979.js";import"../../../chunks/helpers-3511dbf4.js";import"../../../chunks/index-010e6e06.js";import"../../../chunks/index-041d0ef1.js";import"../../../chunks/index-5f6739d0.js";import"../../../chunks/group-147d87cd.js";import"../../../chunks/KuratorGameQuery.generated-f7c3177d.js";import"../../../chunks/SportGroupTemplates.generated-f3f6e9e1.js";import"../../../chunks/SportGroupTemplate.generated-2c5cc1d5.js";import"../../../chunks/index-5469be8d.js";/* empty css                                                          */const Le={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFavouriteGames"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"favouriteGameList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGame"}}]}}]}}]}},...he.definitions]};var w={favourites:z._("Favourites"),noFavourites:{id:"No favourites yet, use the {icon} to favourite games."},pleaseLogin:z._("Please login to save your favourite games"),clickOnPrevious:z._("No favourite games found for this page. Click on previous to see more games.")};function te(o,e,t){const n=o.slice();return n[16]=e[t],n}function ne(o){let e,t;return e=new ve({props:{type:"casino"}}),{c(){x(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){S(e,n,i),t=!0},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){G(e,n)}}}function Ve(o){let e,t,n;return t=new ee({props:{inline:!0,$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){e=A("div"),x(t.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var a=E(e);y(t.$$.fragment,a),a.forEach(_),this.h()},h(){Q(e,"class","no-games svelte-btmyfb")},m(i,a){j(i,e,a),S(t,e,null),n=!0},p(i,a){const s={};a&524352&&(s.$$scope={dirty:a,ctx:i}),t.$set(s)},i(i){n||(h(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){i&&_(e),G(t)}}}function Fe(o){let e,t,n;return t=new ee({props:{$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){e=A("div"),x(t.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var a=E(e);y(t.$$.fragment,a),a.forEach(_),this.h()},h(){Q(e,"class","no-games svelte-btmyfb")},m(i,a){j(i,e,a),S(t,e,null),n=!0},p(i,a){const s={};a&524304&&(s.$$scope={dirty:a,ctx:i}),t.$set(s)},i(i){n||(h(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){i&&_(e),G(t)}}}function Pe(o){let e,t;return e=new xe({props:{list:o[2],loading:!1}}),{c(){x(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,i){S(e,n,i),t=!0},p(n,i){const a={};i&4&&(a.list=n[2]),e.$set(a)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){G(e,n)}}}function De(o){let e,t,n,i;return t=new je({props:{icon:"favourite"}}),{c(){e=V("\xA0"),x(t.$$.fragment),n=V("\xA0")},l(a){e=F(a,"\xA0"),y(t.$$.fragment,a),n=F(a,"\xA0")},m(a,s){j(a,e,s),S(t,a,s),j(a,n,s),i=!0},p:J,i(a){i||(h(t.$$.fragment,a),i=!0)},o(a){g(t.$$.fragment,a),i=!1},d(a){a&&_(e),G(t,a),a&&_(n)}}}function Ie(o){let e=o[16]+"",t;return{c(){t=V(e)},l(n){t=F(n,e)},m(n,i){j(n,t,i)},p(n,i){i&64&&e!==(e=n[16]+"")&&H(t,e)},i:J,o:J,d(n){n&&_(t)}}}function ie(o){let e,t,n,i;const a=[Ie,De],s=[];function u(c,l){return typeof c[16]=="string"?0:c[16][0]==="icon"?1:-1}return~(e=u(o))&&(t=s[e]=a[e](o)),{c(){t&&t.c(),n=B()},l(c){t&&t.l(c),n=B()},m(c,l){~e&&s[e].m(c,l),j(c,n,l),i=!0},p(c,l){let f=e;e=u(c),e===f?~e&&s[e].p(c,l):(t&&(q(),g(s[f],1,1,()=>{s[f]=null}),K()),~e?(t=s[e],t?t.p(c,l):(t=s[e]=a[e](c),t.c()),h(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(h(t),i=!0)},o(c){g(t),i=!1},d(c){~e&&s[e].d(c),c&&_(n)}}}function Te(o){let e,t,n=o[6],i=[];for(let s=0;s<n.length;s+=1)i[s]=ie(te(o,n,s));const a=s=>g(i[s],1,1,()=>{i[s]=null});return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=B()},l(s){for(let u=0;u<i.length;u+=1)i[u].l(s);e=B()},m(s,u){for(let c=0;c<i.length;c+=1)i[c].m(s,u);j(s,e,u),t=!0},p(s,u){if(u&64){n=s[6];let c;for(c=0;c<n.length;c+=1){const l=te(s,n,c);i[c]?(i[c].p(l,u),h(i[c],1)):(i[c]=ie(l),i[c].c(),h(i[c],1),i[c].m(e.parentNode,e))}for(q(),c=n.length;c<i.length;c+=1)a(c);K()}},i(s){if(!t){for(let u=0;u<n.length;u+=1)h(i[u]);t=!0}},o(s){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)g(i[u]);t=!1},d(s){me(i,s),s&&_(e)}}}function Ae(o){let e=o[4]._(w.clickOnPrevious)+"",t;return{c(){t=V(e)},l(n){t=F(n,e)},m(n,i){j(n,t,i)},p(n,i){i&16&&e!==(e=n[4]._(w.clickOnPrevious)+"")&&H(t,e)},d(n){n&&_(t)}}}function se(o){let e,t,n=o[4]._(w.pleaseLogin)+"",i;return{c(){e=A("div"),t=A("span"),i=V(n),this.h()},l(a){e=C(a,"DIV",{class:!0});var s=E(e);t=C(s,"SPAN",{});var u=E(t);i=F(u,n),u.forEach(_),s.forEach(_),this.h()},h(){Q(e,"class","no-games svelte-btmyfb")},m(a,s){j(a,e,s),Y(e,t),Y(t,i)},p(a,s){s&16&&n!==(n=a[4]._(w.pleaseLogin)+"")&&H(i,n)},d(a){a&&_(e)}}}function Ce(o){var p;let e,t,n,i,a,s,u,c,l,f,v;const L=[o[0]];let $={};for(let r=0;r<L.length;r+=1)$=ue($,L[r]);e=new be({props:$}),n=new $e({props:{title:o[4]._(w.favourites),isMobile:o[7]}});let m=!o[8]&&ne();const N=[Pe,Fe,Ve],b=[];function T(r,d){return r[2]&&r[2].length!==0?0:r[5]&&r[1]!==1?1:r[5]?2:-1}~(s=T(o))&&(u=b[s]=N[s](o));let k=!o[3].isAuthenticated&&se(o);return f=new Ne({props:{limit:W,offset:o[1]-1,listLength:((p=o[2])==null?void 0:p.length)||0}}),f.$on("previous",o[14]),f.$on("next",o[15]),{c(){x(e.$$.fragment),t=P(),x(n.$$.fragment),i=P(),m&&m.c(),a=P(),u&&u.c(),c=P(),k&&k.c(),l=P(),x(f.$$.fragment)},l(r){y(e.$$.fragment,r),t=D(r),y(n.$$.fragment,r),i=D(r),m&&m.l(r),a=D(r),u&&u.l(r),c=D(r),k&&k.l(r),l=D(r),y(f.$$.fragment,r)},m(r,d){S(e,r,d),j(r,t,d),S(n,r,d),j(r,i,d),m&&m.m(r,d),j(r,a,d),~s&&b[s].m(r,d),j(r,c,d),k&&k.m(r,d),j(r,l,d),S(f,r,d),v=!0},p(r,[d]){var X;const re=d&1?le(L,[fe(r[0])]):{};e.$set(re);const O={};d&16&&(O.title=r[4]._(w.favourites)),d&128&&(O.isMobile=r[7]),n.$set(O),r[8]?m&&(q(),g(m,1,1,()=>{m=null}),K()):m?d&256&&h(m,1):(m=ne(),m.c(),h(m,1),m.m(a.parentNode,a));let M=s;s=T(r),s===M?~s&&b[s].p(r,d):(u&&(q(),g(b[M],1,1,()=>{b[M]=null}),K()),~s?(u=b[s],u?u.p(r,d):(u=b[s]=N[s](r),u.c()),h(u,1),u.m(c.parentNode,c)):u=null),r[3].isAuthenticated?k&&(k.d(1),k=null):k?k.p(r,d):(k=se(r),k.c(),k.m(l.parentNode,l));const U={};d&2&&(U.offset=r[1]-1),d&4&&(U.listLength=((X=r[2])==null?void 0:X.length)||0),f.$set(U)},i(r){v||(h(e.$$.fragment,r),h(n.$$.fragment,r),h(m),h(u),h(f.$$.fragment,r),v=!0)},o(r){g(e.$$.fragment,r),g(n.$$.fragment,r),g(m),g(u),g(f.$$.fragment,r),v=!1},d(r){G(e,r),r&&_(t),G(n,r),r&&_(i),m&&m.d(r),r&&_(a),~s&&b[s].d(r),r&&_(c),k&&k.d(r),r&&_(l),G(f,r)}}}var Ee=globalThis&&globalThis.__awaiter||function(o,e,t,n){function i(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function u(f){try{l(n.next(f))}catch(v){s(v)}}function c(f){try{l(n.throw(f))}catch(v){s(v)}}function l(f){f.done?a(f.value):i(f.value).then(u,c)}l((n=n.apply(o,e||[])).next())})},R=de["/casino/favourites"],W=50;function wn(o){var e,t;return Ee(this,void 0,void 0,function*(){try{var n=o.page.path,{startValue:i,pageValue:a}=pe(o,W);if(o.session.isAuthenticated){var[s,u]=yield Promise.all([ge({load:o,variables:{limit:W,offset:i},doc:Le}),ke(o,n)]);return{props:{favouriteGameList:((t=(e=s==null?void 0:s.data)===null||e===void 0?void 0:e.user)===null||t===void 0?void 0:t.favouriteGameList)||[],seo:u||R,pageValue:a}}}else return{props:{favouriteGameList:[],seo:R,pageValue:0}}}catch(c){return console.log({e:c}),{props:{favouriteGameList:void 0,seo:R,pageValue:0}}}})}function Ke(o,e,t){let n,i,a,s,u,c,l,f,v;I(o,_e,p=>t(4,c=p)),I(o,Ge,p=>t(8,f=p)),I(o,we,p=>t(9,v=p));var{meta:L}=Se();I(o,L,p=>t(3,u=p));let{favouriteGameList:$=[]}=e,{seo:m}=e,{pageValue:N}=e;var b=ye();I(o,b,p=>t(13,l=p));const T=()=>Z({action:"previous",pageValue:N,page:v}),k=()=>Z({action:"next",pageValue:N,page:v});return o.$$set=p=>{"favouriteGameList"in p&&t(12,$=p.favouriteGameList),"seo"in p&&t(0,m=p.seo),"pageValue"in p&&t(1,N=p.pageValue)},o.$$.update=()=>{o.$$.dirty&8192&&t(7,n=l&&l<700),o.$$.dirty&4096&&t(2,i=($==null?void 0:$.map(p=>({game:Object.assign({},p),id:p.id})))||[]),o.$$.dirty&16&&t(6,a=c.message(w.noFavourites.id)),o.$$.dirty&12&&t(5,s=i&&i.length===0&&u.isAuthenticated)},[m,N,i,u,c,s,a,n,f,v,L,b,$,l,T,k]}class Ln extends ae{constructor(e){super();oe(this,e,Ke,Ce,ce,{favouriteGameList:12,seo:0,pageValue:1})}}export{Ln as default,wn as load};