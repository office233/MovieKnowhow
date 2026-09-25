# Next-Gen AI Photo Editing Tool: Build Storyboards with Higgsfield Popcorn

Source: https://higgsfield.ai/blog/Next-Gen-AI-Photo-Editing-Tool-Higgsfield-Popcorn  
Mariam Barova  
Prompts extracted: 5

**Higgsfield Popcorn** as a multi-image editor/storyboarder.
Workflow:
1. Upload **up to 4 reference images** (e.g. character, background, object, color palette) as anchors.
2. Manual mode (describe each frame) or Auto mode (one detailed prompt -> connected frames, up to 8).
3. **Prompt structure: subject first, then scene, referencing images by number** ("the man from image one … forest from image two … camera from image three").
4. Refine individual frames afterwards (background, tone, objects) while global coherence holds.
Capabilities: move a character through new locations with lighting auto-adapted; replace characters keeping camera angle/atmosphere; expand a real lifestyle photo into an 8-shot story. Aspect ratios 3:2, 9:16, 1:1.
Uses: film previs, ad storyboards with real product photos in AI environments, short-form multi-scene narratives.

## Prompts (verbatim)

### P1. Change background to bedroom (UGC)
- Use-case: UGC | Model: Higgsfield Popcorn | Settings: 2 input images + prompt -> 1 output

```text
Create a hyper-realistic image. Make it UGC content. Change the background to the bedroom
```

### P2. Subject-first multi-image composition
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: multi-reference (3 images)

```text
The man from image one walks through the forest from image two, holding the camera from image three.
```

### P3. Move character to neon Tokyo street
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: location change, lighting auto-adapts

```text
The same woman from image one now walks across a neon-lit Tokyo street at night.
```

### P4. Replace character keeping angle/atmosphere
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: character replacement

```text
Replace the man from image two with the woman from image three, same camera angle and atmosphere.
```

### P5. Same character, new environment
- Use-case: Character / consistency | Model: Higgsfield Popcorn | Settings: sequence continuity

```text
the same woman from the first image walks from a cafe to a crowded street
```

