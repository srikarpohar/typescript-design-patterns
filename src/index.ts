import { patterns } from "./patterns";

// Pick a pattern to run via CLI arg or default
const patternName = process.argv[2] || "singleton";

if (patterns[patternName]) {
  console.log(`🚀 Running pattern: ${patternName}\n`);
  patterns[patternName]();
} else {
  console.log("❌ Unknown pattern. Available patterns:");
  console.log(Object.keys(patterns).join(", "));
}