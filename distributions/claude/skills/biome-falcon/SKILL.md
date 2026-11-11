---
name: biome-falcon
license: Apache-2.0
description: >-
  Rapid Codebase Reconnaissance Scout. Probes files, directories, interfaces, and types
  to return ultra-compact signature summaries without dumping thousands of tokens.
---

# BIOME Falcon: Standalone Codebase Reconnaissance Scout

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-falcon` is the standalone command to invoke **The Falcon** (`agents/falcon.md`), the reconnaissance scout of the **BIOME Ecosystem**.

Use this when you need an ultra-fast, low-token inspection of a file, module, or directory to understand exported signatures, public APIs, database models, or route endpoints without polluting context with raw source code.

---

## Invocation

```text
/biome-falcon <TargetFileOrDirectory> [question or focus]
```

* `<TargetFileOrDirectory>`: The relative or absolute path to inspect (e.g. `src/auth/` or `internal/models/user.go`).
* `[question or focus]`: Optional specific inquiry (e.g. "What are the exported auth routes?" or "List the user model schema fields").

---

## The Falcon Protocol

1. **Stateless Reconnaissance**: Spawns in an isolated, read-only session with zero conversation baggage.
2. **Zero Code Dumps**: The Falcon is strictly forbidden from returning entire source files or massive transcripts.
3. **Signature-Only Extraction**:
   - Locates target files via path inspection or search.
   - Extracts exported classes, interfaces, and function signatures.
   - Extracts datastore model schemas and API route definitions.
   - Filters out function bodies, loops, styling blocks, and implementation trivia.
4. **Briefing Delivery**: Returns a concise 5-to-15 line reconnaissance summary.
5. **The Reaper Invariant**: Immediately upon emitting the briefing, the session terminates and is destroyed.

---

## Output Format

```markdown
### Falcon Reconnaissance Briefing
* **Target Inspected**: `[file/directory path]`
* **Framework / Language**: `[Detected framework and version]`
* **Public Signatures & Contracts**:
  - `export function login(credentials: LoginRequest): Promise<AuthToken>`
  - `export interface UserProfile { id: string; email: string; role: UserRole }`
* **Active Routes / Endpoints**:
  - `POST /api/v1/auth/login`
  - `GET /api/v1/users/:id`
```
