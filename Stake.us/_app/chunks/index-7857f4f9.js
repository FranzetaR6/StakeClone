var N=Object.defineProperty,O=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var E=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,l=(s,e)=>{for(var t in e||(e={}))T.call(e,t)&&E(s,t,e[t]);if(R)for(var t of R(e))q.call(e,t)&&E(s,t,e[t]);return s},d=(s,e)=>O(s,P(e));import{I as B}from"./index-239f6385.js";import{ak as r,aV as I,y as v,C as $,R as k}from"./vendor-202ba1b8.js";import{i as z}from"./index-b069bb96.js";const G=["frozen","banned","houseExcluded","suspended"],H=s=>s.reduce((e,t)=>d(l({},e),{[t.name]:t}),{}),g=(s,e)=>{const t=e[s].include||[],n=r.exports.flatten(t.map(o=>g(o,e)));return[s,...n]},L=({userRoles:s,infoRoles:e})=>{const t=H(e),n=r.exports.flatten(s.map(({name:a})=>g(a,t))),o=r.exports.flatten(n.map(a=>t[a].exclude||[])),i=r.exports.uniq(n.filter(a=>!o.includes(a))),c=r.exports.uniq(r.exports.flatten(i.map(a=>t[a].modify||[])));return{include:i,modify:c}},D=s=>{const e={isAuthenticated:!1,hasRole:!1,isMaxBetEnabled:!1,id:"",name:"",hasPassword:!1,hasEmailVerified:!1,roles:[],includedRoles:[],hasTfaEnabled:!1,hasOauth:!1,hasPhoneNumberVerified:!1};return(()=>{const n=$(l(d(l({},e),{isAuthenticated:B()}),s||{}));return d(l({},n),{setUser:async o=>{var b,p,x;const{id:i,name:c,hasEmailVerified:a,intercomHash:S,hasTfaEnabled:_,hasPassword:y,hasOauth:U,isMaxBetEnabled:V,hasPhoneNumberVerified:C}=o,h=o.roles.map(u=>u.name),j=h.find(u=>!G.includes(u))!==void 0,A=(o==null?void 0:o.includedRoles)||L({infoRoles:((x=(p=(b=k(z))==null?void 0:b.data)==null?void 0:p.info)==null?void 0:x.roles)||[],userRoles:o==null?void 0:o.roles}).include,M={id:i,name:c,roles:h,hasRole:j,includedRoles:A,intercomHash:S,hasPassword:y,hasEmailVerified:a,isAuthenticated:!0,hasTfaEnabled:_,hasOauth:U,isMaxBetEnabled:!!V,hasPhoneNumberVerified:C};n.set(M)}})})()},w="__stores__meta",X=()=>{const e={meta:D()};return v(w,e),e},m=s=>{throw new Error(ssr?`Can only ${s} session store in browser`:`Cannot ${s} session store before subscribing`)};let f={subscribe:s=>{const e=F();return f.set=e.meta.set,f.setUser=e.meta.setUser,f.update=e.meta.update,e.meta.subscribe(s)},set:()=>m("set"),update:()=>m("update"),setUser:()=>m("update")};const F=()=>I(w);export{F as a,X as c,L as g,f as m};
