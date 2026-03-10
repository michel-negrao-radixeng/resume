---
name: Application Architecture
description: High-level architecture of the React + TypeScript resume application, covering technology choices, project structure, data flow, and component relationships.
targets:
  - ../src/**/*.tsx
  - ../src/**/*.ts
  - ../src/index.css
  - ../index.html
  - ../vite.config.js
  - ../tsconfig.json
  - ../package.json
---

# Application Architecture

## Overview

A single-page resume application built with **React 19** and **TypeScript**, bundled by **Vite**. The application renders a pixel-perfect, printable A4 résumé with runtime bilingual support (English / Brazilian Portuguese) managed exclusively via React Context — no routing, no server, no external i18n library.

All resume content is declared as typed data in `src/data/` — no strings are hardcoded in components. Adding or reordering a section requires only changes to the data layer.

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
├── index.html                       # HTML shell — document title, favicon, #root mount
├── vite.config.js                   # Vite configuration
├── tsconfig.json                    # TypeScript compiler (bundler mode, strict, react-jsx)
├── tessl.json                       # Tessl tile manifest
├── specs/                           # ← Spec-driven development specs (this folder)
│   ├── architecture.spec.md         # This file
│   ├── app-shell.spec.md
│   ├── language-context.spec.md
│   ├── language-toggle.spec.md
│   ├── resume-page.spec.md
│   ├── resume-data.spec.md          # Data model + i18n dictionary spec
│   └── section-components.spec.md  # SectionHeader, BulletList, ExperienceEntryBlock spec
├── public/
│   ├── header_logo.png              # Header stripe image
│   └── footer_illustration.png     # Bottom-of-page decorative illustration
└── src/
    ├── main.tsx                     # ReactDOM.createRoot — app bootstrap
    ├── App.tsx                      # Root component — composes provider + children
    ├── index.css                    # Global styles (screen + @media print)
    ├── data/                        # ← Content & i18n data layer
    │   ├── i18n.ts                  # All translation key/value pairs (en + pt)
    │   └── resumeData.ts            # Typed section data model + resumeSections[]
    ├── context/
    │   └── LanguageContext.tsx      # i18n state, t() function, useLanguage hook
    └── components/
        ├── LanguageToggle.tsx       # EN / PT switcher buttons (hidden on print)
        ├── ResumePage.tsx           # Declarative resume layout (maps over resumeSections)
        ├── SectionHeader.tsx        # Purple-bordered section title box
        ├── BulletList.tsx           # Translated bullet list (skills-list / activities-list)
        └── ExperienceEntryBlock.tsx # Full employer block (company, roles, activities)
```

## Component Hierarchy & Data Flow

```
main.tsx
  └── <App />
        └── <LanguageProvider>       (LanguageContext.tsx — reads from data/i18n.ts)
              │   state: lang ('en' | 'pt')
              │   fn:    t(key) → string
              │
              ├── <LanguageToggle /> reads lang, calls setLang
              └── <ResumePage />     maps resumeSections[] → <ResumeSection>
                    ├── <SectionHeader titleKey />
                    ├── <BulletList items />
                    └── <ExperienceEntryBlock entry />
                          └── <BulletList items className="activities-list" />
```

## Data → Render Pipeline

```
src/data/i18n.ts          → LanguageContext.t(key) → string
src/data/resumeData.ts    → resumeSections: AnySection[]
                          → ResumePage maps each section to a component
                          → components call t(key) for every text node
```

Adding a **new section**: add keys to `i18n.ts`, add an `AnySection` entry to `resumeSections`. No component changes needed.

Adding a **new section type**: add a new interface to `resumeData.ts`, a new component, and a case in the `ResumeSection` switch inside `ResumePage.tsx`.

## Styling Architecture

`index.css` is the single stylesheet. It is structured in three logical blocks:

1. **Reset & Variables** — CSS custom properties (colour tokens, dimensions).
2. **Screen Styles** — `.page`, `.header-stripe`, `.footer-container`, section layout, language toggle.
3. **Print Styles** (`@media print`) — resets margins, fixes footer illustration to `bottom: 0`, hides toggle buttons and body background.

No CSS modules, no CSS-in-JS, no utility frameworks. All class names map directly to elements in the component tree.

## i18n Architecture

All translation keys and values live in `src/data/i18n.ts` as a single typed `I18nDictionary` object. `LanguageContext` imports and exposes them via `t(key)`. Adding a new translatable string requires:

1. Adding a `KEY: { en: '...', pt: '...' }` entry to `i18n.ts`.
2. Using `t('KEY')` via the appropriate component prop or direct call.

## Print / PDF Behaviour

- Language toggle buttons are hidden via `@media print`.
- `@page` margins are reset to `0`.
- The footer illustration is always anchored to the physical bottom of the page via `position: fixed; bottom: 0`.
- Background colours are forced on (CSS `print-color-adjust: exact`).
