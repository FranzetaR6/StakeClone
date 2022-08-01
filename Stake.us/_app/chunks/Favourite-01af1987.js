var Y=Object.defineProperty,z=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(i,a,t)=>a in i?Y(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t,V=(i,a)=>{for(var t in a||(a={}))Q.call(a,t)&&U(i,t,a[t]);if(M)for(var t of M(a))W.call(a,t)&&U(i,t,a[t]);return i},A=(i,a)=>z(i,J(a));import{a7 as s,C as X,S as Z,i as P,s as ee,j as G,m as O,o as y,x as k,u as F,v as I,l as x,f as C,r as ae,w as te,d as D,a6 as w,e as ne,t as ie,c as oe,a as se,g as re,b as ue,a1 as le,h as me,ae as de}from"./vendor-202ba1b8.js";import{a as ce}from"./index-7857f4f9.js";import{B as fe}from"./index-4e53ca7a.js";import{I as ve}from"./context-88a045a1.js";import{G as K}from"./GameKuratorGameFragment.generated-d495bf6c.js";import{c as B}from"./index-b069bb96.js";import{H as ge}from"./index-6a61ceab.js";import{d as pe}from"./index-78395626.js";import{i as ke}from"./index-818f9b69.js";import{G as be}from"./GameKuratorGroup.generated-46acdc10.js";import{r as _e}from"./requestClient-501ba30b.js";const Fe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateKuratorUserGameFavourite"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createKuratorUserGameFavourite"},arguments:[{kind:"Argument",name:{kind:"Name",value:"gameId"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGame"}}]}}]}},...K.definitions]},Se={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteKuratorUserGameFavourite"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteKuratorUserGameFavourite"},arguments:[{kind:"Argument",name:{kind:"Name",value:"gameId"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGame"}}]}}]}},...K.definitions]},T={animations:s._("Animations"),sounds:s._("Sounds"),liveStats:s._("Live Stats"),hotKeys:s._("Hotkeys"),instantResult:s._("Instant Bet"),fairness:s._("Fairness"),gameInfo:s._("Game Info"),maxBet:s._("Max Bet"),settings:s._("Settings"),favourite:s._("Favourite"),theaterModeEnable:s._("Enable Theatre Mode"),theaterModeDisable:s._("Disable Theatre Mode"),openLiveStats:s._("Open Live Stats"),closeLiveStats:s._("Close Live Stats"),actionFavourite:s._("Favourite Game"),actionUnfavourite:s._("Unfavourite Game"),openSettings:s._("Game Settings")},he=A(V({},T),{instantResult:s._("Instant Play"),maxBet:s._("Max Amount")}),Ne={stake:T,sweeps:he};var N=Ne[pe]||T;const je={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SlugKuratorGame"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slugKuratorGame"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGame"}},{kind:"Field",name:{kind:"Name",value:"groupGames"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"group"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGroup"}}]}}]}}]}}]}},...K.definitions,...be.definitions]};function E(i){let a,t;return a=new ge({props:{$$slots:{tooltip:[Oe],default:[Ge]},$$scope:{ctx:i}}}),{c(){G(a.$$.fragment)},l(e){O(a.$$.fragment,e)},m(e,o){y(a,e,o),t=!0},p(e,o){const n={};o&517&&(n.$$scope={dirty:o,ctx:e}),a.$set(n)},i(e){t||(k(a.$$.fragment,e),t=!0)},o(e){F(a.$$.fragment,e),t=!1},d(e){I(a,e)}}}function $e(i){let a,t;return a=new ve({props:{icon:i[0].isFavourite?"favourited":"favourite"}}),{c(){G(a.$$.fragment)},l(e){O(a.$$.fragment,e)},m(e,o){y(a,e,o),t=!0},p(e,o){const n={};o&1&&(n.icon=e[0].isFavourite?"favourited":"favourite"),a.$set(n)},i(e){t||(k(a.$$.fragment,e),t=!0)},o(e){F(a.$$.fragment,e),t=!1},d(e){I(a,e)}}}function Ge(i){let a,t;return a=new fe({props:{iconOnly:!0,variant:"subtle-link",spacing:"normal",disabled:!i[0].gameId||i[0].loading,active:i[0].isFavourite,$$slots:{default:[$e]},$$scope:{ctx:i}}}),a.$on("click",i[4]),{c(){G(a.$$.fragment)},l(e){O(a.$$.fragment,e)},m(e,o){y(a,e,o),t=!0},p(e,o){const n={};o&1&&(n.disabled=!e[0].gameId||e[0].loading),o&1&&(n.active=e[0].isFavourite),o&513&&(n.$$scope={dirty:o,ctx:e}),a.$set(n)},i(e){t||(k(a.$$.fragment,e),t=!0)},o(e){F(a.$$.fragment,e),t=!1},d(e){I(a,e)}}}function Oe(i){let a,t=i[2]._(i[0].isFavourite?N.actionUnfavourite:N.actionFavourite)+"",e;return{c(){a=ne("span"),e=ie(t),this.h()},l(o){a=oe(o,"SPAN",{slot:!0});var n=se(a);e=re(n,t),n.forEach(D),this.h()},h(){ue(a,"slot","tooltip")},m(o,n){C(o,a,n),le(a,e)},p(o,n){n&5&&t!==(t=o[2]._(o[0].isFavourite?N.actionUnfavourite:N.actionFavourite)+"")&&me(e,t)},d(o){o&&D(a)}}}function ye(i){var o;let a,t,e=((o=i[1])==null?void 0:o.isAuthenticated)&&E(i);return{c(){e&&e.c(),a=x()},l(n){e&&e.l(n),a=x()},m(n,r){e&&e.m(n,r),C(n,a,r),t=!0},p(n,[r]){var u;((u=n[1])==null?void 0:u.isAuthenticated)?e?(e.p(n,r),r&2&&k(e,1)):(e=E(n),e.c(),k(e,1),e.m(a.parentNode,a)):e&&(ae(),F(e,1,1,()=>{e=null}),te())},i(n){t||(k(e),t=!0)},o(n){F(e),t=!1},d(n){e&&e.d(n),n&&D(a)}}}var Ie=globalThis&&globalThis.__awaiter||function(i,a,t,e){function o(n){return n instanceof t?n:new t(function(r){r(n)})}return new(t||(t=Promise))(function(n,r){function u(d){try{p(e.next(d))}catch(b){r(b)}}function g(d){try{p(e.throw(d))}catch(b){r(b)}}function p(d){d.done?n(d.value):o(d.value).then(u,g)}p((e=e.apply(i,a||[])).next())})},f=(()=>{var i=X({loading:!1,isFavourite:null,gameId:null}),a=(t,e)=>Ie(void 0,void 0,void 0,function*(){var o;try{i.update(u=>Object.assign(Object.assign({},u),{loading:!0}));var n=yield _e({load:t,doc:je,variables:e}),r=(o=n==null?void 0:n.data)===null||o===void 0?void 0:o.slugKuratorGame;if(i.update(u=>Object.assign(Object.assign({},u),{loading:!1})),r)return i.update(u=>Object.assign(Object.assign({},u),{isFavourite:r.isFavourite,gameId:r.id})),r}catch{i.update(g=>Object.assign(Object.assign({},g),{loading:!1}))}});return Object.assign(Object.assign({},i),{load:a})})();function De(i,a,t){let e,o=de,n,r;w(i,f,l=>t(0,e=l)),w(i,ke,l=>t(2,r=l)),i.$$.on_destroy.push(()=>o());var u=this&&this.__awaiter||function(l,m,c,S){function q(_){return _ instanceof c?_:new c(function(h){h(_)})}return new(c||(c=Promise))(function(_,h){function H(v){try{j(S.next(v))}catch($){h($)}}function R(v){try{j(S.throw(v))}catch($){h($)}}function j(v){v.done?_(v.value):q(v.value).then(H,R)}j((S=S.apply(l,m||[])).next())})},{meta:g}=ce();w(i,g,l=>t(1,n=l));let{game:p}=a;var d=B(Fe),b=B(Se),L=()=>u(void 0,void 0,void 0,function*(){if(e.gameId){var l={gameId:e.gameId};if(f.update(m=>Object.assign(Object.assign({},m),{loading:!0})),e.isFavourite){f.update(m=>Object.assign(Object.assign({},m),{isFavourite:!1}));try{yield b.mutate(l),f.update(m=>Object.assign(Object.assign({},m),{loading:!1}))}catch{f.update(c=>Object.assign(Object.assign({},c),{isFavourite:!0}))}}else{f.update(m=>Object.assign(Object.assign({},m),{isFavourite:!0}));try{yield d.mutate(l),f.update(m=>Object.assign(Object.assign({},m),{loading:!1}))}catch{f.update(c=>Object.assign(Object.assign({},c),{isFavourite:!1}))}}}});return i.$$set=l=>{"game"in l&&t(5,p=l.game)},[e,n,r,g,L,p]}class qe extends Z{constructor(a){super();P(this,a,De,ye,ee,{game:5})}}export{qe as F,f as g,N as m};