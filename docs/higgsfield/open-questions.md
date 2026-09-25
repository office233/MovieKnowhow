# Open questions / gaps

## Resolved on the second pass (2026-09-25, Higgsfield MCP reconnected)
- **Marketing Studio: 649/649** presets (`raw/presets/marketing_studio_list_c*.json` → `presets/marketing-studio/<type>/`). Per-type input schema in `raw/presets/marketing_studio_schema_<type>.json`: every type needs `product_media_id`; `product_shots_people` adds `avatar`; `saas_motion` adds `brand_url`. The detail endpoint exposes **no prompt template** for these presets, only the input schema.
- **Recipes: 63/63** full, verbatim (`presets/recipes/*.md`, parameters in `raw/recipes/*.params.json`). Plus 3 commands not listed in the catalog: `/genjutsu`, `/use-after-effects`, `/use-blender` (`presets/commands/`).
- **Workflows: 16/16**, with all bundle files (`workflows/INDEX.md`).
- **New:** 22 explainer styles and the only Marketplace app (Match Cut + Tracelab): `presets/explainer-and-apps.md`.

## Still open after the second pass
- **Community projects' prompts (Hell Grind etc.):** the MCP does **not** expose them. `get_presets(query:'hell grind')` and `apps_search` return nothing. `show_generations` and `list_websites` only show the account's own content. They remain reachable only through a headless browser on higgsfield.ai.
- **`ugc-*` workflows (6):** the bundle files are complete, but `SKILL.md` exists only as the bundle's own version (`_bundle_SKILL.md`), without the sections the server appends, `_manifest.json` or `_files.txt`. The permission check blocked the agent's write step for those files.
- **Exact verbatim check for the recipes:** the text was copied from the tool responses. There is no automatic byte comparison against the server; `hero-shot` and `luxury` were checked by hand and match. The workflow bundles *were* size-checked against `size_bytes`.
- **Viral Hub:** the internal model/prompt behind the 87 chain presets is still not exposed.
- **Not re-attempted:** 3D animation actions (300/678), voices, own generations, balance.

## Blocked sources (first pass — partly resolved above)
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
