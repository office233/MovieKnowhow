# How to Use AI for Storyboards? Generate with Higgsfield Popcorn

Source: https://higgsfield.ai/blog/How-to-Use-AI-for-Storyboards-Higgsfield-Popcorn  
Mariam Barova  
Prompts extracted: 3

**Popcorn** storyboard guide.
- **Manual mode**: up to 4 reference images; describe each shot (camera perspective, emotional tone); consistency engine keeps face, clothing, posture.
- **Auto mode**: one prompt -> choose number of shots (e.g. **4, 6 or 8**) -> whole sequence aligned in tone/style.
- Up to **4 input images** (character, setting, object, mood) referenced by number in the prompt.
- Aspect ratios: 3:4, 2:3, 3:2, 1:1, 9:16.
- Frames remain editable (backgrounds, poses, composition) while the sequence stays coherent.
Prompt rules:
- **Main subject first**, then scene.
- Be specific about the action ("A woman running through an alley chased by light reflections", not "A woman running").
- State lighting, mood and camera type early ("Cinematic lighting, wide-angle shot, soft backlight.").
- Use natural descriptions, not brand names or celebrity identities.
Best practices: high-res refs; match input and output aspect ratios; define multi-character/location mapping explicitly; avoid vague abstractions; in Manual mode prompt each shot with deliberate pacing like directing a real sequence.

## Prompts (verbatim)

### P1. Multi-image reference composition
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: multi-reference (images 1–3)

```text
The man from image one standing in the forest from image two, holding the object from image three.
```

### P2. Detailed action beat
- Use-case: Cinematic film scene | Model: Higgsfield Popcorn | Settings: action-detail example

```text
A woman running through an alley chased by light reflections
```

### P3. Lighting + camera cue
- Use-case: Cinematic film scene | Model: Higgsfield Popcorn | Settings: lighting/camera prefix example

```text
Cinematic lighting, wide-angle shot, soft backlight.
```

