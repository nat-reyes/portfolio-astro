# MEGA S01E03 — What it shows

Review of the support desk export dated 2026-10-04. This is a snapshot, not a live queue count.

- `support-kb/`: original exported knowledge base, plus a signed review page and a local MDsveX/SvelteKit build scaffold.
- `rendered/`: generated static site, including `/kb/incidents/4471-review/`.
- `issues/`: two proposed GitHub issue bodies.
- `analysis.json`: reproducible grouping with all supporting report IDs.
- `scripts/analyze.mjs`: distinct-ID analysis using the exported classification rules.

## Reproduce

Use Node.js 22.18 or newer. From the repository root:

```sh
node mega/s01e03/scripts/analyze.mjs
cd mega/s01e03/support-kb
npm ci
npm run build
```

Serve `mega/s01e03/rendered` with any static HTTP server. The portfolio's root application is independent of this build.

## Findings

- 427 source rows represent 412 distinct reports, with 15 duplicate rows excluded.
- 379 reports classify as shared-parser; 33 as booking-v3 hint mismatch.
- Five one-day-move reports require investigation; the grouping does not prove their individual root causes.
- Tenant locale, form version and channel determine the exported classification. Intake tags and subjects alone do not.
- Keep the accepted historical decision unchanged; a replacement policy should be a new decision.

The page computes its table from the bundled source data. Review the live desk before treating these snapshot counts as final.
