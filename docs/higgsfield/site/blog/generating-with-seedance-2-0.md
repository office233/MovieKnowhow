# Generating with Seedance 2.0: Full Tutorial

- Source: https://higgsfield.ai/blog/generating-with-seedance-2-0
- Byline: Higgsfield · Jun 24, 2026 · 10 min · Last updated: 3w ago
- Prompts extracted: 6

## Notes

**Topic:** full Seedance 2.0 tutorial (Jun 24 2026).

**What's special:** up to **9 reference inputs per call on Higgsfield (9 images, 3 video clips, 3 audio files)**; native audio; lip sync in 8+ languages; camera direction via prompt; consistency via references.
**Prompt order:** (1) subject + action, (2) setting + lighting, (3) camera move, (4) mood/style; add @references. Vague prompts = generic motion; specificity is the biggest lever. Weak-vs-strong example below (immune-cell battle).
**Camera terms it reads directly:** dolly in, truck left, arc shot, push in, pull back wide, handheld follow, crane up, orbital move.

**@ reference system (treated as constraints):**
- `@character` — face geometry, skin tone, style (pair with Soul ID for cross-generation identity).
- `@style` — image/film still/colour ref: lighting, palette, mood.
- `@motion` — short clip whose camera behaviour/motion is replicated.
- `@audio` — voice/music; visuals sync to rhythm, lip sync if speaking, ambience matched.

**First-clip workflow:** AI Video -> Seedance 2.0 -> **validate at 720p** (1080p roughly doubles cost) -> prompt with the structure -> **watch the whole clip — most problems appear at 5-8 s** -> change one thing per iteration (prompt *or* reference) -> re-run identical prompt at 1080p, adding audio only on the final pass (audio adds ~50-100% cost).
**Beginners:** start with image-to-video (sharp, front-facing, well-lit ref), short prompt, under 8 s.

**Fixes:** camera ignored -> use precise terms; character drifts mid-clip -> add anchors (hair colour, clothing, features) or Soul ID; jerky cut -> generate last frame of clip A and first frame of clip B as images and use **first-and-last-frame** mode to make the transition shot; credits vanish -> prototype 720p no audio.
**Enhanced Fast:** paid add-on (ByteDance partnership), same quality at 480/720p, faster — for social tests, 10-20 ad variations, concepting; use standard for 1080p. **Seedance Unlimited** = 30-day add-on, unlimited Enhanced Fast, one concurrent job in shared queue.
**Price comparison (720p 8 s):** Dreamina CapCut $1.29; Higgsfield $1.55 (36 cr); Runway $2.88; Magnific $1.86; fal.ai $2.43 ($0.3034/s). Higgsfield 1080p ≈ $2.00 on Plus.

## Prompts (verbatim)

### P1. How Can I Make My Seedance 2.0 Clips Look More Cinematic?

- Model / settings: Seedance 2.0
- Use-case: cinematic film scene
- Context: Weak: "A battle inside a blood vessel between immune cells and viruses. Red blood cells are moving around. The camera shows the fight from different angles. It looks intense and dramatic.”

~~~~text
Sweeping wide shot of two colossal armies clashing inside a vast blood vessel, the curving translucent vessel wall arching across the frame like a ringed planet of living tissue. The combatants are organic and asymmetrical - immense amoeboid macrophages with rippling membranes and reaching pseudopod limbs, their cytoplasm threaded with bioluminescent seams that pulse as they engulf and strike, set against bristling viral swarms of spiky icosahedral capsids and crowned spike-proteins, all uneven spires and barbed fibers. Smaller craft are biconcave red blood cells - flattened ring-shaped discs that spin and bank, leaving spiral trails through a drifting debris field of cell fragments and fibrin strands. Handheld camera drifts and shakes amid the chaos, snapping from a giant infected cell's membrane cracking open under a concentrated viral assault to a swarm of red cells corkscrewing past a lysed husk. Plasma currents lash the frame, cells burst silently and collapse inward, fresh virions scatter like spores from a dying host cell. Deep crimson and slate-blue plasma, burning white antibody flares, vast cinematic scale and relentless motion.
~~~~

### P2. Cinematic character scene

- Model / settings: Seedance 2.0
- Use-case: cinematic film scene
- Context: Credits are running out faster than expected. Two things drive credit consumption faster than most people expect: audio and 1080p resolution. Prototype without audio at 720p. Lock your prompt first, then run the final version at 1080p with audio. That workflow cuts iteration costs significantly.

~~~~text
@character walks through [setting], [action], camera [move], [lighting], [mood]. SFX: [ambient sound description].
~~~~

### P3. Cinematic character scene

- Model / settings: Seedance 2.0
- Use-case: cinematic film scene
- Context: Credits are running out faster than expected. Two things drive credit consumption faster than most people expect: audio and 1080p resolution. Prototype without audio at 720p. Lock your prompt first, then run the final version at 1080p with audio. That workflow cuts iteration costs significantly.

~~~~text
@character walks through a crowded train station at rush hour, checking a phone, camera tracking close at shoulder height, warm overhead fluorescent light, tense and rushed. SFX: station ambient noise, announcements in the background.
~~~~

### P4. Product visualization

- Model / settings: Seedance 2.0
- Use-case: product ad
- Context: Credits are running out faster than expected. Two things drive credit consumption faster than most people expect: audio and 1080p resolution. Prototype without audio at 720p. Lock your prompt first, then run the final version at 1080p with audio. That workflow cuts iteration costs significantly.

~~~~text
@product sits on [surface] in [setting], [lighting], camera [move], [atmosphere]. No people, no text, no logos.
~~~~

### P5. Product visualization

- Model / settings: Seedance 2.0
- Use-case: product ad
- Context: Credits are running out faster than expected. Two things drive credit consumption faster than most people expect: audio and 1080p resolution. Prototype without audio at 720p. Lock your prompt first, then run the final version at 1080p with audio. That workflow cuts iteration costs significantly.

~~~~text
@product sits on a dark stone surface in a minimal kitchen, warm side lighting from a single window, camera pushing in slowly from medium to close, clean and premium. No people, no text, no logos.
~~~~

### P6. Multi-shot sequence opener

- Model / settings: Seedance 2.0
- Use-case: cinematic film scene
- Context: Credits are running out faster than expected. Two things drive credit consumption faster than most people expect: audio and 1080p resolution. Prototype without audio at 720p. Lock your prompt first, then run the final version at 1080p with audio. That workflow cuts iteration costs significantly.

~~~~text
Wide establishing shot of [location], [time of day], [weather], camera [move], [atmosphere]. [Character] enters frame from [direction] and [action].
~~~~

