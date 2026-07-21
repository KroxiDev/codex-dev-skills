# Brief para agente

Es el contrato autoritativo para el agente AFK; body y discusión son contexto. En un issue describe qué construir; en un PR, qué falta corregir o completar en el diff existente.

## Principios

- **Durabilidad:** describir interfaces, tipos y contratos. Puede nombrar tipos, firmas o shapes concretos, pero no rutas, líneas ni una estructura interna que pueda cambiar.
- **Comportamiento:** decir qué debe hacer el sistema, no qué archivos abrir ni qué pasos de implementación seguir.
- **Criterios completos:** cada criterio debe ser concreto, independiente y verificable.
- **Límites explícitos:** enumerar lo que no pertenece al trabajo para evitar gold-plating.

```markdown
## Brief para agente

**Categoría:** bug | enhancement
**Resumen:** <una línea>

**Comportamiento actual:**
<qué ocurre hoy; en un PR, estado real del diff>

**Comportamiento deseado:**
<qué debe ocurrir, incluidos casos límite y errores>

**Interfaces clave:**
- `<Tipo o función>` — contrato que cambia y motivo
- `<Shape de configuración>` — opciones requeridas

**Criterios de aceptación:**
- [ ] <criterio verificable>
- [ ] <criterio verificable>

**Fuera de alcance:**
- <límite explícito>
```

Un brief malo dice «arreglar el bug» y apunta a una línea. Uno bueno separa comportamiento actual y deseado, identifica contratos estables, cubre éxito y errores y define exactamente cuándo termina el trabajo.
