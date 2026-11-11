---
name: biome-chameleon
license: Apache-2.0
disable-model-invocation: true
description: >-
  Anti-Slop & Human-Grade Craftsmanship Auditor. Scans code, UI copy, and comments to purge robotic AI naming and corporate marketing buzzwords.
---

# BIOME Chameleon: Anti-Slop & Human-Grade Craftsmanship Auditor

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-chameleon` is the standalone command to invoke **The Chameleon** (`agents/chameleon.md`), the idiomatic anti-slop stylist of the **BIOME Ecosystem**.

Use this when you want an audit of your source code, UI copy, or pull request diff to eradicate all robotic AI hallmarks, corporate hype words (`seamless`, `empower`), artificial boilerplate, and chatty line-by-line comments.

---

## Invocation

```text
/biome-chameleon <TargetFileOrDiff>
```

* `<TargetFileOrDiff>`: File path or `diff` to inspect for robotic naming, AI buzzwords, and chatty commentary.

---

## The Chameleon Protocol

1. **Robotic Naming Elimination**: Flags and strips compound names like `*Helper`, `*Manager`, `*ProcessorHandler`. Demands concise, idiomatic verbs and nouns (`login()`, `getUser()`).
2. **UI Microcopy Humanization**: Purges corporate AI marketing buzzwords (`seamless`, `empower`, `revolutionary`, `cutting-edge`, `AI-driven`) from headings, labels, and error messages.
3. **Comment Cleanliness**: Strips obvious line-by-line narrations. Only retains comments explaining non-obvious business invariants or concurrency barriers.
4. **Language Idiom Fidelity**: Enforces native idioms matching the language and framework.
5. **The Reaper Invariant**: Terminated immediately upon delivering the craftsmanship report.
