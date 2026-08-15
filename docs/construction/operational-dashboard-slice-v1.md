# Meridian Marine Co. — Operational Dashboard Vertical Slice v1

## Objective

Connect the application foundation to the operational data model through the smallest useful internal dashboard slice.

## First slice

The dashboard should surface:

- Active clients
- Active vessels
- Visits due soon
- Open Critical/Urgent findings
- Open actions
- Vendor jobs requiring attention
- Reports awaiting completion

## Navigation

- Dashboard
- Clients
- Vessels
- Visits
- Findings
- Actions
- Vendors
- Reports

## Initial vessel view

Each vessel view should provide:

- Vessel identity and status
- Owner/client
- Package
- Location
- Next visit
- Latest report
- Open findings
- Open actions
- Active vendor jobs
- Relevant service instructions

## Construction boundaries

This slice should not yet implement:

- Client self-service portal
- Stripe billing
- Complex permissions
- Automated notifications
- Emergency dispatch
- Advanced analytics

Those capabilities remain later controlled slices.

## Acceptance criteria

An authorized MMC operator should be able to open the dashboard, identify what requires attention, open a vessel, understand its current status, and follow an item into its underlying operational record.
