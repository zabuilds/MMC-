# Meridian Marine Co. — Billing & Financial Operations v1

## Purpose

Define the financial operating model before payment activation.

## Package billing

Each active vessel/client relationship should have:

- Package
- Billing frequency
- Agreed recurring amount
- Effective date
- Billing status
- Customer/payment reference when activated

## Financial lifecycle

**PACKAGE SELECTED → BILLING READY → INVOICED/CHARGED → PAYMENT CONFIRMED → RECONCILED**

Exception states:

- Payment failed
- Payment overdue
- Subscription paused
- Subscription cancelled
- Billing discrepancy

## Service-cost tracking

Track direct operating costs against the relevant vessel/service activity where practical:

- Operator time
- Travel
- Vendor coordination
- Approved third-party work
- Other direct service costs

Vendor work paid by the client should remain clearly distinguished from MMC recurring service revenue.

## Management economics

Management should be able to understand:

**RECURRING REVENUE → DIRECT SERVICE COST → CONTRIBUTION → OVERHEAD → OPERATING RESULT**

## Package economics

Package performance should be reviewed by actual workload, including visit time, travel, reporting, coordination, and exception burden.

## Billing controls

Financial records should support:

- Idempotent payment/event handling
- Clear billing status
- Reconciliation
- Audit history
- Separation of client funds/third-party charges from MMC service revenue where applicable
- Controlled credits/refunds/adjustments

## Activation boundary

Payment processing is intentionally not activated by this document. The operating model is being prepared so the eventual billing integration can be connected without redesigning the core service workflow.
