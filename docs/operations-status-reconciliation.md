# MMC Operations Status Reconciliation

The Operations vertical slice on `main` is retained as source material and is not merged wholesale into construction.

## Existing Operations vocabulary

- Visit: `scheduled`, `assigned`, `in_progress`, `completed`, `cancelled`
- Finding: `open`, `acknowledged`, `actioned`, `verified`, `closed`
- Action: `open`, `assigned`, `in_progress`, `blocked`, `completed`, `verified`, `closed`

## Construction canonical vocabulary

The canonical construction layer remains authoritative for lifecycle transitions. Operations presentation labels must translate into canonical domain states rather than creating a second transition system.

## Reconciliation rules

- `scheduled`, `assigned`, `in_progress`, `completed`, and `cancelled` are presentation/domain values that require explicit mapping to the canonical Visit lifecycle before persistence.
- `acknowledged` must not silently become a new canonical Finding lifecycle state; it represents an operational acknowledgement and should be modeled separately if persistence requires it.
- Action states align closely with the canonical Action lifecycle and should reuse the canonical transition authority.
- Demo arrays in `lib/operations.ts` remain construction fixtures only.
- `app/operations/page.tsx` remains a presentation vertical slice and must not become the authority for business transitions.
- Package metadata remains commercial reference data and must be separated from operational state when persistence is introduced.

## Next implementation step

When implementation resumes, introduce explicit adapters from Operations vocabulary to canonical domain transitions, then wire the Operations UI through those adapters. Do not merge `main` into `mmc/construction` until this reconciliation is implemented and tested.
