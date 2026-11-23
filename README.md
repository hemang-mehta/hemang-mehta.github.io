# Hemang Mehta — Portfolio

Personal portfolio built with **Next.js 14, React, TypeScript and Tailwind CSS**, exported as a static site and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text lives in `content/`. You don't need to touch the components:

| File | What's in it |
| --- | --- |
| `content/profile.ts` | Theme (light/dark), name, tagline, about, email, links, core stack |
| `content/projects.ts` | Projects; mark one `featured: true` for the hero tile |
| `content/timeline.ts` | Education, experience, certifications |
| `content/skills.ts` | Skill groups |

Anything in `[BRACKETS]` is a placeholder still to fill in. Put your résumé at `public/resume.pdf`.

**Theme:** set `site.theme` in `content/profile.ts` to `"light"` (Template C) or `"dark"` (Template C2).
**Accent colour:** change `--accent` in `app/globals.css`.

## Deploy to GitHub Pages

1. Create a repo named `hemang-mehta.github.io` and push this project to `main`.
2. In the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. Each push to `main` builds the site and publishes it to https://hemang-mehta.github.io.

It also deploys to Vercel or Netlify with no config (build command `npm run build`, output folder `out`).

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static export to `./out` |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm start` | Serve the built `./out` folder |