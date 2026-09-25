# Gemini Omni Flash 1.1 (4K) landing (/gemini-omni)

Sources:
- https://higgsfield.ai/gemini-omni

Earlier landing (/gemini-omni-flash) is covered in [../../features/models/gemini-omni-flash.md](../../features/models/gemini-omni-flash.md). This page advertises **version 1.1 with 4K**.

What 1.1 adds / claims:
- **Extend scenes**: reads up to the last **10 seconds** of the clip (not just the last frame) and continues motion, light and story in **10-second steps**.
- **First + last frame**: pin both ends; it builds the move between them (push-ins, zoom transitions, seamless loops).
- **Recut without reshooting**: load up to **30 s of real footage** and direct changes in plain language (swap subject, change mood, retime action).
- Physics (gravity, momentum, fluids) kept across extensions; 4K master.
- Transform modes: restyle whole scene (e.g. to 2D cartoon), combine several clips/stills/references into one story, **transfer motion from one clip and look from another in one pass**, swap a character/object with a reference image (the new character takes over motion and dialogue), and **turn sketches into footage**.
- FAQ specs (these read like the original Flash spec and conflict with the 4K claim): native 720p at 24 fps, default 8 s per generation, extendable to 60 s, 1080p upscale as post step; inputs PNG/JPG/WebP up to 20 MB, MP4/MOV/WebM up to 60 s, MP3/WAV up to 30 s; outputs 16:9, 9:16, 1:1, 4:5; speech in 11 languages with lip-sync re-rendered per language; unlimited multi-turn edits per session with branching; SynthID watermark + C2PA credentials.
- Workflow tip: treat it like an editor conversation - one instruction per turn; each turn builds on the last and earlier turns can be restored.

## Prompts

0 new verbatim prompt(s) below; 4 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Already captured elsewhere (linked, not repeated)

- Remix reality: change location: "Move her onto a vast blooming flower field..." -> [site/features/models/gemini-omni-flash.md](../../features/models/gemini-omni-flash.md)
- Remix reality: reframe: "Cinematic close-up of her face..." -> [site/features/models/gemini-omni-flash.md](../../features/models/gemini-omni-flash.md)
- Remix reality: remove object: "Make the bicycle completely invisible..." -> [site/features/models/gemini-omni-flash.md](../../features/models/gemini-omni-flash.md)
- Transform: live action to 2D cartoon: "Transform the entire scene into a stylized 2D cartoon animation aesthetic - hand-drawn illustration..." -> [site/features/models/gemini-omni-flash.md](../../features/models/gemini-omni-flash.md)
