---
name: biome-woodpecker
license: Apache-2.0
description: >-
  Runs the unsparing Woodpecker (The Zero-Context Code Diff & Security Inspector)
  on active git diffs, pull request branches, or design docs. Pecks relentlessly
  across 6 vectors: Spec Fidelity, Security Taint, Pathological Edge Cases,
  Micro-Architecture, Anti-Slop (Chameleon), and UI Craftsmanship (Apple HIG).
  Also audits specification-to-code drift with --drift. Use when asked to review
  code diffs, inspect git diffs before commit, run security checks, verify pull requests,
  or detect documentation drift against live code.
---

# BIOME Woodpecker: Zero-Context Code Diff & Security Inspector

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-woodpecker` is the standalone command to invoke **The Woodpecker** (`agents/woodpecker.md`), the pre-commit diff auditor of the **BIOME Ecosystem**.

While the Goldfish swarm stress-tests specifications *before* code is written, **The Woodpecker inspects the raw `git diff` *after* The Beaver builds it**. It evaluates modifications with zero conversational memory, uncompromising security rigor, and strict anti-amnesia enforcement against the cumulative client requirements ledger.

```
[The Beaver Builds Code & Tests]
               │
               ▼
    [Active Git Working Diff]
               │
               ▼
┌──────────────────────────────┐
│       The Woodpecker         │ ◄─── Zero-context inspection across 6 Pecking Vectors
└──────────────┬───────────────┘
               │
      ┌────────┴────────┐
   [APPROVED]       [REJECTED]
      │                 │
      ▼                 ▼
[Atomic Commit]   [Beaver Self-Healing Loop]
```

---

## Invocation

```text
/biome-woodpecker [DesignDocPath] [--drift]
```

* `[DesignDocPath]`: Optional path to the approved Design Spec (e.g. `docs/designs/auth.md`).
* `--drift`: Executes Google EGM Drift Detection across `docs/designs/` vs. live codebase, emitting `{YYYY-MM-DD}_DRIFT_REPORT.md` (see [references/drift_detection_guide.md](references/drift_detection_guide.md)).

---

## The Six Pecking Vectors

The Woodpecker inspects the raw git diff line-by-line across six mandatory dimensions:

### 1. Spec & Boundary Fidelity & Anti-Amnesia
* **Scope Allowlist**: All modified files MUST match `target_mutation_plan` in `.biome/project_index.json`. Reject unauthorized file modifications.
* **Requirements Ledger Lock**: Check `.biome/requirements_ledger.json`. Guarantees that zero previously approved customer requirements or established features are regressed or deleted.
* **Contract Verification**: Exported APIs, HTTP routes, parameters, and error types must match the approved Design Spec verbatim.

### 2. Security Hardening & Taint Analysis
* **Injection Vulnerabilities**: SQL injection, command execution, path traversal (`../`), and template injections. Ensure parameterized queries everywhere.
* **Auth & Tenant Isolation**: Verify session authorization, JWT verification, and strict tenant ID scoping on all database queries.
* **Secrets Leakage**: Scan for hardcoded API keys, private keys, bearer tokens, or sensitive credentials.

### 3. Pathological Edge Cases & Concurrency
* **Null / Nil Safety**: Flag unhandled optional property lookups and potential panic / null-pointer triggers.
* **Async & Resource Management**: Unhandled async Promise rejections, missing try/catch blocks, unclosed database transactions, and file handle leaks.
* **Race Conditions**: Flag non-atomic read-modify-write sequences across concurrent goroutines or async threads.

### 4. Micro-Architecture & Type Rigor
* **Modularity**: Flag monolithic files exceeding 300 lines of complex logic. Decompose into focused services, handlers, and repositories.
* **Strict Typing**: Ban `any` in TypeScript, untyped `dict` escapes in Python, and empty interface abuses in Go.
* **Anti-Vanity Tests**: Reject shallow tests that cover only happy paths or getters/setters while ignoring failure branches.

### 5. Anti-Slop Craftsmanship (The Chameleon)
* Purge robotic compound naming: No `*Helper`, `*Manager`, `*ProcessorHandler`.
* Purge corporate AI marketing buzzwords (`seamless`, `empower`, `revolutionary`, `cutting-edge`) from UI copy.
* Strip line-by-line conversational comments. Consult [references/pecking_checklists.md](references/pecking_checklists.md).

### 6. UI/UX Craftsmanship & Visual Integrity (The Craftsman)
* **Modal Containment Law**: Modals must declare `max-h-[85vh]`, internal scroll, and a sticky action footer.
* **Defensive Table Law**: Data tables must enforce `whitespace-nowrap` on codes and badges within responsive horizontal scroll wrappers.
* **Navigational Singularity**: Ban duplicate theme/profile controls across navbars and sidebars.
* Enforce Apple HIG 4-tier dark elevation and valid SVG components (no font ligatures).

---

## Triage Thresholds: REJECTED vs. APPROVED

* **REJECTED**: Any Blocker or Major finding (security vulnerability, missing tenant check, ledger regression, unbounded modal, unhandled crash). Emits actionable defect citations and returns diff to The Beaver for self-healing repair (up to 2 cycles).
* **APPROVED**: Zero Blocker and Major findings. Permits minor nits. Authorizes semantic git commit (`feat(<scope>): ...`).

---

## Output Artifact Format

Generates `woodpecker_audit_report.md` structured as follows:

```markdown
# Woodpecker Code Diff Audit Report

## Verdict: [APPROVED | REJECTED]

### Execution Summary
* **Commit Target**: `feat(auth): implement session-based authentication`
* **Diff Lines Inspected**: `+142 / -18` across 4 files
* **Requirements Ledger Status**: Verified (100% features preserved)

### Vector Evaluation
1. **Spec & Boundary Fidelity**: [Pass | Fail]
2. **Security & Defensive Hardening**: [Pass | Fail]
3. **Pathological Edge Cases**: [Pass | Fail]
4. **Micro-Architecture & Type Rigor**: [Pass | Fail]
5. **Anti-Slop Craftsmanship**: [Pass | Fail]
6. **UI/UX Craftsmanship**: [Pass | Fail]

### Findings & Actionable Citations
* **[Blocker] internal/auth/service.go:44**: Unparameterized SQL query introduces injection risk.
* **[Major] web/src/components/CreateModal.tsx:18**: Missing `max-h-[85vh]` clips buttons on small viewports.
```
