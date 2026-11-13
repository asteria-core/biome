# EGM Drift Detection Guide (Living Specifications & Code Synchronization)

This reference outlines the protocol for auditing checked-in design specifications (`docs/designs/`) and repository README contracts against actual live source code.

---

## 1. When to Run Drift Detection
* Routine architecture audits before major releases.
* When code refactoring or bug fixes may have diverged from the original design doc.
* Whenever `/biome-woodpecker --drift [directory]` or a drift inspection is requested.

---

## 2. The Four Drift Divergence Categories

| Category | Definition | Actionable Example |
| :--- | :--- | :--- |
| **Missing Features** | Logic or components described in the design spec but absent in the codebase. | A scheduled background cleanup task specified in the design doc was never instantiated. |
| **Incomplete Models** | Structs, schemas, or models missing fields explicitly declared in the spec. | Spec specifies 6 user profile fields, but the code model only defines 4. |
| **Logic Shortcuts** | Hardcoded values, mocks, or bypasses where dynamic logic was designed. | Spec planned dynamic tenant quota lookup, but code uses `DEFAULT_QUOTA = 100`. |
| **Architectural Divergence** | Implementation using different patterns, frameworks, or dependencies than agreed. | Spec specified gRPC service handlers, but code implemented custom REST endpoints. |

---

## 3. Drift Audit Execution Steps

1. **Discover Documents**: List all design markdown files under the target directory (default: `docs/designs/`).
2. **Contextualize Spec**: Read the design document. Extract intent, models, and referenced files/symbols.
3. **Locate Source**: Use file search or code search to find the corresponding source files in the source tree.
4. **Compare Design vs. Reality**: Systematically evaluate the source code against the four divergence categories.
5. **Filter & Report**: Report ONLY actionable differences. If code matches design perfectly, emit `"No drift detected."`
6. **Artifact Output**: Append findings to `{YYYY-MM-DD}_DRIFT_REPORT.md`:

```markdown
## <DESIGN_DOC_NAME>

* [Specific divergence found with file:line reference]
* [Action required: update code OR update design doc]
<!-- Or "No drift detected." -->
```
