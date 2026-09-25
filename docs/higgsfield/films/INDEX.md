# How films, ads and clips were made on Higgsfield — project index

One page per open-source project: what was made, the pipeline step by step, models per step, verbatim prompts (licensed sources only), reference/keyframe strategy, consistency tricks, audio, assembly, costs and lessons. Local clones live in [`../opensource/`](../opensource/) (list with commits: [`../opensource/SOURCES.tsv`](../opensource/SOURCES.tsv)). Platform reference: [cli-and-api.md](cli-and-api.md).

| Project page | What | Type | License | Upstream | Local copy |
|---|---|---|---|---|---|
| [higgsfield-ai-prompt-skill.md](higgsfield-ai-prompt-skill.md) | Hell Grind 90–95 min feature pipeline, Seedance-4K tutorial prompts, Seedance 2.0/2.5, acting, Soul ID, benchmarks | film (feature) + ads + skill library | MIT | [OSideMedia/higgsfield-ai-prompt-skill](https://github.com/OSideMedia/higgsfield-ai-prompt-skill) | [opensource/higgsfield-ai-prompt-skill](../opensource/higgsfield-ai-prompt-skill/) |
| [a-long-expected-party.md](a-long-expected-party.md) | 136 s procedural Three.js short; score, 8 ambience beds, 17 narration lines generated with Higgsfield | film (short, audio by Higgsfield) | MIT (code/assets; literary quotes excluded) | [MengTo/a-long-expected-party](https://github.com/MengTo/a-long-expected-party) | [opensource/a-long-expected-party](../opensource/a-long-expected-party/) |
| [ai-film-pipeline.md](ai-film-pipeline.md) | Joey's CTRL K-pop short / OUR TURN skills + orchestrator + ffmpeg QC; BMW M5 spot | film + ad | MIT (Joey's skills released free) | [Gregory-Esman/ai-film-pipeline](https://github.com/Gregory-Esman/ai-film-pipeline) | [opensource/ai-film-pipeline](../opensource/ai-film-pipeline/) |
| [visual-storytelling-skills.md](visual-storytelling-skills.md) | Prose → continuity bible → storyboard frames → Higgsfield MCP → OpenShot project; TTS phoneticizer | film pipeline / tool | ISC | [leynos/visual-storytelling-skills](https://github.com/leynos/visual-storytelling-skills) | [opensource/visual-storytelling-skills](../opensource/visual-storytelling-skills/) |
| [seedance-shotlist-director-en.md](seedance-shotlist-director-en.md) | Script → HTML production board of 15 s Seedance prompts (from Higgsfield's tutorial skill) | film/ad pre-production tool | MIT | [afloy011-spec/seedance-shotlist-director-en](https://github.com/afloy011-spec/seedance-shotlist-director-en) | [opensource/seedance-shotlist-director-en](../opensource/seedance-shotlist-director-en/) |
| [film-studio-skills.md](film-studio-skills.md) | 7 gated skills: setup → studio-init → breakdown → reference board → passport → stress-test → shot prompt | film pipeline | **none (unlicensed — own-words summary, not vendored)** | [machina-exm/film-studio-skills](https://github.com/machina-exm/film-studio-skills) | — |
| [ai-video-generator-claude.md](ai-video-generator-claude.md) | 10 short-form ad/social prompt skills for Seedance 2.0 (SaaS, luxury, hooks…) | ads / social clips | MIT | [rediumvex/ai-video-generator-claude](https://github.com/rediumvex/ai-video-generator-claude) | [opensource/ai-video-generator-claude](../opensource/ai-video-generator-claude/) |
| [higgsfield-ugc-workflow.md](higgsfield-ugc-workflow.md) | Product photo → creator UGC ad in one Seedance pass (VO, lip-sync) + music & karaoke captions | UGC ad | MIT | [joebenscoter86/higgsfield-ugc-workflow](https://github.com/joebenscoter86/higgsfield-ugc-workflow) | [opensource/higgsfield-ugc-workflow](../opensource/higgsfield-ugc-workflow/) |
| [UGC-dashboard.md](UGC-dashboard.md) | "UGC Genie" Next.js canvas running Marketing Studio via the CLI | UGC tool | MIT | [harshith-vaddiparthy/UGC-dashboard](https://github.com/harshith-vaddiparthy/UGC-dashboard) | [opensource/UGC-dashboard](../opensource/UGC-dashboard/) |
| [reeljet.md](reeljet.md) | Screen recordings + Higgsfield b-roll + ffmpeg → 16:9 & 9:16 promo | ad tool | MIT | [Xabilimon1/reeljet](https://github.com/Xabilimon1/reeljet) | [opensource/reeljet](../opensource/reeljet/) |
| [creativly.ai-higgsfield-video-remotion.md](creativly.ai-higgsfield-video-remotion.md) | Higgsfield MCP launch film recreated in Remotion (11 scenes, 53 s) | brand ad / motion graphics | MIT | [naveen-annam/creativly.ai-higgsfield-video-remotion](https://github.com/naveen-annam/creativly.ai-higgsfield-video-remotion) | [opensource/creativly.ai-higgsfield-video-remotion](../opensource/creativly.ai-higgsfield-video-remotion/) |
| [add-music-to-video.md](add-music-to-video.md) | Higgsfield clips (Seedance 2.0 + Kling 3.0 Turbo) → stitched, graded 15 s trailer + Sonilo soundtrack | post / audio + trailer | MIT | [cindyxu1030/add-music-to-video](https://github.com/cindyxu1030/add-music-to-video) | [opensource/add-music-to-video](../opensource/add-music-to-video/) |
| [carousel-builder.md](carousel-builder.md) | Theme-locked IG carousel: Nano Banana Pro images anchored to one cover + Canva MCP | ad (static) | MIT | [charlesdove977/carousel-builder](https://github.com/charlesdove977/carousel-builder) | [opensource/carousel-builder](../opensource/carousel-builder/) |
| [higgsfield-skills.md](higgsfield-skills.md) | 15 genre skills with model routing + opt-in MCP generation | ads / clips tool | MIT | [pixelab-ch/higgsfield-skills](https://github.com/pixelab-ch/higgsfield-skills) | [opensource/higgsfield-skills](../opensource/higgsfield-skills/) |
| [claude-higgsfield-skill.md](claude-higgsfield-skill.md) | Character sheets, 8/10/12-shot storyboards, timed video prompts in bulk | clips / storyboard tool | MIT | [AIcentury/claude-higgsfield-skill](https://github.com/AIcentury/claude-higgsfield-skill) | [opensource/claude-higgsfield-skill](../opensource/claude-higgsfield-skill/) |
| [lanshu-awesome-ai-video-kit.md](lanshu-awesome-ai-video-kit.md) | 543 tested prompts, methodology (Elements training, Arena Zero case), 7 skills | prompt library | MIT | [cclank/lanshu-awesome-ai-video-kit](https://github.com/cclank/lanshu-awesome-ai-video-kit) | [opensource/lanshu-awesome-ai-video-kit](../opensource/lanshu-awesome-ai-video-kit/) |
| [cli.md](cli.md) → [cli-and-api.md](cli-and-api.md) | Official Higgsfield CLI: commands, model ids, params, cost | tool (official) | MIT | [higgsfield-ai/cli](https://github.com/higgsfield-ai/cli) | [opensource/cli](../opensource/cli/) |
| [ComfyUI-Higgsfield-Direct.md](ComfyUI-Higgsfield-Direct.md) | ComfyUI nodes (Soul, Seedream, DoP, Seedance Pro, Kling 2.1) | tool | MIT | [jeremieLouvaert/ComfyUI-Higgsfield-Direct](https://github.com/jeremieLouvaert/ComfyUI-Higgsfield-Direct) | [opensource/ComfyUI-Higgsfield-Direct](../opensource/ComfyUI-Higgsfield-Direct/) |
| [higgsfield_ai_mcp.md](higgsfield_ai_mcp.md) | Community FastMCP for the older Soul/DoP API (with pricing) | tool | MIT | [geopopos/higgsfield_ai_mcp](https://github.com/geopopos/higgsfield_ai_mcp) | [opensource/higgsfield_ai_mcp](../opensource/higgsfield_ai_mcp/) |
| [prompt-resources.md](prompt-resources.md) | Scraped prompt docs incl. Higgsfield's "AI Short Film" shot-by-shot blog | reference library | **none (unlicensed — own-words summary, not vendored)** | [neurodropp/prompt-resources](https://github.com/neurodropp/prompt-resources) | — |

Not given their own page (prompt galleries, CC-BY-4.0): [awesome-seedance-2.5-prompts](../opensource/awesome-seedance-2.5-prompts/) and [awesome-minimax-h3-prompts](../opensource/awesome-minimax-h3-prompts/).

---

## Cross-project synthesis

### The converged pipeline (films)

1. **Lock the project** (concept, runtime, what must stay consistent) and a **shot list** before any generation.
2. **Assets = text descriptor + reference image**, built once: character sheets on neutral/mid-gray, headless or face-erased body panels, 3/4 location plates with an anchor object, prop sheets (real photos when the object exists). One `@tag` dictionary; each state variant is a new asset.
3. **Stress-test / approve** assets with cheap stills before video.
4. **Keyframes** (Soul Cinema / Nano Banana / GPT Image / Popcorn) where a shot needs a pinned look; edit with a one-line change in Nano Banana rather than re-rolling; never re-run a base face through a model.
5. **Video = Seedance 2.0 (now 2.5) multi-shot clips of ~10–15 s** with a fixed Style Prefix, per-scene spatial map, character count, timed CUTs, dialogue in the audio block, positive locks; Kling 3.0 for camera-motion shots; Veo 3.1 / Sora 2 for single-take performance or stunts.
6. **Iterate one line at a time, log every take**, simplify the shot after ~10–15 failures; generate high-risk shots first.
7. **Assemble** in an NLE / ffmpeg / Remotion / OpenShot; score in post (Suno, Sonilo, ElevenLabs, Higgsfield `seed_audio`/`sonilo_music`); upscale (Topaz); grade for unification; picture lock.

### Model choices per step (what projects converge on)

| Step | Converged choice |
|---|---|
| Character face/identity | Soul Cinema (volume, cheap) → Nano Banana Pro/2 or GPT Image 2 (lock/edit); Soul ID when trained faces are needed |
| Wardrobe edits | GPT Image 2 or Nano Banana Pro (masked back onto the base) |
| Creatures | Seedream 5.0 |
| Locations | Soul Cinema (most cinematic), sheets in Nano Banana Pro |
| Storyboard / multi-panel sheet | Nano Banana Pro (16:9 grid) |
| Narrative video | Seedance 2.0 std (1080p/4K finals; 480p/720p drafts), Seedance 2.5 for v2v/extension |
| Camera-move / b-roll | Kling 3.0 / Kling 3.0 Turbo |
| Performance / dialogue-heavy single takes | Veo 3.1 (and Sora 2 in the UI) |
| Commercial UGC | Seedance 2.0 with storyboard + character + product refs, or Marketing Studio Video |
| Music | Post: Suno, Sonilo `video_to_music`, ElevenLabs music; Higgsfield `sonilo_music`/`seed_audio` |
| Upscale / finish | Topaz Video; NLE colour unification |
