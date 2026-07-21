# Cuándo usar mocks

Usar mocks solo en límites del sistema: APIs externas, tiempo, aleatoriedad y, cuando no exista un reemplazo realista, bases de datos o filesystem.

No mockear modules propios, colaboradores internos ni elementos controlados por el equipo. Preferir dependency injection y adapters específicos por operación frente a un fetcher genérico con lógica condicional.

Cada mock debe devolver una forma concreta, revelar qué operación externa usa el test y mantener seguridad de tipos.
