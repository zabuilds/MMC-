# Meridian Marine Co. — Operational Workflow State Machine v1

## Purpose

Define the controlled lifecycle of MMC's core operational records so the future application can enforce consistent progression, accountability, escalation, and closure.

## Master service lifecycle

**SERVICE PLAN → SCHEDULE → ASSIGN → VISIT → FINDING → ACTION → EVIDENCE → REPORT → COMMUNICATE → VERIFY → CLOSE → RETAIN**

## Visit state machine

**SCHEDULED → ASSIGNED → IN_PROGRESS → COMPLETED**

Cancellation path:

**SCHEDULED/ASSIGNED → CANCELLED**

### Rules

- A scheduled visit requires sufficient vessel/service context.
- Assignment identifies the responsible operator.
- In-progress means execution has begun.
- Completed requires required visit information and evidence to be recorded.
- A cancelled visit requires a reason and, where appropriate, rescheduling.

## Finding state machine

**OPEN → ACKNOWLEDGED → ACTIONED → VERIFIED → CLOSED**

### Rules

- Every finding must have a source event.
- Priority/severity must be explicit.
- Critical or urgent findings trigger immediate escalation according to policy.
- A finding should not be closed solely because an action was created.
- Closure requires appropriate verification or an explicitly authorized disposition.

## Action state machine

**OPEN → ASSIGNED → IN_PROGRESS → COMPLETED → VERIFIED → CLOSED**

Exception path:

**IN_PROGRESS → BLOCKED → IN_PROGRESS**

### Rules

- Every action has an accountable owner.
- Due dates are explicit where applicable.
- Blocked actions require a reason.
- Completed means the work is reported as done.
- Verified means MMC has sufficient evidence that the required outcome occurred.
- Closed means the action no longer requires operational attention.

## Incident state machine

**DETECTED → ASSESSED → ESCALATED → CONTAINED → RECOVERING → RESOLVED → CLOSED**

### Rules

- Not every issue is an incident; incidents are material unexpected events requiring elevated response.
- Severity and impact are established during assessment.
- Escalation depends on severity, client impact, safety, property risk, and policy.
- Closure requires documented resolution and appropriate review.

## Report state machine

**DRAFT → REVIEW → APPROVED → DELIVERED → ARCHIVED**

### Rules

- Draft information can remain internal.
- Review validates completeness and quality.
- Approved reports are suitable for intended delivery.
- Delivered records capture the client-facing delivery event.
- Archived reports remain historical records and should not be silently replaced.

## Communication lifecycle

**DRAFT → READY → SENT → ACKNOWLEDGED**

Where acknowledgement is not applicable, the communication may remain **SENT** with the reason recorded.

Material communications should be linked to the relevant client, vessel, finding, action, incident, visit, or billing context where applicable.

## Evidence lifecycle

**CAPTURED → ASSOCIATED → VERIFIED → RETAINED**

Evidence should retain its source relationship and sufficient metadata to establish when and why it was collected.

## Escalation model

Operational priority should use explicit levels such as:

**ROUTINE → ATTENTION → URGENT → CRITICAL**

Escalation can move upward when new information increases risk or impact.

A critical event should never depend on a routine workflow queue.

## Closure rule

A record is not considered complete merely because its visible task appears finished.

Closure should answer:

**WHAT HAPPENED → WHAT WAS DONE → WHAT EVIDENCE EXISTS → WAS THE OUTCOME VERIFIED → DOES ANYTHING REMAIN OPEN?**

## Exception handling

If a normal state transition cannot occur:

**IDENTIFY BLOCKER → RECORD REASON → ASSIGN OWNER → ESCALATE IF REQUIRED → RESOLVE BLOCKER → RESUME WORKFLOW**

Avoid silently forcing records into a later state just to make dashboards appear clean.

## Audit trail

Material state transitions should preserve:

- Previous state
- New state
- User/operator
- Timestamp
- Reason/context where required
- Related source event

## Client visibility

Not every internal state is client-facing.

The application should distinguish internal operational states from client-facing communication states so clients receive useful information without exposing unnecessary internal records.

## Automation boundary

Automation may advance routine transitions when the required conditions are objectively satisfied.

Automation must not bypass authorization, evidence requirements, escalation controls, or verification simply to complete a workflow.

## Core principle

MMC workflows should make the correct operational behavior easy to follow and the important exceptions impossible to hide.