var ve=Object.defineProperty,Pe=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var L=(e,t,a)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))we.call(t,a)&&L(e,a,t[a]);if(q)for(var a of q(t))Oe.call(t,a)&&L(e,a,t[a]);return e},C=(e,t)=>Pe(e,He(t));import{_ as k,ar as v,b0 as m,C as T,a7 as g,S as Y,i as X,s as Z,e as K,j as x,k as Ae,t as Se,c as p,a as D,m as $,n as Ce,g as Fe,d as P,b as _,a0 as ee,$ as E,f as R,o as te,a1 as j,h as Te,x as V,u as B,v as ae,a6 as ne,l as se,r as Ke,a8 as pe,a9 as De,w as Ee}from"./vendor-202ba1b8.js";import{a as ie}from"./index-0ce918a4.js";import{b1 as d,Q as je}from"./index-239f6385.js";import{c as Ie}from"./general-84f9059a.js";import{i as Re}from"./index-818f9b69.js";import{d as Ve}from"./index-78395626.js";import{P as Be}from"./index-6b0c88c0.js";const Je={[d.royalFlush]:800,[d.straightFlush]:60,[d.fourOfAKind]:22,[d.fullHouse]:9,[d.flush]:6,[d.straight]:4,[d.threeOfAKind]:3,[d.twoPair]:2,[d.onePair]:1,[d.none]:0},Me=k.toPairs(Je),Ge=Me.filter(e=>e[0]!=="none"),J=e=>k.groupBy(e,t=>t.rank),H=e=>{const t=k.toPairs(J(e)).map(a=>a[1]).filter(a=>a.length>1);return k.flatten(t)},M=e=>t=>{const a=H(t);return a.length===0?!1:k.toPairs(J(a)).some(([,l])=>l.length===e)},ze=M(4),le=M(3),re=M(2),oe={"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,J:11,Q:12,K:13},Ne=O({A:1},oe),ue=C(O({},oe),{A:14}),de=(e,t)=>[...t].sort((r,n)=>e[r.rank]-e[n.rank]).filter((r,n,o)=>n===0?!0:e[r.rank]===e[o[n-1].rank]+1),ce=e=>de(ue,e).length===5||de(Ne,e).length===5,fe=e=>{const[[,t]]=k.toPairs(k.groupBy(e,a=>a.suit));return t.length===5},Qe=e=>le(e)&&re(e),We={"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,J:10,K:10,Q:10,A:10},Ue=e=>{const t=re(e),a=H(e);return t&&ue[a[0].rank]>10},qe=e=>{const t=H(e);return k.toPairs(J(t)).length===2},he=e=>ce(e)&&fe(e),Le=e=>he(e)&&e.every(t=>We[t.rank]===10),Ye=e=>Le(e)?d.royalFlush:he(e)?d.straightFlush:ze(e)?d.fourOfAKind:Qe(e)?d.fullHouse:fe(e)?d.flush:ce(e)?d.straight:le(e)?d.threeOfAKind:qe(e)?d.twoPair:Ue(e)?d.onePair:d.none;function F(e){return e}const Xe={[d.none]:()=>[],[d.onePair]:H,[d.twoPair]:H,[d.straight]:F,[d.flush]:F,[d.threeOfAKind]:H,[d.fourOfAKind]:H,[d.fullHouse]:F,[d.straightFlush]:F,[d.royalFlush]:F},Ze=(e,t)=>Xe[e](t),xe=({amount:e,currentHand:t,hasFinishedGame:a})=>Ge.map(([l,r])=>({name:l,payoutMultiplier:r,status:l===t?a?"win":"active":"none",payout:e*r})),{amount:ge,currency:$e,lastBet:I,tab:et,xstate:A,conversion:tt,amountValidationError:at,fetching:nt,disabled:st,hotkeysEnabled:it,modal:lt,initialState:rt,balance:ot}=Ie({}),ut=v([A,ie],([e,t])=>({disabled:!m("betTab.play.idle",e),loading:m("betTab.play.fetching",e)&&t})),dt=v([A,I],([e,t])=>t!==null&&!m("betTab.play",e)),ct=v([A],([e])=>m("betTab.play.idle",e)),G=v([A,I],([e,t])=>(m("betTab.idle",e)||m("autobetTab.idle",e)||m("autobetTab.betting.base.finished",e))&&t!==null);var pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",amount:ge,currency:$e,lastBet:I,tab:et,xstate:A,conversion:tt,amountValidationError:at,fetching:nt,disabled:st,hotkeysEnabled:it,modal:lt,initialState:rt,balance:ot,deal:ut,showRebet:dt,inPlay:ct,hasFinishedGame:G});const ft=e=>e.filter(t=>t&&t.suit),_e=(()=>T([]))(),z=(()=>{const e=T([]);return C(O({},e),{toggle:t=>{e.update(a=>a.includes(t)?a.filter(l=>l!==t):[...a,t])}})})(),ht=(()=>je(!1))(),gt=(()=>{const e=[!1,!1,!1,!1,!1],t=T(e);return C(O({},t),{reset:()=>t.set(e)})})();(()=>T(d.none))();const me=v([A,I,_e,z],([e,t,a,l])=>{const r=m("betTab.play.dealing",e)||m("autobetTab",e),n=ft((m("betTab.idle",e)||m("autobetTab.idle",e))&&t!==null||r?a:l.map(i=>a[i]));if(n.length===0)return{hand:d.none,winningCards:[]};const o=Ye(n);return{hand:o,winningCards:Ze(o,n)}}),Dt=v([ge,me,G],([e,t,a])=>xe({amount:Number(e),currentHand:t.hand,hasFinishedGame:a})),_t=[0,1,2,3,4],Et=v([z,me,G,_e,ht,gt],([e,t,a,l,r,n])=>_t.map(o=>{const s=l[o],i=s&&t.winningCards.find(({suit:u,rank:b})=>s.suit===u&&s.rank===b);return a?i?"win":"lost":e.includes(o)?"active":r&&n[o]?"suggested":"none"})),N={royalFlush:g._("Royal Flush"),straightFlush:g._("Straight Flush"),fourOfAKind:g._("4 of a Kind"),fullHouse:g._("Full House"),flush:g._("Flush"),straight:g._("Straight"),threeOfAKind:g._("3 of a Kind"),twoPair:g._("2 Pair"),onePair:g._("Pair of Jacks"),onePairOrBetter:g._("Pair of Jacks or better"),none:g._("None"),hold:g._("Hold"),deal:g._("Deal"),betAgain:g._("Bet Again"),toggleHold:e=>({id:"Hold / Unhold card {index}",values:{index:e}}),betOrDeal:g._("Make a bet / Deal"),initialHand:g._("Initial Hand"),playerHand:g._("Player Hand"),comingCards:g._("Coming Cards")},mt=C(O({},N),{betAgain:g._("Play Again"),playerHand:g._("Customer Hand"),betOrDeal:g._("Play / Deal")}),bt={stake:N,sweeps:mt};var be=bt[Ve]||N;function yt(e){var Q,W;let t,a,l,r,n,o=e[7]._(be.hold)+"",s,i,u,b,w,c;return a=new Be({props:{animationOn:e[5],suit:(Q=e[2])==null?void 0:Q.suit,rank:(W=e[2])==null?void 0:W.rank,status:e[1]==="lost"?"none":e[1]==="suggested"?"draw":e[1],disabled:e[4],faceDown:e[2]===void 0}}),a.$on("click",e[8]),{c(){t=K("div"),x(a.$$.fragment),l=Ae(),r=K("div"),n=K("div"),s=Se(o),this.h()},l(f){t=p(f,"DIV",{class:!0,style:!0,"data-card-status":!0,"data-test":!0,"data-test-action-enabled":!0});var h=D(t);$(a.$$.fragment,h),l=Ce(h),r=p(h,"DIV",{class:!0});var y=D(r);n=p(y,"DIV",{class:!0});var S=D(n);s=Fe(S,o),S.forEach(P),y.forEach(P),h.forEach(P),this.h()},h(){_(n,"class","status-value svelte-1r2yroh"),ee(n,"stacked",e[3]),_(r,"class",i="status "+e[1]+" svelte-1r2yroh"),_(t,"class",u="player-card "+e[1]+" svelte-1r2yroh"),E(t,"--duration",e[6]+"ms"),_(t,"data-card-status",e[1]),_(t,"data-test",b="card-"+(e[0]+1)),_(t,"data-test-action-enabled",w=!e[4])},m(f,h){R(f,t,h),te(a,t,null),j(t,l),j(t,r),j(r,n),j(n,s),c=!0},p(f,[h]){var S,U;const y={};h&32&&(y.animationOn=f[5]),h&4&&(y.suit=(S=f[2])==null?void 0:S.suit),h&4&&(y.rank=(U=f[2])==null?void 0:U.rank),h&2&&(y.status=f[1]==="lost"?"none":f[1]==="suggested"?"draw":f[1]),h&16&&(y.disabled=f[4]),h&4&&(y.faceDown=f[2]===void 0),a.$set(y),(!c||h&128)&&o!==(o=f[7]._(be.hold)+"")&&Te(s,o),h&8&&ee(n,"stacked",f[3]),(!c||h&2&&i!==(i="status "+f[1]+" svelte-1r2yroh"))&&_(r,"class",i),(!c||h&2&&u!==(u="player-card "+f[1]+" svelte-1r2yroh"))&&_(t,"class",u),(!c||h&64)&&E(t,"--duration",f[6]+"ms"),(!c||h&2)&&_(t,"data-card-status",f[1]),(!c||h&1&&b!==(b="card-"+(f[0]+1)))&&_(t,"data-test",b),(!c||h&16&&w!==(w=!f[4]))&&_(t,"data-test-action-enabled",w)},i(f){c||(V(a.$$.fragment,f),c=!0)},o(f){B(a.$$.fragment,f),c=!1},d(f){f&&P(t),ae(a)}}}function kt(e,t,a){let l,r;ne(e,Re,c=>a(7,r=c));let{index:n}=t,{status:o}=t,{card:s}=t,{stacked:i}=t,{disabled:u}=t,{animationOn:b=!0}=t;const w=()=>z.toggle(n);return e.$$set=c=>{"index"in c&&a(0,n=c.index),"status"in c&&a(1,o=c.status),"card"in c&&a(2,s=c.card),"stacked"in c&&a(3,i=c.stacked),"disabled"in c&&a(4,u=c.disabled),"animationOn"in c&&a(5,b=c.animationOn)},e.$$.update=()=>{e.$$.dirty&32&&a(6,l=b?200:0)},[n,o,s,i,u,b,l,r,w]}class vt extends Y{constructor(t){super();X(this,t,kt,yt,Z,{index:0,status:1,card:2,stacked:3,disabled:4,animationOn:5})}}function ye(e,t,a){const l=e.slice();return l[6]=t[a],l[8]=a,l}function ke(e,t){let a,l,r;return l=new vt({props:{animationOn:t[5],stacked:t[2],status:t[6],index:t[8],disabled:t[3],card:t[1][t[8]]}}),{key:e,first:null,c(){a=se(),x(l.$$.fragment),this.h()},l(n){a=se(),$(l.$$.fragment,n),this.h()},h(){this.first=a},m(n,o){R(n,a,o),te(l,n,o),r=!0},p(n,o){t=n;const s={};o&32&&(s.animationOn=t[5]),o&4&&(s.stacked=t[2]),o&1&&(s.status=t[6]),o&1&&(s.index=t[8]),o&8&&(s.disabled=t[3]),o&3&&(s.card=t[1][t[8]]),l.$set(s)},i(n){r||(V(l.$$.fragment,n),r=!0)},o(n){B(l.$$.fragment,n),r=!1},d(n){n&&P(a),ae(l,n)}}}function Pt(e){let t,a=[],l=new Map,r,n=e[0];const o=s=>s[8];for(let s=0;s<n.length;s+=1){let i=ye(e,n,s),u=o(i);l.set(u,a[s]=ke(u,i))}return{c(){t=K("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){t=p(s,"DIV",{class:!0,style:!0});var i=D(t);for(let u=0;u<a.length;u+=1)a[u].l(i);i.forEach(P),this.h()},h(){_(t,"class","player-hand svelte-pfvujo"),E(t,"font-size",e[4]+"em")},m(s,i){R(s,t,i);for(let u=0;u<a.length;u+=1)a[u].m(t,null);r=!0},p(s,[i]){i&47&&(n=s[0],Ke(),a=pe(a,i,o,1,s,n,l,t,De,ke,null,ye),Ee()),(!r||i&16)&&E(t,"font-size",s[4]+"em")},i(s){if(!r){for(let i=0;i<n.length;i+=1)V(a[i]);r=!0}},o(s){for(let i=0;i<a.length;i+=1)B(a[i]);r=!1},d(s){s&&P(t);for(let i=0;i<a.length;i+=1)a[i].d()}}}function Ht(e,t,a){let l;ne(e,ie,u=>a(5,l=u));let{cardStatuses:r}=t,{playerHand:n}=t,{stacked:o}=t,{disabled:s}=t,{scale:i}=t;return e.$$set=u=>{"cardStatuses"in u&&a(0,r=u.cardStatuses),"playerHand"in u&&a(1,n=u.playerHand),"stacked"in u&&a(2,o=u.stacked),"disabled"in u&&a(3,s=u.disabled),"scale"in u&&a(4,i=u.scale)},[r,n,o,s,i,l]}class jt extends Y{constructor(t){super();X(this,t,Ht,Pt,Z,{cardStatuses:0,playerHand:1,stacked:2,disabled:3,scale:4})}}export{jt as P,ge as a,dt as b,$e as c,ut as d,st as e,Dt as f,pt as g,z as h,ct as i,Et as j,Ze as k,I as l,be as m,Ye as n,_e as p,gt as s,et as t,A as x};