---
name: Application Architecture
description: High-level architecture of the React + TypeScript resume application, covering technology choices, project structure, data flow, and component relationships.
targets:
  - ../src/**/*.tsx
  - ../src/index.css
  - ../index.html
  - ../vite.config.js
  - ../tsconfig.json
  - ../package.json
---

# Application Architecture

## Overview

A single-page resume application built with **React 19** and **TypeScript**, bundled by **Vite**. The application renders a pixel-perfect, printable A4 résumé with runtime bilingual support (English / Brazilian Portuguese) managed exclusively via React Context — no routing, no server, no external i18n library.

## Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| UI Framework | React 19.2 | Component model, Context API, Strict Mode |
| Language | TypeScript 5.9 (strict) | Type safety, self-documenting interfaces |
| Build Tool | Vite 7.3 | Fast dev HMR, zero-config bundling |
| Styling | Vanilla CSS (`index.css`) | Full control over print/screen media queries |
| i18n | Custom React Context | No third-party dependency; complete control |
| Assets | Vite `public/` folder | Served directly, no import hashing |

## Project Structure

```
react-resume/
├── index.html                    # HTML shell — document title, favicon, #root mount
├── vite.config.js                # Vite configuration
├── tsconfig.json                 # TypeScript compiler (bundler mode, strict, react-jsx)
├── tessl.json                    # Tessl tile manifest
├── specs/                        # ← Spec-driven development specs (this folder)
│   ├── architecture.spec.md      # This file
│   ├── app-shell.spec.md
│   ├── language-context.spec.md
│   ├── language-toggle.spec.md
│   └── resume-page.spec.md
├── public/
│   ├── header_logo.png           # Header stripe image
│   └── footer_illustration.png   # Bottom-of-page decorative illustration
└── src/
    ├── main.tsx                  # ReactDOM.createRoot — app bootstrap
    ├── App.tsx                   # Root component — composes provider + children
    ├── index.css                 # Global styles (screen + @media print)
    ├── context/
    │   └── LanguageContext.tsx   # i18n state, t() function, useLanguage hook
    └── components/
        ├── LanguageToggle.tsx    # EN / PT switcher buttons (hidden on print)
        └── ResumePage.tsx        # Full résumé document layout
```

## Component Hierarchy & Data Flow

```
main.tsx
  └── <App />
        └── <LanguageProvider>        (LanguageContext.tsx)
              │   state: lang ('en' | 'pt')
              │   fn:    t(key) → string
              │
              ├── <LanguageToggle />   reads lang, calls setLang
              └── <ResumePage />       calls t(key) for every text node
```

The `LanguageProvider` is the sole owner of language state. Components never manage language state locally — they only read from or write to the context.

## Styling Architecture

`index.css` is the single stylesheet. It is structured in three logical blocks:

1. **Reset & Variables** — CSS custom properties (colour tokens, dimensions).
2. **Screen Styles** — `.page`, `.header-stripe`, `.footer-container`, section layout, language toggle.
3. **Print Styles** (`@media print`) — resets margins, fixes footer illustration to `bottom: 0`, hides toggle buttons and body background.

No CSS modules, no CSS-in-JS, no utility frameworks. All class names map directly to elements in `ResumePage.tsx`.

## i18n Architecture

All translation keys and values live inside `LanguageContext.tsx` in a single typed `I18nDictionary` object. There are no separate translation files. Adding a new translatable string requires:

1. Adding a new `KEY: { en: '...', pt: '...' }` entry to the dictionary.
2. Using `t('KEY')` at the call site in the component.

## No-Build-Required Assets

Images are placed in `public/` and referenced by absolute path (`/header_logo.png`, `/footer_illustration.png`). Vite serves them verbatim with no content-hash renaming, making the paths stable across rebuilds.

## Print / PDF Behaviour

The resume is designed to print cleanly to a single A4/Letter page with no browser UI artifacts:

- Language toggle buttons are hidden via `@media print`.
- `@page` margins are reset to `0`.
- The footer illustration is always anchored to the physical bottom of the page via `position: fixed; bottom: 0`.
- Background colours are forced on (CSS `print-color-adjust: exact`).
