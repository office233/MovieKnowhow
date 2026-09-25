# ByteDance Seedance on Higgsfield (Seedance Pro presets, 2.0, 2.5)

Sources: https://higgsfield.ai/seedance (Seedance Pro preset hub), https://higgsfield.ai/seedance/2.0, https://higgsfield.ai/seedance/2.5, https://higgsfield.ai/seedance-2-5-community

## Seedance 2.0 (4K multimodal)
- Native 4K output; clips up to 15 s per shot; chain shots for longer sequences.
- Inputs in one generation: up to 9 images + 3 video clips (<=15 s each) + 3 audio clips (<=15 s each) + text (12 assets max). The model infers each input's role.
- Audio generated in the same pass: dialogue with lip-sync, ambience, music following the edit rhythm.
- Multi-shot storytelling with consistent faces/wardrobe; "frame-level" control of composition, fonts, transitions.
- Strong at action: fight choreography, collisions, slow motion, bullet time.
- 3-step flow: upload reference images -> describe scenario **and sounds** in natural language -> Generate.
- Available on all plans (per FAQ). It is the default engine of Marketing Studio / AI Ad Generator ("engine behind 300M+ videos").
- Default widget on many SEO tool pages: `Seedance 2.0 | 8s | Auto | On` (8 s, auto aspect, audio on).
- API: `POST https://api.higgsfield.ai/bytedance/seedance-2.0/text-to-video` with `prompt, resolution, generate_audio, duration, aspect_ratio` (see tools/higgsfield-api.md). API list price $0.1407/s (launch discount $0.0985/s).

## Seedance 2.5 (flagship, "most controllable")
- Up to **30 s in one take**, native 1080p (page also repeats "native 4K" marketing copy), any aspect from 9:16 to 21:9.
- Up to **50 multimodal references** (faces, products, wardrobe, locations, style frames) in one pass.
- **Region edit**: describe a fix (wrong bottle label, off-brand background, wardrobe) and only that region is repainted - no full re-roll ("no seed lottery").
- **R2V motion guidance**: show simple white figures / a motion reference and it copies the motion.
- Audio (ambience, foley, score) generated with the pixels.
- vs 2.0: ~20% better prompt adherence, region editing, tighter character + lighting consistency.
- Official tip: write the prompt **like a shot list: subject, camera, lighting, mood, sound**; add references for anything that must stay consistent; fix mistakes with region edits instead of re-rolling. Pair with Soul ID for tighter identity.
- API list price $0.2057/s (launch $0.144/s). Credits (blog, Sept 2026): 720p 8 s = 52 credits, 480p 8 s = 24 credits, 1080p 8 s = 72 credits; only on the $49 Plus plan and above. See pricing.md.

## Seedance Pro preset hub (legacy "Seedance Pro" model)
"Multi-shot, high-quality, fast video generation with advanced effects." 25 one-click motion presets (all `preset_family: seedance`). Upload a photo, pick a preset, generate. Descriptions below are from the preview-video captions (paraphrased):

| Preset | Model family | Top | What the preview shows |
|---|---|---|---|
| Crying | Seedance Pro |  | A cinematic AI video showing a young woman with long blonde hair at night near a brightly lit carnival, where her facial expression changes from somber to tearful, demonstrating photorealistic AI art and realistic emo... |
| Yacht | Seedance Pro |  | A woman wearing sunglasses and a colorful headscarf raises a glass of champagne, then walks toward a group of people on a yacht, followed by shots of the yacht cruising on the ocean under clear skies in a cinematic AI... |
| Red Carpet | Seedance Pro |  | A man wearing a robe and sandals carrying a carton of milk walks through a grocery store and then confidently walks down a red carpet while photographers capture the moment, showcasing a cinematic AI video scene with ... |
| Car Drive | Seedance Pro |  | A man wearing sunglasses drives a red vintage car on a sunny rural road, with close-up shots of the steering wheel, dashboard, and the car moving along the highway captured by an ai video generator. |
| Morning routine | Seedance Pro |  | A sequence shows a woman lying in bed, then a close-up of a hand holding a polka dot cup of coffee, followed by the woman standing indoors wearing a beige trench coat and white turtleneck taking mirror selfies with a ... |
| Hero Flight | Seedance Pro |  | A person in a detailed, pink and blue superhero costume flies over a cityscape, captured with an ai video generator creating a cinematic ai video that showcases ai avatars and hyperrealistic photo elements. |
| Motor Ride | Seedance Pro |  | A person wearing a colorful helmet and striped sweater rides a motorcycle through urban and scenic roads in a cinematic ai video created with an ai video generator. |
| Happy | Seedance Pro |  | A young woman with curly hair standing in front of a blue shipping container confidently poses and smiles while adjusting her hair, showcasing fashion style in a cinematic ai video format. |
| General | Seedance Pro |  | A man wearing a dark suit, blue shirt, and striped tie stands by the sea at sunset, holding a phone to his ear and adjusting his tie while his hair is tousled by the wind, shown in a cinematic style suitable for ai vi... |
| Fix and pose | Seedance Pro |  | A woman wearing a colorful striped sleeveless top and sunglasses poses with a coffee cup in an urban parking area, showcasing fashion and style in a cinematic ai video format. |
| Peak Moment | Seedance Pro |  | A person dressed in winter fashion with a black North Face jacket and face covering climbs a snowy mountain and then stands with arms outstretched, captured in a cinematic AI video style showing outdoor adventure in a... |
| Selfie | Seedance Pro |  | A young woman in a white tank top performs a natural hair adjustment and smile while standing outdoors near cows, captured in a hyperrealistic photo style suitable for ai video generator and ai image generator present... |
| Beach Ride | Seedance Pro |  | A cinematic scene captured by an AI video generator shows a yellow taxi driving past a desert motel, the driver steering through a rural road, followed by the taxi speeding along a coastal road, ending with a woman wa... |
| Buddy | Seedance Pro |  | A hyperrealistic photo shows an elderly man wearing a yellow sweater with pink and brown pattern and red shoes, standing outdoors on green grass with bushes and a blue sky in the background, while a matching cartoon-s... |
| Outfit Check | Seedance Pro |  | A fashion scene featuring a woman in a black outfit with a skirt and jacket, showcasing a brown handbag as she walks across a city street, highlighting style and product placement in a cinematic ai video. |
| Hair Style | Seedance Pro |  | A hyperrealistic AI avatar with purple hair and gold hoop earrings poses in a ruffled cream blouse, showcasing detailed facial features and fashion style in a photorealistic AI video maker setting. |
| Plate Check | Seedance Pro |  | A man wearing sunglasses and a white hoodie eats a fried chicken sandwich with French fries on the side at a casual dining restaurant, highlighting a hyperrealistic photo style suitable for ai video generator and ai p... |
| Look, BOOM! | Seedance Pro |  | A young man stands on a bridge during twilight as a large explosion with a fiery mushroom cloud erupts on the bridge, captured with cinematic AI video effects showcasing hyperrealistic digital art creation. |
| Oni Mask | Seedance Pro |  | A person unfolds a decorative folding fan to reveal a face painted with intricate, colorful designs, captured in a hyperrealistic photo style suitable for ai image to video maker and ai avatar generator applications. |
| Spirit Animal | Seedance Pro |  | A person wearing a wooden mask and camouflage dress interacts with a lion in a dry landscape, progressing from standing to petting the lion and finally riding it, demonstrating hyperrealistic photo quality suitable fo... |
| Flashback | Seedance Pro |  | A cinematic AI video generator creates a hyperrealistic scene of soldiers advancing through a smoke-filled forest with helicopters flying overhead, demonstrating advanced digital art creation and AI video editing capa... |
| Sand Cut | Seedance Pro |  | A hyperrealistic AI video generator showcases a fashion scene of a shirtless man wearing white pants and a flowing green scarf on a cracked salt flat at sunset, highlighting style and digital art creation in a cinemat... |
| Outfit Switch | Seedance Pro |  | A woman with curly hair and red sunglasses changes outfits from a green Adidas cropped shirt to a gray graphic tee and then to a yellow sports bra while smiling, showcasing fashion and style in a cinematic ai video fo... |
| Turning Monkey | Seedance Pro |  | A sequence showing a realistic ai avatar of a monkey in a classroom and transitioning to multiple monkeys moving through a lush forest, illustrating the use of ai video generator and photorealistic ai art for natural ... |
| Shocked | Seedance Pro |  | A woman in a black sleeveless top expresses surprise and covers her mouth in a hyperrealistic photo, demonstrating lip sync AI and ai avatar generator capabilities for ai video maker and digital art creation. |

## Showcase prompts
The three "native 4K" showcase prompts are identical on the 2.0 and 2.5 pages (golden-hour handheld vlog, fighter jet in near-Earth orbit, dancer in front of a light-panel portal). They demonstrate the recommended structure: **shot type/camera -> subject details (hair, glasses, wardrobe) -> action -> location details -> light -> lens/DOF -> look**.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Higgsfield Seedance 2.5 Community: explore AI camera control for creators | https://higgsfield.ai/seedance-2-5-community | 0 |
| Seedance Pro • Higgsfield | https://higgsfield.ai/seedance | 0 |
| Seedance 2.0 — Multimodal AI Video Generation / Higgsfield | https://higgsfield.ai/seedance/2.0 | 3 |
| Seedance 2.5 AI Video Generator with Audio / Higgsfield | https://higgsfield.ai/seedance/2.5 | 0 |

## Verbatim prompts (3)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P012 - Native 4K showcase

- Page: https://higgsfield.ai/seedance/2.0 | Model: Seedance 2.0 (also shown on the Seedance 2.5 page) | Settings: 4K showcase | Use-case: UGC

```text
Handheld medium close-up at golden hour. A young woman with long pastel-pink hair and thin rectangular glasses glances back over her shoulder at the camera, soft smile. Old Shanghai street corner behind her: red brick facades, Chinese signage, zebra crossings, warm backlight, shallow depth of field, filmic vlog look.
```

### P013 - Native 4K showcase

- Page: https://higgsfield.ai/seedance/2.0 | Model: Seedance 2.0 (also shown on the Seedance 2.5 page) | Settings: 4K showcase | Use-case: cinematic film scene

```text
Cinematic shot in near-Earth space, a sleek fighter jet banking against the darkness, star streaks behind it, Earth's dark ocean and clouds far below, cold rim light on the fuselage, canopy reflections, deep contrast.
```

### P014 - Native 4K showcase

- Page: https://higgsfield.ai/seedance/2.0 | Model: Seedance 2.0 (also shown on the Seedance 2.5 page) | Settings: 4K showcase | Use-case: music video

```text
Wide symmetrical shot. A dancer with bleach-blond hair and futuristic sunglasses stands center frame, arms spread wide, mouth open mid-shout. Blue fitted tee over black long sleeves, baggy grey jeans. Behind him a trapezoid portal of horizontal white light panels, everything else pitch black. Pale blue reflective floor, high contrast, clean studio look.
```
