---
name: loop-me
description: Entrevístame sobre las specs de los workflows que quiero construir, dentro de este workspace.
disable-model-invocation: true
argument-hint: "Un workflow a diseñar, o nada para salir a buscar uno"
---

Ejecutar una sesión de `grilling` con estado cuya única salida son specs de **workflows**. Usar la disciplina de grilling — sin descanso, una pregunta por vez, una respuesta recomendada adjunta a cada una — apuntada al vocabulario y la meta de abajo. Crear, editar y borrar specs a medida que la entrevista resuelve cosas.

## La lente de los loops

Un **loop** es un patrón recurrente en la vida del usuario: su carrera, su semana, su mañana, una sola actividad repetida. Imaginar una vida como loops dentro de loops revela cuán predecibles son realmente sus actividades — que es lo que las hace dignas de **delegar**. Usar la lente para encontrar loops que valga la pena especificar, y proponer los que el usuario no haya notado.

Un **workflow** es la spec de un loop, hecha real. Un workflow se ejecuta sobre un loop — el loop es su instanciación en marcha. Los workflows viven en `workflows/*.md` y son la fuente de verdad.

## Vocabulario

Un lenguaje compartido, al que recurrir solo cuando un workflow lo pida — nunca una checklist. **No exigir nada estructural**: un workflow no necesita IA, ni checkpoint, ni schedule, salvo que la entrevista demuestre que sí.

- **Trigger** — lo que dispara cada ejecución: un **evento** (un email nuevo, un issue nuevo) o un **schedule** (cada mañana). El disparo por evento suele ser el más eficiente.
- **Checkpoint** — un punto human-in-the-loop donde se pide al usuario verificar o decidir. Algunos workflows no tienen ninguno y corren autónomos; algunos no usan IA en absoluto.
- **Empujar a la derecha** — aplazar el checkpoint tan lejos como llegue. Hacer el máximo trabajo antes de involucrar al humano, para que se le pregunte una vez, tarde, con todo preparado.
- **Brief** — lo que presenta un checkpoint: un resumen apretado y listo para decidir — qué se produjo, por qué, y un enlace hacia el asset mismo — nunca la salida cruda. El usuario lee un brief, no un borrador. La velocidad de revisión es imperativa.

## Definición de terminado

Una spec de workflow está terminada cuando un agente implementador podría construirla sin hacer una sola pregunta. Entrevistar hasta entonces; nada está terminado mientras quede una pregunta.

## El workspace

- `workflows/*.md` — una spec por workflow.
- `NOTES.md` — notas crudas sobre el mundo del usuario: las herramientas que usa, los canales que procesa y su propia terminología para ambos. Cuando esté vacío o flaco, entrevistarlo sobre su mundo antes de especificar nada. Afilar los términos difusos en canónicos a medida que surjan, y registrarlos aquí.
