# Meridian Marine Co. — Data, Records & Information Governance v1

## Objective

Create a clean information structure for MMC before the technology layer is finalized, so every client, vessel, visit, finding, action, vendor interaction, and report can be traced reliably.

## Core record hierarchy

**CLIENT → VESSEL → SERVICE → VISIT → OBSERVATION/FINDING → ACTION → EVIDENCE → REPORT → COMMUNICATION → CLOSURE**

## Core records

### Client

Maintain only information necessary to operate the client relationship and deliver contracted service.

### Vessel

Maintain a persistent vessel record containing identity, location, access arrangements, service configuration, baseline, watch points, and relevant history.

### Visit

Each visit should have a unique operational record containing date/time, operator, scope, status, observations, evidence, findings, actions, and report status.

### Finding

A finding should be traceable to its source visit and evidence and should carry severity, status, owner, next action, and closure information.

### Action

Every material action should have an accountable owner, status, due date where applicable, supporting evidence, and closure verification.

### Evidence

Evidence should remain linked to the relevant vessel, visit, observation/finding, and report. Use dated records and avoid ambiguous standalone files.

### Report

Reports should reference the underlying visit and findings so the client-facing record can be traced back to source evidence.

### Communication

Material client/vendor communications should be associated with the relevant vessel, finding, or action whenever practical.

## Record states

Use clear lifecycle states such as:

**DRAFT → ACTIVE → OPEN → IN PROGRESS → AWAITING OWNER → AWAITING VENDOR → VERIFIED → CLOSED → ARCHIVED**

Not every record requires every state.

## Data quality rules

- One authoritative record per business object
- Avoid duplicate client/vessel records
- Use consistent names and identifiers
- Record dates/times consistently
- Preserve source evidence
- Distinguish observation from conclusion
- Distinguish reported information from verified information
- Never silently overwrite material history
- Record corrections through controlled updates where practical

## Evidence integrity

Original evidence should be preserved where practical. Material corrections or replacements should remain traceable.

Do not alter evidence to make a report appear cleaner.

## Access principle

Access should follow role and business need. Sensitive client, vessel, financial, and operational information should not be broadly exposed.

## Retention principle

Retain records for as long as they are required for legitimate operational, contractual, financial, safety, risk, or compliance purposes, subject to the company's eventual legal and regulatory requirements.

Do not invent a fixed retention period before the appropriate legal review.

## Information lifecycle

**COLLECT → VERIFY → USE → UPDATE → RETAIN → ARCHIVE/DELETE WHEN APPROPRIATE**

## Technology readiness

The eventual application/database should mirror this logical record structure rather than forcing operations to fit arbitrary software tables.

## Management controls

Periodically check for:

- Duplicate records
- Missing required fields
- Orphaned evidence
- Open findings without owners
- Overdue actions
- Reports without supporting records
- Unclosed incidents
- Inconsistent vessel identifiers

## Principle

MMC's operational history is a business asset. Clean, traceable records increase service quality, accountability, client confidence, and the value of the eventual technology system.