# Dep graph Analysis

## What

- Given a file, a tsconfig, find all files in the graph
- Get the import path, name of imports, and whether it's importing a type or something else.
- If type, can it be extracted
- Is it even being used in that file.
- If something else, can it be extracted
- Is it being used in that file.
- Is something else declared in that file causing a huge dependency graph to be imported, and should be extracted?

## Other

- detect import type, but also we need to look at the import and detect export type
- Can we integrate Knip to also remove / identify unused stuff
- Can we auto fix? Extract types to their own files, etc.
- Project structure analysis, can we recommend better organization for your app?

## Resources

https://github.com/dependents/node-dependency-tree
https://github.com/dependents/node-filing-cabinet
https://github.com/webpro-nl/knip
https://github.com/pahen/madge

// map import into one file to export from that file.
// figure out if the file exported is exporting as a type but importing as value
{
path: '',
imports: [
{
path: '',
name: '',
importedAs: 'value' | 'type',
exportedAs: 'value' | 'type',
usedInExportingFile: true|false
}
],
}

// can we run `knip` on a file to check if it's not being used in that file.
// if not recommend exports, just push to an export array
