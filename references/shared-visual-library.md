# Shared motion and style library

## Scope

This integration applies only to projects located in workspaces named `自动剪辑` or `海外内容创作`, or their descendants.

Resolve the shared library root in this order:

1. `HYPERFRAMES_SHARED_VISUAL_LIBRARY`, when configured on the current device.
2. `shared-visual-library` inside the active `自动剪辑` workspace.
3. A sibling `自动剪辑/shared-visual-library` directory beside the active `海外内容创作` workspace.

Do not copy an absolute path from another device into project artifacts.

Read its README.md and index.json during intake; inspect relevant indexed entries during visual planning. Do not scan or share another workspace's business records or knowledge/ content. For other workspaces, use this library only if explicitly requested.

Read the library's SELECTION.md when present. The user has authorized automatic per-scene motion selection in these two workspaces: choose from narrative purpose, available assets, readability, brand constraints and implementation readiness. Do not ask the user to choose individual effects. Keep missing implementation work explicit; this selection authorization does not make reference entries render-ready or authorize paid assets.

## Selection in the editing workflow

1. Match the editorial brief and source footage to available style and motion entries before finalizing DESIGN.md and PRODUCTION_PROPOSAL.md. A style describes the overall appearance and pacing; a motion describes a specific animation behavior. They are related but selected separately.
2. Read the actual entry, source, permission notes, constraints, implementation status, and validation evidence before using it. Do not assume that an index entry means runnable code exists.
3. User direction and project brand constraints take priority. Select only useful entries, rather than forcing a preset onto every scene. Record entry IDs, versions, selection reasons, parameter overrides, and exclusions in a `Shared library selection` section of DESIGN.md. Summarize the choice in the production proposal.
4. Reference-only or specified entries can inform planning, but implementation work must be identified explicitly. An implemented entry is not render-verified. Even verified entries require checks against the current footage, captions, aspect ratio and timing.
5. After production is authorized, copy selected implementation files into a project-local snapshot and record original paths, versions, and SHA-256 hashes in STYLE_LOCK.json. Do not use mutable shared files directly in a final composition. Never copy business records into the shared library.
6. Use HyperFrames-owned timing; adapt any reference animation to deterministic seeking and rendering. Validate layout, cut boundaries, source visibility and caption legibility. Record actual usage and test evidence in QC_REPORT.md. Do not automatically promote project results back into the shared library.

## Empty or unavailable library

An empty `motions` or `styles` array is an intentional state: the user will supply content. Record `empty` for that category and leave selected IDs empty. Continue the existing visual-planning process using the user's brief, project DESIGN.md or explicitly identified project-local design. Do not invent shared IDs, install example packs, add presets, or claim the library supplied a style. Do not pause an otherwise authorized edit solely because the library is empty.

If a path is unavailable, record `unavailable` separately from `empty`, disclose this if it affects the proposed design, and proceed with project-local planning where possible. Ask for missing reference material only when the user explicitly requires that material for the result.

## Import ownership

The user imports references into inbox/ or provides paths/links in conversation. Organize or implement imports when requested. Creating the library and integrating this lookup step do not authorize auto-population, third-party asset downloads, importing client assets, or rewriting shared entries during a normal edit.
