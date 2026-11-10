# UI/UX Craftsmanship & Dashboard Standard

## Overview

This standard defines the mandatory visual design, interaction patterns, and layout engineering rules for all web, mobile, and administrative dashboard interfaces within the **BIOME Ecosystem**.

AI models frequently default to fragile, unstyled, or broken user interfaces—manifesting in wrapping table cells, cut-off modal buttons, raw unrendered icon ligatures, cryptic unexplained inputs, and missing theme systems. This standard establishes concrete, enforceable invariants to guarantee production-grade craftsmanship matching modern executive SaaS platforms.

---

## 1. The Modal Containment Invariant

### The Failure Mode
Modals without strict viewport height constraints grow unbounded. On common laptop or tablet displays, primary confirmation buttons (تأكيد / تفعيل) are pushed below the browser viewport, rendering the dialog un-clickable and trapping the user.

### Mandatory Geometry
Every modal, drawer, or dialog component MUST enforce:
1. **Viewport Bounding**: Constrain the modal outer container with `max-h-[85vh]` or `max-h-[90vh]`.
2. **Flex Column Structure**: Container must declare `flex flex-col` and `overflow-hidden`.
3. **Internal Scrollable Body**: The main content area must declare `flex-1 min-h-0 overflow-y-auto`.
4. **Sticky Action Footer**: The footer containing Confirm, Save, and Cancel buttons MUST be pinned with `sticky bottom-0 z-10` and opaque/backdrop background. It must remain 100% visible regardless of content height.

---

## 2. The Defensive Table Invariant

### The Failure Mode
Table cells containing alphanumeric activation codes (e.g. `TK-ES4H-9VQW-XYEV`), plan durations (e.g. `Pro Studio (5 يوماً)`), or dates wrap awkwardly onto 3 to 4 vertical lines. Furthermore, action buttons on table edges are clipped by parent containers.

### Mandatory Table Layout
1. **Whitespace Protection**: All identifiers, serial numbers, voucher codes, dates, phone numbers, and status badges MUST declare `whitespace-nowrap`.
2. **Horizontal Overflow Wrapping**: Tables must be encapsulated within a defensive container declaring `w-full overflow-x-auto min-w-[...]`.
3. **Action Alignment**: The actions column (`الإجراءات`) must have dedicated minimum width (`min-w-[120px]`), right-alignment (or left in RTL), and sufficient padding to prevent icon or dropdown cutoff.

---

## 3. Executive SaaS Dashboard & Visual Analytics Blueprint

### Visual Palette & Theming
* **Dark Mode Standard**:
  - App Background: Obsidian Slate (`#0B0F19` / `#0F172A`).
  - Card Surfaces: Deep Slate (`#1E293B` / `#131B2E`) with subtle borders in `#334155` (`slate-700/50`).
  - Brand & Active Accents: Warm Amber/Gold (`#FBBF24`), Royal Indigo (`#6366F1`), Emerald (`#10B981`).
* **Light Mode Standard**:
  - Crisp clean white background with neutral slate borders (`#E2E8F0`).
* **Dual Theme Architecture**: All components must support seamless theme switching via CSS variables or Tailwind dark mode classes.

### Core Dashboard Components
1. **Executive Greeting Banner**:
   - Time-aware personalized greeting ("مساء الخير 👋" / "Good evening 👋").
   - System operational status and active date range selector.
2. **Metric KPI Cards (Stat Grid)**:
   - 4-column layout for key health indicators (Total Licenses, Active Licenses, Expiring Soon, Trial Licenses).
   - Each card displays: Icon with soft tinted circular background, metric value, visual progress bar, and period delta indicator (`↑ 0% vs last month`).
3. **Visual Donut Chart**:
   - Donut chart displaying license and user status breakdown (Active, Expiring, Expired, Trial) with center total count.
4. **System Health & Reliability Card**:
   - Real-time health status: "You're all set! Your license system is healthy and running optimally."
   - Explicit metrics: `100% Validation success`, active devices in use count, and one-click report link.

---

## 4. Smart Customer Lookup & Entity Intelligence

### The Failure Mode
Prompting users or administrators for cryptic "معرف الجهاز / كود الحساب" without context or validation creates severe confusion and support friction.

### Mandatory UX Pattern
1. **Instant Reactive Lookup**: Entering a phone number or account ID must immediately query and render a **Verified Customer Preview Card**.
2. **Rich Entity Preview**:
   - Customer Initials Avatar and Full Name with `Verified` badge.
   - Contact Phone with direct WhatsApp link.
   - Associated Hardware Device (e.g. `iPhone 15 Pro, iOS 18.1`).
   - Subscription Status (e.g. `Current: Free Trial (Expired)`).
   - Plan selection list with pricing in local currency (e.g. EGP / USD).
3. **Clear Inline Help**: Never display bare technical jargon. Provide inline explanation clarifying that the Account/Device Code is found in the customer's mobile app under Profile/Settings.

---

## 5. Asset & Icon Rendering Integrity

### Mandatory Asset Standards
1. **Strict Prohibition of Raw Ligature Text**:
   - AI models must NEVER render unstyled ligature strings (e.g. `<span>content_copy</span>`, `<span>check_circle</span>`) that fail to resolve when icon fonts are absent.
2. **Component SVGs**:
   - All icons MUST be implemented as verified SVG components (Lucide React, Heroicons, or inline `<svg>` elements) with explicit sizing (`w-4 h-4`, `w-5 h-5`).

---

## 6. Platform Context Fidelity & Bilingual Settings

### Platform Context
* UI copy and interactions must strictly match the declared target platform (e.g. native mobile, responsive web, desktop, or browser extension).
* AI generators must NEVER leak mismatched terminology across platforms (e.g. referencing "the browser / المتصفح" or desktop web store plugins inside native mobile applications, or referencing touch gestures on non-touch desktop software).

### Bilingual Admin & Company Settings
* Every administrative portal must provide a dedicated **Admin / Company Settings** tab.
* Required capabilities:
  - Administrator Name and Email.
  - Password management and reset.
  - Organization and support channel configuration (WhatsApp, Support Email).
  - Language switcher between Arabic (العربية RTL) and English (LTR) with native text direction flipping.
