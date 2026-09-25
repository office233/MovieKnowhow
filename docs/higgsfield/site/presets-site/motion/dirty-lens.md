# Dirty Lens — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Simulates a camera lens with smudges, dust, or water drops for a raw, gritty look. Great for adding realism, mood, or a behind-the-scenes feel.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9 | `635e322f-f711-4a4b-98b8-c1b62d7befe9` | 68 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=635e322f-f711-4a4b-98b8-c1b62d7befe9 |
| https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382 | `86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382` | 41 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A mechanic works under a car in a dusty garage, smudged, rain-spotted lens for a gritty documentary feel.
```

Use it as: upload a start image that matches the scene, select motion preset **Dirty Lens**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Fisheye](fisheye.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/8c8ea0da-59b3-46bf-b48f-dd58b5cb8fa3.webp (320×242)
- Card preview, variant `86b3d8dd`: https://d1xarpci4ikg0w.cloudfront.net/51c02f54-a235-4f7d-9327-31eccb680094.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/a0c63af5-a7ba-43a5-afd2-7813a58683b9 | https://static.higgsfield.ai/a0c63af5-a7ba-43a5-afd2-7813a58683b9.mp4 | https://static.higgsfield.ai/a0c63af5-a7ba-43a5-afd2-7813a58683b9.webp | https://d1xarpci4ikg0w.cloudfront.net/fb42aad5-fbbe-44b6-ad4e-44f010eefdae.webp (320×176) |
| 2 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/1478584d-ac28-4507-81b6-330dc7b7d280 | https://static.higgsfield.ai/1478584d-ac28-4507-81b6-330dc7b7d280.mp4 | https://static.higgsfield.ai/1478584d-ac28-4507-81b6-330dc7b7d280.webp | https://d1xarpci4ikg0w.cloudfront.net/c8494f96-589f-459d-aa71-2592eb34d54e.webp (320×132) |
| 3 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/b1623a4d-4c30-43dd-a23e-e51362392dd4 | https://static.higgsfield.ai/b1623a4d-4c30-43dd-a23e-e51362392dd4.mp4 | https://static.higgsfield.ai/b1623a4d-4c30-43dd-a23e-e51362392dd4.webp | https://d1xarpci4ikg0w.cloudfront.net/771c2e5c-c08b-4e21-9392-05a4f7707f2a.webp (320×180) |
| 4 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/3bd1ea1a-1b93-44c3-a210-331e43a5b792 | https://static.higgsfield.ai/3bd1ea1a-1b93-44c3-a210-331e43a5b792.mp4 | https://static.higgsfield.ai/3bd1ea1a-1b93-44c3-a210-331e43a5b792.webp | https://d1xarpci4ikg0w.cloudfront.net/e2d12ce2-edb0-4e65-be0a-06a071fc6c26.webp (320×242) |
| 5 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/d5514fc9-df25-4dc7-a063-d535052fbf52 | https://static.higgsfield.ai/d5514fc9-df25-4dc7-a063-d535052fbf52.mp4 | https://static.higgsfield.ai/d5514fc9-df25-4dc7-a063-d535052fbf52.webp | https://d1xarpci4ikg0w.cloudfront.net/520f7736-74f5-4b8d-9d0f-7b2e7bb1bec6.webp (320×242) |
| 6 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/1e5c11e7-5265-4acb-84a6-a8740e6785d6 | https://static.higgsfield.ai/1e5c11e7-5265-4acb-84a6-a8740e6785d6.mp4 | https://static.higgsfield.ai/1e5c11e7-5265-4acb-84a6-a8740e6785d6.webp | https://d1xarpci4ikg0w.cloudfront.net/60731e7d-0185-44cd-8444-7c6746775cdd.webp (320×180) |
| 7 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/3971f904-0ba8-47d7-9584-a6aa710d7e76 | https://static.higgsfield.ai/3971f904-0ba8-47d7-9584-a6aa710d7e76.mp4 | https://static.higgsfield.ai/3971f904-0ba8-47d7-9584-a6aa710d7e76.webp | https://d1xarpci4ikg0w.cloudfront.net/c7492aec-e3ea-4db3-ab77-f7cc65eb10c5.webp (320×180) |
| 8 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/ff766d56-6dad-47a3-b6e1-a25ce4f529f0 | https://static.higgsfield.ai/ff766d56-6dad-47a3-b6e1-a25ce4f529f0.mp4 | https://static.higgsfield.ai/ff766d56-6dad-47a3-b6e1-a25ce4f529f0.webp | https://d1xarpci4ikg0w.cloudfront.net/93383983-da53-420e-b746-54590da27453.webp (320×180) |
| 9 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/2b8e464b-3941-4909-b29c-cf6ba263b8f0 | https://static.higgsfield.ai/2b8e464b-3941-4909-b29c-cf6ba263b8f0.mp4 | https://static.higgsfield.ai/2b8e464b-3941-4909-b29c-cf6ba263b8f0.webp | https://d1xarpci4ikg0w.cloudfront.net/e1f288a5-5e7e-4312-bf27-4d50553aa0ed.webp (320×180) |
| 10 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/f7595be8-f85c-4fa8-afc7-848cb3d768ed | https://static.higgsfield.ai/f7595be8-f85c-4fa8-afc7-848cb3d768ed.mp4 | https://static.higgsfield.ai/f7595be8-f85c-4fa8-afc7-848cb3d768ed.webp | https://d1xarpci4ikg0w.cloudfront.net/f8c8c1ad-4a94-448b-be18-495e6416c00b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9, https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `f7595be8-f85c-4fa8-afc7-848cb3d768ed`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6de5bcfc-c3e7-49ac-957f-84136851c2e7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a23030ea-0fdb-4b74-98eb-16e956424cb0.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/f7595be8-f85c-4fa8-afc7-848cb3d768ed

```text
The man in the oversized red and yellow fur hat stares straight into the camera, unblinking, surrounded by hypnotic concentric blue-and-black spirals. Suddenly, a stream of cold milk is thrown at his face — it splashes hard, soaking his nose chain and dripping from his lips. Thick white droplets smack the lens, blurring the spirals and leaving streaks of milk sliding slowly down the glass. His expression never changes.
```

- **Sample `ff766d56-6dad-47a3-b6e1-a25ce4f529f0`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b33b61c2-f448-4e60-9807-d03a90dc560e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/79126a02-ef33-4e3f-b0de-118bc0e9cad4.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/ff766d56-6dad-47a3-b6e1-a25ce4f529f0

```text
The car is accelerating in the mud, the mud flies right into the camera and stains it, lots of mud on the camera.
```

- **Sample `3971f904-0ba8-47d7-9584-a6aa710d7e76`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/39eaf3af-7c9a-492e-be68-c65fa2503927.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ea2915ff-7ddd-4d5e-b418-52129b26eb1b.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/3971f904-0ba8-47d7-9584-a6aa710d7e76

```text
Lens getting dirty. A girl is throwing oil to a camera very fast. 
```

- **Sample `1e5c11e7-5265-4acb-84a6-a8740e6785d6`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d8ba90e0-c6eb-417f-b5c7-0c95340d2284.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d616c958-cf9f-41fa-9229-dd9915681e4d.mp4
  - page: https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/1e5c11e7-5265-4acb-84a6-a8740e6785d6

```text
Girl throws drops of red paint, the liquid stains the camera lens and runs down it.
```

- **Sample `d5514fc9-df25-4dc7-a063-d535052fbf52`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/76ef1734-c7c0-4b99-ac5f-dea926e93a34.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9ad0af95-4aff-4046-94b8-b98819059b0a.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/d5514fc9-df25-4dc7-a063-d535052fbf52

```text
A man dances in the mud and throws the mud right into the screen with his hands, the liquid mud stains the camera lens and runs down it.
```

- **Sample `3bd1ea1a-1b93-44c3-a210-331e43a5b792`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/db83fe4b-24e5-431d-a3c8-213c31b46ba1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d3828961-b6b4-42ee-b76e-7802bc0c011f.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/3bd1ea1a-1b93-44c3-a210-331e43a5b792

```text
Lens getting dirty, half of man face turned destroyed
```

- **Sample `b1623a4d-4c30-43dd-a23e-e51362392dd4`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2560×1440
  - input image: https://d1xarpci4ikg0w.cloudfront.net/88b204ba-0423-4967-9298-476080977108.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cbd856d1-2199-4f8f-83cf-aa9adefb0ddc.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/b1623a4d-4c30-43dd-a23e-e51362392dd4

```text
The car is stuck and accelerating in the mud, the mud flies right into the camera and stains it, lots of mud on the camera.
```

- **Sample `1478584d-ac28-4507-81b6-330dc7b7d280`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2944×1216
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d30b0ff4-b0c3-4683-92bf-f72279da2f2b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b900a3c1-b979-45e9-be50-bddbf3ad39df.mp4
  - page: https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382/1478584d-ac28-4507-81b6-330dc7b7d280

```text
A joyful man dances in the mud and kicks the mud right into the screen with his feet, the liquid mud stains the camera lens and runs down it.
```

- **Sample `a0c63af5-a7ba-43a5-afd2-7813a58683b9`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2560×1408
  - input image: https://d1xarpci4ikg0w.cloudfront.net/930a4418-1ea8-413a-a50f-a9bc03f40579.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d491a898-68be-4156-b043-8e6ee0313fc9.mp4
  - page: https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/a0c63af5-a7ba-43a5-afd2-7813a58683b9

```text
A man shoots himself in the head and the blood from the shot goes everywhere and hits the screen, the man immediately falls down, the screen gets dirty after the shot
```
