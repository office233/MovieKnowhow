# Paint Splash — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The object or subject transforms into a burst of liquid paint—splattering outward in colorful, fluid motion. Surreal and expressive, ideal for artistic transitions or dramatic visual effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f | `a1ee18d7-3705-4218-a05e-45b31badf04f` | -247 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a1ee18d7-3705-4218-a05e-45b31badf04f |
| https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29 | `e520303a-70ed-4438-9306-830528fbdd29` | -198 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e520303a-70ed-4438-9306-830528fbdd29 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A ballerina leaps and bursts into a splash of vivid liquid paint.
```

Use it as: upload a start image that matches the scene, select motion preset **Paint Splash**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ee836b6c-3584-4337-908f-ecbeca10987b.webp (320×432)
- Card preview, variant `e520303a`: https://d1xarpci4ikg0w.cloudfront.net/baad4cb3-9579-462f-a588-b492ec0ada96.webp

### Sample videos (17; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/2896d5ff-531d-4d35-9b04-7ee69227ebbf | https://static.higgsfield.ai/2896d5ff-531d-4d35-9b04-7ee69227ebbf.mp4 | https://static.higgsfield.ai/2896d5ff-531d-4d35-9b04-7ee69227ebbf.webp | https://d1xarpci4ikg0w.cloudfront.net/2a5d98dc-3227-454f-8f31-05be0561d3ee.webp (320×432) |
| 2 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb | https://static.higgsfield.ai/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb.mp4 | https://static.higgsfield.ai/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb.webp | https://d1xarpci4ikg0w.cloudfront.net/61e62d45-6d89-4ddb-81cf-0e3e5cd825d2.webp (320×432) |
| 3 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04 | https://static.higgsfield.ai/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04.mp4 | https://static.higgsfield.ai/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04.webp | https://d1xarpci4ikg0w.cloudfront.net/7f252368-5a51-46d2-bd4f-7329640ab2fb.webp (320×432) |
| 4 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/a15a77f5-cff4-4b3a-a4d4-0df86065c937 | https://static.higgsfield.ai/a15a77f5-cff4-4b3a-a4d4-0df86065c937.mp4 | https://static.higgsfield.ai/a15a77f5-cff4-4b3a-a4d4-0df86065c937.webp | https://d1xarpci4ikg0w.cloudfront.net/6989adf9-eb00-4b8d-8677-ae3faa65f3ec.webp (320×432) |
| 5 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/262f46b2-87c2-494b-9252-1b9dde91d925 | https://static.higgsfield.ai/262f46b2-87c2-494b-9252-1b9dde91d925.mp4 | https://static.higgsfield.ai/262f46b2-87c2-494b-9252-1b9dde91d925.webp | https://d1xarpci4ikg0w.cloudfront.net/0d6c66ca-cf2e-431d-ace4-a29ee2563e28.webp (320×432) |
| 6 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/e6d5bd16-9193-40f3-bb12-d5a62170b239 | https://static.higgsfield.ai/e6d5bd16-9193-40f3-bb12-d5a62170b239.mp4 | https://static.higgsfield.ai/e6d5bd16-9193-40f3-bb12-d5a62170b239.webp | https://d1xarpci4ikg0w.cloudfront.net/36088762-85a9-4f89-9af1-45460289551d.webp (320×304) |
| 7 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/c11e6191-1cea-427d-83ea-cc0c71d0d0e4 | https://static.higgsfield.ai/c11e6191-1cea-427d-83ea-cc0c71d0d0e4.mp4 | https://static.higgsfield.ai/c11e6191-1cea-427d-83ea-cc0c71d0d0e4.webp | https://d1xarpci4ikg0w.cloudfront.net/7c5e4dda-2398-4098-8f23-d8059465e271.webp (320×432) |
| 8 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/abbdd700-8d01-434a-9708-119282eebd79 | https://static.higgsfield.ai/abbdd700-8d01-434a-9708-119282eebd79.mp4 | https://static.higgsfield.ai/abbdd700-8d01-434a-9708-119282eebd79.webp | https://d1xarpci4ikg0w.cloudfront.net/e69d6060-1f0c-403a-bd3c-5ceca756fc0c.webp (320×432) |
| 9 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/3896b7b7-36ac-44b5-a94a-0e69e30742fb | https://static.higgsfield.ai/3896b7b7-36ac-44b5-a94a-0e69e30742fb.mp4 | https://static.higgsfield.ai/3896b7b7-36ac-44b5-a94a-0e69e30742fb.webp | https://d1xarpci4ikg0w.cloudfront.net/93e4d01d-3a6e-482c-8ed4-cda5f95cf7bd.webp (320×432) |
| 10 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/5526214d-f261-4cac-96cd-9ebc6dcf55d7 | https://static.higgsfield.ai/5526214d-f261-4cac-96cd-9ebc6dcf55d7.mp4 | https://static.higgsfield.ai/5526214d-f261-4cac-96cd-9ebc6dcf55d7.webp | https://d1xarpci4ikg0w.cloudfront.net/9b833df3-04c5-43bf-81f4-b630e24993ee.webp (320×432) |
| 11 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/6594748c-0f5d-4fa9-a562-4ace95682b48 | https://static.higgsfield.ai/6594748c-0f5d-4fa9-a562-4ace95682b48.mp4 | https://static.higgsfield.ai/6594748c-0f5d-4fa9-a562-4ace95682b48.webp | https://d1xarpci4ikg0w.cloudfront.net/7670ffc8-c403-450f-aceb-e4459621380f.webp (320×236) |
| 12 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/33ab84b7-4a95-4d81-81c0-66bfce145bd3 | https://static.higgsfield.ai/33ab84b7-4a95-4d81-81c0-66bfce145bd3.mp4 | https://static.higgsfield.ai/33ab84b7-4a95-4d81-81c0-66bfce145bd3.webp | https://d1xarpci4ikg0w.cloudfront.net/7523a8f6-8980-4ea0-87c3-bd5a02058385.webp (320×210) |
| 13 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/3ef198f3-2096-4817-912d-d5276c91b9d6 | https://static.higgsfield.ai/3ef198f3-2096-4817-912d-d5276c91b9d6.mp4 | https://static.higgsfield.ai/3ef198f3-2096-4817-912d-d5276c91b9d6.webp | https://d1xarpci4ikg0w.cloudfront.net/5672aa27-a940-4d76-84f0-b46575629e37.webp (320×320) |
| 14 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/8fa39c4b-441a-4b6c-adba-810429539c84 | https://static.higgsfield.ai/8fa39c4b-441a-4b6c-adba-810429539c84.mp4 | https://static.higgsfield.ai/8fa39c4b-441a-4b6c-adba-810429539c84.webp | https://d1xarpci4ikg0w.cloudfront.net/5f71976b-6314-4d23-a9fc-ccf185dd2b04.webp (320×236) |
| 15 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/b212a790-a2d6-4e10-afb4-159d480fda8a | https://static.higgsfield.ai/b212a790-a2d6-4e10-afb4-159d480fda8a.mp4 | https://static.higgsfield.ai/b212a790-a2d6-4e10-afb4-159d480fda8a.webp | https://d1xarpci4ikg0w.cloudfront.net/9c220b1b-b575-4eef-8692-70c3f89bd465.webp (320×432) |
| 16 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/1bd058fd-1638-4e4e-bd70-9251622cc2cb | https://static.higgsfield.ai/1bd058fd-1638-4e4e-bd70-9251622cc2cb.mp4 | https://static.higgsfield.ai/1bd058fd-1638-4e4e-bd70-9251622cc2cb.webp | https://d1xarpci4ikg0w.cloudfront.net/53e0fc26-a355-408f-b036-4c86da2c4c35.webp (320×320) |
| 17 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95 | https://static.higgsfield.ai/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95.mp4 | https://static.higgsfield.ai/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95.webp | https://d1xarpci4ikg0w.cloudfront.net/d443f6ce-05af-4970-ad0e-2d917f47033a.webp (320×320) |

Source pages: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f, https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29. Crawled 2026-09.
