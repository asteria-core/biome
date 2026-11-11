---
name: biome-build
license: Apache-2.0
description: >-
  The standalone BIOME Beaver builder skill. Executes phase-isolated, surgical code
  modifications strictly against .biome/project_index.json and the approved Design Spec
  with micro-architecture, latest dependency checks, test verification, and atomic commit.
---

# BIOME Beaver Build: Ephemeral Surgical Builder

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-build` is the standalone command to invoke **The Beaver (The Ephemeral Surgical Builder)** defined in `agents/beaver.md`.
Use this when you already have an approved Design Spec and a generated `.biome/project_index.json` (or `.egm/project_index.json`) and want the Beaver to build the code immediately in an isolated, fresh session without chat context pollution.

---

## Invocation

```text
/biome-build [DesignDocPath] [--domain=<db|backend|web|mobile>]
```
* If `[DesignDocPath]` is specified, the Beaver validates the spec and reads the corresponding `.biome/project_index.json`.
* If omitted, the Beaver reads `.biome/project_index.json` directly from the workspace root.
* If `--domain` is specified, the Beaver restricts mutations strictly to the target files assigned to that domain pod.

---

## Execution Boundary & Core Invariants

1. **Subagent Preamble Contract**: The Beaver MUST run in an isolated, fresh subagent using persona `agents/beaver.md`. It never inherits historical conversational debates or brainstorming drafts.
2. **Strict Allowed Inputs**:
   * The approved Design Spec markdown file (e.g. `docs/designs/<feature>.md`).
   * `.biome/project_index.json` (specifically `target_mutation_plan`).
   * ONLY the source files declared in `target_mutation_plan`.
3. **Anti-Slop & Human-Grade Craftsmanship**:
   * **Natural, Idiomatic Naming**: Strictly ban robotic suffixes (`*Helper`, `*Manager`, `*ProcessorHandler`). Use clean, idiomatic verbs and nouns (`login()`, `getUser()`, `syncOrders()`).
   * **Human UI Microcopy**: Ban AI marketing buzzwords (`seamless`, `empower`, `revolutionary`, `cutting-edge`, `AI-driven`). Use direct, professional human copy ("Analytics & Billing", "Export CSV").
   * **Zero Narrative Comments**: Strip obvious line-by-line comments. Document only non-obvious business invariants and concurrency guards.
4. **Frontend Craftsmanship & SaaS Design System Mandate (`resources/document_standards/ui-craftsmanship-standard.md`)**:
   * When touching UI or web/mobile domains:
     - **Modal Containment Law**: Modals must declare `max-h-[85vh]`, internal scroll, and sticky footer. Action buttons must NEVER clip below the viewport.
     - **Defensive Table Law**: Enforce `whitespace-nowrap` on codes, dates, and status pills inside `overflow-x-auto min-w-[...]` to eliminate broken text wraps.
     - **Asset Integrity**: Use self-contained SVG / Lucide components. Strictly ban raw font ligatures (`content_copy`).
     - **Platform Context Fidelity**: For mobile apps (`Reelio`), strictly ban references to browser extensions or "المتصفح".
     - **Executive SaaS Standards**: Implement Dark/Light palettes, KPI metric cards, Donut status charts, System Health bars, and rich customer preview lookup cards.
5. **Requirements Ledger & Anti-Amnesia Guarantee**:
   * The Beaver MUST read `.biome/requirements_ledger.json` before coding and guarantee that no previously approved client features are removed, regressed, or forgotten.
6. **Multi-Domain Pod Swarm**:
   * For multi-stack features (Database, Backend, Web Admin, Mobile), execute domain builds in dependency order (DB -> Backend -> Web/Mobile -> E2E).
   * Each Beaver pod receives only its domain slice, preventing token explosion.
7. **Modular Micro-Architecture Mandate**:
   * Decompose features into single-responsibility, minimal-line files across structured directories (e.g. `services/`, `validators/`, `handlers/`).
   * Avoid monolithic monster files. Keep functions concise, decoupled, and cleanly typed.
8. **Latest Dependency & Modern API Mandate**:
   * **Latest Semver Lookup**: When introducing or upgrading any package, query package registries (npm, PyPI, crates.io, Go modules) for the absolute latest stable release.
   * **Changelog & Deprecation Inspection**: Verify breaking changes and changelogs to build against modern idioms, strictly avoiding deprecated APIs.
   * **Explicit Version Pinning**: Pin the exact modern version in manifest and index.
9. **Zero Placeholders**: All code must be production-grade, typed, and complete. No `TODO` or placeholder comments.
10. **Self-Healing Test Cycle**: Execute project test suites (`pytest`, `npm test`, `go test`, `cargo test`) and auto-correct up to 3 cycles.
11. **The Woodpecker Inspection Gate**: After unit tests pass and before creating the git commit, spawn **The Woodpecker** (`agents/woodpecker.md`) to perform a zero-context security, fidelity, anti-amnesia, and UI craftsmanship audit of the `git diff`.
12. **The Reaper Protocol**: Upon emitting the 3-bullet execution receipt, the Beaver session MUST terminate immediately and be destroyed. No zombie processes.

---

## Output Receipt

Delivers a 3-bullet execution receipt:
```markdown
### Beaver Execution Receipt
* **Mutations Executed**: [List of created, modified, or deleted files per target_mutation_plan]
* **Verification & Test Status**: [Exact test command run, exit code, and test pass confirmation]
* **Git Commit**: `[commit-hash]` [commit subject line]
```
