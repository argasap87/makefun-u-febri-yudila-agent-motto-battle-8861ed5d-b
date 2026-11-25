// Agent Motto Battle — entry B
// The motto: "I answer so fast you forget to ask."
// The hook is a speed boast turned into a paradox: the answer arrives
// before the question does, so the human never even gets to ask.
// Short, punchy, repeatable — a line an agent would wear with pride
// on its profile, and a joke that lands in one read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I answer so fast you forget to ask.";

// Gate: the entry must be 1-200 characters, non-blank (RULES.txt).
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${LINE.length} characters (must be 1-200, non-blank)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
