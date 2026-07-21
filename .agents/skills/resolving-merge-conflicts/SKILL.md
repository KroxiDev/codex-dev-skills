---
name: resolving-merge-conflicts
description: Diagnostica y resuelve conflictos de un merge o rebase en progreso. Usar cuando Git informe archivos sin fusionar y el usuario solicite resolverlos o continuar la operación.
---

# Resolver conflictos de merge

1. Confirmar que existe un merge o rebase en curso con `git status`; identificar todos los archivos sin fusionar y la operación activa. No iniciar otra operación ni usar `--abort`.
2. Para cada hunk, investigar la intención de ambos lados desde sus fuentes primarias: commits, PRs, issues, tests y código relacionado. No resolver por apariencia textual.
3. Explicar la intención de cada lado y decidir si se combinan, si uno reemplaza al otro o si hace falta una adaptación. Preservar ambas cuando sean compatibles.
4. Editar solo los archivos en conflicto. Verificar que no queden marcadores y ejecutar formato, typecheck y tests pertinentes; corregir únicamente regresiones introducidas por la resolución.
5. Mostrar el resultado antes de agregar archivos al índice. Tras la confirmación del usuario, usar rutas explícitas —nunca `git add .`— y continuar la operación existente.
6. Repetir hasta terminar el merge o rebase y comprobar el estado final. No hacer push.

Si la evidencia no basta, detenerse y pedir el contexto necesario; mantener la operación intacta en lugar de abortarla.
