# Prototipo de lógica

Una pequeña app interactiva de terminal que permite al usuario manejar un modelo de estado a mano. Usar esto cuando la pregunta trate de **lógica de negocio, transiciones de estado o forma de datos** — el tipo de cosa que parece razonable sobre el papel pero solo se siente mal cuando la empujas por casos reales.

## Cuándo esta es la forma correcta

- "No estoy seguro de si esta máquina de estados maneja el caso límite donde X y luego Y."
- "¿Este modelo de datos me deja de verdad representar el caso donde...?"
- "Quiero tantear cómo debería verse la API antes de escribirla."
- Cualquier cosa donde el usuario quiera **pulsar botones y ver cambiar el estado**.

Si la pregunta es "cómo debería verse esto" — rama equivocada. Usar [ui.md](ui.md).

## Proceso

### 1. Enunciar la pregunta

Antes de escribir código, dejar por escrito qué modelo de estado y qué pregunta se está prototipando. Un párrafo, en el README del prototipo o en un comentario al principio del archivo. Un prototipo de lógica que responde la pregunta equivocada es puro desperdicio — hacer la pregunta explícita para que pueda comprobarse después, tanto si el usuario está mirando ahora como si vuelve a ello más tarde.

### 2. Elegir el lenguaje

Usar lo que use el proyecto anfitrión. Si el proyecto no tiene un runtime obvio (p. ej. un repo de documentación), preguntar.

Seguir las convenciones de tooling existentes del proyecto — no añadir un package manager o runtime nuevo solo para el prototipo.

### 3. Aislar la lógica en un módulo portable

Poner la lógica real — la parte que responde la pregunta — detrás de una interface pequeña y pura que pueda extraerse y soltarse en el codebase real más adelante. La TUI de alrededor es descartable; el módulo de lógica no debería serlo.

La forma correcta depende de la pregunta:

- **Un reducer puro** — `(state, action) => state`. Bueno cuando las acciones son eventos discretos y el estado es un único valor.
- **Una máquina de estados** — estados y transiciones explícitos. Buena cuando "qué acciones son siquiera legales ahora mismo" es parte de la pregunta.
- **Un conjunto pequeño de funciones puras** sobre un tipo de datos plano. Bueno cuando no hay estado actual implícito — solo transformaciones.
- **Una clase o módulo con una superficie de métodos clara** cuando la lógica genuinamente posee estado interno continuo.

Elegir la forma que mejor encaje con la pregunta planteada, *no* la que sea más fácil de cablear a una TUI. Mantenerla pura: sin I/O, sin código de terminal, sin `console.log` para el flujo de control. La TUI la importa y la llama; nada fluye en la dirección contraria.

Esto es lo que hace al prototipo útil más allá de su propia vida: cuando la pregunta esté respondida, el reducer / máquina / conjunto de funciones validado puede extraerse al módulo real por sí solo.

### 4. Construir la TUI más pequeña que exponga el estado

Construirla como una **TUI ligera** — en cada tick, limpiar la pantalla (`console.clear()` / `print("\033[2J\033[H")` / equivalente) y re-renderizar el frame completo. El usuario debe ver siempre una vista estable, no un scrollback que crece sin fin.

Cada frame tiene dos partes, en este orden:

1. **Estado actual**, bien impreso y amigable al diff (un campo por línea, o JSON formateado). Usar **negrita** para nombres de campos o encabezados de sección y **atenuado** para contexto menos importante (timestamps, IDs, valores derivados). Los códigos de escape ANSI nativos están bien — `\x1b[1m` negrita, `\x1b[2m` atenuado, `\x1b[0m` reset. No hace falta traer una librería de estilos a menos que ya haya una en el proyecto.
2. **Atajos de teclado**, listados abajo: `[a] añadir usuario  [d] borrar usuario  [t] avanzar reloj  [q] salir`. Negrita en la tecla, atenuada la descripción, o al revés — lo que se lea limpio.

Comportamiento:

1. **Inicializar el estado** — un único objeto/struct en memoria. Renderizar el primer frame al arrancar.
2. **Leer una pulsación (o una línea)** por vez, despachar a un handler que muta el estado.
3. **Re-renderizar** el frame completo tras cada acción — no anexar, reemplazar.
4. **Iterar hasta salir.**

El frame completo debe caber en una pantalla.

### 5. Hacerlo ejecutable con un comando

Añadir un script al task runner existente del proyecto (scripts de `package.json`, `Makefile`, `justfile`, `pyproject.toml`). El usuario debe poder ejecutar `pnpm run <nombre-del-prototipo>` o equivalente — nunca tener que recordar una ruta.

Si el proyecto anfitrión no tiene task runner, poner el comando al principio del README del prototipo.

### 6. Entregarlo

Dar al usuario el comando de ejecución. Lo manejará él mismo; los momentos interesantes son cuando dice "espera, eso no debería ser posible" o "vaya, asumí que X sería distinto" — esos son los bugs de la _idea_, que es todo el punto. Si quiere acciones nuevas, añadirlas. Los prototipos evolucionan.

### 7. Capturar la respuesta y el prototipo

Cuando el prototipo haya respondido su pregunta, capturar la respuesta, y luego capturar el prototipo como describe el [SKILL](../SKILL.md). El mapeo específico de lógica: el reducer / máquina / conjunto de funciones validado se extrae al módulo real (la decisión, absorbida); el cascarón de la TUI viaja a la branch descartable que conserva el prototipo como fuente primaria.

## Anti-patrones

- **No añadir tests.** Un prototipo que necesita tests ya no es un prototipo.
- **No cablearlo a la base de datos real.** Usar un store en memoria a menos que la pregunta sea específicamente sobre persistencia.
- **No generalizar.** Nada de "¿y si quisiéramos soportar X más adelante?". El prototipo responde una pregunta.
- **No difuminar la lógica y la TUI juntas.** Si el reducer / máquina de estados referencia `console.log`, prompts o códigos de escape de terminal, ya no es portable. Mantener la TUI como un cascarón delgado sobre un módulo puro.
- **No enviar el cascarón de la TUI a producción.** El cascarón está optimizado para manejarse a mano desde una terminal. El módulo de lógica detrás de él es la parte que vale la pena conservar.
