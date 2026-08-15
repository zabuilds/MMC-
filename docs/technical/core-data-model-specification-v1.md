# Meridian Marine Co. — Core Data Model Specification v1

## Purpose

Define the authoritative business records and relationships required for the MMC application before database implementation.

## Core entities

### Client
Represents the owner/customer relationship.

Key concepts:
- Identity
- Contact information
- Communication preferences
- Relationship status
- Client health
- Account notes

### Vessel
Represents the managed/observed vessel.

Key concepts:
- Vessel identity
- Type/classification
- Location/berth information
- Access information
- Operational status
- Complexity classification
- Client relationship

### Service Plan
Represents the recurring service arrangement attached to a client/vessel relationship.

Key concepts:
- Package/service level
- Scope
- Frequency
- Start/end status
- Billing relationship
- Service status

### Visit
Represents an actual oversight event.

Key concepts:
- Scheduled date/time
- Actual execution
- Operator
- Vessel
- Visit status
- Scope/checklist
- Notes
- Completion metadata

### Finding
Represents an observation discovered during a visit or other authorized interaction.

Key concepts:
- Observation
- Severity/priority
- Evidence
- Source visit
- Status
- Recommended action

### Action
Represents work required to address a finding or request.

Key concepts:
- Owner
- Status
- Due date
- Vendor involvement
- Client decision requirement
- Completion verification

### Evidence
Represents supporting photo/video/document evidence.

Key concepts:
- Source record
- Timestamp
- Evidence type
- Description
- Storage reference
- Access controls

### Report
Represents client-facing or internal reporting generated from service activity.

Key concepts:
- Source visit/findings/actions
- Report status
- Delivery status
- Version/history
- Client visibility

### Communication
Represents material client/vendor/operational communication.

Key concepts:
- Parties
- Channel
- Direction
- Timestamp
- Subject/content reference
- Related vessel/finding/action

## Supporting entities

### Vendor
Trusted third-party service provider.

### Operator
Person authorized to perform MMC operational work.

### Incident
Material unexpected event requiring escalation/response.

### QA Review
Review of service quality, evidence, reporting, or process compliance.

### Payment/Billing Record
Commercial record supporting the approved billing architecture.

### Risk
Material business or operational risk linked to a control framework.

### Capacity Record
Operational workload/capacity measurement supporting stage-gate decisions.

### Referral/Partner
Commercial source relationship and attribution record.

## Primary relationship chain

**CLIENT → VESSEL → SERVICE PLAN → VISIT → FINDING → ACTION → EVIDENCE → REPORT → COMMUNICATION → CLOSURE**

Supporting records may attach to the relevant object without becoming competing sources of truth.

## Record principles

1. Every material record has a stable identifier.
2. Material history is append-oriented rather than silently overwritten.
3. Findings remain traceable to their source.
4. Evidence remains traceable to the record it supports.
5. Actions remain accountable until closed or explicitly cancelled.
6. Reports derive from underlying operational records.
7. Communications can be linked to the business event they concern.
8. Derived metrics reference authoritative underlying records.
9. Access must follow role and business need.
10. Deletion/retention behavior must respect applicable policy and legal requirements.

## State principles

Operational records should use explicit states rather than ambiguous free-text status.

Examples:

**Visit:** scheduled → assigned → in_progress → completed → cancelled

**Finding:** open → acknowledged → actioned → verified → closed

**Action:** open → assigned → in_progress → blocked → completed → verified → closed

**Incident:** detected → assessed → escalated → contained → recovering → resolved → closed

## Auditability

Material changes should preserve sufficient history to answer:

- Who changed it?
- What changed?
- When did it change?
- Why did it change?
- What source/event caused the change?

## Technical boundary

This document defines the business model, not the final physical database schema. Column-level types, indexes, foreign keys, row-level security, migrations, and implementation details remain a subsequent construction step.

## Principle

The application database must represent MMC's operating model faithfully. The database should support the business—not force the business into arbitrary technical structures.