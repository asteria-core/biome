---
name: biome-woodpecker
license: Apache-2.0
disable-model-invocation: true
description: >-
  Runs the unsparing Woodpecker (The Zero-Context Code Diff & Security Inspector)
  on any active git diff to expose vulnerabilities, spec drift, and edge-case bugs.
---

# BIOME Woodpecker: Zero-Context Code Diff & Security Inspector

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-woodpecker` is the standalone command to invoke **The Woodpecker** (`agents/woodpecker.md`), the 4th pillar animal in the **BIOME Ecosystem**.

While the Goldfish swarm audits the text specification *before* code is written, **The Woodpecker audits the actual source code diff *after* The Beaver builds it**.

```
[The Beaver Builds Code & Tests]
               │
               ▼
   [Active Git Working Diff]
               │
               ▼
┌──────────────────────────────┐
│       The Woodpecker         │ ◄─── Zero-context inspection across 4 Pecking Vectors
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
/biome-woodpecker [DesignDocPath]
```
* If `[DesignDocPath]` is specified (e.g. `docs/designs/auth.md`), the Woodpecker compares the active `git diff` directly against that specification.
* If omitted, the Woodpecker inspects the current workspace diff (`git diff HEAD`) for general security vulnerabilities, memory safety, and unhandled edge cases.

---

## The Four Pecking Vectors

The Woodpecker inspects the git diff line-by-line across four mandatory dimensions:

1. **Spec & Boundary Fidelity**:
   * Ensures modifications are strictly confined to `target_mutation_plan`.
   * Verifies all API endpoints, models, and contracts match the approved Design Spec verbatim.
   * Catches any unapproved scope creep or skipped error handling loops.
2. **Security & Defensive Hardening**:
   * Evaluates injection risks (SQLi, command injection, path traversal, XSS).
   * Verifies secrets, credentials, and tokens are never leaked in source or logs.
   * Confirms authentication and authorization gates are strictly enforced.
3. **Pathological Edge Cases & Failure Modes**:
   * Detects null/nil dereferences and unhandled Promise rejections.
   * Identifies race conditions, deadlock hazards, and unmanaged shared state.
   * Ensures database connections, files, and sockets are guaranteed to close.
4. **Micro-Architecture & Clean Code Sanity**:
   * Enforces single-responsibility, modular files rather than monolithic blobs.
   * Eliminates untyped `any`, unsafe type casts, or disabled linter warnings.
   * Rejects vanity tests that only test trivial happy paths.

---

## Self-Healing Interaction Loop

1. **Step 1: Inspect Diff**: Run `git diff HEAD` (or staged diff) across the affected files.
2. **Step 2: Generate Audit Report**: Write `woodpecker_audit_report.md`.
3. **Step 3: Evaluate Verdict**:
   * **If `APPROVED`**: Authorize The Beaver or developer to proceed immediately with the atomic git commit.
   * **If `REJECTED`**: Pass the exact list of `BLOCKER` defects to The Beaver to perform targeted code repairs. Up to 2 self-healing cycles are permitted.
4. **Step 4: The Reaper Protocol**: Immediately upon delivering the report, the Woodpecker subagent session terminates and is destroyed.
