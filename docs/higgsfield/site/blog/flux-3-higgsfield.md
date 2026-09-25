# Meet Flux 3 on Higgsfield: How It Works and What You Get

- Source: https://higgsfield.ai/blog/flux-3-higgsfield
- Byline: Higgsfield · Aug 16, 2026 · 8 min · Last updated: 3w ago
- Prompts extracted: 1

## Notes

**Topic:** Flux 3 Video on Higgsfield (announced Jul 23 2026, early access).

- Black Forest Labs' first video model (Flux 1/2 were image-only); part of a multimodal foundation model (image/video/audio).
- Modes: text-to-video, image-to-video, **video continuation** (extends a clip from its final seconds of picture *and* sound, keeping motion/camera/audio across the seam).
- Clips **5-20 s**, 720p/1080p; optional synchronized audio (speech, SFX, ambience) in the same pass; multilingual dialogue with lip sync; **moving typography stays readable**.
- Up to **10 reference frames** (images, video, audio) + Start Frame / End Frame.
- Style (camcorder, animation, cinematic) is described in the prompt — **no Cinema Studio genre/lens/lighting controls**, so write camera style, light and look into the prompt; use Cinema Studio when you need director-panel control.

**Steps:** select FLUX.3 Video -> choose mode -> add refs / start-end frames -> prompt (scene, dialogue, on-screen text, style) -> toggle audio -> generate.
**Pricing:** 5 s 720p 27.5 cr ($1.35); 5 s 1080p 45 cr ($2.25); 20 s 720p 110 cr ($5.50); 20 s 1080p 180 cr ($9.00).
**Cost tip:** iterate short, at 720p and with audio off; render the full 20 s 1080p with sound only once the prompt and refs are dialled in.

## Prompts (verbatim)

### P1. Full Workflow: Step by Step

- Model / settings: FLUX.3 Video (Black Forest Labs), 5-20 s, 720p/1080p, optional audio
- Use-case: cinematic film scene
- Context: Step 4: Write the prompt. Cover the scene, the dialogue if the clip includes speech, any on-screen text that needs to stay legible while it moves, and the style, camcorder-style footage, animation, or full cinematic. Flux 3 does not use Cinema Studio's genre, lens, or lighting controls, so creative direction such as camera style, lighting, and …

~~~~text
single continuous shot, one take no cuts, cinematic oner, cinematic lighting, photorealistic, 35mm film quality, professional color grading, sharp focus, high detail texture, film grain, depth of field mastery, smooth slow dolly

A young woman plays violin inside a white circular rotunda — long wavy brown hair half-tied with a scarlet-red ribbon bow, its tails hanging down her back, a flowing soft pink dress with draped sleeves. She stands on a round white platform encircled by a ring of deep mirror-blue water, smooth white curved walls with arched niches around her, a vast circular opening overhead revealing vivid blue sky with soft white clouds. The violin is natural honey-brown wood. She plays with genuine musical focus and feeling throughout, eyes closed.

SUBJECT LOCK: she remains facing the camera the entire shot — her body never turns, never rotates, never spins; feet planted in the same spot on the platform from first frame to last; only her bow arm, fingers, breathing and a gentle sway of her head move with the music; the dress hem and ribbon tails move only from her subtle motion, nothing else.

ENVIRONMENT LOCK: the architecture is rigid and static — walls, arches, platform, water ring and oculus keep exactly the same geometry, position and proportions throughout the shot; no new rooms, no morphing walls, no shifting arches; the water stays calm with only faint ripples.

Color grade locked throughout: clean white architecture with pale icy-blue shading, deep saturated blue only in the water ring, vivid blue sky with white clouds in the oculus, soft pink only on the dress, red only in the hair ribbon, warm natural wood only on the violin, soft natural skylight from above, no harsh highlights, no blown-out whites, restrained contrast, no color shift first frame to last.

Single continuous shot 5s: Opening on her in medium shot — violin under chin, bow drawing across strings in natural playing motion, eyes closed. Camera performs ONE simple move only: a slow, straight dolly back along the ground, no pan, no orbit, no crane — the frame gradually widening from medium shot to medium-wide, revealing more of the platform, the water ring and the lower arches; the oculus edge just entering the top of frame by the end. The camera keeps her perfectly centered and frontal the whole way. She stays absorbed, eyes closed, playing continuously as the camera settles.

Total: 7s / 1 shot / 16:9
~~~~

