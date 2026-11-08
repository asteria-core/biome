# Test Plan: BIOME Critic Standalone Skill

Frontmatter and link checks run in `pytest tests/unit` (see [TESTING.md](../../TESTING.md)).

## Protocol Verification Checklist

When evaluating or exploring `biome-critic` interactively in chat, verify:

-   **Step 1 (Zero-Context Ingestion):** Ingests target document path via `/biome-critic <TargetFile>` or audits the active workspace design draft.
-   **Step 2 (The Critic Protocol):** Spawns fresh subagent invoking `agents/critic.md` with zero historical context.
-   **Step 3 (Mental UI/UX Trace):** Mentally executes user and client journeys across screens, inputs, error states, and latency.
-   **Step 4 (Four Audit Vectors):** Systematically red-teams UI/UX traces, state & recovery traps, cognitive load & friction, and contract sanity.
-   **Step 5 (Deliver Findings):** Emits structured adversarial findings report (`critic_report.md`) with severity, scope, flaw, and uncompromising requirements.
-   **Step 6 (Reaper Teardown):** Enforces immediate termination and hard destruction of the Critic session upon delivery.
