---
title: What if malloc filled holes from the top?
question: When there's a free hole between two blocks, allocators place new data from the bottom of it. What happens if you start from the top instead?
status: writing up
year: 2026
tags: [systems, memory allocators, C]
order: 3
---

An OS class question I couldn't let go of. I built a Python simulator, a C benchmark and captured real malloc traces to find out. Short version: top-down placement does fewer free-list writes, but it's not a free lunch. Write-up coming on Medium.
