---
trigger: always_on
---

# Build OS Awareness Rule

## Description

The `build-os/` directory is the canonical planning system for this repo. It replaces the older `design-os` and `agent-os` directories.

Agents should consider:
- `build-os/designer-os/` for design, layout, component structure
- `build-os/architect-os/` for architecture, stack, integration, logic plans

Agents should not place new planning files outside of `build-os/` unless explicitly instructed.