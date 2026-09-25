# How to Make AI People Move Realistically: Motion, Physics and Consistency

- Source: https://higgsfield.ai/blog/realistic-ai-human-movement
- Byline: Higgsfield · Jul 10, 2026 · 10 min · Last updated: 4w ago
- Prompts extracted: 1

## Notes

**Topic:** realistic AI human motion — physics, structure, settings (Jul 10 2026).

**Four levers (any model):**
1. **Describe physics, not appearance.** "He swings the bat" = generic swing; "he uncoils from a coiled stance, the bat flexes at contact, his body follows through completely and his weight shifts forward into the first step" = cause and effect to execute.
2. **Numbered shots** for complex action (shot 1 held stare, shot 2 snap into swing, shot 3 sprint) instead of one continuous description (which averages out).
3. **Contrast between states** (stillness->explosion, tension->release, slow->fast) — one-energy scenes feel arbitrary.
4. **Sensor + lens for physical feel:** 35mm Film removes the digital-clean AI tell; Vintage Spherical adds optical breathing (edge softness, blooming highlights).

**Cinema Studio scene build:** 1) Cast character sheet (front/side/back; genre, budget, era) or Soul ID for a real person; 2) location as its own asset (spatial logic, light, room for the camera — e.g., dusty early-1900s ballfield at golden hour); 3) **keyframe = character + location with an empty prompt**; reuse the same keyframe as start frame for every clip in the sequence; 4) numbered shot sequence with camera state per beat (locked / handheld / tracking / crane) and what happens to body, clothes, environment, light; 5) upload character sheet + location as `@image_1`/`@image_2` with the start frame; continue sequences by uploading the previous clip as context video.
**Camera choice changes how motion reads:** handheld = chaos, locked = tension, crane = scale; lighting sets emotional read (rim light silhouette, warm low sun for weight).
**Prompt anatomy (below):** Style / Cinematography (hook on frame one: ~1 s held stare, then hard whip into motion) / Lighting / Color (60-30-10 split) / Camera (85mm for the stare, 35-50mm reactive handheld + crane; 24 fps base, slow-mo on contact "captured at 120fps played at 24fps"; 180-degree shutter) / Skin / Physics / THE SEQUENCE (timed shots) / Audio (near-silence then a sonic slam; original score) / Technical (no letterbox, no text, fictional team, no likeness).

## Prompts (verbatim)

### P1. The Prompt in Practice: A 15-Second Cinematic Baseball Scene

- Model / settings: Cinema Studio (Genre Epic, Sensor 35mm Film, Lens Vintage Spherical, Color Warm Tones, Montage Pacing Dynamic, Emotion Control "Intense, then explosive"), 15 s 16:9
- Use-case: cinematic film scene
- Context: The Prompt in Practice: A 15-Second Cinematic Baseball Scene

~~~~text
Style: 8K live-action photoreal cinema, mythic warm golden-hour early-1900s baseball film, shot on real 35mm film, built on a STILLNESS-TO-EXPLOSION contrast. Must look SHOT ON REAL FILM at magic hour: true depth, warm low sun, dust motes, real motion blur, organic grain, sweat-and-freckle skin. Heroic, intense, nostalgic.

Cinematography: HOOK on frame one is the batter's intense over-the-shoulder STARE straight down the lens, held approximately 1 second in near-silence with a slow micro-push, THEN a hard whip and the world erupts into dynamic motion: pitch incoming, the swing, the camera breaking into reactive handheld, orbiting and craning through the play. One swing from frozen tension to full-speed chaos.

Lighting: warm low golden-hour sun raking the dusty diamond, hot rim-light on cap, jaw and shoulders in the opening stare, long shadows, glowing dust; on the eruption the light stays golden but the frame fills with flying dust, bloom and warm flares.

Color: warm vintage film palette, 60% honey-amber dust and golden air, 30% cream pinstriped flannel and freckled skin, 10% accent pop. Kodachrome-style warmth, heavy grain, halation, believable skin.

Camera: slow intimate 85mm for the opening stare with shallow focus and dust bokeh, snapping to 35-50mm reactive handheld and a crane for the action. 24fps real-time base; the opening stare carries a subtle slow dreamlike quality, then crisp real-time with brief slow-mo on contact captured at 120fps played at 24fps. 180 degree shutter blur, authentic grain, warm flares.

Skin: pore-level realism, young man early-to-mid 20s, fair freckled sweat-sheened skin, blue-grey eyes burning with focus, jaw tight, fine detail, faint dust. Natural sun-modeled skin, no glamour smoothing.

Physics: in the stare, dust motes drift slowly in the low sun, flannel barely stirs; on the eruption, bat flexes and ball compresses at contact, dust and spray fly, the follow-through whips the body, cleats tear dust, the ball climbs into gold. Real inertia and force.

THE SEQUENCE (15 seconds, 16:9, two movements):

Shot 1 (0.0-2.0s, near-silent, slow push): open on the batter's intense over-the-shoulder gaze down the lens, gold rim-light, dust drifting slow, the world hushed.

Shot 2 (2.0-3.0s): a fraction tighter on his burning eyes, a flicker of resolve, the quiet stretched to breaking.

Shot 3 (3.0-5.5s, full sound, slow-mo on contact): hard cut and sonic slam, the pitch arrives, he uncoils into the crushing swing, a spray and sunburst at contact.

Shot 4 (5.5-8.0s): low hero angle following the ball climbing into the glowing sky, warm flares.

Shot 5 (8.0-10.5s): he explodes down the line, cleats tearing dust, camera tracking low.

Shot 6 (10.5-12.5s): quick whip to distant fielders racing under the ball, crowd rising.

Shot 7 (12.5-15.0s): rising crane over the golden diamond as he rounds the bag, sun flaring.

Audio: open near-silent, soft wind, a lone sustained tone, distant muffled crowd, a heartbeat; then a sharp snap at 3 seconds slams the full mix back: the wooden crack, swing whoosh, cleats tearing dirt, a surging crowd roar and distant organ. Original score, no copyrighted music.

Technical: 16:9 widescreen, full-frame edge-to-edge, no letterbox, no black bars. No on-screen text, no titles, no UI, no watermark. Entirely fictional early-1900s ballplayer and club, no real team or person likeness, no readable lettering.
~~~~

