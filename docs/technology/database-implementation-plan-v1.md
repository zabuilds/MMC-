# Meridian Marine Co. — Database Implementation Plan v1

## Core tables

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

## Relationship spine

clients 1→many vessels
vessels 1→many visits
visits 1→many findings
findings 1→many actions
visits 1→many reports
findings 1→many evidence
vendors 1→many vendor_assignments
vessels/visits/findings/actions/reports may reference vendor assignments where applicable
material approval decisions are represented explicitly

## Common record controls

Core operational records should use stable identifiers and include appropriate created/updated timestamps, lifecycle status, and ownership/context fields.

## Integrity requirements

- A visit must belong to a valid vessel.
- A vessel must belong to a valid client relationship.
- A finding must belong to a visit.
- An action must identify its originating finding or operational context.
- A report must identify the visit it represents.
- Evidence must identify the visit/finding context where applicable.
- Closed records must remain auditable.
- Material state changes must be traceable.

## Indexing priorities

Index fields used for:

- Client-to-vessel lookup
- Vessel visit history
- Open findings by severity
- Open/overdue actions
- Upcoming visits
- Report status
- Vendor assignments
- Audit history

## Migration order

1. Core identity and client/vessel relationships
2. Visits
3. Findings and actions
4. Reports and evidence metadata
5. Vendors and assignments
6. Approvals
7. Audit events
8. Indexes and constraints
9. Security/RLS policies
10. Validation and generated application types

## Rule

The database should support the operational workflow first. Advanced analytics and secondary modules should extend the model rather than distort the core operational relationships.
