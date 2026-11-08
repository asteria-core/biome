# Test Plan: BIOME Indexer Standalone Skill

Frontmatter and link checks run in `pytest tests/unit` (see [TESTING.md](../../TESTING.md)).

## Protocol Verification Checklist

When evaluating or exploring `biome-index` interactively in chat, verify:

-   **Step 1 (Path Ingestion):** Ingests target design spec path via `/biome-index [DesignDocPath]` or detects active spec.
-   **Step 2 (Topology & Manifest Scan):** Inspects project entrypoints and dependency manifests.
-   **Step 3 (Spec Parsing):** Extracts target architectural mutations from the design spec.
-   **Step 4 (Deterministic Schema Output):** Emits `.biome/project_index.json` with `system_goal`, `tech_stack`, `modules`, and `target_mutation_plan`.
-   **Step 5 (Zero Code Invariant):** Confirms JSON contains no internal implementation code or multi-line bodies.
-   **Step 6 (Reaper Teardown):** Enforces immediate termination and hard destruction of the Indexer session upon index emission.
