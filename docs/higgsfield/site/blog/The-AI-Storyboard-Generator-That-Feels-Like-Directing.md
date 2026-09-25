# The AI Storyboard Generator That Feels Like Directing: Meet Higgsfield Popcorn

Source: https://higgsfield.ai/blog/The-AI-Storyboard-Generator-That-Feels-Like-Directing  
Mariam Barova, Oct 23, 2025  
Prompts extracted: 7

Most detailed **Popcorn** prompting guide.
- Modes: Manual (describe each frame) / Auto (one prompt, choose 4, 6 or 8 frames).
- Inputs: text, or up to 4 images (images always need accompanying text): portrait, location, prop, lighting/costume reference; refer to them by number.
- **Prompt order**: 1) main subject first, 2) setting, 3) style early (cinematic, Ghibli-inspired, realistic, documentary, concept art), 4) the action in detail, 5) atmosphere at the end (lighting, emotion, pacing).
- Aspect ratios: 3:4 (portraits/story), 2:3 (cinematic), 3:2 (editorial/landscape), 1:1 (feed), 9:16 (Reels/TikTok/Shorts). **Keep input aspect ratio similar to output** for realism.
- Tips: lead with the style word ("cinematic", "animated", "concept art", "photorealistic"); describe actions, not categories ("a man in futuristic armor walks through fire as the city collapses behind him" instead of "I'm in a Marvel movie"); include emotion and light behavior; mix real photos with AI scenes; treat prompts like screenplay directions, think in shots.
- Limits: celebrities only recognized via uploaded photos; avoid low-res inputs; if inconsistent, rewrite scene descriptions rather than re-uploading.
- Max 8 images per sequence — continue longer stories by using the last image as the new reference. Built-in export of the storyboard to **Sora 2** for video.
Manual storyboard beat example: close-up of the face under morning light -> medium shot walking through market -> wide shot with skyline -> final frame turning toward the horizon.

## Prompts (verbatim)

### P1. Character + location + outfit mapping
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: multi-reference (images 1,3,4)

```text
“Man from image one in the location from image three wearing the outfit from image four.”
```

### P2. Neon Tokyo rain walk with umbrella
- Use-case: Cinematic film scene | Model: Higgsfield Popcorn | Settings: multi-reference (3 images); cinematic

```text
“Cinematic style. A woman from image one walking through a neon-lit Tokyo street from image three, holding the umbrella from image two, slow rain, reflections on asphalt, shallow depth of field.”
```

### P3. Film-noir detective storyboard (Auto mode)
- Use-case: Cinematic film scene | Model: Higgsfield Popcorn | Settings: Auto mode, multi-frame

```text
The woman detective searches for the clues in an unsolved murder case. Film noir, vintage cinema in black and white style.
```

### P4. Couple placed in setting IMG1
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: Manual mode, frame 1

```text
Put a man with a woman in the setting from IMG1 with similar poses
```

### P5. Couple placed in setting IMG2
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: Manual mode, frame 2

```text
Put a man with a woman in the setting from IMG2 with similar poses
```

### P6. Pose transfer onto character
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: 2 input images + prompt -> 1 output

```text
Do the same action pose as in the IMG2 for the character in IMG1, the background is plain white.
```

### P7. Futuristic armor walk through fire
- Use-case: Cinematic film scene | Model: Higgsfield Popcorn | Settings: action-over-category example

```text
a man in futuristic armor walks through fire as the city collapses behind him
```

