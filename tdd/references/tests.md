# Tests buenos y malos

Un buen test observa comportamiento por una interface pública, expresa una capacidad del caller y sobrevive refactors internos. Usa valores esperados independientes y una sola idea lógica.

Señales de un test frágil:

- mockea colaboradores internos;
- prueba métodos privados o call counts;
- verifica por una vía lateral, como consultar directamente la base de datos;
- recalcula el resultado esperado con el mismo algoritmo;
- describe cómo está implementado en vez de qué comportamiento ofrece.

Preferir integration tests realistas en el seam acordado y comprobar resultados mediante la misma interface que usa el caller.
