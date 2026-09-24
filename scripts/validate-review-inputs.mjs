#!/usr/bin/env node
/**
 * V2-BE-090 release-readiness preflight.
 *
 * This validates review inputs and repository boundaries. It does not certify
 * the system for production and does not execute destructive operations.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "package.json",
  "package-lock.json",
  "prisma/schema.prisma",
  "prisma/migrations/migration_lock.toml",
  "docs/release-readiness/review-matrix.md",
  "docs/release-readiness/release-runbook.md",
];

for (const relativePath of requiredFiles) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing release-readiness input: ${relativePath}`);
  }
}

const schema = fs.readFileSync(path.join(root, "prisma/schema.prisma"), "utf8");
const forbiddenRuntimeDependencies = ["stellar-sdk", "soroban", "freighter"];

for (const dependency of forbiddenRuntimeDependencies) {
  if (schema.toLowerCase().includes(dependency)) {
    throw new Error(`Forbidden protocol runtime marker found: ${dependency}`);
  }
}

console.log("Release-readiness input and boundary checks passed.");
