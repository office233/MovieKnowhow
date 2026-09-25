# Disintegration — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A visual effect where the subject breaks apart into particles or dust, creating a surreal, emotional, or epic moment
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d | `4e981984-1cdc-4b96-a2b1-1a7c1ecb822d` | -272 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=4e981984-1cdc-4b96-a2b1-1a7c1ecb822d |
| https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5 | `eacdca06-1fe2-4402-b8d6-4dc32f2889c5` | 71 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=eacdca06-1fe2-4402-b8d6-4dc32f2889c5 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A warrior on a battlefield looks at his hands as he breaks apart into drifting ash.
```

Use it as: upload a start image that matches the scene, select motion preset **Disintegration**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject breaks apart into particles · **Best for:** Dramatic death, magic, sci-fi

## Related presets

- **Mixes that use this preset:** [Building Explosion + Disintegration](building-explosion-plus-disintegration.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/c158b9ea-fcd5-46b2-95ea-4bff129c9313.webp (320×416)
- Card preview, variant `eacdca06`: https://d1xarpci4ikg0w.cloudfront.net/e7888a40-116e-4891-a782-700729f3c03c.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/42ec6c22-5281-479d-b136-f000c590badb | https://static.higgsfield.ai/42ec6c22-5281-479d-b136-f000c590badb.mp4 | https://static.higgsfield.ai/42ec6c22-5281-479d-b136-f000c590badb.webp | https://d1xarpci4ikg0w.cloudfront.net/5f28a6b2-76e2-49f0-98d5-4be00bb90e46.webp (320×182) |
| 2 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1 | https://static.higgsfield.ai/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1.mp4 | https://static.higgsfield.ai/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1.webp | https://d1xarpci4ikg0w.cloudfront.net/189dfb9a-e32f-426b-bd72-3b7315b408fc.webp (320×182) |
| 3 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/73904582-12e2-4391-80c6-94633656d7b4 | https://static.higgsfield.ai/73904582-12e2-4391-80c6-94633656d7b4.mp4 | https://static.higgsfield.ai/73904582-12e2-4391-80c6-94633656d7b4.webp | https://d1xarpci4ikg0w.cloudfront.net/f44b6508-abcf-4165-90c4-5921be9dcf26.webp (320×486) |
| 4 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/126203dd-fae7-4af5-a437-b164abcfd8fd | https://static.higgsfield.ai/126203dd-fae7-4af5-a437-b164abcfd8fd.mp4 | https://static.higgsfield.ai/126203dd-fae7-4af5-a437-b164abcfd8fd.webp | https://d1xarpci4ikg0w.cloudfront.net/2d1a9fac-0e3c-47d0-88ec-f9a61807279b.webp (320×486) |
| 5 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8 | https://static.higgsfield.ai/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8.mp4 | https://static.higgsfield.ai/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8.webp | https://d1xarpci4ikg0w.cloudfront.net/a4ea5c0b-b9e0-4316-befb-dccf9574eacc.webp (320×486) |
| 6 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/071072ed-f2af-4a69-a12d-7bb9d3cda013 | https://static.higgsfield.ai/071072ed-f2af-4a69-a12d-7bb9d3cda013.mp4 | https://static.higgsfield.ai/071072ed-f2af-4a69-a12d-7bb9d3cda013.webp | https://d1xarpci4ikg0w.cloudfront.net/2e0cead8-280e-4646-a514-5707922e721d.webp (320×424) |
| 7 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/ec4b4379-6f45-4357-bfa7-38fa4f739443 | https://static.higgsfield.ai/ec4b4379-6f45-4357-bfa7-38fa4f739443.mp4 | https://static.higgsfield.ai/ec4b4379-6f45-4357-bfa7-38fa4f739443.webp | https://d1xarpci4ikg0w.cloudfront.net/902059c2-775a-4fd8-98ac-a6fea582e0e1.webp (320×486) |
| 8 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28 | https://static.higgsfield.ai/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28.mp4 | https://static.higgsfield.ai/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28.webp | https://d1xarpci4ikg0w.cloudfront.net/156e5f25-54ae-419c-b07e-73cce5be434a.webp (320×486) |
| 9 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/3d01a273-ff69-4304-99b7-8780b044bb3c | https://static.higgsfield.ai/3d01a273-ff69-4304-99b7-8780b044bb3c.mp4 | https://static.higgsfield.ai/3d01a273-ff69-4304-99b7-8780b044bb3c.webp | https://d1xarpci4ikg0w.cloudfront.net/adef3993-9816-426b-85dd-93b58db1d743.webp (320×210) |
| 10 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/9b32116d-86dc-468a-8445-d1891c47a193 | https://static.higgsfield.ai/9b32116d-86dc-468a-8445-d1891c47a193.mp4 | https://static.higgsfield.ai/9b32116d-86dc-468a-8445-d1891c47a193.webp | https://d1xarpci4ikg0w.cloudfront.net/e427516f-d719-4806-aec9-28ef906602d3.webp (320×210) |
| 11 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/cb4c1f75-ac88-4f85-8a96-9c330e976fe8 | https://static.higgsfield.ai/cb4c1f75-ac88-4f85-8a96-9c330e976fe8.mp4 | https://static.higgsfield.ai/cb4c1f75-ac88-4f85-8a96-9c330e976fe8.webp | https://d1xarpci4ikg0w.cloudfront.net/612f2737-d872-4bee-94c6-4673b5d434b1.webp (320×210) |
| 12 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/d8749e9b-4f25-4e32-a395-bd52bc6f79da | https://static.higgsfield.ai/d8749e9b-4f25-4e32-a395-bd52bc6f79da.mp4 | https://static.higgsfield.ai/d8749e9b-4f25-4e32-a395-bd52bc6f79da.webp | https://d1xarpci4ikg0w.cloudfront.net/a912632d-4207-4dce-aa68-c9d73d3f3e9f.webp (320×182) |

Source pages: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d, https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5. Crawled 2026-09.
