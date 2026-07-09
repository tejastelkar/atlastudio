# Atlas Component Migration Design

## Goal

Replace the current Orbix clone-based page system with proper Atlas React components so the site gets consistent heading treatment, spacing, naming, and long-term maintainability without visual regressions.

## Current Problem

The current website is split across two architectures:

- Legal pages are rendered as React components.
- Marketing pages still rely on imported Orbix HTML plus runtime DOM patching and CSS overrides.

That causes the exact problems the user is seeing:

- heading styles drift across pages
- spacing becomes page-specific instead of system-driven
- shared header and footer consistency depends on injected markup
- `orbix-*` naming still leaks across files, props, and styles
- new edits are harder because content lives in transformed HTML instead of explicit components

## Scope

This migration covers the currently active public pages in the repo:

- `/`
- `/about`
- `/blogs`
- `/services/saas-design`
- `/services/shopify-agency`
- `/services/mvp-development`
- `/terms-of-service`
- `/privacy-policy`
- `/refund-policy`

This migration also covers the shared layout system:

- pill header
- mega menus
- footer
- split two-line title pattern

## Constraints

- Keep the website visually close to the current live Atlas direction while improving spacing consistency.
- Do not reintroduce Orbix copy or Orbix brand naming.
- Use Atlas-focused naming for files, classes, props, and exported functions.
- All page hero titles must follow the two-font, two-line styling system.
- Preserve the current service focus:
  - custom websites
  - Shopify design and development
  - custom web apps
  - SEO
- Avoid raw page HTML injection for the migrated pages.
- Remove the clone runtime once all migrated pages no longer depend on it.

## Target Architecture

### 1. Shared Atlas UI layer

Create a proper component layer under `src/components/atlas/` with clear ownership:

- `layout/`
  - `atlas-header.tsx`
  - `atlas-footer.tsx`
  - `atlas-page-shell.tsx`
- `heroes/`
  - `split-hero-title.tsx`
  - `marketing-hero.tsx`
  - `legal-hero.tsx`
- `sections/`
  - reusable marketing sections
  - reusable legal content blocks
  - reusable trust/logo/content sections as needed

This becomes the only rendering path for page structure.

### 2. Shared content data instead of transformed HTML

Each page should render from typed React props or local data objects rather than HTML transforms. That means:

- no `dangerouslySetInnerHTML` for migrated marketing pages
- no runtime heading replacement logic
- no string replacement pipeline for page content

### 3. Atlas naming everywhere

As the clone layer is removed, rename all remaining Orbix-facing names to Atlas:

- `orbix-clone.tsx` removal
- `orbix-page-runtime.tsx` removal
- `orbix-*` CSS class ownership replaced with `atlas-*` component-owned styles where practical
- shared functions renamed from `getOrbix...` to Atlas equivalents only if still needed during transition

## Page Composition Strategy

### Home

Rebuild the home page as explicit sections:

- hero
- trusted/logos strip
- lean team / delivery section
- services focus section
- proof/testimonial section
- CTA/footer flow

The goal is not to preserve Orbix internals. The goal is to preserve the current Atlas visual feel and messaging with clean React composition.

### About

Rebuild as a focused Atlas story page:

- split hero title
- founder-led studio story
- how the AI-assisted workflow works
- values/process section
- CTA

### Blogs

Rebuild as a proper blog landing page:

- split hero title
- filter chips
- blog card grid
- reusable section spacing

### Service Pages

Rebuild service pages as dedicated React pages with shared service-page section components:

- `/services/saas-design`
  - position as custom website design for B2B/SaaS brands
- `/services/shopify-agency`
  - position as Shopify design, development, and ecommerce SEO
- `/services/mvp-development`
  - reposition as custom web apps/internal tools/client portals

Each service page should use the same title system and spacing system.

### Legal Pages

Keep the existing React-based structure but migrate them to the new shared Atlas shell and title system so spacing and header/footer behavior are consistent.

## Styling Strategy

Move from page-specific override styling toward component-owned styles:

- keep `globals.css` only for app-wide primitives, fonts, and shared utility rules
- move page structure styling into semantic Atlas component class names
- standardize:
  - top spacing under fixed header
  - hero width
  - vertical rhythm
  - section padding
  - footer spacing
  - legal content width and heading scale

## Migration Sequence

### Phase 1. Shared shell

Build the new Atlas shell first:

- Atlas header
- Atlas footer
- page shell
- split hero title

This establishes the system all pages consume.

### Phase 2. Legal pages

Migrate legal pages first because:

- they are already React-rendered
- they expose heading and spacing issues clearly
- they depend only on shared shell plus text content

### Phase 3. Priority service page

Migrate `/services/shopify-agency` next because it is one of the user’s most actively reviewed pages and currently still shows inconsistent heading treatment.

### Phase 4. Remaining marketing pages

Migrate:

- home
- about
- blogs
- `/services/saas-design`
- `/services/mvp-development`

### Phase 5. Remove clone system

After the migrated pages no longer rely on injected Orbix HTML:

- delete `src/lib/orbix-clone.tsx`
- delete `src/app/orbix-page-runtime.tsx`
- delete unused `src/content/orbix-*.html`
- remove unused Orbix asset helpers and stylesheet/script hooks

## Risks

### Visual drift

Risk: spacing or layout may differ slightly once we stop rendering imported HTML.

Mitigation:

- preserve current spacing proportions
- migrate shared shell first
- verify each page in browser after conversion

### Hidden content dependency

Risk: some copy or media references may still only exist inside Orbix HTML files.

Mitigation:

- extract only the content actually still used
- convert to explicit page data while migrating each page

### Over-large first refactor

Risk: changing every page at once can make debugging harder.

Mitigation:

- migrate in phases
- keep each phase independently verifiable

## Success Criteria

The migration is complete when:

- all current public pages render from React components
- no public page depends on injected Orbix HTML
- `orbix-clone.tsx` and `orbix-page-runtime.tsx` are removed
- header and footer are shared Atlas components everywhere
- page titles consistently use the required two-line, two-font system
- the current spacing issues are resolved through component layout rather than patch CSS
- remaining Orbix naming is removed from active public page code
