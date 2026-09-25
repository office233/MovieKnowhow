# Dolly Zoom In — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera forward while zooming out, warping perspective and creating a dramatic, unsettling effect. Great for shock, realization, or tension.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3 | `114245a3-93fb-434a-9299-44ca9e4656a3` | -268 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=114245a3-93fb-434a-9299-44ca9e4656a3 |
| https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44 | `7d1c4551-e7cb-4728-b473-6b0b85f82b44` | 53 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=7d1c4551-e7cb-4728-b473-6b0b85f82b44 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man at the end of a long hallway freezes in realization; he stays the same size as the corridor behind him stretches away (vertigo effect).
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Dolly forward while zooming out (Hitchcock / vertigo) · **Best use:** Vertigo, shock, realization · **Models:** — · **Phrase/template:** "Dolly Zoom In — subject stays size as background rushes away" · image: "Dolly zoom effect on [img 1]. The background mountains appear to warp and grow larger while she stays the same size. Vertigo effect." · **Tips:** One move only; do not stack with a pan

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/6b58a12d-5c62-42f6-9fa0-145e6f44aacc.webp (320×182)
- Card preview, variant `7d1c4551`: https://d1xarpci4ikg0w.cloudfront.net/3e5856da-c50a-4465-bb0d-abe2e2405bb2.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/2b7775e5-d852-444b-a603-6c834b0a9019 | https://static.higgsfield.ai/2b7775e5-d852-444b-a603-6c834b0a9019.mp4 | https://static.higgsfield.ai/2b7775e5-d852-444b-a603-6c834b0a9019.webp | https://d1xarpci4ikg0w.cloudfront.net/b98ca7b7-c429-494d-905b-0240f427f839.webp (320×180) |
| 2 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/9c61bd98-899c-4e4c-962b-8ef1addcb050 | https://static.higgsfield.ai/9c61bd98-899c-4e4c-962b-8ef1addcb050.mp4 | https://static.higgsfield.ai/9c61bd98-899c-4e4c-962b-8ef1addcb050.webp | https://d1xarpci4ikg0w.cloudfront.net/3df7bd17-e3f0-43b4-b29b-56615e9bf40f.webp (320×180) |
| 3 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/917bfa32-06fc-4ed8-9237-50ea2c7708da | https://static.higgsfield.ai/917bfa32-06fc-4ed8-9237-50ea2c7708da.mp4 | https://static.higgsfield.ai/917bfa32-06fc-4ed8-9237-50ea2c7708da.webp | https://d1xarpci4ikg0w.cloudfront.net/9b00373a-5d41-4654-88d5-d3fadae9cf56.webp (320×486) |
| 4 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/a2aef105-c845-432f-b5f0-5d11160dd825 | https://static.higgsfield.ai/a2aef105-c845-432f-b5f0-5d11160dd825.mp4 | https://static.higgsfield.ai/a2aef105-c845-432f-b5f0-5d11160dd825.webp | https://d1xarpci4ikg0w.cloudfront.net/80c45b33-01ad-448f-a331-182e0d1511f8.webp (320×424) |
| 5 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/fbe6172b-8261-4b2c-bc7e-2482de64ed4b | https://static.higgsfield.ai/fbe6172b-8261-4b2c-bc7e-2482de64ed4b.mp4 | https://static.higgsfield.ai/fbe6172b-8261-4b2c-bc7e-2482de64ed4b.webp | https://d1xarpci4ikg0w.cloudfront.net/c8ad89db-8d82-4ed6-be01-e16aaf55b125.webp (320×486) |
| 6 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/a8c7cde8-87eb-479d-8d90-30663cfbeb77 | https://static.higgsfield.ai/a8c7cde8-87eb-479d-8d90-30663cfbeb77.mp4 | https://static.higgsfield.ai/a8c7cde8-87eb-479d-8d90-30663cfbeb77.webp | https://d1xarpci4ikg0w.cloudfront.net/69f0e74e-577e-497b-af96-37ea4480f4fc.webp (320×182) |
| 7 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/845f35f6-b239-4b8d-a469-1824f707d79c | https://static.higgsfield.ai/845f35f6-b239-4b8d-a469-1824f707d79c.mp4 | https://static.higgsfield.ai/845f35f6-b239-4b8d-a469-1824f707d79c.webp | https://d1xarpci4ikg0w.cloudfront.net/495d54fb-3418-493b-bba3-3de07a74ef98.webp (320×486) |
| 8 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/df854b86-96d2-4b80-b3df-30da7006ed1b | https://static.higgsfield.ai/df854b86-96d2-4b80-b3df-30da7006ed1b.mp4 | https://static.higgsfield.ai/df854b86-96d2-4b80-b3df-30da7006ed1b.webp | https://d1xarpci4ikg0w.cloudfront.net/d965539e-46c5-4daf-a967-55b1ffda2a99.webp (320×242) |
| 9 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/4aa40025-09b4-4534-8eb3-2cc93ce19c96 | https://static.higgsfield.ai/4aa40025-09b4-4534-8eb3-2cc93ce19c96.mp4 | https://static.higgsfield.ai/4aa40025-09b4-4534-8eb3-2cc93ce19c96.webp | https://d1xarpci4ikg0w.cloudfront.net/bfe0218f-4aae-4ac1-9758-e34a585caf5d.webp (320×210) |
| 10 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/10b2c55e-a7cb-4916-9f18-2179d8416e39 | https://static.higgsfield.ai/10b2c55e-a7cb-4916-9f18-2179d8416e39.mp4 | https://static.higgsfield.ai/10b2c55e-a7cb-4916-9f18-2179d8416e39.webp | https://d1xarpci4ikg0w.cloudfront.net/6b5c8643-fa31-4f03-9dd6-e666f1f521c1.webp (320×210) |
| 11 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/af7663b1-0957-43f7-a61b-78a8bf8c8119 | https://static.higgsfield.ai/af7663b1-0957-43f7-a61b-78a8bf8c8119.mp4 | https://static.higgsfield.ai/af7663b1-0957-43f7-a61b-78a8bf8c8119.webp | https://d1xarpci4ikg0w.cloudfront.net/9cf5da74-0a3e-4f2b-9fdc-d7a943c6bc5c.webp (320×424) |
| 12 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/7532bde7-adf8-4cee-8ceb-a790d2e85281 | https://static.higgsfield.ai/7532bde7-adf8-4cee-8ceb-a790d2e85281.mp4 | https://static.higgsfield.ai/7532bde7-adf8-4cee-8ceb-a790d2e85281.webp | https://d1xarpci4ikg0w.cloudfront.net/2c928b3e-2043-47de-ba10-e800582a213c.webp (320×210) |
| 13 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/08c37c84-d2af-4998-bddb-96621a45ff69 | https://static.higgsfield.ai/08c37c84-d2af-4998-bddb-96621a45ff69.mp4 | https://static.higgsfield.ai/08c37c84-d2af-4998-bddb-96621a45ff69.webp | https://d1xarpci4ikg0w.cloudfront.net/f56cd2c5-17be-49d4-8448-1ec7dca3d8b2.webp (320×242) |

Source pages: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3, https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44. Crawled 2026-09.
