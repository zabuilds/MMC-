# MMC Finding → Action Persistence Contract

## Purpose

Define the eventual write boundary without executing persistence yet.

## Required invariants

1. An action must retain its originating finding identifier.
2. The finding must be in an action-eligible canonical state before creation.
3. The action's initial canonical state must be `Open`.
4. The database write must use only an explicitly supported status mapping.
5. Finding and action writes must be atomic when both records change in the same operation.
6. Duplicate action creation must be prevented by an idempotency boundary tied to the originating finding and requested action.
7. Authorization must be evaluated before mutation and remain enforced by the database policy layer.
8. A failed status mapping must abort the write rather than silently downgrade the canonical state.

## Proposed transaction shape

1. Load the finding by identifier.
2. Verify the caller is authorized for the property/visit context.
3. Validate the canonical finding state permits action creation.
4. Validate the requested action payload.
5. Map only the action state using `persistence-status-map.ts`.
6. Insert the action with the originating finding reference.
7. If the finding itself must advance, validate and persist that finding transition only when a lossless database mapping exists.
8. Commit the transaction atomically.
9. Return the canonical action representation to the application.

## Current blocker

The existing findings database status model cannot represent `acknowledged`, `actioned`, or `verified` losslessly. Therefore the first persistence implementation should create an action only when the requested operation can be represented without collapsing the finding's canonical state.

No schema change is authorized by this contract. A future schema change requires a separate reviewed migration and reconciliation pass.
