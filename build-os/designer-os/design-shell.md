# Design Shell

> **V2 LOCK**
> - Status: Locked
> - Date: 2026-01-13
> - Source: Designer-OS V2 Lock (docs/designer-os-v2-lock)

Canonical page shell layout governing all pages (homepage, funnel). Controls layout rhythm, page boundaries, and conversion structure.

---

## Brand Alignment

All shell elements reinforce the brand for **Eco One Water** through:

- Clean, modern, calm, premium residential aesthetic
- Token-driven theming (see [design-tokens.md](./design-tokens.md))
- No true-black text (use `--color-text-main`)

---

## Typography Rules (V2 Locked)

### Intent

- **Tone**: Calm, authoritative, premium residential
- **Audience**: Homeowners 30–65
- **Text Color**: No true-black text — headings use `--color-text-main` (`#11181C`)
- **Hierarchy**: Clear visual distinction between heading levels

### Type Scale Reference

See [design-tokens.md](./design-tokens.md#type-scale-v2-locked) for the authoritative type scale.

---

## Spacing Standards (V2 Locked)

### Section Spacing

| Breakpoint | Vertical Padding |
|------------|------------------|
| Desktop | 96–128px |
| Mobile | 64–80px |

### Card Spacing

| Breakpoint | Internal Padding |
|------------|------------------|
| Desktop | 32–40px |
| Mobile | 24–32px |

Use `space-12` to `space-16` tokens for section padding, `space-6` for card gaps.

---

## Section Rhythm (V2 Locked)

Avoid "flat same background everywhere." Create visual rhythm through:

- **Surface alternation**: Alternate between `--color-surface` and `--color-card`
- **Card elevation**: Use subtle shadows to create depth
- **Gentle tinting**: Apply `--color-primary-soft` for emphasis sections
- **Token-driven**: All background decisions use semantic tokens

---

## Layout Anatomy

### Header

- **Left**: Logo (Eco One Water — leaf + droplet motif)
- **Right**: Navigation + CTA button
- **Behavior**: Sticky on scroll, optional subtle shadow
- **CTA**: "Get a Free Water Test" (dominant, high-contrast)
- **Navigation**: Links must map to real anchors or routes (no dead nav)

### Section Wrapper

- Container: Max width 80rem (1280px), centered with horizontal padding
- Vertical spacing: Section spacing tokens (see above)
- Background options: `--color-surface`, `--color-card`, `--color-primary-soft`
- Stack children vertically with `space-6` gap

### Footer

- Layout: 2 or 3 column
- Left: Business summary + contact info
- Right: Nav links, services, social
- Background: `--color-surface`, text uses `--color-text-muted`
- **Navigation**: Links must map to real anchors or routes (no dead nav)

---

## Page Section Order — Homepage (V2 Locked)

1. Header
2. Hero (CTA + image)
3. Trust badges
4. Services
5. How it works
6. Testimonials
7. Final CTA
8. Footer

---

## Hero Composition Rules (V2 Locked)

- **Z-pattern required**: Visual flow must guide the eye to the primary CTA
- **Layout**: 2-column (text + image) on desktop, stacked on mobile
- **CTA placement**: Aligned with natural reading flow endpoint
- **Image placement**: Supports Z-pattern without blocking CTA visibility

---

## Divider & Wave Rules (V2 Locked)

- **Color inheritance**: Waves and dividers must inherit palette tokens
- **Never black**: Dividers cannot use black (`#000`) or near-black values
- **Use semantic tokens**: `--color-primary`, `--color-primary-soft`, or `--color-border`

---

## Lead Funnel Structure

- Single-column layout
- Clear step labeling (numbered)
- No distractions or navigation
- Trust + guarantee at bottom

---

## Responsive Behavior

- All sections mobile-first
- Grid layout: Single column on mobile, two columns on desktop where needed
- Header collapses to hamburger on narrow viewports
- Inputs/buttons full-width on mobile

---

## Imagery Rules

### Hero Image

- One primary hero image only
- Family/homeowner in clean kitchen or sink setting
- Natural light, cool temperature, white/light backgrounds
- No clutter, no heavy filters
- Lifestyle imagery default — no abstract tech graphics

### Overlay Allowed

- Soft gradient using `--color-primary-soft` (top → bottom)
- Water ripple or wave SVG at bottom edge (using palette tokens)

### Disallowed

- Product glamour shots
- Overly corporate stock
- Abstract tech graphics
- Dark/moody photography

---

## Motion Policy (V2 Locked — Tier-1 Only)

Motion is calm, slow-ease, never flashy, never blocking conversion.

### Allowed (Tier-1)

- Hero content fade-up on load
- Cards lift slightly on hover
- Button hover color shift
- Form validation micro-feedback
- Step highlight on scroll

### Disallowed

- Auto-playing animations
- Scroll-jacking
- Heavy parallax
- Anything that delays CTA access

---

## Conversion Standards

- **Single dominant CTA**: "Get a Free Water Test"
- Visual rhythm consistency across sections
- Token-driven theming (palette swaps without refactors)
- Real trust signals (badges, testimonials)
- High contrast for accessibility
- Mobile-first clarity
- Fast load perception
- Clean semantics (no visual noise)

---

## Cross-References

- **Token Definitions**: See [design-tokens.md](./design-tokens.md)
- **Section Specs**: See [design-section.md](./design-section.md)
- **Asset Requirements**: See [design-assets.md](./design-assets.md)