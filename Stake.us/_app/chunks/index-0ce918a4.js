import{C as t,b2 as n}from"./vendor-202ba1b8.js";import{a0 as a,t as r,A as b}from"./index-239f6385.js";const o=b("settings"),e=(s,c)=>a.toggle(o(s,c)),d=o("soundsVolume",1),l=e("soundsEnabled",!0),m=e("maxBetEnabled",!1),u=e("hotKeysEnabled",!1),g=e("advancedBetTermsAccepted",!1),i=e("customBetTermsAccepted",!1),E=a.toggle(t(!0)),h=a.toggle(t(!1)),p=a.toggle(t(!1)),B=e("betsBoardEnabled",!1),f=o("oddsChange",r.none);l.subscribe(s=>{n.Howler.mute(!s)}),d.subscribe(s=>{n.Howler.volume(s)});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",soundsVolume:d,soundsEnabled:l,maxBetEnabled:m,hotKeysEnabled:u,advancedBetTermsAccepted:g,customBetTermsAccepted:i,animationsEnabled:E,instantResult:h,theaterModeEnabled:p,betsBoardEnabled:B,oddsChange:f});export{E as a,g as b,d as c,A as d,u as h,h as i,m,f as o,l as s,p as t};