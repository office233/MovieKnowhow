# Meet MiniMax H3 on Higgsfield: How It Works and What You Get

- Source: https://higgsfield.ai/blog/minimax-h3-higgsfield
- Byline: Higgsfield · Aug 16, 2026 · 10 min · Last updated: 3w ago
- Prompts extracted: 1

## Notes

**Topic:** MiniMax Hailuo 3.0 on Higgsfield (Aug 16 2026).
- vs Hailuo 2.3: resolution 768p/1080p -> **2K**; length up to 10 s (6 s at 1080p) -> **up to 15 s**; 24 fps; silent -> **native stereo dialogue, SFX, ambience**; input one image -> **up to 9 images, 3 videos, 3 audio clips** + prompt; aspect 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 or adaptive; instruction-based editing of finished clips; Start/End Frame (Higgsfield implementation).
- **Steps:** select Hailuo 3.0 -> T2V or I2V + references -> optional Start/End Frame -> prompt that **says what each reference is for** ("use Video 1 for the camera movement, Image 2 for the character, Audio 3 for the voice") and names camera moves in professional shot language (slow orbit, handheld tracking) -> generate -> refine with an edit instruction describing only what should change.
- Tips: recurring character refs with even light, direct face angle, nothing covering features; clean voice audio (profile shots/noisy audio hold worse); multi-shot storytelling supported.
- Pricing (2K): 5 s 20 cr ($1); 10 s 40 cr ($2); 15 s 60 cr ($3).
- When to use: combining face + motion + voice references in one shot; native audio; targeted edits. For 4K or storyboarded multi-shot, Kling fits better.

## Prompts (verbatim)

### P1. Full Workflow: Step by Step

- Model / settings: MiniMax Hailuo 3.0 (H3), 2K, up to 15 s, native stereo audio
- Use-case: product ad
- Context: Step 4: Write the prompt. Describe what happens in the scene, and tell H3 what each reference is for. For example: use Video 1 for the camera movement, Image 2 for the character, and Audio 3 for the voice. Naming the camera move in professional shot language, a slow orbit, a handheld tracking shot, gives a more consistent camera path than …

~~~~text
The hero product: a real, physical high-top football boot "VYORA" — turquoise-to-deep-purple gradient upper with hot-pink lightning-crack graphics, dark purple laces, knitted sock collar fading from purple to bright red-pink, cyan brand emblem on the collar, white "VYORA" wordmark on the lateral side, translucent iridescent soleplate with hot-pink studs. Keep the boot shape, graphics, wordmark, and colors identical in every shot.

PHOTOREALISM IS CRITICAL: this is real product photography footage, not CGI. The boot must look like a real manufactured shoe — visible knit fibers and loop texture on the collar, real stitching seams, micro-scratches and natural imperfections on the soleplate, fabric grain on the laces, matte and gloss zones exactly like real synthetic leather and TPU, physically accurate soft shadows and contact shadows, natural lens depth of field and subtle film grain. No plastic-toy look, no smooth 3D-render surfaces, no exaggerated glow on the shoe itself.

Hyper-dynamic macro football boot commercial, 16:9, 10 seconds, aggressive rhythmic editing with hard cuts and constant speed-ramping — shots snap from ultra-slow-motion to sudden fast-forward bursts and back. Background: a bright, luminous cyan studio world with absolutely no black and no gray anywhere — a seamless vivid cyan-to-turquoise gradient sweep, evenly lit and hyper-saturated, with soft violet and hot-pink glow spots drifting across it in parallax and gentle light waves rippling through the cyan like light underwater; the glossy floor is bright cyan too, reflective like polished colored glass; the palette mirrors the boot itself — cyan, turquoise, violet, hot pink — fresh, electric, premium.

Shot 1 (0.0–1.2s): extreme close-up of the knitted collar and cyan emblem; the camera whips in fast from off-frame and ramps into extreme slow motion, raking key light revealing every individual knit loop and fiber, soft violet-pink glow drifting in the bright cyan background bokeh.

Shot 2 (1.2–2.4s): crash zoom straight into the iridescent soleplate held toward camera; speed-ramp — violently fast, then a near-freeze on the hot-pink studs, sharp specular reflections sliding across the glossy translucent plate exactly like real molded TPU, the plate picking up turquoise reflections from the set.

Shot 3 (2.4–4.0s): low-angle FPV-style camera swing arcing under and around the boot standing on a low glossy cyan plinth — one continuous accelerating swoop from heel to toe that ramps down to slow motion exactly as the white "VYORA" wordmark crosses center frame, violet and pink rim light flaring along the silhouette, fine synthetic-leather texture and pink lightning cracks clearly visible, a real soft contact shadow anchoring the boot.

Shot 4 (4.0–5.8s): the boot slams down onto the glossy bright-cyan floor in extreme slow motion — a burst of fine white mist erupts from under the studs on impact, real physics, weight and a slight settle-bounce; the camera does a tight accelerating 180° orbit around it as the mist hangs frozen, glowing turquoise in the light, then rushes away.

Shot 5 (5.8–10.0s): single continuous closing shot — one single VYORA boot standing alone in perfect side profile on the glossy cyan mirror floor, toe pointing screen-left; the camera performs a fast pull-back that ramps down into a slow, smooth orbital drift and finally settles to a locked static hero framing with the boot centered; behind it the cyan-to-turquoise gradient glows brightly with slow waves of violet and hot-pink light sweeping across like silk, their reflections rippling over the mirror floor around the boot; thin wisps of white mist drift low, a soft overhead light pools gently on the boot; in the last second the camera is dead still, the mist settles, the background gives one gentle bright pink-violet wave. Exactly one boot in the frame — never two or three, no duplicates in reflections other than the natural floor mirror.

Color grade: bright, airy, hyper-saturated cyan-turquoise base with violet and hot-pink accents, luminous shadows tinted cyan (no black, no gray anywhere in the frame), crisp whites on the wordmark, strong micro-contrast, premium athletic editorial finish with a photographic film-like texture.

Audio: no melody — a deep pulsing drone underneath, punchy impact hits on every cut, time-stretch "vacuum" sound design on each speed-ramp, tactile knit and stud-click foley on macro shots, a big boom with mist hiss on the floor slam, airy whooshes on camera moves, then sudden dead silence on the final locked frame.
~~~~

