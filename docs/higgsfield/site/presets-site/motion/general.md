# General — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** UGC
- **What it does (site description, verbatim):** A balanced, all-purpose camera style with natural movement and clean framing. Works well for any scene, offering a neutral look without dramatic effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 4
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218 | `6e4e30fb-fe99-4df7-b3ab-10e16c6e0218` | 83 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6e4e30fb-fe99-4df7-b3ab-10e16c6e0218 |
| https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a | `d2389a9a-91c2-4276-bc9c-c9e35e8fb85a` | -262 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d2389a9a-91c2-4276-bc9c-c9e35e8fb85a |
| https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e | `86530ac6-10ed-42fe-b460-4c093bc2e69e` | -266 | none | none published (empty `settings`); model Seedance Pro | https://higgsfield.ai/ai/video?model=seedance_pro&presetMotionId=86530ac6-10ed-42fe-b460-4c093bc2e69e |
| https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc | `446b5239-4281-4a2c-a353-0de562e405bc` | -265 | none | none published (empty `settings`); model Minimax Hailuo 2.3 | https://higgsfield.ai/ai/video?model=minimax-2.3&presetMotionId=446b5239-4281-4a2c-a353-0de562e405bc |

Round 2 (non-sitemap pages): 2 more variant(s) of this name run on a different model: Seedance Pro — family `seedance`, Generate button opens `/ai/video?model=seedance_pro&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`); Minimax Hailuo 2.3 — family `minimax`, Generate button opens `/ai/video?model=minimax-2.3&presetMotionId=<id>` (the page's samples block reports model `minimax_hailuo`). These pages publish no settings.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A barista pours latte art in a sunny café, natural camera movement, clean framing.
```

Use it as: upload a start image that matches the scene, select motion preset **General**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Default — no strong stylistic bias · **Best for:** Neutral starting point

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fa4b70c0-5a4d-43e8-9d72-1a77857017a0.webp (320×242)
- Card preview, variant `d2389a9a`: https://d1xarpci4ikg0w.cloudfront.net/689874f3-72c7-4978-9c8d-21b46e81a919.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/57ea664a-1fc7-4f25-9402-094c4514a9fe | https://static.higgsfield.ai/57ea664a-1fc7-4f25-9402-094c4514a9fe.mp4 | https://static.higgsfield.ai/57ea664a-1fc7-4f25-9402-094c4514a9fe.webp | https://d1xarpci4ikg0w.cloudfront.net/9b4b6d30-d59e-4979-8b84-9786506b4771.webp (320×180) |
| 2 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/4ee6faba-8808-430f-9a8c-1ec5aa8515d6 | https://static.higgsfield.ai/4ee6faba-8808-430f-9a8c-1ec5aa8515d6.mp4 | https://static.higgsfield.ai/4ee6faba-8808-430f-9a8c-1ec5aa8515d6.webp | https://d1xarpci4ikg0w.cloudfront.net/82fc98fa-3562-4051-91e0-89ab9e3b8883.webp (320×486) |
| 3 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/472d0757-6dba-4c64-a2a3-32e3ad47399b | https://static.higgsfield.ai/472d0757-6dba-4c64-a2a3-32e3ad47399b.mp4 | https://static.higgsfield.ai/472d0757-6dba-4c64-a2a3-32e3ad47399b.webp | https://d1xarpci4ikg0w.cloudfront.net/b2bbe1f3-cee1-4dd5-86eb-60cd030259f7.webp (320×242) |
| 4 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/dd7aaa92-99cd-4ecd-875a-852b60148ce4 | https://static.higgsfield.ai/dd7aaa92-99cd-4ecd-875a-852b60148ce4.mp4 | https://static.higgsfield.ai/dd7aaa92-99cd-4ecd-875a-852b60148ce4.webp | https://d1xarpci4ikg0w.cloudfront.net/9353a3f9-f3e2-4964-ae84-df0c07db1434.webp (320×242) |
| 5 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/56c92d59-97ce-4d08-82eb-3e165384ba18 | https://static.higgsfield.ai/56c92d59-97ce-4d08-82eb-3e165384ba18.mp4 | https://static.higgsfield.ai/56c92d59-97ce-4d08-82eb-3e165384ba18.webp | https://d1xarpci4ikg0w.cloudfront.net/28be6157-8841-40c2-8db7-ce6575273426.webp (320×242) |
| 6 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/947c29c6-6018-427e-9f99-88f65650876b | https://static.higgsfield.ai/947c29c6-6018-427e-9f99-88f65650876b.mp4 | https://static.higgsfield.ai/947c29c6-6018-427e-9f99-88f65650876b.webp | https://d1xarpci4ikg0w.cloudfront.net/6ea92581-f937-4c69-91eb-35bee13a2b43.webp (320×182) |
| 7 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/7d448a9d-eb7c-4084-9c91-0945e9c67d7e | https://static.higgsfield.ai/7d448a9d-eb7c-4084-9c91-0945e9c67d7e.mp4 | https://static.higgsfield.ai/7d448a9d-eb7c-4084-9c91-0945e9c67d7e.webp | https://d1xarpci4ikg0w.cloudfront.net/df2b3126-46bf-4af2-bb8e-9248bbddcaa5.webp (320×182) |
| 8 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/f6fdc7ec-d2a9-4b39-b564-081decfc0b15 | https://static.higgsfield.ai/f6fdc7ec-d2a9-4b39-b564-081decfc0b15.mp4 | https://static.higgsfield.ai/f6fdc7ec-d2a9-4b39-b564-081decfc0b15.webp | https://d1xarpci4ikg0w.cloudfront.net/2cc45ca4-f121-4c2b-ade6-6383d5537e4e.webp (320×210) |

- Card preview, round-2 variant `86530ac6` (Seedance Pro): https://cdn.higgsfield.ai/seedance_motion/78bc2a8b-ffcb-4f25-9bcf-1828424f4471.mp4 · thumbnail https://cdn.higgsfield.ai/seedance_motion/1e8a545d-628d-4b9a-8d73-62d980c7146f.webp (600×800)
- Card preview, round-2 variant `446b5239` (Minimax Hailuo 2.3): https://cdn.higgsfield.ai/minimax_hailuo_motion/d0028591-db56-4d8e-9fc0-d77efc18d018.mp4 · thumbnail https://cdn.higgsfield.ai/minimax_hailuo_motion/f98d97d8-3352-4d91-a325-e2ccdf44321d.webp (600×800)

### Sample videos, round-2 variant `86530ac6` (Seedance Pro) (9)

| # | Sample page | MP4 | Size |
|---|---|---|---|
| 1 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/0780974e-0396-46f1-a2a9-93c99d93e557 | https://cdn.higgsfield.ai/seedance_sample/0780974e-0396-46f1-a2a9-93c99d93e557.mp4 | 1664×1248 |
| 2 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/5beec619-77eb-4f7a-ac44-710a6e7609ca | https://cdn.higgsfield.ai/seedance_sample/5beec619-77eb-4f7a-ac44-710a6e7609ca.mp4 | 1440×1440 |
| 3 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/4b24b113-d674-4647-b267-2ab2aa611b86 | https://cdn.higgsfield.ai/seedance_sample/4b24b113-d674-4647-b267-2ab2aa611b86.mp4 | 1248×1664 |
| 4 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/f0384738-ea50-44bc-938e-1c03df308196 | https://cdn.higgsfield.ai/seedance_sample/f0384738-ea50-44bc-938e-1c03df308196.mp4 | 1664×1248 |
| 5 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/d14fe984-7eac-4108-937a-400c6bc76306 | https://cdn.higgsfield.ai/seedance_sample/d14fe984-7eac-4108-937a-400c6bc76306.mp4 | 1440×1440 |
| 6 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/b11de073-6d73-4da8-b2d2-5682a52362ce | https://cdn.higgsfield.ai/seedance_sample/b11de073-6d73-4da8-b2d2-5682a52362ce.mp4 | 1248×1664 |
| 7 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/8fbe4c76-3d68-4d71-ab78-2647fef27230 | https://cdn.higgsfield.ai/seedance_sample/8fbe4c76-3d68-4d71-ab78-2647fef27230.mp4 | 1664×1248 |
| 8 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/9fabeefa-33b9-4382-bae3-5243259dfd3a | https://cdn.higgsfield.ai/seedance_sample/9fabeefa-33b9-4382-bae3-5243259dfd3a.mp4 | 1664×1248 |
| 9 | https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e/744ae560-7484-4a1b-8917-4aea0fc2d736 | https://cdn.higgsfield.ai/seedance_sample/744ae560-7484-4a1b-8917-4aea0fc2d736.mp4 | 1920×1088 |

### Sample videos, round-2 variant `446b5239` (Minimax Hailuo 2.3) (8)

| # | Sample page | MP4 | Size |
|---|---|---|---|
| 1 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/30efb532-7f6e-44c4-9f4a-cf4f38721b63 | https://cdn.higgsfield.ai/minimax_hailuo_sample/30efb532-7f6e-44c4-9f4a-cf4f38721b63.mp4 | 1438×1080 |
| 2 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/bfb72d1a-24ec-41bd-9dc4-92da8c2e58fd | https://cdn.higgsfield.ai/minimax_hailuo_sample/bfb72d1a-24ec-41bd-9dc4-92da8c2e58fd.mp4 | 1438×1080 |
| 3 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/dfee44a9-83d3-4892-bcb4-836ae7c461be | https://cdn.higgsfield.ai/minimax_hailuo_sample/dfee44a9-83d3-4892-bcb4-836ae7c461be.mp4 | 1438×1080 |
| 4 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/c4686b91-8dd9-4146-9001-53fa328aa1b6 | https://cdn.higgsfield.ai/minimax_hailuo_sample/c4686b91-8dd9-4146-9001-53fa328aa1b6.mp4 | 1438×1080 |
| 5 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/35db5cf3-2bc2-4c2f-af4c-1e9991844f22 | https://cdn.higgsfield.ai/minimax_hailuo_sample/35db5cf3-2bc2-4c2f-af4c-1e9991844f22.mp4 | 1620×1080 |
| 6 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/d3f14381-aadd-45a5-8362-b6e47ca6484e | https://cdn.higgsfield.ai/minimax_hailuo_sample/d3f14381-aadd-45a5-8362-b6e47ca6484e.mp4 | 1080×1438 |
| 7 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/f233a506-4b51-41a4-9697-99cb29234eba | https://cdn.higgsfield.ai/minimax_hailuo_sample/f233a506-4b51-41a4-9697-99cb29234eba.mp4 | 1438×1080 |
| 8 | https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc/05bcad7e-649c-4622-8174-fa16e3898f4a | https://cdn.higgsfield.ai/minimax_hailuo_sample/05bcad7e-649c-4622-8174-fa16e3898f4a.mp4 | 1080×1438 |

Source pages: https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218, https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a, https://higgsfield.ai/motion/86530ac6-10ed-42fe-b460-4c093bc2e69e, https://higgsfield.ai/motion/446b5239-4281-4a2c-a353-0de562e405bc. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `f6fdc7ec-d2a9-4b39-b564-081decfc0b15`** (priority 7) — Wan 2.5 motion preset, steps=65, frames=81, strength=1, guide_scale=5.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a3869b14-d4e1-46ad-8f4e-87dd88af6cf1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d3998652-6d47-4b60-ac63-c1218c6c8df3.mp4
  - page: https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a/f6fdc7ec-d2a9-4b39-b564-081decfc0b15

```text
The scene holds a static, symmetrical shot. The woman, dressed in the striking yellow, lies still on the glossy black oil surface. , she arches her back and begins to sink gracefully into the thick liquid. The black oil ripples slightly around her figure as she descends, the glossy surface reflecting the studio light. One by one, her face, then her red lips, and finally the bright yellow garment submerge completely. As the last trace of her disappears, the oil surface settles into perfect stillness—flat, mirror-like, untouched except for a faint ripple fading into calm smooth oil black surface
```

- **Sample `7d448a9d-eb7c-4084-9c91-0945e9c67d7e`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d24cb4d7-e48f-40fc-9419-02ad94ba2a26.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f19abd50-ae23-4abd-9680-4f28aebf6ee3.mp4
  - page: https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a/7d448a9d-eb7c-4084-9c91-0945e9c67d7e

```text
A cinematic animation of a young woman walking forward at night, her expression intense and focused. The camera performs a smooth steadicam motion, slowly circling around her as she moves ahead. The movement is fluid and realistic, carefully keeping her centered in the frame while revealing her surroundings—dimly lit street, blurred headlights from cars, and scattered colored lights in the background. Her hair moves slightly with the breeze as the ambient sound of the night—distant traffic, wind, and soft footsteps—builds a sense of tension and atmosphere. The camera’s orbit gives a dynamic sense of motion while maintaining emotional intimacy with the character.
```

- **Sample `947c29c6-6018-427e-9f99-88f65650876b`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cfba6b93-3109-46ae-ab0d-36efd9af82ef.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/114fecd5-a054-4441-af31-9deb92fa130a.mp4
  - page: https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/947c29c6-6018-427e-9f99-88f65650876b

```text
A realistic, cinematic animation set in a vast, sunlit desert. A man in a superhero suit with a flowing red cape stands face-to-face with a woman in a white shirt and black vest. The camera begins a smooth, steady steadicam movement to the left, circling behind the man, allowing the red cape to ripple naturally in the wind as the movement wraps around him. As the camera rounds the back and settles into an over-the-shoulder view, the two characters gently move toward each other and embrace in a firm, emotional hug. No slow motion—every motion is grounded and natural, driven by quiet sincerity. The scene holds a sense of calm closure, with ambient desert wind and silence enhancing the emotional weight.
```

- **Sample `56c92d59-97ce-4d08-82eb-3e165384ba18`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5cde22ed-6562-4b71-be08-7ea26c9a8b90.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a869f1c2-682c-49de-b282-648c9f1937a3.mp4
  - page: https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/56c92d59-97ce-4d08-82eb-3e165384ba18

```text
An older man in a fur-collared coat and eyepatch walks slowly across a rooftop at sunset, smoking a thick cigar. He pauses, touches his chest like he’s catching his breath, then turns to look over the skyline. The wind flutters his scarf as he mutters something under his breath and continues walking with calm menace.
```

- **Sample `dd7aaa92-99cd-4ecd-875a-852b60148ce4`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9e54c986-4011-4157-9974-64e8a0e25c75.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f5b99c4c-4779-43cc-a1e6-3355533da9df.mp4
  - page: https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a/dd7aaa92-99cd-4ecd-875a-852b60148ce4

```text
In a vast golden wheat field, illuminated by the soft glow of the afternoon sun, a woman in a flowing black dress delicately holds stalks of wheat, her posture reflective and poised. Her expression conveys a deep sense of contemplation, contrasting with her companion, who stands nearby in a textured navy sweater and relaxed trousers, looking introspective and slightly distant. The expansive sky looms above, filled with cottony clouds, casting gentle shadows across the undulating waves of grain. A gentle breeze stirs the wheat, creating a rhythmic dance that echoes their unspoken emotions. The scene is rich with golden hues, encapsulating a tranquil yet poignant moment of connection and introspection.
```

- **Sample `472d0757-6dba-4c64-a2a3-32e3ad47399b`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d547c665-77a8-4a70-b438-7d09d0af7ba2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6dc9bd2f-94f5-407d-a72a-8034455f8411.mp4
  - page: https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a/472d0757-6dba-4c64-a2a3-32e3ad47399b

```text
A cinematic animation of a mysterious woman sitting alone at a dimly lit bar, sipping wine. The camera moves slowly and smoothly around her using a steadicam-style motion—circling from behind, gliding past the reflection in the rain-speckled window, and settling on her thoughtful expression. Neon lights from outside flicker and cast reflections across the glossy wooden bar. The woman’s trench coat shifts subtly as she takes a slow sip, her eyes scanning the room with quiet intensity. Soft jazz plays in the background, and the ambiance is thick with late-night mystery, as if she's waiting for something—or someone.
```

- **Sample `4ee6faba-8808-430f-9a8c-1ec5aa8515d6`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dfa8a605-603d-4993-8f45-96bb22b2daa6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/27cccca6-ac46-47d4-8a73-4ef310b7898e.mp4
  - page: https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/4ee6faba-8808-430f-9a8c-1ec5aa8515d6

```text
A man strides forward with confidence, his gaze locked onto the camera as he effortlessly raps. He is dressed in a bold black and yellow New York jacket, exuding a cool charisma amidst a bustling street scene. The sunlight casts a warm glow, illuminating the vibrant storefronts and drawing attention to the lively chatter of his friends trailing behind. Their smiles and rhythmic nods enhance the scene's energy as they enjoy this spontaneous moment. The concrete underfoot and the crisp urban textures create a gritty backdrop, reinforcing the authenticity of his performance. This energetic atmosphere pulsates with youthful vibrance, encapsulating the essence of street culture.
```

- **Sample `57ea664a-1fc7-4f25-9402-094c4514a9fe`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e3170ca1-9465-454b-9f5a-e693fca388bf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/948f0b31-b8e4-479e-9648-730f74aa5ae7.mp4
  - page: https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/57ea664a-1fc7-4f25-9402-094c4514a9fe

```text
A man strides forward with a calm confidence, dressed in a sleek jacket and sunglasses that reflect the city lights. The scene is set against the vibrant nightlife of New York City, illuminated by neon signs and bustling streets. As the camera shifts to capture his front, the atmosphere is electric with anticipation, a pulsating rhythm in the air. The lens then pulls back, revealing the entrance of the club, hinting at the excitement waiting beyond. The night is alive with colors of deep blue and bold reds, casting playful shadows that dance along the pavement. This intimate moment brims with a sense of purpose and allure, as if the city itself is inviting him in.
```
