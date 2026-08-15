# Meridian Marine Co. — Internal Work Queue Status & Routing v1

## Status lifecycle

**NEW → TRIAGED → READY → IN PROGRESS → WAITING → BLOCKED → COMPLETED → VERIFIED → CLOSED**

## Routing rules

- Visit findings route to the appropriate operator/action queue.
- Client requests route through clarification and approval review.
- Vendor jobs route through coordination and completion tracking.
- Readiness tasks route according to planned owner use.
- Storm/emergency items bypass normal priority and follow emergency escalation.
- Administrative items remain separate from vessel-critical operational work.

## Waiting vs Blocked

**WAITING** means MMC is awaiting a person, vendor, approval, schedule, or external event.

**BLOCKED** means a material constraint prevents progress and requires intervention or a decision.

## Completion rule

An item should move to Completed only when the requested work or operational action has actually occurred. Verification determines whether it can then be Closed.

## Aging control

Old Waiting or Blocked items should surface automatically for management review rather than disappearing from the active workflow.