---
name: setup-pre-commit
description: Configura Husky y lint-staged para formato, typecheck y tests antes del commit. Usar cuando el usuario quiera agregar hooks pre-commit o checks locales al flujo de Git.
---

# Configurar pre-commit

Configurar Husky, lint-staged con Prettier, typecheck y tests.

1. Detectar package manager por lockfile; usar npm si no está claro. Inspeccionar config y scripts existentes y fusionar sin sobrescribir.
2. Instalar como devDependencies `husky`, `lint-staged` y `prettier`.
3. Inicializar Husky con el comando equivalente a `npx husky init`; comprobar `.husky/` y `prepare: "husky"`.
4. Crear `.husky/pre-commit` para ejecutar, en este orden, `lint-staged`, `typecheck` y `test` con el package manager detectado. Husky v9+ no necesita shebang. Omitir un script inexistente e informarlo.
5. Crear `.lintstagedrc` con `{ "*": "prettier --ignore-unknown --write" }`.
6. Si no existe config de Prettier, crear `.prettierrc` con espacios de 2, `printWidth: 80`, comillas dobles, trailing comma ES5, semicolons y paréntesis de arrow siempre.
7. Verificar archivos, permiso executable, `prepare` y config. Ejecutar lint-staged de forma segura.
8. Stagear solo los archivos de este setup y crear el commit `Add pre-commit hooks (husky + lint-staged + prettier)`; el propio hook actúa como smoke test.
