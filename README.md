<p align="center">
  <a href="https://egm.dev"><img src="docs/assets/readme-header.svg" width="480" height="116" alt="BIOME Ecosystem"></a>
</p>

<p align="center"><strong>BIOME: Design with an elephant. Review with a goldfish. Build with a beaver. Inspect with a woodpecker. Clean with the reaper.</strong></p>

<p align="center">
  <a href="#install">Install</a> &ensp;·&ensp;
  <a href="#try-your-first-design">Quickstart</a> &ensp;·&ensp;
  <a href="docs/getting_started.md">Documentation</a> &ensp;·&ensp;
  <a href="https://egm.dev">Website</a>
</p>

<br>

**BIOME** is an autonomous, living software delivery ecosystem for AI coding assistants.

**Elephant** holds your project context and drafts specifications. **Goldfish** reviewers and indexers examine the draft with fresh eyes and produce a deterministic execution index (`.biome/project_index.json`). **Beaver** executes surgical, phase-isolated code modifications with latest modern dependencies and minimal line counts without inheriting conversational transcripts. **Woodpecker** audits the raw code diff and security vulnerabilities before final commit. **The Reaper Protocol** terminates completed workers to prevent zombie states. **You** make the architectural trade-offs, approve specifications, and review receipts.

> **The Elephant Iron Rule**: The Elephant is strictly prohibited from writing or editing source code. The Elephant's sole function is conversational discovery, spec generation, and reviewing Beaver receipts.

The built-in draft and design-review workflow targets software specifications. For other documents, choose reviewers and standards with `/egm-review-loop`. Bootstrap and drift reporting apply to software codebases.

## Install

Choose your coding agent. Install the complete plugin so its skills can read the reviewer prompts and document standards.

### Antigravity CLI

```sh
agy plugin install https://github.com/google/elephant-goldfish-model
```

For the **Antigravity App** and **Antigravity for IDEs** (Visual Studio Code extension), run `/plugin` or see the [installation instructions](docs/harnesses.md#antigravity-app-and-antigravity-for-ides).

### ChatGPT and Codex desktop

Open the [published EGM plugin](https://chatgpt.com/plugins/plugins_6aeb90f47ec88191a3c107e01d3eb357) in the desktop app and install it. This listing is desktop-only. For Codex CLI, use the commands below.

### Claude Code

```sh
claude plugin marketplace add google/elephant-goldfish-model
claude plugin install egm@egm
```

### Codex CLI

```sh
codex plugin marketplace add google/elephant-goldfish-model
codex plugin add egm@egm
```

Start a new session after installation. For **Claude Cowork** and **ChatGPT Work**, see the [setup guide](docs/harnesses.md).

## Try your first design

Open your project in your coding agent and run the unified autonomous command `/biome`. You can run the entire pipeline end-to-end automatically:

<img src="skills/biome/assets/icon.svg" width="20" height="20" align="top" alt=""> **Autonomous End-to-End Pipeline**

```text
/biome Add webhook delivery to this project.
```

`/biome` orchestrates the complete 7-phase flow automatically:
1. **Concept Exploration & Brainstorming**: Explores problem, clarifies edge cases, and drafts `concepts_brief.md`.
2. **Elephant Spec Drafting**: The Elephant drafts publication-grade specification under `docs/designs/` (*strictly zero production code*).
3. **Hardened Critic & Goldfish Swarm**: Parallel zero-context audit with `agents/critic.md` attacking UI/UX friction and contracts.
4. **Auto-Resolve Gate**: Closes trivial findings, settles critical trade-offs with user, and marks spec `APPROVED`.
5. **Deterministic Indexing**: Generates `.biome/project_index.json` with exact `target_mutation_plan`.
6. **Beaver Ephemeral Build**: Verifies latest dependencies, enforces modular micro-architecture, executes isolated code mutations, runs tests, self-heals, and commits via git.
7. **The Reaper Teardown**: Destroys completed worker sessions to ensure unpolluted fresh starts.

You can also run individual steps using standalone granular commands:

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

<img src="skills/biome-review/assets/icon.svg" width="20" height="20" align="top" alt=""> **Review the draft**

```text
/biome-review docs/designs/<feature>.md
```

Fresh reviewers check the design across 5 stages (comprehension, style, design critique, zoom-out, readiness).

<img src="skills/biome-resolve/assets/icon.svg" width="20" height="20" align="top" alt=""> **Resolve findings**

```text
/biome-resolve docs/designs/<feature>.md
```

Negotiate and apply fixes, resolve trade-offs, and secure formal `APPROVED` status.

<img src="skills/biome-index/assets/icon.svg" width="20" height="20" align="top" alt=""> **Deterministic Indexing**

```text
/biome-index docs/designs/<feature>.md
```

The Indexer scans codebase topology and dependencies to emit `.biome/project_index.json`.

<img src="skills/biome-build/assets/icon.svg" width="20" height="20" align="top" alt=""> **Build with Beaver**

```text
/biome-build
```

The Beaver executes phase-isolated, surgical code modifications according to `.biome/project_index.json`, checks latest package releases, enforces modular micro-architecture, runs local tests, performs self-healing, creates an atomic semantic git commit, and returns an execution receipt.

See the [workflow guide](docs/getting_started.md) for the full process.

## How it works

<table>
  <thead><tr><th align="left">Role</th><th align="left">Context</th><th align="left">Responsibility</th></tr></thead>
  <tbody>
    <tr valign="top"><td><strong>Elephant</strong></td><td>Your project, requirements, and earlier decisions</td><td>Explore the problem, draft specifications, and verify build receipts. <em>Strictly prohibited from writing or editing source code.</em></td></tr>
    <tr valign="top"><td><strong>Goldfish</strong></td><td>The document and its referenced source material, without earlier conversation</td><td>Find missing assumptions, stress-test risks, and emit the deterministic project index.</td></tr>
    <tr valign="top"><td><strong>Beaver</strong></td><td>Isolated ephemeral session (.biome/project_index.json + approved spec)</td><td>Execute surgical code mutations, check latest dependencies, run tests, self-heal, and commit atomically.</td></tr>
    <tr valign="top"><td><strong>Woodpecker</strong></td><td>Zero-context git diff inspection (diff + approved spec)</td><td>Audit raw code diffs for security vulnerabilities, spec fidelity, and edge-case bugs before commit.</td></tr>
    <tr valign="top"><td><strong>Reaper</strong></td><td>Execution lifecycle invariant</td><td>Terminate and destroy all worker subagents upon task completion to prevent zombies.</td></tr>
    <tr valign="top"><td><strong>You</strong></td><td>The goals and constraints that matter</td><td>Resolve trade-offs, approve the design, and decide what to build.</td></tr>
  </tbody>
</table>

> **Core Architectural Invariants**:
> * **Modular Micro-Architecture**: The Beaver decomposes code into concise, single-responsibility files and structured directories rather than monolithic blobs, ensuring optimal indexing by the Indexer Goldfish into `.biome/project_index.json`.
> * **The Reaper Protocol (Zero-Zombie Rule)**: All Goldfish reviewers, Indexer subagents, Beaver builder sessions, and Woodpecker inspectors are strictly ephemeral single-use workers. They are terminated and destroyed immediately upon task completion. For any follow-up modification or new task, brand-new instances must be spawned from scratch.

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

## Learn more

- [Getting started](docs/getting_started.md): the workflow and project layout.
- [Setup](docs/harnesses.md): installation, agent capabilities, and known limits.
- [Architecture](https://github.com/google/elephant-goldfish-model/blob/main/docs/designs/architecture.md): how skills and reviewers fit together.
- [Testing](https://github.com/google/elephant-goldfish-model/blob/main/TESTING.md): checks, execution records, and verification limits.
- [Dave Rensin’s original essay](https://medium.com/@drensin/elephants-goldfish-and-the-new-golden-age-of-software-engineering-c33641a48874): the ideas behind EGM.

## Contribute

See the [accessibility statement](https://github.com/google/elephant-goldfish-model/blob/main/ACCESSIBILITY.md)
for accessibility goals, known limits, and how to report barriers.

Read [contributing](https://github.com/google/elephant-goldfish-model/blob/main/CONTRIBUTING.md) for PRs, [issues](https://github.com/google/elephant-goldfish-model/issues) for bugs, and [discussions](https://github.com/google/elephant-goldfish-model/discussions) for questions.

## License

[Apache 2.0](LICENSE). This is not an officially supported Google product.
