import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

const validator = join(process.cwd(), "scripts", "validate-skills.mjs");

function createRepository(files) {
  const root = mkdtempSync(join(tmpdir(), "validate-skills-"));

  for (const [relativePath, contents] of Object.entries(files)) {
    const destination = join(root, relativePath);
    mkdirSync(join(destination, ".."), { recursive: true });
    writeFileSync(destination, contents);
  }

  return root;
}

function validSkill(overrides = {}) {
  return {
    ".gitattributes": "* text=auto eol=lf\n*.md text eol=lf\n",
    ".agents/skills/demo/SKILL.md": [
      "---",
      "name: demo",
      "description: Skill válido para verificar contenido en español.",
      "---",
      "",
      "# Demo",
      "",
      "Leer [referencia](references/guia.md).",
      "",
    ].join("\n"),
    ".agents/skills/demo/agents/openai.yaml": [
      "interface:",
      '  display_name: "Demo"',
      '  short_description: "Verifica un skill de demostración"',
      '  default_prompt: "Usa $demo para verificar este contenido."',
      "",
    ].join("\n"),
    ".agents/skills/demo/references/guia.md": "# Guía\n",
    ".husky/_/husky.sh": "archivo generado sin salto final",
    ".husky/pre-commit": "npm run validate:skills\n",
    ...overrides,
  };
}

function runValidator(root) {
  try {
    const stdout = execFileSync(process.execPath, [validator, root], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { status: 0, output: stdout };
  } catch (error) {
    return {
      status: error.status,
      output: `${error.stdout ?? ""}${error.stderr ?? ""}`,
    };
  }
}

test("acepta skills válidos escritos en español y UTF-8", () => {
  const result = runValidator(createRepository(validSkill()));

  assert.equal(result.status, 0, result.output);
});

for (const [name, path, contents, expected] of [
  [
    "mojibake",
    ".agents/skills/demo/SKILL.md",
    "---\nname: demo\ndescription: Colecci\u00c3\u00b3n dañada.\n---\n\n# Demo\n",
    "posible mojibake",
  ],
  [
    "carácter de reemplazo",
    ".agents/skills/demo/SKILL.md",
    "---\nname: demo\ndescription: Texto \ufffd dañado.\n---\n\n# Demo\n",
    "carácter de reemplazo",
  ],
  [
    "UTF-8 inválido",
    ".agents/skills/demo/SKILL.md",
    Buffer.from([0x66, 0x6f, 0x80, 0x0a]),
    "UTF-8 inválido",
  ],
  [
    "BOM",
    ".agents/skills/demo/SKILL.md",
    Buffer.from(
      "\ufeff---\nname: demo\ndescription: Texto válido.\n---\n",
      "utf8"
    ),
    "BOM UTF-8",
  ],
  [
    "CRLF",
    ".agents/skills/demo/SKILL.md",
    "---\r\nname: demo\r\ndescription: Texto válido.\r\n---\r\n",
    "finales de línea CRLF",
  ],
  [
    "salto final ausente",
    ".agents/skills/demo/SKILL.md",
    "---\nname: demo\ndescription: Texto válido.\n---",
    "salto de línea final",
  ],
]) {
  test(`rechaza ${name}`, () => {
    const result = runValidator(
      createRepository(validSkill({ [path]: contents }))
    );

    assert.notEqual(result.status, 0);
    assert.match(result.output, new RegExp(expected));
  });
}

test("rechaza frontmatter cuyo nombre no coincide con el directorio", () => {
  const files = validSkill({
    ".agents/skills/demo/SKILL.md":
      "---\nname: otro\ndescription: Texto válido.\n---\n\n# Demo\n",
  });
  const result = runValidator(createRepository(files));

  assert.notEqual(result.status, 0);
  assert.match(result.output, /no coincide con el directorio/);
});

test("rechaza metadatos de interfaz incompletos", () => {
  const files = validSkill({
    ".agents/skills/demo/agents/openai.yaml":
      'interface:\n  display_name: "Demo"\n',
  });
  const result = runValidator(createRepository(files));

  assert.notEqual(result.status, 0);
  assert.match(result.output, /short_description/);
});

test("rechaza enlaces locales rotos", () => {
  const files = validSkill({
    ".agents/skills/demo/SKILL.md":
      "---\nname: demo\ndescription: Texto válido.\n---\n\n[Ausente](references/no-existe.md)\n",
  });
  const result = runValidator(createRepository(files));

  assert.notEqual(result.status, 0);
  assert.match(result.output, /enlace local inexistente/);
});

test("ignora enlaces dentro de bloques y spans de código", () => {
  const files = validSkill({
    ".agents/skills/demo/SKILL.md": [
      "---",
      "name: demo",
      "description: Texto válido.",
      "---",
      "",
      "Escribir `ver [README.md](./README.md) antes de importar`.",
      "",
      "```markdown",
      "- [<título>](enlace) — <resumen>",
      "```",
      "",
    ].join("\n"),
  });
  const result = runValidator(createRepository(files));

  assert.equal(result.status, 0, result.output);
});

test("detecta que open_url no silencie el caso sin navegador", () => {
  const template = join(
    process.cwd(),
    ".agents",
    "skills",
    "wizard",
    "assets",
    "template.sh"
  );
  const source = execFileSync(
    process.execPath,
    [
      "-e",
      `process.stdout.write(require('fs').readFileSync(${JSON.stringify(template)}))`,
    ],
    { encoding: "utf8" }
  );

  assert.doesNotMatch(source, /else warn .*; fi\s*\}\s*>\/dev\/null/);
});
