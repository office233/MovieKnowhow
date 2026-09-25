# How Gabo Produces One-Hour AI Films With Higgsfield

- Source: https://higgsfield.ai/blog/el-libro-sagrado-higgsfield-case-study
- Byline: Higgsfield · Sep 22, 2026 · 10 min · Last updated: 19h ago
- Prompts extracted: 0

## Notes

**Case study (Sep 22 2026):** Gabo, creator of El Libro Sagrado (historical/mythological feature-length AI films). ~50 films, most ~1 hour; up to 6M views on one video; ~5x views on some releases after joining CPP; series *The Chronicles of Enoch* (Realframe Studios channel). No prompts published, but a detailed method.

**Production timeline:** 20-30 days per one-hour film; 4-5 days planning (research, script, structure, characters).

**Method:**
- **Characters before script**: design faces, clothing, proportions, personalities and reference sheets first; seeing them tells you how they talk and relate. Define where each major character must end up, then work backwards (lets you improvise mid-production without losing direction).
- **Character refs**: Nano Banana, GPT Image 2, Seedream 5.0 on a **plain charcoal-grey background** (no distractions -> face/hair/clothes/proportions preserved). Try **"photo of an actor" instead of "character sheet"** when you need realism.
- **Environment refs** are the opposite: bake weather, lighting, palette and atmosphere (rain, wet ground, clouds, smoke, sun) into the reference image.
- Develop each layer separately (character, environment, atmosphere, movement) rather than asking one model for everything.
- **Model choice**: test several before production, then **don't switch mid-film**. Enoch started on Seedance 2.0, moved to Seedance 2.5 (better prompt interpretation, quality, in-frame control); new work mainly in **Cinema Studio 4.0**.
- **Prompt order**: principal action + dramatic intention first, then camera position, lens, movement, lighting, depth of field, colour, environment.
- **Composition**: rule of thirds, layered depth, off-centre framing, characters in profile or partly from behind — avoid centred symmetry that reads as generic AI. Apply the **60-30-10 colour rule**.
- **Microactions instead of emotion words**: fear = tense jaw, interrupted breathing, slight step back, eyes searching off-frame; sadness = rapid blinking, lowered gaze, irregular breath, wiping nose on sleeve; tension = tightened fingers, restrained moves, delayed reply, small posture shift.
- **Continuity**: grab the final frame of each clip and analyse (with ChatGPT) the character's position, gaze, background and composition before prompting the next shot. In dialogue, **cut to the listener's reaction** before returning to the speaker — natural editing that also hides small generation differences.
- LLMs (ChatGPT, Claude, custom agents) organise/refine prompts; they don't invent the story.
**Still hard:** some scenes need many attempts, exact poses are difficult, generation delays hit the schedule; editing/continuity remain manual work.

