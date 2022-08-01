import{a7 as M,S as W,i as O,s as U,j as v,k as P,e as T,m as b,n as F,c as j,a as z,d as $,b as S,o as w,f as h,a1 as A,x as d,u as p,v as k,a6 as q,t as E,g as C,h as D,ae as fe,a0 as N,l as L,r as H,w as X,a3 as ue,a8 as me,a9 as ce,aC as _e,b3 as Q}from"./vendor-202ba1b8.js";import{i as Z}from"./index-818f9b69.js";import{p as $e}from"./stores-5d02eee0.js";import{g as de}from"./goto-7d4088c3.js";import{g as pe}from"./generatePath-ae50dfa0.js";import{p as ge}from"./paths-e7d101d3.js";import{g as he}from"./setup-0524d8dd.js";import{t as ve}from"./store-4026cfa4.js";import{B as be}from"./index-4e53ca7a.js";import{I as we}from"./context-88a045a1.js";import{L as x}from"./index-21535704.js";import{C as ee}from"./index-80737105.js";import{S as te}from"./index-5469be8d.js";import{r as ke}from"./resizeObserver-626ed4b4.js";import{F as re}from"./index-041d0ef1.js";import{C as ye}from"./index-4371838a.js";import{T as ae}from"./index-15ea3a2f.js";import{T as K}from"./index-ad8572b8.js";import{U as Ae}from"./index-101fb270.js";import{v as Te}from"./index-da75da01.js";import{F as je}from"./index-dde39cdb.js";import{F as ze}from"./index-6a93cc39.js";import{S as Pe}from"./index-ec59e06d.js";import{F as Fe}from"./index-5f6739d0.js";var I={verify:M._("Verify Game"),seed:M._("Seed"),hash:M._("Hash"),provableFairness:M._("What is Provable Fairness?")};function Se(o){let e,r=o[3]._(I.hash)+"",t;return{c(){e=T("span"),t=E(r),this.h()},l(a){e=j(a,"SPAN",{slot:!0});var n=z(e);t=C(n,r),n.forEach($),this.h()},h(){S(e,"slot","label")},m(a,n){h(a,e,n),A(e,t)},p(a,n){n&8&&r!==(r=a[3]._(I.hash)+"")&&D(t,r)},d(a){a&&$(e)}}}function Ee(o){let e,r;return e=new we({props:{icon:"info"}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){w(e,t,a),r=!0},p:fe,i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Ce(o){let e=o[3]._(I.seed)+"",r,t,a,n;return a=new x({props:{spacing:"none",external:!0,to:"https://bitcointalk.org/index.php?topic=5162888.0",$$slots:{default:[Ee]},$$scope:{ctx:o}}}),{c(){r=E(e),t=P(),v(a.$$.fragment)},l(i){r=C(i,e),t=F(i),b(a.$$.fragment,i)},m(i,u){h(i,r,u),h(i,t,u),w(a,i,u),n=!0},p(i,u){(!n||u&8)&&e!==(e=i[3]._(I.seed)+"")&&D(r,e);const l={};u&256&&(l.$$scope={dirty:u,ctx:i}),a.$set(l)},i(i){n||(d(a.$$.fragment,i),n=!0)},o(i){p(a.$$.fragment,i),n=!1},d(i){i&&$(r),i&&$(t),k(a,i)}}}function Ne(o){let e,r;return e=new te({props:{horizontal:!0,slot:"label",$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){w(e,t,a),r=!0},p(t,a){const n={};a&264&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Ve(o){let e,r=o[3]._(I.verify)+"",t;return{c(){e=T("span"),t=E(r)},l(a){e=j(a,"SPAN",{});var n=z(e);t=C(n,r),n.forEach($)},m(a,n){h(a,e,n),A(e,t)},p(a,n){n&8&&r!==(r=a[3]._(I.verify)+"")&&D(t,r)},d(a){a&&$(e)}}}function Me(o){let e=o[3]._(I.provableFairness)+"",r;return{c(){r=E(e)},l(t){r=C(t,e)},m(t,a){h(t,r,a)},p(t,a){a&8&&e!==(e=t[3]._(I.provableFairness)+"")&&D(r,e)},d(t){t&&$(r)}}}function De(o){let e,r,t,a,n,i,u,l,f;return e=new ee({props:{value:o[2]?"\u23F3":o[0],$$slots:{label:[Se]},$$scope:{ctx:o}}}),t=new ee({props:{value:o[2]?"\u23F3":o[1],$$slots:{label:[Ne]},$$scope:{ctx:o}}}),i=new be({props:{variant:"subtle-link",disabled:o[2],$$slots:{default:[Ve]},$$scope:{ctx:o}}}),i.$on("click",o[4]),l=new x({props:{align:"center",variant:"subtle-link",to:pe(ge.provablyFair),$$slots:{default:[Me]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment),r=P(),v(t.$$.fragment),a=P(),n=T("div"),v(i.$$.fragment),u=P(),v(l.$$.fragment),this.h()},l(m){b(e.$$.fragment,m),r=F(m),b(t.$$.fragment,m),a=F(m),n=j(m,"DIV",{class:!0});var s=z(n);b(i.$$.fragment,s),u=F(s),b(l.$$.fragment,s),s.forEach($),this.h()},h(){S(n,"class","center svelte-vw77fq")},m(m,s){w(e,m,s),h(m,r,s),w(t,m,s),h(m,a,s),h(m,n,s),w(i,n,null),A(n,u),w(l,n,null),f=!0},p(m,[s]){const c={};s&5&&(c.value=m[2]?"\u23F3":m[0]),s&264&&(c.$$scope={dirty:s,ctx:m}),e.$set(c);const _={};s&6&&(_.value=m[2]?"\u23F3":m[1]),s&264&&(_.$$scope={dirty:s,ctx:m}),t.$set(_);const g={};s&4&&(g.disabled=m[2]),s&264&&(g.$$scope={dirty:s,ctx:m}),i.$set(g);const y={};s&264&&(y.$$scope={dirty:s,ctx:m}),l.$set(y)},i(m){f||(d(e.$$.fragment,m),d(t.$$.fragment,m),d(i.$$.fragment,m),d(l.$$.fragment,m),f=!0)},o(m){p(e.$$.fragment,m),p(t.$$.fragment,m),p(i.$$.fragment,m),p(l.$$.fragment,m),f=!1},d(m){k(e,m),m&&$(r),k(t,m),m&&$(a),m&&$(n),k(i),k(l)}}}function Le(o,e,r){let t,a;q(o,$e,s=>r(6,t=s)),q(o,Z,s=>r(3,a=s));var n=this&&this.__awaiter||function(s,c,_,g){function y(V){return V instanceof _?V:new _(function(G){G(V)})}return new(_||(_=Promise))(function(V,G){function ie(R){try{Y(g.next(R))}catch(J){G(J)}}function oe(R){try{Y(g.throw(R))}catch(J){G(J)}}function Y(R){R.done?V(R.value):y(R.value).then(ie,oe)}Y((g=g.apply(s,c||[])).next())})};let{game:i}=e,{hash:u}=e,{seed:l}=e,{loading:f}=e;var m=()=>n(void 0,void 0,void 0,function*(){var s=t.path+"?"+new URLSearchParams({game:i,hash:u,seed:l});yield de(s,{replaceState:!0}),ve.set("verify");var{modal:c}=he();c.set("fairness")});return o.$$set=s=>{"game"in s&&r(5,i=s.game),"hash"in s&&r(0,u=s.hash),"seed"in s&&r(1,l=s.seed),"loading"in s&&r(2,f=s.loading)},[u,l,f,a,m,i]}class zt extends W{constructor(e){super();O(this,e,Le,De,U,{game:5,hash:0,seed:1,loading:2})}}function Ie(o){var t,a;let e,r;return e=new Ae({props:{variant:"subtle-link",user:o[1].user,"data-test":"leaderboard-user-"+((a=(t=o[1])==null?void 0:t.user)==null?void 0:a.name)}}),{c(){v(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,i){w(e,n,i),r=!0},p(n,i){var l,f;const u={};i&2&&(u.user=n[1].user),i&2&&(u["data-test"]="leaderboard-user-"+((f=(l=n[1])==null?void 0:l.user)==null?void 0:f.name)),e.$set(u)},i(n){r||(d(e.$$.fragment,n),r=!0)},o(n){p(e.$$.fragment,n),r=!1},d(n){k(e,n)}}}function Re(o){let e,r;return e=new re({props:{numeric:!0,align:"right",weight:"semibold",variant:"highlighted",config:"none",value:o[1].cashoutAt}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){w(e,t,a),r=!0},p(t,a){const n={};a&2&&(n.value=t[1].cashoutAt),e.$set(n)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Be(o){let e,r,t,a;const n=[We,Ge],i=[];function u(l,f){return l[1].result==="pending"&&l[0]===!1?0:1}return e=u(o),r=i[e]=n[e](o),{c(){r.c(),t=L()},l(l){r.l(l),t=L()},m(l,f){i[e].m(l,f),h(l,t,f),a=!0},p(l,f){let m=e;e=u(l),e===m?i[e].p(l,f):(H(),p(i[m],1,1,()=>{i[m]=null}),X(),r=i[e],r?r.p(l,f):(r=i[e]=n[e](l),r.c()),d(r,1),r.m(t.parentNode,t))},i(l){a||(d(r),a=!0)},o(l){p(r),a=!1},d(l){i[e].d(l),l&&$(t)}}}function Ge(o){let e,r;return e=new re({props:{numeric:!0,align:"right",weight:"semibold",variant:"highlighted",value:o[1].payoutMultiplier}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){w(e,t,a),r=!0},p(t,a){const n={};a&2&&(n.value=t[1].payoutMultiplier),e.$set(n)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function We(o){let e,r;return e=new K({props:{weight:"bold",$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){w(e,t,a),r=!0},p(t,a){const n={};a&256&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Oe(o){let e;return{c(){e=E("-")},l(r){e=C(r,"-")},m(r,t){h(r,e,t)},d(r){r&&$(e)}}}function Ue(o){let e,r,t,a;const n=[Be,Re],i=[];function u(l,f){return l[2]==="payoutMultiplier"?0:l[2]==="cashoutAt"?1:-1}return~(e=u(o))&&(r=i[e]=n[e](o)),{c(){r&&r.c(),t=L()},l(l){r&&r.l(l),t=L()},m(l,f){~e&&i[e].m(l,f),h(l,t,f),a=!0},p(l,f){let m=e;e=u(l),e===m?~e&&i[e].p(l,f):(r&&(H(),p(i[m],1,1,()=>{i[m]=null}),X()),~e?(r=i[e],r?r.p(l,f):(r=i[e]=n[e](l),r.c()),d(r,1),r.m(t.parentNode,t)):r=null)},i(l){a||(d(r),a=!0)},o(l){p(r),a=!1},d(l){~e&&i[e].d(l),l&&$(t)}}}function qe(o){let e,r,t,a,n,i,u,l,f,m;return t=new ae({props:{maxWidth:o[1].user?"10ch":"7ch",$$slots:{default:[Ie]},$$scope:{ctx:o}}}),i=new ae({props:{maxWidth:"7ch",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),f=new ye({props:{truncateMaxWidth:"10ch",iconBefore:!0,iconAfter:!1,weight:"semibold",variant:o[4],currency:o[1].currency,value:o[1].result==="pending"?o[1].amount:o[1].payout}}),{c(){e=T("tr"),r=T("td"),v(t.$$.fragment),a=P(),n=T("td"),v(i.$$.fragment),u=P(),l=T("td"),v(f.$$.fragment),this.h()},l(s){e=j(s,"TR",{class:!0});var c=z(e);r=j(c,"TD",{class:!0});var _=z(r);b(t.$$.fragment,_),_.forEach($),a=F(c),n=j(c,"TD",{class:!0});var g=z(n);b(i.$$.fragment,g),g.forEach($),u=F(c),l=j(c,"TD",{class:!0});var y=z(l);b(f.$$.fragment,y),y.forEach($),c.forEach($),this.h()},h(){S(r,"class","svelte-1xzc9au"),S(n,"class","svelte-1xzc9au"),S(l,"class","svelte-1xzc9au"),N(l,"crypto",o[5]==="crypto"),S(e,"class","svelte-1xzc9au"),N(e,"crypto",o[5]==="crypto"),N(e,"small",o[3]==="small")},m(s,c){h(s,e,c),A(e,r),w(t,r,null),A(e,a),A(e,n),w(i,n,null),A(e,u),A(e,l),w(f,l,null),m=!0},p(s,[c]){const _={};c&2&&(_.maxWidth=s[1].user?"10ch":"7ch"),c&258&&(_.$$scope={dirty:c,ctx:s}),t.$set(_);const g={};c&263&&(g.$$scope={dirty:c,ctx:s}),i.$set(g);const y={};c&16&&(y.variant=s[4]),c&2&&(y.currency=s[1].currency),c&2&&(y.value=s[1].result==="pending"?s[1].amount:s[1].payout),f.$set(y),c&32&&N(l,"crypto",s[5]==="crypto"),c&32&&N(e,"crypto",s[5]==="crypto"),c&8&&N(e,"small",s[3]==="small")},i(s){m||(d(t.$$.fragment,s),d(i.$$.fragment,s),d(f.$$.fragment,s),m=!0)},o(s){p(t.$$.fragment,s),p(i.$$.fragment,s),p(f.$$.fragment,s),m=!1},d(s){s&&$(e),k(t),k(i),k(f)}}}function He(o,e,r){let t,a;q(o,Te,s=>r(5,a=s));let{showPayoutAtAllTimes:n}=e,{bet:i}=e,{type:u="payoutMultiplier"}=e,{size:l="regular"}=e;var f={autocashout:"success",busted:"subtle",forced:"success",pending:"subtle",stopped:"success"},m=s=>s&&s in f?f[s]:"subtle";return o.$$set=s=>{"showPayoutAtAllTimes"in s&&r(0,n=s.showPayoutAtAllTimes),"bet"in s&&r(1,i=s.bet),"type"in s&&r(2,u=s.type),"size"in s&&r(3,l=s.size)},o.$$.update=()=>{o.$$.dirty&2&&r(4,t=m((i==null?void 0:i.result)||(i==null?void 0:i.slideResult)))},[n,i,u,l,t,a]}class Xe extends W{constructor(e){super();O(this,e,He,qe,U,{showPayoutAtAllTimes:0,bet:1,type:2,size:3})}}function se(o,e,r){const t=o.slice();return t[8]=e[r],t}function le(o,e){let r,t,a;return t=new Xe({props:{bet:e[8],showPayoutAtAllTimes:e[0],type:e[1],size:e[3]?"small":"regular"}}),{key:o,first:null,c(){r=L(),v(t.$$.fragment),this.h()},l(n){r=L(),b(t.$$.fragment,n),this.h()},h(){this.first=r},m(n,i){h(n,r,i),w(t,n,i),a=!0},p(n,i){e=n;const u={};i&16&&(u.bet=e[8]),i&1&&(u.showPayoutAtAllTimes=e[0]),i&2&&(u.type=e[1]),i&8&&(u.size=e[3]?"small":"regular"),t.$set(u)},i(n){a||(d(t.$$.fragment,n),a=!0)},o(n){p(t.$$.fragment,n),a=!1},d(n){n&&$(r),k(t,n)}}}function Ye(o){let e,r,t,a=[],n=new Map,i,u,l,f,m=o[4];const s=c=>c[8].id;for(let c=0;c<m.length;c+=1){let _=se(o,m,c),g=s(_);n.set(g,a[c]=le(g,_))}return{c(){e=T("div"),r=T("div"),t=T("table");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=j(c,"DIV",{class:!0});var _=z(e);r=j(_,"DIV",{class:!0});var g=z(r);t=j(g,"TABLE",{class:!0});var y=z(t);for(let V=0;V<a.length;V+=1)a[V].l(y);y.forEach($),g.forEach($),_.forEach($),this.h()},h(){S(t,"class","table svelte-1ulh9na"),S(r,"class","scroll-wrapper scrollY  svelte-1ulh9na"),N(r,"scrollX",o[3]),N(r,"small",o[3]),S(e,"class","wrap svelte-1ulh9na")},m(c,_){h(c,e,_),A(e,r),A(r,t);for(let g=0;g<a.length;g+=1)a[g].m(t,null);u=!0,l||(f=ue(i=ke.call(null,e,o[7])),l=!0)},p(c,[_]){_&27&&(m=c[4],H(),a=me(a,_,s,1,c,m,n,t,ce,le,null,se),X()),_&8&&N(r,"scrollX",c[3]),_&8&&N(r,"small",c[3]),i&&_e(i.update)&&_&4&&i.update.call(null,c[7])},i(c){if(!u){for(let _=0;_<m.length;_+=1)d(a[_]);u=!0}},o(c){for(let _=0;_<a.length;_+=1)p(a[_]);u=!1},d(c){c&&$(e);for(let _=0;_<a.length;_+=1)a[_].d();l=!1,f()}}}var Je=(o,e)=>{var r,t;return e.btcAmount===o.btcAmount?(r=o.user)===null||r===void 0?void 0:r.name.localeCompare((t=e.user)===null||t===void 0?void 0:t.name):e.btcAmount-o.btcAmount};function Ke(o,e,r){let t,a,{leaderboard:n}=e,{showPayoutAtAllTimes:i=!1}=e,{type:u="payoutMultiplier"}=e,{modalView:l=!1}=e;var f;const m=s=>r(2,f=s);return o.$$set=s=>{"leaderboard"in s&&r(5,n=s.leaderboard),"showPayoutAtAllTimes"in s&&r(0,i=s.showPayoutAtAllTimes),"type"in s&&r(1,u=s.type),"modalView"in s&&r(6,l=s.modalView)},o.$$.update=()=>{o.$$.dirty&32&&r(4,t=[...n].sort(Je)),o.$$.dirty&4&&r(3,a=(f==null?void 0:f.width)<270)},[i,u,f,a,t,n,l,m]}class Pt extends W{constructor(e){super();O(this,e,Ke,Ye,U,{leaderboard:5,showPayoutAtAllTimes:0,type:1,modalView:6})}}var B={copied:M._("Copied, share in chat!"),hyperlink:M._("Copied, share online!"),placedBy:M._("Placed by {user}"),dateTime1:M._("on"),dateTime2:M._("at")};function Qe(o){let e,r=Q(o[0])+"",t,a,n,i;return n=new Fe({props:{variant:"highlighted",weight:"semibold",size:"large",value:o[3],minimumFractionDigits:0}}),{c(){e=T("span"),t=E(r),a=E(`:
      `),v(n.$$.fragment)},l(u){e=j(u,"SPAN",{});var l=z(e);t=C(l,r),a=C(l,`:
      `),b(n.$$.fragment,l),l.forEach($)},m(u,l){h(u,e,l),A(e,t),A(e,a),w(n,e,null),i=!0},p(u,l){(!i||l&1)&&r!==(r=Q(u[0])+"")&&D(t,r);const f={};l&8&&(f.value=u[3]),n.$set(f)},i(u){i||(d(n.$$.fragment,u),i=!0)},o(u){p(n.$$.fragment,u),i=!1},d(u){u&&$(e),k(n)}}}function Ze(o){let e=o[4]._(B.copied)+"",r;return{c(){r=E(e)},l(t){r=C(t,e)},m(t,a){h(t,r,a)},p(t,a){a&16&&e!==(e=t[4]._(B.copied)+"")&&D(r,e)},d(t){t&&$(r)}}}function ne(o){let e,r;return e=new K({props:{tag:"span",align:"center",$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){w(e,t,a),r=!0},p(t,a){const n={};a&50&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(d(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function xe(o){let e=o[4]._(B.dateTime1)+"",r,t,a,n,i=o[4]._(B.dateTime2)+"",u,l,f,m;return a=new ze({props:{short:!0,value:o[1]}}),f=new je({props:{value:o[1]}}),{c(){r=E(e),t=P(),v(a.$$.fragment),n=P(),u=E(i),l=P(),v(f.$$.fragment)},l(s){r=C(s,e),t=F(s),b(a.$$.fragment,s),n=F(s),u=C(s,i),l=F(s),b(f.$$.fragment,s)},m(s,c){h(s,r,c),h(s,t,c),w(a,s,c),h(s,n,c),h(s,u,c),h(s,l,c),w(f,s,c),m=!0},p(s,c){(!m||c&16)&&e!==(e=s[4]._(B.dateTime1)+"")&&D(r,e);const _={};c&2&&(_.value=s[1]),a.$set(_),(!m||c&16)&&i!==(i=s[4]._(B.dateTime2)+"")&&D(u,i);const g={};c&2&&(g.value=s[1]),f.$set(g)},i(s){m||(d(a.$$.fragment,s),d(f.$$.fragment,s),m=!0)},o(s){p(a.$$.fragment,s),p(f.$$.fragment,s),m=!1},d(s){s&&$(r),s&&$(t),k(a,s),s&&$(n),s&&$(u),s&&$(l),k(f,s)}}}function et(o){let e,r,t=o[1]&&ne(o);return{c(){t&&t.c(),e=L()},l(a){t&&t.l(a),e=L()},m(a,n){t&&t.m(a,n),h(a,e,n),r=!0},p(a,n){a[1]?t?(t.p(a,n),n&2&&d(t,1)):(t=ne(a),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(H(),p(t,1,1,()=>{t=null}),X())},i(a){r||(d(t),r=!0)},o(a){p(t),r=!1},d(a){t&&t.d(a),a&&$(e)}}}function tt(o){let e,r,t,a,n,i,u;return r=new K({props:{tag:"h1",size:"large",variant:"highlighted",align:"center",weight:"semibold",$$slots:{default:[Qe]},$$scope:{ctx:o}}}),a=new Pe({props:{spacing:"none",variant:"subtle",value:`${o[0]}: ${o[2]}`,$$slots:{tooltip:[Ze]},$$scope:{ctx:o}}}),i=new te({props:{x:"center",gap:"small",$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){e=T("div"),v(r.$$.fragment),t=P(),v(a.$$.fragment),n=P(),v(i.$$.fragment),this.h()},l(l){e=j(l,"DIV",{class:!0});var f=z(e);b(r.$$.fragment,f),t=F(f),b(a.$$.fragment,f),f.forEach($),n=F(l),b(i.$$.fragment,l),this.h()},h(){S(e,"class","top-wrap svelte-1lte2ve")},m(l,f){h(l,e,f),w(r,e,null),A(e,t),w(a,e,null),h(l,n,f),w(i,l,f),u=!0},p(l,[f]){const m={};f&41&&(m.$$scope={dirty:f,ctx:l}),r.$set(m);const s={};f&5&&(s.value=`${l[0]}: ${l[2]}`),f&48&&(s.$$scope={dirty:f,ctx:l}),a.$set(s);const c={};f&50&&(c.$$scope={dirty:f,ctx:l}),i.$set(c)},i(l){u||(d(r.$$.fragment,l),d(a.$$.fragment,l),d(i.$$.fragment,l),u=!0)},o(l){p(r.$$.fragment,l),p(a.$$.fragment,l),p(i.$$.fragment,l),u=!1},d(l){l&&$(e),k(r),k(a),l&&$(n),k(i,l)}}}function rt(o,e,r){let t;q(o,Z,l=>r(4,t=l));let{game:a}=e,{startTime:n}=e,{id:i}=e,{gameNumber:u}=e;return o.$$set=l=>{"game"in l&&r(0,a=l.game),"startTime"in l&&r(1,n=l.startTime),"id"in l&&r(2,i=l.id),"gameNumber"in l&&r(3,u=l.gameNumber)},[a,n,i,u,t]}class Ft extends W{constructor(e){super();O(this,e,rt,tt,U,{game:0,startTime:1,id:2,gameNumber:3})}}export{Ft as G,Pt as M,zt as V,Je as s};