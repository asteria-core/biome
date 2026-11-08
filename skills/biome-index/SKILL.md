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

## Execution Protocol

1. **Read-Only Inspection**:
   * Inspect the codebase directory structure, key entrypoints, and dependency manifests (`package.json`, `go.mod`, `Cargo.toml`, `pyproject.toml`, `pom.xml`, etc.).
   * Parse the target Design Specification.
2. **Schema Invariant**:
   * Emit the normalized index manifest at `.biome/project_index.json` (and mirror to `.egm/project_index.json` for backward compatibility).
   * **Zero Code Invariant**: Never include function bodies, multi-line logic, or raw source dumps in the JSON. Only capture domain boundaries, exported interfaces, and relative file paths.
3. **Target Mutation Plan**:
   * Generate an exact, bounded `target_mutation_plan` list of files to `CREATE`, `MODIFY`, or `DELETE`, along with their rationale referencing the spec.
4. **The Reaper Invariant**:
   * Upon writing the index file and returning the completion summary, the Indexer subagent immediately terminates and is destroyed.
