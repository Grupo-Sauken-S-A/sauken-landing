#!/usr/bin/env bash
# Genera sauken-portal.tar.gz listo para copiar a /srv/sauken-portal en server.
# Uso: ./deploy/build-release.sh
set -euo pipefail
cd "$(dirname "$0")/.."

npm ci
npm run build

rm -rf release && mkdir release
cp -r .next/standalone/. release/
mkdir -p release/.next
cp -r .next/static release/.next/static
cp -r public release/public

tar -czf sauken-portal.tar.gz -C release .
echo "Listo: sauken-portal.tar.gz"
