---
name: setup-ts-deep-modules
description: Configura dependency-cruiser en repositorios TypeScript para ocultar internals detrás de entry points. Usar cuando el usuario invoque explícitamente el skill para aplicar límites de deep modules entre packages.
---

# Configurar deep modules en TypeScript

Aplicar `$codebase-design`. Cada package es un deep module: todos sus archivos raíz son entry points públicos; cualquier subfolder es privado. Por convención, usar `lib/` para implementation y `tests/` para tests. Se permiten varios entry points pequeños; desalentar barrels que reexporten subárboles.

Imponer cuatro reglas de error:

1. Código externo importa solo entry points raíz, nunca subfolders.
2. Los internals del mismo package se importan libremente.
3. Tests importan entry points de cualquier package y sus propios fixtures, pero ningún internal, ni siquiera propio.
4. No existen ciclos de dependencias.

## Proceso

1. Detectar package manager por lockfile; usar `src/packages` si existe `src/`, en otro caso `packages`, salvo convención evidente que deba confirmarse. Si ya existe config de dependency-cruiser, fusionar reglas y options sin sobrescribir.
2. Instalar `dependency-cruiser` como devDependency con el package manager detectado.
3. Copiar [dependency-cruiser.config.cjs](assets/dependency-cruiser.config.cjs) a `.dependency-cruiser.cjs`, ajustar `PACKAGES_ROOT` y verificar las cuatro reglas. Mantener `.cjs` para repositorios `type: module`.
4. Añadir `lint:boundaries` y ejecutarlo dentro del mismo check general que typecheck. No cambiar `tsconfig` ni crear path aliases; si no existe check general, informar que debe añadirse a CI.
5. Crear `<packages-root>/example/` como template: `index.ts` delega comportamiento real a `lib/impl.ts`; `tests/example.test.ts` importa solo `../index`. Explicar que puede copiarse o eliminarse.
6. Probar pass → añadir un deep import temporal desde el test y observar fallo `tests-through-entrypoints` → retirar y observar pass. Si no falla, corregir la configuración antes de terminar.
7. Crear `<packages-root>/README.md` con layout, cuatro reglas, comando y rechazo explícito de barrels. Añadir un context pointer desde `AGENTS.md` o el archivo de instrucciones existente.

Conservar los back-references `$1` que permiten acceso interno. Mantener packages planos bajo la raíz; sus internals sí pueden anidarse. La privacidad depende de profundidad, por lo que un folder nuevo no requiere otra regla.
