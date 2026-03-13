---
name: Template Selection
description: Specification for multiple resume templates and the ability to switch between them.
targets:
  - ../src/context/TemplateContext.tsx
  - ../src/components/TemplateToggle.tsx
  - ../src/components/ResumePage.tsx
  - ../src/components/templates/*.tsx
---

# Template Selection Specification

## Goal
The application must support multiple resume layouts (templates) and allow the user to switch between them. The choice should be persistent across browser sessions.

## Requirements

### 1. Template Types
- The application must support at least two templates:
  - **Radix**: The default layout (as per current implementation).
  - **Modern**: A new layout with a distinct visual structure (e.g., sidebar for contact/skills).

### 2. State Management
- A new `TemplateContext` must be created to manage the active template.
- The default value must be `radix`.
- The active template must be persisted to `localStorage` under the key `resume_template`.

### 3. Template Switcher Component
- A `TemplateToggle` component must be provided to allow switching between templates.
- This component must be:
  - Accessible via the UI.
  - Hidden when printing (using `@media print`).
  - Visually consistent with other toggles (Language/Theme).

### 4. Template Implementation
- Individual templates must be implemented as separate components in `src/components/templates/`.
- All templates must consume the same data from `resumeData.ts` and `i18n.ts`. No hardcoded content is allowed within template components.
- Templates must support the language switching feature.

### 5. Integration
- `ResumePage.tsx` must act as a controller that renders the selected template based on the current context state.
