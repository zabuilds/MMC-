# Meridian Marine Co. — Application Module Map v1

## Core modules

### Clients
Client profiles, contacts, preferences, approvals, agreements, and service history.

### Vessels
Vessel profiles, baseline, location, access, instructions, findings, and history.

### Visits
Scheduling, checklists, visit execution, evidence, findings, actions, and reports.

### Requests & Approvals
Owner requests, clarification, authorization, spending limits, scope changes, and status tracking.

### Vendors
Vendor directory, qualification, Preferred status, assignments, performance, and coverage.

### Readiness
Arrival/departure requests, preparation tasks, readiness status, and coordination.

### Emergencies
Storm monitoring, emergency events, escalation, damage documentation, and recovery actions.

### Operations
Daily queue, assignments, overdue work, blocked work, management review, and exceptions.

### Reporting
Client reports, operational summaries, evidence, and service history.

### Administration
Users, roles, permissions, configuration, audit history, and system controls.

## Navigation principle

The application should organize around the work MMC performs, not around database tables. Operators should be able to move from client → vessel → current work → history without losing context.

## Construction principle

Build the smallest coherent vertical slice first: client → vessel → visit → finding → action → report. Expand into vendors, readiness, emergencies, and analytics on top of the same core model.