# Higgsfield CLI & API — commands, model ids, parameters, auth, presets, costs

Primary source: the **official Higgsfield CLI** repo <https://github.com/higgsfield-ai/cli> (MIT © 2026 Higgsfield AI, commit `dc7e2d2`), local copy [`../opensource/cli/`](../opensource/cli/) — `README.md` and `MODELS.md` ("Generated from `higgsfield model list` and `higgsfield model get <job_set_type>`"). Secondary: how the other open-source projects call the CLI, the hosted MCP, and the older platform REST API (sources named per section). Live model catalog from the MCP is in [`../models.md`](../models.md).

> Enumerations drift. Always verify with `higgsfield model get <id>` (CLI) or `models_explore(action="get", model_id=...)` (MCP) before a paid call — see the "plausibility-over-verification" note in [higgsfield-ai-prompt-skill.md](higgsfield-ai-prompt-skill.md).

---

## 1. Install & auth

```bash
curl -fsSL https://raw.githubusercontent.com/higgsfield-ai/cli/main/install.sh | sh   # macOS/Linux
brew install higgsfield-ai/tap/higgsfield                                            # Homebrew
npm install -g @higgsfield/cli                                                        # cross-platform
higgsfield auth login
```

`install.sh` installs `higgsfield` plus a `higgs` symlink and an `hf` shortcut unless taken (flags `--prefix`, `--tag vX.Y.Z`, `--no-hf`, `--hf`). Tokens are short-lived: "`Session expired` / `Not authenticated` — tokens are short-lived. Re-run `higgsfield auth login`." Pin: `npm install -g @higgsfield/cli@1.1.2`.

Surface choice (from `higgsfield-ai-prompt-skill/skills/higgsfield-stack/SKILL.md`): "All four surfaces share one credit pool and one job queue. Queue priority is a function of the user's paid Higgsfield plan tier"; CLI preferred for headless/batch ("If you are using Claude Code or Codex, it's better to use the CLI"), MCP for conversational use.

## 2. Command groups (README "Commands")

| Command | Purpose |
|---|---|
| `higgsfield auth` | login / logout / inspect token |
| `higgsfield account` | credits balance, transactions (`account status`, `account transactions --size N`) |
| `higgsfield workspace` | list / select / unset billing workspace |
| `higgsfield model` | list models, inspect parameter schema (`model list`, `model get <id>`) |
| `higgsfield generate` | `create` / `cost` / `wait` / `get` / `list` jobs; `generate workflow <name>`; `generate cost workflow <name>` |
| `higgsfield workflow` | `workflow list`, `workflow get <name> [--json]` |
| `higgsfield preset` | `preset list <kind>`, `preset resolve video-explainer <id>` |
| `higgsfield game` | `game deploy <zip>`, `game publish <id>` |
| `higgsfield voices` | `voices list`, `voices get <voice_id>` |
| `higgsfield upload` | upload image / video / audio |
| `higgsfield soul-id` | train and manage Soul characters (`create`, `wait`) |
| `higgsfield marketing-studio` | avatars, products, ad references, brand kits, ad formats, DTC Ads Engine |
| `higgsfield product-photoshoot` | brand image generation |
| `higgsfield website` | create / repo-access / deploy / publish / rename / db / secrets / categories / contest |
| `higgsfield version` | build info |

Global flags: `--wait`, `--wait-timeout` (default `10m`), `--wait-interval` (default `3s`), `--json`, `--no-color`. "Every flag accepts both spellings: `--aspect_ratio` and `--aspect-ratio` are equivalent." Media flags (`--image`, `--image-references`, `--start-image`, `--end-image`, `--video`, `--video-references`, `--audio`, `--audio-references`) "accept either a UUID (upload id or previous job id) or a local file path; paths are auto-uploaded."

Gotcha (prompt-skill `higgsfield-stack`): "The canonical subcommand for balance is `account status` [...] `account balance` and `account credits` both fall through to parent help".

Scripting example (README): `higgsfield generate list --json | jq -r '.[] | select(.status=="completed") | .result_url'`

## 3. Film-relevant recipes (verbatim)

```bash
# Seedance 2.5 ("SOTA default for general video generation")
higgsfield generate create seedance_2_5 \
  --prompt "drone shot over a mountain valley at sunrise" \
  --aspect_ratio 16:9 --duration 5 \
  --resolution 1080p --mode t2v --bitrate_mode high \
  --wait

# Kling 3.0 image-to-video
higgsfield generate create kling3_0 \
  --prompt "slow camera push through a forest clearing at dawn" \
  --start-image ./first.png \
  --duration 5 --mode pro --sound off \
  --wait

# Soul ID: train once, reuse
higgsfield soul-id create --name me --soul-2 \
  --image ./me1.jpg --image ./me2.jpg --image ./me3.jpg
higgsfield soul-id wait <soul_id>
higgsfield generate create text2image_soul_v2 \
  --prompt "professional portrait, neutral background, soft daylight" \
  --soul-id <soul_id> --wait

# Virality Predictor on a finished ad
higgsfield generate create brain_activity --video ./ad.mp4 --wait

# Workflows on finished footage
higgsfield generate workflow draw_to_video --video ./source.mp4 --sketch ./frame.png --timestamp 3.2 --prompt "make the jacket red" --wait
higgsfield generate workflow reframe --video ./source.mp4 --aspect-ratio 9:16 --resolution 720p --wait
higgsfield generate workflow voice-change --video ./source.mp4 --voice_type preset --voice_id <voice_id> --wait
higgsfield generate workflow dubbing --video ./source.mp4 --target_language spa --wait
```

Note: the README shows `seedance_2_5` at `--resolution 1080p`, but `MODELS.md` has no seedance_2_5 section and the CLI schema snapshot captured 2026-08-07 in `higgsfield-ai-prompt-skill/specs/cli_baseline.json` lists `seedance_2_5` resolution options `480p`, `720p` only, modes `omni_reference | t2v | video_edit | video_extension`, `extension_mode backward|forward`, `generate_audio` default true, and the rule "image_references + video_references + audio_references <= 50". Check `higgsfield model get seedance_2_5`.

**Video explainer** (the CLI's own multi-block assembly pipeline, README):

```bash
higgsfield preset list video-explainer --json
higgsfield preset resolve video-explainer <preset_id> --json
higgsfield voices list --json

higgsfield generate create seed_audio \
  --prompt "<Block 1 narration>" \
  --voice_type preset --voice_id <voice_id> --wait --json

higgsfield generate create gemini_omni \
  --prompt "<Block 1 visual prompt>" \
  --image <resolved_style_media_id> \
  --duration 10 --resolution 720p --aspect_ratio 16:9 --wait --json

higgsfield generate create explainer_video \
  --items @blocks.json --width 1280 --height 720 --wait --json
```

`blocks.json` pairs `{"video": {"id": "<clip-1-job-id>", "type": "video_job"}, "audio": {"id": "<voice-1-job-id>", "type": "audio_job"}}` in playback order; optional `--subtitles '{"font":"patrick"}'` (fonts `patrick`, `caveat`, `marker`, `anton`). Rule: narration first, then 10 s clips, one audio per clip. Alternative monolithic `video_explainer`: `--duration` 20–600 (multiple of 10), prompt ≤5000 chars, up to 14 images.

## 4. Video model ids & parameters (from `MODELS.md`)

| id (job_set_type) | name | key params (default) | refs / constraints |
|---|---|---|---|
| `seedance_2_0` | Seedance 2.0 | aspect `auto,16:9,9:16,4:3,3:4,1:1,21:9` (16:9); duration int (5); resolution `480p,720p,1080p,4k` (720p); mode `std,fast` (std); `generate_audio` (true); genre `auto,action,horror,comedy,noir,drama,epic`; `bitrate_mode standard,high` | ≤9 images incl. start/end; ≤3 video; ≤3 audio; ≤12 total; audio refs need an image/video; "Mode 'fast' supports only 480p/720p; use mode 'std' for 1080p/4k." |
| `seedance_2_0_mini` | Seedance 2.0 Mini | same, resolution `480p,720p` | same ref limits |
| `seedance1_5` | Seedance 1.5 Pro | duration `4,8,12`; `generate_audio` true; 480p–1080p | end needs start |
| `seedance_2_5` | Seedance 2.5 | see note above | modes t2v / omni_reference / video_edit / video_extension |
| `kling3_0` | Kling v3.0 | aspect 16:9/9:16/1:1; duration int (5); mode `std,pro,4k`; sound `on,off` | start + end image |
| `kling3_0_turbo` | Kling 3.0 Turbo | 720p/1080p | start image |
| `kling2_6` | Kling 2.6 | duration 5/10; sound true | start image |
| `veo3_1` | Google Veo 3.1 | duration 4/6/8; quality `basic,high,ultra`; variant `veo-3-1-preview`,`veo-3-1-fast` | start image |
| `veo3_1_lite` | Veo 3.1 Lite | duration 4/6/8; `generate_audio` false | start+end → duration must be 8 |
| `veo3` | Veo 3 | variant `veo-3-preview`,`veo-3-fast` | start image required |
| `cinematic_studio_3_0` | Cinematic Studio 3.0 | duration (5); resolution `480p,720p,1080p,4k`; genre; `multi_shots`, `multi_shot_mode auto/custom`, `multi_prompt`; `speedramp auto,linear,slowmo,speedup,fast_to_slowmo,slowmo_to_fast,super_slowmo,impact`; `generate_audio` false; `enhance_prompt` false; `prompt_language en/zh` (zh); `preset_id` | ≤15 media refs (image/start/end/video/audio) |
| `cinematic_studio_video_3_5` | Cinematic Studio Video 3.5 | duration (15); 480p–1080p; `camera_style` (`classic_static, silent_machine, one_take, epic_scale, intimate_observer, impossible_camera, documentary_snap, raw_chaos, dreamy_flow`); `color_grading` (`naturalistic_clean, bleached_warm, hyper_neon, teal_orange_epic, sodium_decay, cold_steel, bleach_bypass, classic_bw`); `light_scheme` (`soft_cross, contre_jour, overhead_fall, window, practicals, silhouette`); or `style_prompt` | ≤15 refs; style axes and `style_prompt` mutually exclusive |
| `cinematic_studio_video_v2` | Cinematic Studio Video V2 | genre `auto, action, horror, comedy, western, suspense, intimate, spectacle`; mode pro/std; `cfg_scale` 0.5; `kling_element_ids`; multi-shot; speedramp; sound on | start/end/refs |
| `cinematic_studio_video` | Cinematic Studio Video | duration 5/10; slow_motion; sound | end needs start |
| `marketing_studio_video` | Marketing Studio Video | duration (15); 480p–1080p (720p); `mode` (ugc); `specific_mode default,web_product,from_storyboard`; `avatars`/`avatar_ids`, `product_ids`, `web_product_ids`, `hook_id`, `setting_id`, `ad_reference_id`, `storyboard_id`; `generate_audio` false | ad_reference_id excludes hook/setting |
| `gemini_omni` | Gemini Omni Flash | duration 4/6/8/10; 720p; 16:9/9:16 | ≤7 images (≤5 with a video ref), ≤1 video |
| `wan2_7` / `wan2_6` | Wan 2.7 / 2.6 | 2.6 duration 5/10/15, quality 720p/1080p | 2.6 accepts video + audio refs |
| `minimax_hailuo` | Minimax Hailuo | duration 6/10; resolution 512/768/1080; variants `minimax, minimax-fast, minimax-2.3, minimax-2.3-fast` | 1080 not for 10 s |
| `grok_video`, `grok_video_v15` | Grok Video | 1.5 needs start image, 480p/720p | — |
| `brain_activity` | Virality Predictor | `--video` | scores hook/attention/retention |
| `video_background_remover` | — | one video | — |

Utility job types (run `model get`): `autosprite`, `bytedance_image_upscale`, `bytedance_video_upscale`, `clipify`, `color_grading_lut`, `llm_text`, `sam_3_video`, `speech2text`, `topaz_image`, `topaz_video`, `video_deflicker`, `video_upscale`.

## 5. Image model ids (asset/keyframe stage)

| id | name | notes |
|---|---|---|
| `nano_banana_2` | Nano Banana Pro | ≤14 image refs; 1k/2k/4k (2k) |
| `nano_banana_flash` | Nano Banana 2 | 1k/2k/4k |
| `nano_banana_2_lite` | Nano Banana 2 Lite | 1k; `thinking MINIMAL/HIGH` |
| `nano_banana` | Nano Banana | ≤8 refs |
| `gpt_image_2` | GPT Image 2 | quality low/medium/high; 1k/2k/4k; inpaint with `--mask` |
| `gpt_image_2_5` | GPT Image 2.5 | "Recommended default for high-fidelity image generation, design, and on-image text"; variants `flare`, `sunburst`; quality up to `max`; ≤16 refs |
| `text2image_soul_v2` | Soul V2 | `--soul-id`; 1.5k/2k; one image ref |
| `soul_cinematic` | Soul Cinematic | `--soul-id`; 1.5k/2k; 8 aspect ratios incl. 21:9 |
| `soul_location` | Soul Location | locations |
| `soul_cast` | Soul Cast | aspect 16:9 only; `--budget` (50) |
| `cinematic_studio_2_5` | Cinematic Studio 2.5 | ≤14 refs; 1k/2k/4k |
| `seedream_v4_5`, `seedream_v5_lite` | Seedream | quality basic/high |
| `flux_2`, `flux_kontext`, `kling_omni_image`, `grok_image`, `recraft_v4_1`, `z_image`, `image_auto`, `openai_hazel`, `outpaint`, `image_background_remover`, `marketing_studio_image` | — | see MODELS.md |

## 6. Audio

| id | use | key params |
|---|---|---|
| `seed_audio` | Seed Audio 1.0 — narration/dialogue (voice or image-conditioned) | `--voice_type preset/element` + `--voice_id`; format wav/mp3/pcm/ogg_opus; sample_rate up to 48000; speech/pitch/loudness rate; ≤2 audio refs |
| `text2speech_v2` | TTS | `--variant elevenlabs, minimax, seed_speech, vibe_voice, cozy_voice`; char limits 5000 / 10000 (minimax) / 15000 (seed_speech) |
| `inworld_text_to_speech` | TTS | `--voice` (113 built-in) |
| `sonilo_music` | music bed of fixed length | `--prompt`, `--duration` |
| `mirelo_text_to_audio` | SFX | `--prompt`, `--duration` |

## 7. Presets & workflows

- `higgsfield preset list video-explainer` / `animation-action` (with `--query`, `--group Fighting --category Punching`) — server-managed styles/actions; `preset_id` is also a param on `cinematic_studio_3_0`, `cinematic_studio_video_v2`, `video_explainer`.
- `higgsfield workflow list`; workflows: `draw_to_video`, `reframe`, `voice-change`, `dubbing` (the last two have no cost estimate).
- Marketing Studio objects (avatars, products, hooks, settings, ad references, brand kits) via `higgsfield marketing-studio` and passed by UUID.
- The platform "Viral presets" (`get_presets` / `execute_preset` on the MCP) are documented by another agent under [`../presets/`](../presets/).

## 8. Cost estimation & balance

```bash
higgsfield model get kling3_0                     # step 1: verify schema
higgsfield generate cost kling3_0 --prompt "test" --aspect_ratio 16:9 --duration 8 --json   # step 2: cost
higgsfield generate cost workflow draw_to_video --duration 8.2 --resolution 720p
higgsfield generate cost workflow reframe --duration 7.1 --resolution 1080p
higgsfield account status --json                  # {credits, email, subscription_plan_type}
higgsfield account transactions --size 50
```

Verified number: "`higgsfield generate cost kling3_0 --prompt "test" --aspect_ratio 16:9 --duration 8 --json` (returned 16 credits)" (prompt-skill `docs/archive/CHANGELOG-v3.0-v3.14.md`). MCP equivalent: `generate_video(..., get_cost: true)` which also returns an `adjustments` block of defaulted params; **not supported for Marketing Studio models** (read cost from the result or balance before/after).

## 9. How projects call it in practice

- **UGC-dashboard** (`lib/higgsfield/runner.ts`): `higgsfield generate create marketing_studio_video --prompt ... --image <path> --mode ugc --duration 15 --resolution 720p --aspect_ratio 9:16 --generate_audio <bool> --wait --wait-timeout 30m --json`, then scan the JSON for an `.mp4` URL; `higgsfield account status --json` for the credit widget. See [UGC-dashboard.md](UGC-dashboard.md).
- **higgsfield-ugc-workflow / carousel-builder / higgsfield-skills / claude-higgsfield-skill / visual-storytelling-skills** use the hosted **MCP** instead: <https://mcp.higgsfield.ai>. Tools seen across them: `models_explore` (`action=list|get|recommend`), `generate_image`, `generate_video` (with `get_cost: true`), `job_status` (`sync: true`, `raw_data: true`), `job_display`, `media_upload` → `media_confirm`, `media_import_url`, `media_upload_widget`, `balance`, `transactions`, `show_plans_and_credits`, `show_marketing_studio` (preset routing for Marketing Studio). Media are passed as `medias: [{value: <id>, role: image|start_image|end_image|video|audio}]`. Results at `results.rawUrl`.

## 10. The older platform REST API (cloud.higgsfield.ai keys)

Two community projects use the pre-CLI API with a key **and** secret from <https://cloud.higgsfield.ai>:

- **higgsfield_ai_mcp** (`src/higgsfield_mcp/client.py`): base `https://platform.higgsfield.ai`, headers `hf-api-key` and `hf-secret`. Endpoints: `POST /v1/text2image/soul` (`{"params": {prompt, width_and_height, enhance_prompt, quality, batch_size, custom_reference_id?, style_id?}}`), `POST /v1/image2video/dop` (`{"params": {model: "dop-lite"|"dop-turbo"|"dop-preview", prompt, input_images:[{type:"image_url", image_url}], motions:[{id, strength: 0.5}]}}`, webhook at top level), `POST /v1/custom-references` (character from 1–5 face URLs), `GET /v1/job-sets/{id}`, `GET /v1/text2image/soul-styles`, `GET /v1/motions`, `POST /v1/speak/higgsfield` (talking head from image + **WAV** audio). Statuses `queued / in_progress / completed / failed / nsfw`. See [higgsfield_ai_mcp.md](higgsfield_ai_mcp.md).
- **ComfyUI-Higgsfield-Direct** uses the Python SDK `higgsfield-client` (`HF_KEY="key:secret"`), `higgsfield_client.subscribe(model_id, arguments={...})` with ids like `higgsfield-ai/soul/standard`, `bytedance/seedream/v4/text-to-image`, `bytedance/seedream/v4/edit`, `higgsfield-ai/dop/preview`, `bytedance/seedance/v1/pro/image-to-video`, `kling-video/v2.1/pro/image-to-video`. "Higgsfield keeps generated files for a minimum of 7 days". See [ComfyUI-Higgsfield-Direct.md](ComfyUI-Higgsfield-Direct.md).

## 11. All credit/price numbers found in the corpus

| Item | Number | Source |
|---|---|---|
| Kling 3.0, 8 s, 16:9, std | 16 credits | prompt-skill CHANGELOG / higgsfield-stack |
| Kling 3.0 (plan pages) | ~8.7 credits/video; ~10 credits (model-guide) | visual-storytelling model-routing; prompt-skill model-guide.md |
| Kling O1 Video Edit | ~9 credits | prompt-skill model-guide.md |
| Seedance 2.0 UGC ad 15 s 9:16 | ~67 credits @720p, ~135 @1080p | higgsfield-ugc-workflow |
| Cinema Studio 3.0 video | 48 credits/generation | prompt-skill cinema/models |
| Soul Cast / Soul Cinema image | 0.125 credits ("1 credit = 8 images") | prompt-skill soul |
| Soul Cinema 4-image batch | ~0.5 credits | prompt-skill pipeline |
| GPT Image 2 vs Soul Cinema | 7 credits = 1 GPT Image 2 or ~56 Soul Cinema | prompt-skill CHANGELOG |
| Hero Frame | ~1 credit | prompt-skill cinema |
| Angles 2.0 (12 angles) | 2.4 credits | lanshu methodology 18 |
| Marketing Studio | ~150 credits/video (~$9) | prompt-skill marketing-studio |
| Old API Soul image | 1.5 cr (720p) / 3 cr (1080p); DoP lite 2 / turbo 6.5 / standard 9; character 40 cr ($2.50); "$1 = 16 credits" | higgsfield_ai_mcp README |
| Plans | Free 25/mo · Basic $6 (150) · Pro $27 (700) · Ultimate $55 (1,500) | prompt-skill model-guide.md |
| Hell Grind feature | 9,540,047 credits, ~$400k gen, $0.042–0.060/credit | prompt-skill production-benchmarks.md |
| CTRL K-pop short | ~7,500 credits / 133 video gens | ai-film-pipeline |
