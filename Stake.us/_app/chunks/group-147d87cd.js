var d=Object.defineProperty,T=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(e,t,s)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,p=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&i(e,s,t[s]);if(m)for(var s of m(t))x.call(t,s)&&i(e,s,t[s]);return e},u=(e,t)=>T(e,f(t));import{bp as g,ak as o}from"./vendor-202ba1b8.js";import{g as n}from"./fixture-2e658e15.js";import{ah as D}from"./index-239f6385.js";const _=(e,t)=>Math.floor((new Date(t).setHours(0,0,0,0)-new Date(e).setHours(0,0,0,0))/D),h=g((e,t)=>{const{startTime:s}=n(e.data),{startTime:r}=n(t.data);return _(s,r)===0}),j=e=>{const t=o.exports.sortBy(e,r=>new Date(n(r.data).startTime).getTime());return h(t).reduce((r,a)=>[...r,{fixture:a[0],__element:"GroupTime"},...a.map(c=>({fixture:c,__element:"Fixture"}))],[])},k=["14"],v=e=>{if(k.includes(e.extId))return e;const t=o.exports.groupBy(e.markets,r=>r.name);return o.exports.values(t).map(r=>u(p({},e),{markets:r}))},w=e=>{const t=e.map(s=>v(s));return o.exports.flatten(t)};export{j as a,w as s};