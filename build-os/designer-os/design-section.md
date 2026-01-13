# Design Sections

> **V2 LOCK**
> - Status: Locked
> - Date: 2026-01-13
> - Source: Designer-OS V2 Lock (docs/designer-os-v2-lock)

Modular UI building blocks for the homepage and funnel. All sections follow shell layout rules and use token-driven theming.

---

## Conversion Order (V2 Locked)

The homepage section order is strictly defined for optimal conversion flow:

1. **Header** — Navigation + CTA
2. **Hero** — Introduce offer, capture attention, trigger CTA
3. **Trust Badges** — Show credibility fast
4. **Services** — Explain what we do
5. **How It Works** — Visualize conversion path
6. **Testimonials** — Social proof
7. **Final CTA** — Encourage conversion
8. **Footer** — Navigation + contact

---

## Homepage Sections

### Hero Section (`section-hero-main`)

- **Purpose**: Introduce offer, capture attention, trigger CTA
- **Layout**: 2-column (text + image) on desktop, stacked on mobile
- **Composition**: **Z-pattern required** (visual flow must guide to primary CTA)
- **Content**: Headline, subtext, CTA button, lifestyle image
- **CTA**: "Get a Free Water Test" (primary color, high contrast)
- **Image**: Family/homeowner in clean kitchen setting (see [design-assets.md](./design-assets.md))
- **Overlay**: Soft gradient using `--color-primary-soft` (top → bottom), optional wave SVG at bottom
- **Droplet Overlay**: Not used in hero; droplet mark retained as brand asset for other uses

### Trust Badges Section (`section-trust-badges`)

- **Purpose**: Show credibility fast
- **Layout**: Horizontal logo strip, centered
- **Content**: Google reviews, BBB, WQA, certifications
- **Icon Style**: Monochrome or muted brand color
- **Spacing**: Consistent gap between badges; references [design-shell.md](./design-shell.md) spacing standards

### Services Section (`section-services`)

- **Purpose**: Explain full service offering
- **Layout**: Grid of 4 cards
- **Required Services**:
  - Water Softeners
  - Filtration Systems
  - Reverse Osmosis
  - **Well Water Treatment** (V2 required)
- **Card Structure**: Icon (top-left), title, benefit text
- **Icon Style**: Outline only, rounded strokes, consistent stroke weight
- **Image Type**: Simple vector or illustration (see [design-assets.md](./design-assets.md))

### How It Works Section (`section-how-it-works`)

- **Purpose**: Visualize conversion path
- **Layout**: 3–4 steps with numbered circles + icons
- **Content**: "Test → Plan → Install" (or extended with "Enjoy")
- **Number Style**: Step number in circle using `--color-primary`
- **Icon Style**: Outline only, rounded strokes, matching stroke weight
- **Motion**: Step highlight on scroll (optional, Tier-1)

### Testimonials Section (`section-testimonials`)

- **Purpose**: Social proof
- **Layout**: Grid or carousel (3 cards recommended)
- **Card Content**: Quote, person name, location
- **Image**: Real photo or professional stock headshot (see [design-assets.md](./design-assets.md))
- **Styling**: Card background uses `--color-card`, subtle shadow
- **Locality Constraint (V2)**: Testimonials must reference cities in **Seminole & Volusia counties, Florida** only (e.g., Sanford, Altamonte Springs, Lake Mary, Deltona, DeBary, Daytona Beach, Ormond Beach)

### Final CTA Section (`section-final-cta`)

- **Purpose**: Encourage conversion at end of page
- **Content**: Headline, subtext, CTA button
- **CTA**: "Get a Free Water Test" (same as hero)
- **Background**: `--color-primary-soft` or gradient
- **No imagery**: Keep focus on action

---

## Navigation Behavior (V2 Locked)

### Header Navigation

- Links must map to real anchors (e.g., `#services`, `#testimonials`) or future routes
- **No dead nav**: Every link must resolve to a valid target
- CTA button always present and visible

### Footer Navigation

- Repeats or summarizes top-level nav
- Links must map to real anchors or routes
- **No dead nav**: Every link must resolve to a valid target

---

## Funnel Sections

### Lead Header (`section-lead-header`)

- **Purpose**: Simple heading for funnel pages
- **Content**: Headline + subtext (no navigation)
- **Layout**: Centered, single-column

### Lead Form (`section-lead-form`)

- **Purpose**: Capture lead information
- **Layout**: Single-column form, clear labels
- **Fields**: Name, Email, Phone, Zip
- **CTA**: "Get a Free Water Test"
- **Imagery**: No imagery, only subtle icons if needed
- **Validation**: Micro-feedback on input (see motion rules)

### Steps Breakdown (`section-steps-breakdown`)

- **Purpose**: Reinforce simple process
- **Content**: "Step 1-2-3" with brief blurbs
- **Layout**: Horizontal or vertical step indicator

### Trust Footer (`section-trust-footer`)

- **Purpose**: Close with guarantee
- **Content**: Guarantee text, phone CTA, trust badges
- **Layout**: Centered, single-column

---

## Icon System

All icons across sections follow these rules:

- **Style**: Outline only
- **Strokes**: Rounded
- **Fill**: No filled glyphs
- **Weight**: Consistent stroke weight across site
- **Sources**: Lucide-style or Hero-outline style icons
- **Custom Icons**: Allowed only if matching stroke + radius

### Usage by Section

| Section | Icon Placement |
|---------|----------------|
| Services | Icon top-left of card |
| How It Works | Numbered circle + icon |
| Trust Badges | Monochrome or muted brand color |

---

## Motion by Section

Motion follows shell principles (calm, slow-ease, never blocking). **Tier-1 only.**

| Section | Motion |
|---------|--------|
| Hero | Content fade-up on load |
| Services | Cards lift slightly on hover |
| How It Works | Step highlight on scroll |
| Testimonials | Cards lift on hover |
| Forms | Validation micro-feedback |

---

## Cross-References

- **Token Definitions**: See [design-tokens.md](./design-tokens.md)
- **Shell Layout**: See [design-shell.md](./design-shell.md)
- **Asset Requirements**: See [design-assets.md](./design-assets.md)