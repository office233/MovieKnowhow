# How do I use Popcorn?

Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn
Published: Aug 2, 2026 (4 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article (model guide). Popcorn = Higgsfield's native storyboard generator: coherent sequences of up to 8 frames with persistent identity, lighting, wardrobe, depth and spatial logic. Image -> Popcorn.

**Modes**: Manual (direct each frame), Auto (one prompt + frame count up to 8, expands into a sequence), Instadump (your photos restyled after a style pack: pick/create pack from up to 15 reference photos -> upload your photo -> get the set).
**References**: up to 4 images (portraits, props, locations); refer to them by number in the prompt.
**Prompt structure (film cue)**: Subject -> Setting -> Style -> Action -> Atmosphere.
**Aspect ratios**: 3:4, 2:3, 3:2, 4:3, 16:9, 1:1, 9:16 or Auto; keep input ratio consistent with output.
**To video**: use frames as start frames/references for Kling or Veo; chain last frame of one clip into the next.
**Fixes**: style drift -> put style keywords first; generic look -> describe the action, not the genre; weak mood -> explicit emotional language in the atmosphere part; look resets -> refine text instead of re-uploading inputs. Frames can be edited (light/background/composition) and re-rendered while keeping consistency. Combine with Soul ID characters as references. Can mix real photos and AI images.

## Prompts (verbatim)

### CH-08
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn (local: `help-center_ai-models_how-do-i-use-popcorn.md`)
- Model: Popcorn (storyboard, up to 4 image references)
- Settings: Image sequence; references numbered one to four
- Note: Film-cue structure: style, subject, setting, action, atmosphere.

```text
Cinematic style. A woman from image one walking through a neon-lit Tokyo street from image three, holding the umbrella from image two. Slow rain, reflections on asphalt, shallow depth of field.
```

### CH-09
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn (local: `help-center_ai-models_how-do-i-use-popcorn.md`)
- Model: Popcorn
- Settings: Image sequence; multi-reference addressing by number
- Note: How to address multiple references.

```text
Man from image one in the setting of image three, wearing the outfit from image four.
```

### CH-10
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-popcorn (local: `help-center_ai-models_how-do-i-use-popcorn.md`)
- Model: Popcorn
- Settings: Prompt fragment
- Note: Describe the action, not the genre (better than "fantasy movie").

```text
a knight walks through fire
```
