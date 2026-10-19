# Despliegue nativo en `server` (sin Docker)

Contrato con Apache sin cambios: `ProxyPass / http://192.168.111.10:4002/`.
Requiere autorización de jrios y ventana acordada antes de tocar producción.

## 1. Construir (en la máquina de desarrollo)

    ./deploy/build-release.sh        # genera sauken-portal.tar.gz

## 2. Preparar server (una sola vez)

    # UID a confirmar con getent en los 9 equipos (regla 7); propuesto: 2004
    useradd -r -u 2004 -s /usr/sbin/nologin sauken-portal
    install -d -o sauken-portal -g sauken-portal /srv/sauken-portal
    install -d -m 750 -o root -g sauken-portal /etc/sauken-portal
    install -m 640 -o root -g sauken-portal /dev/null /etc/sauken-portal/portal.env
    # Completar portal.env con las variables de .env.example (SMTP_PASS lo entrega jrios)
    cp deploy/sauken-portal.service /etc/systemd/system/ && systemctl daemon-reload

## 3. Probar en el puerto 4012 (sin tocar producción)

    tar -xzf sauken-portal.tar.gz -C /srv/sauken-portal
    sudo -u sauken-portal env $(cat /etc/sauken-portal/portal.env | xargs) PORT=4012 node /srv/sauken-portal/server.js
    curl -I http://127.0.0.1:4012/

## 4. Corte (segundos)

    systemctl stop sauken-frontend && systemctl disable sauken-frontend
    systemctl enable --now sauken-portal
    curl -s -o /dev/null -w '%{http_code}\n' https://sauken.com.ar/
    journalctl -u sauken-portal -n 50

Reversa: `systemctl stop sauken-portal && systemctl start sauken-frontend`
(la imagen Docker anterior sigue en el host).

## Notas
- Tras un `zypper dup` Node puede cambiar de versión mayor: reprobar el sitio.
- Probar el formulario con una casilla propia y verificar `spf/dkim/dmarc=pass`.
- Registrar el cambio en `infra/cambios/AAAA-MM-DD.md` (lo hace infraestructura o jrios).
