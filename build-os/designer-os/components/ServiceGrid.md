# ServiceGrid

## Purpose
Introduce and explain the core water treatment services offered: Water Softeners, Filtration Systems, and Reverse Osmosis.

## Content Zones
- ServiceCard × 3, each containing:
  - Icon (lucide-react)
  - Title
  - Short description (1-2 sentences)

## Visual Style
- 3-column grid layout on desktop
- Single column on mobile
- Equal spacing between cards
- Light border or subtle background tint per card
- Zinc palette with subtle accent on hover

## Dependencies
- `@/components/ui/card` (shadcn/ui Card component)
- `lucide-react` for icons (Droplets, Filter, Waves)
- `@/components/ui/container` for consistent width

## Component API
```tsx
<ServiceGrid />
```

## Service Data
| Icon | Title | Description |
|------|-------|-------------|
| Droplets | Water Softeners | Remove hard water minerals for softer skin and cleaner fixtures |
| Filter | Filtration Systems | Multi-stage filters for pure, great-tasting water |
| Waves | Reverse Osmosis | Advanced purification for the cleanest water possible |

## Accessibility
- Semantic heading levels (h2 for section, h3 for cards)
- Icons are decorative and properly aria-hidden
