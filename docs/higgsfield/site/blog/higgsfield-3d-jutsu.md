# Higgsfield 3D Jutsu: Build and Animate 3D Scenes from a Prompt

- Source: https://higgsfield.ai/blog/higgsfield-3d-jutsu
- Byline: Higgsfield · Sep 5, 2026 · 9 min · Last updated: 2w ago
- Prompts extracted: 2

## Notes

**Topic:** 3D Jutsu — browser 3D workspace for blocking and previz (Sep 5 2026).

**Start a scene:** text prompt (+ optional references: uploads or past generations) + parameters: agent LLM (Auto = free), duration **1-60 s** (default 15), aspect 16:9, 9:16, 1:1, 4:3, 3:4, 21:9. Viewport: drag orbit, scroll zoom, right-drag pan. Scenes saved in My Scenes.

**Editor:** generated objects are real editable geometry (move/rotate/scale/duplicate, undo/redo); add primitives (sphere, cube, pyramid), lights (sun, point, spot), cameras; asset library of curated GLB assets + Mixamo characters; scene properties (background colour, resolution, light intensity, hierarchy); timeline animation from camera trajectory, animated character or imported GLB animation; camera presets + trajectory editing (Esc exits camera view); revision history (preview/restore checkpoints); export MP4 / still / GLB.
**Agent chat:** plain-language edits ("move the car closer to the streetlamp, add a second character"); modes "generate without asking", "ask before generating", and a question-only ask mode. LLM selectable per chat (GPT 6 Astra, Claude Fable 5.1, Claude Opus 5, GPT 5.6 Sol, GLM-5.3 Flash, ...). Sharing by email (admin/collaborator/viewer) or link.

**Workflow example (rapper in a moving subway car, robotic-arm camera):**
1. Block the previz with a prompt -> grey proxies for car, character, camera path, framing, timing (prompt below; note "character has NO arms" to keep proxies simple).
2. Export -> the blockout renders as a reference video of the camera move and behaviour.
3. Generate references: character portrait in **Soul 2.0** (identity + wardrobe), empty subway interior in **Soul Cinema**.
4. Drop both next to the previz render in the same chat and ask the agent to combine -> final shot follows the previz camera path with real location/wardrobe/performance (long "SCENE CONTEXT" motion-control prompt below).

**Costs per agent message:** Auto free; DeepSeek V4 Flash ~0.4 cr; Seed 2.1 Turbo ~1; Gemini 3.5 Flash ~2; Gemini 3.1 Pro ~3; GPT 5.6 Sol ~7; Claude Opus 5 ~8; Claude Fable 5.1 ~11; GPT 6 Astra ~17 (estimate shown before sending).
**When to use:** compare camera angles/lighting on grey boxes before paying for final renders; quick pitch previz; block a whole scene once and frame every shot from the same geometry for spatial continuity. Same scene layer exists in the Blender plugin (Scene Builder).

## Prompts (verbatim)

### P1. How does the full workflow look?

- Model / settings: 3D Jutsu (agent on Supercomputer) -> previz render -> video generation from the same chat (8 s, 16:9)
- Use-case: cinematic film scene
- Context: Step 1: Block the previz. A prompt to the agent builds the scene in grey proxies: the subway car, the character, and the camera path with its framing and timing.

~~~~text
8 seconds, 16:9. A character stands in a subway car and raps. The character has NO arms and NO hands: none rendered, nothing at the shoulders.

FRAMING: medium close-up throughout: head, shoulders and upper torso only, no legs, no waist. An invisible camera target is placed separately from the head so the head is always in frame as the camera moves.

CAMERA = robo-arm. One continuous, perfectly smooth 360-degree orbit around the character's head and shoulders at chest height, with a slight upward angle: starting front-left, sweeping around behind, continuing around the far side and returning to the front. Constant unhurried speed, near-constant radius that closes slightly on the back half. The camera never stops, never reverses, never zooms, and stays inside the subway car. Nothing passes through the camera and the camera passes through nothing: no walls, no floor, no ceiling, no poles, no seats.

CHARACTER: keeps rapping the whole time, and his head continuously turns to follow the camera through the orbit, face toward the lens the whole way, including a look over the shoulder as the camera passes behind.

Clean sharp digital image, no motion blur smear, no film grain, no vignette, no lens flare, no readable text or logos in the car, no neon, no yellow cast.
~~~~

### P2. How does the full workflow look?

- Model / settings: 3D Jutsu (agent on Supercomputer) -> previz render -> video generation from the same chat (8 s, 16:9)
- Use-case: cinematic film scene
- Context: Step 4: Combine in the same chat. The character and the location drop into the same 3D Jutsu conversation next to the previz render, and one message asks the agent to put them together. The previz provides a reference for the intended camera path, framing, and character behavior, and grey proxies become the real location, wardrobe, and performance.

~~~~text
SCENE CONTEXT

An 8-second single continuous motion-control shot inside a moving subway car at night: a hooded young rapper stands rooted at the center of the car and delivers four unhurried, meaningful bars straight into the lens while a robotic-arm camera performs one perfectly smooth 360-degree orbit around his head and shoulders, and he FOLLOWS THE CAMERA with his head the whole way, turning to keep his face and eyes on the lens even as it passes behind him, his body planted, his hands carving the flow. Intimate, controlled, cinematic. His rap is the only voice.

ACTIVE REFERENCES

<<<image_1>>>: THE RAPPER. Early twenties, dark skin, striking light-hazel eyes, calm composed face, a small earring. Wardrobe exactly per the reference: an olive-khaki zip hoodie with the hood UP over a leopard-print turtleneck and a dark tee, a charcoal boxy short-sleeve tee layered on top with colorful flower prints, a blue plaid flannel underneath with sleeves showing, an orange leopard-print strap across the chest, a silver pendant on a cord, silver rings, a camo skirt layer over red buffalo-check trousers, black suede boots. His face and full layered outfit stay identical for the whole shot; the hood stays up. Closely matches the reference.

<<<video_1>>>: THE CAMERA PATH AND THE FIGURE'S BEHAVIOR. Reference controls two things: (1) the camera move: a tight head-and-shoulders framing at chest height with a slight upward angle, one continuous smooth 360-degree orbit around a standing figure inside a subway car, beginning front-left, sweeping around behind, continuing around the far side and returning to the front, at a near-constant radius that closes slightly on the back half; (2) the figure's behavior: the body stays fixed in one spot for the entire shot while the HEAD CONTINUOUSLY TURNS TO FOLLOW THE CAMERA, keeping the face toward the lens through the whole orbit, including a look back over the shoulder as the camera passes behind. Nothing else from the previz (its grey materials, proxy geometry or lighting) is inherited.

LOCATION MAP

A generic New York subway car interior at night, in motion: stainless-steel walls, molded plastic bench seats along each side, vertical steel grab poles and overhead rails, fluorescent ceiling panels, scuffed rubber flooring, advertising card slots above the windows holding only blank or blurred cards, the windows black with the tunnel rushing past; periodic tunnel work-lights streaking through. The car is EMPTY except him. He stands in the open center aisle between two poles, feet planted shoulder-width, not holding on, balanced against the car's sway.

FIRST FRAME AND SPATIAL BLOCKING

The first visible frame is already the tight head-and-shoulders on his face; no establishing wide.

Frame map at 0.0s: camera front-left of him at chest height, 1.2 meters away, tilted slightly up. His hooded head at x 40-62%, y 18-70%, face turned to the lens, shoulders spanning x 25-78% at the frame's lower edge; a grab pole passes vertically at x 15%; the far bench and a black window behind him at x 60-100%.

Frame map at 2.0s: the orbit is at his left side; his head has turned left to follow it, face still square to the lens at x 42-60%, his shoulders now in three-quarter, the window streak-lights sliding past behind his hood.

Frame map at 4.0s: directly behind him: his back and the hood at x 35-65%, y 15-75%, but his head is turned hard over his left shoulder, chin on the shoulder line, one eye and the edge of his face catching the lens over the hood's rim; the far aisle and poles receding beyond, the tunnel black in the side windows.

Frame map at 6.0s: his right side: his head has swung around over the right shoulder to meet the camera, face square to the lens again at x 40-58%, the near window's passing lights raking his cheek.

Frame map at 8.0s: back to front: his face centered at x 42-60%, eyes locked on the lens, the last word landing, one hand settling.

FORMAT MODE

ONE SINGLE UNBROKEN SHOT for the entire 8.0 seconds, horizontal 16:9. One continuous motion-control take with absolutely no cuts, no edits, no transitions, no dissolves, no wipes and no flash frames. Real time throughout; no speed ramps, no slow motion, no freeze frames.

OPTICS

47° diagonal field of view held for the entire shot, standard normal lens character, camera 1.2 meters from his face closing to about 1.0 meter behind him and easing back to 1.2 on the return, natural facial proportions, no distortion. Shallow-but-honest focus riding his face continuously as it turns, the car interior soft, the tunnel lights blooming softly in the windows. Exposure holds on the fluorescent interior; the passing tunnel lights streak through without blowing out. Clean lens, no flares.

CAMERA

A ROBOTIC-ARM MOTION-CONTROL move: perfectly smooth, mechanically steady, zero handheld shake, zero jitter. One continuous 360-degree orbit around his head and shoulders at chest height with a slight upward angle, replicating the reference path exactly.

0.0s to 2.0s: from front-left, sweeping smoothly around his left side.

2.0s to 4.0s: continuing around behind him, the radius tightening slightly as it passes the back of his hood.

4.0s to 6.0s: continuing around his right side, the radius easing back out.

6.0s to 8.0s: completing the circle to the front, settling on his face as the final word lands, a full 360 in one constant-speed glide.

The orbit's speed is constant and unhurried; the camera never stops, never reverses, never zooms, never tilts beyond the slight upward angle, and the rig is never visible.

THE PERFORMANCE (critical, mirroring the previz figure)

BODY: rooted. Feet planted shoulder-width in the aisle for the full shot; hips and torso stay facing the car's front, with only a small natural twist of the shoulders when his head is turned furthest; he never steps, never shifts his feet, never walks, never holds a pole.

HEAD: tracks the camera continuously. As the orbit moves, his head turns smoothly to keep his face toward the lens: left, then hard over his left shoulder as the camera passes behind (chin nearly on the shoulder, eyes cut to the lens over the hood's edge), then a smooth swing across to over his right shoulder, then around to the front. The turn is continuous and unhurried, matching the orbit's speed, never snapping, never lagging more than a beat.

EYES: on the lens through the entire orbit whenever any part of his face is visible; the connection never breaks.

HANDS: free and expressive, riding the bars: a loose open-palm roll on the first line, two fingers tapping his own chest on "who I became," one hand lifting to flick the hood's edge over his shoulder as he looks back on the third line, a small flat-palm "settle" gesture pressed down on the last words. Each gesture once, natural, rap-video-loose, never blocking his face.

THE RAP (critical, delivery and text)

He raps slowly and deliberately: relaxed, conversational cadence, every word clear, pauses breathing between lines, no rushing, no mumbling. Clean and meaningful. The four bars, delivered across the eight seconds in sync with his lips:

"Same train every night, but I don't ride the same."

"Every stop I pass is a piece of who I became."

"They see the hood up, think they already know."

"I just keep my head down and let the work show."

His delivery is intimate, almost spoken-word: confident, low, sincere, his eyes never leaving the lens as his head turns to follow it around.

ACTION TIMING

0.0s to 2.0s: LINE ONE. Front-left: rooted in the aisle, hood up, he holds the lens and delivers the first bar low and clear, an open-palm roll of one hand on "ride the same", his head already beginning to turn left with the camera as it sweeps toward his side.

2.0s to 4.0s: LINE TWO. The camera passes his left side and behind him: his head turns with it, further and further, until his chin rides his left shoulder and his eyes hold the lens over the hood's rim, two fingers tapping his chest on "who I became," the tunnel lights streaking past beyond his profile.

4.0s to 6.0s: LINE THREE. Behind and around his right side: his head releases the left shoulder and swings smoothly across to the right, finding the lens again over his right shoulder, a small dry half-smile on "already know," one hand flicking the hood's edge as he looks back, the passing lights raking his cheek.

6.0s to 8.0s: LINE FOUR. Completing to the front: his head comes around to face forward with the camera, eyes steady on the lens; the last bar lands quiet and certain, "let the work show", the flat-palm settle gesture pressing down on the final words, a slow nod, the car rocking once. End on the held look.

PHYSICS

Real subway motion: the car sways gently side to side and rocks over rail joints, his planted body absorbing it through relaxed knees while his feet never move; his layers, hood drawstrings and pendant swing subtly with the sway; the grab poles and overhead rails are fixed and pass through frame with the orbit's true parallax. His head-turn is anatomically real: the neck rotates to its natural limit over each shoulder with a small shoulder twist assisting, never beyond human range, never swiveling unnaturally; the hood shifts and creases naturally with the turns. Hand gestures drive from shoulder through elbow with natural follow-through. Lips, jaw and breath sync to the words; no stiffness, no looping. Nothing floats, nothing teleports.

LIGHTING

Subway-car night interior: cool flat fluorescent ceiling panels as the base key, even on his face with soft shadow under the hood's brow; the black windows throwing intermittent warm-white streaks from passing tunnel lights that rake his cheek and shoulder as the orbit brings each window behind and beside him; the stainless walls reading dull silver. His hazel eyes stay lit and readable at every angle of the turn, including the over-the-shoulder looks. No added effects, no flares. Photoreal capture, high dynamic range, natural cool-toned filmic grade, fine real grain, no stylized filter.

AUDIO

Diegetic plus his voice. The moving-train bed: a steady rolling rumble, rail-joint clacks on a regular rhythm, the whoosh of tunnel air, a faint fluorescent hum, a soft creak of the car body on the sway, and over it his rap: close, dry, intimate, unhurried, every word intelligible, breaths between lines, a soft rustle of the hood as he turns. No music track, no beat, no score; his voice alone against the train. No subtitles.

POSITIVE CONSTRAINTS

He is the only person in the entire clip; the car stays empty of other passengers and no one enters.

He matches <<<image_1>>> in every frame: same face, hazel eyes, hood up, all layers, strap, pendant, rings, camo skirt, check trousers and boots, with zero drift; the hood never comes down.

THE CAMERA PATH MATCHES <<<video_1>>>: one continuous smooth 360-degree robotic orbit around his head and shoulders at chest height with a slight upward angle (front-left, around behind, around the far side, back to front) at constant speed with a slightly tightening radius behind him; perfectly steady with no handheld shake, no jitter, no stops, no reversals, no zooms, no cuts.

THE FIGURE'S BEHAVIOR MATCHES <<<video_1>>>: his body stays fixed in one spot (feet planted, torso facing the car's front with only a small assisting shoulder twist) while his HEAD TURNS CONTINUOUSLY TO FOLLOW THE CAMERA through the entire orbit, including the look back over his left shoulder as the camera passes behind and the swing across to his right shoulder as it comes around; he never walks, steps, shifts his feet, holds a pole, or turns his whole body to face the camera.

His eyes stay on the lens whenever any part of his face is visible, for the whole shot.

His hands gesture freely and naturally with the bars (the palm roll, the chest tap, the hood flick, the settle) each once, never covering his face, never exaggerated.

THE RAP IS THE FOUR WRITTEN BARS, delivered slowly and clearly in sync with his lips across the eight seconds (meaningful, clean, no profanity, no filler, no rushing, no mumbling) and it is the only voice in the clip.

The entire clip is ONE SINGLE CONTINUOUS MOTION-CONTROL SHOT: no cuts, no edits, no transitions, no dissolves, no flash frames anywhere.

No speed ramps, no slow motion, no freeze frames; all motion is real time and anatomically human.

No signage, route letters, station names, ad text, logos or readable text appear anywhere: not on the car walls, the ad slots, the windows or his clothing.
~~~~

