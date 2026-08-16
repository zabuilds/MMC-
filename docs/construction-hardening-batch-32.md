# MMC Construction Hardening — Batch 32

## Operations adapter verification

Reviewed the committed Operations adapter against the canonical transition definitions.

### Finding

The adapter is structurally correct but its current status mappings expose semantic mismatches that must be resolved before it is used as a production mutation boundary:

- Visit `completed -> cancelled` maps to `Completed -> Closed`, which is not a canonical transition.
- Finding `closed` currently maps to canonical `Verified`, which makes `verified -> closed` collapse to the same state and prevents a distinct terminal close transition.
- The canonical finding lifecycle uses `Open -> Triaged -> Actioned -> Monitored/Resolved -> Verified`, while the Operations vocabulary contains `open -> acknowledged -> actioned -> verified -> closed`.

### Safety decision

Do not alter the adapter or canonical transitions by guesswork. The status semantics need an explicit business decision before production mutation wiring.

### Next target

Resolve the Operations-to-canonical status semantics, then update the adapter and regression tests together.
