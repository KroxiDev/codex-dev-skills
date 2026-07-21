---
name: prototype
description: Construye un prototipo descartable para responder una pregunta de diseño. Usar para validar un modelo de estado, explorar lógica o comparar alternativas de UI antes de implementar en producción.
---

# Crear un prototipo

Un prototipo es código descartable que responde una sola pregunta. La pregunta determina su forma:

- Para lógica, estado o forma de datos, leer [logica.md](references/logica.md) y construir una pequeña app de terminal interactiva.
- Para apariencia, leer [ui.md](references/ui.md) y construir varias variantes radicalmente distintas en una sola ruta.

Si la pregunta sigue siendo ambigua y el usuario no está disponible, elegir según el código circundante —backend implica lógica; página o component implica UI— y declarar la suposición al comienzo.

## Reglas comunes

1. Marcarlo como prototipo desde el primer día. Ubicarlo cerca del module o página real, siguiendo las convenciones existentes, con un nombre inequívocamente descartable.
2. Proporcionar un solo comando para ejecutarlo mediante el task runner existente.
3. Mantener estado en memoria. Si la pregunta exige persistencia, usar una base scratch o archivo local llamado claramente `PROTOTYPE`.
4. Omitir tests, abstracciones y error handling salvo lo mínimo para ejecutarlo.
5. Mostrar el estado relevante tras cada acción o cambio de variante.
6. Al terminar, incorporar la decisión validada en código de producción reescrito con sus controles normales. Conservar el prototipo como fuente primaria en un branch descartable fuera de `main`, enlazarlo desde el issue y registrar allí la pregunta y el veredicto. El branch principal conserva solo la decisión validada.
