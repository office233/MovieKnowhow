# How to Turn Claude Into a Full Creative Studio With Higgsfield

- Source: https://higgsfield.ai/blog/claude-higgsfield-mcp-creative-studio
- Byline: Higgsfield · Sep 2, 2026 · 10 min · Last updated: 3w ago
- Prompts extracted: 3

## Notes

**Topic:** turning Claude into a creative studio with one MCP connection (Sep 2 2026).

**Setup:** connector URL `https://mcp.higgsfield.ai/mcp` -> Claude Desktop/claude.ai Customize -> Connectors -> add "Higgsfield" -> Connect -> sign in with existing Higgsfield account. Uses your normal credits (no separate balance, no API key, no MCP surcharge); **paid subscription required**. Make sure the connector is enabled per conversation.

**What's available:** 30+ models (Soul, Cinema Studio, Seedance 2.5, Kling ...); agent picks a model if you don't name one. Images up to 4K (text, reference, or both); video with refs + ops (upscale, reframe, background removal, motion controls); audio (voiceover, voice cloning, voice change, dubbing); full skills (ad from product photo + creator ref, faceless explainer with VO and subs, multi-variation campaign from one ad). Claude can browse your generation history and reuse past outputs as references.

**6-step workflow (knight duel example):**
1. Verify connection (ask for credit balance / recent generations).
2. Generate or attach the reference image first (character/product/location) — later steps get a concrete visual source.
3. For voice-led pieces **generate the audio first** (VO with timing + voice descriptor; music with genre, key, BPM, per-second cue sheet), then choose a video model that supports that audio workflow, or generate native audio and refine voice later.
4. Generate the video: describe action, environment, framing, light, pacing, look in one message (example = single continuous one-shot, 10 s, 16:9, anamorphic, with a REFERENCES block naming @image1 location etc.).
5. Review vs brief; describe the specific issue and let Claude run the right edit/skill.
6. Outputs land in Higgsfield Assets for download/reuse.

**5 tips:** name the model for predictability; lock references before building around them; specify output (format, action, framing, style, pacing, intended use), not just subject; review one generation before scaling; ask Claude to show expected credit cost and wait for approval.

## Prompts (verbatim)

### P1. Full Workflow: Generating a Project Through Claude

- Model / settings: Via Higgsfield MCP in Claude (image -> voice/music -> 10 s 16:9 video one-shot)
- Use-case: cinematic film scene
- Context: Step 2: Generate or attach a reference image. If the project needs a consistent character, product, location, or visual direction, establish that reference before generating the video. This gives later steps a concrete visual source instead of requiring the subject to be described again from scratch.

~~~~text
Photorealistic film still of two medieval knights locked in a swordfight on a
snowbound battlefield, shot on location with real steel armour, documentary realism.
COMPOSITION: side-on view, both knights in full body profile facing each other in the
centre of frame, blades crossed and grinding together above their heads, both leaning
in with full body weight, feet braced wide in churned frozen mud, knees bent, medium
wide shot.
LEFT KNIGHT: 15th century steel plate harness with a warm grey mottled patina,
uneven hand-polished surface showing hammer planishing marks, fine radial scratches,
shallow dents and darkened recesses, bright wear-polish on the raised edges of the
pauldrons and elbow cops, visible rivets casting real shadows, rounded bascinet with a
hinged pointed visor and narrow eye slit, deep crimson quilted arming doublet showing
at the armpits and thighs with genuine fabric weave and stitching relief, worn brown
leather straps and tarnished brass buckles, mud spattered up the greaves and sabatons.
RIGHT KNIGHT: heavier steel harness with a darker oxidised finish and cloudy grey
mottling, tall pointed bascinet with a hinged visor, high riveted plate gorget,
fluted vambraces, a faded ochre linen surcoat over the breastplate with real cloth
creases, frayed hem and dirt staining, weathered brown leather belt, a small kite
shield slung on his back with cracked painted heraldry and chipped paint edges,
snow crusted into the joints and articulation gaps.
SWORDS: real forged steel longswords, satin grey blade finish with visible grind
lines, small nicks along the edges, blued crossguards, leather-wrapped grips darkened
with use, a faint scatter of sparks and steel dust at the point of contact.
LOCATION: open snowbound field, churned dark frozen mud with real clod texture and
boot prints in the foreground, patchy crusted snow and dead golden grass, war arrows
stuck upright in the ground at irregular angles with real fletching, tall thin poles
carrying weathered crimson and cream pennants with frayed edges snapping in the wind,
low snow-covered ridges, the faint grey silhouette of a castle curtain wall with
crenellations on the distant horizon.
SNOW AND ATMOSPHERE: light dry snow blowing diagonally across the frame, individual
flakes catching the sun, uneven patchy ground mist drifting in ragged bands rather
than uniform fog, fine snow dust lifted by the wind, faint breath vapour escaping the
visor slits.
LIGHT: low winter sun sitting just above the horizon behind the right knight, strong
backlight blowing out the right side of frame into a bright warm haze, hard rim light
tracing both figures, deep cold blue-grey shadow on the camera-facing side with only
weak bounce from the snow, high dynamic range with genuine highlight rolloff, long
raking shadows across the mud, natural atmospheric flare.
CAMERA: shot on 35mm film with an anamorphic 50mm lens, low camera close to the ground
at knee height, f/2.8, sharp focus on the crossed blades and both figures, slight
falloff at the frame edges, subtle lens breathing and mild chromatic aberration on the
backlit edges, natural halation around the sun, visible film grain, handheld micro
shake, no post sharpening.
REALISM: real physical materials, no cgi smoothness, imperfect surfaces, genuine
weight and inertia in the bodies, historically accurate 15th century harness,
documentary film photography, unretouched, photographic imperfection.
--ar 16:9
~~~~

### P2. Full Workflow: Generating a Project Through Claude

- Model / settings: Via Higgsfield MCP in Claude (image -> voice/music -> 10 s 16:9 video one-shot)
- Use-case: cinematic film scene
- Context: Step 3: Generate the audio. If the project is voice-led, generate the voiceover first. Then choose a video model that supports the type of audio workflow you need, or generate the video with native audio and refine the voice afterward.

~~~~text
VOICE (0.0–2.6s, then silence): Knight 1 inside a closed helm.
[voice: man, early 30s, deep resonant chest voice, heavy theatrical delivery, muffled and boxy from inside a steel bascinet, close and claustrophobic, audible breath, cold and calm not shouted, slow weighted pacing, English accent]
"They sent their best. [breath] Let them come."
MUSIC (0.0–10.0s, audible throughout): epic medieval battle orchestral, instrumental, no vocals.
War horns, massive low brass, thundering taiko and timpani, snare rolls, low male choir chant,
harsh minor string ostinato. D minor, 88 BPM, drums accelerating.
0–1.2s: lone distant war horn, low sub drone, cymbal swell under the voice.
1.2–2.4s: hard taiko impact on the clash, low strings driving, snare in.
2.4–4.4s: accelerating ostinato, brass stabs on each blade contact, drums doubling, choir low.
4.4–5.4s: full orchestra fortissimo on the simultaneous strike, brass and choir crash, one
monumental drum hit.
5.4–7.2s: drums drop a beat, then two crushing hits on the disarm and kick, choir guttural.
7.2–10.0s: menacing brass swell, lone horn over sustained choir, single heartbeat pulse, unresolved, long reverb tail.
SFX (continuous): howling gale, driving snow, banners snapping, ringing steel with scrapes and sparks, plate clattering, sabatons crunching on snow and mud, sword burying its point, heavy metallic body impact, laboured breathing in the helm.
MIX: voice forward 0–2.6s with music ducked, then music and SFX to full. Wide cinematic
reverb, deep sub-bass, brass forward. No dialogue after 2.6s.
~~~~

### P3. Full Workflow: Generating a Project Through Claude

- Model / settings: Via Higgsfield MCP in Claude (image -> voice/music -> 10 s 16:9 video one-shot)
- Use-case: cinematic film scene
- Context: Step 4: Generate the video. Ask Claude to create the video using the reference assets and creative direction established in the previous steps. Describe the action, environment, framing, lighting, pacing, and overall look in the same message. Claude can select an appropriate Higgsfield model automatically, or you can name a specific model yourself.

~~~~text
SINGLE CONTINUOUS ONE-SHOT, 10.0 seconds, 16:9, anamorphic cinematic, no cuts.**
Two armoured knights duel on a snowbound battlefield slope under a vast storm sky with a strong sun break, heavy snow blowing the whole time, red, white and gold banners snapping in the wind — the camera riding the whole exchange in one unbroken flight from a tight close-up to
a low over-the-shoulder finish on the loser crawling backwards.
**REFERENCES.**
**Location** (@image1): bleak windswept battlefield slope in a winter storm — churned dark
earth and patchy snow over dead ochre grass in the foreground, rolling snow-covered hills receding to a distant fortified silhouette. **Many tattered banners on thin bending poles scattered across the field: crimson red flags with pale device marks, split white pennants, small
gold-yellow pennants — all rippling and cracking in the wind.** Broken spear shafts and arrows driven into the ground at angles, a round wooden shield propped against a cairn of stones, scattered debris and cloth scraps. Above: an enormous churning cloud front — dark storm mass on the left breaking into billowing lit cumulus on the right.
**MORE SUN:** a **strong, bright sun break burning through the cloud on the upper right**,
throwing hard low-angle golden-white light across the field — the snow crests glowing warm, long raking shadows stretching from the knights and the banner poles, brilliant rim light on steel, visible god rays fanning through the falling snow, warm glow on the ochre grass, and repeated lens flares as the camera swings past the sun.
**MORE SNOW:** **thick, heavy snowfall throughout** — dense fat flakes driving diagonally across every frame in gusting sheets, snow streaming off the ground in blowing veils, flakes catching the sunlight and flaring bright against the dark cloud, visibility softening toward the distant hills, snow settling on the pauldrons and helms of both knights and building up as the
fight goes on.
**Knight 1** (@image2): full plate harness in bright polished-but-scuffed steel — rounded
bascinet with a pointed apex and hinged conical visor with a narrow eye slit, wide steel gorget, broad rounded pauldrons, a plain etched cross outline on the chest plate, red-and-blue heraldic quilted sleeves at the upper arms, articulated vambraces, mail skirt under a steel fauld, brown
leather belt with brass buckles, greaves and rounded sabatons, gauntleted hands, long straight double-edged sword with a gilt crossguard.
**Knight 2** (@image3): full plate harness in darker weathered steel — bascinet with a tall pointed crest and slotted visor, deep gorget, dark green surcoat sleeves embroidered with pale
grey serpentine knotwork, fluted fauld and tassets, brown cloth skirt beneath, articulated vambraces and gauntlets, long pointed sabatons, long straight sword.
**CONSTANTS (every frame).** Heavy snow drives diagonally and continuously — never stopping, never freezing. **Every banner, flag and pennant moves constantly in the wind:
rippling, twisting, snapping taut, poles flexing.** Grass bends, snow streams sideways in gusts, cloth scraps flutter. The storm front churns behind the action and the sun break keeps burning through it. All heraldry is invented and generic — no real coats of arms, no readable text, no
recognisable insignia.
**0.0–1.2s | CLOSE-UP — KNIGHT 1.** **Tight close-up on Knight 1's helm, filling the frame**
— the pointed apex and hinged visor, the narrow dark eye slit, sunlight raking hard across the polished steel, snowflakes landing and melting on the plate, breath fogging faintly out through the slit. **His sword rises into frame in front of him, held vertically, the blade edge catching a
hard flare of sun.** Snow drives past the lens. *Cam:* 85mm T2.0, very shallow focus, slow push in with a slight rise, gentle handheld breathing, sun flare bleeding in from the upper right.
**1.2–2.4s | PULL TO WIDE — THE CLASH BEGINS.** The camera pulls back fast and drifts out into a **wide two-shot** as Knight 2 strides in from the right and they close; steel rings out as the first blows land — a high cut parried, a shoulder-check, blades scraping apart. Snow
bursts up off the churned earth. *Cam:* 24mm T4, fast backward pull-out, low horizon, banners whipping across both edges of frame, sunlit storm sky filling the upper two-thirds, god rays
through the snowfall.

**2.4–4.4s | THE EXCHANGE — CAMERA FLIES BESIDE THE BLADES.** **Knight 2 winds up a heavy overhead swing; Knight 1 blocks it high with a shower of sparks and immediately answers with a hard diagonal counter-cut**, driving Knight 2 back a step. They trade fast: a thrust turned aside, a pommel strike, a low cut blocked at the knee, a shoulder ram. **The
camera flies in close alongside them, sweeping past their shoulders and low along the clashing blades — on each heavy impact it snaps in bold and tight on the swords, sunlit steel filling frame at the moment of contact, then flows back out with the movement.** *Cam:* 32mm T2.8, fast
lateral flight arcing around them, hard punch-ins on the blade contacts, motion blur through the whips, jolts on impact, sun flaring as the camera crosses the light, never cutting, never stopping.

**4.4–5.4s | WIDE — SIMULTANEOUS STRIKE.** The camera swings out to a **wide two-
shot** exactly as **both knights swing at the same instant — blades meeting mid-air between

them in a single ringing crash**, both bodies torqued into the blow, snow exploding off the ground, banners cracking, sun blazing through the cloud behind them and backlighting the falling snow into a white curtain. *Cam:* 24mm T4, wide and level, brief settle on the collision,
immediately moving again.
**5.4–7.2s | IN BEHIND KNIGHT 2 — DISARM AND KICK.** The camera rushes forward and
**swings tight over Knight 2's shoulder**, his snow-dusted pauldron and crested helm filling the
lower frame. **Knight 2 winds up and smashes his blade down across Knight 1's guard, ripping the sword clean out of his hands — it spins away, flashing in the sun, and buries its point in the snow.** He steps in and **drives a hard front kick into Knight 1's chest plate**; Knight 1 is thrown
backwards and crashes onto his back with a heavy metallic clatter, snow and earth exploding around him. *Cam:* 35mm T2.8, fast push into a tight over-the-shoulder, following the sword's light for a beat, jolting hard on the disarm and the kick.
**7.2–10.0s | ORBIT AROUND KNIGHT 2, LAND BEHIND KNIGHT 1.** The camera **orbits around Knight 2 in a fast arc** — past his back, around his side, past his sword arm, the sun swinging through frame in a hard flare — then **flies low across the ground and settles tight behind Knight 1's shoulder in the snow**. From this over-the-shoulder position we see what he
sees: **Knight 2 standing over him, sword lowered and ready, advancing slowly**, rimmed by the sun with banners snapping behind him and snow pouring down. **Knight 1 scrambles
backwards on his elbows and heels, crawling away through the snow, gauntlet slipping, breathing hard through the visor.** *Cam:* 35→28mm, continuous fast orbit easing into a low over-the-shoulder hold that drifts back with his retreat, handheld shake settling. Final frame holds on Knight 2 towering ahead, backlit, through the driving snow.
**OPTICS.** Anamorphic lens character, shallow cinematic depth of field, prominent soft oval flares whenever the sun crosses frame, rectilinear geometry, no fisheye. Heavy natural motion blur on the fast flights and swings, focus riding the blades and helms.
**LIGHTING.** Storm-lit winter afternoon with a strong sun break — hard golden-white key from the upper right at a low angle, rimming helms, pauldrons and blade edges and casting long raking shadows across the snow; soft cool grey fill from the dark cloud mass on the left; deep
cool shadow inside the visors, bright bounce off sunlit snow lifting the underside of the plate. Backlit snowfall glows in sheets, god rays fanning through the flakes. Palette: warm sunlit snow and ochre grass against cold steel and dark storm cloud, crimson and gold banners. Cold
7000K shadows, warm 5000K key.
**PHYSICS.** The camera never stops or teleports; every flight carries real weight and eases in and out. Armour has genuine mass — plate rings and clatters, momentum shifts through the hips, sabatons dig and slip on packed snow and mud, the disarmed sword tumbles and buries
its point, the fallen knight lands with the full dead weight of the harness. Disturbed snow lifts and settles realistically; accumulated snow shakes off the plate on impacts. Cloth, banners and poles respond to real wind with lag and snap.

**AUDIO.** No dialogue, no music. Continuous wind bed with banner cracks, ringing steel on steel, plate clattering, boots crunching snow and mud, laboured breathing inside the helm.
**POSITIVE LOCKS.** Exactly 10 seconds, one unbroken shot, camera in constant motion.
**Opens on a tight close-up of Knight 1's helm** with his sword rising vertically into frame. Strong sun break and heavy snowfall present in every frame. The fight is fast, aggressive and continuous with many distinct blows. Bold hard camera punch-ins on the blade impacts. One wide frame catches both knights striking simultaneously. Disarm and kick seen from over Knight 2's shoulder. Finish is a fast orbit around Knight 2 landing over Knight 1's shoulder as he crawls backwards. Every banner moves in the wind throughout. Exactly two figures on the field, no other people. Armour matches @image2 and @image3, location matches @image1.
**NEGATIVE.** cuts, edits, jump cuts, static camera, still air, motionless banners, frozen flags, snow stopping, light snow, thin sparse snowfall, flat grey overcast with no sun, sunless sky, slow motion, speed ramps, freeze frame, slow lazy swings, telegraphed swings, weightless floating armour, wire-fly, superhero levitation, only two or three blows, long pauses between blows, third person in frame, extras, background soldiers, horses, real historical coats of arms, recognisable heraldry, national flags, readable text, logos, watermark, subtitles, blood, gore, dismemberment, fisheye distortion, oversaturated colour, sunny blue sky, clear weather, morphing armour, changing helmet design, extra limbs, duplicate characters, warped hands, rubbery limbs, floating feet.
~~~~

