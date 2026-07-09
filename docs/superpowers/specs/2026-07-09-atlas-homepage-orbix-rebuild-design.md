# Atlas Homepage Orbix Rebuild Design

## Goal

Rebuild the Atlas homepage so it restores the richer Orbix-style section flow, spacing rhythm, and motion while using Atlas Studio branding, Atlas copy, and Atlas service positioning.

## Direction

- Match Orbix closely in layout density, vertical rhythm, and motion feel.
- Keep the Atlas two-font title system across hero and major section headings.
- Keep Atlas focus on:
  - custom websites
  - Shopify design and development
  - custom web apps
  - SEO and optimisation
- Do not reintroduce cloned HTML runtime, injected scripts, or Orbix-branded source files.

## Homepage Section Stack

1. Hero
   - Restore the larger Orbix-style hero composition.
   - Use a soft gray canvas, trust pill, oversized two-line heading, founder-led summary, and dual CTAs.
   - Add light entrance motion and CTA hover polish.

2. Client / logo strip
   - Restore the scrolling trusted-by strip under the hero.
   - Use Atlas-safe client/project names as text-first marquees for now.
   - Keep the section visually close to the Orbix strip even without final logo assets.

3. Trusted / capability section
   - Rebuild the split two-column section with headline, supporting copy, CTA, side value list, and four capability cards.
   - Update all content to Atlas delivery language.

4. Services track
   - Rebuild the Orbix service showcase grid with hoverable cards and preview panels.
   - Replace removed categories with Atlas services only.

5. Case-study showcase
   - Restore the larger featured-project layout and motion.
   - Use Atlas placeholders/content structure until final project images/content arrive.

6. Workflow section
   - Restore the timeline-like process section using Atlas process copy.

7. Testimonials section
   - Rebuild the testimonial card rhythm with Atlas-friendly founder/client messaging.

## Component Strategy

- Build each homepage section as an isolated Atlas React component.
- Keep shared data in a dedicated Atlas homepage data module.
- Keep shared motion inside the Atlas components using Framer Motion, not global runtime scripts.
- Reuse the Atlas page shell, shared header, shared footer, and split heading primitive.

## Constraints

- No visual regression to the shared pill header/footer.
- No Orbix runtime files or HTML injection patterns.
- No references to removed service categories.
- Homepage must stay responsive and build cleanly on Next 16.2.10.
