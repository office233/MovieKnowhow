# Recreate a $39,500/Month Faceless YouTube Channel With AI

- Source: https://higgsfield.ai/blog/faceless-channel
- Byline: Mariam Barova · Jun 16, 2026 · 3 min · Last updated: 3w ago
- Prompts extracted: 4

## Notes

**Title on page:** "Recreate a $39,500/Month Faceless YouTube Channel With AI" (Mariam Barova, Jun 16 2026).

**Niches with highest RPM:** Finance & Investing, Technology, Educational/Edutainment. They target edutainment (evergreen, high retention, pushed to non-subscribers).

**Setup:** sign up -> MCP & CLI section -> copy install command/URL -> Claude Settings -> Connectors -> Add Custom Connector "Higgsfield" -> run the pipeline in **Claude Code** so files save to a local project folder.

**Pipeline (4 prompts, below):**
1. Reverse-engineer a reference channel's hooks/scenarios and write a similar original script. Example outline for a 5-min Pompeii video: 9 acts with timestamps and clip ranges (Hook 0:00-0:28 "See that mountain?" + second-person "you're the apprentice"; calm/signs; explosion; burying; the decision; night/pyroclastic flow; the end; discovery 1748 + plaster casts; twist/outro with the October date) — ~35 clips for 5 minutes.
2. One command generates the whole 5-min video with Seedance 2.0 at 1080p (Claude structures scenes, timeline, voiceover, consistent visuals, fact-checks).
3. Packaging prompt -> titles, SEO tags, timestamped description, 3 thumbnails for YouTube A/B testing.
4. Scale: "make me 2 more videos" on topics likely to perform.

**Stay monetised:** natural-sounding voice that fits the story; genuine insights/facts; visuals changing every **5-10 s** (no static stock).

## Prompts (verbatim)

### P1. The Script Prompt:

- Model / settings: Claude (Fable 5) in Claude Code + Higgsfield MCP; video via Seedance 2.0 1080p
- Use-case: other
- Context: Instead of doing hours of research, we use Claude to analyze our target channel, reverse-engineer their hooks, and build an original high-retention script.

~~~~text
Analyze the channel, scenarios, hooks and write me a script for a similar video: https://www.youtube.com/@BRIGHTSIDEOFFICIAL/videos
~~~~

### P2. The Video Prompt:

- Model / settings: Claude (Fable 5) in Claude Code + Higgsfield MCP; video via Seedance 2.0 1080p
- Use-case: other
- Context: Normally, a 5-minute video requires writing dozens of prompts, generating separate clips, and manually editing them to match a voiceover. With Higgsfield MCP and Seedance 2.0, you can generate the entire video—visuals, consistent characters, style, audio, and pacing—with a single command.

~~~~text
make a 5 minutes video like on the reference account using Seedance 2.0. 1080p. It's going on a faceless youtube channel.
~~~~

### P3. The Packaging Prompt:

- Model / settings: Claude (Fable 5) in Claude Code + Higgsfield MCP; video via Seedance 2.0 1080p
- Use-case: other
- Context: Once the video files are automatically saved to your local project folder via Claude Code, you need to package the video for the YouTube algorithm to maximize your Click-Through Rate (CTR).

~~~~text
Put together a complete YouTube video package for me: prepare the thumbnails, title, and everything else needed to upload it.
~~~~

### P4. The Packaging Prompt:

- Model / settings: Claude (Fable 5) in Claude Code + Higgsfield MCP; video via Seedance 2.0 1080p
- Use-case: other
- Context: To turn this into a true content machine, you can scale instantly by entering:

~~~~text
Make me 2 more videos. Pick topics that would perform well on YouTube for the same channel
~~~~

