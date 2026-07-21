---
name: scaffold-exercises
description: Crea y confirma estructuras de ejercicios con secciones, problemas, soluciones y explicaciones. Usar al iniciar una sección de curso o generar stubs que deban pasar el linter de AI Hero.
---

# Crear ejercicios

Crear estructuras que pasen `pnpm ai-hero-cli internal lint` y luego crear el commit.

## Convenciones

- Secciones: `exercises/XX-section-name/`.
- Ejercicios: `XX.YY-exercise-name/` dentro de la sección.
- Nombres en dash-case.
- Cada ejercicio contiene al menos `problem/`, `solution/` o `explainer/`; para stubs, usar `explainer/` salvo que el plan indique otra cosa.
- Cada variante contiene un `readme.md` no vacío y sin links rotos. Un título y una descripción reales bastan.
- Si contiene código, añadir `main.ts` con más de una línea; un stub solo con README es válido.

## Workflow

1. Extraer del plan secciones, ejercicios y variantes.
2. Crear las rutas y un `readme.md` mínimo por variante.
3. Ejecutar `pnpm ai-hero-cli internal lint` y corregir hasta que pase. El linter exige variante primaria, prohíbe `.gitkeep`, `speaker-notes.md`, links rotos y comandos `pnpm run exercise`, y requiere `main.ts` salvo contenido solo-README.
4. Al renumerar o mover, usar `git mv`, actualizar prefijos y volver a ejecutar lint.
5. Crear el commit con los scaffolds validados.
