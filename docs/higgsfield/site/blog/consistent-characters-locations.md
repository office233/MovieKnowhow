# How to Keep Characters and Locations Consistent Across AI Shots (2026 Guide)

- Source: https://higgsfield.ai/blog/consistent-characters-locations
- Byline: Higgsfield · Jul 27, 2026 · 10 min · Last updated: 2w ago
- Prompts extracted: 0

## Notes

**Topic:** holding both the face *and* the location fixed across shots (Jul 27 2026). No prompts.

**Why locations are harder:** a room has dozens of variables (furniture layout, light direction, wall colour, window view, time of day, shelf objects) that must agree across every camera angle. "A cozy kitchen with morning light" gives the model nothing concrete, so each generation invents a slightly different kitchen — invisible in one shot, obvious when you cut between angles. Fix = a reference image anchoring the scene's geography.

**Tool split:**
- **Soul ID** (face): train on **20+ photos** (varied angles/lighting, clear well-lit portraits, no group shots or obscured faces); applied as a hard constraint across Kling 3.0, Veo 3.1, Seedance 2.0, WAN 2.6 without re-uploading. 25 credits (~$1.25) one-time.
- **Seedance 2.0** (single shots with max reference density): **up to 9 reference inputs** per call (character, location, prop, style) reasoned together.
- **Popcorn** (sequences): **up to 4 references**, generates **up to 8 frames** as one coherent set; Auto mode spreads beats from one prompt, Manual mode defines each frame. 5 credits (~$0.25) per sequence.

**Workflow:** 1) train identity first; 2) get a clean establishing image of the location (whole room, landmarks, light source) — a single strong concept image works if the place doesn't exist; feed character + location together into Seedance 2.0; 3) generate connected multi-shot sequences in Popcorn as one unit; 4) **carry the anchor forward** — consistency doesn't persist between Popcorn runs, so feed the strongest frame (character + location visible) back in with the original refs for the next sequence.

**Checklist:** character ref ready (Soul ID for recurring person / clean image for one sequence); location establishing image showing geography + light direction; ref count fits (9 Seedance, 4 Popcorn); frames = beats (4 simple, 6 with an arc, 8 complex); Auto vs Manual; save best frame as next anchor.
**Costs:** Seedance 2.0 Standard 720p 8 s = 36 cr (~$1.55); Fast 720p 8 s = 28 cr (~$1.20).

