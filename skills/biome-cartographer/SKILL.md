---
name: biome-cartographer
license: Apache-2.0
description: >-
  Repository Topology Cartographer. Analyzes project manifests, module boundaries,
  domain pods (database, backend, web, mobile), and public entrypoints to emit an
  immutable topology cache in .biome/codebase_topology.json. Prevents redundant filesystem
  scans across subagents. Use when the user asks to map repository topology, index module
  dependencies, analyze project architecture, or refresh codebase metadata before planning.
---

# BIOME Cartographer: Repository Topology Cartographer

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-cartographer` is the standalone command to invoke **The Cartographer** (`agents/cartographer.md`), the topology engine of the **BIOME Ecosystem**.

In complex multi-agent architectures, each subagent scanning the entire filesystem independently causes severe token waste and tool latency. The Cartographer runs once, maps the entire structural topology of the codebase, and caches it in `.biome/codebase_topology.json`.

---

## Invocation

```text
/biome-cartographer [--refresh]
```

* `--refresh`: Force re-scans the repository even if `.biome/codebase_topology.json` already exists.

---

## The Cartography Protocol

1. **Manifest & Ecosystem Audit**:
   - Inspects root and package manifests (`package.json`, `pnpm-workspace.yaml`, `go.mod`, `Cargo.toml`, `pyproject.toml`).
   - Identifies whether the project is a monorepo, single binary, or multi-stack setup.
2. **Domain Pod Partitioning**:
   - Classifies modules into standardized domain pods:
     - `database`: Schemas, migrations, ORM entities, SQL files.
     - `backend`: API services, route handlers, middleware, business logic.
     - `web`: Desktop / browser frontend (React, Vue, Svelte, Tailwind).
     - `mobile`: Mobile clients (React Native, Flutter, Swift, Kotlin).
     - `shared`: Common utilities, protocol buffers, shared types.
3. **Module & Dependency Mapping**:
   - Maps public entrypoints (`index.ts`, `main.go`, `lib.rs`, `app.py`).
   - Maps internal cross-module dependencies to guarantee proper build serialization.
4. **Emit Cached Manifest**:
   - Validates JSON output against [references/topology_schema.json](references/topology_schema.json).
   - Writes formatted 2-space JSON to `.biome/codebase_topology.json`.
5. **The Reaper Invariant**:
   - Immediately upon delivering the topology cache, the session terminates and is destroyed.

---

## Output Manifest Structure

```json
{
  "version": "1.0.0",
  "framework": "Next.js + Go Fiber",
  "domains": {
    "database": ["internal/db/migrations", "internal/db/models"],
    "backend": ["cmd/api", "internal/services", "internal/handlers"],
    "web": ["web/app", "web/components"],
    "shared": ["pkg/types"]
  },
  "modules": [
    {
      "name": "auth-service",
      "path": "internal/services/auth",
      "entrypoints": ["service.go"],
      "dependencies": ["internal/db/models", "pkg/types"]
    }
  ]
}
```
