---
component: Footer
type: navigation
status: planned
---

# Component: Footer

## Purpose
Provides consistent site footer with essential links, copyright, and optional trust badges or certifications.

## Content Zones
- **Navigation Links**: Repeats or summarizes top-level nav (About, Services, Contact)
- **Copyright**
- **Trust Badges (Optional)**: e.g. local certification, BBB, water treatment association logos

## Props / State
- None required
- Could receive an optional list of badges later

## Visual Style
- Low-contrast zinc tones, smaller typography
- Mobile stack, desktop grid or flex layout
- Visually distinct from header (lighter or darker background)
- Optional green accent highlights (icons or links)

## Behavior
- Static content (no interactivity initially)
- Responsive layout with semantic HTML
- All links accessible by keyboard/screen reader

## Dependencies
- `@/components/ui/container`
- `next/link`
- Trust badge images (optional or placeholder)

## Notes
- Should feel clean, minimal, and not crowded
- Layout should naturally support internationalization if needed later
- Consider wrapping in a `<footer>` tag for semantic HTML
