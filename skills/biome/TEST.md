# Test Plan: Unified Autonomous BIOME Skill

Frontmatter and link checks run in `pytest tests/unit` (see [TESTING.md](../../TESTING.md)).

## Protocol Verification Checklist

When evaluating or exploring `biome` interactively in chat, verify:

-   **Step 1 (Unified Invocation):** Ingests prompt via `/biome <feature>` or routed sub-commands (`review`, `build`, `draft`, `resolve`).
-   **Step 2 (Phase A: Elephant Discovery):** Enforces that the Elephant drafts the specification under `docs/designs/` with zero production code changes (the Elephant Iron Rule).
-   **Step 3 (Phase B: Critic Swarm):** Dispatches parallel Goldfish reviewers including the hardened Critic (`agents/critic.md`) and architectural auditors.
-   **Step 4 (Phase C: Auto-Resolve):** Resolves uncontested issues and presents critical blocker decisions.
-   **Step 5 (Phase D: Indexer Goldfish):** Spawns `agents/indexer.md` to emit normalized `.biome/project_index.json`.
-   **Step 6 (Phase E: Beaver Build & Modern Dependencies):** Queries latest package versions, verifies changelogs, enforces micro-architecture, executes bounded code changes, and returns the 3-bullet execution receipt.
-   **Step 7 (Phase F: Reaper Protocol):** Enforces immediate termination and hard teardown of all worker sessions upon task delivery.
