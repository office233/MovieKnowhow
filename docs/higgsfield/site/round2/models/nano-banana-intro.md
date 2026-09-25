# Nano Banana Pro / Nano Banana 2 / 2 Lite landing

Sources:
- https://higgsfield.ai/nano-banana-intro
- https://higgsfield.ai/nano-banana-pro-intro

Both URLs serve the same page. Existing notes: [../../features/models/nano-banana.md](../../features/models/nano-banana.md).

Decision guide from the FAQ (paraphrased):
- **Nano Banana Pro** = Gemini 3 Pro Image. Reasons about layout, physics and spatial logic before rendering; native **2K** upscaled to **4K** with a 16-bit colour pipeline; best for hero images, packaging, fine typography, dense multi-subject scenes.
- **Nano Banana 2** = Gemini 3.1 Flash Image. Most of Pro's quality at Flash speed (**2-3x faster**, cheaper); 512 px to 4K; **Image Search Grounding** (pulls real reference images from Google Search); best for prototyping, batches, social, real-time edits.
- **Nano Banana 2 Lite** = lighter, faster tier.
- Both: consistency for up to **5 characters** and **14 objects** per workflow; strong text rendering and in-image translation; ~95% identity retention across angles (page claim); complex scenes in under 10 s.
- Recommended tiered workflow: **explore with Banana 2, finalise with Pro**.
- Editing on Higgsfield: Banana Placement (product insertion), Nano Banana Pro Inpaint (brush + describe, structure-preserving), multi-reference composition.
- Pipeline role: use as the "layout and logic" stage (scene, text, characters), then animate frames with Sora 2, Kling, MiniMax or Seedance; add Face Swap / Soul ID / Popcorn for longer narratives.
