import{ak as s,bA as o}from"./vendor-202ba1b8.js";import{r,a as b,t as T}from"./helpers-70f71db7.js";import{n as i}from"./index-a7a6ffa9.js";const d=(a,t)=>{var e;i.autobetFinished.open((e=t.data)==null?void 0:e.stopReason)},l=()=>{i.autobetStarted.open()};function g(a){const t={initial:"idle",id:"autobetTab",entry:["initAutobetDefaultStrategies"],states:{idle:{id:"autobetTab.idle",on:{TOGGLE_AUTOBETTING:{target:"betting",actions:["setInitialBettingState"]},TO_BET:{target:"#betTab"},TO_ADVANCED:{target:"#advancedTab"}}},betting:{entry:[r,"snapshotAutobetInfo",l],exit:[d],type:"parallel",states:{base:{initial:"idle",states:{idle:{type:"final",entry:[b,T],invoke:{src:"decideOnNextBet",onDone:"fetching",onError:"#autobetTab.idle"},on:{FINISH_AUTOBET:"#autobetTab.idle",START_FETCHING:{target:"fetching"}}},fetching:{entry:["resetBetState"],invoke:{id:"mutationBet",src:"mutationBet",onDone:{actions:o((e,n)=>({type:"SUCCESS",bet:n.data}))},onError:{actions:o("ERROR")}},on:{SUCCESS:{target:"revealing"},ERROR:{target:"#autobetTab.idle"}}},revealing:{}}},nextBet:{initial:"continue",id:"autobetTab.betting.nextBet",states:{continue:{on:{TOGGLE_AUTOBETTING:"stop",STOP_AUTOBETTING:"stop",TO_BET:"stop",ERROR:"stop"}},stop:{type:"final"}}}},onDone:{target:"#autobetTab.idle"}}}};return s.exports.merge(t,a)}export{l as a,d as b,g as e};
