# ComfyUI-Higgsfield-Direct (Jeremie Louvaert) — ComfyUI nodes for the Higgsfield API

- Upstream: <https://github.com/jeremieLouvaert/ComfyUI-Higgsfield-Direct> (commit `6858df7`)
- Local copy: [`../opensource/ComfyUI-Higgsfield-Direct/`](../opensource/ComfyUI-Higgsfield-Direct/)
- License: MIT © 2026 Jeremie Louvaert
- Type: **tool** (ComfyUI custom node pack, category `AKURATE/Higgsfield`)

## What it offers

| Node | Models (ids verbatim from `higgsfield_nodes.py`) |
|---|---|
| Higgsfield Text-to-Image | `higgsfield-ai/soul/standard` (Soul 2.0), `reve/text-to-image`, `bytedance/seedream/v4/text-to-image` |
| Higgsfield Image Edit | `bytedance/seedream/v4/edit` |
| Higgsfield Image-to-Video | `higgsfield-ai/dop/preview`, `bytedance/seedance/v1/pro/image-to-video`, `kling-video/v2.1/pro/image-to-video` — returns a native ComfyUI `VIDEO` |
| Higgsfield Model Info | lists models |

Parameters: aspect `1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9`; resolution `1K, 2K, 4K`; video duration `5, 10, 15`. A reference image input is uploaded and passed as `image_url` "(Soul ID / style reference)".

## How it calls Higgsfield

Python SDK `higgsfield-client`; credentials `key:secret` from the node field, `HF_KEY`, `HF_API_KEY`+`HF_API_SECRET`, or `higgsfield_api_key.txt` in the ComfyUI root (keys from <https://cloud.higgsfield.ai>). Video call (verbatim):

```python
arguments = {
    "prompt": prompt,
    "image_url": image_url,
    "duration": int(duration),
}
result = higgsfield_client.subscribe(
    model,
    arguments=arguments,
    on_queue_update=lambda s: print(f"[Higgsfield] Status: {type(s).__name__}"),
)
```

Result `result["video"]["url"]` (images: `result["images"]`). Outputs a `cache_key` for ComfyUI-API-Optimizer.

## Notes

- "Failed/NSFW requests are not charged." Pricing: per generation, see higgsfield.ai/pricing (no numbers in repo).
- "Higgsfield keeps generated files for a minimum of 7 days, after which the returned URL stops resolving" — the nodes download every result into the ComfyUI output folder.
- Film use: build keyframes (Soul/Seedream) and animate them (DoP/Seedance Pro/Kling 2.1) inside a ComfyUI graph; assembly and audio happen elsewhere (see [add-music-to-video.md](add-music-to-video.md) for a ComfyUI audio-node recipe). API details: [cli-and-api.md](cli-and-api.md) §10.
