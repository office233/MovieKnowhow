# Hero Shot (`/hero-shot`)

- **output:** image
- **description:** The product as the hero of the frame.
- **source:** `get_preset_instructions(preset:'/hero-shot')`, captured 2026-09-25 (verbatim below).

## Recipe (verbatim)

### Higgsfield preset: /hero-shot

Visible effect: The product as the hero of the frame.

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

Create a polished commercial still using the supplied image as the authoritative product reference. Place the product large and dominant, standing on a clean seamless studio surface whose tone and texture complement the product's palette, against a softly graded backdrop with generous negative space. Light it like a premium advertising shoot: one large soft key from the upper front-left, a subtle rim light for edge separation, controlled speculars that follow the product's real materials, and one coherent soft shadow grounding it. Shoot at product eye level with a slight hero low angle and a moderate telephoto perspective, keeping the entire product in crisp focus. Add no props, scenery, or set dressing beyond this surface and backdrop unless they are present in the reference. If the reference photo was taken from a tilted or elevated angle, do not inherit that viewpoint: straighten the product and compose it cleanly and level within the frame, in the natural orientation for this shot. Preserve the exact product identity, silhouette, proportions, materials, colors, logo placement, packaging structure, and readable label text — reproduce every printed element, including stickers, fine print, and secondary marks, exactly as in the reference; never invent, translate, or substitute words or characters, and keep unreadable glyphs as faithful shapes. If people or hands appear, keep anatomy natural and product scale believable. Do not add unsupported claims, prices, extra logos, watermarks, or unrelated products. Deliver a photorealistic, production-ready image with clean edges and coherent shadows.

## From open-source

> Added 2026-09-25 from the cloned open-source repos (`../../opensource/`, MIT). The bundled recipe's own master prompt is now captured verbatim above (`## Recipe (verbatim)`). These are equivalent or related open-source presets and templates, with exact phrasing.

- **Staging: Hero Shot (Isolated).** Source: higgsfield-skills · `skills/07-ecommerce-ad/references/ad-craft.md` (line 49) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/ad-craft.md#L49
- **Cinema Studio optical stack (Product / packshot):** Premium Large Format Digital + Clinical Sharp Prime, 50mm, f/11 ("Everything sharp, no optical distraction"). Source: higgsfield-ai-prompt-skill · `skills/higgsfield-cinema/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md
- **Style recipe (product/commercial):** it resolves on a hero packshot (product in one third, dark negative space, slow dolly, particle drift, hold). Source: higgsfield-ai-prompt-skill · `skills/higgsfield-style/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md
- **Hook: Product Drop with Dramatic Impact:** "Dark matte background. Product descends into frame with motion blur, catching dramatic side-light mid-drop. Soft glow emanates as it lands centre frame." Source: higgsfield-skills · `skills/07-ecommerce-ad/references/hooks.md` (line 22) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/hooks.md#L22
