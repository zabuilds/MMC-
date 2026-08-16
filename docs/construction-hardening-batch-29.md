# MMC Construction Hardening — Batch 29

## Operational ownership path

The current Supabase schema provides the following relationship paths for controlled read authorization:

- `vessels.client_id` → client ownership
- `visits.vessel_id` → vessel → client ownership
- `findings.vessel_id` and `findings.visit_id` → vessel/visit → client ownership
- `actions.vessel_id` and `actions.finding_id` → vessel/finding → client ownership
- `reports.vessel_id` and `reports.visit_id` → vessel/visit → client ownership
- `vendor_jobs.vessel_id` and `vendor_id` → vessel/client context and vendor ownership
- `client_users.client_id` → authenticated user → client ownership
- `vendor_users.vendor_id` → authenticated user → vendor ownership
- `user_roles.user_id` → authenticated user → application role

## Minimum read matrix

### Internal/admin
Full operational read access through the existing internal-role authority.

### Client
Read only rows reachable through the authenticated user's `client_users.client_id` relationship.

### Vendor
Read only vendor-owned identity data and explicitly authorized `vendor_jobs`; vessel/client information should be limited to what is required to execute an authorized job.

### Anonymous
No operational read access.

## Safety decision

Do not create broad policies such as `authenticated can select all`. Each operational table should receive a policy whose predicate follows its ownership path.

Mutation policies remain deferred until the corresponding domain transition authority and audit boundary are wired.
