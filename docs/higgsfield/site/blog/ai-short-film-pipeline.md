# How to Make a Short Film With AI: The Full Pipeline From Script to Final Cut

Source: https://higgsfield.ai/blog/ai-short-film-pipeline  
Higgsfield, Jul 29, 2026  
Prompts extracted: 0

Five-tool pipeline on one credit balance:
| Tool | Role | Key settings |
|---|---|---|
| **Popcorn** | storyboard | up to 4 image refs; 4/6/8 frames; Auto/Manual; 3:4, 2:3, 3:2, 1:1, 9:16 |
| **Soul ID** | character identity | 20+ photos, trained once; persists across Kling 3.0, Veo 3.1, Seedance 2.0, WAN 2.6 |
| **Seed Audio 1.0** | dialogue, ambience, score | per scene, matched to Cinema Studio genre/register |
| **Cinema Studio 3.5** | shot generation | Genre (7), Lighting (7 presets), Color Palette (9), Camera MoveSet Style (10), Lens (6), Focal Length (8–75 mm), Aperture (3) |
| **Supercomputer** | orchestration | Parallel Chats 1/3/10 by plan, Scheduled Tasks, persistent memory, 30+ connectors |

Steps:
1. Script -> scenes -> shots (a 2-min short ≈ **15–25 shots**); map characters and locations per shot.
2. Train Soul ID for every recurring character **before any shot**.
3. Storyboard each scene in Popcorn (character ref + location ref; 4/6/8 frames; Auto for coverage, Manual for exact beats) — locks blocking and spatial logic.
4. Cinema Studio per shot: set genre, lighting, palette, camera move, lens, focal length, aperture **explicitly (not Auto)**; feed the Popcorn frame + Soul ID.
5. Seed Audio per scene (not whole film at once), matched to genre.
6. Supercomputer holds shot list/assembly order, runs remaining shots in parallel, assembles.

Rules: storyboard fully before generating; **lock genre/lighting/lens once per scene** (switching mid-scene = disjointed); **generate the hardest shot first**; keep clips short and chain at matching first/last frames — identity/lighting degrade past ~30 s; face drift = a shot generated without Soul ID attached; background one-off characters need only text.
Costs: Soul ID ~25 cr/character; Popcorn ~5 cr/scene; Seed Audio ~6 cr/30 s; Cinema Studio ~75 cr per 8 s 720p shot, ~150 cr per 15 s 1080p shot. **5-min short (2 characters, ~13 scenes) ≈ $150–160**, almost all shot generation (38 x 8 s @720p ≈ 2,850 cr, or 20 x 15 s @1080p ≈ 3,000 cr).
Reference films by Higgsfield: Kokboru, The New Girl, Cat Story (short); Arena Zero, Hell Grind (long, shown around Cannes) — workflows at higgsfield.ai/community/projects.

