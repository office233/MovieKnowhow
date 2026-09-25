# Building Explosion — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A building erupts in a massive blast, sending debris flying. Creates a powerful moment perfect for action scenes
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045 | `0d53b135-337d-4918-aaf4-2af7ecf4f045` | 120 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0d53b135-337d-4918-aaf4-2af7ecf4f045 |
| https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17 | `e974bca9-c9eb-4cc8-9318-5676cc110f17` | -276 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e974bca9-c9eb-4cc8-9318-5676cc110f17 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A glass skyscraper erupts in a massive blast, debris raining over the street.
```

Use it as: upload a start image that matches the scene, select motion preset **Building Explosion**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Entire building explodes · **Best for:** Disaster, action blockbuster

## Related presets

- **Mixes that use this preset:** [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md)
- **Same category (VFX · elemental & destruction):** [Car Explosion](car-explosion.md), [Fire Breathe](fire-breathe.md), [Flood](flood.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Sand Storm](sand-storm.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md), [Wind to Face](wind-to-face.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/c31ec0d6-70c3-4955-b76a-78dff8798ca3.webp (320×182)
- Card preview, variant `e974bca9`: https://d1xarpci4ikg0w.cloudfront.net/961d20d4-0d21-4954-85f1-9ee85b72037d.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/7339b262-6273-44e9-bd57-35e2d4de2803 | https://static.higgsfield.ai/7339b262-6273-44e9-bd57-35e2d4de2803.mp4 | https://static.higgsfield.ai/7339b262-6273-44e9-bd57-35e2d4de2803.webp | https://d1xarpci4ikg0w.cloudfront.net/46473e86-0e9f-4335-a1cc-88e429f8ccff.webp (320×182) |
| 2 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e | https://static.higgsfield.ai/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e.mp4 | https://static.higgsfield.ai/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e.webp | https://d1xarpci4ikg0w.cloudfront.net/c860e644-c9c7-40fd-8eaa-615d3f1e91ed.webp (320×182) |
| 3 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/6d7152cd-c350-4370-8b2a-99c91543edab | https://static.higgsfield.ai/6d7152cd-c350-4370-8b2a-99c91543edab.mp4 | https://static.higgsfield.ai/6d7152cd-c350-4370-8b2a-99c91543edab.webp | https://d1xarpci4ikg0w.cloudfront.net/d4d5bd99-85a1-4070-8035-5a43ad36a139.webp (320×210) |
| 4 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/2959ee8c-5a0f-4192-8647-226f3e2027dc | https://static.higgsfield.ai/2959ee8c-5a0f-4192-8647-226f3e2027dc.mp4 | https://static.higgsfield.ai/2959ee8c-5a0f-4192-8647-226f3e2027dc.webp | https://d1xarpci4ikg0w.cloudfront.net/8e5aa27e-6b66-4ade-a5ae-301f5d8e05bb.webp (320×210) |
| 5 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/0a63e644-4883-408b-b086-79c89260267e | https://static.higgsfield.ai/0a63e644-4883-408b-b086-79c89260267e.mp4 | https://static.higgsfield.ai/0a63e644-4883-408b-b086-79c89260267e.webp | https://d1xarpci4ikg0w.cloudfront.net/f9b921dc-1962-486e-af00-e0213617d47d.webp (320×486) |
| 6 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/61d87cb4-8bb4-4253-9270-6617917af578 | https://static.higgsfield.ai/61d87cb4-8bb4-4253-9270-6617917af578.mp4 | https://static.higgsfield.ai/61d87cb4-8bb4-4253-9270-6617917af578.webp | https://d1xarpci4ikg0w.cloudfront.net/8c90afd5-cf7e-4f6b-aaff-2b7a8d4562c6.webp (320×182) |
| 7 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/b65e6f38-da70-4d9d-b9eb-3587d91c99ba | https://static.higgsfield.ai/b65e6f38-da70-4d9d-b9eb-3587d91c99ba.mp4 | https://static.higgsfield.ai/b65e6f38-da70-4d9d-b9eb-3587d91c99ba.webp | https://d1xarpci4ikg0w.cloudfront.net/8f6f78cf-2d4b-4330-8b08-355da69f1d71.webp (320×182) |
| 8 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/50096124-60ce-4696-89c3-c6ca5f7a92e6 | https://static.higgsfield.ai/50096124-60ce-4696-89c3-c6ca5f7a92e6.mp4 | https://static.higgsfield.ai/50096124-60ce-4696-89c3-c6ca5f7a92e6.webp | https://d1xarpci4ikg0w.cloudfront.net/93cabd5e-c47c-4f78-8964-e435be43bccb.webp (320×562) |
| 9 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/4ad230f9-31ca-4133-880a-ccc9d1fd5622 | https://static.higgsfield.ai/4ad230f9-31ca-4133-880a-ccc9d1fd5622.mp4 | https://static.higgsfield.ai/4ad230f9-31ca-4133-880a-ccc9d1fd5622.webp | https://d1xarpci4ikg0w.cloudfront.net/519e5130-4dd2-4f7b-bff3-4481cb626651.webp (320×182) |
| 10 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/b5475716-7ffa-4e91-b7e5-60ff8613d019 | https://static.higgsfield.ai/b5475716-7ffa-4e91-b7e5-60ff8613d019.mp4 | https://static.higgsfield.ai/b5475716-7ffa-4e91-b7e5-60ff8613d019.webp | https://d1xarpci4ikg0w.cloudfront.net/a0545e6c-e701-4d7b-9dcf-3026ab1defa9.webp (320×562) |
| 11 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65 | https://static.higgsfield.ai/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65.mp4 | https://static.higgsfield.ai/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65.webp | https://d1xarpci4ikg0w.cloudfront.net/787f4d7f-4452-4ca6-843e-d27dc5bc4e56.webp (320×182) |
| 12 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/2ba6022e-6254-4787-bbd7-36278ec2de3c | https://static.higgsfield.ai/2ba6022e-6254-4787-bbd7-36278ec2de3c.mp4 | https://static.higgsfield.ai/2ba6022e-6254-4787-bbd7-36278ec2de3c.webp | https://d1xarpci4ikg0w.cloudfront.net/6256ac42-2039-48dc-90b1-e4eb56987a30.webp (320×182) |
| 13 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/793c473d-d1c8-42b4-ad07-98c24619ac0f | https://static.higgsfield.ai/793c473d-d1c8-42b4-ad07-98c24619ac0f.mp4 | https://static.higgsfield.ai/793c473d-d1c8-42b4-ad07-98c24619ac0f.webp | https://d1xarpci4ikg0w.cloudfront.net/d6006514-c464-4a43-bf86-de3cfb0d47a5.webp (320×182) |

Source pages: https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045, https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17. Crawled 2026-09.
