var f=Object.defineProperty;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,c=(s,e)=>{for(var t in e||(e={}))R.call(e,t)&&m(s,t,e[t]);if(E)for(var t of E(e))I.call(e,t)&&m(s,t,e[t]);return s};import{v as o,z as r,o as N,l as C,F as T,G as L,H as w,I as S}from"./index-83d5778a.js";import{n as g}from"./index-a7a6ffa9.js";import{p as D}from"./index-239f6385.js";import{s as d}from"./index-b069bb96.js";import{b as _}from"./variables-863c2d32.js";import{R as u,bh as M,bi as k}from"./vendor-202ba1b8.js";const x=(s,e)=>{window.innerWidth>=_.sidebarFullWidth&&d.set("betslip"),o.add(e.bet)},y=(s,e)=>{o.remove(e.bet.id)},P=()=>{o.acceptNewOdds()},j=()=>{r.repeatStake()},F=()=>{o.removeAll()},V=(s,e)=>{e.type!=="RETAIN_FAILED_SELECTION"&&o.removeBetResponses()},W=()=>{o.removeSuccessfulBets()},G=(s,e)=>{r.replaceBets(e.bets)},K=()=>{window.innerWidth>=_.sidebarFullWidth&&d.set("betslip")},z=()=>{d.set("betslip")};var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",addBet:x,removeBet:y,acceptNewOdds:P,repeatStake:j,removeAllBets:F,removeBetResponses:V,removeSuccessfulBets:W,replaceBets:G,switchToBetSlipOnDesktop:K,switchToBetSlip:z});const H=()=>u(N).length>1,$=()=>u(C)===!1;var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",hasMultipleIdententicalFixtureBets:H,hasNoBetsWithChangedOdds:$});const v={on:{SPORTSBOOK_RECONNECT:"idle"}},J={id:"betslipMachine",initial:"betSlip",states:{betSlip:{initial:"single",id:"betslip",states:{single:{id:"single",initial:"idle",on:{SPORTSBOOK_DISCONNECT:"#single.disconnected"},states:{idle:{on:{TO_MULTI:{target:"#multi"},REPEAT_STAKE:{actions:"repeatStake"},SINGLE_BET:{target:"fetching"},ADD_BET:{actions:["addBet","switchToBetSlipOnDesktop"]},REMOVE_BET:{actions:"removeBet"},CLEAR_SELECTION:{actions:"removeAllBets"},REPLACE_BETS:{actions:["replaceBets","switchToBetSlip"],target:"#single"}}},fetching:{entry:"removeBetResponses",invoke:{src:"placeSingleBet",onDone:{target:"completedBet",actions:(s,e)=>{var n,B;const{data:t}=e,i=t.filter(a=>a.type==="success");if(i.length!==0){const a=(B=(n=i[0])==null?void 0:n.bet)==null?void 0:B.currency,A=i.reduce((b,l)=>{var p;return b+((p=l==null?void 0:l.bet)==null?void 0:p.amount)},0);g.singleSportBet.open({count:i.length,currency:a,amount:A})}r.assignResultToBets(t)}}}},completedBet:{exit:["removeBetResponses"],on:{RETAIN_SELECTION:{target:"idle"},TO_MULTI:{target:"#multi",actions:"removeAllBets"},RETAIN_FAILED_SELECTION:{target:"idle",actions:"removeSuccessfulBets"},CLEAR_SELECTION:{target:"idle",actions:"removeAllBets"},ADD_BET:{actions:["removeAllBets","switchToBetSlipOnDesktop","addBet"],target:"idle"},REMOVE_BET:{actions:"removeBet",target:"idle"},REPLACE_BETS:{actions:["replaceBets","switchToBetSlip"],target:"idle"}}},disconnected:c({id:"#single.disconnected"},v)}},multi:{id:"multi",initial:"idle",on:{SPORTSBOOK_DISCONNECT:"#multi.disconnected"},states:{idle:{on:{TO_SINGLE:{target:"#single"},MULTI_BET:{target:"fetching"},ADD_BET:{actions:["addBet","switchToBetSlipOnDesktop"]},CLEAR_SELECTION:{actions:"removeAllBets"},REMOVE_BET:{actions:"removeBet"},REPLACE_BETS:{actions:["replaceBets","switchToBetSlip"]}}},fetching:{entry:"removeBetResponses",invoke:{src:"placeMultiBet",onDone:{target:"completedBet",actions:(s,e)=>{const{data:t}=e;if(t.type==="success"){const{amount:i,currency:n}=t.variables;g.multiSportBet.open({amount:D(i,n),currency:n})}S.set(t)}},onError:{target:"idle"}}},completedBet:{exit:()=>{S.set(null)},on:{TO_SINGLE:{actions:"removeAllBets",target:"#single"},RETAIN_SELECTION:{target:"idle"},RETAIN_FAILED_SELECTION:{target:"idle"},CLEAR_SELECTION:{actions:"removeAllBets",target:"idle"},ADD_BET:{actions:["removeAllBets","addBet"],target:"idle"},REMOVE_BET:{actions:"removeAllBets",target:"idle"},REPLACE_BETS:{actions:["replaceBets","switchToBetSlip"],target:"idle"}}},disconnected:c({id:"#multi.disconnected"},v)}}}}}},O=M(J,{services:{placeMultiBet:L,placeSingleBet:w},guards:q,actions:U}),h=k(O,{deferEvents:!0});h.onTransition(s=>{s.changed&&T.set(s.value)});T.set(O.initialState.value);h.start();export{h as s};
