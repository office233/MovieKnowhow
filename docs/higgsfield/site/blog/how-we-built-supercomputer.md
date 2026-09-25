# Inside Higgsfield #2: How We Built Supercomputer

- Source: https://higgsfield.ai/blog/how-we-built-supercomputer
- Byline: Higgsfield · Sep 16, 2026 · 12 mins · Last updated: 1w ago
- Prompts extracted: 0

## Notes

**Topic:** Inside Higgsfield #2 — how Supercomputer was built (Sep 16 2026). No prompts.
- Motivation: creatives ran an LLM on one screen and Higgsfield on another; prompts had to carry assets, references and model-specific structure. Rigid A->B->C prompt-improvement pipelines couldn't predict user behaviour.
- Seedance 2.0's **@-reference tagging** inspired **Elements** (reusable characters, locations, props).
- Precursors: AI Director (Cinema Studio 3.5, knew assets/format but couldn't generate), Canvas agent (node workflows from language).
- Built own harness (~6 weeks) to coordinate models, tools, visual context, recovery from failures. Two hard problems: **visual context** (e.g., save a character as "heroine", later "heroine holding a cat" resolves to the right asset without reloading all images/video into the LLM) and **taste** — solved with **Skills** = human know-how (how to prompt Seedance vs Kling, how a workflow should run), written by creatives/prompt engineers (used for Marketing Studio and a YouTube feature).
- **Free Mode:** text interaction costs 0 credits; image/video/audio generation uses credits.
- Supercomputer now also runs inside Cinema Studio and Canvas; added Projects (shared context), Apps, Games (shipped in two days), GPT-6 Astra.

