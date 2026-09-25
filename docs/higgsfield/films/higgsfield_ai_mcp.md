# higgsfield_ai_mcp (geopopos) — community FastMCP server for the older Higgsfield platform API

- Upstream: <https://github.com/geopopos/higgsfield_ai_mcp> (commit `a2bea49`)
- Local copy: [`../opensource/higgsfield_ai_mcp/`](../opensource/higgsfield_ai_mcp/)
- License: MIT © 2025 Higgsfield MCP Contributors
- Type: **tool** (MCP server, Python/FastMCP). Not the official hosted MCP (`mcp.higgsfield.ai`).

## Tools

`generate_image` (Soul; `quality` 720p/1080p, `character_id`, `style_id`), `generate_video` (DoP image-to-video; `image_url` public HTTPS, `motion_id` required, `quality` lite/turbo/standard), `create_character` (1–5 face URLs), `get_generation_status`, `list_characters`; resources `higgsfield://styles`, `higgsfield://motions`, `higgsfield://characters`. Speech endpoint `POST /v1/speak/higgsfield` (image + WAV audio → talking head).

Workflow from the README: browse styles → `generate_image` → poll → `create_character` for consistency → `generate_image` with `character_id` → browse motions → `generate_video` with a `motion_id`. "Processing takes 20-60 seconds depending on quality"; "Poll `get_generation_status` every 10 seconds"; "Results are cached for 7 days".

Fixed payload for DoP (verbatim comment): "The API requires both 'prompt' and 'input_images' fields." — `input_images: [{type: "image_url", image_url}]`, `motions: [{id, strength: 0.5}]`, webhook at top level.

## Pricing (verbatim, README)

- Image (Soul): "720p: 1.5 credits ($0.09) per image", "1080p: 3 credits ($0.19) per image", "First 1000 generations: 1 credit ($0.06) for 1080p"
- Video (DoP): "Lite: 2 credits ($0.125)", "Turbo: 6.5 credits ($0.406) - 2x speed", "Standard: 9 credits ($0.563) - Highest quality"
- "Character Creation: 40 credits ($2.50) one-time"
- "Rate: $1 = 16 credits"; charged only on success.

Full endpoint list: [cli-and-api.md](cli-and-api.md) §10. This is the 2025-era API (Soul + DoP motion presets); current film work uses the official CLI/MCP with Seedance/Kling/Veo.
