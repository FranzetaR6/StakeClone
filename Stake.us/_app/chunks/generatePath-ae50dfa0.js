import{bf as c}from"./vendor-202ba1b8.js";const t={},o=1e4;let n=0;function i(e){if(t[e])return t[e];const r=c(e);return n<o&&(t[e]=r,n+=1),r}function f(e="/",r={}){return e==="/"?e:i(e)(r,{pretty:!0})}export{f as g};