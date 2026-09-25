# How We Created Higgsfield Popcorn? An AI Tool That Allows You to Replace Faces in a Movie Scene

Source: https://higgsfield.ai/blog/AI-Tool-That-Allows-You-to-Replace-Faces-in-a-Movie-Scene  
Higgsfield, Oct 19, 2025  
Prompts extracted: 1

Behind-the-scenes on **Popcorn**, framed around **recasting a role inside a movie scene** rather than a flat face swap.
- Inputs: prompt + up to 4 references (character photo, location/lighting ref, object/prop, tone/atmosphere).
- Manual mode (each frame = storyboard cell: what camera sees, what character does, how light interacts) or Auto mode (one prompt, up to 8 frames).
- When a face is replaced, it propagates to all connected frames and inherits the original lighting and emotion ("intelligent scene continuity").
- Face re-lit to the environment (e.g. sunset beach: angles, color balance, shadow direction).
- Mix-and-match by image number: character from image 1, lighting from image 3, outfit from image 4.
- Non-destructive: edit one frame (expression, lighting, composition, camera angle) of an 8-frame board without breaking others.
- Pairs with Soul ID (identity across projects) and Sora 2 (motion). Nano Banana/Seedream are better for single stills; Popcorn for sequences.

## Prompts (verbatim)

### P1. Per-element reference mapping
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: up to 4 reference images

```text
Character from image one, lighting from image three, outfit from image four
```

