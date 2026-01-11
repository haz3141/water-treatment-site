# Component: HeroSection

## Purpose
Visually establish brand trust and value for residential water treatment. Encourage users to schedule a free water test or request a quote.

## Content Zones
- **Headline**: Primary hook (e.g. “Better Water for Every Home”)
- **Subheadline**: Trust-building value prop
- **CTA Button**: “Get Free Water Test” or “Request Quote”
- **Supporting Visual**: Water droplet + family/home imagery
- **Brand Logos / Trust Badges**: Optional; used to reinforce legitimacy

## Props / State
- `ctaLabel`: Label for primary CTA (e.g. “Schedule Now”)
- `onCtaClick`: Action handler for CTA
- Optional: `backgroundImage`, `brandBadgeUrls`

## Visual Style
- Neutral Zinc background with whitespace
- Future-accent-ready (can adapt to green/blue later)
- Responsive layout: vertical on mobile, split/horizontal on desktop
- Uses shadcn/ui components: `Button`, `Container`, `Typography`

## Behavior
- CTA is primary conversion goal
- Should render quickly above-the-fold
- Optional fade-in or subtle entrance animation

## Dependencies
- Uses `@/components/ui/button`, `@/components/ui/container`
- May import `Image` from `next/image`

## Notes
- Align with parent branding (water droplet + green leaf)
- Keep text human and simple — tone of “clean, honest, local help”
