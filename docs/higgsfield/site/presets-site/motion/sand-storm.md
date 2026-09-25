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


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3319a735-fef4-4ac5-a9bc-fa5fd3eb850f`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 704×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/85ea1ecd-967a-4cfb-ab87-51d47f8038e2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/143d9809-92a4-447c-8611-76751302869a.mp4
  - page: https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/3319a735-fef4-4ac5-a9bc-fa5fd3eb850f

```text
A stylish young Black man stands outdoors under a clear blue sky, smiling brightly in a pink striped sweater, fluffy pink bucket hat, and red-tinted sunglasses. Suddenly, a massive sandstorm begins to rise behind him, the horizon darkening as clouds of sand swirl and push forward, creating a dramatic contrast between the cheerful foreground and the chaotic storm in the background.

```

- **Sample `740a477e-0bdb-411a-af1f-91ee339735c2`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4f0cb2ea-b1f7-4dce-a0ba-72316ef3a3ab.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/71f133c6-5cb8-4d33-97c6-5db511757b92.mp4
  - page: https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/740a477e-0bdb-411a-af1f-91ee339735c2

```text
A bold, glamorous woman with glossy skin poses dramatically, wearing dark sunglasses and a silk headscarf while sticking her tongue out, bathed in red studio lighting. Suddenly and violently, a massive sandstorm erupts behind her, swirling clouds of dust and sand quickly engulfing the frame, partially obscuring her figure as the storm begins to cover her with wind-blown grains.

```

- **Sample `40d6c691-a8f6-4d67-b09c-2cd24348306a`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8e65b386-888d-4190-b833-d4fc281c3a7d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/04c17ad7-456f-4ccd-90ef-7377cf07ece0.mp4
  - page: https://higgsfield.ai/motion/69f79677-5ca2-4481-99f0-562881316b7e/40d6c691-a8f6-4d67-b09c-2cd24348306a

```text
A serious young man with a shaved head in a black bomber jacket and Adidas track pants stands against a tall wire fence on a sports field. Suddenly, a massive sandstorm begins to sweep in from the background, rapidly consuming the sky and field with golden dust, as swirling sand starts wrapping around him, merging with his clothes in a dramatic and surreal motion.

```

- **Sample `1b250f14-7abe-495e-8914-564bb3f28094`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0fcc41ba-dc99-4eb0-a860-de8fe2ba0747.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/79a72234-ec47-4748-83ae-beaf684b22e0.mp4
  - page: https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/1b250f14-7abe-495e-8914-564bb3f28094

```text
A joyful young woman with curly hair and stacked baseball caps laughs brightly against a clean studio backdrop. She wears bold gold hoop earrings and a navy tank top. Suddenly, from the left side of the frame, a fierce sandstorm begins to sweep in — golden sand swirls aggressively, creeping into the scene and partially engulfing the left background and edge of her body, adding a sense of chaos and contrast to the cheerful mood.

```

- **Sample `5de189a2-5e87-4a39-a88c-ce4c0956e227`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b9e9b97f-50b3-4bbc-aa14-1c77c252e803.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/32b5a7c2-9e6e-4a03-96cc-082ac5209641.mp4
  - page: https://higgsfield.ai/motion/69f79677-5ca2-4481-99f0-562881316b7e/5de189a2-5e87-4a39-a88c-ce4c0956e227

```text
A confident young man stands on a street basketball court holding red and white Air Jordan sneakers over his shoulder. He wears a gray Jordan t-shirt and black shorts with red stripes. The atmosphere is calm, but suddenly from the left side of the frame, a powerful sandstorm starts to invade — golden sand violently sweeps in, partially obscuring the background buildings and beginning to wrap around the edge of his body, creating dramatic contrast between urban calm and natural chaos.

```

- **Sample `e52d036f-16d9-4f65-b082-099ee4f6f70a`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/66f97607-d693-4fea-beae-55bc50315fb9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f660b1b0-6a5e-454f-8561-1235510565cc.mp4
  - page: https://higgsfield.ai/motion/69f79677-5ca2-4481-99f0-562881316b7e/e52d036f-16d9-4f65-b082-099ee4f6f70a

```text
A stylish young man stands in a modern city street, wearing a black “Paradise” cap, rectangular black sunglasses, and a blue-and-white scarf draped under the cap like a desert wrap. He has a piercing on his lip and nose, and maintains a calm, serious expression. Suddenly, from behind him, a massive, highly realistic sandstorm begins forming — golden-brown dust clouds swell and swirl upwards into the sky, partially engulfing the buildings and the background. The lighting starts to dim slightly from the thick dust, while his scarf begins to flutter slightly in the rising wind. The shot captures a surreal contrast between his composed pose and the chaos unfolding behind.

```

- **Sample `1b7a247f-92c1-451e-9deb-c2d717b0dba8`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e5083aa8-0e88-4bc3-95c0-addd6a913ae5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6b6efb57-8f65-4852-9685-29ca0b500282.mp4
  - page: https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/1b7a247f-92c1-451e-9deb-c2d717b0dba8

```text
A young East Asian woman stands on a softly lit urban street at night, with colorful bokeh lights behind her. She wears a blue jacket and looks slightly to the side with a thoughtful expression. The scene is calm and cinematic. Suddenly, a highly realistic sandstorm begins to rise behind her, coming from the distance — thick swirling dust, golden-brown tones, and particles catching the street lights. The storm rolls forward powerfully, casting shadows and creating turbulence in the air, yet she remains still, unaware. Realistic lighting and depth of field enhance the drama of the moment.

```

- **Sample `a882d567-477a-453f-a694-2e48bcb264e2`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2e6b8396-3ec1-497d-bf40-72f264f33240.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/47f4d207-6cec-4594-84b9-8b61ce9b09cc.mp4
  - page: https://higgsfield.ai/motion/09b064d1-7a1e-4069-aca2-eca33ee06bca/a882d567-477a-453f-a694-2e48bcb264e2

```text
A breathtaking twilight view of Tokyo with the glowing Tokyo Tower on the left, modern city buildings, neon signs, and cherry blossoms in the foreground. Suddenly, a fast and violent sandstorm bursts in from the left, sweeping across the cityscape toward the right. The bright lights start to dim under the heavy dust. Cherry blossoms are ripped from the trees and caught in the wind. The air becomes thick with particles, and the once peaceful city turns into a cinematic chaos. Realistic motion blur, particles, and atmospheric lighting convey the intensity of the storm.

```
