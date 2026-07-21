---
name: wizard
description: Genera un wizard Bash interactivo para procedimientos manuales, migraciones o configuración externa. Usar cuando el usuario invoque explícitamente el skill para automatizar pasos humanos con confirmaciones y captura segura de valores.
---

# Crear un wizard

Un wizard guía a una persona por setup de terceros, migración única o transición A→B: abre URLs, indica clicks, captura valores, escribe `.env` y secrets/variables, confirma cada etapa y muestra tiempo restante. La UX ya vive en [template.sh](assets/template.sh); editar solo las etapas bajo `STAGES`.

1. Leer el repositorio antes de preguntar. Para setup, revisar `.env*`, README, `docker-compose*`, config del framework y todas las referencias `secrets.*` y `vars.*` en `.github/workflows/`. Para migración, identificar estado actual, objetivo y acciones irreversibles.
2. Presentar y confirmar la lista ordenada de etapas. Para cada valor, conocer de dónde se obtiene, dónde se escribe, si es secreto y si la etapa no produce valor.
3. Mapear el recorrido exacto de cada etapa: URL, navegación, acción, ubicación del valor y variable destino. Consultar documentación vigente o preguntar si algún paso real se desconoce; no inventar UI ni comandos.
4. Copiar el template al destino y reemplazar el ejemplo por un `stage` por paso. Usar `stage`, `say`/`step`, `open_url`, `ask`/`ask_secret`, `write_env`, `set_secret`/`set_var`, `pause`/`confirm`. Ajustar `TOTAL_STAGES` y `TOTAL_MINUTES` con estimaciones honestas.
5. Abrir la URL antes de pedir un valor; usar `ask_secret` para secretos; persistir con `write_env`; enviar a CI solo valores que realmente use; confirmar toda acción irreversible. Mantener una tarea enfocada por pantalla y no editar la librería anterior al marcador.
6. Ejecutar `bash -n`, `shellcheck` si existe y `chmod +x`. No ejecutar el wizard completo: inspeccionar estáticamente que cada valor llegue a su destino y que cada nombre de secret coincida exactamente con CI.
7. Informar cómo ejecutarlo. Mantenerlo efímero por defecto; si el usuario quiere un camino repetible, conservarlo, enlazarlo desde el README y crear commit cuando esté autorizado.
