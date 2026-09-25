# Kling O1 is Here: A Complete Guide to Video & Edit Model

Source: https://higgsfield.ai/blog/Kling-01-is-Here-A-Complete-Guide-to-Video-Model  
Higgsfield, Nov 30, 2025  
Prompts extracted: 0

**Kling O1** — unified multimodal (MVL architecture) model for generating AND editing video.

Video mode:
- Inputs: text; single image -> 5 or 10 s clip; **up to 7 image references** (characters, outfits, props, environment angles merged into one scene); Start & End frame.
- Combos: Image+Prompt, Start/End+Prompt, Multi-image (≤7)+Prompt.
- Uses: product shots, animating characters from photos, outfit -> model video, fashion walk cycles, film previs, establishing shots, Shorts intros.

Edit mode (modify existing footage in one pass, no roto/masking):
- Source video 3–10 s; **up to 4 image references** (identity, outfit, lighting, props, style); optional motion reference from which it extracts camera movement, pacing, shot rhythm, angle transitions.
- Operations: camera-motion transfer, background change/removal, color-grade experiments, relighting, outfit swaps, live-action -> stylized animation, lighting match across shots.
- Combos: Video+Prompt, Image+Prompt, Video+Image+Prompt, Video+multiple refs+style shift.

Steps (Video): Create Video -> Kling O1 -> upload image(s)/start-end -> prompt -> duration -> Generate. (Edit): Edit mode -> source video -> ≤4 refs -> optional motion ref -> prompt -> Generate.
Why it matters: stable characters/props across shots, real camera language (dolly, handheld, pan, jib), good for previs of blocking/lighting/shot lists; was unlimited on Higgsfield at launch.

