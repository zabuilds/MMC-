# MMC Operations Transition Gaps

## Purpose

This record captures lifecycle mismatches that must not be silently resolved in application code or database persistence.

## Findings

Canonical finding transitions currently end at `Resolved -> Verified`. The Operations adapter also exposes `closed`, mapped to canonical `Resolved` for persistence compatibility. Because `Verified -> Closed` is not a canonical transition, the application must not present that transition as valid until the business rule is explicitly approved.

The adopted action-creation rule remains authoritative: an `open` finding may initiate an action, and creation of that action is the operational acknowledgement event. No separate database acknowledgement state is required.

## Visits

The Operations adapter exposes `cancelled`, but the canonical visit transition table has no cancellation branch. Cancellation therefore remains blocked at the canonical transition boundary unless a business-approved cancellation rule is added.

The canonical visit lifecycle includes `Reviewed -> Closed`, while the current Operations vocabulary does not expose `reviewed` as a selectable application state. This is a vocabulary/model reconciliation item, not permission to invent a new transition.

## Actions

The canonical action lifecycle supports `Open -> Assigned -> In Progress -> Completed -> Verified -> Closed` and a `Blocked` branch. Existing database status values do not losslessly represent every application status. The persistence mapping must continue rejecting unsupported/lossy mappings rather than silently downgrading them.

## Vendor workflow

The canonical vendor lifecycle permits escalation and cancellation branches. These require focused QA coverage before persistence wiring is expanded.

## QA workflow

`Pass` and `Pass With Notes` are terminal states under the current canonical table. `Fail -> Pending` is the explicit retry path.

## Required business decisions

1. Approve or reject `Verified -> Closed` for findings.
2. Define whether visit cancellation should be a canonical transition and, if so, its permitted source states.
3. Decide whether `Reviewed` needs to become an application-visible visit state or remain an internal canonical state.
4. Define lossless persistence representations for action `Assigned`, `Completed`, and `Blocked` if those states must be persisted directly.

## Construction rule

Until those decisions are approved, implementation should prefer validation, documentation, and test coverage over schema changes or guessed lifecycle transitions.
