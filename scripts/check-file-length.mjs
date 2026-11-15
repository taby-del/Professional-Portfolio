/**
 * Enforces the project rule "no source file longer than 50 lines" for every
 * file type, including CSS (ESLint's max-lines only covers JS/TS).
 * Usage: npm run check:lines
 */
import { readdirSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";

const MAX_LINES = 50;
const ROOTS = ["src", "scripts"];
const ROOT_FILES = ["next.config.ts", "eslint.config.mjs"];
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".css"]);

/** Recursively lists files under `dir` with a checked extension. */
function listFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(path);
    return EXTENSIONS.has(extname(entry.name)) ? [path] : [];
  });
}

function countLines(file) {
  return readFileSync(file, "utf8").trimEnd().split(/\r?\n/).length;
}

const files = [...ROOTS.flatMap(listFiles), ...ROOT_FILES];
const tooLong = files
  .map((file) => ({ file, lines: countLines(file) }))
  .filter(({ lines }) => lines > MAX_LINES);

if (tooLong.length > 0) {
  for (const { file, lines } of tooLong) {
    console.error(`${file}: ${lines} lines (max ${MAX_LINES})`);
  }
  process.exit(1);
}

console.log(`✓ ${files.length} files within ${MAX_LINES} lines`);
