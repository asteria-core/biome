# Adversarial UX & Contract Review Heuristics

This reference outlines the mental trace protocol and failure mode checklists executed by The Critic Goldfish.

---

## 1. The Mental UI/UX Trace
Mentally step through the proposed user journey as an impatient, distracted, or adversarial user:
1. **Screen Transitions**: What happens when the user clicks a button twice in rapid succession? Is there an optimistic UI glitch?
2. **Empty & Loading States**: Does the spec define what a first-time user sees when there are 0 records? Does it define skeleton loading states?
3. **Latency Traps**: If an API call takes 4 seconds over a flaky mobile connection, what feedback is visible?
4. **Input Boundary Violence**: What happens if the user enters 10,000 characters, special unicode symbols, or submits without filling optional fields?

---

## 2. State & Recovery Traps
1. **Mid-Flight Disconnections**: If the client loses connection during Step 2 of a 3-step checkout or wizard, is state preserved or lost?
2. **Safe Idempotency**: Can a failed payment or webhook be retried 5 times without double billing?
3. **Back-Button Desynchronization**: Does clicking the browser Back button leave the application in an unrecoverable state?

---

## 3. Contract Sanity & Backend Leakage
1. **Lazy Database Dumps**: Does an API endpoint dump raw database models (e.g. `password_hash`, internal timestamps) directly into client payloads?
2. **Unbalanced Ergonomics**: Does a mobile client need to make 7 sequential HTTP calls to render a single dashboard screen? Demand unified BFF or aggregation endpoints.
3. **Magic Format Dependencies**: Does the backend expect dates in an undocumented format (`DD-MM-YYYY` vs ISO 8601)?
