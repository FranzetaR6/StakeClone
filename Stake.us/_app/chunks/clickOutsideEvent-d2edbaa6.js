const r=(e,n)=>{const t=c=>{e&&!e.contains(c.target)&&!c.defaultPrevented&&n()};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}};export{r as c};
