# Flowlaps Claude Code Starter Prompt

Use the following as the initial prompt in Claude Code.

```text
You are helping scaffold a portfolio-quality product called Flowlaps.

Goal:
Build a telemetry analytics and post-session AI coaching dashboard for sim racers who want calm, practical feedback after a session instead of constant live coaching.

Core product idea:
Existing AI coaching tools often provide too much feedback in real time or overly specific instructions that are hard to apply while driving. This product is designed for drivers who feel overstimulated by constant coaching and want a clean post-session review that highlights broad patterns and a focused practice plan.

Primary user:
A sim racer who completes a session, imports telemetry, and wants to understand where they are losing time and what to focus on next.

Product principles:
- No real-time coaching in MVP
- No hyper-specific “brake 42% less at 100m” style feedback
- Prefer plain-language pattern summaries
- Limit coaching to the highest-signal issues
- Always end with a short practice plan
- Make telemetry approachable, not intimidating

Core workflow:
1. User imports a session file or telemetry export
2. The app parses and stores session, lap, and sector data
3. The app computes derived insights such as consistency, braking timing trends, throttle pickup timing, and sector losses
4. The app presents a visual dashboard and lap comparison views
5. The AI generates a calm coaching report and a next-practice plan

Tech constraints:
- Next.js
- TypeScript
- pnpm
- App Router
- shadcn/ui
- Tailwind CSS
- Node/TypeScript backend logic
- Prisma with a local-friendly setup first
- Mock data allowed where needed to unblock UI
- Focus on product UX and maintainable architecture

Initial ingestion strategy:
- MVP should support importing CSV telemetry/session files first
- Architecture should leave room for a future SimHub connector
- Do not overbuild live telemetry capture in V1

Core screens:
- Dashboard
- Import session
- Session detail
- Lap comparison
- Coaching report
- Practice history

Key entities:
- Driver
- Track
- Car
- Session
- Lap
- Sector
- TelemetryPoint
- CoachingReport
- PracticeFocusArea

Important output sections for a coaching report:
- Session summary
- Biggest pace losses
- Consistency observations
- Braking observations
- Throttle application observations
- Suggested focus areas
- Next practice plan

Please start by:
1. Proposing the best repo/app structure for the MVP
2. Listing routes and page responsibilities
3. Defining core domain models and Zod schemas
4. Recommending a practical file import architecture
5. Suggesting the first implementation order
6. Using mock telemetry data first where helpful

Optimize for a believable, polished MVP that I can demo in job interviews.
```
