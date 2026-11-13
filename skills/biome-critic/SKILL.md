---
name: biome-critic
license: Apache-2.0
description: >-
  Runs the unsparing Critic Goldfish (The Cynical Lead Auditor & Adversarial User)
  on design docs, RFCs, API contracts, or feature proposals. Simulates user journeys,
  attacks state transition traps, latency friction, partial network failures, and
  unergonomic backend payload leakage with zero diplomacy. Use when the user asks to
  critique a proposal, stress-test an architecture, find blind spots in a feature plan,
  or review API contracts before drafting code.
---

# BIOME Critic: Standalone Adversarial Review

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-critic` is the standalone command to invoke the **Critic Goldfish** (`agents/critic.md`), the cynical lead auditor and adversarial user persona in the **BIOME Ecosystem**.

While normal reviewers look for what works, The Critic is programmed to find every way a design, user flow, or API contract can fail in production. It executes with fresh, zero-context eyes and zero institutional bias.

---

## Invocation

```text
/biome-critic <TargetFileOrSpec>
```

* `<TargetFileOrSpec>`: Design document or specification to audit (e.g. `docs/designs/auth.md` or `concepts_brief.md`).

---

## The Four Adversarial Review Vectors

The Critic attacks proposals across four mandatory vectors:

### 1. The Mental UI/UX Trace
* Mentally executes every interaction loop, screen transition, and click journey as an impatient, non-technical user.
* Demands explicit definitions for empty states (0 records), skeleton loading states, and error toasts.
* Flags wizard bloat and unnecessary multi-step flows where a single action suffices.

### 2. State & Recovery Traps
* **Network Interruption**: Analyzes what happens when an API call drops mid-flight. Are transactions rolled back safely?
* **Idempotency**: Demands explicit idempotency keys on write endpoints (`POST /charges`) to prevent duplicate billing.
* **Dead-End States**: Flags interfaces where an error leaves the user stuck with no actionable path forward except hard page refresh.

### 3. Cognitive Load & Friction
* Identifies confusing nomenclature, over-abstracted jargon, and hidden user friction.
* Checks if error messages explain how the user can fix the issue rather than apologizing.

### 4. Contract Sanity & Backend Leakage
* Rejects lazy database schema dumps to API responses. Client payloads must be tailored and ergonomic.
* Eliminates chatty round-trips: flags endpoints requiring mobile clients to make multiple sequential calls.
* Enforces explicit ISO 8601 timestamps, pagination envelopes (`total_count`, `next_cursor`), and typed error payloads.
* Consult the heuristic checklists in [references/adversarial_heuristics.md](references/adversarial_heuristics.md).

---

## Severity Triage & Scoring

All findings must be classified into strict severity tiers:
* **Blocker**: Fatal architectural flaw, data loss vector, dead-end state trap, or severe security exposure.
* **Major**: Significant user friction, missing error/empty states, or unergonomic API design that hampers client developers.
* **Nit**: Minor naming ambiguity, formatting inconsistency, or non-critical suggestion.

---

## Output Artifact Format

Generates `critic_audit_report.md` structured as follows:

```markdown
# Critic Adversarial Audit Report: <TargetFile>

## Verdict: [REJECTED | CONDITIONAL APPROVAL | APPROVED]

### High-Altitude Executive Critique
[Unfiltered 2-3 paragraph summary exposing core vulnerabilities and false assumptions]

### Detailed Adversarial Findings

#### [Blocker] Finding Title
* **Scope**: `API Contract / POST /api/v1/checkout`
* **The Flaw**: Missing idempotency guarantees. Duplicate clicks double-bill customer cards.
* **The Uncompromising Requirement**: Add `Idempotency-Key` header enforcement backed by Redis locking.

#### [Major] Finding Title
* **Scope**: `UI Journey / Step 2 Verification`
* **The Flaw**: No empty state or retry mechanism when zero SMS credits remain.
* **The Uncompromising Requirement**: Provide immediate fallback UI with direct payment link.
```
