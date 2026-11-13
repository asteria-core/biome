# Anti-Slop Dictionary & Idiomatic Substitution Catalog

This reference catalogs robotic compound naming, corporate marketing puffery, and chatty code comments that must be purged from codebases and user interfaces in the BIOME ecosystem.

---

## 1. Robotic Compound Naming Antipattens

Robotic AI code relies heavily on generic compound suffixes (`*Helper`, `*Manager`, `*ProcessorHandler`, `*Util`, `*DataHandler`). Human engineers write concise, idiomatic verbs and nouns that represent clear domain models.

| Robotic Anti-Pattern | Clean Human Idiom | Context / Language |
| :--- | :--- | :--- |
| `AuthHelper`, `AuthenticationManager` | `auth` / `authenticate()` / `AuthService` | Auth handling |
| `UserDataManager`, `UserProcessor` | `users` / `UserService` / `getUser()` | User CRUD |
| `DataFetchUtil`, `RequestHelper` | `fetchData()` / `client.get()` | HTTP & API requests |
| `StringFormatHelper`, `StringUtils` | `formatters` / `normalizeText()` | String operations |
| `OrderProcessorHandler` | `processOrder()` / `orderQueue` | Order pipelines |
| `DatabaseConnectionManager` | `db` / `pool` / `createPool()` | Database client |
| `EventDispatchCoordinator` | `events` / `emit()` / `dispatcher` | Event emitters |
| `ValidationExecutionHandler` | `validate()` / `validator` | Schema validation |
| `NotificationSenderService` | `notify()` / `sendNotification()` | Messaging |
| `StateStoreManager` | `useStore()` / `store` | State management |

---

## 2. Banned UI & Microcopy Buzzwords

Corporate AI puffery creates untrustworthy, generic interfaces. Interface copy must be calm, factual, and direct.

| Banned AI Buzzword / Cliché | Human Professional Alternative |
| :--- | :--- |
| **"Seamless"** ("Seamless integration") | "Direct integration", "One-click connection", "Automatic sync" |
| **"Empower"** ("Empowers your team") | "Helps your team", "Enables teams to", "Allows you to" |
| **"Revolutionary" / "Cutting-edge"** | "Modern", "Fast", "Reliable" (or describe the actual spec) |
| **"AI-driven" / "AI-powered"** | Describe what it computes: "Automated categorization", "Predictive alerts" |
| **"Supercharge" / "Unlock" / "Magic"** | "Accelerate", "Activate", "Access" |
| **"Welcome back, [Name]! 👋"** | Contextual title: "October Overview", "Billing & Analytics" |
| **"Search anything..."** | Concise verb: "Search transactions", "Filter users" |
| **"Submit"** | Exact action: "Create project", "Save changes", "Send invite" |
| **"Oops! Something went wrong!"** | Diagnostic explanation: "Unable to reach payment gateway. Check connection." |

---

## 3. Chatty Comment Antipatterns

AI coding models tend to narrate their obvious code line-by-line. Comments should ONLY explain **why** non-obvious business logic or concurrency constraints exist, never **what** obvious syntax is doing.

### ❌ Chatty Obvious Comments (Must Be Purged)
```typescript
// Define user state
const [user, setUser] = useState(null);

// Function to handle login submission
const handleSubmit = async (e) => {
  // Prevent default form behavior
  e.preventDefault();
  // Call the login api
  const res = await api.login(credentials);
  // Set user state with result
  setUser(res.data);
};
```

### ✅ Clean Human Craftsmanship (Self-Documenting Code)
```typescript
const [user, setUser] = useState<User | null>(null);

const handleLogin = async (event: React.FormEvent) => {
  event.preventDefault();
  const session = await api.login(credentials);
  setUser(session.user);
};
```

---

## 4. Multi-Language Idioms

### Go
* Ban `Get[Field]()` getters for exported struct fields; use direct field access or concise names (`User.Name`, `User.Email`).
* Ban stuttering package names: `package user; type UserService struct` -> `package user; type Service struct`.
* Idiomatic error handling: return errors directly; do not invent generic `ErrorWrapper` structs.

### Python
* Use snake_case for functions and variables (`get_user_profile()`, not `getUserProfile()`).
* Ban Java-like boilerplate classes for standalone functions: do not write `class MathHelper: @staticmethod def add(): ...`; use module-level functions.
* Use dataclasses or Pydantic models for structured records instead of untyped dictionary wrappers.

### Rust
* Use `Result<T, E>` and `?` operator rather than verbose manual match cascades.
* Implement standard traits (`From`, `Display`, `Default`) rather than inventing custom converters (`to_string_helper()`).

### TypeScript
* Prefer explicit union types over vague `Record<string, any>`.
* Avoid `I` prefix on interfaces (`interface User`, not `interface IUser`).
