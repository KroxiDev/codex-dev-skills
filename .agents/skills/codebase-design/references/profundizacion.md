# Profundización

Profundizar un cluster de modules superficiales con el vocabulario de [SKILL.md](../SKILL.md).

## Categorías de dependencias

1. **In-process:** computación pura o estado en memoria, sin I/O. Fusionar los modules y probar directamente mediante la nueva interface; no hace falta adapter.
2. **Local sustituible:** existe un reemplazo local realista, como PGLite o un filesystem en memoria. Ejecutarlo en la suite; mantener el seam dentro de la implementation, no como port externo.
3. **Remota propia — Ports & Adapters:** servicio interno bajo control del equipo. Definir un port en el seam; inyectar HTTP, gRPC o queue en producción y un adapter en memoria en tests. La lógica pertenece al deep module.
4. **Externa real — mock:** servicio de terceros. Inyectar su port y proporcionar un mock adapter controlado en tests.

## Disciplina de seams

- Un adapter implica un seam hipotético; dos adapters justifican uno real.
- Un deep module puede tener seams internos privados. No exponerlos en la interface externa solo porque los tests los usen.

## Testing: reemplazar, no acumular

- Eliminar los tests unitarios de los modules superficiales cuando la nueva interface ya cubra su comportamiento.
- Probar outcomes observables mediante la interface del deep module, nunca estado interno.
- Conservar tests que sobrevivan a refactors internos; si cambian junto con la implementation, atraviesan el seam incorrecto.
