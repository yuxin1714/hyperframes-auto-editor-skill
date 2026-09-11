# Digital human library

Use this reference when a project needs a recurring synthetic presenter, virtual model, or realistic talking avatar. The library is an internal production asset system, not a claim that a generated person is a real customer, expert, or testimonial source.

## What to build

Do not treat a three-view character sheet as the complete deliverable. Three views (front, 3/4, side or back) are useful for identity and wardrobe continuity, but video production normally needs four linked packs:

1. **Identity pack**: front, 3/4 left/right, profile, neutral expression, close-up and full-body references; consistent age range, skin/hair details, body proportions, wardrobe, accessories and visible marks. Keep a canonical reference image and an immutable `identity_id`.
2. **Performance pack**: short neutral-to-speaking clips, phoneme coverage, blink and eye-line examples, head turns, listening/reacting, hand gestures and both seated and standing framing. Record or generate clean plates with no captions or UI. Store `voice_id`, language/accent, speaking rate and consent/license evidence separately.
3. **Scene pack**: the recurring room or studio background, clean plate, lighting direction/color temperature, camera height/lens, desk/chair props and negative space reserved for captions or product UI. A cutout/alpha version is required when the background will change.
4. **Wardrobe/pose variants**: only create variants that serve a planned editorial role. Version each change so a presenter does not silently change face, clothing or lighting between scenes.

Recommended library record:

```json
{
  "identity_id": "dh_001",
  "display_name": "Studio presenter 01",
  "status": "approved|draft|blocked",
  "identity_refs": ["front.png", "three-quarter.png", "profile.png"],
  "performance_refs": ["neutral.mp4", "speaking.mp4", "gesture-set.mp4"],
  "scene_refs": ["studio-clean-plate.png", "studio-alpha.mov"],
  "voice_id": "voice_001",
  "rights": {"likeness": "synthetic|licensed", "voice": "licensed|synthetic", "evidence": "..."},
  "constraints": ["no medical claims", "no unverifiable first-person testimonial"],
  "updated": "YYYY-MM-DD"
}
```

Keep source files and provider job IDs auditable. Never put credentials, private personal data or a client-specific assumption in this shared skill library. A real person's likeness or voice requires documented permission for the intended channels and commercial use; otherwise use an explicitly synthetic identity.

## How to achieve the reference look

For a credible image or video plate, lock the identity first, then lock capture conditions: soft key light, controlled fill, realistic skin texture, natural eye highlights, physically plausible shadows, a stable camera/lens and a background with matching depth of field. Generate or capture several takes from the same identity references; select for continuity rather than choosing the most attractive single frame. Avoid uncanny indicators such as waxy skin, mismatched teeth, drifting logos/jewelry, inconsistent hands, frozen eye contact or background geometry changing between shots.

The asset-gap audit must state whether the project uses (a) a user/actor recording, (b) a licensed avatar provider, or (c) a synthetic image/video generator. Generated humans may explain or host content, but they do not substantiate product behavior, measured results, credentials or a real event. Mark disclosure requirements in the proposal when the destination or client requires synthetic-media labeling.

## Match the two layouts

**Presenter-led (reference image 1)**: use a 9:16 or 16:9 talking-head plate as the visual anchor. Reserve a safe lower-third area for captions, keep hands and face inside the crop, and cut on natural pauses. The room is part of the identity, so reuse the same clean plate/lighting across episodes unless a deliberate scene change is approved.

**Screen-led picture-in-picture (reference image 2)**: the genuine screen recording or product evidence remains the primary layer. Place a 16:9 or 1:1 presenter plate in a rounded rectangle with a real shadow, consistent padding and an intentional corner that does not cover controls, cursor actions, captions or legal text. Use a clean/alpha plate when the background should be replaced; use the scene plate when the room should remain visible. Keep the overlay large enough to read facial reaction but subordinate to the demonstrated UI, and specify its x/y/width/height, corner radius and entrance/exit timing in `DESIGN.md` and `VISUAL_BEAT_MAP.json`.

Do not bake the phone player chrome, platform progress bar or “full screen” controls from a reference screenshot into the production composition. Recreate only the editorial treatment that is wanted.

## Proposal and QC additions

The production proposal must identify `identity_id`, provider/asset route, voice and likeness rights, disclosure plan, chosen layout, background treatment, and every scene that uses the digital human. Add identity continuity checks to `QC_REPORT.md`: face/wardrobe, eye-line, lip sync, hands, lighting/shadows, background geometry, crop safety, overlay occlusion and caption readability. If any required pack is missing, record it in `ASSET_GAPS.md` and downgrade or stop the deliverable rather than inventing continuity.
