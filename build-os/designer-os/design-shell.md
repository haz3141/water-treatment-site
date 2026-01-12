# Design Shell

Canonical page shell layout governing all pages (homepage, funnel). Controls layout rhythm, page boundaries, and conversion structure.

---

## Brand Alignment

All shell elements reinforce the brand metaphor (Leaf + Water Droplet) through:
- Clean, modern, calm aesthetic
- Premium residential feel
- Token-driven theming (see [design-tokens.md](./design-tokens.md))

---

## Layout Anatomy

### Header

- **Left**: Logo (leaf + droplet motif)
- **Right**: Navigation + CTA button
- **Behavior**: Sticky on scroll, optional subtle shadow
- **CTA**: "Get a Free Water Test" (dominant, high-contrast)

### Section Wrapper

- Container: Max width 80rem (1280px), centered with horizontal padding
- Vertical spacing: `space-12` to `space-16` tokens
- Background options: `--color-surface`, `--color-card`
- Stack children vertically with `space-6` gap

### Footer

- Layout: 2 or 3 column
- Left: Business summary + contact info
- Right: Nav links, services, social
- Background: `--color-surface`, text uses `--color-text-muted`

---

## Page Section Order (Homepage)

1. Header
2. Hero (CTA + image)
3. Trust badges
4. Services
5. How it works
6. Testimonials
7. Final CTA
8. Footer

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

### Overlay Allowed

- Soft blue gradient (top → bottom)
- Water ripple or wave SVG at bottom edge

### Disallowed

- Product glamour shots
- Overly corporate stock
- Abstract tech graphics
- Dark/moody photography

---

## Motion Principles

Motion is calm, slow-ease, never flashy, never blocking conversion.

### Allowed

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