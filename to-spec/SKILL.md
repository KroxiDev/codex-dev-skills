---
name: to-spec
description: Convierte la conversación y el contexto del codebase en una spec y la publica en el tracker configurado. Usar cuando el usuario invoque explícitamente el skill para sintetizar una PRD sin una entrevista nueva.
---

# Convertir a spec

Convertir la conversación actual en una especificación sin abrir una nueva entrevista. Si falta información, documentarla como no resuelta en vez de inventarla.

1. Sintetizar todo lo ya conversado. Leer referencias pasadas por el usuario y explorar el código suficiente para que la spec describa el estado real y use el vocabulario de `CONTEXT.md` y los ADRs.
2. Detectar el tracker configurado. Si no existe, preparar Markdown local y explicar la sustitución; no asumir una plataforma.
3. Proponer seams de test concretos, preferentemente interfaces públicas ya existentes. Explicar qué comportamientos cubrirá cada uno y confirmar la decisión con el usuario antes de publicar.
4. Redactar con esta estructura: `## Problema`, `## Solución`, `## Historias de usuario`, `## Decisiones de implementación`, `## Decisiones de testing`, `## Fuera de alcance` y `## Notas adicionales`. Las historias deben formar una lista numerada extensa con «Como <actor>, quiero <feature>, para <beneficio>» y cubrir todos los aspectos conocidos.
5. En implementación, registrar decisiones ya tomadas y evitar rutas o snippets frágiles. Puede incluirse un fragmento de `$prototype` solo si expresa una decisión mejor que la prosa; recortarlo y atribuirlo al prototipo.
6. En testing, definir qué es un buen test, qué modules se probarán y qué precedentes del repositorio se seguirán.
7. Publicar la spec en el tracker configurado y aplicar `ready-for-agent` sin triage adicional. Si no existe tracker, crear el Markdown local acordado e informar la sustitución. No cerrar ni modificar artefactos de origen.
