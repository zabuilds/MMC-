# MMC Construction Hardening — Batch 30

## RLS policy verification

Direct inspection of the live Supabase policy catalog corrected the prior assumption that core operational tables lacked policies.

### Existing protected read paths

- `client_users`: authenticated users can read their own client links; internal users can manage links.
- `clients`: authorized client-linked users and internal users have access.
- `vessels`: access follows the client relationship or internal role.
- `visits`: access follows vessel -> client -> client_users relationship or internal role.
- `user_roles`: users can read their own role; admins manage roles.

The operational tables therefore already have a coherent minimum-permission ownership chain for the first slice.

### Important correction

No new RLS policy should be added for clients, vessels, or visits at this stage. The existing policies already implement the intended ownership path and internal-user bypass.

### Next validation target

Validate the existing policy behavior against authenticated role contexts and then extend the same audit to findings, actions, reports, vendors, and vendor jobs before considering any policy changes.

No production data or policy definitions were modified in this batch.
