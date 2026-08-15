# Meridian Marine Co. — Operational Workflow QA v1

## Core test

A valid test must complete:

**CLIENT → VESSEL → VISIT → FINDING → ACTION → REPORT → FOLLOW-UP → CLOSE**

## Visit tests

Verify creation, assignment, completion, cancellation, blocked state, report generation, delivery, and closure.

## Finding tests

Verify severity assignment, escalation, action creation, monitoring, verification, closure, and reopening.

## Action tests

Verify assignment, progress, waiting/blocked states, completion, failed verification, and closure.

## Report tests

Verify draft, QA, approval, delivery, correction/reissue, and history preservation.

## Approval tests

Verify request, approval, decline, expiry, and unauthorized attempts.

## Audit tests

Verify actor, timestamp, previous state, new state, and reason are retained for material transitions.

## Security tests

Verify role restrictions at every material transition and confirm client/vendor users cannot manipulate internal lifecycle states outside their permitted workflow.
