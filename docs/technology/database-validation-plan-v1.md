# Meridian Marine Co. — Database Validation Plan v1

## Structural validation

Confirm every core table, relationship, required field, status, constraint, and index matches the approved operational model.

## Workflow validation

Validate the full spine:

**CLIENT → VESSEL → VISIT → FINDING → ACTION → REPORT → FOLLOW-UP**

## Security validation

Test that each role can access only the records and actions permitted by policy.

## Integrity validation

Test invalid relationships, incomplete records, invalid state transitions, unauthorized updates, and attempts to bypass lifecycle controls.

## Audit validation

Confirm material changes remain traceable and historical information is not silently lost.

## Performance validation

Verify common operational queries remain efficient as visit history, evidence metadata, findings, and actions grow.

## Readiness gate

Do not treat the database as production-ready until structural, workflow, security, integrity, audit, and performance checks have passed.
