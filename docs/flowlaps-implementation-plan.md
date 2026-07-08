# Flowlaps Implementation Plan

## Phase 0: Product framing

Goal:
- lock the UX philosophy,
- define calm coaching rules,
- confirm MVP boundaries.

Deliverables:
- project brief,
- MVP scope,
- route map,
- domain model.

## Phase 1: UI-first scaffolding

Goal:
Build the core screens using mocked data first.

Deliverables:
- dashboard,
- import screen,
- session detail screen,
- lap comparison screen,
- coaching report screen,
- history screen.

Notes:
This phase should prioritize UX clarity, component quality, loading states, and believable empty states before worrying about telemetry plumbing.[cite:193][cite:60]

## Phase 2: Data model and persistence

Goal:
Add Prisma models and local database support.

Deliverables:
- schema,
- seed data,
- repositories/services,
- local session persistence.

## Phase 3: File import pipeline

Goal:
Support one import format end to end.

Deliverables:
- upload endpoint,
- parser,
- validation,
- normalization,
- import error handling.

## Phase 4: Derived analytics engine

Goal:
Turn telemetry into structured, explainable metrics.

Deliverables:
- best lap extraction,
- consistency scoring,
- sector loss analysis,
- braking timing signals,
- throttle pickup signals,
- session trend summaries.

## Phase 5: AI coaching generation

Goal:
Generate grounded, plain-language coaching from structured metrics.

Deliverables:
- prompt builder,
- report generation service,
- saved coaching reports,
- regenerated report flow.

## Phase 6: SimHub connector exploration

Goal:
Add a local connector after the MVP feels complete.

Deliverables:
- research notes,
- local polling prototype,
- minimal integration path if feasible.
