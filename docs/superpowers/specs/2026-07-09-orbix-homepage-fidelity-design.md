# Orbix Homepage Fidelity Design

**Goal:** Rework the Atlas homepage so its section order, hierarchy, density, card systems, and visual rhythm closely mirror the Orbix Studio homepage while keeping Atlas branding and routes functional.

## Scope

- Homepage only.
- Keep the existing Next.js app-router structure.
- Preserve Atlas-specific navigation destinations and business copy where needed, but reshape the presentation to follow Orbix's homepage more literally.
- Prioritize desktop fidelity first, then ensure the layout still collapses cleanly on tablet and mobile.

## Section Model

1. Header
   - Keep a fixed rounded header shell.
   - Tighten spacing, scale, and CTA proportions so it reads closer to Orbix.

2. Hero
   - Use a compact announcement pill, a bold two-line heading, short support copy, review badge, and two primary CTAs.
   - Add a large showreel/media block directly under the hero copy.

3. Chosen By band
   - Replace the plain text ticker feel with a more visual collage-like strip that echoes Orbix's image rows.

4. Trust/value section
   - Keep the left intro plus right bullet summary pattern.
   - Tighten the capability cards so they feel closer to Orbix's rounded, editorial blocks.

5. Case studies
   - Shift from generic placeholders toward a denser featured-project grid with stronger visual panels and clearer meta rows.

6. Services
   - Make service cards feel more Orbix-like in hierarchy and framing, using stronger top labels, preview areas, and description blocks.

7. Lower-page sections
   - Keep the process and testimonials sections but retune them to follow Orbix's spacing, alignment, and card density more closely.

## Visual Direction

- Background should stay mostly white with soft neutral sections.
- Typography should remain large, editorial, and tightly tracked.
- Cards should use large radii, thin borders, soft shadows, and carefully spaced internal blocks.
- Orbix-like rhythm matters more than exact text matching.

## Constraints

- Do not rewrite the whole site or other routes.
- Do not introduce a backend dependency.
- Keep the homepage buildable with existing dependencies.
