var p=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))g.call(n,t)&&f(e,t,n[t]);if(d)for(var t of d(n))v.call(n,t)&&f(e,t,n[t]);return e},o=(e,n)=>h(e,m(n));import{_ as c}from"./vendor-202ba1b8.js";const A=(e,n)=>{const t=e-n;return Math.abs(t/e*100)},S=({blockResults:e,balance:n,amount:t,gamesLeft:a,potentialStopLoss:r})=>{if(e==null?void 0:e.stop)return e.message;if(a===1)return"limitReached";if(t>n)return"insufficientBalance";if(r)return"potentialStopLossReached"},V=({blocks:e,id:n,value:t,blockDefault:a,target:r})=>e.some(i=>i.id===n)?e.map(i=>{const u=i;return i.id===n&&(u[r].value=t),u}):[...e,o(s({},a),{[r]:o(s({},a[r]),{value:t})})],j=({blocks:e,block:n})=>e.every(t=>t.id!==n.id)?[...e,n]:e,w=e=>{const n=c.values(e);return c.sum(n)};export{j as a,V as b,w as c,S as d,A as g};
