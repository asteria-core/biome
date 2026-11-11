---
name: biome-cartographer
license: Apache-2.0
disable-model-invocation: true
description: >-
  Repository Topology Cartographer. Maps modules, dependencies, and entrypoints into .biome/codebase_topology.json.
---

# BIOME Cartographer: Repository Topology Cartographer

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-cartographer` is the standalone command to invoke **The Cartographer** (`agents/cartographer.md`), the topology cartographer of the **BIOME Ecosystem**.

Use this when you want to map or refresh the structural topology of your codebase, module boundaries, dependencies, and public entrypoints into a cached manifest at `.biome/codebase_topology.json`.

---

## Invocation

```text
/biome-cartographer [--refresh]
```

* `--refresh`: Force re-scans the repository even if `.biome/codebase_topology.json` already exists.

---

## The Cartographer Protocol

1. **Topology Audit**: Inspects project configuration files (`package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`), directory trees, and entrypoints.
2. **Interface Extraction**: Catalogs public modules, domain pods (`db`, `backend`, `web`, `mobile`, `shared`), and exported interfaces without copying implementation code.
3. **Emit Cached Manifest**: Emits `.biome/codebase_topology.json` (2-space JSON).
4. **The Reaper Invariant**: Terminated immediately upon writing the topology manifest.
