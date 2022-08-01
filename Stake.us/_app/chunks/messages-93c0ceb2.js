var oe=Object.defineProperty,ce=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var B=(a,e,t)=>e in a?oe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,S=(a,e)=>{for(var t in e||(e={}))fe.call(e,t)&&B(a,t,e[t]);if(H)for(var t of H(e))de.call(e,t)&&B(a,t,e[t]);return a},y=(a,e)=>ce(a,ue(e));import{S as V,i as q,s as K,l as M,j as p,m as v,f as _,o as I,x as d,u as h,d as m,v as b,e as w,c as D,a as E,b as g,r as O,a8 as G,a9 as J,w as R,k as z,n as T,a1 as Q,a7 as f}from"./vendor-202ba1b8.js";import{P as Y}from"./index-e12aed51.js";import{I as Z}from"./context-88a045a1.js";import{b4 as k}from"./index-239f6385.js";import{d as he}from"./index-78395626.js";const L=400,U=1.2,Fe={faceDown:!0,dealt:!1};k.stand,k.push,k.double,k.bust,k.full;const me=["deal","hit","split","insurance","noInsurance","blackjack"],He=(a,e)=>a<=21&&(e>21||a>e)?"win":a>21?"lose":a===e?"draw":"lose",W=a=>{if(a.actions.length===0)return!0;const e=a.actions[a.actions.length-1];return me.includes(e)},Be=a=>a.findIndex(W),_e=a=>a.includes(21)?"21":a.filter((e,t)=>a.length>1?t===0&&a[0]>21?!0:e<=21:!0).join(", "),ge={A:[1,11],J:[10],Q:[10],K:[10],"10":[10],"9":[9],"8":[8],"7":[7],"6":[6],"5":[5],"4":[4],"3":[3],"2":[2],"0":[0]},ke=a=>ge[a],C=a=>a.filter(({faceDown:e})=>!e).reduce((e,{rank:t="0"})=>{const r=ke(t);return t!=="A"?e.map(o=>o+r[0]):e.length===1?r.map(o=>o+e[0]):e.map(o=>o+1)},[0]),X=a=>_e(C(a)),$=a=>C(a).some(e=>e===21),Se=({balance:a,amount:e,cardsCount:t,activePlayerStack:r})=>a>=e&&t===2&&$(r.cards)===!1,ye=({firstCard:a,secondCard:e,playerStacksCount:t,activePlayerStack:r,balance:o,amount:i})=>r.cards.length===2&&t===1&&a.rank===e.rank&&o>=i,pe=({activePlayerStack:a})=>C(a.cards).some(e=>e<21)&&$(a.cards)===!1,ve=({activePlayerStack:a})=>C(a.cards).some(e=>e<=21),Ie=({balance:a,amount:e,playedInsurance:t,playerStacksCount:r,cardsCount:o,firstDealerCard:i})=>{if(t)return!1;const c=i.rank==="A",n=r===1,s=o===2;return a>=e/2&&c&&n&&s},be=({playedInsurance:a,playerStacksCount:e,cardsCount:t,firstDealerCard:r})=>a?!1:r.rank==="A"&&e===1&&t===2,Ve=({player:a,dealer:e,balance:t,amount:r})=>{const o=[],i=a.filter(W),[c]=i||a;if(!c||!e[0])return[];const[n]=e[0].cards;if(!n)return[];const[s,l]=c.cards,u=c.cards.length,A=a.length,P=c.actions.includes("noInsurance")||c.actions.includes("insurance"),N=be({firstDealerCard:n,playerStacksCount:A,cardsCount:u,playedInsurance:P}),F=Ie({firstDealerCard:n,playerStacksCount:A,cardsCount:u,balance:t,amount:r,playedInsurance:P}),se=Se({cardsCount:u,balance:t,amount:r,activePlayerStack:c}),ie=ye({firstCard:s,secondCard:l,balance:t,amount:r,playerStacksCount:A,activePlayerStack:c}),re=ve({activePlayerStack:c}),le=pe({activePlayerStack:c});return F||N?(F&&o.push("insurance"),N&&o.push("noInsurance"),o):(le&&o.push("hit"),re&&o.push("stand"),ie&&o.push("split"),se&&o.push("double"),o)};function x(a,e,t){const r=a.slice();return r[6]=e[t],r[8]=t,r}function ee(a,e){let t,r,o;return r=new Y({props:{animationOn:e[3],minCards:1,value:e[4][e[8]]!=="0"&&e[4][e[8]],transition:L,destinationElement:e[2],cardSizeRatio:e[1],cards:e[6].cards.map(e[5])}}),{key:a,first:null,c(){t=M(),p(r.$$.fragment),this.h()},l(i){t=M(),v(r.$$.fragment,i),this.h()},h(){this.first=t},m(i,c){_(i,t,c),I(r,i,c),o=!0},p(i,c){e=i;const n={};c&8&&(n.animationOn=e[3]),c&17&&(n.value=e[4][e[8]]!=="0"&&e[4][e[8]]),c&4&&(n.destinationElement=e[2]),c&2&&(n.cardSizeRatio=e[1]),c&1&&(n.cards=e[6].cards.map(e[5])),r.$set(n)},i(i){o||(d(r.$$.fragment,i),o=!0)},o(i){h(r.$$.fragment,i),o=!1},d(i){i&&m(t),b(r,i)}}}function Ce(a){let e,t=[],r=new Map,o,i=a[0];const c=n=>n[8];for(let n=0;n<i.length;n+=1){let s=x(a,i,n),l=c(s);r.set(l,t[n]=ee(l,s))}return{c(){e=w("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=D(n,"DIV",{class:!0,"data-test":!0});var s=E(e);for(let l=0;l<t.length;l+=1)t[l].l(s);s.forEach(m),this.h()},h(){g(e,"class","dealer svelte-15ph9dz"),g(e,"data-test","dealer")},m(n,s){_(n,e,s);for(let l=0;l<t.length;l+=1)t[l].m(e,null);o=!0},p(n,[s]){s&31&&(i=n[0],O(),t=G(t,s,c,1,n,i,r,e,J,ee,null,x),R())},i(n){if(!o){for(let s=0;s<i.length;s+=1)d(t[s]);o=!0}},o(n){for(let s=0;s<t.length;s+=1)h(t[s]);o=!1},d(n){n&&m(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function Ae(a,e,t){let r,{dealer:o}=e,{cardSizeRatio:i=U}=e,{destinationElement:c}=e,{animationOn:n=!0}=e;const s=l=>y(S({},l),{disabled:!0,dealt:l.dealt===void 0?!0:l.dealt,faceDown:l.faceDown===void 0?!1:l.faceDown});return a.$$set=l=>{"dealer"in l&&t(0,o=l.dealer),"cardSizeRatio"in l&&t(1,i=l.cardSizeRatio),"destinationElement"in l&&t(2,c=l.destinationElement),"animationOn"in l&&t(3,n=l.animationOn)},a.$$.update=()=>{a.$$.dirty&1&&t(4,r=o.map(l=>X(l.cards)))},[o,i,c,n,r,s]}class qe extends V{constructor(e){super();q(this,e,Ae,Ce,K,{dealer:0,cardSizeRatio:1,destinationElement:2,animationOn:3})}}function te(a,e,t){const r=a.slice();return r[7]=e[t],r[9]=t,r}function ne(a){let e,t,r,o;return e=new Z({props:{icon:"arrow-left",style:"font-size: 2em; position: absolute; left: 100%; fill: var(--blue-500)"}}),r=new Z({props:{icon:"arrow-right",style:"font-size: 2em; position: absolute; right: 100%; fill: var(--blue-500)"}}),{c(){p(e.$$.fragment),t=z(),p(r.$$.fragment)},l(i){v(e.$$.fragment,i),t=T(i),v(r.$$.fragment,i)},m(i,c){I(e,i,c),_(i,t,c),I(r,i,c),o=!0},i(i){o||(d(e.$$.fragment,i),d(r.$$.fragment,i),o=!0)},o(i){h(e.$$.fragment,i),h(r.$$.fragment,i),o=!1},d(i){b(e,i),i&&m(t),b(r,i)}}}function ae(a,e){let t,r,o,i,c;r=new Y({props:{animationOn:e[4],minCards:1,value:e[5][e[9]]!=="0"&&e[5][e[9]],status:e[3][e[9]],transition:L,destinationElement:e[2],cardSizeRatio:e[1],cards:e[7].cards.map(e[6])}});let n=e[3][e[9]]==="active"&&ne();return{key:a,first:null,c(){t=w("div"),p(r.$$.fragment),o=z(),n&&n.c(),i=z(),this.h()},l(s){t=D(s,"DIV",{class:!0});var l=E(t);v(r.$$.fragment,l),o=T(l),n&&n.l(l),i=T(l),l.forEach(m),this.h()},h(){g(t,"class","hand-wrap svelte-eq0hy3"),this.first=t},m(s,l){_(s,t,l),I(r,t,null),Q(t,o),n&&n.m(t,null),Q(t,i),c=!0},p(s,l){e=s;const u={};l&16&&(u.animationOn=e[4]),l&33&&(u.value=e[5][e[9]]!=="0"&&e[5][e[9]]),l&9&&(u.status=e[3][e[9]]),l&4&&(u.destinationElement=e[2]),l&2&&(u.cardSizeRatio=e[1]),l&1&&(u.cards=e[7].cards.map(e[6])),r.$set(u),e[3][e[9]]==="active"?n?l&9&&d(n,1):(n=ne(),n.c(),d(n,1),n.m(t,i)):n&&(O(),h(n,1,1,()=>{n=null}),R())},i(s){c||(d(r.$$.fragment,s),d(n),c=!0)},o(s){h(r.$$.fragment,s),h(n),c=!1},d(s){s&&m(t),b(r),n&&n.d()}}}function we(a){let e,t=[],r=new Map,o,i=a[0];const c=n=>n[9];for(let n=0;n<i.length;n+=1){let s=te(a,i,n),l=c(s);r.set(l,t[n]=ae(l,s))}return{c(){e=w("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=D(n,"DIV",{class:!0,"data-test":!0});var s=E(e);for(let l=0;l<t.length;l+=1)t[l].l(s);s.forEach(m),this.h()},h(){g(e,"class","player svelte-eq0hy3"),g(e,"data-test","player")},m(n,s){_(n,e,s);for(let l=0;l<t.length;l+=1)t[l].m(e,null);o=!0},p(n,[s]){s&63&&(i=n[0],O(),t=G(t,s,c,1,n,i,r,e,J,ae,null,te),R())},i(n){if(!o){for(let s=0;s<i.length;s+=1)d(t[s]);o=!0}},o(n){for(let s=0;s<t.length;s+=1)h(t[s]);o=!1},d(n){n&&m(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function De(a,e,t){let r,{player:o}=e,{cardSizeRatio:i=U}=e,{destinationElement:c}=e,{playerStackStatuses:n}=e,{animationOn:s=!0}=e;const l=u=>y(S({},u),{disabled:!0,dealt:u.dealt===void 0?!0:u.dealt,faceDown:u.faceDown===void 0?!1:u.faceDown});return a.$$set=u=>{"player"in u&&t(0,o=u.player),"cardSizeRatio"in u&&t(1,i=u.cardSizeRatio),"destinationElement"in u&&t(2,c=u.destinationElement),"playerStackStatuses"in u&&t(3,n=u.playerStackStatuses),"animationOn"in u&&t(4,s=u.animationOn)},a.$$.update=()=>{a.$$.dirty&1&&t(5,r=o.map(u=>X(u.cards)))},[o,i,c,n,s,r,l]}class Ke extends V{constructor(e){super();q(this,e,De,we,K,{player:0,cardSizeRatio:1,destinationElement:2,playerStackStatuses:3,animationOn:4})}}const j={offer:f._("Insurance?"),hit:f._("Hit"),double:f._("Double"),split:f._("Split"),stand:f._("Stand"),noInsurance:f._("No insurance"),bet:f._("Make a bet"),insurance:f._("Accept insurance"),insuranceHotkey:f._("Accept insurance"),noInsuranceHotkey:f._("No insurance"),player:f._("Player"),dealer:f._("Dealer")},Ee=y(S({},j),{player:f._("Customer"),bet:f._("Play")}),Oe={stake:j,sweeps:Ee};var Me=Oe[he]||j;export{L as C,qe as D,Fe as F,Ke as P,Ve as a,U as b,He as d,Be as g,Me as m};
