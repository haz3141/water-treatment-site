# Design Sections

Modular UI building blocks used across the homepage and funnel.

---

## 🏠 Homepage Sections

### `section-hero-main`
- Purpose: Introduce offer, capture attention, trigger CTA
- Layout: 2-col (text + image)
- Content: Headline, subtext, CTA button, image

### `section-trust-badges`
- Purpose: Show credibility fast
- Layout: Horizontal logo strip
- Content: Google reviews, BBB, WQA, etc.

### `section-services`
- Purpose: Explain what we do
- Layout: Grid of 3 cards
- Content: Icon, title, benefit text

### `section-how-it-works`
- Purpose: Visualize conversion path
- Layout: 3 steps with numbers/icons
- Content: “Test > Plan > Install”

### `section-testimonials`
- Purpose: Social proof
- Layout: Grid or carousel
- Content: Quote, person name, location

### `section-local-cta`
- Purpose: Highlight location relevance
- Content: “Serving [City]”, trust/experience copy

### `section-contact-preview`
- Purpose: Encourage CTA mid-scroll
- Content: Mini-form or button

---

## 🔁 Funnel Sections

### `section-lead-header`
- Content: Simple headline + subtext (no nav)

### `section-lead-form`
- Layout: Lead form fields + CTA
- Fields: Name, Email, Phone, Zip

### `section-steps-breakdown`
- Content: “Step 1-2-3” with brief blurbs

### `section-trust-footer`
- Content: Guarantee text, phone CTA

---

## 🔗 Composition Pattern

Each section is used like:

```tsx
<Section>
  <SectionHeroMain />
</Section>

This makes it easy to reorder, isolate, or animate sections if needed.