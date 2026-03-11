---
name: Theme Toggle (Dark / Light Mode)
description: A floating toggle button that switches the application between light and dark colour schemes for screen viewing. The theme is persisted in localStorage and never affects print output.
targets:
  - ../src/context/ThemeContext.tsx
  - ../src/components/ThemeToggle.tsx
  - ../src/index.css
  - ../src/App.tsx
---

# Theme Toggle (Dark / Light Mode)

## Purpose

Allows the user to switch between a light (default) and dark colour scheme for screen reading. Print output is always light, regardless of the active theme.

## Strategy: `data-theme` Attribute

The theme is applied by setting `data-theme="dark"` on `document.documentElement`. CSS overrides are scoped to `[data-theme="dark"] { ... }` in `index.css`. This approach:

- Requires zero JavaScript in CSS — the cascade handles everything.
- Keeps print styles clean (the `@media print` block always wins over `[data-theme]`).
- Is compatible with the existing CSS custom property architecture.

## ThemeContext (`src/context/ThemeContext.tsx`)

- State: `theme: 'light' | 'dark'` (default: `'light'`).
- On mount: reads `localStorage.getItem('resume-theme')` to restore the last choice.
- On change: calls `document.documentElement.setAttribute('data-theme', theme)` and `localStorage.setItem('resume-theme', theme)`.
- Exports:
  - `ThemeProvider` – wraps the app.
  - `useTheme()` – returns `{ theme, toggleTheme }`.

## ThemeToggle Component (`src/components/ThemeToggle.tsx`)

- Renders a `<button>` with class `theme-btn`.
- Displays `☀️` when `theme === 'dark'` (click to go light) and `🌙` when `theme === 'light'` (click to go dark).
- Calls `toggleTheme()` on click.
- Fixed position: `top: 100px; right: 20px` (below the print button).
- Hidden on print.

## CSS Contract

### Light mode (default — no attribute needed)

Existing CSS variables remain unchanged:
- `--purple-theme: #541e62`
- `body` background: `#f0f0f0`
- `.page` background: `white`
- Text: `#595959`

### Dark mode overrides (`[data-theme="dark"]`)

| Element / Class       | Property           | Dark Value          |
|-----------------------|--------------------|---------------------|
| `body`                | `background-color` | `#1a1a2e`           |
| `.page`               | `background-color` | `#16213e`           |
| `.page`               | `color`            | `#e0e0e0`           |
| `.horizontal-line`    | `border-color`     | `#4a4a6a`           |
| `.section-box`        | `color`            | `#c084d8`           |
| `.section-box`        | `border-color`     | `#c084d8`           |
| `.company-header`     | `color`            | `#c084d8`           |
| `.skills-list li::before`, `.activities-list li::before` | `color` | `#c084d8` |
| `.lang-btn`, `.print-btn`, `.theme-btn` | `background` | `#1e1e3a` |
| `.lang-btn`, `.print-btn`, `.theme-btn` | `color` | `#c084d8` |
| `.lang-btn`, `.print-btn`, `.theme-btn` | `border-color` | `#c084d8` |
| `.lang-btn.active`    | `background`       | `#541e62`           |
| `.lang-btn.active`    | `color`            | `white`             |

### Print override (always light)

```css
@media print {
  [data-theme="dark"] body { background: white !important; }
  [data-theme="dark"] .page { background: white !important; color: #595959 !important; }
  [data-theme="dark"] .section-box { color: #541e62 !important; border-color: #541e62 !important; }
  [data-theme="dark"] .company-header { color: #541e62 !important; }
  [data-theme="dark"] .skills-list li::before,
  [data-theme="dark"] .activities-list li::before { color: #541e62 !important; }
  [data-theme="dark"] p, [data-theme="dark"] .job-title-row { color: #595959 !important; }
}
```

## Placement in App.tsx

```
<ThemeProvider>
  <LanguageProvider>
    <LanguageToggle />
    <PrintButton />
    <ThemeToggle />
    <ResumePage />
  </LanguageProvider>
</ThemeProvider>
```

## Persistence

| Event         | Behaviour                                      |
|---------------|------------------------------------------------|
| Toggle click  | Switches theme; persists to `localStorage`     |
| Page reload   | Reads `localStorage` and restores last theme   |
| Print         | Always renders as light theme                  |
