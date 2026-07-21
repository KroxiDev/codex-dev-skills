# Prototipo de lógica

Construir una app de terminal pequeña para que el usuario conduzca manualmente lógica de negocio, transiciones o forma de datos. Si la pregunta es visual, usar [ui.md](ui.md).

1. Escribir en un README o comentario superior la pregunta exacta y el modelo que se evalúa.
2. Usar el lenguaje, runtime, package manager y convenciones del proyecto.
3. Aislar la lógica detrás de una interface pura y portable: reducer `(state, action) => state`, state machine explícita, funciones puras o un module con estado interno cuando sea genuinamente necesario. Mantener I/O, prompts y terminal fuera de ella.
4. Construir una TUI mínima que limpie y redibuje toda la pantalla en cada tick. Mostrar primero el estado completo, legible y diff-friendly; después, los atajos de teclado. Inicializar un único estado en memoria, leer una acción, despacharla, renderizar y repetir hasta salir.
5. Añadir un único comando al task runner existente. Si no existe, dejar el comando al comienzo del README.
6. Entregar el comando al usuario y evolucionar acciones según sus reacciones.
7. Cuando la pregunta quede resuelta, registrar el veredicto. Llevar la lógica validada al module real y conservar la TUI solo en el branch descartable indicado por [SKILL.md](../SKILL.md).

No añadir tests, base real, generalización especulativa ni código de terminal dentro de la lógica. No promover la TUI a producción.
