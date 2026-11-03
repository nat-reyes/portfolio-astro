# [MEGA S01E03] booking-v3 date hint contradicts day-first tenant parsing — 33 reports

## Scope and evidence
**33 distinct reports** merged into #4471 concern the booking-v3 form for three day-first tenants: Alder Physio, Copper Studio and Pale Harbour. Seen 2026-04-17 through 2026-09-22 in the 2026-10-04 export.

Source: `mega/s01e03/support-kb/src/lib/data/reports-4471.json`, tenant directory and `src/lib/kb/causes.ts`. Run `node mega/s01e03/scripts/analyze.mjs`; supporting IDs are in `analysis.json`.

## Problem
booking-v3 prints `MM/DD/YYYY`, encouraging month-first entry, but the form interprets the input according to the tenant's day-first convention. Following the visible hint can therefore produce the wrong date. This is separate from the shared-parser issue, despite overlapping subjects and tenants.

Expected: the visible hint and parser agree on the date format. Actual: month-first guidance with day-first interpretation.

## Reproduction and triage
Choose a day-first tenant using booking-v3; enter an ambiguous date in a way that follows the displayed month-first hint. Compare the intended date with the interpreted value. Classify by tenant locale, form version and channel, not intake tag: 15 of these reports were tagged parser.

## Acceptance
- Align the hint with the actual accepted input convention, and test that convention end-to-end.
- Cover form input for the three affected tenants and a regression case for booking-v2.
- Keep the 33-report scope separate from the shared-parser issue; do not infer a single fix from the shared subject.
