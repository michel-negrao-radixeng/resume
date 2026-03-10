---
name: Section Components
description: Reusable, content-agnostic UI primitives that render resume sections from typed props and i18n keys.
targets:
  - ../src/components/SectionHeader.tsx
  - ../src/components/BulletList.tsx
  - ../src/components/ExperienceEntryBlock.tsx
---

# Section Components

Three reusable components form the building blocks of the resume layout. None contain hardcoded strings — all text is resolved through `LanguageContext.t()`.

## `SectionHeader`

Renders the purple-bordered, uppercase section title box.

```tsx
<SectionHeader titleKey={string} />
```

- `titleKey` — i18n key whose translation is displayed inside the box.
- Styles applied: `.section-box` CSS class.
- Can be used in any section, independently of its sibling content component.

## `BulletList`

Renders a `<ul>` of translated items.

```tsx
<BulletList items={string[]} className?="skills-list" | "activities-list" />
```

- `items` — array of i18n keys; each resolves to a translated `<li>`.
- `className` — optional override (default: `"skills-list"`).
  - `"skills-list"` — used for qualifications, education, certifications, etc. (square prefix, no left indent).
  - `"activities-list"` — used inside experience entries (indented, for longer lines).
- Changing `className` alters visual style only; component logic is identical.

## `ExperienceEntryBlock`

Renders a complete employer block.

```tsx
<ExperienceEntryBlock entry={ExperienceEntry} withTopMargin?={boolean} />
```

- `entry` — typed `ExperienceEntry` object from `resumeData.ts` (see resume-data.spec.md).
- `withTopMargin` — when `true`, adds `marginTop: 25px` to the company header (use for entries after the first).
- Internally uses `BulletList` with `className="activities-list"` for both activities and projects.

### Rendering contract

1. Company name header (`.company-header` class).
2. One `<div className="job-title-row">` per `role` — title text followed by a `<span className="job-date">` for the date.
3. Activities heading (`.activities-heading`).
4. Activities `BulletList`.
5. If `projectsHeadingKey` and `projects` are present: projects heading + projects `BulletList`.
