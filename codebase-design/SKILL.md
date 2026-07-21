---
name: codebase-design
description: Proporciona vocabulario y criterios para diseñar deep modules. Usar al diseñar o mejorar interfaces, ubicar seams, profundizar modules o aumentar testabilidad y navegación del codebase.
---

# Diseño del codebase

Diseñar deep modules: mucho comportamiento detrás de una interface pequeña, situada en un seam claro y verificable a través de esa interface. El objetivo es leverage para callers, locality para maintainers y testabilidad para todos.

## Vocabulario

- **Module:** cualquier entidad con interface e implementación: función, clase, package o slice entre capas. Evitar «component», «service» y «unit».
- **Interface:** todo lo que un caller debe conocer, incluidos tipos, invariantes, orden, errores, configuración y rendimiento. Evitar «API» y «signature», que son más estrechos.
- **Implementation:** lo que existe dentro del module. Usar **adapter** solo cuando se hable del rol que ocupa en un seam.
- **Depth:** capacidad ofrecida por unidad de interface.
- **Seam:** lugar donde puede cambiarse comportamiento sin editar ese lugar. Evitar «boundary», reservado para bounded contexts.
- **Adapter:** elemento concreto que satisface una interface en un seam; describe un rol, no su sustancia.
- **Leverage:** capacidad reutilizada por callers.
- **Locality:** concentración del cambio, conocimiento y verificación.

Aplicar estas reglas:

1. Reducir métodos y parámetros y ocultar complejidad interna.
2. Recordar que depth pertenece a la interface, no al tamaño de la implementation. Un module profundo puede contener seams internos que no expone.
3. Tratar la interface como superficie de test. Si un test necesita atravesarla, probablemente el module tenga la forma incorrecta.
4. Aceptar dependencias en lugar de crearlas, devolver resultados en lugar de ocultarlos en side effects y mantener pequeña la superficie.
5. No introducir un seam sin al menos dos adapters justificados; uno solo es una variación hipotética.
6. Aplicar la prueba de eliminación: si al borrar el module la complejidad desaparece, era pass-through; si reaparece en muchos callers, producía locality.

Relaciones: un module presenta una interface; depth se mide contra ella; el seam es donde vive; un adapter la satisface; depth produce leverage y locality. No medir depth por líneas de implementation ni reducir interface al keyword de TypeScript.

Leer [profundizacion.md](references/profundizacion.md) al profundizar modules y [disenar-dos-veces.md](references/disenar-dos-veces.md) al explorar interfaces alternativas.
