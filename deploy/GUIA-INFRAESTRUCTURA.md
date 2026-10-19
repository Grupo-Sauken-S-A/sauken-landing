# Reemplazo del portal sauken.com.ar en `server` — guía para infraestructura

Reemplazar el portal antiguo (contenedor Docker `sauken-frontend`, Next.js 14) por la versión nueva
(Next.js 16), ejecutada nativamente con Node bajo systemd, sin Docker.

- **Repositorio:** https://github.com/Grupo-Sauken-S-A/sauken-landing (rama `main`, público)
- **Qué NO cambia:** el vhost de Apache (`ProxyPass / http://192.168.111.10:4002/`), el DNS, el firewall ni la ruta `/infra/`.
- **Requiere** autorización de jrios y una ventana de corte (el corte dura segundos).

> ## ⚠️ No desinstalar Docker
> En `server` Docker también ejecuta los contenedores `nextcloud-*` (Sauken Nube). Solo se elimina lo del
> portal antiguo (contenedor, imagen, unidad y script `sauken-frontend`). **Nunca `docker system prune`.**

## 0. Cambios respecto del portal antiguo

| Tema | Antes | Ahora |
|---|---|---|
| Ejecución | Docker (`node:18-alpine`) | `node` nativo (Node ≥ 22; `server` tiene Node 24) bajo systemd |
| Correo del formulario | API de SendGrid (`SENDGRID_API_KEY`) | SMTP autenticado a Postfix local `127.0.0.1:587` (STARTTLS) |
| Remitente / destino | `web@sauken.com.ar` → `info@` | `soporte@sauken.com.ar` → `info@sauken.com.ar`, asunto `[Portal] …`, Reply-To del visitante |
| Secretos | `.env` copiado dentro de la imagen | `/etc/sauken-portal/portal.env` (root, modo 600), fuera del repo |
| Puerto | 4002 | 4002 (igual) |

El portal nuevo consulta `api.github.com` (versión de S-FiDE) cada 3 horas. Si `server` no sale a Internet, esa
etiqueta simplemente no se muestra; el sitio funciona igual.

## 1. Requisitos previos (verificar antes de empezar)

```bash
node -v                      # >= 22 (esperado: v24.x)
git --version
free -h                      # compilar en server necesita 1-2 GB libres (ver 3.B si no alcanza)
getent passwd 2004           # el UID propuesto debe estar libre en los 9 equipos (regla 7)
ls -l /etc/sauken-portal/portal.env      # debe existir: root:root, -rw-------
cut -d= -f1 /etc/sauken-portal/portal.env  # SMTP_HOST SMTP_PORT SMTP_TLS_SERVERNAME SMTP_USER SMTP_PASS MAIL_FROM
curl -s -o /dev/null -w '%{http_code}\n' https://sauken.com.ar/   # línea base: 200
```

`portal.env` ya está creado por jrios con `SMTP_HOST=127.0.0.1`, `SMTP_PORT=587`,
`SMTP_TLS_SERVERNAME=sauken.com.ar`, `SMTP_USER=portal`, `SMTP_PASS=***` y `MAIL_FROM=soporte@sauken.com.ar`.

## 2. Correo: cuenta `portal` y remitente (Postfix)

Es lo único que toca Postfix. Cambio chico y reversible, **sin reinicio** (`postmap` + `postfix reload`).

```bash
# 2.1 Cuenta SMTP "portal" (sin shell ni home), con la contraseña que ya está en portal.env
useradd -r -M -s /usr/sbin/nologin portal           # (o con UID fijo si corresponde, p. ej. -u 2004; verificar antes)
PW=$(sed -n 's/^SMTP_PASS=//p' /etc/sauken-portal/portal.env)
echo "portal:$PW" | chpasswd; unset PW

# 2.2 Autorizar a "portal" a enviar solo como soporte@
cp -a /etc/postfix/sender_login /etc/postfix/sender_login.bak-$(date +%F)
grep -n 'soporte@sauken.com.ar' /etc/postfix/sender_login   # si ya existe una línea, AGREGAR el login: "soporte@sauken.com.ar usuarioA,portal"
echo 'soporte@sauken.com.ar portal' >> /etc/postfix/sender_login   # solo si no existía la línea
postmap /etc/postfix/sender_login && postfix reload
```

Verificación (TLS real contra el certificado de `sauken.com.ar`):

```bash
openssl s_client -starttls smtp -connect 127.0.0.1:587 -servername sauken.com.ar </dev/null 2>/dev/null | grep -E 'Verify return|subject='
```

> **Hallazgo abierto (no incluido en este cambio):** `sender_access` tiene `sauken.com.ar OK`, que anula
> `reject_authenticated_sender_login_mismatch` (ver `pendientes.md`). Mientras siga así, la cuenta `portal`
> técnicamente podría enviar como cualquier `@sauken.com.ar`. Corregirlo es una decisión aparte de jrios
> (puede rechazar remitentes internos que hoy dependen de ese permiso) y debe probarse antes.

## 3. Construir la versión nueva

### 3.A Compilar en `server` (todo desde GitHub)

Compilar en un directorio temporal, con un usuario normal (no root). Necesita salida a Internet
(registro npm y fuentes de Google Fonts) y tarda unos 4 minutos.

```bash
git clone https://github.com/Grupo-Sauken-S-A/sauken-landing.git /tmp/sauken-build
cd /tmp/sauken-build
git log --oneline -1            # anotar el commit que se despliega
./deploy/build-release.sh       # genera /tmp/sauken-build/sauken-portal.tar.gz (~6 MB)
```

### 3.B Alternativa: compilar en otra máquina

Si `server` no tiene RAM libre o salida a Internet: ejecutar los mismos comandos en otra máquina y copiar
`sauken-portal.tar.gz` a `server` (por `scp`).

## 4. Instalar y probar SIN tocar producción (puerto 4012)

```bash
# 4.1 Usuario de servicio y carpetas
useradd -r -M -s /usr/sbin/nologin sauken-portal            # (o con -u 2004 si fue verificado)
install -d -o sauken-portal -g sauken-portal /srv/sauken-portal

# 4.2 Instalar el paquete
tar -xzf /tmp/sauken-build/sauken-portal.tar.gz -C /srv/sauken-portal
chown -R sauken-portal:sauken-portal /srv/sauken-portal

# 4.3 Unidad systemd (aún sin habilitar)
cp /tmp/sauken-build/deploy/sauken-portal.service /etc/systemd/system/
systemctl daemon-reload

# 4.4 Probar en 4012 (portal.env es root:root 600: se lee como root y el proceso corre como sauken-portal)
sudo bash -c 'set -a; . /etc/sauken-portal/portal.env; set +a; HOSTNAME=127.0.0.1 PORT=4012 exec runuser -u sauken-portal -- node /srv/sauken-portal/server.js'
```

En otra terminal:

```bash
for p in / /landing /gracias; do echo "$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:4012$p) $p"; done   # 200 200 200
```

**Prueba del formulario (extremo a extremo):** abrir el sitio de prueba mediante un túnel y enviar una consulta real.

```bash
ssh -L 4012:127.0.0.1:4012 <usuario>@server     # desde la PC de quien prueba; luego abrir http://localhost:4012/#contacto
```

Resultado esperado en la casilla `info@sauken.com.ar` (probar con una casilla propia de jrios y «Mostrar original»):
- Asunto `[Portal] <asunto escrito>`; De: `<nombre del visitante> <soporte@sauken.com.ar>`; Reply-To: el email del visitante.
- `spf=pass`, `dkim=pass` (`d=sauken.com.ar; s=s2026`), `dmarc=pass`, en la bandeja de entrada (no en spam).
- Sin errores en la terminal del proceso ni en `tail -f /var/log/mail*`.

Detener la prueba (Ctrl+C) antes del corte. Si la prueba de correo falla: no continuar; ver sección 7.

## 5. Corte a producción (segundos)

Antes, guardar la reversa:

```bash
docker tag sauken-frontend sauken-frontend:previa        # la imagen anterior queda disponible para volver
```

```bash
systemctl stop sauken-frontend && systemctl disable sauken-frontend   # libera el puerto 4002
systemctl enable --now sauken-portal
```

## 6. Verificación posterior

```bash
systemctl status sauken-portal --no-pager
ss -ltnp | grep 4002                                        # debe ser "node" (no docker-proxy)
journalctl -u sauken-portal -n 50 --no-pager                # sin errores
for u in / /landing /gracias; do echo "$(curl -s -o /dev/null -w '%{http_code}' https://sauken.com.ar$u) $u"; done
curl -s -o /dev/null -w '%{http_code}\n' https://sauken.com.ar/infra/   # sigue respondiendo (login) — no se tocó
```

Revisión visual en el navegador: sección **Accesos**, menú **Ingresar** (desplegable), **Servicios** (10 tarjetas),
carrusel de **Clientes** (20 entidades), **Soluciones** con el slide de S-FiDE, y `https://sauken.com.ar/landing`
(entidades habilitadas y sección S-FiDE). Probar una vez más el formulario de contacto en producción.

Si SELinux bloquea algo: `ausearch -m avc -ts recent` (no debería hacer falta ningún cambio: Apache ya llega al 4002).

## 7. Reversa (segundos)

```bash
systemctl stop sauken-portal && systemctl disable sauken-portal
systemctl enable --now sauken-frontend     # recrea el contenedor con la imagen anterior (sauken-frontend:previa)
curl -s -o /dev/null -w '%{http_code}\n' https://sauken.com.ar/
```

## 8. Limpieza de la versión antigua (solo tras varios días de funcionamiento correcto y con OK de jrios)

Eliminar **únicamente** lo del portal antiguo:

```bash
docker rm -f sauken-frontend 2>/dev/null
docker rmi sauken-frontend sauken-frontend:previa
rm -f /etc/systemd/system/sauken-frontend.service /usr/local/bin/sauken-frontend && systemctl daemon-reload
# Carpeta antigua: contiene .env con la clave de SendGrid (quedó también dentro de la imagen antigua)
rm -rf /Sauken/sauken-landing
```

- **Clave de SendGrid:** al borrar la carpeta y la imagen la clave sigue activa en la cuenta de SendGrid. Decidir con jrios
  si se revoca (o si se cancela SendGrid, decisión pendiente en `pendientes.md`). El portal nuevo ya no la usa.
- **Docker:** se conserva (Nextcloud lo necesita).
- `build_start.sh` y `run_sauken.sh` eran históricos y desaparecen junto con la carpeta antigua.

## 9. Actualizaciones futuras

```bash
cd /tmp && rm -rf sauken-build && git clone https://github.com/Grupo-Sauken-S-A/sauken-landing.git sauken-build
cd sauken-build && ./deploy/build-release.sh
systemctl stop sauken-portal
rm -rf /srv/sauken-portal/* /srv/sauken-portal/.next
tar -xzf sauken-portal.tar.gz -C /srv/sauken-portal && chown -R sauken-portal:sauken-portal /srv/sauken-portal
systemctl start sauken-portal
```

Tras un `zypper dup` Node puede cambiar de versión mayor: volver a probar el sitio.

## 10. Registro

Anotar el cambio y la reversa en `infra/cambios/AAAA-MM-DD.md`: commit desplegado (`git log -1`), fecha/hora del corte,
creación de la cuenta `portal` y la línea de `sender_login`, y la baja de `sauken-frontend`.

## Resumen de lo que se toca en `server`

| Elemento | Acción |
|---|---|
| `/etc/sauken-portal/portal.env` | ya creado (root:root 600) |
| Cuenta SMTP `portal` + `sender_login` (Postfix) | alta + `postmap` + `postfix reload` |
| Usuario `sauken-portal`, `/srv/sauken-portal`, `sauken-portal.service` | alta |
| `sauken-frontend` (unidad, script, contenedor, imagen) | detener ahora; eliminar tras varios días |
| Apache, DNS, firewall, `/infra/`, Nextcloud, Docker | **sin cambios** |
