---
name: teach
description: Mantiene un workspace educativo y enseña un concepto mediante lecciones breves y práctica. Usar cuando el usuario invoque explícitamente el skill para aprender un tema durante varias sesiones.
---

# Enseñar en el workspace

Tratar el directorio actual como un workspace educativo con estado para varias sesiones:

- `MISSION.md`: motivo y resultado buscado, según [formato-mision.md](references/formato-mision.md).
- `reference/*.html`: cheatsheets, algoritmos, sintaxis y glosarios de consulta rápida.
- `RESOURCES.md`: fuentes de confianza, según [formato-recursos.md](references/formato-recursos.md).
- `learning-records/NNNN-<slug>.md`: aprendizajes no obvios, según [formato-registro-aprendizaje.md](references/formato-registro-aprendizaje.md).
- `lessons/NNNN-<slug>.html`: lecciones breves y autocontenidas.
- `assets/`: stylesheets, quizzes, simuladores y otros components reutilizables.
- `NOTES.md`: preferencias del usuario y notas de trabajo.

## Filosofía

Separar **conocimiento** de fuentes confiables, **skills** adquiridos con práctica y feedback, y **sabiduría** obtenida en interacción real. No confiar en memoria paramétrica cuando se pueda consultar una fuente primaria.

Optimizar storage strength, no la sensación inmediata de fluidez: usar recuperación, espaciado y, para práctica de skills, intercalado. La adquisición de conocimiento reduce dificultad; la práctica introduce dificultad deseable.

## Workflow

1. Leer o crear `MISSION.md`. Si la motivación no está clara, entrevistar primero; ligar toda lección a esa misión. Confirmar cambios de misión y registrarlos en un learning record.
2. Mantener `RESOURCES.md` con fuentes primarias de alta confianza. Citar en las lecciones las afirmaciones externas.
3. Leer `learning-records/` y estimar la zona de desarrollo próximo. Si el usuario no indicó el siguiente tema, elegir el avance más relevante para la misión que resulte desafiante pero alcanzable.
4. Antes de crear una lección, leer `assets/`. Reutilizar components existentes; si aparece algo reusable, guardarlo allí en vez de duplicarlo inline. El primer asset compartido debe ser el stylesheet del curso.
5. Crear una lección corta y hermosa en `lessons/NNNN-<slug>.html`, con una sola victoria tangible, anchors a otras lecciones y referencias, una fuente primaria recomendada y un recordatorio para hacer follow-up. Abrirla para el usuario cuando sea seguro y esté autorizado.
6. Enseñar primero solo el conocimiento necesario y después practicar mediante un feedback loop inmediato, idealmente automático. En quizzes, mantener respuestas con igual cantidad de palabras y, si es posible, caracteres para no filtrar pistas.
7. Crear documentos comprimidos en `reference/` cuando tengan valor duradero y mantener el glosario según [formato-glosario.md](references/formato-glosario.md).
8. Registrar en `learning-records/` insights no obvios que deban guiar o revisarse en sesiones futuras. Guardar preferencias pedagógicas en `NOTES.md`.

Cuando una pregunta requiera sabiduría práctica, ayudar primero y luego recomendar una comunidad online u offline de buena reputación. Respetar si el usuario no desea participar y no contactar a terceros sin autorización.
