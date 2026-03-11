---
name: GitHub Pages Deployment
description: CI/CD pipeline that automatically builds and publishes the resume app to GitHub Pages on every push to main. Also supports manual deployment via npm run deploy.
targets:
  - ../vite.config.js
  - ../package.json
  - ../.github/workflows/deploy.yml
---

# GitHub Pages Deployment

## Target

The application is deployed to GitHub Pages at:

```
https://<github-username>.github.io/resume/
```

The repository name is assumed to be `resume`. The `base` path in `vite.config.js` must match the repository name.

## Vite Configuration

`vite.config.js` must set:

```js
base: '/resume/'
```

This ensures all asset references (`/header_logo.png`, JS chunks, etc.) are prefixed correctly when served from the sub-path.

## npm Scripts

| Script      | Command                          | Purpose                           |
|-------------|----------------------------------|-----------------------------------|
| `build`     | `vite build`                     | Produces `dist/` (already exists) |
| `predeploy` | `npm run build`                  | Auto-runs before `deploy`         |
| `deploy`    | `gh-pages -d dist`               | Pushes `dist/` to `gh-pages` branch |

`gh-pages` is added as a devDependency.

## CI/CD: GitHub Actions

File: `.github/workflows/deploy.yml`

Trigger: push to `main` branch.

Steps:
1. Checkout the repository.
2. Set up Node.js (LTS).
3. Run `npm ci` to install dependencies.
4. Run `npm run build` to produce `dist/`.
5. Deploy `dist/` to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

The workflow requires `GITHUB_TOKEN` (automatically available in Actions — no secret setup needed).

## GitHub Repository Settings Required

After the first deployment, enable GitHub Pages in the repository settings:
- **Source**: Deploy from branch
- **Branch**: `gh-pages`
- **Folder**: `/ (root)`

## Manual Deployment

Without CI, run from `react-resume/`:

```bash
npm run deploy
```

This triggers `predeploy` (build) then `gh-pages -d dist`.

## Asset Path Verification

After build, `dist/index.html` script/link `src` attributes should all start with `/resume/`.
