# How to Change One Element in a Finished AI Video Without Regenerating It

- Source: https://higgsfield.ai/blog/edit-ai-video-without-regenerating
- Byline: Higgsfield · Sep 16, 2026 · 10 min · Last updated: 6d ago
- Prompts extracted: 2

## Notes

**Topic:** changing one element of a finished/approved clip without regenerating (Sep 16 2026).

**Why not regenerate:** same prompt twice never gives the same clip — you risk a different camera drift/angle, changed pacing that breaks the surrounding edit, a different facial expression, and losing the exact hook moment; also every retry re-bills the whole clip.

**Tools:**
- **Genjutsu Object Swap** — replace an object/character/outfit/product; camera, light, motion stay as filmed.
- **Genjutsu Motion Transfer** — reuse motion, camera work and timing of a source video on a new subject/setting.
  Both: up to **30 reference images** + one source video up to **30 s**; prompt or preset (no text needed); up to 1080p.
- **Seedance 2.5 Edit** — prompt a local change, or **Draw to Edit** (mark the region, then describe what happens inside it) when the change isn't a single named object; up to **50 refs**, video up to 30 s, 1080p. **Smart Clean Up** removes dust, wires or objects without tracking.
- **Video Relight** — when only light is wrong: presets, Auto, or up to two custom lights (direction, colour, brightness, diffusion).
- Works on **real filmed footage** too. Adobe plugins bring Draw to Edit / Edit Video into After Effects and Premiere Pro.

**Workflows:** Genjutsu: upload source -> choose Object Swap or Motion Transfer -> add refs for the replacement -> prompt -> generate and compare to source. Seedance 2.5 Edit: upload source -> prompt or draw region -> add ref photos/videos -> generate/review. Example prompts (below) are long structured "SCENE CONTEXT ..." briefs.

**Pricing (Sep 2026, 10 s 1080p):** Object Swap 99 cr ($4.95); Motion Transfer 99 cr ($4.95); Seedance 2.5 Edit 90 cr ($4.50).

**When you still must regenerate:** changing the underlying action/performance; changing duration, pacing or shot structure; swapping for an object of very different size/shape; adding new contact/occlusion interactions (hand picks up something new, stepping behind an object); many connected changes at once (camera + light + motion + objects). Targeted edits also protect the face — a full re-render reintroduces facial variation.

## Prompts (verbatim)

### P1. Workflow A: Higgsfield Genjutsu

- Model / settings: Genjutsu (Object Swap / Motion Transfer) and Seedance 2.5 Edit
- Use-case: other
- Context: Step 3: Describe the change in a prompt.

~~~~text
SCENE CONTEXT
On a sunny, busy city avenue alive with traffic and pedestrians, a young woman rides a
translucent green concept motorcycle fast and hard through the street. It opens on a dynamic
moving medium shot of her with the bike, then a moving side-to-front tracking shot that swings
ahead of her, a half-second flash close-up of her face, a dynamic low chase-and-rise hero shot,
and a final shot from behind as the camera gradually pulls back and she rides away down the
busy avenue.
ACTIVE REFERENCES
<<<image_3>>>: young woman, late teens–early 20s, East Asian, fair skin, dark hair pulled
back in a tight low bun with a few loose strands framing her face; calm, cool expression;
oversized vintage windbreaker — royal-blue body with red shoulders and a white-outlined
star/chevron color-block, worn over a grey hoodie with the hood out — black leggings, white
crew socks, cream-and-white chunky running sneakers. No helmet. 100% matches the
reference.
<<<image_1>>>: the motorcycle — an aggressive naked concept sportbike with translucent
neon acid-green faceted bodywork; the low-poly angular panels are see-through, revealing the
black tubular trellis frame, black engine, and internal components inside. Red-anodized accents:
rear coil-over shock spring, wheel hubs, axle nuts, and small control details. Black exposed

swingarm, black cast wheels on slick treadless black tires, upside-down front forks, angular slit-
eye headlight, low streetfighter stance. 100% matches the reference.

<<<image_2>>>: location reference — a wide, sunlit city avenue: pale multi-lane asphalt with
bold white crosswalk stripes and a yellow center line, a low planted median with green hedges
and red flowers, rows of tall pre-war stone apartment buildings on both sides, parked cars along
the curb, distant taller towers closing the view, clear deep-blue sky, strong warm daylight with
hard shadows. Controls geography, palette, and atmosphere only — this scene is busy and
populated throughout, including the final shot.
LOCATION MAP
Broad city avenue running away from camera into deep perspective toward distant towers.
Multi-lane asphalt with white crosswalk bars in the foreground, a yellow center line, and a
hedged flower median down the middle. Tall stone buildings line both sidewalks. The avenue is
alive: moving cars, taxis, and a bus flow along the lanes in both directions, parked cars line the
curbs, and pedestrians walk the sidewalks and cross at the crosswalks. The woman rides the
green motorcycle at speed through this live traffic along the roadway. She travels screen-left to
screen-right across the early shots, then away from camera down the avenue in the final rear
pull-back. Bright sun from a high side angle casts hard shadows across the road.
FIRST FRAME AND SPATIAL BLOCKING
Opens already in fast motion on a dynamic moving medium shot of <<<image_3>>> riding the
<<<image_1>>> green motorcycle at speed through the sunny, busy avenue, cars moving in the
lanes and pedestrians on the sidewalks around her. Exactly one hero person exists:
<<<image_3>>> on the <<<image_1>>> bike; all other drivers and pedestrians are anonymous
background extras. Screen direction — she moves left-to-right in the early and side shots, away
from camera in the final rear pull-back.
FORMAT MODE
CONTROLLED MULTI-SHOT SEQUENCE, 16:9, 10.0s, real-time motion. Five segments with
HARD CUTs at 3.0s, 6.0s, 6.5s, 8.0s. Character, motorcycle, wardrobe, geography, screen
direction, traffic, and sunlight persist across cuts. Every segment has a moving camera; the final
segment is a slow, gradual backward pull-back rather than a static hold.
OPTICS
LENS LOCK SEG 1 (dynamic moving medium) = 47° normal, camera moving fast with her,
medium framing on rider and bike.

LENS LOCK SEG 2 (moving side-to-front tracking) = 47° normal, camera moving beside her
then swinging ahead to a front three-quarter of rider and bike.
LENS LOCK SEG 3 (half-second flash face close-up) = 85° equivalent tight framing on her face,
shallow depth of field, camera moving with her.
LENS LOCK SEG 4 (dynamic low chase-and-rise hero shot) = 29° wide, low behind the bike,
rising and pushing.
LENS LOCK SEG 5 (rear view, gradual pull-back, rides away) = 84° wide, behind the rider,
camera dollying slowly backward.
Rectilinear, no fisheye, natural proportions. Strong daylight, deep focus except the shallow
close-up.
CAMERA
Seg 1: a DYNAMIC fast moving medium shot — the camera races and arcs with her as she
rides hard through traffic, energetic tracking with a little handheld snap, conveying real speed
against the moving street. Seg 2: a MOVING side-to-front tracking move — the camera starts
beside her in profile at speed, then travels forward and swings around to the front, ending on a
front three-quarter view that shows <<<image_3>>> and the green <<<image_1>>> motorcycle
head-on as she rides toward the lens; live, energetic, matched-speed motion, never static. Seg
3: a HALF-SECOND flash tight close-up on her face, camera moving with her — a brief punchy
beat, in and out fast. Seg 4: a DYNAMIC aesthetic hero shot — a low camera close behind and
beside the rear wheel, pushing forward with the bike and rising/craning up along the machine to
reveal her and the glowing green bodywork from a sweeping low-to-high angle, cars streaking
past, a cinematic energetic move. Seg 5: a REAR/BACK view directly behind the rider — the
camera sits behind her and the bike and gradually dollies backward, a smooth, slow reverse
pull-back, as she rides away down the avenue; the gap opens up and the busy street widens
around her. Moving, gentle, and continuous — not static. Motion is energetic and moving
throughout; the final segment resolves into a graceful backward pull-back rather than a locked
hold.
ACTION TIMING
0.0s to 3.0s — DYNAMIC MOVING MEDIUM ON RIDER. Camera moving fast with her, medium
shot: <<<image_3>>> rides the <<<image_1>>> green motorcycle hard through the sunny, busy
avenue, body low over the tank, hands on the grips, weaving quickly between moving cars, the
translucent green bodywork catching the sun and glowing, internal frame visible through the
panels. The camera races and arcs to hold her and the bike, conveying real speed. Motion blur
on the wheels, hard shadows sliding fast across the asphalt.
3.0s HARD CUT
3.0s to 6.0s — MOVING SIDE-TO-FRONT. The camera tracks parallel beside her at speed in
clean side profile — leaning into her line, windbreaker rippling hard, wheels spinning, red-sprung
shock working over the road — then travels forward and swings around ahead of her, coming to
a front three-quarter view that shows her and the green motorcycle head-on as she rides toward
camera, front forks and slit-eye headlight leading, traffic and storefronts streaking past around
her. Continuous, energetic, matched-speed camera move throughout — moving the entire time,
showing the bike and rider from the side and then the front.
6.0s HARD CUT
6.0s to 6.5s — HALF-SECOND FLASH FACE CLOSE-UP. A half-second tight close-up on her
face, camera moving with her: focused dark eyes ahead, loose strands of hair whipping, wind in
her face, warm sun on her features, the busy street streaking softly behind. In and out fast — a
quick punchy accent.
6.5s HARD CUT
6.5s to 8.0s — DYNAMIC LOW CHASE-AND-RISE HERO SHOT. An aesthetic, high-energy
move: the camera sits low, close behind and beside the spinning rear wheel, pushing forward

with the bike, then cranes and rises up along the machine to sweep from the slick tire and red-
sprung shock up to the glowing green bodywork and the rider, a low-to-high reveal as she

carves through traffic — cars and buildings streaking past, sun flaring off the translucent panels.
Cinematic, dynamic, and satisfying to watch. Motion blur and real speed throughout.
8.0s HARD CUT

8.0s to 10.0s — REAR VIEW, GRADUAL PULL-BACK, RIDES AWAY THROUGH TRAFFIC.
From directly behind the rider — seeing her back and the bike's rear — the camera gradually
dollies backward as she rides away down the road into deep perspective through active flowing
traffic — moving cars and taxis in the lanes around and ahead of her, a bus further down,
pedestrians walking the sidewalks and crossing at the crosswalk. She rides away from camera
while the camera simultaneously pulls back, so she recedes and the busy sunny avenue opens
out around her toward the distant towers, hard shadows and lane lines leading the eye after her.
The street stays visibly alive and populated. Final frame holds on the long avenue with her small
receding figure amid the traffic and people.
PHYSICS
Real motorcycle dynamics — genuine high forward speed driven by the engine (no pedaling),
throttle-driven acceleration, body and bike leaning into quick line changes, front forks and the
red rear shock compressing over road inputs, slick tires tracking the asphalt, motion blur on the
spinning wheels. The bike carries real mass and momentum; the rider's weight shifts naturally
as she threads traffic at speed. Surrounding vehicles carry real mass — smooth rolling, braking,
and lane tracking, correct scale as they recede; pedestrians walk with natural grounded gait.
Windbreaker and stray hair flutter hard in the airflow. Hard sunlight casts sharp, correctly angled
shadows from her, the bike, the traffic, and the buildings. No floating, no skating, no teleporting
— all motion continuous and grounded.
LIGHTING
Bright clear sunny day exactly like <<<image_2>>>: strong high-side direct sun, deep blue
cloudless sky, hard crisp shadows across the pale asphalt, warm sunlit building faces, cool
shadow sides. Her face stays clearly readable; the translucent green bodywork glows where the
sun passes through it and catches bright speculars, the red anodized parts popping. Clean
natural daylight, high contrast but not blown out, no haze.
AUDIO
No music, no dialogue, no narration, no subtitles. Natural busy-street ambience with the
motorcycle: engine note and exhaust burble rising and falling with the throttle, tires rolling on
asphalt, wind rushing past at speed, city traffic hum, passing engines, occasional car horns, faint
pedestrian voices and footsteps, her breath just under the wind on the close-up. A Doppler-style
shift as she passes nearer the camera. Understated, real on-location sound, no effects.
POSITIVE LOCKS
Exactly one hero person appears: <<<image_3>>> — the East Asian young woman with a dark
low bun in the blue-and-red star windbreaker over a grey hoodie, black leggings, and cream
sneakers — riding the <<<image_1>>> translucent green motorcycle throughout; all drivers and

pedestrians are anonymous background extras. The bike matches <<<image_1>>> with its see-
through green faceted bodywork, black internal frame, red accents, and slick tires. The location,

road, median, buildings, and sky match <<<image_2>>> in bright sunlight, a lively populated
avenue with moving cars and people. The camera moves in every segment; the final segment is
a rear/back view with the camera gradually pulling backward as she rides away — a slow
reverse dolly, not static. The side segment travels from a side profile to a front three-quarter
showing the bike and rider from the front. The face close-up is a half-second flash, immediately
followed by a dynamic low chase-and-rise hero shot. The final shot is NOT empty — it clearly
shows moving cars, taxis, a bus, and pedestrians on the busy avenue as she rides away.
Screen direction holds — she moves left-to-right in the early and side shots and rides directly
away from camera in the final rear pull-back. Motorcycle, wardrobe, and hair stay identical
across every cut. All vehicles and signage are generic and unbranded with no readable real
logos. 16:9, photoreal sunny street look, real-time motion.
~~~~

### P2. Workflow B: Seedance 2.5 Edit

- Model / settings: Genjutsu (Object Swap / Motion Transfer) and Seedance 2.5 Edit
- Use-case: other
- Context: Step 2: Pick a method. Write the change out as a prompt, or draw directly on the frame to mark where it should happen.

~~~~text
SCENE CONTEXT
On a sunny alpine ski slope high above a forested valley, a snowboarder carves fast down an
open groomed run, then reaches a snow kicker, hits it, throws a Rodeo (off-axis backflip spin),
and lands cleanly — shot as one energetic, flowing, handheld-feeling sequence that ends riding
away.
ACTIVE REFERENCES
<<<image_1>>>: the rider, adult man, dark skin, calm focused face; matte-black snowboard
helmet with purple-mirror ski goggles (worn down over the eyes while riding), bright orange
hooded insulated snowboard jacket with a black full zip, black snow pants, black boots, on a
plain matte-black snowboard with black bindings. 100% matches the reference.
<<<image_2>>>: location reference — a sunny groomed alpine piste on a mountainside: wide
corduroy-groomed white run curving downhill, a dense dark evergreen pine forest lining the
right/lower edge, a red-and-orange safety net fence with slalom poles on the left, a drag/chair lift

line and cables running up through the trees, a deep forested valley below, layered snow-
capped mountain ranges across the horizon, deep blue clear sky, warm low sun with long crisp

shadows and a golden cast on the snow. Use its terrain, palette, and atmosphere. The small
snow kicker is NOT present in the opening — the run starts as clean open piste, and a snow
kicker appears only for the trick segment further down the run.
LOCATION MAP
Groomed alpine piste curving downhill along a mountainside. Corduroy-textured snow surface
underfoot; the upper part of the run is clean open piste with no jumps. Further down the run,
toward the middle background, a single built snow kicker serves as the takeoff for the trick. Left
edge: a red-and-orange safety net fence with tall slalom poles and a snowy bank. Right and
lower edge: a dense dark snow-dusted pine forest dropping into a deep valley. A lift line with
cables runs up through the trees. Across the horizon, layered snow-capped peaks under deep
blue sky. Warm low sun rakes long crisp shadows and a golden tone across the snow. The rider
travels away-and-downhill through the run, reaching the kicker only later.
FIRST FRAME AND SPATIAL BLOCKING
Opens already in fast motion on a dynamic, living handheld wide of the mountainside piste with
<<<image_1>>> ripping down the clean open groomed run at speed — no jump in frame — the
pine forest, valley, lift line, and distant ranges establishing the location. Exactly one person
exists: <<<image_1>>>. Clean sunny mountain scene, energetic and alive from the first frame.
FORMAT MODE
CONTROLLED MULTI-SHOT SEQUENCE, 16:9, 8.0s, real-time motion. Four segments with
HARD CUTs at 2.0s, 3.5s, and one continuous fly-by covering the trick. Character, board,
wardrobe, geography, and sunlight persist across cuts. Every segment carries a dynamic, alive,
operator-driven camera.
OPTICS
LENS LOCK SEG 1 (dynamic wide) = 84° wide, fast low tracking of his descent.
LENS LOCK SEG 2 (medium, other side) = 47° normal, opposite side of his line, fast tracking.
LENS LOCK SEG 3 (behind, wide, into trick) = 84° wide, following from behind.
LENS LOCK SEG 4 (fly-by on trick + landing) = 47° normal, single continuous move past him,
then wide on landing.
Rectilinear, no fisheye, natural proportions. Bright daylight, deep focus with a shallow, reactive
rack on the fly-by.
CAMERA
The whole sequence is shot like a real, skilled follow-cam operator (a rider filming a rider) —
dynamic, reactive, and alive, never on rails or robotically smooth. Throughout: natural handheld
micro-shake and body sway, subtle speed-wobble, small reframing corrections that chase the
action a beat late, quick focus hunts that snap onto him, tiny bumps as the operator rides the

terrain, and momentum that overshoots slightly and settles. Real living camera energy in every
shot.

Seg 1: fast, low, energetic tracking that races alongside and slightly behind his carve, whip-
following his direction changes with real speed, snow spray flicking the lens, the frame breathing

and correcting with him. Seg 2: quick reposition to the OTHER side of his line, fast medium
tracking that swoops and sways with him, matching and pushing his speed, small handheld
jostle. Seg 3: behind him, wide, following over his shoulder with live bounce and drift as he
approaches and rides up the kicker. Seg 4: ONE continuous alive move — as he launches and
rotates the Rodeo, the camera flies past close beside him with real momentum, whip-tilts to
track him, and racks focus (with a quick hunt) to lock onto him at the apex, then carries through,
settling into a wide as he lands. Continuous, reactive motion throughout; the trick is one
unbroken living fly-by.
ACTION TIMING
0.0s to 2.0s — DYNAMIC WIDE, RIPPING DOWN OPEN PISTE. <<<image_1>>> charges
down the clean open groomed run at speed — no jump in the shot — laying into hard carves
that throw big arcs of snow spray off the edges, goggles down, orange jacket streaking bright
against the white snow and dark pines. The living follow-cam races low and fast
alongside/behind him, whip-following his line with handheld energy and small corrections, spray
flicking toward the lens, the forested valley and distant ranges sweeping through the
background.
2.0s HARD CUT
2.0s to 3.5s — FAST MEDIUM, OTHER SIDE. Camera snaps to the opposite side of his line,
medium shot swooping and swaying with him at speed on still-open piste — board flexing and
edging hard, knees pumping the terrain, snow spraying, aggressive focused posture as he
builds speed down the run. Fast matched-speed move with live handheld sway and a quick
focus settle. The snow kicker is not yet in frame.
3.5s HARD CUT
3.5s to 8.0s — BEHIND INTO TRICK, FLY-BY, LANDING. Wide from behind over his shoulder
with live bounce: now the single snow kicker comes into view ahead down the run; he rides up
toward it and pops off the lip. As he leaves the jump he throws a RODEO — an off-axis backflip
combined with a horizontal spin, board grabbed, body inverting and rotating diagonally against
the blue sky over the valley. In ONE continuous alive move the camera flies past close beside
him with real momentum, whip-tilts and racks focus (a quick hunt) to lock sharp on him at the
apex of the rotation, snow and sky streaking behind. He completes the rotation, brings the board
back under him, and touches down on the landing in a clean absorbed crouch. The camera
overshoots slightly and settles through to a wide as he rides away down the run, spraying snow.
Final frame holds the living wide of him riding off across the sunny mountainside piste.
PHYSICS
Real snowboarding dynamics — genuine high downhill speed, hard edge carves throwing big
snow spray, board flex and knee absorption over terrain. At the kicker: a believable pop off the
lip, true ballistic airtime, and a correct Rodeo rotation (off-axis backflip with spin) with the board
grab and body inversion reading naturally against gravity. Landing carries real impact —
compression through the knees, a puff of snow on touchdown, board tracking as he rides out.
Loose snow spray and powder behave with real weight; goggles, jacket, and pants flutter in the
airflow. Crisp low-sun shadows track with him. The camera itself obeys real physics —
momentum, inertia, small terrain bumps, and settle — never floaty or robotic. No teleporting; the
whole run and trick are covered by continuous visible motion.
LIGHTING
Bright clear alpine day exactly like <<<image_2>>>: warm low sun, deep blue cloudless sky,
long crisp shadows and a golden cast on the white snow, sparkling snow highlights, dark
evergreen forest in shade. The orange jacket pops vividly; his goggles catch purple-mirror
flashes. His face and body stay clearly readable; snow highlights bright but not blown out, no
haze.

AUDIO
No music, no dialogue, no narration, no subtitles. Natural mountain ambience only: the board
carving and scraping hard on snow, edge spray hiss, the whoomp and rush of air off the kicker
during the trick, the thud and snow-spray of the landing, wind across the open piste and rushing
past at speed, faint distant lift hum. Understated, real on-location sound, no effects.
POSITIVE LOCKS
Exactly one person appears: <<<image_1>>>, in the orange jacket, black pants, black helmet
with purple-mirror goggles down, on the matte-black board throughout. The location matches
<<<image_2>>> — a sunny groomed mountainside piste with a dark pine forest, red-orange net
fence and slalom poles, a lift line, a forested valley below, and layered snowy ranges under
deep blue sky in warm low sun. The opening two shots show clean open piste with NO jump in
frame — the snow kicker is absent there and appears only in the trick segment further down the
run. The camera is dynamic, realistic, and alive in every segment — handheld follow-cam
energy with natural shake, sway, momentum, and reactive focus, never static or robotic. The
trick is a Rodeo (off-axis backflip spin) off the single snow kicker, captured in one continuous
living fly-by that racks focus onto the rider. Board, wardrobe, and helmet stay identical across
every cut. All gear is generic and unbranded with no readable real logos. 16:9, photoreal sunny
alpine look, real-time motion.
~~~~

