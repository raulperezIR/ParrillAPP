# 🥩 ParrillAPP — Starter Taller SDD

Proyecto base para el taller de 2 horas: **"Spec-Driven Development con OpenSpec"**.

## ¿Qué vas a construir?

Una app para planificar asados: participantes con preferencias alimentarias, ítems (carnes, bebidas, guarniciones) y cálculo de costos compartidos.

El starter ya tiene estructura, tipos y componentes base — tu trabajo es completarlos siguiendo el flujo SDD.

---

## Setup (1 minuto)

**macOS / Linux / WSL:**
```bash
cd planificador-asado-starter
bash setup.sh
npm run dev
```

**Windows (PowerShell):**
```powershell
cd planificador-asado-starter
.\setup.ps1
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) — deberías ver la landing page con el botón "Ir al taller →".

---

## Comandos clave

| Comando           | Descripción                        |
| ----------------- | ---------------------------------- |
| `npm run dev`      | Servidor de desarrollo             |
| `npm run typecheck`| Verificar tipos TypeScript         |
| `npm run lint`     | ESLint                             |
| `npm run build`    | Build de producción                |

---

## Estructura del proyecto

```
planificador-asado-starter/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── layout.tsx          # Root layout con Tailwind
│   │   ├── globals.css         # Estilos globales
│   │   └── page.tsx            # Landing page
│   ├── types/
│   │   └── index.ts            # Tipos compartidos (Participant, AsadoItem, etc.)
│   ├── lib/utils/
│   │   └── cost-calculator.ts  # Lógica de negocio — punto de trabajo del taller
│   └── components/
│       ├── ui/
│       │   └── card.tsx        # Componente Card reutilizable
│       └── features/
│           └── ParticipantForm.tsx  # Formulario con react-hook-form + Zod
├── .opencode/
│   └── AGENTS.md               # Reglas para agentes SDD
├── setup.sh                    # Script de setup idempotente
└── package.json
```

---

## Flujo del taller (2h)

| Bloque | Tiempo | Actividad |
|--------|--------|-----------|
| 1 — Setup & Contexto | 20 min | Instalar, recorrer el starter, entender qué falta |
| 2 — SDD Init & Explore | 25 min | `/sdd-init`, `/sdd-explore lista de participantes` |
| 3 — Propose → Spec → Tasks | 30 min | `/sdd-new`, revisar y aprobar artifacts |
| 4 — Apply & Verify | 30 min | `/sdd-apply`, `/sdd-verify`, ajustes |
| 5 — Cierre | 15 min | Demo, preguntas, `/sdd-archive` |

---

## Puntos `// TALLER:` en el código

Los comentarios `// TALLER:` marcan exactamente dónde vas a trabajar:

- **`src/lib/utils/cost-calculator.ts`** — agregar validación Zod y manejar edge cases (lista vacía, precios negativos, cantidades cero)
- **`src/components/features/ParticipantForm.tsx`** — conectar el formulario al cálculo real de costos

---

## Checklist pre-taller

- [ ] Node.js ≥ 18 instalado — `node --version`
- [ ] `bash setup.sh` corre sin errores
- [ ] `npm run dev` levanta en [localhost:3000](http://localhost:3000)
- [ ] `npm run typecheck` pasa sin errores
- [ ] Claude Code instalado — `claude --version`
- [ ] OpenSpec configurado (el facilitador da instrucciones al inicio)

---

## Stack

| Herramienta | Versión | Rol |
|---|---|---|
| Next.js | 15.x | Framework (App Router) |
| TypeScript | 5.x strict | Tipado |
| Tailwind CSS | 3.x | Estilos |
| Zod | 3.x | Validación de esquemas |
| react-hook-form | 7.x | Manejo de formularios |
| ESLint | 9.x | Linting |
