---
name: qa
description: Sesión de QA interactiva donde el usuario reporta bugs conversando, y el agente publica los issues. Explora el codebase en segundo plano para tomar contexto y lenguaje de dominio. Usar cuando el usuario quiera reportar bugs, hacer QA, publicar issues conversando, o mencione "sesión de QA".
disable-model-invocation: true
---

# Sesión de QA

Ejecutar una sesión de QA interactiva. El usuario describe los problemas que se va encontrando. Tú aclaras, exploras el codebase para tomar contexto y publicas issues que sean durables, centrados en el usuario y escritos en el lenguaje de dominio del proyecto.

La configuración del issue tracker debería estar documentada en `docs/agents/issue-tracker.md` — si falta, preguntar al usuario qué issue tracker usa y cómo publicar en él.

## Para cada problema que plantee el usuario

### 1. Escuchar y aclarar poco

Dejar que el usuario describa el problema con sus propias palabras. Hacer **como mucho 2 o 3 preguntas cortas de aclaración**, centradas en:

- Qué esperaba que pasara frente a qué pasó realmente
- Pasos para reproducirlo (si no son obvios)
- Si es consistente o intermitente

NO sobre-entrevistar. Si la descripción ya alcanza para publicar el issue, seguir adelante.

### 2. Explorar el codebase en segundo plano

Mientras hablas con el usuario, lanzar en segundo plano un subagente de exploración de solo lectura para entender el área relevante. El objetivo NO es encontrar el arreglo — es:

- Aprender el lenguaje de dominio que se usa en esa área (revisar `CONTEXT.md`)
- Entender qué se supone que hace la feature
- Identificar el límite del comportamiento visible para el usuario

Este contexto te ayuda a escribir un issue mejor — pero el issue en sí NO debe referenciar archivos concretos, números de línea ni detalles internos de implementación.

### 3. Evaluar el alcance: ¿un issue o un desglose?

Antes de publicar, decidir si esto es **un solo issue** o si hay que **desglosarlo** en varios.

Desglosar cuando:

- El arreglo abarca varias áreas independientes (p. ej. "la validación del formulario está mal Y falta el mensaje de éxito Y el redirect está roto")
- Hay preocupaciones claramente separables sobre las que podrían trabajar distintas personas en paralelo
- El usuario describe algo con varios modos de fallo o síntomas distintos

Mantenerlo como un solo issue cuando:

- Es un único comportamiento que está mal en un único lugar
- Todos los síntomas los causa el mismo comportamiento de raíz

### 4. Publicar el o los issues

Crear los issues en el tracker configurado. NO pedirle al usuario que los revise antes — publicarlos y compartir los enlaces.

Los issues tienen que ser **durables** — deben seguir teniendo sentido después de un refactor grande. Escribirlos desde la perspectiva del usuario.

#### Para un solo issue

Usar esta plantilla:

```
## Qué pasó

[Describir el comportamiento real que experimentó el usuario, en lenguaje llano]

## Qué esperaba

[Describir el comportamiento esperado]

## Pasos para reproducirlo

1. [Pasos concretos y numerados que un desarrollador pueda seguir]
2. [Usar términos del dominio del codebase, no nombres de módulos internos]
3. [Incluir los inputs, flags o configuración relevantes]

## Contexto adicional

[Cualquier observación extra del usuario o de la exploración del codebase que ayude a encuadrar el issue — p. ej. "esto solo pasa usando la capa de Docker, no la de filesystem" — usar lenguaje de dominio pero sin citar archivos]
```

#### Para un desglose (varios issues)

Crear los issues en orden de dependencia (los bloqueadores primero) para poder referenciar identificadores reales.

Usar esta plantilla para cada sub-issue:

```
## Issue padre

#<número-del-issue-padre> (si creaste un issue de seguimiento) o "Reportado durante una sesión de QA"

## Qué está mal

[Describir este problema de comportamiento concreto — solo esta rebanada, no el reporte entero]

## Qué esperaba

[Comportamiento esperado para esta rebanada concreta]

## Pasos para reproducirlo

1. [Pasos específicos de ESTE issue]

## Bloqueado por

- #<número-del-issue> (si este issue no se puede arreglar hasta resolver otro)

O "Ninguno — se puede empezar ya" si no hay bloqueadores.

## Contexto adicional

[Cualquier observación extra relevante para esta rebanada]
```

Al hacer un desglose:

- **Preferir muchos issues finos antes que pocos gruesos** — cada uno debe ser arreglable y verificable de forma independiente
- **Marcar las relaciones de bloqueo con honestidad** — si el issue B genuinamente no se puede probar hasta que se arregle el A, decirlo. Si son independientes, marcar ambos como "Ninguno — se puede empezar ya"
- **Crear los issues en orden de dependencia** para poder referenciar identificadores reales en "Bloqueado por"
- **Maximizar el paralelismo** — el objetivo es que varias personas (o agentes) puedan agarrar issues distintos a la vez

#### Reglas para el cuerpo de todos los issues

- **Sin rutas de archivo ni números de línea** — se quedan obsoletos
- **Usar el lenguaje de dominio del proyecto** (revisar `CONTEXT.md` si existe)
- **Describir comportamientos, no código** — "el servicio de sincronización no logra aplicar el parche", no "`applyPatch()` lanza en la línea 42"
- **Los pasos para reproducir son obligatorios** — si no logras determinarlos, preguntar al usuario
- **Ser conciso** — un desarrollador debería poder leer el issue en 30 segundos

Después de publicar, imprimir todos los enlaces de los issues (con las relaciones de bloqueo resumidas) y preguntar: "¿Siguiente problema, o terminamos?"

### 5. Continuar la sesión

Seguir hasta que el usuario diga que terminó. Cada issue es independiente — no agruparlos en lotes.
