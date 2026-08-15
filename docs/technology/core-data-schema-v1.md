# Meridian Marine Co. — Core Data Schema v1

## Core entities

- clients
- vessels
- visits
- findings
- actions
- reports
- evidence
- vendors
- vendor_assignments
- approvals
- audit_events

## Core relationships

Client 1→many Vessels.
Vessel 1→many Visits.
Visit 1→many Findings.
Finding 1→many Actions where required.
Visit 1→1 primary Report, with report revisions where required.
Visit 1→many Evidence.
Finding 1→many Evidence.
Vendor 1→many Vendor Assignments.
Actions may reference Vendor Assignments.
Material decisions may create Approvals.
Material state changes and sensitive operational events create Audit Events.

## Shared fields

Operational records should generally preserve:

- Stable identifier
- Status
- Created timestamp
- Updated timestamp
- Created by
- Updated by
- Relevant owner/client relationship
- Archive/closure information where applicable

## Design principle

Operational history should be append-aware and auditable. Important changes should not destroy the prior context needed to understand what happened.

## Deliberate boundary

Billing, subscriptions, advanced analytics, messaging integrations, and automation can attach to the core model later without changing the fundamental client/vessel/visit workflow.