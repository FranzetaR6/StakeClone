import{a7 as _,S as F,i as H,s as W,j as v,m as k,o as I,x as g,u as p,v as y,e as E,c as j,a as T,d as h,b as M,$ as V,f as w,r as P,w as B,t as S,g as O,a1 as R,h as z,ae as D,l as A,a6 as U,am as x,an as ee,ao as te,ap as ne,k as ae,n as oe,a4 as ge,ag as le,B as q,ai as pe,p as he,q as $e}from"./vendor-202ba1b8.js";import{m as we}from"./utils-2db7bfcb.js";import{i as be}from"./index-818f9b69.js";import{H as re}from"./index-6a61ceab.js";import{a as ve}from"./index-7857f4f9.js";import{I as ie}from"./context-88a045a1.js";import{U as d}from"./index-239f6385.js";import{e as ke,k as Ie}from"./index-78395626.js";import{g as ye}from"./helpers-3511dbf4.js";import{T as se}from"./index-c961e4f3.js";import{T as Me}from"./index-ad8572b8.js";import{B as Ee}from"./index-4e53ca7a.js";var N={hidden:_._("Hidden"),hiddenTooltip:_._("This user has privacy enabled")};function je(a){let e,n=JSON.stringify(a[0])+"",t;return{c(){e=E("span"),t=S(n),this.h()},l(o){e=j(o,"SPAN",{class:!0});var l=T(e);t=O(l,n),l.forEach(h),this.h()},h(){M(e,"class","svelte-1i3bj3q")},m(o,l){w(o,e,l),R(e,t)},p(o,l){l&1&&n!==(n=JSON.stringify(o[0])+"")&&z(t,n)},i:D,o:D,d(o){o&&h(e)}}}function Te(a){let e=a[0].i+"",n;return{c(){n=S(e)},l(t){n=O(t,e)},m(t,o){w(t,n,o)},p(t,o){o&1&&e!==(e=t[0].i+"")&&z(n,e)},i:D,o:D,d(t){t&&h(n)}}}function Se(a){let e,n;return e=new ie({props:{icon:a[0].i.icon}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,o){const l={};o&1&&(l.icon=t[0].i.icon),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Oe(a){let e,n,t,o;const l=[Se,Te,je],i=[];function f(r,s){return typeof r[0].i=="object"&&"icon"in r[0].i?0:"i"in r[0]?1:2}return n=f(a),t=i[n]=l[n](a),{c(){e=E("span"),t.c(),this.h()},l(r){e=j(r,"SPAN",{class:!0,style:!0});var s=T(e);t.l(s),s.forEach(h),this.h()},h(){M(e,"class","wrap svelte-1i3bj3q"),V(e,"color","color"in a[0]?a[0].color:"")},m(r,s){w(r,e,s),i[n].m(e,null),o=!0},p(r,s){let c=n;n=f(r),n===c?i[n].p(r,s):(P(),p(i[c],1,1,()=>{i[c]=null}),B(),t=i[n],t?t.p(r,s):(t=i[n]=l[n](r),t.c()),g(t,1),t.m(e,null)),(!o||s&1)&&V(e,"color","color"in r[0]?r[0].color:"")},i(r){o||(g(t),o=!0)},o(r){p(t),o=!1},d(r){r&&h(e),i[n].d()}}}function Re(a){let e,n=a[0].name+"",t;return{c(){e=E("span"),t=S(n),this.h()},l(o){e=j(o,"SPAN",{slot:!0,class:!0});var l=T(e);t=O(l,n),l.forEach(h),this.h()},h(){M(e,"slot","tooltip"),M(e,"class","svelte-1i3bj3q")},m(o,l){w(o,e,l),R(e,t)},p(o,l){l&1&&n!==(n=o[0].name+"")&&z(t,n)},d(o){o&&h(e)}}}function ze(a){let e,n;return e=new re({props:{$$slots:{tooltip:[Re],default:[Oe]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,[o]){const l={};o&3&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Pe(a,e,n){let{tag:t}=e;return a.$$set=o=>{"tag"in o&&n(0,t=o.tag)},[t]}class Be extends F{constructor(e){super();H(this,e,Pe,ze,W,{tag:0})}}var u;(function(a){a.none="none",a.bronze="bronze",a.silver="silver",a.gold="gold",a.platinum="platinum",a["wagered(500k)"]="wagered(500k)",a["wagered(1m)"]="wagered(1m)",a["wagered(2.5m)"]="wagered(2.5m)",a["wagered(5m)"]="wagered(5m)",a["wagered(10m)"]="wagered(10m)",a["wagered(25m)"]="wagered(25m)",a["wagered(50m)"]="wagered(50m)",a["wagered(100m)"]="wagered(100m)",a["wagered(250m)"]="wagered(250m)",a["wagered(500m)"]="wagered(500m)",a["wagered(1000m)"]="wagered(1000m)",a["wagered(2500m)"]="wagered(2500m)",a["wagered(5000m)"]="wagered(5000m)",a["wagered(10000m)"]="wagered(10000m)",a["wagered(25000m)"]="wagered(25000m)"})(u||(u={}));const G={[u.none]:"vip-none",[u.bronze]:"vip-bronze",[u.silver]:"vip-silver",[u.gold]:"vip-gold",[u.platinum]:"vip-platinum-1",[u["wagered(500k)"]]:"vip-platinum-2",[u["wagered(1m)"]]:"vip-platinum-3",[u["wagered(2.5m)"]]:"vip-platinum-4",[u["wagered(5m)"]]:"vip-platinum-5",[u["wagered(10m)"]]:"vip-platinum-6",[u["wagered(25m)"]]:"vip-diamond-1",[u["wagered(50m)"]]:"vip-diamond-2",[u["wagered(100m)"]]:"vip-diamond-3",[u["wagered(250m)"]]:"vip-diamond-4",[u["wagered(500m)"]]:"vip-diamond-5",[u["wagered(1000m)"]]:"vip-obsidian-1",[u["wagered(2500m)"]]:"vip-obsidian-2",[u["wagered(5000m)"]]:"vip-opal-1",[u["wagered(10000m)"]]:"vip-opal-2",[u["wagered(25000m)"]]:"vip-plutonium-1"},C={none:_._("None"),bronze:_._("Bronze"),silver:_._("Silver"),gold:_._("Gold"),platinum:_._("Platinum I"),"wagered(500k)":_._("Platinum II"),"wagered(1m)":_._("Platinum III"),"wagered(2.5m)":_._("Platinum IV"),"wagered(5m)":_._("Platinum V"),"wagered(10m)":_._("Platinum VI"),"wagered(25m)":_._("Diamond"),"wagered(50m)":_._("Diamond II"),"wagered(100m)":_._("Diamond III"),"wagered(250m)":_._("Diamond IV"),"wagered(500m)":_._("Diamond V"),"wagered(1000m)":_._("Obsidian I"),"wagered(2500m)":_._("Obsidian II"),"wagered(5000m)":_._("Opal I"),"wagered(10000m)":_._("Opal II"),"wagered(25000m)":_._("Plutonium")},De=a=>a in G?G[a]:G[u.none],Ae=a=>a in C?C[a]:C.none,Ne=a=>{const n=[...a].sort((o,l)=>o.rank<l.rank?1:-1)[0];return(n==null?void 0:n.flag)&&n.flag in C?[{name:Ae(n==null?void 0:n.flag),i:{icon:De(n==null?void 0:n.flag)}}]:[]},L=a=>typeof a=="number"&&a<10,Ce=a=>{const e=Ne((a==null?void 0:a.flags)||[]);let n=[];return n=[...n,...e],(L(a==null?void 0:a.leaderboardDailyWageredRank)||L(a==null?void 0:a.leaderboardDailyProfitRank))&&n.push({name:"playerOfTheDay",i:{icon:"emoji-player-of-the-day"}}),(L(a==null?void 0:a.leaderboardWeeklyWageredRank)||L(a==null?void 0:a.leaderboardWeeklyProfitRank))&&n.push({name:"playerOfTheWeek",i:{icon:"emoji-player-of-the-week"}}),(a==null?void 0:a.isHighroller)&&n.push({name:"highroller",i:{icon:"emoji-highroller"}}),n},ce={[d.sportsbookFraudForceFlagged]:{i:"\u{1F645}",name:"Sports FF"},[d.casinoFraudForceFlagged]:{i:"\u{1F645}\u200D\u2642\uFE0F",name:"Casino FF"}},fe=[d.root,d.owner,d.whitelisted,...Object.keys(ce)],me={noRole:[...fe,d.frozen,d.banned,d.houseExcluded,d.suspended],hasRole:fe},de={[d.root]:"#ff9d02",[d.owner]:"#ff9d02",[d.admin]:"#ff9d02",[d.supportManager]:"#00E449",[d.sportsbookManager]:"#00E449",[d.communityManager]:"#ff9d02",[d.supportSenior]:"#00E449",[d.support]:"#00E449",[d.vipManager]:"#7f46fd",[d.developer]:"#ff9d02",[d.moderator]:"#3179F6",[d.bot]:"#3179F6",[d.whitelisted]:"#3179F6",[d.frozen]:"#fff",[d.banned]:"#fff",[d.houseExcluded]:"#fff"},Le=a=>{if(!a||Ie!=="Stake")return{isBirthday:!1,years:null};const e=new Date,n=new Date(a),t=e.getFullYear()-n.getFullYear();return{isBirthday:Boolean(t&&e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()),years:t}},Fe=({user:a,meta:e,showIsMe:n})=>{var J,Y,K,Q,X,Z;const t=(a==null?void 0:a.isMuted)||!1,o=e.hasRole?me.hasRole:me.noRole,l=e.id===(a==null?void 0:a.id),i=Ce(a),f=((a==null?void 0:a.roles)||[]).some(b=>b.name===d.owner),{isBirthday:r,years:s}=Le((a==null?void 0:a.createdAt)||!1),c=((a==null?void 0:a.roles)||[]).filter(b=>!o.includes(b.name)).map(b=>({i:`${b.name[0].toUpperCase()}`,name:b.name,color:b.name in de?de[b.name]:"inherit"})),m=((a==null?void 0:a.roles)||[]).map(b=>ce[b.name]);return[...i,n&&l&&{i:"ME",name:"Me",color:"var(--white)"},f&&{i:{icon:"owner"},name:a==null?void 0:a.name,color:"inherit"},r&&!ke&&{i:{icon:"birthday-emoji"},name:`${ye(s)} Birthday`,color:"inherit"},...m,...c,t&&{i:"M",name:((Y=(J=a==null?void 0:a.community)==null?void 0:J.muteList)==null?void 0:Y[0])?`Reason: "${(Q=(K=a==null?void 0:a.community)==null?void 0:K.muteList)==null?void 0:Q[0].message}" Expires: ${(Z=(X=a==null?void 0:a.community)==null?void 0:X.muteList)==null?void 0:Z[0].expireAt}`:"Muted",color:"inherit"}].filter(Boolean)};function ue(a,e,n){const t=a.slice();return t[7]=e[n],t}function He(a){let e;const n=a[6].default,t=x(n,a,a[5],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,l){t&&t.m(o,l),e=!0},p(o,l){t&&t.p&&(!e||l&32)&&ee(t,n,o,o[5],e?ne(n,o[5],l,null):te(o[5]),null)},i(o){e||(g(t,o),e=!0)},o(o){p(t,o),e=!1},d(o){t&&t.d(o)}}}function We(a){let e,n,t,o=a[0],l=[];for(let s=0;s<o.length;s+=1)l[s]=_e(ue(a,o,s));const i=s=>p(l[s],1,1,()=>{l[s]=null}),f=a[6].default,r=x(f,a,a[5],null);return{c(){e=E("div");for(let s=0;s<l.length;s+=1)l[s].c();n=ae(),r&&r.c(),this.h()},l(s){e=j(s,"DIV",{class:!0});var c=T(e);for(let m=0;m<l.length;m+=1)l[m].l(c);n=oe(c),r&&r.l(c),c.forEach(h),this.h()},h(){M(e,"class","user-tags svelte-1enj3l0")},m(s,c){w(s,e,c);for(let m=0;m<l.length;m+=1)l[m].m(e,null);R(e,n),r&&r.m(e,null),t=!0},p(s,c){if(c&1){o=s[0];let m;for(m=0;m<o.length;m+=1){const $=ue(s,o,m);l[m]?(l[m].p($,c),g(l[m],1)):(l[m]=_e($),l[m].c(),g(l[m],1),l[m].m(e,n))}for(P(),m=o.length;m<l.length;m+=1)i(m);B()}r&&r.p&&(!t||c&32)&&ee(r,f,s,s[5],t?ne(f,s[5],c,null):te(s[5]),null)},i(s){if(!t){for(let c=0;c<o.length;c+=1)g(l[c]);g(r,s),t=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)p(l[c]);p(r,s),t=!1},d(s){s&&h(e),ge(l,s),r&&r.d(s)}}}function _e(a){let e,n;return e=new Be({props:{tag:a[7]}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,o){const l={};o&1&&(l.tag=t[7]),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function qe(a){let e,n,t,o;const l=[We,He],i=[];function f(r,s){return r[0].length!==0?0:1}return e=f(a),n=i[e]=l[e](a),{c(){n.c(),t=A()},l(r){n.l(r),t=A()},m(r,s){i[e].m(r,s),w(r,t,s),o=!0},p(r,[s]){let c=e;e=f(r),e===c?i[e].p(r,s):(P(),p(i[c],1,1,()=>{i[c]=null}),B(),n=i[e],n?n.p(r,s):(n=i[e]=l[e](r),n.c()),g(n,1),n.m(t.parentNode,t))},i(r){o||(g(n),o=!0)},o(r){p(n),o=!1},d(r){i[e].d(r),r&&h(t)}}}function Ge(a,e,n){let t,o,{$$slots:l={},$$scope:i}=e;var{meta:f}=ve();U(a,f,c=>n(4,o=c));let{user:r}=e,{showIsMe:s=!1}=e;return a.$$set=c=>{"user"in c&&n(2,r=c.user),"showIsMe"in c&&n(3,s=c.showIsMe),"$$scope"in c&&n(5,i=c.$$scope)},a.$$.update=()=>{a.$$.dirty&28&&n(0,t=Fe({showIsMe:s,user:r,meta:o}).filter(c=>c&&"name"in c?c.name!=="betaCrash":!0))},[t,f,r,s,o,i,l]}class Je extends F{constructor(e){super();H(this,e,Ge,qe,W,{user:2,showIsMe:3})}}function Ye(a){let e,n;return e=new re({props:{$$slots:{tooltip:[Ve],default:[Ze]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,o){const l={};o&292&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ke(a){let e,n,t;return n=new Je({props:{showIsMe:a[3],user:a[0],$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){e=E("div"),v(n.$$.fragment),this.h()},l(o){e=j(o,"DIV",{class:!0,style:!0});var l=T(e);k(n.$$.fragment,l),l.forEach(h),this.h()},h(){M(e,"class","wrap svelte-13td3s2"),M(e,"style",a[4])},m(o,l){w(o,e,l),I(n,e,null),t=!0},p(o,l){const i={};l&8&&(i.showIsMe=o[3]),l&1&&(i.user=o[0]),l&327&&(i.$$scope={dirty:l,ctx:o}),n.$set(i),(!t||l&16)&&M(e,"style",o[4])},i(o){t||(g(n.$$.fragment,o),t=!0)},o(o){p(n.$$.fragment,o),t=!1},d(o){o&&h(e),y(n)}}}function Qe(a){let e,n=a[5]._(N.hidden)+"",t;return{c(){e=E("span"),t=S(n)},l(o){e=j(o,"SPAN",{});var l=T(e);t=O(l,n),l.forEach(h)},m(o,l){w(o,e,l),R(e,t)},p(o,l){l&32&&n!==(n=o[5]._(N.hidden)+"")&&z(t,n)},d(o){o&&h(e)}}}function Xe(a){let e,n;return e=new se({props:{$$slots:{default:[Qe]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,o){const l={};o&288&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Ze(a){let e,n,t,o,l;return n=new ie({props:{icon:"ghost-mode",style:"color: inherit;"}}),o=new Me({props:{inline:!0,size:a[2],lineHeight:"normal",variant:"subtle",weight:"semibold",$$slots:{default:[Xe]},$$scope:{ctx:a}}}),{c(){e=E("div"),v(n.$$.fragment),t=ae(),v(o.$$.fragment),this.h()},l(i){e=j(i,"DIV",{class:!0});var f=T(e);k(n.$$.fragment,f),t=oe(f),k(o.$$.fragment,f),f.forEach(h),this.h()},h(){M(e,"class","wrap ghost svelte-13td3s2")},m(i,f){w(i,e,f),I(n,e,null),R(e,t),I(o,e,null),l=!0},p(i,f){const r={};f&4&&(r.size=i[2]),f&288&&(r.$$scope={dirty:f,ctx:i}),o.$set(r)},i(i){l||(g(n.$$.fragment,i),g(o.$$.fragment,i),l=!0)},o(i){p(n.$$.fragment,i),p(o.$$.fragment,i),l=!1},d(i){i&&h(e),y(n),y(o)}}}function Ve(a){let e,n=a[5]._(N.hiddenTooltip)+"",t;return{c(){e=E("span"),t=S(n),this.h()},l(o){e=j(o,"SPAN",{slot:!0});var l=T(e);t=O(l,n),l.forEach(h),this.h()},h(){M(e,"slot","tooltip")},m(o,l){w(o,e,l),R(e,t)},p(o,l){l&32&&n!==(n=o[5]._(N.hiddenTooltip)+"")&&z(t,n)},d(o){o&&h(e)}}}function Ue(a){let e=a[0].name+"",n;return{c(){n=S(e)},l(t){n=O(t,e)},m(t,o){w(t,n,o)},p(t,o){o&1&&e!==(e=t[0].name+"")&&z(n,e)},d(t){t&&h(n)}}}function xe(a){let e,n;return e=new se({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,o){const l={};o&257&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function et(a){let e,n;const t=[a[6],{size:a[2]},{variant:a[1]},{lineHeight:"normal"}];let o={$$slots:{default:[xe]},$$scope:{ctx:a}};for(let l=0;l<t.length;l+=1)o=q(o,t[l]);return e=new Ee({props:o}),e.$on("click",a[7]),{c(){v(e.$$.fragment)},l(l){k(e.$$.fragment,l)},m(l,i){I(e,l,i),n=!0},p(l,i){const f=i&70?he(t,[i&64&&$e(l[6]),i&4&&{size:l[2]},i&2&&{variant:l[1]},t[3]]):{};i&257&&(f.$$scope={dirty:i,ctx:l}),e.$set(f)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){p(e.$$.fragment,l),n=!1},d(l){y(e,l)}}}function tt(a){let e,n,t,o;const l=[Ke,Ye],i=[];function f(r,s){return r[0]?0:1}return e=f(a),n=i[e]=l[e](a),{c(){n.c(),t=A()},l(r){n.l(r),t=A()},m(r,s){i[e].m(r,s),w(r,t,s),o=!0},p(r,[s]){let c=e;e=f(r),e===c?i[e].p(r,s):(P(),p(i[c],1,1,()=>{i[c]=null}),B(),n=i[e],n?n.p(r,s):(n=i[e]=l[e](r),n.c()),g(n,1),n.m(t.parentNode,t))},i(r){o||(g(n),o=!0)},o(r){p(n),o=!1},d(r){i[e].d(r),r&&h(t)}}}function nt(a,e,n){const t=["user","variant","size","showIsMe","style"];let o=le(e,t),l;U(a,be,$=>n(5,l=$));let{user:i}=e,{variant:f="link"}=e,{size:r="medium"}=e,{showIsMe:s=!1}=e,{style:c=""}=e;const m=()=>we.user.open({name:i.name});return a.$$set=$=>{e=q(q({},e),pe($)),n(6,o=le(e,t)),"user"in $&&n(0,i=$.user),"variant"in $&&n(1,f=$.variant),"size"in $&&n(2,r=$.size),"showIsMe"in $&&n(3,s=$.showIsMe),"style"in $&&n(4,c=$.style)},[i,f,r,s,c,l,o,m]}class gt extends F{constructor(e){super();H(this,e,nt,tt,W,{user:0,variant:1,size:2,showIsMe:3,style:4})}}export{gt as U,Je as a,De as b,u as c,Ae as g};
