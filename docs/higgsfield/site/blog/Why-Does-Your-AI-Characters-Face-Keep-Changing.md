# Why Does Your AI Character's Face Keep Changing?

Source: https://higgsfield.ai/blog/Why-Does-Your-AI-Characters-Face-Keep-Changing  
Higgsfield, Jun 9, 2026  
Prompts extracted: 0

Cause: diffusion models have no memory; each image starts from noise; text ("25-year-old woman with green eyes") maps to millions of faces — drift accumulates (nose by frame 3, face shape by 6, different person by 10).
Common drift causes: text-only descriptions (biggest); **changing the seed every run** (fix the seed); low-quality/mismatched references (sunglasses, shadows, crops, photos from different years); **wide shots where the face is < ~20% of frame**; **switching models mid-series**.
Two families: reference/edit tools (Nano Banana Pro — 2026 leader for edits and multi-image consistency; Flux Kontext/FLUX.2 up to ~10 refs; Midjourney Omni Reference single ref, drifts on profiles/wides; GPT Image in-session) vs trained identity (SD LoRA; **Soul ID**). Edit with Nano Banana Pro, lock identity with Soul ID — both on Higgsfield.
**Soul 2.0 three systems**: Soul (core T2I) / **Soul Reference** (upload an image; reads composition, lighting, pose, mood -> variations; "lock a look") / **Soul ID** ("lock a person"). Soul 2.0 understands photographic and subculture language ("disposable camera flash").
Presets (20+, also as Moodboards) with use-cases: Warm Ambient (lifestyle), Retro BW (editorial B&W), Y2K Street, Subtle Flash (natural flash portraits), Y2K Studio (magazine), Street Photography (candid), Theatrical Light (dramatic shadows), Asian Nostalgia, Editorial Street Style, Surreal Solarization, Flash Editorial, Digital Camera, Siren (glamour), Swag Era, Mystique City, Candy Pop, 2000s Band, Frutiger Aero, Drain, Old Smartphone.
Soul ID training tips: 20+ **recent** photos (same period), **include full-body images**, consistent lighting, unobstructed faces; strongest on close/mid shots.
**Consistency test**: generate the same character in **8–12 varied prompts** (angles, lighting, outfits), compare eye spacing, nose width, jawline, hairline, skin tone side by side; test hard cases first (profile, low/high angles, wide).
Recurring persona workflow: train Soul ID -> pick one anchor preset (e.g. Flash Editorial, Y2K Studio, Street Photography) -> change only styling/setting in prompt -> 8–12 variations + test -> animate via Kling 3.0, Seedance 2.0, WAN, Soul Cinema keyframes, or **Higgsfield Animate** (Animate = motion on a still; Replace = swap your character into an existing clip). Images up to 4K (4096×4096).

