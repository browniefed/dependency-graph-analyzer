import dependencyTree from "./dependency-tree.js";
import fs from "fs";
import { config } from "./configuration.js";

const tree = dependencyTree({
  filename: config.filename,
  directory: config.directory,
  tsConfig: config.tsConfig,
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
