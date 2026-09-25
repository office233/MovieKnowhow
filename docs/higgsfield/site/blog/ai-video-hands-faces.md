# Why AI Video Still Gets Hands and Faces Wrong (And How to Fix It)

Source: https://higgsfield.ai/blog/ai-video-hands-faces  
Higgsfield, Jul 24, 2026  
Prompts extracted: 0

Why: hands = high structural detail in a small area + fewer clean training examples; faces = no memory between frames, so every generation re-invents a face from the description; overloaded prompts split attention and hands/faces degrade first.

5 fixes:
1. **Trained identity instead of face description** — Soul ID (20+ photos) applied across generations.
2. **Frame via Cinema Studio settings** — choose lens, focal length and aperture according to how much of the frame the hand/face occupies (macro hand ≠ wide face shot).
3. **Describe start and end states, not the motion** — the hand's exact position at start and at end; the model interpolates between two fixed points instead of inventing a path.
4. **Multi-reference model** — on **Seedance 2.0** upload a reference image of the exact hand position alongside the character reference (Seedance 2.0 takes up to 12 references per generation).
5. **Hardest detail first in the prompt** — hand/face with the most specific language before background, lighting, wardrobe.

Step-by-step: train Soul ID (vary angles/light) -> set Cinema Studio genre, lighting preset, lens, focal length, aperture -> attach gesture/object reference image with the Soul ID -> write prompt with start/end states first -> generate and **check the hardest detail first**; if wrong, change the reference image or start/end description before anything else.
Cinema Studio specs cited: 6 lens options, 5 focal lengths, 3 apertures, 10 camera movement styles. Soul ID works across Kling 3.0, Veo 3.1, Seedance 2.0, WAN 2.6 and persists in Cinema Studio, Marketing Studio, LipSync Studio.
Multi-character scenes make hand/face errors worse. Same prompt without Soul ID -> different people each run.

