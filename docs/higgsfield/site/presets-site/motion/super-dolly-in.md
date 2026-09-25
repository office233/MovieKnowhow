# Super Dolly In — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Smoothly moves the camera straight toward the subject for a focused, cinematic effect. Great for building tension, emotion, or spotlighting key moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d | `1c2140b0-0847-4a74-a3d9-f0298aec817d` | 85 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1c2140b0-0847-4a74-a3d9-f0298aec817d |
| https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a | `6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a` | -194 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A detective notices a bloody handprint on a fogged window; the camera pushes straight in on the handprint, building tension.
```

Use it as: upload a start image that matches the scene, select motion preset **Super Dolly In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Exaggerated fast rush toward the subject · **Best use:** Sudden shock, urgent revelation · **Models:** — · **Phrase/template:** "Super Dolly In on the handprint on the window" · **Tips:** Similar to Crash Zoom but a physical move

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2938ff18-3089-4324-86e5-e5823927c295.webp (320×182)
- Card preview, variant `6a6fb1b9`: https://d1xarpci4ikg0w.cloudfront.net/89a0c32b-1654-48c3-aed4-98e17388db47.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/472ef93a-2f0e-4efa-b69f-84de4ed6809f | https://static.higgsfield.ai/472ef93a-2f0e-4efa-b69f-84de4ed6809f.mp4 | https://static.higgsfield.ai/472ef93a-2f0e-4efa-b69f-84de4ed6809f.webp | https://d1xarpci4ikg0w.cloudfront.net/aaded9e4-b554-486f-8731-9789bc986654.webp (320×432) |
| 2 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e | https://static.higgsfield.ai/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e.mp4 | https://static.higgsfield.ai/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e.webp | https://d1xarpci4ikg0w.cloudfront.net/4a6ee7c1-6fba-404d-8888-c72aac933d24.webp (320×236) |
| 3 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/574e1d86-870a-4c63-9106-906e04cc414c | https://static.higgsfield.ai/574e1d86-870a-4c63-9106-906e04cc414c.mp4 | https://static.higgsfield.ai/574e1d86-870a-4c63-9106-906e04cc414c.webp | https://d1xarpci4ikg0w.cloudfront.net/2c4d1e52-fdf7-421b-8828-52dce5693324.webp (320×568) |
| 4 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/6433e2f3-4909-4c04-8639-bbbe91739f0e | https://static.higgsfield.ai/6433e2f3-4909-4c04-8639-bbbe91739f0e.mp4 | https://static.higgsfield.ai/6433e2f3-4909-4c04-8639-bbbe91739f0e.webp | https://d1xarpci4ikg0w.cloudfront.net/3e14739c-8c8f-41f8-904c-9d3a5ffa871f.webp (320×424) |
| 5 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/37782437-ca95-42cc-b023-94141e47a169 | https://static.higgsfield.ai/37782437-ca95-42cc-b023-94141e47a169.mp4 | https://static.higgsfield.ai/37782437-ca95-42cc-b023-94141e47a169.webp | https://d1xarpci4ikg0w.cloudfront.net/f9280ce8-999b-49f2-9cf9-a9e3de581b17.webp (320×424) |
| 6 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/c7fb897d-15d7-4497-8812-73a413fb3f71 | https://static.higgsfield.ai/c7fb897d-15d7-4497-8812-73a413fb3f71.mp4 | https://static.higgsfield.ai/c7fb897d-15d7-4497-8812-73a413fb3f71.webp | https://d1xarpci4ikg0w.cloudfront.net/bb2a0ff0-26dd-49ab-b680-81d6b58d0e72.webp (320×242) |
| 7 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/5fbe9b17-f07b-4ec3-a505-4a83fb36c730 | https://static.higgsfield.ai/5fbe9b17-f07b-4ec3-a505-4a83fb36c730.mp4 | https://static.higgsfield.ai/5fbe9b17-f07b-4ec3-a505-4a83fb36c730.webp | https://d1xarpci4ikg0w.cloudfront.net/6d48ae46-0234-4a41-bd31-1834570e5110.webp (320×486) |
| 8 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/2798109b-5cb4-4d48-8a3d-cc3630be22b7 | https://static.higgsfield.ai/2798109b-5cb4-4d48-8a3d-cc3630be22b7.mp4 | https://static.higgsfield.ai/2798109b-5cb4-4d48-8a3d-cc3630be22b7.webp | https://d1xarpci4ikg0w.cloudfront.net/d22174d1-766d-4599-82cf-5aeb4b371c51.webp (320×182) |
| 9 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/a4454187-c9c8-458f-aadd-c6d70305a156 | https://static.higgsfield.ai/a4454187-c9c8-458f-aadd-c6d70305a156.mp4 | https://static.higgsfield.ai/a4454187-c9c8-458f-aadd-c6d70305a156.webp | https://d1xarpci4ikg0w.cloudfront.net/a1db6617-035c-4141-883b-2b27c678efeb.webp (320×182) |
| 10 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/71871e70-47b8-44e6-b607-8fc20cb87e35 | https://static.higgsfield.ai/71871e70-47b8-44e6-b607-8fc20cb87e35.mp4 | https://static.higgsfield.ai/71871e70-47b8-44e6-b607-8fc20cb87e35.webp | https://d1xarpci4ikg0w.cloudfront.net/2e909af1-0b03-40b7-a1a9-bb1b68483b84.webp (320×210) |
| 11 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/936b32c9-67a9-4aab-a16e-dd329281bb78 | https://static.higgsfield.ai/936b32c9-67a9-4aab-a16e-dd329281bb78.mp4 | https://static.higgsfield.ai/936b32c9-67a9-4aab-a16e-dd329281bb78.webp | https://d1xarpci4ikg0w.cloudfront.net/fc2ff6a5-37ab-4da5-a243-9e1afcf9fc88.webp (320×210) |
| 12 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/f240a57c-32aa-4512-8874-6b2fa6750e51 | https://static.higgsfield.ai/f240a57c-32aa-4512-8874-6b2fa6750e51.mp4 | https://static.higgsfield.ai/f240a57c-32aa-4512-8874-6b2fa6750e51.webp | https://d1xarpci4ikg0w.cloudfront.net/65ed7f31-fc91-41c9-acd6-83baa205acbc.webp (320×210) |

Source pages: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d, https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `f240a57c-32aa-4512-8874-6b2fa6750e51`** (priority 11) — Wan 2.5 motion preset, steps=34, frames=49, strength=1, guide_scale=5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/51489a45-bf7e-40e9-884b-dd0d04025a44.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5fae2df7-a920-411f-873e-0bc34bea14f7.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/f240a57c-32aa-4512-8874-6b2fa6750e51

```text
Camera swiftly performs a “dolly zoom in,” initially capturing the powerful silhouette of a wild horse energetically galloping along the shoreline, its mane flowing dramatically against the expansive sky and shimmering wet sand. As the camera rapidly zooms forward, the silhouette seamlessly dissolves into an intense, high-contrast monochrome portrait of a woman’s face, dramatically lit with a band of sharp shadow across her eyes, emphasizing her piercing gaze and creating an atmosphere of deep, mysterious tension.
```

- **Sample `936b32c9-67a9-4aab-a16e-dd329281bb78`** (priority 10) — Wan 2.5 motion preset, steps=36, frames=81, strength=1, guide_scale=5.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/07098e60-9752-45a3-b6ad-58f86e692cd0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/499ae312-2a17-442a-988b-eb2a76613f0a.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/936b32c9-67a9-4aab-a16e-dd329281bb78

```text
Camera executes a dynamic “dolly in” movement, beginning with a surreal, vibrant digital landscape where an oversized serene head rests peacefully among lush hills, oversized fruits, and winding paths beneath a dramatic twilight sky. The camera swiftly moves forward, rapidly approaching and seamlessly transitioning through the richly colored environment into a dramatic, high-contrast monochrome interior, directly framing an elegant woman standing assertively in a sharp black blazer and lace bra, her intense, commanding gaze fixed powerfully toward the lens, exuding confidence and authority.
```

- **Sample `71871e70-47b8-44e6-b607-8fc20cb87e35`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/30a69262-1a2d-4f57-a77e-c168482dcf1c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8c5781b7-f627-4dc8-8148-fe00f547e703.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/71871e70-47b8-44e6-b607-8fc20cb87e35

```text
A dynamic cinematic sequence begins with a wide-angle shot of a dramatic, red desert landscape under a vibrant blue sky, focusing on a pair of black boots mysteriously placed in the middle of a dusty, winding road. The camera swiftly accelerates forward with an intense super zoom-in motion, rapidly traversing the arid pathway. This fast-paced movement culminates in a striking close-up of an elegant woman dressed in a sophisticated black dress, dramatically reclining against crimson rocks. Her vivid magenta eye makeup complements the surreal desert scene as she sensuously bites into an exotic, vividly colored cactus flower.
```

- **Sample `a4454187-c9c8-458f-aadd-c6d70305a156`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0bef39a8-eb95-4abf-b09c-17f75e0f2734.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/741a8bed-207e-4b6f-abdf-2334833e0d57.mp4
  - page: https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a/a4454187-c9c8-458f-aadd-c6d70305a156

```text
Travis Scott levitates in a dark void, his arms outstretched and body perfectly still, glowing slightly from an overhead spotlight. The camera begins a slow, steady zoom-in, approaching him from a distance. As the camera moves closer, Travis remains motionless — calm, centered, and suspended mid-air. After a few seconds, he slowly tilts his head upward, his glowing eyes locking directly with the lens, breaking the 4th wall with an intense, almost supernatural gaze. The light subtly intensifies as he makes eye contact, creating a dramatic, divine atmosphere. Minimal movement. Maximum tension, 
```

- **Sample `2798109b-5cb4-4d48-8a3d-cc3630be22b7`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/726f61f1-1ce9-449a-ab0a-c2bdd0593095.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/161b80bc-0838-4151-bbf7-77447b2a854f.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/2798109b-5cb4-4d48-8a3d-cc3630be22b7

```text
Camera makes a fast zoom in, closing in on the black man standing confidently under the string lights in the alley. His body sways with rhythm, eyes locked on the imaginary crowd, lips moving with sharp precision. His hands gesture with every punchline, voice full of grit and flow — he's deep into a powerful rap verse, words slicing through the night air, echoing off the graffiti-covered walls around him.
```

- **Sample `5fbe9b17-f07b-4ec3-a505-4a83fb36c730`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9d1c48fc-36f7-4f7f-9225-90711f5a4146.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/59aa6adf-a2c1-4bbd-aa0b-be39ab7f8548.mp4
  - page: https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a/5fbe9b17-f07b-4ec3-a505-4a83fb36c730

```text
The camera slowly zooms in on the man’s face as he sings into the microphone on the stand under a solitary spotlight. His eyes are closed, brow slightly furrowed, and lips trembling with the emotion of the song. A deep sadness softens his expression, each word carried on a quiet, heartfelt breath. The contrast of light and darkness isolates him in the vast blackness, amplifying the loneliness behind his melody.
```

- **Sample `c7fb897d-15d7-4497-8812-73a413fb3f71`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8e30441f-3b24-4705-87f0-605278932bfa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/97114f1f-c756-45ef-ade8-c96daf52395c.mp4
  - page: https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a/c7fb897d-15d7-4497-8812-73a413fb3f71

```text
The camera zooms in steadily on the old man’s face as he looking at his wrist watch. His expression hardens—jaw clenched, eyebrows knit tightly, eyes sharp and unforgiving. 
```

- **Sample `37782437-ca95-42cc-b023-94141e47a169`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9cd4c607-62a6-461d-8bab-f2e63eb05a70.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2dfa7785-d841-4f42-b96a-a94127ecb5c4.mp4
  - page: https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a/37782437-ca95-42cc-b023-94141e47a169

```text
Camera slowly zooms in on his face as he aggressive sings , capturing the anger in his expression, the movement of his lips shaping every word, and the subtle tension in his jaw. His eyes are focused, voice flowing with emotion.
```

- **Sample `6433e2f3-4909-4c04-8639-bbbe91739f0e`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0cfb3925-eb87-4c3e-a7f0-85adf7a4ec1c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6b27f31b-bc37-429d-be71-1b1a97808479.mp4
  - page: https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a/6433e2f3-4909-4c04-8639-bbbe91739f0e

```text
Camera slowly zooms in toward his face, the spotlight intensifying the dramatic aura. As the frame tightens on his expression, he calmly tilts his head, reaches up, and smoothly pulls a single red rose to his nose and starting to sniff it with a subtle smirk, the petals catching the light in a soft, elegant glow.
```

- **Sample `574e1d86-870a-4c63-9106-906e04cc414c`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/06766ca3-b1aa-485c-8301-5e72ba1321dc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fe979e86-c1bc-4514-ae5a-a98dd502821a.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/574e1d86-870a-4c63-9106-906e04cc414c

```text
The camera slowly zooms in on the solitary man sitting on the vast, icy surface under the hazy golden sunlight. As the frame tightens around him, his hands become clear—he’s holding a crumpled stack of money. With a calm, deliberate motion, he flicks open a lighter. The flame ignites, casting a soft flicker against the wind. He raises the fire to the bills, and they catch—crackling softly 
```

- **Sample `ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0f564fd4-3814-4e20-8622-fb82124f95f1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2e0c0224-b343-405a-aebf-9258f0f6bca5.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e

```text
A group of six individuals stands in a desolate clearing surrounded by barren trees, their twisted branches clawing at the pitch-black night sky. The ground is dry, cracked earth, littered with scattered leaves. A single overhead light casts harsh shadows, illuminating the group in stark contrast against the encroaching darkness.

The group is arranged in a tense formation — one man in a dark suit stands at the center, his posture rigid, his gaze locked directly on the camera. Five others, dressed in muted tones — suits, dresses, and collared shirts — sit around him, their faces grim, their eyes wary. The air is thick with quiet tension.

The shot begins wide. The camera slowly pushes forward, the trees receding into the void. The group remains still, yet the weight of their presence intensifies as the camera inches closer. The focus sharpens on the standing man — his face stoic, jaw clenched.

The zoom continues, closing in further. The man’s face sharpens — his brow furrowed, a bead of sweat glistening at his temple. The zoom presses deeper still, revealing his hand — fingers trembling slightly, the faint outline of a silver ring digging into his skin.

Finally, the camera locks onto his hand — a small trickle of blood drips from his knuckles, staining the dust below.
```

- **Sample `472ef93a-2f0e-4efa-b69f-84de4ed6809f`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a20d374b-e12d-41e8-8003-2c1a938e2334.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7ed0df81-b2a9-41bb-b773-564153135455.mp4
  - page: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/472ef93a-2f0e-4efa-b69f-84de4ed6809f

```text
A lone figure stands knee-deep in a reflective body of water, surrounded by towering red rock formations. The landscape feels stark and surreal — muted gray skies stretch above, with an enormous white sun dominating the horizon, its glow cold and unnatural. The crimson cliffs frame the scene, their jagged edges contrasting with the stillness of the water.

The camera starts wide. The figure is distant, almost swallowed by the vastness of the landscape. The pale reflection of the sun ripples across the water, drawing a glowing path toward the figure.

The camera slowly begins to zoom in — the figure’s outline sharpens. A dark silhouette against the glowing reflection, their arms are slightly outstretched, as if reaching for balance or calling for something unseen.

The zoom intensifies, pressing closer — the figure’s details become clearer: a man in a dark suit, his clothes damp and clinging to his frame. His head tilts upward, staring directly at the colossal sun above. His expression is obscured.
```
