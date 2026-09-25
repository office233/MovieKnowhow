# Academy Prompt Bank - camera movements

Sources:
- https://higgsfield.ai/academy/apps/prompt-bank

Page: "Prompt Bank - production-ready prompts for camera movement, camera effects and visual effects". Section **Camera**, tab **Camera movements**; 46 entries in total across categories Static (1), Pan & tilt (8), Zoom & focus (7), Dolly & tracking (17), Aerial & crane (6), Specialty (7). The first page (24 entries) is embedded in the HTML and reproduced here; entries already captured in [../../features/tools/academy-camera-prompt-bank.md](../../features/tools/academy-camera-prompt-bank.md) (which also explains the construction pattern: one named move, numbers for distance/height/FOV, explicit negatives, speed profile, framing rule) are linked instead of repeated. Each entry has a demo video and a "Recreate" button that opens the video generator.

Page-2 entries (22 more, not embedded) are a gap.

## Prompts

11 new verbatim prompt(s) below; 13 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Push in

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Dolly & tracking; bracketed values are placeholders
- Use-case: cinematic film scene

```text
A slow continuous creeping forward drift from [7] meters to [2] meters over the full shot — gimbal-smooth floating advance at [1.5]-meter height with barely perceptible organic sway, no rails feel, no speed changes, no zoom, no pan, no tilt. The approach should feel like held breath, decelerating into a near-stop at the end framing.
```

### Handheld

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Specialty; bracketed values are placeholders
- Use-case: cinematic film scene

```text
Raw handheld shoulder-rig throughout — visible shake, operator breathing, rolling horizon, imperfect reframes that always recover. Path: [opening angle] → [rough half-circle drift around the subject] → [lean-in to close-up] → [loose pull-back and hold]. Never stabilized, no gimbal float, no rails feel.
```

### POV

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Specialty; bracketed values are placeholders
- Use-case: cinematic film scene

```text
The camera is a person's eyes at [1.7]-meter height walking forward from [the start point] to [the end mark]. Natural human walking cadence — gentle vertical bob synced to the steps, slight lateral sway, small organic head micro-rotations glancing around the space. The person's hands appear in frame only for [the interaction], then drop out of frame. The walk stops when [the trigger event].
```

### Bullet time

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Specialty; bracketed values are placeholders
- Use-case: cinematic film scene

```text
Bullet time orbit: time inside the scene slams to a near-freeze — the subject hangs suspended mid-action, with droplets, debris and particles locked motionless in mid-air, every suspended object holding its exact position and angle with zero drift — while the camera alone keeps moving at normal speed, sweeping along a smooth circular arc around the frozen moment. The camera's travel through the curve is fluid, constant and unaffected by the stopped world. Distance to the subject and camera height stay fixed; the suspended figure remains centered, sharp and fully readable as the perspective wheels around them and the background rotates past. The orbit settles on a striking new angle of the frozen instant and holds that composition before time is released again.
```

### Crush zoom

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Zoom & focus; bracketed values are placeholders
- Use-case: cinematic film scene

```text
Camera locked on a tripod — a perfectly static hold on the tight [18]-degree frame, then a violent optical crash zoom OUT — about 0.4 seconds, zoom-ring only, with real motion blur and a hard stop — landing on a locked wide [84]-degree frame held perfectly static to the end. No dolly, no handheld, no speed ramps; the camera position never moves, only the field of view changes, and there is no parallax.
```

### Robot arm

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Specialty; bracketed values are placeholders
- Use-case: cinematic film scene

```text
The camera flies one fast, perfectly smooth stabilized motion-control path through four positions — [front eye-level medium close-up] → [side arc at eye level] → [sinking into a low angle with a slight dutch tilt] → [craning up and over into a top-down 3/4 view]. Each glide takes about [1] second with soft ease-in/out and brief readable holds at every position; machined gimbal/crane quality — no shake, no whip pans, no speed ramps, no motion blur.
```

### Body-mounted camera: Snorricam

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Specialty; bracketed values are placeholders
- Use-case: cinematic film scene

```text
A rigid chest-mounted rig facing back at the subject — their face and torso locked to the frame center for the entire shot, unable to leave it; the subject's walk transfers to the WORLD as a slow gentle bob and sway, [the background elements] gliding past behind their shoulders, never lurching. No stabilization beyond the rig's rigidity, no independent camera motion, no zoom.
```

### Timelapse

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Specialty; bracketed values are placeholders
- Use-case: cinematic film scene

```text
A single slow, perfectly smooth constant pull-back, the frame gradually widening — no shake, no orbit, no speed changes, no zoom substitution. Two speeds of time in one frame: the world runs in time-lapse — [day → night → morning → rainy twilight → day], smooth in-frame light morphs — while the subject moves in real time at normal human speed.
```

### Chase shot

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Dolly & tracking; bracketed values are placeholders
- Use-case: cinematic film scene

```text
Sweep the camera in toward the running subject, then follow them handheld across [the terrain], lurching and shaking with each impact. Speed: fast and unstable, with sharp jolts on every [tremor / collision], imperfect reframes that always recover the subject. Framing: keep the subject in frame while [the hazards] enter and pass through it. End: the shake eases; settle on a clear final composition.
```

### Truck right

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Dolly & tracking; bracketed values are placeholders
- Use-case: cinematic film scene

```text
One continuous truck right — pure lateral travel of the camera to the right at constant speed with the lens axis locked straight ahead, no panning to compensate: the scene slides through the frame with strong natural parallax, near objects sweeping past fast, the far layer drifting slow, the subject crossing gradually toward the left frame edge. No pan, no arc, no dolly, no zoom, no handheld drift; the lens points the same world direction in the first and last frame.
```

### Low tracking

- Source: https://higgsfield.ai/academy/apps/prompt-bank
- Model: any video model (Recreate opens /generate?mode=video)
- Settings: category: Dolly & tracking; bracketed values are placeholders
- Use-case: cinematic film scene

```text
Extreme slow motion throughout — a ~1000fps look with no speed ramps and no real-time moments — the camera at ground height below knee level the entire time: a smooth lateral track gliding alongside the subject at slow-mo pace, strict side view, never rising, never tilting up, no push, no orbit, no zoom. The track never stops: the shot ends mid-motion on a live frame — no cut to black, no fade, no freeze.
```

### Already captured elsewhere (linked, not repeated)

- Static shot: "The camera stays planted in one immovable position from the first frame to the..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Pan right: "Rotate the camera horizontally from left to right from one fixed point, like a..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Tilt up: "Fixed camera position at [lens height]. Pure TILT UP: the camera rotates vertically upward..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Zoom in: "Locked tripod, zero rotation, zero travel — the entire move is optical, a focal-length..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Dolly zoom: "The camera physically dollies forward from [6] meters to [2.5] meters while the lens..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Rack focus: "The camera hard-locked on a tripod with no pan, no tilt, no push, no..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Crane up: "A smooth jib rise from [1.2] meters to [9] meters altitude over the shot,..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Drone orbit: "A smooth constant-speed circular drone flight around the subject — [8]-meter radius, [4]-meter altitude,..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Aerial pullback: "The camera starts [2.5] meters ahead of the subject at [3] meters altitude and..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Dolly in: "One continuous decisive dolly in on straight ground rails — pure forward travel at..." -> [site/academy/academy-hub-part1.md](../../academy/academy-hub-part1.md)
- Tracking: "One continuous lateral tracking move — the camera glides parallel to the subject at..." -> [site/blog/ai-video-camera-control.md](../../blog/ai-video-camera-control.md)
- 360 orbit: "One continuous 360-degree orbit — the camera travels a full circle around the subject..." -> [site/blog/ai-video-camera-control.md](../../blog/ai-video-camera-control.md)
- Pan left: "The camera body is locked on the fixed tripod at [lens height]; the only..." -> [site/blog/ai-video-camera-control.md](../../blog/ai-video-camera-control.md)
