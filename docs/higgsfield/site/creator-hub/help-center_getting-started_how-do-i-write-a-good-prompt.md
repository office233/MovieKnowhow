# How do I write a good prompt?

Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt
Published: Jul 30, 2026 (5 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article / **prompt guide** (most valuable page in this section). Walks one character from still to a 15-second cinematic video.

**Principles**
- Be specific. Layers: subject -> details (appearance, clothing, expression) -> environment -> style; for video add camera and mood.
- Or skip prompting: give Supercomputer a loose brief (it fills details, confirms the plan, routes to models).
- Say what you want rather than long "no" lists, but a few targeted negatives help on detailed shots ("no readable text", "no plastic skin").
- Match prompt complexity to the task; avoid contradictions between prompt and input image (e.g. "still, calm" vs motion-blurred frame).
- Write in English; exception: Chinese models (Seedance, Kling) sometimes follow nuanced motion better in Chinese.
- Iterate as a conversation: change one element per generation (lighting, lens, one wardrobe detail).
- Longer sequences: last frame of clip A = start image of clip B; join in an editor.

**4-step character-to-video workflow (models from the page's Recreate links)**
1. Base character (Soul 2.0): neutral full-body studio portrait, plain white background, exhaustive physical description, lighting, even the camera type ("shot on medium format camera"). Precision makes it reusable.
2. Restyle (Seedream 5.0 Pro): "Keep the exact same man, same face, same pose, same background and lighting. Change only..." - the explicit keep/change split holds identity.
3. Scene placement (Soul Cinema): "Place this exact ... character inside ..." with cinematic terms: close-up, motivated window light, bokeh, haze, grading, shallow DOF, grain, anamorphic. This frame becomes the video start image.
4. Video (Seedance 2.0): once the image fixes look, the prompt describes what HAPPENS. Structure as blocks: Style & mood, Cinematography & camera, Lighting & color, Action beat by beat, Audio (score, ambience, dialogue with timecodes), Shot list with durations. Example: 6 shots in 15 s, 35mm for the room and 75mm for faces.

**Patterns worth copying from the long video prompt**
- Block headings: Style, Cinematography, Lighting, Color (with % palette split, e.g. 60% amber/ochre, 30% shadow, 10% accents), Camera (lens mm, T-stop, dolly/Steadicam/sticks, 24fps), Skin (anti-plastic, pore-level), Acting, Physics, Composition (full-bleed 16:9, no letterbox), Continuity (hard cuts, no morphing), Editing (N shots in N seconds), Technical, Audio, Character, Location, Hero prop, Mood and tempo.
- Dialogue lines pinned to time windows ("around 2.4 to 4.0 seconds") with "single-speaker, lip-sync priority (mouth lit and in focus)".
- Anti-artifact negatives in caps: NO fisheye, NO glowing eyes, NO plastic skin, NO letterbox, NO morphing transitions, NO on-screen text.
- IP-safety clauses: no logos, no readable signage, generic gear, original non-mimicking score (avoids copyright blocks).
Consistency across generations: Soul ID (real person), Elements (video), same reference images (image models).

## Prompts (verbatim)

### CH-03
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt (local: `help-center_getting-started_how-do-i-write-a-good-prompt.md`)
- Model: Soul 2.0 (Recreate link model=soul-v2)
- Settings: Image; full-body, neutral white studio background
- Note: Step 1 of the character-to-video walkthrough: build a reusable base character.

```text
Photorealistic full-body studio portrait of a rugged man in his early 50s, standing straight and facing the camera, arms relaxed at his sides. Short cropped graying hair, weathered tanned face with deep wrinkles, gray stubble beard, intense stern gaze. He wears a plain heather-gray t-shirt, dark gray cargo pants and black sneakers. Clean seamless white studio background, soft even lighting, sharp detail, visible skin pores, shot on medium format camera. Full body visible head to toe, centered composition.
```

### CH-04
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt (local: `help-center_getting-started_how-do-i-write-a-good-prompt.md`)
- Model: Seedream 5.0 Pro (Recreate link model=seedream_v5_pro)
- Settings: Image edit using the Step 1 image as input
- Note: Step 2: restyle wardrobe while locking face, pose, background and light.

```text
Keep the exact same man, same face, same pose, same white studio background and lighting. Change only his outfit: dress him as a Wild West gunslinger, black wide-brimmed cowboy hat, long worn black leather duster coat, dark blue button-up shirt, black leather bandolier with bullets across his chest, black leather gloves, dark leather chaps, black cowboy boots. He holds two silver revolvers crossed at his waist. Stern menacing expression.
```

### CH-05
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt (local: `help-center_getting-started_how-do-i-write-a-good-prompt.md`)
- Model: Soul Cinema (Recreate link model=soul-cinematic)
- Settings: Image; uses the Step 2 character; becomes the video start frame
- Note: Step 3: place the character in a cinematic scene.

```text
Place this exact cowboy character inside a dim 19th-century Western saloon. Cinematic close-up of his face under the black cowboy hat: weathered wrinkled skin, gray stubble, dirt and dust on his cheeks, cold intense stare slightly off-camera. Soft warm light from a window behind him, blurred saloon interior in the background, wooden beams, hanging lamps with warm glowing bokeh, hazy dusty air. Moody cinematic color grading, shallow depth of field, film grain, anamorphic look.
```

### CH-06
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt (local: `help-center_getting-started_how-do-i-write-a-good-prompt.md`)
- Model: Seedance 2.0 (Recreate link model=seedance_2_0)
- Settings: Video; image-to-video from the Step 3 frame; 15 s, 6 shots, 16:9 full-bleed, 24fps, native dialogue audio
- Note: Step 4: block-structured cinematic shot-list prompt with timed dialogue.

```text
Style: Live-action photographic realism, dry neo-western comedy, the cowboy walks back in and flatly gives the bar twenty minutes to return his horse, with a vague deadly threat, then calmly pours another whiskey while the room quietly panics. Warm, dusty, cinema-grade, deadpan against real fear. NOT CGI-looking, NOT plastic, NOT a commercial. References (in spirit, fully original): the quiet menace of a calm man in a classic Western thriller. Calm, threat, restrained fear.

Cinematography: A continuous scene, the re-entrance, the flat threat delivered to the room, the patrons' uneasy reactions, the cowboy sitting and pouring again; composed coverage from real positions, moving forward. NO body-mounted rig. LENS DISCIPLINE: spherical rectilinear, 35mm for the room, 75mm for faces, NO fisheye, NO warp. Eye-line: the cowboy addresses the room flatly; the patrons dare not meet his eye, never the lens.

Lighting: Naturalistic, motivated, warm and dusty, golden window light, hazy air, deep shadow, faint neon. Carves the cowboy's calm face and the patrons' uneasy ones, keeps the dread close. Deep warm contrast. NOT bright, NOT flat, NOT studio.

Color: Warm, dusty, muted, filmic, 60% amber and ochre, 30% deep shadow, 10% accents (faint neon glow). Filmic print grade, fine grain, gentle halation. NOT teal-orange, NOT saturated, NOT digital-clean.

Camera: Cinema-grade digital camera with spherical prime lenses at 35mm and 75mm, T2.0 to 2.8, dolly, Steadicam, or sticks, never body-mounted. Naturalistic depth, rectilinear drawing. 24fps, real-time throughout. Fine 35mm-style grain, constant.

Skin: Anti-plastic, pore-level realism, real weathered matte skin, NOT glossy. The cowboy: the same older deadpan man; the patrons: weathered working men and a bartender, now uneasy and frightened but restrained; all ordinary human eyes, NO glowing eyes, NO eye-shine. NOT smoothed, NOT waxy.

Acting: Deadpan calm against quiet fear, the cowboy walks back in, stops, and flatly tells the room someone took his horse and they have twenty minutes to return it, or he'll do what he did in Texas ten years ago; the room goes still, patrons exchanging uneasy frightened looks, a swallow, men freezing, genuine fear played restrained, not slapstick; then the cowboy calmly sits, pours another whiskey, and drinks, utterly unbothered. The contrast of his calm and their fear is the comedy. Natural micro-life: his flat delivery and steady sip; their nervous stillness, a bead of sweat, darted glances. Nobody mugs at the lens.

Physics: Honest, the door swings, boots on wood, the room stilling, a chair creak, whiskey poured, a glass set down. Nothing floats or loops.

Composition: Full-frame 16:9, fills the entire frame edge-to-edge, NO letterbox, NO black bars, NO matting, NO cropped strips. The opening holds his re-entrance and the room; the scene moves between his flat delivery, the uneasy faces, and his calm pour. Layered depth: a foreground table or glass, the cowboy mid, the frightened room behind.

Continuity: One bar, one cowboy, one continuous threat-and-pour, wardrobe, the bar and warm light consistent. Clean hard cuts only, NO morphing transitions, NO position jumps.

Editing: Deadpan-vs-fear rhythm, the re-entrance, the flat threat, the uneasy room, the calm pour. 6 shots in 15 seconds, cut to a sparse tense-wry score. Clean hard cuts only. NO transitions, NO fades, NO speed-ramps.

Technical: Full-bleed 16:9, no letterboxing, bars, or cropping. 24fps, real-time. Rectilinear 35mm and 75mm lenses, fine grain, warm dusty naturalistic filmic grade. NO body-mounted camera. The threat is the cowboy's single-speaker delivery with lip-sync priority (mouth lit and in focus, slow, clear, spaced); patrons react non-verbally. NO on-screen text, NO subtitles. NO glowing eyes, NO fisheye, NO plastic skin, NO commercial gloss. Non-graphic, no violence, the threat stays a threat. Strictly non-IP: neon and signs indistinct, no brand logos, gear generic, no readable text, no real-location ID, every surface clean or an indistinct unreadable mark, zero AI-text artifacts.

Audio: Original instrumental score, fully generic, NOT mimicking any artist or track, NOT quoting any melody. A sparse, tense-but-wry neo-western cue, a low drone and a lonely guitar, near-silence holding the threat. Diegetic bed: the door, boots, the room going dead quiet, a chair creak, whiskey pouring, a glass set down. On-camera dialogue, English, the cowboy only, flat and unhurried, single-speaker (lip-sync priority):
COWBOY, around 2.4 to 4.0 seconds: "Somebody took my horse."
COWBOY, around 5.0 to 7.4 seconds: "You've got twenty minutes to bring it back."
COWBOY, around 8.0 to 10.6 seconds: "Or I'll do what I did in Texas. Ten years ago."
No other dialogue, patrons react non-verbally. No copyrighted music. No recognizable melody. No real-brand audio.

Character description: The cowboy, the same older weathered deadpan man, calm as stone, issuing a vague deadly threat; the patrons, weathered working men and a bartender, now quietly frightened but restrained. Grounded; the comedy is the contrast.

Location: The same dim, warm, dusty dive bar, cluttered indistinct walls, faint neon, golden hazy light, deep shadow, a worn bar, mismatched tables, a pool table. Lived-in, cinematic. Strictly generic, no readable signage, no IP, no real-location ID.

Hero prop: The threat itself, and the whiskey he calmly pours right after it; the frightened still faces. No readable text anywhere, neon and signs indistinct, no brand logos, generic glassware, no real-location markings; every surface clean or an indistinct unreadable mark, zero AI-text artifacts.

Mood and tempo: A calm man threatens a whole bar and then pours a drink, 15 seconds, full-bleed 16:9, 6 real-time shots, warm dusty light, a flat threat and a frightened still room, ending on his unbothered sip. Dry, tense, funny, cinematic.
```

### CH-30
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt (local: `help-center_getting-started_how-do-i-write-a-good-prompt.md`)
- Model: Supercomputer (agent routes models)
- Settings: Loose brief; agent fills details and confirms plan

```text
make a TikTok for my sneakers
```
