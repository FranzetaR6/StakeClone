import{S as A,i as q,s as M,e as x,j as w,c as F,a as E,m as j,d as v,b as D,f as y,o as U,x as b,u as S,v as R,a6 as P,t as Z,g as ee,h as ne,k as te,n as ie,a1 as ae,r as se,a8 as oe,a9 as re,w as le,ah as de,V as ce,H as ue,T as me,U as B}from"./vendor-202ba1b8.js";import{T as fe}from"./index-ad8572b8.js";import{i as z}from"./index-818f9b69.js";import{r as H,g as pe}from"./utils-c06e1887.js";import{aC as G,y as ve,b as J,i as he}from"./index-239f6385.js";import{m as K,c as ke}from"./utils-2db7bfcb.js";import{n as V}from"./index-a7a6ffa9.js";import{I as _e}from"./context-88a045a1.js";import{B as ge}from"./index-4e53ca7a.js";import{U as ye}from"./UserAuthenticatedSession.generated-2b1fe276.js";import{o as be,m as Se}from"./messages-a7b081d6.js";function Ne(r){let t=r[0]._(H.or)+"",e;return{c(){e=Z(t)},l(i){e=ee(i,t)},m(i,s){y(i,e,s)},p(i,s){s&1&&t!==(t=i[0]._(H.or)+"")&&ne(e,t)},d(i){i&&v(e)}}}function Oe(r){let t,e,i;return e=new fe({props:{align:"center",$$slots:{default:[Ne]},$$scope:{ctx:r}}}),{c(){t=x("div"),w(e.$$.fragment),this.h()},l(s){t=F(s,"DIV",{class:!0});var l=E(t);j(e.$$.fragment,l),l.forEach(v),this.h()},h(){D(t,"class","or svelte-tnee6d")},m(s,l){y(s,t,l),U(e,t,null),i=!0},p(s,[l]){const c={};l&3&&(c.$$scope={dirty:l,ctx:s}),e.$set(c)},i(s){i||(b(e.$$.fragment,s),i=!0)},o(s){S(e.$$.fragment,s),i=!1},d(s){s&&v(t),R(e)}}}function Te(r,t,e){let i;return P(r,z,s=>e(0,i=s)),[i]}class Be extends A{constructor(t){super();q(this,t,Te,Oe,M,{})}}const $e={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"OauthSubscription"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"provider"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"OauthProviderEnum"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sessionName"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"oauth"},arguments:[{kind:"Argument",name:{kind:"Name",value:"provider"},value:{kind:"Variable",name:{kind:"Name",value:"provider"}}},{kind:"Argument",name:{kind:"Name",value:"sessionName"},value:{kind:"Variable",name:{kind:"Name",value:"sessionName"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"result"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OauthRequest"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OauthRegister"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"identityId"}},{kind:"Field",name:{kind:"Name",value:"requestEmail"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UserAuthenticatedSession"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserAuthenticatedSession"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OauthUserExists"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OauthTfa"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loginToken"}}]}}]}}]}}]}},...ye.definitions]},Ie=Object.keys(G).filter(r=>r!==G.line);function L(r,t,e){const i=r.slice();return i[13]=t[e],i}function xe(r){let t,e;return t=new _e({props:{icon:r[13]}}),{c(){w(t.$$.fragment)},l(i){j(t.$$.fragment,i)},m(i,s){U(t,i,s),e=!0},p(i,s){const l={};s&1&&(l.icon=i[13]),t.$set(l)},i(i){e||(b(t.$$.fragment,i),e=!0)},o(i){S(t.$$.fragment,i),e=!1},d(i){R(t,i)}}}function Q(r,t){let e,i,s,l;function c(){return t[6](t[13])}return i=new ge({props:{iconOnly:!0,type:"button",disabled:t[2],size:"large",variant:"game",fullWidth:!0,weight:"bold",square:!0,spacing:"normal",align:"center",$$slots:{default:[xe]},$$scope:{ctx:t}}}),i.$on("click",c),{key:r,first:null,c(){e=x("div"),w(i.$$.fragment),s=te(),this.h()},l(n){e=F(n,"DIV",{class:!0});var a=E(e);j(i.$$.fragment,a),s=ie(a),a.forEach(v),this.h()},h(){D(e,"class","provider-wrapper"),this.first=e},m(n,a){y(n,e,a),U(i,e,null),ae(e,s),l=!0},p(n,a){t=n;const d={};a&4&&(d.disabled=t[2]),a&65537&&(d.$$scope={dirty:a,ctx:t}),i.$set(d)},i(n){l||(b(i.$$.fragment,n),l=!0)},o(n){S(i.$$.fragment,n),l=!1},d(n){n&&v(e),R(i)}}}function we(r){let t,e=[],i=new Map,s,l=r[0];const c=n=>n[13];for(let n=0;n<l.length;n+=1){let a=L(r,l,n),d=c(a);i.set(d,e[n]=Q(d,a))}return{c(){t=x("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=F(n,"DIV",{class:!0});var a=E(t);for(let d=0;d<e.length;d+=1)e[d].l(a);a.forEach(v),this.h()},h(){D(t,"class","oauth svelte-1o26lbx")},m(n,a){y(n,t,a);for(let d=0;d<e.length;d+=1)e[d].m(t,null);s=!0},p(n,[a]){a&7&&(l=n[0],se(),e=oe(e,a,c,1,n,l,i,t,re,Q,null,L),le())},i(n){if(!s){for(let a=0;a<l.length;a+=1)b(e[a]);s=!0}},o(n){for(let a=0;a<e.length;a+=1)S(e[a]);s=!1},d(n){n&&v(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function Fe(r,t,e){let i;P(r,z,u=>e(8,i=u));var s=this&&this.__awaiter||function(u,T,k,m){function g(f){return f instanceof k?f:new k(function(o){o(f)})}return new(k||(k=Promise))(function(f,o){function _(p){try{$(m.next(p))}catch(I){o(I)}}function Y(p){try{$(m.throw(p))}catch(I){o(I)}}function $(p){p.done?f(p.value):g(p.value).then(_,Y)}$((m=m.apply(u,T||[])).next())})};let{providers:l=Ie}=t;var c=void 0,n=void 0,a=void 0,d,N=!1,O=de(),C=()=>{e(1,c=void 0),e(3,n=void 0),e(4,a=void 0)},h;ce(()=>{h&&clearInterval(h),n&&n.close(),d&&d.unsubscribe()});var W=u=>s(void 0,void 0,void 0,function*(){d&&d.unsubscribe(),e(2,N=!0);var T=he();d=ue(T.subscription($e,{provider:u,sessionName:pe()}),me(k=>{var{data:m,error:g}=k;g&&V.error.open({message:g.message});var f=m==null?void 0:m.oauth;if(f){var{result:o}=f;if((o==null?void 0:o.__typename)==="OauthTfa"&&(e(4,a="OauthTfa"),B("loginToken",o.loginToken),K.auth.open({tab:"login"}),O("oauth",{type:"OauthTfa",loginToken:o.loginToken})),(o==null?void 0:o.__typename)==="UserAuthenticatedSession"&&(e(4,a="UserAuthenticatedSession"),J.next({type:"authenticate",subtype:"login",userAuthenticatedSession:o}),J.next({type:"firstUserResponse",user:o.session.user}),O("oauth",{type:"UserAuthenticatedSession"}),ke()),(o==null?void 0:o.__typename)==="OauthRegister"&&(e(4,a="OauthRegister"),B.set("identityId",o.identityId),K.registerOauth.open({email:(o==null?void 0:o.requestEmail)?"requested":"omit"}),O("oauth",{type:"OauthRegister",identityId:o.identityId})),(o==null?void 0:o.__typename)==="OauthUserExists"&&V.oauthUserExists.open({username:o.user.name}),(o==null?void 0:o.__typename)==="OauthRequest"){var _=be({url:"https://"+o.url,windowName:"Connect OAuth with "+u});!_||_.closed||typeof _.closed=="undefined"?(V.error.open({message:i._(Se.popupWindowError)}),C()):e(3,n=_)}}e(2,N=!1)}))});const X=u=>{e(1,c=u)};return r.$$set=u=>{"providers"in u&&e(0,l=u.providers)},r.$$.update=()=>{r.$$.dirty&56&&n&&(clearInterval(h),e(5,h=setInterval(()=>{a&&!(n==null?void 0:n.closed)&&(n==null||n.close()),(n==null?void 0:n.closed)&&(clearInterval(h),a||C())},100))),r.$$.dirty&2&&c&&ve&&W(c)},[l,c,N,n,a,h,X]}class ze extends A{constructor(t){super();q(this,t,Fe,we,M,{providers:0})}}export{Be as O,ze as R};