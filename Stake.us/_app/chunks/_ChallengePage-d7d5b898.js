import{S as Y,i as z,s as B,k as J,j,n as K,m as D,f as Q,o as M,r as R,u as N,w as U,x as C,d as W,v as q,bb as Z,aG as P,A as ee,V as ne,ae as $,H as ae,T as te}from"./vendor-202ba1b8.js";import{aX as ie,aY as le,q as re}from"./index-239f6385.js";import{C as oe}from"./Challenge.generated-1c3b018c.js";import{L as se,C as ue}from"./index-be9ec05e.js";import{M as de}from"./index-caf95cd0.js";import{g as ce,a as me}from"./_sortContext-de024c04.js";const I={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ChallengeList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ChallengeSort"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ChallengeFilterType"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"count"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ChallengeCountType"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"challengeCount"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"count"}}}]},{kind:"Field",name:{kind:"Name",value:"challengeList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Challenge"}}]}}]}}]}},...oe.definitions]};function fe(o){var a,l;let n,e;return n=new ue({props:{"data-test":"challenges-"+((l=(a=o[0])==null?void 0:a.variables)==null?void 0:l.type),challengeList:o[1]}}),{c(){j(n.$$.fragment)},l(i){D(n.$$.fragment,i)},m(i,u){M(n,i,u),e=!0},p(i,u){var m,t;const s={};u&1&&(s["data-test"]="challenges-"+((t=(m=i[0])==null?void 0:m.variables)==null?void 0:t.type)),u&2&&(s.challengeList=i[1]),n.$set(s)},i(i){e||(C(n.$$.fragment,i),e=!0)},o(i){N(n.$$.fragment,i),e=!1},d(i){q(n,i)}}}function ke(o){let n,e;return n=new de({}),{c(){j(n.$$.fragment)},l(a){D(n.$$.fragment,a)},m(a,l){M(n,a,l),e=!0},p:$,i(a){e||(C(n.$$.fragment,a),e=!0)},o(a){N(n.$$.fragment,a),e=!1},d(a){q(n,a)}}}function pe(o){let n,e,a,l,i;const u=[ke,fe],s=[];function m(t,r){return t[3]?0:1}return n=m(o),e=s[n]=u[n](o),l=new se({props:{loadingMore:o[4],currentCount:o[1].length,totalCount:o[2]}}),l.$on("loadMore",o[7]),{c(){e.c(),a=J(),j(l.$$.fragment)},l(t){e.l(t),a=K(t),D(l.$$.fragment,t)},m(t,r){s[n].m(t,r),Q(t,a,r),M(l,t,r),i=!0},p(t,[r]){let c=n;n=m(t),n===c?s[n].p(t,r):(R(),N(s[c],1,1,()=>{s[c]=null}),U(),e=s[n],e?e.p(t,r):(e=s[n]=u[n](t),e.c()),C(e,1),e.m(a.parentNode,a));const p={};r&16&&(p.loadingMore=t[4]),r&2&&(p.currentCount=t[1].length),r&4&&(p.totalCount=t[2]),l.$set(p)},i(t){i||(C(e),C(l.$$.fragment,t),i=!0)},o(t){N(e),N(l.$$.fragment,t),i=!1},d(t){s[n].d(t),t&&W(a),q(l,t)}}}var ve=globalThis&&globalThis.__awaiter||function(o,n,e,a){function l(i){return i instanceof e?i:new e(function(u){u(i)})}return new(e||(e=Promise))(function(i,u){function s(r){try{t(a.next(r))}catch(c){u(c)}}function m(r){try{t(a.throw(r))}catch(c){u(c)}}function t(r){r.done?i(r.value):l(r.value).then(s,m)}t((a=a.apply(o,n||[])).next())})},ge=24;function Te(o,n){var{stuff:e}=o,{variables:a}=n;return ve(this,void 0,void 0,function*(){try{var l=ie.startAt,i=yield e.query(I,Object.assign({offset:0,limit:ge,sort:l},a),{requestPolicy:"network-only"});return{props:{challengesOperationStore:i,client:e.client}}}catch{return{props:{}}}})}function be(o,n,e){let a,l=$,i=()=>(l(),l=Z(c,d=>e(14,a=d)),c);o.$$.on_destroy.push(()=>l());var u=this&&this.__awaiter||function(d,f,v,k){function G(_){return _ instanceof v?_:new v(function(S){S(_)})}return new(v||(v=Promise))(function(_,S){function H(g){try{L(k.next(g))}catch(O){S(O)}}function X(g){try{L(k.throw(g))}catch(O){S(O)}}function L(g){g.done?_(g.value):G(g.value).then(H,X)}L((k=k.apply(d,f||[])).next())})},s,m,t,r;let{challengesOperationStore:c}=n;i();let{client:p}=n;var x=ce(),b=((m=(s=a==null?void 0:a.data)===null||s===void 0?void 0:s.user)===null||m===void 0?void 0:m.challengeList)||[],T=((r=(t=a==null?void 0:a.data)===null||t===void 0?void 0:t.user)===null||r===void 0?void 0:r.challengeCount)||0,h=a.variables,y;P(c);var A=d=>{h=d,y&&y.unsubscribe(),y=ae(p.query(I,h,{requestPolicy:"network-only"}),te(f=>{var v,k=(v=f==null?void 0:f.data)===null||v===void 0?void 0:v.user;k&&(e(2,T=k.challengeCount),e(1,b=h.offset===0?k.challengeList:[...b,...k.challengeList])),e(3,w=!1),e(4,V=!1)}))};a.variables.type===le.creator&&ee(()=>{var d=me.subscribe(f=>{e(1,b=[f.createChallenge,...b]),e(2,T+=1)});return()=>{d()}});var w=!1,V=!1;re(x,d=>{var{current:f}=d;e(3,w=!0),A(Object.assign(Object.assign({},h),{offset:0,sort:f}))});var F=()=>u(void 0,void 0,void 0,function*(){e(4,V=!0),A(Object.assign(Object.assign({},h),{offset:b.length}))});ne(()=>{y&&y.unsubscribe()});const E=()=>F();return o.$$set=d=>{"challengesOperationStore"in d&&i(e(0,c=d.challengesOperationStore)),"client"in d&&e(6,p=d.client)},[c,b,T,w,V,F,p,E]}class we extends Y{constructor(n){super();z(this,n,be,pe,B,{challengesOperationStore:0,client:6})}}export{we as C,Te as l};