# Testimonials

> **V2 Alignment Note**: Testimonials must use Seminole & Volusia FL cities only.

## Purpose
Build trust with 1-3 customer quotes and faces to demonstrate real customer satisfaction.

## Content Zones
- Testimonial cards (3 total):
  - Avatar (optional - customer photo or initial)
  - Customer name and location
  - Quote text (1-3 sentences)
  - Star rating (optional, 5 stars)

## Visual Style
- 3-column card layout on desktop
- Single column on mobile
- Large decorative quote marks
- Zinc-muted with subtle accent
- Avatar with circular crop

## Dependencies
- `@/components/ui/avatar` (shadcn/ui)
- `@/components/ui/card` (already added)
- `@/components/ui/container`
- `lucide-react` for Star icon

## Component API
```tsx
<Testimonials />
```

## Sample Data (V2 — Seminole & Volusia FL Only)
| Name | Location | Quote |
|------|----------|-------|
| Sarah M. | Sanford, FL | "Our water has never tasted better. The installation was quick and professional." |
| Mike T. | Altamonte Springs, FL | "Best investment we've made for our home. The difference is night and day." |
| Lisa K. | Deltona, FL | "We noticed the improvement immediately. Highly recommend their service!" |

## Accessibility
- Quote marks are decorative (aria-hidden)
- Proper semantic structure with blockquote elements
