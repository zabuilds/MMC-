# Meridian Marine Co. — Authentication, Roles & Access-Control Blueprint v1

## Purpose

Define who can access MMC systems, what they can see, what they can change, and which actions require elevated authority before authentication is implemented.

## Role model

### Client / Owner

Can access information associated with their own client relationship and authorized vessels.

Typical access:

- Own vessel overview
- Service status
- Visit history intended for client visibility
- Client-facing reports
- Relevant findings/actions
- Approved communications
- Billing information intended for the client

Should not access:

- Other clients
- Internal operational notes
- Internal QA records
- Internal risk records
- Other clients' evidence or communications
- Administrative controls

### Operator

Performs authorized vessel oversight work.

Typical access:

- Assigned vessels
- Assigned visits
- Visit checklists
- Findings/actions needed for assigned work
- Evidence capture
- Operational communications required for execution

Should not automatically access:

- Unassigned client accounts
- Billing administration
- Sensitive commercial information
- High-level management controls unless specifically authorized

### Operations / Coordinator

Manages scheduling, assignments, communications, findings, actions, vendors, and service workflow.

Typical access:

- Operational client/vessel records
- Visits and scheduling
- Findings/actions
- Vendor coordination
- Operational communications
- Service reporting workflow

### Manager / QA

Oversees quality, exceptions, incidents, and operational performance.

Typical access:

- Operations records
- QA reviews
- Incident records
- Risk/control information
- Capacity information
- Management reporting

### Administrator

Manages platform configuration and access controls.

Typical access:

- User and role administration
- System configuration
- Security settings
- Audit records
- Integration configuration

Administrative access should not automatically imply unrestricted business-data access where separation is practical.

### Founder / Executive

Has broad business visibility required to manage MMC.

Typical access:

- Commercial pipeline
- Clients and vessels
- Operations
- Capacity
- QA
- Risks/incidents
- Financial and billing oversight
- Management reporting

## Access principles

1. Default deny.
2. Grant only the access required for the user's role and responsibilities.
3. Client access is scoped to their own authorized relationship.
4. Operator access is scoped to assigned work wherever practical.
5. Sensitive records receive additional protection.
6. Administrative capability is separated from ordinary operational access where practical.
7. Elevated actions require explicit authorization.
8. Material actions should be auditable.

## Resource-level authorization

Access should be evaluated at multiple levels:

**USER → ROLE → CLIENT → VESSEL → RECORD → ACTION**

A user having access to the application does not automatically grant access to every record.

## Sensitive information

Treat the following as potentially sensitive:

- Vessel access details
- Security-related information
- Private client contact information
- Financial/billing information
- Private evidence
- Internal incident details
- Internal risk assessments
- Credentials/secrets

Secrets must never be stored as ordinary application content.

## Authentication baseline

The eventual authentication implementation should support:

- Secure sign-in
- Session management
- Account recovery
- Role assignment
- Account deactivation
- Protection against unauthorized access
- Appropriate auditability

Authentication provider implementation is intentionally deferred until the backend platform is ready.

## Authorization checks

Every protected operation should conceptually answer:

**WHO IS REQUESTING THIS? → WHAT ROLE DO THEY HAVE? → WHAT RESOURCE ARE THEY ACCESSING? → ARE THEY AUTHORIZED FOR THAT RESOURCE? → IS THIS ACTION PERMITTED?**

## Elevated actions

Examples requiring stronger authorization or explicit role control:

- Changing user roles
- Granting vessel access
- Changing service ownership
- Editing material historical records
- Managing billing configuration
- Changing security settings
- Closing critical incidents
- Overriding operational controls

## Deactivation

When a user leaves MMC or no longer needs access:

**DEACTIVATE ACCESS → PRESERVE REQUIRED HISTORY → REVIEW ASSIGNED WORK → REASSIGN RESPONSIBILITIES → VERIFY ACCESS REMOVAL**

Do not delete historical records merely because a user is no longer active.

## Audit requirements

Material security and business actions should retain sufficient audit information to identify:

- User
- Action
- Resource
- Timestamp
- Result
- Relevant reason/context where required

## Construction boundary

This document defines authorization behavior and role boundaries. It does not yet implement authentication, database RLS, session handling, or provider configuration.

## Principle

MMC security should be invisible to the client when it works correctly, but strict underneath: each person sees what they need, can do what they are authorized to do, and leaves an accountable record of material actions.