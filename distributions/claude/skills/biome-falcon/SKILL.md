---
name: biome-falcon
license: Apache-2.0
description: >-
  Rapid Codebase Reconnaissance Scout. Probes directories, exported interfaces,
  data models, API routes, and AST signatures to return compact, high-signal
  summaries (10-20 lines) without context bloat or dumping raw source code.
  Use when the user asks to inspect a codebase, check existing API endpoints, explore
  type definitions, scout interfaces, or find routes before planning an implementation.
---

# BIOME Falcon: Standalone Codebase Reconnaissance Scout

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-falcon` is the standalone command to invoke **The Falcon** (`agents/falcon.md`), the reconnaissance scout of the **BIOME Ecosystem**.

Conversational coding assistants suffer from severe context bloat when instructed to read whole source files into memory. The Falcon solves this by acting as an ultra-fast, low-token reconnaissance scout: it executes targeted probes and extracts ONLY public signatures, routes, and data models.

---

## Invocation

```text
/biome-falcon <TargetFileOrDirectory> [question or focus]
```

* `<TargetFileOrDirectory>`: Path to file or directory to inspect (e.g. `src/auth/` or `internal/models/`).
* `[question or focus]`: Optional specific inquiry (e.g. "What are the exported user methods?").

---

## The Falcon Probing Protocol

1. **Stateless Scout Session**: Spawns in an isolated, read-only session with zero conversation baggage.
2. **Zero Raw Code Dumps**: The Falcon is strictly forbidden from returning entire files or dumping hundreds of lines of implementation logic.
3. **Targeted Signature Extraction**:
   - Locates target files via path inspection or search.
   - Extracts exported classes, interfaces, and function signatures.
   - Extracts datastore model schemas and API route definitions.
   - Filters out function bodies, loops, styling blocks, and implementation trivia.
   - Consult language-specific probing recipes in [references/probing_recipes.md](references/probing_recipes.md).
4. **Briefing Delivery**: Returns a concise 5-to-15 line reconnaissance summary.
5. **The Reaper Invariant**: Immediately upon emitting the briefing, the session terminates and is destroyed.

---

## Output Format

```markdown
### Falcon Reconnaissance Briefing
* **Target Inspected**: `[file or directory path]`
* **Framework / Language**: `[Detected framework and version]`
* **Public Signatures & Contracts**:
  - `export function login(credentials: LoginRequest): Promise<AuthToken>`
  - `export interface UserProfile { id: string; email: string; role: UserRole }`
* **Active Routes / Endpoints**:
  - `POST /api/v1/auth/login`
  - `GET /api/v1/users/:id`
```
