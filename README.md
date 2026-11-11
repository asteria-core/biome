<p align="center">
  <a href="https://github.com/asteria-core/biome"><img src="docs/assets/readme-header.svg" width="480" height="126" alt="BIOME Ecosystem"></a>
</p>

<p align="center"><strong>BIOME: Design with an elephant. Scout with a falcon. Review with a goldfish. Map with a cartographer. Build with a beaver. Blend with a chameleon. Polish with a craftsman. Inspect with a woodpecker. Clean with the reaper.</strong></p>

<p align="center">
  <a href="#install">Install</a> &ensp;·&ensp;
  <a href="#the-autonomous-pipeline">Autonomous Pipeline</a> &ensp;·&ensp;
  <a href="#the-agents-of-biome">Agent Roster & Superpowers</a> &ensp;·&ensp;
  <a href="#the-15-standalone-skills">Skill Reference</a> &ensp;·&ensp;
  <a href="docs/getting_started.md">Documentation</a> &ensp;·&ensp;
  <a href="https://github.com/asteria-core/biome">GitHub</a>
</p>

<br>

**BIOME** is an autonomous, production-grade software delivery ecosystem engineered for AI coding assistants. Born from Google's foundational Elephant-Goldfish Model (EGM) and evolved into a multi-agent engineering platform, BIOME eliminates the fatal flaws of autonomous AI development: **contextual amnesia**, **hallucinated package APIs**, **robotic slop**, **broken half-dark UIs**, and **uncontrolled zombie processes**.

---

## The Paradigm Shift: Standard AI vs. BIOME

| Failure Vector in Standard AI | The BIOME Engineering Guarantee | Primary BIOME Agent / Invariant |
| :--- | :--- | :--- |
| **Model Amnesia**: Forgets earlier client requirements across iterations. | **The Memory Vault**: Cumulative client features are permanently locked in `.biome/requirements_ledger.json`. | 🏛️ `.biome/requirements_ledger.json` |
| **Token Bloat & Context Exhaustion**: Reading entire codebases into conversation context. | **Falcon Reconnaissance & Cartography**: Probes AST signatures and caches module topology in `.biome/codebase_topology.json`. | 🦅 The Falcon & 🗺️ The Cartographer |
| **The "God Agent" Spaghetti**: Single conversational LLM edits files blindly while debating in chat. | **The Elephant Iron Rule**: The conversational orchestrator is **strictly prohibited from writing code**. All code is built by isolated, ephemeral builder pods. | 🐘 The Elephant & 🦫 The Beaver |
| **Hallucinated Package APIs**: Importing deprecated methods or non-existent library flags. | **Live Registry Verification**: The builder queries live npm/PyPI/crates.io releases to pin real APIs before writing imports. | 🦫 The Beaver Builder |
| **Robotic AI Code & Copy Slop**: Clumsy compound names (`*Helper`, `*Manager`), chatty comments, and corporate buzzwords (`seamless`). | **Human-Grade Craftsmanship**: Enforces clean idiomatic verbs/nouns and purges AI marketing puffery. | 🦎 The Chameleon Stylist |
| **Broken & "Half-Dark" UIs**: Duplicate controls scattered between navbars and sidebars; dark headers with blinding white cards (`#FFFFFF`). | **Apple HIG & Executive SaaS Laws**: Enforces Navigational Singularity, 4-tier dark elevation, bounded modals, and defensive tables. | 🎨 The UI/UX Master Craftsman |
| **Blind Unchecked Commits**: Trusting shallow unit tests that test only happy paths. | **Zero-Context Diff Pecking**: Relentless inspection of raw `git diff` across 6 security and spec vectors before commit. | 🪵 The Woodpecker Inspector |
| **Zombie Subagents**: Background agents lingering in memory, conflicting over shared files. | **The Reaper Protocol**: Single-use ephemeral workers destroyed immediately upon task delivery (Zero-Zombie Rule). | ⚡ The Reaper Protocol |

---

## Install

BIOME is packaged as a universal plugin compatible with **Antigravity**, **Claude Code**, **OpenAI Codex**, and **Cursor / Windsurf**.

### Antigravity CLI & IDE Extension

```sh
agy plugin install https://github.com/asteria-core/biome
```

For the **Antigravity App** and **VS Code Extension**, trigger `/plugin` in chat or follow the [Harness Setup Guide](docs/harnesses.md).

### Claude Code

Install directly from GitHub via the Claude Code CLI:

```sh
claude plugin marketplace add asteria-core/biome
claude plugin install biome@biome
```

Or invoke within an active session:

```text
/plugin install biome --marketplace asteria-core/biome
```

### OpenAI Codex CLI

```sh
codex plugin marketplace add asteria-core/biome
codex plugin add biome@biome
```

### Cursor & Windsurf

Install directly into your workspace:

```sh
npx skills add asteria-core/biome --agent cursor
```

---

## The Autonomous Pipeline

Run the entire engineering lifecycle end-to-end automatically with a single command:

<img src="skills/biome/assets/icon.svg" width="20" height="20" align="top" alt=""> **Autonomous End-to-End Delivery**

```text
/biome Build multi-tenant voucher management with WhatsApp activation logs and executive dark mode.
```

### End-to-End Architectural Dataflow

```
[User Strategic Request]
           │
           ▼
┌──────────────────────────────┐
│       🐘 THE ELEPHANT        │ ◄─── State Anchor (.biome/state.json) & Anti-Amnesia Ledger
└──────────────┬───────────────┘
               │ (1. Scout codebase AST signatures without context bloat)
               ▼
┌──────────────────────────────┐
│        🦅 THE FALCON         │ ───► Probes routes, interfaces, types & schemas
└──────────────┬───────────────┘
               │ (2. Returns compact signatures)
               ▼
┌──────────────────────────────┐
│       🐘 THE ELEPHANT        │ ───► Drafts specification (docs/designs/<feature>.md)
└──────────────┬───────────────┘      [Strictly zero production code]
               │ (3. Fan-out to adversarial zero-context reviewers)
               ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       🐠 THE GOLDFISH SWARM                                 │
│  ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────┐ │
│  │  🥊 The Critic         │  │  💡 Inventive Catalyst │  │ 👓 Naive Reader│ │
│  │  (Adversarial UX/State)│  │  (Soviet TRIZ Solver)  │  │ (No Assumptions│ │
│  └────────────────────────┘  └────────────────────────┘  └────────────────┘ │
│  ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────┐ │
│  │  🏗️ Design Critic      │  │  🔭 Zoom-Out Architect │  │ 📋 Tech Lead   │ │
│  │  (Infra & Scalability) │  │  (Simplicity & YAGNI)  │  │ (Readiness Gate│ │
│  └────────────────────────┘  └────────────────────────┘  └────────────────┘ │
│  ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────┐ │
│  │  🔬 Codebase Details   │  │  📐 Structural Auditor │  │ ✍️ Style Editor │ │
│  │  (Anti-Hallucination)  │  │  (Symmetry & Hierarchy)│  │ (Brevity/Clarity│ │
│  └────────────────────────┘  └────────────────────────┘  └────────────────┘ │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ (4. Synthesizer aggregates findings)
                                       ▼
┌──────────────────────────────┐
│       🐘 AUTO-RESOLVE        │ ───► Settles trade-offs, locks spec as APPROVED
└──────────────┬───────────────┘
               │ (5. Maps topology and partitions mutation plan)
               ▼
┌──────────────────────────────┐
│      🗺️ CARTOGRAPHER        │ ───► Reads/Caches .biome/codebase_topology.json
└──────────────┬───────────────┘
               │ (6. Generates deterministic target mutation plan)
               ▼
┌──────────────────────────────┐
│         🎯 INDEXER           │ ───► Emits .biome/project_index.json
└──────────────┬───────────────┘
               │ (7. Phase-Isolated Ephemeral Build across Domain Pods)
               ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          🦫 THE BEAVER BUILDER                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ Domain Pods: [Database] ──► [Backend API] ──► [Web/Mobile] ──► [E2E]  │  │
│  │ Invariants: Real Package Verification · Micro-Architecture · Tests    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ (8. Active working git diff)
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       🪵 THE WOODPECKER AUDITOR                             │
│  Pecks at git diff across 6 vectors:                                        │
│  [Spec Fidelity] · [Security/Taint] · [Edge Cases] · [Micro-Architecture]   │
│  [Anti-Slop (Chameleon)] · [UI/UX Craftsmanship (Apple HIG Laws)]           │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                      ┌────────────────┴────────────────┐
                 [REJECTED]                        [APPROVED]
                      │                                 │
                      ▼                                 ▼
         [Beaver Self-Healing Loop]            [Atomic Git Commit]
                                                        │
                                                        ▼
                                               [⚡ THE REAPER]
                                       (Kills all ephemeral sessions)
```

---

## The Agents of BIOME

### 1. 🐘 The Elephant (Context Orchestrator & Living Spec Engine)
* **Orchestrator**: [`skills/biome/SKILL.md`](skills/biome/SKILL.md) (The Elephant Orchestrator Engine)
* **Context Mode**: Deep conversational memory and architectural steward.
* **The Elephant Iron Rule**: The Elephant is **strictly prohibited from writing, generating, or modifying production source code**. Its sole responsibility is strategic discovery, specifications, and coordination.
* **State Anchor**: Durable phase checkpoints are written to `.biome/state.json`. If context compaction occurs in the host harness, the Elephant automatically recovers state and resumes from `active_phase`.

### 2. 🦅 The Falcon (Rapid Reconnaissance Scout)
* **Skill**: `/biome-falcon <path>` | **Persona**: [`agents/falcon.md`](agents/falcon.md)
* **Context Mode**: Ultra-fast, low-token reconnaissance.
* **Superpower**: Probes deep project directories, AST signatures, interfaces, and database models to extract compact contracts without dumping massive raw code into conversational context.

### 3. 🗺️ The Cartographer (Repository Topology Engine)
* **Skill**: `/biome-cartographer` | **Persona**: [`agents/cartographer.md`](agents/cartographer.md)
* **Context Mode**: Cached codebase knowledge engine.
* **Superpower**: Analyzes module boundaries, entrypoints, and internal dependency graphs, writing an immutable topology cache to `.biome/codebase_topology.json`. Prevents redundant filesystem scans across subagents.

### 4. 🐠 The Goldfish Reviewer Swarm (10 Specialized Personas)
Zero-context, stateless review subagents that evaluate specifications cold with zero conversational memory or developer justifications:
1. **🥊 The Critic ([`agents/critic.md`](agents/critic.md))**: Cynical Lead Auditor attacking state transitions, latency traps, unhandled failures, and contract flaws.
2. **💡 The Inventive Catalyst ([`agents/inventive_catalyst.md`](agents/inventive_catalyst.md))**: Applies Soviet TRIZ principles to identify and eliminate false architectural compromises without quality trade-offs.
3. **👓 The Naive Reader ([`agents/comprehension.md`](agents/comprehension.md))**: Audits with zero assumed institutional knowledge, flagging undefined acronyms and ambiguous logic.
4. **✍️ The Technical Style Editor ([`agents/style.md`](agents/style.md))**: Technical copy editor enforcing clarity, precision, brevity, and objective framing.
5. **🏗️ The Hostile Design Critic ([`agents/design_critic.md`](agents/design_critic.md))**: Attacks system architecture, horizontal scaling bottlenecks, infrastructure economics, and single points of failure.
6. **🔭 The Skeptical Minimalist ([`agents/zoom_out.md`](agents/zoom_out.md))**: Relentlessly eliminates unnecessary complexity using YAGNI and maximizes existing library reuse.
7. **📋 The Pragmatic Tech Lead ([`agents/implementation_readiness.md`](agents/implementation_readiness.md))**: Verifies that execution instructions are 100% unambiguous with zero unresolved design decisions.
8. **🔬 The Codebase Quality Auditor ([`agents/codebase_details.md`](agents/codebase_details.md))**: Verifies that documentation strictly reflects live code without doc-to-code hallucinations.
9. **📐 The Structural Layout Architect ([`agents/structural.md`](agents/structural.md))**: Validates markdown heading hierarchy, table formatting, and template compliance.
10. **Intermediate Synthesizer ([`agents/synthesizer.md`](agents/synthesizer.md))**: Aggregates parallel reviews, eliminates duplicate feedback, and standardizes citations.

### 5. 🦫 The Beaver (Phase-Isolated Ephemeral Surgical Builder)
* **Skill**: `/biome-build` | **Persona**: [`agents/beaver.md`](agents/beaver.md)
* **Context Mode**: Ephemeral builder isolated from conversation history.
* **Multi-Domain Pod Swarm**: Partitions complex cross-stack mutations into isolated domain pods executed in strict order:
  $$\text{Database Pod} \longrightarrow \text{Backend API Pod} \longrightarrow \text{Web/Mobile Pod} \longrightarrow \text{E2E Pod}$$
* **Superpower Invariants**:
  - **Live Dependency Verification**: Checks actual npm/PyPI registry APIs before importing packages to prevent hallucinated functions.
  - **Micro-Architecture**: Decomposes sprawling logic into modular single-responsibility files.
  - **Self-Healing Test Loops**: Runs local test suites autonomously up to 3 times to repair runtime breaks.

### 6. 🦎 The Chameleon (Anti-Slop & Human-Grade Stylist)
* **Skill**: `/biome-chameleon <path>` | **Persona**: [`agents/chameleon.md`](agents/chameleon.md)
* **Context Mode**: Anti-slop craftsmanship auditor.
* **Superpower**: Inspects code and UI copy to purge all AI fingerprints:
  - Banish robotic compound naming: No `*Helper`, `*Manager`, `*ProcessorActionHandler`. Mandates clean verbs and nouns (`login()`, `getUser()`).
  - Banish AI marketing puffery in UI: No `seamless`, `empower`, `revolutionary`, `cutting-edge`. Mandates clear, human terminology.
  - Banish chatty obvious comments: Strips `// function to calculate sum`.

### 7. 🎨 The UI/UX Master Craftsman (Apple HIG & Executive SaaS)
* **Skill**: `/biome-ui-craftsman <path>` | **Persona**: [`agents/ui_craftsman.md`](agents/ui_craftsman.md)
* **Standard**: [`resources/document_standards/ui-craftsmanship-standard.md`](resources/document_standards/ui-craftsmanship-standard.md)
* **Superpower**: Relentlessly audits web, mobile, and dashboard interfaces against **The Eight Frontend Laws**:
  1. **Navigational Singularity & Zero Redundancy**: Global controls (Theme, Language, Profile, Logout) MUST reside in exactly ONE canonical location (pinned to sidebar footer OR header dropdown, never duplicated across both). Banish duplicate stacked page titles.
  2. **Apple HIG 4-Tier Elevation & True Dark Mode**: Strictly bans "half-dark" interfaces with dark headers but blinding white cards (`#FFFFFF`). Enforces layered dark elevation (`slate-950` canvas, `slate-900` cards, `slate-800` modals) and dual-theme semantic tokens.
  3. **Modal Viewport Containment**: Enforces `max-h-[85vh]`, internal scrollable body, and permanently visible sticky action footers.
  4. **Defensive Table Layout**: Enforces `whitespace-nowrap` on codes, dates, and badges within responsive horizontal scroll containers (`overflow-x-auto min-w-[...]`).
  5. **Smart Customer Lookup**: Instant reactive lookup rendering rich customer preview cards (Avatar, Device, Subscription Tier, WhatsApp direct link).
  6. **Asset & Icon Integrity**: Pure SVG / Lucide components with explicit dimensions. Strictly bans raw unrendered font ligatures (`content_copy`).
  7. **Platform Context Fidelity**: UI copy strictly matches the target platform (no web extension references inside native mobile apps).
  8. **Bilingual RTL/LTR Architecture**: Full bidirectional mirroring with dedicated Admin & Company Settings tab.

### 8. 🪵 The Woodpecker (Zero-Context Code Diff & Security Inspector)
* **Skill**: `/biome-woodpecker [spec.md]` | **Persona**: [`agents/woodpecker.md`](agents/woodpecker.md)
* **Context Mode**: Stateless pre-commit auditor.
* **Superpower**: Pecks relentlessly at the raw `git diff` across 6 dimensions:
  1. *Spec & Boundary Fidelity & Anti-Amnesia*: Guarantees all locked features in `.biome/requirements_ledger.json` remain preserved.
  2. *Security Hardening*: Taint analysis, injection checks (SQLi, command injection, path traversal), and secrets leakage.
  3. *Pathological Edge Cases*: Null/nil dereferences, unhandled async Promise rejections, resource leaks, and race conditions.
  4. *Micro-Architecture*: Modular files, type-safety rigor (bans `any`), and rejection of vanity tests.
  5. *Anti-Slop Craftsmanship*: Validates Chameleon standards across modified files.
  6. *UI/UX Craftsmanship*: Validates adherence to the Eight Frontend Laws before allowing commits.

### 9. 🏛️ The Memory Vault & Requirements Ledger
* **Anchor**: `.biome/requirements_ledger.json` | **Template**: [`resources/requirements_ledger.template.json`](resources/requirements_ledger.template.json)
* **Superpower**: Protects against AI requirement amnesia. Every cumulative feature requested by the client is logged, categorized, and permanently locked. The Woodpecker automatically blocks any build that drops or regresses locked requirements.

### 10. ⚡ The Reaper Protocol (Zero-Zombie Lifecycle Invariant)
* All worker subagents are strictly ephemeral single-use instances.
* Immediately upon completing an audit, build, or review task, worker sessions are terminated and destroyed, preventing orphaned background processes from corrupting subsequent turns.

---

## The 15 Standalone Skills

Every capability in BIOME can be invoked individually as a standalone granular command:

<table>
  <thead><tr><th align="left">Skill Command</th><th align="left">Purpose & Responsibility</th><th align="left">Primary Output Artifact</th></tr></thead>
  <tbody>
    <tr valign="top">
      <td><img src="skills/biome/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome</code></td>
      <td>Orchestrate the complete autonomous end-to-end delivery pipeline.</td>
      <td>Full feature branch, tests, and atomic commit.</td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-brainstorm/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-brainstorm</code></td>
      <td>Clarify a raw concept and stress-test trade-offs with fresh reviewers.</td>
      <td><code>concepts_brief.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-draft/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-draft</code></td>
      <td>Draft living architectural design specifications section-by-section.</td>
      <td><code>docs/designs/&lt;feature&gt;.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-critic/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-critic</code></td>
      <td>Run the unsparing Critic Goldfish to expose state and contract flaws.</td>
      <td><code>critic_audit_report.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-review/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-review</code></td>
      <td>Execute a multi-stage review with 10 zero-context Goldfish specialists.</td>
      <td><code>review_findings.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-resolve/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-resolve</code></td>
      <td>Negotiate trade-offs, apply spec fixes, and secure APPROVED status.</td>
      <td>Formal spec sign-off (<code>APPROVED</code>).</td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-falcon/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-falcon</code></td>
      <td>Rapid low-token reconnaissance of codebase types, schemas, and routes.</td>
      <td>Signature summaries in chat.</td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-cartographer/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-cartographer</code></td>
      <td>Map repository modules, dependencies, and external entrypoints.</td>
      <td><code>.biome/codebase_topology.json</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-index/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-index</code></td>
      <td>Parse approved spec and topology to emit partitioned mutation plans.</td>
      <td><code>.biome/project_index.json</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-build/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-build</code></td>
      <td>Execute surgical, phase-isolated code modifications with self-healing tests.</td>
      <td>Mutated source code & test receipts.</td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-ui-craftsman/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-ui-craftsman</code></td>
      <td>Audit frontends against Apple HIG, true dark mode, and SaaS standards.</td>
      <td><code>ui_audit_report.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-chameleon/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-chameleon</code></td>
      <td>Audit code and UI copy to eliminate robotic AI naming and marketing puffery.</td>
      <td><code>chameleon_audit_report.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-woodpecker/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-woodpecker</code></td>
      <td>Audit the raw working git diff across 6 pecking vectors before commit.</td>
      <td><code>woodpecker_audit_report.md</code></td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-bootstrap/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-bootstrap</code></td>
      <td>Generate, format, and verify documentation across an existing codebase.</td>
      <td>Hierarchical README contract trees.</td>
    </tr>
    <tr valign="top">
      <td><img src="skills/biome-review-loop/assets/icon.svg" width="18" height="18" align="top" alt=""> <code>/biome-review-loop</code></td>
      <td>Run a configured group of specialized reviewers for custom tasks.</td>
      <td>Synthesized feedback report.</td>
    </tr>
  </tbody>
</table>

---

## Architectural Invariants & State Files

All execution state is managed transparently inside the project's root `.biome/` directory:

```text
.biome/
├── state.json                 # Durable phase checkpointing for post-compaction recovery
├── requirements_ledger.json   # Immutable client requirements vault (Anti-Amnesia)
├── codebase_topology.json     # Cached repository module and dependency map
└── project_index.json         # Partitioned target mutation plan for domain pods
```

---

## Learn More

- [Setup & Harness Integration](docs/harnesses.md): Installation and capabilities across Antigravity, Claude Code, Codex, and Cursor.
- [Getting Started Guide](docs/getting_started.md): The comprehensive workflow and operational rules.
- [UI/UX Craftsmanship Standard](resources/document_standards/ui-craftsmanship-standard.md): The Eight Frontend Laws for modern executive SaaS design.
- [System Architecture](https://github.com/asteria-core/biome/blob/main/docs/designs/architecture.md): Deep-dive into agent lifecycles, schemas, and state machines.
- [Testing & Quality Verification](https://github.com/asteria-core/biome/blob/main/TESTING.md): Verification limits, harness matrix, and test suite execution.

---

## License

This project is licensed under a dual-licensing structure:
* **[BIOME License v1.0 (Source-Available)](LICENSE)**: Copyright &copy; 2026 Asteria Studio. All Rights Reserved. Governs the BIOME multi-agent software engineering ecosystem, agent architectures (Elephant, Goldfish, Beaver, Woodpecker, Falcon, Chameleon, UI Craftsman), prompts, and orchestration state machines for personal, academic, and internal non-commercial development. Commercial hosting, SaaS, managed execution, and AI model distillation require a separate commercial license from Asteria Studio.
* **[Apache License 2.0](LICENSE-APACHE)**: Upstream base portions Copyright &copy; 2026 Asteria Core, licensed under the Apache License, Version 2.0.
