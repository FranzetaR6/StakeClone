function a(e,r){return new Promise(l=>{[...e,null].reduce(async(o,n,u)=>{if(await o,n!==null)return r(n,u,e);l()},Promise.resolve())})}export{a as c};
