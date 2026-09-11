# HyperFrames Auto Editor Skill

User-level Codex skill for planning and producing platform-aware video edits with HyperFrames. It accepts a topic, copy, supplied media, or reference video and covers real-source acquisition, media analysis, format routing, source-grounded claims, semantic visualization, user-approved production proposals, composition, validation, and rendering.

Invoke it in any conversation with `$hyperframes-auto-editor`. Matching automatic-editing and topic-to-video requests may also select it implicitly.

## Install on another Windows device

Prerequisites:

- Git
- Codex desktop or CLI
- Access to the private GitHub repository

Run in PowerShell:

```powershell
git clone https://github.com/yuxin1714/hyperframes-auto-editor-skill.git "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor"
```

Restart Codex so it discovers the skill.

## Update

```powershell
git -C "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor" pull --ff-only
```

Or run the repository helper:

```powershell
& "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor\scripts\install-or-update.ps1"
```

## Publish local changes

After editing and validating the skill:

```powershell
git -C "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor" add .
git -C "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor" commit -m "Update auto-editor workflow"
git -C "$env:USERPROFILE\.codex\skills\hyperframes-auto-editor" push
```

The workflow requires a detailed production proposal and explicit user approval before asset generation, composition authoring, rendering, or paid provider calls.
