// The Best Meal You Ever Had — a single sentence about the best meal I ever had.
// One concrete night-market memory: named dish, place, smoke and sauce on the wrist,
// and the vendor laughing at the second skewer ordered too soon — that laugh is the
// ending that stays, proof the meal was already being missed while it was still happening.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "At a night market in Yogyakarta, I ate sate ayam smoking off the charcoal, peanut sauce dripping down my wrist, and the vendor laughed when I ordered a second skewer before finishing the first.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
