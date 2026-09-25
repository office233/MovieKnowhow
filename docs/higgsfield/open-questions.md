# Open questions / gaps

## Resolved on the second pass (2026-09-25, Higgsfield MCP reconnected)
- **Marketing Studio: 649/649** presets (`raw/presets/marketing_studio_list_c*.json` → `presets/marketing-studio/<type>/`). Per-type input schema in `raw/presets/marketing_studio_schema_<type>.json`: every type needs `product_media_id`; `product_shots_people` adds `avatar`; `saas_motion` adds `brand_url`. The detail endpoint exposes **no prompt template** for these presets, only the input schema.
- **Recipes: 63/63** full, verbatim (`presets/recipes/*.md`, parameters in `raw/recipes/*.params.json`). Plus 3 commands not listed in the catalog: `/genjutsu`, `/use-after-effects`, `/use-blender` (`presets/commands/`).
- **Workflows: 16/16**, with all bundle files, `SKILL.md` (as returned by the server), `_manifest.json` and `_files.txt` (`workflows/INDEX.md`).
- **New:** 22 explainer styles and the only Marketplace app (Match Cut + Tracelab): `presets/explainer-and-apps.md`.

## Still open after the second pass
- **Community projects' prompts (Hell Grind etc.):** the MCP does **not** expose them (`get_presets(query:'hell grind')` and `apps_search` return nothing; `show_generations`/`list_websites` only show the account's own content). On the third attempt (2026-09-25) higgsfield.ai answers 200, but: (1) Playwright Chromium fails with `ERR_CERT_AUTHORITY_INVALID` behind the session proxy, even with the proxy set explicitly; (2) direct calls to Higgsfield's API for the project data were blocked by the session's permission classifier. It needs the user's decision: a permission rule for these requests, or a manual export from the account.
- **Exact verbatim check for the recipes:** the text was copied from the tool responses. There is no automatic byte comparison against the server; `hero-shot`, `luxury` (image) and `whip-pan` (video) were checked against the live response and match. The workflow bundles *were* size-checked against `size_bytes`.
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
