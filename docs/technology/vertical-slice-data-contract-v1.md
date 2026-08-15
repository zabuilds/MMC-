# Meridian Marine Co. — Vertical Slice Data Contract v1

## Purpose

Define the minimum data contract for the first application slice without prematurely implementing unrelated domains.

## Core records

### Client
Identity, contact details, communication preferences, status, and emergency contacts.

### Vessel
Client relationship, vessel identity, location, access information, service package, status, and operating instructions.

### Visit
Vessel, visit type, scheduled/actual timing, operator, status, package scope, and completion state.

### Finding
Visit, title, observed condition, evidence references, severity, status, and timestamps.

### Action
Finding/request relationship, responsible party, due date, approval state, status, and completion/verification information.

### Report
Visit, report status, summary, findings/actions included, delivery state, and timestamps.

## Required relationship

**Client 1—N Vessel**

**Vessel 1—N Visit**

**Visit 1—N Finding**

**Finding 1—N Action**

**Visit 1—1 Report** for completed reportable visits.

## Integrity principles

- A visit cannot belong to an unknown vessel.
- A vessel cannot be active without an associated client.
- A finding must identify its originating visit.
- Material actions must retain their approval/status history.
- Reports must reference the visit they summarize.
- Records should use stable identifiers and timestamps.
