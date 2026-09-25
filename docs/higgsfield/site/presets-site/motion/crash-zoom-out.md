# Crash Zoom Out — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Rapidly zooms out from the subject to reveal the full scene or create a sense of surprise, urgency, or comic effect. Great for dramatic reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee | `3972c090-a448-4fd4-b8f0-cb71b4b523ee` | -210 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=3972c090-a448-4fd4-b8f0-cb71b4b523ee |
| https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62 | `d5cf181f-b75b-4827-8614-f08953b92e62` | 73 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d5cf181f-b75b-4827-8614-f08953b92e62 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A chef proudly lifts a tiny cupcake; crash zoom out reveals the entire kitchen is on fire behind him.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Rapid, sudden zoom away · **Best use:** Disconnection, sudden wider context · **Models:** — · **Phrase/template:** "Crash Zoom Out revealing the battlefield" · **Tips:** —

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2c74d502-ebb4-478a-8e3d-cf09dfb5a40e.webp (320×240)
- Card preview, variant `d5cf181f`: https://d1xarpci4ikg0w.cloudfront.net/0a366c4f-c829-4cb9-815e-dd6f6ec24ce1.webp

### Sample videos (20; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/8ae5bd45-2176-4de4-9aec-45264a87b953 | https://static.higgsfield.ai/8ae5bd45-2176-4de4-9aec-45264a87b953.mp4 | https://static.higgsfield.ai/8ae5bd45-2176-4de4-9aec-45264a87b953.webp | https://d1xarpci4ikg0w.cloudfront.net/8e17d7f3-4ec2-48ca-8134-78822b638e15.webp (320×176) |
| 2 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/87c085cc-0cbd-43f6-b52a-09ea76b0de5b | https://static.higgsfield.ai/87c085cc-0cbd-43f6-b52a-09ea76b0de5b.mp4 | https://static.higgsfield.ai/87c085cc-0cbd-43f6-b52a-09ea76b0de5b.webp | https://d1xarpci4ikg0w.cloudfront.net/4794a371-5797-460b-b8b4-ec5c362de55a.webp (320×174) |
| 3 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/91c74b1b-dc59-4a3b-814b-3ee1e7914395 | https://static.higgsfield.ai/91c74b1b-dc59-4a3b-814b-3ee1e7914395.mp4 | https://static.higgsfield.ai/91c74b1b-dc59-4a3b-814b-3ee1e7914395.webp | https://d1xarpci4ikg0w.cloudfront.net/2ff103e4-33f5-45ac-b6f2-cf16f245600b.webp (320×180) |
| 4 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/82853236-976c-470e-ac71-0c6e6dd14e12 | https://static.higgsfield.ai/82853236-976c-470e-ac71-0c6e6dd14e12.mp4 | https://static.higgsfield.ai/82853236-976c-470e-ac71-0c6e6dd14e12.webp | https://d1xarpci4ikg0w.cloudfront.net/c4b525a0-a61d-43fc-93c3-9a6e67439dac.webp (320×192) |
| 5 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/864db28b-d784-4104-98e9-18d34674d1c9 | https://static.higgsfield.ai/864db28b-d784-4104-98e9-18d34674d1c9.mp4 | https://static.higgsfield.ai/864db28b-d784-4104-98e9-18d34674d1c9.webp | https://d1xarpci4ikg0w.cloudfront.net/de49989d-554d-484e-becb-68ca65d56cec.webp (320×236) |
| 6 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/35210a51-08d8-4405-beb2-d0efee11d725 | https://static.higgsfield.ai/35210a51-08d8-4405-beb2-d0efee11d725.mp4 | https://static.higgsfield.ai/35210a51-08d8-4405-beb2-d0efee11d725.webp | https://d1xarpci4ikg0w.cloudfront.net/d00ae63d-03ee-44d9-a349-117f47d885f8.webp (320×180) |
| 7 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/b01a4cef-5d96-43b0-ae64-7e78d7115132 | https://static.higgsfield.ai/b01a4cef-5d96-43b0-ae64-7e78d7115132.mp4 | https://static.higgsfield.ai/b01a4cef-5d96-43b0-ae64-7e78d7115132.webp | https://d1xarpci4ikg0w.cloudfront.net/7c1a39a0-cc38-4da4-9bd0-bff1f550733b.webp (320×182) |
| 8 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6 | https://static.higgsfield.ai/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6.mp4 | https://static.higgsfield.ai/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6.webp | https://d1xarpci4ikg0w.cloudfront.net/6249479a-713f-4355-84ef-85f3816e704f.webp (320×424) |
| 9 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/8f74c0a8-9326-4110-8e1f-98bfd95f831a | https://static.higgsfield.ai/8f74c0a8-9326-4110-8e1f-98bfd95f831a.mp4 | https://static.higgsfield.ai/8f74c0a8-9326-4110-8e1f-98bfd95f831a.webp | https://d1xarpci4ikg0w.cloudfront.net/4d3e7766-a786-4e0c-b3a3-84cf79598b1b.webp (320×242) |
| 10 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/fbec0148-693b-4645-9de5-359bd1a6882b | https://static.higgsfield.ai/fbec0148-693b-4645-9de5-359bd1a6882b.mp4 | https://static.higgsfield.ai/fbec0148-693b-4645-9de5-359bd1a6882b.webp | https://d1xarpci4ikg0w.cloudfront.net/9845d189-cb51-46c0-be15-5a6c1dda976c.webp (320×242) |
| 11 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/568dffe3-6314-48c1-9449-2398fce76929 | https://static.higgsfield.ai/568dffe3-6314-48c1-9449-2398fce76929.mp4 | https://static.higgsfield.ai/568dffe3-6314-48c1-9449-2398fce76929.webp | https://d1xarpci4ikg0w.cloudfront.net/9979e5b6-a87a-4457-b6a1-6fe481d89704.webp (320×182) |
| 12 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/c3f80212-931d-463e-bf7e-a0f892068e57 | https://static.higgsfield.ai/c3f80212-931d-463e-bf7e-a0f892068e57.mp4 | https://static.higgsfield.ai/c3f80212-931d-463e-bf7e-a0f892068e57.webp | https://d1xarpci4ikg0w.cloudfront.net/575c4001-822c-44a8-9ad4-9886e3e89c01.webp (320×182) |
| 13 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5a8be6b5-b93e-4ab8-9651-649e4c87869b | https://static.higgsfield.ai/5a8be6b5-b93e-4ab8-9651-649e4c87869b.mp4 | https://static.higgsfield.ai/5a8be6b5-b93e-4ab8-9651-649e4c87869b.webp | https://d1xarpci4ikg0w.cloudfront.net/24ac490d-5885-42d7-9bd2-5c7754c304c5.webp (320×242) |
| 14 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5a65510d-e4f7-429d-b179-a923ca07bbe0 | https://static.higgsfield.ai/5a65510d-e4f7-429d-b179-a923ca07bbe0.mp4 | https://static.higgsfield.ai/5a65510d-e4f7-429d-b179-a923ca07bbe0.webp | https://d1xarpci4ikg0w.cloudfront.net/0519b692-0744-4bde-b520-5275c7da212d.webp (320×182) |
| 15 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5914955d-6a42-47b2-8a91-a01fb0d3d775 | https://static.higgsfield.ai/5914955d-6a42-47b2-8a91-a01fb0d3d775.mp4 | https://static.higgsfield.ai/5914955d-6a42-47b2-8a91-a01fb0d3d775.webp | https://d1xarpci4ikg0w.cloudfront.net/6df67bf6-9754-48bb-b192-cd8a6886e93e.webp (320×424) |
| 16 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/75f23973-9d59-4047-bcd5-ea461faebd75 | https://static.higgsfield.ai/75f23973-9d59-4047-bcd5-ea461faebd75.mp4 | https://static.higgsfield.ai/75f23973-9d59-4047-bcd5-ea461faebd75.webp | https://d1xarpci4ikg0w.cloudfront.net/ed5da7ea-6ddc-43e3-a1f3-2a73a2dbb1d1.webp (320×242) |
| 17 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/2e914157-8bd5-4c8a-a56c-cce94b98e3b0 | https://static.higgsfield.ai/2e914157-8bd5-4c8a-a56c-cce94b98e3b0.mp4 | https://static.higgsfield.ai/2e914157-8bd5-4c8a-a56c-cce94b98e3b0.webp | https://d1xarpci4ikg0w.cloudfront.net/df4c40ef-69f6-4828-9e7e-b48112229da5.webp (320×210) |
| 18 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/3d7138b4-5e7a-4390-8116-4430807845bb | https://static.higgsfield.ai/3d7138b4-5e7a-4390-8116-4430807845bb.mp4 | https://static.higgsfield.ai/3d7138b4-5e7a-4390-8116-4430807845bb.webp | https://d1xarpci4ikg0w.cloudfront.net/085da2da-062a-4e3a-a7ce-f93f42334273.webp (320×210) |
| 19 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/97394223-51cf-4306-890d-4d33560696d6 | https://static.higgsfield.ai/97394223-51cf-4306-890d-4d33560696d6.mp4 | https://static.higgsfield.ai/97394223-51cf-4306-890d-4d33560696d6.webp | https://d1xarpci4ikg0w.cloudfront.net/eb728c62-178f-4387-8730-8b79e39733b1.webp (320×326) |
| 20 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/12ddc9c7-c946-4bc7-91be-76c5e686fa5c | https://static.higgsfield.ai/12ddc9c7-c946-4bc7-91be-76c5e686fa5c.mp4 | https://static.higgsfield.ai/12ddc9c7-c946-4bc7-91be-76c5e686fa5c.webp | https://d1xarpci4ikg0w.cloudfront.net/82d1a768-8c44-4efe-a1f8-c232eaa3a3d9.webp (320×210) |

Source pages: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee, https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62. Crawled 2026-09.


## Real sample prompts (site)

20 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `12ddc9c7-c946-4bc7-91be-76c5e686fa5c`** (priority 19) — Wan 2.5 motion preset, steps=36, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1b36c2f0-a502-4707-8ecc-dd877a63a6fe.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/eab0816a-c005-4da7-9a20-2505c685de3f.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/12ddc9c7-c946-4bc7-91be-76c5e686fa5c

```text
The camera frames an extreme close-up of a bright red popsicle against a pure blue sky, the texture glistening under the sun. Slowly, the camera begins to zoom out, revealing the popsicle gripped firmly in the hand of a middle-aged man standing confidently inside a small inflatable pool. He wears a tight, colorful yellow and purple tank top and matching trunks, his sunglasses reflecting the cloud-dotted sky as he holds the popsicle proudly in front of him.


```

- **Sample `97394223-51cf-4306-890d-4d33560696d6`** (priority 18) — Wan 2.5 motion preset, steps=80, frames=81, strength=1, guide_scale=6, output video 944×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/206fda65-13a5-4bc7-8fdd-7799ff04a482.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e5d2ef18-b7d5-4070-8448-f4883106c6c8.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/97394223-51cf-4306-890d-4d33560696d6

```text
In the first frame, a close-up focuses on a male photographer's intense eyes peering over a large professional camera as he prepares to shoot. His hands grip the camera firmly, the lens dominating the foreground. As the camera smoothly zooms out, the second frame reveals a bold, playful composition: the photographer kneels behind his camera tripod, framed between the legs of a woman standing confidently in a short skirt. The man’s focused expression contrasts with the cheeky, provocative setup, creating a striking blend of professionalism and humor.








```

- **Sample `3d7138b4-5e7a-4390-8116-4430807845bb`** (priority 17) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8ca35bea-a41f-40d4-bf44-d19c6f5c4d2a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dea80430-4fb8-479a-aeef-34a175c9b370.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/3d7138b4-5e7a-4390-8116-4430807845bb

```text
The camera fluidly zooms out, transitioning from the dramatic close-up of the women’s faces adorned with bold metallic makeup and vibrant red lips, to a dynamic wide shot capturing both figures gracefully dancing. Their slender, glistening bodies move rhythmically and expressively against the vibrant red backdrop. Soft, deliberate lighting highlights their reflective makeup and sleek styling, emphasizing the dramatic, fashion-forward mood of the performance.
```

- **Sample `2e914157-8bd5-4c8a-a56c-cce94b98e3b0`** (priority 16) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/497a11d9-9929-4e37-8f3b-966cb6e1f143.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f060728d-b68e-4603-8079-26f1823fdba5.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/2e914157-8bd5-4c8a-a56c-cce94b98e3b0

```text
Camera sharply crash zooms out from the intense woman in black standing confidently indoors, rapidly pulling back through an open doorway to reveal the second woman outside in daylight, quietly gazing forward.
```

- **Sample `75f23973-9d59-4047-bcd5-ea461faebd75`** (priority 15) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/512810c3-384c-429d-a8c1-d479e08d138a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/496ec13e-ce6e-4908-bcfe-ff6d5caf82ec.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/75f23973-9d59-4047-bcd5-ea461faebd75

```text
Crash zoom-out a full front view of a bright green old vintage 1960s Mustang car speeding through a neon-lit tunnel. The full bumper and hood fill the frame as motion blur and tunnel lights streak past, creating a powerful, cinematic rush of movement.
```

- **Sample `5914955d-6a42-47b2-8a91-a01fb0d3d775`** (priority 14) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/89339e8c-f15a-4395-8d8f-8c227224ec2c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/411c56fa-a8cd-4702-85fe-9865f723508d.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5914955d-6a42-47b2-8a91-a01fb0d3d775

```text
Girl holding newspaper, FAST ZOOM OUT, vintage vibes
```

- **Sample `5a65510d-e4f7-429d-b179-a923ca07bbe0`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/acdb1a4d-7731-4133-b370-585f81233dcb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/89cc318c-68e7-430f-9b43-d301b0c20eab.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/5a65510d-e4f7-429d-b179-a923ca07bbe0

```text
Fast zoom out: the camera jerks back from the candlelit stare, revealing the man seated in the center of a dimly lit ritual chamber. Dozens of masked figures surround him in silence, their faces flickering with firelight. The room pulses with tension, as the flames tremble in the sudden rush of air.
```

- **Sample `5a8be6b5-b93e-4ab8-9651-649e4c87869b`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c51884eb-1f7a-4087-b46e-f2d8ea3056bd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e365800d-cd7c-43bf-9b10-0b3ee6a74854.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5a8be6b5-b93e-4ab8-9651-649e4c87869b

```text
surrealistic FAST ZOOM OUT revealing broken glass net around
```

- **Sample `c3f80212-931d-463e-bf7e-a0f892068e57`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4f65766f-41a2-4d56-95e7-1273fb521c76.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5eb71421-c82e-441a-8c1a-1d0f4cbc1ccc.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/c3f80212-931d-463e-bf7e-a0f892068e57

```text
Old japanese film. FAST ZOOM OUT 
```

- **Sample `568dffe3-6314-48c1-9449-2398fce76929`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1147a5d5-d33a-43dc-a712-79ef76051ca7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ff292f3c-26f5-49f1-aa64-a5c863985e2d.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/568dffe3-6314-48c1-9449-2398fce76929

```text
FAST ZOOM OUT revealing the full scale of the jagged peaks bathed in surreal sunset hues. 
```

- **Sample `fbec0148-693b-4645-9de5-359bd1a6882b`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/40d896c3-308b-4c4a-a7c4-03823869a0cc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/149d49f9-2f55-4539-b5f0-fe5257a006b9.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/fbec0148-693b-4645-9de5-359bd1a6882b

```text
Extreme close-up shot of a young woman’s face, bathed in dappled light — soft, circular shadows scattered across her features like a starry night sky. Her eyes glisten, distant and heavy with thought, reflecting faint movement beyond the frame. The camera lingers on her face, the pattern of light shifting slightly as if from a slow-turning fan. Her breath is quiet, almost imperceptible.

Suddenly, the camera crash zooms out — revealing her lying alone on a vintage armchair, bathed in soft moonlight filtering through a perforated screen. The room feels timeless — worn furniture, scattered books, and a vinyl record spinning silently on a turntable. Outside the window, faint figures walk down a foggy street, their silhouettes flickering like shadows in a dream. The woman’s gaze remains fixed on nothing, lost in her own quiet world.
```

- **Sample `8f74c0a8-9326-4110-8e1f-98bfd95f831a`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3734df44-8781-4a5a-990a-ec225b489f5a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/14349456-2451-4ed4-8b4f-b79a0a134662.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/8f74c0a8-9326-4110-8e1f-98bfd95f831a

```text
Extreme close-up shot of a woman’s face, her skin adorned with intricate black script flowing symmetrically across her forehead, cheeks, and neck. Her sharp gaze, highlighted by gold eyeliner, pierces through the frame. A golden hand-shaped earring clings to her ear, adding a bold accent. The camera lingers on her serene yet powerful expression.

Suddenly, the camera crash zooms out — revealing her in a sleek, avant-garde outfit: a structured, high-collared black jacket shimmering with metallic gold embroidery. She stands at the head of a futuristic runway, surrounded by models clad in dark, sculptural designs with metallic accents. Bright spotlights flicker in rhythm with pulsating bass, the audience barely visible in the shadows. The woman’s face remains the commanding focal point as she steps forward, the script on her skin glowing faintly under the lights.
```

- **Sample `41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/725a295b-9395-4481-b33e-c5bbc3fc79ae.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6a4c19eb-ca83-46bf-bb7c-5596110d4691.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6

```text
Suddenly, the camera crash zooms out — revealing a rapper standing on the hood of a vintage lowrider engulfed in flames. The car’s chrome finish glints under the fire’s glow, smoke curling around the rapper’s feet. Dressed in a bold, oversized jacket with gold chains gleaming across his chest, he spits bars with fierce intensity. Sparks flicker in the air, the flames dancing to the rhythm of the track as he points directly at the camera, gold teeth flashing with every word. 
```

- **Sample `b01a4cef-5d96-43b0-ae64-7e78d7115132`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c2339a25-5ef9-40db-b9be-24b5c6bc8d36.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f5036ab6-3ccd-4a85-aba2-efe4bab9cd55.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/b01a4cef-5d96-43b0-ae64-7e78d7115132

```text
Crash zoom out to reveal a luxurious hotel room with a huge bed. A man in a red jacket lies in the center, laughing happily. two models are lying on the sides of a man and in his arms. Both look at the camera, smiling like in a hip-hop video, cinematic shot, symmetric 
```

- **Sample `35210a51-08d8-4405-beb2-d0efee11d725`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ffd67c17-5cab-4ae7-b956-da962873141f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ffc73213-2449-4c17-b573-9a79b522951b.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/35210a51-08d8-4405-beb2-d0efee11d725

```text
A man takes off his glasses with his left hand and laughs, there is no one around, the glasses remain on his left hand
```

- **Sample `864db28b-d784-4104-98e9-18d34674d1c9`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b18dc7b2-fee9-4860-8fb8-36f32d0a7df2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/580602c7-cc43-4241-a87c-fdc292e8ab34.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/864db28b-d784-4104-98e9-18d34674d1c9

```text
A man is surrounded by a group of his fellow bandits. He holds a revolver in a shaky hand and then drops it with terrified face because he commited a unforgiving deed.
```

- **Sample `82853236-976c-470e-ac71-0c6e6dd14e12`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1232×736
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7dd612bb-c112-4c08-adfe-2f4b06dcee15.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5f3f9abe-fbb5-4c7b-93f1-5a56465d064d.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/82853236-976c-470e-ac71-0c6e6dd14e12

```text
A group of young women on horses. Some of women hold rifles pointing at the camera, while some are waving the american flag.
```

- **Sample `91c74b1b-dc59-4a3b-814b-3ee1e7914395`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dd5c91d5-c450-4942-8b63-a0569c41551e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/31d9c14b-46a1-453e-81e9-357104443f84.mp4
  - page: https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62/91c74b1b-dc59-4a3b-814b-3ee1e7914395

```text
The man looks into the distance with a serious face, the car on the left starts moving and moves on
```

- **Sample `87c085cc-0cbd-43f6-b52a-09ea76b0de5b`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1296×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b1bd4264-850a-49bb-87e0-3e8c2f70e575.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ed3f7512-aa42-4239-b92b-2d213407f1a2.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/87c085cc-0cbd-43f6-b52a-09ea76b0de5b

```text
We see a cinema hall full of people. At the center of it is a group of boyscouts with terrified faces. Around them there are boring adults in beige suits laughing
```

- **Sample `8ae5bd45-2176-4de4-9aec-45264a87b953`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3aafcfe5-0930-40d1-894f-3d1b476b2e76.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/79076c4d-a551-4b07-a399-df8d42ca0f7a.mp4
  - page: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/8ae5bd45-2176-4de4-9aec-45264a87b953

```text
A fast zoom-out reveals an opulent, cinematic dining room bathed in warm, golden lighting. At the center of the frame, a single man in a striking red suit sits alone at the head of a long, luxurious table draped in a pristine white tablecloth. The table covered with lavish silverware, ornate candelabras, crystal glasses, and an extravagant spread of gourmet dishes. Dominating the center is a whole roasted pig, perfectly glazed and surrounded by rich garnishes. The man laughs boldly. The entire composition is rich, grand, and theatrical—evoking the visual language of luxury cinema and stylish hip-hop videos. Cinematic, lavish luxury, high-fashion, hip-hop vibe
```
