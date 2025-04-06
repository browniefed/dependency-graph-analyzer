import precinct from "./precinct.js";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function read(filename) {
  return readFile(path.join(__dirname, "fixtures", filename), "utf8");
}
const fixture = await read("module.tsx");
const result = precinct(fixture, { type: "tsx" });
