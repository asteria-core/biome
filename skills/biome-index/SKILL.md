---
name: biome-index
license: Apache-2.0
description: >-
  Runs the Deterministic Structural Indexer to parse approved Design Specs and
  codebase topology, emitting the partitioned target mutation plan in .biome/project_index.json.
  Assigns files to domain pods (database, backend, web, mobile) with explicit operations
  (CREATE, MODIFY, DELETE) to restrict builder scope. Use when the user asks to index an
  approved spec, generate a build plan, partition domain pods, or prepare for Beaver builds.
---

# BIOME Indexer: Standalone Deterministic Structural Indexing

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-index` is the standalone command to invoke the **Deterministic Structural Indexer** (`agents/indexer.md`), the mutation planner of the **BIOME Ecosystem**.

Before any code is generated or modified, The Indexer bridges the gap between text specifications and file mutations: it translates the approved design doc into a strict, machine-readable `target_mutation_plan` saved in `.biome/project_index.json`.

---

## Invocation

```text
/biome-index [DesignDocPath]
```

* `[DesignDocPath]`: Path to the approved Design Spec (e.g. `docs/designs/auth.md`). If omitted, scans the most recently updated design doc.

---

## The Indexing Protocol

1. **Topology Cartography Grounding**:
   - Reads `.biome/codebase_topology.json` to understand existing module boundaries.
   - If missing, spawns The Cartographer (`/biome-cartographer`) to map the codebase first.
2. **Spec Decomposition**:
   - Extracts all target components, API contracts, database tables, and UI views from the spec.
   - Identifies exact target paths and assigns them to domain pods: `database`, `backend`, `web`, `mobile`, `shared`.
3. **Deterministic Mutation Planning**:
   - For each target file, specifies the explicit operation:
     - `CREATE`: New file to be introduced.
     - `MODIFY`: Existing file with declared changes.
     - `DELETE`: Obsolete file to be removed.
   - Summarizes the single core responsibility for each file.
4. **Emit Validated Manifest**:
   - Conforms to schema in [references/project_index_schema.json](references/project_index_schema.json).
   - Writes `.biome/project_index.json` (and mirrors to `.egm/project_index.json` for backward compatibility).
5. **The Reaper Invariant**:
   - Immediately upon delivering the index file, the session terminates and is destroyed.

---

## Output Manifest Structure

```json
{
  "version": "1.0.0",
  "spec_file": "docs/designs/auth.md",
  "domain_pods": ["database", "backend", "web"],
  "target_mutation_plan": [
    {
      "path": "internal/db/migrations/001_sessions.sql",
      "action": "CREATE",
      "domain": "database",
      "responsibility": "PostgreSQL schema for active user sessions"
    },
    {
      "path": "internal/services/auth.go",
      "action": "MODIFY",
      "domain": "backend",
      "responsibility": "Add session creation and token validation methods"
    },
    {
      "path": "web/src/components/LoginModal.tsx",
      "action": "CREATE",
      "domain": "web",
      "responsibility": "Bounded modal with responsive form controls"
    }
  ]
}
```
