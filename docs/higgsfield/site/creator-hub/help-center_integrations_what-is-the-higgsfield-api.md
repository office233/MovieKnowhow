# What is the Higgsfield API, and how do I get started?

Source: https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api
Published: Sep 16, 2026 (4 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article. Higgsfield API (launched Sep 16, 2026) = developer product, separate from higgsfield.ai plans.
- One key -> 50+ models (video: Seedance, Kling, Wan, MiniMax, PixVerse, LTX, Grok; image: Ideogram, Recraft, Qwen; Higgsfield: Soul 2, Soul Cinema, DoP, Marketing Studio Image). Catalog may differ from the website. Each model page: rate, resolutions/durations, sample code, comparison table.
- Setup: sign up (individual or company) -> add payment and fund balance (min top-up $5) -> create key at open.higgsfield.ai (shown once; unlocks 20 concurrent requests) -> Python/TypeScript SDK or REST to api.higgsfield.ai. Docs: docs.higgsfield.ai; ready setup prompts for Claude Code, Cursor, Codex.
- Billing: prepaid USD; video per second of output, images per image, DoP per generation; fixed public rates per configuration (resolution, audio); estimate endpoint; only successful generations billed (failures auto-refunded); funds expire after 1 year; optional auto top-up; requests wait when balance is 0.
- Async: submit -> request ID -> poll or webhook -> download. Outputs kept at least 7 days: download to your own storage.
- No standalone audio models; some video models (Seedance, Kling, LTX, PixVerse) have native audio as a rate-affecting option. Commercial use allowed. Team organizations supported.
