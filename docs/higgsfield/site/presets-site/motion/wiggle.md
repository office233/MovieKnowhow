# Wiggle — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Combines slight shaky “wiggle” motion with a smooth zoom or pan to reveal the subject. Adds playful energy and keeps the shot dynamic and engaging, perfect for stylish intros or creative reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702 | `cfbe9732-1b5a-4f59-9dbc-801f85f5c702` | -199 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=cfbe9732-1b5a-4f59-9dbc-801f85f5c702 |
| https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376 | `fbc42e4f-222c-4c79-a5f2-b3a23d169376` | 72 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fbc42e4f-222c-4c79-a5f2-b3a23d169376 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl in a colorful sweater strikes a pose in her bedroom; playful wiggle motion with a quick zoom reveal.
```

Use it as: upload a start image that matches the scene, select motion preset **Wiggle**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/892f780d-c2f4-4b49-a662-6de18f44e0ff.webp (320×242)
- Card preview, variant `fbc42e4f`: https://d1xarpci4ikg0w.cloudfront.net/7bef11fa-2699-41a8-9f9d-3af3ea00a496.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/9406fc76-861d-4167-a506-9dff3f15265a | https://static.higgsfield.ai/9406fc76-861d-4167-a506-9dff3f15265a.mp4 | https://static.higgsfield.ai/9406fc76-861d-4167-a506-9dff3f15265a.webp | https://d1xarpci4ikg0w.cloudfront.net/2985efa5-55dd-4882-b50d-dd13f5aa6cac.webp (320×242) |
| 2 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/55242a39-40b7-40a0-b956-16e2503440d0 | https://static.higgsfield.ai/55242a39-40b7-40a0-b956-16e2503440d0.mp4 | https://static.higgsfield.ai/55242a39-40b7-40a0-b956-16e2503440d0.webp | https://d1xarpci4ikg0w.cloudfront.net/60182e1d-bc17-4700-a947-451f114dbf76.webp (320×242) |
| 3 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/48080d59-d8c7-4730-83f3-d9ab387be0b3 | https://static.higgsfield.ai/48080d59-d8c7-4730-83f3-d9ab387be0b3.mp4 | https://static.higgsfield.ai/48080d59-d8c7-4730-83f3-d9ab387be0b3.webp | https://d1xarpci4ikg0w.cloudfront.net/350e94c1-5cf7-43fc-b5cc-047a5e5cfff3.webp (320×424) |
| 4 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/f785c166-ca12-47a2-a8c1-92c4b5de4916 | https://static.higgsfield.ai/f785c166-ca12-47a2-a8c1-92c4b5de4916.mp4 | https://static.higgsfield.ai/f785c166-ca12-47a2-a8c1-92c4b5de4916.webp | https://d1xarpci4ikg0w.cloudfront.net/6c8599c2-b1d4-4fad-8487-e131c73acec3.webp (320×320) |
| 5 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/d9ef5a8d-a55e-412f-916d-733ba44a3706 | https://static.higgsfield.ai/d9ef5a8d-a55e-412f-916d-733ba44a3706.mp4 | https://static.higgsfield.ai/d9ef5a8d-a55e-412f-916d-733ba44a3706.webp | https://d1xarpci4ikg0w.cloudfront.net/c5a96dea-80e3-419a-8e17-f0937d2f50ce.webp (320×242) |
| 6 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/e99267b2-06fe-4525-b1b8-511feab522f8 | https://static.higgsfield.ai/e99267b2-06fe-4525-b1b8-511feab522f8.mp4 | https://static.higgsfield.ai/e99267b2-06fe-4525-b1b8-511feab522f8.webp | https://d1xarpci4ikg0w.cloudfront.net/bb00e4fa-f9a7-416f-8370-ae1c2f8adf37.webp (320×424) |
| 7 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/4ecb6327-ee1a-4639-89c4-1aad96cd396a | https://static.higgsfield.ai/4ecb6327-ee1a-4639-89c4-1aad96cd396a.mp4 | https://static.higgsfield.ai/4ecb6327-ee1a-4639-89c4-1aad96cd396a.webp | https://d1xarpci4ikg0w.cloudfront.net/731586fb-4811-4da0-a41f-213e434e91dc.webp (320×424) |
| 8 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/909d061e-ae20-4a03-acc7-5156c17646e5 | https://static.higgsfield.ai/909d061e-ae20-4a03-acc7-5156c17646e5.mp4 | https://static.higgsfield.ai/909d061e-ae20-4a03-acc7-5156c17646e5.webp | https://d1xarpci4ikg0w.cloudfront.net/98250068-1e2f-4a7c-b478-6e2358ed722b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702, https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376. Crawled 2026-09.
