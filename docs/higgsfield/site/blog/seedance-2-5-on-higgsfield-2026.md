# Seedance 2.5 on Higgsfield in 2026: What You Get and How It Works

- Source: https://higgsfield.ai/blog/seedance-2-5-on-higgsfield-2026
- Byline: Higgsfield · Aug 6, 2026 · 10 min · Last updated: 6d ago
- Prompts extracted: 1

## Notes

**Topic:** Seedance 2.5 launch guide (Aug 6 2026).
**What's new vs 2.0:** clips **up to 30 s** with native audio (ambience, foley, score) in the same pass; **region edit** (fix one face/object without re-rendering); **up to 50 references**; selectors replace prompt text: era (1960s-2020s), genre, lighting (golden hour, hard key, practicals, moonlight + hand-moved angle), camera (lens/body: 24mm, anamorphic, macro), emotional control (calm -> dread shifts framing and colour temperature), **physics** (realistic, superhero, hyperbolic), Soul Hex colour transfer; motion: Seedance motion control (camera path + subject movement), **R2V motion guidance** (copy motion from a reference clip, even stick-figure movement), shot re-generate (re-roll one shot of a sequence), Draw to Video (mark up a frame: remove/move/add), Extend / Transition (generate between two clips) / Reverse, web 3D scene builder, montage cuts & pacing. Generates at 480p/720p/1080p (upscale to 4K); any aspect 9:16-21:9; ~20% better prompt adherence than 2.0; identity/wardrobe/lighting held from a single reference.
**Result:** a shot that took 3-4 full regenerations now = one base generation + a region edit or control tweak.
**Step-by-step:** 1) upload references FIRST (face, outfit, location, prop — lock them, don't describe them); 2) set era, genre, lighting, physics before the prompt; 3) camera body, lens, emotional tone; 4) short prompt stating only the action and anything the controls don't cover (example below with `@Image 1` / `@Image 2`); 5) generate. Variations: slide era to 1980 (same blocking, new grain/colour/lens); motion control to move the same action into a fantasy world.
**Pricing:** 10 s 480p 30 cr ($1.50); 10 s 720p 70 cr ($3.50); 10 s 1080p 120 cr ($6.00). Unlimited on Seedance 2.5 runs 33 days on eligible plans; some plans add unlimited Seedance 2.0 up to 1080p.

## Prompts (verbatim)

### P1. How To Generate With Seedance 2.5: Step-by-Step Guide

- Model / settings: Seedance 2.5 (two character references; era/genre/lighting/physics/camera/emotion selectors)
- Use-case: cinematic film scene
- Context: Step 4: Write the Prompt.With references and controls already doing most of the work, the prompt itself can stay short. It's directing a scene that's already defined, not describing one from nothing, so it only needs to state the action and any detail the controls above don't cover.

~~~~text
Use BOTH characters as references: the woman in @Image 1 and the man in @Image 2, keeping their faces, hair, skin and outfits consistent with the references (she in her green ribbed polo, he in his striped 07 jersey and wide denim jeans). SCENE: A sunny green city park on a bright clear day, leafy trees, dappled sunlight on a paved path, warm cheerful summer atmosphere, no overcast. A street guitarist sits on a bench in the mid-background playing an acoustic guitar. ACTION (10s): 0-2s the couple face each other on the path, sharing a smile as the music starts. 2-6s they dance together, a light, joyful casual dance, he gently spins her, she laughs, natural relaxed movement in rhythm. 6-9s they come back together, swaying, playful eye contact, he does a little dip. 9-10s they laugh and hold the pose, happy and connected. CAMERA: Smooth slow orbit around the dancing couple, gentle push-in, steady handheld feel. OPTICS: 35mm lens, natural perspective, deep focus, no distortion. LIGHT & GRADE: Bright natural sunlight, warm clean grade, true skin tones, luminous and fresh. PHYSICS: Natural believable body movement, hair and clothing sway with the dance, realistic weight shifts, smooth footwork with no morphing or sliding. SKIN: Preserve natural skin from references, visible pores, peach fuzz, her freckles, his skin texture, no smoothing, no plastic skin. AUDIO: Warm acoustic guitar melody (original, non-recognizable), soft park ambience, light laughter, gentle footsteps. NO-IP: No brands, logos, readable text, or recognizable songs. Ultra-high resolution, 4K, tack-sharp focus, deep detail, crisp clean rendering, no blur, no softness.
~~~~

