# MMC Operations Transition Matrix QA

## Purpose

Static QA cases for the canonical Operations lifecycle. These cases are intended to verify that UI and adapter behavior does not invent transitions or silently reinterpret states.

## Visits

| Current | Next | Expected |
|---|---|---|
| Planned | Scheduled | Allow |
| Scheduled | Started | Allow |
| Started | Completed | Allow |
| Completed | Reviewed | Allow |
| Reviewed | Closed | Allow |
| Planned | Started | Reject |
| Scheduled | Completed | Reject |
| Completed | Closed | Reject |
| Closed | Reviewed | Reject |
| Any | Same state | Reject |
| Any | Cancelled | Reject until canonical cancellation transition exists |
| Cancelled | Any | Reject |

## Findings

| Current | Next | Expected |
|---|---|---|
| Open | Triaged | Allow |
| Triaged | Actioned | Allow |
| Actioned | Monitored | Allow |
| Actioned | Resolved | Allow |
| Monitored | Resolved | Allow |
| Resolved | Verified | Allow |
| Open | Actioned | Reject |
| Triaged | Resolved | Reject |
| Verified | Closed | Reject pending business decision |
| Closed | Any | Reject |
| Any | Same state | Reject |

## Actions

| Current | Next | Expected |
|---|---|---|
| Open | Assigned | Allow |
| Assigned | Blocked | Allow |
| Assigned | In Progress | Allow |
| Blocked | Assigned | Allow |
| Blocked | In Progress | Allow |
| In Progress | Completed | Allow |
| Completed | Verified | Allow |
| Verified | Closed | Allow |
| Open | In Progress | Reject |
| Open | Completed | Reject |
| Completed | Closed | Reject |
| Closed | Any | Reject |
| Any | Same state | Reject |

## Finding → Action

| Finding state | Action creation | Expected |
|---|---|---|
| Open | Create new action | Allow; action creation is the operational acknowledgement event |
| Acknowledged | Create new action | Allow only for legacy/application compatibility |
| Actioned | Create new action | Reject; use existing action workflow |
| Verified | Create new action | Reject |
| Closed | Create new action | Reject |

## QA requirements

1. Every allowed transition must be accepted by the canonical transition table.
2. Every rejected transition must remain rejected even when invoked directly through the adapter.
3. Same-state transitions must always reject.
4. Unsupported cancellation must never be simulated as another canonical state.
5. Finding → Action must preserve the originating finding context.
6. Persistence mappings must reject lossy conversions.
7. These tests must remain independent of production data.

## Unresolved business decisions

- Whether `Verified → Closed` should be added to the finding lifecycle.
- Whether visit cancellation should receive a canonical transition.
- Whether the application should expose canonical visit `Reviewed` and `Closed` states directly.
- Whether action `Assigned`, `Completed`, and `Blocked` require database representation changes.
