# How to Make AI Videos as a Beginner: A Complete Guide for 2026

- Source: https://higgsfield.ai/blog/how-to-make-ai-videos-beginners-guide
- Byline: Higgsfield · Jun 20, 2026 · 10 minutes · Last updated: 3w ago
- Prompts extracted: 1

## Notes

**Topic:** beginner's guide to AI video (Jun 20 2026).

**Model picker (2026):** Veo 3.1 — most realistic, video+audio in one pass, up to 8 s, ~$2.50 per 8 s 720p; Kling 3.0 — realistic people, lip sync 8+ languages, up to 15 s, ~$0.80; Runway Gen-4.5 — multi-shot narrative via Director Mode, 10 s, no native audio, ~$2.00; Wan 2.6 — first-and-last-frame control, instruction editing, open source (Apache 2.0), up to 15 s, ~$0.75; Minimax Hailuo 2.3 — fastest (30-90 s renders), best physics for food/liquid/fabric/product, 6-10 s, ~$0.70.

**Prompt = subject + action + setting + camera** (+ mood/style). Replace vague adjectives ("beautiful") with concrete details. 1-3 sentences; a focused 2-sentence prompt beats a vague paragraph. Stuck? Describe the idea to Claude/ChatGPT and ask for a video prompt.
**Source image for I2V:** sharp, even light, front-facing, uncluttered, >= 1024x1024 (side angles, dark light, busy backgrounds hurt every model).

**Workflow:** pick I2V (specific people/products) vs T2V (abstract, landscapes) -> write like a director -> match model to shot -> 720p first -> review the full clip (problems at 5-8 s) -> one change per iteration.
**Beginner mistakes:** vague prompts; T2V for a specific person; 1080p tests; changing several variables; judging only the first frame.
**Limits:** 6-10 s typical clip length (chain clips); each generation starts cold (use Soul ID or references); text motion is imprecise (use first/last frames); **two people interacting in close-up break on every model — generate separately and composite if precision matters**; Runway/Hailuo lack native audio.

## Prompts (verbatim)

### P1. What Is AI Video Generation and How Does It Work?

- Model / settings: any (example of a strong beginner prompt)
- Use-case: cinematic film scene
- Context: Camera: how the shot is framed

~~~~text
A woman in a red coat walks through a rainy Tokyo street at night, close-up, slow motion, neon reflections on wet pavement.
~~~~

