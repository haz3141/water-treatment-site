# Design Sections

Modular UI building blocks for the homepage and funnel. All sections follow shell layout rules and use token-driven theming.

---

## Homepage Sections

### Hero Section (`section-hero-main`)

- **Purpose**: Introduce offer, capture attention, trigger CTA
- **Layout**: 2-column (text + image) on desktop, stacked on mobile
- **Content**: Headline, subtext, CTA button, lifestyle image
- **CTA**: "Get a Free Water Test" (primary color, high contrast)
- **Image**: Family/homeowner in clean kitchen setting (see [design-assets.md](./design-assets.md))
- **Overlay**: Soft blue gradient (top → bottom), optional water ripple SVG at bottom

### Trust Badges Section (`section-trust-badges`)

- **Purpose**: Show credibility fast
- **Layout**: Horizontal logo strip, centered
- **Content**: Google reviews, BBB, WQA, certifications
- **Icon Style**: Monochrome or muted brand color
- **Spacing**: Consistent gap between badges

### Services Section (`section-services`)

- **Purpose**: Explain what we do
- **Layout**: Grid of 3 cards
- **Card Structure**: Icon (top-left), title, benefit text
- **Icon Style**: Outline only, rounded strokes, consistent stroke weight
- **Image Type**: Simple vector or illustration (see [design-assets.md](./design-assets.md))

### How It Works Section (`section-how-it-works`)

- **Purpose**: Visualize conversion path
- **Layout**: 3 steps with numbered circles + icons
- **Content**: "Test → Plan → Install"
- **Number Style**: Step number in circle using `--color-primary`
- **Icon Style**: Outline only, rounded strokes, matching stroke weight
- **Motion**: Step highlight on scroll (optional)

### Testimonials Section (`section-testimonials`)

- **Purpose**: Social proof
- **Layout**: Grid or carousel (3 cards recommended)
- **Card Content**: Quote, person name, location
- **Image**: Real photo or professional stock headshot (see [design-assets.md](./design-assets.md))
- **Styling**: Card background uses `--color-card`, subtle shadow

### Final CTA Section (`section-final-cta`)

- **Purpose**: Encourage conversion at end of page
- **Content**: Headline, subtext, CTA button
- **CTA**: "Get a Free Water Test" (same as hero)
- **Background**: `--color-primary-soft` or gradient
- **No imagery**: Keep focus on action

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

Motion follows shell principles (calm, slow-ease, never blocking).

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