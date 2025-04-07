import dependencyTree from "./dependency-tree.js";
import fs from "fs";

const tree = dependencyTree({
  filename: "", // entry point (specific route)
  directory: "", // root directory
  tsConfig: "", // root tsconfig file with tsconfig paths
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
