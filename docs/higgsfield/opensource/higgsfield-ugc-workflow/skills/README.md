# The skills

Seven skills. One orchestrator that drives the other six in order. Each one is also usable on
its own. Drop these folders into your assistant's skills directory (see the repo `SETUP.md`),
then say "make a UGC ad" and the orchestrator runs the whole thing.

Each skill is a single `SKILL.md` file: a name, a description that tells the assistant when to
use it, and step-by-step instructions the assistant follows. They are written in plain
instruction language, not code, so you can read exactly what each one does and change anything
you want.

## The pipeline order

| # | Skill | What it does | Paid? |
|---|---|---|---|
| 0 | **[ugc-ad](ugc-ad/SKILL.md)** | The orchestrator. Drives all the steps below in order, with the checkpoints and the cost gate. This is the one you invoke. | no (drives the others) |
| 1 | **[ugc-product-profile](ugc-product-profile/SKILL.md)** | Turns your product photo or link into a structured profile plus a clean reference image. | cheap |
| 2 | **[ugc-brief](ugc-brief/SKILL.md)** | Writes the one-page plan (angle, three-cut shot map, settings) you approve before any spend. | free (writing) |
| 3 | **[ugc-base-character](ugc-base-character/SKILL.md)** | Generates the creator's face. Person only, no product. | cheap |
| 4 | **[ugc-storyboard-sheet](ugc-storyboard-sheet/SKILL.md)** | Generates the three-panel storyboard that locks the creator and product. The key step. | cheap |
| 5 | **[ugc-multicut-script](ugc-multicut-script/SKILL.md)** | Writes the script and the phonetic voice prompt. | free (writing) |
| 6 | **[ugc-video](ugc-video/SKILL.md)** | The one paid step. Generates the finished video with native voice via Seedance, behind a cost gate. | **paid (~67 credits)** |
| 7 | **[ugc-enhance](ugc-enhance/SKILL.md)** | Adds a music bed and karaoke captions. Local render. Optional, on by default. | free render + small music cost |

## How they fit together

The orchestrator (`ugc-ad`) reads each artifact a step produces and passes it to the next step.
The product profile feeds the brief and the storyboard. The character and the product feed the
storyboard. The storyboard, the character, and the product all feed the final video. Everything
lands in one dated folder so a single ad is self-contained and traceable.

You approve the character and the storyboard (both cheap), you confirm the spend before the
video, and you check the audio after. Those are the only moments a human is required, and they
are deliberately placed before, at, and after the one expensive call.

## Using a skill on its own

Every skill is independently invocable. If you only want a product profile, or only want to
enhance a video you already have, you can invoke just that one. The `ugc-enhance` skill in
particular works on any talking-head mp4, not just ads from this pipeline.

## A note on the skill files

These are the real, working skill files, lightly adjusted so they run outside their original
workspace (the output folder defaults to a neutral `out/` directory, and one internal cross-
reference was inlined). They were validated end to end on the surfboards demo in `examples/`.
The `ugc-enhance` skill carries its own `assets/` (an HTML render template and a captions data
example) that the render step copies in.
