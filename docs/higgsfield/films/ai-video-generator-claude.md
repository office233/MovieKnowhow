# ai-video-generator-claude (Roman Knox / rediumvex) — 10 short-form ad/social prompt skills for Seedance 2.0 on Higgsfield

- Upstream: <https://github.com/rediumvex/ai-video-generator-claude> (commit `ffdad7d`)
- Local copy: [`../opensource/ai-video-generator-claude/`](../opensource/ai-video-generator-claude/)
- License: MIT © 2026 Roman Knox
- Type: **ads / social clips** (prompt-writing skills; no generation code)

## What was made

"**This is the actual skill set I use to generate every AI video for @theromanknox (300K+ followers).**" (README.md). Each skill turns a one-line idea into "a 15-25 line production-grade prompt with exact timing, camera angles, lighting setup, and sound design" to paste into Higgsfield (Seedance 2.0). Skills: 01 Viral Hook, 02 SaaS Launch, 03 Personal Brand, 04 Course Promo, 05 Faceless Channel, 06 Luxury Aesthetic, 07 Before-After, 08 Testimonial Story, 09 AI Avatar, 10 Podcast Visual.

## Pipeline

1. User gives concept ("10s product launch video, dark UI, minimal").
2. Skill picks a **2-second hook** pattern, then builds a **per-second timeline** (0–2s, 2–4s…), camera move, lighting preset, 4-layer sound design (ambient + impact + music + voice) synced to beats, platform format.
3. Prompt lists **material references** (`@image1` UI screenshot, `@image2` logo, `@audio1` brand track…).
4. User pastes into Seedance 2.0 on Higgsfield and attaches the materials.

Seedance 2.0 input specs as used by the skills (`skills/02-saas-launch/SKILL.md`): "Images: Up to 9 (UI screenshots, logo, product photos, mockups)" · "Videos: Up to 3" · "Audio: Up to 3" · "Output: 4-15 seconds, 720p with synchronized audio".

## Full example prompts (verbatim)

**SaaS product launch hero, 12 s** (`skills/02-saas-launch/SKILL.md`):

```
SEEDANCE 2.0 PROMPT:

Black screen. Single cursor blink in center — small, white, rhythmic. Minimal.

0-2s: Cursor blinks 3 times in darkness. Each blink accompanied by soft
digital pulse sound. Camera is static. Tension builds through simplicity.
Viewer focuses on the only moving element. On third blink, cursor transforms
into product logo, scaling from small to medium.

2-4s: Logo settles center-frame. Camera begins slow push-in. Dark gradient
background with subtle brand-color glow behind logo. Logo catches light —
metallic or glass material, not flat. Ambient synth note enters, sustained.
Logo rotates slightly on Y-axis revealing 3D depth.

4-7s: Camera pushes through logo — transition effect. Emerges inside the
product UI. Full-screen dashboard view. Data begins populating: charts
animate upward, numbers count up, status indicators turn green one by one.
Camera slowly pans across interface features. Each element animates as camera
passes — cards flip in, lists populate, notifications slide in.

Sound: 4-7s data cascade sounds synced to each element appearing. Soft clicks,
whooshes, confirmation tones. Background music introduces light beat — minimal
electronic, confident tempo (100 BPM). Bass foundation.

7-10s: Camera pulls back from UI to reveal device (laptop) in premium
workspace environment. Product on screen, glowing. Workspace has warm ambient
lighting. Three-point lighting on device: warm key, soft fill, brand-color
rim light. Shallow depth of field — workspace props (plant, coffee, notebook)
in soft bokeh.

10-12s: Final frame: device with product centered. Tagline appears below
device — clean typography, fade-in animation. Logo in corner. Music reaches
satisfying resolution. Sustained final chord.

Material references: @image1 for product UI screenshot. @image2 for logo.
@audio1 for brand music track if available.
```

**Luxury watch product hero, 5 s, 9:16** (`skills/06-luxury-aesthetic/SKILL.md`):

```
Extremely slow push-in toward a mechanical watch resting on a polished black marble surface, the watch occupying the lower center third of the frame. Vast dark space above and around it. Single hard point light source positioned at 45 degrees from above-left, casting a defined clean shadow to the lower right. The watch face catches the light; the bezel glints with a single bright specular highlight. Camera begins at 60cm apparent distance and inches toward 40cm over the full 5 seconds — movement barely perceptible.

Locked composition, no lateral drift. Background: pure deep black, no texture visible. Surface: black marble with fine veining, slight reflection of watch visible in polished surface.

Lighting: single-source drama, warm-cool split, main light at 5500K, rim light at 3200K catching the case edge.

Color grade: cream highlight roll, deep warm shadow, metallic accent preservation — gold indices fully saturated, all other tones desaturated 75%.

No motion blur. No depth of field effect — watch in full sharp focus front to back. No camera shake. No text or graphics.

Sound: silence for first 2s. At 2s: single soft mechanical tick. Tick repeats every 1s. No music. The silence IS the luxury.

Aspect ratio: 9:16. Duration: 5 seconds.
```

Other examples in the files: Feature Demo Speed Run (8 s, "Rapid montage of product features activating. 4 shots, 0.5s each [...] Speed ramp: start at 1.5x, accelerate to 3x"), Problem-Solution Arc (10 s), silk dress negative space (8 s), fragrance black & gold (5 s), luxury hotel (8 s), plus 5+ per skill.

## Consistency / reference strategy

Minimal: identity comes from attached `@image` materials (product UI screenshots, logo, founder photo for avatar/personal-brand skills). No multi-clip continuity system — these are single 4–15 s clips designed to stand alone.

## Audio

Unlike the film pipelines, these ad prompts **do** write music into the Seedance prompt (BPM, "Sustained final chord") and use `@audio1` for a brand track, because the deliverable is a single finished social clip. Every sound element is timestamped to a visual beat.

## Editing

Not covered (single-clip deliverables). Platform tuning: aspect, safe zones, loop potential for TikTok/Reels/Shorts/LinkedIn.

## Costs

Not stated.

## Lessons

- "Seedance 2.0 is a precision engine — it responds to specific camera language, lighting terminology, and timing breakdowns."
- Hook in the first 2 s; one timestamped action per beat; sound "is 50% of the hook".
- Luxury register: slow, locked camera only; silence as a design choice.
