# Raster Prompts (v1)

> **V2 LOCK**
> - Status: Locked
> - Date: 2026-01-13
> - Source: Designer-OS V2 Lock (docs/designer-os-v2-lock)

Prompt vault for **Eco One Water** raster asset generation/editing. Ensures repeatability across iterations.
All outputs must comply with `design-assets.md` raster specs.

---

## Hero Image Prompt (Master) — 2400×1500 (1.6:1)

**Goal:** Premium residential trust; clean kitchen/sink context; strong negative space for headline + CTA overlay.

**Prompt (Base)**
- Scene: bright, modern kitchen with white/light surfaces, uncluttered.
- Subject: approachable homeowner or small family, natural expression.
- Action: subtle water context (glass of water near sink, faucet in background).
- Lighting: natural daylight, slightly cool/neutral.
- Composition: subject positioned to the right (or left) with clean negative space on the opposite side for overlay text.
- Style: realistic photography, no stylized filters, no corporate vibe.

**Hard Constraints**
- No visible brand logos
- No cluttered counters
- No dark/moody lighting
- No product/equipment glamour shots
- Must tolerate a soft gradient overlay without losing readability

---

## Testimonial Headshot Style (All) — 512×512

**Goal:** Real homeowner feel; consistent lighting/crop/background; friendly calm expression.

**Prompt (Base)**
- Subject: adult homeowner, friendly calm expression.
- Crop: head and shoulders, centered, square.
- Background: clean, neutral, lightly blurred interior or solid light tone.
- Lighting: soft, natural, minimal shadows.
- Style: realistic photography, no heavy retouching.

**Hard Constraints**
- No corporate backdrops
- No harsh studio light
- No uncanny artifacts
- Keep consistent look across all 3 outputs

---

## Notes for Generation Workflow

- Generate at master resolution first (hero-master)
- Derive hero-desktop and hero-mobile crops after selecting the best master
- Validate outputs at 100% zoom for artifacts (eyes/teeth/hands/background distortions)
- **Composition**: Maintain negative space for headline + CTA overlay
- **Style**: Lifestyle imagery default — no abstract tech graphics
