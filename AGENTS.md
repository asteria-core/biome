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

### 2. Subagent Preamble Contract
* Every subagent invocation MUST include the standardized bootstrap preamble specifying the persona file (`agents/<name>.md`) and execution skill (`skills/biome-<name>/SKILL.md`). Ad-hoc, unstructured subagent prompts are strictly prohibited.

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
