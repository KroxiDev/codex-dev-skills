---
name: grill-with-docs
description: Entrevista intensivamente mientras mantiene documentos de dominio y decisiones. Usar cuando el usuario invoque explícitamente el skill para precisar un plan o diseño y documentarlo durante la conversación.
---

# Entrevistar con documentación

1. Aplicar `$grilling` una pregunta por vez, con respuesta recomendada.
2. Aplicar `$domain-modeling` a cada decisión confirmada.
3. Actualizar `CONTEXT.md`, glosario y ADRs durante la sesión, sin duplicar información.
4. Finalizar solo cuando no queden decisiones relevantes abiertas y el usuario confirme el entendimiento compartido.
