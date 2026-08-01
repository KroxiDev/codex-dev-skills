---
name: git-guardrails-claude-code
description: Configura hooks de Claude Code para bloquear comandos git peligrosos (push, reset --hard, clean, branch -D, etc.) antes de que se ejecuten. Usar cuando el usuario quiera prevenir operaciones destructivas de git, añadir hooks de seguridad de git, o bloquear git push/reset en Claude Code.
---

# Configurar guardrails de Git

Configura un hook PreToolUse que intercepta y bloquea comandos git peligrosos antes de que Claude los ejecute.

## Qué se bloquea

- `git push` (todas las variantes, incluida `--force`)
- `git reset --hard`
- `git clean -f` / `git clean -fd`
- `git branch -D`
- `git checkout .` / `git restore .`

Al bloquearse, Claude ve un mensaje que le dice que no tiene autoridad para acceder a estos comandos.

## Pasos

### 1. Preguntar el alcance

Preguntar al usuario: ¿instalar para **este proyecto solamente** (`.claude/settings.json`) o para **todos los proyectos** (`~/.claude/settings.json`)?

### 2. Copiar el script del hook

El script incluido está en: [scripts/block-dangerous-git.sh](scripts/block-dangerous-git.sh)

Copiarlo a la ubicación de destino según el alcance:

- **Proyecto**: `.claude/hooks/block-dangerous-git.sh`
- **Global**: `~/.claude/hooks/block-dangerous-git.sh`

Hacerlo ejecutable con `chmod +x`.

### 3. Añadir el hook a la configuración

Añadir al archivo de configuración correspondiente:

**Proyecto** (`.claude/settings.json`):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-dangerous-git.sh"
          }
        ]
      }
    ]
  }
}
```

**Global** (`~/.claude/settings.json`):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/block-dangerous-git.sh"
          }
        ]
      }
    ]
  }
}
```

Si el archivo de configuración ya existe, fusionar el hook dentro del array `hooks.PreToolUse` existente — no sobrescribir otras configuraciones.

### 4. Preguntar por personalización

Preguntar si el usuario quiere añadir o quitar patrones de la lista de bloqueo. Editar el script copiado en consecuencia.

### 5. Verificar

Ejecutar una prueba rápida:

```bash
echo '{"tool_input":{"command":"git push origin main"}}' | <ruta-al-script>
```

Debe salir con código 2 e imprimir un mensaje BLOQUEADO en stderr.
