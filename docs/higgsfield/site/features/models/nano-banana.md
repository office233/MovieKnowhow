# Google Nano Banana Pro / Nano Banana 2 (prompt guide + image editing)

Sources: https://higgsfield.ai/nano-banana-pro-prompt-guide, https://higgsfield.ai/image-editing

## Prompt anatomy (guide's variables)
- **Subject** - be specific ("A Shiba Inu with metallic plating", not "dog").
- **Composition** - direct the virtual camera ("Macro lens for texture", "Isometric view from above", "Fisheye distortion").
- **Action** - add movement/energy ("Leaping across a rooftop gap").
- **Location** - atmosphere ("A neon-lit Tokyo back alley").
- **Style** - medium/aesthetic ("Vintage 1980s polaroid").

## Execution checklist
- Composition & aspect ratio: state ratio numerically (16:9, 2:3) and the shot scale to stop composition drift.
- Camera & lighting: focal length, aperture, shutter speed for realistic depth.
- Text: put literal strings in double quotes and name the font family.
- Factual constraints: use negative constraints to forbid distorted charts / biological errors.
- Reference inputs: assign weights to control how much an uploaded image influences the result.
- Positional/coordinate language ("relative positioning") is followed precisely.

## Quick tips
- Command-style syntax; drop polite filler ("please").
- List exclusions (negative constraints) to narrow the search space.
- Lock the seed once you like a result to make a consistent series.
- Add camera-gear tags ("Shot on full-frame cinema camera") to force photoreal grain.
- Templates on the page were generated at 2K and 4K.

## Nano Banana 2 + inpainting (image-editing page)
- Nano Banana 2 = "Gemini 3.0 reasoning engine", photoreal 4K, fast.
- Edit flow: upload (JPG/PNG) -> brush the area -> type the change (e.g. "remove glare", "add sunglasses") -> generate. Only the masked region changes.
- Object removal (wires, watermarks, date stamps, blemishes, people/crowds) with context-aware fill; blending matches light direction, shadows, grain/noise.
- Image-to-image blending from a reference photo (style/colour/object) with perspective matching.
- Nano Banana Pro is the default widget (`Nano Banana Pro 3:4`) on most image SEO tool pages; up to 8 references; exact HEX/RGB brand colours accepted (ai-image FAQ).
- Credits (blog, Sept 2026): 2 credits per 1K/2K image (~$0.10 at 20 credits/$) outside unlimited windows; separate Edit interface costs 1.5 credits. See pricing.md.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| AI Image Editing / Image Inpainting Tool • Higgsfield | https://higgsfield.ai/image-editing | 0 |
| Nano Banana Pro: High-Control Prompting & Templates | https://higgsfield.ai/nano-banana-pro-prompt-guide | 8 |

## Verbatim prompts (8)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P025 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 2K | Use-case: image still

```text
chaotic supermarket riot scene, people fighting for goods, crowded aisles, frantic motion, gritty 70s film look
```

### P026 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 2K | Use-case: image still

```text
Ornate medieval armor close-up, engraved metal, warm torchlight, shallow depth, castle interior atmosphere
```

### P027 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 2K | Use-case: product ad

```text
Retro 80s cassette ad layout, grainy texture, floating player, bold title, bottom lineup, fictional branding
```

### P028 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 4K | Use-case: image still

```text
Samurai in red armor wearing a fierce red oni mask and a bloody headband
```

### P029 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 4K | Use-case: image still

```text
Futuristic fighter jet performing a high-speed maneuver above the coastline, vapor cones forming around the wings
```

### P030 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 4K | Use-case: image still

```text
Tiny farmers working on a giant green knitted fabric as if it were terraced fields
```

### P031 - Template (Recreate)

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: resolution 4K | Use-case: image still

```text
brutalist geometric balconies, repeating curved brick shapes, lush plants, black-and-white architectural photograph atmosphere
```

### P032 - Precision visual reasoning demo

- Page: https://higgsfield.ai/nano-banana-pro-prompt-guide | Model: Nano Banana Pro | Settings: image | Use-case: image still

```text
Ultra-detailed POV shot from inside a transparent container filled with crushed pink ice, looking upward at a young woman leaning over the opening. She sips through a bright blue straw, her lips glossy and slightly parted, eyes wide with playful curiosity. Sunlight illuminates her face and the sparkling ice crystals, creating vibrant reflections and a summery atmosphere. The background shows a clear blue sky, slight lens distortion, and subtle water droplets on the container walls. Hyperrealistic textures, high-contrast colors, cinematic saturation, crisp details, energetic and refreshing mood
```
