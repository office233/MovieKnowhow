---
name: higgsfield-director
description: Use before any Higgsfield generation (film, ad, UGC, viral clip, product shot, character). Routes to the local knowledge base in docs/higgsfield/ to pick model + preset + prompt structure, and enforces credit-spend confirmation.
---

# Higgsfield Director

1. **Consult the KB first.** Read `docs/higgsfield/README.md` (the decision table and production rules), then:
   - presets: `docs/higgsfield/presets/INDEX.md` → the matching file (viral/, recipes/, camera-motion.md, cinema-studio.md, marketing-dtc.md, effects-and-styles.md)
   - prompt templates: `docs/higgsfield/presets/opensource-prompt-templates.md`
   - model constraints (durations, resolutions, media roles): `docs/higgsfield/models.md`
   - worked pipelines: `docs/higgsfield/films/INDEX.md`
2. **Pick model + preset** from the README decision table; check the parameters in `models.md`.
3. **Build prompts** from a template. Keep character, location and prop descriptors verbatim across shots, and name each reference image's role.
4. **Credits:** ANY `generate_*`, `execute_preset`, `upscale_*`, `create_voice*`, `dubbing`, `motion_control`, `reframe`, `outpaint_image`, `remove_background`, `generate_3d`, `shorts_studio_create`, or publishing call spends credits or has side effects. **Show the plan (model, params, shot count, estimated credits) and get explicit user confirmation before calling.** Draft at low resolution first.
5. Log each generation (prompt, model, params, result, keep/reject) so it can be added to the KB.
