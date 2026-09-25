# Marketing Studio, UGC, Shorts & viral effects — craft notes

Researched: 2026-09-25 (search extracts of official pages + official MCP model catalog; direct fetch blocked).

## Marketing Studio
- **Template-first**: pick a ready format, connect your product, generate. No prompt strictly required.
- Product input: upload a product image, **or paste a product/website URL** — the page is read and brand
  signals (imagery, logo, colors, copy) fill the template.
- Formats — UGC side: talking head, product review, tutorial, unboxing, virtual try-on.
  Professional side: CGI showcase, cinematic demo, editorial try-on.
- UGC Videos: choose **Faceless, Talking Head, or Silent**. Output up to **15 s** per generation
  (API model `marketing_studio_video`: 12–15 s, 480p/720p/1080p, audio on by default, aspect 21:9–9:16).
- Avatars: 40+ stock avatars, or describe a custom one (generated with Soul 2.0).
- **Hooks** (the attention mechanic, e.g. "object flies into frame") and **Settings** (location/vibe, e.g.
  "sunlit kitchen, morning light") can be set independently — only for UGC, Tutorial, Unboxing, Product
  Review, UGC Virtual Try-On.
- **Ad reference**: recreate the scenario/pacing of an existing ad instead of hook+setting (mutually exclusive).
- Caveat from official docs: voiceover and pacing vary between generations — review before publishing.

## Craft tips for product ads
- Unboxing beat order: package arrives → tape rips → reveal → genuine reaction; phone-shot on a bed feels real.
- Try-on: person films self at home, poses, reacts, shows fit.
- Generate several hooks against one product and A/B them; keep the product reference identical.
- For multi-product (multi-SKU) consistency, Seedance 2.0 reference mode is positioned for e-commerce.
- "Ad Multiplier" (Seedance 2.5-powered) = many edits/variants of one clip.

## Talking heads / lipsync ("Speak", Lipsync Studio, Avatar)
- Input a close-up, front-facing, single-subject image; face well lit, eyes open, no occlusion.
- Clean audio with low background noise. Scene templates: General, Selfie, Podcast, Car Talking, etc.
- Add performance direction: e.g. "confident news anchor, medium close-up, subtle hand gestures, steady pace".
- Native-audio models (Veo 3.1, Seedance, Kling 3.0) generate speech in the same pass — put the exact line
  in quotes plus tone/pace/emotion.

## Shorts Studio & Viral Presets
- Shorts Studio: upload footage (up to ~2 min), pick one of 40+ style presets (claymation, comic,
  green-screen, glitch, Bold Caption, Acid Green…), get a 9:16 short with graphics/text; original motion kept.
- Viral Presets: 60+ pre-built trend effects (scene, animation and style prebuilt) — start from the preset,
  then iterate. Run finished clips through **Virality Predictor** before posting.
- Clipify: turns one YouTube video into up to 20 subtitled clips (9:16/1:1/16:9).

## Sources
- https://higgsfield.ai/marketing-studio-intro
- https://higgsfield.ai/blog/new-marketing-studio-higgsfield
- https://higgsfield.ai/creator-hub/help-center/tools/how-do-i-use-marketing-studio-to-create-video-ads
- https://higgsfield.ai/blog/how-to-make-ai-ugc-videos
- https://higgsfield.ai/blog/make-ai-lipsync-videos
- https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-lipsync-voiceover-and-aspect-ratios
- https://higgsfield.ai/shorts-studio-intro
- https://higgsfield.ai/blog/how-to-make-viral-videos-viral-presets
- Higgsfield MCP `models_explore` (marketing_studio_video, ad_multiplier, clipify), 2026-09-25
