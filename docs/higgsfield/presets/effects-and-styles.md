# Effects, viral, Mixed Media, Photodump, Moodboard, Soul and app presets

This file covers every effect or style preset found in the open-source repos under `../opensource/`: motion/VFX presets, Mixed Media overlays, Photodump styles, Moodboard curated looks, Soul Hex palettes, apps, Vibe Motion templates, and stylized-content style lists. The last column of each generated table links a matching **Viral Hub** preset (the live-captured catalog in [viral/](viral/)). `≈` marks a related but not identical preset.

**Counts:** 92 unique motion/VFX presets (93 rows; Flame Transition is listed twice) · 52 Mixed Media presets · 29 Photodump presets · 12 Moodboard curated presets + 6 Soul Hex palettes · 50 apps · 6 Vibe Motion template categories + 6 palettes · 5 platform styles · 13 cartoon styles · 9 3D render styles · 5 anime genre looks · 10 music-video genre looks · 42 stylized-content hooks · 8 Higgsfield viral "formats". Viral Hub (live, 87) cross-links: **49** rows below link to **39** distinct Viral Hub files; **48** Viral Hub presets have no open-source counterpart.

## Source legend

| Code | Repo · path | URL |
|---|---|---|
| **E1** | higgsfield-ai-prompt-skill · `skills/higgsfield-motion/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md |
| **E2** | higgsfield-ai-prompt-skill · `skills/higgsfield-mixed-media/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md |
| **E3** | higgsfield-ai-prompt-skill · `photodump-presets.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/photodump-presets.md |
| **E4** | higgsfield-ai-prompt-skill · `skills/higgsfield-moodboard/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-moodboard/SKILL.md |
| **E5** | higgsfield-ai-prompt-skill · `skills/higgsfield-apps/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-apps/SKILL.md |
| **E6** | higgsfield-ai-prompt-skill · `skills/higgsfield-vibe-motion/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md |
| **E7** | higgsfield-ai-prompt-skill · `model-guide.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/model-guide.md |
| **E8** | higgsfield-ai-prompt-skill · `skills/shared/negative-constraints.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/shared/negative-constraints.md |
| **E9** | higgsfield-skills · `skills/03-cartoon/references/{animation-craft,hooks}.md`, `skills/02-3d-cgi/references/render-craft.md`, `skills/08-anime-action/references/{anime-craft,hooks}.md`, `skills/10-music-video/references/genres.md`, `skills/04-comic-to-video/references/hooks.md`, `skills/05-fight-scenes/references/hooks.md` | https://github.com/pixelab-ch/higgsfield-skills/tree/2f6aa10/skills |
| **E10** | lanshu-awesome-ai-video-kit · `prompts/data/all-prompts.json` (ids `hg-005`, `sd-065`…`sd-072`) | https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json |
| **E11** | higgsfield_ai_mcp · `src/higgsfield_mcp/{client,server}.py` | https://github.com/geopopos/higgsfield_ai_mcp/blob/a2bea49/src/higgsfield_mcp/server.py |
| **E12** | higgsfield-ai-prompt-skill · `skills/higgsfield-style/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md |
| **E13** | higgsfield-ai-prompt-skill · `skills/higgsfield-seedance-vfx/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-vfx/SKILL.md |
| **E14** | higgsfield-ai-prompt-skill · `prompt-examples.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md |

## How to call effect presets

| Family | Invocation | Src |
|---|---|---|
| Motion / VFX preset | `[Scene description.] Apply the [Preset Name] preset.` Add a moment when it matters: `Apply the Plasma Explosion preset at the moment her hands reach full extension.` | E1 |
| Mixed Media | `[Scene description as normal prompt.]` then `Mixed Media preset: [Preset Name]`. To stack two: `Mixed Media presets: [Preset A] + [Preset B] (layered)`. Location: higgsfield.ai/mixed-media-intro. | E2 |
| Photodump | Character tab → Photodump → upload a photo → hover a preset → **Use preset ✦**. Keep the prompt to action, expression and setting. | E3 |
| Moodboard | Moodboard tab → Curated → click a preset. It then appears in the Soul 2.0 prompt bar. Custom moodboards need 20+ cohesive images. | E4 |
| Soul Hex | Soul 2.0 prompt bar → **Color Transfer** → a named palette, or **Upload & Create ✦** | E4 |
| Viral Hub / preset model | `generate_video(model='higgsfield_preset', preset_id=…)` with 1 image; or `get_presets(source:'viral')` → `execute_preset` (see [INDEX.md](INDEX.md)) | `higgsfield-ai-prompt-skill/specs/models_explore_snapshot_2026-08-07.json` |
| Soul image styles (API) | `GET /v1/text2image/soul-styles` → `style_id`, passed to `POST /v1/text2image/soul` along with `custom_reference_id` (Soul ID), `quality 720p\|1080p`, `batch_size 1\|4`, `width_and_height`, `enhance_prompt` | E11 |
| DoP motions (API) | `GET /v1/motions` → `motions:[{id, strength:0.5}]` on `/v1/image2video` (`dop-lite\|dop-turbo\|dop-preview`) | E11 |

**Model compatibility for motion presets** (E7): Transformation (Werewolf, Cyborg, Animalization) → Wan 2.5, Kling 2.6 · Elemental → Wan 2.5, Sora 2† · Explosion/Destruction → Sora 2†, Seedance 2.0 · Surreal/Glitch/Multiverse → Wan 2.5 · Horror → Kling 2.6, Wan 2.5 · Dance/Motion glow → Minimax Hailuo 2.3 · Nature (Sakura, Bloom, Northern Lights) → Veo 3, Wan 2.5 · Bullet Time → Kling 2.6, Sora 2† · Stylized (Anime, Pixar, Claymation) → Kling 3.0, Wan 2.5. (†Sora 2 is UI-only.)

**If a VFX preset looks cartoonish** (E8): grounded presets (Explosion, Freezing) → Kling 3.0/2.6; stylized presets (Animalization, Multiverse) → Wan 2.5. Add "photorealistic, physically accurate".

**Scope** (E1): about 100 unique preset names expand into about 1,900 per-model variants in the live catalog. Motion presets are a social/viral product; film productions free-prompt instead.

**Worked preset uses** (E14): `Apply Bullet Time preset at the moment of the throw.` · `Apply Plasma Explosion preset at the detonation moment.` · `Apply Horror Face preset in the mirror reflection.` · `Apply Glow Trace preset — her movement leaves a trail of white light.` · `Apply Live Concert preset for lighting energy.` · `Apply Cyborg preset for the transformation sequence.` · `Apply Animalization preset — he becomes a wolf, launching into the forest dark.`

## Viral Hub (87, live), with the open-source coverage summary

The 87 Viral Hub presets (all `chain` kind) are listed in [INDEX.md](INDEX.md#viral-hub-presets-87). 32 of them come from the `mixed_media_preset` CDN, and 31 of those (all except Ink Riot) have a same-named entry in the Mixed Media library below: Acid, Akrill, Broken mirror, Bubbles, Cannabis, Canvas, Cold vision, Comic, Flash comic, Fragments, Hand paint, Lava, LSD, Magazine, Marble, Modern, Multiverse, Noir, Ocean, Origami, Overexposed, Palette, Paper, Particles, Random Glow, Sketch, Toxic, Tracking, Two color, Ultraviolet, Vintage. Windows is also a Mixed Media name but is served from the `viral_hub` CDN. **No open-source repo contains the model or exact prompt template behind any Viral Hub chain preset.** Every open-source match is a description-level match (a "what it does / best for" line) or a preset of the same name in the older motion library. Those matches were appended to the individual `viral/*.md` files under `## From open-source`.

**No open-source counterpart (48 of 87):** 2000's paparazzi, Act natural, Action figure, Agamemnon, Architecture wave, Argus, Blue depth, boarding pass, Burning man, Casual monster slayer, Cutout, Cyclope, Dolphin ride, Eyes in, Fairytale castle, Fallen angel, Floating fall, Frozen in motion, High flip, Incline, Infinite clones, Ink Riot, Knight's diary, Lacewalker, Lidar transition, Lost in a book, Mighty fighter, Monet muse, Monster dab, Moonwalk, Orbital presence, Pearl earring, Penguin ride, Pigeons, Puffin ride, Race track, Selfception, Selfie twin, Skatedog, Smash and grab, Sticker peel, Stop world, Street colossus, Studio slide, Superstar, Vanish, Wild ride, World morphing. Eyes in, Selfception, High flip and Wild ride are related camera moves; see [camera-motion.md](camera-motion.md) (Through Object In / Mouth In, Crash Zoom, 360 Orbit).

## Preset libraries (tables copied verbatim from the sources, plus a Viral Hub cross-link column)

### Motion / VFX presets (named motion preset library)

Source: higgsfield-ai-prompt-skill · `skills/higgsfield-motion/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md


**Transformation & Body Effects** (line 43)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Animalization** | Subject transforms into an animal | Werewolf, shapeshifter, fantasy |  |
| **Werewolf** | Human-to-werewolf transformation sequence | Horror, fantasy, supernatural |  |
| **Cyborg** | Subject gains mechanical/cybernetic components | Sci-fi, body augmentation |  |
| **Turning Metal** | Subject or object transforms into metal | Sci-fi, industrial, transformation |  |
| **Disintegration** | Subject breaks apart into particles | Dramatic death, magic, sci-fi |  |
| **Gas Transformation** | Subject dissolves into gas or smoke | Mystery, supernatural, horror |  |
| **Clone Explosion** | Subject multiplies and explodes outward | Action, surreal, energetic | ≈ [clones](viral/clones.md) |
| **Monstrosity** | Subject transforms into a monstrous form | Horror, dark fantasy |  |
| **X-Ray** | Subject shown with visible internal structure | Medical, sci-fi, surreal |  |
| **Freezing** | Subject or scene freezes into ice | Winter, magic, time-stop |  |
| **Tattoo Animation** | Tattoos on skin come alive and move | Artistic, body art, fantasy |  |
| **Hair Style** | Subject's hair rapidly changes style | Fashion, fun, transformation |  |
| **Luminous Gaze** | Eyes emit powerful glowing light | Supernatural, power awakening |  |
| **Black Tears** | Subject cries dark/black tears | Emotional horror, dark drama |  |
| **Head Off** | Subject's head appears separated from body | Surreal, horror, dark humor |  |
| **Head Explosion** | Subject's head explodes dramatically | Action, horror, surreal |  |
| **Duplicate** | Subject is duplicated/cloned in frame | Surreal, sci-fi, artistic | ≈ [clones](viral/clones.md) |
| **Ghoulgao** | Subject transforms into a ghoul | Halloween, horror |  |

**Elemental Effects** (line 68)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Air Bending** | Subject controls and bends air currents | Fantasy, martial arts, elemental |  |
| **Water Bending** | Subject controls flowing water | Fantasy, elemental, mystical |  |
| **Earth Wave** | Ground ripples and waves like water | Earthquake, power, epic |  |
| **Fire Element** | Fire surrounds or emanates from subject | Action, elemental, power |  |
| **Water Element** | Water surrounds or flows around subject | Mystical, elemental |  |
| **Earth Element** | Earth/rock forms around subject | Fantasy, elemental warrior |  |
| **Air Element** | Air currents visibly swirl around subject | Elemental, windmaster |  |
| **Firelava** | Fire and lava merge in the scene | Volcanic, epic destruction |  |
| **Explosion** | Large-scale explosion effect | Action, war, destruction |  |
| **Building Explosion** | Entire building explodes | Disaster, action blockbuster |  |
| **Plasma Explosion** | Subject or object explodes in plasma | Sci-fi, energy weapon hit |  |
| **Atomic** | Nuclear-scale blast and shockwave | Post-apocalyptic, epic |  |
| **Flame On** | Subject ignites and burns without harm | Superhero, elemental, fantasy |  |
| **Flame Transition** | Fire sweeps across frame as transition | Action transition, drama |  |
| **Northern Lights** | Aurora borealis fills the sky | Nature, mystical, atmospheric |  |
| **Nature Bloom** | Flowers and plants rapidly bloom | Spring, life, time-lapse feel |  |

**Transitions** (line 91)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Raven Transition** | Dark, dramatic wipe transition | Horror, thriller, intense drama |  |
| **Splash Transition** | Water splash sweeps across frame | Aquatic, fresh, energetic |  |
| **Flame Transition** | Fire sweeps across frame | Action, intensity |  |
| **Melt Transition** | Scene melts away into the next | Surreal, dreamy, artistic |  |
| **Smoke Transition** | Smoke fills frame then clears to new scene | Mysterious, atmospheric |  |
| **Seamless Transition** | Clean invisible cut between scenes | Any genre, professional |  |
| **Jump Transition** | Quick kinetic jump cut | Action, energy |  |
| **Hole Transition** | A hole appears and expands to new scene | Surreal, portal, sci-fi |  |
| **Roll Transition** | Frame rolls like a scroll | Artistic, playful |  |
| **Fly Cam Transition** | Camera flies through space to new scene | Cinematic, epic |  |
| **Display Transition** | Screen/display device reveals new scene | Tech, modern, meta |  |
| **Hand Transition** | A hand wipes/sweeps to new scene | Stylized, editorial |  |
| **Stranger Transition** | Mysterious figure triggers transition | Thriller, mystery |  |
| **Column Wipe** | Columns of image wipe to reveal new scene | Stylized, editorial |  |
| **Intermission** | Old-cinema intermission card style | Retro, playful, meta |  |

**Action & Motion Effects** (line 113)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Fast Sprint** | Subject sprints at superhuman speed | Action, chase, power |  |
| **Giant Grab** | Enormous hand or creature grabs subject | Horror, monster, scale |  |
| **I Can Fly** | Subject lifts off and flies | Superhero, fantasy, joy |  |
| **Hero Flight** | Cinematic superhero-style flight arc | Superhero, action |  |
| **Train Rush** | High-speed train rushes past | Action, transport, speed |  |
| **Bullet Time Scene** | Matrix-style frozen moment camera sweep | Action climax, impact | ≈ [bullet-time](viral/bullet-time.md) |
| **Bullet Time White** | Bullet time with white flash | Action, high contrast | ≈ [bullet-time](viral/bullet-time.md) |
| **Bullet Time Splash** | Bullet time with liquid splash | Combat, impact | ≈ [bullet-time](viral/bullet-time.md) |
| **Levitation** | Subject levitates upward | Magic, supernatural, zen |  |
| **Shadow Smoke** | Subject's shadow takes on smoke quality | Dark, supernatural |  |
| **Shadow** | Dramatic shadow play in scene | Noir, mystery, drama |  |
| **Glow Trace** | Moving subject leaves glowing trail | Dance, action, energy |  |
| **Live Concert** | Concert atmosphere with stage lighting | Music, performance |  |
| **3D Rotation** | Subject or object rotates in 3D space | Product, logo, artistic | ≈ [orbit-360](viral/orbit-360.md) |

**Surreal / Artistic** (line 134)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Multiverse** | Scene fractures into parallel versions | Sci-fi, surreal, mind-bending | [Multiverse](viral/multiverse.md) |
| **Wonderland** | Dreamlike Alice-in-Wonderland reality | Fantasy, children, surreal |  |
| **Portal** | A portal opens to another dimension | Sci-fi, fantasy, travel |  |
| **Glitch** | Digital glitch artifacts across the image | Cyberpunk, tech, artistic |  |
| **Point Cloud** | Scene rendered as floating particles | Artistic, sci-fi, abstract |  |
| **Wireframe** | Subject shown as 3D wireframe | Tech, sci-fi, design |  |
| **Diamond** | Subject or scene crystallizes to diamond | Fashion, luxury, artistic |  |
| **Innerlight** | Warm inner glow emanates from subject | Spiritual, emotional, warm |  |
| **Polygon** | Scene fragments into geometric polygons | Abstract, digital, art |  |

**Nature / Environment** (line 150)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Earth Zoom Out** | Camera pulls back from earth's surface | Epic reveal, scale, planet | ≈ [earth-zoom](viral/earth-zoom.md) |
| **Cotton Cloud** | Soft clouds form and drift through scene | Dreamy, peaceful, sky |  |
| **Sakura Petals** | Cherry blossom petals fill the air | Japanese aesthetic, romance |  |
| **Garden Bloom** | Garden bursts into bloom | Spring, life, beauty |  |
| **Aquarium** | Scene takes on underwater aquarium quality | Nature, peaceful, aquatic |  |
| **Ice Rose** | Rose or subject freezes in crystalline ice | Winter, beauty, time-stop |  |
| **Color Rain** | Colorful rain falls through the scene | Artistic, joyful, musical |  |
| **Glowing Fish** | Bioluminescent fish swim through scene | Underwater, mystical |  |
| **Bubbles** | Bubbles float upward through the scene | Dreamy, underwater, child-like | [Bubbles](viral/bubbles.md) |

**Horror / Dark** (line 166)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Horror Face** | Subject's face takes on horror distortion | Horror, psychological, jump scare |  |
| **Spiders from Mouth** | Spiders pour from subject's mouth | Body horror, extreme horror |  |
| **Storm Creature** | A creature emerges from a storm | Horror, monster reveal |  |
| **Sand Worm** | Giant sandworm erupts from ground | Sci-fi horror, Dune-style |  |

**Social / Fun** (line 177)

| Preset | What it does | Best for | Viral Hub file |
|---|---|---|---|
| **Money Rain** | Cash rains down from above | Celebration, success, hip-hop |  |
| **Group Photo** | Scene freezes in a group photo pose | Comedy, social, fun |  |
| **Firework** | Fireworks burst in the sky/scene | Celebration, new year, joy |  |
| **Starship Troopers** | Sci-fi military action aesthetic | Sci-fi action, parody |  |
| **Thunder God** | Subject wields thunder/lightning power | Fantasy, power, epic |  |
| **Objects Around** | Objects orbit around the subject | Cartoon, playful, magic |  |
| **Balloon** | Balloons fill the scene | Party, joyful, celebration |  |
| **Saint Glow** | Halo and saintly glow around subject | Spiritual, ironic, artistic |  |

### Mixed Media presets (artistic overlay library)

Source: higgsfield-ai-prompt-skill · `skills/higgsfield-mixed-media/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md


**Textural / Surface Presets** (line 35)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Sketch** | Hand-drawn pencil sketch, line weight variation | Concept art, storyboard, editorial | [Sketch](viral/sketch.md) |
| **Canvas** | Oil paint on canvas texture, brushwork visible | Fine art, dramatic portraiture | [Canvas](viral/canvas.md) |
| **Paper** | Subject looks cut and placed on paper | Collage, graphic, minimal | [Paper](viral/paper.md) |
| **Akrill** | Acrylic paint — thick, textured, vivid | Pop art, expressive portraiture | [Akrill](viral/akrill.md) |
| **Hand Paint** | Loose gestural watercolor brushwork | Soft, artistic, romantic | [Hand paint](viral/hand-paint.md) |
| **Paint App** | Digital painting — smooth, stylized | Editorial, illustration |  |
| **Marble** | Subject rendered in marble texture | Sculpture aesthetic, luxury | [Marble](viral/marble.md) |
| **Origami** | Subject folded into paper geometry | Minimal, Japanese aesthetic | [Origami](viral/origami.md) |

**Light & Atmosphere** (line 47)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Noir** | High-contrast black and white, deep shadows | Crime, drama, editorial | [Noir](viral/noir.md) |
| **Overexposed** | Blown highlights, washed out, dreamlike | Fashion, ethereal, editorial | [Overexposed](viral/overexposed.md) |
| **Ultraviolet** | UV-reactive palette, neon on dark | Club, night, music | [Ultraviolet](viral/ultraviolet.md) |
| **Glow Trace** | Luminous trails, subject leaves light path | Dance, movement art |  |
| **Random Glow** | Unpredictable glowing particles and light | Fantasy, magical, abstract | [Random Glow](viral/random-glow.md) |
| **Northern Lights** | Aurora borealis palette and flow | Nature, mystical, atmospheric |  |
| **Neon** | Vivid neon outlines on dark background | Cyberpunk, signage, night |  |
| **Cold Vision** | Ice-blue, clinical, cold atmospheric | Sci-fi, thriller, dystopian | [Cold vision](viral/cold-vision.md) |
| **Burning Sunset** | Deep orange and crimson warmth | Drama, epic, emotional |  |
| **Innerlight** | Warm glow emanating from within subject | Spiritual, warm, emotional |  |

**Geometric & Digital** (line 61)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Particles** | Subject dissolves into floating particles | Sci-fi, abstract, ethereal | [Particles](viral/particles.md) |
| **Point Cloud** | 3D point cloud representation | Technical, sci-fi, abstract |  |
| **Wireframe** | Geometric wireframe overlay | Tech, architectural, design |  |
| **Polygon** | Subject fragmented into flat polygons | Graphic, modern, digital art |  |
| **Fragments** | Subject broken into scattered pieces | Abstract, dramatic, impactful | [Fragments](viral/fragments.md) |
| **Multiverse** | Fractured parallel reality layers | Sci-fi, surreal, conceptual | [Multiverse](viral/multiverse.md) |
| **Collage** | Subject reassembled as cut-paper collage | Editorial, zine, artistic | ≈ [scrapbook-collage](viral/scrapbook-collage.md) |
| **Comic** | Classic comic book halftone + lines | Pop art, superhero, nostalgia | [Comic](viral/comic.md) |
| **Flash Comic** | Modern bright comic style | Action, energetic, bold | [Flash comic](viral/flash-comic.md) |
| **Pixel Game** | 8-bit retro pixelated aesthetic | Gaming, nostalgic, fun |  |
| **3D Rotation** | Subject appears as 3D rotating object | Product, logo, tech | ≈ [orbit-360](viral/orbit-360.md) |

**Organic & Elemental** (line 76)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Bubbles** | Transparent soap bubbles fill scene | Dreamy, playful, ethereal | [Bubbles](viral/bubbles.md) |
| **Ocean** | Underwater refraction and caustic light | Aquatic, dreamy, calm | [Ocean](viral/ocean.md) |
| **Lava** | Molten rock texture and glow | Dramatic, volcanic, intense | [Lava](viral/lava.md) |
| **Toxic** | Neon-green toxic atmosphere | Horror, sci-fi, danger | [Toxic](viral/toxic.md) |
| **Acid** | Psychedelic acid-wash color distortion | 1960s, surreal, experimental | [Acid](viral/acid.md) |
| **LSD** | Strong psychedelic visual distortion | Abstract, experimental | [LSD](viral/lsd.md) |
| **Cannabis** | Soft dreamy haze and warmth | Chill, atmospheric, mellow | [Cannabis](viral/cannabis.md) |
| **Sand Worm** | Desert sand texture and movement | Sci-fi, epic, textural |  |

**Vintage & Film** (line 88)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Vintage** | Aged, faded, yellowed film stock | Nostalgic, retro, warm | [Vintage](viral/vintage.md) |
| **VHS** | Scanlines, color bleed, static | 80s/90s, horror, retro |  |
| **J-Magazine** | Japanese fashion magazine aesthetic | Editorial, street, stylized | ≈ [magazine](viral/magazine.md) |
| **60s Cafe** | Mid-century modern warm palette | Retro, lifestyle, warm |  |
| **Renaissance** | Classical painting light and composition | Fine art, portrait, dramatic |  |

**Social / Trend** (line 97)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Two Color** | Bold two-tone duotone treatment | Graphic, poster, editorial | [Two color](viral/two-color.md) |
| **Palette** | Restricted color palette, graphic | Illustration, brand, poster | [Palette](viral/palette.md) |
| **Modern** | Clean contemporary minimal style | Commercial, brand, lifestyle | [Modern](viral/modern.md) |
| **Windows** | Windows/panes frame the subject | Architectural, mystery, framing | [Windows](viral/windows.md) |
| **Magazine** | High-gloss editorial magazine spread | Fashion, commercial, portrait | [Magazine](viral/magazine.md) |
| **Tracking** | Motion tracking lines/paths visible | Sports, movement, tech | [Tracking](viral/tracking.md) |

**Surreal / Dark** (line 107)

| Preset | Look | Best for | Viral Hub file |
|---|---|---|---|
| **Broken Mirror** | Subject reflected in shattered fragments | Drama, psychological, horror | [Broken mirror](viral/broken-mirror.md) |
| **Glitch** | Digital glitch artifacts, corruption | Cyberpunk, horror, avant-garde |  |
| **Melting Doodle** | Subject melts into doodle strokes | Surreal, fun, artistic | ≈ [melting](viral/melting.md) |
| **Brick Cube** | Subject rendered as 3D brick structure | Abstract, architectural |  |

### Photodump style presets (Character tab → Photodump)

Source: higgsfield-ai-prompt-skill · `photodump-presets.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/photodump-presets.md


**Complete Preset Library** (line 19)

| Preset | Visual Style | Character | Viral Hub file |
|---|---|---|---|
| **General** | Default — no strong stylistic bias | Neutral starting point |  |
| **Old Anime** | Classic anime aesthetic — Ghibli-era warmth, painted backgrounds | Nostalgic Japanese animation |  |
| **Simps** | The Simpsons animation style — yellow skin, white eyes, Springfield world | TV animated sitcom |  |
| **Ink Sketch** | Dense crosshatch pen-and-ink illustration, high contrast B&W | Editorial illustration, graphic novel |  |
| **Gumstyle** | Adventure Time / Cartoon Network rubber-hose style | Modern western animation |  |
| **Clay** | Real clay/sculpted figure aesthetic | Stop-motion / tactile |  |
| **Bender** | Futurama-adjacent style — boxy characters, urban streetwear context | Animated sitcom urban |  |
| **Big Bob** | Bob's Burgers-style — simple round features, warm family comedy look | TV animated sitcom |  |
| **Pop Cartoon** | Vibrant pop art meets anime — neon city backgrounds, cool teen energy | Contemporary animated |  |
| **Regular** | Regular Show style — simple flat characters, suburban backgrounds | Cartoon Network |  |
| **Jack Horse** | BoJack Horseman style — anthropomorphic animals, cinematic lighting | Adult animated drama |  |
| **Manga** | Black and white manga — heavy contrast, detailed linework, dramatic | Japanese comics |  |
| **Gravity Force** | Gravity Falls style — adventure cartoon, expressive characters | Disney animated |  |
| **Adventure Tales** | Adventure Time meets Cartoon Network — colorful, outdoorsy | Western animation |  |
| **3D Cartoon** | Photorealistic 3D render with cartoon exaggeration | Pixar/animated feature adjacent |  |
| **Family Boss** | Family Guy / American Dad style — round simple faces, suburban backgrounds | Adult animated sitcom |  |
| **West Park** | South Park style — flat paper cutout construction | Adult animated |  |
| **Flat Cartoon** | Minimal flat design illustration — geometric, clean | Modern graphic/editorial |  |
| **R&M** | Rick and Morty style — chaotic, vibrant, sci-fi setting | Adult animated sci-fi |  |
| **Child Art** | Hand-drawn child's artwork aesthetic — crayon/pencil, proportional looseness | Naive/childlike illustration |  |
| **Abstract Cartoon** | Psychedelic swirling color, abstract background, cartoon character | Experimental animated |  |
| **Crayon** | Colored crayon texture, hand-drawn quality, warm colors | Handmade illustration |  |
| **Bikini Bottom** | SpongeBob SquarePants style — underwater world, rubbery characters | Nickelodeon animated |  |
| **Balloon** | Inflated, rounded 3D balloon-like characters | Playful toy-like aesthetic |  |
| **Old Cartoon** | 1930s-1940s rubber hose animation — black and white, classic era | Golden age animation |  |
| **Bricks** | LEGO aesthetic — everything rendered as plastic brick figures/sets | Toy/branded |  |
| **Fairy Tale** | Classic Disney fairy tale illustration — painted, lush backgrounds, elegant | Disney golden era |  |
| **Muppet** | Jim Henson Muppet aesthetic — felt puppet texture, googly eyes | Puppet/live action hybrid |  |
| **Voxel Art** | 3D pixel/voxel blocks — Minecraft-adjacent aesthetic | Game art |  |

### Moodboard curated presets + Soul Hex palettes

Source: higgsfield-ai-prompt-skill · `skills/higgsfield-moodboard/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-moodboard/SKILL.md


**Curated Moodboard Presets** (line 38)

| Preset | Visual Character | Best for | Viral Hub file |
|---|---|---|---|
| **General** | Neutral — no strong stylistic bias | Default when unsure, versatile |  |
| **Warm ambient** | Warm, soft, gently lit — cozy and lived-in | Lifestyle, home, intimate portrait |  |
| **Y2K studio** | Hypercolor studio backdrop, fairy wings, maximalist | Y2K aesthetic, fashion, fantasy editorial |  |
| **Swag era** | Early 2000s hip-hop and streetwear energy | Urban fashion, music culture content |  |
| **Theatrical light** | Dramatic stage lighting, strong contrast, silhouette | Artistic portrait, performance, dark editorial |  |
| **Y2K street** | Union Jack tees, street photography, 2000s pop culture | Street style, youth culture, nostalgia |  |
| **Flash editorial** | On-camera flash, oversaturated, candid — Cobrasnake era | Party, raw editorial, documentary fashion |  |
| **Old smartphone** | Low resolution, slightly washed, nostalgic phone camera | Authentic, lo-fi, personal content |  |
| **Street photography** | Urban candid, natural light, documentary | Street style, city life, authentic scenes |  |
| **Asian nostalgia** | Japanese/Korean city streetwear, warm neon, youth culture | Asian fashion, Tokyo/Seoul aesthetic |  |
| **Retro BW** | Black and white, classic tones, timeless | Artistic portrait, formal editorial, classic fashion |  |
| **Surreal solarization** | Otherworldly color shifts, solarization effect | Conceptual/avant-garde, fashion art |  |

**Named Color Palettes** (line 114)

| Palette | Visual Character | Viral Hub file |
|---|---|---|
| **Film colors** | Natural, organic, slightly desaturated film stock |  |
| **Lime Jam** | Cool greens, fresh tones, nature-adjacent |  |
| **Candy pink** | Warm pinks, peachy highlights |  |
| **Nostalgic blue** | Desaturated blues, faded, melancholic |  |
| **Soft palette** | Muted, airy, minimal contrast |  |
| **Black gloss** | High contrast, deep blacks, graphic |  |

## Apps

### Apps (one-click workflows)

Source: higgsfield-ai-prompt-skill · `skills/higgsfield-apps/SKILL.md` — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-apps/SKILL.md


**Content Creator / Social Media** (line 24)

| App | What it does | Input needed | Viral Hub file |
|---|---|---|---|
| **AI Influencer Studio** | Create a consistent AI character for social content | Character reference image |  |
| **Vibe Motion** | Chat-based video generation with motion | Text description |  |
| **Transitions** | Seamless transition between any two shots | Two images |  |
| **Shots** | Multiple cinematic angles of one subject | Single image |  |
| **Zooms** | Dramatic zoom effects on images | Single image |  |
| **Style Snap** | Apply a visual style to any image | Image + style reference |  |
| **Chameleon** | Match color/style of one image to another | Two images |  |

**Product & Commercial** (line 35)

| App | What it does | Input needed | Viral Hub file |
|---|---|---|---|
| **Click to Ad** | Turn a product URL into a video ad | Product URL or image |  |
| **Packshot** | Professional product photography | Product image |  |
| **Giant Product** | Product appears at epic scale in environment | Product image |  |
| **Macro Scene** | Extreme close-up product showcase | Product image |  |
| **Macroshot product** | Detailed product macro video | Product image |  |
| **Billboard Ad** | Product appears on a billboard | Product image + environment |  |
| **Graffiti Ad** | Product as street art | Product image |  |
| **Truck Ad** | Product on a moving truck | Product image |  |
| **Volcano Ad** | Product in dramatic volcanic environment | Product image |  |
| **Fridge Ad** | Product in refrigerator reveal | Product image |  |
| **Kick Ad** | High-energy athletic product ad | Product image |  |

**Character & Face** (line 50)

| App | What it does | Input needed | Viral Hub file |
|---|---|---|---|
| **Face Swap** | Swap face onto another image | Face image + target image |  |
| **Video Face Swap** | Swap face in a video | Face image + target video |  |
| **Recast** | Swap character in any video | Character reference + video |  |
| **Character Swap 2.0** | Replace character entirely | Character reference + video |  |
| **Commercial Faces** | Generate diverse faces for ads | Text description |  |
| **Skin Enhancer** | Natural skin texture enhancement | Portrait image |  |
| **Angles 2.0** | Generate any camera angle from one image | Single image |  |

**Lifestyle & Fun** (line 61)

| App | What it does | Input needed | Viral Hub file |
|---|---|---|---|
| **Behind the Scenes** | Add BTS filming aesthetic to any video | Video |  |
| **Urban Cuts** | Street photography / urban aesthetic | Image or video |  |
| **AI Stylist** | Try different outfits on a character | Portrait + outfit description |  |
| **Outfit Swap** | Replace clothing in image/video | Image + clothing reference |  |
| **Outfit Shot** | Fashion lookbook from a clothing item | Clothing image |  |
| **Japanese Show** | Japanese variety show aesthetic | Image or video |  |
| **Rap God** | Rap video aesthetic and styling | Portrait image |  |
| **Mugshot** | Classic mugshot style portrait | Portrait image |  |
| **Renaissance** | Classical Renaissance painting portrait | Portrait image |  |
| **Comic Book** | Comic book style transformation | Image |  |

**Animation & Effects** (line 75)

| App | What it does | Input needed | Viral Hub file |
|---|---|---|---|
| **3D Render** | Render image in 3D style | Image | [3D render](viral/3d-render.md) |
| **3D Figure** | Convert to 3D figurine/toy | Image |  |
| **3D Rotation** | 360 degree rotation of subject | Image | ≈ [orbit-360](viral/orbit-360.md) |
| **Bullet Time Scene** | Matrix-style frozen moment | Image | ≈ [bullet-time](viral/bullet-time.md) |
| **Sketch-to-Real** | Turn sketch into realistic image/video | Sketch image |  |
| **Pixel Game** | Pixel art / retro game aesthetic | Image |  |
| **GTAI** | GTA-style game aesthetic | Image |  |
| **Melting Doodle** | Subject melts into doodle | Image | ≈ [melting](viral/melting.md) |
| **Paint App** | Convert to painted artwork | Image |  |

**Audio / Lipsync** (line 88)

| App | What it does | Input needed | Viral Hub file |
|---|---|---|---|
| **Lipsync Studio** | Add speech to any face | Portrait/video + audio |  |
| **Talking Avatar** | Create talking head from image | Portrait + audio/text |  |
| **ASMR Add-On** | Add ASMR audio to video | Video |  |
| **ASMR Classic** | ASMR-style content creation | Image or video |  |
| **ASMR Host** | Talking ASMR presenter | Portrait |  |
| **ASMR Promo** | ASMR product promotion | Product image |  |
## Vibe Motion templates and palettes (E6)

Vibe Motion is a chat-based motion-graphics tool (typography, logos, infographics); it is not a video model.

| Template category | Examples |
|---|---|
| Text Animation | Kinetic typography, quote cards, lyric videos |
| Infographics | Stat reveals, bar charts, comparison slides |
| Posters | Animated poster with text and image |
| Brand | Logo animation, brand intro/outro, bumper |
| Social | Story animations, Reels titles, YouTube intros |
| Product | Feature callouts, spec animations, launch reveals |

**Color palette presets:** Mosaic · Prism · Candy · Minimal · Dark · Brand (custom). **Animation Speed:** Slow (luxury/editorial) · Medium · Fast/Sharp (tech, sports). Prompt structures: typography `[What text] + [how it enters] + [timing feel] + [style]` · logo `[Logo behavior] + [reveal style] + [hold duration] + [feel]` · infographic `[What data] + [reveal animation] + [visual hierarchy] + [style]` · social `[Format + platform] + [content] + [timing] + [style]`. Verbatim examples are in [opensource-prompt-templates.md](opensource-prompt-templates.md#d-viral-effect--motion-graphics).

## Platform styles and looks

The 5 core platform styles (**Cinematic, VHS, Super 8MM, Anamorphic, Abstract**; call with `Style: <Name>`), color grades, film stocks and the 8 official "style recipes" are in [cinema-studio.md §12](cinema-studio.md#12-platform-looks-grades-and-film-stocks-usable-inside-or-outside-cs) (E12). Register poles (E12): Film register · Broadcast-TV register · Stop-motion / hand-animated ("true 12fps, animated on twos") · Anime / cel ("Cel-shaded 2D, clean flat fills, two-to-three value cel shading").

## Soul presets

- **Soul image style presets** exist in the API (`GET /v1/text2image/soul-styles`, each with `id, name, description, preview_url`; used as `style_id` on `POST /v1/text2image/soul`), but **no repo lists their names**. One example ID appears in a docstring: `1cb4b936-77bf-4f9a-9039-f3d349a4cdbe` (E11).
- The Soul 2.0 UI surfaces are the **Moodboard** curated presets and the **Soul Hex** palettes (tables above), plus the **Soul 2.0 Style Preset** row in the moodboard decision table (E4).
- Soul ID / Soul Cast / Soul Cinema / micro-expression presets: see [cinema-studio.md §9–10](cinema-studio.md#10-soul-cast-ai-actor-presets-s1-s4-s2-s7).
- Lanshu Soul templates (E10, verbatim): `[Soul ID: my-character] walks into a sunlit kitchen wearing a white linen shirt, opens the fridge, takes out a bottle of water, turns to camera with a slight smile. Warm morning light. Medium shot, eye level.` (hg-003) · Soul + transformation viral: `[Soul ID: my-character] stands in casual street clothes. Lightning flash. In the next frame she wears full cyberpunk samurai armor with glowing katana. Cool neon palette. Vertical short.` (hg-005)

## Higgsfield viral "formats" (Seedance 2.0 on Higgsfield, E10)

These were shared at `higgsfield.ai/s/seedance-2-0-higgsfieldai-kQBLPo` and archived in lanshu. The full prompts are verbatim in [opensource-prompt-templates.md](opensource-prompt-templates.md#d-viral-effect--motion-graphics).

| Format | Name | Structure |
|---|---|---|
| Format 1 | Burger Transformation / Bus Transformation | "Montage, multi-shot action Hollywood movie… 35mm film quality, ARRI ALEXA aesthetic." Calm character → monster/robo transformation → back to calm. "Total: 15s / 6 shots / 16:9." |
| Format 2 | Orbs Electro (POV powers) | "Single continuous shot, first-person POV… hyper-chaotic handheld…" plus an SFX line. "Total: 15s / 1 shot / 16:9." |
| Format 3 | POV Gladiator / Medieval Knight (minimal) | One continuous POV combat take; the minimal variant is one sentence |
| Format 4 | Train Rooftop / Lollipop Girl | Single 15 s oner with FPV arm, 360 orbit, ramp to deep slow motion, then snap back; underdog fight with "Guy Ritchie speed-ramping with Snyder impact slow-motion" |
| Format 5 | Animation (minimal) | `Fight of a 3D person with 2D` |
| Transformation viral | Soul + transformation | see hg-005 above |
| AI Director MV / short | 60 s MV (3 scenes) / 90 s noir short | Scene lists with a `[Soul ID: …]` placeholder |

## Footage-transform effects (Seedance VFX, E13)

Two transformation modes: **A. Add an element to the footage** (the preserved plate gets a new element plus its light and contact shadows) and **B. Replace the environment around a preserved subject**. Plus timed camera moves synced to dialogue (crash zoom, push-in, reveal pull-back). The skeleton is in [opensource-prompt-templates.md](opensource-prompt-templates.md#f-transitions-extensions-and-edits).

## Stylized-content style lists (E9)

- **Cartoon styles (13):** Classic Disney (1940s–1960s) · Cartoon Network / Warner Bros. Rubber Hose · Flat Vector / Modern Minimalist · Retro Rubber Hose (1920s–1930s) · Pencil Sketch / Hand-Drawn · Watercolor / Painterly · Paper Cutout / Papier-Mache · Pixel Art / 8-bit and 16-bit Retro · Neon Line Art / Glow · Manga / Anime · Stop-Motion / Claymation · Silhouette / Shadow Puppet · CGI Stylized / 3D Cel-Shading. Cartoon effect groups: Cartoon Wipes · Impact and Action Effects · Particle and Sparkle Effects.
- **3D render styles (9)**, with prompt terms: Pixar/Stylized ("Pixar-style 3D render," "smooth cartoon shading") · Photorealistic ("physically accurate rendering") · Low-Poly ("geometric faceted style") · Claymation/Plasticine ("plasticine texture," "stop-motion 3D") · Isometric 3D ("45-degree perspective") · Cel-Shaded ("bold outlines") · Voxel ("cubic blocky style") · Wireframe ("neon wireframe aesthetic") · Hybrid/Mixed Media ("Photorealistic product in stylized environment").
- **Anime genre looks (5):** Shonen action · Seinen drama · Magical girl · Mecha · Isekai / fantasy. Camera set: dramatic zoom/dolly, rotating shot, Dutch angle, parallax pan, POV attack, whip pan.
- **Music-video genre looks (10):** Hip-Hop / Rap · Pop · Rock / Metal · Electronic / EDM · R&B / Soul · Lo-Fi / Chill · Classical · Jazz · Country · K-Pop.

## Hook sets for stylized content

| Library | Hooks (verbatim names) | Src |
|---|---|---|
| Cartoon (10) | Character Smash-Zoom · Rubber Hose Stretch Entrance · Color Explosion · Fourth-Wall Break · Exaggerated Reaction Face · Object Transforms Unexpectedly · Speed Line Burst · Particle Shower / Confetti Cascade · Blink/Wink Cut · Gravity Flip / Environmental Inversion | E9 `03-cartoon/references/hooks.md` |
| Comic-to-video (10) | Dramatic Panel Crack / Shatter Reveal · Speech Bubble Pops to Life · Ink Splash Transition · Page Turn Reveal · Panel Borders Dissolve · Character Steps Out of Frame · Speed Lines Become Motion Blur · Spotlight or Light Flare Focus · Thought Bubble Unfolds into Background · Background Comes Alive | E9 `04-comic-to-video/references/hooks.md` |
| Fight scenes (10) | Mid-Action Freeze Frame · Weapon Clash with Spark Explosion · Character Charging Directly at Camera · Slow-Motion Punch Impact · Shockwave from Ground Slam · Blade Unsheathing with Metallic Flash · Aerial Kick Descending · Dual-Wield Weapon Twirl · Rope/Chain Snap · Opponent Stumble/Dodge Backward | E9 `05-fight-scenes/references/hooks.md` |
| Anime action (12) | Dramatic Eye Close-Up with Light Reflection · Speed Line Burst · Transformation Sequence Flash · Blade Unsheath with Metal Gleam · Power-Up Aura Explosion · Cherry Blossom Wind Gust · Anime Title Card Slam · Character Silhouette Against Dramatic Sky · Impact Frame with Cross-Shaped Highlight · Chibi Reaction Pop · Sweat Drop Reaction · Screen Tone Shift | E9 `08-anime-action/references/hooks.md` |

Ad and social hook libraries (148 hooks) are in [marketing-dtc.md §9](marketing-dtc.md#9-hook-libraries-named-148-total).

## Kling 3.0 Motion Control (not a preset, E1)

Motion transfer from a reference clip: Video tab → Kling Motion Control 3.0 → motion video (or the **motion library**) + character image → 720p or 1080p → Scene source (video or image background) → Advanced: lighting/background prompt + **Image Orientation** (camera-driven) vs **Video Orientation** (full-body) → Generate. Reference checklist: one subject, head and body visible, real human motion, no cuts, not too fast, 3–30 s. If the output comes back shorter than the source, the motion was too fast or too complex.

## Gaps

- There are no model or prompt templates for any Viral Hub chain preset; 48 of 87 have no textual counterpart at all.
- The Soul style preset names are missing.
- The full 50+ DoP motion list is missing.
- The motion-preset list (E1) is a hand-maintained snapshot. The live catalog reportedly has about 100 names across about 1,900 per-model variants, so some names are probably missing.
