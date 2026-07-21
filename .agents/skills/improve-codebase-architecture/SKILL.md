---
name: improve-codebase-architecture
description: Examina un codebase para encontrar oportunidades de profundizar modules y presenta un informe visual. Usar cuando el usuario invoque explícitamente el skill para mejorar arquitectura, seams o interfaces.
---

# Mejorar la arquitectura del codebase

Buscar fricción arquitectónica y oportunidades para convertir modules superficiales en profundos, con testabilidad y navegación por IA como objetivos.

1. Aplicar `$codebase-design` y usar exactamente su vocabulario. Leer `CONTEXT.md` y los ADRs pertinentes.
2. Delimitar el scan antes de explorar. Si el usuario indicó un área, respetarla; en otro caso, recorrer suficiente `git log --oneline` para detectar hot spots y priorizarlos. Explorar el codebase y buscar interfaces casi tan complejas como su implementation, rebotes entre muchos modules, lógica extraída solo para testear, leaks en seams y áreas difíciles de probar. Aplicar la prueba de eliminación.
3. Generar en el directorio temporal del sistema un HTML nuevo `architecture-review-<timestamp>.html`, abrirlo y comunicar la ruta absoluta. Seguir [informe-html.md](references/informe-html.md): Tailwind y Mermaid por CDN, visual antes/después para cada candidato, archivos, problema, solución, benefits en locality/leverage y badge `Strong`, `Worth exploring` o `Speculative`.
4. Marcar conflictos con ADRs solo cuando la fricción justifique reabrir la decisión. Cerrar con una recomendación principal.
5. No proponer interfaces todavía. Preguntar qué candidato quiere explorar el usuario.
6. Para el elegido, aplicar `$grilling` y `$domain-modeling` mientras se definen constraints, dependencias, seam y tests. Actualizar términos al confirmarse; ofrecer ADR solo por un rechazo con motivo duradero. Si se requieren alternativas de interface, usar el patrón de diseño paralelo de `$codebase-design`.

No implementar el refactor durante este skill.
