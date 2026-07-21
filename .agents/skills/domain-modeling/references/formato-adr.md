# Formato de ADR

Guardar ADRs en `docs/adr/NNNN-<slug>.md`. Crear la carpeta solo al registrar la primera decisión.

```md
# <Título breve>

<Contexto, decisión y motivo en uno a tres párrafos.>
```

Agregar Estado, Opciones consideradas o Consecuencias solo si aportan información real. Incrementar el mayor número existente.

Registrar un ADR únicamente cuando la decisión sea costosa de revertir, sorprendente sin contexto y resultado de un trade-off real. Son candidatos: forma arquitectónica, integración entre contextos, tecnología con lock-in, límites, desviaciones deliberadas, restricciones invisibles y alternativas rechazadas no obvias.
