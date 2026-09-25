# Kling 3.0 on Higgsfield: A Guide to the Next Era of AI Video Generation

Source: https://higgsfield.ai/blog/Kling-3.0-is-on-Higgsfield-User-Guide-AI-Video-Generation  
Higgsfield, Feb 12, 2026  
Prompts extracted: 4

**Kling 3.0 parameters on Higgsfield**: duration 3–15 s; 720p / 1080p / 4K; 16:9, 9:16, 1:1; audio on/off per generation; **up to 5 shots per video, each with own prompt + duration**; start frame, end frame or both; 8 presets.
Steps: Video -> Kling 3.0 -> prompt (subject, action, camera behavior, visual style) -> duration/resolution/ratio/audio -> optional start/end frames -> generate -> iterate.
**Multi-shot**: toggle on; **Auto** (model splits prompt into shots — drafts) or **Custom** (you build the shot list, ≤5 shots, set each duration; total ≤15 s). Price depends only on total duration and resolution, not shot count.
**Elements (@elements)**: tag the character/product in every shot where it appears; describe only its action in the shot prompt (look comes from the element).
**Start/End frames**: frames may differ in tone/style — model bridges them; describe the transition + camera; if it drifts, simplify the prompt and let frames direct. End frame alone also works.
Physics/camera: gravity, inertia; **one camera move per shot**, described explicitly. Motion transfer from a reference video = separate tool **Kling Motion Control 3.0**.
Audio: On for finals/dialogue/atmosphere; Off for drafts/visual studies.
Cost (15 s): 720p 30 credits ($1.50); 1080p 37.5 ($1.88); 4K 90 ($4.50) (~20 credits/$).
Common mistakes: overloading one shot (one action + one move per shot); prompt fighting the end frame; too many shots for duration; expecting motion transfer from the base model; **iterating in 4K** (3x cost — draft at 720p).
Prompt formats shown: (1) timecoded 15 s multi-shot with @character and a closing Physics/Lighting/Style/audio block; (2) "Continue seamlessly from the provided start frame" + timecoded beats + CAMERA / PHYSICS / LOOK / AUDIO blocks; (3) sectioned one-take prompt: SCENE CONTEXT / ACTIVE REFERENCES (@GIRL, @LOC) / FORMAT-CAMERA / ACTION TIMING / PHYSICS-LIGHT-AUDIO / POSITIVE LOCKS; (4) macro product prompt with FIRST FRAME AND BLOCKING (x/y positions), OPTICS, CAMERA, ACTION TIMING, PHYSICS, LIGHTING, AUDIO, LOCKS.

## Prompts (verbatim)

### P1. Rodeo cowgirl — timecoded multi-shot with element tag
- Use-case: Cinematic film scene | Model: Kling 3.0 | Settings: 15 s multi-shot, @character element, golden hour, audio on

```text
Cinematic live-action rodeo film, 15 seconds, golden-hour sunlight, starring @character, the blonde cowgirl from the reference: long voluminous honey-blonde waves, cream felt cowboy hat, white crop top, baggy blue jeans with brown belt, brown embroidered western boots. 100% matches the reference in every frame.
0-1.5s: inside a wooden bucking chute, backlit by low sun, @character sits astride a massive black rodeo bull, right hand pressing her hat down; a handler's arm pulls the gate rope; dust hangs in the warm rim light. At 1.5s the gate swings open.
1.5-3s: side profile tracking shot: the bull lunges out of the chute into the arena, she rides one-handed with her hat hand raised, hair and fringed chaps whipping; sun flares through the dust, packed grandstand behind.
3-4s: HARD CUT to a tight backlit close-up of her face under the hat brim, calm confident eyes, golden edge light in flying hair; a whip-pan through white fabric transitions out.
4-8s: wide arena coverage shot from behind silhouetted spectators, their hats and raised hands framing the foreground: the bull bucks and spins in the center of a sun-hazed dirt arena, dust clouds blooming with each kick; she stays balanced, torso countering every buck, one hand high. Rodeo safety clowns in green shirts circle at a distance.
8-10s: frontal shot: the bull charges toward camera through the dust, she rides tall, hand on her hat, crowd roaring in the stands.
10-11.5s: she leaps off mid-buck, a dynamic tumbling dismount, dust exploding on landing.
11.5-13s: low ground-level shot from behind her legs: brown boots with spurs planted in the dirt in sharp foreground, the bull walks away into the haze screen-right, a clown waves it off screen-left.
13-15s: she runs toward camera laughing with motion blur, then stops in a medium hero frame: wide smile, one hand touching the hat brim, golden backlight, cheering grandstand behind, the exact reference face.
Physics: real bull mass and gait, dirt kicked in arcs, hair and cloth follow momentum, dust lingers in the air. Lighting: low warm sun, strong backlight and lens flares, faces lifted by bounce off the dirt. Style: anamorphic western cinema, warm Kodak tones, natural film grain, handheld energy on wide shots, crowd ambience and hoof impacts, no subtitles, no on-screen text.
```

### P2. Start-frame continuation — trumpet & brass band at mansion
- Use-case: Cinematic film scene | Model: Kling 3.0 | Settings: start frame, 16:9, 8 s, one continuous handheld shot, audio

```text
Continue seamlessly from the provided start frame: the same young man with brown fringe, pink linen overshirt over a white tee, dark jeans, gold bracelet, sitting sideways in the driver's seat of the same steel-gray sedan, left arm draped over the steering wheel, right hand on his knee, looking left past the fully open driver's door; same white mansion and tall hedges behind the car, same bright daylight. 16:9, 8 seconds, one continuous handheld shot, real-time: no slow motion, no speed ramps.
0.0-1.5s: Following his glance, he lifts his arm off the wheel, swings his legs out and stands up beside the open door, squinting into the light.
1.5-3.0s: A man in a rumpled band uniform sprints up the driveway out of breath and PRESSES a battered brass trumpet into his hands, gesturing toward the lawn; a dozen more musicians hurry in with tubas, trombones and a bass drum, forming a ragged semicircle around the car, watching him expectantly.
3.0-6.0s: He looks at the trumpet, at them, then lifts it, sets the mouthpiece, cheeks filling, and BLOWS a huge bright opening note, shoulders rising with the breath, fingers dropping onto the valves. On his second phrase the whole band CRASHES in behind him, drum kicking, tubas thumping, the group stepping into rhythm.
6.0-8.0s: He walks two steps forward still playing, the band falling in around him, faces appearing at the mansion windows; the frame holds him mid-phrase, eyes closed, fully committed, as the shot ends.
CAMERA: starts exactly at the start-frame position: outside the car, three-quarter front at chest height, framing him through the open door, loose handheld, drifting slightly right as the band assembles, then holding on him. No cut.
PHYSICS: real trumpet technique: correct embouchure, visible breath support, valves moving with the notes; brass has real mass and swings on straps; the drum head flexes on each hit; the door swings naturally as he stands.
LOOK: continuous with the start frame: bright clear daylight, balanced exposure, detail kept in the white facade, no blown-out highlights, neutral white balance, matte skin, the pink shirt and steel-gray car keep their exact start-frame colors, 35mm film grain, no CGI smoothness. No logos, no readable text.
AUDIO: quiet neighborhood ambience, birdsong, hurried footsteps, one breathless shout, the single bright trumpet note, then the full brass band swelling in: live and slightly rough.
```

### P3. Locker-room girl one-take stare (sectioned prompt with locks)
- Use-case: Character / consistency | Model: Kling 3.0 | Settings: 6 s one take, @GIRL + @LOC references, handheld push-in, no music

```text
SCENE CONTEXT Six-second one-take: a red-haired girl in a navy tracksuit on the floor of a deep-red locker room: jacket-fix, room-scan, then a level stare into the lens as the handheld camera pushes in to a close portrait.
ACTIVE REFERENCES @GIRL: 100% per reference: copper-red hair pulled back, loose strands; steel-blue eyes; navy track jacket, white chest panel, navy pants, dark-red sneakers. Seated, one knee up. Contained defiance: fix as armor-adjustment, scan as a fighter reading exits, the stare a statement. @LOC: per reference: deep-RED locker room: crimson panels, red lockers with chrome latches, white tile, one cool overhead pool into red gloom.
FORMAT / CAMERA ONE UNBROKEN TAKE, 6.0s, zero cuts. First frame = reference composition, already alive: hands on the hem, eyes down, no empty start. 47 degrees natural, rectilinear, focus locked on her face. MAXIMUM HANDHELD: breath-sway, micro-corrections, framing by feet, never zoom, never stabilized. ONE continuous move: slow walking push 2.5m to 1.2m, waist-up to close portrait, at its closest exactly as her eyes land on the lens.
ACTION TIMING 0-2.5s, THE FIX. Head down. Both hands tug the hem, squaring the white panel; collar flick, a copper strand falls across her temple; she leaves it. The zipper stays untouched, fingers never near it. Camera breathes, then advances on the collar flick. 2.5-4.5s, THE SCAN. Hands settle on the knee. Eyes sweep LEFT into the red depth, hold, track RIGHT along the chrome latches: reading the room, not the lens. Camera closing. 4.5-6.0s, THE LOOK. Eyes come off the lockers, land level on the lens. Chin lifts a degree. One slow blink, then stillness, breath in the shoulders. Camera settles into close portrait, holds. Ends MID-STARE.
PHYSICS / LIGHT / AUDIO Real breath, true blink timing, nylon rustle, the strand staying. One cool overhead key carves cheekbones and the white panel; red gloom, red bounce, chrome speculars; her face takes more key as the camera nears. Ventilation hum, fabric rustle, one nose-exhale. No music, no dialogue.
POSITIVE LOCKS Order locked: fix (zipper untouched), scan left-right, eyes land on the lens and HOLD. Eyes meet the lens exactly ONCE, at the end. ONE camera move. ONE person; 100% per reference. 8K photoreal, 180 degree shutter, pore-level skin, true fabric/hair physics; no 3D render, no plastic skin. NO IP / NO BRANDS / NO LOGO
```

### P4. Macro push-in on vintage field watch
- Use-case: Product ad | Model: Kling 3.0 | Settings: single continuous macro dolly-in, 6 s, audio ticking

```text
SCENE CONTEXT A single continuous extreme macro push-in on a scratched vintage military field watch held in a man's fingers, from a full view of the dial into an extreme close-up of the aged hands at its center.
FIRST FRAME AND BLOCKING Frame one shows the full watch filling 80% of frame width, dial at x 55%, y 50%, tilted slightly toward camera against a near-black void with faint warm falloff. Weathered fingers grip the case at frame left and lower right, out of focus. Crown points screen-right. Time reads 7:37, second hand near 6.
Watch: unbranded 1970s military field watch. Matte black dial speckled with dust and micro-scratches under a domed crystal. Cream aged-lume Arabic numerals 1-12, railroad minute track, small broad-arrow mark below center. Cathedral hour hand with two rounded lume lobes, pencil minute hand, thin steel second hand. Brushed steel case, worn chipped bezel, knurled crown.
FORMAT Single continuous take, no cuts, no speed ramps.
OPTICS Macro probe-lens character, 18 degree field of view narrowing into true macro. Camera starts 25 cm from the dial, ends 3 cm from the hands. Razor-thin focus tracks forward, keeping the hands sharp while numerals and case melt into warm bokeh; the final frame resolves lume grain and dust fibers.
CAMERA Slow hypnotic dolly-in along the lens axis toward dial center, constant velocity, no drift, no reframing; precision-slider smoothness, not handheld. The hands' crossing point settles just right of center, flanked by the 8 numeral and the broad arrow.
ACTION TIMING 0.0-2.0s: full dial in frame, fingers gripping; second hand ticks; push-in begins. 2.0-4.5s: fingers exit frame edges as magnification grows; numerals slide past; focus tracks the hands. 4.5-6.0s: extreme macro on the layered hands over the black dial; dust and scratches fully resolved; second hand keeps moving to the last frame.
PHYSICS Second hand advances with real mechanical cadence. Faint micro-tremor from the holding hand early on. Dust motes drift through the light near the crystal. No morphing of numerals or hands.
LIGHTING Warm tungsten-amber key from upper left, raking low so every scratch and embossed numeral casts a tiny shadow. Deep low-key: background crushed near-black, highlights only on case rim, hand edges and lume. Golden patina palette, no flat front light.
AUDIO Soft close-mic ticking, faint room tone. No music.
LOCKS No logos or readable text besides numerals and minute track. Photoreal macro, fine film grain.
```

