# Agent Guidelines for BIOME Ecosystem

You are assisting development in the BIOME repository.

## Contribution Boundaries

* **No Autonomous PRs**: You must never automatically open a pull request without
  explicit human review, testing, and approval.
* **No Design Docs for Bug Fixes**: Never create files in `docs/designs/` for a
  `Bug Fix / Minor Patch`. A new design doc belongs in the Stage 1 PR of the
  `Feature / Architectural Change` track.
* **Triage Taxonomy**: Ensure the human operator selects the appropriate track in
  [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md):
  * `Bug Fix / Minor Patch` (non-test diff `<= 100` lines and `< 3` core files in
    `skills/` or `agents/`; no design doc required, but please update an existing
    design if appropriate).
  * `Feature / Architectural Change — Stage 1: Design Doc PR` (requires an aligned
    issue with `design-ready`, uses `Refs #<issue>`, and adds
    `docs/designs/<name>.md` + updates `docs/designs/README.md`).
  * `Feature / Architectural Change — Stage 2: Implementation PR` (requires an
    aligned issue with `pr-ready` and a merged
    `docs/designs/<name>.md`).
* **No Artificial PR Splitting**: Never split a cohesive feature or refactoring across
  multiple smaller pull requests to evade the 100-line scope threshold.
* **PR Description Template**: Every pull request description must be the filled-in
  [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md). `gh pr create --body`
  skips the template, so copy it from the file. The human author ticks the Accountability box.
* **Clear Change Summary**: In every pull request, explicitly list all key changes
  made and why. For feature proposals, define clear in-scope Goals and out-of-scope
  Non-Goals in the checked-in BIOME design document (`docs/designs/<name>.md`).

---

## BIOME Core Architectural Invariants

### 1. Elephant State Anchor & Post-Compaction Recovery
* Whenever conversational context is compacted or summarized by the host harness, the Elephant MUST:
  1. Immediately read `.biome/state.json`.
  2. Re-read `skills/biome/SKILL.md`.
  3. Strictly enforce **The Elephant Iron Rule**: NEVER write production code directly in the conversation pane. Resume strictly from `active_phase`.

### 2. Subagent Preamble Contract & Mandatory Tool Execution
* Every subagent invocation MUST use the Dual-Guarantee Contract:
  - **Step 1 Tool Directive**: The subagent prompt MUST mandate executing the `read_file` tool call on `skills/biome-<name>/SKILL.md` (and any referenced standard) on Turn 1 before writing code or modifying files.
  - **Inline Invariant Injection**: Directly inject persona mandates (`agents/<name>.md`), skill rules, and `.biome/requirements_ledger.json` into the prompt.
  - **Banish Raw Slash Command Assumptions**: Never assume typing `/<skill_name>` in a programmatic API prompt triggers macro expansion; enforce explicit tool calls.

### 3. Anti-Slop & Human-Grade Craftsmanship
* All generated code, UI titles, and microcopy must adhere to natural human engineering standards:
  - Ban robotic naming: No `*Helper`, `*Manager`, `*ProcessorHandler`. Use concise verbs and nouns (`login()`, `getUser()`).
  - Ban AI buzzwords in UI: No `seamless`, `empower`, `revolutionary`, `cutting-edge`, `AI-driven`. Use clean human terms.
  - Zero chatty obvious comments: Document non-obvious business logic only.

### 4. Decoupled Indexing & Multi-Domain Pod Partitioning
* Codebase topology is cached in `.biome/codebase_topology.json` by The Cartographer.
* Multi-stack builds (Database, Backend, Web, Mobile) are partitioned into domain pods and executed in strict dependency order (DB -> Backend -> Web/Mobile -> E2E).

### 5. Requirements Ledger & Anti-Amnesia Anchor
* Cumulative client requirements and historical features are tracked and locked in `.biome/requirements_ledger.json`.
* Subagents and builders MUST NEVER regress, omit, or forget previously established client requirements across versions.

### 6. Frontend Craftsmanship & SaaS Design System (Apple HIG & Executive Polish)
* All UI and frontend modifications must adhere to `resources/document_standards/ui-craftsmanship-standard.md`:
  - **Navigational Singularity & Anti-Redundancy**: Global utility controls (theme switch, language switch, user profile, logout) must reside in exactly ONE canonical location (pinned in sidebar footer OR header dropdown, never duplicated across both). Eliminate duplicate stacked page titles.
  - **Apple HIG Elevation & True Dark Mode**: Strictly ban "half-dark" interfaces with dark headers but blinding white cards. Enforce layered dark surface elevation (`slate-950` canvas, `slate-900` cards, `slate-800` modals) and semantic dual-theme tokens.
  - Strictly bound modal dialogs (`max-h-[85vh]` + sticky action footers) to prevent cut-off buttons.
  - Enforce `whitespace-nowrap` and responsive containers on data tables to eliminate broken text wraps.
  - Mandate pure SVG / Lucide icons and strictly ban raw font ligatures (`content_copy`).
  - Enforce executive SaaS design standards (Dark/Light modes, KPI metric cards, Donut charts, System Health indicators, and smart customer lookup cards).
  - Guarantee platform context accuracy (strictly aligning UI copy with the declared platform - e.g. mobile, desktop, or web - eliminating cross-platform leaks).

### 7. Unskippable Phase Pipeline & Circuit Breaker (Anti-God-Agent)
* **The Elephant NEVER Modifies Production Code**: The Elephant is strictly barred from calling `edit_file`, `write_file` (except on `.biome/*`, `docs/designs/*`, or `concepts_brief.md`), or running test suites in the primary conversation pane. All mutations belong to isolated Beaver pods.
* **The Ghost Subagent Fallback Prohibition**: If a Beaver subagent fails or reports compilation errors, the Elephant MUST NOT take over and write code in chat. The Elephant MUST send the traceback back to Beaver via `send_message` or respawn a fresh Beaver pod with the failure context. Self-coding in chat is a fatal protocol violation.
* **The Woodpecker Impersonation Prohibition**: The Elephant MUST NEVER create or write `woodpecker_audit_report.md` itself. It MUST spawn an isolated subagent running `biome-woodpecker`. Self-grading diff audits is strictly prohibited.
* **Zero Skipped Phases**: The Elephant must NEVER skip Phase 3 (Goldfish Review Swarm), Phase 4 (Auto-Resolve Gate), or Phase 5 (Cartographer & Indexer). Every phase is an unskippable gate.

### 8. Reactive Asynchrony & Subagent Anti-Killing Mandate
* **Zero-Polling Rule**: The host harness operates on event-driven reactive wakeups. The Elephant MUST NEVER execute busy-wait polling loops using `schedule` (e.g. 10s/15s/30s timers) or repeatedly invoke `manage_subagents` status queries. After calling `invoke_subagent` or `send_message`, the Elephant MUST immediately end its turn and await the system notification.
* **Strict Anti-Termination Law**: The Elephant is STRICTLY PROHIBITED from calling `manage_subagents kill` or `manage_task kill` on an in-progress subagent simply due to elapsed wall-clock time. Deep analysis, multi-pod builds, and test compilation legitimately take time.
* **Anti-Forgery of Subagent Reports**: If a subagent encounters an unrecoverable failure or network error, the Elephant MUST NEVER forge or author the subagent's expected deliverable (e.g., `goldfish_review_report.md`, `codebase_topology.json`, `woodpecker_audit_report.md`). It must respawn the subagent with corrective context or halt and escalate to the operator.

### 9. Knowledge Cutoff & Mandatory Live Registry / Web Verification
* **No Pre-Training Cutoff Arrogance**: Agents MUST NEVER assume or declare that a package, toolchain, or library version is "hallucinated", "fake", or "non-existent" simply because it is newer than the LLM's pre-training cutoff.
* **Mandatory Live Search & Registry Verification**: Whenever a user prompt or specification designates cutting-edge, late-2026, or modern versions (e.g., Kotlin 2.4+, Next.js 16+, React 19+, Tailwind v4+, Go 1.26+, Google Play Billing 9+), agents MUST:
  1. Use `search_web` or query live registries (`npm view`, `go list -m -versions`, Maven Central / Google Maven, PyPI, Crates.io) to inspect the latest release tags, changelogs, breaking changes, and migration guides.
  2. Strictly adhere to the version specified by the user or architectural blueprint rather than downgrading to obsolete or familiar legacy patterns.

### 10. Multi-Domain Pod Completion & Anti-Trivial-Bump Enforcement
* **Functional Implementation Guarantee**: Every domain pod defined in `.biome/project_index.json` (Database, Backend, Web, Mobile, E2E) MUST contain real, functional, verified code mutations.
* **Trivial Bump Fraud Prohibition**: Updating solely version numbers, metadata strings, or configuration files (e.g. changing only `versionCode` / `versionName` in `build.gradle.kts` while leaving all Kotlin/Compose screens untouched) while claiming the pod is upgraded is strictly classified as **Trivial Bump Fraud** and MUST be rejected with a build failure.
* **1:1 Surface & Authentication Parity**: When cloning or rebuilding across surfaces (e.g., Web 1:1 match to Mobile), authentication mechanisms, data schemas, and user flows must be faithfully mirrored. Inventing conflicting mechanisms (e.g., substituting JWT for Google OAuth without spec authorization) is prohibited.

### 11. Objective Delivery Changelog (Anti-Gaslighting & Anti-Slop)
* The final delivery summary MUST be an objective, factual engineering changelog.
* Strictly ban grandiloquent marketing puffery ("تم الانتهاء بنجاح كامل وشامل... الأسطح الثلاثة للمنصة... تصميم صحفي فخم").
* Reports must specify:
  1. Exact files modified per domain pod with line counts.
  2. Exact test suite execution commands and pass outputs.
  3. Concrete server/deployment status (differentiating what is deployed vs what is committed to Git).
  4. Explicit enumeration of known limitations or manual follow-up steps.
