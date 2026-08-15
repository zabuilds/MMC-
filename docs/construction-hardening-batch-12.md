# MMC Construction Hardening — Batch 12

## Critical implementation matrix

| Domain | Transition | Required validation | Audit event | Failure state | Test requirement |
|---|---|---|---|---|---|
| Visit | Planned → Scheduled | authorized operator + valid schedule | VISIT_SCHEDULED | scheduling blocked | valid/invalid scheduling |
| Visit | Scheduled → Started | assigned operator + correct vessel | VISIT_STARTED | visit remains scheduled | unauthorized start |
| Visit | Started → Completed | required observations/evidence | VISIT_COMPLETED | visit remains active | missing evidence |
| Finding | Open → Triaged | severity + accountable owner | FINDING_TRIAGED | finding remains open | missing severity |
| Action | Open → Assigned | accountable assignee | ACTION_ASSIGNED | action remains open | missing assignee |
| Decision | Requested → Approved | authorized decision maker | OWNER_DECISION_APPROVED | decision remains pending | unauthorized approval |
| Decision | Requested → Declined | authorized decision maker | OWNER_DECISION_DECLINED | action may stop/escalate | unauthorized decline |
| Vendor | Pending Authorization → Authorized | required owner approval | VENDOR_AUTHORIZED | vendor blocked | authorization absent |
| Vendor | Authorized → Assigned | valid vendor + scope | VENDOR_ASSIGNED | job remains authorized | invalid vendor |
| Vendor | Assigned → Scheduled | schedule + vendor confirmation | VENDOR_SCHEDULED | job remains assigned | missing schedule |
| Vendor | Scheduled → In Progress | valid start condition | VENDOR_STARTED | job remains scheduled | invalid start |
| Vendor | In Progress → Completed | required completion evidence | VENDOR_COMPLETED | job remains active | missing evidence |
| Vendor | Completed → Verified | MMC verification | VENDOR_VERIFIED | completion remains unverified | premature verification |
| QA | Pending → Pass | all required checks pass | QA_PASSED | report blocked | required failure |
| QA | Pending → Fail | failed control recorded | QA_FAILED | report blocked | failure recording |
| Report | Draft → Review | required content present | REPORT_SUBMITTED_FOR_REVIEW | report remains draft | incomplete report |
| Report | Review → Approved | QA approval | REPORT_APPROVED | report remains review | approval without QA |
| Report | Approved → Delivered | approved report + valid recipient | REPORT_DELIVERED | report remains approved | delivery failure |
| Exception | Open → Resolved | remediation + verification | EXCEPTION_RESOLVED | exception remains open | premature resolution |

## Universal mutation contract

Every transition must satisfy:

`identity → access → current state → transition → prerequisites → evidence/authorization → idempotency → state change → audit`

## Failure invariant

If validation fails, the prior valid business state remains unchanged and no downstream business action is triggered.

## Audit invariant

A successful state transition produces exactly one corresponding canonical audit event.

## Idempotency invariant

Retrying the same logical mutation does not produce a second business consequence or duplicate audit event.

## Implementation gate

This matrix becomes the authoritative checklist for future API handlers, persistence adapters, UI actions, automation, and integration tests. Any implementation that cannot satisfy the matrix is not construction-complete.
