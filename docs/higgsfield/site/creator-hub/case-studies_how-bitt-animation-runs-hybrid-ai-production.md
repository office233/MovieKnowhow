# How BITT Animation Runs Hybrid AI Production on Higgsfield with Cinema Studio and Supercomputer

Source: https://higgsfield.ai/creator-hub/case-studies/how-bitt-animation-runs-hybrid-ai-production
Published: Aug 25, 2026 (10 mins read)
Section: creator-hub (Higgsfield Creator Hub)

Type: customer story (BITT Animation / BITT Plus, 24-year animation & VFX studio, Buenos Aires + Spain; clients Coca-Cola, Toyota, PepsiCo, etc.). Tools: Cinema Studio, Supercomputer, Marketing Studio, MCP & CLI (wired to Claude and GPT), Seedance, Gemini Omni; historically ComfyUI with WAN/Flux/Qwen, Veo 3.1, Nano Banana.

**Numbers**: 70%+ of studio work uses AI at some stage; ~6 projects in parallel (was 1); fully generative jobs cost ~15-20% of a traditional budget (low hundreds of thousands), hybrid ~30-40%; 3-month jobs now 3-6 weeks, some ~1 week; client-presentation stage from weeks to days. A CPG retainer runs at ~95% AI output monthly. Other work: 10+ spot campaign (Saladix/Arcor), Toyota TV spot, Bizarrap music video.

**Hybrid VFX shot recipe (the key technique)**
1. Put the original live-action plate into Seedance and manipulate it directly (drop in an animated character, replace a moving car, change background, swap product, add an element).
2. Treat the output as a generated pass, not a final shot.
3. Composite that pass back against the original plate (Nuke/After Effects): keep untouched plate areas, integrate the generated parts.
4. Final beauty pass, enhancement and upscale (tools inside Higgsfield), then grade.
- Decide shot by shot whether a frame is traditional, generative or hybrid; 3D elements and generated material flow both ways.

**Other practices**
- Cinema Studio used mainly for client previs that already reads as real direction, sometimes carried through to final delivery.
- Keep internal, reusable prompt systems refined across projects rather than writing prompts from scratch.
- MCP/CLI automation into in-house tooling; image-to-layers decomposition being evaluated.
- Test every new model inside a live pipeline within days (R&D group) to separate production-ready from demo-ready.
- Generative work has natural gaps (render time, reviews, client feedback), so artists can move between projects; the bottleneck moved to client feedback.
- Train the whole team on one platform so knowledge is not siloed.
- Senior directors keep final judgement on composition, performance, timing and taste.
