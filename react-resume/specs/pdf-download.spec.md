---
name: PDF Download Button
description: A floating print/download button that triggers the browser print dialog, allowing the user to save the resume as a PDF. Hidden on print.
targets:
  - ../src/components/PrintButton.tsx
  - ../src/data/i18n.ts
  - ../src/index.css
  - ../src/App.tsx
---

# PDF Download Button

## Purpose

Provides a one-click path to generate a PDF of the resume via the browser's native print dialog. Uses `window.print()` — no third-party PDF library required.

## Component: `PrintButton`

```
<PrintButton />
```

- Calls `window.print()` on click.
- Reads the active locale via `useLanguage()` to render the translated label: `t('PRINT_BUTTON')`.
- Renders a `<button>` with class `print-btn`.
- Is **hidden on print** (`@media print { .print-btn { display: none !important } }`).

## Placement

Rendered inside `<LanguageProvider>` in `App.tsx`, adjacent to `<LanguageToggle />`. Both are fixed-position overlays; `PrintButton` appears directly below the language toggle using `top: 60px`.

## i18n Keys

| Key            | EN             | PT          |
|----------------|----------------|-------------|
| `PRINT_BUTTON` | `Download PDF` | `Baixar PDF` |

## CSS Contract

- Class: `.print-btn`
- Visually consistent with `.lang-btn` (same border, colour, font, box-shadow).
- Fixed position: `top: 60px; right: 20px`.
- Hidden inside `@media print`.

## Behaviour

| Action             | Result                                    |
|--------------------|-------------------------------------------|
| Click button       | Browser print dialog opens                |
| Switch language    | Button label updates (EN ↔ PT)            |
| Print / PDF export | Button is not visible in the output       |
