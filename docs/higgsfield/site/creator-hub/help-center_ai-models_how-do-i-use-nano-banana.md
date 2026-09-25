# How do I use Nano Banana?

Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana
Published: Aug 2, 2026 (4 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article (model guide). Nano Banana = Google image family.

| Model | Best for | Key detail | Max refs |
|---|---|---|---|
| Nano Banana Pro | complex scenes with reasoning | analyzes prompt before rendering; up to native 4K | 14 |
| Nano Banana 2 | fast bulk at Pro-level quality | up to 5 consistent characters + 14 stable objects | 14 |
| Nano Banana 2 Lite | fastest drafts/batches | ~4 s/image, 1K only; Thinking level High/Minimal | 14 |
| Nano Banana | instruction editing of existing images | adds/edits text on images | 8 |

**Pro workflow**: Image -> Nano Banana Pro; mode Text-to-Image / Multi-reference / Image-to-Image; specific prompt (subject, setting, lighting, exact quantities, exact text); add refs and state each reference's role in the prompt; iterate at 1K, final at 2K/4K; change prompt OR reference per iteration, never both.
**Draft-to-final**: draft on NB2 Lite, rerun the winner on NB2 or Pro.
**Editing**: upload base image + short instruction (see prompts), up to 8 refs each with a described role.
**Character consistency**: Multi-reference with the same portrait set every time + describe the character's role.
**Fixes**: quantities ignored -> be explicit ("exactly 3 bottles on the left side of the frame"); text wrong -> put exact text in quotes and specify font style, size, placement; blurry at 2K/4K -> retry or generate lower and upscale; rejected ref -> JPG/PNG/WebP, within size limit, no heavy compression or watermarks. Best typography: Nano Banana Pro and Nano Banana 2.

## Prompts (verbatim)

### CH-11
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana (instruction editing)
- Settings: Image edit; upload base image first
- Note: Short edit instruction example.

```text
Change the background to a Parisian café at night
```

### CH-12
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana (instruction editing)
- Settings: Image edit
- Note: Wardrobe swap instruction example.

```text
Replace the T-shirt with a black leather jacket
```

### CH-13
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana (instruction editing)
- Settings: Image edit; text rendering
- Note: Text insertion example. Put exact text in quotes and specify font style, size, placement for accuracy.

```text
Insert text: FUTURE IS NOW.
```

### CH-14
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-nano-banana (local: `help-center_ai-models_how-do-i-use-nano-banana.md`)
- Model: Nano Banana Pro / Nano Banana 2
- Settings: Prompt fragment for exact quantities/layout
- Note: Be explicit instead of "a few bottles".

```text
exactly 3 bottles on the left side of the frame
```
