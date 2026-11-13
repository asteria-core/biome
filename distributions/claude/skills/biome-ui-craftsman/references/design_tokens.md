# UI Craftsman Design Tokens & Reference Scale

These tokens define the aesthetic floor for all executive SaaS, web, and mobile user interfaces built or audited within the BIOME ecosystem.

---

## 1. Neutral Surface Ramps

All backgrounds, raised surfaces, borders, and text MUST be built from one tinted neutral ramp. In dashboards and apps, surfaces remain neutral; richness belongs to content and charts.

### Ramp A: Graphite (Default SaaS / Developer Tools / Cloud Consoles)
```css
--surface-canvas:      #0b0d11; /* Deep slate background */
--surface-card:        #12151c; /* Layer 1 cards and sidebars */
--surface-overlay:     #1a1e28; /* Layer 2 modals, popovers, dropdowns */
--surface-subtle:      #232836; /* Hover states, active row background */
--border-hairline:     rgba(255, 255, 255, 0.08); /* 8% opacity border */
--border-strong:       rgba(255, 255, 255, 0.15); /* Focus ring / active boundary */
--text-primary:        #f1f5f9; /* High-contrast body & headings */
--text-secondary:      #94a3b8; /* Labels, descriptions, icons */
--text-muted:          #64748b; /* Metadata, captions, placeholders */
```

### Ramp B: Warm Slate (Knowledge Base / Documentation / Collaboration)
```css
--surface-canvas:      #11100e;
--surface-card:        #181614;
--surface-overlay:     #211e1b;
--surface-subtle:      #2c2824;
--border-hairline:     rgba(255, 255, 255, 0.07);
--border-strong:       rgba(255, 255, 255, 0.14);
--text-primary:        #f5f5f4;
--text-secondary:      #a8a29e;
--text-muted:          #78716c;
```

### Ramp C: Deep Ink (Fintech / Security / Infrastructure)
```css
--surface-canvas:      #080b12;
--surface-card:        #0e1320;
--surface-overlay:     #161d30;
--surface-subtle:      #1f2842;
--border-hairline:     rgba(255, 255, 255, 0.08);
--border-strong:       rgba(255, 255, 255, 0.16);
--text-primary:        #f0f4fc;
--text-secondary:      #91a0c0;
--text-muted:          #5e6e8e;
```

---

## 2. Spacing Scale (4px Strict Grid)

All margins, paddings, gaps, and heights must be multiples of 4.

| Step | Value (px) | Tailwind Token | Typical Usage |
| :--- | :--- | :--- | :--- |
| **0** | `0px` | `0` | Reset |
| **1** | `4px` | `1` | Icon nudges, compact badge padding, button gaps |
| **2** | `8px` | `2` | Form label-to-input gap, icon-to-label gap |
| **3** | `12px` | `3` | Small button vertical padding, tag margins |
| **4** | `16px` | `4` | Sidebar item padding, compact card padding |
| **5** | `20px` | `5` | Standard card internal padding, modal gutter |
| **6** | `24px` | `6` | Section headers, large card padding |
| **8** | `32px` | `8` | Dashboard page horizontal padding, section margins |
| **10** | `40px` | `10` | Major layout gutters |
| **12** | `48px` | `12` | Hero section vertical spacing |
| **16** | `64px` | `16` | Large landing section separation |

---

## 3. Typography Scale & Pairings

Hierarchy is achieved through **size and color**, never through excessive font weights or gradient fills.

### Font Pairings:
* **Primary Interface**: Inter, Geist Sans, Plus Jakarta Sans, or SF Pro (`sans-serif`).
* **Technical & Metrics Partner**: JetBrains Mono, Geist Mono, or SF Mono (`monospace`) for figures, IDs, dates, and JSON keys.

### Type Scale:
* **Display / Hero**: `32px` - `40px`, Weight `500` / `600`, Line-height `1.15`, Tracking `-0.02em`
* **Page Title / H1**: `24px` - `28px`, Weight `500` / `600`, Line-height `1.2`, Tracking `-0.015em`
* **Section Heading / H2**: `18px` - `20px`, Weight `500`, Line-height `1.3`, Tracking `-0.01em`
* **Card Heading / H3**: `15px` - `16px`, Weight `500`, Line-height `1.4`
* **Body / Primary Text**: `14px`, Weight `400`, Line-height `1.5`, Color: `text-primary`
* **Secondary / Labels**: `13px` - `14px`, Weight `400`, Color: `text-secondary`
* **Caption / Meta**: `11px` - `12px`, Weight `400` / `500`, Color: `text-muted` (Use `tabular-nums` for numbers)

---

## 4. Nested Border Radius Formula

Inner radius MUST equal outer radius minus the intervening padding to prevent clumsy concentric clipping:

$$\text{Radius}_{\text{inner}} = \max\left(4\text{px}, \text{Radius}_{\text{outer}} - \text{Padding}\right)$$

* **Controls (Buttons, Inputs)**: `8px` - `10px` (`rounded-lg`)
* **Cards & Bounded Blocks**: `12px` - `16px` (`rounded-xl`)
* **Modals & Drawers**: `16px` - `20px` (`rounded-2xl`)
* **Nested Item inside Card (Padding 16px, Card Radius 16px)**: $\max(4, 16 - 16) = 4\text{px}$ to $8\text{px}$.

---

## 5. Apple HIG 4-Tier Dark Elevation

Strictly ban "half-dark" interfaces with dark navbars but white `#ffffff` cards. Enforce layered dark surface elevation:

```
[Layer 0: Canvas Base]        slate-950 (#020617 or #0b0d11)
       │
       ▼
[Layer 1: Cards & Shell]       slate-900 (#0f172a or #12151c) + 8% border
       │
       ▼
[Layer 2: Popovers & Modals]   slate-800 (#1e293b or #1a1e28) + 12% border
       │
       ▼
[Layer 3: Tooltips & Floating] slate-700 (#334155 or #282e3d) + subtle neutral shadow
```
