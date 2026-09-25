# Buckle Up — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Low angle shot from beneath, as if filmed through a transparent glass floor, revealing the person’s figure and soles, creating a dynamic, voyeuristic perspective.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f | `4ef72175-227a-418b-923d-2831dcdf7d4f` | 35 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=4ef72175-227a-418b-923d-2831dcdf7d4f |
| https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653 | `678f065d-cf5b-4d3d-8d49-9251c43e8653` | 64 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=678f065d-cf5b-4d3d-8d49-9251c43e8653 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Low angle from beneath a glass floor looking up at a woman in sneakers standing on it, city skyline above her.
```

Use it as: upload a start image that matches the scene, select motion preset **Buckle Up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Jarring, turbulent shaking camera · **Best use:** Rough rides, turbulence, loss of control · **Models:** "Buckle Up as the car skids around the corner" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/922bf801-0c23-4c12-8d90-b68a4cd15b32.webp (320×242)
- Card preview, variant `678f065d`: https://d1xarpci4ikg0w.cloudfront.net/3f9c74fb-4977-4e1b-8b94-50ba7102fd13.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/e5257b46-e18d-4052-897b-9a65f3c764b9 | https://static.higgsfield.ai/e5257b46-e18d-4052-897b-9a65f3c764b9.mp4 | https://static.higgsfield.ai/e5257b46-e18d-4052-897b-9a65f3c764b9.webp | https://d1xarpci4ikg0w.cloudfront.net/619ffcac-b7b0-416b-8a3d-f104768768a4.webp (320×182) |
| 2 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/334f044d-0f49-4fc6-aa6a-dd2a117e1558 | https://static.higgsfield.ai/334f044d-0f49-4fc6-aa6a-dd2a117e1558.mp4 | https://static.higgsfield.ai/334f044d-0f49-4fc6-aa6a-dd2a117e1558.webp | https://d1xarpci4ikg0w.cloudfront.net/5fcbfbb0-e4a2-4680-a7b2-ec1dd769b5ca.webp (320×562) |
| 3 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/ffc32e71-57e2-455a-96c4-515117e9f626 | https://static.higgsfield.ai/ffc32e71-57e2-455a-96c4-515117e9f626.mp4 | https://static.higgsfield.ai/ffc32e71-57e2-455a-96c4-515117e9f626.webp | https://d1xarpci4ikg0w.cloudfront.net/2b0b1b8f-fda3-4ba3-9f2e-40470fc92ecc.webp (320×182) |
| 4 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b | https://static.higgsfield.ai/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b.mp4 | https://static.higgsfield.ai/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b.webp | https://d1xarpci4ikg0w.cloudfront.net/9ef29976-ac21-410b-9d5c-a1bd82844eb4.webp (320×242) |
| 5 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/4cb97887-e00d-42fb-a424-15277d5f12f9 | https://static.higgsfield.ai/4cb97887-e00d-42fb-a424-15277d5f12f9.mp4 | https://static.higgsfield.ai/4cb97887-e00d-42fb-a424-15277d5f12f9.webp | https://d1xarpci4ikg0w.cloudfront.net/c6aab69c-4ad5-4714-a457-da26c8d0ea14.webp (320×242) |
| 6 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70 | https://static.higgsfield.ai/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70.mp4 | https://static.higgsfield.ai/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70.webp | https://d1xarpci4ikg0w.cloudfront.net/38f5c020-ea56-4db0-af80-764264a6cb39.webp (320×210) |
| 7 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/45d39613-8e94-4364-a122-daf192ad39dc | https://static.higgsfield.ai/45d39613-8e94-4364-a122-daf192ad39dc.mp4 | https://static.higgsfield.ai/45d39613-8e94-4364-a122-daf192ad39dc.webp | https://d1xarpci4ikg0w.cloudfront.net/3b6465df-d4cc-49b9-a8cc-2189fa23ea25.webp (320×242) |
| 8 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/a9ea628d-e297-4e23-9a4b-27fa2a0c7634 | https://static.higgsfield.ai/a9ea628d-e297-4e23-9a4b-27fa2a0c7634.mp4 | https://static.higgsfield.ai/a9ea628d-e297-4e23-9a4b-27fa2a0c7634.webp | https://d1xarpci4ikg0w.cloudfront.net/7c511361-91ad-4825-af76-d97bcbdbd807.webp (320×210) |

Source pages: https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f, https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653. Crawled 2026-09.
