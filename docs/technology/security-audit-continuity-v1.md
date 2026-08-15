# Meridian Marine Co. — Security, Audit & Business Continuity v1

## Security principles

- Least privilege
- Default deny
- Role-based access
- Client data isolation
- Sensitive-data minimization
- Secure authentication
- Controlled administrative access
- Auditability of material changes

## Sensitive information

Security credentials, access codes, keys, alarm details, and similar information should receive restricted treatment and should not appear in ordinary reports or broad operational views.

## Audit

Material events should preserve:

**ACTOR → EVENT → RECORD → BEFORE → AFTER → TIMESTAMP → CONTEXT**

Important operational records should not be silently overwritten or deleted.

## Business continuity

MMC operations must remain recoverable if software, connectivity, automation, or a vendor becomes unavailable.

Fallback principles:

- Maintain a visible manual work queue
- Preserve essential vessel/visit information
- Maintain emergency communication capability outside the application
- Preserve report and evidence access
- Record offline work and reconcile it when systems recover

## Recovery priorities

1. Safety and emergency communications
2. Active vessel visits
3. Critical/Urgent findings
4. Client approvals and time-sensitive decisions
5. Vendor assignments
6. Reporting
7. Routine administration

## Recovery validation

Periodically verify that operational data can be restored and that the team can continue essential service during a system outage.
