---
trigger: always_on
---

# Water Treatment Site Engineering Rules

## Git & Branching
- All feature work must occur on a dedicated `feature/<name>` branch based off `main`.
- Atomic, conventional commits are required.
- Use conventional commit prefixes (e.g., `feat:`, `fix:`, `chore:`).
- All branches must be merged via PR with a summary of changes and test verification steps.
- Update `CHANGELOG.md` for every meaningful feature branch.

## Package Management
- Use `pnpm` for all install, run, and build commands.
- Never use `npm` or `yarn`.

## Planning System Source of Truth (Build OS)
- `build-os/` is the canonical planning system for this repo.
- Use `build-os/designer-os/` for UI decisions: tokens, shell rules, sections, component specs.
- Use `build-os/architect-os/` for system boundaries and future integration notes (if/when used).
- Do not create or resurrect `design-os/` or `agent-os/` directories.

## Project Structure (Code)
- Reusable primitives belong in `src/components/ui/`.
- Layout shell belongs in `src/components/layout/`.
- Page sections belong in `src/components/sections/`.
- Do not create new top-level component folders without documenting the reason in `build-os/`.

## UI Frameworks & Quality
- Use shadcn/ui components when possible.
- Tailwind v4 is the styling foundation.
- Maintain responsiveness and accessibility best practices (keyboard navigation, focus states, contrast).

## Design Flexibility (Strict Process, Flexible Decisions)
- Design decisions may evolve; the process must not.
- All visual decisions must be expressed through `build-os/designer-os/design-tokens.md` and the relevant section/component specs.
- Avoid ad-hoc one-off styling that bypasses tokens/specs unless it is explicitly documented as an intentional experiment in `build-os/designer-os/`.

## Agent Expectations
- Use the Antigravity browser to test every user-facing change.
- When specs are incomplete, follow this fallback:
  1) Consult `build-os/designer-os/` first,
  2) Apply the most conservative change consistent with existing UI patterns,
  3) Record any uncertainty as a note in the relevant Designer-OS doc,
  4) Continue unless the uncertainty would cause structural rework.
