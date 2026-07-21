---
name: code-review
description: Revisa un diff contra los estándares del repositorio y la especificación de origen. Usar para revisar branches, PRs, cambios en progreso o cambios desde un commit, tag o merge-base.
---

# Revisión de código en dos ejes

Revisar el diff entre `HEAD` y un punto fijo en dos ejes independientes:

- **Estándares:** comprobar los estándares documentados y una base de code smells.
- **Especificación:** comprobar que el cambio implemente el issue, PRD o spec de origen.

Ejecutar ambos ejes en paralelo con subagentes independientes para evitar contaminación de contexto. Si no hay capacidad para dos subagentes, realizar dos pasadas separadas y no mezclar ni reordenar sus hallazgos.

## Proceso

1. Fijar el punto de comparación indicado por el usuario. Si no existe, pedirlo. Validarlo con `git rev-parse <punto>` y comprobar que `git diff <punto>...HEAD` no esté vacío. Registrar también `git log <punto>..HEAD --oneline`.
2. Localizar la especificación, en este orden: referencias de issues o PRs en los commits; ruta indicada por el usuario; documentos bajo `docs/`, `specs/` o `.scratch/` relacionados con el branch. Si no existe, confirmarlo con el usuario y omitir solo ese eje.
3. Localizar estándares como `AGENTS.md`, `CONTRIBUTING.md` o `CODING_STANDARDS.md`. Las reglas del repositorio prevalecen y se omite lo que ya imponga una herramienta automática.
4. Entregar al revisor de estándares el comando de diff, los commits, las fuentes normativas y la base completa de smells. Pedir hallazgos por archivo y hunk, con la regla citada; distinguir violaciones documentadas de juicios heurísticos y mantener el informe por debajo de 400 palabras.
5. Entregar al revisor de especificación el mismo diff y la spec completa. Pedir requisitos ausentes o parciales, scope creep e implementaciones aparentemente incorrectas, citando la línea de la spec; mantener el informe por debajo de 400 palabras.
6. Presentar los informes bajo `## Estándares` y `## Especificación`, sin fusionarlos ni volver a priorizarlos. Cerrar con el total y el peor hallazgo dentro de cada eje, sin elegir un ganador entre ambos.

## Base de smells

Tratarlos siempre como juicios, nunca como infracciones duras:

- **Mysterious Name:** el nombre no revela qué representa; renombrar o aclarar el diseño.
- **Duplicated Code:** se repite la misma forma lógica; extraer y reutilizar.
- **Feature Envy:** un método usa más datos ajenos que propios; moverlo junto a esos datos.
- **Data Clumps:** campos o parámetros viajan siempre juntos; agruparlos en un tipo.
- **Primitive Obsession:** un primitivo representa un concepto de dominio; crear un tipo pequeño.
- **Repeated Switches:** se repite el mismo `switch` o cascada; centralizarlo o usar polimorfismo.
- **Shotgun Surgery:** un cambio obliga a editar muchos lugares; reunir lo que cambia junto.
- **Divergent Change:** un module cambia por motivos no relacionados; separar responsabilidades.
- **Speculative Generality:** se añade abstracción sin necesidad de la spec; eliminarla o inlinearla.
- **Message Chains:** el caller navega cadenas largas; ocultar el recorrido tras un método.
- **Middle Man:** una capa solo delega; llamar directamente al destino real.
- **Refused Bequest:** un subtipo ignora gran parte de lo heredado; preferir composición.

No modificar, publicar ni resolver comentarios durante una revisión salvo solicitud explícita.
