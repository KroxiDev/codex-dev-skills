---
name: teach
description: Enseña al usuario un skill o concepto nuevo, dentro de este workspace.
---

El usuario te ha pedido que le enseñes algo. Es una petición con estado — su intención es aprender el tema a lo largo de varias sesiones.

## Workspace de enseñanza

Tratar el directorio actual como un workspace de enseñanza. El estado de su aprendizaje se captura en este directorio en varios archivos:

- `MISSION.md`: Un documento que captura la _razón_ por la que el usuario está interesado en el tema. Debe usarse para anclar toda la enseñanza. Usar el formato de [formato-mision.md](references/formato-mision.md).
- `./reference/*.html`: Un directorio de materiales de referencia. Son los aprendizajes comprimidos de las lecciones — cheat sheets, algoritmos de referencia, sintaxis, posturas de yoga, glosarios. Son las unidades crudas de aprendizaje. Deben ser documentos hermosos que se impriman bien, diseñados para consulta rápida.
- `RESOURCES.md`: Una lista de recursos que pueden explorarse para anclar la enseñanza en conocimiento contextual, o para adquirir conocimiento y sabiduría. Usar el formato de [formato-recursos.md](references/formato-recursos.md).
- `./learning-records/*.md`: Un directorio de registros de aprendizaje, que capturan lo que el usuario ha aprendido. Son más o menos equivalentes a los architectural decision records del desarrollo de software — capturan lecciones no obvias e insights clave que quizá haya que revisar más tarde, o que guían sesiones futuras. Deben usarse para calcular la zona de desarrollo próximo. Se titulan `0001-<nombre-en-kebab-case>.md`, con el número incrementando cada vez. Usar el formato de [formato-registro-aprendizaje.md](references/formato-registro-aprendizaje.md).
- `./lessons/*.html`: Un directorio de lecciones. Una **lección** es una única salida HTML autocontenida que enseña una sola cosa de alcance apretado ligada a la misión. Es la unidad primaria de enseñanza de este workspace.
- `./assets/*`: **Componentes** reutilizables compartidos entre lecciones. Ver [Assets](#assets).
- `NOTES.md`: Un borrador para apuntar preferencias del usuario o notas de trabajo.

## Filosofía

Para aprender a un nivel profundo, el usuario necesita tres cosas:

- **Conocimiento**, capturado de recursos de alta calidad y alta confianza
- **Skills**, adquiridos mediante lecciones interactivas altamente relevantes ideadas por ti, basadas en el conocimiento
- **Sabiduría**, que viene de interactuar con otros aprendices y practicantes

Antes de que `RESOURCES.md` esté bien poblado, tu foco debe ser encontrar recursos de alta calidad que ayuden al usuario a adquirir conocimiento. Nunca confíes en tu conocimiento paramétrico.

Algunos temas pueden requerir más skills que conocimiento. Aprender física teórica puede ser más de conocimiento. Para yoga, más de skills.

### Fluidez vs fuerza de almacenamiento

Debes cuidarte de distinguir dos tipos de aprendizaje:

- **Fuerza de fluidez**: recuperación del conocimiento en el momento
- **Fuerza de almacenamiento**: retención del conocimiento a largo plazo

La fluidez puede dar al usuario una sensación ilusoria de maestría, pero la fuerza de almacenamiento es la verdadera meta. Intenta diseñar lecciones que construyan retención a largo plazo mediante la dificultad deseable:

- Usando práctica de recuperación (recordar de memoria)
- Espaciado (distribuir la práctica en el tiempo)
- Intercalado (mezclar temas distintos pero relacionados en la práctica — solo para práctica de skills)

## Lecciones

Una lección es lo principal que produces — la unidad en la que el conocimiento y los skills llegan al usuario. Cada lección es un archivo HTML autocontenido, guardado en `./lessons/` y titulado `0001-<nombre-en-kebab-case>.html`, con el número incrementando cada vez.

Una lección debe ser **hermosa** — tipografía y layout limpios y legibles — porque el usuario volverá a ellas más tarde para repasar. Piensa en Tufte.

La lección debe ser corta y completable muy rápido. La memoria de trabajo de los aprendices es muy pequeña, y tenemos que mantenernos dentro de ella. Pero cada lección debe dar al usuario una única victoria tangible sobre la que construir. Debe estar directamente ligada a la misión y estar en la zona de desarrollo próximo del usuario.

Si es posible, abrir el archivo de la lección para el usuario ejecutando un comando de CLI.

Cada lección debe enlazar mediante anclas HTML a otras lecciones y documentos de referencia.

Cada lección debe recomendar una fuente primaria para que el usuario la lea o vea. Debe ser el recurso de mayor calidad y confianza que hayas encontrado sobre el tema.

Cada lección debe contener un recordatorio de hacer preguntas de seguimiento al agente. El agente es su profesor y puede ayudar con cualquier cosa que no quede clara.

## Assets

Las lecciones se construyen a partir de **componentes** reutilizables, almacenados en `./assets/`: hojas de estilos, widgets de quiz, simuladores, ayudantes de diagramas — cualquier cosa que una segunda lección pueda reutilizar.

La reutilización es el default, no la excepción. Antes de escribir una lección, leer `./assets/` y construir desde los componentes que ya están ahí. Cuando una lección necesite algo nuevo y reutilizable, escribirlo como componente en `./assets/` y enlazarlo — nunca incluir inline código que una lección futura duplicaría.

Una hoja de estilos compartida es el primer componente que todo workspace se gana: cada lección la enlaza, de modo que las lecciones se vean como un curso consistente y no como una pila de piezas sueltas. A medida que crece el workspace, también debe crecer la librería de componentes.

## La Misión

Cada lección debe estar ligada a la misión — la razón por la que el usuario está interesado en aprender el tema.

Si el usuario no tiene clara la misión, o `MISSION.md` no está poblado, tu primer trabajo debe ser preguntarle por qué quiere aprender esto.

No entender la misión significará que la adquisición de conocimiento no está anclada en metas del mundo real. Las lecciones se sentirán demasiado abstractas. No tendrás forma de juzgar qué debería hacer el usuario a continuación.

Las misiones pueden cambiar a medida que el usuario desarrolla más skills y conocimiento. Es normal — asegúrate de actualizar `MISSION.md` y añadir un registro de aprendizaje que capture el cambio. Confirmar con el usuario antes de cambiar la misión.

## Zona de desarrollo próximo

En cada lección, el usuario debe sentir siempre que se le desafía 'justo lo suficiente'.

El usuario puede especificar exactamente qué quiere aprender. Si no lo hace, deducir su zona de desarrollo próximo:

- Leyendo sus `learning-records`
- Deduciendo qué es lo correcto que enseñarle según su misión
- Enseñando lo más relevante que quepa en su zona de desarrollo próximo

## Conocimiento

Las lecciones deben diseñarse alrededor de un skill que el usuario va a aprender. El conocimiento de la lección debe ser solo el necesario para adquirir ese skill. Enseñas primero el conocimiento, y luego haces que el usuario practique los skills mediante un bucle de feedback interactivo.

El conocimiento debe reunirse primero de recursos de confianza. Usar `RESOURCES.md` para llevar el registro. Las lecciones deben estar sembradas de citas — enlaces a recursos externos que respalden cualquier afirmación hecha. Esto aumenta la confiabilidad de la lección.

Para adquirir conocimiento, la dificultad es el enemigo. Se come la memoria de trabajo que necesitas para entender.

## Skills

Si el conocimiento va de adquisición, los skills van de durabilidad y flexibilidad. Haz que el conocimiento se quede.

Para la adquisición de skills, la dificultad es la herramienta. La recuperación con esfuerzo es lo que construye fuerza de almacenamiento. Los skills deben enseñarse mediante lecciones interactivas. Hay varias herramientas a tu disposición:

- Lecciones interactivas, con quizzes y tareas ligeras en el navegador
- Lecciones que guían al usuario por una lista de pasos del mundo real (por ejemplo, posturas de yoga)

Cada una de ellas debe basarse en un **bucle de feedback**, donde el usuario recibe feedback sobre su desempeño. Ese bucle debe ser lo más ajustado posible, dando feedback de inmediato — e idealmente de forma automática.

Para los quizzes, cada respuesta debe tener exactamente el mismo número de palabras (y de caracteres, si es posible). No dar al usuario ninguna pista sobre la respuesta mediante el formato.

## Adquirir sabiduría

La sabiduría viene de la interacción real con el mundo — poner a prueba tus skills fuera del entorno de aprendizaje.

Cuando el usuario haga una pregunta que parezca requerir sabiduría, tu postura por defecto debe ser intentar responder — pero en última instancia delegar en una **comunidad**.

Una comunidad es un lugar (online u offline) donde el usuario puede poner a prueba sus skills en el mundo real. Puede ser un foro, un subreddit, una clase presencial (si el presupuesto lo permite) o un grupo de interés local.

Debes intentar encontrar comunidades de alta reputación a las que el usuario pueda unirse. Si el usuario expresa que no quiere unirse a una comunidad, respétalo.

## Documentos de referencia

Mientras creas lecciones, debes crear también documentos de referencia. Las lecciones pueden referenciar estos documentos — son útiles para rastrear unidades crudas de conocimiento útiles entre lecciones.

Las lecciones rara vez se revisitarán después — los documentos de referencia sí. Deben ser la esencia comprimida de la lección, en un formato diseñado para consulta rápida.

Algunos temas de aprendizaje se prestan a la referencia:

- Sintaxis y snippets de código para programación
- Algoritmos y diagramas de flujo para procesos
- Posturas y secuencias de yoga para yoga
- Ejercicios y rutinas para fitness
- Glosarios para cualquier tema con nomenclatura propia

Los glosarios, en particular, son una referencia esencial. Una vez creado uno, debe respetarse en cada lección. Usar el formato de [formato-glosario.md](references/formato-glosario.md).

## `NOTES.md`

El usuario a veces expresará preferencias sobre cómo quiere que se le enseñe, o cosas que debes tener en mente. Este es el lugar para registrar esas preferencias, de modo que puedas volver a ellas al diseñar lecciones o trabajar con el usuario.
