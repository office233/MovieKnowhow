# Agent Reveal — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject jerks or shakes their head as their face and body glitch and morph into a sharp-suited agent figure. Fast, surreal, and powerful—perfect for sudden identity shifts or secret transformations.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b | `a5e7e831-c323-4f69-926f-74f31197809b` | 75 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a5e7e831-c323-4f69-926f-74f31197809b |
| https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3 | `b6eb17bb-d336-46db-99c6-34f01ae754f3` | -231 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b6eb17bb-d336-46db-99c6-34f01ae754f3 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A guy in a hoodie jerks his head and glitches into a sharp black-suited agent with sunglasses.
```

Use it as: upload a start image that matches the scene, select motion preset **Agent Reveal**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d4173638-c843-42d0-abb1-6bae37ff34e6.webp (320×182)
- Card preview, variant `b6eb17bb`: https://d1xarpci4ikg0w.cloudfront.net/b9373a4a-bbd9-4a53-afd4-d60e30e47a65.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/83303d5c-1556-421b-b48f-3388b0d41f05 | https://static.higgsfield.ai/83303d5c-1556-421b-b48f-3388b0d41f05.mp4 | https://static.higgsfield.ai/83303d5c-1556-421b-b48f-3388b0d41f05.webp | https://d1xarpci4ikg0w.cloudfront.net/4472403b-c733-48e1-8b0e-3ff576fd7f7d.webp (320×182) |
| 2 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904 | https://static.higgsfield.ai/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904.mp4 | https://static.higgsfield.ai/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904.webp | https://d1xarpci4ikg0w.cloudfront.net/92cdb979-f505-4153-b499-6a363eeb79d4.webp (320×486) |
| 3 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/265b0843-a63d-44a8-aa9c-3117c5450742 | https://static.higgsfield.ai/265b0843-a63d-44a8-aa9c-3117c5450742.mp4 | https://static.higgsfield.ai/265b0843-a63d-44a8-aa9c-3117c5450742.webp | https://d1xarpci4ikg0w.cloudfront.net/30b1eacb-158a-4c56-aa26-ff95b1db6a5a.webp (320×486) |
| 4 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/e526c39b-2312-4f50-8f27-1ad1ebe5d920 | https://static.higgsfield.ai/e526c39b-2312-4f50-8f27-1ad1ebe5d920.mp4 | https://static.higgsfield.ai/e526c39b-2312-4f50-8f27-1ad1ebe5d920.webp | https://d1xarpci4ikg0w.cloudfront.net/9e7afb35-134f-43e9-8187-bda4879a3fab.webp (320×486) |
| 5 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/09c36559-b8e3-437d-b041-c6392f9b81f1 | https://static.higgsfield.ai/09c36559-b8e3-437d-b041-c6392f9b81f1.mp4 | https://static.higgsfield.ai/09c36559-b8e3-437d-b041-c6392f9b81f1.webp | https://d1xarpci4ikg0w.cloudfront.net/aa0f9ed6-9beb-4047-ab85-1874f0cd4e47.webp (320×486) |
| 6 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/e37beb80-8cca-4d1d-82d7-76e055e529dd | https://static.higgsfield.ai/e37beb80-8cca-4d1d-82d7-76e055e529dd.mp4 | https://static.higgsfield.ai/e37beb80-8cca-4d1d-82d7-76e055e529dd.webp | https://d1xarpci4ikg0w.cloudfront.net/ec927c09-ebea-461b-85f6-3b6288a59f4b.webp (320×182) |
| 7 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43 | https://static.higgsfield.ai/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43.mp4 | https://static.higgsfield.ai/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43.webp | https://d1xarpci4ikg0w.cloudfront.net/5e9fe161-f240-4574-80ba-035b8df139b7.webp (320×486) |
| 8 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/484e20f8-d4f1-49f5-b336-3a557c92d8e0 | https://static.higgsfield.ai/484e20f8-d4f1-49f5-b336-3a557c92d8e0.mp4 | https://static.higgsfield.ai/484e20f8-d4f1-49f5-b336-3a557c92d8e0.webp | https://d1xarpci4ikg0w.cloudfront.net/d3bdde35-a524-4a12-9620-f3dc1fd6e32d.webp (320×210) |
| 9 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/8698cc1a-8432-4b17-8011-160ca88c1b05 | https://static.higgsfield.ai/8698cc1a-8432-4b17-8011-160ca88c1b05.mp4 | https://static.higgsfield.ai/8698cc1a-8432-4b17-8011-160ca88c1b05.webp | https://d1xarpci4ikg0w.cloudfront.net/ec4163ae-0f94-4ad0-aac7-1df98bd9cb32.webp (320×182) |
| 10 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/25320337-f658-4b47-bdfb-98097756c3bd | https://static.higgsfield.ai/25320337-f658-4b47-bdfb-98097756c3bd.mp4 | https://static.higgsfield.ai/25320337-f658-4b47-bdfb-98097756c3bd.webp | https://d1xarpci4ikg0w.cloudfront.net/15432e43-f46f-45d5-afae-a2481cce2d0f.webp (320×486) |
| 11 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/ae9be239-b3ad-458a-a164-fcd3378ae288 | https://static.higgsfield.ai/ae9be239-b3ad-458a-a164-fcd3378ae288.mp4 | https://static.higgsfield.ai/ae9be239-b3ad-458a-a164-fcd3378ae288.webp | https://d1xarpci4ikg0w.cloudfront.net/c32600ac-0357-4586-bf5f-a2bf4e55eaf3.webp (320×320) |

Source pages: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b, https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3. Crawled 2026-09.


## Real sample prompts (site)

11 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `ae9be239-b3ad-458a-a164-fcd3378ae288`** (priority 17) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=7, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ed5c8c8f-22e9-4667-95b4-8726cf2aef3f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/54030cd6-b269-4308-9796-ecb9ba876940.mp4
  - page: https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3/ae9be239-b3ad-458a-a164-fcd3378ae288

```text
Static shot. Woman with vivid blue hair, half of her face visible on the left edge of the frame, wearing yellow-tinted oversized sunglasses. Smooth beige background evenly lit with neutral light, no visible elements besides the subject. Her facial features begin to subtly stretch and morph in place, transforming without movement into a male face with short black hair and a stern expression; black sunglasses fade in over the new face. Extreme close-up, off-center composition with tight focus on the subject’s eye area and sunglasses, maintaining exact facial positioning. Surreal and intense, evoking a mysterious technological transformation. Seamless and realistic VFX morphing of facial structure, hair color, and skin tone, smoothly transitioning to the face of a man, with no shift in position.
```

- **Sample `25320337-f658-4b47-bdfb-98097756c3bd`** (priority 16) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/60dbeaa1-255b-4155-b70a-5ae1c2a1ba8b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ba0c54a1-6cc9-4be2-98a6-95dd761ba899.mp4
  - page: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/25320337-f658-4b47-bdfb-98097756c3bd

```text
Dolly In. A stylish man with short afro-textured hair, wearing bold yellow-tinted sunglasses and a striped cream, yellow, and black sweater, standing confidently with a bright smile. Indoors, against a richly textured red carpet that contrasts sharply with his outfit, creating a visually striking and contemporary backdrop. His facial features begin to distort and stretch unnaturally, the smile fades, and his identity transforms; black glasses seamlessly appear on the new face as the morph completes. Medium shot slowly transitions into an extreme close-up, with shallow depth of field focused tightly on the face to highlight the transformation in vivid detail. Surreal and tense, with an eerie calmness in the environment as the subject's identity visually warps in front of the viewer. Hyperreal visual effects portraying fluid digital morphing, with realistic lighting and shading to enhance the identity shift process.

```

- **Sample `8698cc1a-8432-4b17-8011-160ca88c1b05`** (priority 15) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/063e83be-53f6-4522-99d7-90ee57c1c375.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/60b24d1b-b008-40fd-873b-a703ee40cfc6.mp4
  - page: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/8698cc1a-8432-4b17-8011-160ca88c1b05

```text
Static medium shot fixed on a young man with short black hair, sitting in front of a retro computer setup with electrode sensors on his head. The room is warmly lit with wood-paneled walls, cassette equipment, and 80s-style electronics. The man begins to grimace in pain as his face stretches and warps, transforming into another man’s face with a different black hairstyle. Black sunglasses smoothly appear on the new face, and a suit with a tie forms on his body. The shot remains locked in focus to emphasize the facial transformation. The mood feels surreal and tense, like a psychological sci-fi thriller. Retro styling with realistic VFX to portray painful morphing and digital identity shift. 
```

- **Sample `484e20f8-d4f1-49f5-b336-3a557c92d8e0`** (priority 14) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=7, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ec98b785-5398-4f9f-a7e9-555e20a22e28.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2daf7cd0-d5b4-4569-90a2-cb2ca9c1de5b.mp4
  - page: https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3/484e20f8-d4f1-49f5-b336-3a557c92d8e0

```text
Static frontal shot. A man with short light hair, sitting alone in a cold-lit subway car, his reflection visible in the window across. As he sits still, his face begins to distort and stretch, gradually transforming into a new face with darker hair. Black sunglasses appear on his new face, and his expression changes to one of calm confidence. His clothing shifts into a black suit - jacket and trousers. The camera remains locked, emphasizing the transformation and subtle reflection in the glass. The atmosphere feels neon-lit and tense, like a scene from a psychological sci-fi film. Urban, realistic styling with smooth visual effects highlighting the identity shift.
```

- **Sample `7c9c2491-48aa-4241-9f07-f2d1f3ba8b43`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2dd142d2-86e2-4c3d-a98c-2d95b8d4bbe7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/058152b6-2385-4d24-9801-c16077e04b9b.mp4
  - page: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43

```text
Orbit Shot. A young man with bright turquoise hair styled wildly, wearing amber-tinted goggles with an orange strap, a green graphic shirt, and holding a toothpick in his mouth, his face turned in profile with a calm, confident expression. Set against a flat cyan-blue background that complements the hair and clothing, creating a clean and vibrant studio-like environment. His head begins to distort and stretch with fluid unnatural motion; facial features rearrange and harden as the transformation occurs. A black suit jacket materializes over his torso, along with a crisp white shirt, black tie, and sleek black sunglasses snapping into place on the new face. Slow orbit shot circling his body from left to right, beginning in profile and gradually revealing the full transformation in three-quarters view, with mid to medium-close framing and shallow depth of field. Smooth and unnerving, as reality subtly bends around the subject, amplifying the uncanny shift in identity through clean lighting and surreal stillness. Hyperreal effect with seamless digital transitions, realistic fabric simulation for the morphing clothing, and detailed face-morphing effects to convey the transformation into a black-suited figure with precision and cinematic polish.
```

- **Sample `e37beb80-8cca-4d1d-82d7-76e055e529dd`** (priority 12) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ba72125f-a938-4d6e-be22-4b5b5dc8882a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c0387318-f052-466f-a9eb-acd23fc8f865.mp4
  - page: https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3/e37beb80-8cca-4d1d-82d7-76e055e529dd

```text
Static shot. A serious-looking man in a suit seated in a formal setting, with the American flag in the blurred background. Interior of an official government office with golden drapery and soft directional lighting. His face begins to distort and stretch with subtle ripples, gradually transforming into a completely new face. Locked-off close-up with tight focus on facial transformation, maintaining consistent framing for emphasis. Dramatic and tense, heightened by the surreal shift in identity. Realistic VFX-driven morphing, with cinematic lighting and the sudden appearance of sleek black sunglasses over the new face.
```

- **Sample `09c36559-b8e3-437d-b041-c6392f9b81f1`** (priority 10) — Wan 2.5 motion preset, steps=81, frames=20, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c836bd67-e82a-4640-808f-ed1a67a7ef5d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/38d224e1-3c87-44d9-bc58-22ab352327b3.mp4
  - page: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/09c36559-b8e3-437d-b041-c6392f9b81f1

```text
Static medium shot. A young man with short blond hair wearing a black zip-up jacket, standing inside a red phone booth and holding the receiver to his ear. Classic British red phone booth at dusk. The interior is dimly lit with soft yellow light. The glass panels are fogged, showing faint reflections of the surroundings. The man suddenly begins to scream. His face stretches and distorts unnaturally, then transforms - his hair turns black and changes style, and black sunglasses appear on his face. Stationary framing at chest level, centered to capture facial details and transformation clearly. Tense and surreal. The lighting and confined space contribute to a feeling of pressure and unease, with a subtle supernatural undertone. Realistic with dramatic transformation effects. Emphasis on facial change, smooth distortion animation, and bold contrast between natural and altered appearance.
```

- **Sample `e526c39b-2312-4f50-8f27-1ad1ebe5d920`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f5439f6c-2ec2-4057-adb8-16867dd49c03.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e510dc15-5d32-44c9-9dcf-cd08e53963b4.mp4
  - page: https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3/e526c39b-2312-4f50-8f27-1ad1ebe5d920

```text
n the midst of a vast, misty mountain landscape, a young man with golden hair and dark skin stands motionless, staring forward. His black shirt blends into the cool, moody background. The wind is still. A soft pulse of digital interference ripples across his face. His irises shift. His jaw firms. The freckles across his cheeks subtly re-align in perfect symmetry. His collar sharpens. The shirt transforms into a crisp black tuxedo with a white collar. His posture becomes unnaturally rigid. The sky behind him remains overcast, untouched. Then, black rectangular Agent Smith sunglasses appear cleanly across his eyes. His expression is frozen. He is still himself — but now fully overwritten. He is Agent Smith, standing in human disguise at the edge of the Matrix.
```

- **Sample `265b0843-a63d-44a8-aa9c-3117c5450742`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4822997f-0284-497b-8230-7c540fa65b6e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0ac9402d-a7ab-487e-86f7-9529c1c072a1.mp4
  - page: https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3/265b0843-a63d-44a8-aa9c-3117c5450742

```text
In a quiet, minimal room, a young freckled woman with short dark hair stares blankly ahead while holding a few strands of white noodles in her mouth, chopsticks paused mid-air. The camera remains fixed on her face. Suddenly — a low, glitching hum begins to build. Her expression twitches. One eye blinks out of sync. Her jaw shifts sharply to the side and resets. The noodles begin to slip from her lips as her grip loosens. The chopsticks tremble slightly in her fingers. A sharp pulse — and the noodles fall from her mouth. Her face begins to change subtly: her cheekbones tighten, her mouth hardens, her eyes go cold. Without changing her identity, her clothing morphs into a crisp black tuxedo jacket and white shirt. Her posture straightens. Her hand lowers as if letting go of the previous self. A final flicker crosses her eyes — and sharp black rectangular Agent Smith sunglasses appear over them. She stares forward with mechanical calm. She is still herself — but now an Agent.
```

- **Sample `c6bad2dc-b4bc-4d95-a170-2a6c7a59d904`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6544bdc5-f455-43f7-8e54-e847c061b4c9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b1286e76-0167-421d-af4d-99583724521d.mp4
  - page: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904

```text
In a quiet morning bathroom, a young woman with short dark hair brushes her tongue while looking at herself in the mirror. The lighting is soft and sterile, the scene mundane. Suddenly, a low digital crackle pulses through the reflection — but only her reflection glitches. Her face in the mirror begins to distort violently — the mouth twists unnaturally, eyes flicker in and out of alignment, her nose bends and snaps back. Her face pulses in and out of shape, as though reality is trying to overwrite her identity. The toothbrush jitters slightly in her hand, but she keeps brushing — unaware.The distortion abruptly stops. The image in the mirror stabilizes. Her robe fades into a crisp black tuxedo with a white shirt. Her short hair slicks back. A pair of black rectangular sunglasses slide into place on her face in the reflection. She slowly stops brushing, lowers the toothbrush, and raises her eyes to look at herself. Calm. Unblinking. She is now Agent Smith. The bathroom remains unchanged. But she is no longer who she was.
```

- **Sample `83303d5c-1556-421b-b48f-3388b0d41f05`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4f5b379e-0aae-4a3a-8d96-ecde1f9544fc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e7300867-47a1-4046-b719-e82948b55d87.mp4
  - page: https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3/83303d5c-1556-421b-b48f-3388b0d41f05

```text
In a warmly lit interior, an older man with long gray hair and a soft smile sits in peaceful conversation. The background remains gentle and unchanged. Suddenly, his face begins to distort — not stylized, but hyper-realistically warped. Cheeks stretch sideways, eyes sink slightly, jaw twists unnaturally and re-snaps into place. The deformation continues in pulses, as if the face is fighting itself — twitching, reshaping, folding in and out in short spasms. This lasts for several seconds, building intensity.

Then — a sharp stop. Silence. The distortion ceases. His face stabilizes. Hair slicks back instantly. A crisp white shirt collar and black tuxedo jacket fade in. The expression becomes cold and unreadable. Finally, rectangular black sunglasses snap into place over his eyes. His posture straightens. The transformation is complete. He is now Agent Smith. The room stays cozy — but he does not belong in it anymore.
```
