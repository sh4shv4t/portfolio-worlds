import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.number(),
    status: z.enum(['shipped', 'building', 'paused', 'archived']),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(), // leave out for private repos
    demo: z.string().url().optional(),
    featured: z.boolean().default(false), // shows on the home page
    order: z.number().default(100), // lower comes first
    draft: z.boolean().default(false), // true hides it everywhere
  }),
});

// One Markdown file per research thread in src/content/research.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    status: z.enum(['early', 'in progress', 'writing up', 'published']),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, research };
