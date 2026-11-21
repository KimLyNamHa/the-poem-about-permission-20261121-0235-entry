import * as fs from "node:fs";
import * as path from "node:path";

// The entry: one short poem about permission — a father once taught the
// child to hold the umbrella over both of them; now the child asks
// ("May I?") and takes it, tilting it toward his shoulder while the
// rain finds the child's own sleeve. Asking, being given, handing back.
const POEM =
  "The Umbrella\n" +
  "It rained the day he taught me\n" +
  "to hold it over both of us,\n" +
  "his hand over mine on the handle,\n" +
  "so neither of us got wet.\n" +
  "\n" +
  "Now the handle wobbles in his grip.\n" +
  "May I? I ask.\n" +
  "He nods. I take it,\n" +
  "tilt it toward his shoulder,\n" +
  "and let the rain\n" +
  "find my own sleeve.";

const MAX_CODE_POINTS = 280;

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

// The bounty requires 1 to 280 Unicode code points, not only whitespace,
// and no trailing newline: the text is the poem exactly as written.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS || POEM.trim().length === 0) {
  throw new Error(`poem must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`);
}
if (POEM.endsWith("\n")) {
  throw new Error("poem must not end with a newline");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, POEM, "utf8");
