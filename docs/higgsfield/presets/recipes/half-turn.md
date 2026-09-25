# Half Turn (`/half-turn`)

- **output:** video
- **description:** A smooth 180-degree product rotation.
- **source:** `get_preset_instructions(preset:'/half-turn')`, captured 2026-09-25 (verbatim below).

## Recipe (verbatim)

### Higgsfield preset: /half-turn

Visible effect: A smooth 180-degree product rotation.

Preserve: Exact product identity, shape, proportions, packaging, colors, logo placement, and readable label details throughout every frame.

Use the attached image, or the image in the immediately relevant chat context, as the authoritative product reference. No written creative brief is needed for this preset.

Reuse an already confirmed media ID. Otherwise call `media_upload_widget` for the source image as the only tool in that turn, and resume this same preset after the user uploads. If no image is available, use that upload surface rather than asking for another chat attachment. Do not inspect local upload directories or use shell to read attachments. For a user-supplied HTTPS media URL, call `media_import_url` and use the returned media ID. Upload each source only once.

1. Prepare one hidden start frame with `generate_image_batch`: one request at stable index `0`, model `nano_banana_pro`, role `image`, the uploaded source, the preprocessing master prompt below unchanged, and the final requested aspect ratio.
2. Wait with `jobs_wait` (`timeout_seconds:15`) until the preprocessing job is completed. Stop on failure; do not submit a video with a pending or failed input.
3. Use the completed preprocessing image as `start_image` in `generate_video`. Put arguments inside `params`, use the generation parameters below and the video master prompt unchanged. Preserve the prepared background color unless the preset explicitly requires a temporary lighting or material effect.
4. If the tool returns `preset_recommendation` without submitting a job, keep this selected recipe. Retry the same arguments with `declined_preset_id` set to the returned recommended preset ID. Do not select the suggested preset, change the master prompt, or retry an ambiguous submission. This exception applies only to the explicit recommendation response, not transport errors.
5. Wait for the accepted video job with `jobs_wait`. Return the final video through the generation widget; the preprocessing image is an internal dependency, not a separate deliverable.

Explicit user format/count requests override preset defaults; square means `1:1`, landscape `16:9`, and full-screen Reel or Story `9:16`. Generate one final output unless the user requested more.

Execute the selected recipe without another workflow, a plan, prompt choices, model discovery, or extra confirmation. This explicit preset takes precedence over similarly named thumbnail, product-photography or UGC workflows. Keep production instructions and master prompts out of the assistant's response; describe only the visible effect if asked. Report a failure concisely instead of inventing a different preset.

Preserve explicit `use_unlim` requests according to the full generation tools: opt in only on request and keep the flag on rejection; never silently retry with credits. OpenAI-only free attempts (`use_free_gens`) are unavailable here. If the user requires one, explain the limitation without submitting a paid replacement. Do not change a locked model or settings just to make a free request succeed.

#### Generation parameters

```json
{
  "model": "seedance_2_0",
  "aspect_ratio": "3:4",
  "duration": 6,
  "resolution": "1080p",
  "mode": "std",
  "bitrate_mode": "high",
  "generate_audio": false
}
```

#### Master prompt

Create a 6-second silent premium product video using the supplied image as the authoritative starting frame and product reference. Keep the camera fixed while the product rotates smoothly through 180 degrees, beginning from the supplied view and ending on a clean complementary angle. Use gentle ease-in and ease-out with stable light. Preserve the exact product identity, silhouette, proportions, materials, colors, logo placement, packaging structure, and readable label text in every frame. Keep motion physically plausible, temporal consistency high, edges stable, and lighting coherent. Do not morph, melt, duplicate, replace, or redesign the product. Do not add people, hands, unsupported claims, extra logos, captions, watermarks, or unrelated products. End on a clean, stable product frame suitable for social media.

#### Preprocessing master prompt

Create a clean, premium product-video start frame from the supplied image, treating the visible product as the authoritative reference. Isolate the product and place it centered, upright, fully visible, and uncropped on a seamless single-color studio background with a matching floor-to-wall transition. Select the background hue directly from a distinctive visible color on the product, packaging, label, logo, or material. Prefer a recognizable brand or accent color over neutral black, white, or gray when one is visible. Use a slightly lighter or darker value of that same sampled hue only when needed to maintain clear edge separation and legibility; do not introduce an unrelated color. Scale the product to occupy approximately 60–70% of the frame while leaving balanced motion-safe space around it. Add soft controlled studio lighting and one physically plausible grounding shadow. Preserve the exact product identity, silhouette, proportions, construction, materials, colors, packaging, logo placement, and all readable label text. Do not redesign, simplify, restyle, relabel, crop, rotate, open, duplicate, or deform the product. Do not add props, people, hands, scenery, patterns, gradients, text, captions, borders, watermarks, or extra products. Deliver a photorealistic, stable, high-detail frame suitable as the first frame of a product animation.

## From open-source

> Added 2026-09-25 from the cloned open-source repos (`../../opensource/`, MIT). The bundled recipe's own prompt template was **not** captured. These are equivalent or related open-source presets and templates, with exact phrasing.

- **Reliable phrase:** `smooth 180-degree orbit at eye level, constant distance`. Source: higgsfield-ai-prompt-skill · `skills/higgsfield-camera/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-camera/SKILL.md
- **Orbit Reveal hook:** "Camera orbits 180 degrees around subject over 3s. Each 45 degrees reveals new environmental element. Consistent distance from subject." Source: ai-video-generator-claude · `skills/01-viral-hook/SKILL.md` — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/01-viral-hook/SKILL.md
- **Partial rotations:** Source: higgsfield-skills · `skills/09-product-360/references/angles.md` (line 63) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/09-product-360/references/angles.md#L63
