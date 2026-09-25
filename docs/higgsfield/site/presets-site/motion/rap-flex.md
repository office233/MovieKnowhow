# Rap Flex — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** music video
- **What it does (site description, verbatim):** Mimics iconic camera moves from rap music videos—smooth slides, low angles, and slow zooms. Perfect for giving your video a bold, confident, star-like vibe.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90 | `809c1acb-6be5-4eb7-afde-dd08910f1e90` | 37 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=809c1acb-6be5-4eb7-afde-dd08910f1e90 |
| https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55 | `dc292dd4-12aa-431a-a576-48adb132dd55` | 81 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=dc292dd4-12aa-431a-a576-48adb132dd55 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A rapper in a fur coat and gold chains poses in front of a lowrider; low-angle slide and slow zoom, confident star energy.
```

Use it as: upload a start image that matches the scene, select motion preset **Rap Flex**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Quick zooms snapping in and out on each hit · **Best use:** Hip-hop / dance · **Models:** Minimax Hailuo 2.3 · **Phrase/template:** "Camera: Rap Flex — quick zooms snapping in and out on each hit." · **Tips:** Pair with the Live Concert preset

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7c2a4854-8797-483f-9424-0cb8a6bb0488.webp (320×320)
- Card preview, variant `dc292dd4`: https://d1xarpci4ikg0w.cloudfront.net/a53acb22-05c3-4e38-894c-befc7864471a.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/c48e57bd-41ba-414f-9311-9c56cdba8b45 | https://static.higgsfield.ai/c48e57bd-41ba-414f-9311-9c56cdba8b45.mp4 | https://static.higgsfield.ai/c48e57bd-41ba-414f-9311-9c56cdba8b45.webp | https://d1xarpci4ikg0w.cloudfront.net/90de3d81-739c-4400-8f7f-28def9afcacf.webp (320×320) |
| 2 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/be843dce-72e9-4717-a219-673a32bb53cb | https://static.higgsfield.ai/be843dce-72e9-4717-a219-673a32bb53cb.mp4 | https://static.higgsfield.ai/be843dce-72e9-4717-a219-673a32bb53cb.webp | https://d1xarpci4ikg0w.cloudfront.net/a01f2ac5-b2ec-44fc-a812-da09db7b3dd0.webp (320×424) |
| 3 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/32ea2ee6-f22a-494d-a696-277c87014ad9 | https://static.higgsfield.ai/32ea2ee6-f22a-494d-a696-277c87014ad9.mp4 | https://static.higgsfield.ai/32ea2ee6-f22a-494d-a696-277c87014ad9.webp | https://d1xarpci4ikg0w.cloudfront.net/c30cfd1d-a46e-4a20-96d4-3c7376efb358.webp (320×424) |
| 4 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1 | https://static.higgsfield.ai/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1.mp4 | https://static.higgsfield.ai/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1.webp | https://d1xarpci4ikg0w.cloudfront.net/8987e113-5528-42c4-ae97-7a726103881d.webp (320×182) |
| 5 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/7fce68dd-9b0f-4c83-9581-0f046ae8ebab | https://static.higgsfield.ai/7fce68dd-9b0f-4c83-9581-0f046ae8ebab.mp4 | https://static.higgsfield.ai/7fce68dd-9b0f-4c83-9581-0f046ae8ebab.webp | https://d1xarpci4ikg0w.cloudfront.net/3d960573-7c75-4c08-9679-e9300cd0187c.webp (320×182) |
| 6 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/091f8069-7fa9-4773-b919-3e8a48aa9597 | https://static.higgsfield.ai/091f8069-7fa9-4773-b919-3e8a48aa9597.mp4 | https://static.higgsfield.ai/091f8069-7fa9-4773-b919-3e8a48aa9597.webp | https://d1xarpci4ikg0w.cloudfront.net/d54a0719-c0cf-4379-aed2-da8a1bc49cfe.webp (320×182) |
| 7 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/f82117ab-bb4e-4a90-b427-9dfc859de188 | https://static.higgsfield.ai/f82117ab-bb4e-4a90-b427-9dfc859de188.mp4 | https://static.higgsfield.ai/f82117ab-bb4e-4a90-b427-9dfc859de188.webp | https://d1xarpci4ikg0w.cloudfront.net/55e9f608-ede0-47e6-905d-551e474b5637.webp (320×182) |
| 8 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/a3315f66-b0b8-4f6f-813b-b48483a3d582 | https://static.higgsfield.ai/a3315f66-b0b8-4f6f-813b-b48483a3d582.mp4 | https://static.higgsfield.ai/a3315f66-b0b8-4f6f-813b-b48483a3d582.webp | https://d1xarpci4ikg0w.cloudfront.net/d9563b63-1dca-425f-a0a5-393320e560ed.webp (320×182) |
| 9 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb | https://static.higgsfield.ai/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb.mp4 | https://static.higgsfield.ai/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb.webp | https://d1xarpci4ikg0w.cloudfront.net/859817b8-3bd5-47af-92dc-e634ce2067f5.webp (320×182) |
| 10 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/d6065663-49a1-4294-b3ce-928e64eae25e | https://static.higgsfield.ai/d6065663-49a1-4294-b3ce-928e64eae25e.mp4 | https://static.higgsfield.ai/d6065663-49a1-4294-b3ce-928e64eae25e.webp | https://d1xarpci4ikg0w.cloudfront.net/9fb18b10-c5d6-4b57-94bd-1d43003f31c6.webp (320×182) |
| 11 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/1a46c718-a2e0-4f21-9726-b12e35f55723 | https://static.higgsfield.ai/1a46c718-a2e0-4f21-9726-b12e35f55723.mp4 | https://static.higgsfield.ai/1a46c718-a2e0-4f21-9726-b12e35f55723.webp | https://d1xarpci4ikg0w.cloudfront.net/3e578779-9a2d-4e60-b3d4-ea54a1ae053e.webp (320×182) |
| 12 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/7e2342d3-600a-4000-bee7-a36fac8e909c | https://static.higgsfield.ai/7e2342d3-600a-4000-bee7-a36fac8e909c.mp4 | https://static.higgsfield.ai/7e2342d3-600a-4000-bee7-a36fac8e909c.webp | https://d1xarpci4ikg0w.cloudfront.net/087c11e3-ea78-44c9-b0dd-823298fb0d95.webp (320×182) |

Source pages: https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90, https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `7e2342d3-600a-4000-bee7-a36fac8e909c`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3ec5176e-bff7-44b8-b017-1f03e61df60f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1441adf3-8f8f-46e8-b6a7-71f777ab0cd4.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/7e2342d3-600a-4000-bee7-a36fac8e909c

```text
an elderly asian man raps and flexes under the streams of water, camera moves chaotically
```

- **Sample `1a46c718-a2e0-4f21-9726-b12e35f55723`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/69e1c0ad-93f0-46d8-b62a-5a79824884dc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/daa1b9f5-b292-4f5f-bdfb-46e053a8f3e0.mp4
  - page: https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/1a46c718-a2e0-4f21-9726-b12e35f55723

```text
a group of rappers as the rap and flex with smoke and lights on the background
```

- **Sample `d6065663-49a1-4294-b3ce-928e64eae25e`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8e56dee6-22e7-46e6-b3bc-581d81b057ac.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c558dc65-9dcd-45f5-a0c1-9e781a87e4a0.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/d6065663-49a1-4294-b3ce-928e64eae25e

```text
camera moves chaotically as the man raps and flexes looking
```

- **Sample `33bf2b00-eb27-4c65-ae4e-54f9f7080bdb`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/aae93c23-7cbc-44e4-b489-9e7875bbaebf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c6d7d18b-f5b6-4084-9463-f7f9ef772713.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb

```text
camera slowly zooms in on an asian man's face as he raps and flexes, handheld camera shot
```

- **Sample `a3315f66-b0b8-4f6f-813b-b48483a3d582`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e25558d1-fd9e-4c06-86fb-5c96f0f0c131.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/748db7a6-4c6f-40b1-a6c9-c070cba0b824.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/a3315f66-b0b8-4f6f-813b-b48483a3d582

```text
two african american rappers ride jetski and rap, the camera fixed on the jetski
```

- **Sample `f82117ab-bb4e-4a90-b427-9dfc859de188`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a481684d-6444-4814-b09a-8fb9f089d5dd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9795182b-8599-407b-a776-67fd500cdba6.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/f82117ab-bb4e-4a90-b427-9dfc859de188

```text
girl raps turning her head into camera as it moves and shakes
```

- **Sample `091f8069-7fa9-4773-b919-3e8a48aa9597`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4a6aabec-396a-430b-9b4f-08f1d2c9d359.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/00d35640-a620-4167-aa23-51b39e225b48.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/091f8069-7fa9-4773-b919-3e8a48aa9597

```text
asian girl raps into microphone holding an acrylic cube in her hand
```

- **Sample `7fce68dd-9b0f-4c83-9581-0f046ae8ebab`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/96fc2c07-dc16-4e06-becf-bcfb56a20e99.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4322c536-c0fc-42de-93b2-17650da35151.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/7fce68dd-9b0f-4c83-9581-0f046ae8ebab

```text
man raps on the stage with luxury cars  behind him, camera rotates around him
```

- **Sample `a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ae8c1aed-021e-4fde-98f8-b75182e4b6f7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d3e636be-a63d-4c5f-bc2d-ca37b19e4804.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1

```text
camera zooms out and then zooms in as a man behind the bars as he raps and flexes
```

- **Sample `32ea2ee6-f22a-494d-a696-277c87014ad9`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d335c5c4-d6cb-49dc-95c4-1265856b83a1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/98ea61ca-90f9-455f-88d7-33de0656399d.mp4
  - page: https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/32ea2ee6-f22a-494d-a696-277c87014ad9

```text
Stylish rapper in a black suit and dark sunglasses stands in the center of a retro office filled with old-school monitors, confidently rapping straight to the camera. He moves with cool precision, gesturing to the beat with effortless swagger, while the other men in similar suits stand around him, silently nodding their heads in approval. Their matching silver hair spikes and stoic expressions add a surreal edge to the scene. The vibe is sharp, vintage-corporate mixed with underground hip-hop attitude.
```

- **Sample `be843dce-72e9-4717-a219-673a32bb53cb`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6156321f-181e-40ee-a0dd-6d6bc7e52014.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cc8726b6-81a0-44f0-9421-e826f338e844.mp4
  - page: https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/be843dce-72e9-4717-a219-673a32bb53cb

```text
Man look to the camera and rapping.
```

- **Sample `c48e57bd-41ba-414f-9311-9c56cdba8b45`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/38f0a0f0-3853-4fba-8f38-edda82b102f2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/75bc68ab-9888-4284-a20b-85f9a20a4602.mp4
  - page: https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55/c48e57bd-41ba-414f-9311-9c56cdba8b45

```text
Stylish female rapper in bold sunglasses and a lilac puffer jacket raps energetically to the camera under a soft pink and purple sky. Her flow is confident and expressive, with crisp gestures and rhythmic movement. The fisheye lens creates a fun, distorted perspective, adding a dynamic edge. The background is dreamy and futuristic, enhancing the high-fashion hip-hop vibe.
```
