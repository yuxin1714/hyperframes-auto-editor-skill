# Artifact Contracts

Keep file names stable so analysis and rendering can be revised independently.

## MEDIA_MANIFEST.json

Contains `schemaVersion`, `generatedAt`, and `sources`. Each source has a stable `id`, absolute or project-relative `path`, `fingerprint`, `durationSec`, dimensions, frame rate, rotation, video and audio codec facts, and analysis status.

## EDITORIAL_BRIEF.md

Records the requested outcome, audience, platform, primary metric, viewer promise, format, narrative structure, hook, credibility strategy, visual direction, CTA, claim boundaries, and duration budget.

## SCRIPT.md

Before final assembly, create SCRIPT.md for topic-driven content. It contains topic interpretation, exact spoken text, a Chinese explanation when needed for user review, on-screen copy distinct from captions, narrative roles, evidence references, and estimated duration. Record actual narration timing after synthesis or verified transcription; estimates are not word alignment. Include the script in the approved production proposal.

## EDIT_DECISION.json

Minimum shape:

```json
{
  "schemaVersion": "1.0",
  "project": {
    "id": "project-id",
    "primaryType": "screen-tutorial",
    "platform": "tiktok",
    "aspectRatio": "9:16",
    "targetDurationSec": 30,
    "language": "en"
  },
  "sources": [
    { "id": "source-1", "path": "assets/source.mp4", "durationSec": 90 }
  ],
  "clips": [
    {
      "id": "clip-001",
      "sourceId": "source-1",
      "sourceInSec": 3.2,
      "sourceOutSec": 6.8,
      "timelineStartSec": 0,
      "timelineDurationSec": 3.6,
      "trackIndex": 0,
      "role": "hook",
      "reason": "Shows the completed result before the tutorial steps.",
      "confidence": 0.9,
      "scores": {
        "semanticValue": 5,
        "visualClarity": 4,
        "deliveryQuality": 4,
        "novelty": 4,
        "emotionalForce": 3,
        "continuity": 4,
        "platformFit": 5
      },
      "treatment": {
        "fit": "cover",
        "crop": null,
        "speed": 1,
        "captionMode": "phrase"
      }
    }
  ]
}
```

`sourceInSec` is inclusive and `sourceOutSec` is exclusive for timed media. Set both to `0` for a still image. `timelineDurationSec` is the authoritative output duration after speed changes or still-image holds. Confidence ranges from 0 to 1. Component scores range from 0 to 5. Clips on the same track must not overlap on the output timeline. A transition may use its own overlay track.

## ASSET_GAPS.md

For each gap, record the beat, missing evidence or visual, severity, preferred remedy, fallback, provenance requirement, and status.

## VISUAL_BEAT_MAP.json

Contains one record per narrative beat with `id`, `startSec`, `endSec`, `spokenText`, `narrativeJob`, `evidenceRequired`, `visualClass`, `sourceRefs`, `generatedAssetBrief`, `motionIntent`, `viewerTakeaway`, and `status`.

`visualClass` should use a small project-level vocabulary such as `source-proof`, `screen-action`, `programmatic-ui`, `generated-context`, `diagram`, `kinetic-type`, `stock-or-meme`, or `negative-space`. Claim-bearing beats that require evidence must use `source-proof` or another approved substantiated source; generated context cannot satisfy them.

The map should expose unsupported beats, repeated compositions, and generated-asset dependencies before composition code is written. It is an editorial plan, not a frame-by-frame animation specification.

For material spoken beats, also record `visualTarget` (concrete object/action), `evidenceRole` (proof/explanation/context), and evidence timestamps where needed. Active overlays use `motionTarget` with target region relative to the rendered media and activation time; do not specify every animation frame.

## DESIGN.md

Defines visual intent, colors with roles, typography, caption system, layout and safe zones, motion language, source-media treatment, and explicit anti-patterns.

For workspaces using the shared visual library, add `Shared library selection`: library path, lookup date, separate motion/style availability, selected IDs and versions (empty arrays when empty), reasons, and project-local overrides. When actual shared implementation files are copied, record their snapshot paths and SHA-256 hashes in STYLE_LOCK.json. No snapshot is required when nothing is selected.

## STORYBOARD.md

References clip IDs from `EDIT_DECISION.json` and beat IDs from `VISUAL_BEAT_MAP.json`. For every beat, specify viewer takeaway, composition, source framing, overlays, caption behavior, transition, audio treatment, and asset dependencies.

## PRODUCTION_PROPOSAL.md

The user-facing implementation contract created after analysis and before generation or composition work. It contains the exact script, hook, platform and duration, source selections and ranges, timed storyboard, visual and audio treatment, generated-asset plan and providers, prompts or briefs, costs, evidence and claim boundaries, digital-human use, limitations, fallbacks, and deliverables. Its status is `awaiting approval`, `approved`, or `superseded`.

## APPROVAL_RECORD.md

Records the approving user message, approval date, proposal identifier or fingerprint, approved scope, and any later non-material implementation adjustments. When a material change requires a revised proposal, record the new approval separately and mark the prior proposal superseded.

## QC_REPORT.md

Records tool versions, checks run, blocking failures, warnings, resolved issues, sampled timestamps, cut-boundary review, audio and caption checks, output properties, and known limitations.
