# Meridian Marine Co. — Security, Risk & Data Governance Foundation v1

## Purpose

Define the non-repository security and governance rules that the future MMC application must enforce.

## 1. Access principles

- Least privilege
- Role-based operational access
- No shared operator credentials
- Sensitive actions require authenticated users
- Access should be removable immediately when no longer required

## 2. Operational roles

### Owner/Client
Can view authorized vessel information, reports, findings, requests, approvals, and communications for their account.

### MMC Operator
Can perform assigned operational work within authorized scope.

### MMC Management
Can oversee clients, vessels, operations, approvals, vendors, reporting, and escalations.

### Vendor
Should receive only the information required to perform an authorized job.

### Administrator
Can manage system configuration and access but should not automatically receive unrestricted business data merely because of technical privileges.

## 3. Sensitive data categories

Treat the following as sensitive operational information:

- Client contact information
- Emergency contacts
- Vessel access instructions
- Keys/access credentials
- Security information
- Property/vessel condition records
- Photos/videos
- Vendor pricing and commercial information
- Billing/payment records
- Internal operational notes

## 4. Evidence integrity

Material findings should retain:

- Who recorded them
- When they were recorded
- Related vessel/visit
- Evidence references
- Material state changes

Historical records should not be silently rewritten.

## 5. Approval controls

Financial or scope-expanding actions require explicit authorization unless a documented emergency authority applies.

Approval records should identify the approver, time, scope, and applicable spending authority.

## 6. Security incidents

Security incidents should be recorded separately from ordinary findings and escalated according to severity.

## 7. Data retention

MMC should retain operational records long enough to support client service continuity, contractual obligations, financial reconciliation, incident review, and reasonable business needs. Final retention periods should be confirmed against applicable legal and contractual requirements before production launch.

## 8. Privacy principle

Collect only information reasonably required to provide the contracted service. Do not expose one client's vessel information to another client, vendor, or unauthorized operator.

## 9. Risk principle

The application should fail safely: uncertain authorization, incomplete access information, missing critical context, or unsafe conditions should trigger clarification, restriction, escalation, or delay rather than silent assumptions.
