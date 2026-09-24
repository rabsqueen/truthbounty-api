# V2-BE-089 Evidence Checklist

- [ ] Expand migration tested against the previous application version.
- [ ] Expand migration tested against the new application version.
- [ ] Backfill tested for bounded batches and safe retries.
- [ ] Restart and interruption behavior tested.
- [ ] Concurrency behavior tested.
- [ ] Replay and idempotency behavior tested.
- [ ] Contract phase blocked until compatibility window expires.
- [ ] Backup completion evidence recorded.
- [ ] Restore verification evidence recorded.
- [ ] Rollback limits and irreversible operations documented.
- [ ] Maintenance window and abort controls documented.
- [ ] Errors are bounded, observable, redacted, and fail closed.
- [ ] Lint, typecheck where available, security, build, migration, and artifact
      checks completed.
- [ ] Evidence mapped to every acceptance criterion.
- [ ] Human maintainer approval recorded for sensitive changes.
