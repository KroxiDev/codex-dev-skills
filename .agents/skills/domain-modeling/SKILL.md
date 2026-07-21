---
name: domain-modeling
description: Construye y precisa el modelo de dominio de un proyecto. Usar para definir terminología, mantener lenguaje ubicuo, registrar decisiones arquitectónicas o actualizar contexto del dominio.
---

# Modelado de dominio

Usar este skill para cambiar activamente el modelo: cuestionar términos, probar escenarios y registrar decisiones cuando se confirman. Leer vocabulario no constituye por sí solo una sesión de modelado.

## Estructura

- Con un solo contexto, usar `CONTEXT.md` en la raíz y ADRs en `docs/adr/`.
- Si existe `CONTEXT-MAP.md`, seguirlo y mantener el `CONTEXT.md` y los ADRs del contexto correspondiente; reservar `docs/adr/` raíz para decisiones de todo el sistema.
- Crear archivos y directorios de forma perezosa, solo cuando haya contenido confirmado que registrar.

## Durante la sesión

1. Señalar de inmediato cualquier uso que contradiga el glosario: explicar la definición existente y pedir que se resuelva la diferencia.
2. Ante lenguaje vago o sobrecargado, proponer un término canónico preciso y distinguir los conceptos confundidos.
3. Inventar escenarios concretos y casos límite para tensionar relaciones, invariantes y límites.
4. Contrastar afirmaciones con el código. Exponer contradicciones entre la conversación y el comportamiento existente.
5. Actualizar `CONTEXT.md` en cuanto se resuelva un término, usando [formato-contexto.md](references/formato-contexto.md). No acumular cambios para el final.

`CONTEXT.md` es únicamente un glosario del dominio: excluir specs, notas temporales y detalles de implementación.

Ofrecer un ADR solo cuando la decisión reúna las tres condiciones: es costosa de revertir, sorprendería sin contexto y resultó de un trade-off real. Si falta cualquiera, no crear ADR. Usar [formato-adr.md](references/formato-adr.md) y no registrar supuestos no confirmados.
