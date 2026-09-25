# How to Restore Old Photos with AI (Full Guide)

- Source: https://higgsfield.ai/blog/restore-old-photos-ai
- Byline: Higgsfield · Aug 2, 2026 · 10 min · Last updated: 3w ago
- Prompts extracted: 1

## Notes

**Topic:** restoring old/damaged photos (Aug 2 2026).
- Restoration (remove damage, keep identity) vs generation (invents content). Fixes: scratches/creases/tears, fading/yellowing, blur, low resolution (2x-4x), exposure/lighting, scan dust/grain.
- **Topaz High-Resolution Upscaler:** upload, scale factor **x1-x16**, one click, no prompt (scratch removal + sharpening + upscale) — best when problems are resolution/general wear. 3 cr ($0.15). Use x8-x16 for tiny sources or large prints.
- **Nano Banana Pro / GPT Image 2:** upload + short restoration prompt (template below) for colour, physical damage, overall clarity; choose 1K/2K/4K. NB Pro 2K 2 cr / 4K 4 cr; GPT Image 2 2K 7 cr / 4K 12 cr.
- **Relight** (2 cr): light position presets Top/Front/Right/Left/Back/Bottom or drag; Soft/Hard; brightness — for exposure/flash problems.
- **Inpaint** (3 cr): paint over one area (tear, stain, or an object to swap) so nothing else changes.
- Batch tip: test settings on a few representative photos before running a whole collection.

## Prompts (verbatim)

### P1. The Actual Workflow: Step-by-Step Guide

- Model / settings: Nano Banana Pro or GPT Image 2 (prompt-based restoration; output 1K/2K/4K)
- Use-case: other
- Context: Nano Banana Pro or GPT Image 2: upload and prompt. These require a short prompt describing the restoration, though it doesn't need to be complex or technical. The same basic prompt structure works across most restoration jobs, since the model is looking for a clear description of what to fix rather than an exhaustive technical brief:

~~~~text
Restore this old photograph while preserving the original person's identity, facial structure, expression, clothing, and historical authenticity. Remove scratches, dust, tears, stains, fading, discoloration, creases, mold, film grain, noise, blur, and compression artifacts. Reconstruct damaged or missing areas seamlessly using surrounding context without inventing new facial features or altering the person's appearance. Recover fine details in the eyes, skin, hair, clothing, and background. Correct exposure, contrast, white balance, and tonal range for a clean, natural result. Enhance sharpness and clarity while maintaining realistic textures and avoiding over-processing, oversharpening, plastic skin, or AI artifacts. Preserve the original composition, perspective, lighting, and vintage character.
~~~~

