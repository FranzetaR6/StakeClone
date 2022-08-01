var k=Object.defineProperty,s=Object.defineProperties;var r=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(i,e,n)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,t=(i,e)=>{for(var n in e||(e={}))c.call(e,n)&&l(i,n,e[n]);if(d)for(var n of d(e))u.call(e,n)&&l(i,n,e[n]);return i},o=(i,e)=>s(i,r(e));import{N as v}from"./NomarlizedBalanceFragment.generated-45714ccc.js";import"./index-239f6385.js";import"./vendor-202ba1b8.js";import{m as N}from"./makeFetchStore-06397d55.js";const F={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CampaignList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"campaignList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"code"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"hitCount"}},{kind:"Field",name:{kind:"Name",value:"referCount"}},{kind:"Field",name:{kind:"Name",value:"uniqueDepositors"}},{kind:"Field",name:{kind:"Name",value:"depositCount"}},{kind:"Field",alias:{kind:"Name",value:"commissionRate"},name:{kind:"Name",value:"comission"}},{kind:"Field",name:{kind:"Name",value:"ngr"}},{kind:"Field",name:{kind:"Name",value:"balances"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"commission"},name:{kind:"Name",value:"comission"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NormalizedBalanceFragment"}}]}},{kind:"Field",name:{kind:"Name",value:"available"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NormalizedBalanceFragment"}}]}}]}}]}}]}}]}},...v.definitions]},D=(i,e)=>{var n;return((n=i==null?void 0:i.user)==null?void 0:n.campaignList.map(a=>o(t({},a),{commissionRate:a.commissionRate,available:a.balances.map(({available:m})=>m),withdrawal:a.balances.map(({withdrawal:m})=>m),commission:a.balances.map(({commission:m})=>m),currency:e})))||[]},y=N(F);export{y as c,D as f};