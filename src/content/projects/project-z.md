---
title: Project Z
tagline: A self-hostable platform for agents that get better over time. Run, see, learn.
year: 2026
status: building
tags: [agents, observability, evals, RL]
featured: true
order: 3
---

Project Z is a platform for agents that improve themselves. Three parts:

- **Run**: durable multi-agent orchestration that can go 24/7
- **See**: tracing plus an LLM judge that tries to point at the exact step where a run went wrong
- **Learn**: feeding what the judge finds back into the agents, starting with memory and prompt evolution and going all the way up to fine-tuning and RL

The bit I spend most of my time on is **See**. Finding the first wrong step works okay on short runs but falls apart on long, messy ones, so I'm working on better ways to represent agent traces (as graphs of who did what with which data) so the judge has something solid to reason over.
