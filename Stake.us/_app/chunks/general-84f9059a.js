var L=Object.defineProperty,M=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var N=(o,s,a)=>s in o?L(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,y=(o,s)=>{for(var a in s||(s={}))Q.call(s,a)&&N(o,a,s[a]);if(w)for(var a of w(s))U.call(s,a)&&N(o,a,s[a]);return o},C=(o,s)=>M(o,O(s));import{C as f,R as n,ar as d,b0 as c,_ as H}from"./vendor-202ba1b8.js";import{c as X,v as Y,d as Z}from"./index-da75da01.js";import{b as B}from"./index-1d03818a.js";import{p as h,aG as $,aH as tt,ac as V,aI as k}from"./index-239f6385.js";import{b as et}from"./index-944779ff.js";import{c as E}from"./helpers-496c8f42.js";import{h as at}from"./index-0ce918a4.js";import{i as nt}from"./index-818f9b69.js";function ft({initialChips:o={}}){const s=f(null),a=f(""),r=(()=>f(n(Z)))(),S=f("hidden"),_=t=>!(c("betTab.idle",t)||c("autobetTab.idle",t)||c("advancedTab.idle",t)),x=d(a,t=>_(t)),D=d(a,t=>c("betTab.fetching",t)||c("autobetTab.fetching",t)||c("advancedTab.fetching",t)),T=(()=>{const t=f(h(0));return C(y({},t),{change:({amount:e})=>{t.set(h(e))},halve:()=>{t.update(e=>h($({amount:Number(e),currency:n(r)}),n(r)))},double:()=>{const e=n(r),i=n(B)[e];t.update(u=>h(tt({amount:Number(u),balance:i.available,currency:e}),e))},max:()=>{const e=n(r),i=n(B)[e];t.set(String(V(i.available)))},reset:()=>{t.set(h(0,n(r)))},format:()=>{t.update(e=>h(Number(e)))}})})(),I=d(a,t=>c("advancedTab",t)?"advanced":c("autobetTab",t)?"automated":"manual"),R=d([X,r,Y],([t,e,i])=>{var u,m;return((m=(u=t==null?void 0:t.rates)==null?void 0:u[e])==null?void 0:m[i])||1}),g=d([r,B],([t,e])=>e[t].available),j=d(a,t=>!(c("betTab.idle",t)||c("autobetTab.idle",t)||c("advancedTab.idle",t))),G=d([r,T,g,j,nt],([t,e,i,u,m],v)=>{async function l(){const b=await et(Number(e),{min:0,balance:V(i,t)},m);v(b)}u===!1?l():v(null)}),p=(()=>{const t=k(o),e=k([]),i=l=>{const b=n(t),A=Number(n(T)),W=n(g),q=E(n(t))+A;if(W>q){const z=b[l]||0,F=C(y({},b),{[l]:z+A});t.set(F),s.set(null);const J=[...n(e),b];e.set(J)}},u=()=>{t.reset(),e.reset()},m=l=>{t.set(l),e.reset()},v=()=>{const l=n(e),b=H.last(l),A=H.initial(l);b&&p&&(p.set(b),e.set(A))};return C(y({},t),{set:m,setChip:i,undo:v,clear:u,history:e})})(),K=d([p],([t])=>E(t)),P=(()=>{const t=f({});return C(y({},t),{set:(e={})=>{t.set({gameState:e,amount:Number(n(T)),chips:n(p)})}})})();return{currency:r,lastBet:s,amount:T,tab:I,xstate:a,conversion:R,amountValidationError:G,disabled:x,fetching:D,hotkeysEnabled:at,modal:S,inPlay:j,balance:g,chips:p,totalChipsBetAmount:K,initialState:P}}export{ft as c};
