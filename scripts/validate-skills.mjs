#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const TEXT_EXTENSIONS = new Set([
  ".cjs",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".sh",
  ".txt",
  ".yaml",
  ".yml",
]);
const TEXT_FILENAMES = new Set([
  ".gitattributes",
  ".gitignore",
  ".lintstagedrc.json",
  ".prettierrc.json",
  "LICENSE",
  "pre-commit",
]);
const IGNORED_DIRECTORIES = new Set([".git", "node_modules"]);
const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
const MOJIBAKE_PATTERNS = [
  /\u00c3[\u0080-\u00bf]/u,
  /\u00c2[\u0080-\u00bf]/u,
  /\u00e2\u20ac[\u2018\u2019\u201c\u201d\u2013\u2014\u00a6\u00a0]/u,
  /\u00f0\u0178/u,
];

function displayPath(root, path) {
  return relative(root, path).replaceAll("\\", "/") || ".";
}

function textFiles(root) {
  const files = [];

  function visit(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const generatedHuskyDirectory =
        entry.isDirectory() &&
        entry.name === "_" &&
        basename(directory) === ".husky";
      if (
        entry.isDirectory() &&
        (IGNORED_DIRECTORIES.has(entry.name) || generatedHuskyDirectory)
      ) {
        continue;
      }

      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        visit(path);
      } else if (
        entry.isFile() &&
        (TEXT_EXTENSIONS.has(extname(entry.name)) ||
          TEXT_FILENAMES.has(entry.name))
      ) {
        files.push(path);
      }
    }
  }

  visit(root);
  return files;
}

function decodeFile(root, path, errors) {
  const bytes = readFileSync(path);
  const shown = displayPath(root, path);

  if (
    bytes.length >= 3 &&
    bytes[0] === 0xef &&
    bytes[1] === 0xbb &&
    bytes[2] === 0xbf
  ) {
    errors.push(`${shown}: contiene BOM UTF-8`);
  }

  let text;
  try {
    text = UTF8_DECODER.decode(bytes);
  } catch {
    errors.push(`${shown}: contiene UTF-8 inválido`);
    return null;
  }

  if (bytes.includes(0x0d)) {
    errors.push(`${shown}: contiene finales de línea CRLF o CR; usar LF`);
  }
  if (bytes.length > 0 && bytes.at(-1) !== 0x0a) {
    errors.push(`${shown}: falta el salto de línea final`);
  }
  if (text.includes("\ufffd")) {
    errors.push(`${shown}: contiene el carácter de reemplazo Unicode`);
  }
  if (MOJIBAKE_PATTERNS.some((pattern) => pattern.test(text))) {
    errors.push(`${shown}: contiene posible mojibake`);
  }

  return text;
}

function scalar(block, key) {
  const match = block.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, "m"));
  if (!match) return null;

  const value = match[1];
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function validateSkill(root, skillDirectory, texts, errors) {
  const skillName = basename(skillDirectory);
  const skillPath = join(skillDirectory, "SKILL.md");
  const metadataPath = join(skillDirectory, "agents", "openai.yaml");

  if (!existsSync(skillPath)) {
    errors.push(`${displayPath(root, skillDirectory)}: falta SKILL.md`);
    return;
  }
  if (!existsSync(metadataPath)) {
    errors.push(
      `${displayPath(root, skillDirectory)}: falta agents/openai.yaml`
    );
    return;
  }

  const skill = texts.get(resolve(skillPath));
  const metadata = texts.get(resolve(metadataPath));
  if (skill == null || metadata == null) return;

  const frontmatter = skill.match(/^---\n([\s\S]*?)\n---(?:\n|$)/u)?.[1];
  if (!frontmatter) {
    errors.push(`${displayPath(root, skillPath)}: frontmatter inválido`);
  } else {
    const declaredName = scalar(frontmatter, "name");
    const description = scalar(frontmatter, "description");
    if (declaredName !== skillName) {
      errors.push(
        `${displayPath(root, skillPath)}: name no coincide con el directorio (${declaredName ?? "ausente"} != ${skillName})`
      );
    }
    if (!description) {
      errors.push(`${displayPath(root, skillPath)}: falta description`);
    }
  }

  for (const key of ["display_name", "short_description", "default_prompt"]) {
    if (!scalar(metadata, `\\s*${key}`)) {
      errors.push(`${displayPath(root, metadataPath)}: falta ${key}`);
    }
  }
  const defaultPrompt = scalar(metadata, "\\s*default_prompt");
  if (defaultPrompt && !defaultPrompt.includes(`$${skillName}`)) {
    errors.push(
      `${displayPath(root, metadataPath)}: default_prompt no menciona $${skillName}`
    );
  }

  for (const match of skill.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/gu)) {
    const target = match[1].trim().replace(/^<|>$/g, "").split("#", 1)[0];
    if (
      !target ||
      target.startsWith("#") ||
      /^[a-z][a-z0-9+.-]*:/iu.test(target)
    ) {
      continue;
    }

    const destination = resolve(dirname(skillPath), decodeURIComponent(target));
    if (!existsSync(destination)) {
      errors.push(
        `${displayPath(root, skillPath)}: enlace local inexistente: ${target}`
      );
    }
  }
}

export function validateRepository(root) {
  const absoluteRoot = resolve(root);
  const errors = [];
  const texts = new Map();

  for (const path of textFiles(absoluteRoot)) {
    texts.set(resolve(path), decodeFile(absoluteRoot, path, errors));
  }

  const skillsRoot = join(absoluteRoot, ".agents", "skills");
  if (!existsSync(skillsRoot)) {
    errors.push(".agents/skills: directorio inexistente");
    return errors;
  }

  for (const entry of readdirSync(skillsRoot)) {
    const skillDirectory = join(skillsRoot, entry);
    if (statSync(skillDirectory).isDirectory()) {
      validateSkill(absoluteRoot, skillDirectory, texts, errors);
    }
  }

  return errors;
}

function main() {
  const root = process.argv[2] ?? process.cwd();
  const errors = validateRepository(root);

  if (errors.length > 0) {
    console.error("Validación de skills fallida:\n");
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log("Skills válidos: UTF-8, LF, metadatos y enlaces verificados.");
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  main();
}
