# Invisible — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject vanishes completely—no body, no clothing—leaving only their movement or impact behind. Feels ghostly, surreal, and perfect for sci-fi, stealth, or supernatural edits.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5 | `28a4d3d3-613a-4796-9f40-f68c7646ded5` | -249 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=28a4d3d3-613a-4796-9f40-f68c7646ded5 |
| https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e | `30802f12-3db4-49b8-b0ab-6f0c737b252e` | 62 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=30802f12-3db4-49b8-b0ab-6f0c737b252e |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man walking down a hallway vanishes completely; only the swinging door shows he passed.
```

Use it as: upload a start image that matches the scene, select motion preset **Invisible**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Levitation + Invisible](levitation-plus-invisible.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/e76b45a9-3894-4693-942b-26bcb2fd65d9.webp (320×568)
- Card preview, variant `30802f12`: https://d1xarpci4ikg0w.cloudfront.net/d26502c3-8339-4f42-b5bb-22ed63d526e0.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/e0b99fee-85b3-4e2d-9aff-c1e510903bb8 | https://static.higgsfield.ai/e0b99fee-85b3-4e2d-9aff-c1e510903bb8.mp4 | https://static.higgsfield.ai/e0b99fee-85b3-4e2d-9aff-c1e510903bb8.webp | https://d1xarpci4ikg0w.cloudfront.net/136b1bbe-11fb-4eb4-8bf7-5d20da508b17.webp (320×320) |
| 2 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/88632ff5-9288-4276-be93-4239279a6272 | https://static.higgsfield.ai/88632ff5-9288-4276-be93-4239279a6272.mp4 | https://static.higgsfield.ai/88632ff5-9288-4276-be93-4239279a6272.webp | https://d1xarpci4ikg0w.cloudfront.net/6dc727e3-3e58-433f-b4b8-4dbed9fe936b.webp (320×182) |
| 3 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/7bf7d100-3d99-4ab7-8041-92dd9f8c6825 | https://static.higgsfield.ai/7bf7d100-3d99-4ab7-8041-92dd9f8c6825.mp4 | https://static.higgsfield.ai/7bf7d100-3d99-4ab7-8041-92dd9f8c6825.webp | https://d1xarpci4ikg0w.cloudfront.net/1277ebbe-26b3-47c8-8447-a3ab2d854666.webp (320×182) |
| 4 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/37d99472-55cc-4e36-bfcd-1db465a34dea | https://static.higgsfield.ai/37d99472-55cc-4e36-bfcd-1db465a34dea.mp4 | https://static.higgsfield.ai/37d99472-55cc-4e36-bfcd-1db465a34dea.webp | https://d1xarpci4ikg0w.cloudfront.net/aabba5ec-ed51-4ff7-99ed-89ab6399e43a.webp (320×182) |
| 5 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/90492058-2e36-44dc-9868-414d0646ff05 | https://static.higgsfield.ai/90492058-2e36-44dc-9868-414d0646ff05.mp4 | https://static.higgsfield.ai/90492058-2e36-44dc-9868-414d0646ff05.webp | https://d1xarpci4ikg0w.cloudfront.net/c70c6f76-3efb-4f90-b7dd-2ccb16698e46.webp (320×182) |
| 6 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/b09d82b0-f4cd-414e-9ea6-1744b9962915 | https://static.higgsfield.ai/b09d82b0-f4cd-414e-9ea6-1744b9962915.mp4 | https://static.higgsfield.ai/b09d82b0-f4cd-414e-9ea6-1744b9962915.webp | https://d1xarpci4ikg0w.cloudfront.net/bb18318d-04c3-43e4-adb5-56fd754d9230.webp (320×182) |
| 7 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/9bdfa0e7-4702-46d2-b891-22fd4e770164 | https://static.higgsfield.ai/9bdfa0e7-4702-46d2-b891-22fd4e770164.mp4 | https://static.higgsfield.ai/9bdfa0e7-4702-46d2-b891-22fd4e770164.webp | https://d1xarpci4ikg0w.cloudfront.net/59657e45-9919-4bc2-95df-6d63c6f02dce.webp (320×182) |
| 8 | https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/932344cd-e67b-4fe4-a47c-3e731acb4057 | https://static.higgsfield.ai/932344cd-e67b-4fe4-a47c-3e731acb4057.mp4 | https://static.higgsfield.ai/932344cd-e67b-4fe4-a47c-3e731acb4057.webp | https://d1xarpci4ikg0w.cloudfront.net/e7b5ee5d-238a-40dd-9bcb-06e586d2f58a.webp (320×182) |

Source pages: https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5, https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `932344cd-e67b-4fe4-a47c-3e731acb4057`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/719c2b7a-4533-4fbc-a72d-2400b2075435.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e6806d4c-9f3f-4c9d-a580-e624b72a06be.mp4
  - page: https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/932344cd-e67b-4fe4-a47c-3e731acb4057

```text
A cinematic surreal scene where a central character is gradually turning invisible from the feet upward — their body transforming into glass-like transparency with shimmering outlines and subtle optical distortions. All elements in the scene are in continuous natural motion: pedestrians walk, leaves flutter, traffic flows, and wind interacts with clothing. The character’s clothes and accessories remain fully visible, floating naturally in space, reacting to movement as if worn by an unseen body. The lighting and shadows continue to interact dynamically with the invisible form. Nothing is frozen — the world moves with full realism, emphasizing the eerie contrast of the character disappearing while life continues uninterrupted around them.
```

- **Sample `9bdfa0e7-4702-46d2-b891-22fd4e770164`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1a5f3ce5-c5c8-48c3-a35e-7c93314b7508.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8f5f9478-45af-4500-a811-b132919935df.mp4
  - page: https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e/9bdfa0e7-4702-46d2-b891-22fd4e770164

```text
A cinematic surreal scene where the main character is gradually turning invisible from the feet upward — their body fading into translucent glass-like transparency with shimmering edges and subtle background distortion. All existing elements in the image remain exactly as they are — no new objects are introduced. However, everything capable of natural motion continues to move subtly and realistically: people already present keep walking or shifting slightly, clothing ripples gently, hair sways, and light flickers — all based on what’s visible in the original frame. The disappearing character’s clothes and accessories remain fully visible, moving as if worn by an unseen figure. The lighting and shadows interact dynamically with the invisible form. The world stays alive, grounded in realism, enhancing the contrast between the vanishing figure and the motion around them.
```

- **Sample `b09d82b0-f4cd-414e-9ea6-1744b9962915`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a972e3d5-603c-47b9-bc52-e38187591708.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/399a0afa-ecc1-451f-bf95-cec1fa77e696.mp4
  - page: https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e/b09d82b0-f4cd-414e-9ea6-1744b9962915

```text
A cinematic surreal scene where the main character is gradually turning invisible from the feet upward — their body fading into translucent glass-like transparency with shimmering edges and subtle background distortion. All existing elements in the image remain exactly as they are — no new objects are introduced. However, everything capable of natural motion continues to move subtly and realistically: people already present keep walking or shifting slightly, clothing ripples gently, hair sways, and light flickers — all based on what’s visible in the original frame. The disappearing character’s clothes and accessories remain fully visible, moving as if worn by an unseen figure. The lighting and shadows interact dynamically with the invisible form. The world stays alive, grounded in realism, enhancing the contrast between the vanishing figure and the motion around them.
```

- **Sample `90492058-2e36-44dc-9868-414d0646ff05`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0d1bc42f-c244-4385-9f91-cbc67951e93a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4ee3d071-f5a0-4552-8d8c-713dfe14e3ff.mp4
  - page: https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e/90492058-2e36-44dc-9868-414d0646ff05

```text
A cinematic surreal moment where the character is gradually turning invisible from the feet upward — their body fading into glass-like transparency with shimmering outlines and light background distortions. All background elements and people continue moving naturally, highlighting the contrast with the vanishing character. The lighting and shadows still interact with the character’s invisible body. Clothes and accessories remain fully visible, floating in space as if worn by an unseen figure
```

- **Sample `37d99472-55cc-4e36-bfcd-1db465a34dea`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/abbf863d-f0ea-4c5a-a5a9-e92671b9d0e4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5d8773fa-76d2-4ec0-b456-0ff32f659515.mp4
  - page: https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/37d99472-55cc-4e36-bfcd-1db465a34dea

```text
A cinematic surreal moment where the character is gradually turning invisible from the feet upward — their body fading into glass-like transparency with shimmering outlines and light background distortions. All background elements and people continue moving naturally, highlighting the contrast with the vanishing character. The lighting and shadows still interact with the character’s invisible body. Clothes and accessories remain fully visible, floating in space as if worn by an unseen figure
```

- **Sample `7bf7d100-3d99-4ab7-8041-92dd9f8c6825`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bf72c3d1-8dfe-4ea6-aef0-28bd2440880d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3bc51e30-da03-4e65-914a-43665474786b.mp4
  - page: https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/7bf7d100-3d99-4ab7-8041-92dd9f8c6825

```text
A cinematic surreal moment where the character is gradually turning invisible from the feet upward — their body fading into glass-like transparency with shimmering outlines and light background distortions. All background elements and people continue moving naturally, highlighting the contrast with the vanishing character. The lighting and shadows still interact with the character’s invisible body. Clothes and accessories remain fully visible, floating in space as if worn by an unseen figure
```

- **Sample `88632ff5-9288-4276-be93-4239279a6272`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dfb69db1-81a8-424a-a93f-7ac67abacc2a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a428158a-cf41-4d4e-a988-c75b7a9d0f91.mp4
  - page: https://higgsfield.ai/motion/30802f12-3db4-49b8-b0ab-6f0c737b252e/88632ff5-9288-4276-be93-4239279a6272

```text
A surreal cinematic moment where the character begins to turn invisible from the feet up — their body partially fading into transparency like glass, shimmering edges and subtle distortions in the background reveal the missing parts. Lighting and shadows still react to the full body. Clothing and accessories remain fully visible, floating in space as if worn by an unseen figure.
```

- **Sample `e0b99fee-85b3-4e2d-9aff-c1e510903bb8`** (priority 0) — Wan 2.5 motion preset, steps=34, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8a997e70-453b-440f-8f94-24c0e362c623.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/db36728b-6052-4c87-9fd1-0998f55b21fc.mp4
  - page: https://higgsfield.ai/motion/28a4d3d3-613a-4796-9f40-f68c7646ded5/e0b99fee-85b3-4e2d-9aff-c1e510903bb8

```text
A futuristic fashion editorial portrait with surreal sci-fi elements, set in a vast circular concrete structure with an open skylight above, casting soft ambient light from a cloudy sky. The setting remains minimalist and architectural, evoking the interior of a monolithic space station or futuristic museum.

At the center of the frame stands a male figure wearing an oversized, avant-garde white puffer jacket with exaggerated volume in the shoulders, paired with black leather pants and silver futuristic sunglasses. However, his body is in the process of becoming invisible—his arms, gloves, and parts of his torso begin to fade into transparency, blending with the background. The fabric of his clothes warps and fragments at the edges, with subtle glitches and digital distortion forming where visibility dissolves.

Only certain elements remain solid: his sunglasses still reflect the skylight above, and parts of his jacket and pants shimmer as if caught between physical and immaterial states. The shadows on the floor beneath him also blur and fade, suggesting his body is no longer casting a fully defined silhouette.

The lighting is clean and diffused, with cool tones dominating—whites, silvers, concrete greys, and hints of atmospheric blue. The visual effect of partial invisibility gives the image an ethereal, high-concept energy—like a fashion figure dissolving into another dimension or phasing out of reality in a technologically advanced world.
```
