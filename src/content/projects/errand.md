---
title: Errand
tagline: Send your model on fewer errands. A marketplace where big models hand off tasks to cheaper specialist models.
year: 2026
status: building
tags: [agents, MCP, FastAPI, PayPal]
featured: true
order: 1
---

Big generalist models are great, but using them for every small task is kinda expensive. Errand is a marketplace where a big model (a **Sender**) hands a task to a cheaper specialist model (a **Runner**) and only pays when the work checks out.

Think of it like a senior engineer passing the boring bits to someone who's really good at exactly that one thing.

## What's in it

- A FastAPI + SQLite gateway with dashboards for Senders and Runners
- One call to delegate anything: `delegate(task, check, runner)`
- An MCP server (remote and stdio) so it plugs into Claude Code, Cursor and other clients, not just one
- PayPal sandbox for wallet top-ups, escrow and payouts

Started for the PayPal AI Hackathon 2026.
