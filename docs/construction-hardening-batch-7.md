# MMC Construction Hardening — Batch 7

## Canonical module boundaries

### Shared canonical layer
- `src/lib/audit/timeline.ts`: canonical audit event vocabulary and event shape.
- `src/lib/management/command.ts`: unified management control aggregation.
- `src/lib/management/exceptions.ts`: management exception model and open-exception filtering.
- `src/lib/management/capacity.ts`: capacity state and guardrails.

### Domain-specific layers
- `src/lib/vendors/coordination.ts`: vendor authorization, assignment, completion, verification, and escalation rules.
- `src/lib/qa/visit-review.ts`: QA review and report-approval gate.
- `src/lib/reports/report-lifecycle.ts`: controlled report lifecycle.
- `src/lib/audit/vendor-timeline.ts`: adapter translating vendor-domain activity into canonical audit events.

## Cleanup rules

1. Do not create duplicate status vocabularies when an existing canonical status already represents the same business concept.
2. Domain modules own domain rules; management modules aggregate signals rather than redefining operational rules.
3. Audit adapters translate domain events into canonical audit events; they must not become a second source of business state.
4. UI routes consume domain/control models and must not independently implement approval, authorization, verification, or escalation rules.
5. Future persistence and API layers must call domain validation functions rather than reproduce transition logic.
6. Construction placeholder records remain fixtures only; they must not be treated as production data.
7. Integration code must remain outside the business-control core wherever practical.

## Consolidation targets before production integration

- Replace duplicated fixture objects with shared test fixtures.
- Centralize transition validation into domain modules.
- Add automated tests for all acceptance scenarios from Batch 6.
- Separate UI presentation constants from business rules.
- Establish typed API contracts around domain operations.
- Establish database mapping only after the canonical domain model is frozen.

## Explicit non-goals

- No new business feature should be added solely to expand the feature list.
- No external integration should redefine MMC business rules.
- No production data should be introduced through construction fixtures.
