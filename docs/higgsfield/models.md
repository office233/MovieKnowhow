# Higgsfield models (live catalog)

Source: `models_explore(action:'list', limit:100)` on 2026-09-25 — **99 models** (`has_more:false`). Raw JSON: [raw/models_list_p1.json](raw/models_list_p1.json).

> **Credit cost is not exposed by the MCP API** (neither `list`, `get` nor `recommend`). See [my-account.md](my-account.md) / [guides/pricing-and-credits.md](guides/pricing-and-credits.md) for observed/public costs. General rule from parameter descriptions: longer duration, higher resolution, `pro`/`4k`/`std` modes and audio ON cost more; `sound:'off'` / `mode:'fast'` / lite/mini/turbo variants cost less.

Use `models_explore(action:'recommend', query:'<goal + inputs>')` when unsure; `get` returns the same record as `list`.

Media roles legend: `start_image`/`end_image` = keyframes; `image_references` = identity/style/product refs; `video_references` = motion/edit source; `audio_references` = voice/music ref; `image` = single input image.

Counts: image: 35, video: 41, 3d: 17, audio: 6

## VIDEO models

| id | name | provider | duration | res/quality/mode | inputs (media roles) | aspect ratios | unlim | when to choose |
|---|---|---|---|---|---|---|---|---|
| `cinematic_studio_3_0` | Cinema Studio Video 3.0 | Higgsfield |  | resolution: 480p/720p/1080p/4k | end_image, image, start_image | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | Top pick for cinematic hero shots / film scenes; up to 4K, start+end frame control. |
| `cinematic_studio_video` | Cinema Studio Video | Higgsfield |  |  | end_image, image, start_image | 1:1, 4:3, 3:4, 16:9, 9:16 |  | Older Cinema Studio video; solid dramatic compositions. |
| `cinematic_studio_video_v2` | Cinema Studio Video | Higgsfield |  | mode: pro/std | end_image, image, start_image | 1:1, 4:3, 3:4, 16:9, 9:16 |  | Cinematic camera + color with genre control; good for dramatic scenes at lower cost than 3.0. |
| `marketing_studio_video` | Marketing Studio | Higgsfield |  | resolution: 480p/720p/1080p | end_image, image, start_image | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | One-click product ads (TikTok/Reels) — Marketing Studio. |
| `higgsfield_preset` | Higgsfield Preset | Higgsfield |  |  | image | 16:9, 9:16, 1:1 |  | Legacy image-to-video generation for an existing preset ID or accepted preset recommendation. Browse new Viral presets with get_presets and execute them with execute_preset |
| `flux_3_video` | FLUX 3 Video | Black Forest Labs | 5–20s | resolution: 720p/1080p | end_image, image_references, start_image, video_references | auto, 21:9, 2:1, 16:9, 4:3, 1:1, 3:4, 9:16 |  | T2V, multi-frame I2V and continuation with synchronized audio, 5-20s. |
| `flux_3_video_edit` | FLUX 3 Video Edit | Black Forest Labs |  |  | video_references |  |  | Text-prompt edit of a video (first 15s, 1 credit/sec per description). |
| `grok_video_v15` | Grok Video 1.5 | xAI | 2–15s | resolution: 480p/720p/1080p | audio_references, image_references, start_image |  |  | Physics + camera motion, image & audio refs. |
| `video_background_remover` | Video Background Remover |  |  |  | video_references |  |  |  |
| `sync_so` | Sync Lipsync 3 |  |  |  | input_audio, input_video |  |  | Lipsync a video to an audio track (Sync Lipsync 3). |
| `minimax_hailuo` | Minimax Hailuo | Hailuo | [6, 10] | resolution: 512/768/1080 | end_image, start_image |  |  | Natural physics and facial emotion; good for acting close-ups. |
| `minimax_h3` | MiniMax H3 | MiniMax | 4–15s | resolution: 2K | audio_references, end_image, image_references, start_image, video_references | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | 2K multimodal refs with keyframes; batch up to 4. |
| `minimax_h3_max` | MiniMax H3 Max | MiniMax | 5–15s | resolution: 480p/768p | audio_references, end_image, image_references, start_image, video_references | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | Fast multimodal refs/keyframes. |
| `wan2_6` | Wan 2.6 Video | Wan | [5, 10, 15] | quality: 720p/1080p | audio_references, image_references, video_references | 16:9, 9:16, 1:1 |  | Stylized/experimental looks. |
| `seedance1_5` | Seedance 1.5 Pro | Bytedance | [4, 8, 12] | resolution: 480p/720p/1080p | end_image, start_image | auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9 |  | Reliable motion, improved quality |
| `seedance_2_0` | Seedance 2.0 | Bytedance | 4–15s | resolution: 480p/720p/1080p/4k; mode: std/fast | audio_references, end_image, image_references, start_image, video_references | auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9 | ✓ | Reference-driven video: image/video/audio refs, consistent identity, multi-SKU products, 4K; best for character/product consistency across scenes. Supports Elements. |
| `seedance_2_0_mini` | Seedance 2.0 Mini | Bytedance | 4–15s | resolution: 480p/720p | audio_references, end_image, image_references, start_image, video_references | auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9 | ✓ | Budget Seedance 2.0 for drafts (480p/720p). |
| `seedance_2_5` | Seedance 2.5 | Bytedance | 4–30s | mode: t2v/omni_reference/video_edit/video_extension; resolution: 480p/720p/1080p | audio_references, end_image, image_references, start_image, video_references | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | Longest single clip (4-30s), omni-reference, video edit and video extension (forward/backward) — use to extend shots into longer continuous takes. |
| `ad_multiplier` | Ad Multiplier | Higgsfield | 4–30s | mode: t2v/omni_reference/video_edit/video_extension; resolution: 480p/720p/1080p | audio_references, end_image, image_references, start_image, video_references | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | Seedance 2.5-powered edit of one 4-30s ad into many variants (swap people/products/backgrounds). Use via ad-multiplier workflow. |
| `topaz_video` | Topaz |  |  | resolution: 1080p/2160p | video_references | auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |  | Upscale final video to 1080p/2160p. |
| `bytedance_video_upscale` | Bytedance Video Upscale |  |  | resolution: 1080p/2k/4k | video_references |  |  | Upscale video to 1080p/2k/4k. |
| `video_upscale` | Video Upscale |  | 0–Nones |  | input_video |  |  |  |
| `video_deflicker` | Video Deflicker |  | 0–Nones |  | input_video |  |  |  |
| `clipify` | Clipify | Higgsfield |  |  | text only |  |  | Cut a YouTube video into subtitled shorts. |
| `kling2_6` | Kling 2.6 Video | Kling | [5, 10] |  | start_image | 16:9, 9:16, 1:1 |  | Cinematic motion + physics from a start image; legacy. |
| `kling3_0` | Kling v3.0 | Kling | 3–15s | mode: std/pro/4k | end_image, start_image | 16:9, 9:16, 1:1 | ✓ | Multi-shot sequences inside one clip, native audio sync, start/end frames; 3-15s; strong default for storytelling. Supports Elements. |
| `kling3_0_turbo` | Kling 3.0 Turbo | Kling | 3–15s | resolution: 720p/1080p | start_image | 16:9, 9:16, 1:1 |  | Fast/cheap drafts of Kling 3.0 motion. |
| `kling_video_edit` | Kling 3.0 Omni Edit | Kling |  | mode: std/pro/4k | image_references, video_references |  |  | Edit an existing clip with text + reference images (Kling Omni Edit). |
| `happy_horse_video` | Happy Horse Video | Happy Horse | 3–15s | resolution: 720p/1080p | start_image | 16:9, 9:16, 1:1, 4:3, 3:4 |  | Text-to-video and single start-frame animation |
| `hf_mult_motion_control` | Genjutsu | Higgsfield |  | resolution: 480p/720p/1080p | image_references, video_references |  |  | Genjutsu: transfer motion from reference video to subjects in images (dance/action transfer). |
| `hf_mult_replace_object` | Genjutsu | Higgsfield |  | resolution: 480p/720p/1080p | image_references, video_references |  |  | Genjutsu: replace an object in a video with a reference image. |
| `grok_video` | Grok Video | xAI | 1–15s |  | start_image | 16:9, 9:16, 1:1 |  | Text and image-to-video, audio support |
| `gemini_omni` | Gemini Omni Flash | Google | 4–10s | resolution: 720p | image_references, video_references | 16:9, 9:16 | ✓ | Reference-driven video with native audio (720p). |
| `gemini_omni_flash_1_1` | Gemini Omni Flash 1.1 | Google | 3–10s | mode: text-to-video/image-to-video/reference-to-video/edit; resolution: 360p/720p/1080p/4k | end_image, image_references, start_image, video_references | 16:9, 9:16 |  | T2V/I2V/ref-to-video/edit up to 4K, 3-10s. |
| `wan2_7` | Wan 2.7 | Wan | 2–15s | resolution: 720p/1080p | audio_references, end_image, start_image | 16:9, 9:16, 1:1, 4:3, 3:4 | ✓ | Synchronized audio, character-consistent video. |
| `wan3_0` | Wan 3.0 | Wan | -1–30s | resolution: 480p/720p/1080p | audio_references, end_image, image_references, start_image, video_references | auto, 16:9, 9:16, 1:1, 4:3, 3:4 |  | T2V, first/last-frame and multimodal references with native audio, up to 30s; good long takes. |
| `wan3_0_prime` | Wan 3.0 Prime | Wan | -1–30s | resolution: 480p/720p/1080p | audio_references, end_image, image_references, start_image, video_references | auto, 16:9, 9:16, 1:1, 4:3, 3:4 |  | Higher-tier Wan 3.0. |
| `veo3` | Google Veo 3 | Google |  |  | start_image | 16:9, 9:16 |  | Reliable cinematic Veo 3. |
| `veo3_1` | Google Veo 3.1 | Google | [4, 6, 8] | quality: basic/high/ultra | start_image | 16:9, 9:16 |  | Ultra-realistic top-tier cinematic quality, 4/6/8s, native audio/dialogue; premium hero shots. |
| `veo3_1_lite` | Google Veo 3.1 Lite | Google | [4, 6, 8] |  | end_image, start_image | 16:9, 9:16, auto |  | Cheap Veo for batch clips, supports start+end frames. |
| `sam_3_video` | Remove Background |  |  |  | video_references |  |  |  |

## IMAGE models

| id | name | provider | duration | res/quality/mode | inputs (media roles) | aspect ratios | unlim | when to choose |
|---|---|---|---|---|---|---|---|---|
| `soul_2` | Higgsfield Soul 2.0 | Higgsfield |  | quality: 1.5k/2k | image | 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3 | ✓ | Photoreal UGC/fashion/character stills; the only models accepting trained Soul IDs (with soul_cinematic). |
| `soul_cinematic` | Soul Cinema | Higgsfield |  | quality: 1.5k/2k | image | 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9 |  | Cinema-grade stills/concept art with Soul identity. |
| `gpt_image_2` | GPT Image 2 | OpenAI |  | resolution: 1k/2k/4k; quality: low/medium/high | image | 1:1, 4:3, 3:4, 16:9, 21:9, 9:16, 3:2, 2:3 | ✓ | Strong prompt adherence, text, up to 4K; supports Elements. |
| `cinematic_studio_2_5` | Cinema Studio Image 2.5 | Higgsfield |  | resolution: 1k/2k/4k | image | 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 16:9, 9:16, 21:9 |  | Cinematic keyframes/stills (up to 4K) to feed image-to-video; supports Elements. |
| `marketing_studio_image` | Marketing Studio Image | Higgsfield |  | resolution: 1k/2k/4k | image | auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 |  | One-click product image ads. |
| `ms_image` | DTC Ads | Higgsfield |  | resolution: 1k/2k/4k; quality: low/medium/high | image | 1:1, 3:2, 2:3, 16:9, 9:16, 4:3, 3:4, 21:9, 27:16, 16:27, 9:8, 8:9, 4:9, 9:4, auto |  | DTC ad images with brand kit, avatars, products. |
| `image_auto` | Auto | Higgsfield |  |  | image | 1:1, 4:3, 3:4, 16:9, 9:16 |  | Auto-selects the best image model based on prompt intent |
| `autosprite` | AutoSprite Animation | Higgsfield |  |  | image |  |  | Animate a character image into a game-ready sprite sheet PNG with optional atlas and audio metadata |
| `soul_cast` | Soul Cast | Higgsfield |  |  | text only | 16:9 |  | Consistent cinematic character identity (casting). |
| `soul_location` | Soul Location | Higgsfield |  |  | text only | 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9, 9:21 |  | Environments/locations for scene consistency. |
| `soul_v2` | Higgsfield Soul 2.0 | Higgsfield |  | quality: 1.5k/2k | image | 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3 | ✓ | Realistic UGC, fashion editorial and character generation |
| `z_image` | Z Image | Tongyi-MAI |  |  | text only | 1:1, 4:3, 3:4, 16:9, 9:16 |  | Super fast, stylized text-to-image |
| `nano_banana` | Nano Banana | Google |  |  | image_references | 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 | ✓ | Realistic images, budget-friendly |
| `nano_banana_pro` | Nano Banana Pro | Google |  | resolution: 1k/2k/4k | image_references | 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 | ✓ | Best overall image quality, text rendering, diagrams; multi-reference; used for thumbnails/keyframes. Supports Elements. |
| `nano_banana_2_shots` | Nano Banana Pro |  |  |  | image_references | auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 |  |  |
| `nano_banana_2` | Nano Banana 2 | Google |  | resolution: 1k/2k/4k | image_references, mask | auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 | ✓ | Fast high-quality images with masks/edit; supports Elements. |
| `nano_banana_2_lite` | Nano Banana 2 Lite | Google |  | resolution: 1k | image_references, mask | auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 |  | Lite next-gen high-quality images |
| `seedream_v4_5` | Seedream 4.5 | Bytedance |  | quality: basic/high | image_references | 1:1, 4:3, 16:9, 3:2, 21:9, 3:4, 9:16, 2:3 | ✓ | 4K precise edits/transformations; supports Elements. |
| `flux_2` | FLUX.2 | Black Forest Labs |  | resolution: 1k/2k | image_references | 1:1, 4:3, 3:4, 16:9, 9:16 | ✓ | Multiple model variants (pro, flex, max), precise prompt adherence |
| `flux_2_pro_outpaint` | FLUX.2 Pro Outpaint | Black Forest Labs |  |  | image_references |  |  | Expands an image beyond its borders with FLUX.2 [pro]: per-side pixel expansion painted as a coherent, seamless scene extension. Negative values crop that side instead; an all-crop request is served locally for free without the model. |
| `flux_kontext` | Flux Kontext | Black Forest Labs |  |  | image_references | 1:1, 4:3, 3:4, 16:9, 9:16 |  | Context-aware editing and style transfer |
| `kling_omni_image` | Kling O1 Image | Kling |  | resolution: 1k/2k | image_references | 1:1, auto, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 21:9 | ✓ | Versatile photorealistic generation |
| `openai_hazel` | OpenAI Hazel | OpenAI |  | quality: low/medium/high | image_references | 1:1, 3:2, 2:3, auto |  | Powerful editing, best text rendering |
| `gpt_image_2_5` | GPT Image 2.5 | OpenAI |  | quality: low/medium/high/xhigh/max; resolution: 1k/2k/4k | image_references | auto, 1:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16, 21:9, 27:16, 16:27, 9:8, 8:9, 4:5, 5:4 |  | Newest GPT image gen/edit, up to max quality 4K. |
| `seedream_v5_lite` | Seedream 5.0 Lite | Bytedance |  | quality: basic/high | image_references | 1:1, 4:3, 3:4, 16:9, 9:16, 21:9 | ✓ | Instruction-based editing with visual reasoning. |
| `seedream_5_0_flash` | Seedream 5.0 Flash | Bytedance |  | resolution: 1k/1.5k/2k | image_references | auto, 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9 |  | Fast image generation and instruction-based editing, up to 2K |
| `seedream_v5_pro` | Seedream 5.0 Pro | Bytedance |  | resolution: 1k/1.5k/2k | image_references | 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9 | ✓ | Pro-tier visual reasoning, instruction-based editing, up to 2K |
| `grok_image` | Grok Image | xAI |  | resolution: 1k/2k; mode: std/quality | image_references | 1:1, auto, 1:2, 2:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16 |  | Expressive, high-contrast generation and editing |
| `grok_image_2_0` | Grok Image 2.0 | xAI |  | resolution: 1k/2k; quality: low/medium | image_references | 1:1, auto, 1:2, 2:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16 |  | Next-generation image creation and editing from xAI |
| `recraft_v4_1` | Recraft V4.1 | Recraft |  | resolution: 1k/2k | text only | 1:1, 3:4, 4:3, 4:5, 5:4, 3:2, 2:3, 16:9, 9:16 |  | V4.1 image generation with selectable model_type for standard exploration, vector logos/icons, utility product shots/mockups, and utility_vector brand assets |
| `image_background_remover` | Image Background Remover |  |  |  | image_references |  |  |  |
| `outpaint` | Outpaint |  |  |  | image_references | auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9 |  |  |
| `topaz_image` | Topaz |  |  |  | image_references |  |  |  |
| `topaz_image_generative` | Topaz |  |  |  | image_references |  |  |  |
| `bytedance_image_upscale` | Bytedance Image Upscale |  |  | resolution: 2k/4k | image_references |  |  |  |

## AUDIO models

| id | name | provider | duration | res/quality/mode | inputs (media roles) | aspect ratios | unlim | when to choose |
|---|---|---|---|---|---|---|---|---|
| `seed_audio` | Seed Audio 1.0 | ByteDance |  |  | audio_references, image_references |  | ✓ | Text-to-audio with voice/audio reference (voiceover, SFX). |
| `qwen_audio_tts` | Qwen Audio 3.0 TTS Flash | Alibaba Cloud |  |  | text only |  |  | Qwen Audio 3.0 TTS Flash with expressive instructions and a selectable system preset or cloned reference-element voice. |
| `sonilo_music` | Sonilo Music | FAL |  |  | text only |  |  | Text-to-music generation with controllable duration. Game pipeline only. |
| `mirelo_text_to_audio` | Mirelo Text to Audio | FAL |  |  | text only |  | ✓ | Text-to-audio sound effect generation with controllable duration. Game pipeline only. |
| `inworld_text_to_speech` | Inworld Text to Speech | FAL |  |  | text only |  | ✓ | Text-to-speech audio generation. Game pipeline only. |
| `text2speech_v2` | Text to Speech V2 | Higgsfield |  |  | text only |  | ✓ | TTS with ElevenLabs/MiniMax/Seed engines — voiceovers; needs voice_id+voice_type from list_voices. |

## 3D models

| id | name | provider | duration | res/quality/mode | inputs (media roles) | aspect ratios | unlim | when to choose |
|---|---|---|---|---|---|---|---|---|
| `sam_3_3d` | SAM 3 3D Objects | Meta |  |  | image |  |  | Lift a single image of an object into a textured 3D GLB mesh |
| `image_to_3d` | Image to 3D | Meshy |  |  | image |  |  | Single image to 3D GLB mesh with optional texturing, PBR, rigging, and animation |
| `multi_image_to_3d` | Multi-Image to 3D | Meshy |  |  | image |  |  | 1-4 images of the same subject to 3D GLB mesh. More views = better geometric accuracy. Supports texturing, rigging, animation |
| `3d_rigging` | 3D Rigging | Meshy |  |  | text only |  |  | Rig an existing 3D model URL with a skeleton, optionally applying a pre-canned animation |
| `meshy_image_to_3d` | Image to 3D | Meshy |  |  | image |  |  | Single image to 3D GLB mesh with optional texturing, PBR, rigging, and animation |
| `meshy_multi_image_to_3d` | Multi-Image to 3D | Meshy |  |  | image |  |  | 1-4 images of the same subject to 3D GLB mesh. More views = better geometric accuracy. Supports texturing, rigging, animation |
| `meshy_rigging` | 3D Rigging | Meshy |  |  | text only |  |  | Rig an existing 3D model URL with a skeleton, optionally applying a pre-canned animation |
| `sam_3_3d_body` | 3D Body | Meta |  |  | image_references |  |  | Reconstruct human body shape and pose as a GLB model from one image |
| `tripo_3d` | Text to 3D |  |  |  | text only |  |  |  |
| `tripo_h3_1_image_to_3d` | Tripo H3.1 Image to 3D | Tripo |  |  | image_references |  |  | Generate a Tripo H3.1 GLB model from one image |
| `tripo_h3_1_multiview_to_3d` | Tripo H3.1 Multiview to 3D | Tripo |  |  | image_references |  |  | Generate a Tripo H3.1 GLB model from 2 to 4 ordered views |
| `hunyuan3d_v3_image_to_3d` | Hunyuan3D v3 Image to 3D | Tencent |  |  | image_references |  |  | Generate a Hunyuan3D v3 GLB model from one image or multiple views |
| `meshy_v6_text_to_3d` | Meshy 6 Text to 3D | Meshy |  | mode: preview/full | text only |  |  | Generate a Meshy 6 GLB model from a text prompt |
| `hunyuan3d_v3_1_text_to_3d` | Hunyuan 3D v3.1 Text to 3D | Tencent |  | mode: std/pro | text only |  |  | Generate a Hunyuan 3D v3.1 GLB model from a text prompt |
| `meshy_v5_remesh` | Meshy 5 Remesh | Meshy |  |  | text only |  |  | Remesh an existing 3D model and return a GLB model |
| `meshy_v5_retexture` | Meshy 5 Retexture | Meshy |  |  | text only |  |  | Retexture an existing 3D model using text or an image style reference |
| `meshy_v7_image_to_3d` | Meshy 7 Image to 3D | Meshy |  |  | image_references |  |  | Meshy 7 image-to-3D GLB with optional texturing, PBR, rigging, and animation |

## Full parameter reference

### `soul_2` — Higgsfield Soul 2.0 (image, Higgsfield)

Realistic UGC, fashion editorial and character generation

**When to choose:** Photoreal UGC/fashion/character stills; the only models accepting trained Soul IDs (with soul_cinematic).

- `quality` (string) options=['1.5k', '2k'] default=2k — Output quality tier shown as 1.5k or 2k
- `soul_id` (string) — Soul-ID for personalized generation. Get one from soul_list.
- media `medias`: type=image roles=['image'] max=1 — roles: image x1
- aspect_ratios: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3
- tags: ugc, fashion, editorial, realistic, character, character-generation, soul, portrait, v2, unlim

### `soul_cinematic` — Soul Cinema (image, Higgsfield)

Cinema-grade stills and concept art

**When to choose:** Cinema-grade stills/concept art with Soul identity.

- `quality` (string) options=['1.5k', '2k'] default=2k — Output quality tier shown as 1.5k or 2k
- `soul_id` (string) — Soul Cinema Character ID for personalized cinematic generation.
- media `medias`: type=image roles=['image'] max=1
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9
- tags: cinematic, dramatic, concept-art, lighting, soul, film

### `gpt_image_2` — GPT Image 2 (image, OpenAI)

Next-gen GPT Image model with 1k/2k/4k resolution and low/medium/high quality tiers

**When to choose:** Strong prompt adherence, text, up to 4K; supports Elements.

- `resolution` (string) options=['1k', '2k', '4k'] default=1k — Output resolution
- `quality` (string) options=['low', 'medium', 'high'] default=low — Image quality
- media `medias`: type=image roles=['image']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 21:9, 9:16, 3:2, 2:3
- tags: text-rendering, editing, typography, photorealistic, 4k, high-resolution, unlim

### `cinematic_studio_2_5` — Cinema Studio Image 2.5 (image, Higgsfield)

Cinematic stills, up to 4K resolution

**When to choose:** Cinematic keyframes/stills (up to 4K) to feed image-to-video; supports Elements.

- `resolution` (string) options=['1k', '2k', '4k'] default=1k — Output resolution
- media `medias`: type=image roles=['image']
- aspect_ratios: 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 16:9, 9:16, 21:9
- tags: cinematic, 4k, high-resolution, dramatic, film

### `marketing_studio_image` — Marketing Studio Image (image, Higgsfield)

One-click product image ads for social campaigns

**When to choose:** One-click product image ads.

- `resolution` (string) options=['1k', '2k', '4k'] default=1k — Output resolution
- media `medias`: type=image roles=['image']
- aspect_ratios: auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9
- tags: marketing, ads, product, social-media, creative

### `ms_image` — DTC Ads (image, Higgsfield)

DTC ad image generation with brand-kit-aware prompts, avatars, products, and curated ad formats

**When to choose:** DTC ad images with brand kit, avatars, products.

- `style_id` (string, required) — REQUIRED. Marketing Studio image style id. There is no default — calling `generate_image` with `model='ms_image'` without `style_id` returns an error. REQUIRED WORKFLOW: BEFORE calling `generate_image` with `model='ms_image'`, you MUST first call `show_marketing_studio` with `type='image_style'` and let the user pick a style. Style is the dominant creative driver for ms_image output, so silently defaulting would produce a result the user didn't ask for. Only proceed once the user has named a specific style id from the listing.
- `brand_kit_id` (string) — Marketing Studio brand kit id. List/create via `show_marketing_studio` with `type='brand_kit'`. When set, the chosen kit's logo, images, colours, fonts, and tone are folded into the prompt. The kit must be `status: 'completed'`.
- `resolution` (string) options=['1k', '2k', '4k'] default=1k — Output resolution.
- `quality` (string) options=['low', 'medium', 'high'] default=low — Output quality. Affects cost.
- `batch_size` (number) range=1–20 default=1 — Number of images generated per job (1-20). Cost scales linearly. Distinct from `count`, which controls how many jobs are submitted in parallel.
- `product_ids` (string_array) — Up to 4 Marketing Studio product ids. List products via `show_marketing_studio` with `type='product'`. Server pre-resolves their media inputs and runs IP check before queueing.
- `folder_id` (string) — Optional folder placement.
- media `medias`: type=image roles=['image'] max=14
- aspect_ratios: 1:1, 3:2, 2:3, 16:9, 9:16, 4:3, 3:4, 21:9, 27:16, 16:27, 9:8, 8:9, 4:9, 9:4, auto
- tags: marketing, ads, product, brand-kit, ad-format, avatar, dtc

### `image_auto` — Auto (image, Higgsfield)

Auto-selects the best image model based on prompt intent

- media `medias`: type=image roles=['image']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- tags: auto, smart, routing, editing, generation

### `autosprite` — AutoSprite Animation (image, Higgsfield)

Animate a character image into a game-ready sprite sheet PNG with optional atlas and audio metadata

- `kind` (string) options=['idle', 'walk', 'run', 'attack', 'jump', 'custom', 'iso_idle_up', 'iso_idle_northeast', 'iso_idle_right', 'iso_idle_southeast', 'iso_idle_down', 'iso_walk_up', 'iso_walk_northeast', 'iso_walk_right', 'iso_walk_southeast', 'iso_walk_down', 'iso_run_up', 'iso_run_northeast', 'iso_run_right', 'iso_run_southeast', 'iso_run_down', 'iso_jump_up', 'iso_jump_northeast', 'iso_jump_right', 'iso_jump_southeast', 'iso_jump_down'] default=idle — Animation preset. Use 'custom' with prompt and name for a custom animation.
- `name` (string) — Custom animation name. Required only when kind is 'custom'.
- `video_tier` (string) options=['turbo', 'pro', 'max'] default=turbo — Generation quality/cost tier. 'turbo' is fastest and cheapest; 'max' is highest cost.
- `frame_count` (number) range=2–64 default=25 — Number of frames in the sprite sheet.
- `frame_size` (number) range=32–512 default=256 — Frame width/height in pixels.
- `remove_bg` (string) options=['default', 'ultra'] default=default — Background removal mode.
- `with_sound` (bool) default=False — Generate sound effects when available. Adds cost.
- `is_humanoid` (bool) default=True — Whether the source character is humanoid.
- media `medias`: type=image roles=['image'] max=1 — Single character image to animate into a sprite sheet (role: image).
- tags: sprite, spritesheet, animation, game, character, pixel, atlas, image-to-animation

### `soul_cast` — Soul Cast (image, Higgsfield)

Consistent cinematic character identity

**When to choose:** Consistent cinematic character identity (casting).

- `budget` (number) default=50 — Generation budget (10-500)
- aspect_ratios: 16:9
- tags: character, identity, consistent, cinematic, persona

### `soul_location` — Soul Location (image, Higgsfield)

Environment and location generation

**When to choose:** Environments/locations for scene consistency.

- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9, 9:21
- tags: environment, location, background, scene, landscape

### `cinematic_studio_3_0` — Cinema Studio Video 3.0 (video, Higgsfield)

Most advanced cinema-grade model

**When to choose:** Top pick for cinematic hero shots / film scenes; up to 4K, start+end frame control.

- `resolution` (string) options=['480p', '720p', '1080p', '4k'] default=720p — Output resolution (higher = more credits)
- `genre` (string) options=['auto', 'action', 'horror', 'comedy', 'noir', 'drama', 'epic'] default=auto — Cinematic genre hint
- `generate_audio` (bool) default=False — Generate audio for the video.
- media `medias`: type=image roles=['image', 'start_image', 'end_image']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: cinematic, premium, advanced, sota, film, best-quality

### `cinematic_studio_video` — Cinema Studio Video (video, Higgsfield)

Solid cinematic, dramatic compositions

**When to choose:** Older Cinema Studio video; solid dramatic compositions.

- `slow_motion` (bool) default=False — Enable slow motion effect
- `sound` (bool) default=True — Enable sound generation
- media `medias`: type=image roles=['image', 'start_image', 'end_image']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- tags: cinematic, dramatic, compositions, sound, slow-motion

### `cinematic_studio_video_v2` — Cinema Studio Video (video, Higgsfield)

Refined cinematic camera and color, genre control

**When to choose:** Cinematic camera + color with genre control; good for dramatic scenes at lower cost than 3.0.

- `genre` (string) options=['auto', 'action', 'horror', 'comedy', 'western', 'suspense', 'intimate', 'spectacle'] default=auto — Video genre/style
- `mode` (string) options=['pro', 'std'] default=std — Quality mode: pro or standard
- `sound` (string) options=['on', 'off'] default=on — Generate audio. Use 'off' for a silent video.
- `speedramp` (string) options=['auto', 'custom', 'linear', 'slowmo', 'speedup', 'impact'] default=auto — Speed-ramp time effect (slowmo, speedup, etc.).
- `multi_shots` (bool) default=False — Split the video into multiple shots driven by multi_prompt.
- `multi_shot_mode` (string) options=['auto', 'custom'] default=custom — 'auto' lets the model plan shots; 'custom' uses the given multi_prompt.
- `cfg_scale` (number) range=0–1 default=0.5 — Prompt adherence strength (0-1).
- `preset_id` (string) — Existing legacy preset ID. Do not pass get_presets catalog IDs here.
- media `medias`: type=image roles=['image', 'start_image', 'end_image']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- tags: cinematic, camera, color, genre, refined

### `marketing_studio_video` — Marketing Studio (video, Higgsfield)

One-click product ads, TikTok/Reels ready

**When to choose:** One-click product ads (TikTok/Reels) — Marketing Studio.

- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Video resolution
- `generate_audio` (bool) default=True — Generate audio for the video
- `mode` (string) — Marketing video mode slug — the creative format/style (get the options from `marketing_list_video_presets` or `show_marketing_studio` with `action='presets'`). Choose it deliberately rather than letting it default; pass the chosen format's `presets[].slug`. Omit only when the user explicitly wants a generic video.
- `folder_id` (string) — Marketing project / folder id
- `width` (number) — Optional explicit output width
- `height` (number) — Optional explicit output height
- `avatar_ids` (string_array) — Avatar ids as a plain UUID array (like `product_ids`) — the server resolves preset vs custom for you, so you don't pass { id, type }. Preferred for a single avatar: `avatar_ids: ['<uuid>']`. Max 1. Pass at most one of `avatars` / `avatar_ids` (if both are given, `avatars` is ignored in favor of `avatar_ids`).
- `product_ids` (string_array) — Product ids. Field name is `product_ids` (plural array of UUID strings). Do NOT use `product_id` (singular) — the server only accepts `product_ids`. For a single product pass `product_ids: ['<uuid>']`.
- `assets` (string_array) — Optional backend asset ids
- `hook_id` (string) — Optional Marketing Studio Setup hook id (the 'what' — attention-grabbing mechanic, e.g. 'Object flies into frame'). Get available ids from `show_marketing_studio` with `type='hook'`. Hooks/settings are supported only for these presets: UGC, Tutorial, Unboxing, Product Review, UGC Virtual Try On. If the user asks for hooks but does not provide `hook_id`, list hooks first via `show_marketing_studio(action='list', type='hook')` and ask/select from that list before calling generate_video. INDEPENDENT of `setting_id` — you can pass `hook_id` alone, `setting_id` alone, both, or neither. MUTUALLY EXCLUSIVE with `ad_reference_id` — hook/setting compose a video from explicit building blocks, while ad_reference recreates an existing video's scenario. Pick one approach, never both.
- `setting_id` (string) — Optional Marketing Studio Setup setting id (the 'where' — location/vibe, e.g. 'Sunlit kitchen, morning light'). Get available ids from `show_marketing_studio` with `type='setting'`. Hooks/settings are supported only for these presets: UGC, Tutorial, Unboxing, Product Review, UGC Virtual Try On. INDEPENDENT of `hook_id` — you can pass `setting_id` alone, `hook_id` alone, both, or neither. MUTUALLY EXCLUSIVE with `ad_reference_id` — see `hook_id` for explanation.
- `ad_reference_id` (string) — Optional ad reference id. When set, the new marketing video follows the analyzed scenario of an existing reference video (scene composition, pacing, hook, narration) instead of inventing a structure from the prompt alone. Use this when the user wants to 'recreate this ad', 'make a video like this', or 'copy the style of this clip'. Create/list/edit ad references via `show_marketing_studio` with `type='ad_reference'`. AVATAR/PRODUCT ARE NOT AUTO-PULLED: if the ad reference was created with a linked avatar and/or product, those links are stored on the ad_reference for organizational/reference purposes only — they are NOT applied at generation time. The backend executor only reads avatar/product from explicit `avatars` / `product_ids` on this call. Rule: if the user wants the new video to feature the same avatar/product that was linked to the ad_reference (or a different one they specify), you MUST pass them explicitly here as `avatars: [{id, type: 'custom'|'preset'}]` and `product_ids: ['<uuid>']`. Example: ad_reference X was created with Sofia (preset) + On Cloud shoes linked, and the user says 'generate the marketing video' — you still pass `avatars: [{id: <sofia-id>, type: 'preset'}]` and `product_ids: ['<on-cloud-id>']` along with `ad_reference_id`. If the user asks for a different avatar/product than what was linked, just pass the new ones — the ad_reference still drives the scenario. MUTUALLY EXCLUSIVE with `hook_id` and `setting_id` — ad_reference replaces the explicit hook/setting composition with a reference-driven scenario. Pick one approach, never both.
- media `avatars`: type=image roles=None
- media `medias`: type=image roles=['image', 'start_image', 'end_image']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: marketing, ugc, ads, tiktok, reels, product, social-media

### `higgsfield_preset` — Higgsfield Preset (video, Higgsfield)

Legacy image-to-video generation for an existing preset ID or accepted preset recommendation. Browse new Viral presets with get_presets and execute them with execute_preset

- `preset_id` (string, required) — Existing legacy preset ID from a prior selection or recommendation. Do not pass get_presets catalog IDs here.
- media `medias`: type=image roles=['image'] max=1
- aspect_ratios: 16:9, 9:16, 1:1
- tags: preset, image-to-video, viral, template

### `sam_3_3d` — SAM 3 3D Objects (3d, Meta)

Lift a single image of an object into a textured 3D GLB mesh

- `detection_threshold` (number) range=0–1 — Detection sensitivity 0.0-1.0. Higher = stricter object detection.
- `export_textured_glb` (bool) default=True — Whether to bake textures into the output GLB. Set false for white/untextured mesh.
- `seed` (number) — Random seed for reproducible output.
- media `medias`: type=image roles=['image'] max=1 — Single image of the object to lift into 3D (role: image).
- tags: 3d, mesh, glb, image-to-3d, object, single-image, sam

### `image_to_3d` — Image to 3D (3d, Meshy)

Single image to 3D GLB mesh with optional texturing, PBR, rigging, and animation

- `should_texture` (bool) default=False — Apply surface textures to the mesh. Costs more credits but produces a textured GLB.
- `enable_rigging` (bool) default=False — Auto-rig the resulting mesh with a humanoid skeleton. Works best on humanoid/character subjects; non-bipeds (animals, objects) may rig poorly. Adds cost.
- `enable_animation` (bool) default=False — Apply a pre-canned animation clip to the rig. Requires enable_rigging=true. Pick the clip via animation_action_id. Adds cost.
- `should_remesh` (bool) — Re-topologize the mesh (default true). When false, returns the raw triangular mesh and topology/target_polycount are ignored.
- `texture_prompt` (string) — Text prompt to guide texturing. Requires should_texture=true.
- `texture_image_url` (string) — Reference image URL for texture style transfer. Requires should_texture=true.
- `target_polycount` (number) range=100–300000 — Target triangle count, 100-300000 (default 30000). Higher = more detail, larger file.
- `topology` (string) options=['quad', 'triangle'] — Mesh topology: 'quad' for smooth/editable surfaces, 'triangle' (default) for detailed geometry.
- `symmetry_mode` (string) options=['off', 'auto', 'on'] — Symmetry during generation: 'auto' (default) detects it, 'on' enforces it, 'off' disables it.
- `enable_pbr` (bool) — Generate PBR material maps (metallic, roughness, normal) in addition to base color. Requires should_texture=true.
- `pose_mode` (string) options=['a-pose', 't-pose'] — Generate the character in a canonical rig-friendly pose ('a-pose' or 't-pose'). Omit for no specific pose. Recommended with enable_rigging for cleaner skeletons.
- `rigging_height_meters` (number) range=0–None — Approximate real-world character height in meters (default 1.7). Only used when enable_rigging=true.
- `animation_action_id` (number) range=0–696 — Animation clip id (integer, 0-696) for the rig. Required when enable_animation=true. Common picks - idle: 0; walk: 30 (Casual_Walk); run: 16 (RunFast); jump: 466 (Regular_Jump); wave: 28 (Big_Wave_Hello); dance: 64 (All_Night_Dance). For anything else, call the animation_actions tool to search the full 678-action library by name or category.
- `enable_safety_checker` (bool) — Run NSFW safety check on output.
- `seed` (number) — Random seed for reproducibility.
- media `medias`: type=image roles=['image'] max=1 — Single image to convert into a 3D mesh (role: image).
- tags: 3d, mesh, glb, image-to-3d, textured, pbr, rigging, animation

### `multi_image_to_3d` — Multi-Image to 3D (3d, Meshy)

1-4 images of the same subject to 3D GLB mesh. More views = better geometric accuracy. Supports texturing, rigging, animation

- `should_texture` (bool) default=False — Apply surface textures to the mesh. Costs more credits but produces a textured GLB.
- `enable_rigging` (bool) default=False — Auto-rig the resulting mesh with a humanoid skeleton. Works best on humanoid/character subjects; non-bipeds (animals, objects) may rig poorly. Adds cost.
- `enable_animation` (bool) default=False — Apply a pre-canned animation clip to the rig. Requires enable_rigging=true. Pick the clip via animation_action_id. Adds cost.
- `should_remesh` (bool) — Re-topologize the mesh (default true). When false, returns the raw triangular mesh and topology/target_polycount are ignored.
- `texture_prompt` (string) — Text prompt to guide texturing. Requires should_texture=true.
- `texture_image_url` (string) — Reference image URL for texture style transfer. Requires should_texture=true.
- `target_polycount` (number) range=100–300000 — Target triangle count, 100-300000 (default 30000). Higher = more detail, larger file.
- `topology` (string) options=['quad', 'triangle'] — Mesh topology: 'quad' for smooth/editable surfaces, 'triangle' (default) for detailed geometry.
- `symmetry_mode` (string) options=['off', 'auto', 'on'] — Symmetry during generation: 'auto' (default) detects it, 'on' enforces it, 'off' disables it.
- `enable_pbr` (bool) — Generate PBR material maps (metallic, roughness, normal) in addition to base color. Requires should_texture=true.
- `pose_mode` (string) options=['a-pose', 't-pose'] — Generate the character in a canonical rig-friendly pose ('a-pose' or 't-pose'). Omit for no specific pose. Recommended with enable_rigging for cleaner skeletons.
- `rigging_height_meters` (number) range=0–None — Approximate real-world character height in meters (default 1.7). Only used when enable_rigging=true.
- `animation_action_id` (number) range=0–696 — Animation clip id (integer, 0-696) for the rig. Required when enable_animation=true. Common picks - idle: 0; walk: 30 (Casual_Walk); run: 16 (RunFast); jump: 466 (Regular_Jump); wave: 28 (Big_Wave_Hello); dance: 64 (All_Night_Dance). For anything else, call the animation_actions tool to search the full 678-action library by name or category.
- `enable_safety_checker` (bool) — Run NSFW safety check on output.
- `seed` (number) — Random seed for reproducibility.
- media `medias`: type=image roles=['image'] max=4 — 1-4 images of the same subject from different angles (role: image). More images improve geometric accuracy.
- tags: 3d, mesh, glb, multi-image-to-3d, multi-view, textured, pbr, rigging, animation

### `3d_rigging` — 3D Rigging (3d, Meshy)

Rig an existing 3D model URL with a skeleton, optionally applying a pre-canned animation

- `model_url` (string, required) — Public HTTPS URL without embedded credentials of an existing 3D model (GLB) to rig. Pass the output URL of a previous 3D generation (e.g. from image_to_3d, multi_image_to_3d, sam_3_3d) or a publicly-hosted GLB.
- `height_meters` (number) range=0–None — Approximate real-world height of the rigged figure in meters (default 1.7). Used to scale the skeleton.
- `enable_animation` (bool) default=False — Apply a pre-canned animation clip to the rigged model. Pick the clip via animation_action_id.
- `animation_action_id` (number) range=0–696 — Animation clip id (integer, 0-696) for the rig. Required when enable_animation=true. Common picks - idle: 0; walk: 30 (Casual_Walk); run: 16 (RunFast); jump: 466 (Regular_Jump); wave: 28 (Big_Wave_Hello); dance: 64 (All_Night_Dance). For anything else, call the animation_actions tool to search the full 678-action library by name or category.
- `enable_safety_checker` (bool) — Run NSFW safety check on output.
- tags: 3d, mesh, glb, rigging, skeleton, animation, model-to-rig

### `soul_v2` — Higgsfield Soul 2.0 (image, Higgsfield)

Realistic UGC, fashion editorial and character generation

- `quality` (string) options=['1.5k', '2k'] default=2k — Output quality tier shown as 1.5k or 2k
- `soul_id` (string) — Soul-ID for personalized generation. Get one from soul_list.
- media `medias`: type=image roles=['image'] max=1 — roles: image x1
- aspect_ratios: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3
- tags: ugc, fashion, editorial, realistic, character, character-generation, soul, portrait, v2, unlim

### `meshy_image_to_3d` — Image to 3D (3d, Meshy)

Single image to 3D GLB mesh with optional texturing, PBR, rigging, and animation

- `should_texture` (bool) default=False — Apply surface textures to the mesh. Costs more credits but produces a textured GLB.
- `enable_rigging` (bool) default=False — Auto-rig the resulting mesh with a humanoid skeleton. Works best on humanoid/character subjects; non-bipeds (animals, objects) may rig poorly. Adds cost.
- `enable_animation` (bool) default=False — Apply a pre-canned animation clip to the rig. Requires enable_rigging=true. Pick the clip via animation_action_id. Adds cost.
- `should_remesh` (bool) — Re-topologize the mesh (default true). When false, returns the raw triangular mesh and topology/target_polycount are ignored.
- `texture_prompt` (string) — Text prompt to guide texturing. Requires should_texture=true.
- `texture_image_url` (string) — Reference image URL for texture style transfer. Requires should_texture=true.
- `target_polycount` (number) range=100–300000 — Target triangle count, 100-300000 (default 30000). Higher = more detail, larger file.
- `topology` (string) options=['quad', 'triangle'] — Mesh topology: 'quad' for smooth/editable surfaces, 'triangle' (default) for detailed geometry.
- `symmetry_mode` (string) options=['off', 'auto', 'on'] — Symmetry during generation: 'auto' (default) detects it, 'on' enforces it, 'off' disables it.
- `enable_pbr` (bool) — Generate PBR material maps (metallic, roughness, normal) in addition to base color. Requires should_texture=true.
- `pose_mode` (string) options=['a-pose', 't-pose'] — Generate the character in a canonical rig-friendly pose ('a-pose' or 't-pose'). Omit for no specific pose. Recommended with enable_rigging for cleaner skeletons.
- `rigging_height_meters` (number) range=0–None — Approximate real-world character height in meters (default 1.7). Only used when enable_rigging=true.
- `animation_action_id` (number) range=0–696 — Animation clip id (integer, 0-696) for the rig. Required when enable_animation=true. Common picks - idle: 0; walk: 30 (Casual_Walk); run: 16 (RunFast); jump: 466 (Regular_Jump); wave: 28 (Big_Wave_Hello); dance: 64 (All_Night_Dance). For anything else, call the animation_actions tool to search the full 678-action library by name or category.
- `enable_safety_checker` (bool) — Run NSFW safety check on output.
- `seed` (number) — Random seed for reproducibility.
- media `medias`: type=image roles=['image'] max=1 — Single image to convert into a 3D mesh (role: image).
- tags: 3d, mesh, glb, image-to-3d, textured, pbr, rigging, animation

### `meshy_multi_image_to_3d` — Multi-Image to 3D (3d, Meshy)

1-4 images of the same subject to 3D GLB mesh. More views = better geometric accuracy. Supports texturing, rigging, animation

- `should_texture` (bool) default=False — Apply surface textures to the mesh. Costs more credits but produces a textured GLB.
- `enable_rigging` (bool) default=False — Auto-rig the resulting mesh with a humanoid skeleton. Works best on humanoid/character subjects; non-bipeds (animals, objects) may rig poorly. Adds cost.
- `enable_animation` (bool) default=False — Apply a pre-canned animation clip to the rig. Requires enable_rigging=true. Pick the clip via animation_action_id. Adds cost.
- `should_remesh` (bool) — Re-topologize the mesh (default true). When false, returns the raw triangular mesh and topology/target_polycount are ignored.
- `texture_prompt` (string) — Text prompt to guide texturing. Requires should_texture=true.
- `texture_image_url` (string) — Reference image URL for texture style transfer. Requires should_texture=true.
- `target_polycount` (number) range=100–300000 — Target triangle count, 100-300000 (default 30000). Higher = more detail, larger file.
- `topology` (string) options=['quad', 'triangle'] — Mesh topology: 'quad' for smooth/editable surfaces, 'triangle' (default) for detailed geometry.
- `symmetry_mode` (string) options=['off', 'auto', 'on'] — Symmetry during generation: 'auto' (default) detects it, 'on' enforces it, 'off' disables it.
- `enable_pbr` (bool) — Generate PBR material maps (metallic, roughness, normal) in addition to base color. Requires should_texture=true.
- `pose_mode` (string) options=['a-pose', 't-pose'] — Generate the character in a canonical rig-friendly pose ('a-pose' or 't-pose'). Omit for no specific pose. Recommended with enable_rigging for cleaner skeletons.
- `rigging_height_meters` (number) range=0–None — Approximate real-world character height in meters (default 1.7). Only used when enable_rigging=true.
- `animation_action_id` (number) range=0–696 — Animation clip id (integer, 0-696) for the rig. Required when enable_animation=true. Common picks - idle: 0; walk: 30 (Casual_Walk); run: 16 (RunFast); jump: 466 (Regular_Jump); wave: 28 (Big_Wave_Hello); dance: 64 (All_Night_Dance). For anything else, call the animation_actions tool to search the full 678-action library by name or category.
- `enable_safety_checker` (bool) — Run NSFW safety check on output.
- `seed` (number) — Random seed for reproducibility.
- media `medias`: type=image roles=['image'] max=4 — 1-4 images of the same subject from different angles (role: image). More images improve geometric accuracy.
- tags: 3d, mesh, glb, multi-image-to-3d, multi-view, textured, pbr, rigging, animation

### `meshy_rigging` — 3D Rigging (3d, Meshy)

Rig an existing 3D model URL with a skeleton, optionally applying a pre-canned animation

- `model_url` (string, required) — Public HTTPS URL without embedded credentials of an existing 3D model (GLB) to rig. Pass the output URL of a previous 3D generation (e.g. from image_to_3d, multi_image_to_3d, sam_3_3d) or a publicly-hosted GLB.
- `height_meters` (number) range=0–None — Approximate real-world height of the rigged figure in meters (default 1.7). Used to scale the skeleton.
- `enable_animation` (bool) default=False — Apply a pre-canned animation clip to the rigged model. Pick the clip via animation_action_id.
- `animation_action_id` (number) range=0–696 — Animation clip id (integer, 0-696) for the rig. Required when enable_animation=true. Common picks - idle: 0; walk: 30 (Casual_Walk); run: 16 (RunFast); jump: 466 (Regular_Jump); wave: 28 (Big_Wave_Hello); dance: 64 (All_Night_Dance). For anything else, call the animation_actions tool to search the full 678-action library by name or category.
- `enable_safety_checker` (bool) — Run NSFW safety check on output.
- tags: 3d, mesh, glb, rigging, skeleton, animation, model-to-rig

### `z_image` — Z Image (image, Tongyi-MAI)

Super fast, stylized text-to-image

- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- tags: fast, budget, stylized, quick

### `nano_banana` — Nano Banana (image, Google)

Realistic images, budget-friendly

- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9
- tags: budget, realistic, affordable, text-to-image, image-to-image, unlim

### `nano_banana_pro` — Nano Banana Pro (image, Google)

Ultimate quality, text and diagrams

**When to choose:** Best overall image quality, text rendering, diagrams; multi-reference; used for thumbnails/keyframes. Supports Elements.

- `resolution` (string) options=['1k', '2k', '4k'] default=2k — Output resolution.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9
- tags: quality, text-rendering, diagrams, photorealistic, versatile, 4k, text-to-image, image-to-image, unlim

### `nano_banana_2_shots` — Nano Banana Pro (image, )

- media `medias`: type=image roles=['image_references']
- aspect_ratios: auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9

### `nano_banana_2` — Nano Banana 2 (image, Google)

Fast, next-gen high-quality images

**When to choose:** Fast high-quality images with masks/edit; supports Elements.

- `resolution` (string) options=['1k', '2k', '4k'] default=1k — Output resolution.
- `is_inpaint` (bool) default=False — Whether to restrict the edit to the supplied mask.
- media `medias`: type=image roles=['image_references', 'mask']
- aspect_ratios: auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9
- tags: fast, high-quality, photorealistic, versatile, 4k, text-to-image, image-to-image, unlim

### `nano_banana_2_lite` — Nano Banana 2 Lite (image, Google)

Lite next-gen high-quality images

- `resolution` (string) options=['1k'] default=1k — Output resolution.
- `thinking` (string) options=['MINIMAL', 'HIGH'] default=HIGH — Depth of internal reasoning before generation.
- `is_inpaint` (bool) default=False — Whether to restrict the edit to the supplied mask.
- media `medias`: type=image roles=['image_references', 'mask']
- aspect_ratios: auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9
- tags: fast, high-quality, photorealistic, versatile, text-to-image, image-to-image

### `seedream_v4_5` — Seedream 4.5 (image, Bytedance)

4K output, precise control, transformations

**When to choose:** 4K precise edits/transformations; supports Elements.

- `quality` (string) options=['basic', 'high'] default=basic — Output quality tier. 'basic' renders up to 4K; 'high' renders up to ~6K.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 4:3, 16:9, 3:2, 21:9, 3:4, 9:16, 2:3
- tags: 4k, high-resolution, precise, transformations, editing, control, unlim

### `flux_2` — FLUX.2 (image, Black Forest Labs)

Multiple model variants (pro, flex, max), precise prompt adherence

- `resolution` (string) options=['1k', '2k'] default=1k — Output resolution.
- `variant` (string) options=['pro', 'flex', 'max'] default=pro — FLUX.2 model variant.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- tags: precise, prompt-adherence, creative, versatile, pro, quality, unlim

### `flux_2_pro_outpaint` — FLUX.2 Pro Outpaint (image, Black Forest Labs)

Expands an image beyond its borders with FLUX.2 [pro]: per-side pixel expansion painted as a coherent, seamless scene extension. Negative values crop that side instead; an all-crop request is served locally for free without the model.

- `expand_top` (number) range=-8192–2048 default=0 — Pixels to expand at the top of the image; a negative value crops the top by that many pixels instead.
- `expand_bottom` (number) range=-8192–2048 default=0 — Pixels to expand at the bottom of the image; a negative value crops the bottom by that many pixels instead.
- `expand_left` (number) range=-8192–2048 default=0 — Pixels to expand on the left of the image; a negative value crops the left by that many pixels instead.
- `expand_right` (number) range=-8192–2048 default=0 — Pixels to expand on the right of the image; a negative value crops the right by that many pixels instead.
- `folder_id` (string) — Optional folder placement for the generated image.
- media `medias`: type=image roles=['image_references']
- tags: outpaint, image-edit, photorealism, quality

### `flux_3_video` — FLUX 3 Video (video, Black Forest Labs)

Text-to-video, multi-frame image-to-video, and video continuation with synchronized audio

**When to choose:** T2V, multi-frame I2V and continuation with synchronized audio, 5-20s.

- `duration` (number) range=5–20 default=5 — Duration in whole seconds (5-20).
- `resolution` (string) options=['720p', '1080p'] default=720p — Output resolution: 720p or 1080p.
- `generate_audio` (bool) default=True — Generate synchronized speech, effects, and ambience.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references']
- aspect_ratios: auto, 21:9, 2:1, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: text-to-video, image-to-video, video-continuation, audio, start-frame, end-frame, storyboard, 1080p

### `flux_3_video_edit` — FLUX 3 Video Edit (video, Black Forest Labs)

Edit a video with a text prompt. Uses the first 15 seconds at most; costs 1 credit per second of the processed clip.

**When to choose:** Text-prompt edit of a video (first 15s, 1 credit/sec per description).

- `folder_id` (string) — Optional folder to place the generated output in.
- media `medias`: type=image roles=['video_references']
- tags: video-to-video, video-editing

### `flux_kontext` — Flux Kontext (image, Black Forest Labs)

Context-aware editing and style transfer

- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- tags: editing, style-transfer, context-aware, typography, remix

### `kling_omni_image` — Kling O1 Image (image, Kling)

Versatile photorealistic generation

- `resolution` (string) options=['1k', '2k'] default=1k — Output resolution.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, auto, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 21:9
- tags: photorealistic, versatile, wide-aspect-ratio, realistic, unlim

### `openai_hazel` — OpenAI Hazel (image, OpenAI)

Powerful editing, best text rendering

- `quality` (string) options=['low', 'medium', 'high'] default=medium — Rendering quality / detail level.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 3:2, 2:3, auto
- tags: text-rendering, editing, typography, logos, diagram, infographic

### `gpt_image_2_5` — GPT Image 2.5 (image, OpenAI)

GPT Image 2.5 generation and editing with Flare and Sunburst variants

**When to choose:** Newest GPT image gen/edit, up to max quality 4K.

- `variant` (string) options=['flare', 'sunburst'] default=flare — Model variant.
- `quality` (string) options=['low', 'medium', 'high', 'xhigh', 'max'] default=low — Rendering quality.
- `resolution` (string) options=['1k', '2k', '4k'] default=1k — Output resolution.
- `background` (string) options=['auto', 'opaque', 'transparent'] — Background handling. Omit to keep the model default.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: auto, 1:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16, 21:9, 27:16, 16:27, 9:8, 8:9, 4:5, 5:4
- tags: image-generation, editing, reference-images, 4k, text-rendering

### `seedream_v5_lite` — Seedream 5.0 Lite (image, Bytedance)

Visual reasoning, instruction-based editing

**When to choose:** Instruction-based editing with visual reasoning.

- `quality` (string) options=['basic', 'high'] default=basic — Output quality tier.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16, 21:9
- tags: editing, instruction, reasoning, versatile, smart, unlim

### `seedream_5_0_flash` — Seedream 5.0 Flash (image, Bytedance)

Fast image generation and instruction-based editing, up to 2K

- `resolution` (string) options=['1k', '1.5k', '2k'] default=2k — Output resolution tier.
- `width` (number) range=1–None — Optional width stored in generation metadata; not sent to the provider.
- `height` (number) range=1–None — Optional height stored in generation metadata; not sent to the provider.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: auto, 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9
- tags: editing, instruction, flash, 2k

### `seedream_v5_pro` — Seedream 5.0 Pro (image, Bytedance)

Pro-tier visual reasoning, instruction-based editing, up to 2K

- `resolution` (string) options=['1k', '1.5k', '2k'] default=2k — Output resolution tier.
- `width` (number) range=1–None — Optional output width stored with the generation.
- `height` (number) range=1–None — Optional output height stored with the generation.
- `remove_bg` (bool) default=False — Remove the background from the generated image.
- `is_inpaint` (bool) default=False — Treat the request as an inpaint/edit of the reference image(s) instead of a fresh generation.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, 4:3, 3:4, 16:9, 9:16, 3:2, 2:3, 21:9
- tags: editing, instruction, reasoning, pro, 2k, unlim

### `grok_image` — Grok Image (image, xAI)

Expressive, high-contrast generation and editing

- `resolution` (string) options=['1k', '2k'] default=1k — Output resolution.
- `mode` (string) options=['std', 'quality'] default=std — Generation mode: standard or higher-fidelity quality.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, auto, 1:2, 2:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16
- tags: expressive, high-contrast, editing, creative, bold

### `grok_image_2_0` — Grok Image 2.0 (image, xAI)

Next-generation image creation and editing from xAI

- `resolution` (string) options=['1k', '2k'] default=1k — Output resolution.
- `quality` (string) options=['low', 'medium'] default=medium — Generation quality level.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: 1:1, auto, 1:2, 2:1, 3:2, 2:3, 4:3, 3:4, 16:9, 9:16
- tags: expressive, high-contrast, editing, creative, bold

### `grok_video_v15` — Grok Video 1.5 (video, xAI)

Multimodal video generation from text, a start image, or image and audio references

**When to choose:** Physics + camera motion, image & audio refs.

- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution.
- `duration` (number) range=2–15 default=5 — Duration in seconds (2-15).
- media `medias`: type=image roles=['start_image', 'image_references', 'audio_references']
- tags: audio, cinematic, text-to-video, image-to-video, reference, audio-reference, start-frame, physics, camera-motion, preview

### `recraft_v4_1` — Recraft V4.1 (image, Recraft)

V4.1 image generation with selectable model_type for standard exploration, vector logos/icons, utility product shots/mockups, and utility_vector brand assets

- `resolution` (string) options=['1k', '2k'] default=1k — Output resolution: 1k for everyday work, 2k for larger assets.
- `model_type` (string) options=['standard', 'vector', 'utility', 'utility_vector'] default=standard — Recraft V4.1 variant. standard is expressive and exploratory; vector is for logos, typography, icons, and SVG-like illustration; utility is cleaner, flatter, front-facing, and predictable for product shots and mockups; utility_vector combines utility simplicity with vector output.
- `colors` (string_array) — Optional color palette, up to 10 colors. Each color must be #RRGGBB: six hex digits with leading # and no alpha channel.
- `background_color` (string) — Optional #RRGGBB background color with no alpha channel, or null. Use for controlled flat backgrounds, brand swatches, product mockups, icons, and vector-style work.
- aspect_ratios: 1:1, 3:4, 4:3, 4:5, 5:4, 3:2, 2:3, 16:9, 9:16
- tags: photorealistic, illustration, typography, logos, icons, vector, utility, product, mockups, brand, palette, text-to-image

### `seed_audio` — Seed Audio 1.0 (audio, ByteDance)

Seed Audio 1.0 — text-to-audio synthesis with optional voice/audio reference or a single image reference.

**When to choose:** Text-to-audio with voice/audio reference (voiceover, SFX).

- `format` (string) options=['wav', 'mp3', 'pcm', 'ogg_opus'] default=wav — Output audio container format.
- `sample_rate` (number) options=[8000, 16000, 24000, 32000, 44100, 48000] default=24000 — Output sample rate in Hz.
- `speech_rate` (number) range=-50–100 default=0 — Speech speed adjustment. 0 keeps the default speed; positive values are faster.
- `loudness_rate` (number) range=-50–100 default=0 — Loudness adjustment. 0 keeps the default loudness.
- `pitch_rate` (number) range=-12–12 default=0 — Pitch adjustment in provider units. 0 keeps the default pitch.
- `voice_type` (string) options=['preset', 'element'] — Optional voice source: 'preset' for a built-in voice id, or 'element' for a workspace voice reference element. Must be sent together with voice_id.
- `voice_id` (string) — Voice id: a preset voice id when voice_type='preset', or a voice reference element id when voice_type='element'. Must be sent together with voice_type.
- media `medias`: type=image roles=['image_references', 'audio_references']
- tags: audio, text-to-speech, tts, bytedance, seed-audio, unlim

### `qwen_audio_tts` — Qwen Audio 3.0 TTS Flash (audio, Alibaba Cloud)

Qwen Audio 3.0 TTS Flash with expressive instructions and a selectable system preset or cloned reference-element voice.

- `voice_type` (string, required) options=['preset', 'element'] — Use 'preset' for a system voice or 'element' for a cloned voice.
- `voice_id` (string, required) — Preset or reference-element voice ID.
- `instruction` (string) — Natural-language direction for emotion, dialect, speed, or style.
- `language` (string) options=['zh', 'en', 'fr', 'de', 'ja', 'ko', 'ru', 'pt', 'th', 'id', 'vi', 'it', 'ms'] — Optional target-language hint.
- `format` (string) options=['wav', 'mp3', 'pcm', 'ogg_opus'] default=mp3 — Output audio container format.
- `sample_rate` (number) options=[8000, 16000, 22050, 24000, 44100, 48000] default=24000 — Output sample rate in Hz.
- `volume` (number) range=0–100 default=50
- `speech_rate` (number) range=0.5–2 default=1
- `pitch_rate` (number) range=0.5–2 default=1
- `seed` (number) range=0–65535 default=0
- `batch_size` (number) range=1–4 default=1 — Number of independent variations to generate.
- tags: audio, speech, tts, text-to-speech, voice, voice-cloning, reference-element, qwen, alibaba

### `sonilo_music` — Sonilo Music (audio, FAL)

Text-to-music generation with controllable duration. Game pipeline only.

- `duration` (number, required) — Duration in seconds (e.g. 8).
- tags: audio, music, text-to-music, fal, sonilo

### `mirelo_text_to_audio` — Mirelo Text to Audio (audio, FAL)

Text-to-audio sound effect generation with controllable duration. Game pipeline only.

- `duration` (number, required) — Duration in seconds (e.g. 2).
- tags: audio, sfx, sound-effects, text-to-audio, fal, mirelo, unlim

### `inworld_text_to_speech` — Inworld Text to Speech (audio, FAL)

Text-to-speech audio generation. Game pipeline only.

- `voice` (string, required) options=['Loretta (en)', 'Darlene (en)', 'Marlene (en)', 'Hank (en)', 'Evelyn (en)', 'Celeste (en)', 'Pippa (en)', 'Tessa (en)', 'Liam (en)', 'Callum (en)', 'Hamish (en)', 'Abby (en)', 'Graham (en)', 'Rupert (en)', 'Mortimer (en)', 'Snik (en)', 'Anjali (en)', 'Saanvi (en)', 'Arjun (en)', 'Claire (en)', 'Oliver (en)', 'Simon (en)', 'Elliot (en)', 'James (en)', 'Serena (en)', 'Gareth (en)', 'Vinny (en)', 'Lauren (en)', 'Jessica (en)', 'Ethan (en)', 'Tyler (en)', 'Jason (en)', 'Chloe (en)', 'Veronica (en)', 'Victoria (en)', 'Miranda (en)', 'Sebastian (en)', 'Victor (en)', 'Malcolm (en)', 'Kayla (en)', 'Nate (en)', 'Jake (en)', 'Brian (en)', 'Amina (en)', 'Kelsey (en)', 'Derek (en)', 'Grant (en)', 'Evan (en)', 'Alex (en)', 'Ashley (en)', 'Craig (en)', 'Deborah (en)', 'Dennis (en)', 'Edward (en)', 'Elizabeth (en)', 'Hades (en)', 'Julia (en)', 'Pixie (en)', 'Mark (en)', 'Olivia (en)', 'Priya (en)', 'Ronald (en)', 'Sarah (en)', 'Shaun (en)', 'Theodore (en)', 'Timothy (en)', 'Wendy (en)', 'Dominus (en)', 'Hana (en)', 'Clive (en)', 'Carter (en)', 'Blake (en)', 'Luna (en)', 'Yichen (zh)', 'Xiaoyin (zh)', 'Xinyi (zh)', 'Jing (zh)', 'Erik (nl)', 'Katrien (nl)', 'Lennart (nl)', 'Lore (nl)', 'Alain (fr)', 'Hélène (fr)', 'Mathieu (fr)', 'Étienne (fr)', 'Johanna (de)', 'Josef (de)', 'Gianni (it)', 'Orietta (it)', 'Asuka (ja)', 'Satoshi (ja)', 'Hyunwoo (ko)', 'Minji (ko)', 'Seojun (ko)', 'Yoona (ko)', 'Szymon (pl)', 'Wojciech (pl)', 'Heitor (pt)', 'Maitê (pt)', 'Diego (es)', 'Lupita (es)', 'Miguel (es)', 'Rafael (es)', 'Svetlana (ru)', 'Elena (ru)', 'Dmitry (ru)', 'Nikolai (ru)', 'Riya (hi)', 'Manoj (hi)', 'Yael (he)', 'Oren (he)', 'Nour (ar)', 'Omar (ar)'] — Voice to use for text-to-speech synthesis (language tag in parentheses).
- tags: audio, speech, tts, text-to-speech, fal, inworld, unlim

### `text2speech_v2` — Text to Speech V2 (audio, Higgsfield)

Text-to-speech with a selectable engine (ElevenLabs, MiniMax, Seed Speech, Vibe Voice, Cozy Voice) via the variant param; preset or reference-element voices (voice_type + voice_id).

**When to choose:** TTS with ElevenLabs/MiniMax/Seed engines — voiceovers; needs voice_id+voice_type from list_voices.

- `variant` (string, required) options=['elevenlabs', 'minimax', 'seed_speech', 'vibe_voice', 'cozy_voice'] — Text-to-speech engine.
- `voice_type` (string, required) options=['preset', 'element'] — Whether voice_id is a built-in preset voice ('preset') or a workspace reference element ('element').
- `voice_id` (string, required) — Voice id: a preset voice id when voice_type='preset', or a reference element id when voice_type='element'.
- tags: audio, speech, tts, text-to-speech, voice, preset, reference-element, elevenlabs, minimax, seed_speech, vibe_voice, cozy_voice, unlim

### `image_background_remover` — Image Background Remover (image, )

- media `medias`: type=image roles=['image_references']

### `video_background_remover` — Video Background Remover (video, )

- media `medias`: type=image roles=['video_references']

### `sync_so` — Sync Lipsync 3 (video, )

**When to choose:** Lipsync a video to an audio track (Sync Lipsync 3).

- `sync_mode` (string) options=['bounce', 'loop', 'cut_off', 'silence', 'remap'] default=bounce — How to reconcile a duration mismatch between the video and the audio: 'bounce' ping-pongs the video, 'loop' repeats it, 'cut_off' truncates to the shorter input, 'silence' pads the audio, 'remap' retimes the video.
- `folder_id` (string) — Optional folder to place the generated output in.
- media `medias`: type=image roles=['input_video', 'input_audio']

### `outpaint` — Outpaint (image, )

- `folder_id` (string) — Optional folder placement for the generated image.
- media `medias`: type=image roles=['image_references']
- aspect_ratios: auto, 1:1, 3:2, 2:3, 4:3, 3:4, 4:5, 5:4, 9:16, 16:9, 21:9

### `minimax_hailuo` — Minimax Hailuo (video, Hailuo)

Natural physics, facial emotion, multiple variants

**When to choose:** Natural physics and facial emotion; good for acting close-ups.

- `variant` (string) options=['minimax', 'minimax-fast', 'minimax-2.3', 'minimax-2.3-fast'] default=minimax-2.3 — Minimax Hailuo model variant.
- `duration` (number) options=[6, 10] default=6 — Duration in seconds.
- `resolution` (string) options=['512', '768', '1080'] default=768 — Output resolution. '512' is incompatible with end_image, and is not supported by the 'minimax-2.3' / 'minimax-2.3-fast' variants.
- media `medias`: type=image roles=['start_image', 'end_image']
- tags: physics, emotion, facial, realistic, 1080p, natural

### `minimax_h3` — MiniMax H3 (video, MiniMax)

Multimodal video generation with keyframes or image/video/audio references

**When to choose:** 2K multimodal refs with keyframes; batch up to 4.

- `duration` (number) range=4–15 default=5 — Duration in seconds (4-15).
- `resolution` (string) options=['2K'] default=2K — Output resolution.
- `batch_size` (number) range=1–4 default=1 — Number of videos to generate (1-4).
- `folder_id` (string) — Optional folder to place the generated video in.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: text-to-video, image-to-video, reference, audio-reference, video-reference, start-frame, end-frame, 2k

### `minimax_h3_max` — MiniMax H3 Max (video, MiniMax)

Fast text-to-video, keyframe, and multimodal-reference video generation

**When to choose:** Fast multimodal refs/keyframes.

- `duration` (number) range=5–15 default=5 — Duration in seconds (5-15).
- `resolution` (string) options=['480p', '768p'] default=768p — Output resolution.
- `batch_size` (number) range=1–4 default=1 — Number of videos to generate (1-4).
- `folder_id` (string) — Optional folder to place the generated video in.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: text-to-video, image-to-video, reference, video-reference, audio-reference, start-frame, end-frame, fast

### `wan2_6` — Wan 2.6 Video (video, Wan)

Open-weight, stylized, experimental creative

**When to choose:** Stylized/experimental looks.

- `quality` (string) options=['720p', '1080p'] default=720p — Output resolution / quality.
- `duration` (number) options=[5, 10, 15] default=5 — Duration in seconds.
- media `medias`: type=image roles=['image_references', 'video_references', 'audio_references']
- aspect_ratios: 16:9, 9:16, 1:1
- tags: stylized, experimental, creative, open-weight, artistic

### `seedance1_5` — Seedance 1.5 Pro (video, Bytedance)

Reliable motion, improved quality

- `duration` (number) options=[4, 8, 12] default=4 — Duration of the output video in seconds.
- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution of the video.
- `generate_audio` (bool) default=True — Generate native audio for the video. Set false for a silent video.
- media `medias`: type=image roles=['start_image', 'end_image']
- aspect_ratios: auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9
- tags: reliable, motion, quality, versatile

### `seedance_2_0` — Seedance 2.0 (video, Bytedance)

Reference-driven video with image/video/audio reference inputs, consistent identity, multi-SKU; optional generate_audio for native audio

**When to choose:** Reference-driven video: image/video/audio refs, consistent identity, multi-SKU products, 4K; best for character/product consistency across scenes. Supports Elements.

- `duration` (number) range=4–15 default=5 — Duration in seconds (4-15).
- `resolution` (string) options=['480p', '720p', '1080p', '4k'] default=720p — Output resolution. 4k/1080p require mode='std'; mode='fast' supports 480p/720p only.
- `mode` (string) options=['std', 'fast'] default=std — 'std' = higher quality, supports 480p/720p/1080p/4k; 'fast' = cheaper/faster, supports 480p/720p only.
- `bitrate_mode` (string) options=['standard', 'high'] default=standard — 'standard' = normal output bitrate; 'high' = higher bitrate output.
- `genre` (string) options=['auto', 'action', 'horror', 'comedy', 'noir', 'drama', 'epic'] default=auto — Cinematic genre hint.
- `generate_audio` (bool) default=True — Generate native audio for the video. Set false for a silent video. Independent of audio_references.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9
- tags: reference, identity, consistent, product, multi-sku, e-commerce, audio, audio-reference, video-reference, start-frame, end-frame, 4k, high-resolution, unlim

### `seedance_2_0_mini` — Seedance 2.0 Mini (video, Bytedance)

Fast budget Seedance 2.0 variant with image/video/audio reference inputs and native audio

**When to choose:** Budget Seedance 2.0 for drafts (480p/720p).

- `duration` (number) range=4–15 default=5 — Duration in seconds (4-15).
- `resolution` (string) options=['480p', '720p'] default=720p — Output resolution (mini supports 480p/720p only).
- `bitrate_mode` (string) options=['standard', 'high'] default=standard — 'standard' = normal output bitrate; 'high' = higher bitrate output.
- `genre` (string) options=['auto', 'action', 'horror', 'comedy', 'noir', 'drama', 'epic'] default=auto — Cinematic genre hint.
- `generate_audio` (bool) default=True — Generate native audio for the video. Set false for a silent video. Independent of audio_references.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9
- tags: fast, budget, reference, identity, consistent, audio, audio-reference, video-reference, start-frame, end-frame, unlim

### `seedance_2_5` — Seedance 2.5 (video, Bytedance)

Seedance 2.5 text-to-video, multimodal omni-reference generation, video edit, and video extension

**When to choose:** Longest single clip (4-30s), omni-reference, video edit and video extension (forward/backward) — use to extend shots into longer continuous takes.

- `mode` (string) options=['t2v', 'omni_reference', 'video_edit', 'video_extension'] default=t2v — Generation mode: 't2v' for prompt-only generation, 'omni_reference' for image, video, or audio references, 'video_edit' to edit one reference video (billed by that video's duration; 'duration' and 'aspect_ratio' are ignored), or 'video_extension' to extend a reference video ('aspect_ratio' is ignored — the output follows the extended video).
- `duration` (number) range=4–30 default=5 — Duration in seconds (4-30).
- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution: 480p, 720p, or 1080p.
- `generate_audio` (bool) default=True — Generate audio for the output video.
- `bitrate_mode` (string) options=['standard', 'high'] default=standard — 'standard' = normal output bitrate; 'high' = higher bitrate output.
- `extension_mode` (string) options=['backward', 'forward'] — Extension direction; required for mode 'video_extension' and not allowed otherwise.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: text-to-video, reference, identity, audio-reference, video-reference, video-edit, video-extension, 480p, 720p, 1080p

### `ad_multiplier` — Ad Multiplier (video, Higgsfield)

Ad Multiplier video generation powered by Seedance 2.5

**When to choose:** Seedance 2.5-powered edit of one 4-30s ad into many variants (swap people/products/backgrounds). Use via ad-multiplier workflow.

- `mode` (string) options=['t2v', 'omni_reference', 'video_edit', 'video_extension'] default=t2v — Generation mode: 't2v' for prompt-only generation, 'omni_reference' for image, video, or audio references, 'video_edit' to edit one reference video (billed by that video's duration; 'duration' and 'aspect_ratio' are ignored), or 'video_extension' to extend a reference video ('aspect_ratio' is ignored — the output follows the extended video).
- `duration` (number) range=4–30 default=5 — Duration in seconds (4-30).
- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution: 480p, 720p, or 1080p.
- `generate_audio` (bool) default=True — Generate audio for the output video.
- `bitrate_mode` (string) options=['standard', 'high'] default=standard — 'standard' = normal output bitrate; 'high' = higher bitrate output.
- `extension_mode` (string) options=['backward', 'forward'] — Extension direction; required for mode 'video_extension' and not allowed otherwise.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- tags: text-to-video, reference, identity, audio-reference, video-reference, video-edit, video-extension, 480p, 720p, 1080p

### `topaz_image` — Topaz (image, )

- `output_width` (number, required) range=1–None — Target output width in pixels.
- `output_height` (number, required) range=1–None — Target output height in pixels.
- `face_enhancement` (bool) default=False — Enable dedicated face enhancement.
- `face_enhancement_creativity` (number) range=0–1 default=0 — Face enhancement creativity (0-1). Applies when face_enhancement is enabled.
- `face_enhancement_strength` (number) range=0–1 default=0 — Face enhancement strength (0-1). Applies when face_enhancement is enabled.
- `variant` (string) options=['Standard V2', 'Low Resolution V2', 'CGI', 'High Fidelity V2', 'Text Refine'] default=Standard V2 — Topaz enhancement model.
- `sharpen` (number) range=0–1 default=0 — Sharpening amount (0-1).
- `denoise` (number) range=0–1 default=0 — Denoising amount (0-1).
- `folder_id` (string) — Destination folder id.
- media `medias`: type=image roles=['image_references']

### `topaz_image_generative` — Topaz (image, )

- `output_width` (number, required) range=1–None — Target output width in pixels.
- `output_height` (number, required) range=1–None — Target output height in pixels.
- `variant` (string) options=['Standard MAX', 'Redefine', 'Recovery', 'Recovery V2'] default=Redefine — Topaz generative upscale model variant.
- `autoprompt` (bool) default=True — Automatically generate a guiding prompt from the image.
- `creativity` (number) range=1–6 default=1 — Creativity level (1-6); higher adds more detail.
- `texture` (number) range=1–5 default=1 — Texture strength (1-5).
- `sharpen` (number) range=0–1 default=0 — Sharpening amount (0-1).
- `denoise` (number) range=0–1 default=0 — Denoising amount (0-1).
- `face_enhancement` (bool) default=False — Enable face enhancement.
- `face_enhancement_creativity` (number) range=0–1 default=0 — Face enhancement creativity (0-1).
- `face_enhancement_strength` (number) range=0–1 default=0 — Face enhancement strength (0-1).
- media `medias`: type=image roles=['image_references']

### `topaz_video` — Topaz (video, )

**When to choose:** Upscale final video to 1080p/2160p.

- `resolution` (string) options=['1080p', '2160p'] default=1080p — Target output resolution.
- `enhancement` (string) — Enhancement settings (omit to use Topaz defaults).
- `frame_interpolation` (string) — Frame interpolation (omit to disable).
- media `medias`: type=image roles=['video_references']
- aspect_ratios: auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16

### `bytedance_video_upscale` — Bytedance Video Upscale (video, )

**When to choose:** Upscale video to 1080p/2k/4k.

- `fps` (number) range=24–60 default=24 — Output frame rate in frames per second (24-60).
- `resolution` (string) options=['1080p', '2k', '4k'] default=2k — Target output resolution.
- `preset` (string) options=['common', 'aigc', 'short_series', 'ugc', 'old_film'] default=common — Content-type preset that tunes the upscaler for the source material.
- `model_version` (string) options=['standard', 'pro'] default=standard — Upscaler model tier: 'standard' or higher-quality 'pro'.
- media `medias`: type=image roles=['video_references']

### `bytedance_image_upscale` — Bytedance Image Upscale (image, )

- `resolution` (string) options=['2k', '4k'] default=4k — Target upscale resolution.
- `remove_bg` (bool) default=False — Remove the background from the upscaled image.
- media `medias`: type=image roles=['image_references']

### `video_upscale` — Video Upscale (video, )

- `duration` (number) range=0–None — Duration of the source video in seconds. Optional; derived from the video metadata when omitted.
- `folder_id` (string) — Optional folder to place the generated output in.
- media `medias`: type=image roles=['input_video']

### `video_deflicker` — Video Deflicker (video, )

- `duration` (number) range=0–None — Optional duration of the output video in seconds.
- `folder_id` (string) — Optional folder to place the generated output in.
- media `medias`: type=image roles=['input_video']

### `clipify` — Clipify (video, Higgsfield)

Turn one YouTube video into ready-to-share clips with subtitles

**When to choose:** Cut a YouTube video into subtitled shorts.

- `urls` (string_array, required) — YouTube video URLs. Provide exactly one URL; submit one Clipify job per source video.
- `clips_num` (number) range=1–20 default=10 — How many clips to create.
- `clip_aspect` (string) options=['9:16', '1:1', '16:9'] default=9:16 — Clip aspect ratio.
- `subtitle_highlight_hex` (string) default=#FFE84D — Subtitle highlight color as #RRGGBB.
- `subtitle_position` (string) options=['bottom', 'center', 'top'] default=bottom — Subtitle vertical position.
- `subtitle_font` (string) options=['notosans', 'notoserif', 'notosansdisplay', 'ibmplexsans', 'mplusrounded1c', 'bebasneue', 'archivoblack', 'unbounded', 'inter', 'montserrat', 'bangers', 'permanentmarker', 'playfairdisplay', 'caveat'] default=notosans — Subtitle font.
- `subtitle_case` (string) options=['upper', 'lower', 'as-is'] default=as-is — Subtitle text case.
- `track_face_crop` (bool) default=True — Track faces when cropping clips.
- `max_height` (number) range=144–2160 default=1080 — Maximum source processing height.
- `segment_seconds` (number) range=2–60 default=10 — Segment duration in seconds.
- tags: youtube, clips, shorts, reels, subtitles, personal-clipper

### `kling2_6` — Kling 2.6 Video (video, Kling)

Cinematic motion, advanced physics

**When to choose:** Cinematic motion + physics from a start image; legacy.

- `duration` (number) options=[5, 10] default=5 — Video duration in seconds.
- `sound` (bool) default=True — Generate the video with native audio.
- media `medias`: type=image roles=['start_image']
- aspect_ratios: 16:9, 9:16, 1:1
- tags: cinematic, motion, physics, advanced, audio

### `kling3_0` — Kling v3.0 (video, Kling)

Multi-shot, audio sync, motion transfer

**When to choose:** Multi-shot sequences inside one clip, native audio sync, start/end frames; 3-15s; strong default for storytelling. Supports Elements.

- `duration` (number) range=3–15 default=5 — Duration in seconds (3-15).
- `mode` (string) options=['std', 'pro', '4k'] default=std — Generation mode: 'std' (standard), 'pro' (higher quality), or '4k' (4K resolution).
- `sound` (string) options=['on', 'off'] default=on — Generate audio. Use 'off' for silent video and lower credits.
- media `medias`: type=image roles=['start_image', 'end_image']
- aspect_ratios: 16:9, 9:16, 1:1
- tags: multi-shot, audio, motion-transfer, cinematic, advanced, unlim

### `kling3_0_turbo` — Kling 3.0 Turbo (video, Kling)

Fast text-to-video and single start-frame animation

**When to choose:** Fast/cheap drafts of Kling 3.0 motion.

- `resolution` (string) options=['720p', '1080p'] default=720p — Output resolution.
- `duration` (number) range=3–15 default=5 — Duration in seconds (3-15).
- media `medias`: type=image roles=['start_image']
- aspect_ratios: 16:9, 9:16, 1:1
- tags: fast, turbo, text-to-video, image-to-video, start-frame, budget, kling

### `kling_video_edit` — Kling 3.0 Omni Edit (video, Kling)

Edit a source video with text instructions and optional reference images

**When to choose:** Edit an existing clip with text + reference images (Kling Omni Edit).

- `mode` (string) options=['std', 'pro', '4k'] default=pro — Output quality: Standard, Pro, or 4K.
- media `medias`: type=image roles=['video_references', 'image_references']
- tags: video-edit, reference, 4k

### `happy_horse_video` — Happy Horse Video (video, Happy Horse)

Text-to-video and single start-frame animation

- `resolution` (string) options=['720p', '1080p'] default=720p — Output resolution.
- `duration` (number) range=3–15 default=5 — Duration in seconds (3-15).
- media `medias`: type=image roles=['start_image']
- aspect_ratios: 16:9, 9:16, 1:1, 4:3, 3:4
- tags: text-to-video, image-to-video, start-frame, happy-horse

### `hf_mult_motion_control` — Genjutsu (video, Higgsfield)

Transfer motion from a reference video to subjects in reference images

**When to choose:** Genjutsu: transfer motion from reference video to subjects in images (dance/action transfer).

- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution: 480p, 720p, or 1080p.
- media `medias`: type=image roles=['image_references', 'video_references']
- tags: motion-control, image-to-video, video-reference, 480p, 720p, 1080p

### `hf_mult_replace_object` — Genjutsu (video, Higgsfield)

Replace objects in a source video using reference images

**When to choose:** Genjutsu: replace an object in a video with a reference image.

- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution: 480p, 720p, or 1080p.
- media `medias`: type=image roles=['image_references', 'video_references']
- tags: video-edit, object-replacement, reference, 480p, 720p, 1080p

### `grok_video` — Grok Video (video, xAI)

Text and image-to-video, audio support

- `duration` (number) range=1–15 default=5 — Duration in seconds (1-15).
- media `medias`: type=image roles=['start_image']
- aspect_ratios: 16:9, 9:16, 1:1
- tags: audio, versatile, text-to-video, image-to-video

### `gemini_omni` — Gemini Omni Flash (video, Google)

Reference-driven video with native audio and image/video reference inputs

**When to choose:** Reference-driven video with native audio (720p).

- `duration` (number) range=4–10 default=8 — Duration in seconds (4-10).
- `resolution` (string) options=['720p'] default=720p — Output resolution.
- media `medias`: type=image roles=['image_references', 'video_references']
- aspect_ratios: 16:9, 9:16
- tags: audio, reference, image-to-video, video-to-video, text-to-video, high-resolution, unlim

### `gemini_omni_flash_1_1` — Gemini Omni Flash 1.1 (video, Google)

Gemini Omni Flash 1.1 text-to-video, keyframe animation, multimodal reference generation, and video editing with native audio

**When to choose:** T2V/I2V/ref-to-video/edit up to 4K, 3-10s.

- `mode` (string, required) options=['text-to-video', 'image-to-video', 'reference-to-video', 'edit'] — Generation mode.
- `duration` (number) range=3–10 default=8 — Output duration in seconds (3-10). Ignored in edit mode, which uses the source video duration capped at 30 seconds.
- `resolution` (string) options=['360p', '720p', '1080p', '4k'] default=720p — Output resolution: 360p, 720p, 1080p, or 4K.
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references']
- aspect_ratios: 16:9, 9:16
- tags: audio, text-to-video, image-to-video, reference, video-edit, 360p, 720p, 1080p, 4k

### `wan2_7` — Wan 2.7 (video, Wan)

Synchronized audio, character-consistent video

**When to choose:** Synchronized audio, character-consistent video.

- `duration` (number) range=2–15 default=5 — Duration in seconds (2-15).
- `resolution` (string) options=['720p', '1080p'] default=720p — Output resolution.
- media `medias`: type=image roles=['start_image', 'end_image', 'audio_references']
- aspect_ratios: 16:9, 9:16, 1:1, 4:3, 3:4
- tags: audio, character, consistent, sync, sound, unlim

### `wan3_0` — Wan 3.0 (video, Wan)

Wan 3.0 text-to-video, first/last frame video, and multimodal reference-to-video with native audio

**When to choose:** T2V, first/last-frame and multimodal references with native audio, up to 30s; good long takes.

- `duration` (number) range=-1–30 default=5 — Duration in seconds (2-30), or -1 to let the model choose the length from the prompt and media. Smart duration is billed as 10 seconds.
- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution: 480p, 720p, or 1080p.
- `generate_audio` (bool) default=True — Generate a native audio track for the output video.
- `enable_thinking` (bool) default=False — Let the model reason about the prompt before generating (slower, better prompt adherence).
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 16:9, 9:16, 1:1, 4:3, 3:4
- tags: text-to-video, reference, identity, audio-reference, video-reference, first-last-frame, sound, thinking, 480p, 720p, 1080p

### `wan3_0_prime` — Wan 3.0 Prime (video, Wan)

Wan 3.0 Prime text-to-video, first/last frame video, and multimodal reference-to-video with native audio

**When to choose:** Higher-tier Wan 3.0.

- `duration` (number) range=-1–30 default=5 — Duration in seconds (2-30), or -1 to let the model choose the length from the prompt and media. Smart duration is billed as 10 seconds.
- `resolution` (string) options=['480p', '720p', '1080p'] default=720p — Output resolution: 480p, 720p, or 1080p.
- `generate_audio` (bool) default=True — Generate a native audio track for the output video.
- `enable_thinking` (bool) default=False — Let the model reason about the prompt before generating (slower, better prompt adherence).
- media `medias`: type=image roles=['start_image', 'end_image', 'image_references', 'video_references', 'audio_references']
- aspect_ratios: auto, 16:9, 9:16, 1:1, 4:3, 3:4
- tags: text-to-video, reference, identity, audio-reference, video-reference, first-last-frame, sound, thinking, 480p, 720p, 1080p, prime

### `veo3` — Google Veo 3 (video, Google)

Reliable cinematic, broad creative range

**When to choose:** Reliable cinematic Veo 3.

- `variant` (string) options=['veo-3-preview', 'veo-3-fast'] default=veo-3-fast — Veo 3 variant: 'veo-3-preview' = best quality; 'veo-3-fast' = faster generation.
- media `medias`: type=image roles=['start_image']
- aspect_ratios: 16:9, 9:16
- tags: cinematic, reliable, creative, audio, image-to-video

### `veo3_1` — Google Veo 3.1 (video, Google)

Ultra-realistic, top-tier cinematic quality

**When to choose:** Ultra-realistic top-tier cinematic quality, 4/6/8s, native audio/dialogue; premium hero shots.

- `duration` (number) options=[4, 6, 8] default=8 — Duration of the output video in seconds.
- `quality` (string) options=['basic', 'high', 'ultra'] default=basic — Output quality tier.
- `variant` (string) options=['veo-3-1-preview', 'veo-3-1-fast'] default=veo-3-1-fast — Veo 3.1 variant: 'veo-3-1-preview' = best quality, 'veo-3-1-fast' = faster generation.
- media `medias`: type=image roles=['start_image']
- aspect_ratios: 16:9, 9:16
- tags: ultra-realistic, cinematic, top-tier, quality, audio

### `veo3_1_lite` — Google Veo 3.1 Lite (video, Google)

Fast, affordable, budget batch clips

**When to choose:** Cheap Veo for batch clips, supports start+end frames.

- `duration` (number) options=[4, 6, 8] default=8 — Duration of the output video in seconds.
- `generate_audio` (bool) default=False — Generate native audio for the video.
- media `medias`: type=image roles=['start_image', 'end_image']
- aspect_ratios: 16:9, 9:16, auto
- tags: fast, budget, affordable, batch, lite

### `sam_3_video` — Remove Background (video, )

- `apply_mask` (bool) default=True — Apply the segmentation mask to the output video.
- `frames_count` (number) range=1–None — Number of frames to process. Defaults to the full clip when omitted.
- media `medias`: type=image roles=['video_references']

### `sam_3_3d_body` — 3D Body (3d, Meta)

Reconstruct human body shape and pose as a GLB model from one image

- `export_meshes` (bool) default=True — Ask the provider to export individual PLY meshes for detected people.
- `include_3d_keypoints` (bool) default=True — Include 3D keypoint markers in the returned GLB model.
- `include_mhr_params` (bool) default=True — Ask the provider to calculate full Meta Human Representation metadata.
- media `medias`: type=image roles=['image_references']
- tags: 3d, mesh, glb, image-to-3d, body, human, sam

### `tripo_3d` — Text to 3D (3d, )

- `negative_prompt` (string) — Text describing what to avoid in the generated 3D model.
- `texture` (bool) default=True — Generate surface textures. Set false for an untextured mesh.
- `pbr` (bool) default=True — Generate physically based rendering (PBR) material maps.
- `texture_quality` (string) options=['standard', 'detailed'] default=standard — Texture detail level. 'detailed' yields higher-resolution textures.
- `geometry_quality` (string) options=['standard', 'detailed'] default=standard — Mesh geometry detail. 'detailed' yields a denser, more refined mesh.
- `auto_size` (bool) default=False — Automatically scale the generated model to real-world dimensions.
- `face_limit` (number) range=1000–2000000 — Maximum number of mesh faces. Leave unset for the model default.

### `tripo_h3_1_image_to_3d` — Tripo H3.1 Image to 3D (3d, Tripo)

Generate a Tripo H3.1 GLB model from one image

- `face_limit` (number) range=1000–2000000 — Target number of mesh faces. Leave unset for adaptive geometry.
- `texture` (bool) default=True — Generate textures for the model.
- `pbr` (bool) default=True — Generate PBR materials. Enabling PBR also enables textures.
- `texture_seed` (number) — Random seed for texture generation.
- `texture_quality` (string) options=['standard', 'detailed'] default=standard — Texture detail level.
- `geometry_quality` (string) options=['standard', 'detailed'] default=standard — Geometry detail level.
- `quad` (bool) default=False — Generate a quad mesh.
- `texture_alignment` (string) options=['original_image', 'geometry'] default=original_image — Align textures to the source image or generated geometry.
- `auto_size` (bool) default=False — Scale the model to real-world dimensions.
- `orientation` (string) options=['default', 'align_image'] default=default — Keep the default orientation or align it to the source image.
- media `medias`: type=image roles=['image_references']
- tags: 3d, mesh, glb, image-to-3d, textured, pbr

### `tripo_h3_1_multiview_to_3d` — Tripo H3.1 Multiview to 3D (3d, Tripo)

Generate a Tripo H3.1 GLB model from 2 to 4 ordered views

- `face_limit` (number) range=1000–2000000 — Target number of mesh faces. Leave unset for adaptive geometry.
- `texture` (bool) default=True — Generate textures for the model.
- `pbr` (bool) default=True — Generate PBR materials. Enabling PBR also enables textures.
- `texture_seed` (number) — Random seed for texture generation.
- `texture_quality` (string) options=['standard', 'detailed'] default=standard — Texture detail level.
- `geometry_quality` (string) options=['standard', 'detailed'] default=standard — Geometry detail level.
- `quad` (bool) default=False — Generate a quad mesh.
- `texture_alignment` (string) options=['original_image', 'geometry'] default=original_image — Align textures to the source image or generated geometry.
- `auto_size` (bool) default=False — Scale the model to real-world dimensions.
- `orientation` (string) options=['default', 'align_image'] default=default — Keep the default orientation or align it to the source image.
- media `medias`: type=image roles=['image_references']
- tags: 3d, mesh, glb, image-to-3d, multiview, textured, pbr

### `hunyuan3d_v3_image_to_3d` — Hunyuan3D v3 Image to 3D (3d, Tencent)

Generate a Hunyuan3D v3 GLB model from one image or multiple views

- `enable_pbr` (bool) default=False — Generate PBR material maps.
- `face_count` (number) range=40000–1500000 default=500000 — Target mesh face count.
- `generate_type` (string) options=['Normal', 'LowPoly', 'Geometry'] default=Normal — Normal textured, LowPoly reduced, or Geometry-only generation.
- `polygon_type` (string) options=['triangle', 'quadrilateral'] default=triangle — LowPoly topology. Quadrilateral requires generate_type=LowPoly.
- media `medias`: type=image roles=['image_references']
- tags: 3d, mesh, glb, image-to-3d, multiview, pbr

### `meshy_v6_text_to_3d` — Meshy 6 Text to 3D (3d, Meshy)

Generate a Meshy 6 GLB model from a text prompt

- `mode` (string) options=['preview', 'full'] default=full — 'preview' generates geometry only; 'full' adds textures.
- `seed` (number) — Random seed for reproducibility.
- `model_type` (string) options=['standard', 'lowpoly'] default=standard — Standard high-detail or low-poly mesh generation.
- `topology` (string) options=['triangle', 'quad'] default=triangle — Topology used when remeshing a standard model.
- `target_polycount` (number) range=100–300000 default=30000 — Target polygon count for remeshing.
- `should_remesh` (bool) default=True — Remesh the generated geometry.
- `symmetry_mode` (string) options=['off', 'auto', 'on'] default=auto — Symmetry enforcement for the generated mesh.
- `enable_pbr` (bool) default=False — Generate PBR material maps; requires mode=full.
- `pose_mode` (string) options=['', 'a-pose', 't-pose'] default= — Optional canonical pose for character models.
- `enable_prompt_expansion` (bool) default=False — Expand the prompt before generation.
- `texture_prompt` (string) — Text guidance for texture generation; requires mode=full.
- `texture_image_url` (string) — Reference image URL for textures; requires mode=full.
- `enable_rigging` (bool) default=False — Generate a rigged character.
- `rigging_height_meters` (number) — Character height in meters; requires enable_rigging=true.
- `enable_animation` (bool) default=False — Generate an animation; requires enable_rigging=true.
- `animation_action_id` (number) range=0–696 — Animation action id; required when enable_animation=true.
- `enable_safety_checker` (bool) default=True — Run the provider safety checker.
- tags: 3d, mesh, glb, text-to-3d, pbr, rigging, animation

### `hunyuan3d_v3_1_text_to_3d` — Hunyuan 3D v3.1 Text to 3D (3d, Tencent)

Generate a Hunyuan 3D v3.1 GLB model from a text prompt

- `mode` (string) options=['std', 'pro'] default=std — 'std' uses the rapid model; 'pro' uses the higher-quality model.
- `enable_pbr` (bool) default=False — Generate PBR material maps; available only in pro mode.
- `generate_type` (string) options=['Normal', 'Geometry'] — Pro-only generation type. Leave unset for the provider default.
- `face_count` (number) range=40000–1500000 — Pro-only custom face count. Leave unset for 500000.
- tags: 3d, mesh, glb, text-to-3d, pbr

### `meshy_v5_remesh` — Meshy 5 Remesh (3d, Meshy)

Remesh an existing 3D model and return a GLB model

- `model_url` (string, required) — Public URL of an existing 3D model. Upload a GLB through the media API with type=file and pass the returned URL here.
- `topology` (string) options=['triangle', 'quad'] — Optional output mesh topology.
- `target_polycount` (number) range=100–300000 — Target polygon count for the remeshed model.
- `resize_height` (number) range=0–None — Optional target model height.
- `origin_at` (string) options=['bottom', 'center'] — Optional vertical origin placement.
- tags: 3d, mesh, glb, remesh, retopology

### `meshy_v5_retexture` — Meshy 5 Retexture (3d, Meshy)

Retexture an existing 3D model using text or an image style reference

- `model_url` (string, required) — Public URL of an existing 3D model. Upload a supported model through the media API with type=file and pass the returned URL here.
- `text_style_prompt` (string) — Texture style prompt; required when image_style_url is omitted.
- `image_style_url` (string) — Public style image URL. Takes precedence when text_style_prompt is also set.
- `enable_original_uv` (bool) default=True — Reuse the source model UV mapping when available.
- `enable_pbr` (bool) default=False — Generate PBR texture maps.
- `enable_safety_checker` (bool) default=True — Run the input safety checker.
- tags: 3d, mesh, glb, retexture, texture, pbr

### `meshy_v7_image_to_3d` — Meshy 7 Image to 3D (3d, Meshy)

Meshy 7 image-to-3D GLB with optional texturing, PBR, rigging, and animation

- `model_type` (string) options=['standard', 'lowpoly'] default=standard — Geometry mode: standard or lowpoly.
- `topology` (string) options=['quad', 'triangle'] default=triangle — Output mesh topology.
- `target_polycount` (number) range=100–300000 default=30000 — Target polygon count.
- `symmetry_mode` (string) options=['off', 'auto', 'on'] default=auto — Symmetry enforcement during reconstruction.
- `should_remesh` (bool) default=True — Remesh the generated geometry.
- `should_texture` (bool) default=True — Generate textures.
- `enable_pbr` (bool) default=False — Generate PBR maps; requires should_texture=true.
- `pose_mode` (string) options=['a-pose', 't-pose'] — Optional canonical pose for the reconstructed model.
- `texture_prompt` (string) — Text prompt guiding texture generation.
- `texture_image_url` (string) — Reference image URL guiding texture generation.
- `enable_rigging` (bool) default=False — Generate a rig for the mesh.
- `rigging_height_meters` (number) default=1.7 — Real-world height in meters used for rigging.
- `enable_animation` (bool) default=False — Apply an animation; requires enable_rigging=true.
- `animation_action_id` (number) range=0–696 default=92 — Animation action id.
- `enable_safety_checker` (bool) default=True — Run the input safety checker.
- `ultra_mode` (bool) default=False — Generate higher-fidelity geometry and finer surface detail.
- `folder_id` (string) — Destination folder id.
- media `medias`: type=image roles=['image_references']
- tags: 3d, mesh, glb, image-to-3d, low-poly, textured, pbr, rigging, animation
