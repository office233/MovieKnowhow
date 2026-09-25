# DESIGN — UGC enhance (captions + music + transitions)

Post-production glow-up layered over the base Seedance master. Adapt the accent to the brand.

## Style Prompt
Crisp white karaoke captions with a single brand-accent color on the words that matter (the spec, the brand, key claims). Energy medium-high but credible. Punchy white flash + zoom-punch on each hard cut. Music bed ducked under the native VO.

## Colors
- `#FFFFFF` — caption text (primary)
- `<BRAND_ACCENT>` — accent on active/keyword highlight (default `#2BA8E0`; pull from the product label / brand cues)
- `#08111C` — bottom scrim base (legibility wash)
- `#FFFFFF` — transition flash

## Typography
- `Montserrat` 800 captions (700 for a small legal/close line). `tabular-nums` on figures.

## Motion
- Captions: group scale-pop `back.out(1.5)` ~0.34s; per-word karaoke light-up (0.5 -> 1.0); accent words pop to brand color at scale 1.12.
- Cuts: 0.07s white flash + video zoom-punch 1.06 -> 1.0 `power3.out` at each detected cut.

## What NOT to Do
- No generic blue (#3b82f6), no Roboto, no default greys — use the brand accent.
- No full-screen linear gradients (banding) — bottom-localized scrim only.
- Never cover the creator's face — captions ride the lower third.
- Display the brand name with its REAL spelling, even though the VO uses a phonetic respelling.
- Keep music under the VO (the voice is the message).
