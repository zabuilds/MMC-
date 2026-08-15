# Meridian Marine Co. — Scaffold Reconciliation v1

## Verified baseline

The construction branch contains a minimal Next.js application with an existing branded landing page and package definitions.

Current package definitions are authoritative for construction:

- Harbour — CI$225/month
- Steward — CI$395/month
- Reserve — CI$675/month
- Private — Custom

## Construction decision

Preserve the existing landing page and package definitions. Do not replace the public-facing foundation while building the internal operating product.

## First application slice

Add the internal operations workspace as a separate route and build outward from the approved workflow spine:

**CLIENT → VESSEL → VISIT → FINDING → ACTION → REPORT → FOLLOW-UP**

The first route may use controlled mock data until the database layer is connected. Mock data must remain clearly separated from production data access.

## Reconciliation boundary

Do not introduce billing, authentication, vendor portals, or advanced analytics into the first slice. Establish the operator workflow first, then connect persistent data and authorization.
