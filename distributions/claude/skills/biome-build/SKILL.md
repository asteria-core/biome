---
name: biome-build
license: Apache-2.0
description: >-
  The standalone BIOME Beaver builder skill. Executes phase-isolated, surgical code
  modifications strictly against .biome/project_index.json and the approved Design Spec.
  Enforces multi-domain pod serialization (DB -> API -> Web/Mobile -> E2E), live package
  registry verification, anti-slop human-grade craftsmanship, micro-architecture modularity,
  self-healing test loops (up to 3 cycles), and atomic semantic git commits. Use whenever
  asked to build, implement, code, or execute an approved design specification.
---

# BIOME Beaver Build: Ephemeral Surgical Builder

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-build` is the standalone command to invoke **The Beaver (The Ephemeral Surgical Builder)** defined in `agents/beaver.md`.

Unlike conversational AI that writes fragmented code directly in chat, The Beaver executes in an isolated, fresh execution session without conversation pollution. It strictly builds against the approved Design Spec and `.biome/project_index.json`, serializing complex multi-stack projects across domain pods.

```
[Approved Design Spec & Mutation Plan]
                   │
                   ▼
┌────────────────────────────────────────────────────────┐
│               🦫 THE BEAVER BUILDER                    │
│                                                        │
│  [Pod 1: Database] ──► verify unit tests               │
│         │                                              │
│         ▼                                              │
│  [Pod 2: Backend API] ──► verify service tests         │
│         │                                              │
│         ▼                                              │
│  [Pod 3: Web / Mobile UI] ──► verify compile & build   │
│         │                                              │
│         ▼                                              │
│  [Pod 4: E2E Integration] ──► full test pass           │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
              [Woodpecker Pre-Commit Audit]
```

---

## Invocation

```text
/biome-build [DesignDocPath] [--domain=<db|backend|web|mobile>]
```

* `[DesignDocPath]`: Optional path to the approved Design Spec (e.g. `docs/designs/auth.md`).
* `--domain`: Restricts mutation strictly to the assigned domain pod (e.g. `--domain=backend`).

---

## The Beaver Engineering Invariants

### 1. Isolated Context & Single-Use Pods
* Runs in a fresh session inheriting zero conversational debates or brainstorming notes.
* Focuses 100% of context capacity on the exact files declared in `target_mutation_plan`.

### 2. Multi-Domain Pod Swarm Serialization
* For full-stack features, never edit database schemas, Go backend code, and React UI concurrently in one chaotic turn.
* Build in strict dependency order:
  $$\text{Database Pod} \longrightarrow \text{Backend API Pod} \longrightarrow \text{Web/Mobile Pod} \longrightarrow \text{E2E Pod}$$
* Each pod runs its domain verification before handing off to the next pod.

### 3. Requirements Ledger & Anti-Amnesia Guarantee
* Reads `.biome/requirements_ledger.json` before writing code.
* Guarantees that zero previously approved client requirements or operational features are deleted or regressed.

### 4. Live Package Registry & Web Search Verification
* When introducing or upgrading third-party packages, NEVER assume a specified version is non-existent due to pre-training cutoff.
* Query live registries (`npm view`, `pip index`, `cargo search`, `go list -m -versions`, Maven Central / Google Maven) or execute `search_web` to inspect the latest release tags, changelogs, breaking changes, and migration guides.
* Details and commands are provided in [references/dependency_verification.md](references/dependency_verification.md).

### 4.1. Mandatory Pod Completion & Anti-Trivial-Bump Law
* Every domain pod assigned in the mutation plan MUST feature real, functional code modifications.
* Bumping version strings or metadata files (e.g. `versionCode = 27` in Gradle) while leaving application screens, models, and business logic untouched is classified as **Trivial Bump Fraud** and triggers an immediate build failure.
* Ensure 1:1 Surface and Authentication Parity (e.g. mirroring Google Sign-In faithfully on Web without substituting unauthorized JWT schemes).

### 5. Micro-Architecture & Modularity
* Decompose business logic into single-responsibility, modular files under structured directories (e.g. `services/`, `validators/`, `repositories/`).
* Keep files under 300 lines of logic. Avoid massive monster files.

### 6. Anti-Slop & Human-Grade Craftsmanship
* Adhere to Chameleon standards: idiomatic naming (no `*Helper`, `*Manager`), factual UI microcopy, and zero chatty line-by-line comments.

### 7. Frontend Craftsmanship & Apple HIG Standards
* When touching UI or web/mobile pods:
  - **Modal Containment Law**: Modals declare `max-h-[85vh]`, internal scroll, and sticky action footer.
  - **Defensive Table Law**: Enforce `whitespace-nowrap` inside horizontal scroll containers.
  - **Navigational Singularity**: Global utility controls reside in ONE canonical location.
  - Layered dark elevation and pure SVG components.

### 8. Self-Healing Test Loops (Up to 3 Cycles)
* Execute the target test suite (`pytest`, `npm test`, `go test ./...`, `cargo test`).
* If a test breaks, inspect the failure traceback and repair the source code autonomously (up to 3 repair cycles).

### 9. The Woodpecker Inspection Gate & Commit
* Once tests pass, spawn **The Woodpecker** (`agents/woodpecker.md`) to peck at the raw `git diff`.
* Upon Woodpecker `APPROVED` status, authorize the atomic semantic commit (`feat(<scope>): ...`).

---

## Output Receipt Format

Delivers a 3-bullet execution receipt:

```markdown
### Beaver Execution Receipt
* **Mutations Executed**: [List of created, modified, or deleted files per target_mutation_plan]
* **Verification & Test Status**: [Exact test command run, exit code, and test pass confirmation]
* **Git Commit**: `[commit-hash]` feat(scope): concise human subject line
```
