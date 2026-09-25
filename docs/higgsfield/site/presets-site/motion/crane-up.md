# Crane Up — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Lifts the camera smoothly upward using a crane, revealing the scene below or creating an epic rising shot. Great for transitions, reveals, or emotional build-up.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e | `2da63d27-94e0-48e0-8e2e-936274bd176e` | 60 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2da63d27-94e0-48e0-8e2e-936274bd176e |
| https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc | `45d7f47f-2c7b-4c5e-84b7-943758a39dcc` | -211 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=45d7f47f-2c7b-4c5e-84b7-943758a39dcc |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A knight kneels in a misty field before battle; the camera cranes up to reveal thousands of soldiers lined up behind him.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera rises from ground or subject level · **Best use:** Reveal scope; intimate to grand · **Models:** Sora 2† · **Phrase/template:** "Crane Up from the soldier's hands to the war-torn landscape" · precise: "Camera rises vertically 30 feet over 4 seconds. Subject remains visible in lower frame… Tilt down slightly to maintain subject connection throughout rise." · **Tips:** + 360 Orbit = epic reveal of scale. Maps to Cinema Studio **Jib Up**. See recipe [crane-reveal](recipes/crane-reveal.md).

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/bbf52504-e94e-47ab-b380-8728f9ad0a87.webp (320×320)
- Card preview, variant `45d7f47f`: https://d1xarpci4ikg0w.cloudfront.net/a2da3319-c132-47bc-91e5-514d056d540c.webp

### Sample videos (5; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/36999a65-d883-4154-b00d-c280b0c077d9 | https://static.higgsfield.ai/36999a65-d883-4154-b00d-c280b0c077d9.mp4 | https://static.higgsfield.ai/36999a65-d883-4154-b00d-c280b0c077d9.webp | https://d1xarpci4ikg0w.cloudfront.net/544534ba-103b-4f96-8029-038922cc2b7b.webp (320×180) |
| 2 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/02951165-8abe-4431-95e8-b75cd717a3d9 | https://static.higgsfield.ai/02951165-8abe-4431-95e8-b75cd717a3d9.mp4 | https://static.higgsfield.ai/02951165-8abe-4431-95e8-b75cd717a3d9.webp | https://d1xarpci4ikg0w.cloudfront.net/9c3010c1-5813-4474-9226-f9f235505951.webp (320×242) |
| 3 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/31ec1561-fb2b-44cc-b963-a2c3ec665125 | https://static.higgsfield.ai/31ec1561-fb2b-44cc-b963-a2c3ec665125.mp4 | https://static.higgsfield.ai/31ec1561-fb2b-44cc-b963-a2c3ec665125.webp | https://d1xarpci4ikg0w.cloudfront.net/b34cc79d-3677-4790-87b5-abd92a714b09.webp (320×320) |
| 4 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/c8015b49-9ddc-49de-baf9-9b96681791d8 | https://static.higgsfield.ai/c8015b49-9ddc-49de-baf9-9b96681791d8.mp4 | https://static.higgsfield.ai/c8015b49-9ddc-49de-baf9-9b96681791d8.webp | https://d1xarpci4ikg0w.cloudfront.net/29eb367e-0dc8-4de9-83c7-9dc928f79dd6.webp (320×242) |
| 5 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/c40ca2eb-9b01-430b-8ab7-5452a1ba19db | https://static.higgsfield.ai/c40ca2eb-9b01-430b-8ab7-5452a1ba19db.mp4 | https://static.higgsfield.ai/c40ca2eb-9b01-430b-8ab7-5452a1ba19db.webp | https://d1xarpci4ikg0w.cloudfront.net/1ddf6654-86d4-4ff5-88d5-f726ce21614f.webp (320×138) |

Source pages: https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e, https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc. Crawled 2026-09.
