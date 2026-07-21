---
name: git-guardrails-codex
description: Añade guardrails de Git para sesiones de Codex mediante instrucciones y un verificador local. Usar al proteger un repositorio contra push, reset, clean, force o borrado accidental.
---

# Configurar guardrails de Git para Codex

1. Leer las instrucciones existentes y detectar políticas de Git ya definidas.
2. Proponer un bloque para `AGENTS.md` que exija autorización explícita antes de `push`, force-push, `reset --hard`, `clean`, borrado de branches, cierre de PRs o publicación externa; prohibir `git add .` y preservar cambios ajenos.
3. Ofrecer [block-dangerous-git.sh](scripts/block-dangerous-git.sh) como verificador o wrapper manual para shells compatibles. Presentarlo como control manual, no como hook automático.
4. Mostrar el diff y solicitar confirmación antes de editar instrucciones compartidas.
5. Probar el script con comandos simulados que no modifiquen el repositorio.
