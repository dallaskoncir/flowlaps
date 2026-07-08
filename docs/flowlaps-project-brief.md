# Flowlaps Project Brief

Flowlaps is a telemetry analytics and post-session AI coaching product for sim racers who want calmer, more actionable feedback after a session instead of constant live coaching.

The core differentiation is product philosophy. Existing sim racing coaching tools often emphasize real-time feedback, high-frequency prompts, or overly precise instructions that are hard to apply while driving. SimHub exposes external integration patterns and UDP sharing/forwarding, while other telemetry tools support CSV export, which makes a post-session workflow realistic for an MVP.[cite:183][cite:198][cite:185][cite:186]

## Product thesis

Flowlaps is built around a simple belief: most non-elite drivers do not need more noise, they need better summaries.

The product should translate telemetry into plain-language patterns such as:
- Braking too early overall.
- Releasing the brake too quickly into medium-speed corners.
- Delaying throttle pickup on exit.
- Losing consistency after a few representative laps.
- Trying to improve too many things at once.

The product should avoid default coaching like:
- Brake 42% less.
- Move braking to the 100m board.
- Focus on ten different corners in one session.
- Constant in-session voice feedback.

## Target user

A sim racer who completes a session and wants to know:
- Where they are losing the most time.
- Whether the issue is entry, apex, or exit behavior.
- Whether the issue is pace, consistency, or confidence.
- What to work on in the next practice session.

This user values:
- calm UX,
- plain English coaching,
- visual clarity,
- practical next steps,
- and limited cognitive load.

## Product principles

- No live coaching in MVP.
- No hyper-specific marker coaching by default.
- No setup-engineering rabbit holes in default reports.
- No more than 3 primary focus areas per coaching report.
- Always turn raw telemetry into human-readable patterns.
- Always end with a short next-practice plan.
- Prefer confidence-building guidance over perfectionist optimization.

## Why this is a strong portfolio project

Flowlaps complements the user's other projects by adding a data-heavy analytics product with AI interpretation, while still staying close to frontend strengths like dashboard UX, state management, charts, and workflow design.[cite:35][cite:109][cite:31]

It also creates a believable full-stack story:
- file import,
- parsing and validation,
- derived analytics,
- stored reports,
- AI summarization,
- and product-grade dashboards.

## Positioning statement

Flowlaps is a telemetry review and AI practice-planning dashboard for sim racers who want focused post-session coaching instead of overstimulating real-time feedback.
