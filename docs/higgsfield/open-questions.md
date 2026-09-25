# Open questions / gaps

## Blocked sources
- **The Higgsfield MCP connector was disconnected** partway through, at the user's request ("no more MCP"). The following was **not** captured:
  - Marketing Studio: only **50 of 649** presets (first page). Categories: `motion`, `product-shot`, `effects` + types `product_shots_people`, `hypermotion`, `product_shots`, `mixed_media`, `2d_motion`, `saas_motion`.
  - Full recipes (`get_preset_instructions(<id>)`) for the 63 bundled recipes: only title/description/output are available.
  - Viral presets: we have all 87 (name + description + preview), but not the model or the internal prompt template (`kind: chain`).
  - Workflows: complete for `ad-multiplier` only (SKILL + references). The other 15 are catalogue-only; see `raw/get_workflow_instructions_catalog.json`.
  - 3D animation actions: 300/678.
  - Voices, my own generations, balance, TikTok music: not captured.
- **higgsfield.ai is blocked** by the environment's network policy (the proxy returns 403 on CONNECT, and WebFetch reports EGRESS_BLOCKED), so browsing the site was not possible. To enable it, add `higgsfield.ai` and `cdn.higgsfield.ai` to the allowed domains in the environment's settings.
- **Credit costs** per model are not exposed by `models_explore`.

## Excluded from open source (no license)
- machina-exm/film-studio-skills and neurodropp/prompt-resources have no license, so they were summarised in my own words in `films/` rather than copied.
- adlaiponderous700/claude-skill-cinematic-prompt: the clone asked for authentication (private or deleted).
