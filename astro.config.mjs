import { defineConfig } from 'astro/config';

// SITE and BASE come from the environment so the exact same code can deploy
// to GitHub Pages (maybe under /repo-name) and to Vercel (at the root).
export default defineConfig({
  site: process.env.SITE ?? 'https://sh4shv4t.github.io',
  base: process.env.BASE ?? '/',
  // Pages load before you click: links are prefetched on hover.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
