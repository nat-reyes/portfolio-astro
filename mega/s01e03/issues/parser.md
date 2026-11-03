# [MEGA S01E03] Shared date parser reads day-first tenant dates as month-first — 379 reports

## Scope and evidence
The 2026-10-04 export contains 427 rows but 412 distinct report IDs merged into #4471. After de-duplicating by ID and resolving each tenant's locale/form, **379 reports** belong to the shared-parser group across 11 tenants (2026-04-01 through 2026-10-04).

Source: `mega/s01e03/support-kb/src/lib/data/reports-4471.json`, tenant directory and `src/lib/kb/causes.ts`. Reproduce counts with `node mega/s01e03/scripts/analyze.mjs`; all supporting IDs are in `analysis.json`.

## Problem
The shared parser interprets all dates month-first, although these tenants use day-first dates. Ambiguous day/month values can therefore swap. For example, R-41200 describes 7 April becoming 4 July, while R-41203 describes 2 December becoming 12 February.

Expected: interpret the input using an explicit format consistent with its source and locale. Actual: a shared month-first interpretation is applied to day-first inputs.

## Triage caveats
Do not classify by browser locale, intake tag, or subject alone. Intake tags disagree with this group for 23 reports. The desk separately flagged five reports as one-day moves; they remain counted in this group under the export's executable rule, but that rule does not establish the root cause of every symptom. Investigate them without counting them twice or inventing a third confirmed cause.

## Acceptance
- Distinct-ID coverage stays reproducible and separate from the booking-v3 hint issue.
- Tests cover ambiguous day/month values, locale differences and both app/email paths.
- Investigate the five flagged anomalies before declaring the whole group fixed.
