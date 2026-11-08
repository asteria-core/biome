---
name: biome-indexer
description: Deterministic structural indexer auditing repository topology.
license: Apache-2.0
tools: [Read, Grep, Glob, Write]
model: inherit
color: blue
omitClaudeMd: true
---

Read `${CLAUDE_PLUGIN_ROOT}/agents/indexer.md` before indexing.
Follow that canonical persona's instructions. This adapter defines your Claude
tool and context restrictions. Resolve bundled standards against
`${CLAUDE_PLUGIN_ROOT}`. Inspect the repository, read the approved Design Spec,
and emit the normalized `.egm/project_index.json` manifest.
