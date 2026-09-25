# Seedance 2.5 landing (/seedance-2.5)

Sources:
- https://higgsfield.ai/seedance-2.5

Canonical /seedance/2.5, already covered in [../../features/models/seedance.md](../../features/models/seedance.md) and the prompting guide [../../blog/seedance-2-5-prompting-guide.md](../../blog/seedance-2-5-prompting-guide.md).

Key specs from this page: up to **30 s** in one continuous generation, native **4K**, audio generated in the same pass (ambience, foley, score synced to action), up to **50 multimodal references** (faces, products, wardrobe, locations, style frames), **region-level editing** (repaint only a label, background or wardrobe instead of re-rolling), **R2V motion guidance** ("show white figures, it copies the motion"), any aspect ratio 9:16 to 21:9, ~20% better prompt adherence than 2.0.
Best-results rule from the FAQ: write the prompt like a shot list - **subject, camera, lighting, mood, sound**; add references for anything that must stay consistent; fix mistakes with region edits rather than re-rolling. Pair with Soul ID for tighter identity.

## Prompts

0 new verbatim prompt(s) below; 3 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Already captured elsewhere (linked, not repeated)

- 4K example 1 - handheld vlog look: "Handheld medium close-up at golden hour. A young woman with long pastel-pink hair and..." -> [site/features/models/seedance.md](../../features/models/seedance.md)
- 4K example 2 - fighter jet in orbit: "Cinematic shot in near-Earth space, a sleek fighter jet banking against the darkness, star..." -> [site/features/models/seedance.md](../../features/models/seedance.md)
- 4K example 3 - symmetrical dancer: "Wide symmetrical shot. A dancer with bleach-blond hair and futuristic sunglasses stands center frame,..." -> [site/features/models/seedance.md](../../features/models/seedance.md)
