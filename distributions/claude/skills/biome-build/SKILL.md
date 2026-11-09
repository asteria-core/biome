---
name: biome-build
license: Apache-2.0
disable-model-invocation: true
description: >-
  The standalone BIOME Beaver builder skill. Executes phase-isolated, surgical code
  modifications strictly against .biome/project_index.json and the approved Design Spec
  with micro-architecture, latest dependency checks, test verification, and atomic commit.
---

# BIOME Beaver Build: Ephemeral Surgical Builder

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-build` is the standalone command to invoke **The Beaver (The Ephemeral Surgical Builder)**.
Use this when you already have an approved Design Spec and a generated `.biome/project_index.json` (or `.egm/project_index.json`) and want the Beaver to build the code immediately in an isolated, fresh session without chat context pollution.

---

## Invocation

```text
/biome-build [DesignDocPath]
```
* If `[DesignDocPath]` is specified, the Beaver validates the spec and reads the corresponding `.biome/project_index.json`.
* If omitted, the Beaver reads `.biome/project_index.json` directly from the workspace root.

---

## Execution Boundary & Core Invariants

1. **Ephemeral Context Isolation**: The Beaver MUST run in an isolated, fresh subagent. It never inherits historical conversational debates or brainstorming drafts.
2. **Strict Allowed Inputs**:
   * The approved Design Spec markdown file (e.g. `docs/designs/<feature>.md`).
   * `.biome/project_index.json` (specifically `target_mutation_plan`).
   * ONLY the source files declared in `target_mutation_plan`.
3. **Modular Micro-Architecture Mandate**:
   * Decompose features into single-responsibility, minimal-line files across structured directories (e.g. `services/`, `validators/`, `handlers/`).
   * Avoid monolithic monster files. Keep functions concise, decoupled, and cleanly typed so that the Indexer can effortlessly map exports.
4. **Latest Dependency & Modern API Mandate**:
   * **Latest Semver Lookup**: When introducing or upgrading any package, query package registries (npm, PyPI, crates.io, Go modules) for the absolute latest stable release.
   * **Changelog & Deprecation Inspection**: Verify breaking changes and changelogs to build against modern idioms, strictly avoiding deprecated APIs.
   * **Explicit Version Pinning**: Pin the exact modern version in manifest and index.
5. **Zero Placeholders**: All code must be production-grade, typed, and complete. No `TODO` or placeholder comments.
6. **Self-Healing Test Cycle**: Execute project test suites (`pytest`, `npm test`, `go test`, `cargo test`) and auto-correct up to 3 cycles.
7. **The Woodpecker Inspection Gate**: After unit tests pass and before creating the git commit, spawn **The Woodpecker** (`agents/woodpecker.md`) to perform a zero-context security and fidelity audit of the `git diff`. If the Woodpecker flags blocking defects, apply targeted self-healing repairs before finalizing the commit.
8. **The Reaper Protocol**: Upon emitting the 3-bullet execution receipt, the Beaver session MUST terminate immediately and be destroyed. No zombie processes. Brand-new instances spawn on subsequent invocations.

---

## Output Receipt

Delivers a 3-bullet execution receipt:
```markdown
### Beaver Execution Receipt
* **Mutations Executed**: [List of created, modified, or deleted files per target_mutation_plan]
* **Verification & Test Status**: [Exact test command run, exit code, and test pass confirmation]
* **Git Commit**: `[commit-hash]` [commit subject line]
```
