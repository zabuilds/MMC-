# Meridian Marine Co. — Core Data Security Boundaries v1

## Access model

Use role-based access with least privilege.

### Operator
Operational client, vessel, visit, finding, action, evidence, and report access required for assigned work.

### Management
Broader operational, vendor, quality, financial-summary, and exception visibility.

### Client
Access only to their own approved client/vessel information and delivered reports/actions appropriate to their relationship.

### Vendor
Access only to assignments and information required to perform the assigned work.

### Administrator
Technical and security administration without automatically granting unrestricted business visibility where separation is practical.

## Sensitive data

Access credentials, alarm codes, keys, security details, payment data, and unnecessary personal information require stronger controls than ordinary operational notes.

## Tenant boundary

A client must never be able to access another client's records. Vessel records inherit the client relationship for authorization purposes.

## Audit boundary

Material changes to findings, actions, approvals, reports, access-sensitive records, and administrative permissions should be auditable.

## Security principle

Default to deny. Grant only what is required for the current role and operational task.