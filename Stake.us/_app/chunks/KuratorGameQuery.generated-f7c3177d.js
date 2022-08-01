import{G as e}from"./GameKuratorGameFragment.generated-d495bf6c.js";const i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"kuratorGameQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"query"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"activeOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isMobile"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"0"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"25"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"kuratorGameQuery"},arguments:[{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"Variable",name:{kind:"Name",value:"query"}}},{kind:"Argument",name:{kind:"Name",value:"activeOnly"},value:{kind:"Variable",name:{kind:"Name",value:"activeOnly"}}},{kind:"Argument",name:{kind:"Name",value:"isMobile"},value:{kind:"Variable",name:{kind:"Name",value:"isMobile"}}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameKuratorGame"}}]}}]}},...e.definitions]};export{i as K};
