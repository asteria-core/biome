---
name: biome-chameleon
license: Apache-2.0
description: >-
  Audits source code, pull request diffs, and UI microcopy to eradicate robotic
  AI slop, artificial compound naming (*Helper, *Manager, *ProcessorHandler), chatty
  line-by-line comments, and corporate marketing buzzwords (seamless, empower, cutting-edge).
  Enforces clean human idiomatic engineering across TypeScript, Python, Go, and Rust.
  Use when the user asks to clean up AI slop, review naming conventions, audit copy,
  de-slop code, humanize pull request diffs, or polish code craftsmanship before commit.
---

# BIOME Chameleon: Anti-Slop & Human-Grade Craftsmanship Auditor

When running in Codex or ChatGPT Work, first read [Codex integration](../../docs/codex.md).
In Claude Code or Cowork, read `${CLAUDE_PLUGIN_ROOT}/docs/claude.md` first.

## Overview

`/biome-chameleon` is the standalone command to invoke **The Chameleon** (`agents/chameleon.md`), the idiomatic anti-slop stylist of the **BIOME Ecosystem**.

AI coding assistants leave recognizable fingerprints: bloated compound names (`*Helper`, `*Manager`, `*ProcessorHandler`), conversational line-by-line comment narrations, and hollow corporate marketing buzzwords (`seamless`, `empower`, `revolutionary`). The Chameleon relentlessly identifies and strips these robotic tells, replacing them with authentic, clean human engineering idioms.

---

## Invocation

```text
/biome-chameleon <TargetFileOrDiff> [--fix]
```

* `<TargetFileOrDiff>`: Path to source file, directory, or active `git diff` to audit.
* `--fix`: Automatically applies clean idiomatic refactorings to the target code.

---

## The Four Chameleon Audit Vectors

### Vector 1: Robotic Compound Naming Elimination
* **The Antipattern**: Artificial multi-word compound suffixes that add zero semantic meaning:
  - `*Helper`, `*Manager`, `*ProcessorHandler`, `*Util`, `*DataHandler`, `*ServiceWrapper`.
* **The Human Rule**: Use concise, domain-specific verbs and nouns:
  - `AuthHelper` $\longrightarrow$ `auth` or `authenticate()`
  - `UserManager` $\longrightarrow$ `users` or `UserService` or `getUser()`
  - `OrderProcessorHandler` $\longrightarrow$ `processOrder()`
  - `DataFetchUtil` $\longrightarrow$ `fetchData()`
* Consult the full catalog in [references/anti_slop_dictionary.md](references/anti_slop_dictionary.md).

### Vector 2: UI Microcopy Humanization
* **The Antipattern**: Hollow AI buzzwords, promotional adverbs, and false promises of perfection.
* **The Human Rule**: Clean, calm, descriptive facts. Banish the following words from all UI headings, labels, tooltips, and toast messages:
  - ❌ `seamless`, `seamlessly`, `empower`, `empowers`, `revolutionary`, `cutting-edge`
  - ❌ `AI-driven`, `AI-powered`, `supercharge`, `unlock`, `magic`, `game-changing`
  - ❌ Exclamation marks in interfaces (`Welcome back! 🎉` $\longrightarrow$ `October Overview`)
  - ❌ Vague submit buttons (`Submit` $\longrightarrow$ `Create project`, `Save changes`)

### Vector 3: Chatty Comment Curation
* **The Antipattern**: Narrating obvious syntax step-by-step:
  ```typescript
  // BAD: Obvious chatty commentary
  // Loop through all users
  for (const user of users) {
    // Check if user is active
    if (user.isActive) {
      // Send notification to user
      sendNotification(user);
    }
  }
  ```
* **The Human Rule**: Code should be self-documenting. Comments are reserved **strictly** for non-obvious business invariants, concurrency barriers, or memory synchronization subtleties:
  ```typescript
  // GOOD: Clean, self-documenting code
  for (const user of users) {
    if (user.isActive) {
      sendNotification(user);
    }
  }
  ```

### Vector 4: Language-Specific Idiom Fidelity
* **TypeScript / JavaScript**:
  - Ban `any` and generic `Record<string, any>` escapes.
  - Ban `I` interface prefixes (`IUser` $\longrightarrow$ `User`).
  - Use modern optional chaining (`user?.profile?.avatar`) and destructuring cleanly.
* **Python**:
  - Enforce idiomatic `snake_case` for functions and variables (`get_user()`, not `getUser()`).
  - Ban single-method wrapper classes (`class StringHelper: @staticmethod def trim(): ...`); use module-level functions.
  - Use Pydantic or `@dataclass` over loose dictionary parameter bags.
* **Go**:
  - Ban `Get[Field]()` getters on exported struct fields.
  - Ban package stuttering (`package user; type UserService` $\longrightarrow$ `type Service`).
  - Explicit error handling: return and handle errors directly without generic wrapper structs.
* **Rust**:
  - Prefer `Result<T, E>` and `?` operator over nested match ladders.
  - Implement standard traits (`From`, `Display`) instead of custom `to_string_helper()`.

---

## Concrete Code Comparison: Before vs. After

### TypeScript / Backend Refactoring

#### ❌ AI-Generated Slop (Bloated, Chatty, Compound Naming)
```typescript
// AuthenticationHelperManager to process user auth requests
export class AuthenticationHelperManager {
  // Method to handle user login process
  async processLoginActionHandler(userCredentialsData: any): Promise<any> {
    // Validate credentials
    if (!userCredentialsData.username || !userCredentialsData.password) {
      // Throw error if invalid
      throw new Error("Invalid credentials provided! Please try again.");
    }
    // Call database manager helper
    const userResultObject = await DatabaseHelperManager.findUserByUsername(userCredentialsData.username);
    // Return the seamless login payload
    return {
      status: "success",
      message: "Experience seamless AI-powered security!",
      userData: userResultObject
    };
  }
}
```

#### ✅ Clean Human Craftsmanship (Concise, Typed, Idiomatic)
```typescript
export interface Credentials {
  username: string;
  passwordHash: string;
}

export async function login(credentials: Credentials): Promise<Session> {
  if (!credentials.username || !credentials.passwordHash) {
    throw new ValidationError("Username and password are required.");
  }

  const user = await db.users.findByUsername(credentials.username);
  if (!user || !verifyPassword(user, credentials.passwordHash)) {
    throw new UnauthorizedError("Invalid credentials.");
  }

  return createSession(user);
}
```

---

## Output Report Format

When executing an audit, generate `chameleon_audit_report.md` structured as follows:

```markdown
# Chameleon Craftsmanship Audit Report: <TargetFile>

## Executive Summary
* **Status**: [APPROVED | ACTION REQUIRED]
* **AI Hallmarks Detected**: [Clean | Minor Compound Naming | Heavy Slop]
* **Target Language/Stack**: [TypeScript | Python | Go | Rust | UI Copy]

## Audit Findings
| Line(s) | Category | Detected Robotic Pattern | Clean Human Replacement |
| :--- | :--- | :--- | :--- |
| L14 | Robotic Naming | `UserDataFetchHelper` | `fetchUser()` |
| L42 | UI Puffery | "Seamless experience" | "Direct integration" |
| L88-92 | Chatty Comments | Line-by-line syntax narration | Remove redundant comments |

## Actionable Remediation Diff
[Exact, copyable code diff eradicating all identified slop]
```
