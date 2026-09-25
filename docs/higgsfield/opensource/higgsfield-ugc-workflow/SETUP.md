# Setup, from scratch

You do not need to be technical to get through this. It is mostly clicking "connect" and
pasting a folder in the right place. Take it one section at a time. Total time is about 20
minutes the first time.

There are two required pieces and one optional piece:

1. **An AI assistant** (Claude or Codex), required.
2. **A Higgsfield connection** so the assistant can generate images and video, required.
3. **The polish tools** (Node.js, ffmpeg, ElevenLabs) for the music-and-captions step,    optional. Skip this and your ad is still finished and postable.

---

## 1. Get an AI assistant

Pick one. The workflow is identical in both.

### Option A: Claude (recommended if you are non-technical)

You have two ways to use Claude, and either works:

- **Claude desktop or web app** (claude.ai), the simplest. You talk to Claude in a chat
  window and connect Higgsfield through a "Connector" (next section). Good if you do not want
  to touch a terminal.
- **Claude Code**: a version of Claude that runs in your computer's terminal and can read and
  write files in a folder. This is what makes the skills fully automatic. Install it by
  following the instructions at the official Claude Code page (search "Claude Code install").
  It is a single install command and a login.

### Option B: Codex

OpenAI's Codex assistant works too. Install it from its official page and sign in. The skills
in this repo are written to work with either assistant.

If you are not sure, start with the Claude desktop app. You can always move up to Claude Code
later.

---

## 2. Connect Higgsfield (the studio)

Higgsfield is the service that actually generates the images and the video. Your assistant
reaches it through something called an "MCP server," which is just a secure connection between
the assistant and Higgsfield. You set it up once.

First, make an account:

1. Go to higgsfield.ai and sign up.
2. Add some credits to your account. The final video for one ad costs roughly 67 credits, so
   start with enough for a few tries. Everything else in the workflow is cheap.

Then connect it to your assistant:

### If you are using the Claude desktop or web app

1. Open Settings, then find "Connectors" (sometimes under "Feature preview" or "Integrations").
2. Add the Higgsfield connector. Higgsfield publishes the exact connection details on their own
   MCP / integrations page. Follow their "connect to Claude" instructions, which usually means
   clicking a button and signing in to Higgsfield in a browser window that pops up.
3. Once it shows as connected, you are done. The assistant can now see tools with names like
   `generate_image` and `generate_video`.

### If you are using Claude Code (terminal)

1. In your terminal, inside the folder where you will work, run the MCP setup. The simplest way
   is to type `/mcp` inside Claude Code and follow the prompts to add the Higgsfield server, or
   use `claude mcp add` with the connection details from Higgsfield's MCP page.
2. When it asks you to authenticate, a browser window opens. Sign in to Higgsfield and approve.
3. Back in Claude Code, run `/mcp` again to confirm Higgsfield shows as connected.

### If you are using Codex

Codex also supports MCP servers. Add the Higgsfield MCP server in Codex's configuration using
the connection details from Higgsfield's MCP page, then authenticate in the browser when
prompted.

> The exact endpoint and login button come from Higgsfield, because the connection is tied to
> your Higgsfield account. We do not hardcode it here on purpose. If you can ask your assistant
> "what Higgsfield tools do you have?" and it lists `generate_image` and `generate_video`, the
> connection is working.

---

## 3. Put the skills where your assistant can find them

The skills are the seven folders inside `skills/` in this repo. Putting them in the right place
is what lets you just say "make a UGC ad" and have the whole pipeline run.

### Claude Code

Copy the seven skill folders into a `.claude/skills/` folder, either:

- **Inside your project folder** (so they apply to that project): `your-project/.claude/skills/`
- **Or globally for your user** (so they apply everywhere): `~/.claude/skills/`

So you end up with, for example, `~/.claude/skills/ugc-ad/SKILL.md`, and the same for the other
six. From this repo:

```bash
mkdir -p ~/.claude/skills
cp -r skills/* ~/.claude/skills/
```

Claude Code auto-discovers them. Start Claude Code and they are available.

### Codex

Codex discovers skills from its skills directory. Copy the same seven folders there following
Codex's skills documentation. The folder shape (`<skill-name>/SKILL.md`) is the same.

### Claude desktop or web app

The desktop and web app do not auto-load local skill folders the way Claude Code does. You can
still run the whole workflow there by pasting the steps from the "Doing it by hand" section of
`GUIDE.md` into the chat. For the fully automatic, one-message experience, use Claude Code or
Codex.

---

## 4. Optional: the polish tools (music and captions)

Only needed for Step 7 (the enhance pass: music bed plus animated captions). Skip this whole
section if you just want the finished ad without the extra polish. The ad from Step 6 is
already complete.

The enhance step renders locally on your computer, so it needs a few free tools:

1. **Node.js**: install the LTS version from nodejs.org. This runs the rendering tool.
2. **ffmpeg**: the video toolkit. On a Mac with Homebrew: `brew install ffmpeg`. On Windows,
   download it from ffmpeg.org or install via a package manager.
3. **HyperFrames CLI**: the renderer the enhance step uses. It runs through `npx`, so once
   Node is installed you do not install anything extra. The skill calls `npx hyperframes ...`
   for you.
4. **An ElevenLabs key for the music**: make an account at elevenlabs.io, copy your API key,
   and put it in a file named `.env.local` in your working folder, like this:

   ```
   ELEVENLABS_API_KEY=your_key_here
   ```

   The skill reads the key from that file. Never share that file or commit it anywhere public.

   If you would rather supply your own music track instead of generating one, you can hand the
   skill a music file and skip ElevenLabs entirely.

---

## You are ready

Once your assistant lists the Higgsfield tools and the skills are in place, open `GUIDE.md` and
go. The short version: say "make a UGC ad" with your product and a sentence about the vibe, then
approve the cheap previews, confirm the spend, and check the audio.

If something is not connecting, the single best test is to ask your assistant: "What Higgsfield
tools can you see?" If it can list `generate_image` and `generate_video`, you are good.
