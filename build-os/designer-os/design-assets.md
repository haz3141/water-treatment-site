# Design Assets

Asset sourcing and placement specifications for imagery, icons, and visual elements.

---

## Asset Planning vs Implementation

- `build-os/designer-os/assets/` contains **planning placeholders only** (no real assets).
- All real SVG and raster files are **implementation artifacts** and must live under `public/assets/`.
- This document is the **canonical source of truth** for asset requirements, naming, and integration expectations for v1.

---

## Asset Folder Structure

```
build-os/designer-os/assets/
├── hero/ # Hero section imagery (planning only)
├── services/ # Service card illustrations/vectors (planning only)
└── testimonials/ # Customer photos/headshots (planning only)
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

Hero raster assets must follow the **Raster Asset Manifest (v1)** naming:

- `hero-master.jpg` — source image (2400×1500)
- `hero-desktop.jpg` — desktop crop (1600×1000)
- `hero-mobile.jpg` — mobile crop (1200×900)

Decorative overlays:
- `divider-wave.svg` — bottom edge wave divider (SVG)

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

Testimonial raster assets must follow the **Raster Asset Manifest (v1)** naming:

- `testimonial-1.jpg` — 512×512
- `testimonial-2.jpg` — 512×512
- `testimonial-3.jpg` — 512×512

---

## Raster Asset Specifications (v1)

### Purpose

Raster assets provide photographic trust and premium residential realism. They must be consistent, calm, and conversion-safe.

### Global Raster Constraints (Non-Negotiable)

- **Tone:** clean, modern, calm, premium residential
- **Lighting:** natural light preferred; avoid harsh studio lighting
- **Color temperature:** slightly cool / neutral (not warm or orange)
- **No heavy filters:** avoid HDR, strong vignette, oversharpening
- **No clutter:** clean surfaces and minimal props
- **No corporate vibe:** avoid office settings, suits, or call-center aesthetics
- **No product glamour shots:** equipment should not be the focus
- **Authenticity:** must feel like real homeowners in real homes

---

### Hero Photo Specification (Required)

**Intent:** Immediately communicate trust and cleanliness while preserving negative space for headline and CTA.

**Scene Requirements**
- Bright kitchen or sink context
- White or light surfaces
- Natural daylight

**Subject Requirements**
- Homeowner or small family
- Natural expression (calm, friendly)
- Avoid “model-perfect” stock look

**Composition Requirements**
- Clear negative space for text overlay
- Subject placed off-center (rule-of-thirds)
- Avoid busy patterns behind text

**Overlay Compatibility**
- Must support a soft gradient overlay
- Text must remain readable without aggressive darkening

---

### Testimonial Headshot Specification (v1)

**Intent:** Increase trust through believable, consistent homeowner portraits.

**Consistency Requirements**
- Similar lighting and crop across all headshots
- Neutral or lightly blurred backgrounds
- Calm, approachable expressions

**Composition**
- Square crop
- Head and shoulders visible
- Centered face, minimal tilt

**Disallowed**
- Corporate studio portraits
- Harsh shadows or dramatic lighting
- Strong portrait-mode artifacts
- Visible AI distortions

---

### Stock vs Generated Guidance

**Stock preferred when:**
- Maximum realism and trust is required
- A suitable image already exists

**Generated preferred when:**
- Precise composition or negative space is required
- Consistent headshot style across multiple images is needed

Generate at master resolution first, then derive responsive sizes.

---

## Raster Asset Manifest (v1)

All raster files must be stored in `public/assets/images/`.

### Hero

- `public/assets/images/hero/hero-master.jpg` — **2400×1500**
- `public/assets/images/hero/hero-desktop.jpg` — **1600×1000**
- `public/assets/images/hero/hero-mobile.jpg` — **1200×900**

**Usage**
- Component: `HeroSection`
- Desktop uses `hero-desktop.jpg`
- Mobile uses `hero-mobile.jpg`
- `hero-master.jpg` is source-only

**Alt Text**
- Plain description, no marketing language  
  Example: “Homeowner in a bright kitchen holding a glass of water.”

---

### Testimonials (3)

- `public/assets/images/testimonials/testimonial-1.jpg` — **512×512**
- `public/assets/images/testimonials/testimonial-2.jpg` — **512×512**
- `public/assets/images/testimonials/testimonial-3.jpg` — **512×512**

**Usage**
- `Testimonials` section avatars

**Alt Text**
- Neutral labels unless names are explicitly provided

---

## SVG Asset Specifications (v1)

### Purpose

These SVG assets provide scalable, token-compatible brand and UI visuals for v1 polish. All SVGs must be outline-based, consistent in stroke style, and themeable via CSS.

### Global SVG Constraints (Non-Negotiable)

- Outline icons only (no filled glyphs by default)
- Stroke width: **2.0–2.25**, rounded caps and joins
- Single-color using `currentColor`
- No baked hex colors or gradients
- No embedded text
- Clean, minimal geometry
- Readable at 24–32px; recognizable at 16px
- Decorative SVGs must support `aria-hidden="true"`

---

### Required SVG Deliverables

#### Brand Mark
- `logo-mark.svg`
- Leaf + water droplet concept
- Droplet primary; leaf integrated
- Optional subtle highlight stroke

#### Service Icons (ViewBox `0 0 64 64`)
- `icon-softener.svg` — scale protection / smooth water
- `icon-filtration.svg` — layered filtering / clean flow
- `icon-ro.svg` — high purity / multi-stage refinement

Avoid literal equipment or plumbing diagrams.

#### Section Divider
- `divider-wave.svg`
- Single calm wave path
- Responsive, full-width
- CSS-controlled color

---

### Optional SVG Enhancements

- `accent-sparkle.svg` — subtle purity accent (max 1–2 uses)
- `accent-seal.svg` — thin outline badge frame

---

### SVG File Placement

```
public/assets/svg/
├── brand/logo-mark.svg
├── icons/icon-softener.svg
├── icons/icon-filtration.svg
├── icons/icon-ro.svg
├── dividers/divider-wave.svg
└── accents/
├── accent-sparkle.svg
└── accent-seal.svg
```

---

## Icon Assets

### Sourcing

- Primary: Lucide Icons
- Alternative: Heroicons Outline
- Custom allowed only if stroke + radius match

### Usage by Section

| Section        | Icon Requirement |
|----------------|------------------|
| Services       | Feature icon per card |
| How It Works   | Step icon + numbered circle |
| Trust Badges   | Certification icons (monochrome) |
| Lead Form      | Optional validation icons |

---

## Image Optimization

### Formats
- Photos: WebP preferred, JPG fallback
- Graphics/Icons: SVG only

### Performance
- Hero image optimized under 200KB
- Lazy-load below-the-fold images
- Explicit width/height to prevent CLS

---

## Cross-References

- Colors: `design-tokens.md`
- Sections: `design-section.md`
- Layout & motion: `design-shell.md`
