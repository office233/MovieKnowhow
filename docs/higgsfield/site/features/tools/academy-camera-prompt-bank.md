# Academy landing + camera-move prompt bank

Source: https://higgsfield.ai/filmmaker-grant (serves the Academy landing page: "Learn. Create. Ship.")

## Courses highlighted
- Blockbuster 4K: The AI Filmmaking Pipeline (10 modules, 40 min, intermediate) - scripting, assets, scene-by-scene prompts.
- Build an Ultra-Realistic Short Film in 4K (19 modules, 33 min) - football drama with Claude Fable 5 + Seedance 2.0 4K.
- Add AI VFX to Real Footage (11 modules, 12 min, advanced) - Seedance 2.0 video-to-video world swaps/creatures.
- Make an AI Animated Short - one story across eight visual worlds.
(Full course notes live in the academy section of this knowledge base.)

## Camera prompt bank (46 examples on site; 10 captured with full text)
Categories: Static, Pan & tilt, Zoom & focus (7), Dolly & tracking (17), Aerial & crane (6), Specialty (7).

### How these prompts are built (reuse this pattern)
1. Name the **single** move and its mechanism (physical dolly vs optical zoom vs rotation from a fixed point).
2. Give **numbers**: start/end distance or height in metres, FOV in degrees, orbit radius/altitude/arc, lens height.
3. List **explicit negatives** for every other move ("no pan, no tilt, no push, no drift, no zoom, no speed ramps").
4. State **speed profile** (constant, decelerating into a static hold) and **framing rule** (horizon level, subject in lower third, head size constant).
5. Bracketed values `[...]` are placeholders to adapt.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Academy / Higgsfield | https://higgsfield.ai/filmmaker-grant | 10 |

## Verbatim prompts (10)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P269 - Camera move: Static shot

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Static; bracketed values are placeholders to replace | Use-case: camera moves

```text
The camera stays planted in one immovable position from the first frame to the last. Zero motion — no drift, no shake, no breathing, no stabilization float, no micro-drift; absolute rock-solid stillness throughout. Angle, elevation, distance to the scene and the overall composition are frozen and never altered; every ounce of motion comes from the scene itself, never from the camera. The clip closes on precisely the framing it began with, identical down to the pixel.
```

### P270 - Camera move: Pan right

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Pan & tilt; bracketed values are placeholders to replace | Use-case: camera moves

```text
Rotate the camera horizontally from left to right from one fixed point, like a standing head-turn, starting on [composition A] and sweeping across [the environment]; no sideways travel, no dolly, no truck, no arc, no slide, no zoom, no tilt. Speed: smooth constant rotation, decelerating gently at the end. Framing: keep the horizon level while new space enters from the right side of the frame only through rotation; [the landing subject] stays beyond the right edge until the rotation brings them in. End: settle on a clear final composition on [the landing subject] and hold.
```

### P271 - Camera move: Tilt up

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Pan & tilt; bracketed values are placeholders to replace | Use-case: camera moves

```text
Fixed camera position at [lens height]. Pure TILT UP: the camera rotates vertically upward at one constant smooth speed from [the lower anchor] to [the upper framing], no crane rise, no pedestal, no dolly, no zoom, no horizontal drift; the camera's position never changes. The tilt starts on [the lower anchor] and finishes framing [the subject] in the upper third, decelerating into a static hold.
```

### P272 - Camera move: Zoom in

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Zoom & focus; bracketed values are placeholders to replace | Use-case: camera moves

```text
Locked tripod, zero rotation, zero travel — the entire move is optical, a focal-length change only: one slow perfectly even continuous zoom in from [84] degrees to [29 or 18] degrees across the full duration, no speed changes, no steps, no wobble. The camera position is fixed and never moves; only the field of view changes; perspective stays constant and there is no parallax — the background keeps the exact same apparent size relative to the subject while the framing tightens.
```

### P273 - Camera move: Dolly zoom

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Zoom & focus; bracketed values are placeholders to replace | Use-case: camera moves

```text
The camera physically dollies forward from [6] meters to [2.5] meters while the lens simultaneously zooms out from [18] to [84] degrees field of view, in one continuous, perfectly synchronized ramp. The subject's head size stays EXACTLY constant in frame the entire time; the background behind them visibly stretches, elongates and recedes into depth, [the repeating background elements] pulling away. Constant lens height, no pan, no tilt, no handheld drift; the two motions start and end together.
```

### P274 - Camera move: Rack focus

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Zoom & focus; bracketed values are placeholders to replace | Use-case: camera moves

```text
The camera hard-locked on a tripod with no pan, no tilt, no push, no drift; the only optical change is FOCUS. Hold sharp on [plane A — the far anchor]; then rack once to [plane B — the near subject]; then follow focus on the subject if they move toward the lens. Speed: the rack is slow, smooth and continuous with no hunting and no overshoot; the follow focus tracks without breathing. Framing: the composition never changes; exactly one plane is sharp at any moment, the other melts into clean bokeh; the subject grows in frame only by physically approaching the lens. End: settle sharp on [the final subject framing], the far plane dissolved to soft bokeh behind.
```

### P275 - Camera move: Crane up

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Aerial & crane; bracketed values are placeholders to replace | Use-case: camera moves

```text
A smooth jib rise from [1.2] meters to [9] meters altitude over the shot, with a gentle continuous downward tilt that keeps the subject anchored in [the lower third] of frame as the world opens above and around them. No lateral orbit, no truck, no zoom, no speed ramps; one continuous vertical reveal easing into a high hold.
```

### P276 - Camera move: Drone orbit

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Aerial & crane; bracketed values are placeholders to replace | Use-case: camera moves

```text
A smooth constant-speed circular drone flight around the subject — [8]-meter radius, [4]-meter altitude, traveling screen-[right] (clockwise seen from above), covering roughly a [200]-degree arc across the shot. The horizon rotates continuously behind the subject; no altitude change, no radius drift, no zoom, no speed ramps.
```

### P277 - Camera move: Aerial pullback

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Aerial & crane; bracketed values are placeholders to replace | Use-case: camera moves

```text
The camera starts [2.5] meters ahead of the subject at [3] meters altitude and flies backward and upward along the axis in one continuous accelerating move, reaching about [40] meters distance and [25] meters altitude by the end. The subject stays centered, then the whole [craft / scene] centers itself in frame as it shrinks; the horizon line rises steadily through the frame. No orbit, no zoom, no speed reversals.
```

### P278 - Camera move: Dolly in

- Page: https://higgsfield.ai/filmmaker-grant | Model: any video model (Academy prompt bank) | Settings: category: Camera > Dolly & tracking; bracketed values are placeholders to replace | Use-case: camera moves

```text
One continuous decisive dolly in on straight ground rails — pure forward travel at constant speed along the axis toward the subject, at a locked constant lens height of [1.5] meters, decelerating smoothly into a static hold at the end framing. The field of view never changes — no zoom: the perspective shifts because the camera physically approaches, near objects sweeping out past the frame edges with strong parallax. No pan, no tilt, no crane, no handheld drift; dead-level travel from first frame to last.
```
