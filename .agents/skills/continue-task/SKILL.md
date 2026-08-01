---
name: continue-task
description: Traspasa la tarea actual a otra sesión del mismo workspace — un prompt copiable por defecto, o un documento markdown si lo pides.
---

Traspasar la tarea actual para que una sesión nueva del **mismo workspace** la retome.

Por defecto, emitir un prompt copiable. Si el usuario pide un documento de traspaso, escribir en su lugar un markdown que resuma la conversación para que un agente fresco continúe el trabajo, y reportar la ruta. El contenido es el mismo en ambas formas; solo cambia dónde aterriza.

## Pasos

1. Revisar la conversación y el estado del workspace. Verificar lo que se afirme: si algo no se comprobó, no darlo por hecho.

2. Emitir **solo el prompt**, dentro de un bloque de código para que se pueda copiar de una pieza. Sin preámbulo, sin resumen posterior. Si el usuario pidió el documento, escribirlo en markdown en su lugar y reportar la ruta.

3. Cubrir:
   - **Objetivo** — qué se está intentando conseguir
   - **Estado verificado** — qué está hecho y comprobado, frente a qué se asume
   - **Decisiones** — las elecciones ya tomadas que la próxima sesión no debe volver a litigar
   - **Restricciones** — límites que hay que respetar
   - **Pendiente** — lo que queda
   - **Siguiente paso** — la única acción con la que arrancar

4. No duplicar contenido ya capturado en otros artefactos (specs, planes, ADRs, issues, commits, diffs). Referenciarlos por ruta o URL en su lugar. La próxima sesión tiene el mismo workspace: puede leerlos.

5. Señalar las incertidumbres de forma explícita en lugar de resolverlas con una suposición. Una línea de "sin verificar: …" vale más que una afirmación segura y falsa.

6. Omitir cualquier dato sensible — API keys, contraseñas, información personal identificable.

Si el usuario pasó argumentos, tratarlos como el foco de la próxima sesión y adaptar el traspaso en consecuencia.
