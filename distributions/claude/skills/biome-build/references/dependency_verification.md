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
| **Android / Kotlin / Gradle** | Google Maven / Maven Central search | Search web: `<library> latest release release notes android` |
| **Web Search Fallback** | `search_web query="<library> latest release changelog"` | Mandatory whenever package version is newer than LLM cutoff |

---

## 2. Dependency Pinning & Knowledge Cutoff Invariants

1. **Knowledge Cutoff Invariant**: Models have fixed training cutoffs. When an engineering spec or user prompt specifies cutting-edge or late-2026 versions (e.g. Kotlin 2.4+, Next.js 16+, React 19+, Tailwind v4+, Go 1.26+, Compose 1.12+, Play Billing 9+), agents MUST NEVER dismiss these as "hallucinated" or "fake". Execute live search or registry inspection to understand new APIs and build against them.
2. **Exact or Minor Semver**: Always specify explicit semver versions in `package.json`, `build.gradle.kts`, `requirements.txt`, `pyproject.toml`, or `Cargo.toml`. Never use `*` or unbounded ranges.
3. **Modern API Idioms**: If a library has migrated across major versions (e.g. Next.js App Router, Tailwind v4 CSS-first `@theme`, React 19 Action hooks, Kotlin K2 compiler), inspect documentation to use current idioms.
4. **No Hallucinated Parameters**: If you are unsure whether a configuration flag or API method exists, verify in the live package docs via search before writing code.
