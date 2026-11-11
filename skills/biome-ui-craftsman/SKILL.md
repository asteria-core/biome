---
name: biome-ui-craftsman
license: Apache-2.0
description: >-
  UI/UX Master Craftsman & Aesthetic Auditor. Inspects frontend interfaces for Apple HIG standards, zero navigation redundancy, true dark mode elevation, bounded modals, and SaaS excellence.
---

# BIOME UI Craftsman: Frontend Craftsmanship & Aesthetic Auditor

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-ui-craftsman` is the standalone command to invoke **The UI/UX Master Craftsman** (`agents/ui_craftsman.md`), the aesthetic and visual layout auditor of the **BIOME Ecosystem**.

Use this when you want an audit of your web, mobile, or dashboard user interfaces against category-defining SaaS design standards and the Eight Frontend Laws defined in `resources/document_standards/ui-craftsmanship-standard.md`.

---

## Invocation

```text
/biome-ui-craftsman <TargetFileOrScreen>
```

* `<TargetFileOrScreen>`: Component, view, or template path (e.g. `src/components/Modal.tsx` or `pages/dashboard.vue`).

---

## The UI Craftsman Protocol

1. **Navigational Singularity & Zero Redundancy**: Confirms global utility controls (Theme switch, Language switch, Profile, Logout) exist in exactly ONE canonical location (pinned in sidebar footer OR top-right dropdown, never duplicated across both). Banish duplicate page titles.
2. **Apple HIG Elevation & True Dark Mode**: Strictly bans "half-dark modes" with dark headers but blinding white cards. Enforces layered elevation (`slate-950` base, `slate-900` cards, `slate-800` modals) with subtle borders and dual-theme tokens.
3. **Modal Containment Law**: Confirms modals have `max-h-[85vh]`, internal scroll, and sticky action footers. Buttons must NEVER be pushed below the viewport.
4. **Defensive Table Law**: Verifies `whitespace-nowrap` on codes, dates, and pills within `overflow-x-auto min-w-[...]` to eliminate broken text wraps.
5. **Asset Integrity**: Purges raw font ligatures (`<span>content_copy</span>`). Requires verified SVG or Lucide icon components.
6. **Platform Context Fidelity**: Confirms copy strictly matches the target platform, with zero cross-platform terminology leaks.
7. **Executive SaaS Standards**: Confirms coherent Dark/Light palettes, KPI stat cards, Donut charts for status distribution, and smart entity lookup cards.
8. **The Reaper Invariant**: Terminated immediately upon delivering the audit report.
