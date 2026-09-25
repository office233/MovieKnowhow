# Focus Change — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Shifts the focus from one subject to another in the same shot, guiding the viewer’s attention. Great for storytelling, reveals, or emotional emphasis.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224 | `0753d80c-7369-4682-b725-8729ab638224` | 76 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0753d80c-7369-4682-b725-8729ab638224 |
| https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d | `390e084a-4a80-410b-a808-77411828c61d` | -188 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=390e084a-4a80-410b-a808-77411828c61d |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Focus racks from a wedding ring on a table in the foreground to a woman crying by the window.
```

Use it as: upload a start image that matches the scene, select motion preset **Focus Change**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Named control: a focus shift between subjects · **Best use:** Drama, romance · **Models:** — · **Phrase/template:** "Camera: Focus Change from the rain on the window to her face." · **Tips:** Romance: "slight Focus Change between faces"

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Fisheye](fisheye.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/74f2caaf-2982-4f8f-b1d6-961bd5b2020c.webp (320×210)
- Card preview, variant `390e084a`: https://d1xarpci4ikg0w.cloudfront.net/cdc25ae9-0bd7-4a5a-9fd1-583b0e4309d0.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/28b72af3-89d4-4376-80fe-3ae4e4603860 | https://static.higgsfield.ai/28b72af3-89d4-4376-80fe-3ae4e4603860.mp4 | https://static.higgsfield.ai/28b72af3-89d4-4376-80fe-3ae4e4603860.webp | https://d1xarpci4ikg0w.cloudfront.net/16f6ad9c-cc10-4dd8-af43-374deb1c352e.webp (320×182) |
| 2 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/ec740d10-ac50-47ac-aece-1b85becde6f9 | https://static.higgsfield.ai/ec740d10-ac50-47ac-aece-1b85becde6f9.mp4 | https://static.higgsfield.ai/ec740d10-ac50-47ac-aece-1b85becde6f9.webp | https://d1xarpci4ikg0w.cloudfront.net/5a14a8d6-f6ca-4ab9-8dbe-d77574557ba0.webp (320×182) |
| 3 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db | https://static.higgsfield.ai/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db.mp4 | https://static.higgsfield.ai/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db.webp | https://d1xarpci4ikg0w.cloudfront.net/f290551a-2033-4045-bbf1-c0f17d327fd6.webp (320×242) |
| 4 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7 | https://static.higgsfield.ai/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7.mp4 | https://static.higgsfield.ai/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7.webp | https://d1xarpci4ikg0w.cloudfront.net/d48ba6f4-f00a-469f-9a2e-cd7ccab2cf19.webp (320×210) |
| 5 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/49fcabb7-6423-462d-bfd2-d2754b7fc93a | https://static.higgsfield.ai/49fcabb7-6423-462d-bfd2-d2754b7fc93a.mp4 | https://static.higgsfield.ai/49fcabb7-6423-462d-bfd2-d2754b7fc93a.webp | https://d1xarpci4ikg0w.cloudfront.net/66f60e77-eb17-4821-a211-244029cf0d75.webp (320×424) |
| 6 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/1ad22817-6b2e-4926-aaa1-cc087af2b058 | https://static.higgsfield.ai/1ad22817-6b2e-4926-aaa1-cc087af2b058.mp4 | https://static.higgsfield.ai/1ad22817-6b2e-4926-aaa1-cc087af2b058.webp | https://d1xarpci4ikg0w.cloudfront.net/7945e67e-3803-4fcf-9420-6379e0a95f7c.webp (320×320) |
| 7 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/1bc84d37-b387-4589-aa1e-3da5947122d5 | https://static.higgsfield.ai/1bc84d37-b387-4589-aa1e-3da5947122d5.mp4 | https://static.higgsfield.ai/1bc84d37-b387-4589-aa1e-3da5947122d5.webp | https://d1xarpci4ikg0w.cloudfront.net/5fbec3d3-ed3a-4731-aa48-70a4638d53e9.webp (320×424) |
| 8 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/0d1c71cb-9779-41c2-aa56-2330757d4e6f | https://static.higgsfield.ai/0d1c71cb-9779-41c2-aa56-2330757d4e6f.mp4 | https://static.higgsfield.ai/0d1c71cb-9779-41c2-aa56-2330757d4e6f.webp | https://d1xarpci4ikg0w.cloudfront.net/99645176-305e-467e-a6cd-4dd214ad9a7d.webp (320×424) |
| 9 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/7a5a9c8f-685f-460c-9122-c83ca6657eaf | https://static.higgsfield.ai/7a5a9c8f-685f-460c-9122-c83ca6657eaf.mp4 | https://static.higgsfield.ai/7a5a9c8f-685f-460c-9122-c83ca6657eaf.webp | https://d1xarpci4ikg0w.cloudfront.net/aee0f275-d40e-467d-912a-1b8bea0ecc2e.webp (320×174) |
| 10 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9 | https://static.higgsfield.ai/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9.mp4 | https://static.higgsfield.ai/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9.webp | https://d1xarpci4ikg0w.cloudfront.net/3a83bf5b-3488-431d-9674-7d7b776b815f.webp (320×426) |

Source pages: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224, https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d. Crawled 2026-09.
