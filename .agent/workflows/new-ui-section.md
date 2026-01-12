---
description: This workflow handles the full implementation of a new UI section from design planning to tested feature integration and changelog update.
---

# Title
Build New UI Section

# Description
This workflow handles the full implementation of a new UI section from design planning to tested feature integration and changelog update.

# Steps
1. Create a planning card for the new section in `build-os/designer-os/components/`.
2. Create a feature branch off `main` named `feature/<section-name>`.
3. Scaffold the section’s component(s) using shadcn/ui + Tailwind.
4. Integrate it into the appropriate page.
5. Test the result using the Antigravity browser.
6. Commit work using atomic conventional commits.
7. Update `CHANGELOG.md` with version bump and entry.
8. Create a detailed PR back to `main` describing:
   - What was built
   - Testing summary
   - Linked planning card(s)
9. Request confirmation before merge.
