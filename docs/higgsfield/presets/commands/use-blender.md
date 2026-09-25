# Higgsfield use Blender (`/use-blender`)

- **type:** command (`mode: instructions`; not listed in the no-argument catalog)
- **description:** Set up the local Higgsfield use Blender MCP to create, edit and render .blend projects in a background Blender process without an add-on.
- **source:** `get_preset_instructions(preset:'/use-blender')`, captured 2026-09-25 (verbatim below).
- **references:** `/use-blender/references/installation`, `/use-blender/references/verification` (appended verbatim below)

## Instructions (verbatim)

---
name: use-blender
title: Higgsfield use Blender
description: Set up the local Higgsfield use Blender MCP to create, edit and render .blend projects in a background Blender process without an add-on.
---

### Higgsfield use Blender

#### Execute the setup request

`higgsfield mcp, /use-blender` is a request to install and connect this integration. In local Codex or Claude Code (including Claude Desktop **Code → Local**), use the host shell to complete the installation, register the server for the current OS user, and verify it. The command itself authorizes these setup steps; use the latest supported published package and do not stop to ask whether to install or which registration scope. Honor any narrower scope or other constraint the user states. Client or OS permission prompts may still require approval. Setup does not authorize editing the user's Blender scenes.

Claude Desktop Chat and Cowork are not supported for this host installation flow. Code Cloud and Higgsfield `sandbox_exec` are not host shells either. If this conversation cannot run a shell on the same computer as Blender, ask the user to switch to **Code → Local** (or a local Codex task) and repeat the same command. Do not present manual setup as completed installation.

Connect a desktop MCP client to a dedicated background Blender process on the same computer:

Desktop client → stdio → fnf-blender-mcp → process pipes → Blender Python / bpy.

Use **Higgsfield use Blender** as the display name and `higgsfield-use-blender` as the server identifier. No add-on, HTTP listener, WebSocket or cloud account is required for local scene operations.

Each MCP session owns its own scene. Commands preserve that scene in memory until the connection closes; save needed work with `bl_save_project`. This integration cannot read unsaved work in an already-open Blender window. To edit that work, first save it in the desktop application, then load the file with `bl_open_project`. To inspect results in the UI, open the saved output file separately.

Use `fnf-blender-mcp@latest`; version 0.1.0 requires an add-on and cannot provide this workflow. This is a setup command, not a media preset. A remote cloud sandbox cannot install software on the user's desktop. First discover available local `bl_*` tools and verify an existing session before reinstalling.

For setup, read [installation](references/installation.md). For diagnosis and edits, read [verification](references/verification.md). When served by get_preset_instructions, load `/use-blender/references/installation` and `/use-blender/references/verification` respectively.


#### Available references

Read a reference only when needed by calling get_preset_instructions with the exact preset argument below.
- {"preset":"/use-blender/references/installation"}
- {"preset":"/use-blender/references/verification"}

## Reference: /use-blender/references/installation

> Source: `get_preset_instructions(preset:'/use-blender/references/installation')`, captured 2026-09-25.

### Install background Blender MCP

Requirements: Node.js 24+ with npm, and Blender 4.2+ on the user's own computer. Target package: `fnf-blender-mcp@latest`. No add-on, source checkout, separate Python installation or open Blender window is required. Blender supplies its own Python runtime.

Check Node/npm and locate the intended Blender executable. Common locations are `/Applications/Blender.app/Contents/MacOS/Blender`, `C:/Program Files/Blender Foundation/Blender <version>/blender.exe`, or `blender` on Linux PATH. A missing default path does not prove Blender is absent. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`. Use absolute executable paths when PATH differs between the shell and MCP client. Do not install Blender itself unless requested.

Before changing an existing installation, check `npm view fnf-blender-mcp@latest version --registry=https://registry.npmjs.org/`. Confirm that the latest published version is 0.2.0 or newer before installing. If the registry is unavailable or latest points to an older release, report the blocker; do not install the obsolete 0.1.0 add-on runtime. An authentication error on this public package calls for checking registry configuration, not creating an npm account or exposing tokens.

#### Install and configure

Install the latest published package, or rerun the same install command to update an existing installation. Use a persistent directory owned by the user. Do not register paths inside temporary directories, a cloud sandbox or an npx cache.

macOS / Linux (replace the executable path with the discovered path):

```sh
blenderDir="$HOME/.higgsfield/blender-mcp"
npm install --prefix "$blenderDir" --registry=https://registry.npmjs.org/ --no-audit --no-fund fnf-blender-mcp@latest
blenderCli="$blenderDir/node_modules/fnf-blender-mcp/dist/cli.js"
node "$blenderCli" doctor --blender "/absolute/path/to/blender"
node "$blenderCli" config --blender "/absolute/path/to/blender" --format json
```

Windows PowerShell:

```powershell
$blenderDir = Join-Path $env:LOCALAPPDATA 'Higgsfield/blender-mcp'
npm.cmd install --prefix $blenderDir --registry=https://registry.npmjs.org/ --no-audit --no-fund fnf-blender-mcp@latest
$blenderCli = Join-Path $blenderDir 'node_modules/fnf-blender-mcp/dist/cli.js'
node $blenderCli doctor --blender 'C:/absolute/path/to/blender.exe'
node $blenderCli config --blender 'C:/absolute/path/to/blender.exe' --format json
```

The generated entry contains absolute Node/server paths and `BLENDER_EXECUTABLE`. The CLI prints configuration; it does not register the server. Inspect an existing `higgsfield-use-blender` entry in the **client running this conversation**. Reuse a matching enabled entry; do not overwrite a conflict or intentional disablement.

- **Codex local:** run `config --format toml` and inspect `codex mcp get higgsfield-use-blender`. If absent, register the printed Node/server paths with `codex mcp add --env BLENDER_EXECUTABLE=<absolute-blender-path> higgsfield-use-blender -- <absolute-node-command> <absolute-server-arg>`, or merge the complete printed TOML entry including its environment.
- **Claude Code local:** inspect `claude mcp get higgsfield-use-blender`. If absent, register with `claude mcp add --scope user higgsfield-use-blender --env BLENDER_EXECUTABLE=<absolute-blender-path> -- <absolute-node-command> <absolute-server-arg>` using the paths printed by `config --format json`. Keep `--env` after the server name so Claude does not parse the name as another environment value. Do not put the entry in Chat's `claude_desktop_config.json` for a Code session.

Quote the whole `BLENDER_EXECUTABLE=<absolute-blender-path>` argument when the path contains spaces. Preserve other servers and tool policies. Keep the installation and Blender executable at their registered paths. Confirm the entry in the same client, then start a fresh conversation for tool discovery.

Refresh the MCP connection, then follow the verification reference. `doctor` starts and terminates a separate empty background process; it does not inspect the MCP session or prove that the current conversation has tools.

#### Upgrade from 0.1.0

Save any needed work before reconnecting. Replace the package and refresh the server entry with `config`; remove obsolete `BLENDER_MCP_PID` and `BLENDER_MCP_RUNTIME_DIR` overrides from this server entry. Version 0.2.0 does not discover or attach to the old bridge. `launch`, `install-addon` and `bl_screenshot` are removed; use `bl_render` with a camera for visual evidence. The old add-on can be disabled in Blender Preferences once no client needs it; do not delete user files or reset preferences during migration.

## Reference: /use-blender/references/verification

> Source: `get_preset_instructions(preset:'/use-blender/references/verification')`, captured 2026-09-25.

### Verify the background session

Use the current conversation's tools from **higgsfield-use-blender**:

1. `bl_health` must return the Blender version, PID, `background: true`, active file and scene. The first call starts a dedicated process with factory startup settings; it does not attach to an open window.
2. `bl_get_scene_summary` reports this session's scene. Load an existing saved `.blend` with `bl_open_project` when requested; preserve current session changes first.
3. Before edits, load `bl_get_skill` with `name: "blender-scene"` and inspect relevant objects. Use a camera and `bl_render` for appearance checks. There is no viewport screenshot tool in background mode.

If tools are absent, inspect the client's MCP registration, persistent paths, `BLENDER_EXECUTABLE`, startup errors and tool restrictions, then refresh the connection. A successful shell `doctor` is not evidence that the conversation can control Blender. Do not reinstall a working runtime merely because tools have not been discovered.

One process belongs to one MCP connection. Changes persist between calls, but reconnecting, stopping MCP or a process crash loses unsaved scene state. Save deliverables explicitly before closing; open the saved output in desktop Blender separately when needed. Python local variables do not persist across calls; scene datablocks do.

A timeout does not cancel or repeat a command. Use its `job_id` with `bl_job_status` on the same MCP session. Other execution tools reject calls while that job is running; status and offline skill tools remain usable. Errors can leave partial scene or file changes. Inspect before retrying; never assume rollback. Job history retains at most 128 jobs and disappears on reconnect. A process failure does not trigger an automatic restart or recovery; inspect output files and explicitly reconnect to start a new session.

`bl_open_project` guards unsaved changes, and save/render refuse existing output files unless `overwrite: true`. Use a new output path when the user has not authorized replacement. Arbitrary Python has the Blender process's filesystem permissions and can bypass those typed-tool guards.

For long renders set the client tool timeout above 300 seconds. If the client times out before a job ID arrives, report uncertain completion and avoid resubmission. Verify only the platforms and Blender versions actually tested; fixtures alone do not prove native scene editing.
