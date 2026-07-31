# Codex Dev Skills

Colección de **41 skills** de ingeniería para [OpenAI Codex](https://developers.openai.com/codex/), adaptada a español neutro y preparada para su descubrimiento nativo.

Cubre el ciclo completo: diseño de codebase, modelado de dominio, TDD, revisión de código, diagnóstico de bugs, planificación de trabajo grande, triage, traspasos entre tareas y escritura técnica.

Es la edición para Codex del mismo set publicado en [KroxiDev/claude-dev-skills](https://github.com/KroxiDev/claude-dev-skills). Las diferencias de nombres y comportamiento responden a las capacidades propias de cada sistema.

## Instalación

### Para todos tus proyectos

En Codex, invoca el instalador incluido y pídele que instale los 41 directorios de skills del repositorio:

```text
$skill-installer Instala todos los skills de https://github.com/KroxiDev/codex-dev-skills/tree/main/.agents/skills
```

La instalación de usuario queda disponible en todos tus proyectos. Si un skill recién instalado no aparece, reinicia Codex.

### Solo para un repositorio

Copia `.agents/skills` dentro de la raíz del proyecto en el que quieras utilizarlos:

```text
<tu-proyecto>/
└── .agents/
    └── skills/
        └── <nombre-del-skill>/
```

Codex busca skills desde el directorio de trabajo actual hasta la raíz del repositorio, por lo que también puedes ubicarlos en un subdirectorio si solo aplican a una parte del proyecto.

## Uso

Los skills marcados como `auto` pueden activarse cuando la descripción coincide con la tarea. Todos se pueden invocar explícitamente escribiendo `$nombre-del-skill` en el prompt.

| Skill                           | Invocación                          | Descripción                                                                             |
| :------------------------------ | :---------------------------------- | :-------------------------------------------------------------------------------------- |
| `batch-grill-me`                | `$batch-grill-me`                   | Entrevista por rondas que pregunta todo el frontier de decisiones disponible.           |
| `code-review`                   | auto + `$code-review`               | Revisa un diff contra los estándares del repositorio y la especificación de origen.     |
| `codebase-design`               | auto + `$codebase-design`           | Proporciona vocabulario y criterios para diseñar deep modules.                          |
| `codex-handoff`                 | `$codex-handoff`                    | Transfiere el contexto actual a una nueva tarea de Codex.                               |
| `continue-task`                 | `$continue-task`                    | Genera un prompt breve para continuar la tarea en otra sesión del mismo workspace.      |
| `design-an-interface`           | auto + `$design-an-interface`       | Diseña varias interfaces radicalmente distintas para un module y las compara.           |
| `diagnosing-bugs`               | auto + `$diagnosing-bugs`           | Diagnostica bugs difíciles y regresiones de rendimiento mediante un bucle reproducible. |
| `domain-modeling`               | auto + `$domain-modeling`           | Construye y precisa el modelo de dominio de un proyecto.                                |
| `edit-article`                  | `$edit-article`                     | Mejora la estructura, claridad y concisión de un artículo.                              |
| `git-guardrails-codex`          | auto + `$git-guardrails-codex`      | Añade guardrails contra operaciones de Git peligrosas en sesiones de Codex.             |
| `grill-me`                      | `$grill-me`                         | Inicia una entrevista rigurosa, una pregunta por vez, para precisar un plan o diseño.   |
| `grill-with-docs`               | `$grill-with-docs`                  | Entrevista intensivamente mientras mantiene documentos de dominio y decisiones.         |
| `grilling`                      | auto + `$grilling`                  | Somete un plan, decisión o idea a una entrevista rigurosa.                              |
| `handoff`                       | `$handoff`                          | Resume la conversación en un documento de transferencia para otro agente.               |
| `implement`                     | `$implement`                        | Implementa trabajo definido por una spec o tickets con TDD y revisión.                  |
| `improve-codebase-architecture` | `$improve-codebase-architecture`    | Busca oportunidades para profundizar modules y presenta un informe visual.              |
| `loop-me`                       | `$loop-me`                          | Diseña specs de workflows recurrentes mediante una entrevista con estado.               |
| `migrate-to-shoehorn`           | auto + `$migrate-to-shoehorn`       | Migra fixtures de test desde assertions `as` a `@total-typescript/shoehorn`.            |
| `obsidian-vault`                | auto + `$obsidian-vault`            | Busca, crea y organiza notas de Obsidian con wikilinks e índices.                       |
| `prototype`                     | auto + `$prototype`                 | Construye un prototipo descartable para responder una pregunta de diseño.               |
| `qa`                            | auto + `$qa`                        | Conduce una sesión conversacional de QA y convierte los hallazgos en issues durables.   |
| `recommend-codex-model`         | `$recommend-codex-model`            | Estima la dificultad de una tarea y recomienda un modelo y esfuerzo de GPT-5.6.         |
| `request-refactor-plan`         | auto + `$request-refactor-plan`     | Prepara un plan de refactor incremental y lo publica como issue.                        |
| `research`                      | auto + `$research`                  | Delega investigación con fuentes primarias y guarda hallazgos citados.                  |
| `resolving-merge-conflicts`     | auto + `$resolving-merge-conflicts` | Diagnostica y resuelve conflictos de un merge o rebase en progreso.                     |
| `scaffold-exercises`            | auto + `$scaffold-exercises`        | Crea estructuras de ejercicios que pasan el linter de AI Hero.                          |
| `setup-pre-commit`              | auto + `$setup-pre-commit`          | Configura Husky y lint-staged para formato, typecheck y tests.                          |
| `setup-ts-deep-modules`         | `$setup-ts-deep-modules`            | Configura dependency-cruiser para ocultar internals detrás de entry points.             |
| `tdd`                           | auto + `$tdd`                       | Aplica desarrollo guiado por tests con ciclos red-green en slices verticales.           |
| `teach`                         | `$teach`                            | Mantiene un workspace educativo y enseña mediante lecciones breves y práctica.          |
| `to-questionnaire`              | `$to-questionnaire`                 | Convierte una decisión incompleta en un cuestionario para otra persona.                 |
| `to-spec`                       | `$to-spec`                          | Convierte la conversación y el contexto del codebase en una spec.                       |
| `to-tickets`                    | `$to-tickets`                       | Divide una spec o plan en tickets tracer-bullet con dependencias explícitas.            |
| `triage`                        | `$triage`                           | Clasifica y verifica issues o PRs y prepara briefs ejecutables.                         |
| `ubiquitous-language`           | `$ubiquitous-language`              | Extrae y mantiene un glosario de lenguaje ubicuo al estilo DDD.                         |
| `wayfinder`                     | `$wayfinder`                        | Planifica trabajo mayor que una sesión como un mapa compartido de decisiones.           |
| `wizard`                        | `$wizard`                           | Genera un wizard Bash interactivo para procedimientos manuales o migraciones.           |
| `writing-beats`                 | `$writing-beats`                    | Redacta un artículo desde material bruto, un beat elegido por vez.                      |
| `writing-fragments`             | `$writing-fragments`                | Extrae fragmentos valiosos de material bruto sin imponer estructura.                    |
| `writing-great-skills`          | `$writing-great-skills`             | Proporciona principios para escribir y editar skills predecibles y concisos.            |
| `writing-shape`                 | `$writing-shape`                    | Da forma de artículo al material bruto, párrafo por párrafo.                            |

### Nota de procedencia

La colección adapta skills de [mattpocock/skills](https://github.com/mattpocock/skills) al formato y las capacidades de Codex. `qa` y `request-refactor-plan` están deprecados en el repositorio original, pero se conservan completos y traducidos porque siguen siendo útiles.

`recommend-codex-model` es propio de esta colección. `codex-handoff` y `git-guardrails-codex` sustituyen a las variantes específicas de Claude mediante capacidades equivalentes de Codex.

## Estructura

```text
codex-dev-skills/
└── .agents/
    └── skills/
        └── <nombre>/
            ├── SKILL.md             # frontmatter + instrucciones
            ├── agents/openai.yaml   # metadatos e invocación
            ├── references/          # material de apoyo bajo demanda
            ├── scripts/             # scripts ejecutables
            └── assets/              # plantillas y configuración
```

Cada skill requiere un `SKILL.md`. Los demás directorios y archivos son opcionales y solo aparecen cuando el workflow los necesita.

## Desarrollo

1. Instala las dependencias con `npm install`.
2. Ejecuta `npm run validate:skills` para validar UTF-8, frontmatter, metadatos, finales de línea y enlaces locales.
3. Ejecuta `npm test` para comprobar el validador y las regresiones conocidas.

`npm install` también activa un hook pre-commit que formatea los archivos staged y ejecuta ambas validaciones.

## Licencia

MIT
