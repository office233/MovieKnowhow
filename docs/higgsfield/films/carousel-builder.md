# carousel-builder (Charlie Dove / Charlie Automates) — theme-locked Instagram carousel: Higgsfield images + Canva MCP

- Upstream: <https://github.com/charlesdove977/carousel-builder> (commit `0dce953`)
- Local copy: [`../opensource/carousel-builder/`](../opensource/carousel-builder/)
- License: MIT © 2026 Charles J Dove
- Type: **ad / social static creative** (Claude Code plugin: `/carousel` + `/short-form-caption`). Not video — included because it is the clearest example of **reference-anchored consistency across a multi-asset deck**.

## What it makes

An 8-page on-brand Instagram carousel: 4:5 cover (Higgsfield image + Canva text overlay), 4–6 pillar slides with 16:9 "glow" images, a Gift/CTA slide, a static closer, plus the post caption. Reference deck in `examples/template-reference/1.png…8.png`.

## Pipeline (`commands/carousel.md`)

1. Load the framework (the 8-page template anatomy and **character budgets measured from the live Canva text boxes**).
2. Interview the topic → 4–6 pillars + CTA keyword + deliverable.
3. **Cover**: "Generate **3–4 cover options** with `mcp__higgsfield__generate_image`, `model: "nano_banana_2"`, `aspect_ratio: "4:5"`, `resolution: "2k"`, `count: 1` each, fired in ONE parallel batch [...] Generate a **clean visual with NO baked-in text**". User picks one → it becomes the **theme anchor**; upload via `media_upload` → `media_confirm` to get its `media_id`.
4. Draft all copy with live character counts; user approves (no image gen yet).
5. **Pillar images, theme-locked** (verbatim): "EVERY pillar image is ALWAYS based off the approved slide-1 cover. Pass the chosen cover's anchor `media_id` from Step 2 as `medias: [{value: "<cover_media_id>", role: "image"}]` on EVERY pillar generation, and end each prompt with: *"Match the color palette, lighting, art style, texture, and mood of the provided reference image exactly. Change only the subject described above."*" All pillars fired in one parallel batch, 16:9, `nano_banana_2`, 2k.
6. Canva: `copy-design` of the template → `start-editing-transaction` → `replace_text` span-by-span (preserving the orange highlight word) → `update_fill` to swap images so the frame glow survives → preview → commit.
7. `/short-form-caption`: CTA on line one, exactly 5 hashtags, 500-char cap, no em dashes.

## Higgsfield notes (verbatim)

- "`generate_image` is async → returns a `job_id`; poll `job_status` with `sync: true` (waits up to ~25s server-side). Final image at `results.rawUrl`."
- "Reference image flow: `media_upload` → `media_confirm` → pass `media_id` via `medias: [{value, role: "image"}]` on the specific generation."
- "Avoid the literal word "macOS" in prompts (trips content filters) — say "desktop app UI"."
- "Generate clean images — **do NOT bake a glow into the prompt.** The glow is a Canva element effect on the template's image frame".

## Costs

Not stated.

## Lessons (transferable to video ads)

- Approve one **anchor image** first, then pass it as a reference to every later generation with an explicit "match palette/lighting/style/texture/mood, change only the subject" clause.
- Keep text out of generated images; put typography in the editor/template.
- Fire all sibling generations in one parallel batch for consistency.
