---
name: implement
description: Implementa trabajo definido por una spec o tickets con TDD y revisión. Usar cuando el usuario invoque explícitamente el skill para ejecutar una unidad de trabajo ya especificada.
---

# Implementar

1. Leer completamente la spec o el ticket, sus comentarios y dependencias. Confirmar que está desbloqueado.
2. Inspeccionar el estado y las instrucciones del repositorio; preservar cambios ajenos.
3. Acordar los seams de test y aplicar `$tdd` en slices verticales.
4. Ejecutar typecheck y tests individuales con frecuencia; ejecutar la suite completa una vez al final.
5. Aplicar `$code-review` al diff final y resolver los hallazgos dentro del alcance.
6. Crear el commit en el branch actual e informar cambios y validación. No hacer push ni abrir PR sin solicitud explícita.
