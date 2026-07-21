---
name: batch-grill-me
description: Entrevista por rondas preguntando todo el frontier de decisiones disponible. Usar cuando el usuario invoque explícitamente el skill para precisar un diseño con preguntas agrupadas.
---

# Entrevista por lotes

1. Representar el problema como un árbol de decisiones.
2. Calcular el frontier: preguntas cuyas dependencias ya están resueltas.
3. Preguntar todo el frontier en una lista numerada e incluir una respuesta recomendada por pregunta.
4. Esperar respuestas, actualizar el árbol y repetir.
5. Investigar hechos disponibles en el workspace sin trasladárselos al usuario. Si una pregunta del frontier depende de un hecho, lanzar un subagente para obtenerlo y continuar con las demás preguntas; dejar en espera solo las ramas que dependan de esa exploración.
6. Terminar cuando el frontier esté vacío y el usuario confirme el entendimiento compartido. No implementar automáticamente.
