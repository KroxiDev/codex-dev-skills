---
name: to-tickets
description: Divide una spec, plan o conversación en tickets tracer-bullet con dependencias explícitas y los publica en el tracker configurado. Usar cuando el usuario invoque explícitamente el skill para crear slices verticales ejecutables.
---

# Convertir a tickets

1. Leer por completo la conversación, spec, issue o URL de origen.
2. Inspeccionar el codebase cuando sea necesario, usar el vocabulario del dominio y respetar ADRs. Detectar prefactors que permitan «hacer fácil el cambio y luego hacer el cambio fácil».
3. Diseñar tracer bullets verticales: cada ticket debe recorrer todas las capas necesarias, entregar comportamiento demostrable por sí solo y caber en una sesión nueva.
4. Declarar «Bloqueado por» con dependencias reales. Un ticket sin bloqueos puede empezar de inmediato.
5. Para un refactor mecánico cuyo blast radius no permita slices verdes, usar expand–contract: añadir la forma nueva junto a la antigua; migrar callers en lotes verdes; eliminar la forma antigua cuando todos terminen. Si ni los lotes pueden mantenerse verdes, usar un branch de integración y un ticket final de verificación.
6. Presentar una lista numerada con título, bloqueos y comportamiento entregado. Preguntar si la granularidad y las dependencias son correctas y si debe fusionarse o dividirse algo; iterar hasta recibir aprobación.
7. Tras aprobar el desglose, publicar un artefacto por ticket en orden de dependencia. En tracker real, usar relaciones nativas de bloqueo cuando existan y aplicar el estado `ready-for-agent`. Sin tracker, crear `.scratch/<feature>/issues/<NN>-<slug>.md` con `Qué construir`, `Bloqueado por`, `Estado` y criterios de aceptación.
8. Evitar rutas y snippets que se vuelvan obsoletos, salvo fragmentos mínimos de un prototipo que codifiquen una decisión. No cerrar ni modificar el issue padre.
