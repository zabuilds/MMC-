# Meridian Marine Co. — Application Scaffold Reconciliation v1

## Reconciliation result

The `mmc/construction` branch previously contained the business and operating documentation foundation but no Next.js application scaffold was present at the branch root.

The first implementation slice therefore establishes the minimum application foundation without redesigning the approved business model.

## Implemented

- Next.js application package configuration
- TypeScript configuration
- Next.js environment typings
- Root application layout and metadata
- Base visual styling
- Canonical package domain model
- Initial public landing page scaffold

## Canonical commercial model

The application uses the locked MMC package architecture:

- Harbour — CI$225/month
- Steward — CI$395/month
- Reserve — CI$675/month
- Private — custom

## Construction boundary

This scaffold is intentionally small. It does not yet implement authentication, database persistence, client portal workflows, billing, vendor management, or operational dashboards.

Those systems should be added in vertical slices after the application foundation is validated.

## Next implementation slice

The next build target is the core data model and authenticated operations foundation: clients, vessels, service packages, visits, findings, actions, vendors, and reports.
