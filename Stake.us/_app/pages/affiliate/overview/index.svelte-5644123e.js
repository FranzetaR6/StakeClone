import{a7 as _,S as F,i as M,s as O,B as J,j as y,k as v,l as N,m as b,n as j,aS as H,d as p,o as S,f as g,a1 as E,p as K,q as U,x as w,u as $,v as x,a6 as A,e as I,c as P,a as R,b as Q,a0 as V,t as B,g as T,h as q}from"../../../chunks/vendor-202ba1b8.js";import{s as X}from"../../../chunks/pageSeo-16c441c8.js";import{c as Z}from"../../../chunks/sanity-10ab6880.js";import{i as ee}from"../../../chunks/index-818f9b69.js";import{k as C,i as te}from"../../../chunks/index-78395626.js";import{p as se}from"../../../chunks/stores-5d02eee0.js";import{d as ae}from"../../../chunks/index-da75da01.js";import{T as W}from"../../../chunks/index-ad8572b8.js";import{L as ie}from"../../../chunks/index-21535704.js";/* empty css                                                           */import{C as ne}from"../../../chunks/index-80737105.js";import{S as oe}from"../../../chunks/index-ed0c4dd7.js";import{A as re}from"../../../chunks/AffiliateWrap-06461448.js";import{c as G,f as le}from"../../../chunks/campaignList-4b5289ed.js";import{g as fe}from"../../../chunks/context-cc7b6928.js";import"../../../chunks/groq-c0f2c31a.js";import"../../../chunks/index-239f6385.js";import"../../../chunks/goto-7d4088c3.js";import"../../../chunks/singletons-4b6b0cdf.js";import"../../../chunks/requestClient-501ba30b.js";import"../../../chunks/context-8abb743c.js";import"../../../chunks/context-88a045a1.js";import"../../../chunks/types-0152c01c.js";import"../../../chunks/index-f1572b2c.js";import"../../../chunks/index-a6d5af8e.js";import"../../../chunks/resizeObserver-626ed4b4.js";import"../../../chunks/index-c5a03082.js";import"../../../chunks/variables-863c2d32.js";import"../../../chunks/index-4e53ca7a.js";import"../../../chunks/index-e9b6100a.js";/* empty css                                                          */import"../../../chunks/context-b73075e6.js";import"../../../chunks/NomarlizedBalanceFragment.generated-45714ccc.js";import"../../../chunks/makeFetchStore-06397d55.js";const ce={link:_._("Referral Link"),downloadBanners:_._("Download Banners"),casino:_._("Casino"),sportsbook:_._("Sportsbook"),affiliateDetails1:t=>({id:"Refer our brand and earn money through participating in {site}\u2019s Affiliate Program! You will receive an affiliate commission for every user that registers and plays on {site} through your links.",values:{site:t}}),affiliateDetailsSweeps:t=>({id:"Refer our brand and earn Gold coins + Stake cash through participating in the Affiliate Program! You will receive a commission for every user that registers and plays on {site} through your links. You can use your Gold Coins or Stake Cash to play or redeem!",values:{site:t}}),affiliateDetails2:t=>({id:"Being a {site} affiliate means you will earn commission for all bets placed on both our Casino and Sportsbook - which unlike traditional affiliate programs, means that despite if they win or lose, you still make the same commission!",values:{site:t}}),affiliateDetails2Sweeps:t=>({id:"Being a {site} affiliate means you will earn commission for all bets on our Casino - which unlike traditional affiliate programs, means that despite if they win or lose, you still make the same commission!",values:{site:t}}),supportTeam:_._("support team")},me={casino:_._("Social Casino"),link:_._("Referral Link"),downloadBanners:_._("Download Banners"),affiliateDetails1:t=>_._("Refer our brand and earn money through participating in {site}\u2019s Affiliate Program! You will receive an affiliate commission for every user that registers and plays on {site} through your links.",{site:t}),affiliateDetails2:t=>_._("Being a {site} affiliate means you will earn commission based on a percentage of the house edge acquired when your referral plays on our site - which unlike traditional affiliate programs, means that despite if they win or lose, you still make the same commission!",{site:t}),affiliateDetails2Sweeps:t=>({id:"Being a {site} affiliate means you will earn commission for all every game played on our Social Casino - which unlike traditional affiliate programs, means that despite if they win or lose, you still make the same commission!",values:{site:t}}),supportTeam:_._("support team")},ue={Primedice:me,Stake:ce};var k=ue[C];function pe(t){let s=t[4]._(k.affiliateDetailsSweeps(C))+"",e;return{c(){e=B(s)},l(a){e=T(a,s)},m(a,n){g(a,e,n)},p(a,n){n&16&&s!==(s=a[4]._(k.affiliateDetailsSweeps(C))+"")&&q(e,s)},d(a){a&&p(e)}}}function de(t){let s=t[4]._(k.affiliateDetails2Sweeps(C))+"",e;return{c(){e=B(s)},l(a){e=T(a,s)},m(a,n){g(a,e,n)},p(a,n){n&16&&s!==(s=a[4]._(k.affiliateDetails2Sweeps(C))+"")&&q(e,s)},d(a){a&&p(e)}}}function he(t){let s,e=t[4]._(k.link)+"",a;return{c(){s=I("span"),a=B(e),this.h()},l(n){s=P(n,"SPAN",{slot:!0});var r=R(s);a=T(r,e),r.forEach(p),this.h()},h(){Q(s,"slot","label")},m(n,r){g(n,s,r),E(s,a)},p(n,r){r&16&&e!==(e=n[4]._(k.link)+"")&&q(a,e)},d(n){n&&p(s)}}}function _e(t){let s,e=t[4]._(k.downloadBanners)+"",a;return{c(){s=I("span"),a=B(e)},l(n){s=P(n,"SPAN",{});var r=R(s);a=T(r,e),r.forEach(p)},m(n,r){g(n,s,r),E(s,a)},p(n,r){r&16&&e!==(e=n[4]._(k.downloadBanners)+"")&&q(a,e)},d(n){n&&p(s)}}}function ge(t){let s,e,a,n,r,c,u,d,o,f,h=!te;return e=new W({props:{tag:"span",$$slots:{default:[pe]},$$scope:{ctx:t}}}),n=new W({props:{tag:"span",$$slots:{default:[de]},$$scope:{ctx:t}}}),u=new ne({props:{value:t[3],disabled:!t[1],$$slots:{label:[he]},$$scope:{ctx:t}}}),o=new ie({props:{square:!0,external:!0,variant:"game",to:"https://www.dropbox.com/sh/7qfzyxaf3xw8i58/AADwjdQ-danAJI-GCLET12n6a?dl=0",$$slots:{default:[_e]},$$scope:{ctx:t}}}),{c(){s=v(),y(e.$$.fragment),a=v(),y(n.$$.fragment),r=v(),c=I("div"),y(u.$$.fragment),d=v(),y(o.$$.fragment),this.h()},l(i){s=j(i),b(e.$$.fragment,i),a=j(i),b(n.$$.fragment,i),r=j(i),c=P(i,"DIV",{class:!0});var l=R(c);b(u.$$.fragment,l),d=j(l),b(o.$$.fragment,l),l.forEach(p),this.h()},h(){Q(c,"class","campaign-wrap svelte-1j5ww6r"),V(c,"stacked",t[2])},m(i,l){g(i,s,l),S(e,i,l),g(i,a,l),S(n,i,l),g(i,r,l),g(i,c,l),S(u,c,null),E(c,d),S(o,c,null),f=!0},p(i,l){const D={};l&8208&&(D.$$scope={dirty:l,ctx:i}),e.$set(D);const L={};l&8208&&(L.$$scope={dirty:l,ctx:i}),n.$set(L);const m={};l&8&&(m.value=i[3]),l&2&&(m.disabled=!i[1]),l&8208&&(m.$$scope={dirty:l,ctx:i}),u.$set(m);const z={};l&8208&&(z.$$scope={dirty:l,ctx:i}),o.$set(z),l&4&&V(c,"stacked",i[2])},i(i){f||(w(h),w(e.$$.fragment,i),w(n.$$.fragment,i),w(u.$$.fragment,i),w(o.$$.fragment,i),f=!0)},o(i){$(h),$(e.$$.fragment,i),$(n.$$.fragment,i),$(u.$$.fragment,i),$(o.$$.fragment,i),f=!1},d(i){i&&p(s),x(e,i),i&&p(a),x(n,i),i&&p(r),i&&p(c),x(u),x(o)}}}function ke(t){let s,e,a,n,r,c;const u=[t[0]];let d={};for(let o=0;o<u.length;o+=1)d=J(d,u[o]);return s=new oe({props:d}),r=new re({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),{c(){y(s.$$.fragment),e=v(),a=N(),n=v(),y(r.$$.fragment)},l(o){b(s.$$.fragment,o),e=j(o);const f=H('[data-svelte="svelte-g7ngxt"]',document.head);a=N(),f.forEach(p),n=j(o),b(r.$$.fragment,o)},m(o,f){S(s,o,f),g(o,e,f),E(document.head,a),g(o,n,f),S(r,o,f),c=!0},p(o,[f]){const h=f&1?K(u,[U(o[0])]):{};s.$set(h);const i={};f&8222&&(i.$$scope={dirty:f,ctx:o}),r.$set(i)},i(o){c||(w(s.$$.fragment,o),w(r.$$.fragment,o),c=!0)},o(o){$(s.$$.fragment,o),$(r.$$.fragment,o),c=!1},d(o){x(s,o),o&&p(e),p(a),o&&p(n),x(r,o)}}}var we=globalThis&&globalThis.__awaiter||function(t,s,e,a){function n(r){return r instanceof e?r:new e(function(c){c(r)})}return new(e||(e=Promise))(function(r,c){function u(f){try{o(a.next(f))}catch(h){c(h)}}function d(f){try{o(a.throw(f))}catch(h){c(h)}}function o(f){f.done?r(f.value):n(f.value).then(u,d)}o((a=a.apply(t,s||[])).next())})},Y=X["affiliate/overview"];function tt(t){return we(this,void 0,void 0,function*(){try{var s=t.page.path,e=yield Z(t,s);if(t.session.isAuthenticated){var a=yield G.fetch(t,{offset:0,limit:50});return{props:{campaignList:a,seo:e||Y}}}else return{props:{seo:Y}}}catch{return{props:{seo:Y}}}})}function $e(t,s,e){let a,n,r,c,u,d,o,f,h;A(t,se,m=>e(10,d=m)),A(t,ae,m=>e(11,o=m)),A(t,G,m=>e(12,f=m)),A(t,ee,m=>e(4,h=m));var i;let{campaignList:l}=s,{seo:D}=s;l&&G.set({loading:!1,error:null,data:l});var L=fe();return A(t,L,m=>e(9,u=m)),t.$$set=m=>{"campaignList"in m&&e(6,l=m.campaignList),"seo"in m&&e(0,D=m.seo)},t.$$.update=()=>{t.$$.dirty&6144&&e(8,a=le(f.data,o)),t.$$.dirty&384&&e(1,n=e(7,i=a==null?void 0:a[0])===null||i===void 0?void 0:i.code),t.$$.dirty&1026&&e(3,r=d.host+"/?c="+n),t.$$.dirty&512&&e(2,c=u<600)},[D,n,c,r,h,L,l,i,a,u,d,o,f]}class st extends F{constructor(s){super();M(this,s,$e,ke,O,{campaignList:6,seo:0})}}export{st as default,tt as load};
