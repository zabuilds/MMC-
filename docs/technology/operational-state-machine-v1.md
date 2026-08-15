# Meridian Marine Co. — Operational State Machine v1

## Purpose

Define controlled lifecycle states for the core MMC operating workflow.

## Visit lifecycle

**SCHEDULED → IN PROGRESS → COMPLETED → REPORT PENDING → REPORT DELIVERED → CLOSED**

Allowed exceptions:

- SCHEDULED → CANCELLED
- IN PROGRESS → BLOCKED
- BLOCKED → IN PROGRESS
- COMPLETED → REPORT PENDING
- CLOSED → REOPENED only when a material correction or follow-up requires it

## Finding lifecycle

**OPEN → ASSESSED → ESCALATED/QUEUED → ACTION IN PROGRESS → VERIFICATION → CLOSED**

Monitoring path:

**OPEN → MONITORING → REVIEWED → CLOSED/CONTINUED**

## Action lifecycle

**CREATED → ASSIGNED → IN PROGRESS → BLOCKED/WAITING → COMPLETED → VERIFIED → CLOSED**

An action may return to IN PROGRESS when verification fails.

## Report lifecycle

**DRAFT → QA REVIEW → APPROVED → DELIVERED → CORRECTED/REISSUED if necessary**

Material corrections must preserve the original report history.

## Approval lifecycle

**REQUESTED → APPROVED / DECLINED / EXPIRED**

An approval must be linked to the specific decision or scope requiring authorization.

## General transition rules

- Every state change must have a valid actor and timestamp.
- Invalid transitions must be rejected.
- Material transitions should preserve reason/context.
- Closed records remain auditable.
- Emergency escalation may bypass routine sequencing when safety or material risk requires it, but the exception must be recorded afterward.
