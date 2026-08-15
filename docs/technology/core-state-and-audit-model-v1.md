# Meridian Marine Co. — Core State & Audit Model v1

## State rule

Each core operational entity has an explicit lifecycle state. State changes should be intentional and traceable.

## Required state families

### Client
Prospect/Onboarding/Active/Paused/Offboarding/Archived

### Vessel
Pending/Active/Restricted/Inactive/Archived

### Visit
Scheduled/In Progress/Completed/Reported/Closed

### Finding
New/Triaged/Action Required/In Progress/Resolved/Verified/Closed/Monitor

### Action
New/Ready/In Progress/Waiting/Blocked/Completed/Verified/Closed

### Report
Draft/Review/Delivered/Acknowledged/Archived

## Audit events

Audit records should capture where appropriate:

- Actor
- Timestamp
- Entity
- Event type
- Previous state
- New state
- Relevant reason/context
- Related record

## Immutability principle

Completed historical events and delivered reports should not be silently rewritten. Corrections should preserve the fact that a correction occurred.

## Operational consequence

The application can derive current state from controlled transitions while retaining the historical sequence needed for accountability and client confidence.