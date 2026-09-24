# V2 API Release Readiness Runbook

## Before release

1. Confirm the release commit and dependency lockfile.
2. Run required lint, typecheck where available, build, security, migration,
   artifact, and integration checks.
3. Confirm the Prisma persistence path and migration provider.
4. Verify authentication and authorization behavior.
5. Verify indexer replay, reorg, finality, and duplicate-event handling.
6. Confirm API errors are bounded, observable, redacted, and fail closed.
7. Confirm no API component authorizes protocol settlement, rewards, treasury,
   or governance.
8. Verify Optimism/EVM chain identity and reject unsupported runtime dependencies.
9. Confirm backup and restore evidence.
10. Obtain human maintainer approval for sensitive changes.

## Release stop conditions

Stop the release when:
- A required check is skipped, unavailable, or not reproducible.
- Security or secret scanning reports an unresolved blocking issue.
- Migration or rollback behavior is not understood.
- Indexer replay or reorganization handling is unverified.
- Logs expose secrets, personal data, credentials, or sensitive payloads.
- Retry, concurrency, or idempotency behavior is ambiguous.
- Observability is insufficient to detect and diagnose failure.
- Required maintainer approval is missing.

## Incident and recovery

Record:
- Incident owner.
- Start time and affected component.
- Last known safe release.
- Data integrity assessment.
- Backup and restore evidence.
- Retry/replay actions taken.
- Customer and protocol impact.
- Follow-up remediation and approval.
