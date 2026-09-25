# Sand Storm — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A powerful blast of sand sweeps through the scene, partially or fully engulfing the subject. Dust swirls, visibility drops—ideal for desert chaos, dramatic reveals, or elemental visuals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca | `09b064d1-7a1e-4069-aca2-eca33ee06bca` | -175 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=09b064d1-7a1e-4069-aca2-eca33ee06bca |
| https://higgsfield.ai/motion/69f79677-5ca2-4481-99f0-562881316b7e | `69f79677-5ca2-4481-99f0-562881316b7e` | -239 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=69f79677-5ca2-4481-99f0-562881316b7e |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A nomad in desert robes stands still as a massive wall of sand sweeps over him.
```

Use it as: upload a start image that matches the scene, select motion preset **Sand Storm**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · elemental & destruction):** [Building Explosion](building-explosion.md), [Car Explosion](car-explosion.md), [Fire Breathe](fire-breathe.md), [Flood](flood.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md), [Wind to Face](wind-to-face.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/73336051-75b1-451e-9481-c7e21afd60c6.webp (320×562)
- Card preview, variant `69f79677`: https://d1xarpci4ikg0w.cloudfront.net/2091ad6b-b4a3-48bd-895a-45726af5d5a1.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/a882d567-477a-453f-a694-2e48bcb264e2 | https://static.higgsfield.ai/a882d567-477a-453f-a694-2e48bcb264e2.mp4 | https://static.higgsfield.ai/a882d567-477a-453f-a694-2e48bcb264e2.webp | https://d1xarpci4ikg0w.cloudfront.net/9362657b-d4fa-4135-965a-7d1374958d82.webp (320×236) |
| 2 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/1b7a247f-92c1-451e-9deb-c2d717b0dba8 | https://static.higgsfield.ai/1b7a247f-92c1-451e-9deb-c2d717b0dba8.mp4 | https://static.higgsfield.ai/1b7a247f-92c1-451e-9deb-c2d717b0dba8.webp | https://d1xarpci4ikg0w.cloudfront.net/ef2ca995-ea88-4cd2-b688-f7f28a2fd821.webp (320×182) |
| 3 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/e52d036f-16d9-4f65-b082-099ee4f6f70a | https://static.higgsfield.ai/e52d036f-16d9-4f65-b082-099ee4f6f70a.mp4 | https://static.higgsfield.ai/e52d036f-16d9-4f65-b082-099ee4f6f70a.webp | https://d1xarpci4ikg0w.cloudfront.net/2cce3166-04e4-43b3-ae4b-4959d394b3bc.webp (320×562) |
| 4 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/5de189a2-5e87-4a39-a88c-ce4c0956e227 | https://static.higgsfield.ai/5de189a2-5e87-4a39-a88c-ce4c0956e227.mp4 | https://static.higgsfield.ai/5de189a2-5e87-4a39-a88c-ce4c0956e227.webp | https://d1xarpci4ikg0w.cloudfront.net/8fe62993-9670-41ad-bc81-1919128755ee.webp (320×236) |
| 5 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/1b250f14-7abe-495e-8914-564bb3f28094 | https://static.higgsfield.ai/1b250f14-7abe-495e-8914-564bb3f28094.mp4 | https://static.higgsfield.ai/1b250f14-7abe-495e-8914-564bb3f28094.webp | https://d1xarpci4ikg0w.cloudfront.net/fcd2d328-145a-4ea3-8f5d-78c159f34d96.webp (320×432) |
| 6 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/40d6c691-a8f6-4d67-b09c-2cd24348306a | https://static.higgsfield.ai/40d6c691-a8f6-4d67-b09c-2cd24348306a.mp4 | https://static.higgsfield.ai/40d6c691-a8f6-4d67-b09c-2cd24348306a.webp | https://d1xarpci4ikg0w.cloudfront.net/20c587cb-f4c5-4a96-9d9a-6bb5deff21dd.webp (320×432) |
| 7 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/740a477e-0bdb-411a-af1f-91ee339735c2 | https://static.higgsfield.ai/740a477e-0bdb-411a-af1f-91ee339735c2.mp4 | https://static.higgsfield.ai/740a477e-0bdb-411a-af1f-91ee339735c2.webp | https://d1xarpci4ikg0w.cloudfront.net/c4d7e8f0-7f76-4688-b334-d234bc9350e2.webp (320×236) |
| 8 | https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/3319a735-fef4-4ac5-a9bc-fa5fd3eb850f | https://static.higgsfield.ai/3319a735-fef4-4ac5-a9bc-fa5fd3eb850f.mp4 | https://static.higgsfield.ai/3319a735-fef4-4ac5-a9bc-fa5fd3eb850f.webp | https://d1xarpci4ikg0w.cloudfront.net/99112187-3726-45d5-8cc8-ce223641c914.webp (320×582) |

Source pages: https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca, https://higgsfield.ai/motion/69f79677-5ca2-4481-99f0-562881316b7e. Crawled 2026-09.
