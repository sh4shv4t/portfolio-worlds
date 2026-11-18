// Everything personal about the site lives here. Empty links are hidden.
export const site = {
  name: 'Shashvat Singh',
  short: 'Shashvat',
  description:
    'Shashvat Singh builds things around LLM agents and does research on what goes on inside reasoning models.',
  links: {
    github: 'https://github.com/sh4shv4t',
    medium: 'https://medium.com/@shashvat.k.singh.16',
    kaggle: '', // TODO: your Kaggle profile URL
    linkedin: '', // TODO: your LinkedIn URL
    email: '', // TODO: decide if you want an email on a public site
  },
  mediumFeed: 'https://medium.com/feed/@shashvat.k.singh.16',
};

// Prefixes a path with the deploy base, so links work on /portfolio/ and on /.
export const url = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
