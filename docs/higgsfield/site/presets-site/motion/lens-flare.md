# Lens Flare — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Light hits the lens, creating bright streaks or spots. Adds a dreamy, cinematic, or dramatic feel to your shots
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56 | `53384cbd-e077-4668-b3fe-1ff771564f56` | 75 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=53384cbd-e077-4668-b3fe-1ff771564f56 |
| https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2 | `97687e52-2cfc-4073-ae62-a00c057c2aa2` | -201 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=97687e52-2cfc-4073-ae62-a00c057c2aa2 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A cowboy rides toward the setting sun as warm light streaks across the lens.
```

Use it as: upload a start image that matches the scene, select motion preset **Lens Flare**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Fisheye](fisheye.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7a18bfbe-9c71-4a25-bded-94da5d5c6424.webp (320×182)
- Card preview, variant `97687e52`: https://d1xarpci4ikg0w.cloudfront.net/db3b6420-2a09-40c4-9645-d6c47c2f7cf9.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/0bd77955-1e34-4061-96ed-2ea93d96c55a | https://static.higgsfield.ai/0bd77955-1e34-4061-96ed-2ea93d96c55a.mp4 | https://static.higgsfield.ai/0bd77955-1e34-4061-96ed-2ea93d96c55a.webp | https://d1xarpci4ikg0w.cloudfront.net/6a8efbda-5a8e-44ea-bc51-de3c61df2e6d.webp (320×132) |
| 2 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/12c7d638-536f-4ee6-bca9-400de3aa2138 | https://static.higgsfield.ai/12c7d638-536f-4ee6-bca9-400de3aa2138.mp4 | https://static.higgsfield.ai/12c7d638-536f-4ee6-bca9-400de3aa2138.webp | https://d1xarpci4ikg0w.cloudfront.net/3b8f9fe5-2152-47bc-8b16-319202718e3a.webp (320×182) |
| 3 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/f28b905a-f60d-4577-aea2-e0f0ec9fc567 | https://static.higgsfield.ai/f28b905a-f60d-4577-aea2-e0f0ec9fc567.mp4 | https://static.higgsfield.ai/f28b905a-f60d-4577-aea2-e0f0ec9fc567.webp | https://d1xarpci4ikg0w.cloudfront.net/eb9f19b0-6c03-41f9-8b15-eb140fce4d00.webp (320×182) |
| 4 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7 | https://static.higgsfield.ai/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7.mp4 | https://static.higgsfield.ai/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7.webp | https://d1xarpci4ikg0w.cloudfront.net/4a47d77d-e3ed-4f00-8328-17d590b1697e.webp (320×182) |
| 5 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/bd9c5014-6732-4014-b604-761e5f5ce7c3 | https://static.higgsfield.ai/bd9c5014-6732-4014-b604-761e5f5ce7c3.mp4 | https://static.higgsfield.ai/bd9c5014-6732-4014-b604-761e5f5ce7c3.webp | https://d1xarpci4ikg0w.cloudfront.net/66bb2793-890c-41d4-b392-199f13e44bf1.webp (320×182) |
| 6 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/cc5f85cf-af2e-41ec-816b-cae2cb56648d | https://static.higgsfield.ai/cc5f85cf-af2e-41ec-816b-cae2cb56648d.mp4 | https://static.higgsfield.ai/cc5f85cf-af2e-41ec-816b-cae2cb56648d.webp | https://d1xarpci4ikg0w.cloudfront.net/21aec9eb-b354-4415-b090-b3ebadbd0677.webp (320×182) |
| 7 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/8ba28a22-94e2-449b-a4eb-3d9245a365ab | https://static.higgsfield.ai/8ba28a22-94e2-449b-a4eb-3d9245a365ab.mp4 | https://static.higgsfield.ai/8ba28a22-94e2-449b-a4eb-3d9245a365ab.webp | https://d1xarpci4ikg0w.cloudfront.net/10212698-7d87-4c74-b784-9b754e72aca8.webp (320×182) |
| 8 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/6f990c17-9ad2-416e-af07-84699b58e565 | https://static.higgsfield.ai/6f990c17-9ad2-416e-af07-84699b58e565.mp4 | https://static.higgsfield.ai/6f990c17-9ad2-416e-af07-84699b58e565.webp | https://d1xarpci4ikg0w.cloudfront.net/e908faef-9680-4d47-90d1-16b1fc4e7924.webp (320×424) |
| 9 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/ee614a2f-cf79-4e40-b6b6-86c54500e825 | https://static.higgsfield.ai/ee614a2f-cf79-4e40-b6b6-86c54500e825.mp4 | https://static.higgsfield.ai/ee614a2f-cf79-4e40-b6b6-86c54500e825.webp | https://d1xarpci4ikg0w.cloudfront.net/3b343391-e3b7-4b75-9811-832d74221b9c.webp (320×424) |
| 10 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/818a5434-629f-4bd1-9735-8ee7f52b6dba | https://static.higgsfield.ai/818a5434-629f-4bd1-9735-8ee7f52b6dba.mp4 | https://static.higgsfield.ai/818a5434-629f-4bd1-9735-8ee7f52b6dba.webp | https://d1xarpci4ikg0w.cloudfront.net/032aab0f-6500-4538-a640-0b7399883d67.webp (320×182) |
| 11 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/1edf95f9-84c0-4489-96d6-9011cf5adb5d | https://static.higgsfield.ai/1edf95f9-84c0-4489-96d6-9011cf5adb5d.mp4 | https://static.higgsfield.ai/1edf95f9-84c0-4489-96d6-9011cf5adb5d.webp | https://d1xarpci4ikg0w.cloudfront.net/c624ca91-4f76-44fd-8bd0-32ce2458a2cc.webp (320×424) |
| 12 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/ce462957-b4ff-4099-bfef-316b5e3c35aa | https://static.higgsfield.ai/ce462957-b4ff-4099-bfef-316b5e3c35aa.mp4 | https://static.higgsfield.ai/ce462957-b4ff-4099-bfef-316b5e3c35aa.webp | https://d1xarpci4ikg0w.cloudfront.net/abefd6b8-6482-4574-bf63-f229c878bbc1.webp (320×486) |
| 13 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/b838217f-e918-4f39-b5de-48006b371a27 | https://static.higgsfield.ai/b838217f-e918-4f39-b5de-48006b371a27.mp4 | https://static.higgsfield.ai/b838217f-e918-4f39-b5de-48006b371a27.webp | https://d1xarpci4ikg0w.cloudfront.net/cb0d8cb7-5ca5-4bbb-8685-134665d850ef.webp (320×132) |
| 14 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/0d1bf8f4-014f-449e-aed0-e290f40d5ca0 | https://static.higgsfield.ai/0d1bf8f4-014f-449e-aed0-e290f40d5ca0.mp4 | https://static.higgsfield.ai/0d1bf8f4-014f-449e-aed0-e290f40d5ca0.webp | https://d1xarpci4ikg0w.cloudfront.net/5421db06-938c-408b-8956-cb51f1c3e880.webp (320×182) |

Source pages: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56, https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2. Crawled 2026-09.
