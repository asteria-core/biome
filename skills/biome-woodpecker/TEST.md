# Test Plan: BIOME Woodpecker Standalone Skill

Frontmatter and link checks run in `pytest tests/unit` (see [TESTING.md](../../TESTING.md)).

## Protocol Verification Checklist

When evaluating or exploring `biome-woodpecker` interactively in chat, verify:

-   **Step 1 (Diff Ingestion):** Ingests active workspace diff via `git diff` and reads target Design Spec.
-   **Step 2 (Zero-Context Invariant):** Spawns fresh subagent invoking `agents/woodpecker.md` without parent chat history.
-   **Step 3 (Four Pecking Vectors):** Evaluates spec fidelity, security hardening, pathological edge cases, and micro-architecture.
-   **Step 4 (Structured Report):** Emits `woodpecker_audit_report.md` with explicit `VERDICT: [APPROVED | REJECTED]`.
-   **Step 5 (Repair Routing):** If rejected, provides actionable repair instructions for the Beaver self-healing loop.
-   **Step 6 (Reaper Protocol):** Enforces immediate termination and hard destruction of the Woodpecker session upon report delivery.
