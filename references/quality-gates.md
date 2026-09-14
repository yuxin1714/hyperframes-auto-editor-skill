# Quality Gates

Use two levels: blocking gates prevent final delivery; editorial warnings require review but may be accepted when intentional.

## Before Build

Blocking:

- Every selected clip resolves to an existing source and valid source range.
- No same-track output overlap.
- Mandatory claims have source evidence or approved substantiation.
- The creative feasibility gate passes: hook, identity model, core proof, payoff, and requested visual standard are supportable.
- Claim-bearing transformations are visible in real source evidence; generated or reconstructed UI is not being used as proof.
- The rough assembly fits the requested duration or the deviation is explicit.
- A visual identity exists in `DESIGN.md`.
- `VISUAL_BEAT_MAP.json` assigns every important beat a visual job, and blocking beats have resolved sources.

## Content and Continuity

Blocking:

- No clipped words, missing referents, broken software actions, or impossible product behavior.
- No black, frozen, corrupt, or duplicate ranges unless intentional.
- Captions match the final audio and use the correct language.
- CTA and required disclosures are present when requested.

Warnings:

- Hook promise is not paid off.
- A visual change has no narrative purpose.
- A spoken beat has no visual translation and remains abstract longer than the platform and format can support.
- Generated inserts are semantically generic, visually inconsistent, or replace evidence the viewer needs to see.
- Screen text or product details are too small at delivery resolution.
- More than one consecutive clip repeats the same information or composition.

## Visual and Layout

Blocking:

- Important faces, products, controls, captions, and text stay inside safe areas.
- Captions do not cover the active UI region or critical product evidence.
- HyperFrames lint and validate pass with zero errors.
- HyperFrames inspect has no unexplained overflow.
- Static hero frames pass creative review at delivery and phone-feed size: balanced visual center, readable media, aligned related modules, intentional negative space, natural headline wrapping, and no production notes, empty panels, or redundant copy.
- Recurring media formats use deliberate consistent stages; any letterboxing or ratio change is intentional.

Review representative hero frames, high-motion frames, and every transition. For a screen tutorial, sample immediately before the action, at activation, and after the visible result.

For feed-first short-form, also review the first visible frame at phone-feed scale, the first complete promise, the first proof frame, and the payoff. Passing bounds and contrast checks does not establish semantic legibility.

Hook: frame zero already contains a readable subject, conflict, or event. Review the full first three seconds at 6-10 samples per second. Multi-panel motion must retain one clear dominant subject unless simultaneous comparison is intentional.

Transitions: review immediately before, at, and after every boundary, and additional frames within animated transitions. No unintended blank canvas, blackout, opaque cover, duplicate headline, or unreadable overlap. Preserve a readable visual anchor through the transition; a deliberate pause or blackout must be approved and serve the story.

Review semantic overlays at their exact active timestamps against the rendered media, not only the source container.

## Audio

Blocking:

- Dialogue remains intelligible and synchronized.
- No unintended silence, hard clicks, abrupt word cuts, or clipping.
- Music and effects do not mask speech.

Check integrated loudness and true peaks against the project's delivery target when one exists. Do not hardcode one loudness target for every platform and ad specification.

## Render and Delivery

Blocking:

- Output duration, dimensions, frame rate, codec, audio presence, and file readability match the brief.
- Final encode was reviewed from its rendered file, not only from the browser preview.
- `QC_REPORT.md` identifies the exact delivered file and any accepted warnings.
- Final review includes a full-duration contact sheet, high-frequency hook samples, both sides of every boundary, each active semantic overlay, captions, CTA, final hold, output metadata, and audio measurements. Contact sheets do not replace continuous audio/pacing review.
- Delivery copies match the validated encode; compare hashes when files are copied. A derived encode is verified for its own dimensions, readability, duration, and audio.

Use draft encodes for iteration and one requested final-quality encode. Avoid repeated full-quality renders when only planning artifacts changed.
