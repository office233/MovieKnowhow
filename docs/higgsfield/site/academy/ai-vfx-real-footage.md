# Add AI VFX to Real Footage

- **URL:** https://higgsfield.ai/academy/courses/ai-vfx-real-footage
- **Taught by:** Higgsfield Creative (host in videos: Adil)
- **Level:** Advanced · **Modules:** 11 · **Duration:** 12 min
- **Description:** Turn footage you shot on a normal camera into cinematic 4K VFX with Seedance 2.0 — world swaps, creatures, and full handheld showcase shots, one sentence at a time.
- **Skills (as listed):**
  - Turn any real clip into a 4K VFX shot while preserving its face, motion, and camera
  - Add creatures and world-swaps that hold up on handheld, moving-camera footage
  - Match added VFX to your plate's light so nothing reads pasted-on
- **Verbatim prompts in this file:** 14
- **Source pages processed:** 12 (course page + 11 lessons)

## Syllabus

1. The one move: video-to-video
2. Swap the world: the walking location swap
3. World swap while driving
4. Set your head on fire
5. Hand into a snake: change one thing
6. Add a creature with a reference image
7. The handheld showcase: wing-walker
8. Collapsing jungle temple
9. Sauropods in the rain
10. The kraken storm
11. No studio required: the recap

---

## Lesson 1 — The one move: video-to-video

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/the-one-move-video-to-video

- The whole course is one move: **video-to-video in Seedance 2.0**. Give it a clip you shot + one sentence of what to change; motion, face and camera move stay, only the named part is repainted. No keyframing, masking, tracking or roto.
- **Always keep a real anchor** (face, hands on the wheel, dashboard near the lens). Change everything and the brain smells fake; keep one real thing and it accepts the rest.
- **Native 4K** (not upscaled, 4x the pixels of 1080p): lets you punch in during the edit and pull 2-3 sharp shots from one generation. At 1080p fine detail warps, on-screen text garbles and lip-sync drifts when cropping.
- Three levels, hardest last: L1 swap the world (desert, neon city, lava, clouds) -> L2 change one element (head on fire, hand -> snake, creatures) -> L3 handheld showcase (wing-walker, jungle temple, sauropods, kraken).
- A free Seedance prompting skill writes the "keep-lists"; every lesson's prompt is its output.

## Lesson 2 — Swap the world: the walking location swap

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/swap-the-world-the-walking-location-swap

- Easiest L1 move: keep yourself as shot, replace everything around you - a handheld plaza walk becomes a sunset desert **on a finger snap**.
- Drop the clip into Claude first: it reads the video as frames, so it knows subject, walk, light and camera move - that context lets it write a prompt that changes the world without losing you. (Claude writes; Seedance generates.)
- **Keep-list** = the trick: the skill lists everything that must stay exactly as shot (identity, face, hair, wardrobe, rings, expression, gestures, handheld framing, lens, camera motion) and locks it; then one change.
- **Tie the change to a performance trigger** (the snap at ~2.2 s): a backlit sun blooms to white flare, and as it falls off the ground is rippled sand lit by the same low sun, so light on the walk barely changes.
- vs green screen: no keying/roto/comp and no mismatched light; Seedance relights you because it repaints your real footage.

### Verbatim prompts (2)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video (@source = your clip), 16:9, native 4K; prompt written by Claude + Seedance skill

**Prompt #1 — video cue 1:15, generation prompt**

```text
@source: Original clip — a young man with curly dark hair and a mustache, in a cream
ribbed short-sleeve zip shirt, dark trousers and silver rings, walking toward camera and talking to it with open-handed gestures across a wide stone plaza at golden hour; a bright sunburst flares in the gap of a long modern stone-and-glass office building behind him, and at about 2.2s his right hand snaps up beside his head. Handheld camera tracks and pans right with him; people cross the plaza, a misting fountain runs at the right. **Preserve his identity, face,mustache, hair, wardrobe, rings, expression and every gesture, and the exact handheld framing,lens and camera motion, unchanged throughout. **For the first beat keep the real plaza (all rooftop signs and LED screens blank and unbranded, no logos or text); on his snap, transform
only the world around him into open desert. Photoreal. 16:9. 7s. Warm golden-hour grade, low sun from screen-left, soft long shadows, gentle lens flare. NON-IP — generic landscape, no real brand names, logos or trademarks
anywhere. SFX and source dialogue only. One continuous handheld shot, same framing, lens and camera move as the source, tracking and panning right with him as he walks toward camera. Hold the real golden-hour plaza for the first beat. At about 2.2 seconds, on his finger snap with his right hand up beside his head, the backlit sun blooms into a white flare that washes across the frame; as the bloom falls off the city is gone and he is in open desert — the stone underfoot has become rippled wind-sculpted sand, dunes roll unbroken to a far horizon under the same low golden sun, heat shimmer rising off the crests, a thin veil of blown sand streaming past at ground level with the same rightward parallax as the camera move. Keep the sun as the key from screen-left exactly as before so his face and the light on him barely change; add a faint warm sand bounce from below and a touch of the desert's hazy distance over him, match the source lens character, depth of field and grain, and ground him in the sand with a real soft contact shadow so he is not pasted in. He keeps walking toward camera and talking, completely unfazed, performance and timing identical. Face, identity, expression and wardrobe unchanged; the camera move identical to the source — only the world changes on the snap. SFX and source dialogue only: his original speech throughout; quiet plaza ambience and fountain hiss before the snap; a soft airy whoomph as the world flips; then warm desert wind, fine hiss of blowing sand and a wide empty-space tone after.
```

**Copy block: Copy this asset #2 — lesson text, generation prompt**

```text
Preserve his identity, face, mustache, hair, wardrobe, rings, expression and every gesture, and the exact handheld framing, lens and camera motion, unchanged throughout.
```

## Lesson 3 — World swap while driving

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/world-swap-on-a-moving-camera

- Same move at speed: talking to camera while driving (cowl-mounted rig). The new world must move with you at the right speed and relight you.
- **Bigger keep-list**: subject, face, car, seatbelt, rig framing, camera position, driving motion - preserve exactly; replace only the world.
- Because Seedance works off your plate, the new environment inherits the car's real motion -> **parallax is automatically correct**.
- Reuse one locked keep-list across several worlds (neon city in the player; volcanic dusk and above-the-clouds given as text).
- Seedance relights you from the generated world (neon on the paint, lava under-light on the chin, cloud light on the car). At 1080p detail and lip-sync break; 4K holds.

### Verbatim prompts (3)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, Photoreal, 16:9, 6 s, SFX only, native 4K

**Prompt #1 — video cue 0:33, generation prompt**

```text
@source: Original clip — same young man driving a white car convertible with the top down, seatbelt on, talking and gesturing to camera, filmed from a cowl-mounted rig looking back at the driver, motion blur as the car moves. Subject, face, car, seatbelt, rig framing, camera position and driving motion — preserve exactly. Replace background environment and time of day.
Photoreal. 16:9. 6s. Filmic look — night, neon-lit, wet reflections, magenta-cyan palette, high contrast, deep blacks. Preserve source subject, face, performance, car, seatbelt and camera move; replace only the world and the lighting. SFX only.
Continuous shot from the same cowl-mounted rig, same framing and camera position as the source. The man keeps driving and talking to camera, gesturing, seatbelt on. The environment is fully replaced and time shifts to night: the car cruises a rain-wet downtown street walled with dense neon — Japanese signage, glowing storefronts, holographic billboards — all streaking past in long light trails with strong parallax. Wet asphalt mirrors the neon; coloured reflections and bokeh slide across the white paint and windshield. Relight the driver for night — magenta and cyan neon spill washing over his face from the sides, a cool rim edging his hair and shoulder, skin kept readable against the dark. Oncoming headlights and tail-light streaks flare past. Face and identity unchanged.
SFX only: open-cockpit wind softened by the city, low engine hum, distant traffic and muffled bass, occasional passing-car whoosh, faint rain hiss on asphalt.
```

**Copy block: Driving world-swap — volcanic dusk #2 — lesson text, generation prompt**

```text
@source: Original clip — same young man driving a white car convertible with the top down, seatbelt on, talking and gesturing to camera, filmed from a cowl-mounted rig looking back at the driver, motion blur as the car moves. Subject, face, car, seatbelt, rig framing, camera position and driving motion — preserve exactly. Replace background environment only.
Photoreal. 16:9. 6s. Filmic look — volcanic dusk, deep oranges and crushed blacks, warm under-light, heavy ember haze. Preserve source subject, face, performance, car, seatbelt and camera move; replace only the world. SFX only.
Continuous shot from the same cowl-mounted rig, same framing and camera position as the source. The man keeps driving and talking to camera, gesturing, seatbelt on. The environment is fully replaced: the car races down a black basalt road across a volcanic plain at dusk. Glowing orange lava fissures crack the ground on both sides, streaming past with strong parallax, their molten light pulsing up onto the underside of his face, the seatbelt and the white paint from below. Embers and sparks drift and whip past the open cockpit. A burning orange glow sits on the horizon under a smoke-darkened sky, with slow heat shimmer and drifting volcanic haze. Blend his original warm low-sun key with the lava under-light so his skin tone holds. Face and identity unchanged.
SFX only: open-cockpit wind, deep engine rumble, low volcanic roar and distant rumble, sparks crackling past the cockpit.
```

**Copy block: Driving world-swap — above the clouds #3 — lesson text, generation prompt**

```text
@source: Original clip — same young man driving a white car convertible with the top down, seatbelt on, talking and gesturing to camera, filmed from a cowl-mounted rig looking back at the driver, motion blur as the car moves. Subject, face, car, seatbelt, rig framing, camera position and driving motion — preserve exactly. Replace background environment only.
Photoreal. 16:9. 6s. Filmic look — natural grain, warm above-the-clouds golden light, ethereal, high dynamic range, soft contrast. Preserve source subject, face, performance, car, seatbelt and camera move; replace only the world. SFX only.
Continuous shot from the same cowl-mounted rig, same framing and camera position as the source. The man keeps driving and talking to camera, gesturing, seatbelt on, hair moving in the wind. The entire environment is replaced: the car races along a narrow ribbon of asphalt suspended in a boundless sea of golden sunset clouds. Towering cloud banks stream past on both sides and far below with strong parallax, wisps of vapor whipping over the windshield and past his shoulders. The low sun breaks through the cloud tops in warm volumetric god rays, raking his face and the white paint to match the source's golden-hour key exactly. Distant cloud canyons drift slowly for depth. Face and identity unchanged.
SFX only: wind rush over the open cockpit, low engine hum, soft airy ambience, faint whoosh of passing cloud.
```

## Lesson 4 — Set your head on fire

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/set-your-head-on-fire

- L2: put the effect on something specific - your own hair set on fire while you keep talking.
- One blunt instruction ("set my whole head of curls on fire"); the skill locks face, expression, the car behind, golden-hour light. Only fire is added. Video-to-video means flames ride your head when you turn.
- **Fire must light the face**: orange flicker spilled on skin, shirt and the glossy car hood. Fire that doesn't throw light reads as a sticker.
- Fire is the harshest resolution test (embers, sparks, soft edges) - native 4K keeps each ember.
- Notice how most of the prompt protects the performance and very little describes the fire. Replaces days of flame sims + face masks; ~2 minutes.

### Verbatim prompts (1)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, 16:9, 6 s, 4K

**Prompt #1 — video cue 0:25, generation prompt**

```text
@source: Original clip — young man with curly dark hair, mustache, light pinstriped short-sleeve zip shirt, forearm tattoo, standing in front of a parked white car convertible on a curved overlook road at golden hour, talking to camera with animated two-handed gestures. Appearance, face, camera, motion and lighting reference — preserve exactly.
Photoreal. 16:9. 6s. Filmic look — natural grain, organic color, warm golden-hour grade, soft contrast. Preserve source subject, face, expression, gestures, camera, car and lighting; fire added as VFX. SFX only.
Static locked-off ultra-wide, same framing and slight barrel distortion as the source. The man keeps talking to camera and gesturing with both hands, smile unbroken, completely unfazed. In the first beat flames catch at the crown and race outward until his entire head of curls is ablaze — fire wrapping the whole scalp, every curl alight, tongues sheeting up and back off the crown and licking from the sides and back of his head. A full corona of flame haloes his head, flickering and trailing in the light breeze. Embers stream off in a constant shower, glowing orange and dying in the air above him; heat-haze shimmer warps the trees behind him. His whole head now reads as a light source — strong warm firelight rakes down his face, neck and collar and spills onto the white hood and windshield of the car behind him, pulsing on the glossy paint. The hair burns but holds its shape and silhouette, never charring away. Face and identity unchanged. Everything else — pose, delivery, golden-hour key, parked car, road and guardrail — identical to the source.
SFX only: a low whoomph as the hair catches and flares up, then a full steady flame roar and crackle, constant ember snaps, faint evening wind, ambient birdsong.
```

## Lesson 5 — Hand into a snake: change one thing

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/hand-into-a-snake-change-one-thing

- Transforming a body part has zero margin for error (everyone knows what a hand looks like) -> **restraint**.
- Change only the right hand -> snake, timed to the spoken line "transform myself right in front of you". Lock identity, face, hair, wardrobe, voice, full spoken performance, static framing, lens, camera.
- Give the new thing its **own behaviour** (sways, weaves, tongue flicks) instead of mirroring your gestures - mirroring reads as a graphic stuck on you.
- **Match the plate light**: same daylight key and softness, real contact shadow where scales meet sleeve, no crisper/different colour temperature.
- "Change one thing at a time."

### Verbatim prompts (1)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, 16:9, 12 s, 4K

**Prompt #1 — video cue 0:30, generation prompt**

```text
@source: Original clip — a man with curly dark hair, a mustache and goatee, in a light-grey vertically striped short-sleeved shirt over a dark undershirt and dark pants, standing outdoors in front of a modern glass-fronted building, a wide stone staircase behind him on one side and a landscaped garden with small fountains on the other, talking directly to camera and gesturing with both hands; at the start he raises his hands and his right hand — the one on the left side of frame from the viewer's perspective — lifts as he begins the line \"…transform myself right in front of you.\" Preserve his identity, face, hair, wardrobe, voice and full spoken performance exactly, and the static framing, lens and camera exactly. Change only his right arm (the arm on the left side of frame); everything else stays identical. Do not re-frame, re-time, re-light or re-cut.
Photoreal. 16:9. 12s. Same natural outdoor-daylight grade as the source, no restyle. NON-IP — generic snake, not based on any character. SFX and source dialogue only.
Continuous single static shot, same framing and lens as the source, camera locked exactly as the original. He keeps talking to camera the entire time, unfazed, delivering his full pitch. As he raises his right hand (on the left side of frame) around the line \"transform myself,\" the hand itself transforms — smooth but quick, not abrupt, not drawn out: scales appear and spread up from the fingertips across the back of the hand and along the bare forearm, the skin tightening into the glossy banded coloring of a snake, the fingers fusing and reshaping, the wrist narrowing and the forearm thickening into a muscular serpent body emerging from his short sleeve. Time it so that by the moment he closes that hand into a fist, the hand is already a snake — the clenched fist resolving into a wedge-shaped snake head, eyes opening lidless and glossy, a forked tongue flicking out. After this point no human hand remains at all — no fingers, no palm, nothing of his hand or forearm; the snake has fully replaced his right hand and arm and stays that way to the end of the clip.
The snake moves entirely on its own, with its own will, independent of his body — it does not follow his gestures or mirror his other arm. While he keeps talking and gesturing with his left hand, the snake acts on its own: the body slowly sways and curls, the head lifts and weaves, looking in different directions, turning toward camera and away, the tongue flicking out to taste the air, the eyes unblinking and never closing, the whole serpent behaving like its own creature where his arm used to be. It must read as a completely real, living snake captured on camera — wildlife-documentary realism, individual keeled scales with a faint moist sheen catching the daylight, subtle scale texture and color variation along the body, real muscle and weight shifting under the skin as it moves, natural serpent anatomy and motion; never CGI, rubbery, plastic or cartoonish, no glossy game-render look.
Lock his existing outdoor lighting and grade the snake fully into it: the same natural daylight key, same key direction and softness, real soft-edged contact shadow where the body meets his sleeve and torso, scene-matched haze, depth of field, lens character and grain so it sits in the same plate as the real footage — never lit differently, never pasted, never crisper or a different color temp than the rest of the frame.
Face, identity, hair, wardrobe, voice and the full spoken performance unchanged; the static framing, lens, camera, timing and cuts identical to the source; only his right arm is new. No on-screen text or watermark.
SFX and source dialogue only: keep his spoken pitch fully intact; a faint dry rustle and leathery slither as the scales spread and the body forms, then a soft hiss and the quick wet flick of the forked tongue, with subtle continuous scale-on-fabric sliding as the snake moves. No music.
```

## Lesson 6 — Add a creature with a reference image

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/add-a-creature-with-a-reference

- Add rather than swap: keep your real rooftop, add giant lizards climbing the tower behind you.
- **Show, don't describe**: design the creature first in GPT Image 2.0 and pass it as a reference ("appearance, scale-texture and colour reference only"). Describe from scratch only if you don't care about the exact design.
- **Ask for a camera move you never shot**: open on a tight telephoto of the lizards, then zoom out to your original framing as you start talking - one generation, two shots, lip-sync preserved.
- Working off real footage keeps creatures anchored: claws hook ledges, they move with your handheld push-in, real contact shadows on the facade.
- Verbatim request quoted in the lesson (see prompts).

### Verbatim prompts (2)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video + image reference (@LIZARD from GPT Image 2.0), 16:9, 4K

**Prompt #1 — video cue 0:37, generation prompt**

```text
<<<video_1>>>: Original clip — young man with curly dark hair and a moustache, rings on his fingers, wearing an open light grey pinstriped short-sleeve shirt over a black tee, standing in a sunlit rooftop parking lot in Almaty, gesturing and talking directly to camera; behind him the beige Hotel Kazakhstan tower with its crown-shaped top, a Soviet apartment block at left, parked cars and green trees, low handheld angle with a slow push-in, warm low-sun daylight. Preserve the man's identity, face, moustache, wardrobe, rings, performance and exact lip-sync, plus the framing, lens character and handheld motion of the original take exactly. Change only the background behind him: add many large reptiles climbing the hotel tower, and prepend a 1-second telephoto opening that snaps out to the original composition.
<<<c948711f-7529-43e5-979b-feb727a46a31>>>: Reference of a real large monitor lizard — pebbled scaly skin, long claws, heavy tail, true reptile anatomy. Appearance, scale-texture and color reference only; ignore the photo's background and lighting, do not use it for the environment.
Photoreal. 16:9. 8s. Warm low-sun evening daylight, soft long shadows, gentle film grain — grade matched to the source plate. NON-IP — generic large monitor lizards, not based on any brand or character. SFX and source dialogue only.
One continuous shot, no cuts. For the first 1 second hold on a long telephoto lens (~300mm look, compressed perspective) framed tight on the upper facade of the beige Hotel Kazakhstan tower: dozens of large photoreal monitor lizards, each roughly car-sized, swarming up the building en masse — claws hooking window ledges and concrete, heavy tails dragging, pebbled scales catching the low sun, bodies overlapping as they crawl higher, real soft-edged contact shadows on the facade. At the 1-second mark the camera snaps a hard, fast zoom-out / quick pull-back, decompressing perspective and craning down to land exactly on the source composition — a 100% match of the original framing: the low handheld angle with the man in the foreground, tower behind, same headroom and horizon. From 1 second onward play the man's preserved take: he speaks directly to camera, lips matching the source exactly, saying clearly: \"I can put something behind me that definitely shouldn't be there. Insane right?\" — keep his performance, gestures, timing and lip-sync precisely as in the source, smiling and completely unfazed and oblivious to the creatures, while the source's own slow handheld push-in continues. Behind him the lizards keep steadily climbing the tower for the rest of the shot, more of them crawling into frame on the facade. Keep the lizards integrated into the plate: same warm key from screen-right and same color temperature as the man, real contact shadows where claws grip, matching atmospheric haze and depth of field so they sit at true distance, fully photoreal real scale detail and true reptile anatomy, never CG, plastic or cartoonish. Lock-down: the man's face, identity, moustache, wardrobe, rings, expression, gestures and lip-sync are unchanged; from 1s onward the framing, lens and handheld push-in are a 100% exact match of the source — only the lizards on the tower are added.
SFX and source dialogue only: open with a quick burst of distant claw scrapes and scuffs on concrete and glass and scattered low reptilian hisses over faint city ambience; at the 1s zoom-out the man's preserved voice comes in and stays dominant — \"I can put something behind me that definitely shouldn't be there. Insane right?\" — the scrapes and hisses continuing softly underneath, a low structural rumble far in the background.
```

**Prompt (quoted in lesson text) #2 — lesson text, generation prompt**

```text
Big lizards — @LIZARD — climbing up the side of a building. Keep my lip-sync exactly as is. Start tight on a telephoto shot of them climbing, then zoom out to my original framing as I start talking — and the lizards keep climbing behind me.
```

## Lesson 7 — The handheld showcase: wing-walker

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/the-handheld-showcase-wing-walker

- L3 = handheld: angle, parallax and shake all change at once; the effect must track everything.
- The trick is **on set**: shoot each clip already knowing what world it will become. A move performed on the ground becomes a wing-walker on a flying biplane over floating mountains.
- Transfer motion **1:1**: preserve action, stance, timing, expression and the exact camera start + movement; only wardrobe, aircraft, environment and grade are new.
- Seedance adds physics you didn't shoot (wind in the hair at altitude, slipstream, banking, clouds in parallax) - that invented physics sells the shot.

### Verbatim prompts (1)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, 16:9, 8 s, 4K

**Prompt #1 — video cue 0:46, generation prompt**

```text
@source: Original сlip — the same man (curly dark hair, mustache, hoop earring, forearm tattoo) performing his action, shot with a moving camera. Preserve his action, body stance, movement, timing, facial expression and mimicry exactly, and the camera exactly: its starting position and full movement. Change only the wardrobe, his placement, the aircraft, the environment, the grade and the audio. Do not reinterpret or re-describe any of it — transfer it 1:1 from the source. Photoreal, cinematic. 16:9, anamorphic widescreen feel. 8s. Rich filmic blockbuster grade — golden volumetric light, gentle haze, subtle lens flare, deep contrast, natural film grain, high dynamic range, shallow depth on the subject against the immense backdrop. NON-IP — original non-branded biplane, no livery or recognizable IP. SFX only.
Continuous with the source — the same camera starting position and full movement, frame-for-frame. Keep the man in his exact action, body stance, movement, timing, facial expression and mimicry, his face and identity intact, now in a crisp tailored white suit with a bright red bow tie. His
preserved stance and movement now read as a wing-walker standing on top of a flying biplane, secured to the upright wing frame by a minimal harness — just a chest and shoulder strap and a
waist buckle clipped to the frame, light and clean, not heavily rigged.
The aircraft is a classic propeller biplane — twin stacked wings, radial engine, spinning propeller, fixed landing gear — painted a single solid glossy lime-yellow, #d1fe17, uniform across
the entire plane with no patterns or livery. Reskin the world into a surreal highland plateau that lands a wow reveal: a vast dreamlike expanse with colossal floating monoliths and mirror-still
reflective salt flats stretching to the horizon, oversized snow-capped peaks rising impossibly steep and close, ribbons of low cloud threading between them, the sky graded into a soft gradient
of amber-gold into deep teal. The biplane banks across this otherworldly scope, the vast scale dwarfing the plane for an epic, awe-inducing feel.
Light the whole frame under one look — the man, the plane and the terrain sharing the same warm low golden sun and volumetric beams against the cool teal sky, gentle haze thickening with
distance, subtle flare across the lens. Match exposure, color temperature, anamorphic lens character, bloom, film grain and the shallow depth of field so the subject sits crisp against the
soft immense backdrop and nothing reads pasted, brighter or a different color temp than the haze. Drive realistic high-altitude aerodynamics and strong wind: his suit, bow tie and hair whip and
flutter in the slipstream, the propeller spins with motion blur, clouds and terrain stream past in convincing parallax, and the plane subtly pitches and banks with the air.

Face and identity unchanged; his action, body stance, movement, timing, expression and mimicry
identical to the source; the camera's starting position and full movement identical
frame-for-frame; only the wardrobe, placement, aircraft, environment and grade are new. No
on-screen text or watermark.
SFX only: rushing wind, the deep drone of the radial engine and propeller, fabric flutter in the
slipstream, airy high-altitude ambience. No music, no vocals, no dialogue.
```

## Lesson 8 — Collapsing jungle temple

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/collapsing-jungle-temple

- Monkey bars -> collapsing jungle temple over a bottomless chasm; you are a treasure hunter crossing hand over hand.
- Straight **reskin**: ladder rig -> rusted iron rungs in cracked stone, concrete -> mossy carved blocks, ground -> chasm. Camera instruction: same handheld move, framing, shot scale and shake frame for frame.
- Same pass also swaps wardrobe (sweat-stained explorer outfit) and grade (teal-and-amber blockbuster, humid haze, sun shafts). Set + costume + colour in one generation.
- The skill writes the heavy prompt; your job is only to be clear about what you want.
- "Lock the motion, rebuild the world."

### Verbatim prompts (1)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, 16:9, 5 s, 4K

**Prompt #1 — video cue 0:09, generation prompt**

```text
@source: Original clip — a man traversing an overhead ladder rig hand-over-hand, with
grip transitions and shifting body stance, shot handheld. Preserve his action, body stance, grip
transitions and timing exactly, and the camera exactly: its movement, framing, shot scale and
shake. Change only the setting, his wardrobe and the grade. Do not reinterpret, re-frame, re-time
or re-angle any motion.
Photoreal, cinematic. 16:9. 5s. Filmic teal-and-amber blockbuster grade — deep shadows, warm
golden highlight pools from sunbeams, rich contrast, subtle film grain, anamorphic-style soft edge
falloff and gentle bloom on the light rays, humid atmospheric haze for depth. NON-IP — original
treasure-hunting adventure look, no branded logos, named characters or recognizable IP. SFX only.
Continuous with the source — **the same handheld move, framing, shot scale and shake,
frame-for-frame. Keep the man in his exact action, body stance, grip transitions and timing, **now
in a rugged explorer's outfit — a sweat-stained linen shirt with a leather strap across his chest
— his face, hair and proportions intact.
Reskin the environment into a collapsing ancient jungle temple corridor: the overhead ladder rig
becomes a row of ancient rusted iron rungs bolted into a cracked stone ceiling, the ground beneath
becomes a deep bottomless chasm, the grey concrete becomes weathered moss-covered carved stone
blocks etched with worn glyphs, and crumbling pillars and toppled stone columns replace the metal
posts. Dense jungle fills the background — hanging vines, dripping ferns, shafts of humid sunlight
piercing gaps in the broken stone canopy, drifting dust and pollen, with faint mist and floating
debris adding danger and depth. He traverses hand-over-hand along the rungs over the chasm, the
same path and blocking as the source.
Relight the whole frame under the one teal-and-amber look — the man, the rungs, the stone and the
jungle sharing the same warm directional sunbeams from above against cool teal shadow, golden
pools where the beams land, the humidity haze thickening with distance so the far jungle goes
softer. Match exposure, color temperature, anamorphic lens character, bloom, film grain and depth
of field across the whole frame so nothing reads pasted, crisper or a different color temp than
the haze.
Face, hair and proportions unchanged; his action, body stance, grip transitions and timing
identical to the source; the handheld camera, framing, shot scale and shake identical
frame-for-frame; only the setting, wardrobe and grade are new. No on-screen text or watermark.
SFX only: a tense low ambient drone, water dripping and echoing in stone, distant jungle birds and
insects, the metallic creak and strain of the old iron rungs, crumbling pebbles falling away into
the chasm, and the man's strained breaths and grunts, building subtle suspense. No music, no
dialogue.
```

## Lesson 9 — Sauropods in the rain

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/sauropods-in-the-rain

- Put something alive into a handheld forest clip where you turn and react: three long-necked sauropods in rain.
- Photoreal creatures usually fail by looking clean, rubbery, floaty.
- **Grade them into your plate**: same flat overcast light, cool blue-green grade, mist and rain wrapping them, aerial perspective (distant ones hazier), wet contact shadows; keep them partly veiled by mist and trunks, as if on a long lens. Hiding creatures in real atmosphere = believability.
- **Time the creature's action to your performance**: at ~2-3 s, as you turn, one sauropod moves closer, head lowering into frame; camera tracking locked to your handheld move.
- Weight sells giants: slow neck sway, blink, nostril flare, heavy footfalls; nothing fast, floaty or looping.

### Verbatim prompts (1)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, 16:9, 11 s, 4K

**Prompt #1 — video cue 0:19, generation prompt**

```text
@source: Original clip — a man in a forest filmed on a handheld follow, who turns and looks back at around 2 to 3 seconds. Preserve his identity, face, pose, exact performance, reaction and timing, and the camera exactly: the handheld follow move, framing, shot scale, wide lens, pan and tilt, speed and the source edit and cuts. Change only his wardrobe and the atmosphere; add the sauropods. Do not re-frame, re-time, re-angle or re-cut.
Photoreal. 16:9. 11s. Flat overcast rainy daylight, cool desaturated blue-green forest grade, heavy mist and steady rain. NON-IP — generic sauropod, not based on any franchise creature. Diegetic SFX only.
Continuous with the source — the same handheld follow, framing, wide lens, pan, tilt, speed and cuts, frame-for-frame. Keep the man in his exact pose, movement and timing, now in a wet yellow hooded rain slicker, glossy, rain-beaded and streaming with water, hood up, fully covering his shirt so no striped shirt shows; his face real human skin with pores, stubble, a wet rain sheen, real catchlights and blinking, never waxy, smoothed or warped.
Two to three colossal long-necked sauropods stand in the dark misty pine forest, all the same species and build — a generic Brontosaurus/Apatosaurus-type long-neck, the head tiny relative to a bulky barrel-chested body, the same head shape and proportions on every one. Each has a small, blunt, domed head on a very long thick columnar neck; a broad rounded muzzle with a closed, faintly down-curved mouthline; one large eye each side, dark with a warm amber-brown iris and a round pupil, set high on the skull under a heavy wrinkled brow, fine creases radiating around it. The hide is heavily textured — tessellated polygonal pebble-scales across the crown and snout breaking into deep horizontal wrinkle folds and loose sagging skin down the throat and the full length of the neck, a dewlap of ribbed creases under the jaw. Color is desaturated mottled olive grey-green with patches of yellow-ochre lichen-like mottling over the head and back, paler grey-tan on the lower jaw, throat, belly and inner legs. Bulky barrel torso, deep ribcage, rounded belly; four thick elephantine pillar legs with broad rounded feet and flat soles, loose creased skin folding at the shoulders, elbows, hips and knees; a long tail thick at the base tapering to a whip-thin tip, carried off the ground. No plates, spikes or osteoderms — smooth-backed, just wrinkled hide and real mass.
Shot from a low angle looking up, the man tiny beneath them, necks rising above the treeline into the fog, legs like tree trunks, building-sized bodies, with the trees and the man as scale reference. They read as real living animals in a wildlife documentary, never clean CGI: hide like a wet elephant or rhino — deeply wrinkled, cracked, sagging, asymmetric, mud-caked and matte, never smooth, glossy or inflated; eyes alive and wet with catchlights, blinking. They stay veiled by drifting mist and partly hidden behind tree trunks so we never see a whole crisp creature, shot as if on a telephoto lens with shallow depth of field, grain, rain and mist between camera and animal, motion blur and handheld softness. Motion is slow, heavy and minimal — neck sway, blink, nostril flare, breathing, weighty footfalls, real mass; nothing fast, floaty, rubbery or looping.
Lock the man's existing forest lighting and grade the sauropods fully into it: the same flat overcast rainy daylight, soft top skylight with no hard key, the same cool desaturated blue-green forest grade, the same mist and rain wrapping them, aerial perspective so the farther ones go hazier and softer rather than crisp, a wet rain sheen and running water on the hide, real soft-edged contact shadows on the wet ground, puddle reflections, matching exposure, color temperature, lens character, atmospheric haze and film grain. They must look filmed in this forest — never lit differently, never pasted, never crisper or a different color temp than the fog.
At about 2 to 3 seconds, exactly as the man turns and looks back, one sauropod moves in closer to camera — its huge head lowering and leaning in toward him with curious, menacing intent, filling more of the frame and delivering the scare, his reaction reading as a recoil from the approaching giant. The others stay back in the fog. Location holds throughout: dark misty pine forest, steady rain, drifting fog, dripping foliage, puddles, soaked moss, deep atmospheric depth.
Face and identity unchanged; his pose, movement, performance and timing identical to the source; the handheld camera, framing, lens, pan, tilt, speed and cuts identical frame-for-frame; only the wardrobe and the added sauropods are new. No on-screen text or watermark.
Diegetic SFX only: heavy rain drumming on leaves, his slicker hood and the mud, dripping water, wind hissing through the pines, his footsteps squelching and an awed, startled gasp on the turn, deep low sauropod rumbles and groans and chesty breathing, a heavy ground-shaking footfall and a closer guttural exhale as one leans in at 2 to 3 seconds, distant calls, rain intensifying on the beat. Everything reacts to what is on screen. No music, no dialogue.
```

## Lesson 10 — The kraken storm

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/the-kraken-storm

- Favourite shot: source was just walking down a staircase. It becomes a ship deck in a night storm, handrails -> rigging, anxious walk -> fleeing; tentacles thicker than the mast crash across the deck; movement, timing and low-angle handheld camera kept frame for frame.
- The prompt carries two honest warnings (verbatim below): night relighting raises face-drift risk (identity locks do the heavy lifting; check the face on take 1); if a take loses the cold teal mood, add one environment image back as a **mood-only reference**.
- Night relights and heavy weather are the hardest asks - when a take drifts, add a mood reference instead of more words.
- Scale comes from **shared light**: hero, crew, tentacles, ship all lit by the same cold blue-teal storm and the same lightning; wide scope, haze and strong foreground/background separation.

### Verbatim prompts (2)

_Target / settings for this lesson:_ Seedance 2.0 video-to-video, 16:9, 11 s, 4K

**Prompt #1 — video cue 0:15, generation prompt**

```text
@source: Original clip — a man descending a staircase on a handheld low-angle follow, glancing back anxiously, then quickening in panic. Preserve his identity, face, pose, exact performance and timing, and the camera exactly: the handheld follow, low angle, framing, shot scale, lens, whips, turns and speed, and the source edit and cuts. Change only his wardrobe, the environment and the lighting; add the kraken. Do not re-frame, re-time, re-angle or re-cut.
Photoreal, cinematic. 16:9. 11s. Violent night storm — near-black blue-teal palette, low-key, lightning-flashed. NON-IP — generic kraken, not based on any franchise creature. Diegetic SFX only.
Continuous with the source — the same handheld low-angle follow, framing, lens, whips, turns, speed and cuts, frame-for-frame. Keep the man in his exact pose, blocking, movement, performance and timing, his anxious-then-panicked descent now reading as a reaction to the attack, now dressed as a storm seafarer in a soaked dark oilskin or canvas storm coat or hooded rain cloak, drenched and clinging with water streaming off. His face stays real human skin with pores, stubble, a wet sheen, real catchlights and blinking — never waxy, smoothed or warped.
Transform the modern stairs and building into the wooden deck and steps of an old ship at sea in a violent night storm: handrails become rigging, rope and wooden rails, the floor becomes wet timber deck. He descends the same path toward the deck. The whole frame sits in a cold, near-black blue-teal palette, low-key and desaturated, the ocean and horizon swallowed into blackness. Heavy driving rain sheets diagonally across the entire frame; low churning storm clouds press down; a stark forked lightning bolt cracks down off to one side, for an instant lighting the rain streaks and a wedge of churning foam before the dark closes back in. Build deep layered space — foreground deck and rigging, the man in the midground, and a vast stormy sea stretching far behind, towering dark waves with white-blue foam exploding up and crashing over the deck and around the hull, sea mist and spray hazing low over the black water, the ship pitching and rolling hard, small and battered and dwarfed by the ocean. Wide scope with atmospheric haze and rain receding into the distance and strong foreground-to-background separation so the danger reads as enormous and far-reaching.
A colossal kraken attacks — we never see its full body, only enormous tentacles, but they dominate the frame and must read as massive and real. Each tentacle is thicker than the ship's mast, rising hundreds of feet out of the black sea, towering over and dwarfing the whole ship, water cascading off it: real wet muscular flesh, glistening dark skin, huge suckers, veins, writhing muscle, slime and seawater sheeting off, lit in the lightning flashes. Some rise far in the background out of the waves to show scale while others crash down onto the deck and coil around the mast and hull, splintering wood and sweeping crew. They move with immense weight and menace — slow heavy rises and sudden violent whips, photoreal and terrifying, never small, toy-like, thin, rubbery or floaty, never CG, cartoon or game-engine.
The deck is full of panicking sailors running, shouting, slipping, grabbing ropes and scrambling from the tentacles in terror. On a hard storm beat one giant tentacle whips across the deck and seizes a crewman, coiling around him and yanking him off his feet and over the side into the black sea as the others scream — brutal, fast and visceral, and the hero recoils from it.
Light the whole frame under one storm look — man, crew, tentacles and ship all lit by the same cold dark blue-teal storm light, soaked and glistening, flashed by lightning, the same low-key exposure, color temperature, grade and grain, real rain and spray on everyone, the giant tentacles wrapped in the same rain, haze and aerial perspective so the far ones go hazier. Everything fully embedded, never pasted, never brighter or a different color temp than the storm. Keep the motion relentless and weighty: the ship heaving and tilting, water sheeting across the deck, foam and spray with real mass, ropes swinging, lightning flashing the rain, tentacles crashing with real force and splintering timber, the seized man yanked hard, the crowd in genuine panic.
Face and identity unchanged; the hero's movement, performance and timing identical to the source; the handheld camera, framing, lens, whips, turns, speed and cuts identical frame-for-frame; only the wardrobe, the environment and the added kraken are new. No on-screen text or watermark.
Diegetic SFX only: howling gale, relentless rain on deck, hood and timber, big waves crashing and foam hissing, hull and rigging groaning, ropes snapping, deep rolling thunder with sharp lightning cracks on each flash, massive wet booming slaps and slithering as the huge tentacles crash and coil, wood splintering, a deep subsonic monster groan from the deep, crew shouts and screams, the seized man's cut-off scream, the hero's strained breath and scrambling steps, all synced to the action and the lightning. No music, no dialogue beyond crew shouts and screams.
Two honest flags. This relights the hero into night — higher face-drift risk than a daytime source, so the identity/face locks are doing the heavy lifting; watch the face on the first take. And the storm look now rides entirely on the prose instead of the reference still — if a take loses the cold near-black teal mood, dropping one environment image back in as a mood-only reference is the reliable fix.
```

**Copy block: Copy this asset #2 — lesson text, generation prompt**

```text
This relights the hero into night — higher face-drift risk than a daytime source, so the identity/face locks are doing the heavy lifting; watch the face on the first take. And the storm look now rides entirely on the prose instead of the reference still — if a take loses the cold near-black teal mood, dropping one environment image back in as a mood-only reference is the reliable fix.
```

## Lesson 11 — No studio required: the recap

URL: https://higgsfield.ai/academy/courses/ai-vfx-real-footage/no-studio-required-the-recap

- Every shot = the same move: video-to-video in Seedance; real shot in, one change, one real anchor kept. "The iteration is the skill."
- The five rules:
  1. **Keep a real anchor** (face, hands, dashboard).
  2. **Watch your edges** - effects sit behind edges and cast real contact shadows, never pasted on top.
  3. **Respect parallax** - on a moving camera the new world travels at the right speed.
  4. **Change one thing at a time** - reads as transformation, not glitch.
  5. **Shoot for 4K** - holds detail and lip-sync, lets you crop.
- Start with the easiest: an object behind you. Four blockbuster shots from normal-camera clips; in a traditional pipeline ~a month with creature/tracking/environment teams.
