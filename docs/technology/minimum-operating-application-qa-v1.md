# Meridian Marine Co. — Minimum Operating Application QA v1

## Core test

An authorized operator must be able to complete the full workflow:

**Create Client → Add Vessel → Schedule Visit → Complete Visit → Record Finding → Create Action → Escalate if required → Produce Report → Deliver Report → Verify/Close Follow-Up**

## Required checks

- Correct client/vessel relationships
- Valid state transitions
- Required fields enforced
- Severity handling works
- Critical/Urgent escalation is not silently skipped
- Evidence is associated with the correct visit/finding
- Actions remain linked to their source finding
- Reports contain the correct visit information
- Closed records remain auditable
- Role restrictions prevent unauthorized access

## Failure scenarios

Test incomplete visits, missing evidence, overdue actions, changed severity, unavailable vendors, unauthorized users, duplicate submissions, and interrupted workflows.

## Release standard

The core workflow must be understandable, repeatable, and recoverable before additional feature layers are prioritized.