# Formato de CONTEXT.md

## Estructura

```md
# {Nombre del contexto}

{Descripción de una o dos frases de qué es este contexto y por qué existe.}

## Lenguaje

**Order**:
{Una descripción del término en una o dos frases}
_Evitar_: Purchase, transaction

**Invoice**:
Una solicitud de pago enviada a un cliente tras la entrega.
_Evitar_: Bill, payment request

**Customer**:
Una persona u organización que hace pedidos.
_Evitar_: Client, buyer, account
```

## Reglas

- **Tener opinión.** Cuando existan varias palabras para el mismo concepto, elegir la mejor y listar las demás bajo `_Evitar_`.
- **Definiciones apretadas.** Una o dos frases máximo. Definir qué ES, no qué hace.
- **Incluir solo términos específicos del contexto de este proyecto.** Los conceptos generales de programación (timeouts, tipos de error, patrones de utilidades) no pertenecen aquí aunque el proyecto los use extensamente. Antes de añadir un término, preguntarse: ¿es un concepto único de este contexto o un concepto general de programación? Solo el primero pertenece.
- **Agrupar términos bajo subencabezados** cuando emerjan clusters naturales. Si todos los términos pertenecen a una sola área cohesiva, una lista plana está bien.

## Repos de contexto único vs multi-contexto

**Contexto único (la mayoría de los repos):** Un `CONTEXT.md` en la raíz del repo.

**Múltiples contextos:** Un `CONTEXT-MAP.md` en la raíz del repo lista los contextos, dónde viven y cómo se relacionan entre sí:

```md
# Context Map

## Contextos

- [Ordering](./src/ordering/CONTEXT.md) — recibe y hace seguimiento de los pedidos de clientes
- [Billing](./src/billing/CONTEXT.md) — genera facturas y procesa pagos
- [Fulfillment](./src/fulfillment/CONTEXT.md) — gestiona el picking de almacén y los envíos

## Relaciones

- **Ordering → Fulfillment**: Ordering emite eventos `OrderPlaced`; Fulfillment los consume para iniciar el picking
- **Fulfillment → Billing**: Fulfillment emite eventos `ShipmentDispatched`; Billing los consume para generar facturas
- **Ordering ↔ Billing**: Tipos compartidos para `CustomerId` y `Money`
```

El skill infiere qué estructura aplica:

- Si existe `CONTEXT-MAP.md`, leerlo para encontrar los contextos
- Si solo existe un `CONTEXT.md` en la raíz, contexto único
- Si no existe ninguno, crear un `CONTEXT.md` en la raíz de forma diferida cuando se resuelva el primer término

Cuando existan múltiples contextos, inferir con cuál se relaciona el tema actual. Si no está claro, preguntar.
