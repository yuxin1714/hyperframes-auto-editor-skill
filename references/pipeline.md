# Common Pipeline

This shared trunk applies to every edit mode. The mode reference changes analysis and edit rules, not the artifact contract.

## 1. Intake and Success Criteria

Resolve the destination platform, audience, language, aspect ratio, target duration, objective, CTA, brand constraints, mandatory footage, prohibited claims, and delivery format. Infer low-risk defaults from the media and project context. Ask only when a missing choice would materially change the story or authorize paid or external processing.

Define one primary success metric, such as completion, qualified click, product comprehension, saved tutorial, or highlight density. Secondary metrics may constrain the edit but should not compete equally.

## 2. Media Inventory

Create `MEDIA_MANIFEST.json` with source IDs, paths, hashes or lightweight fingerprints, duration, dimensions, frame rate, codecs, audio tracks, rotation, and detected language where available. Record missing audio, variable frame rate, corrupt ranges, and orientation mismatches.

Never modify originals. Put proxies, extracted frames, transcripts, and analysis in a working directory.

## 3. Fast Analysis and Type Routing

Across every source, obtain speech segments and word timing when speech exists; loudness, silence, clipping, and notable audio peaks; shot or major visual-change boundaries; representative frames and basic quality signals; and OCR for screen recordings, slides, labels, and product interfaces.

Classify the primary video type. State confidence and any secondary mode. Then load only the applicable deep-analysis rules.

## 4. Selective Deep Analysis

Analyze candidate ranges rather than repeatedly sending whole sources to a large model. Deep analysis should answer editorial questions: what happens, why it matters, whether it is legible, where the action starts and ends, what claim it proves, and whether adjacent clips connect.

For long sources, use a coarse-to-fine pass: chapters, candidate windows, then exact in and out points.

## 5. Editorial Brief

Write `EDITORIAL_BRIEF.md` before selecting final clips. Include the audience and viewer state; single viewer promise; platform behavior and pacing implications; narrative structure; intended emotion and credibility strategy; hook options and selected hook; visual system direction; CTA and claim boundaries; and target duration allocation by narrative beat.

The brief is a decision document, not generic creative prose.

For topic-driven requests, now write SCRIPT.md using steps 1–3 of [topic-to-delivery.md](topic-to-delivery.md): topic interpretation, product-fact/evidence mapping, complete narration, on-screen text, and duration estimate. Select relevant script/hook skills and record what was actually used in the brief. Reconcile the script with source feasibility before locking it; existing short narration must not silently replace the requested topic.

For the two workspaces covered by [shared-visual-library.md](shared-visual-library.md), match the brief to the shared style/motion index at this point. Carry selections or explicit empty/unavailable status into DESIGN.md and the production proposal. The library is optional input, not a substitute for the brief or permission to populate it.

## 6. Creative Feasibility Gate

Before locking the script or assembly, verify that the chosen format can be supported truthfully. Check whether the sources or authorized generation tools can supply the hook, identity signal, core proof, payoff, and CTA.

For first-person or testimonial framing, identify whose experience is represented and what makes it credible. A synthetic narrator may explain a workflow or voice a declared brand persona, but it must not imply an observed customer experience that does not exist.

When a core product claim depends on a visible transformation, the actual input, processing, and output are blocking evidence. A screenshot, interface tour, generated mockup, or narration about the result does not resolve that gap.

If the gate fails, change the format, narrow the claim, or request the minimum pickup material before building a final composition.

## 7. Candidate Scoring and Assembly

Create candidate records with source timestamps and evidence. Score each candidate from 0 to 5 for semantic value, visual clarity, delivery or audio quality, novelty or pattern interruption, emotional force, continuity with neighbors, and platform fit.

Weight the scores by mode. A screen tutorial should weight legibility and action completion; a product ad should weight proof and product visibility; a montage should weight motion, emotion, and continuity.

Assemble `EDIT_DECISION.json`. Use source-accurate in and out points, explicit timeline starts, track indices, narrative roles, treatments, and rationales. Validate it before generating composition code.

## 8. Asset-Gap Audit

Write `ASSET_GAPS.md` after the rough assembly. For each beat, mark whether the source already supplies proof, context, transition coverage, visual variety, and CTA support. Classify gaps as blocking, quality-limiting, or optional.

Choose the least costly truthful remedy: alternate source range, reframing, text or diagram, supplied brand asset, licensed stock, generated image, generated video, pickup shot, or removal of the unsupported claim.

## 9. Semantic Visualization

Create `VISUAL_BEAT_MAP.json` after the asset-gap audit and before the storyboard. Map every spoken or musical beat to a visual job and source class. Use source proof for claim-bearing actions; use programmatic UI, generated context, kinetic type, diagrams, licensed stock, or memes to explain or vary the presentation.

For faceless or screen-led work, design a recurring visual motif or character system so generated inserts feel authored rather than randomly accumulated. Read [semantic-visualization.md](semantic-visualization.md) for routing and review criteria.

## 10. Design and Storyboard

Create `DESIGN.md` before HyperFrames HTML. Define palette, typography, caption system, safe zones, motion language, and forbidden treatments. Derive it from brand assets, a named style, a reference analysis, or explicit user direction.

Create `STORYBOARD.md` from the validated edit decision. Describe each beat's source clip, framing, overlays, captions, transitions, audio, and intended viewer takeaway. Avoid duplicating timing truth in prose; reference clip IDs from `EDIT_DECISION.json`.

## 11. Production Proposal and User Approval

Consolidate the approved direction into `PRODUCTION_PROPOSAL.md` and present it to the user before implementation. Include:

- objective, audience, platform, aspect ratio, target duration, and primary metric;
- exact narration or dialogue script and on-screen hook;
- source files and exact ranges, including what each range proves;
- a timed shot list with framing, visual job, overlays, captions, transitions, and sound;
- every generated or sourced asset, its purpose, provider, prompt or search brief, provenance requirement, and expected cost;
- authenticity model, digital-human treatment when applicable, claim boundaries, disclosures, limitations, and requested deliverables;
- blocking gaps and the fallback that will be used if they remain unresolved.

Ask the user to approve this proposal. Do not generate assets, synthesize voice, author the composition, render, or spend credits before approval. Record the approving user message and approved scope in `APPROVAL_RECORD.md`.

Approval covers ordinary implementation choices and fixes that preserve the approved creative direction. Return to this gate when a change materially affects the script's meaning, core claim, target duration by more than 10%, visual format, digital-human use, generation provider, paid budget, or deliverables.

## 12. HyperFrames Build

Initialize or reuse a HyperFrames project. Build source clips and audio first, confirm timing, then add captions, overlays, transitions, and motion. Keep media timing owned by the decision plan and visual behavior owned by the composition.

Use proxies and draft quality for iteration. Generate expensive assets and high-quality encodes only after structural checks pass.

## 13. Quality Control and Delivery

Run content, continuity, layout, audio, and technical gates. Review the first three seconds, every cut boundary, every claim-bearing frame, caption changes, CTA, and final frame. Write `QC_REPORT.md` with pass, warning, and resolved findings.

Render the requested final format after the draft passes. Preserve all planning artifacts so revisions can reuse analysis and change only affected ranges.

## 14. Production Learning and Optional Performance Review

After a material failure, user rejection or completed iteration, follow [continuous-improvement.md](continuous-improvement.md). Record cause confidence, correction, verification evidence and unresolved items in the project's PROJECT.md. Read these at the next intake. Workflow changes remain unverified until the next output demonstrates improvement.

After publication data is supplied, compare retention drops, replays, shares, saves, clicks, and comments against edit decisions. Store project-specific findings in the project. Add a general rule to shared knowledge only when evidence supports reuse and workspace policy allows it.
