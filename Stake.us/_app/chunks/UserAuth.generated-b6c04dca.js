import{U as e}from"./UserBalance.generated-99010a9a.js";const i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserAuth"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"email"}},{kind:"Field",name:{kind:"Name",value:"hasPhoneNumberVerified"}},{kind:"Field",name:{kind:"Name",value:"hasEmailVerified"}},{kind:"Field",name:{kind:"Name",value:"hasPassword"}},{kind:"Field",name:{kind:"Name",value:"intercomHash"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"hasTfaEnabled"}},{kind:"Field",name:{kind:"Name",value:"mixpanelId"}},{kind:"Field",name:{kind:"Name",value:"hasOauth"}},{kind:"Field",name:{kind:"Name",value:"isMaxBetEnabled"}},{kind:"Field",name:{kind:"Name",value:"registeredWithVpn"}},{kind:"Field",name:{kind:"Name",value:"flags"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"flag"}}]}},{kind:"Field",name:{kind:"Name",value:"signupCode"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"code"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"roles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"balances"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserBalance"}}]}},{kind:"Field",name:{kind:"Name",value:"activeClientSeed"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"seed"}}]}},{kind:"Field",name:{kind:"Name",value:"previousServerSeed"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"seed"}}]}},{kind:"Field",name:{kind:"Name",value:"activeServerSeed"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"seedHash"}},{kind:"Field",name:{kind:"Name",value:"nextSeedHash"}},{kind:"Field",name:{kind:"Name",value:"nonce"}},{kind:"Field",name:{kind:"Name",value:"blocked"}}]}},{kind:"Field",name:{kind:"Name",value:"veriffStatus"}}]}},...e.definitions]};export{i as U};