# Cinema Studio (4.0) - AI filmmaking workspace

Sources: https://higgsfield.ai/cinematic-video-generator (Cinema Studio 4.0 landing; 54 showcase jobs made with Cinema Studio 3.0 embedded in page data), plus Cinema Studio blurbs on /ai-video, /ai-image, /enterprise.

## What it is
A full production environment: set genre, camera, pacing and cast in one panel and get an edited scene rather than a raw clip. "Mr. Higgs" assistant can pick the camera, light the scene, write the prompt, or break a script into shots.

## Controls (4.0)
- **Genre**: General, Action, Epic, Drama, Comedy, Horror - motion and conventions follow the genre.
- **Camera control**: every move is a `#tag`; type it in the prompt or pick from the library; **stack several per shot and they run in order** (older copy: up to 3 simultaneous camera movements).
- **Tempo / Montage Pacing**: Chaotic, Dynamic, Calm, Single Shot - scene arrives already cut.
- **Era selector**: 1960 / 1980 / 1990 / 2000 / 2020 - regrades stock, halation, colour.
- **Optical stack** (3.x): choose virtual camera body, lens, focal length (e.g. Camera "Modular 8K Digital", Lens "Classic Anamorphic", Focal 35mm; enterprise mock-up: Camera "Studio Digital S35", Style "Orange Teal"). Photography mode <-> Videography mode toggle to iterate on a still first. 21:9 supported; "16-bit" grade claimed.
- **References**: up to 50 per generation (uploads, Elements, past takes, likes); protected content is IP-checked.
- **AI Cast** (genre, era, archetype, physique, outfit, distinguishing marks), **Cinematic Locations**, **Emotions** per character, **Build the scene** (locations/props), **Color grading** presets, **Soul Cinema** models.
- **Multi-model**: Seedance and other engines run inside the studio; pick engine per shot.
- Team layer: live co-directing, shared Elements, Canvas integration, Project Brief (tone, refs, do's/don'ts for team + agent), subfolders.
- 4.0 claims native 4K and up to one minute per generation (another page says 30 s; API lists Cinema Studio 4.0 "up to 30 seconds", $0.2057/s).
- Pricing: credits by length, resolution, model.

## Cinema Studio 3.0 job settings (54 showcase jobs)
720p, 16:9, genre auto, speed-ramp auto, audio on (52/54), durations mostly 5 s (up to 12 s); multi-shot on "auto" (33) or "custom" (21); 0-6 reference images per job, cited inline as `<<<image_1>>>`, `<<<image_2>>>`.

## Prompt patterns from the showcase
- **Open with a look/format line**: "Realism, Hollywood live-action VFX, ARRI 35, anamorphic lens, high-contrast cinematic lighting. Not 3D animation." - naming a real camera + lens sets the look (Higgsfield's own history: the viral kangaroo-fight clip came from naming real cameras and lenses).
- **Bind references to roles inline**: "`<<<image_5>>>` is lying on the ground in the position of `<<<image_2>>>`", "Lighting reference: `<<<image_3>>>`".
- **Sound instruction at the end**: "Pure sound effects. No music." / "Sound effects only."
- Describe the shot as framing + subject + action + environment + light + mood; use "This cuts to..." to chain beats inside one generation.
- Some prompts were written in Chinese (prompt_language zh) - the studio accepts other languages.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Cinema Studio — AI Filmmaking Workspace / Higgsfield | https://higgsfield.ai/cinematic-video-generator | 54 |

## Verbatim prompts (54)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

This page set has 54 prompts; the first 6 are shown here, the rest are in PROMPTS.md (IDs P215-P268).

### P215 - Cinema Studio showcase job

- Page: https://higgsfield.ai/cinematic-video-generator | Model: Cinema Studio 3.0 (cinematic_studio_3_0) | Settings: duration s 5; aspect 16:9; resolution 720p; audio true; genre auto; multi-shot true; multi-shot mode auto; speed ramp auto; reference images 2 | Use-case: character/consistency

```text
A dynamic, wide-angle shot inside a dimly lit urban apartment <<<image_1>>> as a young man with curly dark hair and a thin mustache levitates violently off the ground <<<image_2>>>, his body consumed by crackling neon-green energy that arcs from his limbs like electric tendrils. Objects — furniture, papers, cups — fly outward in a telekinetic shockwave. The room is cluttered and lived-in: a leather couch, a gaming PC with glowing cyan fans, movie posters on the walls, a small kitchen counter strewn with debris. Shot from a dramatic low angle looking upward, the camera captures the man's silhouette against the ceiling as green lightning coils around his torso and legs. The environment is steeped in cold blue-grey tones with the supernatural green glow cutting through like a fracture in reality. The atmosphere is one of terrifying, involuntary power awakening, rendered in a hyper-realistic cinematic style evoking the tone of a sci-fi origin story or dark superhero thriller.
```

### P216 - Cinema Studio showcase job

- Page: https://higgsfield.ai/cinematic-video-generator | Model: Cinema Studio 3.0 (cinematic_studio_3_0) | Settings: duration s 5; aspect 16:9; resolution 720p; audio true; genre auto; multi-shot true; multi-shot mode auto; speed ramp auto; reference images 1 | Use-case: character/consistency

```text
A visceral, speed-blurred shot of a young man with curly dark hair <<<image_1>>> hurtling through an infinite radial tunnel of smeared light — warm amber, deep teal, electric blue, and soft pink — streaking outward from a central vanishing point. He tumbles backward in freefall, arms outstretched, mouth wrenched open in a scream, wearing a loose dark jacket over a white t-shirt. The camera is fixed on his face and upper body as the world around him dissolves into pure velocity. The color palette shifts between hot orange-gold and cool cyan-blue in concentric bands. The entire frame vibrates with motion blur and chromatic distortion. The atmosphere is one of absolute disorientation and existential terror, rendered in a high-contrast, hyper-stylized cinematic style evoking an interdimensional transit sequence from a sci-fi action epic.
```

### P217 - Cinema Studio showcase job

- Page: https://higgsfield.ai/cinematic-video-generator | Model: Cinema Studio 3.0 (cinematic_studio_3_0) | Settings: duration s 5; aspect 16:9; resolution 720p; audio true; genre auto; multi-shot true; multi-shot mode auto; speed ramp auto; reference images 3 | Use-case: cinematic film scene

```text
A whimsical, extreme close-up of a small fantastical bat-like creature with soft lavender-blue fur, enormous round amber eyes, tiny pointed ears, and delicate iridescent wings, peering directly into the camera with curious, almost mischievous intent. The shot is framed as if the creature has grabbed the lens, its small pink nose and whiskered snout filling the frame. Behind it, an out-of-focus rooftop and warm afternoon sky with terracotta-colored buildings. The image has a vintage, slightly desaturated film quality with subtle vignetting at the edges. This cuts to a medium close-up of a young man with wild curly dark hair, a thin mustache, and wide, stunned eyes — mouth agape in shock — crouched on blood-red desert sand. He wears a stained white t-shirt under a dark hoodie, a thin chain necklace around his neck. Warm, harsh overhead light sculpts deep shadows beneath his brow. The atmosphere shifts from playful wonder to raw disbelief, rendered in a gritty, textured cinematic style evoking the collision of fantasy and survivalist drama.
```

### P218 - Cinema Studio showcase job

- Page: https://higgsfield.ai/cinematic-video-generator | Model: Cinema Studio 3.0 (cinematic_studio_3_0) | Settings: duration s 5; aspect 16:9; resolution 720p; audio true; genre auto; multi-shot true; multi-shot mode auto; speed ramp auto; reference images 1 | Use-case: character/consistency

```text
An explosive anime-style close-up of a small purple-furred bat <<<image_1>>> creature with oversized golden-amber eyes magnified behind round wire-frame glasses, its expression shifting from wide-eyed wonder to furious intensity. Radiating behind it are dynamic speed lines in neon blue, pink, and violet. The scene transitions to a sweeping hand-painted cosmic vista: a massive cratered red planet glowing with internal heat dominates the right side of frame, while smaller orbs — violet, emerald, pink — drift through a star-dusted indigo void. The sequence culminates with the bat creature mid-scream, mouth torn open in a full-body yell, tiny fists clenched, floating before a massive green-blue planet as bold, 3D comic-book lettering crashes across the frame. The style is vivid 2D cel animation with thick outlines, saturated color palettes, and manga-inspired dynamic framing, evoking the energy of a shonen anime transformation or title card reveal.
```

### P219 - Cinema Studio showcase job

- Page: https://higgsfield.ai/cinematic-video-generator | Model: Cinema Studio 3.0 (cinematic_studio_3_0) | Settings: duration s 5; aspect 16:9; resolution 720p; audio true; genre auto; multi-shot true; multi-shot mode auto; speed ramp auto; reference images 4 | Use-case: character/consistency

```text
A sweeping wide shot inside a colossal gladiatorial arena <<<image_1>>> carved into red desert canyon rock, its tiered stone grandstands packed with thousands of spectators. The word "FIGHT" manifests in massive, angular metallic lettering at the center of a blood-orange sky, flanked by violent white lightning bolts that crack across the frame. The camera then shifts to an over-the-shoulder shot from behind a young man with curly dark hair — wearing a dirty white t-shirt, baggy shorts, and green-accented sneakers <<<image_2>>> — as he faces two opponents across the red sand: a towering, heavily-armored gladiator in a horned Viking-style helmet <<<image_3>>>, and the small lavender bat creature fluttering at his side <<<image_4>>> . Glowing white runic symbols line the arena's lower walls. Monumental warrior statues stand as sentinels along the arena rim. The lighting is harsh and golden, the atmosphere thick with dust and dread, rendered in a photo-real VFX cinematic style evoking a mythological combat arena fused with dark fantasy epic spectacle.
```

### P220 - Cinema Studio showcase job

- Page: https://higgsfield.ai/cinematic-video-generator | Model: Cinema Studio 3.0 (cinematic_studio_3_0) | Settings: duration s 5; aspect 16:9; resolution 720p; audio true; genre auto; multi-shot true; multi-shot mode auto; speed ramp auto; reference images 5 | Use-case: cinematic film scene

```text
A tight, intimate close-up on the lower face and neck of a young man — sweat beading on textured skin, a thin dark mustache above parted lips, jaw clenched with adrenaline — as small dark droplets of blood drift across the frame in slow motion. Warm, low sidelight catches the sheen of perspiration on his collarbone, the open collar of his dark hoodie framing a glint of chain. The arena's blurred red-sand floor and stone walls recede behind him. This cuts to a harrowing, ground-level static shot of a severed hand lying palm-up on blood-red arena sand, fingers still slightly curled, the wound raw and visceral. The dark silhouette of a boot stands in the background. Glowing white runic symbols are etched into the arena wall behind. The palette is desaturated and heavy — muted earth tones, dried crimson, cold shadow. The atmosphere is one of brutal consequence and grim silence, rendered in a gritty, hyper-realistic cinematic style evoking the unflinching violence of a gladiatorial survival horror.
```
