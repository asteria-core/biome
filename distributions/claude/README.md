<p align="center">
  <a href="https://github.com/asteria-core/biome"><img src="docs/assets/readme-header.svg" width="480" height="126" alt="BIOME Ecosystem"></a>
</p>

<p align="center"><strong>BIOME: Design with an elephant. Review with a goldfish. Build with a beaver. Inspect with a woodpecker. Clean with the reaper.</strong></p>

<p align="center">
  <a href="#install">Install</a> &ensp;·&ensp;
  <a href="#try-your-first-design">Quickstart</a> &ensp;·&ensp;
  <a href="docs/getting_started.md">Documentation</a> &ensp;·&ensp;
  <a href="https://github.com/asteria-core/biome">GitHub</a>
</p>

<br>

**BIOME** is an autonomous, production-grade software delivery ecosystem for AI coding assistants.

* **Elephant** holds your project context, explores architectural options, and drafts specifications. *(Strictly prohibited from writing production source code — The Elephant Iron Rule)*.
* **Goldfish** reviewers and indexers examine the draft with fresh, zero-context eyes to expose gaps and produce a deterministic execution index (`.biome/project_index.json`).
* **Beaver** executes surgical, phase-isolated code modifications with latest modern dependencies and minimal line counts without inheriting conversational transcripts.
* **Woodpecker** audits the raw code diff and security vulnerabilities line-by-line before final commit.
* **The Reaper Protocol** terminates and purges completed workers immediately to prevent zombie states.
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

Clone directly from GitHub and install locally:

```sh
git clone https://github.com/asteria-core/biome.git
claude plugin install ./biome
```

### Codex CLI

Clone directly from GitHub and add:

```sh
git clone https://github.com/asteria-core/biome.git
codex plugin add ./biome
```

### Cursor & Windsurf

Clone directly and load rules:

```sh
git clone https://github.com/asteria-core/biome.git
cp -r biome/.cursor-plugin/rules/* .cursor/rules/
```

Start a new session after installation. For other harnesses, see the [setup guide](docs/harnesses.md).

---

## Try your first feature

Open your project in your coding agent and run the unified autonomous command `/biome`. You can run the entire pipeline end-to-end automatically:

<img src="skills/biome/assets/icon.svg" width="20" height="20" align="top" alt=""> **Autonomous End-to-End Pipeline**

```text
/biome Add webhook delivery with retry backoff to this project.
```

`/biome` orchestrates the complete 8-phase flow automatically:
1. **Concept Exploration & Brainstorming**: Explores problem, clarifies edge cases, and drafts `concepts_brief.md`.
2. **Elephant Spec Drafting**: The Elephant drafts publication-grade specification under `docs/designs/` (*strictly zero production code*).
3. **Hardened Critic & Goldfish Swarm**: Parallel zero-context audit with `agents/critic.md` attacking UI/UX friction and contracts.
4. **Auto-Resolve Gate**: Closes trivial findings, settles critical trade-offs with user, and marks spec `APPROVED`.
5. **Deterministic Indexing**: Generates `.biome/project_index.json` with exact `target_mutation_plan`.
6. **Beaver Ephemeral Build**: Verifies latest dependencies, enforces modular micro-architecture, executes isolated code mutations, and runs local tests.
7. **Woodpecker Code Diff Audit**: Pecks at the raw `git diff` for security vulnerabilities, spec fidelity, and edge-case bugs before commit.
8. **The Reaper Teardown**: Destroys completed worker sessions to ensure unpolluted fresh starts.

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

The Indexer scans codebase topology and dependencies to emit `.biome/project_index.json`.

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

## The Four Animals of BIOME

<table>
  <thead><tr><th align="left">Animal</th><th align="left">Context Mode</th><th align="left">Responsibility</th></tr></thead>
  <tbody>
    <tr valign="top"><td><strong>🐘 The Elephant</strong></td><td>Project context & conversational memory</td><td>Explore the problem, draft specifications, and verify build receipts. <em>Strictly prohibited from writing or editing source code.</em></td></tr>
    <tr valign="top"><td><strong>🐠 The Goldfish</strong></td><td>Zero-context stateless inspection</td><td>Stress-test assumptions with fresh eyes and emit the deterministic project index (<code>.biome/project_index.json</code>).</td></tr>
    <tr valign="top"><td><strong>🦫 The Beaver</strong></td><td>Isolated ephemeral builder</td><td>Execute surgical code mutations, check latest dependencies, enforce micro-architecture, and run local test suites.</td></tr>
    <tr valign="top"><td><strong>🪵 The Woodpecker</strong></td><td>Zero-context code diff inspector</td><td>Peck relentlessly at the raw git diff for security vulnerabilities, spec fidelity, and pathological failure modes.</td></tr>
    <tr valign="top"><td><strong>⚡ The Reaper</strong></td><td>Lifecycle execution protocol</td><td>Terminate and purge all worker subagent sessions immediately upon task completion (Zero Zombie Invariant).</td></tr>
    <tr valign="top"><td><strong>👤 You</strong></td><td>Human goals & strategic constraints</td><td>Resolve architectural trade-offs, approve the design, and review execution receipts.</td></tr>
  </tbody>
</table>

> **Core Architectural Invariants**:
> * **Modular Micro-Architecture**: The Beaver decomposes code into concise, single-responsibility files and structured directories rather than monolithic blobs, ensuring optimal indexing by the Indexer Goldfish into `.biome/project_index.json`.
> * **The Reaper Protocol (Zero-Zombie Rule)**: All Goldfish reviewers, Indexer subagents, Beaver builder sessions, and Woodpecker inspectors are strictly ephemeral single-use workers. They are terminated and destroyed immediately upon task completion. For any follow-up modification or new task, brand-new instances must be spawned from scratch.

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
* **[BIOME License v1.0 (Source-Available)](LICENSE)**: Copyright &copy; 2026 Asteria Studio. All Rights Reserved. Governs the BIOME multi-agent software engineering ecosystem, agent architectures (Elephant, Goldfish, Beaver, Woodpecker), prompts, and orchestration state-machines for personal, academic, and internal non-commercial development. Commercial hosting, SaaS, managed execution, and AI model distillation require a separate commercial license from Asteria Studio.
* **[Apache License 2.0](LICENSE-APACHE)**: Upstream base portions Copyright &copy; Google LLC, licensed under the Apache License, Version 2.0.
