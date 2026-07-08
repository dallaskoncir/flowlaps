# Flowlaps Suggested Zod Schemas

These schemas are intentionally simplified for MVP scaffolding.

## Raw import schema

```ts
import { z } from 'zod'

export const telemetryRowSchema = z.object({
  lapNumber: z.coerce.number().int().nonnegative(),
  timestampMs: z.coerce.number().nonnegative(),
  distanceMeters: z.coerce.number().nonnegative(),
  speedKph: z.coerce.number().nonnegative(),
  throttlePct: z.coerce.number().min(0).max(100),
  brakePct: z.coerce.number().min(0).max(100),
  steeringAngleDeg: z.coerce.number(),
  gear: z.coerce.number().int(),
  rpm: z.coerce.number().nonnegative().optional(),
})

export const telemetryImportSchema = z.object({
  sourceType: z.enum(['csv', 'simhub-poll', 'udp-forward', 'manual']),
  sim: z.string().min(1),
  trackName: z.string().min(1),
  carName: z.string().min(1),
  rows: z.array(telemetryRowSchema).min(1),
})
```

## Session summary schema

```ts
export const sessionSummarySchema = z.object({
  lapCount: z.number().int().nonnegative(),
  validLapCount: z.number().int().nonnegative(),
  bestLapMs: z.number().nonnegative(),
  averageLapMs: z.number().nonnegative(),
  consistencyDeltaMs: z.number().nonnegative(),
})
```

## Derived insight schema

```ts
export const derivedInsightSchema = z.object({
  type: z.enum([
    'early_braking',
    'late_throttle',
    'entry_instability',
    'exit_hesitation',
    'consistency_drop',
    'sector_loss',
  ]),
  severity: z.enum(['low', 'medium', 'high']),
  title: z.string().min(1),
  summary: z.string().min(1),
  metricKey: z.string().min(1),
  metricValue: z.number(),
  comparisonValue: z.number().optional(),
})
```

## Coaching report schema

```ts
export const coachingReportSchema = z.object({
  sessionSummary: z.string().min(1),
  biggestPaceLosses: z.array(z.string()).min(1).max(3),
  consistencyObservations: z.array(z.string()).min(1).max(3),
  brakingObservations: z.array(z.string()).min(1).max(3),
  throttleObservations: z.array(z.string()).min(1).max(3),
  suggestedFocusAreas: z.array(z.string()).min(1).max(3),
  nextPracticePlan: z.array(z.string()).min(1).max(5),
})
```
