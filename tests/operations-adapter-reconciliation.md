# Operations Adapter Reconciliation Verification

The adapter boundary has been reviewed against the canonical transition maps.

## Verified contracts

- Visit `assigned -> in_progress` resolves through the `Scheduled -> Started` canonical path.
- Cancelled visits are rejected rather than being silently converted to another state.
- Finding `open -> acknowledged` resolves through `Open -> Triaged` semantics.
- Finding `verified -> closed` remains rejected pending the explicit business decision to add that canonical edge.
- Action `verified -> closed` remains accepted.
- Finding action creation remains permitted from `open` and `acknowledged`, and blocked for verified/closed findings.

## Result

No safe adapter implementation change is warranted from this audit. The current differences are intentional vocabulary mappings or explicitly deferred lifecycle decisions.
