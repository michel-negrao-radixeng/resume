---
name: Language Context (i18n)
description: Manages global language state and provides translation functionality to all components via React Context.
targets:
  - ../src/context/LanguageContext.tsx
---

# Language Context

Provides a single source of truth for the active language (`en` | `pt`) and a translation function `t(key)` available to any component in the tree.

```ts
type Language = 'en' | 'pt';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}
```

## Initialisation

- Defaults to browser locale on first render: `'pt'` if `navigator.language` starts with `'pt'`, otherwise `'en'`.
- Exposes `LanguageProvider` that must wrap the application root.
- Exposes `useLanguage` hook that throws an error when called outside a `LanguageProvider`.

## Translation

- `t(key)` returns the translated string for the current `lang`.
- If the key is missing, `t(key)` returns the raw key string unchanged (no silent `undefined`).

## Dictionary

All translations live inside `LanguageContext.tsx` as an `I18nDictionary` typed record. Each entry has both `en` and `pt` values. No external JSON files are required.
