var iA=Object.defineProperty,lA=Object.defineProperties;var qA=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var uA=Object.prototype.hasOwnProperty,fA=Object.prototype.propertyIsEnumerable;var E=(s,A,e)=>A in s?iA(s,A,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[A]=e,P=(s,A)=>{for(var e in A||(A={}))uA.call(A,e)&&E(s,e,A[e]);if(H)for(var e of H(A))fA.call(A,e)&&E(s,e,A[e]);return s},R=(s,A)=>lA(s,qA(A));import{a7 as f,S as W,i as K,s as U,j as N,m as Q,o as O,x as b,u as d,v as j,a6 as p,e as v,t as I,c as k,a as S,g as w,d as m,b as X,f as g,a1 as M,h as J,b2 as mA,l as C,r as Y,w as z,ar as cA,b0 as Z,k as bA,n as pA}from"./vendor-202ba1b8.js";import{I as dA}from"./index-f1572b2c.js";import{d as x}from"./index-78395626.js";import{i as $}from"./index-818f9b69.js";import{b as gA,g as AA}from"./setup-0524d8dd.js";import{n as _A}from"./index-944779ff.js";import{B as eA}from"./index-4e53ca7a.js";import{L as vA}from"./context-88a045a1.js";import{m as kA}from"./utils-2db7bfcb.js";import{a as SA}from"./index-7857f4f9.js";var YA={manual:f._("Manual"),automated:f._("Auto"),advanced:f._("Advanced")};const L={label:f._("Number of Bets")},GA=R(P({},L),{label:f._("Number of Games")}),hA={stake:L,sweeps:GA};var tA=hA[x]||L;function NA(s){let A,e,t=s[6]._(tA.label)+"",a;return{c(){A=v("div"),e=v("span"),a=I(t),this.h()},l(n){A=k(n,"DIV",{slot:!0});var i=S(A);e=k(i,"SPAN",{});var o=S(e);a=w(o,t),o.forEach(m),i.forEach(m),this.h()},h(){X(A,"slot","label")},m(n,i){g(n,A,i),M(A,e),M(e,a)},p(n,i){i&64&&t!==(t=n[6]._(tA.label)+"")&&J(a,t)},d(n){n&&m(A)}}}function QA(s){let A,e;return A=new dA({props:{stacked:!0,type:"number",disabled:s[5],"data-test":"limit-input",min:s[0],max:s[2],errorMessage:s[4],step:s[1],iconAfter:Number(s[3])===0?"infinity":void 0,value:String(s[3]),$$slots:{label:[NA]},$$scope:{ctx:s}}}),A.$on("blur",s[9]),A.$on("input",s[10]),{c(){N(A.$$.fragment)},l(t){Q(A.$$.fragment,t)},m(t,a){O(A,t,a),e=!0},p(t,[a]){const n={};a&32&&(n.disabled=t[5]),a&1&&(n.min=t[0]),a&4&&(n.max=t[2]),a&16&&(n.errorMessage=t[4]),a&2&&(n.step=t[1]),a&8&&(n.iconAfter=Number(t[3])===0?"infinity":void 0),a&8&&(n.value=String(t[3])),a&2112&&(n.$$scope={dirty:a,ctx:t}),A.$set(n)},i(t){e||(b(A.$$.fragment,t),e=!0)},o(t){d(A.$$.fragment,t),e=!1},d(t){j(A,t)}}}function OA(s,A,e){let t,a,n;p(s,$,q=>e(6,n=q));var{gamesLeft:i}=gA();p(s,i,q=>e(3,t=q));var{disabled:o}=AA();p(s,o,q=>e(5,a=q));let{min:r=0}=A,{step:l=1}=A,{max:c=999999999}=A;var _=!1;const G=()=>i.update(q=>Math.floor(q)),h=q=>i.set(Number(q.detail.currentTarget.value));return s.$$set=q=>{"min"in q&&e(0,r=q.min),"step"in q&&e(1,l=q.step),"max"in q&&e(2,c=q.max)},s.$$.update=()=>{s.$$.dirty&13&&_A(t,{min:r,max:c}).then(q=>{e(4,_=q)})},[r,l,c,t,_,a,n,i,o,G,h]}class zA extends W{constructor(A){super();K(this,A,OA,QA,U,{min:0,step:1,max:2})}}var xA={onLoss:f._("On Loss"),onWin:f._("On Win"),reset:f._("Reset"),increase:f._("Increase by:")};const aA={stopProfit:f._("Stop on Profit"),stopLoss:f._("Stop on Loss")},jA={stopProfit:f._("Stop on Net Gain"),stopLoss:f._("Stop on Loss")},MA={stake:aA,sweeps:jA};var $A=MA[x]||aA;const CA={start:f._("Start Autoplay"),stop:f._("Stop Autoplay"),finishing:f._("Finishing Game")};f._("Start Autobet"),f._("Stop Autobet"),f._("Finishing Bet");var ZA="data:audio/mpeg;base64,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";const BA={bet:new mA.Howl({src:[ZA]})};function IA(s){let A,e;return A=new eA({props:{align:"center",spacing:"mega",variant:"success",square:!0,$$slots:{default:[JA]},$$scope:{ctx:s}}}),A.$on("click",s[19]),{c(){N(A.$$.fragment)},l(t){Q(A.$$.fragment,t)},m(t,a){O(A,t,a),e=!0},p(t,a){const n={};a&2097224&&(n.$$scope={dirty:a,ctx:t}),A.$set(n)},i(t){e||(b(A.$$.fragment,t),e=!0)},o(t){d(A.$$.fragment,t),e=!1},d(t){j(A,t)}}}function wA(s){let A,e;return A=new eA({props:{disabled:s[2],loading:s[5],align:"center","data-test":"auto-bet-button","data-autobet-status":s[1],spacing:"mega",variant:"success",square:!0,$$slots:{default:[LA]},$$scope:{ctx:s}}}),A.$on("click",s[18]),{c(){N(A.$$.fragment)},l(t){Q(A.$$.fragment,t)},m(t,a){O(A,t,a),e=!0},p(t,a){const n={};a&4&&(n.disabled=t[2]),a&32&&(n.loading=t[5]),a&2&&(n["data-autobet-status"]=t[1]),a&2097225&&(n.$$scope={dirty:a,ctx:t}),A.$set(n)},i(t){e||(b(A.$$.fragment,t),e=!0)},o(t){d(A.$$.fragment,t),e=!1},d(t){j(A,t)}}}function JA(s){let A,e=s[6]._(s[3])+"",t;return{c(){A=v("span"),t=I(e)},l(a){A=k(a,"SPAN",{});var n=S(A);t=w(n,e),n.forEach(m)},m(a,n){g(a,A,n),M(A,t)},p(a,n){n&72&&e!==(e=a[6]._(a[3])+"")&&J(t,e)},d(a){a&&m(A)}}}function sA(s){let A,e,t;return e=new vA({}),{c(){A=v("div"),N(e.$$.fragment),this.h()},l(a){A=k(a,"DIV",{class:!0});var n=S(A);Q(e.$$.fragment,n),n.forEach(m),this.h()},h(){X(A,"class","loader svelte-1ssrsrs")},m(a,n){g(a,A,n),O(e,A,null),t=!0},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){d(e.$$.fragment,a),t=!1},d(a){a&&m(A),j(e)}}}function LA(s){let A,e=s[6]._(s[3])+"",t,a,n,i,o=!s[0]&&sA();return{c(){A=v("span"),t=I(e),a=bA(),o&&o.c(),n=C()},l(r){A=k(r,"SPAN",{});var l=S(A);t=w(l,e),l.forEach(m),a=pA(r),o&&o.l(r),n=C()},m(r,l){g(r,A,l),M(A,t),g(r,a,l),o&&o.m(r,l),g(r,n,l),i=!0},p(r,l){(!i||l&72)&&e!==(e=r[6]._(r[3])+"")&&J(t,e),r[0]?o&&(Y(),d(o,1,1,()=>{o=null}),z()):o?l&1&&b(o,1):(o=sA(),o.c(),b(o,1),o.m(n.parentNode,n))},i(r){i||(b(o),i=!0)},o(r){d(o),i=!1},d(r){r&&m(A),r&&m(a),o&&o.d(r),r&&m(n)}}}function TA(s){let A,e,t,a;const n=[wA,IA],i=[];function o(r,l){return r[4].isAuthenticated?0:1}return A=o(s),e=i[A]=n[A](s),{c(){e.c(),t=C()},l(r){e.l(r),t=C()},m(r,l){i[A].m(r,l),g(r,t,l),a=!0},p(r,[l]){let c=A;A=o(r),A===c?i[A].p(r,l):(Y(),d(i[c],1,1,()=>{i[c]=null}),z(),e=i[A],e?e.p(r,l):(e=i[A]=n[A](r),e.c()),b(e,1),e.m(t.parentNode,t))},i(r){a||(b(e),a=!0)},o(r){d(e),a=!1},d(r){i[A].d(r),r&&m(t)}}}function VA(s,A,e){let t,a,n,i,o,r,l,c,_,G,h;p(s,$,u=>e(6,h=u));var{meta:q}=SA();p(s,q,u=>e(4,_=u));let{disabled:B=!1}=A;var{fetching:T,send:V,amountValidationError:y,xstate:nA,valid:D}=AA();p(s,T,u=>e(5,G=u)),p(s,y,u=>e(17,c=u)),p(s,D,u=>e(16,l=u));var F=cA(nA,u=>Z("autobetTab.betting.nextBet.stop",u)?"finishing":Z("autobetTab.betting",u)?"stop":Z("advancedTab.betting.nextBet.stop",u)?"finishing":Z("advancedTab.betting",u)?"stop":"start");p(s,F,u=>e(1,r=u));const rA=()=>{V({type:"TOGGLE_AUTOBETTING"}),BA.bet.play()},oA=()=>kA.auth.open({tab:"register"});return s.$$set=u=>{"disabled"in u&&e(13,B=u.disabled)},s.$$.update=()=>{s.$$.dirty&2&&e(3,t=CA[r]),s.$$.dirty&2&&e(0,a=r==="start"),s.$$.dirty&131073&&e(15,n=a&&c),s.$$.dirty&65537&&e(14,i=a&&l===!1),s.$$.dirty&57346&&e(2,o=r==="finishing"||!!n||i||B)},[a,r,o,t,_,G,h,q,T,V,y,D,F,B,i,n,l,c,rA,oA]}class Ae extends W{constructor(A){super();K(this,A,VA,TA,U,{disabled:13})}}export{zA as G,Ae as a,xA as b,$A as c,YA as m};