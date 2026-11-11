# UI/UX Craftsmanship & Dashboard Standard
<!-- BIOME Master Specification: Apple HIG & Executive SaaS Quality Contract -->

## Overview

This standard defines the mandatory visual design, interaction patterns, layout architecture, and theme engineering rules for all web, mobile, and administrative dashboard interfaces within the **BIOME Ecosystem**.

AI models frequently produce fragile, amateurish, or broken user interfaces:
- Duplicate controls scattered redundantly between headers and sidebars.
- Abhorrent "half-dark modes" where headers turn dark while the page body and cards remain blinding white `#FFFFFF`.
- Redundant stacked page titles repeating the exact same title 2-3 times in 100 vertical pixels.
- Awkwardly wrapping table cells breaking codes across multiple lines.
- Modals with confirmation buttons pushed off-screen.
- Raw unrendered icon ligatures (`content_copy`) instead of clean SVGs.

This standard establishes concrete, enforceable laws derived from the **Apple Human Interface Guidelines (HIG)** and modern executive SaaS design engineering (Linear, Vercel, Stripe, Raycast).

---

## 1. The Navigational Singularity Law (Anti-Redundancy Invariant)

### The Failure Mode
AI models habitually duplicate global utility controls across multiple regions of the same viewport. In amateur dashboards, the Theme Toggle (Light/Dark), Language Switcher (EN/AR), User Profile Avatar, and Logout button appear simultaneously in the top navbar **AND** in the sidebar footer. Furthermore, page titles are repeated both in the top bar and immediately in a massive banner below it. This creates sensory clutter, confusion over canonical state, and an amateurish appearance.

### Mandatory Navigational Architecture
1. **Single Canonical Utility Home**:
   Every global application control (Account/Profile, Organization/Tenant Switcher, Theme Toggle, Language Switcher, System Status, Sign Out) MUST reside in **exactly one** unambiguous location:
   - **Pattern A: Sidebar-First Layout (Executive SaaS Standard)**:
     - Primary navigation links live in the sidebar body.
     - All account utilities (User Avatar, Name, Role, Theme Toggle, Language Switcher, Logout) MUST be consolidated into a **single unified User Menu card or popover pinned to the bottom of the sidebar**.
     - When using Pattern A, the top navbar MUST NOT duplicate the theme switch, language switch, or logout button. The top bar is reserved exclusively for Global Search (`Cmd+K`), Breadcrumbs, and page-specific contextual action buttons.
   - **Pattern B: Header-First Layout**:
     - Global utilities are clustered cleanly on the trailing edge (top-right in LTR, top-left in RTL) inside a **single unified dropdown menu** under the user avatar.
2. **Page Title Singularity**:
   - A viewport must display the page title in **exactly one** visual location.
   - If the top navbar contains the title or breadcrumb (`Dashboard / Overview`), the main content view must NOT render an identical redundant title banner directly underneath.
   - Avoid stacked subtitle noise (`لوحة المؤشرات العامة` repeated 3 times). Use a single elegant `<h1>` with contextual micro-metadata.

---

## 2. Apple HIG Semantic Theme & True Dark Mode Standard

### The Failure Mode ("Half-Dark Mode" Abomination)
The AI turns the top navbar and sidebar dark (`#0B0F19`) but leaves the main content canvas and data cards with hardcoded white backgrounds (`#FFFFFF`, `bg-white`) and black text. This creates a blinding optical mismatch that is unusable in low-light environments.

### Mandatory Semantic Color & Elevation Model
Apple HIG and modern CSS frameworks require **semantic intent tokens**, strictly banning hardcoded `#FFFFFF` or `#000000` for surface containers.

#### Elevation Hierarchy (Layering Depth Model)
In Dark Mode, drop shadows are optically ineffective against dark backgrounds. Elevation and depth MUST be communicated through **perceptual surface lightening**:

| Elevation Layer | Light Mode Surface | Dark Mode Surface | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Layer 0 (Canvas Base)** | `#F8FAFC` (`slate-50`) | `#090D16` / `#0B0F19` (`slate-950`) | Deepest root window background |
| **Layer 1 (Cards & Tables)** | `#FFFFFF` (`white`) | `#131B2E` / `#1E293B` (`slate-900`) | Main content containers & panels |
| **Layer 2 (Popovers & Modals)** | `#FFFFFF` (`white`) | `#1E293B` / `#334155` (`slate-800`) | Elevated dialogs, tooltips, flyouts |
| **Layer 3 (Inputs & Wells)** | `#F1F5F9` (`slate-100`) | `#0B0F19` (`slate-950/60`) | Inset form inputs, search bars, code blocks |

#### Strict Theming Rules
1. **Zero Blinding Surfaces in Dark Mode**:
   - It is strictly prohibited for any card, modal, container, or background to render as `#FFFFFF` or `bg-white` when dark mode is active.
   - Every surface MUST declare dual-theme classes (e.g. `bg-white dark:bg-slate-900`) or use CSS variable tokens (`var(--surface-card)`).
2. **Text Contrast & Optical Hierarchy**:
   - **Primary Text**: High-contrast readable (`text-slate-900 dark:text-slate-100`).
   - **Secondary / Metadata Text**: Calibrated muted tone (`text-slate-500 dark:text-slate-400`).
   - **Borders & Separators**: Subtle, semi-transparent hairline borders (`border-slate-200 dark:border-slate-800` or `dark:border-white/10`). Never use heavy solid black or bright white borders.
3. **Accent Vibrancy**:
   - Accent buttons (Indigo `#6366F1`, Emerald `#10B981`, Amber `#F59E0B`) must maintain WCAG AAA contrast ratio ($\ge 7:1$) against dark card surfaces.

---

## 3. The Modal Containment Invariant

### The Failure Mode
Modals without strict viewport height constraints grow unbounded. On laptop or tablet screens, primary confirmation buttons (تأكيد / حفظ / تفعيل) are pushed below the browser viewport, trapping the user in an un-closable state.

### Mandatory Geometry
Every modal, drawer, or dialog component MUST enforce:
1. **Viewport Bounding**: Constrain the modal outer container with `max-h-[85vh]` or `max-h-[90vh]`.
2. **Flex Column Structure**: Container must declare `flex flex-col` and `overflow-hidden`.
3. **Internal Scrollable Body**: The main content area must declare `flex-1 min-h-0 overflow-y-auto`.
4. **Sticky Action Footer**: The footer containing Confirm, Save, and Cancel buttons MUST be pinned with `sticky bottom-0 z-10` and opaque/backdrop background. It must remain 100% visible regardless of content height.

---

## 4. The Defensive Table Invariant

### The Failure Mode
Table cells containing alphanumeric activation codes (e.g. `TK-ES4H-9VQW-XYEV`), plan durations (e.g. `Pro Studio (5 يوماً)`), or dates wrap awkwardly onto 3 to 4 vertical lines. Furthermore, action buttons on table edges are clipped by parent containers.

### Mandatory Table Layout
1. **Whitespace Protection**: All identifiers, serial numbers, voucher codes, dates, phone numbers, and status badges MUST declare `whitespace-nowrap`.
2. **Horizontal Overflow Wrapping**: Tables must be encapsulated within a defensive container declaring `w-full overflow-x-auto min-w-[...]`.
3. **Action Alignment**: The actions column (`الإجراءات`) must have dedicated minimum width (`min-w-[120px]`), right-alignment (or left in RTL), and sufficient padding to prevent icon or dropdown cutoff.

---

## 5. Executive SaaS Dashboard & Visual Analytics Blueprint

### Core Dashboard Components
1. **Executive Greeting Banner**:
   - Time-aware personalized greeting ("مساء الخير 👋" / "Good evening 👋").
   - System operational status and active date range selector.
2. **Metric KPI Cards (Stat Grid)**:
   - 4-column responsive grid for key health indicators (Total Licenses, Active Licenses, Expiring Soon, Revenue).
   - Each card displays: Icon with soft tinted circular background, metric value, visual progress bar, and period delta indicator (`↑ 12% vs last month`).
3. **Visual Donut Chart**:
   - Donut chart displaying license and user status breakdown (Active, Expiring, Expired, Trial) with center total count.
4. **System Health & Reliability Card**:
   - Real-time health status: "You're all set! Your license system is healthy and running optimally."
   - Explicit metrics: `100% Validation success`, active devices in use count, and one-click report link.

---

## 6. Smart Customer Lookup & Entity Intelligence

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

## 7. Asset & Icon Rendering Integrity

### Mandatory Asset Standards
1. **Strict Prohibition of Raw Ligature Text**:
   - AI models must NEVER render unstyled ligature strings (e.g. `<span>content_copy</span>`, `<span>check_circle</span>`) that fail to resolve when icon fonts are absent.
2. **Component SVGs**:
   - All icons MUST be implemented as verified SVG components (Lucide React, Heroicons, or inline `<svg>` elements) with explicit sizing (`w-4 h-4`, `w-5 h-5`).

---

## 8. Platform Context Fidelity & Bilingual Settings

### Platform Context
* UI copy and interactions must strictly match the declared target platform (e.g. native mobile, responsive web, desktop, or browser extension).
* AI generators must NEVER leak mismatched terminology across platforms (e.g. referencing "the browser / المتصفح" or desktop web store plugins inside native mobile applications, or referencing touch gestures on non-touch desktop software).

### Bilingual Admin & Company Settings
* Every administrative portal must provide a dedicated **Admin / Company Settings** tab.
* Required capabilities:
  - Administrator Name and Email.
  - Password management and reset.
  - Platform / Company branding (Logo upload, platform display title).
  - Language switcher (Arabic RTL / English LTR) with complete bidirectional layout flipping.
  - Organization and support channel configuration (WhatsApp, Support Email).
  - Language switcher between Arabic (العربية RTL) and English (LTR) with native text direction flipping.
