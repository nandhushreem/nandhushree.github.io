# Nandhushree M — AI & GenAI Portfolio

A responsive React + TypeScript portfolio with a portrait-led landing page, scroll-linked parallax, viewport reveals, filterable projects, animated focus tabs, native accessible project dialogs, and a persistent light/dark theme.

## Development

Requires Node.js 22.12+.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

## Structure

- `src/content.ts` — identity, résumé, projects, focus areas, and sourced milestones.
- `src/App.tsx` — page sections, navigation, filtering, theme, and tab state.
- `src/components/` — reusable viewport reveal, project art, and native dialog.
- `src/hooks/useSmoothScroll.ts` — Lenis lifecycle with reduced-motion support.
- `src/styles.css` — design tokens, themes, responsive layouts, and motion fallbacks.
- `public/portrait.webp` — optimized professional portrait generated from the owner-supplied photo.
- `tests/content.test.mjs` — content, evidence, asset, and link-contract checks.

## Deployment

One GitHub Actions workflow runs tests and a TypeScript-checked Vite production build, uploads **only `dist`**, and deploys to the existing GitHub Pages environment on each push to `main`. Relative Vite asset paths support both a repository subpath and a custom domain. Pages must use GitHub Actions as its source, as in the original repository setup.

No server, API keys, or private configuration required. The legacy static portfolio has been removed. The app uses `src/` and `public/` only.

## Content integrity

AI/GenAI is presented as a learning focus, not an unverified employment history. Research and community entries link to their public evidence. Experiment entries are explicitly ongoing explorations, not released products. No invented certifications, metrics, dates, or testimonials are included. The original résumé link is retained; contact uses the verified GitHub profile because the original portfolio did not supply a public email or LinkedIn URL.

Public sources reviewed on 28 October 2026:
- https://paladuguganeshnaidu.tech/sihresearch.html
- https://www.linkedin.com/posts/paladuguganeshnaidu_cybersecurity-socialengineering-livedemo-activity-7437865623851876354-0A5B

Motion handles reveal, layout, tab, and scroll transitions. Lenis enhances wheel/anchor scrolling while touch retains native behavior. Reduced-motion preferences disable parallax, continuous animations, and smooth scrolling. Native dialogs provide focus trapping, Escape close, and focus restoration. Focus tabs support arrow-key navigation.

## Six-page site and indexing

Home, About, Projects, Research, Learning and Contact are emitted as real directories with `index.html` files. URLs have no file extensions. The build prerenders React content for crawlers and no-JavaScript reading, then React enables interactive motion. Each page has its own title, description, canonical URL, Open Graph metadata and Person/WebPage JSON-LD. The canonical origin is `https://nandhushreem.tech` in `src/Site.tsx`. The build emits a six-URL sitemap, robots.txt and a noindex 404. Submit `/sitemap.xml` in Google Search Console after domain verification. Indexing and rankings are controlled by search engines.

Contact destinations were supplied by the owner. No HackerRank profile was supplied or reliably found. Ganesh’s CloudCostAI, NmapAnalyzer, GENAI API and TuxNest are explicitly credited learning references; no unverified contribution claim is made. FPGA was not confirmed as a separate project in the supplied sources.

Run `node scripts/check-pages.mjs` after a production build to verify all static routes and metadata.
