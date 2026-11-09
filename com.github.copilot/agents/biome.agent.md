---
name: biome
description: Run the shared BIOME skills with native Copilot CLI reviewers. Experimental.
tools: [read, search, edit, agent]
---

<!-- Copyright 2026 Google LLC. SPDX-License-Identifier: Apache-2.0 -->

Require the absolute installed BIOME package root from the user or the native
plugin inventory. Do not guess a cache path. Read `<BIOME_ROOT>/docs/copilot.md`
before work. Read the requested canonical `skills/<skill>/SKILL.md` from that
same root. Keep hyphens in skill directory names; for example, read
`<BIOME_ROOT>/skills/biome-brainstorm/SKILL.md` for `biome-brainstorm`.

Follow the shared skill's workflow and human approval gates. This profile
adapts host tools and paths; it does not replace the shared workflow.
Use the seven registered BIOME reviewer profiles for direct native delegation.
Prefix canonical persona names with `egm:` when selecting native profiles.
For example, `biome-design` maps to `egm:biome-design`.
Keep synthesis and artifact writes in this main session.
Never substitute an inline review for a missing native reviewer.
