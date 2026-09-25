# How to Turn a Script into an AI Storyboard and Shot List

- Source: https://higgsfield.ai/blog/script-to-ai-storyboard-shot-list
- Byline: Higgsfield · Aug 28, 2026 · 10 min · Last updated: 3w ago
- Prompts extracted: 1

## Notes

**Topic:** script -> shot list -> Popcorn storyboard -> Cinema Studio 4.0 (Aug 28 2026).
- Why storyboard: locks intent, keeps character/location consistent, sets pacing — and it's the cheapest place to be wrong (frames cost far less than finished video).
- **Popcorn:** Create -> Image -> Popcorn; **up to 4 image references** (character, location, prop, wardrobe) and **up to 8 frames** per generation; Auto (one prompt + frame count, model distributes beats) or Manual (direct each frame); aspect ratios 3:4, 4:3, 2:3, 3:2, 1:1, 16:9, 9:16.
- **Steps:** 1) split script into boardable sequences (>8 frames -> multiple generations); 2) shot list per beat: shot size, angle, movement, reference, purpose (example: 1A wide slow push-in establishing station at dusk; 1B MCU static noticing envelope, keep face/coat from 1A; 1C insert close-up slow tilt down on the prop with warm light); 3) references: clean well-lit portrait + location/prop; 4) prompt formula **Shot size + Camera movement + Subject + Action + Setting + Lighting/style + Reference**; 5) Auto vs Manual + frame count; 6) aspect ratio + generate; 7) carry the strongest frame forward as reference for the next scene; then use the frames as references in Cinema Studio 4.0 for video.
- Typical counts: 4 frames simple dialogue, up to 8 for action.

## Prompts (verbatim)

### P1. Full Workflow: Step-by-Step Guide

- Model / settings: Popcorn (storyboard frames; up to 4 refs, up to 8 frames)
- Use-case: cinematic film scene
- Context: Shot size + Camera movement + Subject + Action + Setting + Lighting/style + Reference

~~~~text
PHYSICS
Constant real-time speed in every shot, no slow motion. Her limp is consistent: the right leg buckles slightly on each landing. Cloaks and hair obey the strong cold wind blowing screen-left to screen-right. The horse gallops with real four-beat weight, turf flying. The leap has real committed weight and a natural falling arc into the fog. The dragon's emergence displaces the fog in a physical shockwave; its wingbeats have mass, each one visibly pushing it further from the camera; its scale reads huge against the floating islands as it recedes. All camera movements are smooth, motivated and physically real — dolly, track, crane — with the weight of real camera rigs, no handheld shake, no zooms.

LIGHTING
Cold overcast storm light in every shot: soft grey top light, no direct sun, cool desaturated palette with the olive and steel of her costume and the black of the rider reading clearly against pale fog. Distant lightning glow inside the storm clouds in shots 5 and 6, silhouetting the receding dragon.

AUDIO
Wind roaring over the cliffs, her ragged breathing and heavy uneven footfalls on wet rock, distant thunder; galloping hooves and creaking leather in shot 3; a rising orchestral chase score across the sequence; in shot 5 — her leap, a beat of near-silence with only wind and drifting fog, then a massive muffled wingbeat erupting from below, the dragon's cry echoing off the cliffs as the wingbeats fade with distance; the horse's whinny as it rears in shot 6, then the score falling to wind. No dialogue, no narration, no subtitles.

STYLE
Epic fantasy-film cinematography: crisp digital cinema image with soft atmospheric haze, muted cold grade, high production value, painterly depth of floating islands and waterfalls in every wide shot.

QUALITY
Natural 180-degree shutter cadence at real speed: running, galloping, the leap and the wingbeats carry brief directional motion blur and resolve into sharp frames. Stable temporal cadence, clean cuts between shots, no ghosting, no duplicated limbs.

POSITIVE CONSTRAINTS
Exactly two humans and one dragon appear across the sequence: @HEROINE, @RIDER, and the dragon; each appears only in their designated shots. In shot 5 the dragon and heroine are seen only from behind — their backs to the camera — flying away from the lens for the entire beat, never turning toward it, shrinking with distance until they vanish into the storm. Faces, costumes and props remain identical in every shot. The horse's anatomy stays correct through the gallop and the rear. The world contains only fantasy-period objects. Screen direction, wind direction and light stay consistent across all cuts. Every shot plays at normal real-time speed with smooth, physically real camera movement only.
~~~~

