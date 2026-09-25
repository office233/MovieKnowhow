# Kling 3.0 on Higgsfield

Sources: https://higgsfield.ai/kling-3.0, https://higgsfield.ai/kling-30-community (30 community publications with full prompts + settings embedded in page data).

## Specs
- Up to **15 s** per generation with free (per-second) duration control; community examples use 5-15 s, mostly 6-10 s, 1080p, 16:9, sound on.
- **Multi-shot storyboarding**: up to 6 camera cuts in one generation; define shot size, perspective and camera move per segment; shot-reverse-shot handled automatically.
- **Omni native audio**: dialogue, SFX, ambience generated with video. **Voice Binding** locks a voice to a character; 5 languages (English, Chinese, Japanese, Korean, Spanish) incl. accents (American/British/Indian English); characters can speak different languages in one scene.
- **Element Consistency**: upload an image or video of a character -> face, posture, clothing and voice locked across shots.
- Physics-aware motion (cloth, hair, fluids, collisions, weight transfer).
- Other Kling variants on the platform: Kling 3.0 4K, Kling 3.0 Omni Edit (text-prompt video editing, exclusive to Higgsfield; default widget `Kling 3.0 Omni Edit 5s 1:1` on edit tool pages), Kling O1 / O3 (reference + start/end frame editing), Kling 3.0 Motion Control (transfer motion from a reference video onto a still, up to 30 s), Kling 2.6 (audio), Kling 2.5 Turbo.
- API list price Kling 3.0: $0.084/s (launch $0.0462/s). Credits: ~20 credits for 8 s 1080p (blog Sept 2026, ~$1.00).
- Site recommendation pattern: "Kling is best for lip-sync / presenter / multi-character dialogue".

## What the 30 community prompts teach (patterns observed)
- **Locked-camera tracking**: "Camera rigidly locked to X (the bag / the falcon's head / the car chassis) ... X stays centered while the world rushes past" - produces strong POV/object-cam shots.
- **Start-frame I2V discipline**: all 30 used an input image; many begin "Use the provided image as the exact starting frame" and then state "single continuous shot, no cuts, no transitions" when they want one take.
- **Timed shot blocks**: "SHOT 1 - ONBOARD GRIP (0-2 seconds) ... SHOT 2 ..." with lens (16-24 mm), mount position and motion-blur notes per block.
- **"Shot 1: / Shot 2:" multi-shot lists** for 6-10 s pieces (rollercoaster, fights, car chases).
- **Speed language**: "real-time, no slow motion, no speed ramps, no easing" when they want energetic realism.
- Physical detail cues (whitening knuckles, paper creasing, splashing puddles) sell realism.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Kling 3.0 - The Most Advanced AI Video Model / Higgsfield | https://higgsfield.ai/kling-3.0 | 0 |
| Higgsfield Kling 3.0 Community: explore AI video generation from creators worldwide | https://higgsfield.ai/kling-30-community | 30 |

## Verbatim prompts (30)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P158 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 6; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Low-angle wide-angle tracking shot focused on a crumpled brown paper bag held tightly in a man’s hand. The camera is rigidly locked to the bag with precise tracking — the bag stays centered and stable while the world rushes past. The man is running away from someone, sprinting forward; his arm pumps hard, aggressive vertical and lateral motion transferred directly to the bag. Strong grip, whitening knuckles, paper creasing and vibrating from speed.
```

### P159 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 6; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Head-tracking flight shot of a peregrine falcon. Camera locked to the bird’s head at a close ultra-wide angle (same angle throughout). The falcon flies forward, weaving around trees and branches, clean precise tracking keeps the head centered, wings visible at the edges. After the midpoint, the falcon suddenly accelerates and dives to attack prey below — sharp forward surge, controlled bank, rapid closing distance. No gore.
```

### P160 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 7; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Use the provided image as the exact starting frame.
Cinematic video, single continuous shot, duration 5–7 seconds.
Single take. No cuts. No transitions.

CAMERA & ACTION (CONTINUOUS MOTION)
The camera starts static, framing a turntable in warm analog studio light.
A human hand lowers the tonearm onto a spinning vinyl record.
The record begins rotating smoothly.
Immediately after contact, the camera accelerates forward in one continuous movement,
a fast, rigid robot-bolt push-in directly toward the stylus needle.
No easing. No cinematic zoom.
Pure mechanical forward motion.
As the camera reaches extreme macro distance, it locks onto the needle tip,
as if physically bolted to it, without any cut.
From this moment on, the camera moves together with the needle, perfectly synchronized.

MACRO DETAIL (SAME SHOT)
Extreme macro view shows:
Stylus tip vibrating microscopically
Vinyl grooves flowing beneath
Dust particles, micro scratches, groove texture
Subtle vertical and lateral needle movement, physically accurate
The camera remains rigidly attached, only tiny micro-vibrations from groove friction.

SOUND DESIGN (DOMINANT, CONTINUOUS)
Sound is uninterrupted and dominant:
Needle drop click
Loud, authentic vinyl crackle and hiss
Stylus-on-groove friction
Low mechanical hum of the turntable
No music clarity at first — raw analog texture only.
No score. No digital effects.

VISUAL STYLE
Extreme macro cinematography
Ultra-shallow depth of field
Warm analog color grading
Natural reflections on vinyl
Subtle film grain

CAMERA RULES
One continuous take
No cuts, no edits, no montage
No handheld shake
No floating camera
Robo-cam, bolt-mounted feel only

END FRAME
Camera stays locked to the needle,
vinyl spinning endlessly beneath it,
hypnotic, mechanical, intimate.
```

### P161 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
A cinematic, high-speed car chase at night on a wet city street during a rainstorm. The camera is mounted on the front hood of a police car, capturing the flashing red and orange emergency lights in the foreground.
A silver sedan is seen speeding away through traffic, splashing through puddles. The police car accelerates, weaving through the wet streets to catch up. The chase reaches a climax when the silver sedan loses control, clips another vehicle, and flips over spectacularly in mid-air, spinning toward the camera amidst a spray of water and debris. The lighting is dramatic, with city neon and streetlights reflecting off the wet pavement.
```

### P162 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 5; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
A gritty, cinematic fight scene in a modern, dimly lit hotel corridor with grey concrete walls and dark wooden doors. The scene is illuminated by glowing red vertical neon lights.
A man in a white dress shirt and black trousers is in a defensive stance over a person lying on the floor. Suddenly, an attacker enters from the right, swinging a wooden baseball bat. The man in the white shirt quickly blocks the strike, grabs the attacker, and delivers a powerful knee strike to the midsection before pushing him back against the wall. The camera follows the movement with a steady, high-tension tracking motion.
```

### P163 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Cinematic, high-action footage of an American football game at night under bright stadium lights. A close-up, low-angle tracking shot of a focused football player in a black and gold uniform sprinting down the field. Dirt and sweat are visible on his face and jersey.
The player being tackled by an opponent in a white uniform. The impact is heavy, with grass and dirt flying into the air. The player’s upper body as he breaks through the tackle, clutching the football tightly. He continues to run with intense determination. The player successfully dodging another defender, moving with speed and agility toward the end zone.
```

### P164 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
POV video from the perspective of a billiard ball on a pool table inside a dim, smoky billiard club. A focused male player leans in and strikes the ball with a cue. At the moment of impact, the camera becomes the ball, rolling straight toward a corner pocket across the green felt. Realistic rolling motion with subtle vibration and spin, low table-level angle, natural edge motion blur. Warm overhead lamps stretch into soft light streaks as the camera advances. Strong parallax as table rails and background players slide past. The pocket rapidly fills the frame — then the ball drops into the pocket, brief darkness, soft impact, and muffled ambient sound implied.
```

### P165 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Use the provided image as the exact opening visual reference.Cinematic racing video, duration 8–12 seconds.SHOT 1 — ONBOARD GRIP (0–2 seconds)Camera is rigidly mounted to the race car chassis, identical angle and position as the reference image.Low, centered nose-mounted camera, wide-angle lens (16–24mm).The car enters the pit lane at speed, decelerating hard.Track lines and pit lane markings streak past with motion blur.Subtle mechanical vibration only, no handheld movement.SHOT 2 — PIT ENTRY IMPACT CUT (2–3 seconds)Hard cut to front three-quarter low angle as the car snaps into its pit box.Brakes glow faintly, tires screech, pit crew already in motion.Sound peaks: engine downshift, air guns spinning up.SHOT 3 — RAPID PIT STOP MONTAGE (3–7 seconds)Fast, aggressive editing. No slow motion.Extreme close-up: pneumatic wheel gun slams into lug nut, sparks and vibration.Macro shot: tire comes off, rubber dust and heat shimmer visible.Low side angle: fresh tire slammed on, mechanic’s gloved hands blur with speed.Top-down micro shot: jack lifts the car, carbon fiber flexing slightly.Wide pit crew shot: all four corners moving in perfect sync.Camera styles vary:macroultra-lowshoulder-height pit wallwhip pans between actionsLighting is harsh pit-lane daylight, high contrast, realistic shadows.SHOT 4 — RELEASE (7–9 seconds)Close-up on front jack dropping.Lollipop man or signal light snaps green.Engine revs spike violently.SHOT 5 — EXIT & FINAL CAMERA (9–12 seconds)Cut to static low rear-angle camera, placed near the ground in the pit lane.The car launches forward, blasting past the camera.Rear diffuser, spinning tires, heat distortion visible.The car drives away into the track, shrinking into the distance.Camera remains fixed, watching the car exit frame.
```

### P166 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 7; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: anime/animation

```text
Shot 1: A medium shot from behind the head of a blonde woman as she sits in a rollercoaster car. The sky is a vibrant, deep pink and orange sunset. She suddenly turns her head to the side with an expression of intense shock and terror.
Shot 2: A close-up, front-facing shot of the woman in the rollercoaster car. Her hair is blowing wildly in the wind, and her eyes are wide with fear as she screams. The background shows the high-speed motion of the ride against the sunset sky.
Shot 3: A first-person perspective (POV) shot from the front of the rollercoaster as it rapidly ascends a steep, metal track. Below, an amusement park is visible under the glowing evening sky.
Shot 4: A POV shot as the rollercoaster track transforms into a soft, pink fuzzy material. The coaster climbs a bright green, rounded hill populated by a flock of white, fluffy sheep. The sky is bright blue with stylized pink clouds.
Shot 5: A POV shot of the rollercoaster speeding through a futuristic, dark tunnel illuminated by concentric rings of glowing white and pink neon lights. The motion is extremely fast and dizzying.
Shot 6: A POV shot as the rollercoaster emerges into a hyper-realistic New York City street during golden hour. The track runs perfectly straight down the center of the avenue, flanked by towering skyscrapers, with the sun setting directly at the end of the street.
Shot 7: A transition into an anime-style illustration. The woman, drawn in a classic 90s anime aesthetic, is standing up in the moving coaster car with her arms raised in the air. She is screaming in excitement/terror as the sun rays burst behind her and the city skyline.
```

### P167 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 9; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: An interior medium-wide shot in a brightly lit, modern white-tiled bathroom. A blonde woman wearing a red and blue striped silk robe and fuzzy orange slippers suddenly falls from above, landing awkwardly on a red patterned rug on the floor. She looks disoriented and scrambles to sit up, her expression a mix of pain and confusion.
Shot 2: A low-angle close-up shot of a muscular Black man sitting in a bathtub filled with thick white soap suds. He is wearing a pink floral shower cap and holds two yellow rubber ducks in his large hands. He looks up with a startled, wide-eyed expression as foam clings to his shoulders.
Shot 3: A medium shot of the woman in the striped robe standing in the bathroom. She has a panicked expression, holding her index finger to her lips in a "shush" gesture, whispering, "Shhh... just calm down," while looking at something off-camera.
Shot 4: A cinematic wide shot from behind a giant, furry creature overlooking a sprawling modern metropolis with skyscrapers and water. The camera reveals it is a massive, Godzilla-sized river otter standing on its hind legs. Floating in the air directly in front of the otter's face is the blonde woman in her robe and orange slippers, appearing tiny in comparison.
Shot 5: A dramatic, wide-angle tracking shot circling the scene. The giant otter looks curiously at the tiny woman hovering in mid-air. The background features a high-altitude view of a city similar to Dubai, with the sun casting long shadows across the buildings and rivers below.
```

### P168 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 15; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: music video

```text
Shot 1: High-intensity handheld tracking shot. A young woman with disheveled blonde hair, wearing a white tank top under a vibrant red and blue vertical-striped silk robe, bursts out of a shadowy alleyway. Her face is a mask of pure panic as she stumbles onto a sun-drenched Manhattan sidewalk, the camera shaking to mirror her frantic movements.
Shot 2: Medium shot, shallow depth of field. A middle-aged businessman in a charcoal suit and navy tie stands amidst a sea of pedestrians. He checks his silver watch with a sharp, rhythmic jerk of his wrist, his brow furrowed in annoyance. The background is a blur of yellow taxis and the towering architecture of 5th Avenue.
Shot 3: Extreme macro photography. The camera focus is locked onto the tip of a silver watch hand as it clicks forward. Microscopic dust motes dance in the harsh sunlight reflecting off the brushed metal surface of the dial.
Shot 4: Low-angle medium shot. Rapid-fire motion of a street drummer’s hands hitting a series of weathered white plastic buckets. The wooden drumsticks are a blur of motion, and the camera captures the vibration of the plastic lids as the city crowd flows past in a time-lapse-like stream.
Shot 5: Low-angle medium shot. The woman in the striped robe has stopped running; she is hunched over, hands on her knees, gasping for breath. The camera remains low, making the surrounding skyscrapers feel like they are closing in on her as she looks around, disoriented.
Shot 6: Macro close-up, high contrast. A man’s stubbled face as he inhales from a cigarette. The paper crinkles and the tobacco glows a fierce, molten orange before instantly turning into a delicate, flaky grey ash that threatens to fall.
Shot 7: Extreme close-up of the woman's face, focusing on her piercing blue eyes. Her pupils are dilated, and her forehead is deeply wrinkled with anxiety. The reflection of the busy street and moving vehicles can be seen glinting in her irises.
Shot 8: Medium-wide lifestyle shot. Two young Asian women walk across a city crosswalk, bathed in warm afternoon "golden hour" light. They are laughing and talking, creating a sharp emotional contrast to the previous shots of distress.
Shot 9: Final tight close-up. The blonde woman stares directly into the lens, her expression shifting from confusion to absolute shock. She slowly brings her hand up, her fingers trembling, to cover her mouth as her eyes well up with fear.
```

### P169 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 5; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Ultra-realistic live-action cinematic video shot starting on a close-up of a smiling man lying on grass, camera slowly pushing forward toward his sunglasses, reflections in the lenses already showing fiery meteors racing through the sky and exploding mid-air, no static reflection. The camera continues a smooth, uninterrupted dolly straight into the glasses without changing angle or direction, no portal effect, no cut, the reflection seamlessly becomes reality. As the camera passes through the glass, the exact same forward trajectory and framing are preserved and we are now fully inside the sky, flying directly toward the incoming meteors. Hard, aggressive handheld motion begins immediately after the transition, dynamic shake with realistic inertia while maintaining a consistent forward vector. Flaming meteors roar past the camera, some narrowly missing the lens, others exploding with shockwaves and debris, all motion physically plausible with strong motion blur and scale. Cinematic lighting from burning meteor trails illuminates clouds and atmosphere, deep contrast, high dynamic range, volumetric smoke and fire. Natural lens behavior with subtle distortion, flares, rolling highlights, filmic color grading, ARRI Alexa look, grounded realism, no CGI feel, no stylization, one continuous shot, 24fps, intense cinematic spectacle.
```

### P170 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 7; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
A continuous, low-angle cinematic tracking shot on a hockey rink, keeping a black hockey puck in sharp focus in the center of the frame. The camera moves at high speed across the scratched, glistening ice surface, capturing the fine details of the frost and blade marks. In the background, a hockey player in a red, white, and blue jersey strikes the puck, and the camera follows its rapid trajectory toward the goal. The background is beautifully blurred with a shallow depth of field, showing a massive, brightly lit arena packed with a cheering crowd and vibrant stadium lights. As the puck slides, the scene captures the intense atmosphere and the motion blur of opposing players and the goalie diving to make a save in the distance. The lighting is crisp and professional, emphasizing the cold, atmospheric texture of the ice and the fast-paced energy of a professional match.
```

### P171 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 7; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: A wide, cinematic shot of a professional boxing ring under intense arena lights. Two boxers, one African American in red gloves and one Caucasian in black shorts, are engaged in a fierce exchange of punches in the center of the ring while a referee watches closely.
Shot 2: An extreme close-up of the African American boxer's face, showing his intense concentration and sweat as he throws a powerful right hook directly toward the camera.
Shot 3: A medium side-profile shot of the Caucasian boxer, showing blood dripping from his nose as he reacts to a heavy blow.
Shot 4: A low-angle, slow-motion shot from the perspective of the falling boxer, showing the opponent's glove making contact followed by a rapid tilt toward the ceiling lights as he falls to the canvas.
Shot 5: A final POV shot from the canvas, looking up through a blurry, dazed lens at the bright overhead arena lights and the cheering crowd in the dark background.
```

### P172 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
POV flight from a golden eagle soaring over vast mountainous steppe landscapes. Camera locked to the eagle’s head with clean, precise tracking — stable forward motion, no jitter. The eagle actively flaps its wings, powerful wingbeats transitioning into smooth gliding. Wings and feathers visible at the frame edges, moving naturally in rhythm. Strong ground parallax below: winding rivers, open valleys, rocky peaks. Bright late-afternoon light, crisp air, subtle lens flare. Ultra-wide cinematic perspective, natural motion blur from speed only, realistic flight physics, continuous shot, no cuts.
```

### P173 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: An extreme close-up of a young woman's mouth, her teeth clenched on a wooden toothpick, creating a tense and gritty atmosphere.
Shot 2: A medium shot of the woman in a traditional Japanese-style courtyard at night, illuminated by soft lanterns. She is dressed in a white tank top and dark trousers, holding a katana in a defensive stance with a determined look on her face.
Shot 3: A dynamic, low-angle action shot of the woman jumping high into the air, raising her katana to strike a wooden training dummy that resembles a samurai in armor.
Shot 4: A close-up, high-speed impact shot showing the woman’s katana slicing through the wooden dummy, sending wood splinters and dust flying into the air.
Shot 5: A fast-paced tracking shot of the woman landing gracefully and immediately striking another wooden structure, demonstrating her speed and precision.
Shot 6: A final medium close-up of the woman’s face as she finishes her move. She is slightly breathless, her hair disheveled, with a sharp, focused gaze directed off-camera.
```

### P174 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 6; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: A side profile, medium shot of a muscular African American man in athletic wear, intensely dribbling a basketball on an outdoor concrete court towards a hoop against a high white wall under a bright blue sky.
Shot 2: A dynamic, low-angle wide shot showing the man jumping remarkably high into the air, performing a backflip while holding the basketball, with the white wall and sky in the background.
Shot 3: A close-up, slow-motion shot of the man mid-air and upside down during his flip, showing his focused expression and the basketball held firmly in his hands against the sky.
Shot 4: A dramatic, low-angle shot focusing on the basketball hoop as the man, still upside down from his acrobatic jump, powerfully dunks the ball into the net.
```

### P175 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 6; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Ultra-realistic cinematic macro shot of a vintage wristwatch held between two fingers, extreme close-up framing focused on the watch face and crystal, with the camera positioned inches away to reveal fine dust particles, micro scratches on the glass, worn metal edges, engraved numerals, and subtle patina on the hands. Shallow depth of field isolates the dial while the background dissolves into soft, dark bokeh. The lighting is moody and directional, a single warm key light grazing the surface to create delicate reflections along the curved crystal and metallic rim, emphasizing texture and age. The second hand moves subtly, creating a sense of quiet tension and time passing. Skin texture of the fingers is visible at the edges of the frame, slightly out of focus, adding scale and realism. High contrast, cinematic color grading, soft film grain, precise focus breathing, and a tactile, intimate macro perspective that feels handcrafted and timeless.
```

### P176 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: A cinematic medium shot of a woman with a blonde bob and oversized sunglasses sitting in the back of a vintage convertible driving down a sunny Las Vegas street. Neon signs for "Golden Nugget" and "Fremont" are visible in the background. The camera pans slightly to the left as she looks over her shoulder at a dark blue sedan following closely behind.
Shot 2: An interior shot from the passenger seat of a vintage car, focusing on a man in a brown suit and tie driving with a serious expression. He is smoking a cigar, and a puff of smoke hangs in the air as he steers through a city intersection.
Shot 3: A low-angle, close-up tracking shot of the front wheel of a dark blue sedan spinning rapidly as it drives down an asphalt city road.
Shot 4: A dynamic tracking shot from a low angle following a dark blue 1980s-style sedan as it makes a sharp right turn through a city intersection. The background features vintage storefronts and urban architecture under bright daylight.
```

### P177 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Create a 10 second ultra-realistic high-speed chase shot with the camera physically gripping the animal’s tail, as if mounted or tightly held, maintaining a locked trailing perspective. The tail fills the foreground, muscles flexing and skin rippling under strain, fur vibrating from speed and airflow.The animal accelerates into a full sprint across the grassy field. Motion is extremely fast but physically accurate: powerful hind-leg extensions, visible spine compression and release, tail counterbalancing each stride. Grass bends, flattens, and snaps back under impact; dirt and small debris kick up naturally. The horizon shakes subtly from ground force, not artificial camera shake.Camera behavior: intense forward velocity with strong motion parallax in the background, but the tail remains relatively stable in frame due to the grip. Micro-oscillations sync perfectly with each stride cycle. Wind noise roars; fur flutters backward consistently with speed. Lighting stays natural and continuous, shadows strobing rhythmically beneath the body as legs cycle.No slow motion, no cuts, no stylization. Pure kinetic realism — raw speed, real biomechanics, real inertia — ending mid-sprint with maximum momentum still building.
```

### P178 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
A continuous, wide-angle shot of a dimly lit bedroom and home studio where a young woman is sitting on a bed, bathed in shafts of light from the windows. Suddenly, a massive explosion occurs outside, causing the room to shake violently as birds scatter and debris flies past the windows. The camera pans and shakes as the windows shatter inward, sending shards of glass and dust across the music equipment, including a keyboard and studio monitors. Sparks fly from the electronics and small fires ignite on the desk as a towering fireball and thick black smoke consume the view outside the broken window frames. The shot ends with the ceiling beginning to collapse and the room being engulfed in a thick cloud of gray dust and chaotic debris.
```

### P179 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 12; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: A profile medium shot of a woman in a dark coat standing under an overhang during a rainstorm in a city. She lights a cigarette with a lighter, the orange flame illuminating her face against the cold, blue architectural background of a city street.
Shot 2: A rapid, blurred tracking shot following a motorcycle speeding past old brick buildings. The camera is low and shaky, capturing the sense of extreme speed.
Shot 3: A low-angle ground shot as a motorcycle speeds through a narrow alley. Small explosions and debris burst from the sides of the buildings as the bike passes, filling the air with dust and smoke.
Shot 4: A close-up, low-angle shot from the rear of the motorcycle, focusing on the rider’s boot and the mechanical chain as they accelerate. In the background, a large fireball explosion erupts on the city street.
Shot 5: A wide shot of two motorcyclists in helmets and leather jackets weaving through city traffic. Small fire bursts erupt from manholes and the pavement around them as they flee through heavy smoke.
Shot 6: A dramatic wide shot of a motorcyclist driving directly toward the camera. Behind them, a massive explosion occurs, causing a large portion of a building facade to collapse in a shower of sparks, fire, and heavy gray smoke.
```

### P180 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: Side profile medium shot of a Black man with an afro, mustache, and vintage sunglasses sitting in a beige 1970s sedan. The car is parked on a sun-drenched city street with retro storefronts and pedestrians in period-accurate clothing walking by in the background.
Shot 2: A close-up reflection in the car's rearview mirror showing the man's eyes behind his sunglasses as he looks ahead with a calm expression.
Shot 3: A low-angle interior shot focusing on the driver's profile as he looks out the window, followed by a close-up of his hand shifting the wooden gear stick into drive.
Shot 4: A wide front-facing shot of the car pulling away from the curb. The camera zooms in smoothly on the front grille and then cuts to a close-up of the rear license plate which reads "HIGGS" on a weathered, yellowed plate.
```

### P181 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Create a 8 second ultra-dynamic, real-time cinematic POV shot with no slow motion, no speed ramps, no easing — everything happens brutally fast.The camera is positioned as our POV inside the boxing ring, facing him at head height. Without warning, he launches forward explosively and throws a savage punch straight into the camera. The red glove slams into the lens in a split second, filling the frame.On impact, the camera gets knocked backward violently — we lose balance and fall hard onto the canvas. The fall is chaotic and physical: rapid backward drop, slight uncontrolled roll, ropes and lights streaking past due to speed, then a heavy crash onto the floor. No stylization — just raw force.At the exact moment we hit the ground, a massive explosion erupts behind him in the ring. A violent flash of light, shockwave, debris, dust, and smoke burst outward. Ring lights flicker, the background blows out briefly, particles rush toward the camera.He remains standing in front of the explosion, untouched.Final beat: the camera is on the ground looking up (top-shot POV). He steps into frame, backlit by fire and smoke, towering above us. He looks straight down into the lens and breaks into an unhinged, hysterical laugh — loud, manic, echoing. His shoulders shake slightly as he laughs, enjoying the chaos.Lighting: extreme contrast — fiery backlight from the explosion, harsh rim light on his body, dark foreground.Sound (mandatory if supported): glove impact “THUD”, rushing air during the fall, explosive blast, then raw hysterical laughter dominating the end.Hard constraints: no slow motion, no cuts, no transitions, no morphing, no deformation, no exposure flicker. End with him laughing above us as smoke and debris drift through the frame in real time.
```

### P182 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Ultra-realistic cinematic video, one continuous uncut shot. A woman with a model-like appearance fills the frame in an extreme close-up, her face centered and locked to the camera in a raw snorricam-style setup, as if the camera is rigidly attached to her body. She is screaming at full intensity, mouth wide open, eyes stretched in panic, breath visible in subtle micro-movements of her jaw, lips, and throat. The background is a forest or wooded area that smears into heavy motion blur and streaks of green and brown, suggesting rapid forward movement or frantic running, while her face remains sharp and grounded.
```

### P183 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
A raw, cinematic single continuous close-up shot of a young woman with short dark hair outdoors at night. The scene captures an intense emotional breakdown: she starts by throwing her head back in a visceral, soul-piercing scream, her face strained and glistening with sweat and tears. As the camera remains fixed on her, her expression shifts fluidly from agonizing grief to a haunting, hysterical laugh, and back to deep, sobbing desperation. Warm, flickering orange light (as if from a nearby fire) illuminates her face against a dark, blurred background, highlighting every tremor in her lips and the tears streaming down her cheeks. The camera follows her movements slightly, maintaining a tight, intimate focus on her raw vulnerability throughout the entire sequence.
```

### P184 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 10; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Shot 1: A low-angle shot of a spinning race car wheel at night. The camera is secured by a heavy-duty suction cup car mount (rig grip) directly to the lower side panel of the chassis. This hard-mounted grip captures the raw vibration and high-speed rotation of the tire while keeping the car body perfectly stable in the frame.
Shot 2: A dynamic tracking shot from the side of the car. The camera is attached via a side-door camera rig, looking forward toward the track. The rigid grip allows the camera to stay locked onto the car's perspective as it maneuvers through curves, making the background lights appear as high-speed streaks while the vehicle remains sharp.
```

### P185 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 6; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: cinematic film scene

```text
Extreme close-up macro shot of a professional tattoo artist's hand in a black surgical glove working on a detailed lighthouse tattoo. The scene begins with a close-up of a man's upper arm, showing a realistic black and grey lighthouse design with stormy waves at the base. As the camera smoothly zooms in to an intense macro view, the tattoo needle is seen rapidly vibrating and injecting dark ink into the skin, creating precise shading on the lighthouse tower. Fine droplets of ink and plasma are visible on the skin's surface. The lighting is warm and cinematic, highlighting the texture of the skin, the fine hairs on the arm, and the metallic glint of the tattoo machine. The background is softly blurred, focusing all attention on the intricate craftsmanship and the rhythmic motion of the needle.
```

### P186 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 8; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: product ad

```text
Ultra-realistic cinematic live-action car chase at night in a rainy city. The camera is rigidly mounted on the roof of a police car next to the flashing light bar, completely static relative to the vehicle — no camera rotation, no handheld shake, no detachment. Heavy rain pours down, water streaks across the lens, neon city lights and traffic signals reflect off the wet asphalt. A fleeing car is centered ahead in frame, speeding through the city streets. The police car accelerates aggressively, engine power implied through forward motion and vibration of the environment while the camera itself remains locked in place. The suspect vehicle suddenly enters a sharp corner and initiates a high-speed drift, rear sliding wide, tires throwing up water spray. The police car immediately follows into the same corner, entering a matching drift with precision, maintaining pursuit angle and closing the gap during the slide. Both cars drift through the turn in parallel, streetlights and buildings streaking past laterally. Mid-drift, the police car gains rapidly and slams into the suspect vehicle with a powerful side impact. At the exact moment of collision, time drops into dramatic slow motion: metal crumples, glass shatters, sparks explode, rain droplets hang in the air. The suspect car lifts off the ground, rolling and flipping through the air in an epic cinematic arc, under flashing red and blue police lights and glowing city reflections. The camera remains locked to the police car roof throughout, observing the crash head-on without movement. Ultra-realistic physics, grounded vehicle behavior, heavy mass and momentum, cinematic lighting, filmic color grading, no CGI look, no logos, no text, 24fps.
```

### P187 - Kling 3.0 community publication

- Page: https://higgsfield.ai/kling-30-community | Model: Kling 3.0 | Settings: duration s 11; aspect 16:9; quality 1080p; sound true; enhance false; start frame image supplied | Use-case: product ad

```text
Shot 1: A wide side-profile shot of a muscular Black male athlete in a tan tank top and shorts sprinting intensely on a red running track at an outdoor stadium. The camera follows his movement (tracking shot). He slows down to a walk, breathing heavily with sweat glistening on his skin under the bright midday sun.
Shot 2: A low-angle close-up shot of the athlete looking up at the sky. The camera then cuts to a wide shot of a large white commercial jet flying low overhead against a blue sky with scattered white clouds.
Shot 3: A cinematic aerial view from behind the wing of the white airplane as it soars through a thick layer of fluffy white clouds. The camera smoothly pans to show the vast horizon.
Shot 4: A close-up exterior shot of the airplane's cockpit window. Inside, a pilot wearing a white uniform and aviator sunglasses is visible, smiling calmly. The camera pans across the nose of the plane as it flies through the bright, clear sky.
```
