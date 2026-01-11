---
component: LayoutShell
type: shell
status: planned
---

# Component: LayoutShell

## Purpose
Wraps all pages in consistent site chrome. Provides navigation, footer, and a slot for page content. Establishes consistent visual rhythm and SEO metadata baseline.

## Content Zones
- **Header**: Logo, nav links (About, Services, Contact), CTA button (optional)
- **Main Content Slot**: Renders current page (e.g., `HeroSection`)
- **Footer**: Copyright, small nav, optional trust badges

## Props / State
- None initially (static shell)
- Uses `children` prop for page content
- Could receive `meta` or `title` prop later for dynamic SEO

## Visual Style
- Clean grid layout with consistent padding
- Tailwind spacing tokens for rhythm
- Responsive header/footer layout
- Matches zinc-neutral branding (can later accommodate green highlight)

## Behavior
- Sticky or fixed header optional
- Mobile nav collapsible (simple dropdown or hamburger)
- Dark mode support via Tailwind

## Dependencies
- `@/components/ui/container`
- `next/head` for metadata
- `next/font` for custom typography (optional)
- Logo (placeholder for now)

## Notes
- Should not include layout-shifting animations
- Focus on semantic HTML: `<header>`, `<main>`, `<footer>`
