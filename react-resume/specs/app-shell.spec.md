---
name: App Shell
description: Root application entry point that wires together the ThemeProvider, LanguageProvider context and the top-level rendered components.
targets:
  - ../src/App.tsx
  - ../src/main.tsx
  - ../index.html
---

# App Shell

Bootstraps the React application and enforces the correct component hierarchy.

## Component tree

```
<ThemeProvider>           ← provides theme state globally (light / dark)
  <LanguageProvider>      ← provides language state globally
    <LanguageToggle />    ← floating locale switcher (screen only)
    <PrintButton />       ← floating print / download PDF button (screen only)
    <ThemeToggle />       ← floating ☀️ / 🌙 theme switcher (screen only)
    <ResumePage />        ← main document
  </LanguageProvider>
</ThemeProvider>
```

## Entrypoint (`main.tsx`)

- Mounts `<App />` into the `#root` div using `ReactDOM.createRoot`.
- Wraps the tree in `<React.StrictMode>`.

## `index.html`

- Tab icon is a purple SVG document icon (inline data URI, colour `#541e62`).
- Page title is `"Curriculo - Michel Negrão"`.
- No external favicon file dependency.
