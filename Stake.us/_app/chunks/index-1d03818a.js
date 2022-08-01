var F=Object.defineProperty,g=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(i,e,a)=>e in i?F(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,l=(i,e)=>{for(var a in e||(e={}))C.call(e,a)&&y(i,a,e[a]);if(p)for(var a of p(e))V.call(e,a)&&y(i,a,e[a]);return i},m=(i,e)=>g(i,w(e));import{_ as u,b7 as P,ar as d,C as c}from"./vendor-202ba1b8.js";import{z as h,i as b,ac as f}from"./index-239f6385.js";import{d as j}from"./index-da75da01.js";const S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserBalances"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"balances"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"available"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"currency"}}]}},{kind:"Field",name:{kind:"Name",value:"vault"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"currency"}}]}}]}}]}}]}}]},O=c(!1),B=(()=>{const i=u.mapValues(h,()=>({available:0,vault:0})),e=t=>u.fromPairs(t.map(s=>[s.available.currency,{available:s.available.amount,vault:s.vault.amount}])),a=(()=>{var t;{const o=b().readQuery(S);if((t=o==null?void 0:o.data)==null?void 0:t.user)return e(o.data.user.balances)}return i})(),n=c(a),r=(t,s)=>{n.update(o=>m(l({},o),{[t]:s(o[t])}))};return m(l({},n),{updateBalance:r,rawSet:t=>{n.set(e(t))},changeCurrencyAvailable:t=>{n.update(s=>m(l({},s),{[t.currency]:m(l({},s[t.currency]),{available:t.amount})}))},changeCurrencyVault:t=>{n.update(s=>m(l({},s),{[t.currency]:m(l({},s[t.currency]),{vault:t.amount})}))},fetch:async()=>{var v,k;const o=(k=(v=(await b().query(S,{},{requestPolicy:"network-only"}).toPromise()).data)==null?void 0:v.user)==null?void 0:k.balances;o&&n.update(N=>l(l({},N),e(o)))}})})(),q=(()=>{const i=c({}),{update:e}=i;return m(l({},i),{updateDeduction:({balance:a,deduction:n,type:r="available"})=>{e(t=>{if(n.id in t){const s=t[n.id],o=("amount"in s?s.amount:0)+n.amount;t[n.id]=m(l(l({type:"available"},s),n),{amount:o})}return t}),B.updateBalance(a.currency,t=>m(l({},t),{[r]:a.amount}))},generate:a=>{const n=P();return e(r=>m(l({},r),{[n]:l({type:"available"},a)})),n},remove:a=>{e(n=>u.omit(n,a))},removeByGame:a=>{e(n=>u.pickBy(n,r=>r.game!==a))}})})(),x=d(q,i=>l({available:[],vault:[]},u.groupBy(u.map(i,(e,a)=>l({id:a},e)).filter(e=>"amount"in e&&"type"in e),e=>e.type))),A=d(x,i=>u.mapValues(i,e=>u.reduce(e,(a,n)=>(n.currency in a?a[n.currency]+=n.amount:a[n.currency]=n.amount,a),{}))),U=d([B,A],([i,e])=>u.mapValues(i,(a,n)=>{var r,t;return m(l({},a),{vault:f(a.vault-(((r=e==null?void 0:e.vault)==null?void 0:r[n])||0),n),available:f(a.available-(((t=e==null?void 0:e.available)==null?void 0:t[n])||0),n)})})),Q=d([U,j],([i,e])=>i[e].available),T=c(!1);export{Q as a,U as b,q as d,T as i,O as l,B as r};
