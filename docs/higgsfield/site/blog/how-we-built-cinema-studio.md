# Inside Higgsfield #1: How We Built Cinema Studio

- Source: https://higgsfield.ai/blog/how-we-built-cinema-studio
- Byline: Higgsfield · Aug 12, 2026 · 10 min · Last updated: 4w ago
- Prompts extracted: 0

## Notes

**Topic:** Inside Higgsfield #1 — how Cinema Studio was built (Aug 12 2026). No prompts, but key prompting insights.
- **Origin (Nov 2025):** a creative (Sula) generated in **21:9** instead of the usual 3:4/4:3 and wrote **real camera names and optics** into prompts -> a far more cinematic look (kangaroo fight clip, 1M+ views in days). Others couldn't reproduce it with generic words: his prompts were dense with camera/lens/light terminology rather than scene description. Lesson: models trained on decades of cinema respond more precisely to named cameras/lenses than to "make it beautiful".
- Cinema Studio encodes that: pick camera, lens, focal length (v1, Dec 18 2025), aperture + recommended presets (v1.5); Elements, 3D Scene, Character Motions, locations, Soul Cinema (v2/2.5); v3.0 (rocky, Apr 2026), v3.5 ten days later (genre-driven camera for multishot, **video-first generation**, prompt enhancer, projects that lock a look across a film, AI Director); v4.0 (up to 30 s, montage pacing, AI Cast, Cinematic Locations, anti-slop camera pipeline).
- Lens curation: a former DP (Danil Kim) tested camera/lens combos, sent results to working camera operators ("does this look AI?"), dropped famous lenses the model couldn't reproduce, and **amplified each lens's character** so choices visibly change the shot.
- **Tracing:** generation settings travel with an image — use that frame as a video start frame and the look carries over.
- Prompt enhancer philosophy: users type 3-word or impossible prompts ("50-shot battle in 15 seconds"); the enhancer aims for a usable result in the first batch.
- Old versions (e.g., 2.5) remain selectable inside the tool.

