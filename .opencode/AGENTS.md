# AGENTS.md — ParrillAPP Taller SDD

Prioritize retrieval-led reasoning: siempre buscá en memoria y spec activo antes de generar código nuevo.

## Reglas Críticas

- No implementes features que no estén en el spec activo.
- Si una tarea no está en el task breakdown, preguntá antes de avanzar.
- Seguí el flujo de aprobación de fases: no saltees ninguna sin aprobación explícita.
- No modifiques `.opencode/` sin instrucción explícita del facilitador.
- TypeScript strict: no `any`, no `as unknown`, no type assertions innecesarias.
- Validaciones siempre con Zod en el boundary de entrada (forms, API routes).
- Client components marcados con `"use client"` explícito; nunca lo omitas.

## Flujo de Aprobación SDD

    sdd-explore → sdd-propose → sdd-spec + sdd-design → sdd-tasks → sdd-apply → sdd-verify → sdd-archive

Cada fase requiere aprobación explícita antes de avanzar a la siguiente.

## Convenciones de Código

- Componentes: PascalCase en `src/components/`
- Funciones utilitarias: camelCase en `src/lib/`
- Tipos centralizados en `src/types/index.ts` — no definir tipos inline en componentes
- Path alias `@/` para todo import desde `src/`
- Sin comentarios descriptivos; solo `// TALLER:` para puntos de trabajo del taller

## Scope del Taller

El taller cubre:
1. Inicializar SDD con `/sdd-init`
2. Proponer un feature con `/sdd-new`
3. Aplicar implementación con `/sdd-apply`
4. Verificar con `/sdd-verify`
5. Archivar el cambio con `/sdd-archive`

Los comentarios `// TALLER:` en el código marcan los puntos de trabajo a completar durante el taller.
