# The Higgsfield Workflow: the full guide

How to make a complete, creator-led UGC video ad with Claude and Higgsfield, start to
finish, even if you have never written a line of code.

This is the long version of the reel. The reel showed you the five steps. This shows you
exactly how to run them, what each one is doing, why it works, and where people get stuck.
Read it once top to bottom. Then keep it open the first time you run the workflow.

> New here? Do `SETUP.md` first (it gets your tools connected from scratch), then come back.
> If you just want the short version, jump to **"The whole thing in one paragraph"** below.

---

## What you are going to build

A 9:16 vertical video ad, about 10 to 15 seconds, that looks like a real person filmed it
on their phone. A creator who does not exist holds a product that you do have, talks to the
camera, shows it off, and recommends it. The voice is generated. The face is generated. The
camera moves like a real handheld phone. Then it gets a music bed and animated captions on
top, the kind you see on every good Reel and TikTok.

The whole thing is one short conversation with Claude (or Codex). You approve a few cheap
previews along the way, you say "yes" once to spend a small amount of credits on the final
video, and a few minutes later you have a finished ad.

There is a real worked example in this repo under `examples/surfboards/`. It is a 10 second
ad for a made-up surfboard brand. You can open every file it produced and see exactly what
each step looks like in practice. Look at `storyboard.png` in that folder right now. That one
image is the secret to the whole thing, and we will come back to it.

---

## The mental model (this is the most important section)

Three players, three jobs. If you understand this, everything else is just details.

1. **Claude is the director.** It reads your product, decides the angle, writes the brief,
   writes the script, gives instructions to the other tools, and shows you previews to
   approve. You talk to Claude in plain English. It does the thinking and the busywork.

2. **Higgsfield is the studio.** It is the service that actually generates images and video.
   Claude does not draw anything itself. It sends requests to Higgsfield ("make me a portrait
   of this creator", "make me a storyboard", "make me the video") and Higgsfield returns the
   pictures and the clip. You connect Higgsfield to Claude once (see `SETUP.md`) and then
   never think about it again.

3. **Seedance is the camera and the actor in one.** Seedance is the specific video model
   inside Higgsfield that does the magic final step. You hand it three reference images and a
   script, and in a single pass it generates the moving video, the spoken voiceover, the lip
   sync, and the background room sound, all at once. No separate voice recording. No editing
   two things together. One model, one pass, one finished clip with sound.

Here is the part most people get wrong. They think the AI just "makes a video" from a
sentence. It does not, and that is exactly why most people's results look like garbage. The
trick is that you build up to the video through a few cheap, controllable steps first, so by
the time you spend money on the expensive video step, the AI already knows precisely what the
creator looks like, what the product looks like, and what is supposed to happen in each
second. You are not gambling on one big generation. You are stacking small, approved
decisions.

---

## The whole thing in one paragraph

You give Claude a photo or a link to your product. Claude studies it. Claude generates a
fake creator's face. Claude generates a three-panel storyboard that pins down the creator and
the product so they stay consistent. Claude writes a short script with the words spelled so
the voiceover says them right. Claude shows you the cost, you say yes, and Seedance turns all
of that into one finished video with a real-sounding voice. Then Claude adds music and
captions. That is the five steps the reel showed you, plus a planning step at the front and a
polish step at the end. Seven steps total, but five are the spine.

---

## Before you start

You need four things connected. `SETUP.md` walks you through every one of them from zero.

- **Claude Code or Codex**: the AI assistant you will be talking to. Either works.
- **The Higgsfield connection (an "MCP server")**: this is how Claude reaches the studio.
  It is a one-time setup. `SETUP.md` has the exact steps.
- **A Higgsfield account with some credits**: the final video costs roughly 67 credits at
  the recommended quality. Everything before it (the images, the previews) is cheap.
- **Optional, only for the music-and-captions polish step:** Node.js, ffmpeg, and an
  ElevenLabs key for the music. If you skip the polish step, you do not need these. The ad
  is already finished and postable without them.

If all you do is connect Claude and Higgsfield, you can make the ad. The rest is upgrades.

---

## How to actually run it (the easy way)

Put the seven skill folders from this repo where your assistant can see them (again,
`SETUP.md` shows you where). Then open Claude Code or Codex in that folder and say something
like:

> "Make a UGC ad. Here is the product: [paste a link, or attach a photo]. The brand is
> [name], and the vibe is [a sentence about who it is for and how it should feel]. Make the
> creator a [describe the person you want on camera]."

That one message is enough. The `ugc-ad` skill takes over and walks the whole pipeline. It
will stop and show you things to approve at the cheap points, and it will ask you out loud
before it spends any real credits. You stay in control the entire time. You never have to
know the technical details underneath. But this guide explains them anyway, because
understanding what each step is for is what lets you give better instructions and fix things
when a result is not quite right.

If you would rather do it yourself, by hand, without the skills at all, there is a section at
the end called **"Doing it by hand"** that gives you the manual version of every step.

---

## The seven steps, in detail

The reel showed five. The real pipeline has those five plus a planning step at the start and
a polish step at the end. Here are all seven, in order, with what happens, why it matters,
what you will see, and the one thing that trips people up.

### Step 1: The product profile ("anything real, screenshot it")

**What happens.** You hand Claude a photo of your product, or a link to its page, or both.
Claude studies it and writes a short profile: what kind of product it is, its rough shape and
size, what the packaging and label look like, and, most importantly, the exact physical steps
a person takes to *use* it. It also saves a clean copy of the product image that every later
step will lock onto.

**Why it matters.** This is the anchor the reel talked about. Everything downstream points
back at this one clean product image and this list of facts. The "exact usage steps" part is
sneaky-important: those steps become the actual motions the creator performs on camera. For a
serum it is "unscrew the cap, draw it into the dropper, apply to the face." For a surfboard
it is "lift it off the rack, tuck it under one arm, run a hand down the rail." Real motions
are what make the ad feel real instead of like a person awkwardly holding a thing.

**What you will see.** A short `product-profile.md` file and a `product.png`. Open the
example at `examples/surfboards/product-profile.md` to see exactly the level of detail.

**The gotcha.** If your product photo is busy or low quality, the profile will be vague and
so will everything after it. Give it the cleanest, clearest product shot you have. One
product, plain background, good light.

### Step 2: The brief (the plan you approve before spending anything)

**What happens.** Before any face or storyboard exists, Claude writes a one-page plan: the
angle (what is the ad actually saying), the three-shot map (what happens in each slice of
time), and the production settings. It is a living document. The later steps come back and
fill in their pieces as they finish.

**Why it matters.** A plan written first forces the angle and the structure to be a deliberate
choice instead of an accident. It is also the cheapest possible place to change direction. If
the angle is wrong, you fix one paragraph here instead of regenerating a video later. This is
the single most valuable habit in the whole workflow: decide the story before you spend on the
pictures.

**What you will see.** A `brief.md`. The example is at `examples/surfboards/brief.md`. Notice
the "shot map" near the middle: three cuts, three different camera framings (tight, then a
macro close-up, then a wide shot). That tight-macro-wide rhythm is what keeps a 10 second clip
from feeling static.

**The gotcha.** Read the angle out loud. If it does not sound like something a real person
would actually say about your product, change it now. One good sentence here saves you a
re-roll later.

### Step 3: The base character (your creator's face)

**What happens.** Claude generates a single photorealistic portrait of the person who will be
in your ad. Just the person. Good light, neutral background, no product in their hands yet.

**Why it matters.** This portrait is the identity lock for the creator. Every later image and
the final video reference this exact face so the same person shows up in every shot. Generate
a fresh face for each ad. That is a feature, not a limitation. It means every ad has a new
"creator," which is exactly how real UGC at scale looks.

**What you will see.** A `character.png` and a checkpoint where Claude asks you to approve it
or generate a new one. This is cheap, so be picky. If the face is not right, get a new one
before you go further. See `examples/surfboards/character.png`.

**The gotcha.** Do not put the product in this image. It sounds helpful but it actually causes
the product to drift and warp in the later steps. Person only. The product joins in the next
step.

### Step 4: The storyboard sheet (the secret to the whole thing)

**What happens.** Claude generates one wide image that contains three vertical panels side by
side. Panel one is the hook (a tight selfie shot of the creator talking to camera). Panel two
is the action (a macro close-up of their hands using the product). Panel three is the
recommendation (a wide shot of them presenting the product). The creator's face from Step 3
and the product image from Step 1 are both fed in as references, so the same person and the
same product appear in all three panels.

**Why it matters.** This is the trick. Open `examples/surfboards/storyboard.png` and look at
it. Three frames, same surfer, same board, three different shots. This single sheet is what
you hand to the video model as the visual map. It is why the final video has a real beginning,
middle, and end instead of one repetitive shot, and it is why the creator and product stay
consistent the whole way through. The reel called this "seeing the whole video before you
spend a credit," and that is exactly right. If the storyboard looks good, the video will look
good. If the storyboard is off, fix it here, because it is cheap, before you pay for video.

**What you will see.** A `storyboard.png` and a checkpoint to approve or regenerate.

**The gotcha.** Check that you actually got three distinct panels with the same face and the
same product in each. Three different framings (tight, macro, wide) is the goal. If two panels
look the same, regenerate. This is the most important thing to get right before spending.

### Step 5: The script (the "science of how you spell the words")

**What happens.** Claude writes the short spoken script, mapped to the three cuts, with camera
notes and sound notes. Then it bundles everything into one dense paragraph (the "Seedance
prompt") that the video step will use.

**Why it matters, and the part the reel teased.** Seedance generates the voice from the
literal text you give it. It reads what is written, the way it is written. So if your brand
name is unusual, it will mispronounce it, and you have to spell it phonetically to fix it.
This is the "science" line from the reel and it is the single most underrated trick in AI
video. Two real failures we hit and fixed:

- A brand written `nustandardlabs` got read out letter by letter: "N-U-standard-labs." The
  fix was to respell it with clear spaces and a voiced ending: `Noo Standard Labz`. (The "z"
  matters. "Labs" came out as "labbers" until we spelled it "Labz.")
- The word `vial` kept coming out as "vawl." Respelling it as the real one-syllable word
  `vile` fixed it, because the model already knows that word and says it cleanly, and in
  context the ear hears "vial."

The rule: in the spoken line only, spell the tricky words the way they sound. Keep the real
spelling everywhere else (the captions on screen will show the correct spelling, you fix only
the voice). And always tell the model "no subtitles" in the prompt, or it will burn its own
ugly captions into the video. The good captions come later, in Step 7.

**What you will see.** A `script.md` with the three cuts and a `SEEDANCE_PROMPT` block at the
bottom. The example at `examples/surfboards/script.md` shows the surfboard brand written
phonetically as "Joe Bee Surfboards" in the spoken line so the "B" lands as "bee."

**The gotcha.** Only a human can hear whether the voice is right. You will verify the actual
audio in the next step. For now, just make sure any odd word is spelled the way it sounds.

### Step 6: Generate ("Claude hands it to Seedance, five minutes later you have the video")

**What happens.** This is the one paid step and the payoff. Claude hands Seedance three
references (the storyboard sheet, the creator's face, and the product image) plus the script.
Before it spends anything, it shows you the exact credit cost and asks you to confirm. You say
yes. Seedance generates the full video with voice, lip sync, and ambient sound in one pass. A
few minutes later you have a finished clip.

**Why it matters.** Everything before this was setup so that this one expensive call lands.
Because the model has the storyboard and the locked references, it produces a coherent,
consistent ad instead of a random guess.

**What you will see.** A cost prompt ("this will cost about 67 credits, generate? yes/no"),
then a short wait, then a `<your-slug>.mp4`. The recommended quality is 720p. At this phone-
selfie style, 1080p costs about twice as much and looks no different, so 720p is the right
default. Spending more does not buy you a better-looking ad here.

**The gotcha, and it is a real one.** As soon as the video downloads, watch it and listen.
Only a human can confirm the voice said the brand name correctly. If it is wrong, fix the
phonetic spelling in the script and re-roll. Do not skip this. The whole ad lives or dies on
the brand name sounding right, and the model will not catch its own mistake.

### Step 7: Enhance (music bed, captions, cut punches)

**What happens.** Claude takes the finished video and layers on a ducked music bed, word-by-
word karaoke captions synced to the voice, and small flash-and-zoom punches on each cut. This
is a local render. It does not cost video credits. The only small cost is generating the
music track. This step is on by default. You can skip it.

**Why it matters.** This is the difference between "an AI video" and "a Reel that looks like
every good creator's Reel." The captions hold attention, the music sets the mood, and the cut
punches give it energy. Notice the captions show the *correct* brand spelling even though the
voice used the phonetic spelling. The eye reads the real name, the ear hears it pronounced
right. Both are correct.

**What you will see.** A `<your-slug>-enhanced.mp4`. That enhanced file is the one you post.
The original is kept untouched in case you want it.

**The gotcha.** Captions should ride the lower part of the screen and never cover the
creator's face. Music sits under the voice, never over it. If the mix feels off, it is a one-
line tweak and a free re-render. See the example recipe in `examples/surfboards/enhance/`.

---

## What it costs and how long it takes

- The expensive part is one video generation, about **67 credits** at the recommended 720p.
- Everything before it (product profile, character, storyboard, script) is cheap image and
  text generation.
- The enhance step is a free local render plus a small charge for the music track.
- Real wall-clock time is usually a few minutes for the video (it is bound by the audio
  synthesis, so a lower resolution is not faster, just cheaper). The whole conversation,
  including your approvals, is typically 15 to 30 minutes the first time and faster after.

You are never charged without seeing the number first and saying yes. That cost gate is built
into the pipeline and cannot be skipped.

---

## The two checkpoints and the cost gate (your safety rails)

There are exactly three moments where a human matters, and they are designed that way:

1. **Cheap previews you approve**: the character and the storyboard. Both are cheap, both
   come before any video spend. Be picky here. Redoing an image is nearly free. Redoing a
   video is not.
2. **The cost gate**: before the one paid video call, you see the credit cost and confirm.
   No surprise charges. Ever.
3. **The audio check**: after the video, you listen and confirm the voice is right,
   especially the brand name. A machine cannot verify this for you.

If you remember nothing else: approve cheap, confirm the spend, check the audio. That is the
whole safety model.

---

## Doing it by hand (no skills required)

If you do not want to install the skills, you can run the exact same workflow as a plain
conversation with Claude or Codex. The skills just make it repeatable. Here is the manual
version. Connect Higgsfield first (see `SETUP.md`), then ask for each step in turn:

1. "Here is my product photo / link. Write me a product profile: what it is, its packaging,
   and the exact physical steps a person uses it. Save a clean product image."
2. "Write me a one-page brief: the angle, a three-cut shot map (tight hook, macro action,
   wide recommendation), and the settings."
3. "Generate one photorealistic portrait of this creator, person only, neutral background, no
   product: [describe them]."
4. "Generate one wide storyboard image with three vertical panels (tight hook, macro hands-on-
   product, wide presentation), using that portrait and the product photo as references so the
   same person and product appear in all three."
5. "Write the 10 to 15 second script as three cuts with a spoken line each. Spell any tricky
   brand words phonetically in the spoken lines only. End with a single dense paragraph I can
   feed the video model, and include 'no subtitles.'"
6. "Show me the cost, then generate the video with Seedance at 720p using the storyboard, the
   portrait, and the product as references, with audio on. I will confirm the spend."
7. "Add a quiet music bed and word-by-word captions synced to the voice, captions in the
   lower third, brand name spelled correctly on screen."

Same seven steps. The skills in this repo are just these instructions, hardened and made
repeatable so you do not have to retype them every time.

---

## Troubleshooting and FAQ

**The creator's face changes between shots.** Your storyboard panels were not consistent. Go
back to Step 4, regenerate the storyboard until the same face appears in all three panels, and
re-run the video. The storyboard is the identity lock. Never skip it.

**The product looks warped or wrong in the video.** Two usual causes: the product was in the
base character portrait (it should not be, Step 3), or the storyboard product was off. Fix the
storyboard, then re-roll.

**The voice mispronounces my brand.** Expected, and fixable. Respell the word the way it sounds
in the spoken line only (see Step 5). Use clear spaces between word parts and a "z" for voiced
plural endings. Re-roll at 720p, which is cheap. Keep the correct spelling in the captions.

**The video has ugly captions baked in.** You forgot "no subtitles" in the video prompt. Add it
and re-roll. The good captions come from the enhance step instead.

**It is too expensive to experiment.** Only Step 6 costs real money, and only at 720p, about 67
credits. Everything you iterate on (profile, character, storyboard, script) is cheap. Get those
right and you usually nail the video on the first paid try.

**Do I have to use the music-and-captions step?** No. The ad is finished and postable after
Step 6. The enhance step is a polish upgrade. Skip it by saying "skip enhance."

**Can I reuse a creator I like?** Yes. The default is a fresh face per ad, but if you get a
keeper, save it and tell Claude to reuse that one next time.

**Claude or Codex, which one?** Either. The workflow is the same. Use whichever you already
have set up.

---

## When your ad is done

You will have a folder with everything in it: the profile, the brief, the character, the
storyboard, the script, the base video, and the enhanced video. The file ending in
`-enhanced.mp4` is the one you post. It is 9:16, so it fits Instagram Reels, TikTok, and
Facebook from the one file. Write a caption, add a few hashtags, and ship it.

---

## Where this came from

This workflow was reverse-engineered from a single autonomous run of Higgsfield's agent that
produced a near-perfect creator ad and then printed the pipeline it followed. We rebuilt that
pipeline as seven small, reusable skills you can run yourself, added the human checkpoints and
the cost gate so you are never surprised, and worked out the phonetic-voice tricks by hitting
the failures live and fixing them. It is all in this repo. Use it, change it, make it yours.

Real tools, real problems, zero hype.
