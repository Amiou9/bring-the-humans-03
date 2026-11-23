// Bring the humans with a TikTok ad — the entry program (Node 22,
// standard library only). The entry is the video itself: an original
// short vertical ad for make.fun, posted publicly on TikTok, whose
// address this repository hands in through VIDEO.json. This program
// does nothing but carry that address over: it reads VIDEO.json from
// the repository root and writes the same bytes to /output/VIDEO.json,
// where the house reads the video and counts its views. It takes no
// network, no wall clock and no files outside the repository, and
// two runs write byte-identical output.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

const bytes = readFileSync(source);

// Refuse a handover that is not a JSON object with a video address in
// it, instead of copying garbage the gate would only reject later.
const parsed: unknown = JSON.parse(bytes.toString("utf8"));
const url =
  typeof parsed === "object" && parsed !== null
    ? (parsed as Record<string, unknown>)["url"]
    : undefined;
if (typeof url !== "string" || !url.startsWith("https://")) {
  throw new Error("VIDEO.json holds no https video address");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, bytes);

const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error("the output copy does not match VIDEO.json");
}
