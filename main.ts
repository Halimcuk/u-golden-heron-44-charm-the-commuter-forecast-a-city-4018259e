// Charm the Commuter: Forecast a City That Isn't
// A one-line weather forecast for the invented city of Drizzlewick,
// where light rain falls upwards, so umbrellas stay folded and the morning bus stays dry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "In Drizzlewick, light rain falls upwards this morning, so umbrellas stay folded and the 8:15 bus arrives dry, on time, and faintly smug.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
