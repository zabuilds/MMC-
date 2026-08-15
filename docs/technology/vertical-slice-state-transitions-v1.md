# Meridian Marine Co. — Vertical Slice State Transitions v1

## Client

Prospect → Onboarding → Active → Paused → Offboarding → Archived

## Vessel

Pending → Active → Restricted → Inactive → Archived

## Visit

Scheduled → In Progress → Completed → Reported → Closed

Alternate: Scheduled → Cancelled or Scheduled → Limited Completion.

## Finding

New → Triaged → Action Required → In Progress → Resolved → Verified → Closed

Alternate: New → Monitor.

## Action

New → Ready → In Progress → Waiting → Blocked → Completed → Verified → Closed

## Report

Draft → Review → Delivered → Acknowledged/Recorded → Archived

## Transition principle

State changes should reflect real operational events. The system should prevent logically invalid transitions where practical and preserve material history rather than silently rewriting past states.
