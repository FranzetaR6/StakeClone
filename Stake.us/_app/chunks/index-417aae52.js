import{S as q,i as Q,s as B,e as E,t as N,k as I,c as D,a as w,g as y,d as g,n as T,b as c,$ as b,f as S,a1 as v,a8 as z,bg as X,ae as k,am as j,j as K,m as Y,o as x,a2 as $,an as AA,ao as eA,ap as sA,x as W,u as M,v as tA,ah as aA,b2 as C,aB as lA,a0 as P,h as iA,a6 as rA}from"./vendor-202ba1b8.js";import{s as nA}from"./variables-863c2d32.js";import{b8 as F}from"./index-239f6385.js";import{a as cA}from"./index-0ce918a4.js";const oA=98,dA=2,uA=8,VA=36,fA=300,ZA=.01,qA=.01,QA=98,BA=1.0102,CA=9900;function J(a,A,e){const r=a.slice();return r[1]=A[e],r}function L(a,A){let e,r,n=A[1]+"",d,s;return{key:a,first:null,c(){e=E("div"),r=E("div"),d=N(n),s=I(),this.h()},l(t){e=D(t,"DIV",{class:!0,style:!0});var l=w(e);r=D(l,"DIV",{class:!0});var h=w(r);d=y(h,n),h.forEach(g),s=T(l),l.forEach(g),this.h()},h(){c(r,"class","value svelte-16rlbb1"),c(e,"class","content svelte-16rlbb1"),b(e,"left",A[1]+"%"),this.first=e},m(t,l){S(t,e,l),v(e,r),v(r,d),v(e,s)},p(t,l){A=t},d(t){t&&g(e)}}}function vA(a){let A,e=[],r=new Map,n=a[0];const d=s=>s[1];for(let s=0;s<n.length;s+=1){let t=J(a,n,s),l=d(t);r.set(l,e[s]=L(l,t))}return{c(){A=E("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){A=D(s,"DIV",{class:!0});var t=w(A);for(let l=0;l<e.length;l+=1)e[l].l(t);t.forEach(g),this.h()},h(){c(A,"class","wrap svelte-16rlbb1")},m(s,t){S(s,A,t);for(let l=0;l<e.length;l+=1)e[l].m(A,null)},p(s,[t]){t&1&&(n=s[0],e=z(e,t,d,1,s,n,r,A,X,L,null,J))},i:k,o:k,d(s){s&&g(A);for(let t=0;t<e.length;t+=1)e[t].d()}}}function hA(a){var A=[0,25,50,75,100];return[A]}class _A extends q{constructor(A){super();Q(this,A,hA,vA,B,{})}}var mA="/_app/assets/lines-ad4ff13e.svg",gA="/_app/assets/sphere-dice-247a7064.svg",bA="/_app/assets/classic-dice-e473abc4.svg";const O={lines:mA,sphereDice:gA,classicDice:bA};function pA(a){let A,e,r,n,d,s,t,l,h,i,u,f,V,_,G,H;e=new _A({});const Z=a[5].default,p=j(Z,a,a[4],null);return{c(){A=E("div"),K(e.$$.fragment),r=I(),n=E("div"),p&&p.c(),d=I(),s=E("div"),t=E("div"),h=I(),i=E("div"),f=I(),V=E("input"),this.h()},l(o){A=D(o,"DIV",{class:!0,"data-test-dice-condition":!0,style:!0});var m=w(A);Y(e.$$.fragment,m),r=T(m),n=D(m,"DIV",{class:!0});var U=w(n);p&&p.l(U),d=T(U),s=D(U,"DIV",{class:!0});var R=w(s);t=D(R,"DIV",{class:!0}),w(t).forEach(g),h=T(R),i=D(R,"DIV",{class:!0,style:!0}),w(i).forEach(g),R.forEach(g),f=T(U),V=D(U,"INPUT",{min:!0,max:!0,type:!0,class:!0,"data-test":!0}),U.forEach(g),m.forEach(g),this.h()},h(){c(t,"class",l="lower "+a[0]+" svelte-1hc4rro"),c(i,"class",u="higher "+a[0]+" svelte-1hc4rro"),b(i,"width",a[1]+"%"),c(s,"class","range svelte-1hc4rro"),V.value=a[1],V.disabled=a[2],c(V,"min",dA),c(V,"max",oA),c(V,"type","range"),c(V,"class","classic-slider svelte-1hc4rro"),c(V,"data-test","dice-slider"),c(n,"class","content svelte-1hc4rro"),c(A,"class","wrap svelte-1hc4rro"),c(A,"data-test-dice-condition",a[0]),b(A,"--slider-height",uA+"px"),b(A,"--drag-size",VA+"px"),b(A,"--max-game-board-width",nA.maxGameBoardWidth),b(A,"--lines-asset","url("+O.lines+")")},m(o,m){S(o,A,m),x(e,A,null),v(A,r),v(A,n),p&&p.m(n,null),v(n,d),v(n,s),v(s,t),v(s,h),v(s,i),v(n,f),v(n,V),_=!0,G||(H=$(V,"input",a[6]),G=!0)},p(o,[m]){p&&p.p&&(!_||m&16)&&AA(p,Z,o,o[4],_?sA(Z,o[4],m,null):eA(o[4]),null),(!_||m&1&&l!==(l="lower "+o[0]+" svelte-1hc4rro"))&&c(t,"class",l),(!_||m&1&&u!==(u="higher "+o[0]+" svelte-1hc4rro"))&&c(i,"class",u),(!_||m&2)&&b(i,"width",o[1]+"%"),(!_||m&2)&&(V.value=o[1]),(!_||m&4)&&(V.disabled=o[2]),(!_||m&1)&&c(A,"data-test-dice-condition",o[0])},i(o){_||(W(e.$$.fragment,o),W(p,o),_=!0)},o(o){M(e.$$.fragment,o),M(p,o),_=!1},d(o){o&&g(A),tA(e),p&&p.d(o),G=!1,H()}}}function EA(a,A,e){let{$$slots:r={},$$scope:n}=A;var d=aA();let{condition:s}=A,{target:t}=A,{disabled:l}=A;const h=i=>{d("range-change",i)};return a.$$set=i=>{"condition"in i&&e(0,s=i.condition),"target"in i&&e(1,t=i.target),"disabled"in i&&e(2,l=i.disabled),"$$scope"in i&&e(4,n=i.$$scope)},[s,t,l,d,n,r,h]}class HA extends q{constructor(A){super();Q(this,A,EA,pA,B,{condition:0,target:1,disabled:2})}}var DA="/_app/assets/rolling-4e568fe7.mp3",wA="data:audio/mpeg;base64,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",UA="/_app/assets/win-bfb12110.mp3";const NA={win:new C.Howl({src:UA}),tick:new C.Howl({src:wA}),rolling:new C.Howl({src:DA})};function IA(a){let A,e,r,n,d,s,t=F(a[0])+"",l,h,i;return{c(){A=E("div"),e=E("div"),r=E("img"),d=I(),s=E("div"),l=N(t),this.h()},l(u){A=D(u,"DIV",{class:!0,style:!0});var f=w(A);e=D(f,"DIV",{class:!0,style:!0});var V=w(e);r=D(V,"IMG",{class:!0,src:!0,alt:!0}),d=T(V),s=D(V,"DIV",{class:!0,style:!0});var _=w(s);l=y(_,t),_.forEach(g),V.forEach(g),f.forEach(g),this.h()},h(){c(r,"class","dice svelte-hx4uck"),lA(r.src,n=O.classicDice)||c(r,"src",n),c(r,"alt","Dice"),c(s,"class",h="result "+a[1]+" svelte-hx4uck"),b(s,"--dice-result-transition",a[3]+"ms"),c(e,"class",i="hide-show "+a[1]+" svelte-hx4uck"),b(e,"--dice-scale-transition",a[4]+"ms"),P(e,"is-hidden",a[2]),c(A,"class","translate-x svelte-hx4uck"),b(A,"--dice-slide-transition",a[5]+"ms"),b(A,"transform","translate("+a[0]+"%, 0)")},m(u,f){S(u,A,f),v(A,e),v(e,r),v(e,d),v(e,s),v(s,l)},p(u,[f]){f&1&&t!==(t=F(u[0])+"")&&iA(l,t),f&2&&h!==(h="result "+u[1]+" svelte-hx4uck")&&c(s,"class",h),f&8&&b(s,"--dice-result-transition",u[3]+"ms"),f&2&&i!==(i="hide-show "+u[1]+" svelte-hx4uck")&&c(e,"class",i),f&16&&b(e,"--dice-scale-transition",u[4]+"ms"),f&6&&P(e,"is-hidden",u[2]),f&32&&b(A,"--dice-slide-transition",u[5]+"ms"),f&1&&b(A,"transform","translate("+u[0]+"%, 0)")},i:k,o:k,d(u){u&&g(A)}}}function TA(a,A,e){let r,n,d,s;rA(a,cA,i=>e(6,s=i));let{result:t}=A,{status:l}=A,{isHidden:h}=A;return a.$$set=i=>{"result"in i&&e(0,t=i.result),"status"in i&&e(1,l=i.status),"isHidden"in i&&e(2,h=i.isHidden)},a.$$.update=()=>{a.$$.dirty&64&&e(5,r=s?fA:0),a.$$.dirty&64&&e(4,n=s?500:0),a.$$.dirty&64&&e(3,d=s?100:0)},[t,l,h,d,n,r,s]}class yA extends q{constructor(A){super();Q(this,A,TA,IA,B,{result:0,status:1,isHidden:2})}}export{qA as C,fA as D,ZA as E,BA as P,dA as S,QA as a,CA as b,HA as c,yA as d,oA as e,NA as s};
