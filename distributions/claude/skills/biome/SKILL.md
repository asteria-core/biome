---
name: biome
license: Apache-2.0
description: >-
  BIOME: Unified autonomous end-to-end software delivery ecosystem. Orchestrates
  concept brainstorming, Elephant spec drafting, hardened Critic Goldfish swarm audits,
  feedback auto-resolution, codebase cartography, deterministic indexing, isolated Beaver
  surgical builds with live dependency checks, and Woodpecker pre-commit diff inspections.
  Use whenever the user asks to build a new feature end-to-end, implement a complex
  multi-stack system, run the autonomous pipeline, transform an idea into production code,
  or deliver tested, reviewed, anti-slop software autonomously.
---

# BIOME: Autonomous End-to-End Delivery Ecosystem

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome` is the single autonomous entry-point command for the **BIOME Ecosystem**.
A living, phased software architecture where ideas are explored, the Elephant specifies, the Falcon scouts, the Goldfish swarm stress-tests, feedback is resolved, the Cartographer maps topology, the Indexer plans mutations, the Beaver builds surgically across domain pods with anti-slop craftsmanship, and the Woodpecker pecks the diff.

```
/biome <feature description or prompt>
  │
  ├── State Checkpoint: Updates .biome/state.json (Compaction-proof anchor)
  ├── Phase 1: Concept Exploration & Brainstorming (Explore requirements & Falcon scout)
  ├── Phase 2: The Elephant - Design Spec Drafting (Comprehensive publication-grade spec)
  │            * Strict Iron Rule: Elephant writes ZERO production code
  ├── Phase 3: The Goldfish Swarm & Ruthless Critic Audit (Parallel zero-context red-teaming)
  ├── Phase 4: Feedback Auto-Resolve & Approval Gate (Apply fixes, resolve trade-offs, APPROVE)
  ├── Phase 5: Decoupled Indexing (Cartographer topology cache + Indexer mutation plan)
  ├── Phase 6: The Beaver - Domain-Partitioned Surgical Build (Anti-slop human-grade craft)
  ├── Phase 7: The Woodpecker - Zero-Context Code Diff Audit (5 Pecking Vectors)
  └── Phase 8: The Reaper Protocol (Strict ephemeral session destruction & zero zombies)
```

---

## Subagent Preamble Contract (MANDATORY DUAL-GUARANTEE INJECTION)

In programmatic subagent invocations (`invoke_subagent`), slash commands (`/<skill_name>`) are delivered as raw text strings and **DO NOT** trigger UI-level macro expansions or automatic skill file loading. Furthermore, subagents instructed solely via conversational text often hallucinate that they know the workflow without reading the canonical files on disk.

Therefore, the Elephant MUST format every subagent invocation using the **Dual-Guarantee Contract**:
1. **Tool-Call Directive**: Explicitly mandates that the subagent's very first action MUST be a `read_file` tool call to load the canonical `skills/<skill_folder>/SKILL.md` (and any referenced standards).
2. **Inline Invariant & Ledger Injection**: Directly inlines the persona mandates, execution rules, and locked requirements ledger into the prompt payload so context is preserved even before disk reads.

### The Canonical Subagent Prompt Template

```text
[MANDATORY SUBAGENT INLINE CONTRACT]
Role: <Subagent Name>
Persona: agents/<persona_file>.md
Execution Skill: skills/<skill_folder>/SKILL.md

=== STEP 1: MANDATORY TOOL DIRECTIVE (SKILL VERIFICATION) ===
You MUST execute the `read_file` tool call on `skills/<skill_folder>/SKILL.md` (and any referenced standard like `resources/document_standards/ui-craftsmanship-standard.md`) on your very first turn.
DO NOT attempt to modify code, edit files, or output conversational justifications until you have executed this tool call and loaded the full runbook into active memory.

=== INJECTED PERSONA INVARIANTS ===
<Inlined verbatim core mandates from the target agent persona>

=== INJECTED EXECUTION INVARIANTS ===
<Inlined verbatim execution rules from the target skill>

=== ACTIVE REQUIREMENTS LEDGER ===
<Summary of all active LOCKED_IN_PRODUCTION requirements from .biome/requirements_ledger.json>

=== TASK DIRECTIVE ===
- Target File/Path: <path>
- Domain / Scope: <domain>
- Exact Objective: <detailed, unambiguous instruction>
- On Turn 1: Call `read_file` on `skills/<skill_folder>/SKILL.md`. Confirm skill rules loaded, then execute the objective.
```

---

## State Anchor & Anti-Compaction Recovery Protocol

To survive context compaction in long-running conversational sessions:
1. **Atomic Checkpointing**: At the conclusion of every phase, the Elephant writes the current state to `.biome/state.json` and updates `.biome/requirements_ledger.json`.
2. **Post-Compaction Recovery**: If the Elephant detects that conversational context has been compacted, truncated, or summarized, it MUST:
   * Read `.biome/state.json` immediately.
   * Read `.biome/requirements_ledger.json` to anchor all cumulative client requirements and prevent amnesia.
   * Re-read `skills/biome/SKILL.md`.
   * Strictly observe **The Elephant Iron Rule**: NEVER write production code directly in the conversation pane. Resume the pipeline from the recorded `active_phase`.

---

## Invocation & Routing

### 1. Default Autonomous Invocation (Primary Mode)
```text
/biome <feature description or prompt>
```
Executes the full automated end-to-end pipeline across all phases from concept exploration to verified git commit.

### 2. Standalone Granular Commands
Every phase and specialist has a dedicated standalone command for fine-grained manual execution:
* `/biome-falcon <Target>`: Rapid codebase reconnaissance scout returning compact signatures ([`skills/biome-falcon`](../biome-falcon/SKILL.md))
* `/biome-cartographer`: Repository topology cartographer emitting `.biome/codebase_topology.json` ([`skills/biome-cartographer`](../biome-cartographer/SKILL.md))
* `/biome-brainstorm <Idea>`: Explore ideas and write a concept brief ([`skills/biome-brainstorm`](../biome-brainstorm/SKILL.md))
* `/biome-draft [BriefPath]`: Draft a spec section-by-section with the Elephant ([`skills/biome-draft`](../biome-draft/SKILL.md))
* `/biome-critic <TargetFile>`: Standalone Cynical Lead Auditor & Adversarial User review ([`skills/biome-critic`](../biome-critic/SKILL.md))
* `/biome-ui-craftsman <TargetFile>`: UI/UX Master Craftsman & Aesthetic Auditor ([`skills/biome-ui-craftsman`](../biome-ui-craftsman/SKILL.md))
* `/biome-chameleon <TargetFile>`: Anti-Slop & Human-Grade Craftsmanship Auditor ([`skills/biome-chameleon`](../biome-chameleon/SKILL.md))
* `/biome-review <TargetFile>`: Full 5-stage Goldfish reviewer swarm audit ([`skills/biome-review`](../biome-review/SKILL.md))
* `/biome-resolve <TargetFile>`: Address review findings and negotiate changes ([`skills/biome-resolve`](../biome-resolve/SKILL.md))
* `/biome-index [SpecPath]`: Deterministic Structural Indexer to emit `.biome/project_index.json` ([`skills/biome-index`](../biome-index/SKILL.md))
* `/biome-build [SpecPath]`: Beaver surgical builder with isolated self-healing tests ([`skills/biome-build`](../biome-build/SKILL.md))
* `/biome-woodpecker [SpecPath]`: Zero-context code diff and security inspector ([`skills/biome-woodpecker`](../biome-woodpecker/SKILL.md))

---

## The Unskippable Phase Pipeline & Strict Execution Circuit Breaker

### THE ELEPHANT EXECUTION CIRCUIT BREAKER (ABSOLUTE PROHIBITION)
1. **The Elephant NEVER Modifies Production Code**: The Elephant is strictly forbidden from invoking `edit_file`, `write_file` (except on `.biome/*`, `docs/designs/*`, or `concepts_brief.md`), or executing build/mutation commands (`go test`, `gradle`, `npm`, `pytest`, `cargo`) directly in the conversational pane.
2. **The "Ghost Beaver" Fallback Prohibition**: If a Beaver subagent fails, hangs, or returns compilation errors, the Elephant is STRICTLY PROHIBITED from taking over and modifying source files in the chat pane. The Elephant MUST send the failure receipt back to the Beaver via `send_message` or spawn a fresh Beaver pod with the failure context. Self-coding in chat is a FATAL PROTOCOL VIOLATION.
3. **The Woodpecker Impersonation Prohibition**: The Elephant MUST NOT write or generate `woodpecker_audit_report.md` itself. It MUST spawn an isolated subagent running `biome-woodpecker`. Grading one's own homework in the main chat is strictly prohibited.
4. **Mandatory Phase Transition Gates**: The Elephant MUST NOT skip any phase in the pipeline. Jumping directly from Phase 2 to Phase 5 or 6 without running the Goldfish Swarm (Phase 3) and Auto-Resolve (Phase 4) is strictly prohibited.
5. **Reactive Asynchrony & Zero-Polling Mandate**: The host harness operates on event-driven reactive wakeups. The Elephant MUST NEVER execute busy-wait polling loops using `schedule` (e.g. 10s/15s/30s timers) or repeatedly invoke `manage_subagents` status queries while waiting for workers. After calling `invoke_subagent` or `send_message`, the Elephant MUST immediately end its turn and await the system notification.
6. **Subagent Anti-Killing & Anti-Forgery Law**: The Elephant is strictly forbidden from calling `manage_subagents kill` or `manage_task kill` on an in-progress subagent simply due to elapsed wall-clock time. Deep inspection, builds, and test runs legitimately take minutes. If a subagent encounters a genuine crash, the Elephant MUST NEVER forge or author the subagent's expected deliverable (e.g., `goldfish_review_report.md`, `codebase_topology.json`, `woodpecker_audit_report.md`) in the main chat. It must re-dispatch with context or pause.
7. **Knowledge Cutoff & Live Search Mandate**: Agents MUST NEVER declare a package, toolchain, or library version "hallucinated", "fake", or "non-existent" simply because it is newer than the LLM's pre-training cutoff. Whenever a user prompt or spec designates cutting-edge, late-2026, or modern versions (e.g., Kotlin 2.4+, Next.js 16+, React 19+, Tailwind v4+, Go 1.26+, Google Play Billing 9+), agents MUST execute `search_web` or query package registries to inspect latest release tags, changelogs, and APIs, and strictly honor the requested version.

---

## Autonomous Pipeline Workflow

When invoked without sub-command flags, execute these phases sequentially without skipping any step:

### Phase 1: Concept Exploration & Brainstorming
1. Ingest the user's prompt or feature request.
2. **Falcon Reconnaissance**: If the Elephant needs to verify existing interfaces, models, or types, spawn **The Falcon** using `/biome-falcon <path>` (`agents/falcon.md`). The Falcon executes with injected inline invariants and returns concise public signatures without code dumps. Running 20+ ad-hoc grep/search commands directly in the conversation pane is strictly banned.
3. Explore architectural options, trade-offs, and failure modes with the user (strictly one focused question per turn).
4. Once agreed, synthesize the strategic direction into `concepts_brief.md`. Update `.biome/state.json`.

### Phase 2: The Elephant - Design Spec Drafting
1. The Elephant turns the brief into a publication-grade Design Spec under `docs/designs/<feature_name>.md`.
2. The spec defines: Goals, Non-Goals, Architecture, API/Data Contracts, Edge Cases, and an explicit **Target Scope & File Boundary** listing affected paths and their domain pods.
3. **The Elephant Iron Rule (CRITICAL)**:
   * **The Elephant is strictly barred from modifying or writing production source code.** All code generation inside the primary conversation must remain illustrative markdown only.
4. Update `.biome/state.json`.

### Phase 3: The Goldfish Swarm & Ruthless Critic Audit (UNSKIPPABLE)
Spawn the Goldfish reviewer swarm in parallel, fresh, zero-context subagent sessions using the Subagent Inline Contract. **Skipping this phase is a fatal protocol violation**:
1. **The Hardened Critic (`agents/critic.md` / `/biome-critic`)**:
   * Evaluates UI/UX journeys, interaction loops, state traps, and backend contract leakage.
2. **The UI/UX Master Craftsman (`agents/ui_craftsman.md` / `/biome-ui-craftsman`)**:
   * **MANDATORY whenever the feature touches UI or web/mobile pods.** Audits against Apple HIG, Navigational Singularity, true dark mode elevation, modal geometry (`max-h-[85vh]` sticky footers), table whitespace wrapping, and asset integrity.
3. **Architecture & Feasibility Evaluators**:
   * `biome-design` (`agents/design_critic.md`): Audits scalability and single points of failure.
   * `biome-comprehension` (`agents/comprehension.md`): Audits self-containment and naive readability.
   * `biome-implementation-readiness` (`agents/implementation_readiness.md`): Validates unambiguous actionability and target boundary allowlists.
4. Consolidate all reviewer outputs into `goldfish_review_report.md`. Update `.biome/state.json`.

### Phase 4: Feedback Auto-Resolve & Approval Gate
1. **Trivial Remediation**: Automatically apply uncontested fixes directly to `docs/designs/<feature_name>.md`.
2. **Critical Decision Checkpoint**: Present blocker trade-offs to the user for targeted resolution. Once satisfied, mark spec `Status: APPROVED`. Update `.biome/state.json`.

### Phase 5: Decoupled Cartography & Structural Indexing
1. **Topology Cartography**: Check `.biome/codebase_topology.json`. If missing or stale, spawn **The Cartographer** using `/biome-cartographer` (`agents/cartographer.md`) to map and cache repository topology.
2. **Structural Indexer**: Spawn **The Indexer** (`agents/indexer.md` / `/biome-index`) to parse the approved spec and output `.biome/project_index.json` with domain-partitioned `target_mutation_plan`. Update `.biome/state.json`.

### Phase 6: The Beaver - Domain-Partitioned Surgical Build
1. Invoke **The Beaver** using `/biome-build` (`agents/beaver.md`) inside an isolated, ephemeral execution session using the Subagent Inline Contract.
2. **Strict Pod Serialization (Multi-Domain Swarm)**:
   * Execute domain pods strictly in dependency order:
     $$\text{Pod 1: Database & Data Models} \longrightarrow \text{verify DB tests} \longrightarrow \text{Pod 2: Backend API Services} \longrightarrow \text{verify API tests} \longrightarrow \text{Pod 3: Web / Mobile UI} \longrightarrow \text{verify UI compile & build}$$
   * NEVER mix edits across Go, Kotlin, and Web concurrently in one chaotic turn.
3. **Anti-Amnesia Guarantee**:
   * The Beaver reads `.biome/requirements_ledger.json` and guarantees zero deletion or regression of previously locked client features.
4. **Mandatory Pod Completion & Anti-Trivial-Bump Guarantee**:
   * Every assigned domain pod MUST contain real, functional code modifications. Updating only configuration files, build metadata, or version strings (e.g. bumping `versionCode` in Gradle while leaving all Kotlin screens untouched) while claiming completion is **Trivial Bump Fraud** and triggers an automatic pod failure.
5. **1:1 Surface & Authentication Parity**:
   * When cloning or porting features across platforms (e.g. Web 1:1 match to Mobile), authentication mechanisms, data models, and UX flows must be identical. Never substitute different mechanisms (e.g., JWT for Google OAuth) without explicit approval.
6. **Frontend Craftsmanship Mandate**:
   * Strictly adhere to `resources/document_standards/ui-craftsmanship-standard.md` (Apple HIG Navigational Singularity, true dark mode elevation, bounded modals, `whitespace-nowrap` on tables, pure SVG icons).
7. **Anti-Slop & Human-Grade Craftsmanship**:
   * Purge slop via `/biome-chameleon` standards: idiomatic naming, clean UI copy, no AI marketing buzzwords.
8. **Latest Dependency & Live Verification Mandate**:
   * Query live package registries (`npm view`, `go list -m -versions`, Maven Central / Google Maven, PyPI) or run `search_web` to verify modern API signatures and changelogs. Never reject versions newer than model training cutoff.
9. **Self-Healing Test Loop**: Run project test suite within the Beaver session, auto-correcting up to 3 cycles. Update `.biome/state.json`.

### Phase 7: The Woodpecker - Zero-Context Code Diff & Security Audit (INDEPENDENT)
1. Spawn **The Woodpecker** using `/biome-woodpecker` (`agents/woodpecker.md`) via `invoke_subagent` in a fresh, isolated session. The Elephant is STRICTLY PROHIBITED from authoring this report itself.
2. Inspect `git diff` across the **Six Pecking Vectors**:
   * Vector 1: Spec & Boundary Fidelity, Anti-Amnesia Ledger, and Pod Completeness (Strict rejection of Trivial Bump Fraud and mock data).
   * Vector 2: Security & Defensive Hardening (including Remote Server Deployment Verification if required by spec).
   * Vector 3: Pathological Edge Cases & Failure Modes
   * Vector 4: Micro-Architecture & Type Rigor
   * Vector 5: Anti-Slop & Human-Grade Craftsmanship
   * Vector 6: UI/UX Craftsmanship & Visual Integrity (Apple HIG Laws & Surface Parity)
3. The Woodpecker subagent writes `woodpecker_audit_report.md`:
   * If `REJECTED`: Passes blocking defects back to The Beaver for surgical self-healing (up to 2 repair cycles).
   * If `APPROVED`: Authorizes the final atomic semantic git commit (`feat(<scope>): ...`) and emission of the Objective Delivery Changelog (banning marketing fluff and deceptive AI slop).

### Phase 8: The Reaper Protocol (Strict Ephemeral Teardown)
1. Immediately upon receipt delivery, all worker subagent sessions (Reviewers, Indexer, Beaver, Woodpecker, Falcon, Chameleon) MUST be completely terminated and destroyed.
2. Zero zombie processes are allowed to persist or carry state across tasks.
3. Update `.biome/state.json` to `active_phase: "IDLE"`.
