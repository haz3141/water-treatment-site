---
trigger: always_on
---

# Water Treatment Site Engineering Rules

## Git & Branching
- All feature work must occur on a dedicated `feature/<name>` branch based off `main`.
- Atomic, conventional commits are required.
- Use semantic commit messages (e.g., `feat:`, `fix:`, `chore:`).
- All branches must be merged via PR with a summary of changes and test verification steps.

## Package Management
- Use `pnpm` for all install, run, and build commands.
- Never use `npm` or `yarn`.

## Project Structure
- Place UI components in `@/components/ui/` unless context-specific.
- Use the `design-os/` folder for planning cards and `agent-os/` for logic/middleware documentation.
- Update `CHANGELOG.md` for every meaningful feature branch.

## UI Frameworks
- Use shadcn/ui components when possible.
- Tailwind v4 with Zinc base theme.
- Optional future accents in green/blue.
- Maintain responsiveness and accessibility best practices.

## Agent Expectations
- Use the Antigravity browser to test every user-facing feature.
- If a design card or prompt is unclear, request clarification before proceeding.
