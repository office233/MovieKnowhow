# prompt-resources (neurodropp) — summary in our own words

- Upstream: <https://github.com/neurodropp/prompt-resources>
- Local copy: none in this repo (the upstream has **no license file**; the content is mostly scraped third-party pages). Nothing here is quoted; below is a paraphrased summary.
- Type: **reference library** (scraped prompt-engineering documentation, Italian index)

## What it is

An automatically crawled collection of ~73 prompt-engineering resources, indexed in Italian (`prompt_docs/00_INDEX.md`, generated 2026-04-07 with crawl depth 2 and up to 30 sub-pages per source, filtered by a Claude Haiku relevance check — which failed on part of the crawl because the crawler's API credit ran out, so some pages were included unfiltered). Each resource file starts with a metadata table (AI, author, type, date, URL, pages included, reliability rating) and a short "how to use it" note, then the main page and up to 30 linked pages. Folders: chatgpt, claude, flow (Google Flow), gemini, **higgsfield**, kling-ai, midjourney, nano-banana, veo. Each file is ~150–270 KB because sub-pages are appended.

## The Higgsfield folder (5 files)

1. **AI Short Film – Full Prompt Library** (official Higgsfield blog, David Matamoros, 2026-03-12; YouTube film). The most useful item: a complete short comedy film made on Higgsfield, shot by shot. Our summary of the method:
   - **Characters first:** three characters (a hero cop, his partner, the cop's wife) generated in Soul Cinema from very short prompts (essentially "close-up of a [role]"), with the hero's face coming from a trained Soul ID.
   - **Character reference sheets** from one photo in Nano Banana Pro: neutral plain background, two rows — four full-body views (front, both profiles, back) on top, portrait close-ups below.
   - **Locations** generated once in Soul Cinema (locker room with blue lockers; a police-cruiser interior specified in a cheap dashcam/DVR look with blown-out midday sun; a dark hallway with light leaking around a door), then turned into **location reference sheets** in Nano Banana Pro (frontal, two angled views, a reverse wide, plus three detail close-ups).
   - **Scenes shot in Cinema Studio** with `@Name` element tags for characters and locations. Scene 1 (locker room): a handheld entrance; a POV shot from inside the locker; the partner's teasing birthday line arrives as dialogue inside the prompt; a profile close-up as the locker door closes to reveal the partner; a wide two-shot for the deadpan reply; a single handheld shot carrying a four-line exchange. Scene 2 (patrol car): static dashcam-look dialogue shots, a handheld back-and-forth comedy exchange, three **b-roll** clips made in Soul Cinema (dashcam driving through an LA suburb, an extreme close-up of the radio mic, a side-window street view with 70s-grain documentary texture), then the radio dispatch that flips the tone and two urgent closing shots (hard turn, dashcam acceleration). Scene 3 (surprise): entering the dark house with a raised shotgun, lights snapping on to reveal a surprise party, and the wife's payoff line with celebration in the background.
   - Takeaways: prompts in Cinema Studio are short (one or two sentences plus the dialogue in quotes); dialogue lines are written straight into the video prompt with speaker tags; shot duration and camera type (handheld vs static) are chosen per shot; consistency is carried by trained Soul ID + @-element references for both people and places.
2. **Prompt Guide to Cinematic AI Videos with Popcorn & Recast** (official blog, Mariam Barova, 2025-11-08) — a ~30 s horror/zombie clip in ten scenes. Method: generate each scene's key image in **Popcorn**, optionally transform it in **Seedream** ("make him a zombie"-style edits, or swap a person), animate with **Veo 3.1** (performance and dialogue), **Sora 2** (a single continuous crash stunt) or **Seedance** (a very short camera instruction such as a slow dolly-in on a still moment), and use **Recast** to swap an animated character into a zombie while keeping motion, light and framing. Conclusion of the guide in paraphrase: each tool does one job — Popcorn for tone and composition, Seedream/Seedance for identity and micro-motion, Veo/Sora for performance, Recast for replacement. (The same chain is documented with MIT-licensed quotes in [higgsfield-ai-prompt-skill.md](higgsfield-ai-prompt-skill.md) Pipeline A.)
3. **Pro Guide to Higgsfield Soul** (Chase Jarvis blog) — opinion piece: Soul's visual-style presets are strong for mood, but text on clothing, product details and poses break, and the always-on prompt enhancer can move a scene somewhere you did not ask. Suggested workflow: ideate and cast in Soul (Soul ID for the face), then fix text/logos/pose and get new angles in Nano Banana Pro. Verdict: a sketchpad, not final delivery on its own.
4. **How To Guides hub** (official index page) — mostly a crawl of Higgsfield site/blog pages (features, series, earn programme); low signal.
5. **Reddit thread "Higgsfield Prompting Guide"** — the crawl hit a verification wall; essentially empty.

## Other folders (brief)

Official and community prompting guides for Kling (2.6 Pro, 3.0, Video 3.0 Omni, API docs), Veo 3/3.1 (Vertex AI guide, Gemini API guide, "ultimate" and "definitive" community manuals), Google Flow, Nano Banana / Nano Banana Pro / Nano Banana 2 (image generation, token limits), Midjourney (prompts, style reference), Gemini, ChatGPT/OpenAI, and Claude prompt engineering. Several entries are marked as failed crawls (0 pages).

## How we use it

As a pointer list to primary sources (URLs in each file's header), not as quotable content. The one production-grade film breakdown in it (the Higgsfield "AI Short Film" blog) is summarised above; for licensed, quotable production prompts use the other pages in this folder.
