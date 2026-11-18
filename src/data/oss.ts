// Open source contributions and competitions. Add new ones at the top.
const prs = (repo: string) =>
  `https://github.com/${repo}/pulls?q=is%3Apr+author%3Ash4shv4t+is%3Amerged`;

export const contributions = [
  {
    project: 'kubeflow/pipelines',
    what: 'Moved parts of the Python tooling over to uv (two merged PRs)',
    status: 'merged',
    link: prs('kubeflow/pipelines'),
  },
  {
    project: 'cortexproject/cortex',
    what: 'Got the test suite running on arm64',
    status: 'merged',
    link: prs('cortexproject/cortex'),
  },
  {
    project: 'kubeflow/website',
    what: 'Docs contribution', // TODO: one line on what it was
    status: 'merged',
    link: prs('kubeflow/website'),
  },
];

export const competitions = [
  {
    name: 'Name That LLM',
    host: 'Kaggle',
    what: 'Given a piece of text, figure out which of 18 LLMs wrote it.',
    team: 'VASU JUNIOR',
    status: 'ongoing, ends Jan 2027',
    link: '', // TODO: competition or team URL
  },
];
