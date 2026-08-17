# MMC Operations State & Transition QA Master Specification

## Purpose

This is the source-level QA master specification for the Operations domain. It defines the allowed business transitions independently from persistence implementation and prevents UI screens from inventing lifecycle behavior.

## Visit lifecycle

| Current | Allowed next | Notes |
|---|---|---|
| Planned | Scheduled | Visit becomes scheduled |
| Scheduled | Started | Visit begins |
| Started | Completed | Field work reported complete |
| Completed | Reviewed | Operational review occurs |
| Reviewed | Closed | Visit lifecycle is complete |
| Any | Cancelled | **Not supported by canonical transition model** |

## Finding lifecycle

| Current | Allowed next | Notes |
|---|---|---|
| Open | Triaged | Finding acknowledged operationally |
| Triaged | Actioned | Action path initiated |
| Actioned | Monitored / Resolved | Work may remain under observation or be resolved |
| Monitored | Resolved | Monitoring outcome resolves finding |
| Resolved | Verified | Outcome is verified |
| Verified | — | Terminal in canonical model |

### Finding → Action rule

An **Open** finding may initiate an action. The action creation event serves as the operational acknowledgement event; no additional database acknowledgement state is required.

A finding already in `Actioned`, `Resolved`, or `Verified` must not create a duplicate new action through the same initiation path.

## Action lifecycle

| Current | Allowed next | Notes |
|---|---|---|
| Open | Assigned | Ownership established |
| Assigned | Blocked / In Progress | Work can begin or be blocked |
| Blocked | Assigned / In Progress | Blocker cleared or work resumes |
| In Progress | Completed | Work reported complete |
| Completed | Verified | Evidence/outcome verification required |
| Verified | Closed | No further operational attention required |
| Closed | — | Terminal |

## Verification rules

- Completed does not equal Verified.
- Verified requires sufficient evidence of the required outcome.
- Closed follows Verified for canonical actions.
- A UI must not expose a transition that the canonical transition table rejects.

## Persistence safety

- UI lifecycle vocabulary must be translated through the Operations adapter before persistence.
- Unsupported or lossy mappings must fail explicitly.
- Existing RLS and authorization remain authoritative.
- No UI-only transition may silently create a different database meaning.

## QA edge cases

1. Same-state transition must be rejected.
2. Backwards transition must be rejected unless explicitly listed.
3. Cancellation must not be exposed for canonical visits.
4. Open finding → action is allowed.
5. Closed/verified finding → new action is rejected.
6. Duplicate active action for a finding must be prevented by the persistence boundary.
7. Completed action cannot skip directly to Closed.
8. Verified action cannot return to In Progress.
9. Blocked action may return to Assigned or In Progress.
10. Persistence errors must not leave the UI claiming a successful write.

## Construction status

This specification is source-level only. It does not authorize schema changes or production-data seeding. Live end-to-end verification remains a separate environment/data prerequisite.