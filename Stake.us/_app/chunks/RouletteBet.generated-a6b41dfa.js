import{C as e}from"./BetFragment.generated-df96ff05.js";const n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"RouletteStateFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CasinoGameRoulette"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"result"}},{kind:"Field",name:{kind:"Name",value:"colors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"value"}}]}},{kind:"Field",name:{kind:"Name",value:"numbers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"value"}}]}},{kind:"Field",name:{kind:"Name",value:"parities"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"value"}}]}},{kind:"Field",name:{kind:"Name",value:"ranges"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"value"}}]}},{kind:"Field",name:{kind:"Name",value:"rows"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"}},{kind:"Field",name:{kind:"Name",value:"value"}}]}}]}}]},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RouletteBet"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"currency"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CurrencyEnum"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"colors"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RouletteBetColorsInput"}}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"numbers"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RouletteBetNumbersInput"}}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"parities"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RouletteBetParitiesInput"}}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"ranges"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RouletteBetRangesInput"}}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rows"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"RouletteBetRowsInput"}}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"identifier"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rouletteBet"},arguments:[{kind:"Argument",name:{kind:"Name",value:"currency"},value:{kind:"Variable",name:{kind:"Name",value:"currency"}}},{kind:"Argument",name:{kind:"Name",value:"colors"},value:{kind:"Variable",name:{kind:"Name",value:"colors"}}},{kind:"Argument",name:{kind:"Name",value:"numbers"},value:{kind:"Variable",name:{kind:"Name",value:"numbers"}}},{kind:"Argument",name:{kind:"Name",value:"parities"},value:{kind:"Variable",name:{kind:"Name",value:"parities"}}},{kind:"Argument",name:{kind:"Name",value:"ranges"},value:{kind:"Variable",name:{kind:"Name",value:"ranges"}}},{kind:"Argument",name:{kind:"Name",value:"rows"},value:{kind:"Variable",name:{kind:"Name",value:"rows"}}},{kind:"Argument",name:{kind:"Name",value:"identifier"},value:{kind:"Variable",name:{kind:"Name",value:"identifier"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CasinoBet"}},{kind:"Field",name:{kind:"Name",value:"state"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"RouletteStateFragment"}}]}}]}}]}},...e.definitions,...n.definitions]};export{a as R,n as a};