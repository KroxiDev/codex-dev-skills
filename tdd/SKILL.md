---
name: tdd
description: Aplica desarrollo guiado por tests con ciclos red-green en slices verticales. Usar al crear features o corregir bugs test-first, al mencionar red-green-refactor o al necesitar integration tests.
---

# TDD

TDD es el loop red → green. Aplicar estas reglas en cada ciclo, no al final. Leer `CONTEXT.md`, ADRs y tests existentes para usar el lenguaje y los patrones del proyecto.

## Superficie de test

Verificar comportamiento mediante interfaces públicas. Un test debe leerse como especificación y sobrevivir a una reestructuración interna. Antes de escribirlo, enumerar los seams que se probarán y confirmarlos con el usuario; no crear tests en seams no acordados.

Consultar [tests.md](references/tests.md) para ejemplos y [mocking.md](references/mocking.md) para límites de mocking.

## Loop

1. Elegir un solo seam y un comportamiento observable.
2. Escribir un test y ejecutarlo para comprobar que falla por la razón esperada.
3. Implementar únicamente lo necesario para ponerlo green, sin anticipar tests ni features futuras.
4. Ejecutar el test y los checks cercanos.
5. Repetir con otro slice vertical: un test y una implementación mínima por ciclo.

Reservar el refactor amplio para la etapa de revisión con `$code-review`; no convertir el loop en red → green → refactor.

## Antipatrones

- **Acoplado a implementación:** mockea colaboradores internos, prueba privados o observa por un canal lateral.
- **Tautológico:** calcula el valor esperado con la misma lógica del sistema. Usar literales conocidos, ejemplos resueltos o la spec como fuente independiente.
- **Slice horizontal:** escribir todos los tests y después toda la implementación. Cada ciclo debe atravesar verticalmente el comportamiento real.
