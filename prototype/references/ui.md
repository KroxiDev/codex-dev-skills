# Prototipo de UI

Generar varias variantes radicalmente distintas en una ruta y alternarlas con una barra flotante. Si la pregunta es de lógica o estado, usar [logica.md](logica.md).

## Elegir la forma

- **A — página existente, preferida:** mantener ruta, datos, parámetros y auth; cambiar solo el subtree renderizado mediante `?variant=`. Una sección nueva que pertenece naturalmente a una página existente también usa A.
- **B — página nueva, último recurso:** crear una ruta descartable que siga el router del proyecto e incluya `prototype` en su nombre. Usarla solo si no existe una página anfitriona plausible.

## Proceso

1. Declarar la pregunta y crear tres variantes por defecto, con máximo de cinco. Registrar en una línea ruta y mecanismo de selección.
2. Respetar propósito, datos y sistema visual del proyecto. Exportar cada variante con un nombre claro. Deben diferir en layout, jerarquía de información y affordance principal, no solo en colores o copy; rehacer las demasiado parecidas.
3. Montarlas detrás de un selector único que lea `?variant=A`, conserve el fetching existente y renderice una sola variante.
4. Crear un switcher compartido fijo abajo y centrado: flecha anterior, label y flecha siguiente, con wrap. Actualizar el parámetro mediante el router para que la URL sea estable y compartible. Aceptar `←` y `→`, salvo cuando el foco esté en `input`, `textarea` o `contenteditable`. Ocultarlo en builds de producción.
5. Entregar la URL y las keys al usuario. Recoger también combinaciones entre variantes.
6. Registrar ganadora y motivo. En A, incorporar la ganadora en la página existente; en B, promoverla a una ruta real. Retirar switcher y perdedoras de `main`, y conservar el conjunto completo en el branch descartable indicado por [SKILL.md](../SKILL.md).

No compartir layouts que impidan diferencias reales, conectar mutaciones de producción ni promover directamente el código del prototipo: reescribir la decisión elegida con tests y error handling.
