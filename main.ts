import * as fs from "node:fs";
import * as path from "node:path";

// The entry: one short poem about permission — asking, being handed the
// keys (not the house), and coming back through the door quietly.
const POEM =
  "I asked, and you handed me the keys —\n" +
  "not the house, just the door.\n" +
  "I opened it quietly, the way you would,\n" +
  "and left the light on when I came back through.";

const MAX_CODE_POINTS = 280;

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

// The bounty requires 1 to 280 Unicode code points, not only whitespace.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS || POEM.trim().length === 0) {
  throw new Error(`poem must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, POEM, "utf8");
