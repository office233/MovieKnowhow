# How To Generate AI Videos Straight From the Higgsfield API

- Source: https://higgsfield.ai/blog/generate-ai-videos-higgsfield-api
- Byline: Higgsfield · Sep 16, 2026 · 9 min · Last updated: 1w ago
- Prompts extracted: 0

## Notes

**Topic:** generating video straight from the Higgsfield API (Sep 16 2026). No prompts.

**Setup:** API account (individual or company) -> add payment method, top up a **USD balance** -> create API key at `console.higgsfield.ai` (ID + secret, shown once) -> call `api.higgsfield.ai` via Python/TypeScript SDK or REST. Docs: docs.higgsfield.ai; each model page has setup prompts for Claude Code, Cursor, Codex.
**Catalog (50+ models, curated, can differ from the web app):** video — Seedance, Kling, Wan, MiniMax, LTX, PixVerse, Grok families + Higgsfield DoP; image — Recraft, Ideogram, Qwen, Soul 2, Soul Cinema, Marketing Studio Image.

**Example pipeline (character clip, < $1.30 for 10 s):** Soul 2 character still ($0.0032/img — generate a batch and pick the best face; for products use Marketing Studio Image $0.0059) -> **Soul Cinema** to light/compose/grade the frame (the closer the frame is to final look, the more of the clip is decided before motion) -> Kling 3.0 image-to-video (sound, multi-prompt, multi-shot) -> poll status URL or webhook -> download (files kept **>= 7 days**). Swap any stage by changing the model identifier.

**List prices:** Seedance 2.5 $0.0738/s; Kling 3.0 $0.112/s; Wan 3.0 $0.20/s; MiniMax H3 $0.13/s; LTX 2.5 Pro $0.17/s; PixVerse 6 $0.115/s; Grok Imagine Video 1.5 $0.25/s; DoP $0.125/generation; Soul 2 / Soul Cinema $0.0032/img; Marketing Studio Image $0.0059; Grok Imagine 2.0 $0.06; Ideogram 4.0 $0.06; Recraft 4.1 $0.035; Qwen Image 3 $0.03.

**Rules:** API billing is separate from website plans/credits/unlimited; async by design (build polling/webhooks); keep key server-side; failed requests are not billed; balance can't go negative (auto top-up option); top-ups valid 1 year; commercial use allowed; team organisations; Analytics with CSV export.

