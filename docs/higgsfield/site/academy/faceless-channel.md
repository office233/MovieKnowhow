# Build a Faceless Channel

- **URL:** https://higgsfield.ai/academy/courses/faceless-channel
- **Taught by:** Higgsfield Creative
- **Level:** Beginner · **Modules:** 7 · **Duration:** 14 min
- **Description (paraphrased):** build and test a faceless AI YouTube channel by connecting Claude and Higgsfield (MCP), writing a script, generating a full video, packaging it, and reading early results.
- **Skills:** choose a faceless concept with a monetization path; connect Claude + Higgsfield MCP to write, produce and package a full YouTube video; review monetization safeguards and interpret first results.
- **Stack:** Claude ("Claude Fable 5" in the course) in Claude Code + Higgsfield MCP connector; video model **Seedance 2.0 at 1080p**; Higgsfield MCP also produces voiceover, music, thumbnails.

---

## Lesson 1 — Why AI channels actually get monetized
URL: https://higgsfield.ai/academy/courses/faceless-channel/why-ai-channels-get-monetized
- Reference: BrightSide (VidIQ estimate ~$39,500/month from AdSense), an evergreen educational format: simple storytelling, cinematic visuals, easy format.
- Demonetization is about zero-value content, not AI use; YouTube judges value, not production method.
- Views no longer depend on subscriber count — good content is pushed to non-followers.
- Borrow the **format**, never the **content** (reusing others' videos triggers reused-content strikes).

## Lesson 2 — Connecting Claude and Higgsfield MCP
URL: https://higgsfield.ai/academy/courses/faceless-channel/connecting-claude-and-higgsfield-mcp
One-time setup:
1. Create/sign in to a Higgsfield account.
2. In Higgsfield open **MCP & CLI** and copy the install command/URL.
3. In Claude: **Settings → Connectors → Add Custom Connector**, name it "Higgsfield", paste the URL, **Connect**.
4. Switch to **Claude Code** (terminal) — the rest of the pipeline runs there.

## Lesson 3 — Writing the script with one prompt
URL: https://higgsfield.ai/academy/courses/faceless-channel/writing-the-script-with-one-prompt
- Pick a niche by RPM: the three highest-paying categories named are **finance, tech, educational**. Course chooses education (broad audience, good retention).
- One prompt makes Claude reverse-engineer the reference channel (most viral videos, hooks, structure), pick a topic, and return a full script.
```
Analyze the channel, scenarios, hooks and write me a script for a similar video: https://www.youtube.com/@BRIGHTSIDEOFFICIAL/videos
```
- Result: Vesuvius/Pompeii topic, script in **9 beats**, each mapped to a time range and a clip set: hook → calm-before-storm → eruption → town buried → flee or stay → pyroclastic surge → aftermath → archaeological discovery → closing twist. Front-load the hook in the first second.

## Lesson 4 — Generating the full video
URL: https://higgsfield.ai/academy/courses/faceless-channel/generating-the-full-video
- Retention rule: change visuals every **5–10 s** → a 5-min video needs **30+ clips**; manually that's half a day.
- Single prompt (model Seedance 2.0, 1080p, ~5 min):
```
make a 5 minutes video like on the reference account using Seedance 2.0. 1080p. It's going on a faceless youtube channel.
```
- Claude + Higgsfield MCP then: split script into clips and choose durations, generate all clips with consistent style, record/place voiceover and background music, fact-check/fill gaps. A few minutes later a project folder with all assets appears locally.
- Output: 5-min documentary (baker's apprentice on Pompeii's last morning; warning signs — dry wells, restless dogs, tremors).

## Lesson 5 — Packaging it for YouTube
URL: https://higgsfield.ai/academy/courses/faceless-channel/packaging-it-for-youtube
```
Put together a complete YouTube video package for me: prepare the thumbnails, title, and everything else needed to upload it.
```
- Returns several title options, tags, description and **3 thumbnail variations** (for YouTube's built-in thumbnail A/B test), saved to the project folder.
```
Make me 2 more videos. Pick topics that would perform well on YouTube for the same channel
```
- Each new topic gets fresh research, its own script and visual style (second example: Venice's wooden foundations).
- Upload flow: Create → Upload video → paste generated title/description → upload the 3 thumbnails → follow generated instructions → Publish/schedule. Render the next videos in the background meanwhile.

## Lesson 6 — Getting monetized without demonetization
URL: https://higgsfield.ai/academy/courses/faceless-channel/getting-monetized-without-demonetization
- YPP thresholds: **1,000 subscribers + 4,000 watch hours**.
- Three anti-demonetization rules: AI voice must fit the story; script original with real insight; visuals change dynamically with proper pacing (not random unedited clips).
- Shorts lever: ask Higgsfield MCP to analyze the most viral Shorts in your niche, then generate original Shorts using those mechanics.

## Lesson 7 — Three days later: the results
URL: https://higgsfield.ai/academy/courses/faceless-channel/three-days-later-the-results
- After 3 days the new channel had views and subscribers. 3 long-form videos in ~15 minutes of actual work.
- Numbers quoted: BrightSide ~ $40k/month AdSense; a separate motion-design-niche experiment went from zero to $1,280. Next step after traction: brand deals/collabs.
