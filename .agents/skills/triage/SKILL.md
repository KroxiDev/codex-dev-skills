---
name: triage
description: Clasifica y verifica issues o PRs y prepara briefs ejecutables mediante una máquina de estados. Usar cuando el usuario invoque explícitamente el skill para revisar backlog o cambiar el estado de trabajo reportado.
---

# Triage

Mover issues y PRs externos por una máquina de estados. Un PR es un issue con código adjunto. Resolver referencias como `#42` según el tracker configurado.

Todo comentario o issue publicado durante triage debe comenzar con:

```markdown
> *Esto fue generado por IA durante el triage.*
```

Usar exactamente una categoría (`bug` o `enhancement`) y un estado (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human` o `wontfix`). Detectar el mapeo real del tracker. Si los estados se contradicen, detenerse y pedir decisión al maintainer.

## Mostrar lo que requiere atención

Consultar el tracker y presentar, de más antiguo a más nuevo: elementos sin labels; `needs-triage`; y `needs-info` con actividad del reporter posterior a las últimas notas. Cuando los PRs formen parte del alcance, incluir solo PRs externos en este descubrimiento y marcar cada fila `[PR]` o `[issue]`; un PR nombrado explícitamente siempre se procesa. Mostrar conteos y una línea por elemento, y dejar que el maintainer elija.

## Procesar un issue o PR

1. Leer body, comentarios, labels, autor y fechas; para PR, también el diff. Recuperar notas previas para no repetir preguntas. Leer glosario y ADRs. Buscar por concepto una implementación ya existente y registrar dónde se buscó; revisar `.out-of-scope/*.md` por rechazos similares.
2. Recomendar categoría y estado con motivo y resumen del codebase, incluida cualquier implementación previa. Esperar dirección del maintainer.
3. Verificar el claim antes de entrevistar: reproducir el bug o comprobar el diff del PR con los tests y comandos pertinentes. Informar `confirmado`, `falló` o `detalle insuficiente`, con evidencia.
4. Si falta definición, aplicar `$grilling` y `$domain-modeling` una pregunta por vez, actualizando `CONTEXT.md` o ADRs a medida que se confirman decisiones.
5. Aplicar el resultado:
   - `ready-for-agent`: publicar un brief conforme a [brief-para-agente.md](references/brief-para-agente.md).
   - `ready-for-human`: usar el mismo formato y explicar qué juicio, acceso o prueba manual impide delegarlo.
   - `needs-info`: publicar qué se estableció y preguntas específicas y accionables pendientes.
   - `wontfix` ya implementado: señalar dónde existe y cerrar sin escribir en `.out-of-scope/`.
   - `wontfix` bug rechazado: explicar con cortesía y cerrar.
   - `wontfix` enhancement rechazado: actualizar `.out-of-scope/` según [fuera-de-alcance.md](references/fuera-de-alcance.md), enlazarlo y cerrar.
   - `needs-triage`: aplicar el estado; comentar solo si aporta progreso parcial.

## Overrides y reanudación

Si el maintainer pide directamente un estado, confiar en la decisión, confirmar labels, comentario y cierre que se aplicarán, y actuar sin grilling. Antes de `ready-for-agent`, preguntar si desea un brief. Al reanudar, leer las notas previas y respuestas nuevas, actualizar el panorama y no repetir preguntas resueltas.
