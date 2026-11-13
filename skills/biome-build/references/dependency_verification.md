# Live Package Registry Verification Guide

To eliminate hallucinated package APIs, deprecated methods, and non-existent configuration flags, The Beaver queries live package registries before writing imports.

---

## 1. Package Registry Query Commands

| Ecosystem | Registry Check Command | API Documentation / Release Verification |
| :--- | :--- | :--- |
| **npm / Node.js** | `npm view <package> version` | `npm view <package> versions --json` (or inspect `dist-tags`) |
| **Python / PyPI** | `pip index versions <package>` | Or `curl -s https://pypi.org/pypi/<package>/json \| jq .info.version` |
| **Rust / Crates.io** | `cargo search <crate> --limit 1` | Inspect `Cargo.lock` or `https://crates.io/api/v1/crates/<crate>` |
| **Go** | `go list -m -versions <module>` | `go doc <module>` |

---

## 2. Dependency Pinning Rules

1. **Exact or Minor Semver**: Always specify explicit semver versions in `package.json`, `requirements.txt`, `pyproject.toml`, or `Cargo.toml`. Never use `*` or unbounded ranges.
2. **Modern API Idioms**: If a library has migrated across major versions (e.g. Next.js 14 App Router vs Pages Router, Pydantic v1 vs v2, React 18 vs 19), inspect the changelog to use current idioms.
3. **No Hallucinated Parameters**: If you are unsure whether a configuration flag exists (e.g. `timeout_ms` vs `timeout`), verify in the live package docs before writing code.
