# Higgsfield UI Guide — How to Run a Seedance Shot

A producer's-eye walkthrough of the Higgsfield web interface ([higgsfield.ai](https://higgsfield.ai/)) for running Seedance 2.0 shots from this pipeline. Use this when you've just signed up for Plus or Ultra and you're staring at the Generate / Workspace view wondering where everything is.

> **Higgsfield is browser-only — no desktop app.** Everything you need is in the web Generate view.

> **Note on screenshots:** This guide is text-first. Screenshots will be added as we capture them — Higgsfield's UI evolves more often than ArtCraft's, so the textual descriptions are the durable reference. If you're a Higgsfield user and want to contribute annotated screenshots, drop them in `docs/images/higgsfield-*.png` and reference them inline.

## What Higgsfield gives you that ArtCraft doesn't

Before diving in: Higgsfield is the **professional-tier** option (~$34–49/mo for Plus, more for Ultra). It runs the same Seedance 2.0 model as ArtCraft and the same baseline quality. What you're paying the premium for:

- **Auto-edit multi-cut** — paste one prompt with multiple shot beats, get back one stitched video with internal cuts. ArtCraft can't do this in a single render.
- **Edit-and-rerun on a single prompt** — iterate on the same prompt without re-pasting everything. Tightens the re-roll cycle.
- **Larger generation budget** — more seconds of generation per month, useful for heavy-iteration shoots or multi-project months.
- **More image-side tools in the same app** — Banana Pro, Soul Cinema, GPT-2 (Nano Banana Pro) all live in the same workspace, so you can stay in one tab for image + video.

If your shot list doesn't specifically need any of these, **ArtCraft does the same Seedance 2.0 work at a fraction of the cost** (see `docs/artcraft-ui-guide.md`).

## The Workspace at a glance

Higgsfield organizes its tools as a left-rail navigation. The areas that matter for this pipeline:

- **Generate / Workspace (main view)** — where you compose and run video prompts. This is where Seedance 2.0 lives.
- **Soul Cinema** — for exploratory face plates (Mode 0 two-pass iteration path) and outfit-on-neutral-model builds. Used in `banana-pro-director` Mode 0 Step 0.1 and Mode 1B.
- **Banana Pro / Nano Banana Pro** — for face locks (Mode 0 single-pass default), outfit composites, fuses, 6-panel sheets, scene plates, outfit replacement swaps. Used in `banana-pro-director` Modes 0 / 1A / 1B Step 1B.2 / 2 / 3 / 5.
- **GPT-2** — for highest-fidelity face locks and detail face/chest-up shots (higher credit cost). Used in `banana-pro-director` Mode 0 Step 0.B and Mode 4.
- **Library / Workspace history** — your previous generations, organized by project. ArtCraft has the equivalent.
- **Account / Billing** — tier management. Plus / Ultra plans show your monthly generation budget here.

For Seedance video shots, you'll spend nearly all your time in the **Generate / Workspace view**.

## The Generate view — every per-shot setting

Higgsfield's generate panel is conceptually identical to ArtCraft's — same Seedance 2.0 model under the hood, same per-shot controls. Layout differs but the same elements are there.

### Model selector

Confirm **Seedance 2.0** is the selected video model. Higgsfield's Workspace can also run other models (Veo, Kling, Wan, etc.); the prompts in this pipeline are written specifically for Seedance 2.0's grammar (the ten labeled blocks from Scene & Mood through Camera Capture, `@imageN` reference tags, cinema-mode camera language). Switching models silently mid-project produces unpredictable drift — don't do it.

### Prompt field

The main text area is where the `cinema-worldbuilder` prompt goes. Paste the entire code block the specialist delivers, exactly as written — all ten labeled blocks (Scene & Mood → Camera Capture) and the inline `@imageN` tags. The tags are functional Seedance syntax: they map to the reference images you attach, in the numbered order from the delivery's reference list. Don't truncate — Higgsfield's prompt budget for Seedance 2.0 is generous enough to fit everything the specialist produces.

### Reference attachment — the "elements list"

This is Higgsfield's equivalent of ArtCraft's Reference mode. Look for the **elements list** panel (sometimes labeled "References," "Images," or "Inputs" depending on UI version) attached to the Generate composer.

- **Drag the locked references into the elements list in the exact numbered order from cinema-worldbuilder's delivery** — bullet 1 first, bullet 2 second, and so on. The `@image1`–`@image9` tags inside the prompt map to this order; shuffling it breaks the anchoring.
- Seedance accepts up to **9 reference images** per generation — the specialist's reference list never exceeds that.
- For music-video lip-sync shots, the elements list is also where the **audio reference slice** goes (see `ai-film-director` Step 5.0.5 and the cinema-worldbuilder lip-sync hook). Drop the matching ~12s Suno slice alongside the image refs.

### Aspect ratio

Aspect ratio selector — same options as ArtCraft (16:9, 9:16, 1:1, 2.39:1, 4:5, etc.). **Set per shot.** The orchestrator tells you which to use for each shot. Don't trust the previous shot's setting to carry over.

### Resolution

Higgsfield supports 720p and 1080p for Seedance 2.0 outputs. **Default to 720p** — Topaz Video in post-production upscales cleanly, and 720p costs significantly fewer credits than 1080p. Bump to 1080p only when you have a specific reason and the credit budget to absorb it.

### Runtime

Per-shot runtime — 3s, 5s, 8s, 10s, 12s, etc. Use the runtime `cinema-worldbuilder` quoted for this shot, no more. Every second is credit spend, and the prompt is calibrated for the specific duration the specialist wrote it for. Don't extend runtime "just in case" — it inflates cost and dilutes the shot's pacing.

### Auto-edit (THE Higgsfield-specific feature)

This is the toggle that justifies the Higgsfield premium for some shots. Look for an **Auto-edit** or **Multi-cut** toggle in the generate panel.

- **Auto-edit OFF (single sustained take)** — Seedance generates one continuous shot from your prompt. Use this for most shots in the pipeline. Same as how ArtCraft behaves by default.
- **Auto-edit ON (multi-cut sequence)** — when your prompt describes multiple distinct beats with explicit hard cuts ("Wide establishing → cut to medium → cut to close on hands"), Seedance generates one video with internal cuts at the beat transitions. This is what you cannot do in ArtCraft in a single render.

**Use Auto-edit ON only when the shot list explicitly calls for a multi-cut burst in one generation.** Single-take shots stay OFF. The orchestrator's shot-list entries mark this per-shot under "Auto-edit: ON / OFF."

### Edit-and-rerun

When a generation comes back almost right, Higgsfield lets you tweak the prompt in-place and rerun without re-pasting the whole thing. Useful for tightening: "the bow color is wrong" → edit the wardrobe color in the Subject Lock block → rerun. ArtCraft requires a full re-paste for the same change.

Use this for surgical iterations. For a fundamentally different take, re-paste from scratch so you're not anchored on the previous draft.

### Generate (with credit cost preview)

The big Generate button. Higgsfield shows the **credit cost preview** for the configured generation before you click — same as ArtCraft. **Always glance at this number before clicking** to catch misconfigurations (runtime accidentally bumped, resolution flipped to 1080p, auto-edit on when it shouldn't be).

## Per-shot generation checklist

Run this mentally every shot:

- [ ] **Prompt pasted** into the central text field, exactly as the orchestrator wrote it
- [ ] **Seedance 2.0** confirmed in the model picker
- [ ] **References attached** in the elements list (character sheet / environment plate / prop sheet, plus audio slice for music-video sync shots)
- [ ] **Aspect ratio** set for this shot
- [ ] **Resolution** at 720p (unless explicitly going 1080p)
- [ ] **Runtime** matches the shot list
- [ ] **Auto-edit** ON if and only if this is a multi-cut shot per the shot list
- [ ] **Credit cost** in the Generate button matches what you expected
- [ ] Click **Generate**

Take the result back to the orchestrator conversation: "Shot N kept" / "Shot N iterate" / "Shot N wasted."

## What you don't need (skip these)

- **Other video models** (Veo, Kling, Wan) — the pipeline is Seedance 2.0-specific. cinema-worldbuilder prompts won't translate cleanly to other models.
- **Other Higgsfield products** beyond what's listed above (model fine-tuning, branded asset packs, etc.) — useful in other contexts, irrelevant to this pipeline.
- **Public sharing / community feed features** — your generations are private to your workspace by default; you don't need to publish anything to use the pipeline.

## When something goes wrong

- **Clip looks nothing like the references** → check the elements list. If references didn't attach (occasional drag-and-drop hiccup), re-attach and re-generate.
- **Credit cost on Generate is way higher than expected** → check runtime, resolution, auto-edit toggle, and whether you accidentally bumped batch / copy count.
- **Multi-cut shot generated as one continuous take instead of stitched cuts** → Auto-edit toggle is OFF; flip it ON and re-generate.
- **Lip-sync isn't tracking** → check that the audio slice in the elements list is the correct ~12s window containing the exact lyric in the prompt, and that the prompt's Dynamic line includes Joey's pattern verbatim: `lips visibly mouthing the words '[lyric]' with exaggerated clarity` (see `cinema-worldbuilder` LIP-SYNC HOOK).
- **Hit your monthly Plus / Ultra generation cap** → upgrade tier, wait for cycle reset, or finish the project on ArtCraft for shots that don't need multi-cut (cheaper top-up).

## See also

- `docs/artcraft-ui-guide.md` — same walkthrough for ArtCraft (the default for most projects)
- `ai-film-director/SKILL.md` Step 5.0.1 — the orchestrator's first-time host setup walkthrough that points here
- `CLAUDE.md` — the workspace-level overview of where Higgsfield fits in the full production stack
- `cinema-worldbuilder/SKILL.md` — the prompt grammar Higgsfield's Seedance 2.0 expects
