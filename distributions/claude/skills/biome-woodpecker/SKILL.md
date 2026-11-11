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
│       The Woodpecker         │ ◄─── Zero-context inspection across 5 Pecking Vectors
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

## The Six Pecking Vectors

The Woodpecker inspects the git diff line-by-line across six mandatory dimensions:

1. **Spec & Boundary Fidelity & Anti-Amnesia**:
   * Ensures modifications are strictly confined to `target_mutation_plan`.
   * Verifies all API endpoints, models, and contracts match the approved Design Spec verbatim.
   * **Requirements Ledger Verification**: Guarantees that no pre-existing locked requirements from `.biome/requirements_ledger.json` (such as established features, operational logs, or administrative interfaces) were omitted, overwritten, or forgotten.
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
5. **Anti-Slop & Human-Grade Craftsmanship**:
   * Purges robotic variable/function names (`*Helper`, `*Manager`, `*ProcessorActionHandler`).
   * Eliminates corporate AI buzzwords in UI labels and microcopy (`seamless`, `empower`, `revolutionary`, `cutting-edge`).
   * Strips chatty obvious comments (`// function to do X`).
   * Rejects artificial 5-layer boilerplate abstractions.
6. **UI/UX Craftsmanship & Visual Integrity**:
   * Validates against `resources/document_standards/ui-craftsmanship-standard.md`:
   * **Navigational Singularity & Zero Redundancy**: Banish duplicate utility controls (theme toggle, language switcher, profile, logout) between headers and sidebars. Eliminate stacked duplicate page titles.
   * **Apple HIG Elevation & True Dark Mode**: Strictly reject "half-dark" interfaces (dark header with blinding white cards). Enforce layered surface elevation and dual-theme tokens.
   * Eliminates table text wrapping via `whitespace-nowrap` on alphanumeric codes, durations, and dates.
   * Verifies modal geometry: `max-h-[85vh]`, internal scrolling, and permanently visible sticky action footers.
   * Eliminates raw font ligatures (`content_copy`) by enforcing pure SVG/Lucide icon components.
   * Confirms platform context fidelity (strictly mobile app copy, zero web extension references for mobile products).
   * Confirms Dark/Light theme consistency and proper RTL/LTR layout symmetry.

---

## Self-Healing Interaction Loop

1. **Step 1: Inspect Diff**: Run `git diff HEAD` (or staged diff) across the affected files.
2. **Step 2: Generate Audit Report**: Write `woodpecker_audit_report.md`.
3. **Step 3: Evaluate Verdict**:
   * **If `APPROVED`**: Authorize The Beaver or developer to proceed immediately with the atomic git commit.
   * **If `REJECTED`**: Pass the exact list of `BLOCKER` defects to The Beaver to perform targeted code repairs. Up to 2 self-healing cycles are permitted.
4. **Step 4: The Reaper Protocol**: Immediately upon delivering the report, the Woodpecker subagent session terminates and is destroyed.
