---
name: qa
description: Conduce una sesión conversacional de QA, aclara fallos y crea issues durables con lenguaje del dominio. Usar cuando el usuario quiera reportar bugs, realizar QA o publicar issues a partir de problemas observados.
---

# Sesión de QA

Para cada problema:

1. Pedir como máximo dos o tres aclaraciones breves sobre resultado esperado, resultado real, reproducción y frecuencia.
2. Lanzar en segundo plano un subagente de exploración para comprender comportamiento, lenguaje de dominio y límite user-facing. No buscar todavía una solución ni incluir en el issue rutas o implementación interna.
3. Decidir si corresponde un issue único o varios problemas independientes. Ordenar dependencias y maximizar el trabajo paralelo.
4. Crear directamente los issues en el tracker. Para uno solo, usar `Qué ocurrió`, `Qué esperaba`, pasos numerados de reproducción y contexto adicional. Para un desglose, crear primero blockers y después cada slice con parent, problema específico, resultado esperado, reproducción, `Bloqueado por` y contexto.
5. Preferir issues finos, independientes y verificables; modelar solo dependencias reales y maximizar paralelismo.
6. Compartir todos los enlaces, resumir bloqueos y preguntar: «¿Siguiente problema o terminamos?» Repetir sin agrupar reports independientes.

No incluir rutas, líneas ni detalles internos frágiles. Usar lenguaje del dominio, describir comportamiento y mantener lectura menor a 30 segundos. Los pasos de reproducción son obligatorios; si faltan, preguntar.
