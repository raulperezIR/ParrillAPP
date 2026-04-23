#!/usr/bin/env bash
set -e

echo "🔧 Verificando entorno..."

# Verificar Node.js
if ! command -v node &> /dev/null; then
  echo "❌ Node.js no encontrado. Instalá Node.js ≥ 18 desde https://nodejs.org"
  exit 1
fi

NODE_MAJOR=$(node --version | sed 's/v//' | cut -d'.' -f1)
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "❌ Node.js $(node --version) encontrado. Se requiere ≥ 18."
  exit 1
fi

echo "✅ Node.js $(node --version) detectado"

# Verificar npx
if ! command -v npx &> /dev/null; then
  echo "❌ npx no encontrado. Actualizá npm: npm install -g npm"
  exit 1
fi

echo "✅ npm $(npm --version) detectado"

# Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
npm install

echo ""
echo "✅ Listo. Ejecuta: npm run dev"
