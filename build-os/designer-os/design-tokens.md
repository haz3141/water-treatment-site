# Design Tokens

> **V2 LOCK**
> - Status: Locked
> - Date: 2026-01-13
> - Source: Designer-OS V2 Lock (docs/designer-os-v2-lock)

Canonical token definitions for the Water Treatment Site. All theming is token-driven; palette swaps require only changing token values, never component refactors.

---

## Brand Foundation

- **Brand Name**: Eco One Water (canonical)
- **Metaphor**: Leaf + Water Droplet = purity, health, nature + engineering
- **Visual Tone**: Clean, modern, calm, premium residential
- **Emotional Signal**: Trust → Safety → Clarity → Ease
- **Target Audience**: Homeowners 30–65

---

## Color System

### Governance

- **Semantic tokens only**: Components reference tokens (e.g., `--color-primary`), never raw hex values
- **No hardcoded section colors**: Section backgrounds use only `--color-surface`, `--color-card`, or `--color-primary-soft`
- **Palette swaps are value-only**: Switching palettes changes token values; no component refactors required

### Palette Registry

| Palette | Name | Status |
|---------|------|--------|
| A | Coastal Teal + Clean Sand | **Default (Active)** |
| B | Green First | Inactive alternate |
| C | Dark Navy Premium | Inactive alternate |

### Palette A: Coastal Teal + Clean Sand (Default)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#12A594` | CTAs, links, step numbers |
| `--color-primary-hover` | `#0E9888` | CTA hover states |
| `--color-primary-active` | `#067A6F` | CTA active/pressed states |
| `--color-primary-soft` | `#E7F9F5` | Hero bg, highlights, subtle tints |
| `--color-accent` | `#0091FF` | Icons, badges, micro accents |
| `--color-surface` | `#FDFDFC` | Page background |
| `--color-card` | `#FFFFFF` | Cards, forms |
| `--color-text-main` | `#11181C` | Headings (no true-black) |
| `--color-text-muted` | `#687076` | Body/labels |
| `--color-border` | `#DBDBD7` | Dividers |
| `--color-success` | `#30A46C` | Trust checks, guarantees |

### Palette B: Green First (Inactive Alternate)

Drop-in token set with leaf-dominant theming. Final hex values to be defined during A/B testing phase.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | TBD | CTAs, links, step numbers |
| `--color-primary-soft` | TBD | Hero bg, highlights |
| `--color-accent` | TBD | Icons, badges, micro accents |
| `--color-success` | TBD | Trust checks, guarantees |
| `--color-surface` | TBD | Page background |
| `--color-card` | TBD | Cards, forms |
| `--color-text-main` | TBD | Headings |
| `--color-text-muted` | TBD | Body/labels |
| `--color-border` | TBD | Dividers |

### Palette C: Dark Navy Premium (Inactive Alternate)

Drop-in token set with premium dark navy theming. Final hex values to be defined during A/B testing phase.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | TBD | CTAs, links, step numbers |
| `--color-primary-soft` | TBD | Hero bg, highlights |
| `--color-accent` | TBD | Icons, badges, micro accents |
| `--color-success` | TBD | Trust checks, guarantees |
| `--color-surface` | TBD | Page background |
| `--color-card` | TBD | Cards, forms |
| `--color-text-main` | TBD | Headings |
| `--color-text-muted` | TBD | Body/labels |
| `--color-border` | TBD | Dividers |

---

## Typography System

### Typography Intent

- **Tone**: Calm, authoritative, premium residential
- **Audience**: Homeowners 30–65; no "basic default font" feel
- **Text Color**: No true-black text (`--color-text-main` is `#11181C`)
- **Hierarchy**: Clear distinction between heading levels
- **Readability**: Optimized for long-form content

### Font Candidates (V2 — Not Final)

Final font families will be selected in implementation. These are production-safe candidates:

| Option | Headings | Body |
|--------|----------|------|
| 1 | IBM Plex Sans | Source Sans 3 |
| 2 | Geist Sans | Inter |
| 3 | Manrope | Inter |

### Type Scale (V2 Locked)

| Level | Size | Line-Height |
|-------|------|-------------|
| H1 | 48px | 1.10–1.15 |
| H2 | 36px | ~1.15 |
| H3 | 24px | ~1.25 |
| Body | 17–18px | ~1.6 |
| Small/Meta | 14–15px | ~1.5 |

### Typography Rules

- No custom sizes per section
- No arbitrary weight mixing
- Headings use max two weights: 600 and 700
- Body uses 400 (regular) weight

---

## Spacing

Token-based spacing scale:

| Token | Value |
|-------|-------|
| `space-2` | 0.5rem |
| `space-4` | 1rem |
| `space-6` | 1.5rem |
| `space-8` | 2rem |
| `space-12` | 3rem |
| `space-16` | 4rem |

Use `space-12` to `space-16` for section padding, `space-6` for card gaps.

---

## Border Radii

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-md` | 6px | Inputs, cards |
| `rounded-xl` | 12px | Hero, CTAs |
| `rounded-full` | 9999px | Icons, badges |

---

## Max Widths

| Context | Value |
|---------|-------|
| Section container | 80rem (1280px) |
| Inputs/buttons | Full width on mobile, constrained on desktop |

---

## Cross-References

- **Shell Layout**: See [design-shell.md](./design-shell.md)
- **Section Specs**: See [design-section.md](./design-section.md)
- **Asset Requirements**: See [design-assets.md](./design-assets.md)
