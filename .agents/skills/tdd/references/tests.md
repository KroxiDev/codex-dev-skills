# Tests buenos y malos

## Tests buenos

**Estilo integración**: Testear a través de interfaces reales, no de mocks de partes internas.

```typescript
// BIEN: Testea comportamiento observable
test("user can checkout with valid cart", async () => {
  const cart = createCart();
  cart.add(product);
  const result = await checkout(cart, paymentMethod);
  expect(result.status).toBe("confirmed");
});
```

Características:

- Testea comportamiento que importa a usuarios/callers
- Usa solo la API pública
- Sobrevive refactors internos
- Describe el QUÉ, no el CÓMO
- Una aserción lógica por test

## Tests malos

**Tests de detalles de implementación**: Acoplados a la estructura interna.

```typescript
// MAL: Testea detalles de implementación
test("checkout calls paymentService.process", async () => {
  const mockPayment = jest.mock(paymentService);
  await checkout(cart, payment);
  expect(mockPayment.process).toHaveBeenCalledWith(cart.total);
});
```

Señales de alarma:

- Mockear colaboradores internos
- Testear métodos privados
- Asertar sobre número u orden de llamadas
- El test se rompe al refactorizar sin cambio de comportamiento
- El nombre del test describe el CÓMO y no el QUÉ
- Verificar por medios externos en vez de por la interface

```typescript
// MAL: Se salta la interface para verificar
test("createUser saves to database", async () => {
  await createUser({ name: "Alice" });
  const row = await db.query("SELECT * FROM users WHERE name = ?", ["Alice"]);
  expect(row).toBeDefined();
});

// BIEN: Verifica a través de la interface
test("createUser makes user retrievable", async () => {
  const user = await createUser({ name: "Alice" });
  const retrieved = await getUser(user.id);
  expect(retrieved.name).toBe("Alice");
});
```

**Tests tautológicos**: El valor esperado reformula la implementación, así que el test pasa por construcción.

```typescript
// MAL: El valor esperado se recalcula igual que lo calcula el código
test("calculateTotal sums line items", () => {
  const items = [{ price: 10 }, { price: 5 }];
  const expected = items.reduce((sum, i) => sum + i.price, 0);
  expect(calculateTotal(items)).toBe(expected);
});

// BIEN: El valor esperado es un literal independiente y conocido
test("calculateTotal sums line items", () => {
  expect(calculateTotal([{ price: 10 }, { price: 5 }])).toBe(15);
});
```
