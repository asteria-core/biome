---
name: biome-index
license: Apache-2.0
disable-model-invocation: true
description: >-
  Runs the Deterministic Structural Indexer to scan repository topology, dependency
  manifests, and approved specs to emit or update .biome/project_index.json.
---

# BIOME Indexer: Standalone Deterministic Structural Indexing

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-index` is the standalone command to invoke the **Deterministic Structural Indexer** (`agents/indexer.md`).
Use this when you have an approved or drafted Design Spec and need to generate or refresh `.biome/project_index.json` (and `.egm/project_index.json`) before executing code modifications with the Beaver.

---

## Invocation

```text
/biome-index [DesignDocPath]
```
* If `[DesignDocPath]` is provided (e.g. `docs/designs/auth.md`), the Indexer reads that specification.
* If omitted, the Indexer scans the most recently updated design doc under `docs/designs/` or prompts for the target file.

---

## Decoupled Indexing Protocol (Cartographer vs. Mutation Planner)

To avoid burning tokens re-scanning hundreds of files on every feature:
1. **Topology Cartography (`.biome/codebase_topology.json`)**:
   * If `.biome/codebase_topology.json` exists, the Indexer reuses the cached repository topology and dependency definitions.
   * If missing or outdated, **The Cartographer** (`agents/cartographer.md`) scans the repository tree and caches the topology.
2. **Surgical Mutation Planning (`.biome/project_index.json`)**:
   * Parses the target Design Specification.
   * Computes the exact `target_mutation_plan` mapping target files to explicit actions (`CREATE`, `MODIFY`, or `DELETE`).
   * **Domain Pod Partitioning**: Classifies every target file under its appropriate domain (`db`, `backend`, `web`, `mobile`, `shared`).
3. **Schema & Zero Code Invariant**:
   * Emits the normalized index manifest at `.biome/project_index.json` (and mirrors to `.egm/project_index.json`).
   * Never include function bodies, multi-line logic, or raw source dumps in the JSON.
4. **The Reaper Invariant**:
   * Upon writing the index file and returning the completion summary, the Indexer subagent immediately terminates and is destroyed.
