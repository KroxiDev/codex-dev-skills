# Skills de desarrollo para Codex

Colección de 39 skills traducidos a español neutro y adaptados para Codex a partir de [mattpocock/skills](https://github.com/mattpocock/skills). Incluye los skills de ingeniería presentes en la colección local y otros skills relacionados del mismo repositorio fuente.

## Compatibilidad

- Cada directorio contiene un `SKILL.md` con frontmatter compatible con Codex.
- `agents/openai.yaml` define nombre visible, descripción breve, prompt sugerido y, cuando corresponde, invocación exclusivamente manual.
- Las invocaciones entre skills usan `$nombre-del-skill`.
- Las referencias, scripts y assets usan rutas relativas verificadas.
- `claude-handoff` y `git-guardrails-claude-code` se adaptaron como `codex-handoff` y `git-guardrails-codex` mediante capacidades equivalentes de Codex.

Esta colección no instala ni registra automáticamente los skills en Codex.

## Procedencia

La revisión de fidelidad se realizó contra el commit upstream `ed37663cc5fbef691ddfecd080dff42f7e7e350d`. Se conserva la licencia MIT y el copyright del autor original.
