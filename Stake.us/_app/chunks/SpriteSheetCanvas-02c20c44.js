import{aV as Z,S as $,i as ee,s as ie,e as ae,c as ne,a as te,d as Y,b as y,f as oe,a3 as re,ae as j,a6 as le}from"./vendor-202ba1b8.js";const se="@@spriteSheetPrerender",ve=()=>Z(se),de=({currentAnimation:l,steps:a,stepsRemaining:o})=>{const m=Math.min(a-Math.round(o),a-1);return l[m]};function ue(l){let a,o,m;return{c(){a=ae("canvas"),this.h()},l(r){a=ne(r,"CANVAS",{class:!0,width:!0,height:!0}),te(a).forEach(Y),this.h()},h(){y(a,"class","sprite-sheet svelte-13vrxb2"),y(a,"width",l[0]),y(a,"height",l[1])},m(r,c){oe(r,a,c),o||(m=re(l[3].call(null,a)),o=!0)},p(r,c){c[0]&1&&y(a,"width",r[0]),c[0]&2&&y(a,"height",r[1])},i:j,o:j,d(r){r&&Y(a),o=!1,m()}}}function me(l,a,o){let m;var r,c,z,C,I;let{animations:i}=a,{speed:N=1}=a,{hideOnFinish:b=!1}=a;var f=null,H=0,M=0,x=0,F=0,n=0,t=((r=i==null?void 0:i[n])===null||r===void 0?void 0:r.meta)||{},R=0,h=((c=i==null?void 0:i[n])===null||c===void 0?void 0:c.loops)||0,v=((I=(z=t==null?void 0:t.animations)===null||z===void 0?void 0:z[(C=i==null?void 0:i[n])===null||C===void 0?void 0:C.name])===null||I===void 0?void 0:I.length)||0,O,g,_,S,p,A=!1,D=!1,V,d,W=ve();le(l,W,e=>o(29,m=e));var E=e=>(V=e,A=!0,o(7,d=V.getContext("2d")),{destroy:()=>A=!1}),L=e=>{o(0,g=e.sourceSize.w),o(1,_=e.sourceSize.h),x=e.spriteSourceSize.x,F=e.spriteSourceSize.y,S=e.spriteSourceSize.w,p=e.spriteSourceSize.h,H=e.frame.x,M=e.frame.y},k=()=>{var e,s,u;n=0,(i==null?void 0:i.length)&&(h=i[n].loops,R=((e=i[n])===null||e===void 0?void 0:e.framesOfDelay)||0,f=(s=i==null?void 0:i[n])===null||s===void 0?void 0:s.img,t=(u=i==null?void 0:i[n])===null||u===void 0?void 0:u.meta,v=t==null?void 0:t.animations[i[n].name].length)},B=()=>{var e,s,u;n++,h=(e=i[n])===null||e===void 0?void 0:e.loops,f=(s=i==null?void 0:i[n])===null||s===void 0?void 0:s.img,t=(u=i==null?void 0:i[n])===null||u===void 0?void 0:u.meta},G=()=>{var e,s;if(D=!1,!(n+1>i.length||i.length===0||A===!1)){h===0&&B();var u=(e=i==null?void 0:i[n])===null||e===void 0?void 0:e.name,T=(s=t==null?void 0:t.animations)===null||s===void 0?void 0:s[u];if(!(!u||!T)){var X=T.length;if(v===0&&h!==0&&(v=X),R===0){var w=de({currentAnimation:T,steps:X,stepsRemaining:v});if(v=v-1*N,O===w){O=w,P(),v===0&&h--,v===0&&h===0&&b&&d.clearRect(0,0,g,_);return}if(v===0&&h--,v===0&&h===0&&b)d.clearRect(0,0,g,_);else{d.clearRect(x,F,S,p),O=w;var Q=t==null?void 0:t.frames[w],q=m==null?void 0:m[i[n].name],U=q==null?void 0:q[w];L(Q),J(U)}}else R--;P()}}},P=()=>{D===!1&&(D=!0,window.requestAnimationFrame(G))},J=e=>{(e==null?void 0:e.nodeType)?d.drawImage(e,0,0):e?d.drawImage(e,x,F,S,p):f&&d.drawImage(f,H,M,S,p,x,F,S,p)},K=()=>{k(),t&&f&&(d.clearRect(0,0,g,_),P())};return l.$$set=e=>{"animations"in e&&o(4,i=e.animations),"speed"in e&&o(5,N=e.speed),"hideOnFinish"in e&&o(6,b=e.hideOnFinish)},l.$$.update=()=>{l.$$.dirty[0]&144&&d&&i.length&&K()},[g,_,W,E,i,N,b,d]}class he extends ${constructor(a){super();ee(this,a,me,ue,ie,{animations:4,speed:5,hideOnFinish:6},null,[-1,-1])}}export{he as S};
