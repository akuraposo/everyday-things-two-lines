// make.fun everyday-things entry: writes the two-line explanation to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "A queue is like a zipper slowly closing: each person is one tooth clicking into place behind the person in front, so the whole line shuffles forward as one.",
  "The zipper fits because both only let one tooth join at a time, in a fixed order, but it leaves out that people get bored, swap places, or give up and walk away, while zipper teeth never complain.",
].join("\n");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
