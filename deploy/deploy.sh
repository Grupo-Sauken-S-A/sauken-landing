#!/usr/bin/env bash
# Despliegue del portal en server (Linux). Ejecutar como root desde el repo clonado:
#
#   cd /tmp && rm -rf sauken-build && git clone https://github.com/Grupo-Sauken-S-A/sauken-landing.git sauken-build
#   bash /tmp/sauken-build/deploy/deploy.sh
#
# Qué hace:
#   1. Compila el paquete (el sitio sigue funcionando mientras tanto).
#   2. Lo valida y lo extrae en una carpeta nueva, sin tocar la instalación actual.
#   3. Corte de segundos: detiene el servicio, intercambia las carpetas y lo inicia.
#   4. Verifica el sitio. Si falla, vuelve solo a la versión anterior.
#
# No modifica la unidad systemd, el vhost de Apache ni /etc/sauken-portal/portal.env.

set -euo pipefail

SERVICE="sauken-portal"
SERVICE_USER="sauken-portal"
INSTALL_DIR="/srv/sauken-portal"
NEW_DIR="${INSTALL_DIR}.new"
PREV_DIR="${INSTALL_DIR}.prev"
LOCAL_URL="http://127.0.0.1:4002"
PUBLIC_URL="https://sauken.com.ar"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

log()  { printf '\n\033[1;34m==> %s\033[0m\n' "$*"; }
fail() { printf '\n\033[1;31mERROR: %s\033[0m\n' "$*" >&2; exit 1; }

[ "$(id -u)" -eq 0 ] || fail "Ejecutar como root."
command -v node >/dev/null || fail "Node no está instalado."
command -v systemctl >/dev/null || fail "systemctl no disponible."
id "$SERVICE_USER" >/dev/null 2>&1 || fail "Falta el usuario $SERVICE_USER (ver GUIA-INFRAESTRUCTURA.md, sección 4)."
[ -s /etc/sauken-portal/portal.env ] || fail "Falta /etc/sauken-portal/portal.env."

http_code() { curl -s -o /dev/null -m 15 -w '%{http_code}' "$1" || true; }

wait_for_local() {
  local i
  for i in $(seq 1 30); do
    [ "$(http_code "$LOCAL_URL/")" = "200" ] && return 0
    sleep 1
  done
  return 1
}

rollback() {
  printf '\n\033[1;31mFalló la verificación: volviendo a la versión anterior...\033[0m\n' >&2
  systemctl stop "$SERVICE" || true
  if [ -d "$PREV_DIR" ]; then
    rm -rf "$INSTALL_DIR"
    mv "$PREV_DIR" "$INSTALL_DIR"
    systemctl start "$SERVICE" || true
    if wait_for_local; then
      echo "Versión anterior restaurada y respondiendo."
    else
      echo "ATENCIÓN: la versión anterior no responde. Revisar: journalctl -u $SERVICE -n 50 --no-pager" >&2
    fi
  else
    echo "No hay versión anterior que restaurar; se reinicia el servicio con lo que haya instalado." >&2
    systemctl start "$SERVICE" || true
  fi
  exit 1
}

# ---------------------------------------------------------------- 1. compilar
log "1/4 Compilando (el sitio sigue funcionando; tarda unos 4 minutos)"
cd "$REPO_DIR"
echo "Commit a desplegar: $(git log --oneline -1 2>/dev/null || echo 'desconocido')"
bash ./deploy/build-release.sh

PKG="$REPO_DIR/sauken-portal.tar.gz"
[ -s "$PKG" ] || fail "No se generó $PKG. No se tocó la instalación actual."
tar -tzf "$PKG" | grep -qE '(^|/)server\.js$' || fail "El paquete no contiene server.js. No se tocó la instalación actual."
echo "Paquete OK: $(du -h "$PKG" | cut -f1)"

# ---------------------------------------------------------- 2. preparar carpeta
log "2/4 Extrayendo en $NEW_DIR (sin tocar la instalación actual)"
rm -rf "$NEW_DIR"
mkdir -p "$NEW_DIR"
tar -xzf "$PKG" -C "$NEW_DIR"
[ -f "$NEW_DIR/server.js" ] && [ -d "$NEW_DIR/.next" ] || fail "La extracción quedó incompleta. No se tocó la instalación actual."
mkdir -p "$NEW_DIR/.next/cache"
chown -R "$SERVICE_USER:$SERVICE_USER" "$NEW_DIR"

# ------------------------------------------------------------------- 3. corte
log "3/4 Reemplazando (corte de segundos)"
trap rollback ERR
systemctl stop "$SERVICE" || true
rm -rf "$PREV_DIR"
[ -d "$INSTALL_DIR" ] && mv "$INSTALL_DIR" "$PREV_DIR"
mv "$NEW_DIR" "$INSTALL_DIR"
systemctl start "$SERVICE"

# -------------------------------------------------------------- 4. verificar
log "4/4 Verificando"
wait_for_local || { echo "El servicio no respondió en 30 s en $LOCAL_URL"; rollback; }

for path in / /infraestructura /landing /gracias; do
  code="$(http_code "$LOCAL_URL$path")"
  echo "local   $code  $path"
  [ "$code" = "200" ] || rollback
done
for path in / /infraestructura /landing; do
  code="$(http_code "$PUBLIC_URL$path")"
  echo "público $code  $path"
  [ "$code" = "200" ] || rollback
done
trap - ERR

systemctl is-active --quiet "$SERVICE" || rollback

log "Despliegue completo"
echo "Versión anterior conservada en $PREV_DIR (se puede borrar cuando se confirme que todo está bien):"
echo "  rm -rf $PREV_DIR"
echo "Reversa manual, si hiciera falta:"
echo "  systemctl stop $SERVICE && rm -rf $INSTALL_DIR && mv $PREV_DIR $INSTALL_DIR && systemctl start $SERVICE"
