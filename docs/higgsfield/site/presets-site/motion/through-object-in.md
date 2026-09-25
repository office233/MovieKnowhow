# Through Object In — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** Moves the camera inward through an object to focus on the subject behind it. Perfect for creative reveals and smooth, immersive transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb | `2b353671-da2e-4c9e-841d-b7af200ceadb` | 45 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2b353671-da2e-4c9e-841d-b7af200ceadb |
| https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520 | `ae7a6c18-0db0-4c17-817b-fe73b10da520` | 87 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ae7a6c18-0db0-4c17-817b-fe73b10da520 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera pushes through the leaves of a hedge to reveal a couple dancing in a secret garden.
```

Use it as: upload a start image that matches the scene, select motion preset **Through Object In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera passes through a narrow object into a new space · **Best use:** Reveal secrets, creative transition · **Models:** "Camera glides Through Object In — through the keyhole into the dusty study" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5f8bba0a-5214-4f15-a430-56d28406ac92.webp (320×254)
- Card preview, variant `ae7a6c18`: https://d1xarpci4ikg0w.cloudfront.net/e064ec58-6932-486e-9899-c7a7a3057b87.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/8991674c-b083-41b0-b08f-1cea15afe394 | https://static.higgsfield.ai/8991674c-b083-41b0-b08f-1cea15afe394.mp4 | https://static.higgsfield.ai/8991674c-b083-41b0-b08f-1cea15afe394.webp | https://d1xarpci4ikg0w.cloudfront.net/0bd42f35-ac27-4d5e-81a9-814a271ddf85.webp (320×180) |
| 2 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/9de79919-6afe-4f2c-851f-194f1df3714b | https://static.higgsfield.ai/9de79919-6afe-4f2c-851f-194f1df3714b.mp4 | https://static.higgsfield.ai/9de79919-6afe-4f2c-851f-194f1df3714b.webp | https://d1xarpci4ikg0w.cloudfront.net/ef9bf805-e414-4858-8f81-87185eed0139.webp (320×132) |
| 3 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/6cadca24-7d44-49d4-a0dd-429926708a75 | https://static.higgsfield.ai/6cadca24-7d44-49d4-a0dd-429926708a75.mp4 | https://static.higgsfield.ai/6cadca24-7d44-49d4-a0dd-429926708a75.webp | https://d1xarpci4ikg0w.cloudfront.net/275a4cb9-b7b2-4f34-a2db-d8eb9dc963ac.webp (320×174) |
| 4 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ded68630-a55f-4bde-a7d1-5a5190cc15e2 | https://static.higgsfield.ai/ded68630-a55f-4bde-a7d1-5a5190cc15e2.mp4 | https://static.higgsfield.ai/ded68630-a55f-4bde-a7d1-5a5190cc15e2.webp | https://d1xarpci4ikg0w.cloudfront.net/e5edd7fb-855a-4d95-a5fd-bef1714a74d3.webp (320×242) |
| 5 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/1de648d1-dc77-4460-a258-345e60c3b6f8 | https://static.higgsfield.ai/1de648d1-dc77-4460-a258-345e60c3b6f8.mp4 | https://static.higgsfield.ai/1de648d1-dc77-4460-a258-345e60c3b6f8.webp | https://d1xarpci4ikg0w.cloudfront.net/d422f549-1cc5-4096-a03e-2712567c3483.webp (320×182) |
| 6 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/432d5b5c-f065-4d59-bb2f-fce673b55aeb | https://static.higgsfield.ai/432d5b5c-f065-4d59-bb2f-fce673b55aeb.mp4 | https://static.higgsfield.ai/432d5b5c-f065-4d59-bb2f-fce673b55aeb.webp | https://d1xarpci4ikg0w.cloudfront.net/b0aad333-dda2-45fb-bd9e-1845ad54de03.webp (320×182) |
| 7 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/5d282128-6f18-41a6-b5da-c52b3c2075de | https://static.higgsfield.ai/5d282128-6f18-41a6-b5da-c52b3c2075de.mp4 | https://static.higgsfield.ai/5d282128-6f18-41a6-b5da-c52b3c2075de.webp | https://d1xarpci4ikg0w.cloudfront.net/a42d996d-0aac-40e3-be47-325636ab11c8.webp (320×242) |
| 8 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/97d567a2-c100-48cd-87e3-eb53f1841446 | https://static.higgsfield.ai/97d567a2-c100-48cd-87e3-eb53f1841446.mp4 | https://static.higgsfield.ai/97d567a2-c100-48cd-87e3-eb53f1841446.webp | https://d1xarpci4ikg0w.cloudfront.net/9bf3f60e-ea53-4b0c-afe6-a71666a9aec0.webp (320×182) |
| 9 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ccb5d386-16a7-407f-9465-1d478d24cdce | https://static.higgsfield.ai/ccb5d386-16a7-407f-9465-1d478d24cdce.mp4 | https://static.higgsfield.ai/ccb5d386-16a7-407f-9465-1d478d24cdce.webp | https://d1xarpci4ikg0w.cloudfront.net/75008bcf-7f93-4120-b68d-52b685af60d4.webp (320×218) |
| 10 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ab74806f-d19a-4ff0-8833-8b98eb00b4c9 | https://static.higgsfield.ai/ab74806f-d19a-4ff0-8833-8b98eb00b4c9.mp4 | https://static.higgsfield.ai/ab74806f-d19a-4ff0-8833-8b98eb00b4c9.webp | https://d1xarpci4ikg0w.cloudfront.net/9f78f945-6594-404e-8d96-cbd8c071cf38.webp (320×210) |
| 11 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/3095e3b6-b619-465f-87e8-e0fa02bc09d9 | https://static.higgsfield.ai/3095e3b6-b619-465f-87e8-e0fa02bc09d9.mp4 | https://static.higgsfield.ai/3095e3b6-b619-465f-87e8-e0fa02bc09d9.webp | https://d1xarpci4ikg0w.cloudfront.net/91df6ee7-a0e2-43cf-90a0-4c42f0868b07.webp (320×210) |

Source pages: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb, https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520. Crawled 2026-09.
