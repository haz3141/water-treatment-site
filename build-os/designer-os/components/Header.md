---
component: Header
type: navigation
status: planned
---

# Component: Header

## Purpose
Primary site navigation bar. Prominently displays the logo and provides clear navigation to main pages (About, Services, Contact), with an optional CTA (e.g. "Free Water Test").

## Content Zones
- **Logo**: Positioned top-left, links to homepage
- **Navigation Links**: Horizontal list on desktop, collapsed menu on mobile
- **CTA Button (Optional)**: "Get Free Water Test" or "Request a Quote"

## Props / State
- `ctaLabel?: string`
- `onCtaClick?: () => void`
- Optional `links` array (default to: About, Services, Contact)

## Visual Style
- Clean horizontal bar with logo left, links center/right
- Mobile breakpoint collapses links into menu or hamburger
- Tailwind spacing, flex/grid for alignment
- Uses zinc color theme; supports dark mode
- Future highlight color: green-accent for CTA

## Behavior
- CTA is optional, should not disrupt layout if missing
- Mobile behavior: links stack vertically or dropdown menu
- Logo should be tappable/clickable to navigate home

## Dependencies
- `@/components/ui/button`
- `@/components/ui/container`
- `next/link`
- Placeholder logo (SVG or PNG)

## Notes
- Avoid dropdowns or animations for now — keep initial version simple and accessible
- Nav links should be keyboard-navigable and semantic (<nav>, <a>)
