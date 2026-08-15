# MMC Construction Hardening — Batch 11

## Canonical transition authority

Business state transitions must live in domain modules. UI components, route handlers, database adapters, billing handlers, and automation may request transitions but must not independently redefine them.

## Domain ownership

- Visits own visit lifecycle transitions.
- Findings own finding lifecycle transitions.
- Actions own action lifecycle transitions.
- Owner decisions own authorization/decision transitions.
- Vendor jobs own authorization, assignment, completion, verification, and escalation transitions.
- QA owns review outcomes and report-approval eligibility.
- Reports own report lifecycle transitions.
- Management owns aggregation of control signals, not the underlying operational state.
- Audit owns historical event representation, not operational state.

## Validation order

Every mutation should validate in this order:

1. Actor identity.
2. Resource access.
3. Current state.
4. Allowed transition.
5. Required prerequisites.
6. Required evidence/authorization.
7. Idempotency/deduplication.
8. Persist state change.
9. Emit audit event.
10. Trigger downstream notification/automation only after the business mutation succeeds.

## Prohibited patterns

- UI-only authorization checks.
- Direct status mutation from presentation code.
- Automation silently changing business state.
- Stripe events directly changing operational state.
- Audit events being used as a second mutable state store.
- Database adapters reproducing business transition logic.
- Client-provided status values being trusted without server validation.

## Consolidation targets

Before production integration, shared transition validators should be extracted so the same rules are consumed by tests, APIs, UI actions, and future persistence adapters.

## Acceptance criterion

For every critical entity, an invalid transition must fail deterministically and leave the prior valid state intact. A valid transition must produce exactly one business-state change and the corresponding audit event.
