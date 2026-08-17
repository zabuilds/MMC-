# MMC Construction — Adapter Reconciliation Checkpoint

## Status

The Operations adapter vocabulary has been reconciled against the currently implemented domain adapter without changing persistence or schema behavior.

## Verified contract

- Visit `scheduled` and `assigned` both map to canonical `Scheduled`.
- Visit `in_progress` maps to canonical `Started`.
- Visit `cancelled` remains unsupported because no canonical cancellation transition exists.
- Finding `acknowledged` maps to canonical `Triaged`.
- Finding `closed` maps to canonical `Resolved`.
- Action statuses map directly to canonical action states.
- Finding-to-action creation remains limited to `open` and `acknowledged` at the adapter layer.

## Construction rule

Application vocabulary is not treated as a database schema definition. Any state that cannot be represented by the canonical lifecycle remains explicitly unsupported rather than being silently persisted under an invented state.

## Next safe target

Continue non-persistence construction work: audit Operations UI and adapter consumers for direct status-string assumptions and reconcile only where the existing canonical contract already provides an authoritative mapping.

No production data changes, schema changes, or main-branch changes are authorized by this checkpoint.
