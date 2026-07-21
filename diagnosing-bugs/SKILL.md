---
name: diagnosing-bugs
description: Diagnostica bugs difíciles y regresiones de rendimiento mediante un bucle reproducible. Usar cuando el usuario pida diagnosticar o debuggear algo roto, lento, intermitente o con fallos.
---

# Diagnosticar bugs

Aplicar todas las fases; omitir una solo con justificación explícita. Leer `CONTEXT.md` y los ADRs pertinentes cuando existan.

## 1. Construir el feedback loop

Crear un único comando que ejercite la ruta real del bug y pueda detectar el síntoma exacto. Intentar, aproximadamente en este orden: test fallido; script HTTP; CLI con fixture y snapshot; navegador headless; replay de una traza; harness descartable; property/fuzz loop; `git bisect run`; comparación diferencial; y, como último recurso, [hitl-loop.template.sh](scripts/hitl-loop.template.sh).

Volver la señal:

- **red-capable:** falla por el síntoma informado, no solo por un error cercano;
- **determinista:** produce el mismo veredicto; para flakes, elevar y fijar la tasa de reproducción;
- **rápida:** tarda segundos, no minutos;
- **ejecutable por el agente:** ya fue ejecutada al menos una vez y se puede repetir sin ayuda, salvo el mecanismo HITL.

No formular hipótesis antes de tener ese comando. Si no puede construirse, detenerse, enumerar lo intentado y pedir acceso, una captura reproducible o autorización para instrumentación temporal.

## 2. Reproducir y minimizar

Ejecutar el loop varias veces, capturar el síntoma exacto y reducir inputs, configuración, datos y pasos de a uno. Terminar cuando cada elemento restante sea necesario para mantenerlo en rojo.

## 3. Formular hipótesis

Producir entre tres y cinco hipótesis ordenadas. Cada una debe predecir un resultado falsable: «Si X es la causa, cambiar Y hará que el bug desaparezca o empeore». Mostrar la lista al usuario; si no responde, continuar con el orden propuesto.

## 4. Instrumentar

Probar una predicción y una variable por vez. Preferir debugger o REPL; después, logs dirigidos en los límites que distingan hipótesis. Etiquetar cada log temporal con un prefijo único `[DEBUG-...]`. Para rendimiento, medir una línea base y usar profiler, plan de consulta o bisección antes de corregir.

## 5. Corregir y fijar la regresión

Implementar solo si el usuario pidió el fix. Buscar un seam que reproduzca el patrón real. Si existe: convertir el repro mínimo en test rojo, ejecutar, aplicar el fix mínimo, comprobar green y volver a ejecutar el escenario original. Si no existe un seam correcto, documentarlo como hallazgo arquitectónico en vez de crear un test engañoso.

## 6. Limpiar y cerrar

Comprobar el repro original, el test de regresión y los checks pertinentes; eliminar todos los `[DEBUG-...]` y prototipos descartables. Exponer la causa confirmada. Solo después sugerir `$improve-codebase-architecture` si la arquitectura impidió un seam de test adecuado.
