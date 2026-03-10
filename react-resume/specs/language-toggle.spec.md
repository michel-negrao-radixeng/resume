---
name: Language Toggle
description: Floating UI button pair that lets the user switch between English and Portuguese at runtime.
targets:
  - ../src/components/LanguageToggle.tsx
---

# Language Toggle

A stateless presentational component that reads and writes to `LanguageContext` to switch the active locale.

## Behaviour

- Renders two buttons: **EN** and **PT**.
- The active language button is visually distinguished (`.lang-btn.active` CSS class applied).
- Clicking an inactive button calls `setLang(lang)` from `LanguageContext`, triggering a global re-render.
- Clicking the already-active button is a no-op (idempotent).

## Visibility

- Displayed as a fixed overlay in the top-right corner of the viewport during normal screen viewing.
- **Completely hidden** during print and PDF export via `@media print { display: none !important; }` — no toggle buttons should ever appear in the printed output.
