# portfolio-worlds

My personal site, plus five very different "worlds" the home page could be. Astro 5, static output, no client framework.

## The worlds (`/drafts`)

| Draft | Path | What it is |
| --- | --- | --- |
| Workbench | `/drafts/workbench` | An engineering student's bench at 3 AM in pixel art. Each shelf cubby is a project with its own animation, the about me is post-it notes. Aim at things and the room dims around them, click and the tape fast-forwards. |
| Grimoire | `/drafts/grimoire` | A leather-bound codex you page through. Projects are tarot cards, research is a codex with marginalia, merged PRs are wax seals. |
| Mainframe | `/drafts/mainframe` | A 1980s amber-phosphor workstation on one screen. Boots up, then you drive it with the arrow keys and F1 to F4. |
| Neon Alley | `/drafts/neon-alley` | A side-scrolling rainy neo-Tokyo alley you walk through. Projects are shopfronts, research threads are cans in a vending machine. |
| Studio Stage | `/drafts/studio` | The first workbench sketch: a lit game-dev set with wireframes and missing textures left in on purpose. |

The plain version of the site (Projects, Research, Writing, OSS pages) lives at `/`.

## Credits

All third-party assets are CC0 (public domain). Credit isn't required but they deserve it:

- City backgrounds, props and the alley character: [Warped City](https://ansimuz.itch.io/warped-city) by ansimuz
- Wood, plywood, metal and leather textures: [Poly Haven](https://polyhaven.com)
- UI sounds: [Interface Sounds](https://kenney.nl/assets/interface-sounds) by Kenney

Raw downloaded packs are kept out of the repo (`assets-src/` is gitignored); only the processed files in `public/assets/` ship.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

Needs Node 22.12 or newer (Astro 5). Latest Astro (6) wants Node 22.23+, so upgrade Node before bumping Astro.

## Where things live

| What | Where |
| --- | --- |
| Name, links, Medium feed | `src/site.ts` |
| Theme (colors, fonts, radius, motion timings) | `src/styles/tokens.css` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Research threads | `src/content/research/` |
| OSS PRs and competitions | `src/data/oss.ts` |
| Writing | pulled from Medium RSS at build time (`src/lib/medium.ts`) |
| Page layout, nav, footer | `src/layouts/Base.astro`, `src/components/` |

Add a project: drop a new `.md` in `src/content/projects/` with the same frontmatter as the others. `featured: true` puts it on the home page, `draft: true` hides it.

## Motion

- Page to page: Astro view transitions (`<ClientRouter />`), project titles morph from the card into the project page
- Hero words rise in on load
- Anything with `class="reveal"` fades up when scrolled into view (`--i` staggers it)
- Cards glow under the pointer
- Links prefetch on hover so navigation feels instant
- All of it switches off under `prefers-reduced-motion`

## Deploy

Same code, two targets. `SITE` and `BASE` env vars control the URL.

**GitHub Pages**: push to a repo, then Settings > Pages > Source: GitHub Actions. `.github/workflows/deploy.yml` builds on every push to `main` and once a week (to pick up new Medium posts). Name the repo `sh4shv4t.github.io` to serve from the root, otherwise set `BASE` in the workflow to `/<repo-name>`.

**Vercel**: import the repo, Astro is detected automatically. Set `SITE` to the Vercel URL in project env vars. Leave `BASE` unset.

## Before going public

- [ ] Errand, tracebank and Project Z repos are private: check you're fine describing them publicly
- [ ] Research blurbs (BTP, homogeneity paper): check what's okay to say before publication, and that collaborators are fine being named
- [ ] Fill the TODOs in `src/site.ts` (Kaggle, LinkedIn, email) and `src/data/oss.ts`
- [ ] Swap in the real theme in `src/styles/tokens.css`
