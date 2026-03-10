---
name: Resume Page
description: The main resume document component — assembles the full CV layout by mapping over a typed data model; no content is hardcoded in JSX.
targets:
  - ../src/components/ResumePage.tsx
  - ../src/index.css
---

# Resume Page

Renders the complete one-page résumé inside a fixed-dimension white `.page` container that mimics an A4 / letter sheet.

## Layout

- Top-level container is `.page`: `210mm × min-height 297mm`, centred on a light-grey body background, with a subtle drop shadow.
- An HTML `<table>` provides three layout rows:
  - `<thead>` — Header stripe with the `header_logo.png` image edge-to-edge.
  - `<tbody>` — Main content area housing all resume sections.
  - `<tfoot>` — A fixed-height spacer row to reserve bottom space for the footer illustration.
- `.footer-container` sits inside `.page` (after the table) and holds `footer_illustration.png`.
- The candidate name (`t('NAME')`) and a `.horizontal-line` divider are rendered above the section list.

## Data-Driven Sections

Sections are driven by `resumeSections` imported from `src/data/resumeData.ts`. `ResumePage` maps over the array and renders a `ResumeSection` per item.

```tsx
{resumeSections.map((section) => (
    <ResumeSection key={section.titleKey} section={section} />
))}
```

`ResumeSection` is an internal switch component that dispatches to the appropriate primitive:

| `section.type` | Rendered as |
|---|---|
| `paragraph` | `<SectionHeader>` + `<p>` |
| `bullets`   | `<SectionHeader>` + `<BulletList>` |
| `experience`| `<SectionHeader>` + one `<ExperienceEntryBlock>` per entry |

**No content is hardcoded in this file.** To add, remove, or reorder a section, edit `resumeData.ts` only.

## Required Sections (order defined in `resumeData.ts`)

1. **About Me** — brief professional summary paragraph.
2. **Main Qualifications** — bullet list of key stack skills.
3. **Professional Experience** — timeline of employers with dates, job titles, and bullet activities/projects.
4. **Academic Background** — list of degrees / post-grad qualifications.
5. **Certifications** — list of professional certificates.
6. **Awards and Publications** — notable recognitions.
7. **Languages** — spoken languages and proficiency levels.

## Print / PDF

- `@media print` resets `@page` margins and hides the body background.
- `.page` loses its shadow and fixed size becomes `100%` width during print.
- `.footer-container` switches to `position: fixed; bottom: 0` so the illustration always anchors to the bottom of the printed page.
- The language toggle is hidden from print output.
