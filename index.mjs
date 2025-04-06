import dependencyTree from "dependency-tree";
import fs from "fs";

const tree = dependencyTree({
  filename:
    "/Users/jasonbrown/companies/digs/web/app/(protected)/projects/(index)/page.tsx", // entry point (specific route)
  directory: "/Users/jasonbrown/companies/digs", // root directory
  tsConfig: "/Users/jasonbrown/companies/digs/web/tsconfig.json", // root tsconfig file with tsconfig paths
  nodeModulesConfig: {
    entry: "module",
  },
  filter: (path) => {
    return path.indexOf("node_modules") === -1;
  },
  nonExistent: [],
  noTypeDefinitions: true,
});

fs.writeFileSync("dependency-tree.json", JSON.stringify(tree, null, 2));
