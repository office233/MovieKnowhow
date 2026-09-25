# Meet the Higgsfield API: How It Works and What You Get

- Source: https://higgsfield.ai/blog/higgsfield-api
- Byline: Higgsfield · Sep 16, 2026 · 7 min · Last updated: 1w ago
- Prompts extracted: 0

## Notes

**Topic:** launch post for the Higgsfield API (Sep 16 2026). No prompts. (See also generate-ai-videos-higgsfield-api.md.)
- Self-serve developer API, 50+ current video/image models (Seedance, Kling, Wan, MiniMax, LTX, PixVerse, Recraft, Ideogram, Grok + Soul 2, Soul Cinema, DoP, Marketing Studio Image). Separate product from higgsfield.ai plans.
- Each model page: price, resolutions, durations, release date, code samples, "Copy for agent", overview + comparison table.
- Start: account (personal/company) -> payment method + top-up -> create API key (shown once; **unlocks 20 concurrent requests**, concurrency grows with top-up volume) -> Python/TS SDK or REST; setup prompts for Claude Code, Cursor, Codex. Async: request ID -> poll/webhook -> download.
- Starting rates: Marketing Studio Image $0.0059/img; Soul 2 & Soul Cinema $0.0032/img; DoP $0.125/generation; Kling 2.5 $0.042/s; Kling 2.6 $0.07/s; Seedance 2.5 $0.0738/s; Kling 3.0 $0.112/s; PixVerse 6 $0.115/s; MiniMax H3 $0.13/s; LTX 2.5 Pro $0.17/s; Wan 3.0 $0.20/s; Seedance 2.0 $0.9332/s (as listed). 10 s Kling 3.0 = $1.12; Kling 2.6 = $0.70.
- Billing: USD balance, per request, public prices, stops at zero (auto top-up available), failed generations refunded, funds expire after 1 year, outputs kept >= 7 days, commercial use allowed, team organisations, Analytics + CSV.

