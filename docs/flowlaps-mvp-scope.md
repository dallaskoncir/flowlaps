# Flowlaps MVP Scope

The MVP should prove the product concept with a calm post-session review flow, not with a perfect live telemetry pipeline.

## MVP goal

A user can import a session, review their laps and comparisons, receive an AI-generated coaching summary, and leave with a short practice plan.

## Primary workflow

1. Import a telemetry/session file.
2. Parse and validate the session.
3. Compute derived metrics.
4. Present a session dashboard.
5. Generate a coaching report.
6. Save the report and practice focus areas.

## In scope

### Session import
- CSV-based import first.
- One supported schema in MVP.
- Store raw upload metadata and normalized derived data.

### Session dashboard
- Best lap.
- Average lap.
- Lap consistency.
- Sector breakdown.
- Top areas of time loss.
- Session trend summary.

### Lap comparison
- Compare best lap to selected lap.
- Show speed, brake, and throttle deltas.
- Highlight broad loss patterns by segment.

### Coaching report
- Session summary.
- Biggest pace losses.
- Consistency observations.
- Braking observations.
- Throttle application observations.
- Suggested focus areas.
- Next practice plan.

### Practice tracking
- Save coaching reports.
- Save focus areas.
- Review prior sessions over time.

## Out of scope for MVP

- Live in-session voice coaching.
- Real-time overlays.
- Sim-specific plugins.
- Advanced setup recommendations.
- Social features.
- Multiplayer league integrations.
- Cross-sim normalization perfection.

## MVP success criteria

The MVP succeeds if it can:
- import realistic data,
- show believable analytics,
- produce grounded coaching summaries,
- and feel calm and useful compared with noisier coaching tools.[cite:178][cite:179][cite:184][cite:203]
