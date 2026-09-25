# Low Shutter — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** music video
- **What it does (site description, verbatim):** Creates motion blur by lowering the shutter speed, giving your video a dreamy, streaky, or intense action look. Perfect for stylized or high-energy scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc | `f7949a2f-2bcd-459a-96c0-80eb222abcdc` | -190 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f7949a2f-2bcd-459a-96c0-80eb222abcdc |
| https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567 | `fe85971a-92e3-4c85-ac20-b4ecebaf1567` | 51 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fe85971a-92e3-4c85-ac20-b4ecebaf1567 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A dancer spins under colorful club lights, low shutter motion blur streaking her arms.
```

Use it as: upload a start image that matches the scene, select motion preset **Low Shutter**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Slow shutter, motion blur on fast movement · **Best use:** Speed, urgency, intoxication · **Models:** — · **Phrase/template:** "Low Shutter on the spinning dancer — silhouette blurs" · **Tips:** C1

## Related presets

- **Mixes that use this preset:** [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)
- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Fisheye](fisheye.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d4f55fca-2d75-49c8-9638-464bd8498c4e.webp (320×182)
- Card preview, variant `fe85971a`: https://d1xarpci4ikg0w.cloudfront.net/67160c75-a225-4b78-8cf7-9491349e9edc.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/cbd39cd1-bd29-42b8-9f71-e1fb383f0363 | https://static.higgsfield.ai/cbd39cd1-bd29-42b8-9f71-e1fb383f0363.mp4 | https://static.higgsfield.ai/cbd39cd1-bd29-42b8-9f71-e1fb383f0363.webp | https://d1xarpci4ikg0w.cloudfront.net/3f79ea9e-ec17-454b-9def-242affc31f7b.webp (320×242) |
| 2 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/a5c78518-0446-4286-97ad-8ff66b100aa6 | https://static.higgsfield.ai/a5c78518-0446-4286-97ad-8ff66b100aa6.mp4 | https://static.higgsfield.ai/a5c78518-0446-4286-97ad-8ff66b100aa6.webp | https://d1xarpci4ikg0w.cloudfront.net/4aa68ed4-6f6c-4cde-8a71-871673a66a29.webp (320×182) |
| 3 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/649cab4d-c83c-4e52-a157-268d214ab24c | https://static.higgsfield.ai/649cab4d-c83c-4e52-a157-268d214ab24c.mp4 | https://static.higgsfield.ai/649cab4d-c83c-4e52-a157-268d214ab24c.webp | https://d1xarpci4ikg0w.cloudfront.net/b7117f08-f73a-4f3f-959c-f4fffd80ca92.webp (320×182) |
| 4 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/3b25bfd5-ebb5-4949-80ac-67585b2df670 | https://static.higgsfield.ai/3b25bfd5-ebb5-4949-80ac-67585b2df670.mp4 | https://static.higgsfield.ai/3b25bfd5-ebb5-4949-80ac-67585b2df670.webp | https://d1xarpci4ikg0w.cloudfront.net/07879e2e-483d-4ae6-98c5-90469e10e82e.webp (320×180) |
| 5 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/b43e0091-f31f-433f-83f9-e6f9b0189a1f | https://static.higgsfield.ai/b43e0091-f31f-433f-83f9-e6f9b0189a1f.mp4 | https://static.higgsfield.ai/b43e0091-f31f-433f-83f9-e6f9b0189a1f.webp | https://d1xarpci4ikg0w.cloudfront.net/dffd5ffa-836c-4f84-b015-00184fd168c1.webp (320×182) |
| 6 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/ffbc9862-d7ce-481b-9a05-68481dc52aad | https://static.higgsfield.ai/ffbc9862-d7ce-481b-9a05-68481dc52aad.mp4 | https://static.higgsfield.ai/ffbc9862-d7ce-481b-9a05-68481dc52aad.webp | https://d1xarpci4ikg0w.cloudfront.net/5da20a6e-4cc0-4a8d-9c02-549087738411.webp (320×182) |
| 7 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/03dd0d11-1293-4675-a39b-b9e8358d0814 | https://static.higgsfield.ai/03dd0d11-1293-4675-a39b-b9e8358d0814.mp4 | https://static.higgsfield.ai/03dd0d11-1293-4675-a39b-b9e8358d0814.webp | https://d1xarpci4ikg0w.cloudfront.net/085f16c9-cad1-4c40-9a32-df38c5142301.webp (320×182) |
| 8 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/c415cd18-6682-4008-9dce-fe403c72cbae | https://static.higgsfield.ai/c415cd18-6682-4008-9dce-fe403c72cbae.mp4 | https://static.higgsfield.ai/c415cd18-6682-4008-9dce-fe403c72cbae.webp | https://d1xarpci4ikg0w.cloudfront.net/e71b04f0-e01a-471f-9583-0efe43eaa29a.webp (320×182) |
| 9 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/5901431f-1928-42b6-9fca-d8154a6c5fc3 | https://static.higgsfield.ai/5901431f-1928-42b6-9fca-d8154a6c5fc3.mp4 | https://static.higgsfield.ai/5901431f-1928-42b6-9fca-d8154a6c5fc3.webp | https://d1xarpci4ikg0w.cloudfront.net/af3987a8-8c09-4635-8ed2-879d5770c71c.webp (320×182) |
| 10 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/b99bab3c-82b6-43f7-9b79-2c500a01482c | https://static.higgsfield.ai/b99bab3c-82b6-43f7-9b79-2c500a01482c.mp4 | https://static.higgsfield.ai/b99bab3c-82b6-43f7-9b79-2c500a01482c.webp | https://d1xarpci4ikg0w.cloudfront.net/0eeceb0f-643d-4702-91ed-7b80aae2595b.webp (320×210) |
| 11 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/8ebdfdc0-1663-49cd-924b-f8caa5fa0363 | https://static.higgsfield.ai/8ebdfdc0-1663-49cd-924b-f8caa5fa0363.mp4 | https://static.higgsfield.ai/8ebdfdc0-1663-49cd-924b-f8caa5fa0363.webp | https://d1xarpci4ikg0w.cloudfront.net/4fbec775-e0e9-4b68-a60b-b69b7e700eab.webp (320×242) |
| 12 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/7695742f-0f1c-46e0-9d1d-576c0cae947b | https://static.higgsfield.ai/7695742f-0f1c-46e0-9d1d-576c0cae947b.mp4 | https://static.higgsfield.ai/7695742f-0f1c-46e0-9d1d-576c0cae947b.webp | https://d1xarpci4ikg0w.cloudfront.net/98f8db3c-16f2-4c88-a042-5d5984da2dd7.webp (320×562) |
| 13 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/a851d212-6d99-47f2-a808-8beaa733750a | https://static.higgsfield.ai/a851d212-6d99-47f2-a808-8beaa733750a.mp4 | https://static.higgsfield.ai/a851d212-6d99-47f2-a808-8beaa733750a.webp | https://d1xarpci4ikg0w.cloudfront.net/92cf1177-3633-4821-b242-434b218aa24b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc, https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567. Crawled 2026-09.
