# Which AI Video Tools Are Best at Following Your Prompt?

Source: https://higgsfield.ai/blog/ai-video-prompt-adherence-comparison  
Higgsfield, Aug 30, 2026  
Prompts extracted: 1

Prompt adherence = objects, colors, camera move, on-screen text and event order matching the prompt. Differences appear with ≥3 details at once.
Seven adherence habits:
1. Reference images for anything that must look exact (character, product, location).
2. **Name the camera move** ("slow push in", "pan left", "static wide") — not "cinematic camera movement".
3. Specify genre/physics context when motion matters.
4. **Lay events out in order** (first, second, third).
5. Limit competing details per shot — split into two shots if needed.
6. Name the light source and strength (not "moody lighting").
7. Call out text and colors by name (they drop out most).
Test result with one constraint-packed prompt: **Cinema Studio 4.0** kept the most constraints (settings reduce interpretation); **Seedance 2.5** best multi-angle coverage and object detail (softened some text); **Veo 3.1** best physics/material realism (missed on-screen text, softened colors); **Gemini Omni Flash 1.1** best stylized/VFX (more variance on literal details).
Other models: Kling 3.0 (multi-shot, subject consistency, native audio), Hailuo 2.3 (stylized/character), **FLUX 3 Video** (video continuation, synced audio, integrated readable typography), **WAN 3.0** (restyling footage), Marketing Studio (template ads). Longer prompts don't automatically help — use settings and references instead of more words.
**The test prompt is a masterclass shot-list format**: Global camera/film-stock/lighting block (ARRI Alexa 35, Kodak Vision3 250D, sun angle and Kelvin values, motion-matched cuts in one screen direction) -> IMPORTANT rule blocks (CLEAN PLATE: no logos/text anywhere; STAGING: axis never crossed) -> cast/location/creature definitions mapped to `<<<image_N>>>` references with explicit wardrobe -> timecoded shots (00.0–02.2 | name | action | Cam: lens T-stop, height, move | Light) each ending with a "Cut on …" motion-match instruction -> long Negative list.

## Prompts (verbatim)

### P1. Plant-goddess vs three friends — timecoded multi-shot adherence test prompt
- Use-case: Cinematic film scene | Model: Seedance 2.5 / Cinema Studio 4.0 / Veo 3.1 / Gemini Omni Flash 1.1 | Settings: 15 s multi-shot, 4K 24fps look, 5 image refs, timecoded shots + negatives

```text
Global. ARRI Alexa 35, 4K, 24fps, 180° shutter, Kodak Vision3 250D film emulation, fine grain,
subtle anamorphic flares. Light: bright afternoon, hard sun at 40° from behind-right, 5600K key,
cool 7000K sky fill, bounce off facades and asphalt, deep blue sky one stop hot; green-pink
bounce entering the shadows in the second half, cold steel speculars in the finale. Every cut
lands on a motion match — the camera always moves in the same screen direction across the
edit, so nothing snaps.
IMPORTANT — CLEAN PLATE RULE (every single shot): absolutely no logos, no brand marks,
no emblems, no badges, no hood ornaments, no manufacturer names, no license plates, no
stickers, no decals and no text of any kind on any vehicle — all cars and taxis are plain, generic,
unbranded shapes with smooth bare bodywork and blank grilles. Equally, no logos, no brand
marks and no text on any footwear — all shoes and boots are plain unbranded, no side stripes,
no swooshes, no heel tabs, no printed soles, no visible tags. No readable text anywhere else in
frame either — no shop signs, no street-sign lettering, no billboards, no banner text, no graffiti.
Every surface that would normally carry writing is blank.
IMPORTANT — STAGING RULE: from 06.3 onward the three friends stand in front of her, facing
her, squared up shoulder to shoulder in the middle of the roadway; she is straight ahead of them
down the avenue and they never turn away. The main confrontation coverage is a wide shot
from behind their backs — their three small silhouettes in the foreground, her enormous figure
filling the avenue ahead of them. The camera works around this axis but never crosses it.
Guy 1 (<<<image_1>>>): Asian man, grey knit beanie, dark fringe, brick-orange zip-up track
sweatshirt with racing patches, wide light blue jeans, plain black sneakers with no branding.
Guy 2 (<<<image_2>>>): white man, dark green cap, knitted rugby polo in green-yellow-cream
stripes with white collar, olive wide shorts, white socks with green stripes, plain black loafers
with no branding.
Guy 3 (<<<image_3>>>): Asian man, messy dark hair, burgundy mesh tee over grey hoodie,
camo cargo pants, plain tan boots with no branding, lime green backpack on one shoulder.
Location (<<<image_4>>>): wide sunlit New York avenue, brick and stone high-rises, plain
unbranded yellow taxis and generic cars with completely blank bodywork, no plates and no
markings, traffic lights, street lamps, wide sidewalks with pedestrians, street receding toward
distant skyscrapers.
Creature (<<<image_5>>>): a 45-meter plant goddess, taller than the buildings — her crown
level with the 20th floor. Extremely slender, narrow-hipped, elongated build: thin stem-like limbs,
no wide hips, straight willowy silhouette. Smooth sage-green sculptural skin with soft gradients,
serene closed-lidded face, small pink star mark by one eye, dark green leaf-plate bodice and
layered leaf skirt, leaf pauldrons at the shoulders. Crown of tall crimson-pink bud petals standing
upright like flames, with white and pink blossoms nested among them. Pink petals constantly
drifting from her body. Movement slow, weightless, almost floating. Style: hand-painted stylized
3D, soft shading, deliberately illustrated against the live-action city.
00.0–02.2 | Sidewalk. The three friends walk along the sidewalk, talking, glancing around, Guy 2
pointing up at a building, Guy 1 laughing, pedestrians passing. Cam: 35mm T2.8, chest height,
Steadicam reverse tracking front-three-quarter, matched to their pace, medium three-shot. Light:
hard rim sun on shoulders and beanie, faces in soft facade bounce.
Cut on the camera's leftward drift.
02.2–03.4 | Onto the road. Profile side view as they step off the curb into the middle of the
roadway — all three stop dead, a deep rolling boom of enormous footsteps rolling down the
avenue, heads turning to look straight up the street. Cam: 40mm T2.8, side tracking with them,
decelerating to a stop as they freeze, one micro-jolt in the lens. Light: shadows starting to
tremble.
Cut on the jolt.
03.4–04.2 | Windows. Glass rattling in the high-rise frames, sky reflections rippling, dust shaking
off the sills. Cam: 85mm T2.0, low angle up the facade, slow rise, vibration in the mount, shallow
DOF. Light: sun snapping off the shaking glass in short specular flashes.
Cut on the rise — next shot continues descending.
04.2–05.0 | Cars. Plain unbranded taxis and generic cars rocking on their suspension, hazards
blinking, mirrors trembling, sun skating across smooth bare hoods — blank grilles, no emblems,
no plates, no text anywhere. Cam: 24mm T4, curb level low on the wheels and suspension, slow
descent to the ground, handheld shake. Light: hard specular on paint, deep cool shadow under
the chassis.
Cut on the descent — next shot is already at ground level.
05.0–06.3 | The sprout. Guy 3 crouches slightly, looking down; the asphalt cracks and a small
green flower pushes through, unfolding pink petals. Cam: 100mm macro T2.0, at ground level,
slow orbit around the flower plus a gentle push-in, razor-thin DOF, his plain unbranded boots
and the street soft behind. Light: raking backlight translucent through the petal, green
subsurface glow.
Cut on the orbit — next shot continues the same rotational direction.
06.3–07.4 | Squaring up. The three of them stand shoulder to shoulder in the middle of the road,
facing straight down the avenue at her, heads tilting back, pupils dilating, lips parting. Cam:
50mm T2.0, profile medium shot at eye level, arc continuing around them while tilting up on their
eyeline, handheld breathing. Light: the sun goes behind her crown — key drops two stops, faces
falling into cool shadow.
Cut on the tilt — next shot continues upward.
07.4–09.4 | The standoff — wide from behind their backs. Wide shot from directly behind the
three of them: their small dark silhouettes stand together in the middle of the roadway in the
lower foreground, backs to camera, heads tilted up — and ahead of them, filling the avenue
between the high-rises, the slender goddess walks toward them, taller than the buildings, thin
stem legs passing between the towers, crimson bud crown eclipsing the sun, pink petals drifting
down the street toward the three men. Cam: 18mm T5.6, low behind-the-back position on the
confrontation axis, continuous slow push in toward her past their shoulders with a gentle tilt up,
strong converging verticals, handheld breathing. Light: full backlit eclipse, petals glowing
translucent, god rays fanning between them, her long shadow stretching down the avenue over
the three of them, dust and pollen in the air.
Cut on the push — next shot continues forward, now high above her.
09.4–11.2 | High behind her shoulder. High angle from above and behind the goddess, close
over her shoulder and crown: her upright crimson bud petals fill the foreground, her narrow back
and leaf pauldrons below, and far down the avenue between her thin shoulders the three tiny
figures stand in the middle of the road, facing up at her. Petals drift up past the lens. Cam:
40mm T4, elevated behind-the-shoulder position, slow forward creep along her walking direction
with a gentle downward tilt, light handheld shake, her crown occasionally clipping the frame
edge. Then crash zoom in: snap the lens rapidly down the avenue past her shoulder onto the
three figures, very fast and punchy, keeping them readable through the sudden scale change,
landing on a bold tight composition of the three of them from her point of view. Light: raking sun
rimming her crown, flare across the frame, hard anamorphic streak on the zoom, focus lost and
regained.
Cut on the zoom's landing — next shot starts tight at ground level and pulls out.
11.2–12.4 | Grass at their feet. Tight on their plain unbranded shoes planted on the asphalt:
grass and small pink flowers pushing up between the cracks, spreading fast around their soles.
The camera pulls back and rises to their faces as they glance down, then at each other — none
of them breaks the line, they stay turned toward her. Cam: 35mm T2.8, low, fast pull-back and
crane up, handheld. Light: strong green bounce filling the shadows, warm sun patches breaking
through her crown.
Cut on the crane — next shot continues rising.
12.4–15.0 | The armor. Back to the wide shot from behind their backs, now closer: the three of
them exchange a nod and drop into fighting stances shoulder to shoulder, still facing her,
holding the middle of the road, her enormous figure towering ahead of them down the avenue.
Dark grey matte steel armor materializes over them in a single fast upward sweep —
segmented boots, shin and thigh plates, articulated gauntlets sliding over the fingers, back and
shoulder plates snapping into place with a metallic ripple, closed full-face helmets sealing last.
Their street clothes vanish beneath the plating; each suit carries a thin painted trim in its owner's
color — brick-orange, dark green, burgundy. Pink petals fall around them throughout. Final
frame: three dark grey armored figures braced in a row from behind, facing her, her silhouette
filling the sky ahead. Cam: 32mm T2.8, low behind-the-back position, continuous rise into a slow
push-in, handheld breathing settling to almost steady on the last beat, slight roll. Light: cold hard
speculars racing across the fresh steel as each plate forms, backlit sun through her crown
haloing the three armored silhouettes, god rays between the petals.
Negative: drone flyby, aerial fly-through, smooth cinematic drone, car logos, car emblems, car
badges, brand marks, hood ornaments, manufacturer names, license plates, number plates,
stickers, decals, taxi markings, shoe logos, sneaker branding, side stripes on shoes, printed
soles, heel tabs, shop signs, street sign text, billboards, banner text, graffiti, any readable text,
watermark, characters facing away from the creature, running away, photorealistic flower, wide
hips, curvy hourglass figure, morphing faces, extra limbs, duplicate characters, distorted
architecture, oversaturated, warped hands, plastic skin, static camera, human-scale creature,
sexualized design, glowing neon sci-fi armor,
```

