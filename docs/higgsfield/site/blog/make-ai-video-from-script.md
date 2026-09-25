# How to Make an AI Video from a Script in 2026 (Step-by-Step Guide)

- Source: https://higgsfield.ai/blog/make-ai-video-from-script
- Byline: Higgsfield · Aug 17, 2026 · 9 min · Last updated: 3w ago
- Prompts extracted: 2

## Notes

**Topic:** script -> finished AI video in five steps (Aug 17 2026): format script -> split into scenes -> shot list -> generate -> assemble. **Biggest mistake:** pasting the whole script into a T2V box (one generic uncut clip).

**Script prep:** four beats — Hook (one strong visual, no setup/logos), Problem (1-2 scenes, concrete), Solution (2-3 scenes), CTA (one action). ~60-80 spoken words per 30 s (time it aloud). Scene headers with location + time of day; one idea per scene; **write what the camera can see** ("she stops mid-step and looks back at the door", not "she feels conflicted").
**Shot list columns:** scene #, shot type (wide/medium/close-up), camera move (static/pan/dolly), character, action; 2-4 shots per scene. In Cinema Studio paste the script into the assistant chat -> it splits into shots with camera params prefilled (you still press Generate). **Popcorn** turns planned shots into a consistent storyboard.

**Generation order in Cinema Studio 4.0:** genre -> era -> camera (Modern/35mm/8mm/DV), lens, aperture, 30+ moves -> tempo (Chaotic/Dynamic/Calm/Single Shot) -> emotion tags (`@name Joy`) -> up to 50 references (lock face/product/style) -> Color Grading (50+ palettes).
**Worked example:** 4-line jazz-pianist script -> 5-shot list (1 wide tracking-back handheld sprint; 2 medium handheld at locked door; 3 telephoto close-up reaction; 4 wide tracking alley; 5 wide slow push-in stage reveal) -> **one 16 s generation** with 4 hard cuts, all shots pointing to one character reference (prompt below).
**Assembly:** watch scenes back to back in order; use **Forward/Backward Extend** to lengthen a shot or add lead-ins/outs for abrupt transitions; finish in DaVinci/Premiere/AE plugins; save cast as Elements. Generate the hook shot first — if it doesn't sell the idea, fix the script before the rest.

## Prompts (verbatim)

### P1. A Real Script-to-Video Example

- Model / settings: Cinema Studio 4.0 (single 16 s generation, 5 shots / 4 hard cuts, one character reference)
- Use-case: cinematic film scene
- Context: Here is the full chain applied to one short script: four beats, five shots, one character, one generation. The script is four lines long:

~~~~text
A young jazz pianist is late for her matinee debut. She sprints through a sunlit 1950s street after rain (hook). She hits the stage door and it is locked (problem). She cuts through a back alley to the side entrance (solution). She walks onto the warmly lit stage, sets down her sheet music, and sits at the piano as the room falls silent (final).
~~~~

### P2. A Real Script-to-Video Example

- Model / settings: Cinema Studio 4.0 (single 16 s generation, 5 shots / 4 hard cuts, one character reference)
- Use-case: cinematic film scene
- Context: The character exists as one reference image, and every shot in the prompt points back to it, which is what keeps the same face, dress, and coat through all five shots.

~~~~text
SCENE CONTEXT

A young female jazz pianist, late for her matinee debut, sprints through a sunlit 1950s city street just after rain, hits a locked stage door, then cuts through a bright back alley and steps onto a warmly lit stage. One character only, no other featured faces.

ACTIVE REFERENCES

<<<image_1>>>: young woman in her early twenties, 1950s jazz pianist, voluminous chestnut-brown Hollywood waves, red lipstick, emerald green sweetheart cocktail dress with a full knee-length skirt, open beige trench coat, black T-strap heels, pearl stud earrings, gold bracelet, folded ivory sheet-music papers clutched to her chest under her left arm. Face, hair, body, and wardrobe 100% match the reference. Identical in all five segments, no duplicates, no extra featured characters.

FORMAT MODE

Controlled five-segment sequence with four HARD CUTS. Real-time motion, aggressive dynamic pacing. Large-format cinema image: extreme clarity, deep environmental detail, fine film grain. Anamorphic lens character throughout: oval bokeh, subtle horizontal flare streaks from the sun and bright speculars, gentle cylindrical background stretch. Vivid saturated mid-century color palette: rich reds, teals, and yellows, warm golden sunlight, bright open exposure — the whole sequence reads luminous and colorful, never murky, never desaturated.

ACTION TIMING

0.0s to 3.0s — HOOK, wide tracking shot.

84° diagonal field of view, classic wide-angle lens character, camera 1.2 meters ahead of subject at chest height, tracking backward fast, low, and slightly handheld — urgent momentum, not smooth gimbal glide. A 1950s downtown street in late-afternoon sun right after rain: wet asphalt blazes with golden sun reflections, storefronts in saturated red, teal, and cream, striped awnings, colorful vintage cars along the kerb, a jazz club marquee with round bulbs lit deep in BG, blue sky with white clouds above the rooflines. First visible frame already contains <<<image_1>>> mid-sprint at frame center, x 50%, y 55%, full body visible, running hard toward camera, trench coat cracking behind her, waves bouncing with each stride, heels splashing shallow sunlit puddles. Real sprint physics: heel strikes, opposing right-arm swing, torso lean, sheet music pinned under her left arm.

3.0s HARD CUT.

3.0s to 5.5s — PROBLEM, medium shot.

47° diagonal field of view, standard normal lens character, camera 3 meters from subject, handheld with tense micro-movement. Warm red-brick side wall of the club washed in direct golden sunlight, a steel stage door painted deep teal, "STAGE DOOR" stencil in white on the metal, hard sun raking across the brick texture. <<<image_1>>> bursts in from screen-left at full speed, slams into the door, right hand seizing the handle and yanking twice — the door holds with a dull metallic clunk, hinge and lock resisting with real weight. Body faces the door, profile to camera, sunlight modeling her face brightly, sheet music pinned under her left arm. Muffled MC voice and crowd murmur bleed through the wall.

5.5s HARD CUT.

5.5s to 7.5s — PROBLEM, reaction close-up.

18° diagonal field of view, classic telephoto lens character, camera 6 meters from subject, tight close-up on <<<image_1>>>, sunlit brick dissolving into warm golden and teal oval bokeh, one thin horizontal flare crossing the frame. Her face is lit by soft warm bounce off the sunlit wall, skin tones bright and clean, brown eyes alive and catching the sun with soft natural catchlights. First frame opens on her face already in frame: eyes wide, breathing fast, a wave of hair fallen across her cheek. At 6.3s she closes her eyes, one sharp inhale, exhale, eyes snap open with resolve, and her gaze whips toward screen-right. Lips stay closed, no dialogue.

7.5s HARD CUT.

7.5s to 10.0s — SOLUTION SPRINT, alley tracking shot.

84° diagonal field of view, classic wide-angle lens character, camera tracking alongside <<<image_1>>> at 1.2 meters, screen-right of her body, slight whip energy on the turn. A narrow back alley cut by a bright diagonal shaft of late sun: warm brick walls, laundry lines with colorful fabric overhead catching light, puddles throwing gold reflections up the walls, a plain side door at the alley end glowing in a pool of direct sunlight. First frame: she is already in frame rounding the corner from screen-left at full sprint, coat, skirt, and waves whipping with the turn, sunlit spray kicking behind her heels, her figure flashing through alternating bars of light and open sun. She reaches the sunlit side door at 9.6s and pulls it open — warm interior light meets daylight as the frame cuts.

10.0s HARD CUT.

10.0s to 16.0s — FINAL, stage reveal.

84° diagonal field of view, classic wide-angle lens character. Interior of the jazz club during a matinee, seen from inside the house — bright and festive, not dark: warm cream-and-gold walls, red velvet curtains glowing under warm tungsten wash, tall side windows spilling soft daylight across the room, the whole stage bathed in warm amber light. A grand piano sits at frame center-right, x 60%, y 55%, its lacquer throwing bright warm speculars, a clean spotlight adding sparkle rather than cutting darkness. Camera starts low near the stage edge and pushes in slowly, rising. Audience heads fill the bottom 15% of frame as softly lit warm bokeh shapes. At 10.8s <<<image_1>>> steps out of the wings from screen-left into the amber light, still catching her breath, composes herself mid-stride, walks to the piano, sets the sheet music on the stand, and sits at 15.0s as the crowd murmur falls silent. Hold the final composition: her emerald dress glowing against red velvet and gold, the frame bright, warm, and celebratory. High-key warm exposure, faces and colors fully readable, no crushed shadows, no gloom.

PHYSICS

Puddles splash with sunlit droplets in exterior segments. The full knee-length skirt swings with her stride, the trench coat and Hollywood waves react with natural delay to sprinting, the corner whip, and the sudden stop into stillness. Heel strikes, the door clunk, and heels on stage boards carry real weight.

LIGHTING

Segments 1 to 4: direct golden late-afternoon sun as primary source, bright blue sky fill, wet surfaces throwing warm speculars, exposure bright and open with clean readable faces — vivid and sunny, never flat grey, never underexposed. Segment 5: warm tungsten stage wash plus soft window daylight, high-key and golden, red velvet and emerald green saturated, gentle sparkle flares off the piano lacquer.

AUDIO

Footsteps, splashes, and lively daytime street ambience in segments 1 to 4; muffled MC and crowd behind the door in segment 2; echoing alley footsteps in segment 4; in segment 5 the room murmur ducks to silence as she sits. No music score, no narration, no spoken lines.

POSITIVE LOCKS

<<<image_1>>> is the single woman in all five segments, identical face, hair, dress, coat, heels, jewelry, and sheet music matching the reference throughout. Screen direction: her resolve gaze in segment 3 aims screen-right, she enters segment 4 from screen-left moving screen-right, and enters the stage in segment 5 from screen-left. Each segment's first frame already contains her as described; no empty establishing frames. The entire sequence stays bright, warm, and color-saturated from first frame to last.
~~~~

