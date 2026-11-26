// The Internet in One Word: writes one word describing the whole
// internet to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "feral";

// Gate guard first: 1-30 chars, not only whitespace — fail before
// touching the output file.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`entry must be 1-30 non-whitespace chars, got ${WORD.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");
console.log(`wrote ${outPath} (${WORD.length} chars): ${WORD}`);
