# MMC Construction Hardening — Batch 44

## Finding → Action linkage

The Operations visit workflow now enforces the business boundary between finding state and action initiation.

- An `Acknowledged` finding may initiate an operational action.
- An `Open` finding must be acknowledged before action initiation.
- An `Actioned` finding is treated as already having entered the action workflow; the UI directs operators to the existing action workflow rather than creating a duplicate action here.
- `Verified` and `Closed` findings cannot initiate new actions.
- The eligibility rule lives in the canonical Operations adapter and is consumed by the visit UI.
- Persistence remains deferred; this is a validation/UI boundary only.

No database schema or RLS changes were made.
No changes were made to `main`.
