---
name: biome-ui-craftsman
license: Apache-2.0
description: >-
  Audits, refactors, and unslopping user interfaces across web, mobile, and SaaS
  dashboards to executive standards. Eliminates AI design tells (purple glows,
  gradient text, emoji icons, uppercase tracked tags), enforces Apple HIG 4-tier
  dark elevation, fixes bounded modal viewports, implements defensive tables with
  whitespace-nowrap, and guarantees Navigational Singularity. Use whenever inspecting
  React, Vue, Tailwind, HTML/CSS screens, reviewing UI components, or when asked to
  polish, clean up, or unslop a user interface.
---

# BIOME UI Craftsman: Frontend Craftsmanship & Unslopping Engine

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-ui-craftsman` is the standalone command to invoke **The UI/UX Master Craftsman** (`agents/ui_craftsman.md`), the visual layout, accessibility, and design system auditor of the **BIOME Ecosystem**.

Born from Damir Sokolovsky's 9-pass Unslopping methodology and Anthropic's frontend design standards, this skill eliminates generic, vibecoded AI fingerprints and transforms raw screens into cohesive, production-grade SaaS interfaces.

### Core Philosophy: Quiet Chrome, Rich Moments
Slop spreads color, neon glows, and gradient text across every background, button, and card. Professional design keeps the chrome quiet, grounded in tinted neutrals, and focuses visual richness into one or two deliberate moments of real product content (a crisp chart, a device preview, or authentic status indicators).

---

## Invocation

```text
/biome-ui-craftsman <TargetFileOrScreen> [--fix]
```

* `<TargetFileOrScreen>`: Component, view, or template path (e.g., `src/components/Modal.tsx`, `pages/dashboard.vue`, or `ui/App.tsx`).
* `--fix`: Automatically apply remediation to the target file.

---

## The 9-Pass Unslopping Protocol

Execute the audit systematically across these nine ordered passes. Do not jump ahead; spacing and color define the visual rhythm that dictates typography and layout.

### Pass 1: Spacing & Rhythm (Strict 4px Grid)
* All paddings, margins, gaps, and heights MUST be multiples of 4 (4, 8, 12, 16, 20, 24, 32, 40, 48px).
* Density rules: Compact sidebars and panels use 16px; standard cards use 20–24px; outer page gutters use 24–32px.
* Eliminate arbitrary one-off values (e.g., `mt-[13px]`, `py-[11px]`).
* Detailed spacing tokens are defined in [references/design_tokens.md](references/design_tokens.md).

### Pass 2: Color & Neutral Ramps
* Anchor the screen to ONE neutral ramp (Graphite, Warm, or Ink from [references/design_tokens.md](references/design_tokens.md)).
* Ban hue gradients on surfaces, radial color blobs, and neon borders.
* Enforce **Apple HIG 4-Tier Dark Elevation**:
  - Layer 0 (Canvas Base): `slate-950` (`#020617` or `#0b0d11`)
  - Layer 1 (Cards & Sidebars): `slate-900` (`#0f172a` or `#12151c`) with 8% white hairline border (`rgba(255,255,255,0.08)`)
  - Layer 2 (Modals & Popovers): `slate-800` (`#1e293b` or `#1a1e28`) with 12% white border
  - Layer 3 (Tooltips & Dropdowns): `slate-700` (`#334155`)
* Strictly ban "half-dark" interfaces with dark headers but white cards.

### Pass 3: Icons & Visual Assets
* Every emoji used as an icon or tag decoration MUST be replaced with a clean line icon (Lucide or native SVG).
* Enforce single icon stroke (1.5px) and fixed dimensions (16px or 18px).
* Banish raw font ligatures (`<span>content_copy</span>`). Use verified SVG components.

### Pass 4: Microcopy & Nomenclature
* Headlines must state what the product does in factual, calm human terms.
* Eliminate AI marketing puffery (`seamless`, `empower`, `revolutionary`, `AI-driven`, `supercharge`, `unlock`, `magic`).
* Eliminate exclamation marks in interface copy (`Welcome back! 👋` -> `October 2026 Overview`).
* Status indicators must specify what they compare against (`+12% vs last month`).

### Pass 5: Typography & Hierarchy
* Hierarchy comes from size and color, NOT from font weight stacking or colored text gradients.
* Limit weights to 400 (regular) and 500 (medium), with 600 reserved strictly for primary section headings.
* Sentence case everywhere. Ban tracked-out all-caps tags (`NAVIGATION` -> `Navigation`).
* Apply `tabular-nums` to all numbers, prices, timestamps, and metric counters to eliminate jitter.

### Pass 6: Layout & Viewport Geometry
* **Modal Containment Law**: Every modal dialog must declare `max-h-[85vh]`, internal scroll (`overflow-y-auto`), and a sticky action footer (`sticky bottom-0`). Action buttons must NEVER be pushed below the viewport edge.
* **Defensive Table Law**: Data tables must wrap cells in `whitespace-nowrap` within horizontal overflow containers (`overflow-x-auto min-w-[...]`). Prevent broken wraps on codes, UUIDs, dates, and badges.
* **Navigational Singularity**: Global utility controls (theme switch, language toggle, profile avatar, logout) must reside in exactly ONE canonical location (pinned in sidebar footer OR header dropdown, never duplicated across both). Eliminate duplicate stacked page titles.

### Pass 7: Component Details & Nested Radii
* **Nested Radius Formula**: Inner radius must equal outer radius minus padding:
  $$\text{Radius}_{\text{inner}} = \max\left(4\text{px}, \text{Radius}_{\text{outer}} - \text{Padding}\right)$$
* Prevent concentric clipping where inner items look bloated inside rounded cards.
* Controls (buttons/inputs): 8–10px; Cards: 12–16px; Modals: 16–20px.

### Pass 8: Visuals & Moments
* Ground the visual centerpiece in real product materials: an authentic code block, a live metric chart, or a customer preview card.
* Smart Entity / Customer Lookup: Instant reactive preview rendering avatar, subscription status pill, and direct messaging link.

### Pass 9: Motion & Transitions
* Motion must be purposeful and subtle. Restrict transitions to 150ms–200ms ease-out on color, border, and opacity.
* Ban continuous pulsing elements, floating gradient blobs, or looping decorative animations.

---

## Concrete Code Comparison: Before vs. After

### 1. Modal Dialog Geometry

#### ❌ Vibecoded Slop (Broken Viewport & Heavy Shadows)
```tsx
// Buttons get clipped off screen on small displays; arbitrary glow
<div className="fixed inset-0 flex items-center justify-center p-8 bg-black/50">
  <div className="bg-slate-900 border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.4)] rounded-2xl p-8 w-full max-w-2xl">
    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Edit Profile ✨
    </h2>
    <div className="mt-6 space-y-6">
      {/* 20 form inputs that push buttons off screen */}
    </div>
    <div className="mt-8 flex justify-end gap-4">
      <button className="px-6 py-3 bg-purple-600 rounded-full font-bold">Save Changes!!</button>
    </div>
  </div>
</div>
```

#### ✅ Executive SaaS Standard (Contained, Accessible, Sticky Footer)
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
  <div className="flex flex-col w-full max-w-xl max-h-[85vh] bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
      <h2 className="text-base font-medium text-slate-100">Account settings</h2>
      <button className="text-slate-400 hover:text-slate-200 transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
    {/* Scrollable Body */}
    <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 text-sm text-slate-300">
      {/* Form content scrolls cleanly within bounded height */}
    </div>
    {/* Sticky Action Footer */}
    <div className="sticky bottom-0 flex items-center justify-end gap-3 px-6 py-4 bg-slate-900/95 border-t border-white/5">
      <button className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg border border-white/10 transition-colors">
        Cancel
      </button>
      <button className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
        Save changes
      </button>
    </div>
  </div>
</div>
```

---

## Output Report Format

When executing an audit, generate `ui_audit_report.md` structured as follows:

```markdown
# UI Craftsman Audit Report: <TargetFile>

## Executive Summary
* **Status**: [APPROVED | ACTION REQUIRED]
* **Slop Severity**: [Clean | Minor Polish Needed | Heavy Vibecoded Slop]
* **Platform Alignment**: [Web SaaS | Mobile Native | Desktop Extension]

## Findings by Pass
* **Pass 1 (Spacing)**: [Grid alignment notes]
* **Pass 2 (Color & Elevation)**: [Contrast & 4-tier dark elevation check]
* **Pass 3 (Icons & Assets)**: [SVG vs emoji evaluation]
* **Pass 4 (Microcopy)**: [Puffery stripped, sentence case enforced]
* **Pass 5 (Type)**: [Font pairings & tabular-nums check]
* **Pass 6 (Layout & Modals)**: [max-h-[85vh] and defensive tables]
* **Pass 7 (Details)**: [Nested radius check]

## Actionable Remediation Diff
[Exact, copyable code diff addressing all identified defects]
```
