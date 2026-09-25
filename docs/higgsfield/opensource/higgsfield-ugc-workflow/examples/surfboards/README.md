# Worked example: the surfboards ad

This is a real, finished run of the whole pipeline, for a made-up surfboard brand. Every file
here was produced by the seven skills, in order. It is the best way to see what each step
actually looks like before you run your own.

Walk it in pipeline order:

| File | The step that made it | What to notice |
|---|---|---|
| `product-profile.md` | 1. Product profile | The "exact usage steps" near the bottom. Those become the motions the creator performs on camera (lift the board, tuck it under an arm, run a hand down the rail). |
| `product.png` | 1. Product profile | The clean product reference everything else locks onto. |
| `brief.md` | 2. Brief | The angle, and the three-cut shot map (tight hook, macro action, wide recommendation). The whole ad is decided here before any spend. |
| `character.png` | 3. Base character | The creator's face. Person only, no product. This portrait locks the identity. |
| `storyboard.png` | 4. Storyboard sheet | **Open this one.** Three panels, same surfer, same board, three framings. This single image is why the final video stays consistent and has a real beginning, middle, and end. |
| `script.md` | 5. Multi-cut script | The spoken lines, and the `SEEDANCE_PROMPT` block at the bottom. Notice the brand is written "Joe Bee Surfboards" in the spoken line so the "B" is pronounced "bee," while the real spelling stays "Joe B Surfboards" everywhere else. That is the phonetic-voice trick. |
| `cast.md` | 3. Base character | The creator registry. A face you like can be promoted to a keeper and reused. |
| `enhance/` | 7. Enhance | The recipe for the music-and-captions polish: the captions data and the design notes. The captions show the correct brand spelling even though the voice used the phonetic one. |

The two video files (the base render and the enhanced cut) are not included here to keep the
repo light. The artifacts above are what teach the workflow. If you run the pipeline on your
own product, you will get this same set of files in your output folder, plus the two mp4s.

Read these alongside `GUIDE.md` and the steps will click.
