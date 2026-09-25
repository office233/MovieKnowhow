# Character & location consistency — craft notes

Researched: 2026-09-25 (search extracts of official pages; direct fetch blocked).

## Core principle
Use **two anchors in the same generation**: a trained identity for the face and a reference image for
the place. Handling them in separate passes is where drift creeps in.

## Soul ID (face identity)
- Upload **20+ photos** of the same person (up to ~80 supported); well-lit, varied angles and expressions,
  no sunglasses, heavy shadows, crops, or group shots. Quality beats quantity.
- Training takes roughly 5 minutes; name the character for reuse.
- Reusable across projects and models indefinitely. Expect "clearly the same person", not pixel-identical;
  extreme style shifts or odd angles can still drift.
- Only train on people whose likeness you have rights to.

## Elements (characters, locations, props)
- Save once as an **Element** and tag it into shots (Kling 3.0 multi-shot has an `@elements` input per shot;
  Cinema Studio 3.5+/4.0 share Elements across a team).
- A location must keep furniture layout, light direction, wall color, window view, time of day, textures
  fixed while the camera moves — feed the same location reference to every shot.

## Popcorn (storyboards)
- Generates **up to 8 frames as one coherent set** (not independent rolls), keeping identity, clothing,
  proportions, lighting and mood.
- Manual mode: direct each frame (subject, setting, style, atmosphere). Auto mode: one prompt + frame count,
  Popcorn expands the story.
- Tips: use a clean, evenly lit portrait for the face reference; match input aspect ratio to output;
  avoid low-res inputs.

## Continuity techniques for multi-shot stories
- Use the **last frame of shot N as the start frame of shot N+1** to chain seamlessly.
- Keep one Soul preset / Moodboard / color HEX across a series for visual consistency.
- 4.0 "AI Cast": reusable actors consistent across scenes, angles and lighting.
- Seedance 2.0: reference-driven model built for identity and multi-SKU product consistency.

## Sources
- https://higgsfield.ai/blog/consistent-characters-locations
- https://higgsfield.ai/blog/sould-id-best-character-consistency
- https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-create-and-use-a-soul-id-character
- https://higgsfield.ai/blog/How-to-Use-AI-for-Storyboards-Higgsfield-Popcorn
- https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn
- https://higgsfield.ai/blog/Kling-3.0-is-on-Higgsfield-User-Guide-AI-Video-Generation
- https://higgsfield.ai/blog/ai-fashion-photo-generator
