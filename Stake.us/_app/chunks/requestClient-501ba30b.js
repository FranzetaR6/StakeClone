var w=Object.defineProperty,C=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var m=(t,s,e)=>s in t?w(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))E.call(s,e)&&m(t,e,s[e]);if(u)for(var e of u(s))S.call(s,e)&&m(t,e,s[e]);return t},y=(t,s)=>C(t,T(s));import{P as j,b6 as k}from"./vendor-202ba1b8.js";import{y as h,g as F,u as M,ab as N,e as x}from"./index-239f6385.js";let g=new Map;function A({doc:t,variables:s,load:e,cache:f}){let _=new k,b;return new Promise((p,c)=>{try{const o=h?F():e.session.session;let q=e?e.fetch:fetch;return(()=>{const r=h&&f?f.name+JSON.stringify(s):null;r&&g.has(r)?p(g.get(r)):q(M,{method:"POST",headers:a(a(y(a({},e==null?void 0:e.session.headers),{"Content-Type":"application/json"}),e.session.locale?{"x-language":N(e.session.locale)}:{}),o?{"x-access-token":o}:{}),body:JSON.stringify({query:j(t),variables:s}),signal:_.signal}).then(async n=>{if(n.status===200){let i=await n.json();if((i==null?void 0:i.errors)&&i.errors.length!==0){let l=i.errors[0];x.next({type:(l==null?void 0:l.errorType)||"errorExchange",error:l})}else h&&r&&g.set(r,i);p(i)}else c()}).catch(n=>{console.log("svelte_requestClient_graphql_error",n),n&&x.next({type:(n==null?void 0:n.errorType)||"errorExchange",error:n}),c(n)})})()}catch(o){console.log("svelte_requestClient_graphql_reject_error",o),c(o)}finally{clearTimeout(b)}})}export{A as r};
