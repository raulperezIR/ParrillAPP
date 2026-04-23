# setup.ps1 — ParrillAPP Taller SDD (Windows)
$ErrorActionPreference = "Stop"

Write-Host "🔧 Verificando entorno..."

# Verificar Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js no encontrado. Instalá Node.js >= 18 desde https://nodejs.org"
    exit 1
}

$nodeVersion = (node --version).TrimStart("v").Split(".")[0]
if ([int]$nodeVersion -lt 18) {
    Write-Host "❌ Node.js $(node --version) encontrado. Se requiere >= 18."
    exit 1
}

Write-Host "✅ Node.js $(node --version) detectado"

# Verificar npm
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm no encontrado. Reinstalá Node.js desde https://nodejs.org"
    exit 1
}

Write-Host "✅ npm $(npm --version) detectado"

# Instalar dependencias
Write-Host ""
Write-Host "📦 Instalando dependencias..."
npm install

Write-Host ""
Write-Host "✅ Listo. Ejecuta: npm run dev"
