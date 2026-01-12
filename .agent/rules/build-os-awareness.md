---
trigger: always_on
---

# Build OS Awareness Rule

## Description
The `build-os/` directory is the canonical planning system for this repo. It replaces the older `design-os` and `agent-os` directories.

## Planning Sources
- Primary (active): `build-os/designer-os/` for tokens, shell, sections, component specs, roadmap/vision.
- Secondary (as needed): `build-os/architect-os/` for system boundaries, entities, and future integration plans.

## Placement Rule
Agents should not place new planning files outside of `build-os/` unless explicitly instructed.
