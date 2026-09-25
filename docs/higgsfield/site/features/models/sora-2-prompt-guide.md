# Sora 2 Prompt Guide (Higgsfield)

Source: https://higgsfield.ai/sora-2-prompt-guide - "perfectly tuned prompts from Higgsfield's #1 top GenAI engineer". Contains 7 short hero prompts (each with platform preset + Standard/Pro + Sound/Visual Boost), 1 short-formula example and 3 full high-control prompt-bank templates. All are copied verbatim below.

## Sora 2 strengths (per guide)
Shot-driven instruction following (storyboard-like), motion clarity, brief synchronized dialogue, stylistic steerability. Sora 2 has a reasoning step and will creatively fill anything you omit.

## Two prompt formulas
1. **Short prompt** (fast, creative, low-spec): state the format/style to set pacing ("cinematic ad", "fast paced k-pop music video"), then let the model act as cinematographer. Use when exploring or when you want the model to choose.
2. **High-control prompt** (granular control of composition, timing, palette, audio, finish). The bank templates use these labelled blocks, in this order:
   - **Format & Style** (e.g. "UGC reaction video - authentic, handheld, shot on front iPhone camera")
   - **Camera** (body/phone, handheld vs dolly, stabilization) and **Lens** (focal length, DOF, distortion)
   - **Main Subject(s)** (age, energy, what they do)
   - **Wardrobe & Props**
   - **Location** with **Foreground / Midground / Background** anchors + camera angle
   - **Lighting & Palette** (key/fill, colour anchors, "no grade")
   - **Actions & Camera Beats** with timestamps (0-4 s, 4-8 s, 8-12 s) - one camera move + one subject action per beat
   - **Montage Plan** (cut count, how transitions are masked, beat structure e.g. 2-2-2-2-2-2)
   - **Dialogue (full)** - short lines in their own block for accurate lip-sync
   - **Sound & Foley** (concrete foley cues + room tone; "no music" if UGC)
   - **Finish** (grain, LUT/no LUT, halation, poster frame)

## Rules of thumb
- One camera move + one subject action per shot/beat; use strong specific verbs (tilt, snap, flex, twist).
- Define each shot of a multi-shot sequence as its own block (setup, action, lighting).
- Anchor spatial continuity with foreground/midground/background.
- Put dialogue in a dedicated "Dialogue" block.
- Define overall style up front; then use concrete nouns/verbs.
- Ads: lead with a format ("cinematic ad", "performance spot"); highlight one action per shot with macro detail; layer foley + ambience; keep lighting/palette consistent.
- Image-to-video for brands: upload product shot -> short idea prompt (UGC / ad / cinematic) -> generate.
- Settings seen on examples: platform presets (YouTube Shorts / TikTok / Instagram Reels), tier Standard vs Pro, and a "Sound Boost" or "Visual Boost" toggle.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Sora 2 Prompt Guide: Professional Tips and Examples • Higgsfield | https://higgsfield.ai/sora-2-prompt-guide | 11 |

## Verbatim prompts (11)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P001 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Pro) | Settings: platform preset: YouTube Shorts; Sound Boost | Use-case: UGC

```text
UGC reaction video. In a quiet kitchen, a person lifts a small bottle of water, and expressively talks about how good this water is
```

### P002 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Standard) | Settings: platform preset: TikTok; Visual Boost | Use-case: anime/animation

```text
Romantic 3d animation about food products
```

### P003 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Pro) | Settings: platform preset: Instagram Reels; Sound Boost | Use-case: music video

```text
A fast paced k-pop music video featuring 4 female idols singing about luxury life in Gangnam
```

### P004 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Standard) | Settings: platform preset: TikTok; Visual Boost | Use-case: anime/animation

```text
Fast paced anime opening featuring a knight, a female mage, a dwarf and a schoolboy in medieval new york.
```

### P005 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Pro) | Settings: platform preset: YouTube Shorts; Visual Boost | Use-case: product ad

```text
Make me a cinematic ad for sportswear brand named "Higgs"
```

### P006 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Standard) | Settings: platform preset: TikTok; Sound Boost | Use-case: product ad

```text
A fast paced energy drink commercial
```

### P007 - Hero example (short prompt)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Pro) | Settings: platform preset: Instagram Reels; Sound Boost | Use-case: transitions

```text
Create an editorial lookbook reel: three beats—walk-by past string lights → slip jacket off one shoulder → sling jacket over shoulder and lean to wall; transitions: match cuts on motion;
```

### P008 - Short-prompt formula example

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 | Settings: short-prompt formula demo | Use-case: cinematic film scene

```text
A jazz performance at the american bar
```

### P009 - Prompt bank: Talking Heads (UGC reaction)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Standard) | Settings: TikTok; Visual Boost; 0-12 s beats; high-control format | Use-case: UGC

```text
Format & Style: UGC reaction video – authentic, handheld, shot on front iPhone camera. Style: unfiltered realism, slight overexposure, raw and honest. Feels like someone impulsively filming a discovery they’re excited about. Camera: iPhone 15 Pro front camera in selfie mode. Handheld one-hand shot, slightly shaky with autofocus micro-pulses. Occasional light flare as phone shifts. No stabilization or post edits. Lens: Native wide lens (~26 mm), full-frame field of view. Deep focus, everything sharp – no artificial blur. Edge distortion from close proximity preserved for realism. Main Subject(s): One person, late 20s, expressive and energetic. They’re talking fast, gesturing with a small bottle of water, making exaggerated facial expressions as they describe how surprisingly good it looks and feels — never taking a sip.
• Wardrobe and Props
Casual at-home clothes: oversized white hoodie, messy hair pulled back, natural lighting on face.
Props: clear bottle of water, slightly frosted from the cold; phone held in other hand; visible countertop behind.
• Location
Plain kitchen with daylight spilling through blinds.
Foreground: bottle and subject’s hands.
Midground: subject’s face centered.
Background: out-of-focus fridge, magnets, faint clutter.
Camera angle: selfie-style, slight high tilt downward as if chatting with audience.
• Lighting & Palette
Pure natural light from side window — unbalanced exposure.
Cool daylight tone, soft shadows, slight blue cast from phone auto-balance.
Color anchors: skin tone, transparent blue bottle, white hoodie, gray kitchen, silver fridge.
Everything flat and true-to-life — no grade.
• Actions & Camera Beats (0–12 s)
• 0–4 s — Subject lifts bottle close to camera, eyes wide, talking fast.
> “Guys—look at this water. It’s literally perfect. You can see the light bouncing inside it!”
Hand moves bottle to catch glare; tiny rainbow flare appears.
• 4–8 s — Leans closer, excited whisper.
> “I swear—it’s so clear it looks fake. Like glass, but colder.”
Turns bottle sideways; camera focus flickers between face and label.
• 8–12 s — Laughs, shakes bottle gently so bubbles rise; gestures toward lens.
> “No way something this basic feels this fancy. I’m losing it.”
Ends with amused grin, half-laugh, shakes head.
• Montage Plan
Single unbroken selfie take.
Quick handheld adjustments as subject plays with reflection; focus pull moment when bottle crosses lens.
No edits, jump cuts, or transitions — full real-time authenticity.
• Dialogue (full)
“Guys—look at this water. It’s literally perfect. You can see the light bouncing inside it!
I swear—it’s so clear it looks fake. Like glass, but colder.
No way something this basic feels this fancy. I’m losing it.”
(Laughs, shakes bottle.)
• Sound & Foley
Raw phone audio: slight room echo, fridge hum, subtle bottle crackle, fingernail tap on plastic, breathy laugh.
Auto gain fluctuates with voice volume; background hiss intact.
No music, no noise reduction.
• Finish
Completely ungraded iPhone video — flat colors, minor flicker, occasional exposure shifts.
No LUT, no color curve, no stabilization.
Poster frame: subject mid-gesture, bottle catching daylight spark, mouth open mid-laugh — perfectly imperfect freeze of authenticity.
```

### P010 - Prompt bank: Fast Sports Motion (HIGGS sportswear ad)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Standard) | Settings: Instagram Reels; Visual Boost; 12 s, six cuts; high-control format | Use-case: product ad

```text
A 12-second cinematic sportswear ad for HIGGS – high-energy, multi-sport montage in six dynamic cuts.[0–2s] – CUT 1 / OPEN. Boxing gym: close-up of taped fists tightening, chalk dust drifting through warm light. Camera pushes in fast as the athlete snaps a jab toward lens. (Audio): sharp thwack, deep bass hit, faint gym echo.[2–5s] — CUT 2. Indoor cycling: low tracking shot of spinning pedals — motion blur, rhythmic flashes of teal light.
(Audio): high-tempo beat syncs with pedal cadence, breath layered in.
[5–7s] — CUT 3
• Street basketball court: dusk setting, sodium haze. A player dribbles with the basketball, handheld camera.
(Audio): sneaker squeak + net swish + rising synth swell.
[8–10s] — CUT 4
• Track sprint: side angle — runner bursts from starting blocks, light flashing across HIGGS logo on shorts. Camera shakes with velocity, maintaining close shoulder-level tracking.
(Audio): low whoosh of speed + percussive heartbeat rhythm.
[10–12s] — CUT 6 / IMPACT
• Mountain trail: wide hero shot — female athlete runs along cliff ridge at golden hour, HIGGS windbreaker glowing in rust light. Camera pulls back into sweeping drone arc.
(Audio): music crescendo + layered breathing.
Voiceover (clean, aspirational):
“HIGGS — built for every motion.”
(On-screen end tag): HIGGS logo appears center-screen, metallic texture ripple → [SHOP NOW] button fade-in.
VISUAL CUES:
Warm cinematic palette (rust, black, teal). Mix of handheld and stabilized shots. Contrast between intensity and stillness — rhythm built on breath, motion, and control. Tone: multi-sport energy, unity through motion, high-performance aesthetic.
```

### P011 - Prompt bank: Fashion & Street Style (editorial reel)

- Page: https://higgsfield.ai/sora-2-prompt-guide | Model: Sora 2 (Pro) | Settings: YouTube Shorts; Sound Boost; 0-12 s beats; high-control format | Use-case: product ad

```text
Format & Style Cinematic fashion editorial reel – fast-paced studio shoot with multi-angle cutting and flash-synced transitions. Style: glossy, modern, editorial-meets-film energy — controlled chaos of a live shoot captured through kinetic camera language. Camera: Full-frame cinema camera and handheld BTS cam intercut for realism. Mix of dolly tracking, whip-pans, and static tripod bursts.
Fast focus pulls between poses, brief shutter smears during transitions.
• Lens
Alternating between 35 mm (wide tracking) and 85 mm (macro close-ups).
Shallow DOF, rolling focus shifts on every cut for texture.
Occasional lens flare from strobes left unmasked for authenticity.
• Main Subject(s) Fashion model — bold, cinematic presence; alternating between slow elegance and high-intensity pose transitions.
Facial expressions range from fierce confidence to subtle softness.
• Wardrobe & Props
Structured designer look: asymmetric black leather jacket, high-waisted pleated satin pants, gold statement earrings.
Props: studio stool, standing mirror, light stand, handheld fan, scattered Polaroids on floor.
• Location
Minimal studio with soft-gray cyc wall and two visible strobe umbrellas.
Foreground: blurred light reflector.
Midground: model posing center.
Background: faint silhouettes of crew and gear for editorial realism.
• Lighting & Palette
Key: strobe bursts + constant LED fill.
Fill: tungsten side spill for warmth.
Color anchors: matte black, metallic gold, ivory, deep shadow blue, neutral gray.
Alternates between warm and cool tones each cut — high fashion lighting contrast.
• Actions & Camera Beats (0–12 s)
0–2 s — Establishing:
Wide dolly-in — model walks toward light flare, hair caught by fan.
Flash burst → quick cut.
2–4 s — Pose switch:
Medium shot — turns sharply, hands on hips; camera whip-pans, flash triggers mid-spin.
Match cut to opposite side angle.
4–6 s — Macro insert:
Close-up on eyes under strobe flicker, gold earring swings; shallow focus drift.
Flash burst → white cut to next frame.
6–8 s — BTS insert:
Behind-the-scenes camera shot — photographer crouching, model mid-turn; overlapping shutter sound.
Quick zoom-punch for rhythm.
8–10 s — Power pose:
Full-body wide; model leans on stool, jacket open, fan lifts fabric; camera glides in circular arc, slow-motion flash bloom.
10–12 s — Final reveal:
Extreme close-up of face; camera rises vertically from collar to eyes, soft exhale; final flash freezes her in white-gold haze.
• Montage Plan
Seven rapid cuts tied to strobe bursts and pose changes.
Each transition masked by light flash or motion blur.
Beat structure: 2–2–2–2–2–2 pacing with subtle slow-mo in last frame.
Ends with 0.5-second hold on final flash silhouette.
• Dialogue (if any)
Photographer (off-screen, layered across beats):
“Yes—hold that! Turn! Flash! Beautiful—reset—chin up, light again!”
Model breathes audibly between cues.
• Sound & Foley
Layered high-fashion sound design:
• Flash pops and shutter clicks (sync to cuts).
• Fan whoosh, fabric ripple, soft heel scuff.
• Ambient low synth pulse and muted house percussion for pacing (120 BPM).
No melody — pure rhythm and texture.
• Finish
Fine-grain texture; halation bloom on strobes; rich contrast LUT (gold highlights, lifted blacks, matte whites).
Optional subtle split-tone flicker for energy.
Poster frame: mid-flash burst, silhouette frozen in white-gold light, camera visible behind — elegant chaos captured in motion.
```
