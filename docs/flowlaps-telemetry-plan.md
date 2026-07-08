# Flowlaps Telemetry Plan

The best telemetry strategy for Flowlaps is to build from the most reliable and portfolio-friendly ingestion path first, then add more ambitious connectors later.

## Recommended ingestion order

### Phase 1: CSV/session import

Telemetry tools can export recorded sessions to CSV, which makes file-based import the simplest and most deterministic MVP path.[cite:185][cite:186]

Why this should be first:
- easiest to debug,
- easiest to validate,
- works well for post-session analysis,
- no need to solve live capture immediately.

### Phase 2: SimHub local connector

SimHub exposes external integration patterns and community examples mention a localhost game-data API, making local polling or bounded connector work a realistic next step for non-live analysis features.[cite:183][cite:205][cite:206]

Why this should be second:
- still local and controllable,
- gives a more “real product” story,
- avoids full plugin complexity.

### Phase 3: UDP forwarding

SimHub supports forwarding UDP data to other applications, which makes future near-live ingestion or capture pipelines possible once the core product is stable.[cite:198][cite:197]

Why this should be later:
- more plumbing,
- more sim-specific edge cases,
- less necessary for the MVP value proposition.

## Recommended MVP position

Flowlaps should be honest in its first version:
- primary source: imported telemetry/session files,
- secondary source later: local SimHub connector,
- advanced source later: UDP-forwarded or plugin-assisted ingestion.

## Import architecture recommendation

1. Upload file through the web app.
2. Persist file metadata.
3. Parse into rows.
4. Validate with Zod.
5. Normalize into domain entities.
6. Compute derived metrics.
7. Generate a coaching report from structured metrics.

## Data storage recommendation

Store:
- original file metadata,
- normalized session/lap/sector/telemetry records,
- derived metrics,
- generated reports.

Do not rely only on raw files. Structured storage is what makes comparisons, historical analysis, and saved reports practical.
