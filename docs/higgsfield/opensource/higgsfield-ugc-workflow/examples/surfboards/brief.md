# Production Brief — Joe B Surfboards (UGC demo ad)

> Consolidated brief for an IG tutorial reel. Demo brand (not a real brand in the repo).
> Pipeline: `ugc-ad` orchestrator. This doc summarizes the inline artifacts the
> orchestrator generates as it runs — it is a one-glance map, not a hand-off spec.

- **Project slug:** `2026-06-23-joe-b-surfboards-demo`
- **Folder:** `campaigns/ugc-proof/2026-06-23-joe-b-surfboards-demo/`
- **Format:** Vertical 9:16 UGC video ad, 10s
- **Purpose:** Sample/tutorial piece showing the UGC ad workflow end-to-end

## The product
- **What:** Joe B Surfboards — classic wood-rail longboard (log / noserider), cream-paneled finish
- **Hero look:** glossy off-white center deck panel framed by warm wood-grain rails, single stringer, high-gloss resin
- **Branding rule:** board is **visual reference only**; deck logo not shown legibly. Brand name "Joe B Surfboards" lives in VO + captions only.
- **product media_id:** `6e738f88-355b-4071-9848-bf6bacffc7ab`
- Full facts + usage motions: [product-profile.md](product-profile.md)

## The creator (on camera)
- **Look:** young male surfer, early-20s, sun-bleached curly hair, golden tan, freckles, easygoing smile; faded tee under an open linen shirt; authentic CA beach-town core surfer (not a polished model)
- **character job_id:** `ba6d77fe-d4ef-43c2-8144-703ae70a5a8a`
- Registered in [cast.md](cast.md) (status: candidate)

## The angle
- **Performance / quality testimonial.** "This board changed how I surf." The board is the hero; the creator vouches for the craft. Topic framed in the first 2-3 seconds (cold-creative rule).

## Shot map (3 time-sliced cuts → one continuous UGC take)
1. **Hook (Tight, ~0-5s):** selfie framing, creator reacting/speaking to camera, board upright behind shoulder
2. **Setup/Action (Macro, ~5-10s):** hand running down the glossy wood-grain rail (tactile quality beat)
3. **Recommendation (Wide, ~10-15s):** standing on sand, board planted nose-up, presenting it to camera
- Visual map: [storyboard.png](storyboard.png) — `storyboard job_id: c0b164df-116c-4932-bb9d-bae5054535f1`

## Production settings
- **Video model:** Seedance 2.0 (native VO + lip-sync + ambient), via `ugc-video`
- **Resolution:** 720p (1080p is 2x credits, no visible gain for this format)
- **Cost gate:** explicit user yes required before the paid video call
- **Audio check:** human must confirm VO pronunciation of "Joe B Surfboards" before finalizing
- **Enhance (default ON):** ducked ElevenLabs music bed + word-level karaoke subtitles + flash/zoom-punch cut transitions → `<slug>-enhanced.mp4`
- **Brand accent (captions/UI):** warm wood tone — approx `#A9743B`

## Distribution
- **Master:** `joe-b-surfboards-demo-enhanced.mp4` (enhanced cut is distributable; base preserved)
- **Caption + hashtags:** `caption.md`, `hashtags.md` (brand voice, no em-dashes)
- **Channels:** Instagram / TikTok / Facebook from one folder

## Status
- [x] Product profile
- [x] Base character (approved)
- [x] Storyboard sheet (approved, v2 with shirt)
- [x] Consolidated brief
- [ ] Multi-cut script
- [ ] Video (cost-gated)
- [ ] Enhance
- [ ] Virality read + caption/hashtags
