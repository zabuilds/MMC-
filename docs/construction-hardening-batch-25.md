# MMC Construction Hardening — Batch 25

## Database authorization audit

The MMC Supabase migration history currently contains the operational core, authorization model, authorization hardening, and supporting FK/index migrations.

### Findings

- Security advisory scan returned no security lints.
- Performance advisories identify repeated auth-function evaluation in RLS policies; this is an optimization opportunity, not a security defect.
- Multiple permissive SELECT policies exist on `user_roles`, `client_users`, and `vendor_users`; these are currently compatible with the intended internal-user and self-link access model, but should be consolidated later if performance becomes material.
- Several indexes are currently unused. They should not be removed during construction because the application workload is not yet representative of production.
- The authorization helper `private.is_internal_user()` was previously corrected to call the actual `private.current_app_role()` resolver.

## Decision

Do not rewrite or weaken RLS during construction solely to eliminate performance warnings. Preserve authorization behavior first; optimize policies after representative workload testing.

## Next gate

The next database task should be representative authorization testing across internal, client, and vendor roles, followed by controlled RLS performance optimization only where measurements justify it.
