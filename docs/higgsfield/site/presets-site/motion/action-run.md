# Action Run — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Follows the subject in fast-paced motion, often with shaky cam and dynamic angles. Perfect for chase scenes, high-energy moments, or intense action shots.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5 | `89ee6db9-a56e-48e6-bdd4-806c528b3ba5` | -187 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=89ee6db9-a56e-48e6-bdd4-806c528b3ba5 |
| https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725 | `c9feeb46-e10b-4199-a369-100bfd543725` | 52 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c9feeb46-e10b-4199-a369-100bfd543725 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A spy sprints across rooftops at night, shaky follow-cam chasing her as she leaps between buildings.
```

Use it as: upload a start image that matches the scene, select motion preset **Action Run**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Low follow shot behind a running subject · **Best use:** Chase, escape, pursuit · **Models:** Minimax Hailuo 2.3, Kling 2.6 · **Phrase/template:** "Action Run — camera low behind him, matching his sprint" · **Tips:** + Handheld = escape sequence

## Related presets

- **Mixes that use this preset:** [Action Run + Set on Fire](action-run-plus-set-on-fire.md)
- **Same category (Camera · rig, POV & handheld):** [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/727e0399-f326-424b-a38e-fc6a28f38644.webp (320×182)
- Card preview, variant `c9feeb46`: https://d1xarpci4ikg0w.cloudfront.net/95d7998b-538e-4802-bcb7-b4f27438504a.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/39c51109-93e4-4a3d-89b2-b140e342b9cf | https://static.higgsfield.ai/39c51109-93e4-4a3d-89b2-b140e342b9cf.mp4 | https://static.higgsfield.ai/39c51109-93e4-4a3d-89b2-b140e342b9cf.webp | https://d1xarpci4ikg0w.cloudfront.net/b0f5af9e-33da-4064-bc21-f4c7d2fe2f98.webp (320×112) |
| 2 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f | https://static.higgsfield.ai/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f.mp4 | https://static.higgsfield.ai/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f.webp | https://d1xarpci4ikg0w.cloudfront.net/8949f763-99e7-4d55-aaee-dc2c8573dd86.webp (320×180) |
| 3 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/40b039e5-27b6-49e6-a974-e83fe06bc2b5 | https://static.higgsfield.ai/40b039e5-27b6-49e6-a974-e83fe06bc2b5.mp4 | https://static.higgsfield.ai/40b039e5-27b6-49e6-a974-e83fe06bc2b5.webp | https://d1xarpci4ikg0w.cloudfront.net/dc060457-b107-4034-895d-a0a5fc0e855d.webp (320×180) |
| 4 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/44de5b32-ced1-498d-8b7e-611b1af5aeed | https://static.higgsfield.ai/44de5b32-ced1-498d-8b7e-611b1af5aeed.mp4 | https://static.higgsfield.ai/44de5b32-ced1-498d-8b7e-611b1af5aeed.webp | https://d1xarpci4ikg0w.cloudfront.net/6490bfb7-58f2-4ee3-9687-69a7f9ac3c03.webp (320×180) |
| 5 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/f69e4a73-fc92-4717-a98b-9057e098e9c0 | https://static.higgsfield.ai/f69e4a73-fc92-4717-a98b-9057e098e9c0.mp4 | https://static.higgsfield.ai/f69e4a73-fc92-4717-a98b-9057e098e9c0.webp | https://d1xarpci4ikg0w.cloudfront.net/42a04e58-689c-4cf8-bb12-0fa4f73216a0.webp (320×568) |
| 6 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/ece85902-9751-4b8f-a352-c149842bf3ed | https://static.higgsfield.ai/ece85902-9751-4b8f-a352-c149842bf3ed.mp4 | https://static.higgsfield.ai/ece85902-9751-4b8f-a352-c149842bf3ed.webp | https://d1xarpci4ikg0w.cloudfront.net/6b67d25b-381f-4b56-8d04-33ad31f73d8b.webp (320×562) |
| 7 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/9fb59e0d-6f30-440c-8d60-482569c20ead | https://static.higgsfield.ai/9fb59e0d-6f30-440c-8d60-482569c20ead.mp4 | https://static.higgsfield.ai/9fb59e0d-6f30-440c-8d60-482569c20ead.webp | https://d1xarpci4ikg0w.cloudfront.net/dfc698ca-4245-4e95-b6af-fbbc13b19010.webp (320×562) |
| 8 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe | https://static.higgsfield.ai/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe.mp4 | https://static.higgsfield.ai/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe.webp | https://d1xarpci4ikg0w.cloudfront.net/45d9cf67-7044-49f8-86ad-dacfa0755993.webp (320×182) |
| 9 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/d94bd631-8467-4f6f-ac98-b8f41445cae1 | https://static.higgsfield.ai/d94bd631-8467-4f6f-ac98-b8f41445cae1.mp4 | https://static.higgsfield.ai/d94bd631-8467-4f6f-ac98-b8f41445cae1.webp | https://d1xarpci4ikg0w.cloudfront.net/93ce1a15-b3d0-4a97-85d1-2a3c019ce226.webp (320×182) |
| 10 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/db080845-65c3-4541-a273-72dd91d6c6db | https://static.higgsfield.ai/db080845-65c3-4541-a273-72dd91d6c6db.mp4 | https://static.higgsfield.ai/db080845-65c3-4541-a273-72dd91d6c6db.webp | https://d1xarpci4ikg0w.cloudfront.net/80ce2e90-fe79-4add-ae65-5319ed0bb9ec.webp (320×182) |
| 11 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/ccc6a8b4-3c7a-4331-ac60-075cb0704b96 | https://static.higgsfield.ai/ccc6a8b4-3c7a-4331-ac60-075cb0704b96.mp4 | https://static.higgsfield.ai/ccc6a8b4-3c7a-4331-ac60-075cb0704b96.webp | https://d1xarpci4ikg0w.cloudfront.net/3d2d2d11-b1f5-4c91-bf23-efa6a508f9e5.webp (320×182) |
| 12 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/731789a0-57f4-4f02-8949-ff7a14ddc49d | https://static.higgsfield.ai/731789a0-57f4-4f02-8949-ff7a14ddc49d.mp4 | https://static.higgsfield.ai/731789a0-57f4-4f02-8949-ff7a14ddc49d.webp | https://d1xarpci4ikg0w.cloudfront.net/e810eee2-504f-49d9-8dd2-cb4aa69fe4ef.webp (320×320) |

Source pages: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5, https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `731789a0-57f4-4f02-8949-ff7a14ddc49d`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/65e61900-e39a-4acd-b0d2-9187fa85efc8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ce0d47a6-7680-474c-add2-ed42d54ba041.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/731789a0-57f4-4f02-8949-ff7a14ddc49d

```text
A tactical agent in a black vest lands hard from a rooftop jump, crashing into the ground in a spray of gravel and debris, then instantly pushes off into a sprint through a narrow urban alleyway at dusk. His expression is focused and intense, weapon still gripped tightly as he accelerates forward. Sparks flicker from the impact zone behind him, while warm sunset reflections ripple across the surrounding buildings. The motion is fast and grounded, with small debris flying past his boots and his breath visible in the cooling evening air. The atmosphere is tense and kinetic. Styling follows high-octane action thriller aesthetics with urban textures, dynamic lighting, and naturalistic movement blur.
```

- **Sample `ccc6a8b4-3c7a-4331-ac60-075cb0704b96`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2da9d34a-bb15-4314-824b-6f3c8e998021.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/57a1b417-3ee5-4cb1-ab62-67b7f7eea8b6.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/ccc6a8b4-3c7a-4331-ac60-075cb0704b96

```text
A determined man in a leather jacket sprints through a crowded night market in Bangkok, weaving between food stalls, neon signs, and billowing clouds of steam. The background is alive with motion blur—vendors shouting, lights streaking, and lanterns swinging—as the camera tracks tightly in front of him, capturing his focused expression and rapid breath. Glimpses of Thai characters glow on signs above, while hanging bulbs and paper lanterns cast warm flickering light on his face. The ground is slick, reflecting city light. The atmosphere is tense, urgent, and cinematic. Styling channels gritty action-thriller vibes with handheld camera energy, rich street-level color, and kinetic realism.
```

- **Sample `db080845-65c3-4541-a273-72dd91d6c6db`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3c23f8d9-bebb-4e1e-a8ca-24b16831d681.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5584a956-ce99-4c62-b049-f2b696179d4a.mp4
  - page: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/db080845-65c3-4541-a273-72dd91d6c6db

```text
A determined cop in tactical gear sprints through an industrial street at dusk. His breath is heavy,  and eyes locked forward. As he runs at full speed, the background blurs in motion — abandoned buildings and smoke stacks rush by in streaks. His body leans aggressively into each stride, dust rising from the cracked pavement beneath his boots. The camera tracks tightly in front of him, capturing his intensity and urgency shaking with each step. The atmosphere is gritty and high-stakes. Styling is grounded action realism, with handheld energy, natural lighting, and urban textures.
```

- **Sample `d94bd631-8467-4f6f-ac98-b8f41445cae1`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5d2691a3-7e00-4c7c-915e-4fdc6773ccdc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/59375861-ccfd-414d-9007-9b701e6994c5.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/d94bd631-8467-4f6f-ac98-b8f41445cae1

```text
Deadpool lands with impact in the middle of a burning street, crouched low in classic superhero pose, dual katanas drawn and smoke swirling around him. Behind him, cars erupt in fireballs, casting dynamic flashes of light across the wet pavement. he springs forward into a full-speed run, dodging debris and laughing to himself. The camera tracks him from a low front angle as flames reflect off his red and black suit. Shattered glass rains down in the background, while the explosions pulse in rhythmic sync. The atmosphere is chaotic, wild, and darkly comedic. Styling is high-budget action with stylized comic-book energy, rich contrast, and rapid-fire pacing.
```

- **Sample `8e5fcfb8-e15f-481a-8809-8acaf3bf22fe`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/84d38802-6a08-45ed-8392-71b34765ff4e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/44baa192-14d8-4274-b5f0-fcfa89ecebfd.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe

```text
A soldier in full gear crawls rapidly beneath a tunnel of fire and falling embers, his face covered in sweat, mud, and ash. Explosions rumble behind him as flames arc overhead, casting flickering shadows on his helmet. The camera tracks closely at ground level, capturing every desperate push forward as sparks fly past the lens. His eyes stay locked on a glowing light source in the distance, teeth clenched in determination. Smoke curls through the fiery backdrop as debris rains down around him. The atmosphere is intense and survival-driven. Styling is cinematic war drama with high contrast lighting, shallow depth of field, glowing orange highlights, and kinetic camera movement.
```

- **Sample `9fb59e0d-6f30-440c-8d60-482569c20ead`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c76d279c-447c-44fa-97ba-7a1126de06d7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5234428f-8a00-4d8a-8d3c-809199da7d95.mp4
  - page: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/9fb59e0d-6f30-440c-8d60-482569c20ead

```text
A powerful male sprinter in white and gold spikes rushes forward from the starting line with perfect form, face locked in focus. The camera captures him from a low front angle, inches above the track, emphasizing the tension in his arms and the force behind his first strides. as he surges ahead, the camera raises to his eye level. the sun casts warm highlights across his skin and uniform. The stadium around him blurs slightly in motion, intensifying the forward momentum. The atmosphere is fierce and athletic. Styling combines high-speed sports cinematography with heroic energy—tight lens, crisp sunlight, and dynamic track texture
```

- **Sample `ece85902-9751-4b8f-a352-c149842bf3ed`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fab4ff87-82ce-4ea6-8de3-0ef8fba6d169.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2d01b193-39d0-4372-a4a2-db7190d5db3f.mp4
  - page: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/ece85902-9751-4b8f-a352-c149842bf3ed

```text
A focused sprinter in sleek black gear crouches at the starting line under the blazing sun. He slowly raises his head, eyes locked forward, breath steady. A heartbeat later, he explodes into motion — arms pumping, legs driving. the background blurs from sudden acceleration. The camera begins low and tight, then tracks forward as he bursts ahead with sheer power. The atmosphere is tense, focused, and electric. Styling is hyper-realistic sports cinematography with sharp contrast, sunlit highlights on muscle definition, and immersive slow-to-fast motion rhythm synced to breath and motion.
```

- **Sample `f69e4a73-fc92-4717-a98b-9057e098e9c0`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0098cda0-5785-47bc-a9a3-2b249ff108c3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1f9054e5-b7f1-452a-9fe7-dcc2098c8b95.mp4
  - page: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/f69e4a73-fc92-4717-a98b-9057e098e9c0

```text
The camera steadily rises, tracking the figure — a lone person in a red dress — running forward through the surreal landscape. The textured swirls of red, orange, and blue ripple and shift slightly as the figure moves. The camera slowly tilts upward, following the person’s gaze toward the glowing, radiant light above. The colors intensify — red and orange flaring at the edges, blue deepening into shadow — while the figure continues running toward the overwhelming brightness. The camera pushes forward dynamically, keeping the figure in the lower frame while the brilliant light expands across the upper view. The glowing vortex seems to pulse as the figure steps closer, light cascading down in waves of warmth and color.
```

- **Sample `44de5b32-ced1-498d-8b7e-611b1af5aeed`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7740b66f-b908-4967-b8fa-b987648e673a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/56c56162-904f-4e2d-a45d-1a0616e5eb24.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/44de5b32-ced1-498d-8b7e-611b1af5aeed

```text
Gradually, a dark silhouette emerges ahead — a monstrous figure crouched low, its glowing red eyes burning through the fog. The camera drifts closer, the creature’s wild, tangled mane shifting with each breath. Suddenly, the beast snarls and bursts into motion, sprinting on all fours with unnatural speed. The camera follows, racing just behind, branches snapping and leaves scattering in the beast’s wake.

The creature’s claws tear into the dirt as it barrels forward, weaving between trees with unsettling agility. Its glowing eyes cut through the haze, locked intently on something ahead.
```

- **Sample `40b039e5-27b6-49e6-a974-e83fe06bc2b5`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4d080459-7de2-4022-bd5d-db593273e13f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/309616b7-1b28-4781-ba79-52ed959174cc.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/40b039e5-27b6-49e6-a974-e83fe06bc2b5

```text
A small white kitten with bright blue eyes dashes down a dirt path, ears perked up and fluffy tail flicking behind it. Its tiny paws kick up fallen orange leaves as it sprints, weaving past scattered flowers and tufts of grass. The camera follows close behind the kitten, tracking its rapid movements.

In pursuit are two determined cartoonish dog police officers in matching blue uniforms and hats with gold badges. The lead officer grips a stack of cash tightly in his teeth, his short legs pumping furiously to keep pace. The second officer stumbles slightly, lagging behind but still determined.
```

- **Sample `d3f72dd0-5613-47f7-96df-0d9f8b2ed66f`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3d6068b3-1031-4fef-b45c-4becf644bd0d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e042d2a0-23be-4f0f-a687-1d63cd263c8b.mp4
  - page: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f

```text
With a sudden burst of motion, the sandwich springs upright on two toasted corners, crusts acting like stubby legs. It sprints across the table, crumbs scattering behind it.

The camera tracks the toast in dynamic motion as it leaps off the table, landing with a thud. It dashes toward the door, dodging cracks in the floor, narrowly avoiding a rolling bottle. The camera sweeps low, close to the floor, emphasizing the frantic pace.
```

- **Sample `39c51109-93e4-4a3d-89b2-b140e342b9cf`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1600×560
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6bbc2a79-95b7-4d16-bfa2-cc8b12efe766.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2bf64bb2-bed2-4dba-8e7e-b6d919622482.mp4
  - page: https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725/39c51109-93e4-4a3d-89b2-b140e342b9cf

```text
A strange robot is running very fast to the center of the screen, behind his back a huge dragon face appears out of the fog
```
