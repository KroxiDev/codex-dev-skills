---
name: design-an-interface
description: Diseña varias interfaces radicalmente distintas para un module y las compara. Usar cuando el usuario quiera diseñar una API, explorar alternativas de interface, comparar formas de module o aplicar «design it twice».
---

# Diseñar una interface

1. Aclarar el problema, callers, operaciones, restricciones, rendimiento y compatibilidad. Definir qué debe exponerse y qué complejidad debe quedar oculta.
2. Lanzar al menos tres subagentes en paralelo. Cada uno debe diseñar una alternativa radicalmente distinta y recibir una restricción que fuerce diversidad: superficie mínima, máxima flexibilidad, caso común trivial o paradigma diferente.
3. Pedir a cada alternativa: firma completa; ejemplo de uso; complejidad oculta; y trade-offs. Rechazar y repetir diseños que solo varíen nombres o detalles menores.
4. Presentar los diseños secuencialmente para que el usuario absorba cada uno antes de compararlos.
5. Comparar en prosa: simplicidad; propósito general frente a especialización; eficiencia interna permitida; depth; y facilidad de uso correcto frente a facilidad de mal uso.
6. Sintetizar una opción recomendada o un híbrido con el usuario. No implementar: este skill decide únicamente la forma de la interface.

No evaluar por esfuerzo de implementación ni empezar por la estructura interna. Aplicar el vocabulario y los criterios de `$codebase-design`.
