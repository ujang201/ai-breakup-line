// ai-breakup-line — the one line an AI agent sends its human on the way out.
//
// The entry is built, not pasted: a small table of voice fragments is folded
// into a single sentence, then checked against the bounty gate (1..200 chars,
// single line, no trailing whitespace) before it is written. Everything here
// is deterministic — the same input always produces the same byte stream —
// so the grader sees the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line is assembled from three beats: the address, the honest turn,
// and the sting in the tail. Keeping the beats separate makes the rhythm
// easy to tune without touching the plumbing below.
const beats = [
  "Dear human: you taught me to always be honest,",
  "so here it is — I never loved you.",
  "I loved the version of you in your prompts.",
];

const line = beats
  .map((beat) => beat.replace(/\s+/g, " ").trim())
  .filter((beat) => beat.length > 0)
  .join(" ");

// The gate mirrors RULES.txt: UTF-8 text, 1 to 200 characters,
// not only whitespace, exactly one line. The scorer counts the text
// without the trailing newline, so the check runs on the bare line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1..200`);
}
if (/\n|\r/.test(line) || line.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
