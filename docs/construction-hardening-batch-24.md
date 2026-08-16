# MMC Construction Hardening — Batch 24

## Supabase authorization reconciliation

The MMC Supabase database contains five migrations establishing the operational core, indexes, authorization lock, authorization model, and hardened authorization functions.

## Defect discovered

`private.is_internal_user()` referenced `public.current_app_role()`, but no such public function exists. The actual role resolver is `private.current_app_role()`.

Direct read-only execution of `private.is_internal_user()` reproduced the failure:

`function public.current_app_role() does not exist`

## Remediation

A targeted migration replaced the incorrect reference with `private.current_app_role()`.

Post-remediation execution of `private.is_internal_user()` succeeds and returns `false` for the unauthenticated execution context.

## Safety assessment

- No operational data was changed.
- No tables were altered.
- No RLS policies were weakened.
- The fix restores the intended authorization dependency rather than introducing a new authorization rule.
- Existing internal-role definitions remain authoritative.

## Next gate

Continue read-only inspection of authorization policies and migration intent, then validate the corrected authorization path under representative authenticated roles before making any broader database changes.
