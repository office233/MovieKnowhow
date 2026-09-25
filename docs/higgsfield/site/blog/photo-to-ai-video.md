# How to Turn a Photo Into an AI Video: Step-by-Step Guide (2026)

- Source: https://higgsfield.ai/blog/photo-to-ai-video
- Byline: Higgsfield · Aug 2, 2026 · 8 min · Last updated: 4w ago
- Prompts extracted: 0

## Notes

**Topic:** turning a photo into AI video — three paths (Aug 2 2026). No prompts.
- Principle: a reference photo + a specific motion prompt beats text alone. Motion prompt should describe the specific motion, what the background does while the subject moves, and pacing (slow/deliberate vs fast/abrupt). "Make it move" leaves everything to the model.
- Multiple references in a particular order (face, location, product reveal) -> plan the sequence first in **Popcorn** (4, 6 or 8 frames, Auto/Manual).
- Source photo: sharp, well lit, clear subject (blur/clutter -> the model guesses -> distortion).
- **A) Seedream 5.0 Pro -> Turn to Video:** generate still, review (cheapest point to fix), Turn to Video -> pick model (Seedance 2.0 general, Kling 3.0 humans, WAN 2.7 physics-accurate camera, Veo 3.1, Hailuo 2.3) -> **separate motion prompt**. Cost e.g. 3 cr image (2K) + 36 cr Seedance 2.0 8 s 720p = 39 cr ($1.95) — cheapest.
- **B) Supercomputer:** describe the whole shot as a video brief from the start; agent makes the image, waits for approval, then animates it; cost shown at each approval.
- **C) Cinema Studio 3.5 with your own refs:** up to 9 refs (character, location, product, style) + genre/lighting/palette/camera/lens/focal/aperture set explicitly; prompt focuses on action and dialogue. ~40 cr ($2) for 8 s 720p.
- Watermark removal depends on plan tier or active Unlimited — check export settings before generating.

