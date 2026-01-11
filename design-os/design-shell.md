# Design Shell

A reusable page shell layout that all pages follow (homepage, funnel, etc.).

---

## 🧱 Layout Anatomy

1. **Header Shell**
   - Left: Logo
   - Right: Navigation + CTA button
   - Sticky on scroll
   - Optional subtle shadow

2. **Section Wrapper**
   - `max-w-7xl mx-auto px-4 md:px-8`
   - `py-12` vertical spacing
   - Optional bg: `bg-default`, `bg-surface`
   - Stack children in `flex-col gap-6`

3. **Footer Shell**
   - 2 or 3 column layout
   - Left: Business summary + contact info
   - Right: Nav links, services, social
   - Background: `bg-default`, text-muted

---

## 📱 Responsive Behavior

- All sections mobile-first
- Grid layout: `grid-cols-1 md:grid-cols-2` where needed
- Header collapses to hamburger if nav gets too long

---

## 🧩 Integration with Sections

Each section (e.g. Hero, Testimonials) plugs into this shell via:

```tsx
<Section>
  <Component />
</Section>

Shell controls layout rhythm and page boundaries. Sections focus on content and visuals.