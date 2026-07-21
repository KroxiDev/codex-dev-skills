---
name: writing-shape
description: Da forma de artículo al material bruto, párrafo por párrafo. Usar cuando el usuario invoque explícitamente el skill para convertir ideas en una estructura narrativa coherente.
---

# Dar forma a un artículo

Leer de principio a fin el Markdown de material bruto. Tratarlo como una pila fija y de solo lectura. Esta fase es **exploit**: crear un documento de artículo separado. Si falta la ruta de salida, preguntarla una vez y recordarla.

## Loop

1. Acordar qué conceptos ya conoce el lector: son prerequisitos grounded.
2. Redactar entre dos y tres aperturas que impliquen tesis o ángulos distintos. Obligar a elegir una o componer un híbrido; la apertura fija la promesa del artículo.
3. Preguntar qué necesita oír después el lector. Extraer material de la pila y decidir junto al usuario si el bloque será prosa, lista, tabla, callout, quote o código. Escribir inmediatamente cada bloque acordado.
4. Releer el artículo desde disco y repetir un bloque por vez hasta que el usuario lo considere terminado.

## Grounding y presión editorial

Un bloque solo puede usar conceptos que el lector trae o que un bloque anterior introdujo. Mantener la lista grounded. Si el siguiente movimiento exige una idea aún no presentada, introducirla primero o acordarla como prerequisito.

Aplicar una entrevista invertida y presionar la forma: «¿Qué aporta este párrafo?», «¿Qué se rompe si lo cortamos?», «¿Esto es prosa o lista?», «Esta oración hace dos trabajos», «La apertura prometió X y derivamos a Y». Cortar lo que no gane su lugar.

Tratar la pila como cantera: dividir, combinar, parafrasear o citar. Si falta algo necesario, nombrar la laguna y pedir un ejemplo o cortar esa parte; no inventar material nuevo.

## Elegir formato

- Prosa para argumento; lista para elementos realmente paralelos.
- Callout solo si el tip, warning o aside desviaría el argumento inline.
- Tabla cuando se repita tres o más veces la misma estructura de campos.
- Quote si importa la redacción exacta; paráfrasis si importa solo la idea.
- Bloque de código para contenido multilínea, runnable o ilustrativo; inline para tokens.

Releer antes de cada escritura, preservar ediciones del usuario y modificar solo el bloque solicitado. No editar la pila, publicar, añadir frontmatter ni adaptar a una plataforma sin petición explícita.
