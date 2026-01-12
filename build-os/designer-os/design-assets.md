# Design Assets

Asset sourcing and placement specifications for imagery, icons, and visual elements.

---

## Asset Folder Structure

```
build-os/designer-os/assets/
├── hero/         # Hero section imagery
├── services/     # Service card illustrations/vectors
└── testimonials/ # Customer photos/headshots
```

---

## Hero Assets

### Requirements

- **Quantity**: One primary hero image only
- **Subject**: Family or homeowner in a clean kitchen or sink setting
- **Lighting**: Natural light, cool temperature
- **Background**: White or light, uncluttered
- **Mood**: Clean, calm, trustworthy, premium residential

### Overlays

- Soft blue gradient (top → bottom) using `--color-primary-soft`
- Water ripple or wave SVG at bottom edge (optional decorative element)

### Disallowed

- Product glamour shots
- Overly corporate stock
- Abstract tech graphics
- Dark or moody photography
- Heavy filters or color grading

### File Naming

- `hero-main.jpg` or `hero-main.webp` (primary)
- `hero-wave.svg` (bottom edge overlay)

---

## Service Assets

### Requirements

- **Type**: Simple vector illustrations or icons
- **Style**: Clean, minimal, on-brand
- **Format**: SVG preferred for scalability

### Disallowed

- Complex photorealistic imagery
- Product-focused shots
- Busy or cluttered graphics

### File Naming

- `service-filter.svg`
- `service-softener.svg`
- `service-testing.svg`

---

## Testimonial Assets

### Requirements

- **Type**: Real customer photos or professional stock headshots
- **Style**: Natural, approachable, trustworthy
- **Format**: JPG or WebP, optimized for web

### Specifications

- Minimum resolution: 200x200px
- Aspect ratio: 1:1 (square) preferred
- Background: Neutral or blurred

### Disallowed

- Obviously fake or AI-generated faces
- Low-quality or pixelated images
- Corporate headshots with branded backdrops

### File Naming

- `testimonial-01.jpg`
- `testimonial-02.jpg`
- `testimonial-03.jpg`

---

## SVG Asset Specifications (v1)

### Purpose
These SVG assets provide scalable, token-compatible brand and UI visuals for v1 polish. All SVGs must be outline-based, consistent in stroke style, and themeable via CSS (no baked colors/gradients).

---

### Global SVG Constraints (Non-Negotiable)
- **Style:** Outline icons only (no filled glyphs by default).
- **Stroke:** Consistent stroke width across all icons (2.0–2.25), **rounded caps and joins**.
- **Color:** Single-color by default using `currentColor` (or CSS variables); **no baked hex colors**.
- **No gradients:** Do not bake gradients into SVGs.
- **No text:** Do not embed text in SVG.
- **Geometry:** Clean, minimal paths; avoid jagged Beziers; keep shapes readable at 24px–32px.
- **Accessibility:** All inline SVG usage must support `aria-hidden="true"` for decorative icons and accessible labels when meaningful.

---

### Required SVG Deliverables (Inventory)

#### 1) Brand Mark (Logo)
- **Filename:** `logo-mark.svg`
- **Concept:** Leaf + water droplet mark representing purity + nature + engineering.
- **Composition:**
  - Droplet outline as the primary form.
  - Leaf integrated either inside the droplet or wrapped to the lower-left edge.
  - Optional small highlight notch/sparkle stroke for “clean” signal (subtle).
- **Use:** Header + Footer brand mark (favicon variant later).

#### 2) Service Icons (3)
All service icons are concept-first (not literal product diagrams).
- **Common Spec:**
  - **ViewBox:** `0 0 64 64`
  - **Output size target:** 24px–32px display, crisp at 16px and 48px.

A) **Water Softener**
- **Filename:** `icon-softener.svg`
- **Concept:** scale protection / smoother water
- **Shapes (allowed):**
  - Droplet + subtle shield
  - Droplet with tiny “scale dots” being removed
  - Droplet above a smooth wave with a small sparkle
- **Avoid:** tanks/valves/plumbing schematics

B) **Whole-Home Filtration**
- **Filename:** `icon-filtration.svg`
- **Concept:** layered filtering / clean flow
- **Shapes (allowed):**
  - 3-layer filter stack with flow lines
  - Droplet passing through layered bands
  - Simple funnel shape with droplet in → clean droplet out
- **Avoid:** cartridge brand silhouettes, complex machinery

C) **Reverse Osmosis (RO)**
- **Filename:** `icon-ro.svg`
- **Concept:** high purity / multi-stage refinement
- **Shapes (allowed):**
  - Droplet with concentric rings
  - Droplet + three-stage dots/checkpoints
  - Minimal split “pure vs waste” concept using subtle dashed/solid flow
- **Avoid:** literal under-sink system diagrams

#### 3) Section Divider
- **Filename:** `divider-wave.svg`
- **Concept:** calm water wave divider
- **Spec:**
  - Responsive, full-width wave path
  - Prefer single path (or minimal paths)
  - Color driven by CSS (`currentColor`/CSS variables)
- **Use:** Hero bottom edge (primary), optional above final CTA

---

### Optional SVG Deliverables (Recommended Enhancements)

#### 4) Micro Accent: Sparkle
- **Filename:** `accent-sparkle.svg`
- **Purpose:** small “clean/pure” accent near trust/guarantee microcopy
- **Rules:** extremely subtle; use sparingly (max 1–2 placements total)

#### 5) Micro Accent: Seal/Badge Frame
- **Filename:** `accent-seal.svg`
- **Purpose:** thin outline seal ring or badge frame used behind trust icons for premium framing
- **Rules:** keep line-weight consistent with other icons; do not overpower content

---

### File Placement
Store SVGs in:
- `public/assets/svg/`

Recommended structure:
- `public/assets/svg/brand/logo-mark.svg`
- `public/assets/svg/icons/icon-softener.svg`
- `public/assets/svg/icons/icon-filtration.svg`
- `public/assets/svg/icons/icon-ro.svg`
- `public/assets/svg/dividers/divider-wave.svg`
- `public/assets/svg/accents/accent-sparkle.svg`
- `public/assets/svg/accents/accent-seal.svg`

---

## Icon Assets

### Sourcing

- **Primary Source**: Lucide Icons (lucide.dev)
- **Alternative**: Heroicons Outline (heroicons.com)
- **Custom**: Allowed only if matching stroke + radius

### Style Rules

- Outline only (no filled glyphs)
- Rounded stroke caps
- Consistent stroke weight (2px default)
- Monochrome or muted brand color

### Usage by Section

| Section | Icon Requirement |
|---------|------------------|
| Services | Feature icon per card (top-left) |
| How It Works | Step icon with numbered circle |
| Trust Badges | Certification/badge icons (monochrome) |
| Lead Form | Optional field validation icons |

---

## Image Optimization

### Formats

- **Photos**: WebP preferred, JPG fallback
- **Graphics/Icons**: SVG only
- **Sizes**: Provide 1x and 2x for retina displays

### Performance

- Hero image under 200KB optimized
- Use lazy loading for below-fold images
- Provide explicit width/height to prevent layout shift

---

## Cross-References

- **Color Usage**: See [design-tokens.md](./design-tokens.md)
- **Section Placement**: See [design-section.md](./design-section.md)
- **Layout Context**: See [design-shell.md](./design-shell.md)
