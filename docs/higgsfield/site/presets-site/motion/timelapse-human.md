# Timelapse Human — Higgsfield Motion preset

- **Category:** Camera · time (lapse)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Speeds up human motion while the environment stays natural, showing quick movements like walking, dressing, or dancing. Adds energy, urgency, or a surreal, fast-forwarded feel.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db | `b8789aa0-bced-4d69-9eca-7245ee9ce7db` | 94 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b8789aa0-bced-4d69-9eca-7245ee9ce7db |
| https://higgsfield.ai/motion/c4ce82e4-1426-46b4-b184-db8f7fe41a5f | `c4ce82e4-1426-46b4-b184-db8f7fe41a5f` | -182 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c4ce82e4-1426-46b4-b184-db8f7fe41a5f |
| https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e | `b4ba822f-9171-4547-997e-c86de335385e` | -283 | none | none published (empty `settings`); model Minimax Hailuo 2.3 | https://higgsfield.ai/ai/video?model=minimax-2.3&presetMotionId=b4ba822f-9171-4547-997e-c86de335385e |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Minimax Hailuo 2.3 — family `minimax`, Generate button opens `/ai/video?model=minimax-2.3&presetMotionId=<id>` (the page's samples block reports model `minimax_hailuo`). These pages publish no settings.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman gets dressed and does her makeup in fast-forward while the bedroom stays natural and calm.
```

Use it as: upload a start image that matches the scene, select motion preset **Timelapse Human**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fixed camera, human activity fast-forwarded · **Best use:** Daily routines, urban pulse · **Models:** — · **Phrase/template:** "Timelapse Human — subway platform, people rushing" · **Tips:** C1

## Related presets

- **Same category (Camera · time (lapse)):** [Hyperlapse](hyperlapse.md), [Timelapse Landscape](timelapse-landscape.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7017dbb5-ead0-4aa9-8195-1da5c00b327e.webp (320×242)
- Card preview, variant `c4ce82e4`: https://d1xarpci4ikg0w.cloudfront.net/3307796f-29f4-408a-9f4f-962fca2410c8.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/ec28fa40-b68e-4fc4-af45-672f71ab5e61 | https://static.higgsfield.ai/ec28fa40-b68e-4fc4-af45-672f71ab5e61.mp4 | https://static.higgsfield.ai/ec28fa40-b68e-4fc4-af45-672f71ab5e61.webp | https://d1xarpci4ikg0w.cloudfront.net/3e977eff-8867-4b97-a556-775f115ec061.webp (320×320) |
| 2 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/a069e1d8-756a-473d-af83-14507cbe5400 | https://static.higgsfield.ai/a069e1d8-756a-473d-af83-14507cbe5400.mp4 | https://static.higgsfield.ai/a069e1d8-756a-473d-af83-14507cbe5400.webp | https://d1xarpci4ikg0w.cloudfront.net/be1b7828-f5cc-4017-8c66-851455aae430.webp (320×320) |
| 3 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/8be4df25-668f-4de5-a988-a8e51b4dd6e6 | https://static.higgsfield.ai/8be4df25-668f-4de5-a988-a8e51b4dd6e6.mp4 | https://static.higgsfield.ai/8be4df25-668f-4de5-a988-a8e51b4dd6e6.webp | https://d1xarpci4ikg0w.cloudfront.net/d0532274-4953-4ded-87eb-327a6d84c02a.webp (320×242) |
| 4 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/de323c82-a54d-44dc-9252-5836b05d98c2 | https://static.higgsfield.ai/de323c82-a54d-44dc-9252-5836b05d98c2.mp4 | https://static.higgsfield.ai/de323c82-a54d-44dc-9252-5836b05d98c2.webp | https://d1xarpci4ikg0w.cloudfront.net/bccb4c26-89eb-4ef1-a893-3b3a47f4e200.webp (320×320) |
| 5 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de | https://static.higgsfield.ai/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de.mp4 | https://static.higgsfield.ai/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de.webp | https://d1xarpci4ikg0w.cloudfront.net/066a26c5-6222-4a1a-85c3-b3b371e1bc67.webp (320×182) |
| 6 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/2c13bf69-591d-4274-9c0e-f8780fb4bc16 | https://static.higgsfield.ai/2c13bf69-591d-4274-9c0e-f8780fb4bc16.mp4 | https://static.higgsfield.ai/2c13bf69-591d-4274-9c0e-f8780fb4bc16.webp | https://d1xarpci4ikg0w.cloudfront.net/0b1a536a-b532-46ae-b502-f832d5ced5de.webp (320×136) |

- Card preview, round-2 variant `b4ba822f` (Minimax Hailuo 2.3): https://cdn.higgsfield.ai/minimax_hailuo_motion/74e763e5-c743-4693-a011-aba749b72e06.mp4 · thumbnail https://cdn.higgsfield.ai/minimax_hailuo_motion/ed316e7c-b598-4744-91cb-b4c0da090acd.webp (600×800)

### Sample videos, round-2 variant `b4ba822f` (Minimax Hailuo 2.3) (7)

| # | Sample page | MP4 | Size |
|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/adf8fec2-5d9d-485c-a814-5c8cede2c308 | https://cdn.higgsfield.ai/minimax_hailuo_sample/adf8fec2-5d9d-485c-a814-5c8cede2c308.mp4 | 1080×1438 |
| 2 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/48f58e7f-fe26-40e5-b5be-fa0b4fcdc271 | https://cdn.higgsfield.ai/minimax_hailuo_sample/48f58e7f-fe26-40e5-b5be-fa0b4fcdc271.mp4 | 1438×1080 |
| 3 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/6a0cb012-f408-458e-9e7b-943c55939cfe | https://cdn.higgsfield.ai/minimax_hailuo_sample/6a0cb012-f408-458e-9e7b-943c55939cfe.mp4 | 1080×1438 |
| 4 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/2bfd9995-c9d3-4984-ac42-7e2bb5a96216 | https://cdn.higgsfield.ai/minimax_hailuo_sample/2bfd9995-c9d3-4984-ac42-7e2bb5a96216.mp4 | 1080×1620 |
| 5 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/955cc983-de34-42ff-836e-3dfa5f5f26c6 | https://cdn.higgsfield.ai/minimax_hailuo_sample/955cc983-de34-42ff-836e-3dfa5f5f26c6.mp4 | 1438×1080 |
| 6 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/b86ec0a0-b415-4db1-b52e-8a3f21a3d272 | https://cdn.higgsfield.ai/minimax_hailuo_sample/b86ec0a0-b415-4db1-b52e-8a3f21a3d272.mp4 | 1438×1080 |
| 7 | https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e/0b3f11c1-1576-4c30-8719-8ead5bafafa1 | https://cdn.higgsfield.ai/minimax_hailuo_sample/0b3f11c1-1576-4c30-8719-8ead5bafafa1.mp4 | 1438×1080 |

Source pages: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db, https://higgsfield.ai/motion/c4ce82e4-1426-46b4-b184-db8f7fe41a5f, https://higgsfield.ai/motion/b4ba822f-9171-4547-997e-c86de335385e. Crawled 2026-09.


## Real sample prompts (site)

6 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `2c13bf69-591d-4274-9c0e-f8780fb4bc16`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×624
  - input image: https://d1xarpci4ikg0w.cloudfront.net/35803a58-9fb0-4a37-a1b2-d3f8a4374f5d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/45f69f89-0cff-489c-83dc-3f781dc53948.mp4
  - page: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/2c13bf69-591d-4274-9c0e-f8780fb4bc16

```text
The woman sitting at the desk is boringly wait for people to come to her. The background is filled with movement of school students in school clothes very quickly walking.
```

- **Sample `0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7504577b-a730-442a-9aa4-6ead3fb8fda3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1361e126-36bf-4211-a0c0-c63062383a81.mp4
  - page: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de

```text
A young woman with a contemplative expression walks slowly to the right, her backpack slung casually over one shoulder. The fading light of dawn casts a soft glow over the serene riverside, where a medieval bridge arches gracefully in the background, shrouded in mist. People bustle around her, their movements blurred in contrast to her stillness, creating a sense of solitude amidst the crowd. The air is cool and damp, the gentle ripples of the water mirroring her quiet introspection. The scene is imbued with a muted palette, where soft greens and greys evoke a sense of calmness, reflecting her inner emotional landscape.
```

- **Sample `de323c82-a54d-44dc-9252-5836b05d98c2`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d6df5a87-ddb4-45ae-91fc-7951a4b1d4b1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/24aff200-0411-4cb8-a5b8-a9162144f505.mp4
  - page: https://higgsfield.ai/motion/c4ce82e4-1426-46b4-b184-db8f7fe41a5f/de323c82-a54d-44dc-9252-5836b05d98c2

```text
Futuristic subway platform bathed in green and violet neon light.  Camera zoom in on a woman in a reflective angular coat dancing perfectly, staring at the camera as hundreds of distorted human figures blur past in rainbow motion trails. Timelapse accelerates their movement, turning them into spectral silhouettes. The train sits idle behind her, flickering gently.
```

- **Sample `8be4df25-668f-4de5-a988-a8e51b4dd6e6`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ac57c7ac-6231-45b1-8b36-0835ba80e22a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/937388dd-f82b-4b07-9b1c-f032690b290f.mp4
  - page: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/8be4df25-668f-4de5-a988-a8e51b4dd6e6

```text
Aerial wide shot, fixed angle. A giant beached whale lies motionless on a sandy industrial riverside. Around it, a dozen people in vibrant 70s-style outfits stand frozen. Begin timelapse: over time, people slowly change positions, some kneeling to inspect the whale, others gesturing, taking notes, pacing, or pointing. Bright yellow cranes in the background shift with the light as clouds race across the sky. Day turns to dusk, shadows stretch, then flickering lights appear from distant machinery. Subtle wardrobe changes suggest seasons passing. Emphasis on human activity and scientific curiosity evolving around the silent whale. Stylized like a fashion editorial through a psychedelic lens. Shot in Kodak Ektar 100 for rich saturation and bold color depth.
```

- **Sample `a069e1d8-756a-473d-af83-14507cbe5400`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/89fe4075-2f89-4c9b-bc03-cd9598b691cf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ca5583a1-a3f9-4aa3-9453-305532740b73.mp4
  - page: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/a069e1d8-756a-473d-af83-14507cbe5400

```text
Static top-down shot. Woman’s serene face floats in a white bathtub filled with translucent blue milk water. Dozens of black koi swirl around her in hypnotic, time-lapsed motion—circling, pulsing, then vanishing one by one. Her expression subtly shifts—barely perceptible blinks, breath softening.
```

- **Sample `ec28fa40-b68e-4fc4-af45-672f71ab5e61`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fbabd409-681d-4af6-9d73-191a6845f89e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/09677d76-7ee5-4b67-a597-cb3a14f2e58e.mp4
  - page: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/ec28fa40-b68e-4fc4-af45-672f71ab5e61

```text
Locked-off street-level shot. Neon-lit alley with layered storefronts, glowing signage, and a lone woman standing still at the center in a white dress and leather jacket. Time accelerates as scooters zip past in streaks, pedestrians blur into smears of motion, and a black cat slowly walks across an overhead ledge. Shadows stretch and shrink, ambient lights pulse.
```
