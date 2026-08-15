# MMC Construction Complete Gate

## Must-fix before integration

- Resolve current application build failure through actual CI/Vercel diagnostics.
- Run the domain validation and failure-recovery test suites successfully.
- Centralize state-transition validation in domain modules.
- Remove duplicated business-state definitions and fixtures.
- Confirm UI routes only consume domain/control decisions.
- Confirm no construction fixture is treated as production data.

## Required for production

- Implement persistent database model and migrations.
- Implement server-side API contracts and authorization.
- Implement authentication and resource-level access controls.
- Implement audit persistence and immutable history.
- Implement evidence storage and access controls.
- Implement production QA/report workflow.
- Implement billing entitlement synchronization.
- Implement reliable automation, retries, and idempotency.
- Establish observability, error handling, backups, and recovery procedures.
- Complete end-to-end production acceptance testing.

## Post-launch enhancements

- Advanced management analytics.
- Deeper vendor performance analytics.
- Expanded automation and reminders.
- Additional client portal conveniences.
- Capacity forecasting.
- Advanced reporting and trend analysis.
- Additional integrations.

## Construction exit criteria

MMC leaves construction only when the must-fix list is closed and the core domain workflows have passed the acceptance suite. Production requirements then become the implementation roadmap rather than additional architecture discovery.

## Guiding rule

Do not expand the feature surface while a core control, state-transition, security, or build-integrity issue remains unresolved.
