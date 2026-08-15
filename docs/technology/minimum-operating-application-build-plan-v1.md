# Meridian Marine Co. — Minimum Operating Application Build Plan v1

## Objective

Build the smallest useful internal application that can run the core MMC service reliably.

## Release 1 — Core Operations

The first release should support:

- Client records
- Vessel records
- Visit scheduling/status
- Visit checklist completion
- Findings
- Evidence references
- Actions
- Severity/escalation
- Visit reports
- Follow-up status
- Operational history

## Primary workflow

**CLIENT → VESSEL → VISIT → FINDING → ACTION → REPORT → FOLLOW-UP**

## Operator experience

The operator should be able to open a vessel and immediately see:

- Current vessel status
- Last visit
- Open findings
- Open actions
- Upcoming visit
- Recent report
- Important owner instructions
- Relevant vendor activity

## Management experience

Management should be able to see:

- Today's visits
- Overdue actions
- Critical/Urgent findings
- Reports awaiting completion
- Vendor issues
- Client issues
- Operational workload

## Deferred until core workflow is proven

- Advanced analytics
- Complex automation
- Full client portal
- Deep vendor portal
- Advanced billing UI
- Non-essential integrations

## Construction rule

Do not build screens merely because they are possible. Every first-release feature must support the actual service-delivery workflow or a necessary control around it.
