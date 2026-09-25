# Seedance 2.5 vs Seedance 2.0 — We Tested Both in 6 Categories

- Source: https://higgsfield.ai/blog/seedance-2-5
- Byline: Higgsfield6 min · Last updated: 3w ago
- Prompts extracted: 12

## Notes

**Title on page:** "Seedance 2.5 vs Seedance 2.0 — We Tested Both in 6 Categories" (one generation each, same prompt, no post). Note: on the crawled page several prompt blocks are duplicated/misplaced next to the wrong paragraph; duplicates were removed below.

**Findings by category:**
- **Creatures** (monster vs serpent, four story beats in one generation): 2.5 holds anatomy and debris physics (embers settle into rubble); 2.0 at 15 s rushes and "deletes" the enemy.
- **Music videos** (hip-hop fisheye video, Japanese punk band, pop duo): 2.5 reproduces real fisheye distortion, production-designed sets, strong lipsync even on screams, cuts on the beat, synced dancers with floor reflections; 2.0 lipsync drifts close-up, music sounds distant, limbs clip, cuts away when it can't hold motion. **A 2-minute music video = 4 generations of 30 s.**
- **Transformations** (sorceress vs lava demon; shapeshifter cycling forms at a desk): 2.5 keeps anatomy and lighting through transformations and even merges requested forms (cat + robot = cyborg cat) — transformations become "one sentence in a prompt".
- **UGC** (hiking creator reviewing glasses, 9:16 ~30 s one continuous shot): 2.5 treats the camera as a physical phone (handheld wobble, then locked-off when set on a rock; wrist-like pans); a full 30 s spot (hook -> features -> outro) in one generation; 2.0 shows stiff face, slight audio offset, finger warping.
- **Pure cinema** (frozen disaster-movie set pull-back; castle dialogue scene with shot/reverse-shot): 2.5 keeps perspective through focal changes, even shows monitors replaying the stunt, matches candle flicker across angles, micro-acting (eyes about to tear); 2.0 ends at 15 s right at the dramatic peak.
- **Impossible worlds** (gravity-scrambled city): 2.5 keeps face/hair/satchel through rotations with living detail; 2.0 breaks.
**The catch (at test time):** 2.5 output was 720p (soft on TV/wides) while 2.0 renders native 4K — weigh resolution vs. motion/length quality. (Later posts list 2.5 up to 1080p native + 4K upscale.)

## Prompts (verbatim)

### P1. 1. Creatures

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: cinematic film scene
- Context: The prompt is a full monster-movie sequence: a pale, scarred creature in a desert cavern, poking through ritual bones, until a giant serpent erupts from under the sand. Fight, then standoff. Four story beats. One generation.

~~~~text
A gaunt, pale superhuman monster and a giant gray scar-covered serpent battle to a standstill in a deep desert canyon. Towering dark layered cliffs, a pale sand dune between the rock walls, a dark cave mouth low in the cliff surrounded by bones and hanging strips of cloth, cold mist drifting in the shadows, harsh light cutting across the cliff tops. Handheld camera throughout, violent continuous shake, epic VFX blockbuster scale, anamorphic widescreen lenses, fine film grain.
Shot 1 — The intrusion (0–3s). Handheld macro shifting to wide: extreme close-up of his clawed hand precisely placing a small bone into a row on the sand, shallow depth of field, dust suspended in the rim-light beams — then a sudden eruption behind the focal plane: the serpent bursts through the dune throwing up a wall of sand, its massive shape exploding across the blurred background. Focus racks deep in an instant, he dives sideways — the giant jaws slam into the ground where he was just kneeling, the frame swallowed by dust.
Shot 2 — Trading blows (3–6s). Handheld telephoto from inside the cave mouth, compressed perspective, bones silhouetted at the frame edges. The serpent strikes — he catches its snout and gets shoved backward, boots plowing deep furrows, then wrenches the head down into the dune, sand explodes; the tail whips back in a flat sweep, smashing him clear across the canyon into the rock wall — the rock craters, cracks spidering upward. Both recover in the same instant: he rises from the rubble, the serpent coils into strike position, its shadow drags across the cave mouth, blacking out the lens.
Shot 3 — The reversal (6–8s). Out of the black — violent handheld tilt up, backlit: the serpent deliberately turns, a massive backlit silhouette against burning rim light, and rams its full body weight into the cliff above the cave mouth. The rock face shears away — boulders tumble through the light beams like black meteors — burying the cave mouth, the bones and cloth strips vanish under the rockslide. Cut to his face: dust streaming off his shoulders, the light dying out in his milky-white eyes, shock hardening into something cold.
Shot 4 — The outburst (8–11s). Ground-level handheld whipping sideways at full speed — a pale blur of afterimages, his strides blasting sand at the lens, rock walls smearing into motion trails — as he leaps, the camera slams vertically down: both claws pin the serpent's snout into the rockfall, the shockwave splits the canyon floor, cracks racing forward under the lens, the horizon lurching into a dutch angle. But the serpent's body has already coiled around him at the moment of impact — it tightens, rips him away and hurls him through a stone pillar, the pillar bursting into rubble.
Shot 5 — Mutual damage (11–13s). Tight, vicious handheld, the two faces alternating inches apart: he bursts out of the ruins and collides head-on with a mid-air strike — his claws tear a long gash through the scales of the serpent's snout, and in the same instant the tail hammers into his ribs. Both blows land simultaneously, both bodies get thrown apart in twin explosions of sand and stone, his silhouette reflected in the serpent's wet, rolling eyeball, dust strobing in the rim light.
Shot 6 — The standoff (13–15s). Handheld wide through the falling dust, backlit: the two face off across the cratered battlefield — he's down on one knee, bleeding, one arm hanging limp, breathing hard; the serpent sways in a loose coil, the black gash on its snout seeping blood, its tongue tasting the dust. A long pause inside the god-ray light columns, neither one moves. Then — on the same breath — he straightens up, the serpent lowers its hood, the frame holds on the two of them evenly matched, and focus pulls to the foreground: a small bone, half-buried in the sand, lying still between them.
Sound: quiet wind and the soft click of bones being set in a row, then the eruption shockwave, massive booming impacts as blows land, scales cracking and rock collapsing, one hoarse roar from him at the reversal, the serpent's bellow shifting into a wary hiss, and at the end — two kinds of breathing, his ragged gasps and its deep slow hiss, as the dust settles.
Style: epic cinematic VFX blockbuster, big-budget monster movie, harsh rim sunlight against cold canyon shadows, volumetric god rays in the dust, shallow depth-of-field foreground language with rack-focus accents, backlit silhouettes, motion blur on strikes and sprints, bleached cold low-saturation film grade. No text, no logos, no watermark, no slow motion, no smooth stabilized camera moves, no static tripod shots.
~~~~

### P2. 1. Creatures

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: cinematic film scene
- Context: On 2.0, fifteen seconds actively hurt: the transformation rushes, and the demon doesn't die so much as get deleted - there one frame, gone the next.

~~~~text
SCENE CONTEXT
A young woman walks alone down an empty cherry-blossom avenue, stops in the middle of the road, then freezes in place, staring blankly ahead in a daze; the handheld camera orbits her, pushes into her face, sinks to a low angle and drifts slowly. The entire piece is one continuous long take.

ACTIVE REFERENCES
@video: camera-motion reference ONLY. The camera's path, speed, shot sizes, whip tilt-up, arcing orbits, push-ins, pull-backs and handheld sway are replicated exactly from @video, from the first frame to the last. Nothing else is inherited from @video — not the man in it, not the original location.
@girl: a woman in her early twenties, slim build, platinum silver-white hair with sparse wispy bangs, hair gathered in a low bun with a silver flat hairpin on one side, thin black oval optical glasses, a single silver star drop earring, a small beauty mark at the corner of her eye; a white fitted long-sleeve top with cut-out shoulders and a large white bow tied at the collar, a grey high-waisted pleated ankle-length skirt, a black studded leather crescent shoulder bag on her left shoulder, white platform sneakers with black toe caps. 100% matches the reference.

LOCATION MAP
A quiet, straight asphalt road in the Japanese suburbs, lined on both sides with cherry trees in full bloom — the pale pink canopies nearly meet in an archway over the road; neat green lawn strips with round trimmed shrubs along both sides; slim black lamp posts down the road; a small blue road sign in the distance; low Japanese house roofs deep in the frame; a grassy river embankment rising gently on the right; a bright overcast white sky; scattered pink petals on the asphalt. The street is completely empty — no people besides her, no vehicles.

FIRST FRAME AND SPATIAL BLOCKING
The first frame is deliberately unpopulated, a brief opening beat: a vertical top-down close-up of the asphalt with a few pink petals scattered on it. Then @girl enters frame from behind the camera. Her path runs down the center of the road toward the blossom archway in the depth. She comes to a complete stop in the middle of the road, at screen x 50%, medium-shot depth, cherry trees symmetrical on both sides, a lamp post visible frame-left. She faces down the road; during the frontal push-in the camera sits between her and the road's depth.

FORMAT MODE
One single continuous long take. No cuts, no transitions, no fades. The camera invents no moves of its own — it strictly follows @video.

OPTICS
47° diagonal FOV, standard lens character, natural human-eye perspective. Every close-up is achieved by physically moving the camera closer — never by zooming. Facial proportions stay natural in the extreme close-ups, straight lines stay undistorted, comfortable natural depth of field.

CAMERA
Handheld, shoulder-mounted by a walking operator, replicating @video exactly: natural breathing sway, slight settling after each move, human corrections, real shoulder-rig weight. No gimbal smoothness, no digital jitter, no stabilization artifacts.

ACTION BEATS
Beat 1 — the camera looks straight down at the asphalt, briefly near-static. Then a fast whip tilt-up catches @girl's platform sneakers striding into frame; she walks away from camera down the road, back to us.
Beat 2 — the camera pushes forward, following her back at close medium-shot range with loose handheld drift; she walks briskly under the blossom archway, the pleated skirt swinging with her stride.
Beat 3 — as she slows, the camera arcs quickly around her right side, sliding from her back to her profile. She stops completely in the middle of the road and stands motionless.
Beat 4 — a slow, tense straight push-in from a frontal medium shot all the way to an extreme close-up of her face. She is frozen, lips slightly parted, eyes behind the lenses staring blankly past the camera, dazed and stunned. This is the longest-held beat of the piece.
Beat 5 — a fast pull-back to medium shot with a slight drift toward frame-right. She still stands frozen, the cherry trees receding behind her.
Beat 6 — the camera sinks toward the road surface, then rises into a dramatic low-angle medium shot looking up: the pale pink blossom canopy and bright white sky fill the upper frame above her head, petals drifting down.
Beat 7 — a sudden sharp arc to the left with a simultaneous push-in, landing on a low-angle extreme close-up of her profile — lips and cheek, the edge of her glasses frame, wisps of her bangs.
Beat 8 — pull back and make one final slow leftward arc, settling into a stable medium profile shot: the blossom avenue stretching away behind her, her gaze still hollow, fixed ahead. Hold to the end.

PHYSICS
Real walking mechanics: heel strikes, weight transfer, hip sway, platform soles pressing into the asphalt. When she stops, the pleated skirt and bow ribbons carry brief inertia and settle; the shoulder-bag strap swings once and goes still. Scattered petals drift down through different depth layers in the light breeze, an occasional petal crossing the foreground. After she freezes, only micro-movement remains: breathing, one slow blink behind the lenses, her bangs stirred by the wind.

LIGHTING
Soft diffused daylight of a bright overcast sky — the single key, no hard shadows. The blossom canopy adds a soft pale-pink bounce to the upper frame; the asphalt reads neutral grey; the white top and silver-white hair hold clear separation in the diffuse light. Exposure keyed to her face, gentle filmic contrast, a light palette of pink-white and grey-green. No harsh studio-style lighting.

AUDIO
Quiet suburban ambience, the rustle of wind through the cherry trees, her platform sneakers on the asphalt, occasional distant birdsong. No dialogue, no music, no on-screen text, subtitles, watermarks or logos.
~~~~

### P3. 2. Music Videos

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: music video
- Context: The hip-hop one. The prompt wants a full 2000s rap video: platinum blonde artist, wraparound shades, a fisheye lens shoved in his face, dollar signs, and a different set every few seconds.

~~~~text
@[Image 1](image_1) = CHARACTER REFERENCE (literal transfer of the person). Keep the person's face, hair, build and full outfit EXACTLY as the reference card in every shot — the same recognizable performer throughout. An entirely original artist resembling no real musician or existing IP. No readable text, no logos anywhere.
STYLE — Y2K MUSIC-TELEVISION RAP/POP VIDEO (circa 2000): the whole video on an ULTRA-WIDE FISHEYE lens — bulging barrel distortion, faces and hands warping huge near the lens, sets curving away behind.
IMAGE QUALITY LAW (critical, every frame): shot as if ON AN IPHONE 4 — genuinely LOW RESOLUTION, soft 720p-era mush, visible compression artifacts and macro-blocking in the shadows, smeared blooming highlights clipping to white, muddy chroma noise, color fringing, slightly crushed blacks, cheap glossy video sheen, jittery rolling-shutter wobble on fast moves. Absolutely NOT 4K, NOT sharp, NOT clean — a ripped early-2000s TV upload.
THE SETS (abstract graphic spaces, no real-world locations):
- SET 1 — NEON STARBURST VOID: black void, white fluorescent tubes in a radial starburst behind the performer.
- SET 2 — QUILTED CHROME TUNNEL: puffy quilted metallic-silver panels swirling in the distortion.
- SET 3 — MONEY WEDGE ROOM: acid-orange-and-lime curved room with giant glossy black wedges bearing huge white generic dollar-sign shapes.
- SET 4 — LED DOT DOME: dark dome tiled with dense glowing dot-lights in magenta-amber gradients.
- SET 5 — HIGH-GLOSS WHITE CAPSULE: seamless glossy white sci-fi room with soft panel seams, chrome ledges and one blank rounded screen-frame.
- SET 6 — DARK PANEL CORRIDOR: a long black corridor lined floor-to-ceiling with rows of cold rectangular light panels, all OFF at first — pure dark.
- SET 7 — WHITE BEAM DOME: a blinding white dome interior with a small central pedestal and thick vertical LIGHT BEAMS blasting down around it from a dark ceiling ring.
PERFORMANCE — FULL Y2K ENERGY, LIP-SYNC TO CAMERA: the performer raps/sings an original upbeat track straight into the fisheye. PERFORMANCE REALISM: jaw on true hinges syllable-by-syllable, lips and tongue shaping consonants, breaths between phrases, uneven natural accents; BIG playful acting — eyebrow jumps, wide grins, mock-tough sneers breaking into laughter. GESTURE GAME on every bar: splayed hands shoved AT the lens warping huge, palm wipes across the frame, two-finger points, chest taps; a loose bouncy DANCE underneath — shoulder bounce, springy knee-dip groove, half-spins, lunges into the lens.
BACKUP DANCERS (one setup only): two entirely original anonymous female dancers in glossy BLACK FULL-COVERAGE LATEX CATSUITS with high collars and opaque dark visor sunglasses, hair slicked — flanking the performer and hitting tight synchronized Y2K choreography (sharp hip-and-shoulder isolations, mirrored arm hits on the beat), always half a step behind the star.
EDITING — MULTI-ANGLE BEAT MONTAGE with LIGHT PLAY and CAMERA SLIDES (hard cuts on the beat, no dissolves; low angles, profiles, high angles and extreme close-ups dominate; only one brief wide):
- 0.0s–2.5s — SET 6, THE LIGHT-UP REVEAL, low angle: total darkness — then the corridor's light panels SLAM ON one after another in a fast chase receding into the depth, carving the performer out as a pure BLACK SILHOUETTE with arms spread; on the last beat an overhead bank kicks on and FLOODS their face with light — the lip-sync fires the instant they light up.
- 2.5s–4.0s — SET 1, EXTREME CLOSE FISHEYE: face looming warped against the starburst, fingers shoved at the lens.
- 4.0s–5.5s — SET 5, LATERAL DOLLY SLIDE, LOW ANGLE: the camera GLIDES smoothly sideways left-to-right at knee height while the performer dances the springy groove dead-center — chrome ledges and panel seams sweeping past in parallax, the figure towering in the fisheye.
- 5.5s–7.0s — SET 3, SIDE PROFILE CLOSE: rapping across the frame in profile, head-whip to the lens on the accent, dollar wedges streaking behind.
- 7.0s–9.0s — SET 5, THE LATEX DANCERS SHOT, low slight-dutch with a slow opposite slide (right-to-left): the performer center driving the verse at the lens, the two latex dancers flanking in mirrored choreography, glossy suits blooming highlights, all three bouncing on the beat.
- 9.0s–10.5s — SET 4, HIGH ANGLE: camera above the upturned face, arms spread, dot-lights wrapping the dome; mugging up into the lens.
- 10.5s–12.0s — SET 7, LOW-ANGLE FISHEYE LIGHT PLAY: the performer on the pedestal inside the beam ring — beams SNAP ON one by one around them, strobing silhouette-to-lit-to-silhouette with the beat, ending fully blasted in white.
- 12.0s–13.0s — SET 2, EXTREME CLOSE, tilted dutch: half the face warped huge against the chrome quilting, a grin cracking on the punchline.
- 13.0s–15.0s — SET 1, EXTREME CLOSE FISHEYE FINAL: the hook driven down the lens, one last hand-shove blooming across the frame on the last beat; hard cut out.
STRICT: the SAME performer, identical face and outfit, in every shot; the latex dancers appear ONLY in their one setup; each cut lands cleanly in ONE set — sets never blend or morph; fisheye distortion and the iPhone-4 texture constant everywhere; light reveals are IN-SCENE fixtures switching on, never fades or dissolves of the image itself.
PHYSICS: real bounce and weight — knees loading, shoulders leading, outfit and jewelry swinging 3–5 frames behind; the dancers' latex catches and slides the highlights believably; dolly slides are smooth constant-speed glides with true parallax; light panels and beams kick on with instant hard attack, spill and bloom reacting on skin and gloss.
TECHNICAL: 16:9, 24fps with early-digital motion cadence, the lo-fi law on every frame, no on-screen text, no logos, no watermark.
AUDIO: original music, fully generic / NO IP — NOT mimicking any specific artist, producer or track, NOT quoting any recognizable melody; invented English lyrics, no brand names. A bouncy early-2000s rap/pop beat — punchy drums, playful synth stab hook; LEAD VOCAL lip-synced through every cut; heavy relay CLUNKS as each light bank slams on in the reveal and the beam dome; the hook peaking on the final close-up.
~~~~

### P4. The band.

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: music video
- Context: 2.5 understood the assignment on a lens level: when he leans into camera, his hand warps before his face does - that's real fisheye behavior, the model is bending the world through glass. Count the sets: candy-colored houses, a light-grid stage, a white dome - every one looks production-designed, and he never stops performing through any of it. …

~~~~text
They sing in Japanese, like an underground music video. Multi-shot editing, not a single continuous take. Music: punk.

A Japanese underground punk band performs in a dim concrete basement rehearsal room — four adult female musicians in their twenties, all professional performers, in full rehearsal-stage outfits. The lead singer is an Asian woman with long dark-brown hair, wearing a fabric stage-prop headband with plush decorations on it — a performance prop, not real animal ears; she wears an off-white heavy cotton short-sleeve top and dark work pants, with a thin silver necklace. To her left, a guitarist hunches over a red electric guitar, head down, pressing the strings; center-back, the drummer whips her head as she pounds a red drum kit; to the right, another guitarist bends into her strumming. Big stacks of speaker cabinets stand on both sides, the entire back wall is covered in a grid of the same black-and-white gig poster repeated over and over, and the only light is one caged work lamp on the ceiling — hard warm light cutting down from above, the corners of the room sinking into darkness, thin haze churning in the light column.

It opens on a close-up of the singer's face: both hands wrapped around a vintage silver dynamic microphone, singing full-force straight into the camera, brow locked, neck tendons standing out, her expression focused and furious. Cut to a wide: the whole band playing in the same room, the poster wall spread out behind them. Cut to a medium: the guitarist on the left staring down at her fretboard, her strumming arm swinging wider, the red body of the guitar throwing back one hard streak of the overhead light. Cut to a close-up: the singer's hands gripping the mic stand, a film of condensation on the silver mic head. Cut to a low-angle medium close-up: the singer shot from below, head tilted back as she hits the high line, the silhouette of the prop headband cutting into the lamp light above her. Cut back to a wide to finish: the last line ends, she lets go of the microphone and the upright mic stand sways twice from the release, the drummer rests her sticks on the snare head, all motion stops — she stands there, shoulders rising and falling, while an entire wall of identical black-and-white faces silently watches her.

Every cut changes the shot size — never two of the same shot size in a row. The camera shakes slightly, like a person standing in the room; no fancy camera moves.

Raw, high-energy underground live-show texture, 16mm film grain, high contrast and low illumination, only that one overhead lamp for light, real natural skin, no skin smoothing.

No voice-over, no shouting, no screaming, no subtitles, no on-screen lyrics, no watermark.
~~~~

### P5. The duo.

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: music video
- Context: On 2.5 the lipsync is fantastic - watch the scream: the jaw, the throat tension, the strain. Screaming is where AI faces usually fall apart, because the whole face has to commit. This one does. And the editing - wide of the band, crowd angle, fingers on the strings, back to her - every cut lands on the track. On 2.0, get close and the lipsync is …

~~~~text
[SCENE] A two-girl pop duo shooting a retro millennium-style MV: candy-colored studio sets, perfectly synchronized gesture choreography, beat-matched hard cuts and fast punch zooms — the texture of 1999 music television, delivered at modern production quality.
[ACTIVE REFERENCES]
@image1: female singer in her twenties, long straight pink hair with gold hair clips, small nose ring, small beauty mark on her cheek, white printed crop top, silver chain necklace, chain belt, light-blue washed baggy jeans, off-white platform sneakers. Playful and confident. 100% match to the reference image.
@image2: female singer in her twenties, long straight black hair with silver hair clips, light blue eyes with silver glitter eyeshadow, red cord necklace with a ruby pendant, gray raglan short-sleeve tee with a gray jacket draped over it, dark gray pleated skirt with a bow, gray long socks, black platform shoes. Cool and commanding. 100% match to the reference image.
[SET MAP] Three practical studio sets, each about 4 meters deep, facing camera:
Set A — bubblegum-pink seamless cyc, glossy reflective floor, two rows of round studio bulbs on the back wall.
Set B — cobalt-blue seamless cyc, one hard white spotlight circle on the floor.
Set C — floor-to-ceiling silver rain-curtain wall, mirror floor.
[FIRST FRAME & BLOCKING] The first visible frame already contains both girls, in Set A: @image1 at x40% frame left, @image2 at x60% frame right, medium-shot depth, 0.5m apart, bodies square to camera, eyes locked on the lens, frozen in a mirrored opening pose — inner hand on hip, outer arm raised. No empty opening shot, no delayed entrance.
[FORMAT] Controlled multi-shot sequence, fourteen segments, every hard cut landing exactly on a musical downbeat. Real-time motion.
[LENS NOTES] Fisheye = true fisheye wide, 1.5m from subject, visible barrel distortion at the frame edges, deliberate 1999 MV lens language; 47° = standard angle, natural proportions; 29° = medium portrait, background slightly compressed; 18° = telephoto close-up, melted bokeh. Locked within each segment, no drift.
[ACTION TIMELINE]
0.0–2.0s Set A, fisheye low angle: both girls hit the frozen mirrored pose on the first beat, then bounce in sync with every beat, camera slowly pushes in 10%.
2.0s hard cut. 2.0–4.0s Set B, 29°: @image2 solo inside the spotlight circle at x50%, sharp point-at-camera gesture choreography, two fast punch zooms exactly on the downbeats.
4.0s hard cut. 4.0–6.0s Set C, 47°: @image1 whips her pink hair through a full arc, then strides toward camera, camera pulls back at matching speed, rain curtain shimmering, chain belt swinging.
6.0s hard cut. 6.0–8.0s Set A, fisheye at knee height: synchronized duo step combo — side steps, shoulder pops, mirrored arm waves, @image1 left, @image2 right, spacing locked at 0.5m.
8.0s hard cut. 8.0–10.0s Set B, 18° two-shot close-up: both faces cheek to cheek filling the frame, @image1 left, @image2 right, soft wind lifting pink and black strands, glossy makeup, confident smiles, heads tilting toward each other in sync with the beat.
10.0s hard cut. 10.0–12.0s Set B, 29°: @image1 solo, wrist rolls and fingers pointing at the lens, one zoom punch landing on the downbeat.
12.0s hard cut. 12.0–14.0s Set C, 47°: @image2 strides forward with a cold stare into the lens, black hair swinging with every step, camera pulls back at matching speed.
14.0s hard cut. 14.0–18.0s Set A, 47° full body: chorus dance core — four counts of fully synchronized choreography: arm waves, fast spin, full-body groove, sharp freeze at the end; they cross positions and return, @image1 left, @image2 right, lock restored.
18.0s hard cut. 18.0–20.0s Set C, 18°: @image2 face close-up, silver rain strands blurred into bokeh sparkles, she blinks on the beat, corner of her mouth lifting.
20.0s hard cut. 20.0–22.0s Set A, 18°: @image1 face close-up, background bulbs melting into creamy bokeh, wind in her hair, eyes locked on the lens.
22.0s hard cut. 22.0–24.0s Set B, fisheye: the duo spins one full mirrored rotation in place, then freezes simultaneously, skirt and hair settling with a delay.
24.0s hard cut. 24.0–26.0s Set C, 47°: side by side, arms swinging in sync as they walk toward camera, the mirror floor carrying their reflections.
26.0s hard cut. 26.0–28.0s Set A, fisheye low angle: both bounce to the beat, the glossy floor stretching in the distortion.
28.0s hard cut. 28.0–30.0s Set A, 47°: back-to-back final pose freeze, camera zooms out fast to full body, landing exactly on the final downbeat, one bright camera-flash white-out sweeping across the last frame.
[PHYSICS] Choreography with real weight: heels striking the floor, weight shifts, shoulder isolations with follow-through. Hair whips with visible lag and settles naturally. Chain belt and necklaces swing on the beat points. The rain curtain ripples from body movement. The glossy floor returns soft, realistic reflections.
[LIGHTING] High-key even studio lighting on every set: large soft frontal key, bright clean exposure, high skin sheen; Set A bulb rows form a back rim light with soft flare bleeding into the lens; Set B spotlight casts a crisp circular pool; Set C hundreds of specular highlights across the rain strands. Bright, candy-like, camera-ready — deliberately flat 1999 TV-studio lighting.
[AUDIO] Original Y2K bubblegum dance track, instrumental only, 120 BPM, four-on-the-floor kick, bright syncopated synths, faint tape hiss underneath. Every hard cut lands exactly on a downbeat. No vocals anywhere in the video; both girls perform with closed lips, pushing all the energy through expressions and choreography.
[POSITIVE LOCK] Both faces and identities stay 100% locked to the reference images in every segment, including close-ups. Outfits remain exactly as referenced across all three sets. Only these two girls appear in the entire video. In every duo segment @image1 stays frame left, @image2 stays frame right. Set geography, spacing and screen direction stay consistent within each segment.
[STYLE] The 1999 broadcast look shot at modern production quality: a broadcast-videotape master texture layered over a high-detail image — softly blooming highlights, slight chroma bleed on hard color edges, fine analog tape grain, faint interlace flicker on fast motion; a high-saturation candy palette of bubblegum pink, electric cobalt and chrome silver; millennium-era music-television punch-zoom editing energy, with contemporary sharpness underneath.
~~~~

### P6. Transformations

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: viral effect
- Context: The sorceress. A woman in glasses walks through a parking garage, a lava demon erupts from the concrete, she turns into a multi-armed shadow sorceress, they clash, she wins, she turns back human and walks away. An entire boss fight in one prompt.

~~~~text
Montage, multi-shot Hollywood action film, no single static camera or single-take edit, cinematic lighting, photorealism, 35mm film quality, professional color grading, sharp focus, high-detail textures, film grain, depth of field control, ARRI ALEXA aesthetic.
A girl with glasses, brown hair in a loose bun, wearing a black backless top and patterned leggings, walks alone through a dim underground parking garage at night. A massive creature with obsidian-black skin covered in orange-red molten lava veins, horns on its head and knotted muscle smashes through a concrete wall behind her, lava debris flying everywhere. The girl stops, calmly turns around, black smoke pouring from her eyes and fingertips, tendrils of dark energy coiling around her body. Wrapped in swirling black magic, she transforms into a towering shadow entity with glowing purple eyes, elongated clawed limbs and a crown of black crystal horns. She destroys the lava monster with a close-range magic blast, then shifts back to human form and walks away while adjusting her glasses. Handheld throughout, shaky camera, dark fantasy horror atmosphere, spectacular action set pieces.
Shot 1: Medium tracking shot, the girl walks through the parking garage, her heels clicking on the concrete, fluorescent lights flickering overhead. The camera follows behind her at shoulder height, slightly shaky. Her reflection shows on the wet floor. Calm but tense atmosphere.
Shot 2: Wide shot, the concrete wall behind her explodes inward — the massive obsidian lava monster breaks through, lava fissures pulsing with orange light across its body, horns scraping the ceiling, rebar fragments and dust flying everywhere. The camera shakes hard from the impact, focus snaps from the girl's back to the monster filling the entire frame.
Shot 3: Close-up on the girl's face as she slowly turns to face the monster. No fear. Her pupils dilate into pitch black, thin veins of black energy crawling up her temples and neck. Black smoke rises slowly from the corners of her eyes, like ink spreading in water. The camera holds steady on her face, trembling slightly as the energy builds.
Shot 4: Medium shot — black tendrils burst out of her hands and spine, whipping outward like living chains, wrapping around her body. Her feet lift off the ground. The tendrils form intricate runes and patterns in the air around her, each one burning with violet light. Her body stretches and darkens, skin turning into living shadow, a crown of jagged black crystal horns pushes up from her skull, her eyes ignite with violet flame. The camera orbits her transformation, shuddering with every pulse of dark energy, violet sparks of magic scattering like embers.
Shot 5: Wide low-angle shot — the lava monster roars and charges, fist raised high, white-hot lava cracks flaring. The shadow entity meets it head-on, catching its burning fist with one clawed hand. Chains of dark energy erupt from the ground, binding the monster's limbs. She slams her other hand into its chest — a massive black-violet shockwave blasts outward, the monster's lava shell cracks apart instantly, the orange glow dies out, obsidian shards flying in all directions. The camera shudders with the blast wave, slow motion on the debris flying past the lens.
Shot 6: Medium shot, the shadow entity dissolves into wisps of black smoke drifting upward. The girl stands in the blast crater, human again, adjusting her glasses with one hand. She turns, steps over a still-smoking chunk of obsidian and walks toward the garage exit, fluorescent lights flickering back to life behind her. The camera slowly pulls back, her silhouette outlined in the settling dust.
~~~~

### P7. The shapeshifter.

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: viral effect
- Context: On 2.0, fifteen seconds actively hurt: the transformation rushes, and the demon doesn't die so much as get deleted - there one frame, gone the next.

~~~~text
30-second uncanny romantic sci-fi horror, 4K, 21:9, high bitrate. Use the attached image as the absolute reference for THE SHAPESHIFTER'S initial form: adult woman, soft oval face, perfectly straight chestnut hair with center part, mirrored black marbled glasses, white forehead device with a short antenna, yellow star clip, pale-pink jacket and beige knitted top. Preserve this form whenever she returns to it.

One continuous daytime workshop: warm window light, cluttered drawing desk and two chairs facing each other. Clear air with no smoke, mist, dust or particles. Opposite her sits an adult man in a dark charcoal sweater. He begins curious and attracted, then gradually becomes disturbed. Transformations happen physically in the same chair—no teleportation or background changes.

SHOT 1 — 0–4s, 75mm over the man's shoulder. She leans forward with a restrained smile. Her mirrored lenses reflect his nervous hands, but her reflection already has his face. He has not noticed.

SHAPESHIFTER:
"You keep staring."

MAN, embarrassed:
"Sorry. I'm trying to figure you out."

Her smile widens a millimeter too far.

SHOT 2 — 4–10s, locked 50mm profile two-shot. She circles one finger beside her face.

SHAPESHIFTER:
"Want me to be the hero from your favorite game?"

In half a second, her skin, hair and clothing fold into an original armored game heroine: hard-jawed face, blue-steel armor, dramatic scar. No copyrighted character. She gives him a cocky wink, then instantly snaps back.

SHAPESHIFTER:
"Or a cop?"

Her pink jacket contracts into a dark police uniform; her posture straightens and her voice drops. She leans closer as if questioning him:

SHAPESHIFTER:
"You've been very suspicious."

The man laughs genuinely—then notices she has copied the exact rhythm of his laugh.

SHOT 3 — 10–16s, 35mm slow orbit around the table. Without leaving her chair, she transforms every time the camera passes behind the man's shoulder.

SHAPESHIFTER:
"Furry?"

She becomes an elegant feline humanoid with velvet ears, whiskers and a long tail curling around the chair. Her original smile remains unnaturally unchanged.

SHAPESHIFTER:
"I can be a robot."

Her face closes into seamless porcelain-metal plates; the glasses become black optical sensors. She reaches toward his cheek with articulated fingers, stopping one centimeter away.

ROBOT FORM, softly:
"Would that make this easier?"

SHOT 4 — 16–21s, 85mm on the man. His attraction drains slowly: smile fades, throat tightens, shoulders pull inward. He forces one more laugh but it breaks halfway.

MAN:
"Do you ever stop performing?"

All mechanical sound stops.

SHOT 5 — 21–26s, 40mm symmetrical two-shot that slowly becomes asymmetrical as she shifts closer. She returns to her initial pink-clad form, but removes the glasses. Her eyes are completely ordinary—and genuinely hurt.

SHAPESHIFTER:
"Only when nobody's looking."

MAN, gentler:
"What do you look like then?"

She searches his face as if the question has wounded her.

SHOT 6 — 26–30s, 65mm slow push from behind her. Her features transform gradually into an exact copy of the man: his eyes, mouth, nervous posture and charcoal sweater. The copy takes his unfinished expression and completes it with a calm smile.

SHAPESHIFTER, in his voice:
"I was hoping you could show me."

The real man stops breathing. In the dark lenses lying on the table, his chair is reflected as empty.

CUT TO BLACK.

Deep natural acting: imperfect pauses, interrupted laughter, shifting eye contact and controlled breathing. Fast transformations contrast with slow emotional realization. No gore, body tearing, frantic montage or spatial discontinuity.
~~~~

### P8. 4. UGC

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: UGC
- Context: Flip the phone vertical - this one's an ad. A hiking creator on a mountain ridge reviewing her glasses: walks the trail talking to camera, pans to the valley, sets the phone on a rock, lists the features, keeps hiking. The exact brief brands pay creators for.

~~~~text
Vertical 9:16 video, about 30 seconds, the image filling the entire screen edge to edge — no black bars, no letterboxing.

One continuous shot — no cuts, no edits, no transitions. A single unbroken 30-second handheld-then-propped phone video, like a raw clip exported straight from a phone's camera roll.

Use the provided reference images — pixel-faithful, do not change the style:

@image1 = Character: a young woman, long copper-red wavy hair worn loose, natural freckles on her nose and cheeks, small silver hoop earrings. A gray-and-magenta color-block soft-brim sports cap, a bright magenta high-neck zip-up hiking jacket, a gray utility mini skirt, an olive-gray backpack on her shoulders, pink socks, teal-gray hiking shoes. Keep her face, freckles, hair and this outfit fully consistent. Any text on her gear is fictional/illegible — non-IP.

@image2 = Product: silver-gray semi-rimless sport sunglasses, smoky purple-tinted wraparound lenses, a sleek low-profile frame, gray nose pads. She is wearing these sunglasses. Keep the frame shape, silver finish and purple lens tint fully consistent. No brand markings — non-IP.

Scene — generate: a high-mountain trail in clear sunlight — a rocky path, alpine ridges and peaks in the distance, dry grass and low shrubs, open sky with a few clouds, the feel of crisp thin mountain air. Strong natural sunlight, a true sun direction, warm light on her face with the cap brim's shadow, her eyes relaxed behind the tinted lenses, no squinting.

Phone-real — maximum realism: genuine raw smartphone front-camera footage, natural mountain daylight, true phone-grade sharpness, real auto-exposure shifts as she turns (sky slightly blown out, face re-exposing), subtle autofocus hunting, true straight-off-the-sensor phone color, slight noise in the shadows. No cinematic look, no color grading, no LUTs, no lighting setups, no gloss. Photoreal.

Her — real and alive, zero plastic feel: unretouched skin, visible pores and natural freckles, a light sunburn flush on her cheeks, true skin texture, flyaway hairs moving in the sun and wind, lips slightly dry from the altitude. She blinks naturally and often, real micro-expressions, real breathing — you can hear her catching her breath after the climb, chest rising and falling, small laughs, a quick distracted glance at the view mid-sentence. Never smooth, waxy, doll-like, stiff or CGI. Ten fingers, natural hands.

Action — one continuous flow, three organic phases:

Phase 1 — walking selfie (0–12s): she walks up the rocky trail, arm extended holding the phone, front camera on herself, natural handheld sway and footstep bounce. She's chatting to the camera, slightly out of breath, talking about hiking as her hobby. When she mentions the glasses she casually touches the temple arm. Speaking warm, casual English, with walking breath (in English): "Okay so… we're at like two thousand meters right now… [breath] …I hike almost every weekend, it's literally my therapy… [small laugh] …and these have not moved once. No sliding, no pressure, nothing."

Phase 2 — scenery interlude (12–18s): she stops, exhales hard and laughs — (in English) "hold on… [catching breath] …okay you HAVE to see this" — then in one continuous motion flips the phone around, sweeping across the alpine panorama, the peaks and the valley below, her voice off-screen (in English): "like… come on." — then turns the phone back to herself, grinning, a strand of hair blown across her face — she brushes it away.

Phase 3 — propped phone, full-outfit reveal (18–30s): still within the same shot, she crouches and leans the phone against a rock beside the trail — the frame tilts, settles into a static, slightly low-angle position, a true "propped on a rock" composition. She steps back a few paces so the full outfit fits in frame — cap, magenta jacket, utility skirt, pink socks, hiking shoes, backpack — sits down on a big rock, legs stretched into frame, relaxed. She casually points at the sunglasses on her face (in English): "and look — super light, they wrap so they block wind from the sides too… [pause, glances at the view, back to camera] …best thing I've bought this year. Okay. Back to the trail." The video ends on her getting up — cut on the movement, natural.

Camera behavior: Phase 1 — natural arm's-length selfie sway, footstep bounce. Phase 2 — one continuous handheld flip to the landscape and back, with real motion blur on the sweep. Phase 3 — static low-angle propped composition, one tiny slide-and-settle right after she sets the phone down. The whole piece is one shot: no cuts, jump cuts or transitions anywhere; every camera change happens physically inside the shot.

Sound: mountain wind hitting the mic (natural phone wind noise, slightly rumbly), audible recovery breathing after the climb, footsteps on rock and gravel, distant birdsong; her single, warm female English voice, casual, sounding improvised rather than scripted, soft laughs, pauses to catch her breath. All speech lands naturally within the 30 seconds, the last line finishing around 29s, not cut off. No music. No subtitles, no titles, no on-screen text.

No real brands on her gear or the sunglasses — fictional/illegible markings only. Fully non-IP.

Vertical 9:16, full-bleed frame, no black bars, no letterboxing
~~~~

### P9. The move.

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: cinematic film scene
- Context: For anyone doing brand work, this category alone pays for the switch: a full thirty-second product spot - hook to features to outro - in one generation.

~~~~text
SCENE BACKGROUND
On a closed-off city street, a disaster blockbuster is mid-take — and the entire world is completely frozen in this instant: fire, water, smoke, debris, people, all suspended. One continuous camera move pulls back from the deepest point of the disaster through this frozen world, revealing layer by layer that the "tragedy" is actually a film set. At 27.0s, a voice through a megaphone shouts "ACTION!", time resumes, and the scene plays on.
CHARACTERS — each appears exactly once, all frozen:
The suspended stunt performer — early 30s, athletic build, the hem of his dark stunt suit blown up by the blast wave and frozen, one shoe half off and hanging from his toes, rigged on two visible wire cables mid-arc of being "thrown by the explosion," his face frozen mid-scream.
The downed extra — a man in his 40s, shirt stained with suspiciously tidy dark-red "blood," lying on taped position marks, the phone in his hand lit, thumb frozen on the screen, its cold glow on his "dead" face.
The firefighter — real turnout gear, extinguisher aimed at the flames, posture radiating boredom, one foot frozen mid-step.
The SFX technician — reflective vest, standing at a cabled control console, thumb hovering one centimeter above a key switch.
The stunt coordinator — 50s, gray buzz cut, climbing harness over a black softshell, walkie-talkie raised halfway to his mouth, eyes locked on the wires.
The camera operator — green baseball cap backwards, eye pressed to the dolly eyepiece, body frozen in the forward lean of pushing off. The focus puller — a young woman, a tape measure frozen mid-rewind, its yellow tape hanging in an arc in the air. The boom operator — boom pole reaching toward the center, the pole frozen in a slight bend. The makeup artist — tool pouch on her hip, a brush loaded with "blood" stopped in mid-air, one dark red drop frozen mid-fall beneath the bristles.
The director — pushing 60, black baseball cap, navy quilted vest, frozen half-risen from his chair at the monitors, one hand braced on the armrest. The script supervisor — a woman around 50, a mechanical stopwatch on her chest with its hands frozen, pen tip stopped above the continuity sheet. The second AC — slate raised high, the two sticks one centimeter apart, frozen the instant before the clap, the board reading "SCENE 47 — TAKE 8".
The first AD — 40s, wiry, megaphone at his lips, chest frozen full of air, about to shout the word.
The real street beyond the barricades is frozen too: onlookers holding coffee and phones (the same fireball on their small screens), a delivery rider leaning a scooter against a lamppost, a police officer frozen mid-yawn, a small dog frozen mid-bark, its leash pulled into an arc.
A flock of pigeons frozen in a take-off fan, scattered in front of the smoke column.
SPATIAL LAYOUT
One street, five layers of space unfolding outward from the center. The disaster core (0–8s): an overturned burning car, the fireball blasting from its side frozen mid-bloom; next to it a sheared-open fire hydrant, its water column frozen into a glass-like arch; shattered glass suspended in a radial pattern; the downed extra and the suspended stunt performer are both here, two wires rising to a crane arm overhead. The safety ring (8–13s): the firefighter, the SFX console, the stunt coordinator, stacked blue crash mats, positioned around the core. The camera-machinery layer (13–18s): the dolly and straight track, focus puller, boom pole, makeup artist, a bounce board on the ground, everything facing the center. The command layer (18–23s): the director's video village under a black shade tent, two monitors showing exactly the disaster core's frame; the first AD standing at the tent's edge. The perimeter (23–30s): yellow barricades, cables taped to the ground, and the frozen real street life beyond. A low warm sun hides behind the rooftops beyond the disaster core, backlighting the whole depth of the street, long hard shadows reaching from the center toward the lens, 15% haze making the backlight visible down the block. Camera path: starting from a suspended shard of glass at the center, pulling back continuously along one axis through every layer, facing the center the entire time, rising at the end into a high-angle grand wide.
FIRST FRAME / BLOCKING
The first frame is an extreme close-up: a shard of glass suspended in mid-air, 0.3m from the lens, perfectly sharp, refracting the frozen fireball behind it, one edge catching the low sun and burning into a gold line, its hard shadow motionless on the wet asphalt. Behind the shard, out-of-focus orange firelight and the black smoke column fill the frame. The entire world is completely still; the camera is the only thing that moves.
SHOT FORMAT
One continuous take, 30 seconds, the camera never cuts on its own; unbroken from start to finish. The time ranges below mark camera position only.
OPTICS
63° field of view throughout, no drift across the 30 seconds. Deep focus; objects passing within 0.3m of the lens stay fully sharp. Subtle anamorphic character: point lights render as oval highlights, soft edge falloff, clean flare-free image.
CAMERA
A single floating move on one unbroken path: starting from the suspended glass shard, pulling back at 3 km/h for about 50 meters, passing in order through the disaster core, the safety ring, the camera-machinery layer, the command layer and the perimeter, lens facing the disaster core the entire way; from 26s it rises at 3 km/h into a high-angle grand wide. Silk-smooth, with a natural 1cm float. High latitude, soft rolloff on the frozen fire's highlights, clean deep backlit shadows.
ACTION
Until 27.0s the camera is the only moving thing in the frame; the moving camera reveals the true volume of every suspended object through parallax.
0.0s–3.0s — opening close-up: the camera pulls back slowly from the suspended glass shard, the fireball refracted inside it rotating with the parallax; more shards enter frame — an entire field of broken glass suspended radially around the explosion, each piece casting its own motionless hard shadow on the wet asphalt, like a frozen constellation.
3.0s–8.0s — the disaster core: the pull-back opens the tableau: the overturned car's flank, the fireball frozen mid-bloom — sculptural layered tongues of orange and black, edges translucent as glass, sparks suspended as a field of orange points; black smoke frozen into a twisted solid column, its backlit edge glowing; the sheared hydrant's water column frozen into a glass arch, thousands of droplets suspended, a tiny rainbow standing in the backlight; the crown splash in a puddle frozen, the puddle mirror-still, reflecting the frozen fire; the stunt performer hanging on two wires mid-arc; the downed extra's phone glowing cold next to the "blood"; a ribbon of steam frozen above a coffee cup; the pigeon flock frozen in its take-off fan before the smoke column.
8.0s–13.0s — the safety ring: two wire cables burning as thin lines in the backlight, rising from the performer's harness to the crane arm; the firefighter frozen mid-step with the extinguisher; the SFX technician's thumb one centimeter above the key switch; the stunt coordinator's walkie halfway to his mouth; stacked blue crash mats standing under the arc's landing point — the truth begins to assemble.
13.0s–18.0s — the camera machinery: the operator frozen leaning into the dolly push, the straight track gleaming under its wheels; the focus puller's tape measure frozen mid-rewind, yellow tape arcing in the air; the boom pole frozen in its bend toward the center; the makeup artist's loaded brush stopped mid-air, one dark red drop frozen mid-fall beneath the bristles — the source of that "blood" pool now obvious; the bounce board throwing a warm motionless patch of light, dust suspended in the beam.
18.0s–23.0s — the command layer: under the black shade tent, two monitors glowing with exactly the disaster core's composition; the director frozen half-risen from his chair; the script supervisor's stopwatch hands still, pen tip above the page; beside the B-camera the slate held high, sticks one centimeter apart, frozen before the clap, reading "SCENE 47 — TAKE 8"; the first AD with the megaphone at his lips, chest full of air — the word frozen in his lungs.
23.0s–26.0s — the perimeter: the camera passes the yellow barricades — the real street beyond is frozen too: the same fireball glowing on the onlookers' small phone screens, the delivery rider against the lamppost, the officer frozen mid-yawn, the little dog frozen mid-bark with its leash arced taut; the white steam over a street vent frozen into a motionless column.
26.0s–30.0s — the camera rises into the high-angle grand wide: the whole frozen machine in one view — the fireball and water arch at the center, the radial glass constellation, the crew rings spreading outward, the still city beyond the barricades. At 27.0s the megaphone detonates one English "ACTION!", the echo rolling across the buildings — time fully resumes: the fireball roars through the rest of its bloom and rolls into black smoke, the stunt performer is whipped through the rest of his arc by the wires and slams into the crash mats, the glass falls in a shattering rain, the water arch crashes down and the crown splash collapses, the tape measure snaps home, the slate claps, the "blood" drop lands, the pigeons scatter, the dog finishes its bark, the dolly rolls down the track, and beyond the barricades the crowd starts filming in unison. The scene plays on. Hold the grand wide to 30.0s.
PERFORMANCE
The frozen figures read as living sculpture: weight fully loaded into the poses, mouths open mid-word, eyes fixed with glassy catchlights, faces squinting into the low sun, clothing creases locked in arrested motion. After "ACTION!", the same faces snap to full speed within one beat: the performer's scream gets its sound back, the downed extra lets go and plays "dead," the director drops back into his chair, eyes on the monitors.
PHYSICS
During the freeze: absolute stillness — every tongue of flame, every fold of smoke, every droplet, every shard, every spark and dust mote suspended in place with zero drift, motionless contact shadows anchoring every floating object to the wet asphalt; only the moving camera reveals their volume through parallax. After 27.0s: combustion, gravity and inertia return at once — the fire churns again, the water arch falls on its parabola, glass hits the ground and bounces, the wire tension whips the performer realistically through the rest of the arc, the crash mats compress on impact, all mass and momentum true.
LIGHTING
A low warm 4300K sun hidden behind the rooftops beyond the disaster core, backlighting the entire depth, long hard shadows reaching toward the lens; deep-blue 10000K skylight lifting the shadow sides; the frozen fireball, though still, keeps glowing — the strongest warm practical in the scene, its light falling on the suspended shards, droplets and "blood"; the frozen water arch and droplet field sparkling like diamonds in the backlight; the smoke column's edges translucent against the light; the bounce board throwing its warm motionless patch; 15% haze giving the backlight visible depth down the street. The final grand wide holds the same backlight.
GRADING
Warm gold backlight against deep blue sky and blue-toned shadows, the frozen fireball a dense orange-black core, wet asphalt and puddles mirroring fire and sky, the "blood" a glossy dark-red movie-blood texture. One instant, one sun, one grade, one whole street.
SOUND
0.0s–27.0s: the soundscape of frozen time — a low hum with a faint glassy shimmer, the whole world's sound muffled as if sealed under glass; a soft airflow following the camera; no ambient action sounds at all. At 27.0s: a male voice through the megaphone shouts "ACTION!" in English, leaving a long echo between the buildings; sound floods back at full volume — the fire's roar, the water arch slamming down, the glass rain shattering, wire pulleys shrieking, the crash mats' muffled thud, the slate's crack, pigeon wings, dolly wheels on track, gasps from the crowd beyond the barricades and distant city traffic.
STYLE
Photorealistic live action, cinematic single take, fine 35mm film grain, physically believable practical-effects texture, a clean image throughout.
OUTPUT SETTINGS
21:9 widescreen, real-time speed throughout, one single continuous long take.
LOCKS
Until 27.0s the camera is the only moving element in the frame — all fire, smoke, water, debris, sparks, dust and people absolutely still with zero drift. Each character appears exactly once and stays in position until time resumes. The sun stays fixed behind the same rooftop beyond the disaster core for the whole shot. The frozen fireball keeps exactly the same sculptural form from the first frame until time resumes; the water arch and every suspended droplet hold exactly the same positions. The two wire cables stay visible for the entire shot, connecting the performer's harness to the crane arm. The monitor images match the disaster core's composition. The slate keeps reading "SCENE 47 — TAKE 8". The final grand wide contains all five layers from the core to beyond the barricades. One continuous take, unbroken from start to finish.
~~~~

### P10. The scene.

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: cinematic film scene
- Context: On 2.0, fifteen seconds means the pull-back sprints and the details break the further back you go.

~~~~text
SCENE BACKGROUND
A continuous 30-second multi-shot dramatic dialogue scene. Night, inside a stone castle hall. Three conspirators sit around a heavy dark table with a single lit candle on it: a woman on the left in right-facing profile, a long-haired man in black at the center facing the camera, a young man on the right in left-facing profile. Behind them, tall pointed-arch leaded-glass windows glow with cold moonlight. They are plotting to seize the kingdom of Anas from the current king, Yernat. The scene starts exactly from the provided first frame. Tension escalates step by step from a whispered proposal to an eruption: the man in the center slams the table and rises.
 first frame and visual baseline: composition, the positions of all three characters, their appearance and wardrobe, the candle position, the arched windows and the lighting atmosphere all match this reference 100%. Ignore any compression noise in the reference.
FIRST FRAME & SPATIAL LAYOUT
Frame one matches @image1 exactly: the candle flame sits low-center of frame, the center man faces the camera behind the candle, the woman is at the left edge in right-facing profile, the young man at the right edge in left-facing profile, two pointed-arch windows glowing blue behind the center man. The woman and the young man face each other across the table; the center man sits centered on the far side. This spatial relationship is locked for the entire video — the camera never crosses the axis between the woman (left) and the young man (right).
PICTURE MODE
Multi-shot cinematic sequence, 2.39:1, modern digital cinema feel, anamorphic widescreen lens character: oval-stretched bokeh, slight edge barrel distortion and edge chromatic aberration, sharp clean center, restrained highlights, no lens flares, no horizontal light streaks, no floating light blobs.
OPTICS
The wide master sits at roughly a 65° field of view; dialogue close-ups at roughly 47°, close enough that eyes, lips, jaw and throat read clearly; the rising climax at roughly 55°. Focus always stays on the speaking or reacting face; backgrounds fall into soft anamorphic bokeh.
SHOT & ACTION TIMELINE
[SHOT 1 — 0.0–4.5s — wide master, the proposal]
Camera on the near side of the table, at seated eye level, static, composition identical to the first frame, all three and the candle in frame. A brief silence: the candle flame trembles, the woman's chest rises with a held breath. She leans a few centimeters toward the flame and lowers her voice — a whisper carrying years of suppressed hatred, each word released through her teeth:
WOMAN (quiet, restrained, hatred burning under the whisper, in English): "Anas is weakening. Yernat has lost the north — and he knows it."
The instant she speaks, both men come alive: the center man slowly shifts his weight onto the table, elbows sliding forward, head tilting slightly toward her, eyes narrowing; the young man's fingers curl in on the tabletop, he glances first at the center man, then back to the woman, his throat moves once, his eyes widening by a millimeter.
[SHOT 2 — 4.5–10.0s — close-up on the woman, over-the-shoulder reverse]
Cut to a 47° close-up of the woman, shot over the blurred dark shoulder of the young man in the right foreground — his shoulder rises and falls slightly with his breathing and slowly turns a few degrees toward her as she speaks. Her face is half firelight, half shadow. Her eyes act the entire scene as she talks: pupils dilating slightly, lower eyelids tightening with resolve, gaze nailed to the face across from her without moving — not looking, pressing. On the word "now" her chin lifts a few millimeters, a flash of almost fanatical certainty crosses her eyes, immediately pushed back down by composure:
WOMAN (cold certainty, each word landing like a falling stone, a tremor of excitement in the tail of the line, in English): "If we march on the capital now, the cities will open their gates to us themselves."
Her eyes are natural human eyes, the candle flame present only as a tiny reflected highlight on the lower rim of her pupils; her hands stay folded, knuckles slowly whitening.
[SHOT 3 — 10.0–15.5s — reverse close-up on the young man]
Same-side-of-axis reverse: a 47° close-up of the young man, shot over the blurred dark shoulder of the woman in the left foreground, his profile turned toward her, the back of his head rimmed in moonlight. The woman's shoulder in the foreground stays steady, moving only with her breath. Fear arrives in his eyes first: two quick blinks, his gaze fleeing between her face, the candle flame and the tabletop and being dragged back, a thin film of wet light rising along his lower eyelids — no tears falling, just the moisture of fear. He shakes his head once as if to throw the thought off, his Adam's apple rolls in a swallow, his jaw tightens:
YOUNG MAN (voice tight, cracking once mid-sentence, the second half almost pleading, in English): "And if we're wrong? Yernat will burn our homes with us inside them."
On the last word his breath makes the candle flame sway gently, and his hand on the table pulls half a palm's width back toward himself involuntarily.
[SHOT 4 — 15.5–20.0s — close-up on the center man, the fuse burning]
Cut to a 47° frontal close-up of the center man, candlelight warming his face softly from below, the arched windows glowing blue behind him. He has not spoken yet. Off-screen, the woman presses him quietly for an answer; the young man's rapid breathing is audible on the other side. Anger ignites in his eyes by degrees: his gaze moves first to her on the left — pupils tightening; then to him on the right — upper eyelids sinking into a contemptuous half-close; then his gaze drops to the candle flame and locks, eyeballs trembling within a tiny range, like a beast being held down. His nostrils flare on the inhale, the masseter swells along his jaw, lower eyelids tighten, his head shakes half a slow shake, his fingers slowly close into a fist on the table, the ring on his finger catching the candlelight. His gaze freezes, pupils holding only the candle's tiny natural reflection.
[SHOT 5 — 20.0–25.0s — the eruption, wide]
Cut back to the wide master, camera static, at seated eye level. The center man's fist comes down on the table — a heavy impact, the candle jumps, the flame whips violently and nearly goes out, hot wax spatters, shadows lurch hard across all three faces. In the same motion he pushes himself up off the table, his chair scraping backward and toppling onto the stone floor, his body rising like a black tower over the recovering flame, eyes wide, brow bone pressed low:
CENTER MAN (a roar detonating from the chest, followed by one sharp gasp of breath, in English): "Enough!"
The woman flinches hard, one hand instinctively pressing the table to steady herself, but her gaze does not retreat — her eyes open wider to meet his, chin lifting toward him, as if saying "go on, then"; the young man's whole upper body recoils, shoulders hunching, one hand seizing the table edge, his widened eyes darting fast between the standing man and the woman, his breathing visibly quickening.
[SHOT 6 — 25.0–30.0s — low-angle closing hook]
Cut to a low camera position on the near side, slightly above the tabletop, shooting up past the recovering candle flame at the standing center man, his face lit softly by the firelight from below, the two pointed-arch windows in cold blue on either side of his silhouette. Both fists planted on the table, he leans down over the flame toward the other two. The rage recedes back into his eyes and becomes something more frightening — a calm, no-longer-wavering resolve: upper eyelids lowered halfway, his gaze traveling slowly from her to him, pausing one beat on each face, letting each of them be seen into. He speaks, his voice so low it almost crawls along the tabletop, a suffocating pause held between the words:
CENTER MAN (low, word by word, terrifyingly calm, the last four words almost breath, in English): "The kingdom of Anas will be ours before the first snow. Or we will not be at all."
At the frame edges, the woman slowly straightens, fear and triumph lighting in her eyes at once, an almost imperceptible nod; the young man lowers his gaze, swallows once, then raises his eyes again — changed: the fear is still there, but a decision has settled on top of it. The candle flame steadies between his fists. Hold on his eyes for two beats. End frame.
PERFORMANCE
All acting is physical and specific, the eyes are the primary instrument: pupils dilating and tightening, eyelid heights shifting, blink-rate changes, gazes fleeing and nailing down, the wet shine of the lower eyelids in fear, the micro-tremor of the eyeballs in rage — all real human eye-muscle performance, never exaggerated, never cartoonish. The vocal performance is equally specific: hatred under a whisper, a voice crack, pleading, a chest roar, breath-voice — every line has a clear emotional arc, never flat delivery. Listeners never freeze: every line triggers visible, line-driven physical and eye reactions in the other two. Real eyelines connect all three. Only these three voices, one person speaking at a time, no overlaps.
PHYSICS
The candle flame reacts to every event: trembling with breath, whipping violently on the fist slam, wax spattering, the smoke line torn sideways, then recovering to steady. The fist slam carries real mass — the tabletop shudders, objects on it rattle. The chair topples with weight and settles on the stone. Clothing creases and shifts with every lean; the rise to standing has wind-up, drive and follow-through, hair and collar settling one beat after the body stops.
LIGHTING
Locked for the whole scene: 1900K candlelight as the key on all faces — warm, soft, asymmetrical underlight; 7500K cold moonlight through the pointed-arch windows rims shoulders and hair, keeping the stone hall in deep, transparent blue shadow. In Shot 5, as the flame whips, the entire warm layer of the image dips and recovers with it, while the blue moonlight layer stays constant. Faces stay readable in every shot, with enough light on the eyes for the eye performance to read clearly. All eyes are natural human eyes: the highlights in them are only the physical reflection of the candle flame, tiny and non-glowing; the wet shine of fear is only the natural reflection of the tear film. The eyes themselves do not glow, do not shine, have no internal light source.
AUDIO
NO MUSIC. SFX ONLY — diegetic sound and live audio throughout. No score, no soundtrack, no background music of any kind. English dialogue exactly as scripted, one voice at a time, emotional delivery matching the script notes: whisper, voice crack, roar, breath-voice. The ambience of a great stone hall: wind tapping the leaded glass, the candle flame hissing, cloth rustling, breathing — the breathing growing audibly clearer as the tension escalates. Shot 5: the heavy thud of a fist on a wooden table with the light rattle of objects on it, chair legs scraping and toppling onto stone, the whoosh of the whipping flame. Shot 6: near-silence under his final line — only the candle, the wind and three people breathing.
STYLE
Realistic modern digital cinema, low-key old-master painterly palette: amber candlelight against steel-blue moonlight, deep transparent shadows preserving the stone texture, clean noise-free image, wide dynamic range, natural skin texture, restrained refined grading.
QUALITY
Faces and eyes sharp and readable in every close-up, stable pacing, natural cinematic motion blur only on the table slam and the rise, no ghosting, no duplicated limbs, no flicker. Character identities, wardrobe and the set stay 100% consistent with @image1 across all shots.
POSITIVE CONSTRAINTS
Only three people, one candle and the pointed-arch windows in frame. The woman stays frame-left, the young man frame-right, the center man in the middle — screen direction and the eyeline axis hold across every cut. Light comes only from the candle and the moonlight. All eyes stay natural and realistic, every eye performance is human eye-muscle movement, no glow effects of any kind. Dialogue is strictly the scripted English lines, no improvisation, no subtitles, no voice-over.
~~~~

### P11. The scene.

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: cinematic film scene
- Context: The acting showcase. On 2.5, watch the young man's eyes - he's about to tear up, with jaw tension and little breath beats between lines. Then the filmmaking: shot, reverse shot, tighter and tighter, the room shrinking around the argument - and the candle flicker matches across every single angle. No other model on the market handles lighting in …

~~~~text
SCENE BACKGROUND
A continuous 30-second multi-shot dramatic dialogue scene. Night, inside a stone castle hall. Three conspirators sit around a heavy dark table with a single lit candle on it: a woman on the left in right-facing profile, a long-haired man in black at the center facing the camera, a young man on the right in left-facing profile. Behind them, tall pointed-arch leaded-glass windows glow with cold moonlight. They are plotting to seize the kingdom of Anas from the current king, Yernat. The scene starts exactly from the provided first frame. Tension escalates step by step from a whispered proposal to an eruption: the man in the center slams the table and rises.

ACTIVE REFERENCE
first frame and visual baseline: composition, the positions of all three characters, their appearance and wardrobe, the candle position, the arched windows and the lighting atmosphere all match this reference 100%. Ignore any compression noise in the reference.

FIRST FRAME & SPATIAL LAYOUT
Frame one matches @image1 exactly: the candle flame sits low-center of frame, the center man faces the camera behind the candle, the woman is at the left edge in right-facing profile, the young man at the right edge in left-facing profile, two pointed-arch windows glowing blue behind the center man. The woman and the young man face each other across the table; the center man sits centered on the far side. This spatial relationship is locked for the entire video — the camera never crosses the axis between the woman (left) and the young man (right).

PICTURE MODE
Multi-shot cinematic sequence, 2.39:1, modern digital cinema feel, anamorphic widescreen lens character: oval-stretched bokeh, slight edge barrel distortion and edge chromatic aberration, sharp clean center, restrained highlights, no lens flares, no horizontal light streaks, no floating light blobs.

OPTICS
The wide master sits at roughly a 65° field of view; dialogue close-ups at roughly 47°, close enough that eyes, lips, jaw and throat read clearly; the rising climax at roughly 55°. Focus always stays on the speaking or reacting face; backgrounds fall into soft anamorphic bokeh.

SHOT & ACTION TIMELINE
[SHOT 1 — 0.0–4.5s — wide master, the proposal]
Camera on the near side of the table, at seated eye level, static, composition identical to the first frame, all three and the candle in frame. A brief silence: the candle flame trembles, the woman's chest rises with a held breath. She leans a few centimeters toward the flame and lowers her voice — a whisper carrying years of suppressed hatred, each word released through her teeth:
WOMAN (quiet, restrained, hatred burning under the whisper, in English): "Anas is weakening. Yernat has lost the north — and he knows it."
The instant she speaks, both men come alive: the center man slowly shifts his weight onto the table, elbows sliding forward, head tilting slightly toward her, eyes narrowing; the young man's fingers curl in on the tabletop, he glances first at the center man, then back to the woman, his throat moves once, his eyes widening by a millimeter.

[SHOT 2 — 4.5–10.0s — close-up on the woman, over-the-shoulder reverse]
Cut to a 47° close-up of the woman, shot over the blurred dark shoulder of the young man in the right foreground — his shoulder rises and falls slightly with his breathing and slowly turns a few degrees toward her as she speaks. Her face is half firelight, half shadow. Her eyes act the entire scene as she talks: pupils dilating slightly, lower eyelids tightening with resolve, gaze nailed to the face across from her without moving — not looking, pressing. On the word "now" her chin lifts a few millimeters, a flash of almost fanatical certainty crosses her eyes, immediately pushed back down by composure:
WOMAN (cold certainty, each word landing like a falling stone, a tremor of excitement in the tail of the line, in English): "If we march on the capital now, the cities will open their gates to us themselves."
Her eyes are natural human eyes, the candle flame present only as a tiny reflected highlight on the lower rim of her pupils; her hands stay folded, knuckles slowly whitening.

[SHOT 3 — 10.0–15.5s — reverse close-up on the young man]
Same-side-of-axis reverse: a 47° close-up of the young man, shot over the blurred dark shoulder of the woman in the left foreground, his profile turned toward her, the back of his head rimmed in moonlight. The woman's shoulder in the foreground stays steady, moving only with her breath. Fear arrives in his eyes first: two quick blinks, his gaze fleeing between her face, the candle flame and the tabletop and being dragged back, a thin film of wet light rising along his lower eyelids — no tears falling, just the moisture of fear. He shakes his head once as if to throw the thought off, his Adam's apple rolls in a swallow, his jaw tightens:
YOUNG MAN (voice tight, cracking once mid-sentence, the second half almost pleading, in English): "And if we're wrong? Yernat will burn our homes with us inside them."
On the last word his breath makes the candle flame sway gently, and his hand on the table pulls half a palm's width back toward himself involuntarily.

[SHOT 4 — 15.5–20.0s — close-up on the center man, the fuse burning]
Cut to a 47° frontal close-up of the center man, candlelight warming his face softly from below, the arched windows glowing blue behind him. He has not spoken yet. Off-screen, the woman presses him quietly for an answer; the young man's rapid breathing is audible on the other side. Anger ignites in his eyes by degrees: his gaze moves first to her on the left — pupils tightening; then to him on the right — upper eyelids sinking into a contemptuous half-close; then his gaze drops to the candle flame and locks, eyeballs trembling within a tiny range, like a beast being held down. His nostrils flare on the inhale, the masseter swells along his jaw, lower eyelids tighten, his head shakes half a slow shake, his fingers slowly close into a fist on the table, the ring on his finger catching the candlelight. His gaze freezes, pupils holding only the candle's tiny natural reflection.

[SHOT 5 — 20.0–25.0s — the eruption, wide]
Cut back to the wide master, camera static, at seated eye level. The center man's fist comes down on the table — a heavy impact, the candle jumps, the flame whips violently and nearly goes out, hot wax spatters, shadows lurch hard across all three faces. In the same motion he pushes himself up off the table, his chair scraping backward and toppling onto the stone floor, his body rising like a black tower over the recovering flame, eyes wide, brow bone pressed low:
CENTER MAN (a roar detonating from the chest, followed by one sharp gasp of breath, in English): "Enough!"
The woman flinches hard, one hand instinctively pressing the table to steady herself, but her gaze does not retreat — her eyes open wider to meet his, chin lifting toward him, as if saying "go on, then"; the young man's whole upper body recoils, shoulders hunching, one hand seizing the table edge, his widened eyes darting fast between the standing man and the woman, his breathing visibly quickening.

[SHOT 6 — 25.0–30.0s — low-angle closing hook]
Cut to a low camera position on the near side, slightly above the tabletop, shooting up past the recovering candle flame at the standing center man, his face lit softly by the firelight from below, the two pointed-arch windows in cold blue on either side of his silhouette. Both fists planted on the table, he leans down over the flame toward the other two. The rage recedes back into his eyes and becomes something more frightening — a calm, no-longer-wavering resolve: upper eyelids lowered halfway, his gaze traveling slowly from her to him, pausing one beat on each face, letting each of them be seen into. He speaks, his voice so low it almost crawls along the tabletop, a suffocating pause held between the words:
CENTER MAN (low, word by word, terrifyingly calm, the last four words almost breath, in English): "The kingdom of Anas will be ours before the first snow. Or we will not be at all."
At the frame edges, the woman slowly straightens, fear and triumph lighting in her eyes at once, an almost imperceptible nod; the young man lowers his gaze, swallows once, then raises his eyes again — changed: the fear is still there, but a decision has settled on top of it. The candle flame steadies between his fists. Hold on his eyes for two beats. End frame.

PERFORMANCE
All acting is physical and specific, the eyes are the primary instrument: pupils dilating and tightening, eyelid heights shifting, blink-rate changes, gazes fleeing and nailing down, the wet shine of the lower eyelids in fear, the micro-tremor of the eyeballs in rage — all real human eye-muscle performance, never exaggerated, never cartoonish. The vocal performance is equally specific: hatred under a whisper, a voice crack, pleading, a chest roar, breath-voice — every line has a clear emotional arc, never flat delivery. Listeners never freeze: every line triggers visible, line-driven physical and eye reactions in the other two. Real eyelines connect all three. Only these three voices, one person speaking at a time, no overlaps.

PHYSICS
The candle flame reacts to every event: trembling with breath, whipping violently on the fist slam, wax spattering, the smoke line torn sideways, then recovering to steady. The fist slam carries real mass — the tabletop shudders, objects on it rattle. The chair topples with weight and settles on the stone. Clothing creases and shifts with every lean; the rise to standing has wind-up, drive and follow-through, hair and collar settling one beat after the body stops.

LIGHTING
Locked for the whole scene: 1900K candlelight as the key on all faces — warm, soft, asymmetrical underlight; 7500K cold moonlight through the pointed-arch windows rims shoulders and hair, keeping the stone hall in deep, transparent blue shadow. In Shot 5, as the flame whips, the entire warm layer of the image dips and recovers with it, while the blue moonlight layer stays constant. Faces stay readable in every shot, with enough light on the eyes for the eye performance to read clearly. All eyes are natural human eyes: the highlights in them are only the physical reflection of the candle flame, tiny and non-glowing; the wet shine of fear is only the natural reflection of the tear film. The eyes themselves do not glow, do not shine, have no internal light source.

AUDIO
NO MUSIC. SFX ONLY — diegetic sound and live audio throughout. No score, no soundtrack, no background music of any kind. English dialogue exactly as scripted, one voice at a time, emotional delivery matching the script notes: whisper, voice crack, roar, breath-voice. The ambience of a great stone hall: wind tapping the leaded glass, the candle flame hissing, cloth rustling, breathing — the breathing growing audibly clearer as the tension escalates. Shot 5: the heavy thud of a fist on a wooden table with the light rattle of objects on it, chair legs scraping and toppling onto stone, the whoosh of the whipping flame. Shot 6: near-silence under his final line — only the candle, the wind and three people breathing.

STYLE
Realistic modern digital cinema, low-key old-master painterly palette: amber candlelight against steel-blue moonlight, deep transparent shadows preserving the stone texture, clean noise-free image, wide dynamic range, natural skin texture, restrained refined grading.

QUALITY
Faces and eyes sharp and readable in every close-up, stable pacing, natural cinematic motion blur only on the table slam and the rise, no ghosting, no duplicated limbs, no flicker. Character identities, wardrobe and the set stay 100% consistent with @image1 across all shots.

POSITIVE CONSTRAINTS
Only three people, one candle and the pointed-arch windows in frame. The woman stays frame-left, the young man frame-right, the center man in the middle — screen direction and the eyeline axis hold across every cut. Light comes only from the candle and the moonlight. All eyes stay natural and realistic, every eye performance is human eye-muscle movement, no glow effects of any kind. Dialogue is strictly the scripted English lines, no improvisation, no subtitles, no voice-over.
~~~~

### P12. 6. Impossible Worlds

- Model / settings: Same prompt run on Seedance 2.5 (30 s, 720p at test time) and Seedance 2.0 (15 s, up to 4K)
- Use-case: cinematic film scene
- Context: The cruelest prompt for the end: a gravity-broken city at golden hour. A red-haired schoolgirl carries a yellow letter across it - streets on ceilings, staircases spiraling into the sky, the finish line an old woman's rooftop garden on top of a clock tower. A prompt designed to snap a model's brain.

~~~~text
An ultra-high-quality surrealist city-spectacle short film: a gravity-scrambled city built on impossible geometry, multi-shot dynamic tracking, a young courier girl crossing a city where gravity keeps flipping — dreamlike yet photorealistic, purely visual with no subtitles, 30 seconds total.
[WORLD RULES — the core of the whole film] The direction of gravity in this city changes at every street corner, every archway, every flight of stairs: pedestrians can walk on walls, ceilings and upside-down bridges, and for each of them, whatever is underfoot is always "the ground." Every resident treats this as completely normal — walking dogs, buying newspapers, drinking coffee — they're simply distributed across different gravity planes. Every time the camera crosses a gravity boundary, the frame rotates and flips with it: what was a wall becomes the new ground.
[ENVIRONMENT] A grand old European stone city — baroque arcades, endlessly extending stone staircases, stacked arch bridges crossing each other at perpendicular angles, clock towers and fountains pointing in different directions, warm morning light pouring in from several "skies" at once, drying bedsheets, fluttering pigeons and falling leaves each drifting along different gravity directions, the space folded and nested like a labyrinth.
[CHARACTER] A young courier girl — short red-brown hair flying, a deep green uniform jacket, a leather mail bag slung across her body, white shirt and short boots, light and athletic in motion, focused and cheerful, a bright yellow letter in her hand.
Shot 1 (3s): The impossible as the everyday — eye-level morning street: the girl sprints along the cobblestones, brushing past an old man walking his dog — while above her, another "street" hangs upside down, pedestrians calmly walking head-down, a woman's red umbrella "hanging" toward the camera's sky. A flock of pigeons flips formation as it crosses between the two gravity fields. Fast lateral tracking. Hard cut.
Shot 2 (3s): The first flip — the girl charges at a wall that looks like a dead end and, without slowing, steps onto it — gravity changes instantly, the camera rotates 90 degrees with her, the wall becoming the new ground: the old street tilts up vertical in the frame, turning into a "cliff" beside her. She keeps sprinting, the hang of her skirt and hair switching direction naturally. A follow-and-rotate move, in one breath. Hard cut.
Shot 3 (3s): The staircase labyrinth — the girl leaps onto a spiral stone staircase coiling around a giant column, its gravity orientation constantly shifting; she runs the steps upright, then side-hanging, then fully inverted, the camera orbiting the column on a spiral path to follow her, the city's gravity planes sweeping past in the background like a kaleidoscope. Fast orbital camera, explosive sense of space. Hard cut.
Shot 4 (3s): The passing moment — where two bridge decks cross: the girl sprints across a bridge while another pedestrian walks the "underside" of the same bridge in the opposite direction; at the instant they cross perpendicular, they meet eyes through the deck, nod and smile to each other, and continue on. The camera catches this mirrored top-and-bottom moment precisely from the side, sunlight flaring on the stone edge between them. One second of slow motion, then back to full speed. Hard cut.
Shot 5 (3s): Falling is flying — the girl leaps off the bridge's edge and "falls" — but mid-fall she crosses a gravity boundary and the plunge instantly becomes an upward soar; she rolls with it and lands cleanly on a plaza overhead, startling a flock of pigeons that scatters in three different directions. The camera follows her fall and flips 180 degrees in sync, weightless vertigo at full strength. Hard cut.
Shot 6 (3s): Through the market — she dashes through a vertical market: vendors hang on the "wall face" selling fruit, and when apples tumble they trace curved arcs along the bent gravity lines; she catches one mid-air and tosses it back to the vendor, who laughs and waves. The camera tracks at high speed, low and hugging the ground (or the wall?), the market's colors and voices rushing past. Hard cut.
Shot 7 (3s): The clock tower sprint — the girl sprints vertically up the clock tower's outer wall (for her, a flat-out dash on level ground); the camera shifts from a top-down view into a "horizontal" tracking move beside her, the huge clock face booming the hour next to her, gears turning, startled pigeons "flying" alongside her. The thrill of speed and bell strikes. Hard cut.
Shot 8 (3s): The delivery — at the top of the clock tower (or rather, the "ground" of another world), an old woman watering flowers upside down in her garden straightens up — the girl vaults the final gravity boundary, lands cleanly in the old woman's garden, and, catching her breath, smiles and holds out the bright yellow letter. The old woman takes it with delighted surprise. Warm sunlight, flower petals drifting down in two directions. Hard cut.
Shot 9 (3s): The city revealed — the camera races up and away from the garden, pulling back and rotating — the full city spectacle unfolds: countless streets, bridges and plazas nested and folded into each other at impossible perpendicular angles, thousands of residents living on their own gravity planes, clotheslines, chimney smoke and pigeon flocks stretching in every direction, the whole city running in the morning light like an intricate, warm three-dimensional puzzle. Grand pull-away, hold the final frame.
Every crossing of a gravity boundary rotates and flips the whole frame with it, flowing with the seamless feel of a single continuous take; warm morning light and the golden texture of stone architecture; pigeons, leaves, bedsheets and petals drifting along multiple gravity directions; alternating shallow depth of field and wide angles; heavy film grain, deep contrast, photorealistic impossible space — wondrous, weightless, breathtaking. Mixed normal speed and slow motion. 21:9.
~~~~

