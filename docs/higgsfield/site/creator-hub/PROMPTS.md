# Creator Hub prompts (verbatim)

All generation prompts and agent instructions found on the 96 Creator Hub pages (help center, changelog, customer stories). Copied verbatim; the model for the four walkthrough prompts comes from the page's "Recreate" link. Customer stories contain no prompts.

## Cinematic film scene

### CH-02
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-create-my-first-generation (local: `help-center_getting-started_how-do-i-create-my-first-generation.md`)
- Model: Unspecified (Recreate link goes to /generate)
- Settings: Video; defaults
- Note: Example video prompt for a first generation.

```text
A close-up of a dancer mid-spin on a rooftop at golden hour, slow motion, cinematic lighting, shallow depth of field.
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

### CH-07
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance (local: `help-center_ai-models_how-do-i-use-seedance.md`)
- Model: Seedance (2.0 / 2.5)
- Settings: Video; example of the recommended order subject/action -> setting/light -> camera -> mood + SFX

```text
A character walks through a crowded train station at rush hour, checking a phone, camera tracking close at shoulder height, warm overhead fluorescent light, tense and rushed. SFX: station ambient noise, announcements in the background.
```

### CH-08
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn (local: `help-center_ai-models_how-do-i-use-popcorn.md`)
- Model: Popcorn (storyboard, up to 4 image references)
- Settings: Image sequence; references numbered one to four
- Note: Film-cue structure: style, subject, setting, action, atmosphere.

```text
Cinematic style. A woman from image one walking through a neon-lit Tokyo street from image three, holding the umbrella from image two. Slow rain, reflections on asphalt, shallow depth of field.
```

### CH-10
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn (local: `help-center_ai-models_how-do-i-use-popcorn.md`)
- Model: Popcorn
- Settings: Prompt fragment
- Note: Describe the action, not the genre (better than "fantasy movie").

```text
a knight walks through fire
```

### CH-15
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Seedance via Higgsfield MCP (Claude)
- Settings: Video; model named explicitly in the agent request

```text
Generate a video using Seedance of a person walking through a forest at sunrise, realistic motion, camera tracking close.
```

## Character / consistency

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

### CH-09
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn (local: `help-center_ai-models_how-do-i-use-popcorn.md`)
- Model: Popcorn
- Settings: Image sequence; multi-reference addressing by number
- Note: How to address multiple references.

```text
Man from image one in the setting of image three, wearing the outfit from image four.
```

### CH-16
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Soul (trained Soul character) via MCP
- Settings: Image

```text
Generate an image using my Soul character [name] in an editorial fashion setting, studio lighting, neutral background.
```

### CH-17
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Element reference via MCP
- Settings: Image; several Elements can be used in one prompt

```text
Generate an image with my element [name] in a rooftop cafe at golden hour.
```

### CH-18
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Any video model via MCP (uploaded reference)
- Settings: Video; after uploading through the Higgsfield upload window

```text
Use the uploaded image as the character reference and generate a video of them walking through Times Square at night.
```

### CH-19
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Any model via MCP
- Settings: Reference a past generation as start frame

```text
use the portrait I generated earlier as the start frame
```

### CH-20
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Kling 3.0 Motion Control via MCP
- Settings: Two uploads: character image + motion reference video

```text
The image is the character, the video is the motion reference.
```

## Product ad

### CH-11
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana (instruction editing)
- Settings: Image edit; upload base image first
- Note: Short edit instruction example.

```text
Change the background to a Parisian café at night
```

### CH-12
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana (instruction editing)
- Settings: Image edit
- Note: Wardrobe swap instruction example.

```text
Replace the T-shirt with a black leather jacket
```

### CH-13
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana (instruction editing)
- Settings: Image edit; text rendering
- Note: Text insertion example. Put exact text in quotes and specify font style, size, placement for accuracy.

```text
Insert text: FUTURE IS NOW.
```

### CH-14
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana Pro / Nano Banana 2
- Settings: Prompt fragment for exact quantities/layout
- Note: Be explicit instead of "a few bottles".

```text
exactly 3 bottles on the left side of the frame
```

## UGC

### CH-30
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt (local: `help-center_getting-started_how-do-i-write-a-good-prompt.md`)
- Model: Supercomputer (agent routes models)
- Settings: Loose brief; agent fills details and confirms plan

```text
make a TikTok for my sneakers
```

## Viral effect

### CH-35
- Source: https://higgsfield.ai/creator-hub/changelog (local: `changelog.md`)
- Model: Effects 2.0 in ChatGPT plugin (GPT-6 Astra)
- Settings: Upload a photo; returns a viral-preset video
- Note: Named presets can be called directly, e.g. /main-character, /brand-monument.

```text
@Higgsfield /effects
```

### CH-36
- Source: https://higgsfield.ai/creator-hub/changelog (local: `changelog.md`)
- Model: Effects 2.0 in ChatGPT plugin
- Settings: Upload a photo

```text
@Higgsfield /main-character
```

### CH-37
- Source: https://higgsfield.ai/creator-hub/changelog (local: `changelog.md`)
- Model: Effects 2.0 in ChatGPT plugin
- Settings: Upload a photo

```text
@Higgsfield /brand-monument
```

## Transitions

_None in this section._

## Music video

_None in this section._

## Anime / animation

_None in this section._

## Other (agent instructions, editing fragments, IP-safe phrasing, apps)

### CH-01
- Source: https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-create-my-first-generation (local: `help-center_getting-started_how-do-i-create-my-first-generation.md`)
- Model: Soul Cinema (Recreate link model=soul-cinematic)
- Settings: Image; defaults
- Note: Example image prompt for a first generation.

```text
Fashion editorial portrait, studio lighting, high detail, magazine photography.
```

### CH-21
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Higgsfield Audio via MCP
- Settings: Voiceover

```text
Generate a voiceover for this text in a warm professional tone: [text].
```

### CH-22
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Style reference import from web URL

```text
Import this image and use it as the style reference: [link].
```

### CH-23
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Local file upload

```text
I have a photo on my computer I want to use as the character reference.
```

### CH-24
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: If the agent asks for a chat attachment

```text
Open the Higgsfield upload window for my file.
```

### CH-25
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Balance check

```text
What is my current Higgsfield credit balance?
```

### CH-26
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Spend approval, say at session start

```text
Before generating anything, tell me the credit cost and wait for my confirmation.
```

### CH-27
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Soft credit cap (prompt-level, not enforced)

```text
Do not spend more than X credits. Always ask for approval before generating.
```

### CH-28
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Claude Code / OpenClaw / Hermes (CLI setup)
- Settings: Paste into the coding agent

```text
Set up Higgsfield for me so I can generate images and videos from here. 1. Install the CLI: run npm i -g @higgsfield/cli . 2. Authenticate: run higgsfield auth login and complete the sign-in in the browser it opens. 3. Install the companion skills: run npx skills add higgsfield-ai/skills . Once that's done, let me know when it's ready.
```

### CH-29
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-access-higgsfield-via-cli (local: `help-center_integrations_how-do-i-access-higgsfield-via-cli.md`)
- Model: CLI + Skills (generate skill)
- Settings: Coding agent; or call /higgsfield:generate

```text
Generate an image with Higgsfield.
```

### CH-31
- Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps (local: `help-center_tools_what-are-higgsfield-apps.md`)
- Model: Supercomputer Apps builder
- Settings: One-sentence app brief

```text
an app that turns a selfie into a 90s yearbook photo.
```

### CH-32
- Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps (local: `help-center_tools_what-are-higgsfield-apps.md`)
- Model: Supercomputer Apps builder
- Settings: Follow-up edit in the same chat

```text
make it dark
```

### CH-33
- Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps (local: `help-center_tools_what-are-higgsfield-apps.md`)
- Model: Supercomputer Apps builder
- Settings: Follow-up edit in the same chat

```text
add a gallery
```

### CH-34
- Source: https://higgsfield.ai/creator-hub/changelog (local: `changelog.md`)
- Model: Supercomputer App Builder
- Settings: Site brief -> live higgsfield.app URL

```text
build a landing page for a fitness studio.
```

### CH-38
- Source: https://higgsfield.ai/creator-hub/changelog (local: `changelog.md`)
- Model: AI Motion Designer (ChatGPT plugin + After Effects)
- Settings: Resolution 1080p-8K and duration set in the prompt

```text
/use-after-effects
```

### CH-39
- Source: https://higgsfield.ai/creator-hub/help-center/troubleshooting/my-generation-blocked-for-copyright-or-ip (local: `help-center_troubleshooting_my-generation-blocked-for-copyright-or-ip.md`)
- Model: Any (IP-safe rephrasing)
- Settings: Replaces "Spider-Man"

```text
a hero in a red and blue suit with a web pattern
```

### CH-40
- Source: https://higgsfield.ai/creator-hub/help-center/troubleshooting/my-generation-blocked-for-copyright-or-ip (local: `help-center_troubleshooting_my-generation-blocked-for-copyright-or-ip.md`)
- Model: Any (IP-safe rephrasing)
- Settings: Replaces "Mickey Mouse"

```text
a cartoon mouse with round ears and white gloves
```

### CH-41
- Source: https://higgsfield.ai/creator-hub/help-center/troubleshooting/my-generation-blocked-for-copyright-or-ip (local: `help-center_troubleshooting_my-generation-blocked-for-copyright-or-ip.md`)
- Model: Any (IP-safe rephrasing)
- Settings: Replaces "in the style of [artist name]"

```text
in a style with bold brushwork and vivid colors
```

