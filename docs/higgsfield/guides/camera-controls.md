# Camera controls & motion presets — craft notes

Researched: 2026-09-25 (search extracts of official pages; direct fetch blocked — see cinema-studio.md note).

## Three ways to control the camera
1. **Text in the prompt** — describe the move; the model executes it at generation time.
2. **Fixed parameter/preset** chosen before generation (Cinema Studio, Camera Controls / Motion library).
3. **Both** — preset for the move, prompt for subject/action/timing. Official guidance favors explicit
   settings over vague prose to reduce wasted re-rolls.

## Preset vocabulary seen on official pages (50+ presets in the library)
Bullet Time (time slows as camera orbits subject), Crash Zoom In / Out, Dolly Zoom In / Out (vertigo),
Dolly In / Out, FPV Drone, Aerial Pullback, Arc Left / Right, Car Chasing, Crane Up / Down,
Flying Cam Transition, Fisheye, POV, Robot Arm, Pan Left / Right, Helicopter Shot, Static, Handheld,
Zoom, Tracking, Orbit. (Cinema Studio 4.0 advertises 30+ camera presets; the standalone Camera Controls
page advertises 50+.)

## How to write a camera move (checklist)
- Verb first: "slow dolly in", "180° orbit left", "crane up to reveal", "handheld follow".
- Start and end framing: "from wide to extreme close-up on eyes".
- Travel amount and speed: degrees for arcs, "slow"/"fast", or a speed-ramp setting.
- Height and stabilization: low-angle, eye-level, overhead; gimbal-smooth vs. jittery handheld.
- One dominant move per shot for reliability; stack moves (hashtags) only when they should run in sequence.
- Pair moves with purpose: crash zoom = comedic/shock beat; dolly zoom = dread/realization;
  bullet time = hero beat; FPV = energy/scale; aerial pullback = ending/reveal.

## Model notes
- WAN camera control guide: official blog on making AI footage "look filmed" with explicit moves.
- Kling 3.0 / Seedance: describe the move inside each numbered shot of a multi-shot prompt.

## Sources
- https://higgsfield.ai/camera-controls
- https://higgsfield.ai/blog/ai-video-camera-control
- https://higgsfield.ai/viral-presets/examples/bullet-time
- https://higgsfield.ai/blog/turn-your-video-into-cinema-using-wan-camera-control
- https://higgsfield.ai/blog/cinema-studio-4-0
