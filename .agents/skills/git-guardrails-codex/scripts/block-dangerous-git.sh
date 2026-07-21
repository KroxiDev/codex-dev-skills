#!/usr/bin/env bash
# Verificador manual: recibe el comando como argumentos o por stdin.

set -euo pipefail

if (( $# )); then
  COMMAND="$*"
else
  INPUT=$(cat)
  if command -v jq >/dev/null 2>&1 && jq -e '.tool_input.command' >/dev/null 2>&1 <<<"$INPUT"; then
    COMMAND=$(jq -r '.tool_input.command' <<<"$INPUT")
  else
    COMMAND="$INPUT"
  fi
fi

DANGEROUS_PATTERNS=(
  "git push"
  "git reset --hard"
  "git clean -fd"
  "git clean -f"
  "git branch -D"
  "git checkout \."
  "git restore \."
  "push --force"
  "reset --hard"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qE "$pattern"; then
    echo "BLOQUEADO: '$COMMAND' coincide con el patrón peligroso '$pattern'. Solicita autorización explícita." >&2
    exit 2
  fi
done

exit 0
