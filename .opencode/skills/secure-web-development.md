---

name: secure-web-development
description: Use when designing or implementing secure web applications using React, TypeScript, Vite, Node.js, APIs, and modern software engineering practices. Covers collaborative workflow, architecture, security-by-design, robust programming, observability, testing, and software engineering principles.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Secure Web Development

## Collaborative Workflow

1. **ASK** what should be done before starting.
2. **EXPLAIN** the planned changes and why.
3. **WORK** one concern or file at a time.
4. **REPORT** what was changed after each step.
5. **CONFIRM** before continuing major changes.
6. **VERIFY** using build, lint, and tests.

---

## Tech Stack

* Framework: React + TypeScript + Vite
* Styling: CSS Modules or Tailwind
* Deployment: Vercel / Netlify

---

## Project Structure

```text
src/
  components/     — reusable UI components
  sections/       — page sections/features
  layouts/        — layout wrappers
  hooks/          — custom hooks
  utils/          — helpers, validation, constants
  assets/         — images, icons, fonts
  App.tsx         — composition only
  main.tsx        — entry point
```

Rules:

* `App.tsx` composes sections/routes only.
* One file = one primary responsibility.
* Reusable UI belongs in `components/`.
* Layout wrappers belong in `layouts/`.
* Prefer separating data fetching from presentation.
* Keep business logic outside JSX whenever practical.

---

# Architecture & Design Principles

## KISS

* Prefer the simplest solution that satisfies requirements.
* Avoid unnecessary abstractions and dependencies.

## YAGNI

* Implement only current requirements.
* Avoid speculative features and abstractions.

## DRY

* Maintain a single source of truth.
* Extract duplicated logic after significant repetition.

## SRP

Every module, class, component, and service should have one primary responsibility.

### ❌ Bad

```ts
class UserManager {
  createUser() {}
  sendEmail() {}
  exportPDF() {}
}
```

### ✅ Good

```ts
class UserService {}
class EmailService {}
class ExportService {}
```

## Economy of Mechanism

* Keep systems as simple and small as possible.
* Less code means fewer bugs and easier auditing.

## Complete Mediation

* Verify permissions on every operation.
* Never trust previous authorization checks.
* Prefer short-lived credentials.

## Least Astonishment

* Systems must behave predictably.
* Function names must reflect actual behavior.

### ❌ Bad

```ts
deleteUser(); // actually performs soft delete
```

### ✅ Good

```ts
softDeleteUser();
hardDeleteUser();
```

## Open Design & Kerckhoffs's Principle

* Security must not depend on secrecy.
* Use battle-tested standards and protocols.
* Assume attackers understand the implementation.

---

# Security Principles

## Least Privilege

* Grant only the permissions required.
* Use restricted DB roles.
* Use scoped API tokens.
* Avoid running services as root.

## Fail-Safe Defaults

* Deny by default.
* Prefer fail-closed over fail-open behavior.

### ❌ Bad

```py
except:
    return True
```

### ✅ Good

```py
except Exception:
    return False
```

## Separation of Concerns

* Separate critical responsibilities.
* Isolate development, staging, and production environments.
* Avoid overlapping privileges.

## Zero Trust

* Never trust identity, origin, or input by default.
* Continuously verify permissions and assumptions.

## Attack Surface Reduction

* Remove unused features.
* Disable unnecessary services.
* Restrict endpoints and methods to only those required.
* Never hardcode secrets.

## Minimize Common Mechanism

* Reduce shared infrastructure where practical.
* Isolate sensitive components and workflows.

---

# Secure Architecture

## Layered Architecture

Layers:

* Presentation
* Business Logic
* Data Access
* Persistence

Rules:

* Layers communicate only with adjacent layers.
* UI never accesses persistence directly.
* Business logic belongs in services.
* Persistence belongs in repositories.

### ❌ Bad

```ts
function UserList() {
  db.query("SELECT * FROM users");
}
```

### ✅ Good

```ts
function UserList() {
  userService.getUsers();
}
```

## Modularity

* Prefer high cohesion.
* Prefer low coupling.
* Encapsulate implementation details.
* Define explicit interfaces.

## Abstraction

* Depend on interfaces, not implementations.
* Hide internal details.
* Never expose internal models directly.

### ❌ Bad

```json
{
  "email": "user@test.com",
  "password_hash": "..."
}
```

### ✅ Good

```json
{
  "id": 1,
  "email": "user@test.com"
}
```

## API Gateway Pattern

Centralize:

* Authentication
* Authorization
* Rate limiting
* Logging
* Auditing
* Request validation

## Architectural Decision Making

* Architecture depends on context.
* Prefer modular monoliths initially.
* Extract microservices only when justified by scale or ownership boundaries.

---

# Robust Programming

## Encapsulation

* Keep internal state private.
* Enforce invariants through controlled interfaces.
* Prevent invalid states.

### ❌ Bad

```py
account.balance = -999999
```

### ✅ Good

```py
account.deposit(100)
```

## State Validity

* Define invariants explicitly.
* Validate during construction.
* Validate before mutations.
* Validate after critical operations.
* Prefer immutability when practical.

## Input Validation

Treat all external data as malicious.

Validate:

* Type
* Format
* Length
* Range
* Business rules
* Authorization

### ❌ Bad

```js
await transfer(amount, to);
```

### ✅ Good

```js
if (typeof amount !== "number" || amount <= 0) {
  throw new Error("Invalid input");
}
```

Rule:

> Frontend validation never replaces backend validation.

## Error Handling

Never:

* Expose stack traces.
* Expose database details.
* Expose infrastructure details.
* Ignore exceptions.

Always:

* Return generic user-facing errors.
* Log detailed diagnostics internally.
* Handle failures explicitly.

---

## Defensive Programming

* Validate assumptions explicitly.
* Never rely on caller correctness.
* Check preconditions and postconditions.
* Assume dependencies may fail.
* Minimize failure blast radius.

---

# Observability

## Three Pillars

### Logs

Answer:

* What happened?
* When?

Requirements:

* Structured logs (prefer JSON).
* Severity levels:

  * DEBUG
  * INFO
  * WARNING
  * ERROR
* Log security-relevant events.

### Metrics

Track:

* Latency
* Error rates
* Resource utilization
* Business KPIs

### Traces

Track:

* Request flow
* Service boundaries
* Distributed failures

## Logging Security

Never log:

* Passwords
* Tokens
* API keys
* Session identifiers
* Secrets
* PII
* Sensitive business data

Prefer:

* Correlation IDs
* Structured logs
* Sanitized metadata

### ✅ Example

```json
{
  "event": "login_failed",
  "user_id": 123,
  "correlation_id": "abc123"
}
```

## Health Monitoring

Expose health checks for:

* Database
* Cache
* Authentication
* External APIs
* Message brokers

Health states:

* Healthy
* Degraded
* Unavailable

---

# Development Workflow

## Requirements First

Define:

* Functional requirements
* Non-functional requirements
* Out-of-scope features

Use user stories:

```text
As a [ROLE], I want [ACTION], so that [GOAL].
```

## MVP Strategy

* Build the minimum viable product first.
* Prioritize validation over completeness.
* Design for future evolution.

## Quality Assurance

Mandatory:

* Unit tests
* Integration tests
* Functional tests
* Logging
* Monitoring

## Development Process

* Use iterative development.
* Prefer trunk-based development.
* Require peer review.
* Prefer short-lived branches.
* Use automated CI/CD.

## Maintainability

* Prefer small, focused modules.
* Optimize for readability.
* Avoid clever code.

## Accessibility & Internationalization

Consider from the beginning:

* Screen readers
* Alt text
* Keyboard navigation
* Localization
* Internationalization

---

# Anti-Patterns

Avoid:

* God Objects
* God Services
* Spaghetti Architecture
* Circular dependencies
* Premature microservices
* Premature optimization
* Security by obscurity
* Hardcoded secrets
* Fail-open authorization
* Empty catch blocks

---

# Testing

Framework:

* Vitest
* React Testing Library
* jsdom

Commands:

```bash
npm run test
npm run test:coverage
```

Test:

* Happy paths
* Error paths
* Edge cases
* Invalid inputs

Rules:

* Mock external dependencies.
* Test failure scenarios explicitly.
* Maintain coverage ≥ 80%.

---

# Execution Rules

1. Modify one concern at a time.
2. Read existing files before creating new ones.
3. Read a file completely before modifying it.
4. Report changes after each modification.
5. Run build, lint, and tests after completing work.
6. A task is not complete if:

   * Build fails.
   * Lint fails.
   * Tests fail.
   * Coverage drops below threshold.
7. If requirements conflict with these rules, stop and ask.
8. Ask before major architectural changes.

---

# Engineering Philosophy

* Make it work.
* Make it maintainable.
* Make it secure.
* Scale only when necessary.

Assume:

* Every input can be malicious.
* Every dependency can fail.
* Every service can become unavailable.

Protect invariants aggressively.
Fail securely.
Observe everything that matters.
Never sacrifice security for convenience.
