import{G as e}from"./GameKuratorGameFragment.generated-d495bf6c.js";const a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserRecentGameList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"recentGameList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGame"}}]}}]}}]}},...e.definitions]};export{a as U};