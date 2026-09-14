# Motion Library: Vertical AI-Editing Explainer

This library was extracted from the reference video supplied on 2026-09-13:
`ef48f20445bb35d561ee5b9fe10fcf79.MP4` (114.28s, 1080x1440, 30fps).
It records reusable visual behaviors observed across the full video. The
reference is source material for patterns only; do not copy its claims,
branding, or exact wording without evidence and approval.

## Composition System

- Vertical 3:4 canvas with a dark charcoal/black editorial background.
- Warm orange/white headline treatment for the opening; later chapters use
  white type over cyan/blue or black procedural backgrounds.
- Genuine talking-head and screen-recording media remain the evidence layer.
- Circular talking-head picture-in-picture (PIP) is anchored to a lower corner,
  with a white stroke and soft shadow; it stays above screen recordings but below
  large captions when captions need emphasis.
- Chinese captions use a heavy white face with a black outline/shadow for
  readability over moving footage. Keep captions inside a measured safe area.

## Reusable Motion Patterns

### 1. Headline pop-in

Large two-line opener enters with a short upward movement and scale settle.
Use `gsap.from()` on the headline and supporting label, offset 0.1-0.3s from
the scene start. Keep the final CSS position visible as the layout source of
truth.

### 2. Evidence-window inset

The talking-head video is shown as a large primary panel while a smaller
"original material" inset sits below it. The inset uses a thin border, slight
shadow, and a restrained scale-in. This creates an explicit source/effect
comparison without inventing footage.

### 3. Caption replacement card

The lower caption changes while the visual evidence window remains stable. Use
short caption blocks as separate timed clips instead of changing text inside a
single long clip. Animate each block with opacity plus a 10-24px y offset.

### 4. Animated chart insert

A clean light chart card interrupts the talking head. Bars reveal sequentially
from the baseline, followed by the chart title and small legend. Use finite
staggered `scaleY`/height or clip-path reveals; never use random data. Source
numbers must be supplied or clearly labeled as illustrative.

### 5. Timed badge / countdown ring

A circular yellow timing badge appears beside the presenter, with a ring and
digital time label. Build the ring as SVG/CSS stroke or a masked border and
animate a finite stroke reveal. Keep it as an overlay wrapper; do not animate
the video element's dimensions.

### 6. Chapter card: vertical light rays

Full-frame chapter title over dark cyan/blue vertical luminous bands. The bands
are a static or deterministic CSS/canvas texture; the title enters with a
small rise and opacity ramp. Use a finite drift or parallax offset if motion is
needed, not an infinite repeat.

### 7. Chapter card: dot-matrix bloom

A black chapter card uses a grid of white dots that brighten in a central bloom.
Implement with a deterministic radial mask over a repeated dot pattern, then
animate opacity/scale of the mask. Avoid per-frame random flicker.

### 8. Screen-recording focus frame

Software UI fills the frame with the presenter in a circular PIP. The screen
recording may receive a subtle scale-up, crop/reframe, or pan to direct attention
to the relevant control. Animate a non-timed wrapper, not the media element.

### 9. Cursor and control callout

A visible cursor moves to a menu, timeline, or button while a caption identifies
the action. Preserve the real cursor when it is part of the supplied capture;
for recreated callouts use a deterministic cursor asset plus a short motion path.
Do not claim an interaction that is not visible in the source.

### 10. Timeline/editor proof shot

The editor timeline is shown as proof of automated cutting. Use a gentle push-in
and a lower-third caption. Keep track labels, controls, faces, and captions out
of the crop's occlusion zone.

### 11. Oversized single-character emphasis

A single Chinese character briefly fills the face area with white fill and thick
black outline. This is a beat accent, not a persistent caption. Enter with a
fast scale/opacity pop, hold long enough to read, and hand off via a scene
transition; do not fade the previous scene out before that transition.

### 12. Template-library browse

A dense grid of real template thumbnails is shown while the PIP remains fixed.
Use a vertical or horizontal pan/scroll across the grid, with a highlighted
selection or cursor. Keep each thumbnail legible enough to establish the source
and avoid replacing the library with invented UI.

### 13. Prompt/chat panel reveal

A dark chat or prompt panel is presented as a documentary UI insert. Reveal the
panel with a masked vertical wipe or short opacity/scale entrance, then hold for
reading. Use OCR or supplied copy for text; do not synthesize product behavior.

### 14. Motion-graphics title card

A black title card uses a yellow accent word (for example, a mode name) beside
white text. Add a restrained underline/accent bar and a slight tracking or
position settle. This pattern works as a section divider between evidence
segments.

### 15. Comparison matrix / scoring board

A dark board displays rows such as subject, foreground, and background with
colored score cells. Rows enter in a short stagger; one selected cell receives a
yellow highlight sweep. Values are explanatory only unless grounded in source
data.

### 16. Asset/animation browser sweep

A real effects or asset browser is panned across while a caption labels the
operation. Use a crop window and a deterministic translate tween. Avoid fast
scrolling that makes labels unreadable.

### 17. Generated-product image carousel

Several AI-generated product images appear in a consistent rounded rectangle:
hero product, exploded/detail view, close-up, then logo/product mark. Use a
finite crossfade or directional wipe between images, with a small scale drift
inside each image wrapper. Label generated visuals as illustrative when they do
not prove real product behavior.

### 18. Radial speed-line product card

A product image is framed by red radial speed lines and a bold English slogan.
Build speed lines as a deterministic radial texture or supplied asset. Animate
the wrapper's scale/opacity and a finite radial expansion; avoid a full-screen
linear gradient that can band in H.264.

### 19. End-screen gallery and identity badge

A grid of prior video thumbnails dims behind a centered circular portrait badge.
The portrait receives a white ring and a checkmark/status mark, followed by a
large name caption. Use a darkening veil and scale/opacity entrance to establish
hierarchy; keep the gallery as real portfolio evidence.

## Choreography Rules

- Animate entrances only when they clarify hierarchy or narrative change. Keep
  essential opening content visible from frame zero; not every element needs a tween.
- Choose editorial cuts or animated transitions by content. Follow quality-gates.md
  for boundary readability; do not require a transition effect between every scene.
- Use finite repeats calculated from the scene duration. Never use
  `repeat: -1`, `Math.random()`, or asynchronous timeline construction.
- Prefer captions, PIP, callouts, and badges as independent layers with explicit
  `data-track-index` values. Layering is controlled by CSS `z-index`, not track
  index.
- Verify every effect at its hero frame with `hyperframes inspect`, and audit
  contrast after removing decorative layers.

## Extraction Notes

The sampled reference contains these broad beats: opener and source/effect
comparison (0-17s), chapter cards and screen-led tutorial segments (17-60s),
motion/template demonstrations (60-87s), generated product-ad examples
(87-108s), and a portfolio end card (108-114s). Exact clip boundaries should be
re-measured from the source when recreating a particular edit; this catalog is
deliberately implementation-oriented rather than a claim that every frame uses
the same timing.
