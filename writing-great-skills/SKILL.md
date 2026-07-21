---
name: writing-great-skills
description: Proporciona principios para escribir y editar skills predecibles y concisos. Usar cuando el usuario invoque explícitamente el skill para diseñar, revisar o depurar instrucciones de un skill.
---

# Escribir buenos skills

La predictibilidad significa repetir el proceso, no producir siempre el mismo resultado. Consultar [glosario.md](references/glosario.md) para las definiciones completas.

1. Elegir invocación implícita solo si Codex debe descubrir el skill; representar invocación exclusivamente manual con `policy.allow_implicit_invocation: false` en `agents/openai.yaml`.
2. Si demasiados skills manuales exceden la memoria del usuario, crear un router manual que nombre los demás y explique cuándo usarlos.
3. Escribir una `description` que indique qué hace y una rama de trigger por comportamiento distinto. Adelantar el leading word, eliminar sinónimos duplicados y omitir identidad ya explicada en el body.
4. Ordenar la información por jerarquía: pasos inline con criterio verificable; referencia inline; y referencia externa tras un context pointer. Mantener juntas definición, reglas y caveats de cada concepto.
5. Aplicar progressive disclosure: dejar en `SKILL.md` lo común a todas las ramas y mover detalles condicionales detrás de enlaces directos cuyo texto indique cuándo leerlos.
6. Dividir por invocación solo si una rama necesita su propio trigger; dividir por secuencia solo si ver pasos posteriores provoca premature completion. Primero intentar fortalecer el completion criterion.
7. Eliminar duplicación, contenido irrelevante, sediment, sprawl y no-ops. Probar cada oración por separado y mantener una sola fuente de verdad.
8. Buscar leading words ya presentes en el conocimiento del modelo que colapsen instrucciones repetidas y anclen invocación y ejecución.
9. Escribir el comportamiento objetivo en positivo; reservar negaciones para guardrails que no puedan expresarse de otra forma y acompañarlas con la acción correcta.
10. Validar frontmatter, metadata, enlaces, recursos, criterios de finalización y comportamiento antes de declarar el skill terminado.
