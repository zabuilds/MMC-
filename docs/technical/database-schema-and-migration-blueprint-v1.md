# Meridian Marine Co. — Database Schema & Migration Blueprint v1

## Purpose

Translate the approved MMC business data model into a controlled physical database implementation sequence without prematurely changing application behavior.

## Schema domains

### Identity and access

- profiles
- roles/role assignments
- access/audit support

### Commercial

- clients
- service plans
- package definitions
- partners/referrals
- billing/customer mapping support

### Vessel operations

- vessels
- vessel access information
- visits
- visit checklist/results
- findings
- actions
- evidence
- reports
- communications

### Service ecosystem

- vendors
- vendor relationships
- vendor actions/engagements
- operator assignments

### Control and quality

- incidents
- QA reviews
- risks
- risk controls
- capacity records

### Billing

The existing approved billing architecture remains authoritative. Database implementation must map to it rather than creating a parallel billing design.

## Relationship backbone

**clients → vessels → service_plans → visits → findings → actions → evidence/reports/communications**

Supporting relationships attach to the appropriate authoritative record.

## Migration sequence

### Migration 01 — Foundation

- Required extensions/settings
- Common timestamp conventions
- UUID strategy
- Shared audit conventions

### Migration 02 — Identity and access

- Profiles
- Roles
- Role assignments
- Initial access boundaries

### Migration 03 — Clients and vessels

- Client records
- Vessel records
- Client/vessel relationships
- Vessel operational metadata

### Migration 04 — Service plans

- Package definitions
- Active service plans
- Service scope/frequency
- Service status

### Migration 05 — Visits

- Visit records
- Scheduling/status fields
- Operator assignment
- Visit checklist/results

### Migration 06 — Findings and actions

- Findings
- Severity/priority
- Actions
- Due dates
- Ownership
- Verification/closure

### Migration 07 — Evidence and reports

- Evidence metadata
- Storage references
- Report records
- Report versions/delivery state

### Migration 08 — Communications and vendors

- Communication records
- Vendor records
- Vendor relationships
- Vendor engagements

### Migration 09 — Incidents, QA, risks, capacity

- Incident records
- QA reviews
- Risks/controls
- Capacity records

### Migration 10 — Billing integration support

Implement only the data structures required to support the already-approved Stripe/billing architecture.

No duplicate pricing or billing state machine should be introduced.

### Migration 11 — Policies and performance

- Row-level security policies
- Required indexes
- Foreign-key integrity
- Data-access boundaries
- Query-performance review

### Migration 12 — Audit and reporting support

- Required audit history
- Operational reporting views/materialized structures where justified
- Derived metrics based on authoritative records

## RLS principle

Access should follow business roles and need-to-know boundaries.

At minimum distinguish:

- Client-visible records
- Internal operations records
- Sensitive evidence
- Administrative records
- Billing records

Policies must be designed around actual application roles rather than broad unrestricted access.

## Integrity rules

The database should enforce important relationships where practical:

- A visit belongs to a vessel/service context.
- A finding traces to its source event.
- An action traces to a finding or authorized request.
- Evidence traces to an authoritative source record.
- Reports derive from underlying operational records.
- Material billing references map to the approved billing architecture.

## Index strategy

Prioritize indexes for high-frequency operational queries such as:

- Active clients
- Active vessels
- Visits by date/status
- Open findings
- Open/overdue actions
- Active incidents
- Client/vessel lookups
- Vendor engagements
- Billing/customer mappings

Do not create indexes speculatively without a query/use-case justification.

## Migration safety

Each migration should be:

- Small enough to reason about
- Ordered by dependency
- Reversible where practical
- Tested before production application
- Recorded in migration history

Avoid destructive schema changes during the initial construction phase unless explicitly approved.

## Data history

Operational history should not be silently overwritten when historical context matters.

Prefer explicit status transitions, timestamps, and audit records over replacing important historical facts.

## Construction gate

Before applying the first production database migration, verify:

**BUSINESS MODEL → PHYSICAL SCHEMA → RLS → INDEXES → MIGRATION ORDER → APPLICATION DEPENDENCIES**

All must agree.

## Principle

The database is the authoritative operational foundation. It should enforce the business relationships and security boundaries while remaining simple enough to evolve as real MMC usage produces better evidence.