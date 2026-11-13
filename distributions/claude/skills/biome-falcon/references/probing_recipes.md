# Falcon Codebase Probing Recipes

To scout codebases without dumping entire files into context, The Falcon uses targeted probing patterns to extract only exported contracts, schemas, and routes.

---

## 1. Language-Specific Signature Extraction

### TypeScript / JavaScript
* **Exported Functions & Types**:
  `grep -E "^export (type|interface|class|function|const)" <file>`
* **React Route Definitions**:
  `grep -E "(Route|path=|element=)" <file>`

### Go
* **Package Signatures**:
  `go doc -all <pkg>` or `grep -E "^(func|type) [A-Z]" <file>`
* **Struct Definitions**:
  `grep -A 10 "^type .* struct" <file>`

### Python
* **Classes & Functions**:
  `grep -E "^(class|def) " <file>`
* **FastAPI / Flask Routes**:
  `grep -E "@(app|router)\.(get|post|put|delete)" -A 1 <file>`

### Rust
* **Public Items**:
  `grep -E "^pub (fn|struct|enum|trait|type)" <file>`

---

## 2. Anti-Context-Bloat Rules
1. Never emit function implementation bodies, loops, or styling blocks.
2. Filter out internal private helpers (e.g. unexported functions or private fields).
3. Limit returned summaries to 10–20 high-signal lines per module.
