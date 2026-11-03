<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { uniqueById, groupByCause, readAs, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';
  const merged = uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471);
  const groups = groupByCause(merged, tenantOf);
</script>

<p><strong>{merged.length}</strong> unique reports; {reports.length - uniqueById(reports as Report[]).length} duplicate export rows excluded.</p>
<table>
  <thead><tr><th>Problem</th><th>Reports</th><th>Tenants</th><th>Intake disagreement</th><th>Seen</th></tr></thead>
  <tbody>{#each groups as g}
    <tr><td>{g.cause}</td><td>{g.reports.length}</td><td>{g.tenants}</td><td>{Object.entries(g.taggedAs).filter(([tag])=>tag !== g.cause).reduce((n,[,v])=>n+v,0)}</td><td>{g.firstSeen} → {g.lastSeen}</td></tr>
  {/each}</tbody>
</table>
{#each groups as g}
  {#if readAs(g, notes.oneDayMove)}<p>{readAs(g, notes.oneDayMove)} one-day-move reports remain under {g.cause} by the export's rule. Their specific symptoms need investigation; this classification is not proof of a common root cause.</p>{/if}
{/each}
