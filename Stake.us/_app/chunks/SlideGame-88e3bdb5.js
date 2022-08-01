import{S as le,i as ie,s as te,e as C,j as b,c as H,a as Q,m as h,d as k,b as z,f as v,o as S,x as c,u as _,v as N,k as F,l as $,n as M,r as j,w as D,a6 as K,Q as ae,aG as ne,_ as re,ae as oe,a4 as se,t as de,g as me,h as fe}from"./vendor-202ba1b8.js";import{i as ue}from"./index-818f9b69.js";import{V as ce,G as _e,M as pe}from"./index-dfa4cdc7.js";import{M as ke,m as P}from"./messages-92361a01.js";import{M as ve}from"./MultiplayerSlideBet.generated-ef4b6c2f.js";import{M as ge}from"./index-caf95cd0.js";import{T as be}from"./index-7a29fbcc.js";import{B as he}from"./index-4e53ca7a.js";import{f as Se}from"./Result-fda0b987.js";const Ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SlideGameLookup"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gameId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slideGame"},arguments:[{kind:"Argument",name:{kind:"Name",value:"gameId"},value:{kind:"Variable",name:{kind:"Name",value:"gameId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"seed"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"seed"}}]}},{kind:"Field",name:{kind:"Name",value:"hash"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"hash"}},{kind:"Field",name:{kind:"Name",value:"number"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"MultiplayerSlide"}},{kind:"Field",name:{kind:"Name",value:"leaderboard"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MultiplayerSlideBet"}}]}}]}}]}},...ke.definitions,...ve.definitions]};function U(n,t,i){const e=n.slice();return e[27]=t[i][0],e[28]=t[i][1].message,e}function $e(n){let t,i,e,l,s,r,f,m;t=new _e({props:{gameNumber:n[5],id:n[7],game:"SlideGame",startTime:n[2]}}),l=new be({props:{$$slots:{default:[Fe]},$$scope:{ctx:n}}});let u=n[1]==="leaderboard"&&X(n),o=n[1]==="result"&&Y(n);return{c(){b(t.$$.fragment),i=F(),e=C("div"),b(l.$$.fragment),s=F(),u&&u.c(),r=F(),o&&o.c(),f=$(),this.h()},l(a){h(t.$$.fragment,a),i=M(a),e=H(a,"DIV",{class:!0});var d=Q(e);h(l.$$.fragment,d),d.forEach(k),s=M(a),u&&u.l(a),r=M(a),o&&o.l(a),f=$(),this.h()},h(){z(e,"class","center svelte-1xdcda7")},m(a,d){S(t,a,d),v(a,i,d),v(a,e,d),S(l,e,null),v(a,s,d),u&&u.m(a,d),v(a,r,d),o&&o.m(a,d),v(a,f,d),m=!0},p(a,d){const p={};d[0]&32&&(p.gameNumber=a[5]),d[0]&128&&(p.id=a[7]),d[0]&4&&(p.startTime=a[2]),t.$set(p);const y={};d[0]&2562|d[1]&1&&(y.$$scope={dirty:d,ctx:a}),l.$set(y),a[1]==="leaderboard"?u?(u.p(a,d),d[0]&2&&c(u,1)):(u=X(a),u.c(),c(u,1),u.m(r.parentNode,r)):u&&(j(),_(u,1,1,()=>{u=null}),D()),a[1]==="result"?o?(o.p(a,d),d[0]&2&&c(o,1)):(o=Y(a),o.c(),c(o,1),o.m(f.parentNode,f)):o&&(j(),_(o,1,1,()=>{o=null}),D())},i(a){m||(c(t.$$.fragment,a),c(l.$$.fragment,a),c(u),c(o),m=!0)},o(a){_(t.$$.fragment,a),_(l.$$.fragment,a),_(u),_(o),m=!1},d(a){N(t,a),a&&k(i),a&&k(e),N(l),a&&k(s),u&&u.d(a),a&&k(r),o&&o.d(a),a&&k(f)}}}function ye(n){let t,i;return t=new ge({}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,l){S(t,e,l),i=!0},p:oe,i(e){i||(c(t.$$.fragment,e),i=!0)},o(e){_(t.$$.fragment,e),i=!1},d(e){N(t,e)}}}function Ge(n){let t=n[11]._(n[28])+"",i,e;return{c(){i=de(t),e=F()},l(l){i=me(l,t),e=M(l)},m(l,s){v(l,i,s),v(l,e,s)},p(l,s){s[0]&2560&&t!==(t=l[11]._(l[28])+"")&&fe(i,t)},d(l){l&&k(i),l&&k(e)}}}function W(n){let t,i;function e(){return n[25](n[27])}return t=new he({props:{active:n[1]===n[27],$$slots:{default:[Ge]},$$scope:{ctx:n}}}),t.$on("click",e),{c(){b(t.$$.fragment)},l(l){h(t.$$.fragment,l)},m(l,s){S(t,l,s),i=!0},p(l,s){n=l;const r={};s[0]&514&&(r.active=n[1]===n[27]),s[0]&2560|s[1]&1&&(r.$$scope={dirty:s,ctx:n}),t.$set(r)},i(l){i||(c(t.$$.fragment,l),i=!0)},o(l){_(t.$$.fragment,l),i=!1},d(l){N(t,l)}}}function Fe(n){let t,i,e=n[9],l=[];for(let r=0;r<e.length;r+=1)l[r]=W(U(n,e,r));const s=r=>_(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=$()},l(r){for(let f=0;f<l.length;f+=1)l[f].l(r);t=$()},m(r,f){for(let m=0;m<l.length;m+=1)l[m].m(r,f);v(r,t,f),i=!0},p(r,f){if(f[0]&2562){e=r[9];let m;for(m=0;m<e.length;m+=1){const u=U(r,e,m);l[m]?(l[m].p(u,f),c(l[m],1)):(l[m]=W(u),l[m].c(),c(l[m],1),l[m].m(t.parentNode,t))}for(j(),m=e.length;m<l.length;m+=1)s(m);D()}},i(r){if(!i){for(let f=0;f<e.length;f+=1)c(l[f]);i=!0}},o(r){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)_(l[f]);i=!1},d(r){se(l,r),r&&k(t)}}}function X(n){let t,i;return t=new pe({props:{leaderboard:n[8],type:"cashoutAt"}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,l){S(t,e,l),i=!0},p(e,l){const s={};l[0]&256&&(s.leaderboard=e[8]),t.$set(s)},i(e){i||(c(t.$$.fragment,e),i=!0)},o(e){_(t.$$.fragment,e),i=!1},d(e){N(t,e)}}}function Y(n){let t,i;return t=new Se({props:{multiplier:n[3]}}),{c(){b(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,l){S(t,e,l),i=!0},p(e,l){const s={};l[0]&8&&(s.multiplier=e[3]),t.$set(s)},i(e){i||(c(t.$$.fragment,e),i=!0)},o(e){_(t.$$.fragment,e),i=!1},d(e){N(t,e)}}}function Z(n){let t,i,e;return i=new ce({props:{game:"slide",loading:n[10],hash:n[6],seed:n[4]}}),{c(){t=C("div"),b(i.$$.fragment),this.h()},l(l){t=H(l,"DIV",{class:!0});var s=Q(t);h(i.$$.fragment,s),s.forEach(k),this.h()},h(){z(t,"class","footer svelte-1xdcda7")},m(l,s){v(l,t,s),S(i,t,null),e=!0},p(l,s){const r={};s[0]&1024&&(r.loading=l[10]),s[0]&64&&(r.hash=l[6]),s[0]&16&&(r.seed=l[4]),i.$set(r)},i(l){e||(c(i.$$.fragment,l),e=!0)},o(l){_(i.$$.fragment,l),e=!1},d(l){l&&k(t),N(i)}}}function Me(n){let t,i,e,l,s,r;const f=[ye,$e],m=[];function u(a,d){return a[10]?0:1}i=u(n),e=m[i]=f[i](n);let o=n[1]==="result"&&Z(n);return{c(){t=C("div"),e.c(),l=F(),o&&o.c(),s=$(),this.h()},l(a){t=H(a,"DIV",{class:!0});var d=Q(t);e.l(d),d.forEach(k),l=M(a),o&&o.l(a),s=$(),this.h()},h(){z(t,"class","content svelte-1xdcda7")},m(a,d){v(a,t,d),m[i].m(t,null),v(a,l,d),o&&o.m(a,d),v(a,s,d),r=!0},p(a,d){let p=i;i=u(a),i===p?m[i].p(a,d):(j(),_(m[p],1,1,()=>{m[p]=null}),D(),e=m[i],e?e.p(a,d):(e=m[i]=f[i](a),e.c()),c(e,1),e.m(t,null)),a[1]==="result"?o?(o.p(a,d),d[0]&2&&c(o,1)):(o=Z(a),o.c(),c(o,1),o.m(s.parentNode,s)):o&&(j(),_(o,1,1,()=>{o=null}),D())},i(a){r||(c(e),c(o),r=!0)},o(a){_(e),_(o),r=!1},d(a){a&&k(t),m[i].d(),a&&k(l),o&&o.d(a),a&&k(s)}}}function je(n,t,i){let e,l,s,r,f,m,u,o,a,d,p,y;K(n,ue,g=>i(11,y=g));var I,w,T,V,B,L,q,E,O,A;let{gameId:R}=t;var x={result:{message:P.result},leaderboard:{message:P.leaderboard}},G=ae(Ne,{gameId:R});K(n,G,g=>i(24,p=g)),ne(G);var J="result";const ee=g=>i(1,J=g);return n.$$set=g=>{"gameId"in g&&i(12,R=g.gameId)},n.$$.update=()=>{n.$$.dirty[0]&16777216&&i(23,e=p==null?void 0:p.data),n.$$.dirty[0]&16777216&&i(10,l=p.fetching),n.$$.dirty[0]&4096&&i(0,G.variables={gameId:R},G),n.$$.dirty[0]&8396800&&i(8,r=(i(13,I=e==null?void 0:e.slideGame)===null||I===void 0?void 0:I.leaderboard)||[]),n.$$.dirty[0]&8404992&&i(7,f=(i(14,w=e==null?void 0:e.slideGame)===null||w===void 0?void 0:w.id)||""),n.$$.dirty[0]&8486912&&i(6,m=(i(16,V=i(15,T=e==null?void 0:e.slideGame)===null||T===void 0?void 0:T.hash)===null||V===void 0?void 0:V.hash)||""),n.$$.dirty[0]&8781824&&i(5,u=i(18,L=i(17,B=e==null?void 0:e.slideGame)===null||B===void 0?void 0:B.hash)===null||L===void 0?void 0:L.number),n.$$.dirty[0]&9961472&&i(4,o=(i(20,E=i(19,q=e==null?void 0:e.slideGame)===null||q===void 0?void 0:q.seed)===null||E===void 0?void 0:E.seed)||""),n.$$.dirty[0]&10485760&&i(3,a=i(21,O=e==null?void 0:e.slideGame)===null||O===void 0?void 0:O.multiplier),n.$$.dirty[0]&12582912&&i(2,d=(i(22,A=e==null?void 0:e.slideGame)===null||A===void 0?void 0:A.startTime)||"")},i(9,s=re.entries(x)),[G,J,d,a,o,u,m,f,r,s,l,y,R,I,w,T,V,B,L,q,E,O,A,e,p,ee]}class Oe extends le{constructor(t){super();ie(this,t,je,Me,te,{gameId:12},null,[-1,-1])}}export{Oe as S};