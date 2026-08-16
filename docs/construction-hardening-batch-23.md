# MMC Construction Hardening — Batch 23

## Supabase reconciliation

The live MMC Supabase project is active and healthy and contains the initial operational core plus authorization hardening migrations.

### Confirmed operational tables

- clients
- vessels
- visits
- findings
- actions
- vendors
- vendor_jobs
- reports
- user_roles
- client_users
- vendor_users

All inspected public tables have RLS enabled.

### Important divergence from canonical application transitions

The database currently uses persistence-oriented status vocabularies that do not exactly match the canonical domain vocabulary.

Examples:

- visits: `scheduled`, `in_progress`, `completed`, `rescheduled`, `cancelled`
- findings: `open`, `deferred`, `closed`
- actions: `new`, `awaiting_owner`, `approved`, `scheduled`, `in_progress`, `verification`, `closed`, `on_hold`
- vendor_jobs: `requested`, `approved`, `scheduled`, `in_progress`, `verification`, `completed`, `cancelled`
- reports: `draft`, `ready`, `sent`, `archived`

This confirms that the database should NOT be treated as a direct mirror of the TypeScript transition vocabulary. A deliberate persistence adapter/domain mapping is required.

### Security posture

RLS is enabled across the inspected public tables. The project also contains authorization-focused migrations, including an authorization model and hardened authorization functions.

### Safe decision

No production schema changes were made during this reconciliation. We will not rename or alter status constraints merely to match TypeScript names.

The next database task is to inspect the existing migration SQL and authorization functions, then determine which persistence mappings are intentional and which represent genuine construction gaps.
