# Meridian Marine Co. — Construction Readiness Reconciliation v1

## Objective

Compare the completed MMC operating model against the current construction branch without redesigning authoritative business decisions or overwriting existing work.

## Verified scaffold

The `mmc/construction` branch contains a Next.js 16 / React 19 TypeScript application foundation, with Supabase client dependencies already present.

The current application includes:

- Public landing page
- Operations dashboard shell
- Operations/ops route structure
- Package configuration
- Global styling/layout foundation

## Operating-model alignment already represented

### Commercial

The public landing page and package configuration establish the commercial presentation foundation.

### Operations

An operations dashboard shell already exists with client, vessel, visit, finding, action, vendor, and report-oriented concepts.

### Security direction

The operations dashboard explicitly recognizes that live operational data must not be exposed through an unauthenticated route.

## Reconciliation gaps

### 1. Live data layer

The operations dashboard currently uses placeholder values and explicitly identifies connected data as pending.

### 2. Authentication/authorization

The construction scaffold needs its authoritative authentication and authorization implementation reconciled before live operational data is connected.

### 3. Core operating records

The master operating model requires durable relationships for:

**CLIENT → VESSEL → SERVICE → VISIT → FINDING → ACTION → EVIDENCE → REPORT → COMMUNICATION → CLOSURE**

These are not yet represented as a verified live data model on this branch.

### 4. Supporting domains

The eventual construction must account for:

- Vendors
- Operators/users
- QA
- Incidents
- Risks
- Capacity
- Payments
- Analytics

### 5. Commercial baseline discrepancy requiring explicit reconciliation

The current package configuration contains Reserve at CI$675/month, while the authoritative commercial architecture established elsewhere specifies the highest recurring package at CI$695/month.

This is a reconciliation item, not permission to silently change pricing. The authoritative pricing decision must be confirmed before the package configuration is modified.

## Construction order

The safest next construction sequence is:

1. Reconcile the authoritative commercial package configuration.
2. Establish authentication and authorization boundaries.
3. Establish the core data model around client/vessel/service/visit/finding/action/evidence/report/communication/closure.
4. Connect the operations dashboard to protected live data.
5. Add QA, incidents, vendor, capacity, and management controls.
6. Add billing/payment integration according to the already-approved billing architecture.
7. Add analytics and management reporting.
8. Perform end-to-end security and operational verification.

## Non-destructive rule

This reconciliation does not delete, merge, overwrite, or reinterpret existing branches or prior work. It records the current construction state and identifies the next implementation dependencies.

## Current readiness conclusion

MMC is no longer blocked by lack of business definition. The operating model is sufficiently mapped to begin technical reconciliation.

The immediate technical dependency is the protected data/auth foundation, followed by the core operating record model.

## Principle

Build only what the operating model requires, preserve authoritative decisions, and resolve discrepancies explicitly before they become production behavior.