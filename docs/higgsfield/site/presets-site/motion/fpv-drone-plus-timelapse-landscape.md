# FPV Drone + Timelapse Landscape — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A fast, fluid drone flight over a landscape with time sped up—clouds race, light shifts, and the world transforms beneath the lens. Dreamy and dynamic.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c | `4f016058-bdcf-450b-9ec1-273fb98c927c` | 50 | isMix | mix of: FPV Drone (motion id `5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7`, strength 0.9), Timelapse Landscape (motion id `51ef3ada-73fd-4663-a406-48f3ff6d2def`, strength 0.9) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7%2C51ef3ada-73fd-4663-a406-48f3ff6d2def&presetMotionStrengths=0.9%2C0.9 |
| https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8 | `7018b2c3-a855-4836-959c-44b6ca0097c8` | 120 | isMix | mix of: FPV Drone (motion id `5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7`, strength 0.9), Timelapse Landscape (motion id `51ef3ada-73fd-4663-a406-48f3ff6d2def`, strength 0.9) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7%2C51ef3ada-73fd-4663-a406-48f3ff6d2def&presetMotionStrengths=0.9%2C0.9 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
FPV drone flight over Icelandic mountains while clouds race and light shifts from dawn to dusk.
```

Use it as: upload a start image that matches the scene, select motion preset **FPV Drone + Timelapse Landscape**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [FPV Drone](fpv-drone.md) (strength 0.9), [Timelapse Landscape](timelapse-landscape.md) (strength 0.9)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d2719b44-ecc9-41ee-a03c-640f04265e3e.webp (320×210)
- Card preview, variant `7018b2c3`: https://d1xarpci4ikg0w.cloudfront.net/0038730c-37c8-4c92-9ff0-b36035e84b38.webp
- Component preview — FPV Drone: https://d1xarpci4ikg0w.cloudfront.net/36c8a32a-df85-4788-9590-ccf7c3488e54.webp
- Component preview — Timelapse Landscape: https://d1xarpci4ikg0w.cloudfront.net/b8171f9d-698d-4f79-9f79-173ec50306a7.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/1723acd3-2fdc-4beb-a35d-1fbb641936af | https://static.higgsfield.ai/1723acd3-2fdc-4beb-a35d-1fbb641936af.mp4 | https://static.higgsfield.ai/1723acd3-2fdc-4beb-a35d-1fbb641936af.webp | https://d1xarpci4ikg0w.cloudfront.net/bc1060b1-a6ae-4a7d-adbd-e7cf71a9ce3a.webp (320×424) |
| 2 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/f344555d-3c4c-452b-8b7e-5e3c17906201 | https://static.higgsfield.ai/f344555d-3c4c-452b-8b7e-5e3c17906201.mp4 | https://static.higgsfield.ai/f344555d-3c4c-452b-8b7e-5e3c17906201.webp | https://d1xarpci4ikg0w.cloudfront.net/356a2ca0-bd0a-4b38-8076-845a98b933f0.webp (320×242) |
| 3 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/4b7c92d4-2b19-4ebf-a759-3520b48c62cc | https://static.higgsfield.ai/4b7c92d4-2b19-4ebf-a759-3520b48c62cc.mp4 | https://static.higgsfield.ai/4b7c92d4-2b19-4ebf-a759-3520b48c62cc.webp | https://d1xarpci4ikg0w.cloudfront.net/f4f146ce-675a-4f16-931c-fbc9634733c4.webp (320×242) |
| 4 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/e2280d66-357f-4972-899f-3c7c475684be | https://static.higgsfield.ai/e2280d66-357f-4972-899f-3c7c475684be.mp4 | https://static.higgsfield.ai/e2280d66-357f-4972-899f-3c7c475684be.webp | https://d1xarpci4ikg0w.cloudfront.net/310704aa-ebbf-488e-bea9-0fdb716b3ac2.webp (320×210) |
| 5 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/8837da5b-7611-41e7-b1f0-f2ed2905f2ed | https://static.higgsfield.ai/8837da5b-7611-41e7-b1f0-f2ed2905f2ed.mp4 | https://static.higgsfield.ai/8837da5b-7611-41e7-b1f0-f2ed2905f2ed.webp | https://d1xarpci4ikg0w.cloudfront.net/af499d3f-9c5e-49dd-9a2e-7a82205f2b76.webp (320×210) |
| 6 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/f7b39ce6-2160-491d-a6eb-96dcdc149f65 | https://static.higgsfield.ai/f7b39ce6-2160-491d-a6eb-96dcdc149f65.mp4 | https://static.higgsfield.ai/f7b39ce6-2160-491d-a6eb-96dcdc149f65.webp | https://d1xarpci4ikg0w.cloudfront.net/7ff3c943-4591-4da5-8e87-c42d1a15aee3.webp (320×182) |
| 7 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/af1f8912-f9ba-419a-8142-f0d1b3754985 | https://static.higgsfield.ai/af1f8912-f9ba-419a-8142-f0d1b3754985.mp4 | https://static.higgsfield.ai/af1f8912-f9ba-419a-8142-f0d1b3754985.webp | https://d1xarpci4ikg0w.cloudfront.net/e2e50fdb-48df-4409-a914-273e4f174ab6.webp (320×424) |

Source pages: https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c, https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `1723acd3-2fdc-4beb-a35d-1fbb641936af`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a7e763e4-f730-47c2-936e-d003cd17e194.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/20e8336b-3e67-4621-9c5f-7524f5e4d3af.mp4
  - page: https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/1723acd3-2fdc-4beb-a35d-1fbb641936af

```text
The shot opens with a camera racing alongside a cyclist launching off a jagged cliff, silhouetted against a darkening sky. The biker’s neon green jacket glows in the fading light as they soar above the rocky coastline, suspended mid-air in perfect silence. Below, waves crash in slow rhythm, and two glowing windows embedded in the cliff flash cyan and magenta.

Timelapse begins — the camera arcs wide, circling the cliff as the sky transitions from deep blue to black. Stars begin to prick through, faint at first, then spilling across the sky in shimmering constellations. The glowing windows pulse brighter against the growing darkness.

Tide rolls in fast motion. The sea churns silver beneath the moonlight. The figure has vanished — but the moment of flight lingers in the shape of the cliff and the stillness of the air.

The camera drifts upward,
revealing only darkness, water, and light
as the night takes hold.
```

- **Sample `e2280d66-357f-4972-899f-3c7c475684be`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/437bd382-b22a-4da6-bc48-e571204ead8d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2c091c38-3613-4ecf-893b-10a343725f07.mp4
  - page: https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/e2280d66-357f-4972-899f-3c7c475684be

```text
The shot opens with the camera flying low across a glacier, gliding over deep blue crevasses and jagged cracks etched into the ice. Far ahead, two tiny snow vehicles inch forward across the frozen void, dwarfed by the scale of the landscape.

Timelapse begins — the camera arcs upward and backward, revealing the full stretch of the glacier spilling out like a frozen sea. The surface glows faintly in the last light of day, shadows deepening along the ridges. The horizon shifts from pale steel to violet.

The camera banks east as the sky darkens.
One by one, stars bloom overhead. The vehicles stop, their headlights flicker out.
Frost creeps across the lens.

The camera floats still for a moment —
then gently rises,
leaving behind only silence, ice, and the slow breath of the coming night.
```

- **Sample `af1f8912-f9ba-419a-8142-f0d1b3754985`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/61c826c4-c49b-45a2-8703-6aed9c53648f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d3ce9d29-7757-43e8-984e-dca7d761ef1a.mp4
  - page: https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8/af1f8912-f9ba-419a-8142-f0d1b3754985

```text
The video opens with the camera racing just behind a snowboarder, weaving sharply down a pristine white slope. Snow sprays in dramatic arcs with each turn, catching the last golden light of a sinking sun. The snowboarder’s purple jacket flashes against the glowing horizon.

The camera banks and dips, matching each carve in smooth, dynamic motion. Above, the sky begins to shift — blue deepens, gold fades.

Timelapse begins.
The camera spirals upward as the snowboarder vanishes into the valley. Shadows stretch like ink across the snow. The golden sky turns burnt orange, then violet, then black. Stars begin to emerge, one by one, and the white slope transforms into a vast, moonlit sea.
```

- **Sample `8837da5b-7611-41e7-b1f0-f2ed2905f2ed`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/701a3bef-f617-48d5-8515-b23e4b1b5133.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e66dafb0-7f6c-438f-bbf9-6b9478cbdcd4.mp4
  - page: https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/8837da5b-7611-41e7-b1f0-f2ed2905f2ed

```text
The shot opens with the camera slicing through morning fog, diving between concrete ribbons of a massive freeway interchange. Cars hum beneath in rhythmic flow, headlights diffused by mist. The loops twist endlessly, like circuitry in a living machine.

Timelapse begins — the camera spirals upward above the tangled tangle of overpasses. Fog retreats as sunlight fades. Shadows stretch across the asphalt. Lanes pulse with movement, then slow, then glow.

The sky deepens from gold to violet. One by one, streetlights flicker to life. The roads begin to burn with threads of red and white, headlights and taillights smeared into streaks of motion.

The camera floats still above the network of highways —
a glowing web,
alive in the dark.
Night has come,
and the city keeps moving.
```

- **Sample `f7b39ce6-2160-491d-a6eb-96dcdc149f65`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f0e74acb-5990-4a80-8c9f-377cb9b6e0bd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9e41cde1-bc9c-40f7-9c5e-fa1acd949020.mp4
  - page: https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/f7b39ce6-2160-491d-a6eb-96dcdc149f65

```text
The shot opens with the camera flying low over a vast circular field, split perfectly into green and gold. The rows of crops ripple like combed velvet, radiating outward from a dark central tower that stands silent and monolithic. The drone banks gently, revealing the field’s perfect symmetry and the deep furrows etched into the soil.

Timelapse begins — the camera rises steadily. The sun dips, casting long shadows that slice across the circle like clock hands. The golden crops darken to amber, the green softens to blue-gray. The light at the horizon dims, turning orange, then plum.

Above, stars begin to emerge. The central tower casts no light.
A faint mist rolls in at the edge of the farmland, creeping toward the core.

The camera floats still above the field —
a perfectly carved symbol in the earth, now bathed in starlight —
as night settles gently over the harvest.
```

- **Sample `4b7c92d4-2b19-4ebf-a759-3520b48c62cc`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9b3ecdee-649d-4bf3-9a45-f9e67957e818.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dd6a1295-97d0-4d01-8645-b6486d0d086f.mp4
  - page: https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8/4b7c92d4-2b19-4ebf-a759-3520b48c62cc

```text
The shot opens with a camera gliding low over a frozen industrial landscape, tracing the curve of a long-abandoned factory beside a snow-covered shoreline. A tall brick smokestack casts a sharp shadow across the concrete. In the distance, faint footprints wind across the frozen lake — the only sign of life in the white expanse.

Timelapse begins — the camera ascends slowly, revealing the vast, icy field stretching out to the horizon. The sky shifts from pale blue to deep cobalt as shadows stretch long across the snow. Reeds at the lake’s edge shudder in the wind, then freeze into stillness.

Lights begin to flicker on in distant windows across the frozen landscape. The sky darkens, deepens. Stars appear, shimmering softly over the desolate terrain.

The camera hovers high above the factory —
the smokestack now a silhouette beneath a rising moon.
```

- **Sample `f344555d-3c4c-452b-8b7e-5e3c17906201`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/574e232a-3db2-4c49-ac6c-d0f12ba83af7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b616eb42-5d16-4d32-b752-2cdc9aa98dc9.mp4
  - page: https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8/f344555d-3c4c-452b-8b7e-5e3c17906201

```text
The shot opens with the camera racing low along a winding two-lane highway, cutting through rolling golden hills under the fading warmth of late afternoon. The mailbox at the bend flashes past, and the road stretches endlessly ahead — empty, sun-soaked, still.

Timelapse begins — the camera spirals upward, revealing the undulating terrain dotted with scattered shrubs and fence lines. The golden fields turn amber, then umber, then grey as the sun sinks low. Shadows stretch across the hills like ink on parchment.

The camera banks slowly to follow the curve of the road.
One by one, stars begin to appear overhead.
The hills blur into soft silhouettes. The wind stills. The road goes quiet.

The camera floats still for a moment, high above the empty highway —
just one long ribbon of black slicing through a sleeping world —
before gliding backward into the dark.
```
