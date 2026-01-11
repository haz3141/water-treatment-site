---
component: LeadFunnel
type: section
status: planned
description: Collects visitor contact details for quote generation or to schedule a free water test.
tags:
  - form
  - CTA
  - lead-capture
  - responsive
  - conversion
---

# Component: LeadFunnel

## Purpose
Drives conversions by capturing contact information from prospective customers interested in a free water test or full-house treatment quote.

## Content Zones
- **Headline/Subheadline**: Prompt for scheduling or requesting quote
- **Form Fields**:
  - Name
  - Email
  - Phone (optional or required based on region)
  - ZIP code
  - Type of service (dropdown: Softener, Filter, Reverse Osmosis, Unsure)
  - Message or Notes (optional)
- **CTA Button**: “Request My Quote” or “Schedule Free Test”
- **Confirmation Message**: Inline success/failure state

## Props / State
- `onSubmit(data)`
- `ctaLabel?: string`
- Optional `initialValues` for prefilled flow

## Visual Style
- Clean single-column or two-column layout depending on screen
- Clear labels, large inputs, accessible field spacing
- Uses shadcn/ui form and input components
- Zinc theme with clear CTA highlight

## Behavior
- Form validation (basic required fields)
- Responsive and keyboard-accessible
- Shows success message on submit
- Integrates with backend or mock handler (initially)

## Dependencies
- `@/components/ui/input`
- `@/components/ui/form`
- `@/components/ui/button`
- `react-hook-form` or similar
- Optional: toast/alert component

## Notes
- This is a key conversion element, so clarity and trust are critical
- Support future integration with CRM or backend API
- May evolve into a multi-step funnel later
