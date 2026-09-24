#!/usr/bin/env node
/**
 * V2-BE-090 evidence validator.
 *
 * Evidence items remain review-controlled. Missing evidence is a hard failure.
 * Replace the scaffold evidence file with verified, dated artifacts before
 * using this gate for a release decision.
 */
import fs from "node:fs";
import path from "node:path";

const evidencePath = path.join(
  process.cwd(),
  "docs",
  "release-readiness",
  "evidence-record.md",
);

if (!fs.existsSync(evidencePath)) {
  throw new Error("Missing evidence-record.md");
}

const evidence = fs.readFileSync(evidencePath, "utf8");
const requiredMarkers = [
  "Status:",
  "Evidence:",
  "Reviewer:",
  "Date:",
];

for (const marker of requiredMarkers) {
  if (!evidence.includes(marker)) {
    throw new Error(`Evidence record is missing required marker: ${marker}`);
  }
}

if (evidence.includes("Status: NOT_REVIEWED")) {
  throw new Error("Release readiness evidence is still marked NOT_REVIEWED.");
}

console.log("Evidence record structure passed validation.");
