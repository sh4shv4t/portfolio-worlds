---
title: tracebank
tagline: A plugin that collects consented, long-horizon coding agent traces, scrubbed on your own machine.
year: 2026
status: building
tags: [agents, data, TypeScript, Bun]
featured: true
order: 2
---

Coding agents now run for hours on real tasks, and those long traces are super useful data. Thing is, there's no clean, consented way to collect them.

tracebank is a plugin for coding agents (Claude Code first, OpenCode and Cursor next) that captures your sessions locally, scrubs secrets and personal stuff on your machine and lets you review everything before anything leaves.

## Where it's at

Local capture for Claude Code works. Next up is the scrubber and a review UI, then the other agents.
