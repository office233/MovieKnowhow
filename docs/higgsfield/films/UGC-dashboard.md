# UGC-dashboard / "UGC Genie" (Harshith Vaddiparthy) — Next.js node-canvas app running Marketing Studio via the Higgsfield CLI

- Upstream: <https://github.com/harshith-vaddiparthy/UGC-dashboard> (commit `274c42c`)
- Local copy: [`../opensource/UGC-dashboard/`](../opensource/UGC-dashboard/)
- License: MIT © 2026 Harshith Vaddiparthy
- Type: **UGC tool** (web dashboard). Also ships PDFs: `output/UGC-Genie-Learning-Resources/01-UGC-Genie-20-Page-Field-Guide.pdf`, `02-UGC-Genie-Codebase-Setup-Guide.pdf`.

## What it does

"Turn one product image into a complete, visible AI UGC video workflow." Upload a product image, write/improve creative direction, watch six nodes run on a React Flow canvas (Upload → Visual analysis → Creative direction → Higgsfield Studio → Render → Review/download), then play the 9:16 result. Live credit balance is shown from the CLI.

## Pipeline (actual code)

1. **Prompt improvement (optional)** — `app/api/prompt/improve/route.ts` calls the OpenAI Responses API with this instruction (verbatim):

   > "Rewrite the user's rough direction into one production-ready prompt for a 15-second vertical UGC product video. Preserve the user's intent and factual claims. Add a clear opening hook, natural creator behavior, product demonstration, camera direction, and a concise call to action. Do not invent product features. Return only the improved prompt as one compact paragraph, with no label, commentary, or quotation marks."

2. **"Visual analysis" and "concept" nodes are cosmetic** — `lib/workflow/executor.ts` just marks them complete after ~0.9 s ("Product colors, packaging, and visual hierarchy understood"). The only real generation is step 3.

3. **Generation** — `lib/higgsfield/runner.ts` spawns the official CLI. The final prompt is the user prompt plus a fixed suffix (verbatim):

   ```ts
   const creativePrompt = `${input.prompt}. Create an authentic vertical UGC product video. Preserve the product packaging and brand details from the reference image. Natural handheld energy, believable creator delivery, clean product close-ups, strong opening hook, and a confident call to action.`;
   const args = [
     "generate", "create", "marketing_studio_video",
     "--prompt", creativePrompt,
     "--image", input.imagePath,
     "--mode", "ugc",
     "--duration", "15",
     "--resolution", "720p",
     "--aspect_ratio", "9:16",
     "--generate_audio", String(input.generateAudio),
     "--wait", "--wait-timeout", "30m", "--json",
   ];
   ```

   The result URL is found by recursively searching the JSON for an `.mp4`/`.webm` link.

4. **Account/credits** — `app/api/higgsfield/account/route.ts` runs `higgsfield account status --json` and parses `{credits, email, subscription_plan_type}`.

## Models / parameters

Single model: **`marketing_studio_video`**, `mode ugc`, 15 s, 720p, 9:16, audio toggle, one product image reference. No avatar/hook/setting IDs are passed (so Marketing Studio picks defaults — note from the prompt-skill repo: an empty avatar list means a random face per render).

## Editing / assembly

None — the Marketing Studio output is delivered as-is. A "demo" mode returns a sample video without spending credits.

## Costs

Not stated in the repo; the balance is read live. (Marketing Studio budget anchor elsewhere: ~150 credits/video ≈ ~$9 — see [higgsfield-ai-prompt-skill.md](higgsfield-ai-prompt-skill.md).)

## Lessons

- The official CLI (`higgsfield generate create ... --wait --json`) is enough to wrap Higgsfield in any backend; keep provider calls server-side.
- Canvas visualises state; the server owns orchestration — failures are surfaced without losing input.
