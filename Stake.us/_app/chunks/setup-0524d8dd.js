var _=Object.defineProperty,j=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var x=(t,e,s)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,y=(t,e)=>{for(var s in e||(e={}))P.call(e,s)&&x(t,s,e[s]);if(m)for(var s of m(e))B.call(e,s)&&x(t,s,e[s]);return t},g=(t,e)=>j(t,O(e));import{d as A,v}from"./index-da75da01.js";import{C as R,R as f,P as L,y as C,A as U,b0 as d,V,aV as T}from"./vendor-202ba1b8.js";import{e as F,q as I}from"./index-239f6385.js";import{n as M}from"./index-a7a6ffa9.js";import{g as q}from"./helpers-496c8f42.js";import{a as k,i as D,t as J}from"./index-0ce918a4.js";const S="@@GAME_GENERAL",w="@@AUTOBET_GENERAL",z=t=>C(S,t),nt=()=>T(S),H=t=>C(w,t),ot=()=>T(w),K=t=>d("betTab.idle",t)||d("autobetTab.idle",t)||d("advancedTab.idle",t),Q=t=>{let e,s,a;t.currency.set(f(A));const b=[t.currency.subscribe(n=>{s=n}),A.subscribe(n=>{e=n,a&&t.currency.set(e),t.send({type:"STOP_AUTOBETTING"})}),t.xstate.subscribe(n=>{a=K(n),a&&e!==s&&t.currency.set(e)})];V(()=>{b.forEach(n=>n())})},W=t=>{const{conversion:e,inPlay:s,send:a,xstate:b}=t,n=10;let r=f(v);I(e,({current:l,previous:p})=>{const i=f(v);if(r==="crypto"&&i!=="crypto"){r=i;return}if(i===r){const h=q(p,l),u=f(b),E=u&&(d("autobetTab",u)||d("advancedTab",u));f(s)&&E&&i!=="crypto"&&(h>n||l===9)&&(a({type:"STOP_AUTOBETTING"}),M.conversionsChangedSignificantly.open())}r=i})},ct=({listener:t,general:e,autobet:s})=>{z(e),H(s),Q(e),W(e),U(()=>(t.subscribe(),()=>{t.unsubscribe(),e.amount.reset(),e.lastBet.set(null),e.chips&&e.chips.clear(),e.modal.set("hidden"),k.set(!0),D.set(!1),J.set(!1)}))},N="@@config",at=()=>T(N),it=t=>C(N,t),rt=t=>{const e=R(t);function s(a,b,n){return new Promise((r,l)=>{const{apiUrl:p,headers:i,getSession:h}=f(e),u=h();(n?n.fetch:fetch)(p,{method:"POST",headers:y(g(y({},i),{"Content-Type":"application/json"}),u?{"x-access-token":u}:{}),body:JSON.stringify({query:L(a),variables:b})}).then(async o=>{let c=await o.json();(c==null?void 0:c.errors)&&c.errors.length!==0&&(c==null||c.errors.forEach(G=>{throw G})),r(c)}).catch(o=>{o&&F.next({type:(o==null?void 0:o.errorType)||"errorExchange",error:o}),l(o)})})}return{config:e,requestClient:s}};export{ct as a,ot as b,rt as c,K as d,at as e,nt as g,it as s};
