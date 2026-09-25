# Generate AI Videos from ChatGPT with Higgsfield

- Source: https://higgsfield.ai/blog/generate-ai-videos-from-chatgpt
- Byline: Higgsfield · Aug 14, 2026 · 9 min · Last updated: 3w ago
- Prompts extracted: 4

## Notes

**Topic:** generating Higgsfield videos from ChatGPT via the Higgsfield plugin (Aug 14 2026).

**Setup (~1 min, no API key):** ChatGPT Plugins Directory -> Higgsfield (or add button at higgsfield.ai/mcp) -> Add -> sign in -> in a new chat select Higgsfield or mention it. Availability can depend on ChatGPT plan/region/workspace. **Always credits — unlimited is web-app only.** Tell ChatGPT at the start: "before generating anything, state the credit cost and wait for my confirmation".

**What a generation needs:** Reference (attach via paperclip, up to **20 MiB**, auto-uploaded to your Higgsfield account and reusable in the thread; a real person's photo works instead of a character sheet), Prompt (write or let ChatGPT expand one line into a full production prompt), Model (name it or let ChatGPT pick), Format (say aspect + duration, e.g. "9:16 and 15 seconds").

**Use case 1 — 30 s cinematic single take (Seedance 2.5):** refs = Soul 2.0 character sheet (close-up portrait + full body, 0.5 cr at 2K) + photoreal empty airliner cabin location. The video prompt reads like a shooting script: scene context, character lock, cabin geography, camera optics, emotional beats, action timing to the second. Cost **540 cr** (+0.5).
**Use case 2 — 15 s 9:16 UGC product ad (Seedance 2.5 1080p):** creator (Soul 2.0, 0.5 cr) + product shot (GPT Image 2 4K, 48 cr); prompt locks creator identity, exact packaging text, and handheld phone feel via a `=== KEY ===` block mapping `<<<image_1>>>` etc. Cost **270 cr**.

**Skills in ChatGPT:** Marketing, UGC Factory, Faceless Content Factory, Utility (edit/repurpose), Motion & Design — one message can run concept -> script -> finished 9:16 video. Outputs appear in the chat widget and in Higgsfield Assets.

## Prompts (verbatim)

### P1. Use case 1: A 30-second cinematic shot

- Model / settings: ChatGPT + Higgsfield plugin; refs Soul 2.0 (2K) / GPT Image 2 (4K); video Seedance 2.5
- Use-case: character/consistency
- Context: This run needed two references: a character and a location. The character came from a character sheet, a close-up portrait plus a full-body shot of the same person, which gives video models enough identity detail to keep the character the same across shots. The character sheet was generated with Soul 2.0 and cost 0.5 credits at 2K. For creators …

~~~~text
A side-by-side character sheet features a split-screen studio composition, with the left panel presenting a tightly cropped close-up frontal portrait focusing on the face, upper neck, and just the upper part of the chest. The subject, a young woman about 25 years old with fair skin and a warm olive undertone, looks directly into the lens, presenting mature bone structure: an oval face, high cheekbones, straight narrow nose, and defined jawline. Her eyes are slightly hooded and almond-shaped, displaying muted warm brown tones, beneath straight, dark brown brows with individual hair detail. She wears dark chestnut brown hair styled loose in natural waves and a matte-to-satin finish, parted slightly off-center with frizzy ends and some stray hairs. Visibly detailed fine skin texture, pores, subtle fine lines, a soft sheen, a small mole on her left jaw, and minor makeup blending are apparent without retouching, beauty filter, or smoothing. The right panel depicts the same woman standing frontally, neutral posture, arms down, legs together, full head-to-toe, both feet visible, in a neutral straight pose. She wears plain white ribbed cotton tank top under an oversized open mid-blue washed denim jacket with slightly pushed-up sleeves, paired with high-waisted, wide-leg light blue denim jeans ending at the ankle, plain white unbranded leather low-top sneakers, thin gold hoop earrings, and a minimal gold ring. Both panels share identical seamless mid-grey studio backgrounds and evenly diffused soft studio lighting, bringing out authentic skin detail, subtle eye catchlights, and natural folds in the clothing. The panels employ strict continuity: the same garment, face, hair, and skin carried across both, presenting a balanced, athletic but slim and mature build. The 4K high-resolution digital photograph reveals sharp details in facial features, fabric weave, and fine jewelry, with a high-end commercial editorial vibe that feels natural, understated, and authentic.
~~~~

### P2. Use case 1: A 30-second cinematic shot

- Model / settings: ChatGPT + Higgsfield plugin; refs Soul 2.0 (2K) / GPT Image 2 (4K); video Seedance 2.5
- Use-case: cinematic film scene
- Context: The second reference is the location, an empty airliner cabin, prompted separately as a photorealistic interior:

~~~~text
Ultra-realistic interior of a narrow-body commercial airliner economy cabin, completely empty with no people, low-angle shot from the center aisle at the waist height of a seated passenger, camera tilted slightly upward looking down the length of the narrow aisle with exaggerated wide-angle perspective, rows of dark navy blue contoured seats in textured synthetic fabric with visible stitching on the backrests, plain light-gray fabric headrest covers with no printing on every seat, two-tone armrests with dark gray cushioned tops and cream plastic bases, stowed light-gray plastic tray tables with recessed cup areas on the seatbacks, curved off-white modular ceiling panels and closed streamlined overhead bins, passenger service units above each row with reading lights, round air vents and small glowing generic pictogram signs with no text, narrow aisle with very dark low-pile carpet in near-black blue contrasting the light walls, small oval windows mostly hidden behind the seats, cool bright daylight cutting in from the windows on the left creating sharp highlights and deep shadows, warmer yellowish overhead cabin lights mixing into a two-temperature environment, cinematic slightly desaturated teal-and-orange color grade with deep slightly crushed shadows and bright highlight edges on the seats, wide-angle lens with mild edge distortion, handheld documentary feel, shallow depth of field with foreground seatbacks slightly soft and the far cabin falling into blur, frantic claustrophobic high-stakes atmosphere, photorealistic true-to-life materials with wear and imperfect surfaces, no CGI look, no digital smoothing, no people, no crew, no passengers, no airline branding, no logos, no readable text, no watermark, sharp detail, 4K quality
~~~~

### P3. Use case 1: A 30-second cinematic shot

- Model / settings: ChatGPT + Higgsfield plugin; refs Soul 2.0 (2K) / GPT Image 2 (4K); video Seedance 2.5
- Use-case: cinematic film scene
- Context: A prompt this size reads like a shooting script: scene context, character lock, cabin geography, camera optics, emotional beats, and action timing down to the second. ChatGPT is a good place for prompts like this, because you build the prompt and run the generation in the same thread.

~~~~text
SCENE CONTEXT
 A young woman in a commercial airliner cabin notices a huge winged animal far off the left wingtip, holding formation with the aircraft. She breaks forward toward the cockpit, is restrained by cabin crew, and turns just in time to watch the dragon overtake the aircraft and bite the aft third of the cabin away in passing. She is thrown out through the severed end in the same instant, spinning violently through open sky past other falling passengers and the burning wreck. The animal turns back onto her and takes her. The black snaps instantly into her own eyes opening: she wakes in the same seat, untouched. It was a dream.

ACTIVE REFERENCES
 @hero: woman, 25, slim athletic build, dark brown hair pulled back into a loose low knot with escaping face-framing strands, thick natural brows, hazel-brown eyes, freckles across nose and cheekbones, unretouched skin with visible pores, faint under-eye shadow, slight redness on nose and cheeks, no glam makeup, a little natural face oil catching light, small gold hoop earrings, thin gold rings on both hands, small fine-line tattoos on the inner right forearm. Oversized mid-blue washed denim jacket with rolled sleeves over a white ribbed cotton tank, light-wash high-waist wide-leg jeans, white low-top canvas sneakers with dirty soles. Face, body, proportions, wardrobe and skin texture 100% match the reference. Voice: mid-range, dry, fragmented by panic, breath audible inside the words.

Two flight attendants and roughly twenty-five seated passengers are unnamed background humans with no reference tag. No other tagged characters exist in this shot.

CABIN DIRECTION LOCK — READ BEFORE ANYTHING ELSE
 This is the highest-priority geography instruction in the prompt. Aircraft direction must never reverse or contradict itself.

Every passenger seat in the cabin faces FORWARD, toward the nose of the aircraft. @hero's seat faces forward. Every other passenger's seat faces forward. No seat faces backward, no seat faces sideways, no seat faces another seat.

FORWARD means: the direction @hero is already looking while seated. The cockpit door is straight ahead of her in that exact direction, at the far end of the aisle, roughly 9 meters ahead of her row. When she gets up and runs, she runs FORWARD — the same direction her seat already faces and her body already points. She never turns around to run, never reverses, never runs toward the tail.

AFT means: directly behind her seat back. The rear galley and the tail are behind her. This is where the aircraft is bitten open. This is the direction she is thrown.

Screen convention for the whole cabin section: FORWARD is into depth, away from camera. AFT is toward camera and behind camera. The camera opens beside her looking across her body, then moves behind her and follows her forward into depth. Forward is always deeper into the frame. This never flips.

Her window is on her LEFT side, at her shoulder. To look out of it she turns her head 90 degrees left — a side glance, not a look backward. The wing is visible outside it, aft of her row.

FIRST FRAME AND SPATIAL BLOCKING
 The first visible frame already contains @hero and her window. No empty establishing frame, no exterior aircraft shot, no delayed reveal.

@hero sits FG-near-MG at x 42%, y 52%, chest-to-head framing, body squared forward in her seat, head turned 90 degrees to her left toward the glass.
 Camera sits in the aisle seat of her row, 0.8 meters from her, at her eye height, angled across her body toward the window so both her face and the window are in frame.
 Her window sits screen-left at x 15%, y 44% — small, roughly 9% of frame width, double-pane scratched acrylic, fogged inner layer, dried water spots, one hairline scratch across the lower left, faint reflection of the ceiling lights on the glass.
 Beyond her, the aisle runs forward into depth on the center axis, x 48% to 52%, with the cockpit door visible small at BG center, x 50%, y 40%. Rows of seat backs recede toward it. This forward path is visible in frame one so the geography is readable immediately.
 Seated passengers fill MG and BG, heads and shoulders over seat backs, all facing forward. A man across the aisle on a tablet. A woman asleep against a window three rows ahead.

LOCATION MAP
 Single-aisle narrow-body airliner cabin, economy section, daylight, cruising above a flat white cloud deck. Carpet worn and dented by trolley wheels. Outside the left windows: the left wing and engine nacelle, white cloud deck below, pale washed-out sky above.
 The dragon: dark slate-grey scaled body, wet matte hide, wingspan roughly 65 meters — nearly twice the aircraft's. Until 12.2s it holds formation 250 to 350 meters off the left wingtip, level with the fuselage, matching speed. At that range it reads as a large dark silhouette occupying a little under half the window's width — clearly an animal, clearly wrong, but distant. It never approaches the window and is never seen in detail from inside the cabin.

FORMAT MODE
 SINGLE CONTINUOUS TAKE. 30 seconds. One camera, one operator, real-time motion, no cuts, no dissolves, no fades, no speed ramps, no montage. Every framing change is earned by a physical camera move.

REALISM LOCK
 Photographic documentary realism, not fantasy illustration. Everything non-dragon behaves exactly as it would on a real aircraft: real seat pitch, safety card in the pocket, scuffed tray tables, a half-empty plastic cup trembling with airframe vibration, worn armrest plastic, dust in the sunbeam.
 The camera is a real physical camera with real flaws: mild rolling-shutter lean on hard whips, hand-pulled focus that hunts and overshoots, auto-exposure lagging half a second when it swings from dim cabin to bright cloud and clipping the highlights before it recovers, faint lens smudge upper right, sensor noise rising in shadow once the cabin lights fail, one fixed dust mote on the sensor.
 People react like real people: delayed comprehension, then noise. Nobody screams on the first beat. A passenger half-stands and sits back down. Someone raises a phone. A child begins fussing. The flight attendants use trained restraint — planted stance, firm two-handed grip on her upper arms, low controlled voice, no melodrama.
 No stylized hero poses, no slow-motion, no wire-work weightlessness, no glossy skin, no CGI sheen on the human side of the frame.

EMOTIONAL PERFORMANCE LOCK
 @hero's fear is physiological and specific, never generic wide-eyed screaming. Confusion always arrives before fear.

Beat 1, at the window — pure confusion, no fear. Slight frown, head tilt, one slow blink. She is trying to identify a bird, a drone, a smudge on the glass. Mouth closed and soft.

Beat 2, recognition — the body understands before the face does. Breath stops mid-inhale and holds. A single hard swallow. Colour drains under the freckles. Pupils widen. Then brows pull together and up, upper lids lift, mouth opens 1cm without sound. She glances at the man across the aisle, back to the glass, back again — checking whether anyone else sees it, doubting her own eyes. One hand grips the armrest until the knuckles whiten.

Beat 3, the run forward — panic mixed with social embarrassment, which is what makes it real. She is not a hero, she is a passenger doing something forbidden and knowing it. Breathing loud, fast, chest-high. Eyes wet, not crying. Small apologetic flinches at the passengers she pushes past.

Beat 4, restrained — desperate frustration at not being believed. Voice cracks and rises, then drops as she tries to sound rational so they will listen. She points forward at them, then back over her shoulder toward the windows. Tears break loose without sobbing. Lower lip trembles once and she clamps it. Jaw muscles visible.

Beat 5, the bite — no scream. Face goes completely blank for a full second: total system overload, mouth slack, eyes fixed and unfocused. That flat shocked stillness reads far more real than a scream.

Beat 6, the fall — this is the longest emotional beat and it moves through three distinct stages, in order.
 Stage one, 15.2s to 17.5s, incomprehension: her face is not yet afraid, it is lost. Brows pulled together, eyes searching, head turning as if trying to locate the aircraft that is no longer there, mouth slightly open. She looks like someone who has not yet accepted the information. She reaches out and grabs at empty air twice, expecting to find something solid.
 Stage two, 17.5s to 21.5s, the understanding arriving: the frown collapses into raw terror across roughly half a second. Eyes go wide then are forced to slits by the airflow, mouth stretches open, throat works with sound the wind eats. Her whole body starts fighting — clawing, kicking, thrashing without direction, the movements of someone who has never fallen before and has no technique.
 Stage three, 21.5s to 25.2s, exhaustion and flickering: terror alternating with blank shock in waves. Between rotations her face flickers between screaming effort and empty stillness. Tears are stripped sideways off her cheeks and gone instantly. She keeps looking down at the cloud deck and then away from it.

Beat 7, the dragon arriving — the terrible clarity of understanding. She stops fighting for half a second and simply looks at it. Then her face crumples: eyes squeeze shut, chin drops, both forearms come up across her face in a small human flinch. No defiance, no hero stance.

Beat 8, waking — the specific look of surfacing from a nightmare with no transition. Hard startle jolt, sharp audible inhale, eyes snapping open unfocused before they find focus. Then a long shaky exhale. Sweat at her hairline, wet lashes, relief arriving in stages. She checks the window like a person checking a dark room. Hand flat on her sternum, breathing still uneven at the last frame.

OPTICS
 84° diagonal field of view, classic wide-angle lens character. Camera 0.5 to 1.5 meters from @hero for the entire take. Strong but natural perspective expansion, foreground body presence larger and closer, environment visible to all frame edges, straight lines rectilinear, no fisheye curve. Anamorphic character restrained and physical: mild horizontal squeeze, slightly oval bokeh, one horizontal blue streak flare only when the sun crosses the glass or the lens directly, gentle edge softness and faint edge chromatic aberration.
 LENS LOCK = 84° for the whole 30 seconds. No zoom, no drift into telephoto compression, no background flattening.

CAMERA
 Shoulder-mounted handheld with real operator mass. Visible operator breath in the frame line, micro-settling after every move, weight shift before every step, human overshoot and correction on whips, brief loss and recovery of the subject. No gimbal glide, no drone float, no digital jitter, no perfectly level horizon.
 Focus priority order: @hero's eyes, then the window glass, then whatever fills the frame.
 The camera is a body in the same space as @hero — it is torn out through the severed fuselage in the same instant she is, and from that moment it tumbles and rolls freely with her at matched terminal velocity.

ACTION TIMING

0.0s to 3.0s
 @hero at x 42%, y 52%, squared forward in her seat, head turned left to the glass. She squints, leans 15cm toward the window and cups her right hand against the frame to kill the cabin reflection. Through the scratched acrylic, far past the wingtip, the dark shape resolves into one slow deliberate wingbeat. Confusion only. Camera holds, breathing, then leans left to see past her cheekbone. Focus pulls from her eye to the glass; the exterior blows out for a beat before exposure settles.

3.0s to 5.5s
 The distant animal banks and its head turns toward the aircraft. It stays 250 to 350 meters out. Her breath stops mid-inhale. Colour drains. She looks at the man across the aisle, back to the glass, back again. Knuckles whiten on the armrest. Camera whips 20 degrees to the window and back with human overshoot both ways.

5.5s to 9.0s
 She fumbles the belt open with both hands, shoves up, and steps out into the aisle facing FORWARD — the direction she was already facing. She does not turn around. Camera loses her for 0.3s to a blur of denim shoulder, recovers behind her, follows. She runs forward into depth along the center axis at x 50%, back to camera, 1.2 meters ahead of the lens, the cockpit door growing at BG center ahead of her, hauling on the forward-facing seat backs to pull herself along, sneakers slipping once on worn carpet, breathing loud and shallow. Passengers' heads turn as she passes them. A phone comes up.

9.0s to 12.2s
 Two flight attendants step into the aisle ahead of her and block her: one at MG x 44%, y 55%, one at x 58%, y 55%, both facing back toward camera, palms out, then both hands clamped on her upper arms. Planted, professional, immovable. She twists in the grip and jabs her arm back over her shoulder toward the left windows behind her. She speaks once, starting at 9.8s: "There's something out there — outside, there's something outside." The line cracks in the middle on a breath. Tears break without sobbing. Camera closes to 1.0 meter, tilting between her profile and the crew's faces.

12.2s to 13.8s — THE BITE, WITH FORWARD MOMENTUM
 A shadow floods the cabin from the left as something enormous overtakes the aircraft from behind and below on a converging line. Both attendants let go and look aft. @hero turns aft. Camera whips 180 degrees over the operator's shoulder in one rough continuous move, exposure lagging then clipping on daylight.

The bite is visible and unmistakable. The dragon is moving FASTER than the aircraft and crossing it, not hovering beside it and not backing up. Its head sweeps in from aft-left on a diagonal at speed, jaws already opening, and closes across the fuselage roughly nine meters behind @hero: upper jaw crushing down through the cabin ceiling, lower jaw driving up through the floor, teeth the size of seat rows scissoring through the airframe. Aluminium skin peels and rolls outward around the teeth. Seat rows on both sides of the jaw line buckle and fold inward toward the closing bite. Overhead bins burst along the crush line. Cable and insulation stretch and snap.

Then — and this is the critical physical beat — the dragon does not stop, does not reverse, does not pull backward. Its own momentum carries it FORWARD and UP, past the aircraft and out ahead of it, ripping the severed aft section away in its jaws on that forward trajectory. The torn section is dragged forward alongside the fuselage and then above it as the animal climbs and overtakes, receding out of frame ahead and to the left. Through the new opening we see it pulling away in front of the aircraft, never behind it. The aircraft is left sheared open on a ragged tooth-scalloped edge, the bite arc clearly readable in the torn metal.
 Keep this non-graphic on the human side: the aft section is carried off intact as structure, no bodies are severed, no blood.

13.8s to 15.2s — IMMEDIATE EJECTION
 The instant the jaws leave the fuselage, the cabin voids. @hero does not grab anything and does not hold on — she is off her feet inside half a second, snatched backward down the aisle and out through the severed end, arms and legs trailing, already rotating as she leaves. Fog, papers, cups, blankets, a suitcase and swinging oxygen masks blast out around her. The camera is torn out in the same instant, tumbling through the ragged opening half a metre behind her.
 Framing is legible only in flashes across this beat: carpet, seat backs, torn scalloped metal, sky, her face, cloud.

15.2s to 25.2s — SPINNING FREEFALL
 Both bodies now tumble freely in open air. This is the emotional and kinetic centre of the take and the camera work must be relentless.

Camera behaviour: the camera rolls continuously and never stops rolling — a full 360-degree roll every 0.8 to 1.0 seconds through 19s, decaying to roughly one roll every 1.6 seconds by 24s — while simultaneously yawing and pitching on separate axes, so the horizon and the cloud deck sweep through frame from every direction. The horizon is never level for a single frame and never returns to the same angle twice. On top of the roll the camera orbits her: it swings from above her to below her looking up, whips past her shoulder, drops beneath and cranes back over, distance oscillating between 0.8 and 2.5 meters. Twice it spins fast enough that she leaves frame entirely for 0.3 to 0.5 seconds before it whips back and re-finds her, hunting focus as it does. The operator is never in control — the camera is falling, not filming. Heavy directional motion blur streaks the cloud deck on the fastest rotations. The frame clips to white twice as the sun sweeps through, each with one horizontal anamorphic flare.

@hero holds roughly screen-center, x 40% to 60%, y 40% to 60%, tumbling on her own separate axis and at her own separate rate — flat spin, then head-over-heels, then a hard side roll, then flat spin again. Because her rotation and the camera's rotation are unsynchronized, her face arrives into frame from a different edge every time.
 Air is a solid force: cheeks and lips deformed and vibrating, eyes forced to slits and streaming, mouth stretched open with no sound surviving the wind, hair wind-locked flat off her scalp, denim jacket hammering and cracking around her ribs, tank plastered to her body, jeans rippling at high frequency, one sneaker torn off at 19.5s and gone.
 Her fight for stability is untrained and useless: she claws at nothing, pulls limbs in and spins faster, throws them out and slows, overshoots, half-arches, loses it, hyperventilates. Never composed, never graceful.

Deep BG through the rotation: eight to twelve other falling passengers scattered 150 to 500 meters away, small, tumbling, limbs loose; free seats, a suitcase and a long blizzard of paper trailing between them; the broken airliner falling nose-low far below and to one side, rotating slowly around its long axis, shedding panels that flutter unevenly, trailing black smoke that streams upward relative to its fall. Because the camera is rolling, all of this sweeps through frame from different edges each rotation.
 The dragon works the scattered fall at 300 to 600 meters, wings half-folded, cutting between distant figures. It stays small in frame, silhouetted against cloud, read as scale and dread only. No blood, no wounds, no dismemberment, no detail.

25.2s to 28.3s
 It breaks off and turns onto her, closing from roughly 400 meters and growing from a background silhouette to a foreground mass across three seconds — a real approach eating real distance, entering and leaving frame repeatedly as the camera keeps rolling, so it reads as genuinely running her down. Its shadow crosses her; the pressure wave off its wings visibly shoves her body sideways and off-axis before it arrives. She stops fighting for half a second and simply looks at it. Then her face crumples and both forearms come up across her face. At 28.0s the jaws open and fill the frame from all four edges — wet dark palate, wet teeth, no gore. At 28.3s they close over camera and subject together.

28.3s to 28.45s
 Frame goes to true black for 0.15 seconds only — barely more than three frames. A hard blink, not a fade, not a hold, not a void. The camera keeps running through it.

28.45s to 30.0s
 The black snaps open into her eyes opening. Camera 0.5 meters from her face, soft window light from screen-left. She jolts awake on a hard audible inhale, eyes wide and unfocused for a fraction of a second before they find focus. Camera pulls back 0.4 meters and settles into exactly the opening framing: @hero in the same forward-facing window seat, x 42%, y 52%, denim jacket intact, hair knot intact, both sneakers on, cabin lit, engines droning, passengers all facing forward, the man across the aisle still on his tablet, the cockpit door still small at BG center ahead of her. Long shaky exhale. Sweat at her hairline, wet lashes. She presses her palm flat to her sternum and turns her head left to the window. Outside: the wing, empty white cloud, nothing beyond it. Breathing still uneven. Camera breathes, holds, ends on her face.

PHYSICS
 Cabin at cruise: heavy still air, constant low-frequency airframe vibration in every loose object.
 Running in an aisle: real heel-to-toe contact on carpet, hip shift, hands hauling on seat backs, torso leaning ahead of the feet, one genuine slip and correction.
 Restraint: her force goes into the attendants' braced stance, their weight shifts to absorb it, her jacket bunches under their grip.
 The bite: the jaws carry enormous mass and close with crushing slowness relative to their scale, not a snap. Aluminium bows, buckles, then fails. The dragon is a body in motion with its own momentum vector — it arrives on a converging diagonal, takes the section in passing, and continues forward and upward along that same vector. It never decelerates to a hover, never reverses, never pulls straight back. The severed mass is carried forward with it. The aircraft yaws and drops on its remaining axis as that mass leaves.
 Decompression: a single violent pressure gradient, instant condensation fog, sharp temperature crash with visible breath and frost near the breach, all loose mass and both bodies accelerating aft on one vector. A human body cannot resist this outrush and does not try.
 Freefall: terminal velocity, no floaty slow-motion, no swimming-through-water motion. Angular momentum is conserved — tucking speeds the spin, extending slows it, every correction overshoots. Clothing flutters at high frequency with a hard snap at every hem; hair has zero soft delay.
 Dragon mass in the final approach: wingbeats displace enough air to move her body before contact. Hide is wet matte, muscle sliding under scale, no rubber jiggle.
 Wreck: nose-low fall with slow axial rotation, panels tearing free and fluttering, smoke trailing upward relative to descent.

LIGHTING
 Soft cinematic naturalism throughout, all sources motivated.
 Cabin: cool overhead fluorescent ambient plus one hard shaft of high-altitude sunlight through her window from screen-left, wrapping her cheekbone and denim shoulder, dust in the beam, dynamic range between the dim cabin and the blown window exceeding what the sensor can hold.
 At 12.2s the dragon's body blocks the left windows and the cabin drops into shadow for a beat before daylight floods through the severed end and becomes the only source, backlighting the fog and turning fleeing debris into bright particles against black interior.
 Freefall: enormous soft overcast toplight from the sky plus strong bounce up off the white cloud deck below, so shadows stay open and skin stays soft even at speed. As the camera rolls, the light direction on her face wheels continuously from top to side to under-light and back — never a fixed key. Sun crosses the lens twice, hard rim light and one horizontal flare each.
 Wake-up: same warm-cool cabin balance as frame one, exactly matched, soft window light across her wet eyes and hairline sweat. Keep her face soft-lit and readable through the final 1.5 seconds; no hard key, no flat frontal blast.
 Kodak Vision3 250D and 500T character, real film grain coarsening in shadow, Lubezki natural-light handheld discipline.

AUDIO
 0.0s to 12.2s: constant engine drone and cabin air hiss, seatbelt buckle, footfalls on carpet, a tray rattling, low scattered passenger voices, a child fussing. Ambient ducks for her single line at 9.8s; breath audible inside the line.
 12.2s to 13.8s: a vast low groan of an enormous mouth closing on metal, aluminium shearing along the tooth line, structural boom, the mass receding forward and away, then the decompression outrush — full-spectrum roar that overloads and clips the microphone.
 13.8s to 25.2s: wind roar dominates and buffets the mic directly, its pitch and intensity pulsing with every camera rotation. Engines and voices gone. Distant airframe groan twice, one low animal call heavily muffled by wind. No clean sound design, no clarity.
 28.0s to 28.45s: everything drops to near silence for a fraction of a second, only low-frequency pressure.
 28.45s to 30.0s: instant return of calm engine drone and cabin hum, her sharp inhale, shaky exhale, her heartbeat close and fast, the child still fussing.
 Only the one quoted line is spoken. Lips are still at all other times. No narration, no offscreen voices, no music, no subtitles.

POSITIVE LOCKS
 One continuous 30-second take, single moving camera, no cut anywhere including the black flash and the wake-up.
 All passenger seats face forward toward the cockpit. @hero runs forward, the same direction her seat faces, and never turns around or reverses direction in the cabin. Forward is always deeper into frame; the tail and the breach are always behind her and behind camera.
 The dragon is only ever seen from inside the cabin as a distant silhouette 250 to 350 meters beyond the left wingtip; it never approaches, hovers beside, or fills the window, and no eye, tooth or scale detail is visible through the glass.
 The loss of the aft fuselage is unambiguously a bite delivered by a body in forward motion: the dragon overtakes the aircraft, bites in passing, and carries the severed section forward and upward ahead of the aircraft. It never hovers, never reverses, never pulls straight back with the section.
 @hero never grabs a seat and never resists the outrush; she is ejected within half a second of the jaws leaving the fuselage, already rotating as she exits.
 From ejection to the final jaws the camera rolls, yaws and orbits without pause; the horizon is never level; she leaves and re-enters frame at least twice.
 Her freefall emotion runs confusion first, then terror, then flickering exhaustion — never a single held scream.
 The black after the final bite lasts 0.15 seconds and functions as a blink; she is awake and gasping within a fifth of a second of the jaws closing.
 @hero is visible in the first and last frame and remains identifiable throughout; the reference face is never replaced by a different woman.
 Wardrobe, hair and jewelry state stay continuous through the fall and reset to intact frame-one condition at 28.45s.
 Violence stays impact-and-scale based: no blood, no wounds, no severed bodies, no gore at any point.
 Final framing matches the opening framing exactly so the loop reads as the dream ending.
~~~~

### P4. Use case 2: A UGC product video

- Model / settings: ChatGPT + Higgsfield plugin; refs Soul 2.0 (2K) / GPT Image 2 (4K); video Seedance 2.5
- Use-case: UGC
- Context: The video prompt below locks three things: who the creator is, exactly what the packaging says, and the handheld phone feel that makes UGC look real.

~~~~text
=== KEY ===
 <<<image_1>>> = THE CREATOR: young woman, very long dark-brown wavy hair with thin face-framing braids, middle part, two small flower hair clips (one pink, one blue); light tan skin with freckles across her nose and cheeks, brown eyes, soft natural makeup; pale-yellow baby tee with lettuce-trim edges and a floral patchwork heart print (FICTIONAL graphic), thin silver necklaces with a small star charm, small rings; light-wash baggy wide-leg jeans, white low-top sneakers. Reproduce this exact person, face, skin details, hair, outfit, EXACTLY as shown, nothing invented. Identity only, NOT lighting.
 <<<image_2>>> = THE PRODUCT: a pale-PINK matte film snack bag of lentil chips with crimped top and bottom seams, "Wisp Crisps™" in large dark serif lettering, "LENTIL CHIPS" beneath, a small dusty-rose badge "MADE WITH REAL INGREDIENTS", an illustration of chips with a garlic clove, rosemary, lentils and pink salt, then "PINK SALT & GARLIC", "LIGHT • CRISPY • DELICIOUS", "14g PLANT PROTEIN | VEGAN | GLUTEN FREE", "NET WT. 4.0 OZ (113g)". "Wisp Crisps" is a FICTIONAL brand, reproduce the bag and ALL its lettering EXACTLY, zero typos, crisp, no warping; the large lettering must stay perfectly readable, the smallest print stays correct or naturally soft-focused, NEVER garbled. The ONLY readable text on screen. Design only, NOT lighting.
 LOCATION (generate, no reference): bright characterful COLORFUL daytime living room, big soft windows, warm white/cream walls, BOLD saturated accents (vivid sofa, colorful rug, poufs, plants, playful décor). NOT a sterile white box, NOT dark/moody, sunny, lived-in, joyful, mid-to-high-key. Must have a walkable path and one stable waist-high surface (sideboard/console/table) for the phone. All décor generic, any art/signs ILLEGIBLE, no real brands. Same room across all segments.
 ONE PHONE ONLY: exactly one phone exists, the one FILMING. The whole video is its continuous POV: first from her hand, then from the surface she sets it on. The camera never films itself, NO phone ever visible in frame, no second device. After the set-down her hands hold only the chips bag.
 CHIPS HANDLING: the pink bag is in her LEFT hand from frame one, held casually by the upper seam or cradled against her palm, face of the bag flat to camera on the show beats; the film flexes, crinkles and catches light like real foil; her grip shifts with loud honest crinkles. Shown at natural distance, never shoved into the lens. FORBIDDEN: opening it, eating, redesigning the bag, morphing or duplicating it between segments.
 LIVING REALISM + MESSY (hard rule): she BLINKS every 2–3s (frozen stare forbidden), constant micro-expressions, brow lifts, micro-smiles, lip presses, head micro-tilts; moist eyes with plain catchlights and micro-saccades; real skin per <<<image_1>>>, pores, freckles, vellus hair, natural asymmetry, no beauty-filter. HONEST UNPOLISH: a loose strand of hair falls across her face and she blows/brushes it aside mid-sentence; a quick knuckle nose-scratch on a pause; a hair tuck behind the ear; the propped phone settles a couple degrees CROOKED and she never fixes it; her laugh has a tiny snort. All fast, unconscious, half-second gestures.
 NO GLOW: no glow/bloom/flares/shimmer/sparkle VFX anywhere; all materials lit plainly like ordinary smartphone footage.
 === END KEY ===
 RELIGHT (CRITICAL): discard the flat studio lighting of <<<image_1>>> and <<<image_2>>> entirely. Relight her AND the bag natively to the generated room: soft diffused window daylight as key, warm walls/ceiling as fill, subtle color bounce from the room's saturated furniture into lower shadows and the bag's underside; light shifts naturally on her as she walks; real contact shadows at her feet and where fingers press the film. Both must look physically filmed in this room, not composited.
 Style: 8K photorealistic authentic UGC smartphone talking-head, filmed on ONE phone, NOT cinematic, not polished. 15 seconds, vertical 9:16, 30fps, natural AF/AE, camera at her EYE LEVEL throughout, slight front-cam wide distortion handheld.

STRUCTURE: THREE SEGMENTS, EXACTLY TWO CUTS, CUT 1 at ~6.0s hidden inside the phone's own downward set-down sweep (both sides = matching motion-blurred POV descent frames); CUT 2 at ~11.2s: a visible honest UGC JUMP CUT within the SAME locked propped framing, she is suddenly a touch closer and slightly shifted, hair resettled, everything else identical. No other cuts, no transitions. Inside each segment footage is continuous.
 THE SHOT:
 0.0–2.2s — SEGMENT 1, HANDHELD WALKING SELFIE (recording phone in her RIGHT hand at eye level, front camera; pink bag swinging casually in her LEFT). Chest-up, she strolls the colorful room, décor parallaxing, daylight shifting on her face, natural walking bob; a loose strand falls across her face, she blows it aside with a grin: "So… these are the lentil chips I keep talking about."
 2.2–5.4s — mid-stride she RAISES the bag beside her face, front flat to the lens, "Wisp Crisps / PINK SALT & GARLIC" clearly readable, AF shifts to it and back, a loud crinkle as her grip shifts: "Pink salt and garlic. Sounds fancy… it's not."
 5.4–6.0s — she slows beside the waist-high surface and lowers the recording phone, THE FRAME sweeps down in a fast motion-blurred descent (the phone is never seen; it IS the view).
 ~6.0s — HIDDEN CUT 1 inside the sweep.
 6.0–6.8s — SEGMENT 2 opens mid-descent, same POV: the surface meets the view, the image LANDS with a soft clack, rocks once, SETTLES slightly CROOKED at her eye height, she doesn't fix it; her fingers blur across the frame edge letting go; AF/AE hunt-and-lock, steady chest-up framing, zero movement from here. Bag still in her left hand.
 6.8–11.2s — she takes a half-step back and presents the bag at chest height with both hands, film crinkling under her fingers, tipping the label to camera: "They're SO light. Like… air. And the garlic actually tastes like garlic." A blink, a quick knuckle nose-scratch on the pause.
 ~11.2s — CUT 2, visible UGC JUMP CUT: same crooked locked framing, she's suddenly a touch closer, weight shifted, hair resettled.
 11.2–15.0s — SEGMENT 3: leaning a bit toward the lens, bag hugged loosely to her chest, conspiratorial: "Third bag this week… not even sorry." A snort-laugh breaking through, she tucks a strand behind her ear, last natural blink, warm grin. Clean end at 15s.
 Performance: mid-stroll chatty energy in Segment 1, proud casual bag raise; settled and specific in Segment 2, she's describing real taste and texture, unhurried, real pauses; Segment 3 playful confession with the snort-laugh; realistic lip-sync on every word; blinks and fidgets woven through every beat, nothing posed. Physics: real walking rhythm, hair/braids and necklaces moving naturally; the bag is light and springy with true film stiffness, it flexes, crinkles loudly on grip shifts, corners denting realistically; the set-down weight is FELT through the image, drop, clack, one rock, crooked settle.
 Audio (diegetic only, captured by the one phone): her lines above; footsteps, clothing rustle, the bag's constant honest foil crinkle as the star texture, the sweep whoosh, the clack and micro-rock right at the mic, her breath blowing the strand aside, the snort in her laugh; voice close in hand, slightly roomier from the surface; bright daytime room tone. Music none or ultra-soft original bed. Fully original, no IP.
 Look: joyful saturated palette softly blurred behind her, she and the pink bag sharp in one focal plane; realistic smartphone color science; no film grain, no cinematic grade. ON-SCREEN TEXT: none except the bag's own label per <<<image_2>>>, reproduced zero-typo; all location text illegible; no subtitles, no watermarks.
~~~~

