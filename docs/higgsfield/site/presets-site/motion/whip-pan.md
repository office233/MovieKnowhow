# Whip Pan — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** A fast camera pan that blurs the scene, used to transition between shots or add energy and speed. Great for action, comedy, or sudden scene changes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2 | `7a144766-cdd2-4b73-8a27-67b35f2d4ba2` | -180 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=7a144766-cdd2-4b73-8a27-67b35f2d4ba2 |
| https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b | `a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b` | 88 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
In a busy diner the camera whip-pans from a waitress to a man bursting through the front door.
```

Use it as: upload a start image that matches the scene, select motion preset **Whip Pan**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fast lateral blur pan · **Best use:** Dynamic transitions, following rapid action · **Models:** Higgsfield DoP · **Phrase/template:** "Whip Pan from the thief to the officer" · DoP template: "Whip pan from left to right. A skater lands a trick on wet pavement at night. Neon signs streak in the motion blur. Cut on the landing impact." · precise: "Whip pan from subject A to subject B in 0.5 seconds. Speed: 90 degrees per second. Motion blur acceptable…" · **Tips:** A music-video primary move. Forbidden in luxury. See recipe [whip-pan](recipes/whip-pan.md).

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7c1aa41a-939c-483e-b4fb-eeab96a3fc0e.webp (320×486)
- Card preview, variant `a3f2c5eb`: https://d1xarpci4ikg0w.cloudfront.net/1357ff6a-399b-4b58-ac10-1329a7436b7b.webp

### Sample videos (22; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/7be9daf4-081a-4525-ae97-e95ba74de5c2 | https://static.higgsfield.ai/7be9daf4-081a-4525-ae97-e95ba74de5c2.mp4 | https://static.higgsfield.ai/7be9daf4-081a-4525-ae97-e95ba74de5c2.webp | https://d1xarpci4ikg0w.cloudfront.net/31fcf84d-acd9-45b9-969d-bc7ab237299b.webp (320×180) |
| 2 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/dd0fa133-e8af-4d0c-a595-2e08ed231e51 | https://static.higgsfield.ai/dd0fa133-e8af-4d0c-a595-2e08ed231e51.mp4 | https://static.higgsfield.ai/dd0fa133-e8af-4d0c-a595-2e08ed231e51.webp | https://d1xarpci4ikg0w.cloudfront.net/eb8d80ef-1927-4d69-ad57-8393aa434047.webp (320×180) |
| 3 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f21cefcc-2ae2-4137-9139-25a80ccd82c6 | https://static.higgsfield.ai/f21cefcc-2ae2-4137-9139-25a80ccd82c6.mp4 | https://static.higgsfield.ai/f21cefcc-2ae2-4137-9139-25a80ccd82c6.webp | https://d1xarpci4ikg0w.cloudfront.net/34e0aa08-5229-4e1d-84de-867523506ab0.webp (320×180) |
| 4 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e0f82eda-addb-4554-93f3-609e644421c8 | https://static.higgsfield.ai/e0f82eda-addb-4554-93f3-609e644421c8.mp4 | https://static.higgsfield.ai/e0f82eda-addb-4554-93f3-609e644421c8.webp | https://d1xarpci4ikg0w.cloudfront.net/81c33a77-6d6f-42b7-ab54-c4784e824148.webp (320×180) |
| 5 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91 | https://static.higgsfield.ai/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91.mp4 | https://static.higgsfield.ai/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91.webp | https://d1xarpci4ikg0w.cloudfront.net/cfa3a1fb-5fa3-46d9-b306-73a21df3dde4.webp (320×568) |
| 6 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4f1ee1eb-7204-4b14-92aa-59ef93154418 | https://static.higgsfield.ai/4f1ee1eb-7204-4b14-92aa-59ef93154418.mp4 | https://static.higgsfield.ai/4f1ee1eb-7204-4b14-92aa-59ef93154418.webp | https://d1xarpci4ikg0w.cloudfront.net/b0ede872-b91e-43b4-a5e0-dd2fa346d094.webp (320×180) |
| 7 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/3449c97f-433a-49fd-8bbc-501938d79dc3 | https://static.higgsfield.ai/3449c97f-433a-49fd-8bbc-501938d79dc3.mp4 | https://static.higgsfield.ai/3449c97f-433a-49fd-8bbc-501938d79dc3.webp | https://d1xarpci4ikg0w.cloudfront.net/d582746e-4aae-4dab-9082-3c828dc645d4.webp (320×180) |
| 8 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f162d642-dd7f-4333-8870-5ccc5c7b3faf | https://static.higgsfield.ai/f162d642-dd7f-4333-8870-5ccc5c7b3faf.mp4 | https://static.higgsfield.ai/f162d642-dd7f-4333-8870-5ccc5c7b3faf.webp | https://d1xarpci4ikg0w.cloudfront.net/e0428d0f-1b0e-4581-a821-aa96b1ee63fa.webp (320×568) |
| 9 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/ce175da9-523f-460c-add2-084ca8a65511 | https://static.higgsfield.ai/ce175da9-523f-460c-add2-084ca8a65511.mp4 | https://static.higgsfield.ai/ce175da9-523f-460c-add2-084ca8a65511.webp | https://d1xarpci4ikg0w.cloudfront.net/4e0b6965-be3e-4076-8db7-10adcee38ea2.webp (320×182) |
| 10 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/0f880e3e-340c-4ea1-b9ba-381738f9f0b3 | https://static.higgsfield.ai/0f880e3e-340c-4ea1-b9ba-381738f9f0b3.mp4 | https://static.higgsfield.ai/0f880e3e-340c-4ea1-b9ba-381738f9f0b3.webp | https://d1xarpci4ikg0w.cloudfront.net/3a5b7221-d4a9-42aa-b6cf-e4e900f9674d.webp (320×486) |
| 11 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/2fc7a157-a111-43de-afc0-17dce56492fe | https://static.higgsfield.ai/2fc7a157-a111-43de-afc0-17dce56492fe.mp4 | https://static.higgsfield.ai/2fc7a157-a111-43de-afc0-17dce56492fe.webp | https://d1xarpci4ikg0w.cloudfront.net/e2a0fc45-2cda-4441-b864-0d261bbd0687.webp (320×424) |
| 12 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e7ac3b58-1b72-435a-a50e-95a31b9efea3 | https://static.higgsfield.ai/e7ac3b58-1b72-435a-a50e-95a31b9efea3.mp4 | https://static.higgsfield.ai/e7ac3b58-1b72-435a-a50e-95a31b9efea3.webp | https://d1xarpci4ikg0w.cloudfront.net/58138fff-1170-47f7-ae39-ced28ef65daf.webp (320×210) |
| 13 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4c472940-18de-4506-a485-ab430947db04 | https://static.higgsfield.ai/4c472940-18de-4506-a485-ab430947db04.mp4 | https://static.higgsfield.ai/4c472940-18de-4506-a485-ab430947db04.webp | https://d1xarpci4ikg0w.cloudfront.net/f55394cd-ee15-41a3-8d26-57e083dca1f0.webp (320×242) |
| 14 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4472784c-b377-4f38-9754-2cb087d9ebad | https://static.higgsfield.ai/4472784c-b377-4f38-9754-2cb087d9ebad.mp4 | https://static.higgsfield.ai/4472784c-b377-4f38-9754-2cb087d9ebad.webp | https://d1xarpci4ikg0w.cloudfront.net/de035f30-8f77-4d7b-bc79-49feac46d1c4.webp (320×182) |
| 15 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e2edb98b-f113-4fd1-8286-204c819fe693 | https://static.higgsfield.ai/e2edb98b-f113-4fd1-8286-204c819fe693.mp4 | https://static.higgsfield.ai/e2edb98b-f113-4fd1-8286-204c819fe693.webp | https://d1xarpci4ikg0w.cloudfront.net/e7da16b8-7800-44c3-86c6-c6129b6df600.webp (320×562) |
| 16 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/25a76c00-2329-48f8-b020-51f9233fb463 | https://static.higgsfield.ai/25a76c00-2329-48f8-b020-51f9233fb463.mp4 | https://static.higgsfield.ai/25a76c00-2329-48f8-b020-51f9233fb463.webp | https://d1xarpci4ikg0w.cloudfront.net/957177ea-cbc4-4356-9ef7-8d4bb0020ad2.webp (320×210) |
| 17 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/d400f0c6-b4a4-4988-b443-02ce1990cbf6 | https://static.higgsfield.ai/d400f0c6-b4a4-4988-b443-02ce1990cbf6.mp4 | https://static.higgsfield.ai/d400f0c6-b4a4-4988-b443-02ce1990cbf6.webp | https://d1xarpci4ikg0w.cloudfront.net/0e5ebda5-ae62-4194-803c-687f914374bb.webp (320×210) |
| 18 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/5badde5d-e0ea-4000-8b15-c2068279aa1e | https://static.higgsfield.ai/5badde5d-e0ea-4000-8b15-c2068279aa1e.mp4 | https://static.higgsfield.ai/5badde5d-e0ea-4000-8b15-c2068279aa1e.webp | https://d1xarpci4ikg0w.cloudfront.net/c1c655a5-911c-43e7-aed3-d9455eaa74c4.webp (320×210) |
| 19 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/c4e5a73a-c57a-436e-ba86-b4125d4584dd | https://static.higgsfield.ai/c4e5a73a-c57a-436e-ba86-b4125d4584dd.mp4 | https://static.higgsfield.ai/c4e5a73a-c57a-436e-ba86-b4125d4584dd.webp | https://d1xarpci4ikg0w.cloudfront.net/842a6ed9-a386-4e99-8dd9-58b726d71d5b.webp (320×210) |
| 20 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f6e72cc2-2c86-4190-bd26-fa523b093a60 | https://static.higgsfield.ai/f6e72cc2-2c86-4190-bd26-fa523b093a60.mp4 | https://static.higgsfield.ai/f6e72cc2-2c86-4190-bd26-fa523b093a60.webp | https://d1xarpci4ikg0w.cloudfront.net/c9c3ea3b-e94b-4da7-b083-d051764d7e2e.webp (320×210) |
| 21 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/27ad2e40-94e2-42db-8e03-38af24ad02a0 | https://static.higgsfield.ai/27ad2e40-94e2-42db-8e03-38af24ad02a0.mp4 | https://static.higgsfield.ai/27ad2e40-94e2-42db-8e03-38af24ad02a0.webp | https://d1xarpci4ikg0w.cloudfront.net/c4cfcbe2-74fc-469e-b093-402328c2bb92.webp (320×210) |
| 22 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f6305eed-a515-4bf7-b306-786ad0d2ab9b | https://static.higgsfield.ai/f6305eed-a515-4bf7-b306-786ad0d2ab9b.mp4 | https://static.higgsfield.ai/f6305eed-a515-4bf7-b306-786ad0d2ab9b.webp | https://d1xarpci4ikg0w.cloudfront.net/c6399b77-4387-466e-872a-b6fb095738ba.webp (320×210) |

Source pages: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2, https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b. Crawled 2026-09.


## Real sample prompts (site)

22 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `f6305eed-a515-4bf7-b306-786ad0d2ab9b`** (priority 21) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c3abf0d9-f06b-42c5-aba7-d6929dde843b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/217cb9bb-d2ff-4faf-846d-4d30170c91bb.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/f6305eed-a515-4bf7-b306-786ad0d2ab9b

```text
In a surreal, candy-colored dreamscape illuminated by vibrant pink, purple, and neon hues, a female rap artist with striking long pink braids adorned with small accessories stands confidently in the center of the frame. She wears a vivid blue faux fur jacket over a tight lavender bodysuit, heavy silver chains around her neck glinting under the glowing clouds above her. Her sharp gaze pierces the lens as she rhythmically bobs her head to the beat, her bright orange nails gripping her hips with a fierce, commanding energy. The camera captures her head-on in a bold medium close-up, then suddenly executes a fast, smooth whip pan to the left. As the camera settles, the focus reveals a cameraman dressed in a black "Higgsfield" t-shirt and cap, handling a large professional rig, smiling warmly in the midst of the swirling pastel environment, surrounded by soft, luminous cloud forms suspended from the ceiling.
```

- **Sample `27ad2e40-94e2-42db-8e03-38af24ad02a0`** (priority 20) — Wan 2.5 motion preset, steps=35, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b5aa3c24-c074-4c73-b3e0-ea7401c98158.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/428cad3c-c191-4cc5-aec9-e3e47122221b.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/27ad2e40-94e2-42db-8e03-38af24ad02a0

```text
a young man standing confidently against a backdrop of colorful graffiti and scattered speakers. His expression is animated, hands gesturing passionately as he talks directly to the camera, his wide smile and sparkling energy dominating the frame. Suddenly, the camera makes a fast pan to the right, a swift motion carrying the scene across the rooftop. The movement halts smoothly to reveal a young woman beaming at the camera. She wears a bold yellow cropped hoodie, jean shorts, and red sneakers, her afro styled with a red bandana. Her pose is playful — one arm reaching into the lower part of the frame as if she's snapping a selfie, her body angled in an energetic, carefree stance against the bright blue sky and graffiti-covered rooftop.
```

- **Sample `f6e72cc2-2c86-4190-bd26-fa523b093a60`** (priority 19) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=3.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6cb31939-65f0-4378-8591-85de06b5d330.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3183061a-d6c5-4f75-966c-ab5e637655f0.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/f6e72cc2-2c86-4190-bd26-fa523b093a60

```text
 a man wearing an orange hoodie and black cargo pants, pushes himself off the wall and begins walking directly toward the viewer with an assured, easy swagger. As he steps forward, the camera performs a fast pan left, revealing two of his friends: one standing proudly in a red tracksuit, leaning against a classic rusted-out car, flashing a confident gold-toothed smile, and the other in a navy-blue jacket, walking forward from behind the car. They all radiate a streetwise charisma, framed perfectly against the colorful alley filled with posters, murals, and fire escapes overhead.
```

- **Sample `c4e5a73a-c57a-436e-ba86-b4125d4584dd`** (priority 18) — Wan 2.5 motion preset, steps=43, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/65218b5f-13c3-4b5b-84be-ac82c6c34e64.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/75d4f520-1487-44c8-aee4-db04c563fa66.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/c4e5a73a-c57a-436e-ba86-b4125d4584dd

```text
Close-up shot of a confident young man with dark skin, wearing a black cap backwards, a gold chain.  The camera slowly pans left to reveal a bald Black man in a white oversized T-shirt standing firmly, aiming a handgun straight ahead with both hands. His face is intense yet composed as he speaks assertively, sunlight glinting off the side of the weapon, deep blue sky forming a stark backdrop behind him.

```

- **Sample `5badde5d-e0ea-4000-8b15-c2068279aa1e`** (priority 17) — Wan 2.5 motion preset, steps=29, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bc548508-1b56-40f0-abdc-4f2f0dead6d4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/26beebfe-f709-46b7-80a7-42c80a83ffbf.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/5badde5d-e0ea-4000-8b15-c2068279aa1e

```text
Camera swiftly whip pans horizontally from left to right, transitioning smoothly from a glamorous woman with sleek platinum-blonde hair and bold turquoise eye makeup, wearing a vivid red leather jacket while holding a vintage golden telephone, to reveal an elegant greyhound dressed impeccably in a glossy emerald-green leather coat, one paw confidently resting on a reflective metallic cube. The backdrop dynamically transforms from vibrant geometric patterns of deep blues and fiery reds into a saturated setting dominated by vivid magenta walls and a rich yellow floor. Greyhound gazes regally forward, perfectly still yet poised. The whip pan is sharply executed, using clean mid-shot framing to enhance visual clarity and emphasize striking contrasts. The atmosphere shifts from sophisticated mystery to surrealistic elegance. Styled in bold, vibrant fashion-editorial cinematography with polished reflective textures and intense color saturation.
```

- **Sample `d400f0c6-b4a4-4988-b443-02ce1990cbf6`** (priority 16) — Wan 2.5 motion preset, steps=33, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6f67ab0c-9dd3-4ebc-8b11-3149064ab5b5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e0f11780-d96f-4420-80e4-196b7dfc7d91.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/d400f0c6-b4a4-4988-b443-02ce1990cbf6

```text
A brilliant flash of light washes across the faces of two men standing casually, their eyes shielded by sunglasses, expressions frozen in calm contemplation. Instantly, the camera executes a whip pan to the right, dynamically revealing a towering atomic explosion erupting above urban skyscrapers, a colossal mushroom cloud illuminated by fiery hues against the stark outlines of buildings, casting dramatic reflections and shadows, in a cinematic, high-impact moment of surreal intensity.
```

- **Sample `25a76c00-2329-48f8-b020-51f9233fb463`** (priority 15) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/69acc68e-bc04-41c1-ba02-7f752c7f39a5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/40aca06e-38cf-4855-bc01-f1ca5745c746.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/25a76c00-2329-48f8-b020-51f9233fb463

```text
A cinematic scene opens inside a classic car with rich burgundy leather seats. The camera captures an intense moment featuring a focused young Asian man at the wheel, accompanied by two stylish women seated behind him, all exuding a sense of mystery and allure under the glow of natural evening light. With a dynamic whip pan right, the camera transitions swiftly, revealing an emotional and intimate close-up of an elderly Asian man affectionately embracing a younger woman dressed in a refined dark green coat. Warm sunlight softly highlights their faces, accentuating a profound, tender bond contrasted against a textured stone wall.
```

- **Sample `e2edb98b-f113-4fd1-8286-204c819fe693`** (priority 14) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6fac18a2-c6c6-48f6-be01-6e5d2527b2f2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/37b0c5a5-768b-4f8c-bc4c-3146b07562eb.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/e2edb98b-f113-4fd1-8286-204c819fe693

```text
Suddenly, the camera whip pans to the right, blurring the kitchen’s sharp lines and glossy surfaces into a flash of distorted color and motion.

The movement slams to a halt on a startling close-up: a very fat man with a dad bod, slumped in the doorway. He wears only a blood-stained bathrobe, loosely tied and soaked through in parts. His posture is slouched, eyes glazed, breath heavy. One slipper is missing. His exposed skin glistens with sweat, and blood drips faintly from his hand.
```

- **Sample `4472784c-b377-4f38-9754-2cb087d9ebad`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ecfd2bea-50c1-47ec-89eb-bc628d0635c4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e26c5b9a-ea39-4146-9bc8-383f4afef3c8.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4472784c-b377-4f38-9754-2cb087d9ebad

```text
The shot opens in stark black and white. A middle-aged man sits solemnly in a steaming, tiled onsen pool. The light streaming through the foggy windows behind him diffuses across the room. Water laps gently. The man doesn’t move — only his steady gaze meets the camera. The silence is heavy, contemplative.

Suddenly — whip pan to the left.

The steam blurs into a streak of motion. Tiles distort. Ripples stretch across the water.

As the camera halts, it reveals a Japanese macaque nestled in the water — half-submerged, fur slicked down. Its face is calm, eyes closed, steam curling around its head like a halo. A soft grunt escapes its nose. The moment feels unexpectedly sacred.
```

- **Sample `4c472940-18de-4506-a485-ab430947db04`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6704cc93-a43e-4b53-84a6-8e06a026e21a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5b43aa3e-9c13-4a54-bf9d-2fb7332dcae2.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/4c472940-18de-4506-a485-ab430947db04

```text
Suddenly, the camera whip pans to the right, blurring her silhouette and the texture of the green door into a streak of motion.

The motion slams to a halt in a long, dimly lit corridor.

A full tactical unit of special forces soldiers walking with attention — faces masked, weapons raised, night-vision visors glowing faintly green. 
```

- **Sample `e7ac3b58-1b72-435a-a50e-95a31b9efea3`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f3cde036-c93d-460a-b897-d9744bdd5f58.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8992446d-79fa-4866-8d87-08faa64f7565.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/e7ac3b58-1b72-435a-a50e-95a31b9efea3

```text
The scene begins with a dreamlike underwater tableau: a young girl sits at a wooden table, her hair drifting in the water around her like a halo. She closes her eyes and gently bites into a bright orange slice, as other oranges float suspended midair. A soft current makes the tablecloth and purple scarf wrapped around a vase ripple like silk. Bubbles rise quietly toward the surface, and the golden light filtering through the water gives everything an ethereal glow.

Suddenly, the camera whip pans to the right, the floating fruit and rustic still life blurring into streaks of color and motion.

The motion halts on a surreal image: a group of large carp, moving in slow, hypnotic unison through the underwater space. Their scales shimmer gold and bronze in the filtered light. The fish glide past coral-colored ceramic pots and driftwood, as if this was a submerged garden rather than a dining scene. Some fish turn toward the camera, curious, their eyes glinting.
```

- **Sample `2fc7a157-a111-43de-afc0-17dce56492fe`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/98059771-260a-4f1c-8731-ba06d21c1954.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/21cb7c3e-e663-4f9a-bdda-eb96125693b1.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/2fc7a157-a111-43de-afc0-17dce56492fe

```text
Suddenly, the camera whip pans to the left, blurring the edge of the bed, her silhouette, and the glow of the bedside light.

The movement slams to a halt on a man in a white sleeveless t-shirt, seated at a small table. He takes a long drag from a cigarette, smoke curling upward into the low, warm light. His posture is slouched, expression unreadable — worn down, detached. On the table sits a glass ashtray, already filled with stubs, and beside it, a half-empty tumbler of something strong.
```

- **Sample `0f880e3e-340c-4ea1-b9ba-381738f9f0b3`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/12d091e6-e0e3-48e6-90b1-76163ccc7573.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/63d1b2cd-efca-4627-9a7e-bdee4ac44e6d.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/0f880e3e-340c-4ea1-b9ba-381738f9f0b3

```text
The scene begins with a static shot of a girl halfway through a window, legs dangling outside a sky-blue wooden house. Her polka-dot skirt flutters slightly, red shoes catching the sun. The moment is strange and comical — caught between action and mystery.

Suddenly, the camera whip pans to the right, blurring the siding, window frame, and sky into pastel streaks.

The motion slams to a halt on a close-up: a 13-year-old brunette schoolboy standing alone on an open street. He wears thick glasses and holds a crinkled red pack of chips close to his chest. His hair is slightly messy, his eyes wide in confused surprise, as if just spotting the girl’s sudden exit.

Behind him, tall trees sway gently in the breeze. The wide street is quiet. The sun is soft. He crunches a chip slowly — still processing what he’s seeing.
```

- **Sample `ce175da9-523f-460c-add2-084ca8a65511`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/62b75da0-9aed-489b-b26d-77d9309671a6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bab0eda6-9904-4ded-940b-761d9001cf75.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/ce175da9-523f-460c-add2-084ca8a65511

```text
A woman in a vivid red trench coat dials a rotary phone embedded in a strange street-side kiosk.
Her nail polish: electric blue.
The camera hugs her fingers as they spin the cracked dial.
Her expression is tense, out of focus in the background.

Whip pan to the rigth
Timed stopped A red Ferrari with gleaming chrome accents collides head-on into a powder blue Mini Cooper at high speed, captured mid-impact. Crumpled metal, shattered glass suspended in the air. The background is a sunlit urban street with pastel buildings and scattered palm shadows. Dramatic midday lighting creates harsh contrasts and vivid reflections on the car bodies. 
Sparks scatter across asphalt.

The crowd freezes.

```

- **Sample `f162d642-dd7f-4333-8870-5ccc5c7b3faf`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1c08b733-ea32-4b5b-86fd-f2b673c0ba8e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/553ae659-1a0f-4b59-a805-904f39f87529.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f162d642-dd7f-4333-8870-5ccc5c7b3faf

```text
whip panning to the right. The screen blurs, streaks of golden fields and blue sky rushing past. The motion locks onto a distant figure — a woman in a long dress, her silhouette barely visible against the open landscape. She appears to be walking away, her movements deliberate yet slow.

The camera whips back to the man, his eyes narrowing as if recognizing the figure. His posture shifts slightly, a hand reaching into his coat pocket. The breeze intensifies, and the soft rustling of the field contrasts the rising tension in his expression. 
```

- **Sample `3449c97f-433a-49fd-8bbc-501938d79dc3`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ac5bafaf-3105-49f9-a406-1e1cfa8ccc8b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d86bd212-2229-4663-a4b6-bea5952e366d.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/3449c97f-433a-49fd-8bbc-501938d79dc3

```text
The scene begins with a tense standoff — a group of soldiers in striped uniforms, standing in formation. The camera hovers uncomfortably close to the rigid backs of the armed men. The air is heavy, silent.

Suddenly, with a sharp whip pan, the camera snaps to the side — fast motion blurs the screen before landing on a lone detective. He stands apart, leaning against a wooden post. He’s clad in a wrinkled beige trench coat, fedora tipped low, shielding his tired eyes. A thin trail of smoke curls upward from the cigarette clutched between his fingers. His gaze is fixed on the soldiers, but his expression is calm
```

- **Sample `4f1ee1eb-7204-4b14-92aa-59ef93154418`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fa78b03d-1ccc-43ce-bf7f-0440f2491530.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1c3aa590-8103-40ab-a717-f3009144ab1e.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/4f1ee1eb-7204-4b14-92aa-59ef93154418

```text
Suddenly, the camera whip pans to the right — a chaotic blur of faded wallpaper, wooden furniture, and scattered papers whizzes by.

The motion halts on a rusted, broken-down robot slumped in the corner. Its metallic frame is dented and twisted, wires dangling loosely from its chest. One arm is missing, while the other twitches faintly, sparking in brief bursts. Its face — once designed to mimic human features — is now cracked and hollow, with one dimly glowing eye flickering on and off.
```

- **Sample `f51f5b9f-cfdb-4e02-a5c3-cae76d211c91`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/436d0612-e917-4555-891b-33243ed3bf6f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6adbc4cc-9b05-4835-8c05-030d6c19a253.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91

```text
the camera whip pans to the right — a blur of the room’s walls and window streak across the frame.

The motion halts on a woman standing in the kitchen. She’s dressed casually in a loose shirt and jeans, her hair tied back. Facing away from the camera, she’s stirring something in a pan on the stove. Steam rises around her, the faint crackle of frying food filling the air. The warm kitchen light contrasts sharply with the dimly lit workspace from before, creating a sense of separation between their worlds.

The camera lingers on her for a moment. She moves fluidly, unaware of the tension lingering in the other room.
```

- **Sample `e0f82eda-addb-4554-93f3-609e644421c8`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2922ce66-a0eb-46be-a999-cf24ddf7f076.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d46a7bca-4068-4f38-a0d5-5707bb7cc75c.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e0f82eda-addb-4554-93f3-609e644421c8

```text
The camera whip pans to the left — streaks of grey buildings and flashing signs blur across the frame before the motion locks onto an enormous figure towering between skyscrapers.

A colossal stone Lenin statue, now animated and lumbering, strides through the streets. Its rigid granite face stares blankly forward, expression unmoving yet imposing. The statue’s arm extends outward in a familiar pointing gesture, but this time it moves — its massive stone hand sweeping debris aside as it marches forward. The crowd below erupts into chaos, scattering in panic.
```

- **Sample `f21cefcc-2ae2-4137-9139-25a80ccd82c6`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/187cb5ae-4e6d-49a6-8d77-076d10f1c879.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e7ad12d8-ab56-4542-a9d9-75ff1cf0b6b9.mp4
  - page: https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b/f21cefcc-2ae2-4137-9139-25a80ccd82c6

```text
whip pan to the left blurs the landscape, revealing a figure standing alone in the distance — another child, identical in attire but positioned further away. The faint glow from their helmet flickers as if malfunctioning.

The camera whips back to the group — but now one child is missing from the lineup. The remaining children stand motionless, their glowing visors dimming slightly. The camera abruptly whips right, revealing the missing child walking slowly toward the distant figure, their steps slow and deliberate.

The sequence ends as the camera locks on the distant figure again — but now their flickering visor blazes brighter than the others, casting an intense glow across the barren ground.
```

- **Sample `dd0fa133-e8af-4d0c-a595-2e08ed231e51`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3ae15cb9-98ee-46b3-8734-5f802878a237.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/78b29a3f-174f-41be-863b-cbd839948df7.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/dd0fa133-e8af-4d0c-a595-2e08ed231e51

```text
the camera whip pans rapidly to the right, blurring sunlit faces and braided hair. The movement halts on a different figure — a woman with dark hair, her dress darker than the others. She stands slightly apart, her expression colder, more deliberate. Her gaze shifts sideways, locking eyes with the camera before she vanishes into the crowd.
```

- **Sample `7be9daf4-081a-4525-ae97-e95ba74de5c2`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2a2df5d3-4d64-4fb1-bec1-7177ed985e2b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2603657c-ab7a-4698-b785-1f4128c8cb70.mp4
  - page: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/7be9daf4-081a-4525-ae97-e95ba74de5c2

```text
whip pan to the right sends the frame into a blur of wood paneling and shadows.

The camera halts on a doorway, where a second figure stands. This one is human, dressed in a suit, breathing heavily with wide, panicked eyes. Sweat clings to their brow. They clutch something small in their hand — an object hidden tightly in their palm. Their gaze is locked on the alien figure.
```
