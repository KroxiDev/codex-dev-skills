---
name: wayfinder
description: Planifica trabajo mayor que una sesión como un mapa compartido de decisiones. Usar cuando el usuario invoque explícitamente el skill para despejar incertidumbre mediante research, prototypes y conversaciones dirigidas.
---

# Wayfinder

El destino define qué significa terminar. El mapa contiene decisiones, no slices de implementación. Referirse siempre a mapas y tickets por título enlazado, nunca por un identificador desnudo.

Wayfinder planifica por defecto: termina cuando no queda nada por decidir antes de ejecutar. Solo incluir ejecución si `Notas` lo autoriza expresamente.

## Modelo del mapa

El mapa es un único issue con label `wayfinder:map`; sus tickets son issues hijos. Es un índice: la decisión completa vive solo en su ticket cerrado y el mapa mantiene una línea enlazada con su gist.

Seguir las operaciones del tracker configurado para hijos, bloqueos y frontier. Si no existe configuración, usar un tracker local basado en Markdown.

Su body contiene `## Destino`, `## Notas`, `## Decisiones hasta ahora`, `## Aún no especificado` y `## Fuera de alcance`. Los tickets abiertos se consultan como hijos, no se copian en el body.

Cada ticket contiene una pregunta que cabe en una sesión y un label:

- `wayfinder:research` — AFK, obtiene un hecho externo mediante `$research`.
- `wayfinder:prototype` — HITL, crea un artefacto concreto mediante `$prototype`.
- `wayfinder:grilling` — HITL, resuelve con `$grilling` y `$domain-modeling`.
- `wayfinder:task` — HITL o AFK, realiza trabajo manual necesario para desbloquear una decisión.

Reclamar un ticket asignándolo antes de trabajar. Usar bloqueos nativos del tracker. El frontier son hijos abiertos, desbloqueados y no reclamados.

La niebla contiene preguntas en scope que todavía no pueden formularse con precisión; si la pregunta ya puede escribirse, crear un ticket aunque esté bloqueado. Fuera de alcance contiene trabajo posterior al destino y nunca se gradúa.

## Trazar el mapa

1. Definir el destino con `$grilling` y `$domain-modeling`.
2. Explorar el frontier en amplitud. Si no aparece niebla y todo cabe en una sesión, detenerse: no hace falta mapa.
3. Crear el mapa con el destino, notas, índice vacío y niebla visible.
4. Crear como hijos las preguntas ya precisas y conectar bloqueos en una segunda pasada, cuando todos tengan identificador.
5. Lanzar en paralelo subagentes `$research` para los tickets research recién creados. Cada uno conserva hallazgos en un branch descartable `research/<nombre>` y deja el context pointer en el ticket.
6. Detenerse: trazar el mapa ocupa la sesión y no resuelve manualmente ningún ticket.

## Recorrer el mapa

1. Cargar solo el mapa de baja resolución. Usar el ticket indicado o elegir el primero del frontier; reclamarlo antes de trabajar.
2. Resolver solo ese ticket; cargar cuerpos relacionados bajo demanda y usar los skills de `Notas` o del tipo de ticket.
3. Publicar la respuesta como comentario de resolución, cerrar el ticket y añadir al índice del mapa una línea con título enlazado y gist.
4. Crear y luego conectar tickets nuevos. Graduar la niebla ahora formulable y retirarla del mapa; cerrar y mover a Fuera de alcance cualquier ticket que resulte posterior al destino. Actualizar o eliminar tickets invalidados.

No ejecutar el destino por defecto ni resolver más de una decisión por sesión, salvo los research paralelos del trazado. Esperar concurrencia: otras sesiones pueden modificar el tracker.
