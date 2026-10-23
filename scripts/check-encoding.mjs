#!/usr/bin/env node
/**
 * High-confidence encoding guard for public marketing source files.
 *
 * This check intentionally looks for common UTF-8-decoded-as-Windows-1252
 * sequences and invalid UTF-8 bytes. It does not rewrite files. Fix confirmed
 * findings by hand so legitimate accents, punctuation, names, and currency
 * symbols are preserved.
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");

const scanTargets = ["src", "public"];
const rootTextFiles = ["middleware.ts", "next.config.ts", "README.md"];

const textExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".mdx",
  ".txt",
  ".html",
  ".css",
  ".scss",
  ".svg",
  ".xml",
  ".yml",
  ".yaml",
  ".csv",
  ".sql",
  ".env",
  ".example",
]);

const excludedDirectories = new Set([
  "node_modules",
  ".next",
  ".git",
  ".vercel",
  "coverage",
  "screenshots",
  "handoff-screenshots",
  ".handoff-screenshots",
]);

// Characters CP1252 produces when UTF-8 punctuation bytes are decoded as text.
const cp1252Trail =
  "\\u0080-\\u00BF\\u0152\\u0153\\u0160\\u0161\\u0178\\u017D\\u017E\\u0192\\u02C6\\u02DC\\u2013\\u2014\\u2018\\u2019\\u201A\\u201C\\u201D\\u201E\\u2020\\u2021\\u2022\\u2026\\u2030\\u2039\\u203A\\u20AC\\u2122";

const patterns = [
  {
    label: "UTF-8 decoded as Windows-1252 (Ã sequence)",
    regex: new RegExp(`Ã[${cp1252Trail}]`, "gu"),
  },
  {
    label: "UTF-8 decoded as Windows-1252 (Â sequence)",
    regex: new RegExp(`Â[${cp1252Trail}]`, "gu"),
  },
  {
    label: "UTF-8 decoded as Windows-1252 (â sequence)",
    regex: new RegExp(`â[${cp1252Trail}]`, "gu"),
  },
  {
    label: "UTF-8 decoded as Windows-1252 (ð sequence)",
    regex: new RegExp(`ð[${cp1252Trail}]`, "gu"),
  },
  {
    label: "UTF-8 BOM decoded as Windows-1252",
    regex: /ï»¿/gu,
  },
  {
    label: "Double-encoded Unicode replacement character",
    regex: /Ã¯Â¿Â½/gu,
  },
  {
    label: "Unicode replacement character",
    regex: /\uFFFD/gu,
  },
  {
    label: "C1 control character",
    regex: /[\u0080-\u009F]/gu,
  },
];

const files = [];

function addFile(fullPath) {
  const relativePath = path.relative(repoRoot, fullPath);
  if (relativePath.startsWith("..")) return;
  files.push({ fullPath, relativePath });
}

function walk(target) {
  const fullPath = path.join(repoRoot, target);
  if (!fs.existsSync(fullPath)) return;

  const stat = fs.statSync(fullPath);
  if (stat.isFile()) {
    if (textExtensions.has(path.extname(fullPath).toLowerCase())) addFile(fullPath);
    return;
  }

  for (const entry of fs.readdirSync(fullPath, { withFileTypes: true })) {
    if (excludedDirectories.has(entry.name)) continue;
    const child = path.join(fullPath, entry.name);
    if (entry.isDirectory()) {
      walk(path.relative(repoRoot, child));
    } else if (textExtensions.has(path.extname(entry.name).toLowerCase())) {
      addFile(child);
    }
  }
}

for (const target of scanTargets) walk(target);
for (const target of rootTextFiles) {
  const fullPath = path.join(repoRoot, target);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) addFile(fullPath);
}

const findings = [];

for (const { fullPath, relativePath } of files) {
  const buffer = fs.readFileSync(fullPath);
  let text;
  let validUtf8 = true;

  try {
    text = new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch {
    validUtf8 = false;
    text = new TextDecoder("utf-8").decode(buffer);
  }

  if (!validUtf8) {
    const firstReplacement = text.indexOf("\uFFFD");
    const line =
      firstReplacement === -1
        ? 1
        : text.slice(0, firstReplacement).split(/\r?\n/).length;
    findings.push({
      file: relativePath,
      line,
      label: "Invalid UTF-8 byte sequence",
      excerpt: buffer
        .subarray(0, 120)
        .toString("hex")
        .replace(/(.{2})/g, "$1 ")
        .trim(),
    });
  }

  const lines = text.split(/\r?\n/);
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    for (const { label, regex } of patterns) {
      regex.lastIndex = 0;
      if (regex.test(line)) {
        findings.push({
          file: relativePath,
          line: lineIndex + 1,
          label,
          excerpt: line.trim().slice(0, 240),
        });
      }
    }
  }
}

if (findings.length > 0) {
  console.error(
    `Encoding check failed: ${findings.length} high-confidence issue(s) in ${files.length} scanned text files.`
  );
  for (const finding of findings) {
    console.error(
      `  ${finding.file}:${finding.line} [${finding.label}] ${finding.excerpt}`
    );
  }
  process.exitCode = 1;
} else {
  console.log(`Encoding check passed: ${files.length} text files scanned.`);
}
