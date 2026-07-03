# Copilot instructions

Use the following guidance for this repository, adapted from `.opencode/skills/secure-web-development.md`.

## When working on secure web features

- Ask what should be done before starting.
- Explain the planned changes and why.
- Work one concern or file at a time.
- Report what changed after each step.
- Confirm before major changes.
- Verify with build, lint, and tests.

## Architecture and design

- Prefer KISS, YAGNI, DRY, and SRP.
- Keep one primary responsibility per module/component.
- Use layered architecture: presentation, business logic, data access, persistence.
- UI should not access persistence directly.
- Prefer modular monoliths unless scale or ownership justifies splitting.

## Security

- Treat all external data as malicious.
- Validate type, format, length, range, business rules, and authorization.
- Deny by default and fail closed.
- Use least privilege, scoped credentials, and short-lived tokens where possible.
- Never hardcode secrets.
- Never log passwords, tokens, API keys, session IDs, secrets, PII, or sensitive business data.

## Robust programming

- Enforce invariants through controlled interfaces.
- Validate assumptions explicitly.
- Handle failures explicitly and avoid silent fallbacks.
- Return generic user-facing errors and log details internally.

## Observability

- Prefer structured logs.
- Track latency, error rates, resource use, and business KPIs.
- Expose health checks for critical dependencies.

## Development workflow

- Define functional and non-functional requirements first.
- Prefer iterative, trunk-based development with peer review.
- Keep code readable and avoid clever abstractions.
- Consider accessibility and internationalization early.

## Testing

- Use unit, integration, and functional tests.
- Mock external dependencies.
- Test happy paths, error paths, edge cases, and invalid inputs.
