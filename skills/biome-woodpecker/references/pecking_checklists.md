# Woodpecker Pecking Checklists & Taint Analysis

This reference provides line-by-line inspection algorithms for each of the Woodpecker's Six Pecking Vectors.

---

## Vector 1: Spec & Boundary Fidelity & Anti-Amnesia
* [ ] **Mutation Boundary Allowlist**: Verify every file in the diff is declared in `target_mutation_plan` (`.biome/project_index.json`). Reject unapproved file sprawl.
* [ ] **Requirements Ledger Verification**: Compare `.biome/requirements_ledger.json` against the diff. Verify zero deletions or regressions of previously approved customer requirements.
* [ ] **Contract Fidelity**: Ensure exported routes, HTTP methods, status codes, and JSON schemas match the approved Design Spec verbatim.

---

## Vector 2: Security & Defensive Hardening
* [ ] **Injection Flaws**:
  - SQL: Ensure all queries use parameterized placeholders (`$1`, `?`). Ban string interpolation/formatting in queries.
  - Command: Verify no user input enters `exec`, `spawn`, `popen`, or shell commands without strict allowlists.
  - Path Traversal: Verify all file paths resolve against safe root directories using `path.resolve` and strict prefix checks.
* [ ] **Authentication & Authorization**: Verify protected routes enforce session/token authentication and tenant isolation checks.
* [ ] **Secrets & Taint**: Verify no API keys, private certificates, or credentials are hardcoded into diff lines.

---

## Vector 3: Pathological Edge Cases & Concurrency
* [ ] **Null / Nil Safety**: Check for unprotected property accesses on optional objects.
* [ ] **Async & Promise Rejections**: Ensure all async functions wrap external I/O in `try/catch` or return explicit errors.
* [ ] **Race Conditions**: Check for non-atomic read-modify-write patterns on shared resources.
* [ ] **Resource Leaks**: Ensure database connections, HTTP response bodies, and file descriptors are closed via `defer` / `finally`.

---

## Vector 4: Micro-Architecture & Type Rigor
* [ ] **Single Responsibility**: Ensure newly introduced or modified files do not exceed 300 lines of complex logic.
* [ ] **Type Rigor**: Ban `any` in TypeScript, raw untyped dictionaries in Python, or interface bypasses in Go.
* [ ] **Vanity Test Rejection**: Reject test suites that test only trivial getters/setters while skipping negative error paths and edge cases.

---

## Vector 5: Anti-Slop & Human-Grade Craftsmanship
* [ ] Verify Chameleon standards: no `*Helper`, `*Manager`, `*ProcessorHandler`.
* [ ] Verify UI copy contains zero corporate AI buzzwords (`seamless`, `empower`, `revolutionary`).
* [ ] Strip line-by-line conversational code comments.

---

## Vector 6: UI/UX Craftsmanship & Visual Integrity
* [ ] Verify Modal Containment: `max-h-[85vh]`, internal scroll, sticky footer.
* [ ] Verify Defensive Tables: `whitespace-nowrap` on codes and badges within horizontal overflow containers.
* [ ] Verify Navigational Singularity: no duplicate controls across headers and sidebars.
* [ ] Verify Apple HIG 4-tier dark elevation and dual-theme tokens.
