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
