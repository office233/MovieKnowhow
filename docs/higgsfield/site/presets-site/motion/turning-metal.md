# Turning Metal — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject’s skin and body slowly transform into reflective, metallic surfaces—like silver, gold, or chrome. Feels powerful, surreal, and perfect for sci-fi or high-fashion edits.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e | `46e23a6b-1047-40f1-9cf5-33f5f55ddf2e` | -260 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=46e23a6b-1047-40f1-9cf5-33f5f55ddf2e |
| https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663 | `ad8bffe9-17a9-493d-944d-7fe47275c663` | 60 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ad8bffe9-17a9-493d-944d-7fe47275c663 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman in a black dress stands in a studio as her skin slowly turns to polished liquid chrome.
```

Use it as: upload a start image that matches the scene, select motion preset **Turning Metal**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject or object transforms into metal · **Best for:** Sci-fi, industrial, transformation

## Related presets

- **Mixes that use this preset:** [Thunder God + Turning Metal](thunder-god-plus-turning-metal.md), [Turning Metal + Eyes In](turning-metal-plus-eyes-in.md), [Turning Metal + Melting](turning-metal-plus-melting.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ec4542b5-e939-4f46-8a35-2308020d567b.webp (320×424)
- Card preview, variant `ad8bffe9`: https://d1xarpci4ikg0w.cloudfront.net/670ea7df-da96-4ca7-95eb-27392b2f7c62.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/510146d8-b43b-4dc0-8d0d-6a68520b7a38 | https://static.higgsfield.ai/510146d8-b43b-4dc0-8d0d-6a68520b7a38.mp4 | https://static.higgsfield.ai/510146d8-b43b-4dc0-8d0d-6a68520b7a38.webp | https://d1xarpci4ikg0w.cloudfront.net/36455a7a-04a2-4b19-a746-baaedf933c7e.webp (320×424) |
| 2 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/16ed5671-50b4-4a42-bc72-70fc70ee6501 | https://static.higgsfield.ai/16ed5671-50b4-4a42-bc72-70fc70ee6501.mp4 | https://static.higgsfield.ai/16ed5671-50b4-4a42-bc72-70fc70ee6501.webp | https://d1xarpci4ikg0w.cloudfront.net/295ff3e9-b9a7-4716-b97e-e17e6207845c.webp (320×424) |
| 3 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/f064b767-411c-4521-90b2-6672c795e46a | https://static.higgsfield.ai/f064b767-411c-4521-90b2-6672c795e46a.mp4 | https://static.higgsfield.ai/f064b767-411c-4521-90b2-6672c795e46a.webp | https://d1xarpci4ikg0w.cloudfront.net/cb491ba9-a3d0-42b3-812e-d72ec9da6705.webp (320×470) |
| 4 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/1201767e-cc1d-4322-91d7-d5f6a282d416 | https://static.higgsfield.ai/1201767e-cc1d-4322-91d7-d5f6a282d416.mp4 | https://static.higgsfield.ai/1201767e-cc1d-4322-91d7-d5f6a282d416.webp | https://d1xarpci4ikg0w.cloudfront.net/a77ade97-0e3a-4aa0-8e1f-9cc71a7142ef.webp (320×242) |
| 5 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/5fd49764-a781-44ba-837a-051438e4cde6 | https://static.higgsfield.ai/5fd49764-a781-44ba-837a-051438e4cde6.mp4 | https://static.higgsfield.ai/5fd49764-a781-44ba-837a-051438e4cde6.webp | https://d1xarpci4ikg0w.cloudfront.net/e76518dd-f8e0-4b17-a090-17a410d0231b.webp (320×424) |
| 6 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/3150830e-63c4-4d4c-addf-8b7e735cbb9e | https://static.higgsfield.ai/3150830e-63c4-4d4c-addf-8b7e735cbb9e.mp4 | https://static.higgsfield.ai/3150830e-63c4-4d4c-addf-8b7e735cbb9e.webp | https://d1xarpci4ikg0w.cloudfront.net/bf7b2891-a131-4798-926a-849b7a3ec92b.webp (320×424) |
| 7 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/734a37dc-6ba2-4559-9250-ddb59eb892c7 | https://static.higgsfield.ai/734a37dc-6ba2-4559-9250-ddb59eb892c7.mp4 | https://static.higgsfield.ai/734a37dc-6ba2-4559-9250-ddb59eb892c7.webp | https://d1xarpci4ikg0w.cloudfront.net/7c3836c0-7278-44e0-af12-8bff87e6ea19.webp (320×424) |
| 8 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/4e0157fd-664f-42cd-af35-5c271a0684cf | https://static.higgsfield.ai/4e0157fd-664f-42cd-af35-5c271a0684cf.mp4 | https://static.higgsfield.ai/4e0157fd-664f-42cd-af35-5c271a0684cf.webp | https://d1xarpci4ikg0w.cloudfront.net/fff9f512-e1d3-4246-92af-e093a0301487.webp (320×424) |
| 9 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/87700796-c254-4e62-9f83-e6fd413b2b7c | https://static.higgsfield.ai/87700796-c254-4e62-9f83-e6fd413b2b7c.mp4 | https://static.higgsfield.ai/87700796-c254-4e62-9f83-e6fd413b2b7c.webp | https://d1xarpci4ikg0w.cloudfront.net/b444e707-c74b-4fff-a2d1-e86855ac079b.webp (320×486) |
| 10 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/291b341a-4f49-4158-b615-1b89aad51052 | https://static.higgsfield.ai/291b341a-4f49-4158-b615-1b89aad51052.mp4 | https://static.higgsfield.ai/291b341a-4f49-4158-b615-1b89aad51052.webp | https://d1xarpci4ikg0w.cloudfront.net/d9d6079a-8697-4e0f-a4f1-45b95e87eae4.webp (320×486) |
| 11 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/ff2a0599-28cf-41d8-a572-63dbb0ba7d69 | https://static.higgsfield.ai/ff2a0599-28cf-41d8-a572-63dbb0ba7d69.mp4 | https://static.higgsfield.ai/ff2a0599-28cf-41d8-a572-63dbb0ba7d69.webp | https://d1xarpci4ikg0w.cloudfront.net/51d5733e-8d0c-4b91-8d30-ec090f3479e3.webp (320×182) |

Source pages: https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e, https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663. Crawled 2026-09.
