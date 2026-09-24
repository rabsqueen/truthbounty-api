# V2-BE-089 — Migration Safety Runbook

## Migration sequence

1. **Expand**
   - Add backward-compatible schema elements.
   - Avoid dropping or renaming fields used by the previous application.
   - Deploy the expand change independently where possible.

2. **Migrate**
   - Backfill in bounded batches.
   - Record progress and failure state.
   - Make retries safe and idempotent.
   - Support interruption and restart without duplicate effects.

3. **Contract**
   - Remove obsolete schema elements only after the old application version
     is no longer supported and compatibility evidence is recorded.
   - Treat destructive changes as potentially irreversible.

## Rollback boundaries

- A deployment rollback is not automatically a database rollback.
- Document every irreversible operation before execution.
- Do not run destructive rollback or restore commands from an unreviewed CI job.
- Require explicit human maintainer approval for database, authentication, and
  indexer-sensitive changes.

## Backup requirements

Before a production migration:

- Record backup identifier and completion timestamp.
- Verify that the backup is restorable in an isolated environment.
- Record restore validation evidence.
- Keep credentials and connection strings out of logs and artifacts.

## Maintenance-window controls

- Define the start and end of the maintenance window.
- Define abort conditions and an owner authorized to stop the migration.
- Define expected lock duration and acceptable service degradation.
- Stop on unbounded lock waits, unexpected row counts, integrity failures, or
  redaction failures.

## Provider note

The current repository metadata identifies SQLite for Prisma migrations. Any
future provider transition requires a separate, explicitly reviewed migration
plan and must not be inferred from this scaffold.
