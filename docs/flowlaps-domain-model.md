# Flowlaps Domain Model

## Core entities

### Driver
Represents the user account or local profile.

Fields:
- id
- displayName
- preferredSims
- coachingStyle
- createdAt
- updatedAt

### Track
Represents a circuit.

Fields:
- id
- name
- layout
- countryCode
- createdAt
- updatedAt

### Car
Represents a vehicle/class pairing.

Fields:
- id
- sim
- className
- carName
- createdAt
- updatedAt

### Session
Represents a single imported run.

Fields:
- id
- driverId
- trackId
- carId
- sim
- sessionType
- sourceType
- sourceFilename
- startedAt
- endedAt
- lapCount
- bestLapMs
- averageLapMs
- createdAt
- updatedAt

### Lap
Represents a full lap inside a session.

Fields:
- id
- sessionId
- lapNumber
- lapTimeMs
- isValid
- sector1Ms
- sector2Ms
- sector3Ms
- createdAt

### Sector
Represents a sector or major segment if the source supports it.

Fields:
- id
- lapId
- sectorIndex
- timeMs
- createdAt

### TelemetryPoint
Represents a sampled telemetry record.

Fields:
- id
- lapId
- sampleIndex
- timestampMs
- distanceMeters
- speedKph
- throttlePct
- brakePct
- steeringAngleDeg
- gear
- rpm
- createdAt

### DerivedInsight
Represents code-computed findings.

Fields:
- id
- sessionId
- type
- severity
- title
- summary
- metricKey
- metricValue
- comparisonValue
- createdAt

### CoachingReport
Represents the generated coaching output.

Fields:
- id
- sessionId
- summary
- paceNotes
- brakingNotes
- throttleNotes
- consistencyNotes
- nextPracticePlan
- createdAt

### PracticeFocusArea
Represents a single action item the user should work on.

Fields:
- id
- reportId
- category
- title
- description
- priority
- createdAt

## Example TypeScript enums

```ts
export type SessionType = 'practice' | 'qualifying' | 'race' | 'hotlap'
export type SourceType = 'csv' | 'simhub-poll' | 'udp-forward' | 'manual'
export type InsightType =
  | 'early_braking'
  | 'late_throttle'
  | 'entry_instability'
  | 'exit_hesitation'
  | 'consistency_drop'
  | 'sector_loss'
```
