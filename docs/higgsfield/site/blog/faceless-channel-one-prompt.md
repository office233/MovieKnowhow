# How to Build a $10K/Month Faceless YouTube Channel With Higgsfield AI + Claude Fable 5 (Full Guide)

- Source: https://higgsfield.ai/blog/faceless-channel-one-prompt
- Byline: Mariam Barova · Jul 9, 2026 · 5 minutes · Last updated: 3w ago
- Prompts extracted: 6

## Notes

**Title on page:** "How to Build a $10K/Month Faceless YouTube Channel With Higgsfield AI + Claude Fable 5" (Mariam Barova, Jul 9 2026). One-chat pipeline: one sentence -> 10-min explainer + Spanish version + thumbnails + ~20 shorts + 30-day plan.

**Why explainers:** education is a high-RPM niche; VidIQ estimates ~$10k/month AdSense for channels in this format, plus brand deals.

**Steps:**
1. Connect MCP: Claude Settings -> Connectors -> Add -> `https://mcp.higgsfield.ai/mcp`; install the **higgsfield-explainer** skill.
2. Ask what's working; the skill researches the live web, scores topics, picks one. **Stay in one niche** — mixing niches resets algorithm targeting.
3. Script is retention-first: hook opens on the payoff (not backstory), chapters each set up the next, an **open loop roughly every minute**. (Fable 5 wrote the strongest scripts in their tests.)
4. Render: recommended length **10 min** (watch time drives distribution). Output ~100 scenes in one consistent style.
5. Translate with one line; **clone your voice** (~1 min: Audio -> Voice Presets -> Create a custom voice, read the sample script, upload) so the channel has a unique voice.
6. Packaging: 3 titles + 3 thumbnails; rules = one focal point readable at phone size; title opens a question the thumbnail doesn't answer.
7. Shorts Studio: ~20 captioned shorts; post the same batch to YouTube Shorts, Reels, TikTok, all pointing to the channel.
8. Plan 30 days (8 long videos ranked by search volume) and render videos 2 and 3 in parallel.

**Growth math:** monetisation = 1,000 subs + 4,000 watch hours; 10-min videos with ~4 min average view ≈ 60,000 total views to reach 4,000 h. Schedule: 2 long videos/week + daily shorts at fixed times; track average view duration and use drop-off points as script notes.
**Monetisation myth:** YouTube doesn't auto-demonetise AI; it flags spam/"inauthentic" repetitive content. Original script + your own cloned voice keeps you safe.

## Prompts (verbatim)

### P1. Step 2: Let Claude pick the topic

- Model / settings: Claude (Fable 5) + Higgsfield MCP + higgsfield-explainer skill (Shorts Studio for shorts)
- Use-case: other
- Context: Go to higgsfield.ai and copy the MCP link. In Claude, open Settings → Connectors → Add, name it, paste https://mcp.higgsfield.ai/mcp, hit Connect. Then install the skill the same way. Everything else happens inside one chat.

~~~~text
What's actually working in explainer videos right now?
~~~~

### P2. Step 5: Translate it — in your own voice

- Model / settings: Claude (Fable 5) + Higgsfield MCP + higgsfield-explainer skill (Shorts Studio for shorts)
- Use-case: other
- Context: Most people online don't speak English first; translating is how you reach them. One line re-renders the film in another language:

~~~~text
Translate the video into Spanish.
~~~~

### P3. Step 6: Package it

- Model / settings: Claude (Fable 5) + Higgsfield MCP + higgsfield-explainer skill (Shorts Studio for shorts)
- Use-case: other
- Context: Packaging decides whether anyone clicks. In the same chat:

~~~~text
Give me titles and thumbnails for this video.
~~~~

### P4. Step 7: Turn it into twenty shorts

- Model / settings: Claude (Fable 5) + Higgsfield MCP + higgsfield-explainer skill (Shorts Studio for shorts)
- Use-case: other
- Context: Back come 3 title options and 3 thumbnails. Judge them with two rules: one focal point readable at phone size, and a title that opens a question the thumbnail deliberately doesn't answer — that gap is the click.

~~~~text
Create shorts from this video with Shorts Studio.
~~~~

### P5. Step 8: Plan the month — then run it in parallel

- Model / settings: Claude (Fable 5) + Higgsfield MCP + higgsfield-explainer skill (Shorts Studio for shorts)
- Use-case: other
- Context: Back come about twenty shorts — cut, captioned, ready to post, zero frames edited by hand. Post the same batch to YouTube Shorts, Reels, and TikTok. A ten-minute video asks viewers for a decision; a short never asks — it just shows up mid-scroll. And every clip points back to one channel.

~~~~text
Plan my first 30 days: eight long videos, topics ranked by search volume.
~~~~

### P6. Step 8: Plan the month — then run it in parallel

- Model / settings: Claude (Fable 5) + Higgsfield MCP + higgsfield-explainer skill (Shorts Studio for shorts)
- Use-case: other
- Context: Back comes a mapped month: eight long videos, each with a shorts batch, every topic picked off real search data.

~~~~text
Start videos two and three from the plan.
~~~~

