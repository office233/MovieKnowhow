# How to Create a Wedding Invitation with AI: Photo & Video

Source: https://higgsfield.ai/blog/ai-wedding-invitation-photo-video  
Higgsfield, Sep 10, 2026  
Prompts extracted: 10

Seven-step pipeline ending in a ~28 s film in **Cinema Studio 4.0** plus a photo invitation. Doubles as a general template for any **short narrative film/ad built from key frames**.

Tools: Soul ID (identity, 20–80 photos, 25 credits), AI Stylist (real outfits try-on), **Elements** (recurring objects/characters referenced with `@`), key-frame models (Nano Banana Pro = precise objects/counts/text; **Seedream 5.0 Pro = combine several people refs with unified lighting**; GPT Image 2 = general + text; **Soul Cinema = cinematic grade**, can be used as a final "cinematic pass" so stills look like one film), Cinema Studio 4.0 (film).

1. **Identity**: Soul ID per partner (clear, recent, varied angles, ≥1 full-height); test portraits. Short projects: real photos directly as references instead.
2. **Scenario with time ranges**: 25–30 s = **6–8 beats of 2–4 s**. Template: Opening 2–4 s (symbol/close-up) -> Development 8–12 s (2–3 locations, chase/journey) -> Pause 3–4 s (quiet close-ups) -> Culmination 4–5 s (emotional peak) -> Finale 5–6 s (spoken line to camera, then card).
3. **Lock style**: a fixed **style block** appended to every image prompt (palette, light, texture, mood — e.g. ivory, champagne gold, powder blue + one deep cherry accent, natural directional light, 35mm film texture); match it with one of **50+ Cinema Studio color palettes**; save props as Elements.
4. **Key frames** (one still per beat; iterate here — images are cheap), tag `@bride`, `@groom`, `@envelope`, end with style block.
5. **Lettering as a separate asset** (text in quotes, typeface described, plain neutral background), combine later; for video, keep text out of the generation and overlay after (text in motion re-generates every pass).
6. **Cinema Studio 4.0**: up to **50 references**, clips up to **30 s**, audio (speech, music, SFX) in the same pass. Director's Panel: 7 genres; era 60s–2020s; tempo Single Shot -> Chaotic; cameras incl. 35mm Film, 8mm Film; lenses clean sharp -> vintage anamorphic; apertures f/1.4–f/11; moves incl. POV, Helicopter Shot; 50+ palettes; 6 lighting presets + custom; character emotion slider. Recommended: Drama; tempo Dynamic (chase) or Calm (romantic); Modern or 35mm Film camera; Clean Sharp/Anamorphic, f/1.4 for intimate close-ups; Window light interiors, Contre-jour sunsets; 16:9, 25–30 s. Prompt = the timed scenario nearly verbatim + spoken line + music arc.
7. **Fix, don't reroll**: Edit Video (regional fix of a face/object in one moment); **Genjutsu** (transfer motion from a real clip, e.g. the couple's first dance, or replace an object via reference images); full regeneration last.
Cost: Soul Cinema selfie 0.125 cr; Soul ID 25 cr; AI Stylist 2 cr; GPT Image 2 2K 6.5 cr/image; **28 s 16:9 720p film in Cinema Studio 4.0 = 182 cr ($9.10)**; total ~241 cr ≈ $12.

## Prompts (verbatim)

### P1. Prop frame: wedding envelope with wax seal
- Use-case: Product ad | Model: GPT Image 2 / Nano Banana Pro | Settings: key frame, prop

```text
A single cream wedding envelope with a deep cherry wax seal, gold-edged flap, lying on ivory linen, soft window light, product photography clarity, no text on the envelope
```

### P2. Key frame 1: wind lifts envelope from bride's hands
- Use-case: Cinematic film scene | Model: Image model (GPT Image 2 / Seedream 5.0 Pro / Soul Cinema) | Settings: key frame 0:00–0:03

```text
Close-up of @bride hands in champagne gold sleeves holding @envelope, fingers just losing grip as a gust of wind lifts it, motion blur on the flap, powder blue sky reflected in a window behind
```

### P3. Key frame 2: bride runs through hotel hall
- Use-case: Cinematic film scene | Model: Image model | Settings: key frame 0:03–0:07

```text
@bride in an ivory silk evening dress running through a grand historic hotel hall, laughing, her powder blue silk scarf streaming behind her, @envelope flying ahead above the marble floor, tall windows with golden afternoon light
```

### P4. Key frame 3: groom on city square
- Use-case: Cinematic film scene | Model: Image model | Settings: key frame 0:07–0:11

```text
@groom in a tailored dark suit on an old city square looking up at @envelope drifting overhead, caught mid-turn about to run, pigeons scattering, warm stone facades, deep cherry cafe awning as the color accent
```

### P5. Key frame 4: flower market
- Use-case: Cinematic film scene | Model: Image model | Settings: key frame 0:11–0:15

```text
@bride weaving through a flower market, brushing past buckets of cream and blush roses, reaching up toward @envelope, petals lifted by the wind, dappled light through the market canopy
```

### P6. Key frame 5: spiral staircase from above
- Use-case: Cinematic film scene | Model: Image model | Settings: key frame 0:11–0:15

```text
@groom rushing down a spiral staircase, one hand on the brass rail, jacket flaring, seen from above in a full spiral composition, @envelope visible through the stairwell window
```

### P7. Key frame 6: intertwined hands close-up
- Use-case: Cinematic film scene | Model: Image model | Settings: key frame 0:15–0:18

```text
Intimate close-up of @bride and @groom intertwined hands, her head resting on his shoulder in soft golden light, quiet and still, shallow depth of field, warm skin tones against ivory knitwear
```

### P8. Key frame 7: rooftop sunset with opened envelope
- Use-case: Cinematic film scene | Model: Image model | Settings: key frame 0:18–0:25; also the photo invitation

```text
@bride and @groom on an empty rooftop garden at sunset, holding an opened @envelope together, wind moving her dress and his jacket, city softly blurred below, champagne gold light wrapping their silhouettes, joyful and triumphant
```

### P9. Save-the-date lettering
- Use-case: Other | Model: GPT Image 2 / Nano Banana Pro (text rendering) | Settings: lettering asset, plain background

```text
Elegant serif calligraphy text "Save the Date" with "Elena & Michael, 14 June 2027" below, deep cherry lettering on a plain ivory background, centered, classic wedding invitation typography, no other elements
```

### P10. Timed wedding invitation film prompt
- Use-case: Cinematic film scene | Model: Cinema Studio 4.0 | Settings: 28 s, 16:9, Drama, Dynamic tempo; key frames + characters as refs; audio in same pass

```text
A 28 second wedding invitation film in one continuous edit. 0-3s: close-up of the bride's hands as the wind snatches the cream envelope. 3-7s: she chases it laughing through a grand hotel hall. 7-11s: parallel cut, the groom spots the envelope over a city square and starts running. 11-15s: fast rhythmic cuts between a flower market and a spiral staircase. 15-18s: two quiet memory inserts, intertwined hands, her head on his shoulder. 18-22s: they meet on a rooftop at sunset and catch the envelope together, camera orbits the couple. 22-25s: stillness, they open the envelope, close-ups of eyes and smiles. 25-28s: they look straight into the camera and say "We found the date. Now save it." Music builds from light piano to strings, then cuts to silence before the final line.
```

