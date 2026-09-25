# How to Build a Website with AI in 2026: From Prompt to Live URL

Source: https://higgsfield.ai/blog/build-website-with-ai  
Higgsfield, Aug 9, 2026  
Prompts extracted: 4

Case study: a launch site for a fictional sneaker line (HIGGSFIELD NATIV: RUNTIME + IDLE) built in **Supercomputer** chat — < 2 h, 8 messages, 5 build passes, **~1,479 credits (~$74)** (reasoning/code 1,072 cr, video 324, images 83; 197 cr discarded).
Steps:
1. **Make product images first** (Nano Banana Pro: two shoes + box). Put the brand mark **inside a filled rounded tile** (models hold shapes better than thin freestanding lines); choose renders by whether the wordmark letters came out intact (broken type rarely fixable). Hex palette in prompt.
2. **First prompt describes behaviour and mood, not layout** (~90 words: mood, structure, one interactive thing, tagline). Template: "Build a launch site for [BRAND]… It should feel like [MOOD]… Visitors should be able to [INTERACTIVE THING]…".
3. The agent asks questions only where answers change the build — reject something to get more questions.
4. **Check for invented facts** (it fabricated a carbon plate, 218 g, 8 mm drop, spare laces).
5. **One fix per message** (e.g. scroll animations must terminate: pinned sections, snap thresholds, verify at three scroll speeds).
6. Publish (free subdomain; deploy takes 1–2 min; re-publishing without deploying does nothing); optional 175-file code export (on-page generator depends on Higgsfield API). Visitors pay their own credits for on-page generation.
Lessons: trust the usage counter, not the agent's cost estimate (it said 380 vs 1,479); supply assets first (saved ~197 credits); delete any claim you didn't write. Launch checklist: private window, first-screen offer, animation end states, phone early, empty/nonsense inputs, facts, accent color, share preview, served version.

## Prompts (verbatim)

### P1. Studio product photo of original running sneaker with legible brand mark
- Use-case: Product ad | Model: Nano Banana Pro | Settings: 4K, 16:9, hex palette, 100mm macro f/8

```text
Studio product photograph of an original performance running sneaker, right shoe, three-quarter front view, floating a few centimeters above a seamless dark graphite backdrop with a soft contact shadow beneath it.
Design: modern racing silhouette with aggressive rocker geometry. Engineered knit upper in deep matte black with a fine woven texture. Thick sculpted midsole in off-white foam with a visible plate line running through it. One acid lime accent only: the heel counter wrap and a thin lime line tracing the midsole edge. Lime flat laces.
Branding, rendered crisply and legibly. On the heel tab, a small rounded-square rubber patch in acid lime with a black brand mark centered inside it: a single continuous ribbon-like stroke of uniform thickness with rounded ends, curling into two opposing loops and crossing over itself once in the centre. The wordmark HIGGSFIELD in a tight condensed uppercase sans, printed small in acid lime on the lateral midsole, letters evenly spaced and perfectly horizontal.
Materials: matte knit, semi-gloss rubber outsole, brushed metallic eyelets.
Look: 100mm macro lens at f/8, low-key studio lighting, one large softbox top-left, hard rim light from the right edge catching the lime accent, deep controlled shadows, crisp focus across the entire shoe, very fine grain.
Palette strictly limited to #0F1113 black, off-white, #2B2F33 graphite and #CCFF00 acid lime.
Editorial sportswear campaign quality, 4K, no people, no watermarks, no reflective floor, no props. Aspect ratio 16:9.
```

### P2. First website prompt (behaviour + mood, not layout)
- Use-case: Other | Model: Higgsfield Supercomputer | Settings: website build

```text
Build a launch site for HIGGSFIELD NATIV, a two-model sneaker collection. RUNTIME is the performance pair, IDLE is the everyday pair.
It should feel like a fast, dark editorial film: full-screen sections, big type that moves as you scroll, one acid lime accent on near-black, nothing decorative. Treat the two models as two states of the same thing and let scrolling move between them.
The site should not just show the shoes. Visitors should be able to generate their own version of the shoe on the page and keep it.
Tagline: A creative suite you can wear.
```

### P3. Website prompt template with placeholders
- Use-case: Other | Model: Higgsfield Supercomputer | Settings: template

```text
“Build a launch site for [BRAND], a [WHAT IT IS]. [PRODUCT A] is [ROLE], [PRODUCT B] is [ROLE].
It should feel like [THREE OR FOUR WORDS OF MOOD]: [WHAT THE SCREEN DOES], [ONE ACCENT COLOUR] on [BASE COLOUR], nothing decorative.
The site should not just show [THE PRODUCT]. Visitors should be able to [THE ONE INTERACTIVE THING] on the page.
Tagline: [TAGLINE].”
```

### P4. Fix non-terminating scroll animations
- Use-case: Other | Model: Higgsfield Supercomputer | Settings: fix message

```text
The scroll animations never finish. Elements start moving and then get left partway through: rotations stop short of their final angle, headlines drift toward their position and keep easing without ever landing.
Give every scroll animation a defined end state that is always reached. Pin each animated section for the full duration of its animation, so scroll progress runs from 0 to 1 before the section leaves the viewport. Every rotation must land on an exact final value with no residual offset. Replace any asymptotic smoothing with easing that terminates: if you use a lerp, add a snap threshold so the value locks to its target once it is close.
Then verify every section at three scroll speeds: slow, normal, and a fast flick. In all three the animation must end in the same final state, and all text must be readable the moment the section lands.
```

