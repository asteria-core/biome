# UI Craftsman Audit Signs (The Anti-Slop Catalog)

Scan the target user interface for these common AI design defects. If any of these signs exist, flag them as an audit finding and replace them with standard executive SaaS patterns.

---

## 1. Color & Lighting Defects

* 🚩 **Neon Glows & Drop Shadows**: Buttons, cards, or borders emitting colored radial glows (`box-shadow: 0 0 25px rgba(139, 92, 246, 0.5)`).
  * *Fix*: Replace with quiet 8% opacity neutral borders and soft neutral shadows.
* 🚩 **Purple / Violet Gradient Overuse**: Every card or background gradient defaults to violet-to-cyan or pink-to-purple.
  * *Fix*: Use tinted neutral surfaces from the design tokens and a single purposeful brand accent.
* 🚩 **Gradient Text Fills**: Headings using `bg-gradient-to-r text-transparent bg-clip-text`.
  * *Fix*: High-contrast solid text (`#f1f5f9` or `#ffffff`).
* 🚩 **Half-Dark Mode**: Dark navigation headers sitting on top of bright white `#ffffff` cards.
  * *Fix*: Layered dark elevation (`slate-950` canvas with `slate-900` cards).

---

## 2. Layout & Viewport Containment Defects

* 🚩 **Unbounded Modal Dialogs**: Modals that expand indefinitely down the page, clipping action buttons (`Cancel` / `Confirm`) below the bottom viewport edge.
  * *Fix*: Enforce `max-h-[85vh]`, internal scrollable body (`overflow-y-auto`), and permanently visible sticky action footer (`sticky bottom-0`).
* 🚩 **Cramped Defensive Tables**: Data tables with broken line-wraps on UUIDs, currency values, dates, or status pills.
  * *Fix*: Enforce `whitespace-nowrap` on all table cells and wrap the table in a responsive scroll container (`overflow-x-auto min-w-[...]`).
* 🚩 **Stacked Navigation Duplication**: Theme toggle, language switch, profile avatar, or logout buttons duplicated in both the sidebar footer AND the top navigation header.
  * *Fix*: Navigational Singularity. Place utility controls in exactly ONE canonical location.
* 🚩 **Duplicate Stacked Titles**: Page displaying a breadcrumb title, an H1 title, and a card header that all say the exact same thing within 100 vertical pixels.
  * *Fix*: Single canonical page title.

---

## 3. Typography & Microcopy Defects

* 🚩 **All-Caps Tracked Labels Everywhere**: Tracked-out uppercase tags (`NAVIGATION`, `PAYMENT STATUS`, `USER PROFILE`) on every single heading and eyebrow.
  * *Fix*: Sentence case everywhere (`Navigation`, `Payment status`).
* 🚩 **Emoji Clutter**: Emojis preceding every card heading or menu item (`📊 Dashboard`, `⚙️ Settings`, `🚀 Analytics`).
  * *Fix*: Replace with 16px Lucide or verified SVG line icons with a consistent 1.5px stroke.
* 🚩 **AI Marketing Puffery**: Headings or descriptions promising "Seamless experience", "Empower your workflow", "AI-driven magic".
  * *Fix*: Factual, calm, human descriptions of the exact capability.
* 🚩 **Jittery Numbers**: Changing numbers causing layout shift because they lack tabular figures.
  * *Fix*: Apply `font-variant-numeric: tabular-nums` or `tabular-nums` class to all metric counters and table numbers.

---

## 4. Components & Asset Defects

* 🚩 **Raw Font Ligatures**: Using `<span>content_copy</span>` or `<i>settings</i>` expecting an external web font that fails to render and shows literal text.
  * *Fix*: Explicit, self-contained SVG or Lucide components with explicit `width` and `height`.
* 🚩 **Concentric Radius Distortion**: Nested child elements having the same corner radius as the parent container, causing ugly thick corners.
  * *Fix*: Apply the formula: `Inner Radius = Outer Radius - Padding`.
* 🚩 **Fake Metric Sparklines**: Visual sparklines drawn with random SVG zigzags that do not reflect actual data points.
  * *Fix*: Ground charts in actual series data or replace with a clean KPI metric card.
