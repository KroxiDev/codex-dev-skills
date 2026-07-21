---
name: loop-me
description: Diseña specs de workflows recurrentes mediante una entrevista con estado. Usar cuando el usuario invoque explícitamente el skill para identificar o especificar loops delegables del workspace.
---

# Diseñar workflows recurrentes

Ejecutar una sesión stateful de `$grilling`, una pregunta por vez y con recomendación, cuyo único output sean specs de workflows. Crear, editar o eliminar specs a medida que se resuelvan decisiones.

Un **loop** es un patrón recurrente en la vida, trabajo, semana o actividad del usuario. Buscar loops delegables y proponer los que el usuario todavía no haya reconocido. Un **workflow** es la spec que hace real un loop; vive en `workflows/*.md` y es su única fuente de verdad.

Usar este vocabulario solo cuando el caso lo requiera, nunca como checklist obligatorio:

- **Trigger:** evento o schedule que inicia cada run; preferir eventos cuando sean más eficientes.
- **Checkpoint:** punto HITL de verificación o decisión. Un workflow puede no tener ninguno o no usar IA.
- **Push right:** retrasar el checkpoint al máximo y preparar todo antes de involucrar al usuario.
- **Brief:** resumen compacto y listo para decidir con qué se produjo, por qué y enlace al asset; nunca output bruto.

Mantener `NOTES.md` con herramientas, canales y términos canónicos del usuario. Si está vacío o pobre, entrevistar primero sobre su mundo y precisar lenguaje vago antes de especificar.

Una spec termina solo cuando un agente implementador puede construirla sin hacer una sola pregunta. Continuar el grilling hasta que no quede ninguna abierta. No implementar el workflow automáticamente.
