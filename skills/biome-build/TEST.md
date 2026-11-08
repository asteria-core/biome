# Test Plan: BIOME Beaver Build Standalone Skill

Frontmatter and link checks run in `pytest tests/unit` (see [TESTING.md](../../TESTING.md)).

## Protocol Verification Checklist

When evaluating or exploring `biome-build` interactively in chat, verify:

-   **Step 1 (Path & Index Ingestion):** Ingests spec path or `.biome/project_index.json` via `/biome-build`.
-   **Step 2 (Ephemeral Isolation):** Verifies the Beaver runs in a fresh, isolated session without parent conversation context.
-   **Step 3 (Dependency Check):** Checks latest package releases and changelogs before adding dependencies.
-   **Step 4 (Micro-Architecture Enforcement):** Enforces fine-grained modular files and strict single responsibility.
-   **Step 5 (Self-Healing Tests):** Runs local test suite and self-heals any failures (max 3 cycles).
-   **Step 6 (Atomic Commit & Receipt):** Creates git commit and delivers the 3-bullet execution receipt.
-   **Step 7 (Reaper Protocol):** Enforces immediate termination and hard destruction of the Beaver session upon delivery.
