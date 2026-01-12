# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-01-12

### Added

- Custom SVG asset set for brand identity and UI visuals
  - Brand mark (logo-mark.svg): Leaf + droplet motif
  - Service icons: icon-softener.svg, icon-filtration.svg, icon-ro.svg
  - Wave divider (divider-wave.svg) for section transitions
  - Accent elements: accent-sparkle.svg, accent-seal.svg
- Logo integration in Header and Footer components
- Wave divider at Hero section bottom edge

### Changed

- ServiceGrid now uses custom SVG icons instead of Lucide icons
- All SVGs use outline-based design with currentColor for theme compatibility

## [1.4.0] - 2026-01-12

### Added

- Inter font for body copy (Geist Sans remains for headings) per design-tokens.md
- Typography role tokens: font-heading (Geist Sans), font-body (Inter)
- Tier-1 motion utilities: animate-fade-up (hero text), hover-lift (cards)
- prefers-reduced-motion support for all motion effects

### Changed

- Normalized section padding to py-12 md:py-16 across all homepage sections
- Unified CTA labels to "Get a Free Water Test" in Header, Hero, and CtaFooter
- Enhanced Header CTA with rounded-full, shadow-md, hover:scale-105 styling
- Applied rounded-xl and hover-lift to ServiceGrid and Testimonials cards
- Preserved brand tokens in dark mode (primary, accent, success)
- Standardized internal gaps from gap-12 to gap-10 for consistent rhythm
- Updated section backgrounds to use surface/card tokens consistently

## [1.3.0] - 2026-01-12

### Changed

- Applied "Clean Blue" brand color palette from Designer-OS tokens across all sections
- HeroSection: Primary-soft (#E8F1FC) background, primary blue CTA button, accent-colored decorations
- ServiceGrid: Unified primary blue icons instead of mixed colors
- HowItWorks: Primary blue step circles replacing generic zinc colors
- CtaFooter: Primary blue background with high-contrast white CTA
- TrustBadges: Surface token background for visual consistency

### Added

- Brand color tokens to globals.css: --primary, --primary-soft, --accent, --success, --surface
- Tailwind theme mappings for new brand tokens

## [1.2.0] - 2026-01-11

### Added

- Introduced `build-os/` directory to unify long-term planning
  - Migrated `design-os/` → `build-os/designer-os/`
  - Migrated `agent-os/` → `build-os/architect-os/`
- Added `.agent/rules/build-os-awareness.md` to align agent behavior with build-os conventions
- Scaffolded foundational product planning and architectural structure for design and implementation alignment
- TrustBadges section with grayscale certification logos and hover color reveal
- Badge assets for NSF, BBB, WQA, and HomeAdvisor certifications
- ServiceGrid section with 3 service cards (Water Softeners, Filtration, Reverse Osmosis)
- shadcn/ui Card component for consistent card styling
- HowItWorks section with 4-step process timeline (Schedule, Test, Install, Enjoy)
- Testimonials section with customer quotes, 5-star ratings, and avatar initials
- CtaFooter section with high-contrast CTA block and trust indicators

## [1.1.0] - 2026-01-11

### Added

- Project rules and workflows for Antigravity agent guidance
- Git best practices: atomic commits, branching, changelog tracking
- Clean versioning aligned with completed UI scaffold
- Integrated layout with all initial UI sections (Header, HeroSection, LeadFunnel, Footer)
- Functional contact funnel with form validation and CTA flow
- LayoutShell wrapper component for consistent page structure

## [1.0.0] - 2026-01-11

### Added

- Initial project setup with Next.js 16.1.1, Tailwind CSS v4, and shadcn/ui
- Residential water treatment website scaffold for lead generation
- Design system foundation with Zinc color palette and dark mode support
- Planning documentation in `design-os/` and `agent-os/` directories
- HeroSection component with responsive layout and trust-focused CTA
