---
description: Applies visual polish across existing sections by updating Designer-OS tokens/specs first, then implementing consistent UI refinements without introducing new features.
---

# Title
Design Polish Pass (Tokenized)

# Description
Applies visual polish across existing sections by updating Designer-OS tokens/specs first, then implementing consistent UI refinements without introducing new features.

# Steps
1. Review and update Designer-OS:
   - `build-os/designer-os/design-tokens.md`
   - `build-os/designer-os/design-shell.md`
   - `build-os/designer-os/design-section.md`
   - (as needed) component specs under `build-os/designer-os/components/`
2. Create a feature branch off `main` named `feature/design-polish-<scope>`.
3. Implement styling changes using tokens and existing UI patterns (no new sections unless explicitly planned).
4. Ensure section order and primary CTA remain consistent with the wireframe.
5. Test on mobile + desktop using Antigravity browser.
6. Commit work using atomic conventional commits (token updates separate from component updates when possible).
7. Update `CHANGELOG.md` with version bump and entry.
8. Create a PR back to `main` describing:
   - What changed in Designer-OS
   - What changed in UI
   - Testing summary
   - Links to updated planning docs
9. Request confirmation before merge.
