# Orbix Homepage Fidelity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Atlas homepage so it follows Orbix Studio's homepage structure and visual rhythm much more closely.

**Architecture:** Keep the current homepage composed from focused React sections, but reshape the section markup, backing content data, and global CSS together. Build the page from top to bottom so spacing and component relationships stay coherent.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, global CSS, Framer Motion

## Global Constraints

- Homepage only.
- Keep existing Atlas routes functional.
- Preserve a close Orbix-style visual rhythm without introducing new runtime dependencies.
- Validate with `npm run build`.

---

### Task 1: Document and align homepage content model

**Files:**
- Modify: `src/lib/atlas-homepage-data.ts`

**Interfaces:**
- Consumes: Existing homepage section data objects.
- Produces: Updated content objects for hero, collage/media, case studies, services, process, and testimonials.

- [ ] Update homepage data so the rebuilt sections have the labels, metrics, and card copy they need.
- [ ] Keep object shapes simple enough for the current component boundaries.

### Task 2: Rebuild top-of-page structure

**Files:**
- Modify: `src/components/atlas/layout/atlas-header.tsx`
- Modify: `src/components/atlas/sections/home/atlas-home-hero.tsx`
- Modify: `src/components/atlas/sections/home/atlas-logo-strip.tsx`

**Interfaces:**
- Consumes: Updated homepage data objects and existing site links.
- Produces: Orbix-like header, hero, review row, showreel/media block, and chosen-by collage band.

- [ ] Adjust header markup only where needed for closer structure and hierarchy.
- [ ] Rebuild the hero to include review/CTA grouping and a large media block below the copy.
- [ ] Replace the ticker-style logo section with a more visual collage-based band.

### Task 3: Rebuild core middle sections

**Files:**
- Modify: `src/components/atlas/sections/home/atlas-trusted-section.tsx`
- Modify: `src/components/atlas/sections/home/atlas-case-studies-section.tsx`
- Modify: `src/components/atlas/sections/home/atlas-services-track.tsx`

**Interfaces:**
- Consumes: Updated homepage data objects.
- Produces: Tighter trust cards, stronger featured case study grid, and more Orbix-like service cards.

- [ ] Tighten the trust/value section layout and card anatomy.
- [ ] Make case studies denser and more visual.
- [ ] Strengthen the services card framing and hierarchy.

### Task 4: Retune lower-page support sections

**Files:**
- Modify: `src/components/atlas/sections/home/atlas-workflow-section.tsx`
- Modify: `src/components/atlas/sections/home/atlas-testimonials-section.tsx`

**Interfaces:**
- Consumes: Updated homepage data objects.
- Produces: Process and testimonial sections that better match Orbix's page rhythm.

- [ ] Add more visual density to the process steps.
- [ ] Make testimonials feel more like a premium client-proof section instead of plain quotes.

### Task 5: Unify styling and verify

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: Updated section markup.
- Produces: Global homepage styling that supports the new layout and desktop/mobile behavior.

- [ ] Rewrite homepage-specific CSS for the edited sections.
- [ ] Run `npm run build`.
- [ ] Compare the local homepage against the browser reference and tighten obvious gaps.
