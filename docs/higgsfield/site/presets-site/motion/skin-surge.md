# Skin Surge — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Objects like hands, flowers, or surreal forms emerge smoothly from the subject’s skin, as if breaking through a living surface. Organic, eerie, or poetic—perfect for fantasy, horror, or dreamlike visuals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520 | `a03dfa10-3e92-43ed-a76a-fe9ba1395520` | 67 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a03dfa10-3e92-43ed-a76a-fe9ba1395520 |
| https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b | `aae6a422-fee1-4b89-ac7a-aea5d484fc1b` | -195 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=aae6a422-fee1-4b89-ac7a-aea5d484fc1b |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Flowers and pale hands push out from the skin of a woman's shoulder like breaking through a surface.
```

Use it as: upload a start image that matches the scene, select motion preset **Skin Surge**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fc49afef-b245-48c0-91c6-7f5eced0f7ef.webp (320×182)
- Card preview, variant `aae6a422`: https://d1xarpci4ikg0w.cloudfront.net/b8046c9f-3a5b-4b13-a3c4-9595f0f6a7c6.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/386a1ad7-6a7b-4732-85a3-d107c9e0808f | https://static.higgsfield.ai/386a1ad7-6a7b-4732-85a3-d107c9e0808f.mp4 | https://static.higgsfield.ai/386a1ad7-6a7b-4732-85a3-d107c9e0808f.webp | https://d1xarpci4ikg0w.cloudfront.net/66b1a002-88c8-48d8-a0a1-de778501699f.webp (320×320) |
| 2 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/14bd9968-2298-4e8c-92a4-e4ae473ff885 | https://static.higgsfield.ai/14bd9968-2298-4e8c-92a4-e4ae473ff885.mp4 | https://static.higgsfield.ai/14bd9968-2298-4e8c-92a4-e4ae473ff885.webp | https://d1xarpci4ikg0w.cloudfront.net/409a7ea3-f082-48b1-ac0b-07643d77fc21.webp (320×320) |
| 3 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/1f700c0c-f5f8-4190-96a0-86bb17f231cc | https://static.higgsfield.ai/1f700c0c-f5f8-4190-96a0-86bb17f231cc.mp4 | https://static.higgsfield.ai/1f700c0c-f5f8-4190-96a0-86bb17f231cc.webp | https://d1xarpci4ikg0w.cloudfront.net/006c8ffd-2d30-44e1-b167-6ea333b36e7f.webp (320×210) |
| 4 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/147eb75d-c077-4f9d-b0da-20858093668f | https://static.higgsfield.ai/147eb75d-c077-4f9d-b0da-20858093668f.mp4 | https://static.higgsfield.ai/147eb75d-c077-4f9d-b0da-20858093668f.webp | https://d1xarpci4ikg0w.cloudfront.net/ad59b23c-cbd1-459a-a44f-86e8d23e63d8.webp (320×320) |
| 5 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/9a100037-b7fb-44ac-85a4-aaf098461e99 | https://static.higgsfield.ai/9a100037-b7fb-44ac-85a4-aaf098461e99.mp4 | https://static.higgsfield.ai/9a100037-b7fb-44ac-85a4-aaf098461e99.webp | https://d1xarpci4ikg0w.cloudfront.net/e88e32f2-d4d2-41b1-907e-6e8811719cf0.webp (320×320) |
| 6 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/05b016fc-e7f9-4d4f-887c-a66593c3e08f | https://static.higgsfield.ai/05b016fc-e7f9-4d4f-887c-a66593c3e08f.mp4 | https://static.higgsfield.ai/05b016fc-e7f9-4d4f-887c-a66593c3e08f.webp | https://d1xarpci4ikg0w.cloudfront.net/0afdc24a-fdab-4e8d-ab7c-749e19832897.webp (320×182) |
| 7 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60 | https://static.higgsfield.ai/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60.mp4 | https://static.higgsfield.ai/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60.webp | https://d1xarpci4ikg0w.cloudfront.net/c26098d8-4c36-4a00-b76b-a90ce83e00bc.webp (320×210) |
| 8 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/819c5031-e83a-4dd8-89b6-0203d7d60eb8 | https://static.higgsfield.ai/819c5031-e83a-4dd8-89b6-0203d7d60eb8.mp4 | https://static.higgsfield.ai/819c5031-e83a-4dd8-89b6-0203d7d60eb8.webp | https://d1xarpci4ikg0w.cloudfront.net/b1011162-c3e5-4ea6-b19b-eb893674cdb9.webp (320×486) |
| 9 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/0dd88cc0-475c-498b-a4e6-16cdedb5c475 | https://static.higgsfield.ai/0dd88cc0-475c-498b-a4e6-16cdedb5c475.mp4 | https://static.higgsfield.ai/0dd88cc0-475c-498b-a4e6-16cdedb5c475.webp | https://d1xarpci4ikg0w.cloudfront.net/bc38792d-4437-499b-92c6-f1739d61904b.webp (320×242) |
| 10 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/36558f58-f7e6-4237-97c0-d172ad54e6e3 | https://static.higgsfield.ai/36558f58-f7e6-4237-97c0-d172ad54e6e3.mp4 | https://static.higgsfield.ai/36558f58-f7e6-4237-97c0-d172ad54e6e3.webp | https://d1xarpci4ikg0w.cloudfront.net/201a8190-bf22-4005-8f0b-7500db12473a.webp (320×242) |
| 11 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/fa27070e-c61e-4c02-9c86-faf35297c798 | https://static.higgsfield.ai/fa27070e-c61e-4c02-9c86-faf35297c798.mp4 | https://static.higgsfield.ai/fa27070e-c61e-4c02-9c86-faf35297c798.webp | https://d1xarpci4ikg0w.cloudfront.net/1d60cbc5-5761-4420-bb64-eb9682903556.webp (320×404) |
| 12 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4 | https://static.higgsfield.ai/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4.mp4 | https://static.higgsfield.ai/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4.webp | https://d1xarpci4ikg0w.cloudfront.net/a87179aa-7832-4565-ad4e-4daf131b54fb.webp (320×180) |
| 13 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/ab39fead-12ee-415e-865b-793ce65d35d3 | https://static.higgsfield.ai/ab39fead-12ee-415e-865b-793ce65d35d3.mp4 | https://static.higgsfield.ai/ab39fead-12ee-415e-865b-793ce65d35d3.webp | https://d1xarpci4ikg0w.cloudfront.net/02b52b43-c285-44d6-b85d-02cfa9c668dc.webp (320×320) |
| 14 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/00334ae0-20bf-4713-b945-d0ce6de1aa71 | https://static.higgsfield.ai/00334ae0-20bf-4713-b945-d0ce6de1aa71.mp4 | https://static.higgsfield.ai/00334ae0-20bf-4713-b945-d0ce6de1aa71.webp | https://d1xarpci4ikg0w.cloudfront.net/fcdf6911-61a9-4432-8e0e-3281c2fa4b03.webp (320×486) |

Source pages: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520, https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b. Crawled 2026-09.
