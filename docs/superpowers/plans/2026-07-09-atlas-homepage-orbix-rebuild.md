# Atlas Homepage Orbix Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the homepage to a richer Orbix-style section flow while keeping Atlas branding, Atlas copy, and clean React component architecture.

**Architecture:** Build a dedicated Atlas homepage data module plus focused React section components for hero, logo strip, trust/capability, services, case studies, workflow, and testimonials. Wire those sections into the homepage and expand the shared CSS system with section-specific classes and lightweight Framer Motion behaviors.

**Tech Stack:** Next.js 16.2.10 App Router, React 19, TypeScript, Framer Motion, global CSS

## Global Constraints

- Match Orbix closely in layout density, spacing, and motion feel.
- Preserve Atlas branding and the two-font title system.
- Keep service focus limited to custom websites, Shopify design and development, custom web apps, and SEO.
- Do not reintroduce cloned HTML/runtime patterns.
- Keep header and footer shared.

---

### Task 1: Create Atlas Homepage Data And Section Boundaries

**Files:**
- Create: `src/lib/atlas-homepage-data.ts`
- Create: `src/components/atlas/sections/home/atlas-home-hero.tsx`
- Create: `src/components/atlas/sections/home/atlas-logo-strip.tsx`
- Create: `src/components/atlas/sections/home/atlas-trusted-section.tsx`
- Create: `src/components/atlas/sections/home/atlas-services-track.tsx`
- Create: `src/components/atlas/sections/home/atlas-case-studies-section.tsx`
- Create: `src/components/atlas/sections/home/atlas-workflow-section.tsx`
- Create: `src/components/atlas/sections/home/atlas-testimonials-section.tsx`

**Interfaces:**
- Consumes: `ATLAS_CAL_LINK`, `ATLAS_WHATSAPP_LINK`
- Produces: homepage-ready section components with self-contained props sourced from `atlas-homepage-data.ts`

- [ ] Define Atlas homepage content objects for trust pill, marquee items, section copy, service cards, project cards, workflow steps, and testimonials.
- [ ] Create isolated section component files with typed props/data imports and no Orbix naming.
- [ ] Keep each file focused on one homepage section only.

### Task 2: Wire The Homepage To The New Section Stack

**Files:**
- Modify: `src/components/atlas/pages/home-page.tsx`

**Interfaces:**
- Consumes: new homepage section components
- Produces: homepage composed entirely from Atlas section components

- [ ] Replace the current minimal homepage composition with the new section sequence.
- [ ] Remove the placeholder cards/sections that no longer match the Orbix-style homepage structure.
- [ ] Preserve the shared Atlas page shell.

### Task 3: Add Orbix-Style Homepage Layout And Motion Styles

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: new section class names
- Produces: homepage-specific layout, spacing, and responsive rules

- [ ] Add hero, marquee, trust-section, services-track, case-studies, workflow, and testimonials styles.
- [ ] Keep the two-font title pattern available across homepage sections.
- [ ] Add motion-safe hover and reveal polish without global runtime scripts.
- [ ] Ensure responsive layouts for desktop, tablet, and mobile.

### Task 4: Verify Homepage Integrity

**Files:**
- Verify: `src/components/atlas/pages/home-page.tsx`
- Verify: `src/app/globals.css`
- Verify: `src/lib/atlas-homepage-data.ts`

**Interfaces:**
- Consumes: finished homepage rebuild
- Produces: verified homepage ready for the next outward pages

- [ ] Run `npm run lint` and confirm it passes.
- [ ] Run `npm run build` and confirm it passes.
- [ ] Open the homepage locally and verify the hero, marquee, trust, services, project, workflow, and testimonial sections visually render in the intended Orbix-style sequence.
