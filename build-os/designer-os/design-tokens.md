# Design Tokens

Canonical token definitions for the Water Treatment Site. All theming is token-driven; palette swaps require only changing token values, never component refactors.

---

## Brand Foundation

- **Metaphor**: Leaf + Water Droplet = purity, health, nature + engineering.
- **Visual Tone**: Clean, modern, calm, premium residential.
- **Emotional Signal**: Trust → Safety → Clarity → Ease.

---

## Color System

### Strategy

- One dominant primary, one supporting accent, neutral surfaces.
- No loud saturation; high contrast for accessibility + conversions.
- Designed for A/B palette testing without refactoring components.
- Palette swaps only change tokens; never require component-by-component refactors.

### Palette A: Clean Blue (Default)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1E6FD9` | CTAs, links, step numbers |
| `--color-primary-soft` | `#E8F1FC` | Hero bg, highlights |
| `--color-accent` | `#4ECFD9` | Icons, badges, micro accents |
| `--color-success` | `#3FAE6A` | Trust checks, guarantees |
| `--color-surface` | `#F8FAFC` | Page background |
| `--color-card` | `#FFFFFF` | Cards, forms |
| `--color-text-main` | `#1F2937` | Headings |
| `--color-text-muted` | `#6B7280` | Body/labels |
| `--color-border` | `#E5E7EB` | Dividers |

### Palette B: Green First (Placeholder)

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

### Palette C: Dark Navy Premium (Placeholder)

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

### Font Stack

| Role | Font | Notes |
|------|------|-------|
| Headings | Geist Sans | Primary brand font for all headings |
| Body | Inter | Clean, readable body copy |
| UI/Meta | Inter | No third font; consistency with body |

### Type Scale

| Level | Size/Line-Height |
|-------|------------------|
| H1 | 48px / 56px |
| H2 | 36px / 44px |
| H3 | 24px / 32px |
| Body | 16px / 24px |
| Small | 14px / 20px |

### Typography Rules

- No custom sizes per section.
- No arbitrary weight mixing.
- Headings use max two weights: 600 and 700.

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
