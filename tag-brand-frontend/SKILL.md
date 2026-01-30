---
name: tag-brand-frontend
description: Create production-ready front-end interfaces for the Tag brand identity. Use this skill when building websites, landing pages, dashboards, React components, HTML/CSS layouts, presentations, or any digital interface that must follow Tag's brand guidelines. Generate pixel-perfect, on-brand code using Tag's color system (Electric Yellow #F8E600, greys, highlight colors), Space Grotesk typography, Content Path graphical elements, and 4x4 grid layout system.
---

# Tag Brand Front-End Design System

## Overview
Create Tag-branded interfaces that feel precise, confident, and intentional. Apply the design tokens, grid, Content Path, and motion rules consistently to avoid generic or off-brand output.

## Brand Philosophy
- Be attentive: make considered decisions; nothing by chance.
- Be open: flow between worlds; embrace change.
- Be savvy: show the right tools and talent through outcomes.
- Be certain: engage with conviction; be transparent.

Payoff line: "Make it land."

## Workflow (use for every build)
1. Set the foundation: load Space Grotesk and the Tag tokens from `references/design-tokens.css`.
2. Lay out a 4x4 grid with Tag margins; extend rows in 2-row increments only.
3. Choose one dominant background (Electric Yellow, White, Light Grey, or Black).
4. Apply color hierarchy: Yellow is hero, highlights only for CTAs and accents.
5. Build typographic hierarchy with the golden ratio scale and weights.
6. Add the Content Path when it supports the story; keep to a single filled path.
7. Compose UI with Tag components from `references/component-library.md`.
8. Apply purposeful motion (Tag easing and staggered reveals).
9. Run the checklist and critical don'ts before handing off.

## Color Rules (non-negotiable)
- Use Electric Yellow as the hero color; only one Yellow-dominant element per composition.
- Use highlight Blue/Orange only for CTAs and emphasis; never as backgrounds.
- Use Black/White/Light Grey as primary surfaces.
- Follow the background-to-text rules from the design tokens reference.

## Typography Rules
- Use Space Grotesk only; load weights 400, 500, 600.
- Headlines: 600; sub-headlines: 500; body and buttons: 400.
- Scale type using the golden ratio values from the tokens.

## Grid and Layout
- Use a 4x4 grid as the base; extend rows in 2-row increments.
- Keep margins between 5-10% of the shortest viewport dimension.
- Align edges and elements to grid lines; avoid arbitrary offsets.

## Content Path
- Use the Content Path as a single filled shape; never outline.
- Keep thickness between 1 and 1.5 grid rows.
- Align endpoints to layout edges; keep within the grid.
- See `references/content-path-svgs.md` for ready-made paths.

## Components
- Use buttons, cards, and navigation from `references/component-library.md`.
- Keep CTAs in Blue/Orange (or Yellow on dark backgrounds only).

## Motion
- Use Tag easing and durations from `references/design-tokens.css`.
- Favor entrance reveals and staggered text; avoid decorative micro-motion.

## Copy Tone
- Be relatable, grounded, expert, and confident.
- Avoid buzzwords; focus on real outcomes.
- No exclamation points or emojis.

## Checklist
- Space Grotesk loaded (400/500/600).
- Only approved color hex values used.
- Electric Yellow used as hero, not repeated.
- Highlight colors used for CTAs only.
- Type weights and scale match the system.
- Grid and margins follow the 4x4 system.
- Content Path uses approved rules (if used).
- Motion uses Tag easing and durations.

## Critical Don'ts
1. Never use Inter, Roboto, Arial, or system fonts.
2. Never use purple gradients or generic AI aesthetics.
3. Never outline the Content Path.
4. Never use highlight colors as backgrounds.
5. Never randomize type scale; use the golden ratio.
6. Never place elements off-grid.
7. Never use exclamation points or emojis.
8. Never write "TAG" or "tag"; always "Tag".

## Logo Usage
- Use the reversed Tag logo from `references/tag_reversed_logo.png` for dark backgrounds.
- Place the logo in navigation headers or footers; never distort or recolor.
- Maintain clear space around the logo equal to at least the height of the "T" in Tag.

## Background Treatment
- Use `references/Vector_4.svg` as a decorative background element.
- Apply the vector as a cover layer on top of black gradient backgrounds.
- Use CSS: `background: linear-gradient(to bottom, #000000, #1a1a1a); position: relative;` with the SVG as an absolutely positioned overlay.
- Set the SVG to `object-fit: cover` or `background-size: cover` to fill the container.
- Keep the vector subtle; use low opacity (0.1–0.3) or blend modes like `soft-light` or `overlay`.
- The vector should support the composition, not dominate it.

## References
- Design tokens: `references/design-tokens.css`
- Content Path library: `references/content-path-svgs.md`
- Component library: `references/component-library.md`
- Tag logo (reversed/white): `references/tag_reversed_logo.png`
- Background vector: `references/Vector_4.svg`
