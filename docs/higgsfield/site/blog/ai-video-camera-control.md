# How to Control Camera Movement, Angles, and Lens in AI Video

Source: https://higgsfield.ai/blog/ai-video-camera-control  
Higgsfield, Jul 24, 2026  
Prompts extracted: 10

Core idea: a camera move is a physical event (start position, end position, speed curve/easing, lens-subject relationship). "Slow dolly in" leaves all that unspecified, so each run guesses differently. **Lock everything you can as settings; write the move itself explicitly in the prompt** (speed, easing, path, end framing, and rule out competing moves).

Failure -> fix:
- Speed varies -> state speed + easing in the prompt, under a fixed Camera MoveSet Style.
- Inconsistent stop distance -> write explicit start and end framing; reuse verbatim.
- Background sharpness drifts -> fix Aperture (f/1.4 Wide Open, f/4 Moderate, f/11 Deep Focus).
- Push vs zoom confusion -> name the move and explicitly exclude the other ("NOT a dolly out…").
- Light direction shifts -> use a Lighting preset (Contre-jour, Practicals) instead of words.

**Cinema Studio 3.5 settings**: Genre (General, Action, Epic, Drama, Comedy, Horror, Noir); Color Palette (Auto, Naturalistic Clean, Bleached Warm, Hyper Neon, Teal & Orange Epic, Sodium Decay, Cold Steel, Bleach Bypass, Classic B&W); **Camera MoveSet Style** (Auto, Classic Static, Silent Machine, One Take, Epic Scale, Intimate Observer, Impossible Camera, Documentary Snap, Raw Chaos, Dreamy Flow); Lighting (Auto, Soft Cross, Overhead Fall, Contre-jour, Window, Practicals, Silhouette); Camera (Auto, Raw 16mm, Fine Film, Clean Digital); Lens (Auto, Clinical Sharp, Extreme Macro, Anamorphic, Warm Halation, Vintage Haze); Focal Length (8, 14, 35, 50, 75 mm); Aperture (f/1.4, f/4, f/11); Aspect (1:1, 3:4, 4:3, 9:16, 16:9, 21:9); Resolution 480p–4K; Duration 4–15 s; Native Audio on/off (no cost change).
Meanings: Drama = camera as observer; Action = kinetic, compressed framing; Epic = environment as protagonist; Noir = shadow logic. Contre-jour = rim-lit silhouette; Practicals = only visible sources light the scene; Soft Cross = half-lit face. Epic Scale = IMAX moves; Silent Machine = slow invisible precision; Raw Chaos = aggressive shake; Classic Static = locked frame. Lenses: Clinical Sharp (commercial), Anamorphic (oval bokeh, flare), Warm Halation (bloom, warm skin), Vintage Haze (old glass), Extreme Macro.
Cost: 4 s ~$1 (720p)/~$2 (1080p); 8 s ~$2/~$4; 15 s ~$3.75/~$7.50. **Test moves at 720p**, then final at 1080p. Use **Recreate** to rerun the exact prompt; attach Soul ID via **Elements** for character continuity across shots.
Each move below has a short universal prompt and a long technical prompt with [bracketed] variables to fill in.

## Prompts (verbatim)

### P1. Pan — short universal prompt
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: pan; MoveSet/lighting/lens locked

```text
Slow camera pan left across a coastal town at dusk, tripod fixed, horizon level.
```

### P2. Pan — full technical template
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: pan, fill [lens height], [90] degrees, [landing event]

```text
The camera body is locked on the fixed tripod at [lens height]; the only motion is one smooth continuous horizontal rotation LEFT of about [90] degrees across the full shot, no travel, no dolly, no truck, no arc, no zoom, no tilt. Constant unhurried rotational speed with a gentle settle in the final half second, timed so the landing composition and [the landing event] arrive together. The horizon stays level throughout; new space enters from the left frame edge only through rotation. End: settle on a clear final composition and hold.
```

### P3. Dolly in — short universal prompt
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: dolly in; Aperture + Lens fixed

```text
Slow dolly in toward a woman reading by a window, constant speed, settling into a static hold.
```

### P4. Dolly in — full technical template (no zoom)
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: dolly in on rails, [1.5] m lens height

```text
One continuous decisive dolly in on straight ground rails, pure forward travel at constant speed along the axis toward the subject, at a locked constant lens height of [1.5] meters, decelerating smoothly into a static hold at the end framing. The field of view never changes, no zoom: the perspective shifts because the camera physically approaches, near objects sweeping out past the frame edges with strong parallax. No pan, no tilt, no crane, no handheld drift; dead-level travel from first frame to last.
```

### P5. Zoom — short universal prompt
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: optical zoom out, tripod

```text
Slow optical zoom out from a lighthouse at dawn, camera locked on a tripod, no travel.
```

### P6. Zoom — full technical template (NOT a dolly)
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: optical zoom [18]°->[84]° FOV, zero parallax

```text
Locked tripod bolted in place, zero rotation, zero travel, the entire move is inside the lens: a purely OPTICAL zoom out, a focal-length pull from telephoto to wide on a stationary camera, exactly like a photographer standing in one spot and slowly turning the zoom ring. One single perfectly even continuous zoom from [18] degrees to [84] degrees across the entire duration, no speed changes, no steps, no drift. NOT a dolly out, NOT a pull-back, NOT a track backward, no rearward travel, no crane, no jib, no pedestal, no drone pull-away, no floating retreat; the camera's position and height are identical in the first and last frame. ZERO parallax: the far background keeps the exact same apparent size relative to the subject from the first frame to the last, and new space enters the picture only at the frame edges as the view opens.
```

### P7. Orbit — short universal prompt (product)
- Use-case: Product ad | Model: Cinema Studio 3.5 | Settings: orbit; Lens Clinical Sharp (clean) or Anamorphic (theatrical)

```text
Slow 360 orbit around a perfume bottle on a marble table, subject centered, constant radius.
```

### P8. Orbit — full technical template (no turntable effect)
- Use-case: Product ad | Model: Cinema Studio 3.5 | Settings: 360° orbit, [2.5] m radius

```text
One continuous 360-degree orbit, the camera travels a full circle around the subject on a locked constant radius of [2.5] meters at a locked constant height, panning continuously to keep the subject dead-center at constant size, one full revolution in ONE direction at one constant angular speed, returning exactly to the opening framing at the end. The subject stays planted, facing one fixed direction in the world the entire time, it is the camera that circles them; the background streams continuously through the full compass behind their shoulders. No radius drift, no height drift, no speed changes, no reversal, no turntable effect where the subject spins in place.
```

### P9. Tracking — short universal prompt
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: lateral tracking; locked Lighting preset

```text
Lateral tracking shot following a cyclist along a canal, strict side view, constant distance.
```

### P10. Tracking — full technical template
- Use-case: Cinematic film scene | Model: Cinema Studio 3.5 | Settings: lateral tracking with 3 parallax layers

```text
One continuous lateral tracking move, the camera glides parallel to the subject at exactly the speed that keeps their framing constant, strict 90-degree side view at all times. Three clean parallax layers: nearest, [posts / mullions / table edges] sweeping fast past the lens, briefly occluding the subject; middle, the subject, constant size at frame center; farthest, [the background row] sliding by slower behind. No zoom, no pan drift, no push-in.
```

