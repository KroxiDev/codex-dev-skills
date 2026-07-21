# Diseñar dos veces

Explorar interfaces alternativas para un candidato de profundización. La primera idea rara vez es la mejor.

1. Explicar al usuario el espacio del problema: restricciones, dependencias y su categoría según [profundizacion.md](profundizacion.md), más un sketch ilustrativo que concrete el problema sin proponer solución. Mostrarlo y continuar inmediatamente.
2. Lanzar al menos tres subagentes en paralelo. Dar a cada uno un brief técnico independiente con rutas, acoplamiento, categoría de dependencia, qué queda detrás del seam y el vocabulario de [SKILL.md](../SKILL.md) y `CONTEXT.md`.
3. Forzar diferencias con restricciones distintas: interface mínima de 1–3 entry points y máximo leverage; máxima flexibilidad; caller común trivial; y, cuando corresponda, Ports & Adapters.
4. Pedir a cada diseño: tipos, métodos, parámetros, invariantes, orden y errores; ejemplo de uso; complejidad oculta; estrategia de dependencias y adapters; trade-offs de leverage.
5. Presentar los diseños uno por uno. Compararlos después por depth, locality y ubicación del seam.
6. Recomendar con firmeza el diseño más sólido o un híbrido, explicando por qué.
