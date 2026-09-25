# How to Make AI Product Videos Without a Studio in 2026

Source: https://higgsfield.ai/blog/ai-product-videos-no-studio  
Higgsfield, Jul 23, 2026  
Prompts extracted: 0

**Marketing Studio formats**: UGC (creator-style TikTok/Meta), Tutorial (feature demo), Unboxing (reveal), Product Review (spokesperson pitch), TV Spot (polished broadcast), Hyper Motion (high-energy fast cuts), Wild Card (experimental), UGC Virtual Try On, Pro Virtual Try On. Max clip **15 s** in every format. Cost ≈ **$2 per 8 s at 720p, $4 at 1080p** (shown on Generate button). Engine: **Seedance 2.0 (up to 9 reference inputs**: product images, spokesperson face, voice sample, camera-style reference). Native audio + lip sync in one pass. Automation via Higgsfield MCP (no separate public API mentioned here).

Workflow 1 — URL -> demo: train Soul ID once (20+ photos) -> paste product URL (extracts images, name, features, price) -> edit the script angle to highlight the one feature that matters -> choose Tutorial or Product Review -> attach Soul ID -> generate -> repeat per SKU with same format + spokesperson.
Workflow 2 — UGC without creators: describe topic OR upload a well-performing reference video (**Ad Reference** recreates its concept, composition, pacing and hook with your product, without copying footage) -> UGC format -> if not using Ad Reference, set **Hook** (opening attention mechanic) and **Setting** (location/vibe) — use one approach, not both -> attach product images -> generate.
Workflow 3 — Showcase: upload one product photo (no script/URL) -> Unboxing / TV Spot / Hyper Motion / Wild Card -> generate; for statics use **DTC Ads**.
Workflow 4 — Brand consistency: enter brand website in **Brand Kit** (logo, colors, fonts, imagery, tone auto-extracted) -> review -> save; all later videos use it (e.g. 200-SKU catalog).
Scale: **Canvas** node pipeline (product input -> script -> spokesperson -> render), save as template, duplicate per batch; or **Supercomputer** runs parallel generations from a plain-language description with same Soul ID/Brand Kit.
Three decisions in order: format (by product + platform) -> script angle (tools write copy, not the angle) -> lock consistency (Soul ID + Brand Kit) before scaling. If URL extraction fails, upload images and fill details manually.

