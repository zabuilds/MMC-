# Meridian Marine Co. — Evidence, Reporting & Client Communication Architecture v1

## Purpose

Define how MMC turns a completed vessel oversight event into reliable evidence, useful reporting, clear client communication, and traceable follow-through.

## Evidence principle

Evidence exists to support an observation, action, incident, or completion claim.

**CAPTURE → ASSOCIATE → VERIFY → RETAIN**

Every material evidence item should retain:

- Source record
- Vessel
- Visit/event context
- Capture timestamp
- Evidence type
- Description/context
- Storage reference
- Appropriate access classification

## Evidence hierarchy

### Primary

Direct observations and supporting photographs/video/documents.

### Secondary

Vendor information, client-provided information, or other supporting material.

### Derived

Conclusions, trends, summaries, or recommendations based on underlying evidence.

Derived information should remain traceable to the underlying source.

## Visit-to-report flow

**VISIT COMPLETED → FINDINGS RECORDED → EVIDENCE ASSOCIATED → QA CHECK → REPORT GENERATED → APPROVED → DELIVERED → ACTIONS TRACKED**

## Report structure

A standard client report should make the owner's situation understandable quickly.

Recommended structure:

1. Executive status
2. Visit/date information
3. Overall vessel condition summary
4. Normal observations
5. Findings requiring attention
6. Urgent/critical matters
7. Evidence highlights
8. Actions/vendor coordination
9. Items awaiting owner decision
10. Next scheduled oversight

## Report quality gate

Before delivery verify:

- Correct client
- Correct vessel
- Correct visit
- Required sections present
- Findings accurately represented
- Evidence correctly associated
- Priority levels correct
- No inappropriate internal information exposed
- Open actions clearly identified
- Material claims supported

## Client communication model

Communication should answer:

**WHAT HAPPENED → WHAT DOES IT MEAN → WHAT NEEDS ATTENTION → WHAT DID MMC DO → WHAT DOES THE OWNER NEED TO DECIDE?**

## Communication priority

### Routine

Included in normal reporting cadence.

### Attention

Requires owner awareness but not immediate response.

### Urgent

Requires prompt communication and action.

### Critical

Requires immediate escalation through the approved emergency/escalation process.

## Communication channels

The application should treat the channel as metadata rather than business logic.

Possible channels include:

- Client portal
- Email
- Phone
- Approved messaging channel

The authoritative operational record remains the system record regardless of communication channel.

## Communication record

Material communication should preserve:

- Sender
- Recipient
- Channel
- Timestamp
- Related client/vessel
- Related visit/finding/action/incident where applicable
- Delivery status where available
- Relevant acknowledgement

## Owner decision workflow

When an owner decision is required:

**IDENTIFY DECISION → EXPLAIN CONTEXT → PRESENT OPTIONS/RECOMMENDATION → REQUEST DECISION → RECORD DECISION → EXECUTE AUTHORIZED ACTION → VERIFY → REPORT OUTCOME**

MMC should distinguish an owner's authorization from MMC's operational observation.

## Vendor communication

Vendor coordination should remain linked to the underlying finding/action.

**FINDING/ACTION → VENDOR REQUEST → RESPONSE → SCHEDULE → WORK → EVIDENCE → VERIFICATION → CLIENT UPDATE**

MMC coordinates but does not misrepresent itself as the technical contractor performing third-party work.

## Privacy and access

Client-facing reports should expose only information appropriate to the client relationship.

Internal notes, internal QA findings, sensitive access details, and other restricted information should remain protected.

## Historical integrity

Delivered reports should remain part of the service history.

Corrections should preserve an auditable version history rather than silently rewriting what was previously delivered.

## Automation boundaries

Automation may assist with:

- Report assembly
- Evidence organization
- Routine notifications
- Follow-up reminders
- Status summaries

Automation must not invent observations, fabricate evidence, silently alter priorities, or communicate material findings without the required human/authorization controls.

## Core value chain

**OBSERVE → DOCUMENT → EXPLAIN → COMMUNICATE → COORDINATE → VERIFY → CLOSE**

## Principle

The report is not the product by itself. The product is the owner's confidence that MMC knows what is happening, can show the evidence, communicates clearly, coordinates responsibly, and follows important issues through to closure.