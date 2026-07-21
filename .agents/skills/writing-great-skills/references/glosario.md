# Glosario para construir skills

## Predictibilidad

Repetición del mismo proceso entre ejecuciones, aunque el resultado varíe.

## Invocación

- **Invocación implícita:** Codex puede descubrir el skill mediante su `description`.
- **Invocación manual:** requiere `$skill`; se representa con `policy.allow_implicit_invocation: false`.
- **Description:** puntero de contexto que explica qué hace y cuándo activarlo.
- **Carga de contexto:** atención y tokens consumidos por metadata siempre visible.
- **Carga cognitiva:** skills que el usuario debe recordar e invocar.

## Jerarquía de información

- **Pasos:** acciones ordenadas con criterio de finalización.
- **Referencia:** hechos, reglas y ejemplos consultados cuando hacen falta.
- **Progressive disclosure:** mover referencia detrás de un enlace directo.
- **Co-location:** mantener juntas definición, reglas y excepciones de un concepto.
- **Sprawl:** longitud excesiva aunque cada línea sea válida.

## Dirección del comportamiento

- **Branch:** camino distinto según el caso de uso.
- **Leading word:** concepto compacto que activa un patrón de comportamiento.
- **Criterio de finalización:** condición observable y, cuando importa, exhaustiva.
- **Legwork:** investigación y trabajo interno necesarios para cumplir el criterio.
- **Premature completion:** abandonar un paso antes de cumplir su criterio.
- **Negation:** dirección basada solo en prohibiciones; preferir objetivos positivos con guardrails explícitos.

## Poda

- **Single source of truth:** un significado en una ubicación autoritativa.
- **Duplication:** el mismo significado repetido.
- **Relevance:** una línea todavía cambia o informa el trabajo del skill.
- **Sediment:** contenido obsoleto acumulado.
- **No-op:** instrucción que no cambia el comportamiento por repetir el valor predeterminado.
