# Cinema Studio Prompt Guide: 100+ Camera, Lighting and Motion Prompts That Actually Work

- Source: https://higgsfield.ai/blog/cinema-studio-3.0
- Byline: Mariam Barova · Jun 30, 2026 · 10 minutes · Last updated: 3w ago
- Prompts extracted: 11

## Notes

**Title on page:** "Cinema Studio Prompt Guide: 100+ Camera, Lighting and Motion Prompts That Actually Work" (Mariam Barova, Jun 30 2026). A recipe-by-recipe production walkthrough; every recipe = "what it does" + prompt (all prompts copied below).

**Recipe chain (a full mini-production):**
1. **Build your cast** with Cinema Studio's **Cast** feature -> permanent character asset with a front/side/back character sheet. Example Cast settings: Genre Action, Budget $100M, Era 2010s.
   - Cast = invented characters inside Cinema Studio. **Soul ID** = train on 20+ photos of a real person; identity then works across every model on Higgsfield (use for real spokespeople).
2. **Location**: a two-word prompt ("Hotel corridor") is enough — Cinema Studio adds depth, intentional lighting and off-centre composition automatically.
3. **Place character into scene**: leave the prompt empty, just select character + location; it chooses angle and lighting -> keyframe.
4. **Multi-shot fight**: keyframe as start frame + character sheet (Image 1) + location (Image 2) as references; write "Shot 1 ... Shot 7" with a lens/camera move per shot (telephoto, handheld tracking, low-angle side, frontal close-up, static widening). Describe wardrobe degradation (tie crooked, sweat) for continuity and end on a freeze frame.
5. **Continuation without a new keyframe**: upload the previous clip as `@video1`, write "continuing @video1" + next shots incl. dialogue lines. Same face/clothes carry over.
6. **Pure text-to-video** (no refs) for large destruction/physics scenes — describe camera position (street level, handheld behind a barrier) and foreground crowd for scale.
7. **Multi-character, elements only (no start frame)**: 3 characters + a location as @image refs; the model blocks them, lights them and keeps faces across cuts ("director mode"). Assign dialogue lines to specific @image tags.
8. **Motion control / background swap**: "In @video change location to @image_1" + genre cue; motion copied and subject relit, no masking.
9. **15-s product ad** as a timed 3-act script (0-4 s problem, 4-9 s solution, 9-15 s packshot). Leave the right third of the packshot empty for the logo; static camera for the packshot.
10. **Logo animation** (upload logo as @Image1): v1 particles/brush/light sweep, v2 liquid glass with refraction, caustics, multi-angle cuts; always end with the logo stable in centre with a subtle "breathing" loop and keep colours identical to the logo.
11. **2D anime action** from text only: name the style ("2D hand-drawn anime, cel-shaded, hand-drawn line texture") and animation principles (impact frames, exaggeration).

**FAQ facts:** camera moves (dolly, arc, tracking, orbit) described in text are executed at generation time; tag multiple characters with separate @image handles.

## Prompts (verbatim)

### P1. 🎬 Set Your Location

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: cinematic film scene
- Context: Generates a cinematic hotel corridor location image. Unlike other models that give you flat hallways with dead-center cameras, Cinema Studio produces depth, intentional lighting, and atmosphere automatically.

~~~~text
Hotel corridor
~~~~

### P2. 🎬 Place Character Into Scene

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: character/consistency
- Context: Combines your character and location into a single keyframe. Cinema Studio automatically selects the camera angle and lighting, no additional prompting needed.

~~~~text
Leave the prompt empty. Select your character and your location. Cinema Studio handles the rest.
~~~~

### P3. 🎬 Fight Scene – Part 1 (Multi-Shot Action Sequence)

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: cinematic film scene
- Context: Generates a full multi-shot hotel corridor fight sequence. Upload the scene keyframe as a start frame, and attach your character sheet and location as references so nothing breaks across shots.

~~~~text
Use Image 1 as a reference for the character's appearance, and Image 2 as reference for the location. Multi-shot editing, hotel corridor fight sequence. Shot 1: Telephoto lens. At the far end of a long, narrow luxury hotel corridor stands a young man in a dark tailored suit, white dress shirt, and a slightly loosened tie. The corridor features a deep red carpet, beige walls with warm yellow wall sconces, and evenly spaced room doors on both sides. Blocking his path are five or six men in black suits. They unbutton their jackets and assume fighting stances. Shot 2: Handheld tracking shot. The protagonist strides quickly toward the first opponent. In the tight space, he slams an elbow into him, smashing him against the wall. A framed picture rattles loose and shatters on the floor. Shot 3: Low-angle side shot. A second attacker throws a punch from the side. The protagonist grabs the arm mid-swing, uses the corridor wall for leverage, and flips him hard onto the carpet. Shot 4: Fast frontal close-up. The protagonist slips a punch and counters with a sharp palm strike to the jaw. The attacker crashes backward through a hotel room door, falling inside. Shot 5: Handheld, shaky tracking shot mid-hallway. Two attackers close in simultaneously. In the extremely confined space, the protagonist blocks left and right, drives his knee into one man's abdomen, then elbows the other in the temple. Both collapse in succession. A wall sconce shatters during the scuffle, darkening part of the corridor. Shot 6: Dynamic tracking shot. The final attacker, the largest of them all, stands guard near the door at the end of the hall. The protagonist accelerates into a sprint. In the narrow space, he sidesteps a heavy punch and spins into a rotating elbow strike, knocking the man down hard onto the carpet. Throughout the fight, the suit remains largely intact, the tie slightly crooked, the shirt subtly loosened, a faint sheen of sweat on his forehead, but he remains composed and sharp. Shot 7: Static camera. Medium shot widening to full. At the end of the corridor, the protagonist calmly walks past the fallen men. He adjusts his tie with one hand, his steps steady and controlled. He stops before the final door at the far end, back to camera. His broad-shouldered silhouette is outlined by the warm light of the wall lamp above the door. He slightly turns his head, takes a slow breath, and raises his right hand toward the door handle. Freeze frame the moment before his hand touches the handle.
~~~~

### P4. 🎬 Fight Scene – Part 2 (Scene Continuation Without a New Keyframe)

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: cinematic film scene
- Context: Continues directly from the previous video without creating a new keyframe. Upload the fight scene video as context and write the next beat. Same face, same clothes, same vibe — scene to scene.

~~~~text
Multi-shot cinematic scene, continuing @video1 Shot 1 (Wide, interior): Luxury high-rise hotel suite. Floor-to-ceiling windows reveal a city skyline under an orange-gold dusk sky. Interior dim, warm tungsten lighting. White bed and bedside lamp visible. Soft foreground bokeh. Light rain marks on the glass. Camera faces the door. The door opens. A young man in a slightly disheveled suit steps in. He walks toward camera; the door closes behind him. Near the windows stands a woman holding a glass of red wine, silhouetted by the sunset. He passes camera, heading toward her, hurriedly adjusting his jacket, straightening his tie, smoothing his shirt. Shot 2 (Medium tracking): He discreetly breathes into his hand, smells it, frowns. Nervous. He composes himself and continues forward. Man: "Sorry, I got held up a little. I should've been here sooner." Shot 3 (Over-the-shoulder from behind the woman): She slowly turns, gently swirling her wine, studying him with a faint smile. Woman: "Honey, where have you been?" Shot 4 (Two-shot, medium close-up): He steps close and wraps his arms around her waist from behind, forcing tenderness. Man (evasive): "I... was jogging." Shot 5 (Close-up on woman): She glances down at his shirt, raises an eyebrow. Woman: "That's weird... your shirt is completely dry." A brief pause.
~~~~

### P5. 🎬 Building Demolition (Pure Text-to-Video)

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: cinematic film scene
- Context: No start frame, no references, just a prompt. Demonstrates Cinema Studio's physics accuracy and environmental realism on large-scale destruction scenes.

~~~~text
A demolition crew detonates a skyscraper in a dense city at dawn. The building folds inward floor by floor in a cascade of glass and concrete dust, debris clouds billow outward in slow motion, pigeons scatter across the orange sky. Shot from street level on a handheld camera behind a safety barrier, crowd reactions visible in foreground. Realistic shockwave dust rolling toward camera.
~~~~

### P6. 🎬 Multi-Character Scene (Elements Only, No Start Frame)

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: character/consistency
- Context: Upload 3 characters and a location — no start frame. Cinema Studio places them together, assigns correct lighting, and holds every face consistent across cuts. This is director mode: you choose the cast, you choose the location, the model makes the creative decisions.

~~~~text
3 men sitting in foldable chairs against a sun-scorched concrete wall @image_1. Dry ground, blinding light, air trembling from heat. A small dog nearby. Sweat on his @image_3 forehead, squinting, he says casually: "Man, it's burnin' up out here, huh?". Then close up of a @image_2 as he says: "I know, right?". Then a wide shot, @image_3 says: "Oh this is nothing, you haven't been to Almaty yet" and then close up of dog barking.
~~~~

### P7. 🎬 Motion Control (Change Background of Existing Video)

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: transitions
- Context: Takes an existing video of a person in motion and transfers their movement into a completely new environment. Cinema Studio relights the subject accurately and copies the motion perfectly, no manual masking, no compositing.

~~~~text
In @video change location to @image_1. Horror film, man running from something scary.
~~~~

### P8. 🎬 Product Ad – Pizza Commercial

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: product ad
- Context: Generates a complete 15-second commercial clip from a single detailed prompt. Three structured acts: problem, solution, packshot. Ready to run as a paid ad.

~~~~text
0–4 seconds: The guy from @image_1 shuffles sleepily into the kitchen in pajamas, hair messy, eyes half-closed. He pulls the fridge open — completely empty. He stares blankly, sighs. He pulls out his phone. Cut to close-up of the phone screen — a food delivery app is open, a large bright button reads "Order Food". His thumb hovers, then taps it decisively. Camera stays tight on the screen, button animates as pressed. No scrolling, no other interactions. 4–9 seconds: Cut to exterior — bright daylight, modern apartment building. A delivery drone flies into frame from above carrying a pizza box. It descends in a smooth cinematic arc toward the balcony, gently places the pizza box on the railing, and lifts away. Wide-angle, slightly heroic drone shot, clean blue sky background. 9–15 seconds: Packshot. The guy is positioned on the left side of the frame, holding an open pizza box, taking a satisfied bite, eyes closed with joy. The right side of the frame is intentionally left clean and empty, neutral background, no objects, no clutter. Warm soft lighting. Static composition, camera does not move. Close-up on face left, right third of frame completely open for logo placement.
~~~~

### P9. 🎬 Motion Design – Logo Animation Version 1

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: other
- Context: Animates your logo from nothing using particle aggregation, light sweeping, and geometric effects. Upload your logo as @Image1. Best for a bold, commercial-grade reveal.

~~~~text
Design a logo animation for @Image1. Specific requirements: The logo's appearance from nothing must be creative and well-designed, employing techniques such as particle aggregation, brushstrokes, light sweeping, and geometric decomposition and recombination. The logo's appearance should feature smooth, undulating curves and elastic animation effects, with a strong overall rhythm and professional commercial advertising standards. Light effects sweeping across the logo's surface should create highlights and a metallic texture. The background should be clean and simple, highlighting the logo itself. The color scheme should be completely consistent with the original logo in @Image1. At the end of the animation, the logo should remain stable in the center of the screen with a slight breathing-like looping motion effect.
~~~~

### P10. 🎬 Motion Design – Logo Animation Version 2 (Liquid Glass)

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: other
- Context: Creates an elegant logo reveal in a liquid glass aesthetic — transparent material with realistic refraction, caustic light projections, and multi-angle camera cuts. Upload your logo as Image 1.

~~~~text
Create an elegant dynamic logo reveal animation for the logo in Image 1. The overall visual style should follow a Liquid Glass aesthetic. Detailed requirements: The logo material should present a highly transparent liquid glass texture, featuring realistic refraction, transmission, and reflection effects. Inside the glass, flowing liquid light and subtle air bubbles move organically. The edges display characteristic glass dispersion, splitting light into a subtle rainbow spectrum. The logo should emerge from nothing through a transformation process where liquid glass material floats and flows in midair, then gradually solidifies into the final logo shape. Surface tension effects must be visibly realistic during the formation process. The overall animation rhythm should be extremely dynamic and powerful. The camera should switch angles multiple times throughout the sequence — from extreme close-up detail shots to full wide shots, from low-angle to high-angle views, including 360-degree orbital rotations around the logo. The camera movement enhances spatial depth and dimensionality, showcasing how refraction and internal light flow change from different perspectives. Transitions between shots should be smooth and fluid. Light passing through the glass logo should create caustic effects and colorful projections. The pacing should feel impactful and energetic, supported by fast, precise editing. The background should remain clean and dark to emphasize the glass material. At the end of the animation, the logo stabilizes in the center of the frame, with the glass surface maintaining a subtle, breathing-like liquid motion loop.
~~~~

### P11. 🎬 2D Anime Action Sequence

- Model / settings: Cinema Studio 3.x (Cast, Elements, video)
- Use-case: anime/animation
- Context: Generates a full 2D hand-drawn anime action sequence — no start frame, no references. Demonstrates Cinema Studio's understanding of animation principles: impact frames, exaggeration, consistency, and cel-shading style.

~~~~text
2D hand-drawn anime style with top-tier cinematic production quality. A surreal urban transformation action scene set in a modern city at night, with neon lights reflecting on rain-soaked streets. Suddenly, the entire city begins to slowly move and reorganize under the control of someone's psychic power. Giant skyscrapers rotate and tilt like building blocks. Roads rise from horizontal to vertical, transforming into massive walls, while former walls flip over to become new floors. The direction of gravity constantly shifts. Two warriors continue an intense, relentless battle within this continuously transforming geometric space. One hangs completely upside down in midair, launching a fierce attack toward the opponent below. The other uses a moving building façade as a springboard to propel upward in counterattack. Both fighters instantly perceive and exploit the evolving spatial structure around them. An impossible-architecture aesthetic runs throughout the scene: staircases lead into the void, corridors bend into loops, and building cross-sections simultaneously display contradictory perspectives from multiple angles. The camera rotates and rolls at extreme speed, following the two warriors through the chaotic environment, rapidly switching from overhead shots to low-angle views to side perspectives. Fragments of buildings float in the air, slowly rotating like a frozen asteroid belt. Shattered neon tubes scatter pink and blue glowing particles drifting throughout the space. Glass curtain walls explode, with shards floating in zero gravity. The warriors' clothing and hair are pulled simultaneously by gravitational forces from multiple directions. The space feels extremely chaotic yet internally coherent, creating a psychedelic and awe-inspiring visual impact. Cel-shaded coloring style, hand-drawn line texture, strong depth-of-field effects, and cinematic widescreen composition.
~~~~

