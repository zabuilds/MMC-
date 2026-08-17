# MMC Operations Lifecycle Reconciliation

## Purpose

This record compares the canonical transition definitions currently present in `src/lib/domain/transitions.ts` with the Operations lifecycle vocabulary used by the adapter. It is a construction/QA record only. It does not authorize schema changes or production-data writes.

## Confirmed canonical lifecycles

### Visits

Planned → Scheduled → Started → Completed → Reviewed → Closed

The Operations adapter exposes scheduled, assigned, in_progress, completed, and cancelled. `assigned` is currently mapped to Scheduled, while `cancelled` is explicitly rejected by the adapter because there is no canonical cancellation transition.

**Gap requiring explicit decision:** the adapter has no `planned`, `reviewed`, or `closed` application states, and its cancellation state has no canonical transition.

### Findings

Open → Triaged → Actioned → Monitored/Resolved → Verified

The Operations adapter exposes open, acknowledged, actioned, verified, and closed.

Current semantic mapping:
- open → Open
- acknowledged → Triaged
- actioned → Actioned
- verified → Verified
- closed → Resolved

**Confirmed gap:** the canonical transition table ends at Verified and does not define Verified → Closed, while the adapter exposes Closed as a terminal state. This must be resolved by an explicit business decision before persistence for that transition is enabled.

### Actions

Open → Assigned → In Progress/Blocked → Completed → Verified → Closed

The Operations adapter vocabulary matches the canonical lifecycle semantically.

Database mapping remains intentionally conservative: open → new, in_progress → in_progress, verified → verification, closed → closed. Assigned, completed, and blocked have no lossless database representation and must not be silently collapsed.

### Owner decisions

Requested → Pending → Approved/Declined/Expired

No Operations adapter mismatch has been introduced in the current construction layer, but this lifecycle still needs direct UI coverage before persistence is expanded.

### Vendors

Pending Authorization → Authorized → Assigned → Scheduled → In Progress → Completed → Verified

Additional escalation/cancellation paths exist at multiple stages.

**QA requirement:** vendor lifecycle needs explicit tests for every escalation and cancellation branch because these are not simple linear transitions.

### Reports

Draft → Review → Approved → Delivered → Archived

No current contradiction identified in the canonical definition. UI coverage remains a QA task.

### QA

Pending → Pass/Pass With Notes/Fail

Fail → Pending

Pass and Pass With Notes are terminal in the current canonical definition.

**QA requirement:** downstream behavior must not imply that Pass or Pass With Notes can be reopened unless a future canonical transition is added.

### Exceptions

Open → Resolved

Resolved is terminal.

## Construction decisions already adopted

1. An Open finding may initiate an action.
2. Creating that action is the operational acknowledgement event.
3. No synthetic `acknowledged` database status is introduced.
4. Persistence must reject any mapping that would lose business meaning.
5. Existing authorization/RLS boundaries remain authoritative.

## Explicit blockers / decisions required

1. **Finding Verified → Closed:** decide whether this transition is canonical, or whether Verified is terminal and Closed should be removed from the application finding lifecycle.
2. **Visit cancellation:** decide whether cancellation is a true terminal state or whether cancellation should be represented through an exception/workflow outside the canonical visit lifecycle.
3. **Visit Reviewed/Closed states:** decide whether the application should expose the complete canonical lifecycle or intentionally use a reduced operational vocabulary.
4. **Action Assigned/Completed/Blocked persistence:** decide whether these states should remain application-only until a database representation is added, or whether a lossless existing database workflow can be identified.
5. **Vendor and QA branch coverage:** add focused tests before persistence is expanded for those domains.

## Safe implementation rule

Until each blocker above has an explicit business decision, construction may improve validation, UI presentation, test coverage, documentation, and adapter boundaries. Construction must not invent transitions, silently collapse states, or alter production schema/data to make the models appear consistent.
