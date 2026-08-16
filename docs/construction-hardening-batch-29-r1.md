# MMC Construction Hardening — Batch 29

## RLS relationship mapping

The first read-only policy slice has been mapped without applying policies.

### Ownership paths

- Clients: direct relationship through `client_users.client_id` and `client_users.user_id`.
- Vessels: `vessels.client_id` -> clients.
- Visits: `visits.vessel_id` -> vessels -> clients.
- Internal access: existing database-backed application role authority.
- Anonymous access: no protected operational access.

### Safety decision

Do not activate broad authenticated read access. The first production policy slice should be limited to client-owned clients, vessels, and visits, with internal access separately authorized through the existing internal-role helper.

Mutation policies remain deferred until transition validation and audit boundaries are connected.

### Current state

No RLS policy was changed in this batch and no production data was modified.
