# How to Run Ad Production End to End With Claude: From Idea to Published Ads

- Source: https://higgsfield.ai/blog/claude-ad-production-end-to-end
- Byline: Higgsfield12 min · Last updated: 3d ago
- Prompts extracted: 4

## Notes

**Topic:** running ad production end-to-end inside Claude (verified Sep 17 2026). Two connectors (Higgsfield MCP + Meta Ads MCP) + one manual step (uploading the final video to Meta Ads Manager).

**Six stages & coverage:** creative research (partial — Meta Ad Library via Meta MCP; TikTok/other libraries = export screenshots/CSV into chat) -> concept & script (Claude alone) -> asset production (Higgsfield MCP) -> resizing/versioning (Ad Multiplier, Genjutsu) -> publishing (TikTok direct from session; Meta = paused campaigns + manual video upload) -> performance loop (Meta MCP insights -> next brief).

**Surfaces:** Higgsfield MCP (in Claude: models, skills, Soul characters, audio, credit checks); Marketing Studio (higgsfield.ai; template gallery also opens in Claude: UGC, product shots, motion, ads, posters, marketplace); Supercomputer (higgsfield.ai: agentic projects, 30+ connectors, Scheduled Tasks to TikTok/LinkedIn/X/Threads, Instagram in some regions, Slack/Drive/Notion); Meta Ads MCP.

**Skill catalogue examples:** UGC Factory (Product Review, Unboxing, Try-on, Tutorial, SaaS UGC -> vertical video with presenter, script, captions); Marketing (Physical UGC Video, Ad Multiplier, Brandkit, TV Commercials); Faceless Content Factory (Whiteboard Doodle, Stickman Cartoon, Pixel Art, Claymotion); Utility (Voiceover, Subtitles, Localization).

**Recurring face:** train a Soul character on **20-80 photos** (on site or via upload widget in chat); works with Soul 2.0 and Soul Cinema, **one character per generation**; small differences can still appear — review; consent required for real people. Marketing Studio templates generate their own presenter, so a trained character goes through UGC skills / reference-based models.

**Variants:** Ad Multiplier takes one finished **4-30 s** video and makes several independently edited versions. Genjutsu models: (a) replace object/product/garment/character from reference images, (b) transfer motion/camera from a driving clip to new subjects. Each variant costs credits. Localization skill for languages.

**Publishing/perf:** TikTok direct post or drafts (review caption, privacy, declarations). Meta MCP: creates campaigns/ad sets/ads **always paused**; activation is a separate confirmed step; supports catalog uploads, A/B tests, reporting; works with single-image link creatives and boosting IG posts — video must be uploaded manually. **Virality Predictor** scores a finished video on hook strength, retention risk, engagement before publishing.

**Autonomy levels:** Assistant (text only) -> Operator (Claude generates, human publishes) -> Agent (generates, publishes, pulls metrics with budget limits + review gates).

**Setup:** higgsfield.ai/mcp "Connect to Claude" or Settings -> Connectors -> `https://mcp.higgsfield.ai/mcp`; sign in (active subscription, no API key). Meta: `mcp.facebook.com/ads`, Facebook Login for Business. Claude Free plan allows only one custom connector -> need paid plan; Team/Enterprise owner adds it first.

**Pitfalls/costs:** agent generations always use **credits at standard rates — "unlimited" only applies on higgsfield.ai**; no built-in credit cap -> instruct Claude to state cost and wait for confirmation; keep review gates on publishing, activation, budget; organic analytics stay in the platforms.

## Prompts (verbatim)

### P1. How Claude Writes the Concept and Script

- Model / settings: Claude + Higgsfield MCP (UGC Factory skills, Ad Multiplier, Genjutsu) + Meta Ads MCP
- Use-case: UGC
- Context: This stage needs no connectors, only context. Give Claude a product photo, a store page URL, or a plain brief, and it produces the concept, the hook options, and the full script in the format the next stage expects. With Higgsfield MCP connected, the skills handle this step on their own: a request like "create a UGC ad for this product" makes the …

~~~~text
Here is our product page: [URL]. Write three UGC ad concepts for TikTok, each with a hook for the first two seconds, a 15 second script, and a closing line with a call to action.
~~~~

### P2. How Production Runs Through Marketing Studio and Skills

- Model / settings: Claude + Higgsfield MCP (UGC Factory skills, Ad Multiplier, Genjutsu) + Meta Ads MCP
- Use-case: UGC
- Context: For a recurring campaign face, train a Soul character once on 20 to 80 photos, on higgsfield.ai or right in the conversation through an upload widget, and reference the saved character in every following creative. Trained Soul characters work with the Soul 2.0 and Soul Cinema models, one character per generation. Soul improves consistency across a …

~~~~text
Using the Product Review UGC skill, create a vertical video for the product in the attached photo. The presenter is a friendly young woman, bright home setting, full monologue that ends naturally before the clip ends.
~~~~

### P3. How to Create Variants Without Rebuilding the Entire Ad

- Model / settings: Claude + Higgsfield MCP (UGC Factory skills, Ad Multiplier, Genjutsu) + Meta Ads MCP
- Use-case: UGC
- Context: The Genjutsu models go further: one replaces an object, product, garment, or character in the source video using reference images, the other transfers motion and camera movement from a driving clip onto new subjects. Each variant is a new generation and spends credits, but the approved source sets the structure. One master ad becomes a set of …

~~~~text
Take this approved ad and create versions where the product is replaced with the second product from my references. Preserve the presenter, the timing, and the camera movement from the source.
~~~~

### P4. How To Set Up Both Connectors

- Model / settings: Claude + Higgsfield MCP (UGC Factory skills, Ad Multiplier, Genjutsu) + Meta Ads MCP
- Use-case: UGC
- Context: With both connected, one prompt can start several connected tasks, with review at the key stages:

~~~~text
Here is the product page: [URL]. Write a UGC script, generate the ad with the Product Review UGC skill, create three hook variants with Ad Multiplier, then show me the credit cost and wait for my approval before publishing the winner to TikTok and setting up the Meta campaign as paused drafts.
~~~~

