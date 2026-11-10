<p align="center">
  <a href="https://github.com/asteria-core/biome"><img src="docs/assets/readme-header.svg" width="480" height="126" alt="BIOME Ecosystem"></a>
</p>

<p align="center"><strong>BIOME: Design with an elephant. Scout with a falcon. Review with a goldfish. Map with a cartographer. Build with a beaver. Blend with a chameleon. Inspect with a woodpecker. Clean with the reaper.</strong></p>

<p align="center">
  <a href="#install">Install</a> &ensp;·&ensp;
  <a href="#try-your-first-design">Quickstart</a> &ensp;·&ensp;
  <a href="docs/getting_started.md">Documentation</a> &ensp;·&ensp;
  <a href="https://github.com/asteria-core/biome">GitHub</a>
</p>

<br>

**BIOME** is an autonomous, production-grade software delivery ecosystem for AI coding assistants. Derived from Google's Elephant-Goldfish Model (EGM) and evolved into a multi-agent engineering platform:

* **The Elephant** holds deep architectural memory, explores trade-offs, and drafts specifications. *(Strictly barred from writing production code — The Elephant Iron Rule)*.
* **The Falcon** performs high-speed, low-token reconnaissance of codebase types and signatures so the Elephant never bloats its context.
* **The Goldfish** reviewer swarm red-teams the specification with zero conversation bias.
* **The Cartographer** maps codebase topology and caches dependencies in `.biome/codebase_topology.json`.
* **The Beaver** builds phase-isolated code modifications partitioned across domain pods (Database, Backend, Web, Mobile) with human-grade craftsmanship.
* **The Chameleon** eliminates robotic AI naming, marketing buzzwords in UI, and chatty comments.
* **The UI Craftsman** audits web and mobile frontends against bounded modal geometry, defensive table layouts, and executive SaaS aesthetics.
* **The Woodpecker** audits the raw git diff line-by-line across 6 pecking vectors before commit.
* **The Memory Vault** locks cumulative client requirements in `.biome/requirements_ledger.json` to guarantee zero requirement amnesia across iterations.
* **The Reaper Protocol** terminates and purges completed workers immediately to enforce the Zero-Zombie Invariant.
* **You** make the architectural trade-offs, approve specifications, and review execution receipts.

---

## Install

Choose your coding agent. Install the complete plugin so its skills and agents can run seamlessly across all environments directly from GitHub:

### Antigravity CLI

```sh
agy plugin install https://github.com/asteria-core/biome
```

For the **Antigravity App** and **Antigravity for IDEs** (Visual Studio Code extension), run `/plugin` or see the [installation instructions](docs/harnesses.md#antigravity-app-and-antigravity-for-ides).

### Claude Code

Install directly from GitHub via Claude Code CLI:

```sh
claude plugin marketplace add asteria-core/biome
claude plugin install biome@biome
```

Or inside an active Claude Code session:

```text
/plugin install biome --marketplace asteria-core/biome
```

### Codex CLI

Install directly from GitHub via Codex CLI:

```sh
codex plugin marketplace add asteria-core/biome
codex plugin add biome@biome
```

### Cursor & Windsurf

Install directly into your workspace:

```sh
npx skills add asteria-core/biome --agent cursor
```

Start a new session after installation. For other harnesses, see the [setup guide](docs/harnesses.md).

---

## Try your first feature

Open your project in your coding agent and run the unified autonomous command `/biome`. You can run the entire pipeline end-to-end automatically:

<img src="skills/biome/assets/icon.svg" width="20" height="20" align="top" alt=""> **Autonomous End-to-End Pipeline**

```text
/biome Add webhook delivery with retry backoff to this project.
```

`/biome` orchestrates the complete flow automatically:
1. **State Anchor**: Initializes `.biome/state.json` to survive context compaction.
2. **Concept Exploration & Falcon Reconnaissance**: Explores requirements and probes existing interfaces without code dumps.
3. **Elephant Spec Drafting**: The Elephant drafts publication-grade specification under `docs/designs/` (*strictly zero production code*).
4. **Hardened Critic & Goldfish Swarm**: Parallel zero-context audit with `agents/critic.md` attacking UI/UX friction and contracts.
5. **Auto-Resolve Gate**: Closes trivial findings, settles critical trade-offs with user, and marks spec `APPROVED`.
6. **Decoupled Cartography & Indexing**: Reuses `.biome/codebase_topology.json` and emits `.biome/project_index.json` partitioned by domain pods.
7. **Beaver Ephemeral Build**: Executes domain-partitioned mutations (DB -> Backend -> Web/Mobile) with anti-slop human-grade craft.
8. **Woodpecker Code Diff Audit**: Pecks at the raw `git diff` across 5 vectors (spec fidelity, security, edge cases, micro-architecture, anti-slop).
9. **The Reaper Teardown**: Destroys completed worker sessions to ensure unpolluted fresh starts.

---

## Standalone Granular Commands

You can also run individual steps using standalone granular commands whenever you want fine-grained control:

<img src="skills/biome-brainstorm/assets/icon.svg" width="20" height="20" align="top" alt=""> **Explore the idea**

```text
/biome-brainstorm Add webhook delivery to this project.
```

Discuss requirements and trade-offs with the agent. Fresh reviewers challenge the proposal, and the agent saves the agreed direction in `concepts_brief.md`.

<img src="skills/biome-draft/assets/icon.svg" width="20" height="20" align="top" alt=""> **Draft the specification**

```text
/biome-draft
```

The Elephant turns the brief into `docs/designs/<feature>.md`, pausing after each section for your feedback in chat.

<img src="skills/biome-critic/assets/icon.svg" width="20" height="20" align="top" alt=""> **Ruthless Critic Review**

```text
/biome-critic docs/designs/<feature>.md
```

The Cynical Lead Auditor & Adversarial User traces UI/UX states, latency, and edge cases to surface contract flaws.

<img src="skills/biome-review/assets/icon.svg" width="20" height="20" alt=""> **Review the draft**

```text
/biome-review docs/designs/<feature>.md
```

Fresh reviewers check the design across 5 stages (comprehension, style, design critique, zoom-out, readiness).

<img src="skills/biome-resolve/assets/icon.svg" width="20" height="20" alt=""> **Resolve findings**

```text
/biome-resolve docs/designs/<feature>.md
```

Negotiate and apply fixes, resolve trade-offs, and secure formal `APPROVED` status.

<img src="skills/biome-index/assets/icon.svg" width="20" height="20" alt=""> **Deterministic Indexing**

```text
/biome-index docs/designs/<feature>.md
```

The Indexer checks topology cache and emits `.biome/project_index.json` with domain-partitioned mutation plans.

<img src="skills/biome-build/assets/icon.svg" width="20" height="20" alt=""> **Build with Beaver**

```text
/biome-build
```

The Beaver executes phase-isolated, surgical code modifications according to `.biome/project_index.json`, checks latest package releases, enforces modular micro-architecture, runs local tests, and performs self-healing.

<img src="skills/biome-woodpecker/assets/icon.svg" width="20" height="20" alt=""> **Audit Diff with Woodpecker**

```text
/biome-woodpecker docs/designs/<feature>.md
```

The Woodpecker audits the raw git diff line-by-line for security vulnerabilities, spec fidelity, and pathological edge cases before committing.

See the [workflow guide](docs/getting_started.md) for the full process.

---

## The Animals of BIOME

### The Four Pillar Animals (Emblem Core)

The four primary animals form the balanced equilibrium of the BIOME emblem:

<table>
  <thead><tr><th align="left">Pillar Animal</th><th align="left">Context Mode</th><th align="left">Responsibility</th></tr></thead>
  <tbody>
    <tr valign="top"><td><strong>🐘 The Elephant</strong></td><td>Project context & conversational memory</td><td>Explore the problem, draft specifications, and coordinate delivery. <em>Strictly prohibited from writing or editing source code.</em></td></tr>
    <tr valign="top"><td><strong>🐠 The Goldfish</strong></td><td>Zero-context stateless inspection</td><td>Stress-test assumptions with fresh eyes and expose edge-case blind spots in specifications.</td></tr>
    <tr valign="top"><td><img src="skills/biome-build/assets/icon.svg" width="16" height="16" align="top" alt=""> <strong>The Beaver</strong></td><td>Isolated ephemeral builder</td><td>Execute surgical code modifications across domain pods (DB, Backend, Web, Mobile) with latest dependencies and tests.</td></tr>
    <tr valign="top"><td><img src="skills/biome-woodpecker/assets/icon.svg" width="16" height="16" align="top" alt=""> <strong>The Woodpecker</strong></td><td>Zero-context code diff inspector</td><td>Peck relentlessly at the raw git diff across 5 vectors (security, fidelity, edge cases, micro-architecture, anti-slop).</td></tr>
  </tbody>
</table>

### Specialized Auxiliary Operatives & Lifecycle

<table>
  <thead><tr><th align="left">Operative</th><th align="left">Context Mode</th><th align="left">Specialized Responsibility</th></tr></thead>
  <tbody>
    <tr valign="top"><td><strong>🦅 The Falcon</strong></td><td>Rapid reconnaissance scout</td><td>Probe codebase entrypoints, signatures, and schemas without polluting the Elephant's context.</td></tr>
    <tr valign="top"><td><strong>🗺️ The Cartographer</strong></td><td>Cached repository topology engine</td><td>Map codebase modules and dependencies once into <code>.biome/codebase_topology.json</code>, eliminating redundant scans.</td></tr>
    <tr valign="top"><td><strong>🦎 The Chameleon</strong></td><td>Anti-slop & craftsmanship stylist</td><td>Enforce natural human naming, clean UI microcopy, and purge robotic AI boilerplate.</td></tr>
    <tr valign="top"><td><strong>⚡ The Reaper</strong></td><td>Lifecycle execution protocol</td><td>Terminate and purge all worker subagent sessions immediately upon task completion (Zero Zombie Invariant).</td></tr>
    <tr valign="top"><td><strong>👤 You</strong></td><td>Human goals & strategic constraints</td><td>Resolve architectural trade-offs, approve the design, and review execution receipts.</td></tr>
  </tbody>
</table>

> **Core Architectural Invariants**:
> * **Elephant State Anchor**: Durable phase checkpoints are written to `.biome/state.json`. If context compaction occurs, the Elephant immediately re-anchors itself and strictly adheres to the Iron Rule.
> * **Subagent Preamble Contract**: Subagents are never called with ad-hoc prompts; each receives its official persona (`agents/*.md`) and execution skill (`skills/*/SKILL.md`) cold.
> * **Anti-Slop & Human-Grade Craftsmanship**: Robotic naming (`*Helper`, `*Manager`), AI buzzwords in UI (`seamless`, `empower`), and chatty obvious comments are strictly banned and rejected by the Woodpecker.
> * **Multi-Domain Pod Swarm**: Complex cross-stack tasks are partitioned into isolated domain pods (Database -> Backend -> Web/Mobile -> E2E), preventing token blowout.
> * **The Reaper Protocol (Zero-Zombie Rule)**: All worker sessions are strictly ephemeral single-use instances. They are terminated and destroyed immediately upon task completion.

---

## Choose a skill

You can use each skill when you need it. You do not have to follow the full sequence.

<table>
  <thead><tr><th align="left">Skill</th><th align="left">Use it to…</th></tr></thead>
  <tbody>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome/SKILL.md">BIOME</a></td><td>Run the autonomous end-to-end delivery ecosystem (/biome).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-brainstorm/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-brainstorm/SKILL.md">Brainstorm</a></td><td>Test an idea and write a concept brief (/biome-brainstorm).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-draft/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-draft/SKILL.md">Draft</a></td><td>Turn a brief or existing notes into a design document (/biome-draft).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-critic/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-critic/SKILL.md">Critic</a></td><td>Run the unsparing Critic Goldfish on any spec or feature (/biome-critic).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-review/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-review/SKILL.md">Review</a></td><td>Review a design with fresh agents across five stages (/biome-review).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-resolve/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-resolve/SKILL.md">Resolve</a></td><td>Work through review findings and agree on changes (/biome-resolve).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-index/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-index/SKILL.md">Indexer</a></td><td>Emit deterministic .biome/project_index.json from spec and code (/biome-index).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-build/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-build/SKILL.md">Build</a></td><td>Run standalone Beaver isolated code modifications with tests (/biome-build).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-woodpecker/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-woodpecker/SKILL.md">Woodpecker</a></td><td>Audit code diff and security vulnerabilities before commit (/biome-woodpecker).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-bootstrap/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-bootstrap/SKILL.md">Bootstrap</a></td><td>Create or update documentation for an existing codebase (/biome-bootstrap).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-review-loop/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-review-loop/SKILL.md">Review&nbsp;loop</a></td><td>Run a configured group of reviewers for a specific review task (/biome-review-loop).</td></tr>
    <tr valign="top"><td width="160" valign="top"><img src="skills/biome-drift-report/assets/icon.svg" width="20" height="20" alt="" align="top">&nbsp;<a href="skills/biome-drift-report/SKILL.md">Drift&nbsp;report</a></td><td>Compare checked-in documents with current source code (/biome-drift-report).</td></tr>
  </tbody>
</table>

---

## Learn more

- [Getting started](docs/getting_started.md): the workflow and project layout.
- [Setup](docs/harnesses.md): installation, agent capabilities, and known limits.
- [Architecture](https://github.com/asteria-core/biome/blob/main/docs/designs/architecture.md): how skills and reviewers fit together.
- [Testing](https://github.com/asteria-core/biome/blob/main/TESTING.md): checks, execution records, and verification limits.

## Contribute

Read [contributing](https://github.com/asteria-core/biome/blob/main/CONTRIBUTING.md) for PRs, [issues](https://github.com/asteria-core/biome/issues) for bugs, and [discussions](https://github.com/asteria-core/biome/discussions) for questions.

## License

This project is licensed under a dual-licensing structure:
* **[BIOME License v1.0 (Source-Available)](LICENSE)**: Copyright &copy; 2026 Asteria Studio. All Rights Reserved. Governs the BIOME multi-agent software engineering ecosystem, agent architectures (Elephant, Goldfish, Beaver, Woodpecker, Falcon, Chameleon), prompts, and orchestration state-machines for personal, academic, and internal non-commercial development. Commercial hosting, SaaS, managed execution, and AI model distillation require a separate commercial license from Asteria Studio.
* **[Apache License 2.0](LICENSE-APACHE)**: Upstream base portions Copyright &copy; Google LLC, licensed under the Apache License, Version 2.0.
