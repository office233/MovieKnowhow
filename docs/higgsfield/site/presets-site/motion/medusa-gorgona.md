# Medusa Gorgona — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject’s body slowly hardens and cracks as skin turns to cold, gray stone—freezing in place like a living statue. A dramatic, mythical transformation perfect for fantasy or curse effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c | `b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c` | -213 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c |
| https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028 | `b969c197-7906-48cb-bb06-313470ac1028` | 106 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b969c197-7906-48cb-bb06-313470ac1028 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A knight raises his sword and slowly turns to cracked gray stone, frozen like a statue.
```

Use it as: upload a start image that matches the scene, select motion preset **Medusa Gorgona**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/284a79ac-84ae-4fb1-9946-2c8bfb3b3a9c.webp (320×210)
- Card preview, variant `b969c197`: https://d1xarpci4ikg0w.cloudfront.net/83c92f6e-95f4-48df-a603-2f88e1ce252a.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/0829b484-e9f3-40b2-adbf-45ca29fc19b3 | https://static.higgsfield.ai/0829b484-e9f3-40b2-adbf-45ca29fc19b3.mp4 | https://static.higgsfield.ai/0829b484-e9f3-40b2-adbf-45ca29fc19b3.webp | https://d1xarpci4ikg0w.cloudfront.net/70954191-031e-4a3e-8b3c-0b31d91a25b1.webp (320×486) |
| 2 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/7355936f-386e-45d2-8bbe-00525faf55f1 | https://static.higgsfield.ai/7355936f-386e-45d2-8bbe-00525faf55f1.mp4 | https://static.higgsfield.ai/7355936f-386e-45d2-8bbe-00525faf55f1.webp | https://d1xarpci4ikg0w.cloudfront.net/272cab67-a14d-48e1-830d-6c9c9de43f0e.webp (320×210) |
| 3 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/11627334-2d74-4d87-94ba-7f9ff102a9a5 | https://static.higgsfield.ai/11627334-2d74-4d87-94ba-7f9ff102a9a5.mp4 | https://static.higgsfield.ai/11627334-2d74-4d87-94ba-7f9ff102a9a5.webp | https://d1xarpci4ikg0w.cloudfront.net/cadab936-3fe6-4b60-934e-d969d0fdb7c5.webp (320×210) |
| 4 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/c22b98fb-8d2b-498e-970c-e0bbc648a869 | https://static.higgsfield.ai/c22b98fb-8d2b-498e-970c-e0bbc648a869.mp4 | https://static.higgsfield.ai/c22b98fb-8d2b-498e-970c-e0bbc648a869.webp | https://d1xarpci4ikg0w.cloudfront.net/2484239a-f59d-46e4-8f54-267192524d4a.webp (320×210) |
| 5 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/3bf871c5-d43d-452e-a65f-89bfc5c3e8bb | https://static.higgsfield.ai/3bf871c5-d43d-452e-a65f-89bfc5c3e8bb.mp4 | https://static.higgsfield.ai/3bf871c5-d43d-452e-a65f-89bfc5c3e8bb.webp | https://d1xarpci4ikg0w.cloudfront.net/32f496e1-2c1f-4bce-8caf-67a5ce121b71.webp (320×210) |
| 6 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/5b7e22b8-dc8f-45dd-8058-f3a268183c27 | https://static.higgsfield.ai/5b7e22b8-dc8f-45dd-8058-f3a268183c27.mp4 | https://static.higgsfield.ai/5b7e22b8-dc8f-45dd-8058-f3a268183c27.webp | https://d1xarpci4ikg0w.cloudfront.net/6e936987-8ff7-4caf-954c-c6d23acdba59.webp (320×210) |
| 7 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/f9992064-93ef-4650-9323-a8812d916a58 | https://static.higgsfield.ai/f9992064-93ef-4650-9323-a8812d916a58.mp4 | https://static.higgsfield.ai/f9992064-93ef-4650-9323-a8812d916a58.webp | https://d1xarpci4ikg0w.cloudfront.net/85785fdb-e553-4d76-9e84-bd5519507a29.webp (320×210) |
| 8 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/bc9a00e8-abba-4565-9137-74455de04818 | https://static.higgsfield.ai/bc9a00e8-abba-4565-9137-74455de04818.mp4 | https://static.higgsfield.ai/bc9a00e8-abba-4565-9137-74455de04818.webp | https://d1xarpci4ikg0w.cloudfront.net/b9ec5642-74cf-4c74-a217-85939cc0e2ba.webp (320×210) |
| 9 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/b34509ed-5c21-4bb9-82f3-08e31b499a2e | https://static.higgsfield.ai/b34509ed-5c21-4bb9-82f3-08e31b499a2e.mp4 | https://static.higgsfield.ai/b34509ed-5c21-4bb9-82f3-08e31b499a2e.webp | https://d1xarpci4ikg0w.cloudfront.net/92c63831-3a61-4037-9703-35a46ceff8ee.webp (320×210) |
| 10 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/5443fb07-c2fa-478c-a3d6-2dd0e7849e76 | https://static.higgsfield.ai/5443fb07-c2fa-478c-a3d6-2dd0e7849e76.mp4 | https://static.higgsfield.ai/5443fb07-c2fa-478c-a3d6-2dd0e7849e76.webp | https://d1xarpci4ikg0w.cloudfront.net/db898149-5f93-46b7-bf96-84bdd096db2b.webp (320×210) |
| 11 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/3ff752fa-9c35-4e2a-9fa5-6175736bdc53 | https://static.higgsfield.ai/3ff752fa-9c35-4e2a-9fa5-6175736bdc53.mp4 | https://static.higgsfield.ai/3ff752fa-9c35-4e2a-9fa5-6175736bdc53.webp | https://d1xarpci4ikg0w.cloudfront.net/e3e719ef-16c7-43dc-9d34-e5678c2bc60e.webp (320×210) |
| 12 | https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/da8ea660-6386-42c5-b9e7-1fd554e0b405 | https://static.higgsfield.ai/da8ea660-6386-42c5-b9e7-1fd554e0b405.mp4 | https://static.higgsfield.ai/da8ea660-6386-42c5-b9e7-1fd554e0b405.webp | https://d1xarpci4ikg0w.cloudfront.net/6a30d68a-dc17-4a95-bd6d-6742b4ec868f.webp (320×210) |

Source pages: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c, https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `da8ea660-6386-42c5-b9e7-1fd554e0b405`** (priority 18) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/79585f23-b7b9-45a0-a394-e89c31d202ff.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/eb75bd65-87c9-4ac9-ac28-dec120680591.mp4
  - page: https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028/da8ea660-6386-42c5-b9e7-1fd554e0b405

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `3ff752fa-9c35-4e2a-9fa5-6175736bdc53`** (priority 17) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fcda5322-1f05-4da8-99c1-66400428f7f5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a6c395f6-e715-498b-a750-f5b5ca6458a2.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/3ff752fa-9c35-4e2a-9fa5-6175736bdc53

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `5443fb07-c2fa-478c-a3d6-2dd0e7849e76`** (priority 16) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c75d0793-ef5f-40db-ae55-2740f6f48e5d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b2930bff-5fdf-49f0-8e27-028ff013b7d6.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/5443fb07-c2fa-478c-a3d6-2dd0e7849e76

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `b34509ed-5c21-4bb9-82f3-08e31b499a2e`** (priority 15) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f7e8d209-33ac-406f-8c72-4d69916dc4c5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c5fb7dca-1174-4757-8d12-ef85e16c2df1.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/b34509ed-5c21-4bb9-82f3-08e31b499a2e

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `bc9a00e8-abba-4565-9137-74455de04818`** (priority 14) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bb4b166a-55e4-4119-9360-5cad687c20f6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1977ff37-a93e-478b-8e99-f96662846632.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/bc9a00e8-abba-4565-9137-74455de04818

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `f9992064-93ef-4650-9323-a8812d916a58`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c34a467f-4043-44e2-a1a8-f21d7bf73271.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/726c6620-f714-401b-be7c-a0377f900ff5.mp4
  - page: https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028/f9992064-93ef-4650-9323-a8812d916a58

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `5b7e22b8-dc8f-45dd-8058-f3a268183c27`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6259eb0c-a495-4588-8384-20321e94db1c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/57e5c6ee-4378-4fc4-be7c-81f93b1577ce.mp4
  - page: https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028/5b7e22b8-dc8f-45dd-8058-f3a268183c27

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `3bf871c5-d43d-452e-a65f-89bfc5c3e8bb`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fb006bae-5b8b-403f-96b9-4c3ed556b5f7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7f5f49a4-219d-4044-989e-8b39d2fa067d.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/3bf871c5-d43d-452e-a65f-89bfc5c3e8bb

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `c22b98fb-8d2b-498e-970c-e0bbc648a869`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4301626c-0bc5-46c1-b6a4-9f1feb522736.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/254c47e0-4753-44d7-bf27-eace4bfe3917.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/c22b98fb-8d2b-498e-970c-e0bbc648a869

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `11627334-2d74-4d87-94ba-7f9ff102a9a5`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1e9e57a5-6f05-428f-9cfe-518d2c6f1c36.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dead9582-7e4a-4dad-aa12-9be1abd32655.mp4
  - page: https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028/11627334-2d74-4d87-94ba-7f9ff102a9a5

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `7355936f-386e-45d2-8bbe-00525faf55f1`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6ffc2fc0-1eba-4588-8f76-d2b6d5b85751.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/61a0b5f7-0bc1-4e76-927a-4ca32f19b7c7.mp4
  - page: https://higgsfield.ai/motion/b969c197-7906-48cb-bb06-313470ac1028/7355936f-386e-45d2-8bbe-00525faf55f1

```text
The subject remains completely still as their body slowly transforms into stone. Their skin gradually hardens, textures become rough and stone-like, and their features freeze in place. The transformation starts naturally and progresses smoothly, without sudden changes. The camera remains static, focused on the subject throughout the transformation. The atmosphere becomes eerie and surreal, emphasizing the lifeless, rigid appearance of the stone form. Cinematic lighting and high contrast highlight the dramatic transition, regardless of the background or scene composition.
```

- **Sample `0829b484-e9f3-40b2-adbf-45ca29fc19b3`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7c1cb7c9-5c90-459a-8e3c-85e418dac30e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c08bb2fe-fe42-4206-aa89-d8c84ba1c1ef.mp4
  - page: https://higgsfield.ai/motion/b157f3d0-f3d5-4b34-8fd1-ee034c43dd1c/0829b484-e9f3-40b2-adbf-45ca29fc19b3

```text
Shot focuses on a young man in a light beige puffer jacket, with a serious, intense expression. The camera lingers on his face and body as he stands against a backdrop of vibrant yellow posters. As the scene progresses, a transformation begins. His body starts to harden and shimmer as white marble with delicate golden veins begins to cover his skin. The marble slowly envelops him, its smooth, polished surface gradually replacing his clothing and skin. The veins of gold weave throughout the stone, creating a striking contrast as they appear against the pure white marble. His face becomes encased in the marble, with only his eyes remaining visible, still full of life, as the transformation continues. The camera captures every intricate detail of the marble as it overtakes him, his body now completely solid, frozen in time. The atmosphere is serene yet eerie, as the marble hardens, freezing him in place, leaving him as a lifelike statue. The visual style is cinematic, with high contrast lighting and a focus on the glossy, veined marble, emphasizing the surreal beauty and stillness of the moment.
```
