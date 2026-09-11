---
name: hyperframes-auto-editor
description: Turn a topic, copy, supplied media, or reference video into an approved script and production plan, then a validated HyperFrames edit using authentic or clearly disclosed media. Use for automatic editing, topic-to-video production, reference-led recreation, talking-head videos, screen tutorials, product ads, interviews, faceless content, and mixed-source short-form edits. Do not use for a small change to an already-authored HyperFrames composition.
---

# HyperFrames Auto Editor

Turn raw media into an evidence-based edit plan and a validated HyperFrames video. Treat HyperFrames as the composition and rendering layer. Make editorial decisions before authoring composition HTML.

## Topic-to-delivery mode

For a topic, media plus topic, or supplied copy, read [references/topic-to-delivery.md](references/topic-to-delivery.md). Follow three stages: confirm requirements with the user; develop and revise the complete proposal until approved; produce and submit the video for acceptance. Before writing the full script, confirm missing choices including video type, target duration, aspect ratio, resolution and style. Give recommendations and reuse explicit answers; do not silently substitute defaults for unknown preferences. Requirement confirmation is not production approval. Pipeline.md supplies implementation detail. Do not claim production readiness until required services and assets have been tested.
## Mandatory Proposal and Approval Gate

For every new video or substantial recut, analyze the sources and present a concrete production proposal before implementation. The proposal must be reviewable by a content owner and include the exact script, hook, platform and duration, source selections, timed storyboard, visual system, semantic inserts, generated-asset plan, audio plan, claims and evidence, known limitations, deliverables, and any external provider or estimated spend.

Stop after presenting the proposal and ask the user to approve it. Before approval, do not generate voice, images, or video; write or materially modify composition code; render a preview or final video; or make a paid request. Source inventory, transcription, frame extraction, analysis, and planning artifacts are allowed because they make the proposal concrete.

Record approval in `APPROVAL_RECORD.md`. An earlier approval remains valid for technical implementation and quality fixes within the approved plan. Obtain a revised approval before changing the script's meaning, core claim, target duration by more than 10%, visual format, digital-human use, generation provider, paid budget, or requested deliverables.

## Required Routing

1. Read workspace instructions and relevant project context first. Keep project-specific facts in the project, not in a shared knowledge base unless explicitly requested.
   For the 自动剪辑 and 海外内容创作 workspaces, also follow [references/shared-visual-library.md](references/shared-visual-library.md). Check the shared motion/style index during visual planning, before finalizing DESIGN.md and the production proposal. An empty library is valid and must not be populated automatically.
2. Inventory the supplied media with `ffprobe`; preserve source files unchanged.
3. Classify the primary edit mode from source evidence and the requested outcome: talking head; screen tutorial or software walkthrough; product ad; interview or podcast repurpose; montage, highlight reel, or mixed-source narrative.
4. Read [references/video-types.md](references/video-types.md) for the selected mode. Use a hybrid route when two modes materially shape the edit, but name one primary mode.
5. Read [references/platform-routing.md](references/platform-routing.md) for the destination platform. Prefer current workspace knowledge and installed platform-specific skills over fixed assumptions.
6. When narration is abstract, footage is sparse, the format is faceless, or the reference relies on illustrative inserts, read [references/semantic-visualization.md](references/semantic-visualization.md).
7. Follow [references/pipeline.md](references/pipeline.md). Produce the artifacts defined in [references/artifact-contracts.md](references/artifact-contracts.md).
8. Apply [references/quality-gates.md](references/quality-gates.md) before final delivery.
9. At intake and after failures or user feedback, apply [references/continuous-improvement.md](references/continuous-improvement.md). Carry unresolved findings into the next proposal and verify corrections against the actual output.

## Analysis Budget

Use staged analysis. Do a cheap pass across all media, then use expensive multimodal analysis only on uncertain or high-value ranges.

- Cheap pass: metadata, audio loudness and silence, transcript, scene boundaries, blur or black frames, representative frames, and OCR where screen text matters.
- Deep pass: semantic importance, visible actions, demonstrations, emotion, product evidence, continuity, and exact event grounding.
- Reuse cached analysis when source path, size, and modification time have not changed.
- Do not run scene detection as the sole edit signal. It is weak for screen recordings and continuous talking-head footage.

Use available tools according to the footage. WhisperX or HyperFrames transcription can provide word timing; PySceneDetect can provide shot boundaries; a capable video model can describe and ground events. If a preferred dependency is unavailable, use sampled frames, transcript evidence, audio analysis, and explicit uncertainty rather than inventing observations.

## Editorial Decision Rules

- Select clips for a stated narrative job: hook, setup, proof, demonstration, contrast, escalation, payoff, or CTA.
- Score candidates on semantic value, visual clarity, delivery quality, novelty, emotional force, continuity, and platform fit. Preserve the component scores; do not hide the decision behind one unexplained number.
- Keep natural micro-pauses needed for comprehension. Remove dead time without producing clipped words, breathless pacing, or discontinuous cursor and hand motion.
- Prefer source evidence over generated filler. Generate or retrieve assets only after an asset-gap audit identifies a narrative need.
- Treat generated visuals as explanation, atmosphere, or pattern interruption. They do not substantiate product behavior, testimonials, measured results, or real-world events.
- Choose an authenticity model before scripting: on-camera creator, voice-only creator, screen-led brand, recurring character, or documentary source. Do not write an unverifiable first-person testimonial for a synthetic narrator.
- Separate spoken script, on-screen text, and captions. They may support one another but should not duplicate every word by default.
- Never let platform styling obscure product proof, software controls, faces, captions, or important source text.

## Supporting Skills

When available and relevant:

- Use platform skills such as `viral-tiktok-content`, `viral-instagram-reels`, and `viral-short-form` to shape the editorial brief.
- Use `viral-hooks` for the opening and `viral-captions-and-ctas` for post copy and CTA treatment.
- Use `transcript-intelligence` for quote and segment extraction.
- Use `analyze-video` only when a reference video's reusable style needs to be reverse-engineered.
- Use `imagegen` or another authorized asset system for missing visual assets.
- Use the `hyperframes` and `hyperframes-cli` skills for composition authoring, captions, transitions, validation, preview, and rendering.

Do not require every supporting skill. Choose the smallest set that changes the result.

## Build Contract

Do not write HyperFrames composition HTML until these exist:

- `MEDIA_MANIFEST.json`
- `EDITORIAL_BRIEF.md`
- `SCRIPT.md`, with topic interpretation, exact narration, on-screen text, evidence mapping and duration estimate; approved as part of the proposal
- `EDIT_DECISION.json`, successfully checked with `scripts/validate-edit-decision.mjs`
- `ASSET_GAPS.md`
- `VISUAL_BEAT_MAP.json`
- `DESIGN.md`
- `STORYBOARD.md`
- `PRODUCTION_PROPOSAL.md`, presented to and approved by the user
- `APPROVAL_RECORD.md`

Build the static hero frame for each scene before animation. Use the selected source ranges from `EDIT_DECISION.json`; do not silently change editorial timing while styling. If a timing change is necessary, update and revalidate the decision file first.

Create a draft-quality preview before a final encode. Inspect representative frames and every cut boundary. Run the HyperFrames lint, validate, inspect, and animation checks required by the loaded HyperFrames skills. Deliver the preview and requested final file with `QC_REPORT.md`.

## Completion and Failure Behavior

The task is complete when the requested video or reviewable draft exists, the decision plan is traceable to source media, and blocking quality checks pass.

If the supplied material cannot support the requested claim, hook, duration, or visual standard, reroute the format or produce a clearly labeled review draft and record the precise gap in `ASSET_GAPS.md`. Do not present a technically valid render as final while a blocking editorial gap remains. Never fabricate product behavior, testimonials, or source events.

Failure of one web-access skill, scraper, downloader, URL, or platform route is not evidence that suitable media does not exist. Continue the asset search through other available routes, including interactive browser access, official product and press pages, app-store previews, developer documentation, public demonstrations or reviews, local app or device capture, and user-supplied media. Public real-world media may be clipped, cropped, reframed, composited, and visually cleaned for the edit. Final videos do not need visible attribution unless the user requests it, but retain the source URL or acquisition path internally so authenticity and replacements remain auditable. Record the attempted routes and the remaining gap in `ASSET_GAPS.md`.

For product interfaces and demonstrations, use this evidence order: user-supplied real capture; first-party capture made during production; official screenshots or videos; public real demonstration footage; a clearly disclosed editorial composite built from genuine interface media. Do not substitute invented UI, AI-generated product screens, generic low-fidelity mockups, or placeholders merely because acquisition is inconvenient or one access method failed. A simulated interface may be used only when the approved proposal explicitly identifies it as illustrative and it meets the agreed visual standard. If no truthful asset route can meet the approved standard, stop before final delivery and report the exact blocking asset rather than lowering the standard silently.

## Sustainable Maintenance

This is a user-level skill intended to be available from every Codex conversation. Invoke it explicitly as `$hyperframes-auto-editor`; implicit selection may also route matching video-production requests here.

Treat project feedback as local until it has produced an observable improvement. Promote a rule into this skill when the user explicitly requests a global workflow change, or when the same correction proves reusable across projects. Add only the corrected operating requirement, decision rule, quality gate, or reusable helper; keep incident narratives, client facts, project assets, and one-off preferences in the project.

After changing the skill, validate the complete skill directory with the skill-creator validator. Review the Git diff so unrelated project state is not included, then commit and push the validated change to the configured repository. Other devices update from that repository with `scripts/install-or-update.ps1`. Repository synchronization carries the workflow files, not local media, credentials, product knowledge bases, or machine-specific paths.

