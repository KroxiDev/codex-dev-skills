---
name: recommend-codex-model
description: Estima la dificultad de la tarea actual y recomienda el modelo y esfuerzo mínimos e ideales de GPT-5.6. Usar solo mediante invocación explícita.
---

1. Leer la tarea actual. Inspeccionar el workspace mínimamente y solo en lectura cuando un dato concreto pueda cambiar la recomendación.
2. Elegir modelo: Luna para trabajo claro y repetible; Terra para tareas cotidianas con varios pasos o herramientas; Sol para trabajo ambiguo, abierto, difícil o de alto impacto.
3. Elegir el menor esfuerzo compatible: Low para trabajo directo; Medium si requiere planificación; High para múltiples pasos o trade-offs; XHigh para diagnóstico, incertidumbre o verificación exigente.
4. Formar el mínimo viable con la combinación más rápida y económica razonablemente capaz. Para el ideal, aumentar el modelo si domina el juicio o la ambigüedad, o el esfuerzo si dominan la planificación y la verificación; aumentar solo un eje cuando reduzca materialmente el riesgo.
5. Nunca recomendar Ultra. Usar Max únicamente para una tarea extrema, indivisible y de alto impacto, explicando por qué XHigh sería insuficiente.
6. Responder sin preámbulo y en cuatro líneas:
   - `Dificultad: <Trivial|Baja|Media|Alta|Extrema>`
   - `Modelo mínimo viable: GPT-5.6 <Luna|Terra|Sol> — <esfuerzo>`
   - `Modelo ideal: GPT-5.6 <Luna|Terra|Sol> — <esfuerzo>`
   - `Justificación breve: <una o dos frases>`
