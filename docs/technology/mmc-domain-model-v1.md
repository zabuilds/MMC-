# Meridian Marine Co. — Domain Model v1

## Purpose

Translate the approved operating system into a stable application model before database implementation.

## Core entities

### Client
The owner/customer relationship and communication/authorization profile.

### Vessel
The physical asset being overseen. A client may have multiple vessels.

### Service Agreement
Defines package, scope, pricing, start/end dates, communication preferences, and authority limits.

### Visit
A scheduled or completed MMC field service event tied to a vessel.

### Finding
An observed condition identified during a visit or other authorized interaction.

### Action
A tracked task created from a finding, request, readiness need, vendor activity, or management decision.

### Service Request
An owner or internal request requiring review, authorization, scheduling, execution, and closeout.

### Approval
A recorded authorization associated with a request, action, expenditure, or scope change.

### Vendor
A third-party service provider in the MMC network.

### Vendor Job
A specific assignment to a vendor, linked to a vessel/client and optionally a finding or request.

### Report
A client-facing or internal operational record summarizing a visit, event, or service activity.

### Readiness Event
An owner arrival/departure preparation workflow tied to a vessel and expected use.

### Emergency Event
A storm, safety, security, damage, or other high-priority operational event.

### Communication
A durable record of material owner/vendor/internal communication where retention is appropriate.

## Relationship principles

- Client owns the relationship; vessel belongs to the client relationship.
- Service agreement governs package and authority.
- Visits create findings and actions.
- Requests create approvals, actions, and vendor jobs as required.
- Vendor jobs can resolve findings/actions/requests.
- Reports summarize operational activity and evidence.
- Readiness and emergency events use the same underlying action/request infrastructure where practical.
- Operational history must remain traceable from client → vessel → event → finding/action → resolution.

## Design principle

Prefer a small set of durable core entities with explicit relationships over isolated feature-specific records that duplicate the same operational facts.