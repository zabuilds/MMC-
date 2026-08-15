# Meridian Marine Co. — Vertical Slice Acceptance Criteria v1

## Goal

The first application slice is considered usable only when an authorized operator can complete the core operational cycle without relying on undocumented side processes.

## Acceptance flow

1. Create or onboard a client.
2. Add and activate a vessel.
3. Schedule a visit.
4. Start and complete the visit.
5. Record findings with severity and evidence references.
6. Create and manage actions.
7. Produce the visit report.
8. Record report delivery.
9. View the vessel's current operational state.
10. Preserve the history needed to understand what occurred.

## Required safeguards

- Unauthorized users cannot perform restricted operational actions.
- Material approval state is explicit.
- Critical/Urgent findings can be escalated without waiting for routine reporting.
- Incomplete visits cannot be falsely represented as fully completed.
- Closed records remain auditable.
- Client/vessel relationships remain intact throughout the workflow.

## Quality bar

The slice should be understandable to a new authorized operator, resilient to incomplete information, and structured so later vendor, readiness, emergency, and analytics modules can attach without redesigning the core model.
