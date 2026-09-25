# Invisible — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject vanishes completely—no body, no clothing—leaving only their movement or impact behind. Feels ghostly, surreal, and perfect for sci-fi, stealth, or supernatural edits.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5 | `28a4d3d3-613a-4796-9f40-f68c7646ded5` | -249 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=28a4d3d3-613a-4796-9f40-f68c7646ded5 |
| https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e | `30802f12-3db4-49b8-b0ab-6f0c737b252e` | 62 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=30802f12-3db4-49b8-b0ab-6f0c737b252e |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man walking down a hallway vanishes completely; only the swinging door shows he passed.
```

Use it as: upload a start image that matches the scene, select motion preset **Invisible**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Levitation + Invisible](levitation-plus-invisible.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/e76b45a9-3894-4693-942b-26bcb2fd65d9.webp (320×568)
- Card preview, variant `30802f12`: https://d1xarpci4ikg0w.cloudfront.net/d26502c3-8339-4f42-b5bb-22ed63d526e0.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/e0b99fee-85b3-4e2d-9aff-c1e510903bb8 | https://static.higgsfield.ai/e0b99fee-85b3-4e2d-9aff-c1e510903bb8.mp4 | https://static.higgsfield.ai/e0b99fee-85b3-4e2d-9aff-c1e510903bb8.webp | https://d1xarpci4ikg0w.cloudfront.net/136b1bbe-11fb-4eb4-8bf7-5d20da508b17.webp (320×320) |
| 2 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/88632ff5-9288-4276-be93-4239279a6272 | https://static.higgsfield.ai/88632ff5-9288-4276-be93-4239279a6272.mp4 | https://static.higgsfield.ai/88632ff5-9288-4276-be93-4239279a6272.webp | https://d1xarpci4ikg0w.cloudfront.net/6dc727e3-3e58-433f-b4b8-4dbed9fe936b.webp (320×182) |
| 3 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/7bf7d100-3d99-4ab7-8041-92dd9f8c6825 | https://static.higgsfield.ai/7bf7d100-3d99-4ab7-8041-92dd9f8c6825.mp4 | https://static.higgsfield.ai/7bf7d100-3d99-4ab7-8041-92dd9f8c6825.webp | https://d1xarpci4ikg0w.cloudfront.net/1277ebbe-26b3-47c8-8447-a3ab2d854666.webp (320×182) |
| 4 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/37d99472-55cc-4e36-bfcd-1db465a34dea | https://static.higgsfield.ai/37d99472-55cc-4e36-bfcd-1db465a34dea.mp4 | https://static.higgsfield.ai/37d99472-55cc-4e36-bfcd-1db465a34dea.webp | https://d1xarpci4ikg0w.cloudfront.net/aabba5ec-ed51-4ff7-99ed-89ab6399e43a.webp (320×182) |
| 5 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/90492058-2e36-44dc-9868-414d0646ff05 | https://static.higgsfield.ai/90492058-2e36-44dc-9868-414d0646ff05.mp4 | https://static.higgsfield.ai/90492058-2e36-44dc-9868-414d0646ff05.webp | https://d1xarpci4ikg0w.cloudfront.net/c70c6f76-3efb-4f90-b7dd-2ccb16698e46.webp (320×182) |
| 6 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/b09d82b0-f4cd-414e-9ea6-1744b9962915 | https://static.higgsfield.ai/b09d82b0-f4cd-414e-9ea6-1744b9962915.mp4 | https://static.higgsfield.ai/b09d82b0-f4cd-414e-9ea6-1744b9962915.webp | https://d1xarpci4ikg0w.cloudfront.net/bb18318d-04c3-43e4-adb5-56fd754d9230.webp (320×182) |
| 7 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/9bdfa0e7-4702-46d2-b891-22fd4e770164 | https://static.higgsfield.ai/9bdfa0e7-4702-46d2-b891-22fd4e770164.mp4 | https://static.higgsfield.ai/9bdfa0e7-4702-46d2-b891-22fd4e770164.webp | https://d1xarpci4ikg0w.cloudfront.net/59657e45-9919-4bc2-95df-6d63c6f02dce.webp (320×182) |
| 8 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/932344cd-e67b-4fe4-a47c-3e731acb4057 | https://static.higgsfield.ai/932344cd-e67b-4fe4-a47c-3e731acb4057.mp4 | https://static.higgsfield.ai/932344cd-e67b-4fe4-a47c-3e731acb4057.webp | https://d1xarpci4ikg0w.cloudfront.net/e7b5ee5d-238a-40dd-9bcb-06e586d2f58a.webp (320×182) |

Source pages: https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5, https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e. Crawled 2026-09.
