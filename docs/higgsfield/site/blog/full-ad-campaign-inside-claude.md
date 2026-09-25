# How To Make a Full Ad Campaign Inside Claude (Full Workflow + Prompts)

- Source: https://higgsfield.ai/blog/full-ad-campaign-inside-claude
- Byline: Higgsfield · Aug 12, 2026 · 10 min · Last updated: 3w ago
- Prompts extracted: 4

## Notes

**Topic:** one product -> four ad formats in a single Claude conversation via Higgsfield MCP (Aug 12 2026).

**Formats:**
| Format | Best for | Length | Needs |
|---|---|---|---|
| UGC video | feed ads, Meta/TikTok, trust | 15-30 s | product ref, benefit angle, tone |
| Product video | PDP hero, TV-spot opener | 8-15 s | product ref, camera/mood direction |
| Social media ad | carousels, Stories, quick cuts | 8-15 s | product ref, hook copy, platform size |
| Explainer | landing pages, onboarding | 15-30 s | script, URL or feature list |
UGC earns trust (one performer, native captions, hook in first 2 s); product video sells the object.

**Setup:** Customize -> Connectors -> `https://mcp.higgsfield.ai/mcp`. Marketing Studio accepts **up to 9 reference inputs** per call (product images, spokesperson face, VO clip, camera style ref).

**Workflow:** 1) attach product photo or URL + one-sentence goal (benefit, platform, deadline) — lock it once; 2) short description or a full shot-by-shot brief (examples below: UGC vlog 9:16 10 s phone look; stylised 3D pastel cel-shaded honey film; 15 s handheld iPhone social ad; low-poly 3D explainer); 3) **approve the still (first frame) before motion** — catching a wrong face/setting on a still is far cheaper; 4) full clip returns with dialogue + lip sync together.

**Scale:** Supercomputer runs batches in parallel conversations (**up to 10 on Ultra, 3 on Plus**) with shared memory; Scheduled Tasks; 30+ connectors (Slack, Drive, Notion).
**Costs (no MCP markup):** UGC 15 s w/ avatar + synced dialogue ~85 cr ($4.25); product video 15 s incl. ambient audio + image ~85 cr; social ad 15 s + image ~85 cr; explainer 20 s + image ~72 cr ($3.60). Think per-variant cost.
**Tips:** don't re-describe the product each time (causes cross-format inconsistency); write the UGC hook first; generate one of each format before batching (batches multiply mistakes); autopost only a shortlist of chosen variants.

## Prompts (verbatim)

### P1. Full Workflow: Step-by-Step Guide

- Model / settings: Claude + Higgsfield MCP (Marketing Studio / Higgsfield Explainer)
- Use-case: UGC
- Context: Step 2: Write the description you need, short or fully detailed. A quick description covers the angle, the benefit, the tone, whatever the shot needs to show, and Claude fills in the rest. Or write the full shot-by-shot brief yourself, camera moves, cast, location, material realism, audio, consistency rules, all specified up front. Here's what a …

~~~~text
UGC-style vlog video, 10 seconds, vertical 9:16, shot on a slightly grainy phone camera, natural daylight, authentic creator energy, NOT polished commercial footage. CHARACTER: A young woman in her mid-20s with wavy copper-red hair, warm freckles across her face, thin metal glasses, gold earrings. She wears a crinkled translucent lime-green windbreaker and a grey-and-yellow bucket hat with a lavender chin cord. Charismatic, playful, natural on camera, she talks like she's facetiming a friend, with real pauses and a genuine smile. LOCATION: A vast green alpine meadow full of scattered red, purple and yellow wildflowers, an old weathered wooden ranch fence running through the grass, dramatic snow-capped rocky mountain range in the background, soft overcast sky, gentle breeze moving the grass. PRODUCT: A glass jar of golden raw honey with a royal-blue lid and a royal-blue label with white cursive lettering "Bearly" and the tagline "Raw Honey. Slow Mornings." TIMELINE: 0-3s (HOOK, handheld selfie mode): Extreme close-up, she holds the phone herself, lens slightly too close to her face, walking through the grass, wind in her hair. She raises the honey jar right up to the lens so it briefly blocks half the frame, and says with a grin: "POV: you carried a jar of honey up a mountain." 3-7s (tripod, static wide-medium shot from the side): Cut to a stable third-person angle, the phone now sits on a small tripod in the grass. We see her sitting on the wooden fence, mountains behind her. She unscrews the blue lid, dips a small wooden spoon, pulls up a long slow golden honey drizzle, tastes it, closes her eyes for a beat and laughs. 7-10s (handheld selfie again, slightly shaky): She grabs the phone off the tripod mid-motion, quick natural reframe, holds the jar next to her face, label facing camera, and says warmly: "Bearly raw honey. Slow mornings, literally." Soft smile, quick wink, end frame. DIALOGUE (English, relaxed pace, total under 20 words so it fits 10 seconds without rushing): Line 1 (0-3s): "POV: you carried a jar of honey up a mountain." Line 2 (8-10s): "Bearly raw honey. Slow mornings, literally." AUDIO: Real outdoor ambience, wind, birds, rustling grass, her genuine voice with natural room-less outdoor sound; a soft lid-pop and honey drizzle foley in the middle section. No background music. STYLE: Dynamic cuts between handheld and tripod, slight motion blur on the grab-the-phone transition, authentic UGC imperfections (minor shake, imperfect framing, one small exposure shift), warm natural color, no captions, no logos except the product label.
~~~~

### P2. Full Workflow: Step-by-Step Guide

- Model / settings: Claude + Higgsfield MCP (Marketing Studio / Higgsfield Explainer)
- Use-case: product ad
- Context: Step 2: Write the description you need, short or fully detailed. A quick description covers the angle, the benefit, the tone, whatever the shot needs to show, and Claude fills in the rest. Or write the full shot-by-shot brief yourself, camera moves, cast, location, material realism, audio, consistency rules, all specified up front. Here's what a …

~~~~text
A dreamy stylized 3D animated brand film for "Bearly" raw honey, vertical 9:16, in the style of a flat-pastel cel-shaded animated city: soft flat colors with no realistic textures, cream, warm honey amber, butter yellow with soft beige accents, and royal blue used as the single bold accent color throughout, simple geometric buildings decorated with flat doodle flowers, puffy flat-shaped clouds, painterly grass. One single continuous camera move: a slow vertical ascent from the ground to the sky, no cuts. 0:00-0:03: The shot opens low on a sunny stylized meadow: painterly warm-yellow grass in the foreground, flat doodle flowers in cream, amber and royal blue scattered around, a few tiny flat doodle bees hovering between them; on a cream wall behind the meadow, a bubbly balloon-style hand-lettered word "BZZZ!" in royal-blue letters with a cream outline sits among the flowers; above the wall runs a monorail bridge; fluffy butter-yellow bushes sway gently. The camera begins rising. 0:03-0:06: The camera ascends past the bridge as a flat royal-blue train glides across it; behind it a stylized warm pastel city opens up, simple cream-and-beige skyscrapers with big flat royal-blue flowers printed on their facades; in the center of the city stands the landmark: a GIANT glass jar of Bearly Raw Honey, monument-scale, rising above the rooftops like a tower, flat cel-shaded rendering of the attached jar: translucent warm amber honey body, wide royal-blue label with big white cursive "Bearly" lettering and a small white doodle bee, "Raw Honey." text above the script, royal-blue lid on top. 0:06-0:09: The camera keeps rising along the giant jar, honey glowing softly amber inside the flat glass; it passes through layers of flat cream clouds that slide apart like paper cutouts; the royal-blue lid of the jar peeks through the clouds, a soft warm golden glow around it; tiny doodle sparkles and one small flat doodle bee with paper wings fly past. 0:09-0:12: Above the clouds: clear gradient sky from pale cream to soft honey gold; the clouds part and a bubbly cloud-like logo inflates softly at the top of the frame, the word "Bearly" in puffy rounded balloon letters, cream-white with soft royal-blue shading, exactly in the style of a cloud-shaped festival logo, with a tiny honey-drip splash above the letters; the giant jar's royal-blue lid sits at the bottom of the frame under the drifting clouds. The logo settles with a gentle wobble and holds. Style: flat cel-shaded 3D animation, warm brand palette (cream, honey amber, butter yellow, soft beige, royal blue as the only accent), no realistic lighting, no gradients except the sky, flat doodle flowers, doodle bees and paper-cutout clouds, one continuous slow upward camera flight with gentle parallax between layers, calm dreamy slow-morning mood. No humans, no other brands, no text beyond "BZZZ!" and "Bearly".
~~~~

### P3. Full Workflow: Step-by-Step Guide

- Model / settings: Claude + Higgsfield MCP (Marketing Studio / Higgsfield Explainer)
- Use-case: UGC
- Context: Step 2: Write the description you need, short or fully detailed. A quick description covers the angle, the benefit, the tone, whatever the shot needs to show, and Claude fills in the rest. Or write the full shot-by-shot brief yourself, camera moves, cast, location, material realism, audio, consistency rules, all specified up front. Here's what a …

~~~~text
A 15-second UGC-style vertical video, 9:16, shot like casual handheld iPhone footage of a friend filming a girl walking through Upper Manhattan with helium balloons shaped like giant jars of Bearly Raw Honey — five oversized inflatable replicas of the attached jar (glass-clear amber honey body glowing warm, wide royal-blue label wrapping the middle with big white cursive "Bearly" lettering and a small white bee icon, royal-blue metal lid on top), bobbing on strings above her.

The girl matches the attached character reference exactly: early-20s, long dark-brown wavy hair with wispy full bangs, big black octagonal glasses, a light-blue floral bandana tied over her head, white ribbed tank top, thin silver chain with a small heart pendant, beige linen wide-leg trousers with a pale-blue silk scarf knotted around her hips, cream slide sandals — an effortless downtown-vintage look with a calm, slightly deadpan face that breaks into small genuine smiles.

Lighting and weather: clear morning, soft warm low-angle sunlight, pale blue sky, long gentle shadows across the asphalt — a slow-morning glow; sunlight passes through the translucent amber balloon bodies so the giant honey jars softly glow gold above the muted brick-and-concrete street. Location matches the attached street reference: a wide Upper Manhattan intersection — weathered red-brick tenement blocks with black fire escapes, rusty water towers on the rooftops, small storefronts with awnings at street level, a yellow cab rolling through, a sleek glass office tower rising across the avenue, striped crosswalks and parked cars down the block. The footage feels real: handheld micro-shake, quick whip-pans, occasional autofocus breathing. The pace never sits still — a new micro-moment every 2-3 seconds.

0:00–0:03 — HOOK, mid-action: the camera whips up from the sunlit asphalt to catch the girl mid-stride crossing the wide intersection STRAIGHT at the camera, five giant glowing honey-jar balloons yanking in the breeze above her, a yellow cab sliding past right behind; she reaches toward the lens as if to grab it, balloons smacking together overhead — snap zoom in on her small grin behind the big glasses.

0:03–0:06 — Fast tracking shot alongside her on the sidewalk under the fire escapes: she walks quick and bouncy past the small storefronts, balloons bumping a shop awning; she glances at her phone, smirks at something, types one-handed without slowing down; the camera jogs to keep up, slightly shaky, morning sun flaring briefly between buildings.

0:06–0:09 — Photo beat, quick cuts: she poses against a sun-washed red-brick wall under a black fire escape, balloons gathered behind her like a bouquet of glowing amber jars; two fast poses — peace sign, then laughing mid-blink; snap zoom up to the balloons slowly spinning, the blue "Bearly" label rolling into view against the brick.

0:09–0:12 — Crossing another street toward the glass tower: a gust of wind drags the balloons sideways, she spins with them in a full turn, dark hair and bandana tails flying, and pulls them back down laughing; low-angle shot from the curb looking up — five amber honey jars floating between the old brick rooftop water towers and the mirrored glass facade, backlit by the morning sun; a passerby turns and smiles.

0:12–0:15 — Ending beat: she stops, looks straight into the camera with her calm deadpan expression through the black glasses, then breaks into a laugh and pushes the balloon bunch toward the lens — the nearest giant jar bumps softly into the camera, filling the frame with glowing amber and the blue label's white "Bearly" script, the picture shakes from the bump and settles. Cut.

Style: authentic UGC iPhone realism — vertical handheld, soft warm morning daylight, true-to-life natural colors with the amber-and-blue honey-jar balloons as the standout accent, light motion blur on fast moves, mild lens flare only where the sun naturally hits, no cinematic grading, no stabilized gimbal smoothness; energetic rhythm with a new action every 2-3 seconds, whip-pan or snap-zoom transitions between beats. The balloons always read clearly as the Bearly honey jar — translucent amber body, royal-blue label, white cursive "Bearly" lettering, blue lid. No on-screen text, no captions, no other brands.
~~~~

### P4. Full Workflow: Step-by-Step Guide

- Model / settings: Claude + Higgsfield MCP (Marketing Studio / Higgsfield Explainer)
- Use-case: anime/animation
- Context: Step 2: Write the description you need, short or fully detailed. A quick description covers the angle, the benefit, the tone, whatever the shot needs to show, and Claude fills in the rest. Or write the full shot-by-shot brief yourself, camera moves, cast, location, material realism, audio, consistency rules, all specified up front. Here's what a …

~~~~text
1. Style: Direct continuation of the low-poly, faceted geometric 3D-style illustration established in the meadow shot — same hard-edged polygon shading, same cute big-eyed character design language. This shot narrows the palette into the series' second register: a true warm amber monochrome, reserved for this "hive interior / here's the result" payoff beat, contrasting the varied sunny-meadow palette (green, cream, pink) of the previous shot.

2. Cinematography: Same smooth, buoyant, storybook-CG camera language as the series' first shot. A single continuous pull-back: opens tight on the hero bee and the nearest honeycomb cells, then retreats and rises slightly to reveal the full domed hive interior and honeycomb spread — the camera move itself built to create a "we are inside the hive" sense of enclosure and reveal. Slow, steady, unhurried throughout, no shake.

3. Lighting: No external light source — the entire chamber reads as though the honey and golden wax themselves are the light, glowing warmly from within. Brightest near the honeycomb and its pooled honey, softly dimming as it rises toward the domed ceiling above, a natural, motivated falloff rather than a camera-lens vignette. The honey's surface carries a slow, subtle glossy highlight loop — a soft specular glint that gently drifts and pulses across the pooled honey in each cell, never a hard flash or strobe.

4. Color: A true single-hue amber-gold monochrome — even the hero bee's usual black stripe-bands and dark features shift toward a warm dark umber-bronze here rather than neutral black, preserving full monochrome purity. 60% mid-amber-gold (comb walls, dome interior mid-tones) — 30% deep burnt-orange-brown (shadowed facets, upper dome recesses, the bee's darkened stripe-bands) — 10% pale gold-white (the honey's glossy specular highlights, the brightest facet edges on wings and cream stripe-bands).

5. Camera: Roughly 50mm-equivalent at the tight opening, easing wider toward ~35mm-equivalent as the pull-back resolves. Deep, graphic focus maintained throughout — every faceted plane, near or far, stays crisp and legible, no photographic depth-of-field blur, consistent with this series' established low-poly rendering rule. Single continuous pull-back-and-slight-rise at a slow, constant, unhurried speed for the full 8s.

6. Skin: Hero bee's surface design carried over exactly from the previous shot — faceted, non-photoreal exoskeleton shading, no literal fur or photographic micro-texture. New material in this shot: the honeycomb's wax cells render with a soft matte-gold faceted sheen, while the honey pooled within each cell reads as glossy and reflective, with hard-edged specular highlight shapes rather than soft photographic bloom — glossy but still graphic, staying within the low-poly rendering language.

7. Acting: Hero bee reads as settled and content rather than actively reaching — perched at the honeycomb's edge, legs gripping the cell wall beneath it, antennae relaxed and forward, expression calm and quietly pleased (a small, satisfied stillness, the "job done for now" beat rather than shot one's curious reach). The two background bees fly in slow, gentle circling loops around the upper honeycomb area, unhurried and calm, never darting.

8. Physics: Hero bee's wings settle into a slower, gentler flutter than the previous shot's rapid hover-vibration — a soft, relaxed tremor befitting a bee at rest on a surface rather than actively hovering to feed. The honey's glossy highlight drifts slowly and smoothly across each cell's surface in a continuous loop, with the honey itself otherwise perfectly still — no pouring, dripping, or rippling. Background bees' wings carry the same rapid vibration-blur loop as the meadow shot's hero, appropriate to active flight. Antennae on all three bees carry only the faintest idle sway.

9. Composition: Opens tight on the hero bee at the honeycomb's edge and the two or three nearest glossy cells. As the pull-back widens: the full tessellated spread of hexagonal honeycomb cells fills the lower half of frame, the domed warm interior walls curve up and around on all sides, and the two background bees become visible circling slowly in the mid-ground above the comb. Final framing settles close to the reference composition — hero bee right-of-center at the comb's edge, comb spreading left and below, dome enclosing the whole scene overhead.

10. Continuity: Direct continuation of the same character and low-poly world established in the meadow shot — the hero bee's design (eyes, lashes, antennae, wings, stripe pattern, proboscis, legs) carried over exactly, this time landed rather than hovering. This is the second beat of an emerging "how honey is made" mini-series (meadow/nectar-gathering → hive/honey-result), paralleling the multi-shot structure of this workflow's earlier chess series. This shot establishes the series' second color register — true amber monochrome for the "payoff" beat — distinct from shot one's varied sunny palette. Board/hive layout and bee positions read as continuous and settled throughout the pull-back; no discontinuity.

11. Editing: No cuts — one continuous pull-back across the full 8s, consistent with this project's unbroken-take convention. The pull-back itself carries the emotional beat: starting intimate and close, opening out into the full warm, rich reveal — "here's the result" made physical through the reveal itself.

12. Technical: 16:9, 24fps base. No film grain, no photographic lens vignette or anamorphic flare — a clean, crisp CG/vector-style render throughout, consistent with this series' departure from the workflow's usual cinema-grain defaults. No subtitles or on-screen text.

13. Audio: Voiceover (English, same warm, friendly female narrator established in the previous shot, now settling into a richer, more satisfied cadence): "Back at the hive, that nectar turns into rich, golden honey." Score: fully original, NO IP, NOT mimicking any specific composer or artist. Continuing the light instrumental palette from the meadow shot but slower and richer — warm sustained strings, a gentle flute or clarinet melody, soft resolving glockenspiel accents, ~78 BPM, settled and content rather than skipping. Structure: 0.0–2.0s warm sustained string pad enters under the tight opening framing; 2.0–5.0s flute melody and a rising glockenspiel figure build as the pull-back widens, under the voiceover; 5.0–7.0s the melody resolves into a warm, held chord as the widest framing nears; 7.0–8.0s gentle tapering hold, fully settled. Diegetic layer: a soft, collective ambient hive hum from the background bees' wingbeats (distinct from the single sharper buzz of the previous shot's lone hovering bee), plus a very faint, subtle shimmer/glisten sound synced to the honey's highlight-loop.

14. Character description (hero bee): Same design as the meadow shot — warm amber-orange head and thorax, banded abdomen alternating dark umber-bronze and pale cream-amber segments, large dark expressive eyes with fine curved lash-linework, two thin curved antennae, two pairs of semi-transparent faceted wings (now in a slower, relaxed flutter), thin dark segmented legs, small stinger-tip, thin curling proboscis. New for this shot: perched and settled at the honeycomb's edge, legs gripping the cell wall, expression calm and quietly content rather than reaching or curious.

15. Location: The interior of a beehive — a warm, rounded, low-poly domed chamber, its walls and ceiling in gradient amber-gold-brown, glowing as though lit from within by the honey and wax themselves. The chamber's base opens into the honeycomb structure. Two smaller background bees fly in slow circling loops in the mid-ground above the comb. Entirely enclosed and generic, no real-world signage or landmark.

16. Hero prop (the honeycomb): A tessellated grid of hexagonal wax cells in warm gold, several visible in frame, each pooled with glossy, richly golden liquid honey catching soft specular highlights that drift subtly in their loop. Cell walls render as clean, faceted, low-poly forms with a warm gradient sheen. No printed text, numerals, or branding anywhere.

17. Mood & tempo: Warm, rich, satisfying — the "here's the result" payoff beat, contrasting the previous shot's curious, inviting hook energy. Tempo stays slow and settled throughout, the widening pull-back itself delivering the sense of arrival.

Numbered shots:

SHOT 1 — single unbroken pull-back, 0.0–8.0s, 16:9:

- 0.0–2.0s: Tight opening on the hero bee perched at the honeycomb's edge, nearest cells glossy with honey, pull-back just beginning. VO: "Back at the hive,"

- 2.0–5.0s: Pull-back continues widening, more of the honeycomb and the domed interior walls coming into view, background bees becoming visible in their slow circling loops. VO: "that nectar turns into rich, golden honey."

- 5.0–7.0s: Pull-back nears its widest point, framing settling close to the full reveal; honey's glossy highlights continue their soft drifting loop.

- 7.0–8.0s: Final settled hold at the widest framing — warm glow steady, background bees still circling gently, hero bee calm and content. Hard hold, no cut, end of take.
~~~~

