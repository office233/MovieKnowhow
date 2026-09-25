# OpenAI Sora 2 on Higgsfield (model + platform landing pages)

Sources: https://higgsfield.ai/sora-2, /sora-2-ai-video-presets, /sora-2-reels, /sora-2-shorts, /sora-2-tiktok, /sora-2-youtube. The deep prompting page is separate: [sora-2-prompt-guide.md](sora-2-prompt-guide.md).

## Specs / facts stated
- Text-to-video and image-to-video; synchronized sound (lip-sync, voiceover, SFX) in one output.
- Resolution 480p / 720p / 1080p (page copy varies; presets page says 720p and 1080p).
- Models seen in embedded community jobs: `sora-2` (720p) and `sora-2-pro` (1080p); durations 4, 8, 12 s; aspect 9:16 or 16:9.
- Sora 2 presets page: attach a photo as opening frame, select a preset, generate. Best input: high-quality image with one clear subject (portrait, half-body, full-body; photos, illustrations, cartoons OK). Motion reference videos should be smooth with moderate movement - chaotic motion gives blurry output.
- Named Sora presets seen in data: "Street Interview", "Primal Use case", "Japanese Ad".
- Platform pages (TikTok/Reels/Shorts/YouTube) are the same generator with a platform preset: type idea (or paste link/topic; an AI script generator writes the narrative) -> select a preset (style, music, settings) -> generate/download. Visual styles: Realistic, Cartoon, Anime. Claims: no watermark, commercial license on paid plans, "generate endless variations" (different hooks/music/CTA) to A/B test for the algorithm.
- Popcorn storyboards can be exported one-click into a Sora 2 prompt (see tools/storyboard-popcorn.md).

## Community prompts (sora-2-tiktok page data, 15)
Mostly very short viral-idea prompts ("epic ultra cinematic trailer without text", "unexpected epic fail video", "iphone footage of ...") on `sora-2-pro` 12 s 9:16 1080p - showing that Sora 2's reasoning expands terse ideas. Longer ones read like scripts (wedding film with cut-by-cut beats, horror-game streamer with webcam overlay).

## Lessons
- For viral shorts, a one-line premise with a twist ("funny twist, natural tone") is enough on Sora 2 Pro; for brand work use the high-control format from the prompt guide.
- Choose 12 s for story beats, 8 s for single gags; 9:16 for TikTok/Reels/Shorts.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Sora 2 Video Presets — Ready-to-Use AI Templates / Higgsfield | https://higgsfield.ai/sora-2-ai-video-presets | 0 |
| AI Instagram Reels Generator — Sora 2 / Higgsfield | https://higgsfield.ai/sora-2-reels | 0 |
| AI YouTube Shorts Generator — Sora 2 / Higgsfield | https://higgsfield.ai/sora-2-shorts | 0 |
| Sora 2 Powered TikTok Creator: Studio-Quality Tools / HiggsField | https://higgsfield.ai/sora-2-tiktok | 15 |
| AI YouTube Video Generator — Sora 2 Tools / Higgsfield | https://higgsfield.ai/sora-2-youtube | 0 |
| Sora 2 AI Video Generator — by OpenAI / Higgsfield | https://higgsfield.ai/sora-2 | 0 |

## Verbatim prompts (15)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P188 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 12; aspect 9:16; resolution 1080p | Use-case: cinematic film scene

```text
A cinematic romantic wedding video in the style of a love story — elegant, emotional, and timeless.
The film opens with soft morning light streaming through white curtains. The bride prepares in a cozy room — makeup brushes glide across her cheeks, her dress gently sways on the hanger.
Cut to the groom adjusting his tie, laughing with friends, sunlight catching his cufflinks. A close-up of their hands holding the same wedding rings — foreshadowing connection.
The soundtrack is gentle and emotional — soft piano and ambient strings.
Slow-motion details: lace, flowers, perfume mist, shoes on marble, pages of a vow book turning.
Transition to the ceremony — outdoor garden bathed in golden light, guests rise as the bride walks down the aisle. The groom’s breath catches, slow zoom on his face as he sees her for the first time.
The camera floats between them, capturing subtle smiles, teary eyes, fingers touching.
Vows are whispered softly — the world fades into silence except their voices.
Cut to first kiss — slow motion, sun flares, petals flying in the air.
Final sequence: handheld shots of the couple dancing, laughing, embracing under string lights as evening falls.
Closing shot — drone wide of the venue glowing in twilight, text overlay: “Two souls, one story.”
Warm golden tones, shallow depth of field, cinematic lens flares, soft bokeh, slow motion 120fps, 4K detail, film-like color grading, emotional tone
```

### P189 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 8; aspect 9:16; resolution 1080p | Use-case: viral effect

```text
epic ultra cinematic trailer without text
```

### P190 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: preset Street Interview; duration s 12; aspect 16:9; resolution 1080p; reference images 1 | Use-case: viral effect

```text
man offers gold bar if girl shaves her head, she smiles, removes wig revealing bald head, funny twist, natural tone
```

### P191 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2 | Settings: duration s 8; aspect 16:9; resolution 720p | Use-case: viral effect

```text
Viral funny video of grandma in latex suit streamer playing game, failing and yelling like crazy. Gameplay shown with funny edit
```

### P192 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 8; aspect 9:16; resolution 1080p | Use-case: viral effect

```text
epic ultra cinematic trailer without text with 2-3 shots
```

### P193 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2 | Settings: duration s 8; aspect 16:9; resolution 720p | Use-case: cinematic film scene

```text
10-second video of a streamer playing a horror game. The main screen shows dark, realistic first-person gameplay inside a dimly lit corridor with flickering lights. Suddenly, a terrifying monster jumps out from the shadows toward the camera. In the bottom-right corner, a webcam overlay shows the streamer — a young man wearing headphones, sitting in a messy gamer room lit by LED lights. The moment the monster appears, the streamer screams loudly, throws his headphones off, and jumps back in his chair. The footage has a real livestream look — slightly grainy, screen reflection on his face, quick lighting flashes from the game, and authentic chaotic camera shake.
```

### P194 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 12; aspect 16:9; resolution 1080p | Use-case: viral effect

```text
cinematic dynamic trailer of epic movie
```

### P195 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2 | Settings: duration s 8; aspect 16:9; resolution 720p | Use-case: viral effect

```text
unexpected crazy dynamic japanese ad
```

### P196 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2 | Settings: duration s 4; aspect 16:9; resolution 720p | Use-case: viral effect

```text
unexpected epic fail video
```

### P197 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2 | Settings: duration s 12; aspect 9:16; resolution 720p | Use-case: viral effect

```text
iphone footage of 50 humanoid robots fight 50 identical Jesus clones
```

### P198 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: preset Primal Use case; duration s 12; aspect 9:16; resolution 1080p | Use-case: viral effect

```text
laptop
```

### P199 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 8; aspect 9:16; resolution 1080p | Use-case: viral effect

```text
cinematic anime trailer
```

### P200 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 12; aspect 9:16; resolution 1080p | Use-case: cinematic film scene

```text
A hilarious and over-the-top cinematic video — a surreal racing scene where people in wheelchairs race against Formula 1 cars on a professional track.
The camera opens with dramatic wide shots of a Formula 1 race — roaring engines, smoke, and camera shake from speed.
Suddenly, the focus shifts — a group of determined wheelchair racers appears on the grid, wearing aerodynamic helmets and racing gloves.
Epic music builds up — a mix of heroic orchestral score and electronic beats.
The lights go green — everyone launches forward. The F1 cars roar ahead, but within seconds the camera whips back to reveal the impossible: the wheelchairs start gaining speed, sparks flying from their wheels, glowing turbo lights attached to the frames.
Slow-motion cinematic shots: the racers leaning forward, faces filled with determination; tires spinning in blur; one wheelchair performs a perfect drift through a corner.
Cutaway to shocked F1 drivers watching in disbelief through their visors.
Helicopter shot — the wheelchair racers overtaking the cars, crossing the finish line first as confetti explodes into the air.
The crowd goes wild; slow zoom on the champion raising a fist in triumph.
Final shot — epic close-up of his face, wind blowing through his hair, as the announcer yells:
“Unstoppable. Unbelievable. Unbeatable.”

4K ultra-cinematic realism, high-speed motion blur, FPV drone shots, intense camera angles, stylized lighting, high-contrast color grading, absurd epic tone, parody of Formula 1 trailers.
```

### P201 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: duration s 12; aspect 9:16; resolution 1080p | Use-case: cinematic film scene

```text
A realistic 8-second ASMR video of a Chinese man sitting calmly in a minimalist room, eating crispy grasshoppers with visible enjoyment. Each bite produces a loud, satisfying crunch. The camera is close-up, focusing on his face and the sound of chewing. Soft lighting, clear stereo sound, and a cozy ASMR atmosphere make the scene strangely relaxing and immersive.
```

### P202 - Sora 2 community publication

- Page: https://higgsfield.ai/sora-2-tiktok | Model: sora-2-pro | Settings: preset Japanese Ad; duration s 12; aspect 9:16; resolution 1080p | Use-case: anime/animation

```text
A colorful and comedic Japanese commercial for instant noodles, shot in an over-the-top energetic style.
A beautiful Japanese woman sits at a kitchen table in bright morning light. She opens a steaming cup of instant noodles — close-up macro shots of noodles swirling, chili flakes, spicy steam rising dramatically.
She takes a bite — the camera zooms in quickly on her face, her eyes widen, music intensifies. Suddenly, she exhales a burst of fire like a mini dragon, flames reflecting in her eyes.
The tone is playful and cinematic — quick zooms, dynamic cuts, anime-style energy effects. The husband rushes in, shocked, in slow motion — holding a red fire extinguisher.
He sprays foam everywhere in a chaotic, comedic moment, while the woman keeps smiling and eating noodles through the mist, clearly enjoying the intense flavor.
The fire dies down, she looks into the camera and says cheerfully (in Japanese):
「やっぱり辛いけど、最高においしい！」 (“It’s super spicy… but absolutely delicious!”)
Final shot: close-up of the noodles cup spinning in mid-air with energetic music, product logo appears surrounded by flames and laughter.
Bright colors, clean lighting, fast-paced camera movement, exaggerated sound design, Japanese commercial energy, 4K vivid visuals
```
