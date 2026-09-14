# Efficient production and quality review

Use these operating requirements for new edits and substantial recuts. Keep project-specific feedback in PROJECT.md; read unresolved requirements at intake. Do not accumulate incident histories in this skill.

## Intake and planning

- Resolve executable paths and versions once per environment; reuse working commands and cached source analysis. Verify preview port and project when opening it.
- Transcribe or actually audition supplied narration before matching script, captions and shots. Mark unavailable verification explicitly; pause detection does not establish spoken content.
- Establish an explicit target duration range alongside the maximum. Allocate time for the story, complete actions and reading. If narration is too short, propose revised narration or meaningful additional content before production; avoid padding or artificial stretching.
- Keep timeline timing in EDIT_DECISION.json, including generated scenes and closing frames. Derive storyboard and other planning artifacts from it.
- Present one coherent proposal and record the actual user approval and scope. A later document must not be retrospectively labeled approved by an earlier general instruction.
- Define observable creative acceptance criteria: phone-scale evidence readability, complete action/result sequence, coherent visual and sound treatment, reference-specific qualities, and target duration.

## Implementation

- After production approval, verify a minimal real-media clip, audio and cut when the setup is unverified. Check media identifiers, timing ownership and layering before building the whole composition. Reuse a known working template where suitable.
- Assemble the complete story before decorative refinement. Select style and motion by each scene's narrative job. Distinguish specified, implemented and render-verified library entries; implement only selected effects.
- During debugging, change one suspected cause per diagnostic experiment. If a retry yields no new evidence, change the diagnostic method. Describe unconfirmed diagnoses as hypotheses.
- Use quality-gates.md as the sole acceptance checklist. After local visual fixes, recheck the affected range and both adjacent boundaries; global layout, timing, caption, or audio changes require the relevant full check. Avoid repeating unchanged analysis or full-quality renders. Run required final checks on the actual delivery revision.

## Review and improvement

- Assess technical validity and editorial quality separately. Review the rendered video with audio continuously where supported; frame sampling alone cannot establish pacing or audio quality. Disabled checks or zero samples are not passes.
- Compare the output against the approved creative criteria and relevant prior user feedback. Resolve blocking creative gaps before calling a video final; otherwise label it a review draft and name the remaining gap.
- After substantive feedback, update the relevant production requirement and test it in the next output. Track unresolved project issues in PROJECT.md. A changed instruction is not yet a verified quality improvement; audience performance requires publication evidence.
- Keep repository synchronization separate from rendering and preserve concurrent changes. Do not automatically populate shared libraries or copy production records into a content knowledge base.

## Promote validated improvements

- Keep a correction in the project while it is still specific to one output or awaiting verification.
- When the user explicitly makes a workflow rule global, or a correction is demonstrated to generalize, update the narrowest relevant skill instruction or helper. Store the corrected behavior rather than the failure narrative.
- Validate the skill after the update and inspect the diff. Synchronize the skill repository only after validation; never include project media, credentials, local knowledge bases, or machine-specific paths.
- A successful push makes the workflow update available to other devices, but each device must pull the repository and restart Codex when discovery metadata changes.
