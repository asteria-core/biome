---
name: biome
license: Apache-2.0
disable-model-invocation: true
description: >-
  BIOME: Unified autonomous end-to-end software delivery ecosystem. Orchestrates
  concept brainstorming, Elephant spec drafting, hardened Critic Goldfish swarm audits,
  feedback resolution, deterministic indexing, and isolated Beaver surgical builds.
---

# BIOME: Autonomous End-to-End Delivery Ecosystem

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome` is the single autonomous entry-point command for the **BIOME Ecosystem**.
A living, phased software architecture where ideas are explored, the Elephant specifies, the Goldfish swarm stress-tests, feedback is resolved, the Indexer maps mutations, and the Beaver builds surgically in ephemeral isolation with latest modern dependencies.

```
/biome <feature description or prompt>
  │
  ├── Phase 1: Concept Exploration & Brainstorming (Explore requirements & trade-offs)
  ├── Phase 2: The Elephant - Design Spec Drafting (Comprehensive publication-grade spec)
  │            * Strict Iron Rule: Elephant writes ZERO production code
  ├── Phase 3: The Goldfish Swarm & Ruthless Critic Audit (Parallel zero-context red-teaming)
  ├── Phase 4: Feedback Auto-Resolve & Approval Gate (Apply fixes, resolve trade-offs, APPROVE)
  ├── Phase 5: Deterministic Structural Indexer (Emits .biome/project_index.json)
  ├── Phase 6: The Beaver - Ephemeral Surgical Build (Latest dependencies & micro-architecture)
  ├── Phase 7: The Woodpecker - Zero-Context Code Diff Audit (Defensive security & spec fidelity)
  └── Phase 8: The Reaper Protocol (Strict ephemeral session destruction & zero zombies)
```

---

## Invocation & Routing

### 1. Default Autonomous Invocation (Primary Mode)
```text
/biome <feature description or prompt>
```
Executes the full automated end-to-end pipeline across all 8 phases from concept exploration to verified git commit.

### 2. Standalone Granular Commands
Every phase has a dedicated standalone command for fine-grained manual execution:
* `/biome-brainstorm <Idea>`: Explore ideas and write a concept brief ([`skills/biome-brainstorm`](../biome-brainstorm/SKILL.md))
* `/biome-draft [BriefPath]`: Draft a spec section-by-section with the Elephant ([`skills/biome-draft`](../biome-draft/SKILL.md))
* `/biome-critic <TargetFile>`: Standalone Cynical Lead Auditor & Adversarial User review ([`skills/biome-critic`](../biome-critic/SKILL.md))
* `/biome-review <TargetFile>`: Full 5-stage Goldfish reviewer swarm audit ([`skills/biome-review`](../biome-review/SKILL.md))
* `/biome-resolve <TargetFile>`: Address review findings and negotiate changes ([`skills/biome-resolve`](../biome-resolve/SKILL.md))
* `/biome-index [SpecPath]`: Deterministic Structural Indexer to emit `.biome/project_index.json` ([`skills/biome-index`](../biome-index/SKILL.md))
* `/biome-build [SpecPath]`: Beaver surgical builder with isolated self-healing tests ([`skills/biome-build`](../biome-build/SKILL.md))
* `/biome-woodpecker [SpecPath]`: Zero-context code diff and security inspector ([`skills/biome-woodpecker`](../biome-woodpecker/SKILL.md))

### 3. Sub-Command Routing (Flag Mode)
* `/biome brainstorm [Idea]`: Delegates to [`skills/biome-brainstorm`](../biome-brainstorm/SKILL.md)
* `/biome draft [BriefPath]`: Delegates to [`skills/biome-draft`](../biome-draft/SKILL.md)
* `/biome critic [TargetFile]`: Delegates to [`skills/biome-critic`](../biome-critic/SKILL.md)
* `/biome review [TargetFile]`: Delegates to [`skills/biome-review`](../biome-review/SKILL.md)
* `/biome resolve [TargetFile]`: Delegates to [`skills/biome-resolve`](../biome-resolve/SKILL.md)
* `/biome index [SpecPath]`: Delegates to [`skills/biome-index`](../biome-index/SKILL.md)
* `/biome build [SpecPath]`: Delegates to [`skills/biome-build`](../biome-build/SKILL.md)
* `/biome woodpecker [SpecPath]`: Delegates to [`skills/biome-woodpecker`](../biome-woodpecker/SKILL.md)

---

## Autonomous Pipeline Workflow

When invoked without sub-command flags, execute these seven phases sequentially without skipping any step:

### Phase 1: Concept Exploration & Brainstorming
1. Ingest the user's prompt or feature request.
2. If requirements are high-level or ambiguous, explore architectural options, trade-offs, and failure modes with the user (strictly one focused question per turn).
3. Once agreed, synthesize the strategic direction into a clear concept brief.

### Phase 2: The Elephant - Design Spec Drafting
1. The Elephant turns the brief into a comprehensive, publication-grade Design Spec under `docs/designs/<feature_name>.md`.
2. The spec defines: System Goals, Non-Goals, Architecture Diagrams, API/Data Contracts, Edge Cases, and an explicit **Target Scope & File Boundary** listing all affected source paths.
3. **The Elephant Iron Rule (CRITICAL)**:
   * **The Elephant is strictly barred from modifying or writing production source code.** All code generation inside the primary conversation must remain illustrative markdown only.

### Phase 3: The Goldfish Swarm & Ruthless Critic Audit
Once the Design Spec is written, automatically spawn the Goldfish reviewer swarm in parallel, fresh, zero-context subagent sessions:
1. **The Hardened Critic (`agents/critic.md`)**:
   * Evaluates the spec through an unsparing real-world mental trace of UI/UX journeys, interaction loops, state traps, and backend contract leakage.
2. **Architecture & Feasibility Evaluators**:
   * `biome-design` (`agents/design_critic.md`): Audits scalability, infrastructure economics, and single points of failure.
   * `biome-comprehension` (`agents/comprehension.md`): Audits self-containment and naive readability.
   * `biome-implementation-readiness` (`agents/implementation_readiness.md`): Validates unambiguous actionability and target boundary allowlists.
3. Consolidate all reviewer outputs into `goldfish_review_report.md`.

### Phase 4: Feedback Auto-Resolve & Approval Gate
1. **Trivial Remediation**:
   * Automatically apply uncontested fixes directly to `docs/designs/<feature_name>.md`.
2. **Critical Decision Checkpoint**:
   * If any `Blocker` findings or fundamental architectural trade-offs remain, present a concise decision summary to the user for a quick `[Y/N]` or targeted choice.
   * If all blockers are satisfied, mark the document header with `Status: APPROVED`.

### Phase 5: Deterministic Structural Indexer
1. Spawn the **Structural Indexer Goldfish** (`agents/indexer.md`) in a fresh zero-context session.
2. The Indexer:
   * Audits repository topology, build configs, and entrypoints.
   * Parses the approved spec's Target Scope.
   * Writes the minimal, deterministic manifest to `.biome/project_index.json`.
3. Verify that `target_mutation_plan` strictly declares all target files and actions (`CREATE`, `MODIFY`, `DELETE`).

### Phase 6: The Beaver - Ephemeral Surgical Build
1. Invoke the **Beaver Builder Skill** (`skills/biome-build/SKILL.md`) inside an isolated, ephemeral execution session.
2. The Beaver enforces:
   * **Latest Dependency & Modern API Verification**:
     - Before adding any library or package, query and verify the absolute latest stable release (semver).
     - Inspect recent changelog / release notes to avoid deprecated methods and obsolete conventions.
     - Pin explicit modern versions in manifests and `.biome/project_index.json`.
   * **Modular Micro-Architecture**: Decomposes complex logic into fine-grained, decoupled files placed in clean directory hierarchies. Avoids multi-feature monoliths and minimizes line count per file so every file has a single, cohesive responsibility.
   * **Write Allowlist Enforcement**: Zero edits permitted outside `target_mutation_plan`.
   * **Zero-Placeholder Guarantee**: Fully typed, production-ready code (strictly no `TODO`s or stubs).
   * **Test & Self-Healing Loop**: Runs project test suite (`npm test`, `pytest`, `cargo test`, `go test ./...`), self-healing failures up to 3 iterations.

### Phase 7: The Woodpecker - Zero-Context Code Diff & Security Audit
1. Immediately after unit tests pass and before finalizing the git commit, spawn **The Woodpecker** (`agents/woodpecker.md` / `skills/biome-woodpecker`) in a fresh, isolated session.
2. The Woodpecker inspects the raw `git diff` against the approved spec and four pecking vectors:
   * **Spec & Boundary Fidelity**: Zero unapproved file modifications or skipped edge-case handling.
   * **Defensive Security Hardening**: Injection vulnerabilities, secrets in logs/source, OWASP safety.
   * **Pathological Edge Cases**: Nil/null dereferences, unhandled async exceptions, race conditions, resource leaks.
   * **Micro-Architecture & Type Rigor**: Single responsibility, clean decoupling, zero loose `any` types.
3. The Woodpecker writes `woodpecker_audit_report.md`:
   * If `REJECTED`: Passes blocking defects back to The Beaver for surgical self-healing (up to 2 repair cycles).
   * If `APPROVED`: Authorizes the final atomic semantic git commit (`feat(<scope>): ...`) and emission of the 3-bullet execution receipt.

### Phase 8: The Reaper Protocol (Strict Ephemeral Teardown)
1. Immediately upon receipt delivery, all worker subagent sessions (Reviewers, Indexer, Beaver, Woodpecker) MUST be completely terminated and destroyed.
2. Zero zombie processes are allowed to persist or carry state across tasks.
3. Any subsequent modifications require spawning brand-new worker sessions from scratch.
