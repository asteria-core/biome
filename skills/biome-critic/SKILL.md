---
name: biome-critic
license: Apache-2.0
description: >-
  Runs the unsparing Critic Goldfish (The Cynical Lead Auditor & Adversarial User)
  on any design doc, concept, or feature to expose UI/UX friction and contract flaws.
---

# BIOME Critic: Standalone Adversarial Review

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-critic` is the standalone command to invoke the **Critic Goldfish** (`agents/critic.md`).
Use this when you have written a design document, concept, or feature specification yourself and want an unsparing, zero-diplomacy audit without running the full automated pipeline.

---

## Invocation

```text
/biome-critic <TargetFile>
```
* If `<TargetFile>` is provided (e.g. `docs/designs/auth.md`), the Critic audits that document directly.
* If omitted, the Critic prompts for the file path or audits the active design draft in the workspace.

---

## The Critic Protocol

1. **Stateless Mindset**: The Critic spawns in a fresh, zero-context subagent with no conversation history.
2. **Mental UI/UX Trace**: Mentally executes every interaction loop, screen transition, latency delay, and partial state failure from an actual user or consumer API client perspective.
3. **Four Mandatory Vectors**:
   * **The Mental UI/UX Trace**: Screen states, loading/empty states, magic format expectations.
   * **State & Recovery Traps**: Network drops midway, dead-end unrecoverable states, safe idempotency.
   * **Cognitive Load & Friction**: Unnecessary abstractions, confusing nomenclature, wizard bloat.
   * **Contract Sanity & Backend Leakage**: Ergonomic client payloads, avoiding lazy database model dumps.
4. **Artifact Delivery**: Writes full findings to `critic_report.md` with:
   * Severity (`Blocker`, `Major`, `Nit`)
   * Affected Scope
   * The Flaw
   * The Uncompromising Requirement
5. **The Reaper Invariant**: Immediately upon writing `critic_report.md` and notifying the user, the subagent session terminates and is destroyed.
