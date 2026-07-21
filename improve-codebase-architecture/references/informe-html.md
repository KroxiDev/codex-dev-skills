# Informe HTML de arquitectura

Crear un HTML en el directorio temporal del sistema. Usar Tailwind desde `https://cdn.tailwindcss.com` y Mermaid 11 mediante su import ESM en jsDelivr; el resto debe ser estático. Combinar Mermaid para grafos, dependencias y secuencias con HTML/CSS/SVG inline para masas, cross-sections y colapsos.

## Estructura

- Header con repo, fecha y leyenda compacta; sin introducción.
- Una tarjeta `<article>` por candidato.
- Sección final `Top recommendation` con nombre, una frase y enlace a la tarjeta.

Cada tarjeta incluye:

- título corto que nombre la profundización;
- badges de recomendación (`Strong`, `Worth exploring`, `Speculative`) y categoría (`in-process`, `local-substitutable`, `ports & adapters`, `mock`);
- archivos en monospace;
- diagramas antes/después lado a lado, protagonistas de la tarjeta;
- una frase de problema y una de solución;
- benefits de máximo seis palabras por bullet;
- callout ámbar si contradice un ADR relevante.

Elegir el diagrama según el argumento: Mermaid flowchart o sequence; boxes-and-arrows manuales; bandas horizontales para capas superficiales; rectángulos de masa para interface/implementation; o árbol de calls colapsado. Variar patrones y mantener cada diagrama cerca de 320 px de alto.

Usar estilo editorial sobrio, espacio generoso, stone/slate y un solo accent; rojo para leaks y ámbar para warnings. El diagrama debe explicar la propuesta sin párrafos auxiliares.

Usar exactamente: module, interface, implementation, depth, deep, shallow, seam, adapter, leverage y locality. No sustituirlos por component, service, unit, API, signature, boundary, layer o wrapper cuando se refieran a esos conceptos. Escribir de forma directa: «Pricing atraviesa el seam» o «Depth: una interface, un lugar de test». Evitar frases vagas como «más mantenible» o «código más limpio».
