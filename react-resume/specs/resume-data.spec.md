---
name: Resume Data Model
description: Typed content model and i18n dictionary that drive all resume section rendering — no content is hardcoded in components.
targets:
  - ../src/data/resumeData.ts
  - ../src/data/i18n.ts
---

# Resume Data Model

Two files in `src/data/` form the content layer of the application. Components are content-agnostic; they receive typed data and resolve translations at render time.

## `i18n.ts`

Exports `I18nDictionary` (interface) and `i18nData` (the full translation map).

```ts
interface I18nDictionary {
  [key: string]: { en: string; pt: string };
}
export const i18nData: I18nDictionary = { ... }
```

- Every translatable string in the application **must** have an entry here.
- Keys follow `SCREAMING_SNAKE_CASE` by convention.
- Adding a new string requires adding a key with both `en` and `pt` values.
- `LanguageContext` imports from this file; nothing else needs to change to support a new key.

## `resumeData.ts`

Exports the **section type union** and the **`resumeSections` array**.

```ts
type AnySection = BulletSection | ExperienceSection | ParagraphSection

export const resumeSections: AnySection[] = [ ... ]
```

### Section Types

| `type`       | Required fields                                            | Renders via              |
|--------------|------------------------------------------------------------|--------------------------|
| `paragraph`  | `titleKey`, `contentKey`                                   | `SectionHeader` + `<p>`  |
| `bullets`    | `titleKey`, `items: string[]`                              | `SectionHeader` + `BulletList` |
| `experience` | `titleKey`, `entries: ExperienceEntry[]`                   | `SectionHeader` + `ExperienceEntryBlock` |

### `ExperienceEntry` Shape

```ts
interface ExperienceEntry {
  companyKey: string;
  roles: { titleKey: string; dateKey: string }[];
  activitiesHeadingKey: string;
  activities: string[];
  projectsHeadingKey?: string;   // optional sub-heading
  projects?: string[];           // optional project bullets
}
```

## Adding a New Section

1. Add translation keys to `i18n.ts` (`SCREAMING_SNAKE_CASE`, `en` + `pt`).
2. Append a new section object to `resumeSections` in `resumeData.ts` using the appropriate `type`.
3. `ResumePage` picks it up automatically — no JSX changes required.
