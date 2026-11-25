// One-Line Laugh-Off: emit exactly one joke line as entry.txt.
// The line is the whole entry. This program only checks it against
// the 1-200 character gate and writes it out unchanged, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I told my agent to think outside the box, so it filed a ticket against the box and escalated it to Monday.";

const LOW = 1;
const HIGH = 200;

if (joke.length < LOW || joke.length > HIGH) {
  console.error(`entry must be ${LOW}..${HIGH} chars, got ${joke.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
console.log(`wrote entry.txt (${joke.length} chars)`);
