---
name: ubiquitous-language
description: Extrae y mantiene un glosario de lenguaje ubicuo al estilo DDD. Usar cuando el usuario invoque explícitamente el skill para definir términos de dominio, resolver ambigüedades o crear un glosario compartido.
---

# Lenguaje ubicuo

1. Revisar la conversación y los documentos de dominio existentes.
2. Detectar ambigüedades, sinónimos, términos vagos y conceptos sobrecargados.
3. Elegir términos canónicos y agruparlos por subdominio, ciclo de vida o actor.
4. Escribir o actualizar `UBIQUITOUS_LANGUAGE.md` con tablas de término, definición y aliases a evitar; añadir relaciones, un diálogo breve y ambigüedades señaladas.
5. Resumir los cambios en la conversación.

Definir qué es cada concepto en una sola frase. Excluir conceptos genéricos de programación salvo que tengan significado específico. Al actualizar, conservar decisiones válidas e incorporar el conocimiento nuevo.
