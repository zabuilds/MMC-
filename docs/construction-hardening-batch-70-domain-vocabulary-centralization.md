# Construction Hardening Batch 70 — Domain Vocabulary Centralization

## Change

The Operations adapter no longer redeclares visit, finding, and action status unions. It now aliases the authoritative application-domain state types from `lib/domain-contracts.ts`.

## Why

The construction-complete gate requires removal of duplicated business-state definitions. The adapter still owns its application-to-canonical mapping behavior, but it no longer owns a second copy of the application state vocabulary.

## Preserved behavior

- Visit aliases remain unchanged.
- Visit cancellation remains explicitly unsupported until a canonical transition exists.
- Finding acknowledgement/action semantics remain unchanged.
- Action lifecycle behavior remains unchanged.
- No persistence model was changed.

## Scope

This is a type-definition centralization only. It does not alter production data, database schema, billing, authentication, or deployment configuration.
