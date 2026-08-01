---
name: setup-pre-commit
description: Configura hooks pre-commit de Husky con lint-staged (Prettier), typecheck y tests en el repo actual. Usar cuando el usuario quiera añadir hooks pre-commit, configurar Husky, configurar lint-staged, o añadir formato/typecheck/tests en el momento del commit.
---

# Configurar hooks pre-commit

## Qué configura esto

- Hook pre-commit de **Husky**
- **lint-staged** ejecutando Prettier sobre todos los archivos staged
- Configuración de **Prettier** (si falta)
- Scripts de **typecheck** y **test** en el hook pre-commit

## Pasos

### 1. Detectar el package manager

Buscar `package-lock.json` (npm), `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb` (bun). Usar el que esté presente. Por defecto npm si no está claro.

### 2. Instalar dependencias

Instalar como devDependencies:

```
husky lint-staged prettier
```

### 3. Inicializar Husky

```bash
npx husky init
```

Esto crea el directorio `.husky/` y añade `prepare: "husky"` al package.json.

### 4. Crear `.husky/pre-commit`

Escribir este archivo (no hace falta shebang para Husky v9+):

```
npx lint-staged
npm run typecheck
npm run test
```

**Adaptar**: Reemplazar `npm` por el package manager detectado. Si el repo no tiene script `typecheck` o `test` en package.json, omitir esas líneas y decírselo al usuario.

### 5. Crear `.lintstagedrc`

```json
{
  "*": "prettier --ignore-unknown --write"
}
```

### 6. Crear `.prettierrc` (si falta)

Crearlo solo si no existe configuración de Prettier. Usar estos defaults:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": true,
  "arrowParens": "always"
}
```

### 7. Verificar

- [ ] `.husky/pre-commit` existe y es ejecutable
- [ ] `.lintstagedrc` existe
- [ ] El script `prepare` en package.json es `"husky"`
- [ ] Existe configuración de `prettier`
- [ ] Ejecutar `npx lint-staged` para verificar que funciona

### 8. Commitear

Stagear todos los archivos cambiados/creados y commitear con el mensaje: `Add pre-commit hooks (husky + lint-staged + prettier)`

Esto pasará por los nuevos hooks pre-commit — un buen smoke test de que todo funciona.

## Notas

- Husky v9+ no necesita shebangs en los archivos de hooks
- `prettier --ignore-unknown` salta los archivos que Prettier no puede analizar (imágenes, etc.)
- El pre-commit ejecuta primero lint-staged (rápido, solo staged), y luego el typecheck y los tests completos
