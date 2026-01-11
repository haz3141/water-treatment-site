# TrustBadges

## Purpose
Display trust indicators through logos or badges from known brands, certifications, or customer satisfaction metrics to build credibility with visitors.

## Content Zones
- Brand logos displayed in grayscale
- Optional small label or supporting text (e.g., "Trusted by 10,000+ homeowners")

## Visual Style
- Centered horizontal row layout
- Responsive stack on mobile (2-column grid or single column)
- Zinc-muted tones for logos
- Subtle hover effect to reveal color (optional)
- Generous padding for breathing room

## Dependencies
- `next/image` for optimized image handling
- `@/components/ui/container` for consistent width constraints

## Component API
```tsx
<TrustBadges />
```

No props required - badge data is self-contained.

## Badge Data (Sample)
| Logo | Alt Text |
|------|----------|
| NSF Logo | NSF Certified |
| BBB Logo | BBB Accredited |
| WQA Logo | Water Quality Association |
| HomeAdvisor | HomeAdvisor Approved |

## Accessibility
- All images have descriptive alt text
- Sufficient color contrast for any text labels
