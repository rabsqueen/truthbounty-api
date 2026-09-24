# V2-BE-088 — CI Parallelization Scaffold

This scaffold separates independent CI checks while retaining a deterministic
`Required Gates` aggregate.

Included jobs:
- Lint without file mutation
- Unit and coverage tests
- Build and generated-artifact drift detection
- Dependency audit, secret scanning, and CodeQL
- Container and Trivy scanning
- TypeORM migration validation with isolated PostgreSQL
- Sensitive-path review signal
- Required-gates aggregate

Before merging:
1. Confirm the Dockerfile builds successfully.
2. Verify `DATABASE_URL` matches the active data-source configuration.
3. Verify clean PostgreSQL migration execution.
4. Add Redis or other required services if tests need them.
5. Configure CODEOWNERS and branch protection for sensitive paths.
6. Require the exact `Required Gates` check in branch protection.
7. Test both pull-request and push events.
8. Verify cancellation does not leave checks pending.
9. Treat the sensitive-path warning as a signal, not an approval mechanism.
10. Pin third-party actions according to repository policy.

This is a review-ready scaffold, not proof of production readiness. No GitHub
branch, commit, or pull request is created by this artifact.
