# Meridian Marine Co. — Data Ownership & State Model v1

## Purpose

Keep operational records authoritative, auditable, and easy to reason about as the application grows.

## Ownership

### Client
Owns client-specific preferences, instructions, approvals, and relationship information.

### Vessel
Owns vessel-specific baseline, location, access, condition history, and operational instructions.

### MMC
Owns operational records created through its service: visits, findings, actions, reports, vendor coordination, and internal workflow state.

### Vendor
Provides service information, quotes, job updates, completion information, and supporting evidence.

## State principles

Every workflow record should have:

- A clear current state
- A state history where material
- An assigned owner
- A next action
- A timestamp
- A relationship to the originating event/request where appropriate

## Audit principles

Material changes should be attributable to an authorized user or system process. Important approval, scope, cost, severity, and status changes should not silently overwrite history.

## Evidence principle

Photos, videos, documents, and other evidence should remain associated with the event or finding that produced them rather than existing as unstructured orphan files.

## Financial principle

Amounts, approvals, vendor costs, and client charges should be traceable to the request/action/job that caused them.

## Security principle

Client information, vessel access details, emergency contacts, vendor records, and internal notes should be separated by authorization level and exposed only to users who need them for their role.
