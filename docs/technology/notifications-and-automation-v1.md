# Meridian Marine Co. — Notifications & Automation v1

## Purpose

Make sure important operational events reach the right person without creating notification noise.

## Notification priorities

### Immediate
Critical findings, emergency conditions, major security/access issues.

### Time-sensitive
Urgent findings, owner approvals, material vendor delays, significant readiness issues.

### Routine
Visit completion, report delivery, scheduled reminders, ordinary action updates.

### Management
Overdue actions, workload/capacity warnings, repeated vendor exceptions, service-quality signals.

## Core automation triggers

- Visit scheduled
- Visit approaching
- Visit completed
- Critical/Urgent finding created
- Owner approval requested
- Approval received/declined/expired
- Vendor assignment created
- Vendor acknowledgment missing
- Vendor assignment delayed
- Action overdue
- Report ready for QA
- Report delivered
- Finding ready for verification
- Finding closed

## Routing principle

**EVENT → CLASSIFY → ROUTE → NOTIFY → ACKNOWLEDGE → ESCALATE IF REQUIRED → LOG**

## Notification discipline

Automations must not duplicate an existing immediate communication path, overwhelm clients, or create false urgency.

## Auditability

Material automated actions should record what triggered them, when they ran, and their outcome.

## Failure handling

If an automation fails, the underlying operational record must remain visible in the appropriate queue so work is not silently lost.
