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

## Autonomous Pipeline Workflow

When invoked without sub-command flags, execute these phases sequentially without skipping any step:

### Phase 1: Concept Exploration & Brainstorming
1. Ingest the user's prompt or feature request.
2. **Falcon Reconnaissance**: If the Elephant needs to verify existing interfaces, models, or types, spawn **The Falcon** using `/biome-falcon <path>` (`agents/falcon.md`). The Falcon executes with injected inline invariants and returns concise public signatures without code dumps.
3. Explore architectural options, trade-offs, and failure modes with the user (strictly one focused question per turn).
4. Once agreed, synthesize the strategic direction into `concepts_brief.md`. Update `.biome/state.json`.

### Phase 2: The Elephant - Design Spec Drafting
1. The Elephant turns the brief into a publication-grade Design Spec under `docs/designs/<feature_name>.md`.
2. The spec defines: Goals, Non-Goals, Architecture, API/Data Contracts, Edge Cases, and an explicit **Target Scope & File Boundary** listing affected paths and their domain pods.
3. **The Elephant Iron Rule (CRITICAL)**:
   * **The Elephant is strictly barred from modifying or writing production source code.** All code generation inside the primary conversation must remain illustrative markdown only.
4. Update `.biome/state.json`.

### Phase 3: The Goldfish Swarm & Ruthless Critic Audit
Spawn the Goldfish reviewer swarm in parallel, fresh, zero-context subagent sessions using the Subagent Inline Contract:
1. **The Hardened Critic (`agents/critic.md` / `/biome-critic`)**:
   * Evaluates UI/UX journeys, interaction loops, state traps, and backend contract leakage.
2. **The UI/UX Master Craftsman (`agents/ui_craftsman.md` / `/biome-ui-craftsman`)**:
   * Mandatory whenever the feature touches UI or web/mobile pods. Audits modal geometry (`max-h-[85vh]` sticky footers), table whitespace wrapping, executive SaaS themes (Dark/Light), asset integrity (no raw icon ligatures), and platform context fidelity.
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
2. **Multi-Domain Pod Swarm**:
   * For multi-tier changes (Database, Backend, Web, Mobile), execute domain pods in dependency order (DB -> Backend -> Web/Mobile -> E2E).
   * Each Beaver pod receives only its domain slice.
3. **Anti-Amnesia Guarantee**:
   * The Beaver reads `.biome/requirements_ledger.json` and guarantees zero deletion or regression of previously locked client features.
4. **Frontend Craftsmanship Mandate**:
   * Strictly adhere to `resources/document_standards/ui-craftsmanship-standard.md` (bounded modals, `whitespace-nowrap` on tables, pure SVG icons, executive SaaS palettes).
5. **Anti-Slop & Human-Grade Craftsmanship**:
   * Purge slop via `/biome-chameleon` standards: idiomatic naming, clean UI copy, no AI marketing buzzwords.
6. **Latest Dependency & Modern API Mandate**:
   * Query registries for latest semver and inspect changelogs to avoid deprecated patterns.
7. **Self-Healing Test Loop**: Run project test suite, auto-correcting up to 3 cycles. Update `.biome/state.json`.

### Phase 7: The Woodpecker - Zero-Context Code Diff & Security Audit
1. Spawn **The Woodpecker** using `/biome-woodpecker` (`agents/woodpecker.md`) in a fresh, isolated session.
2. Inspect `git diff` across the **Six Pecking Vectors**:
   * Vector 1: Spec & Boundary Fidelity & Anti-Amnesia Ledger Verification
   * Vector 2: Security & Defensive Hardening
   * Vector 3: Pathological Edge Cases & Failure Modes
   * Vector 4: Micro-Architecture & Type Rigor
   * Vector 5: Anti-Slop & Human-Grade Craftsmanship
   * Vector 6: UI/UX Craftsmanship & Visual Integrity
3. The Woodpecker writes `woodpecker_audit_report.md`:
   * If `REJECTED`: Passes blocking defects back to The Beaver for surgical self-healing (up to 2 repair cycles).
   * If `APPROVED`: Authorizes the final atomic semantic git commit (`feat(<scope>): ...`) and emission of the 3-bullet execution receipt.

### Phase 8: The Reaper Protocol (Strict Ephemeral Teardown)
1. Immediately upon receipt delivery, all worker subagent sessions (Reviewers, Indexer, Beaver, Woodpecker, Falcon, Chameleon) MUST be completely terminated and destroyed.
2. Zero zombie processes are allowed to persist or carry state across tasks.
3. Update `.biome/state.json` to `active_phase: "IDLE"`.
