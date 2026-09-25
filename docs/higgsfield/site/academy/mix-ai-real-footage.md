# Mix AI with Real Footage

- **URL:** https://higgsfield.ai/academy/courses/mix-ai-real-footage
- **Taught by:** Higgsfield Creative (presenter: Adil)
- **Level:** Intermediate · **Modules:** 10 · **Duration:** 5 min
- **Description (paraphrased):** edit real footage with AI directly on a Premiere Pro timeline — remove/add elements, change wardrobe and backgrounds, build transitions, create new angles, reframe and upscale.
- **Skills:** set up the footage + plugin workflow; remove/add/replace elements, clothing, backgrounds without losing the plate; build transitions and extra angles, then reframe and upscale for delivery.
- **Tool:** the "Quixel plugin" for Adobe Premiere Pro (name as written on the page) with modes **Edit Video**, **Draw to Video** (mask brush), **Video Generation** (start + end frame), **Multi-shot/angles**, **Reframe**, **Upscale**.
- **Prompt pattern used in every video-edit prompt:** `@source` description of the plate → "preserve exactly" lock list → style line (Photoreal. 16:9. 6s/8s. Filmic look …; "replace only the world") → one-continuous-shot action paragraph with relighting instructions → "Face and identity unchanged" → separate "SFX only:" audio line.

---

## Lesson 1 — The Real-or-AI Challenge
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/the-real-or-ai-challenge
- Opening guessing game: cars, a house, a trashcan — half of each shot is real, half repainted (e.g. a car color flips red→white, a real trashcan with an AI background). All edits done on the Premiere timeline, not a separate pipeline.
- Subject of the course: what to do with footage you already shot (vs text-to-video).

Prompt 1 — convertible driver, background → volcanic dusk (Photoreal, 16:9, 6 s, SFX only):
```text
@source: Original clip — same young man driving a white car convertible with the top down, seatbelt on, talking and gesturing to camera, filmed from a cowl-mounted rig looking back at the driver, motion blur as the car moves. Subject, face, car, seatbelt, rig framing, camera position and driving motion — preserve exactly. Replace background environment only.
Photoreal. 16:9. 6s. Filmic look — volcanic dusk, deep oranges and crushed blacks, warm under-light, heavy ember haze. Preserve source subject, face, performance, car, seatbelt and camera move; replace only the world. SFX only.
Continuous shot from the same cowl-mounted rig, same framing and camera position as the source. The man keeps driving and talking to camera, gesturing, seatbelt on. The environment is fully replaced: the car races down a black basalt road across a volcanic plain at dusk. Glowing orange lava fissures crack the ground on both sides, streaming past with strong parallax, their molten light pulsing up onto the underside of his face, the seatbelt and the white paint from below. Embers and sparks drift and whip past the open cockpit. A burning orange glow sits on the horizon under a smoke-darkened sky, with slow heat shimmer and drifting volcanic haze. Blend his original warm low-sun key with the lava under-light so his skin tone holds. Face and identity unchanged.
SFX only: open-cockpit wind, deep engine rumble, low volcanic roar and distant rumble, sparks crackling past the cockpit.
```

Prompt 2 — same plate, background → road through golden sunset clouds (Photoreal, 16:9, 6 s):
```text
@source: Original clip — same young man driving a white car convertible with the top down, seatbelt on, talking and gesturing to camera, filmed from a cowl-mounted rig looking back at the driver, motion blur as the car moves. Subject, face, car, seatbelt, rig framing, camera position and driving motion — preserve exactly. Replace background environment only.
Photoreal. 16:9. 6s. Filmic look — natural grain, warm above-the-clouds golden light, ethereal, high dynamic range, soft contrast. Preserve source subject, face, performance, car, seatbelt and camera move; replace only the world. SFX only.
Continuous shot from the same cowl-mounted rig, same framing and camera position as the source. The man keeps driving and talking to camera, gesturing, seatbelt on, hair moving in the wind. The entire environment is replaced: the car races along a narrow ribbon of asphalt suspended in a boundless sea of golden sunset clouds. Towering cloud banks stream past on both sides and far below with strong parallax, wisps of vapor whipping over the windshield and past his shoulders. The low sun breaks through the cloud tops in warm volumetric god rays, raking his face and the white paint to match the source's golden-hour key exactly. Distant cloud canyons drift slowly for depth. Face and identity unchanged.
SFX only: wind rush over the open cockpit, low engine hum, soft airy ambience, faint whoosh of passing cloud.
```

Prompt 3 — hair-on-fire VFX on a locked-off ultra-wide talking shot (Photoreal, 16:9, 6 s):
```text
@source: Original clip — young man with curly dark hair, mustache, light pinstriped short-sleeve zip shirt, forearm tattoo, standing in front of a parked white car convertible on a curved overlook road at golden hour, talking to camera with animated two-handed gestures. Appearance, face, camera, motion and lighting reference — preserve exactly.
Photoreal. 16:9. 6s. Filmic look — natural grain, organic color, warm golden-hour grade, soft contrast. Preserve source subject, face, expression, gestures, camera, car and lighting; fire added as VFX. SFX only.
Static locked-off ultra-wide, same framing and slight barrel distortion as the source. The man keeps talking to camera and gesturing with both hands, smile unbroken, completely unfazed. In the first beat flames catch at the crown and race outward until his entire head of curls is ablaze — fire wrapping the whole scalp, every curl alight, tongues sheeting up and back off the crown and licking from the sides and back of his head. A full corona of flame haloes his head, flickering and trailing in the light breeze. Embers stream off in a constant shower, glowing orange and dying in the air above him; heat-haze shimmer warps the trees behind him. His whole head now reads as a light source — strong warm firelight rakes down his face, neck and collar and spills onto the white hood and windshield of the car behind him, pulsing on the glossy paint. The hair burns but holds its shape and silhouette, never charring away. Face and identity unchanged. Everything else — pose, delivery, golden-hour key, parked car, road and guardrail — identical to the source.
SFX only: a low whoomph as the hair catches and flares up, then a full steady flame roar and crackle, constant ember snaps, faint evening wind, ambient birdsong.v
```

Technique notes from these prompts:
- Name the rig and camera explicitly (cowl-mounted rig looking back at driver; static locked-off ultra-wide with slight barrel distortion) and say "same framing and camera position as the source".
- Tell the model how the new environment lights the subject (lava under-light blended with the original warm key so skin holds; god rays matching the golden-hour key; fire as a light source spilling on the car hood).
- Add parallax cues (fissures/clouds "streaming past with strong parallax") to sell motion.
- Constrain the effect ("the hair burns but holds its shape and silhouette, never charring away").

## Lesson 2 — Setting up the plugin
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/setting-up-the-quixel-plugin
1. On the plugin maker's site open **Plugins → Download**, run the installer steps.
2. In Premiere Pro: **Window → Extensions → Quixel Plugin**.
3. Sign in inside the panel (account needed to generate).

## Lesson 3 — Removing an object
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/removing-an-object
- Panel → **Edit Video** → select clip → type plain-language instruction (e.g. `remove the car`) → Generate → drop result onto the timeline replacing the original. Same shot and performance, object gone.

## Lesson 4 — Adding a new element
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/adding-a-new-element
- Adding a person: Edit Video + attach a **character sheet** of the new person (older version of the presenter) alongside the source clip; prompt can be as short as `add an old man`. Everything else in the plate stays locked.
- Adding creatures + an unfilmed camera move: the lizard example prepends a 1-second 300 mm telephoto shot of reptiles climbing the hotel tower, then a hard zoom-out landing 100% on the original composition, with the man's preserved lip-synced take. Uses a second reference image (real monitor lizard) marked "appearance only; ignore its background and lighting". Photoreal, 16:9, 8 s.
- Page also previews the next segment (handheld showcase: shooting each clip knowing what you want to see, then one prompt rebuilds the world — e.g. wing-walker on a biplane over floating mountains). Handheld is hardest: the effect must track angle, parallax and shake.

Keypoint prompt block (verbatim, includes the presenter's surrounding narration as it appears on the page):
```text
I didn't want the lizards just stuck behind me — I wanted a *reveal. *So I asked for a zoom-out first: tight on them climbing first, then pulling back to show me fully with the right lip-sync.
prompt snake
>>: Original clip — young man with curly dark hair and a moustache, rings on his fingers, wearing an open light grey pinstriped short-sleeve shirt over a black tee, standing in a sunlit rooftop parking lot in Almaty, gesturing and talking directly to camera; behind him the beige Hotel Kazakhstan tower with its crown-shaped top, a Soviet apartment block at left, parked cars and green trees, low handheld angle with a slow push-in, warm low-sun daylight. Preserve the man's identity, face, moustache, wardrobe, rings, performance and exact lip-sync, plus the framing, lens character and handheld motion of the original take exactly. Change only the background behind him: add many large reptiles climbing the hotel tower, and prepend a 1-second telephoto opening that snaps out to the original composition.
>>: Reference of a real large monitor lizard — pebbled scaly skin, long claws, heavy tail, true reptile anatomy. Appearance, scale-texture and color reference only; ignore the photo's background and lighting, do not use it for the environment.
Photoreal. 16:9. 8s. Warm low-sun evening daylight, soft long shadows, gentle film grain — grade matched to the source plate. NON-IP — generic large monitor lizards, not based on any brand or character. SFX and source dialogue only.
One continuous shot, no cuts. For the first 1 second hold on a long telephoto lens (~300mm look, compressed perspective) framed tight on the upper facade of the beige Hotel Kazakhstan tower: dozens of large photoreal monitor lizards, each roughly car-sized, swarming up the building en masse — claws hooking window ledges and concrete, heavy tails dragging, pebbled scales catching the low sun, bodies overlapping as they crawl higher, real soft-edged contact shadows on the facade. At the 1-second mark the camera snaps a hard, fast zoom-out / quick pull-back, decompressing perspective and craning down to land exactly on the source composition — a 100% match of the original framing: the low handheld angle with the man in the foreground, tower behind, same headroom and horizon. From 1 second onward play the man's preserved take: he speaks directly to camera, lips matching the source exactly, saying clearly: "I can put something behind me that definitely shouldn't be there. Insane right?" — keep his performance, gestures, timing and lip-sync precisely as in the source, smiling and completely unfazed and oblivious to the creatures, while the source's own slow handheld push-in continues. Behind him the lizards keep steadily climbing the tower for the rest of the shot, more of them crawling into frame on the facade. Keep the lizards integrated into the plate: same warm key from screen-right and same color temperature as the man, real contact shadows where claws grip, matching atmospheric haze and depth of field so they sit at true distance, fully photoreal real scale detail and true reptile anatomy, never CG, plastic or cartoonish. Lock-down: the man's face, identity, moustache, wardrobe, rings, expression, gestures and lip-sync are unchanged; from 1s onward the framing, lens and handheld push-in are a 100% exact match of the source — only the lizards on the tower are added.
SFX and source dialogue only: open with a quick burst of distant claw scrapes and scuffs on concrete and glass and scattered low reptilian hisses over faint city ambience; at the 1s zoom-out the man's preserved voice comes in and stays dominant — "I can put something behind me that definitely shouldn't be there. Insane right?" — the scrapes and hisses continuing softly underneath, a low structural rumble far in the background.
Let’s see what we got.
That's how you add something into your shot — plus a camera move you never filmed.
Now let’s move to the one you've been waiting for, and the hardest thing we'll do all video: the handheld cinematic showcase. The kind of big-budget CGI shots that normally need a whole studio.
This is the hardest one so far. On a locked-off or steady shots we have already seen, the AI has it easy — the frame barely changes, so it just paints the effect in. But the second the camera's in your hand, everything's moving chaotically — the angle, the parallax, the shake — and the effect has to track all of it without falling apart. That's this stage: fully handheld, me and the camera moving the whole time. And here's the whole trick: I shoot each clip already knowing what I want it to see in it, then one simple prompt rebuilds the entire world around me. Same clip in, a different planet out. Let’s see the first one
**Wing-walker on a biplane**
I start simple — change my wardrobe and drop me somewhere that couldn't exist: a wing-walker on a flying biplane over floating mountains.
I have this one prompt
prompt 1 wing walker
```

## Lesson 5 — Changing clothing
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/changing-clothing
- Switch to **Draw to Video**, paint a mask over the person; only the masked area changes. Type the wardrobe change (pajamas) → Generate. Outside the mask stays untouched.
```text
Mask brushed directly over Adil in the frame using Draw to Video; only the area under the mask
changes, everything outside it stays untouched. Face, identity, body stance, movement, timing,
expression, camera position and framing all identical to the source — only the wardrobe changes.
No on-screen text or watermark.
And let's type change the outfit to pajamas.
All right, and back to normal clothes to keep going.
```

## Lesson 6 — Swapping the background
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/swapping-the-background
- Back in **Edit Video** (not Draw to Video). Describe the new setting, view and time of day. Page example: daytime palm-lined street → hillside overlook at sunset; subject, framing, performance kept.
- Prompt shown: convertible → neon-lit rainy downtown at night, with a full relight instruction (magenta/cyan spill, cool rim) (Photoreal, 16:9, 6 s):
```text
@source: Original clip — same young man driving a white car convertible with the top down, seatbelt on, talking and gesturing to camera, filmed from a cowl-mounted rig looking back at the driver, motion blur as the car moves. Subject, face, car, seatbelt, rig framing, camera position and driving motion — preserve exactly. Replace background environment and time of day.
Photoreal. 16:9. 6s. Filmic look — night, neon-lit, wet reflections, magenta-cyan palette, high contrast, deep blacks. Preserve source subject, face, performance, car, seatbelt and camera move; replace only the world and the lighting. SFX only.
Continuous shot from the same cowl-mounted rig, same framing and camera position as the source. The man keeps driving and talking to camera, gesturing, seatbelt on. The environment is fully replaced and time shifts to night: the car cruises a rain-wet downtown street walled with dense neon — Japanese signage, glowing storefronts, holographic billboards — all streaking past in long light trails with strong parallax. Wet asphalt mirrors the neon; coloured reflections and bokeh slide across the white paint and windshield. Relight the driver for night — magenta and cyan neon spill washing over his face from the sides, a cool rim edging his hair and shoulder, skin kept readable against the dark. Oncoming headlights and tail-light streaks flare past. Face and identity unchanged.
SFX only: open-cockpit wind softened by the city, low engine hum, distant traffic and muffled bass, occasional passing-car whoosh, faint rain hiss on asphalt.
```

## Lesson 7 — Building a transition
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/building-a-transition
- Mode: **Video Generation** with a **start frame and end frame** (last frame of outgoing shot, first frame of incoming). Short prompt describing the kind of transition → Generate; the model invents the bridging motion.

## Lesson 8 — Creating multiple angles
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/creating-multiple-angles
- From one filmed take, ask in a single prompt for a multi-shot with two new camera angles (left side, lower angle). You can switch to either new angle or revert to the original.

## Lesson 9 — Reframing for social
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/reframing-for-social
- **Reframe** converts aspect ratio; several formats can be generated at once (example: 9:16, 4:3, 21:9). In the example 9:16 read too narrow; 21:9 chosen.

## Lesson 10 — Upscaling old footage
URL: https://higgsfield.ai/academy/courses/mix-ai-real-footage/upscaling-old-footage
- Select clip → **Upscale**. No prompt, reference or character sheet needed (e.g. old phone footage).
- Full toolkit recap: remove object, add element, change outfit, swap background, transition, multiple angles, reframe, upscale — all inside Premiere.
