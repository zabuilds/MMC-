# MMC Construction Source-of-Truth Reconciliation

Status: Active construction baseline
Date: 2026-08-16

## Findings

- `main` contains the original `app/` and `lib/` baseline plus repository metadata.
- `mmc/construction` contains the same baseline areas and additionally contains `src/`, `tests/`, TypeScript configuration, Next.js environment typing, and the construction package manifest.
- The construction branch package manifest identifies the application as `meridian-marine-co` and uses Next.js 16, React 19, TypeScript, and Supabase SSR/client packages.
- The GitHub compare endpoint is currently unable to resolve the branch comparison, so this record does not claim a complete file-by-file equivalence audit.

## Construction Rule

`mmc/construction` is the active construction baseline for continued MMC engineering work. Existing `main` work remains preserved and must not be force-updated, overwritten, or merged merely to resolve ambiguity.

## Next Reconciliation Step

Perform a file-level comparison of `main` and `mmc/construction` when the repository comparison surface is available. Reconcile only concrete missing authoritative pieces. Preserve the existing construction architecture unless a verified dependency or runtime requirement requires a change.

## Guardrails

- Do not create duplicate Stripe products or prices.
- Do not change approved pricing.
- Do not modify production Supabase schema without a verified requirement.
- Do not overwrite or force-update `main`.
- Do not claim verification that has not been executed.
