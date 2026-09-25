# Crane Over The Head — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera rises smoothly above the subject using a crane, revealing the surroundings or adding drama. Perfect for epic moments or scene transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7 | `f77584f2-7442-4128-91b5-095829b108c7` | 40 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f77584f2-7442-4128-91b5-095829b108c7 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A hiker stands at a cliff edge looking out; the camera rises over her head to reveal the vast canyon below.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Over The Head**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Overhead god-like view, directly above · **Best use:** Vulnerability, surveillance, choreography · **Models:** — · **Phrase/template:** "Crane Over The Head — top-down view of the crowd" · **Tips:** See recipe [topdown-dive](recipes/topdown-dive.md)

## Related presets

- **Mixes that use this preset:** [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md)
- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/3889c0ef-0a7c-492e-ae99-bdbfb4405856.webp (320×180)

### Sample videos (12)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/97cf9e35-eda5-4346-953c-b6d15af1b443 | https://static.higgsfield.ai/97cf9e35-eda5-4346-953c-b6d15af1b443.mp4 | https://static.higgsfield.ai/97cf9e35-eda5-4346-953c-b6d15af1b443.webp | https://d1xarpci4ikg0w.cloudfront.net/ebd48af6-440f-434f-8b2c-93312f56f321.webp (320×486) |
| 2 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf | https://static.higgsfield.ai/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf.mp4 | https://static.higgsfield.ai/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf.webp | https://d1xarpci4ikg0w.cloudfront.net/b6a2daa8-6270-4b5c-8f61-e5be484339e4.webp (320×398) |
| 3 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/b04c6456-834f-4b91-9e3e-9253b806b894 | https://static.higgsfield.ai/b04c6456-834f-4b91-9e3e-9253b806b894.mp4 | https://static.higgsfield.ai/b04c6456-834f-4b91-9e3e-9253b806b894.webp | https://d1xarpci4ikg0w.cloudfront.net/9fcb95eb-e038-46c4-9fb1-79a580e13fc3.webp (320×398) |
| 4 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/2f5517f9-a322-4355-b468-a48b79d694f9 | https://static.higgsfield.ai/2f5517f9-a322-4355-b468-a48b79d694f9.mp4 | https://static.higgsfield.ai/2f5517f9-a322-4355-b468-a48b79d694f9.webp | https://d1xarpci4ikg0w.cloudfront.net/a92d3ef8-f059-41fa-b7fe-eac7a80f8628.webp (320×424) |
| 5 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/5c282e44-62ab-4130-bd99-161c0f232409 | https://static.higgsfield.ai/5c282e44-62ab-4130-bd99-161c0f232409.mp4 | https://static.higgsfield.ai/5c282e44-62ab-4130-bd99-161c0f232409.webp | https://d1xarpci4ikg0w.cloudfront.net/f9b1c267-c208-4a42-b72e-451053411dd8.webp (320×424) |
| 6 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7 | https://static.higgsfield.ai/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7.mp4 | https://static.higgsfield.ai/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7.webp | https://d1xarpci4ikg0w.cloudfront.net/3168cf8b-82b7-44e2-81ea-d786bc21c84b.webp (320×320) |
| 7 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/0370526b-6053-4128-bc87-107d8a92677e | https://static.higgsfield.ai/0370526b-6053-4128-bc87-107d8a92677e.mp4 | https://static.higgsfield.ai/0370526b-6053-4128-bc87-107d8a92677e.webp | https://d1xarpci4ikg0w.cloudfront.net/82e29cd5-bc4a-4210-b95b-2407d93ef3ba.webp (320×424) |
| 8 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/a28a446a-b96a-4d3f-8c5e-e827beea6ee5 | https://static.higgsfield.ai/a28a446a-b96a-4d3f-8c5e-e827beea6ee5.mp4 | https://static.higgsfield.ai/a28a446a-b96a-4d3f-8c5e-e827beea6ee5.webp | https://d1xarpci4ikg0w.cloudfront.net/55abe955-0f05-4380-8271-94e5dd0139f9.webp (320×424) |
| 9 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/7079d313-48f8-4e6e-9a20-46701338f199 | https://static.higgsfield.ai/7079d313-48f8-4e6e-9a20-46701338f199.mp4 | https://static.higgsfield.ai/7079d313-48f8-4e6e-9a20-46701338f199.webp | https://d1xarpci4ikg0w.cloudfront.net/e2dc0b5d-db35-4404-b042-6e7f062c357c.webp (320×424) |
| 10 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/a26c8727-7868-4734-b854-bbdee45c2f38 | https://static.higgsfield.ai/a26c8727-7868-4734-b854-bbdee45c2f38.mp4 | https://static.higgsfield.ai/a26c8727-7868-4734-b854-bbdee45c2f38.webp | https://d1xarpci4ikg0w.cloudfront.net/18b68bf2-5b29-4728-a89b-debafea4b639.webp (320×182) |
| 11 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/7d1b34bf-45b2-43ca-8219-c06b67ea8363 | https://static.higgsfield.ai/7d1b34bf-45b2-43ca-8219-c06b67ea8363.mp4 | https://static.higgsfield.ai/7d1b34bf-45b2-43ca-8219-c06b67ea8363.webp | https://d1xarpci4ikg0w.cloudfront.net/0f105721-5f14-442e-9822-da38fa7b6168.webp (320×182) |
| 12 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/aecae0f4-1f6b-46b2-8f31-5db4c758b46a | https://static.higgsfield.ai/aecae0f4-1f6b-46b2-8f31-5db4c758b46a.mp4 | https://static.higgsfield.ai/aecae0f4-1f6b-46b2-8f31-5db4c758b46a.webp | https://d1xarpci4ikg0w.cloudfront.net/0324a628-dd30-43c4-9a33-b4205e1aa4c0.webp (320×180) |

Source pages: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `aecae0f4-1f6b-46b2-8f31-5db4c758b46a`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/17e36309-03cf-4f52-88f3-15595b4211c6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7100e3dd-469f-4555-b61d-c240860e1b6d.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/aecae0f4-1f6b-46b2-8f31-5db4c758b46a

```text
A man walking in front of flame, he casually doing rap perfomance, starring at the camera. He fitted in urban black streetwear clothes. Camera movement doing crane over the head technique. Cinematic and vibrant atmosphere.
```

- **Sample `7d1b34bf-45b2-43ca-8219-c06b67ea8363`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2528×1440
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fc84a695-6940-4705-9114-d8975fca21ba.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/01894adb-7389-4de6-bc0b-184f7f8eb785.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/7d1b34bf-45b2-43ca-8219-c06b67ea8363

```text
A young couple relaxes next to a vintage olive-green SUV parked in a peaceful open field. The guy leans coolly against the side of the car in casual denim and a tan overshirt, white oval sunglasses giving him a retro edge. The girl sits cross-legged on the hood, wearing a plaid button-up and yellow-tinted sunglasses, her posture relaxed and wind gently brushing through her hair.

They glance at each other with soft smiles, a subtle shift in expression that hints at shared memories or inside jokes. Their energy is effortless, grounded in quiet affection and comfort with one another.

Natural lighting gives the scene a warm, golden softness, with long shadows stretching behind the car. The open field in the background adds to the calm, romantic atmosphere.

The mood is serene, nostalgic, and intimate—like a still frame from a road trip romance. The styling blends vintage Americana with modern ease, creating a cinematic snapshot of youth, love, and freedom.
```

- **Sample `a26c8727-7868-4734-b854-bbdee45c2f38`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2528×1440
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1d376be4-3fa1-4fed-95dc-883dbf613527.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4be02cab-8160-434a-9e7d-4f7382ab220f.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/a26c8727-7868-4734-b854-bbdee45c2f38

```text
Crane over the head of a girl as she looks to the camera 
```

- **Sample `7079d313-48f8-4e6e-9a20-46701338f199`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1664×2208
  - input image: https://d1xarpci4ikg0w.cloudfront.net/28785434-2c5b-4954-bbeb-48781e1c9367.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/97312620-5980-4668-9c87-728880bf78dd.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/7079d313-48f8-4e6e-9a20-46701338f199

```text
Crane over the head of a man as he smiles straight to the camera
```

- **Sample `a28a446a-b96a-4d3f-8c5e-e827beea6ee5`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1664×2208
  - input image: https://d1xarpci4ikg0w.cloudfront.net/46f15a16-121a-4863-8284-024a772c9ef6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1c268755-051c-4749-b948-e5ecffe62ffd.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/a28a446a-b96a-4d3f-8c5e-e827beea6ee5

```text
He slowly drinks from the bottle, leaning against the car
```

- **Sample `0370526b-6053-4128-bc87-107d8a92677e`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1664×2208
  - input image: https://d1xarpci4ikg0w.cloudfront.net/29cc3316-6761-44c7-8c74-1612fe69435b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/117c345c-ce82-4a33-9bf7-4abb4e5cf8fd.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/0370526b-6053-4128-bc87-107d8a92677e

```text
Crane over the head of a man as he sits confident in his chair
```

- **Sample `9d5fd172-b4c2-4ffd-8bed-c1a49accffe7`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1920
  - input image: https://d1xarpci4ikg0w.cloudfront.net/aa591371-9f50-4ea3-9944-7820a88185ac.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f6e1eb2d-9115-4e87-b4c7-5a812820dc4b.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7

```text
Crane over the head of a man as he looks over his shoulder 
```

- **Sample `5c282e44-62ab-4130-bd99-161c0f232409`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1664×2208
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d7b33d2f-9452-4fc7-b401-b301a6eda9fb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cd7f4756-405f-4931-ba21-e201b1957362.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/5c282e44-62ab-4130-bd99-161c0f232409

```text
Crane over the head of a man as he looks over to the camera 
```

- **Sample `2f5517f9-a322-4355-b468-a48b79d694f9`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1664×2208
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fec7a4a9-d2a6-423c-8725-002d9f076ec7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/441428ee-85b5-4d78-ba97-55d679e3159a.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/2f5517f9-a322-4355-b468-a48b79d694f9

```text
He looks up at the camera and follows it with his gaze
```

- **Sample `b04c6456-834f-4b91-9e3e-9253b806b894`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 848×1056
  - input image: https://d1xarpci4ikg0w.cloudfront.net/11e1b7ec-70df-406e-9c4c-08dacbf6f699.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/296dd41b-1856-432f-9fa0-bc3f01a22072.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/b04c6456-834f-4b91-9e3e-9253b806b894

```text
Crane over the head as girl follows the viewer's eyes with her gaze, carefully adjusting her glasses
```

- **Sample `85fd2ee1-3422-4ba8-902f-ba0c782fa2bf`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 848×1056
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f9e2416e-bd13-4bf7-8dc7-bbcfc3ca9d30.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9fcfb9e8-c746-4e8c-b857-6cd09a491250.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf

```text
Crane over the head as man stands calm. The water behind him moves slowly.
```

- **Sample `97cf9e35-eda5-4346-953c-b6d15af1b443`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6c08da3c-689b-4653-9f4b-aea5e143be96.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4cda4ac4-552e-4529-acb6-b736f93be1ca.mp4
  - page: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/97cf9e35-eda5-4346-953c-b6d15af1b443

```text
Crane over the head as man stands
```
