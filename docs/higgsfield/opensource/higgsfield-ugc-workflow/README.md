# The Higgsfield Workflow

Make a complete, creator-led UGC video ad with Claude and Higgsfield, start to finish, even if
you have never written a line of code.

Everyone shows you the Claude plus Higgsfield hype. Nobody shows you how. This repo is the how.
It is the actual workflow: seven small, reusable skills that take you from a single product
photo to a finished, captioned, music-bedded video ad with a generated creator and a real-
sounding voice. Hand it to Claude (or Codex) and say "make a UGC ad."

> This is the deliverable from the reel. If you came here from the "comment workflow" post,
> you are in the right place. Start with **[GUIDE.md](GUIDE.md)**.

---

## The five steps (plus a plan and a polish)

The spine the reel showed you:

1. **Reference images**: anything real you want in the video (a product, a background, a
   model), screenshot it and give it to Claude. That is your anchor.
2. **The brief**: a frame-by-frame write-up of the video's sequence. First this, then that.
3. **The storyboard**: Claude draws every beat as a still so you see the whole ad end to end
   before you spend anything. This is the secret. It locks the creator and product so they stay
   consistent.
4. **The script**: there is a science to how you spell the words so the generated voiceover
   comes out right. This repo has the exact tricks.
5. **Generate**: Claude hands it to Seedance. A few minutes later you have the finished video,
   with voice, lip sync, and ambient sound, all in one pass.

Plus the two steps the reel did not have time for: a **planning brief** at the front (so the ad
is thought through and approved before you spend) and an **enhance pass** at the end (a ducked
music bed and animated karaoke captions, the kind every good Reel has).

---

## Quick start

1. **Set up your tools**: follow **[SETUP.md](SETUP.md)** to connect Claude (or Codex) to
   Higgsfield. One-time, about 20 minutes, mostly clicking "connect."
2. **Install the skills**: copy the `skills/` folders into your assistant's skills directory
   (SETUP.md shows exactly where).
3. **Run it**: open your assistant and say:

   > "Make a UGC ad. Here is the product: [link or photo]. The brand is [name], the vibe is
   > [one sentence]. Make the creator a [describe the person]."

   It walks the whole pipeline, stops to let you approve the cheap previews, asks before it
   spends any credits, and hands you a finished ad.

Then read **[GUIDE.md](GUIDE.md)** once, top to bottom. It explains what every step is doing,
why it works, and where people get stuck. It is the real value here.

---

## What is in this repo

| Path | What it is |
|---|---|
| **[GUIDE.md](GUIDE.md)** | The full plain-English walkthrough. Read this first. |
| **[SETUP.md](SETUP.md)** | Connect Claude or Codex to Higgsfield from scratch. |
| **[skills/](skills/)** | The seven skills that run the pipeline. See [skills/README.md](skills/README.md). |
| **[examples/surfboards/](examples/surfboards/)** | A real, worked example. Every artifact from a finished demo ad: the profile, brief, character, storyboard, and script. |

---

## What it costs

The only paid step is the final video, roughly **67 credits** at the recommended 720p quality.
Everything before it (the profile, the character, the storyboard, the script) is cheap. You see
the exact cost and confirm it before anything is spent. There is no way to be surprised by a
charge.

---

## How it works in one breath

Claude is the director. Higgsfield is the studio that generates the images and video. Seedance
is the model that produces the moving video and the spoken voice together in a single pass. You
build up to the expensive video through a few cheap, approved steps first, so by the time you
spend, the AI already knows exactly what the creator looks like, what the product looks like,
and what happens in every second. You are not gambling on one big generation. You are stacking
small, controllable decisions. That is the whole trick, and it is why this looks like a real ad
instead of AI slop.

---

## Credits

Reverse-engineered from a single autonomous run of Higgsfield's agent, then rebuilt as reusable
skills with human checkpoints and a hard cost gate. Made by Joe B. Real tools, real problems,
zero hype. Follow along.

MIT licensed. Use it, change it, make it yours.
