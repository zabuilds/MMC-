# Meridian Marine Co. — Database Security & RLS Plan v1

## Security model

Use default-deny access with explicit policies for authenticated roles and approved operational relationships.

## Client isolation

Clients may access only records belonging to their client relationship.

## Operator access

Operators may access operational records required for assigned work.

## Management access

Management may access the broader operational dataset needed for oversight, quality, financial, and exception management.

## Vendor access

Vendors may access only the minimum records required for active assignments.

## Administrator access

Administrative access is restricted to system/configuration functions and should not become a shortcut around operational authorization.

## Sensitive data

Keys, access codes, credentials, security details, and similarly sensitive information should use stronger controls and should not be exposed through ordinary reporting views.

## Auditability

Material authorization and lifecycle changes should generate auditable events where appropriate.

## Policy principle

RLS should enforce business boundaries at the data layer, not rely solely on front-end hiding or application conventions.
