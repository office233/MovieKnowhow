# Unboxing (`/unboxing`)

- **output:** image
- **description:** An open box revealing its contents.
- **source:** `get_preset_instructions(preset:'/unboxing')`, captured 2026-09-25 (verbatim below).

## Recipe (verbatim)

### Higgsfield preset: /unboxing

Visible effect: An open box revealing its contents.

Preserve: Exact product shape, proportions, packaging, colors, logo, and readable label details from the supplied image.

Use the attached image, or the image in the immediately relevant chat context, as the authoritative product reference. No written creative brief is needed for this preset.

Reuse an already confirmed media ID. Otherwise call `media_upload_widget` for the source image as the only tool in that turn, and resume this same preset after the user uploads. If no image is available, use that upload surface rather than asking for another chat attachment. Do not inspect local upload directories or use shell to read attachments. For a user-supplied HTTPS media URL, call `media_import_url` and use the returned media ID. Upload each source only once.

Call `generate_image` with arguments inside `params`, the source media as role `image`, the generation parameters below, and the master prompt unchanged. Wait for submitted jobs with `jobs_wait` (`timeout_seconds:15`); return the completed image through the generation widget. For multiple independent outputs use the full batch protocol and one `show_generation_by_ids` for the completed set.

Explicit user format/count requests override preset defaults; square means `1:1`, landscape `16:9`, and full-screen Reel or Story `9:16`. Generate one final output unless the user requested more.

Execute the selected recipe without another workflow, a plan, prompt choices, model discovery, or extra confirmation. This explicit preset takes precedence over similarly named thumbnail, product-photography or UGC workflows. Keep production instructions and master prompts out of the assistant's response; describe only the visible effect if asked. Report a failure concisely instead of inventing a different preset.

Preserve explicit `use_unlim` requests according to the full generation tools: opt in only on request and keep the flag on rejection; never silently retry with credits. OpenAI-only free attempts (`use_free_gens`) are unavailable here. If the user requires one, explain the limitation without submitting a paid replacement. Do not change a locked model or settings just to make a free request succeed.

#### Generation parameters

```json
{
  "model": "gpt_image_2_5",
  "aspect_ratio": "3:4",
  "resolution": "2k",
  "quality": "high",
  "variant": "sunburst"
}
```

#### Master prompt

Create a polished commercial still using the supplied image as the authoritative product reference. Show a premium package-opening still with the product revealed inside or beside its box. Preserve the supplied packaging design, make inserts and folds physically plausible, and avoid inventing accessories not implied by the source. If the reference photo was taken from a tilted or elevated angle, do not inherit that viewpoint: straighten the product and compose it cleanly and level within the frame, in the natural orientation for this shot. Preserve the exact product identity, silhouette, proportions, materials, colors, logo placement, packaging structure, and readable label text. If people or hands appear, keep anatomy natural and product scale believable. Do not add unsupported claims, prices, extra logos, watermarks, or unrelated products. Deliver a photorealistic, production-ready image with clean edges and coherent shadows.

## From open-source

> Added 2026-09-25 from the cloned open-source repos (`../../opensource/`, MIT). The bundled recipe's own master prompt is now captured verbatim above (`## Recipe (verbatim)`). These are equivalent or related open-source presets and templates, with exact phrasing.

- **Marketing Studio video preset: Unboxing** (slug `ugc_unboxing`; hook and setting picklists supported). "Top-down or 3/4 angle; hands in frame; tactile close-ups on reveal moments"; accepts a custom packaging image in the additional-asset slot. Source: higgsfield-ai-prompt-skill · `skills/higgsfield-marketing-studio/SKILL.md` (line 92) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L92
- **Concept seeds:** trio reveal, ribbon-pull solo drop, subscription-box drop. Source: higgsfield-ai-prompt-skill · `skills/higgsfield-content-factory/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-content-factory/SKILL.md
- **Unboxing Journey (15 s):** 0–2 s sealed box reveal · 2–5 s opening · 5–12 s product reveal and rotation · 12–15 s CTA. Source: higgsfield-skills · `skills/07-ecommerce-ad/references/ad-craft.md` (line 221) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/ad-craft.md#L221
- **Hook 5: Unboxing Reveal.** Source: higgsfield-skills · `skills/07-ecommerce-ad/references/hooks.md` (line 69) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/hooks.md#L69
