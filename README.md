# Skills de desarrollo para Codex

Colección de 41 skills traducidos a español neutro y adaptados para Codex a partir de [mattpocock/skills](https://github.com/mattpocock/skills). Incluye los skills de ingeniería presentes en la colección local y otros skills relacionados del mismo repositorio fuente.

## Compatibilidad

- Cada subdirectorio de `.agents/skills` contiene un `SKILL.md` con frontmatter compatible con Codex.
- `agents/openai.yaml` define nombre visible, descripción breve, prompt sugerido y, cuando corresponde, invocación exclusivamente manual.
- Las invocaciones entre skills usan `$nombre-del-skill`.
- Las referencias, scripts y assets usan rutas relativas verificadas.
- `claude-handoff` y `git-guardrails-claude-code` se adaptaron como `codex-handoff` y `git-guardrails-codex` mediante capacidades equivalentes de Codex.

## Uso

Al abrir este repositorio, o uno de sus subdirectorios, Codex descubre automáticamente las skills ubicadas en `.agents/skills`.

1. Inicia una nueva tarea de Codex dentro del repositorio.
2. Invoca una skill explícitamente con `$nombre-del-skill` o permite que Codex la seleccione según su descripción.
3. Si una skill recién modificada no aparece, reinicia Codex.

Las skills tienen alcance local a este repositorio. Para utilizarlas en otro proyecto, copia `.agents/skills` a ese repositorio o instálalas como skills de usuario.

## Procedencia

La revisión de fidelidad se realizó contra el commit upstream `ed37663cc5fbef691ddfecd080dff42f7e7e350d`. Se conserva la licencia MIT y el copyright del autor original.
