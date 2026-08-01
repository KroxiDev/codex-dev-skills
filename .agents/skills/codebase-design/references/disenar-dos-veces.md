# Diseñar dos veces

Cuando el usuario quiera explorar interfaces alternativas para un candidato a profundización ya elegido, usar este patrón de subagentes paralelos. Basado en "Design It Twice" (Ousterhout) — es improbable que tu primera idea sea la mejor.

Usa el vocabulario de [SKILL.md](../SKILL.md) — **módulo**, **interface**, **seam**, **adapter**, **leverage**.

## Proceso

### 1. Encuadrar el espacio del problema

Antes de lanzar subagentes, escribir una explicación orientada al usuario del espacio del problema para el candidato elegido:

- Las restricciones que cualquier interface nueva tendría que satisfacer
- Las dependencias de las que dependería, y en qué categoría caen (ver [profundizacion.md](profundizacion.md))
- Un sketch de código ilustrativo y aproximado que aterrice las restricciones — no una propuesta, solo una manera de hacer las restricciones concretas

Mostrárselo al usuario y proceder inmediatamente al Paso 2. El usuario lee y piensa mientras los subagentes trabajan en paralelo.

### 2. Lanzar subagentes

Lanzar 3+ subagentes en paralelo. Cada uno debe producir una interface **radicalmente distinta** para el módulo profundizado.

Dar a cada subagente un brief técnico separado (rutas de archivos, detalles de acoplamiento, categoría de dependencia de [profundizacion.md](profundizacion.md), qué queda detrás del seam). El brief es independiente de la explicación del espacio del problema del Paso 1. Dar a cada agente una restricción de diseño distinta:

- Agente 1: "Minimiza la interface — apunta a 1–3 puntos de entrada máximo. Maximiza el leverage por punto de entrada."
- Agente 2: "Maximiza la flexibilidad — soporta muchos casos de uso y extensión."
- Agente 3: "Optimiza para el caller más común — haz trivial el caso por defecto."
- Agente 4 (si aplica): "Diseña alrededor de ports & adapters para las dependencias que cruzan el seam."

Incluir en el brief tanto el vocabulario de [SKILL.md](../SKILL.md) como el de CONTEXT.md, para que cada subagente nombre las cosas de forma consistente con el lenguaje de arquitectura y el lenguaje de dominio del proyecto.

Cada subagente produce:

1. Interface (tipos, métodos, parámetros — más invariantes, orden, modos de error)
2. Ejemplo de uso mostrando cómo la usan los callers
3. Qué oculta la implementación detrás del seam
4. Estrategia de dependencias y adapters (ver [profundizacion.md](profundizacion.md))
5. Trade-offs — dónde el leverage es alto, dónde es delgado

### 3. Presentar y comparar

Presentar los diseños secuencialmente para que el usuario pueda absorber cada uno, y luego compararlos en prosa. Contrastar por **profundidad** (leverage en la interface), **localidad** (dónde se concentra el cambio) y **ubicación del seam**.

Tras comparar, dar tu propia recomendación: qué diseño te parece más fuerte y por qué. Si elementos de distintos diseños combinarían bien, proponer un híbrido. Tener opinión — el usuario quiere una lectura firme, no un menú.
