# Flowlaps Architecture

## Recommended stack

- Next.js App Router
- TypeScript
- pnpm
- Tailwind CSS
- shadcn/ui
- Node/TypeScript backend logic
- Prisma
- SQLite for fast local MVP or PostgreSQL if preferred
- Zod for validation

This stack matches the user's current frontend strength and the desire to grow backend understanding through Node rather than switching to a different language stack.[cite:31][cite:32]

## Application areas

### Web app
Responsible for:
- import flows,
- dashboards,
- lap review,
- coaching reports,
- saved history,
- settings.

### Domain layer
Responsible for:
- telemetry normalization,
- metric calculations,
- lap comparisons,
- coaching input assembly.

### Persistence layer
Responsible for:
- session storage,
- raw file metadata,
- derived metrics,
- coaching reports,
- practice focus history.

### AI layer
Responsible for:
- translating derived metrics into plain-language coaching,
- structuring practice plans,
- keeping tone calm and concise.

The AI layer should not reason directly over raw telemetry streams. Derived metrics should be computed in code first, and only the structured summary should be sent for language generation.[cite:177][cite:182][cite:203]

## Suggested route map

- `/` dashboard / recent sessions
- `/import` session import flow
- `/sessions/[id]` session detail
- `/sessions/[id]/compare` lap comparison
- `/sessions/[id]/report` coaching report
- `/history` practice and report history
- `/settings` telemetry sources and preferences

## Suggested package boundaries

If built in a turborepo:

- `apps/web` - Next.js application
- `packages/ui` - shared design system and app primitives
- `packages/domain` - analytics, comparison logic, coaching input builders
- `packages/db` - Prisma schema and data access
- `packages/config` - lint, tsconfig, shared tooling

## Data flow

1. User imports a telemetry export file.
2. The backend validates the upload shape with Zod.
3. The app normalizes session, lap, sector, and telemetry point data.
4. The domain layer computes derived metrics.
5. The session detail view reads normalized plus derived data.
6. The AI layer generates a coaching report from structured metrics.
7. The report is stored and displayed with practice focus areas.
