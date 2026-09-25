# Higgsfield API (Open Higgsfield)

Source: https://higgsfield.ai/higgsfield-api

## Integration
- Auth header: `Authorization: Key ${HF_API_KEY_ID}:${HF_API_KEY_SECRET}`.
- Submit: `POST https://api.higgsfield.ai/<provider>/<model>/<task>` e.g. `bytedance/seedance-2.0/text-to-video` with JSON `{"prompt","resolution":"720p","generate_audio":true,"duration":5,"aspect_ratio":"16:9"}` -> returns `request_id` + `status_url` (+ `cancel_url`).
- Poll: `GET https://api.higgsfield.ai/requests/${REQUEST_ID}/status` until completed; response holds the file URL.
- Same submit/poll/fetch shape as fal/Replicate - swap the key. "Copy for agent" snippets, MCP server for Claude Code/Cursor, agent-readable docs.
- Limits: 20 concurrent requests per key to start (raise via settings). Personal and team workspaces share one balance/invoice; keys per project. Pay per generation, no seats; volume discounts automatic; spend analytics + CSV export; auto top-up.
- Launch offer: 15% off all models; pick any 4 models for up to 50% off; +$15 balance after business-email verification + card.

## Price list
See [../pricing.md](../pricing.md#api-prices-per-second--per-image) for the full per-model table (e.g. Kling 3.0 $0.084/s, Seedance 2.0 $0.1407/s, Seedance 2.5 $0.2057/s).

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Open Higgsfield / Generative Video & Image Models via API | https://higgsfield.ai/higgsfield-api | 1 |

## Verbatim prompts (1)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P038 - API quick-start request body

- Page: https://higgsfield.ai/higgsfield-api | Model: Seedance 2.0 via API (bytedance/seedance-2.0/text-to-video) | Settings: resolution 720p; generate_audio true; duration 5; aspect_ratio 16:9 | Use-case: cinematic film scene

```text
A cinematic tracking shot along a sunlit coastal road
```
