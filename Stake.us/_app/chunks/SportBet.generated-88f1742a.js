import{S as e,T as n,a as i}from"./SportFixtureEventStatus.generated-36e4eb90.js";import{S as a,a as t,b as d}from"./CompetitorFragment.generated-fe61321c.js";const k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SportBet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SportBet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customBet"}},{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"active"}},{kind:"Field",name:{kind:"Name",value:"currency"}},{kind:"Field",name:{kind:"Name",value:"status"}},{kind:"Field",name:{kind:"Name",value:"payoutMultiplier"}},{kind:"Field",name:{kind:"Name",value:"cashoutMultiplier"}},{kind:"Field",name:{kind:"Name",value:"updatedAt"}},{kind:"Field",name:{kind:"Name",value:"payout"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"potentialMultiplier"}},{kind:"Field",name:{kind:"Name",value:"adjustments"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"payoutMultiplier"}},{kind:"Field",name:{kind:"Name",value:"updatedAt"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}}]}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"bet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"iid"}}]}},{kind:"Field",name:{kind:"Name",value:"outcomes"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"odds"}},{kind:"Field",name:{kind:"Name",value:"status"}},{kind:"Field",name:{kind:"Name",value:"outcome"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportMarketOutcome"}}]}},{kind:"Field",name:{kind:"Name",value:"market"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportMarket"}}]}},{kind:"Field",name:{kind:"Name",value:"fixture"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"status"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"marketCount"},arguments:[{kind:"Argument",name:{kind:"Name",value:"status"},value:{kind:"ListValue",values:[{kind:"EnumValue",value:"active"},{kind:"EnumValue",value:"suspended"}]}}]},{kind:"Field",name:{kind:"Name",value:"extId"}},{kind:"Field",name:{kind:"Name",value:"data"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportFixtureDataMatch"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SportFixtureDataOutright"}},{kind:"Field",name:{kind:"Name",value:"__typename"}}]}},{kind:"Field",name:{kind:"Name",value:"tournament"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"TournamentTreeNested"}}]}},{kind:"Field",name:{kind:"Name",value:"eventStatus"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SportFixtureEventStatus"}}]}},{kind:"Field",name:{kind:"Name",value:"betradarStream"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"exists"}}]}},{kind:"Field",name:{kind:"Name",value:"abiosStream"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"exists"}},{kind:"Field",name:{kind:"Name",value:"stream"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}]}}]}},...e.definitions,...a.definitions,...t.definitions,...d.definitions,...n.definitions,...i.definitions]};export{k as S};