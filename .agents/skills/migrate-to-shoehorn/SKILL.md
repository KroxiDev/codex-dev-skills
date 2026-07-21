---
name: migrate-to-shoehorn
description: Migra fixtures de test desde assertions `as` a `@total-typescript/shoehorn`. Usar cuando el usuario quiera adoptar shoehorn, eliminar casts inseguros en tests o construir datos parciales tipados.
---

# Migrar a shoehorn

Usar `@total-typescript/shoehorn` exclusivamente en tests para construir datos parciales sin assertions `as`. Nunca introducirlo en producción.

Elegir la función correcta:

- `fromPartial()` para objetos parciales que siguen respetando los tipos de las propiedades presentes.
- `fromAny()` para datos intencionalmente inválidos, como tests de error, manteniendo autocomplete.
- `fromExact()` para exigir temporalmente el objeto completo.

## Workflow

1. Preguntar qué tests tienen casts problemáticos, si los objetos son grandes y si existen datos deliberadamente inválidos.
2. Detectar package manager e instalar `@total-typescript/shoehorn`.
3. Buscar assertions en `*.test.ts` y `*.spec.ts`. No tocar casts legítimos de runtime ni código de producción.
4. Reemplazar `value as Type` por `fromPartial(value)` y `value as unknown as Type` por `fromAny(value)`. Añadir imports desde el package y conservar el comportamiento.
5. Ejecutar typecheck y tests pertinentes; después lint si existe.
6. Reportar cualquier assertion no migrada y el motivo.
