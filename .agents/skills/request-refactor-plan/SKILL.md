---
name: request-refactor-plan
description: Prepara mediante análisis e entrevista un plan de refactor incremental y lo publica como issue. Usar cuando el usuario quiera planificar un refactor, redactar un RFC o dividirlo en pasos pequeños y seguros.
---

# Planificar un refactor

1. Pedir una descripción larga y detallada del problema y las soluciones ya consideradas.
2. Explorar el repositorio para verificar afirmaciones y entender el estado actual.
3. Presentar alternativas adicionales y entrevistar al usuario exhaustivamente sobre la implementation.
4. Acordar el alcance exacto: qué cambia, qué no y qué interfaces se afectan.
5. Inspeccionar la cobertura existente. Si es insuficiente, acordar una estrategia de tests de comportamiento en interfaces públicas y buscar precedentes en el codebase.
6. Dividir el refactor en commits mínimos; cada uno debe dejar el programa funcionando y ser lo bastante pequeño para ver el cambio con claridad.
7. Crear un issue con: `Problema`, `Solución`, `Commits` —lista larga y detallada—, `Documento de decisiones`, `Decisiones de testing`, `Fuera de alcance` y `Notas adicionales` opcionales.

No incluir rutas ni snippets que se vuelvan obsoletos.
