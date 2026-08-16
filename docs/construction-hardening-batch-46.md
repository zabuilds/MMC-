# MMC Construction Hardening — Batch 46

## Database/application lifecycle reconciliation

The live MMC database schema was inspected before introducing persistence for the Finding → Action handoff.

The database uses vocabularies that differ from the application/canonical Operations lifecycle:

- Findings DB: `open | deferred | closed`
- Actions DB: `new | awaiting_owner | approved | scheduled | in_progress | verification | closed | on_hold`
- Visits DB: `scheduled | in_progress | completed | rescheduled | cancelled`

The application adapter uses richer canonical lifecycle states. Persistence must therefore use an explicit translation boundary rather than writing UI statuses directly to the database.

### Safety decision

Do not mutate the database schema or production data yet. Unsupported semantic mappings must fail explicitly rather than silently collapsing states.

### Next target

Add a source-level persistence mapping contract that identifies supported database mappings and rejects lossy mappings. Only after that contract is verified should a real mutation path be introduced.
