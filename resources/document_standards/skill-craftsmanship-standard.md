# Skill Craftsmanship Standard (The Anthropic & Google EGM Blueprint)

This standard defines the authoritative architectural and authoring rules for all skills created or maintained within the BIOME ecosystem, synthesizing Anthropic's Skill Creator methodology and Google's Elephant-Goldfish Model (EGM).

---

## 1. The Three-Level Progressive Disclosure Architecture

To prevent context exhaustion and maximize triggering precision, skills employ a three-tier progressive disclosure model:

```
[Level 1: YAML Frontmatter]       Always in context (~80-120 words)
        │
        ▼
[Level 2: SKILL.md Body]         Loaded only when skill triggers (<24,000 bytes)
        │
        ▼
[Level 3: Bundled Resources]     Loaded explicitly on demand (unlimited)
   ├── references/ (domain docs, tokens, signs, schemas)
   ├── scripts/    (deterministic shell, python, or node utilities)
   └── assets/     (icons, templates, media)
```

### Level 1: YAML Frontmatter (Triggering Engine)
* **`name`**: Lowercase, hyphen-separated identifier matching the directory name exactly (e.g. `biome-chameleon`).
* **`description`**: The primary triggering mechanism. LLMs have a tendency to under-trigger skills. Therefore, descriptions must be **action-oriented, detailed, and pushy**. They must include:
  1. What the skill does.
  2. Concrete user trigger phrases and scenarios (e.g., "Use when the user asks to...", "Trigger whenever inspecting...").
  3. Contextual file extensions and frameworks (e.g., "React, Vue, Go, Python").
  4. Negative boundaries (when NOT to use).

### Level 2: SKILL.md Body (Actionable Runbook)
* Must stay comfortably under the **24,000-byte load limit** (ideally 5,000–15,000 bytes).
* Uses the imperative form ("Execute step 1", "Parse manifest").
* Explains **why** rules exist (theory of mind) rather than yelling rigid uppercase "MUST" statements without rationale.
* Provides clear numbered workflow steps, concise before/after examples, and output artifact templates.
* Deep domain tables, lengthy token registries, and large JSON schemas must be split out into `references/`.

### Level 3: Bundled Collocated Resources
* **`references/`**: Domain knowledge, dictionaries, checklists, and schemas loaded into context on demand via `read_file`.
* **`scripts/`**: Executable code for deterministic, repetitive tasks (e.g. DOM snapshots, test runners).
* **`assets/`**: Self-contained SVG icons and templates.

---

## 2. Mandatory Verification & Co-Located Scenarios

Every skill package in `skills/<skill_name>/` MUST include:
1. `SKILL.md`: Valid YAML frontmatter (`name`, `description`, `license`) and markdown instructions.
2. `agents/openai.yaml`: Interface manifest with `display_name`, `short_description` (25–64 chars), and icon paths.
3. `assets/icon.svg`: Vector icon representing the skill.
4. `test_scenarios.yaml`: Co-located behavioral test scenarios verifying skill invocation and response contracts:
   - `skill`: matches directory name.
   - `scenarios`: array of test scenarios with `scenario_id`, `eval_type`, and `turns`.

---

## 3. Skill Authoring Antipatterns (What to Avoid)

| Flawed Pattern | Consequence | Craftsmanship Remedy |
| :--- | :--- | :--- |
| **Vague, Terse Description** ("Tool to help with UI") | LLM fails to trigger the skill when users ask relevant questions. | Pushy description detailing exact user keywords, files, and intents. |
| **Monolithic >30KB Body** | Hits token limits, bloats conversation context, degrades reasoning. | Move schemas, large tables, and tokens to `references/*.md`. |
| **Chatty Syntax Narrations** | Wastes model tokens explaining obvious things. | Focus on non-obvious invariants, edge cases, and failure modes. |
| **Missing Output Schema** | Model produces chaotic, unpredictable responses. | Define strict output artifact templates (e.g. `audit_report.md`). |
| **Unlinked External Dependencies** | Fails across isolated harnesses (Codex, Claude, Cursor). | Collocate all references and scripts directly within the skill folder. |
