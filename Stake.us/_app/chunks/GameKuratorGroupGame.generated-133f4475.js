const e={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GameCardKuratorGame"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GameKuratorGame"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"}},{kind:"Field",name:{kind:"Name",value:"groupGames"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"group"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"translation"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}}]}}]},n={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GameKuratorGroupGame"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"GameKuratorGroupGame"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"game"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GameCardKuratorGame"}}]}}]}},...e.definitions]};export{n as G};