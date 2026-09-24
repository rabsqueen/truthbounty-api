# V2-BE-090 — Release Readiness Review Matrix

## Review status

- Overall status: `NOT_REVIEWED`
- Release decision: `PENDING`
- Review owner: `UNASSIGNED`
- Review date: `UNASSIGNED`
- Maintainer approval: `PENDING`

## Evidence rules

Every row must include:
- Test or inspection command.
- Environment and version.
- Date and reviewer.
- Result and relevant logs.
- Link or immutable artifact reference.
- Known limitations and follow-up actions.

| Domain | Required review | Evidence required | Status |
|---|---|---|---|
| Security | Authentication, authorization, input validation, secret scanning, redaction | Test output and security scan artifacts | NOT_REVIEWED |
| Architecture | Protocol boundary, EVM/Optimism semantics, no settlement authority | Architecture inspection and targeted tests | NOT_REVIEWED |
| Persistence | Prisma canonical path, schema consistency, migration safety | Schema/migration checks and compatibility evidence | NOT_REVIEWED |
| Indexer | Reorg handling, replay, finality, duplicate events, chain identity | Integration and regression test evidence | NOT_REVIEWED |
| Performance | Latency, throughput, resource limits, concurrency behavior | Repeatable benchmark output | NOT_REVIEWED |
| Recovery | Retry, restart, degraded dependency, dead-letter and recovery behavior | Failure-injection and recovery logs | NOT_REVIEWED |
| Observability | Structured logs, metrics, tracing, bounded and redacted errors | Dashboard/query examples and redaction tests | NOT_REVIEWED |
| Provenance | Lockfile integrity, generated artifact drift, dependency provenance | Build and artifact verification output | NOT_REVIEWED |
| API/OpenAPI | Contract accuracy, auth requirements, error responses | OpenAPI diff and endpoint checks | NOT_REVIEWED |
| Runbooks | Incident, rollback, backup/restore, maintenance and escalation procedures | Reviewed runbook and owner sign-off | NOT_REVIEWED |
| Governance | Sensitive change review and maintainer approval | PR review records and CODEOWNERS evidence | NOT_REVIEWED |

## Release decision rules

- Any missing mandatory evidence blocks release approval.
- Any unresolved critical or high-severity security finding blocks release approval.
- Any unbounded, unredacted, or fail-open failure mode blocks release approval.
- Any unclear persistence or migration ownership blocks release approval.
- A deployment rollback must not be represented as a database rollback without evidence.
- Review approval does not transfer protocol settlement, reward, treasury, or governance authority to the API.
