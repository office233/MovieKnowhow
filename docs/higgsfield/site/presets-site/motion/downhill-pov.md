# Downhill POV — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Simulates a fast, first-person ride down a slope with tight turns and bumps. Feels immersive, thrilling, and adrenaline-packed.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/67a2ba8e-7f5a-4969-95f8-1326f44ba784 | `67a2ba8e-7f5a-4969-95f8-1326f44ba784` | -217 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=67a2ba8e-7f5a-4969-95f8-1326f44ba784 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
First-person mountain-bike ride down a rocky forest trail, tight turns and bumps, branches whipping past.
```

Use it as: upload a start image that matches the scene, select motion preset **Downhill POV**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ba7d54bd-f4f2-47c2-a0b3-4ffcc98ad62b.webp (320×180)

### Sample videos (0)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|

Source pages: https://higgsfield.ai/motion/67a2ba8e-7f5a-4969-95f8-1326f44ba784. Crawled 2026-09.
