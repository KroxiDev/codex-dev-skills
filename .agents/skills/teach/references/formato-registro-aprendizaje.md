# Formato de registro de aprendizaje

Los registros de aprendizaje viven en `./learning-records/` y usan numeración secuencial: `0001-slug.md`, `0002-slug.md`, etc. Crear el directorio de forma diferida — solo cuando se escriba el primer registro.

Son el equivalente docente de los ADRs: capturan lecciones no obvias, insights clave y conocimiento previo declarado que dirigirá las sesiones futuras. Se usan para calcular la zona de desarrollo próximo.

## Plantilla

```md
# {Título corto de lo aprendido o establecido}

{1-3 frases: qué se aprendió (o qué conocimiento previo se estableció), y por qué importa para las sesiones futuras.}
```

Ese es todo el formato. Un registro de aprendizaje puede ser un solo párrafo. El valor está en registrar _que_ esto ahora se sabe y _por qué_ cambia lo que enseñar a continuación — no en rellenar secciones.

## Secciones opcionales

Incluirlas solo cuando aporten valor genuino. La mayoría de los registros no las necesitarán.

- Frontmatter de **Status** (`active | superseded by LR-NNNN`) — útil cuando un entendimiento anterior resulta estar equivocado y se reemplaza.
- **Evidencia** — cómo demostró el usuario el entendimiento (una pregunta respondida, un ejercicio completado, experiencia previa citada). Útil cuando la afirmación podría revisitarse.
- **Implicaciones** — qué desbloquea o descarta esto para las sesiones futuras. Vale la pena registrarlo cuando no es obvio.

## Numeración

Escanear `./learning-records/` en busca del número más alto existente e incrementar en uno.

## Cuándo escribir un registro de aprendizaje

Escribir uno cuando cualquiera de estas condiciones sea cierta:

1. **El usuario demostró entendimiento genuino de algo no trivial** — no mera exposición, sino evidencia de que puede usar el concepto correctamente. Esto fija un suelo nuevo para lo que enseñar a continuación.
2. **El usuario reveló conocimiento previo** — "Ya sé X." Registrarlo para que las sesiones futuras no lo re-enseñen. Registrar también la _profundidad_ declarada.
3. **Se corrigió una idea equivocada** — el usuario creía antes algo incorrecto y ahora ve por qué. Estas son de alto valor: predicen futuros tropiezos en temas relacionados.
4. **La misión cambió en respuesta al aprendizaje** — el usuario descubrió que le importaba algo distinto de lo que creía. Enlazar con [[MISSION.md]] y actualizarla.

### Qué _no_ califica

- Material que meramente se cubrió. Cubrir no es aprender. Esperar a la evidencia.
- Cualquier cosa ya capturada de forma escueta en [[GLOSSARY.md]] como definición de un término. No duplicar.
- Logs de actividad sesión a sesión. Los registros de aprendizaje no son un diario — son insights de grado de decisión.

## Supersesión

Cuando un registro posterior contradiga uno anterior (el entendimiento del usuario se profundizó o se corrigió), marcar el registro viejo con `Status: superseded by LR-NNNN` en vez de borrarlo. La historia de cómo evolucionó el entendimiento es en sí misma señal útil.
