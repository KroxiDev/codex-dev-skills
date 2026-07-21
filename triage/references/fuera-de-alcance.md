# Base de conocimiento fuera de alcance

`.out-of-scope/` conserva memoria institucional y evita volver a debatir enhancements rechazados. Usar un archivo kebab-case por **concepto**, no por issue; agrupar todas las solicitudes equivalentes.

```markdown
# <Concepto>

<Qué no soporta el proyecto.>

## Por qué está fuera de alcance

<Motivo sustantivo y durable, con constraints, ejemplos o código si ayudan.>

## Solicitudes anteriores

- <enlace> — <título>
```

El motivo debe referirse a scope, filosofía, constraints técnicos o estrategia. No usar circunstancias temporales como falta de tiempo.

Durante triage, leer todos los archivos y comparar por similitud conceptual, no solo keywords. Si hay coincidencia, mostrarla al maintainer y preguntar si mantiene la decisión:

- **Confirmar:** añadir el nuevo enlace y cerrar.
- **Reconsiderar:** borrar o actualizar el archivo y continuar el triage normal.
- **Distinguir:** si los casos no son equivalentes, continuar normalmente.

Escribir aquí solo cuando se rechaza como `wontfix` un enhancement, incluido un PR de enhancement. Nunca registrar bugs ni trabajo cerrado porque ya está implementado.
