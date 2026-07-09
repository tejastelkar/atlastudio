# AwardsSection Specification

## Overview
- **Target file:** `src/components/AwardsSection.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.awards-section`
- Heading: Awards & Honors
- Link count: 0
- Image count: 4
- Background image layers: 0

## Computed Styles (exact values from getComputedStyle)

### Container
- display: block
- position: static
- width: 1440px
- padding: 120px 0px
- background: rgb(1, 1, 1) none repeat scroll 0% 0% / auto padding-box border-box
- backgroundColor: rgb(1, 1, 1)
- border: 0px none rgb(0, 0, 0)
- color: rgb(0, 0, 0)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 16px
- fontWeight: 400
- lineHeight: 24px
- transition: all
- opacity: 1

### Primary Heading
- display: block
- position: static
- width: 820px
- background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- border: 0px none rgb(255, 255, 255)
- color: rgb(255, 255, 255)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 72px
- fontWeight: 500
- lineHeight: 79.2px
- letterSpacing: -2.16px
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: N/A

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f4bbec64da57877600b6_f4282370-b336-407d-82a6-3e90988e403c.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69b7831c85860b9ac52d38ae_Behance%20card.avif` alt="Behance badge achievement certificate for 2025 awarded to Orbix Studio for 37 Behance badges in Digital Product Design with category icons for Behance, UI, Illustrator, Adobe XD, and Style." 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69b7831c069714d6903bfb01_Rectangle%201430106790.avif` alt="Certificate for i.design Winner 2025 awarded to Orbix Studio for the project GiveHub in the Digital Product Design category, signed by the Founder & Award Director." 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69b7831c3d72e36c5da98527_fluent_cursor-16-filled.avif` alt="M design award badge for Muzli Dashboard Showcase 2025 awarded to Orbix Studio for multiple features in Digital Product Design." 0x0


## Text Content (verbatim)
Global RecognitionAwards & HonorsOur work has been recognized by leading platforms for creating clear user experiences and high-performing digital products.

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

