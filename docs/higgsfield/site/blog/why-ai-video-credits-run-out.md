# Why Your AI Video Credits Run Out Faster Than You Expect

- Source: https://higgsfield.ai/blog/why-ai-video-credits-run-out
- Byline: Higgsfield · Sep 10, 2026 · 9 min · Last updated: 2w ago
- Prompts extracted: 2

## Notes

**Topic:** why credits run out — you pay per attempt (Sep 10 2026).
- **Real cost per clip = price of one generation x average attempts** (typically 3-10). Technical failures are auto-refunded on Higgsfield; "completed but wrong" takes are billed everywhere.
- **Five drains and fixes:**
  1. Prompts refined one detail per run -> specify the full shot first: camera (position, movement, framing), lens, lighting (source, direction, mood), **exact duration** (changes price), style (genre, colour, pacing), sound. Use the **block template** below (SCENE CONTEXT ... ) — every blank block is a decision the model makes differently each time.
  2. Camera/light as text -> set them as Cinema Studio controls (visual previews for each camera move; same move executes every run).
  3. Drifting faces -> Soul ID (20-80 photos) or declare each character once in a REFERENCES block and refer to them by handle (template below).
  4. One model for drafts and finals -> draft on light versions (Seedance 2.0 Mini, Kling 3.0 Turbo, Veo 3.1 Lite), final on the flagship.
  5. Price visible only after -> Higgsfield shows the exact cost before the run (e.g., 10 s 1080p ≈ 4x a 5 s 720p draft).
- Unlimited: covered models with the **Unlimited toggle** cost 0 credits (standard queue); Credit Mode = priority queue; MCP/CLI/Canvas/Supercomputer/plugins always charge. Most included models have 365-day unlimited; newest flagships get shorter windows (e.g., 7 days); some models include free-generation pools. Iterate on covered models, spend credits on the final render.

## Prompts (verbatim)

### P1. Reason 1: Prompts Built One Detail at a Time

- Model / settings: Higgsfield prompt engineers' block templates (fill the brackets)
- Use-case: other
- Context: Higgsfield prompt engineers build video prompts on a fixed block structure. The same structure works as a starting point across many video models and is then adjusted for the model you're using. Copy it and fill in the brackets:

~~~~text
SCENE CONTEXT
[What happens, in one or two sentences. Duration in seconds, aspect ratio, single continuous shot or the number of cuts. State "real time" if you don't want slow motion.]

SUBJECT
[Who or what is in the frame. Lock everything that must not change between frames: face, hair, wardrobe, colors, props.]

LOCATION
[The setting and the objects in it that matter for the shot.]

CAMERA
[Position, height, and one movement: static, push-in, orbit, tracking. For multiple shots, list them by seconds: 0-3s wide static, 3-6s close-up, and so on.]

OPTICS
[Lens or field of view, focus behavior, depth of field.]

ACTION
[What the subject does, beat by beat, tied to seconds. Include the small movements: a blink, a head turn, one gesture per line of dialogue.]

PHYSICS
[How things carry weight and react: fabric in wind, water breaking into droplets, feet gripping the ground. Real-world motion, nothing floats.]

LIGHTING
[The main light source, its direction and color temperature, and what stays constant for the whole shot.]

AUDIO
[Dialogue lines in quotes if any, the ambient sounds, and what should stay out: no music, no narration, no subtitles.]

STYLE
[The overall look: photoreal or stylized, color grade, grain. Close with what must not appear: no text, no logos, no watermarks.]
~~~~

### P2. Reason 3: Character Faces That Drift Between Generations

- Model / settings: Higgsfield prompt engineers' block templates (fill the brackets)
- Use-case: other
- Context: Reference images solve the same problem at the prompt level. Higgsfield prompts accept multiple attachments, and each character gets declared once and then referenced by handle throughout the prompt:

~~~~text
REFERENCES
<<image 1>>: THE WOMAN. [List what the model takes from this reference: face, hair, wardrobe. Close with: closely matches the reference.]
<<image 2>>: THE MAN. [Same: everything to inherit from his reference. Closely matches the reference.]

ACTION
The woman <<image 1>> sits across from the man <<image 2>> at a cafe table and delivers her line; both faces match their references in every frame.
~~~~

