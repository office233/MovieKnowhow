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

## Site crawl (2026-09-25): what could NOT be extracted
- **Prompts and canvas of community projects** (Hell Grind, festival and showcase projects): they load client-side after render, from the project folders, and are missing from the HTML. A headless browser (Playwright/Chromium) was blocked by the session's permission system. Fix: the user adds a permission rule for a headless browser on higgsfield.ai.
- **`/soul/...` pages** (~100): disallowed by robots.txt. Not crawled.
- **Community feeds past the first batch** (Soul 79/148, Sora 15/132, camera prompt bank 10/46): loaded client-side.
- **~45 model/tool pages and 4 app pages** (Shots, Zooms, What's Next?, Skin Enhancer) render only an app shell.
- **Prompts behind the Viral/Effects presets**: the site does not publish them (the prompt field is empty).
- **Videos**: only links were saved (tens of GB). Images were saved as 640px copies.
- **Marketing Studio** 599/649, the full recipes and 15 workflows: available only through the Higgsfield MCP, which is no longer connected.
