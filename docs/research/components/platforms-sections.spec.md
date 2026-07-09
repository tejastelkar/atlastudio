# PlatformsSections Specification

## Overview
- **Target file:** `src/components/PlatformsSections.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.platforms-sections`
- Heading: Present on Top Creative Platforms
- Link count: 7
- Image count: 8
- Background image layers: 8

## Computed Styles (exact values from getComputedStyle)

### Container
- display: block
- position: static
- width: 1440px
- padding: 122px 0px 142px
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
- width: 822.984px
- background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- border: 0px none rgb(255, 255, 255)
- color: rgb(255, 255, 255)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 56px
- fontWeight: 500
- lineHeight: 61.6px
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "10+ Projects Live" (all); a "Top Worldwide" (all); a "42+ Badges" (all); a "450+ Reviews" (all); a "43+ Reviews" (all); a "52+ Reviews" (all); a "5+ Projects Live" (all)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c61e81e2e7fffd78d425_Webflow%20logo.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c61e81e2e7fffd78d42a_Frame%20(17).svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c61e81e2e7fffd78d429_dribbble.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c61e81e2e7fffd78d426_Behance.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69eb10b91012bae5601f692d_svgviewer-output%20(2).svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c61e81e2e7fffd78d428_download%202.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c61e81e2e7fffd78d427_Frame%20(18).svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69915a06f18cc4d01b9f21ba_image%206346447.svg` alt="" 0x0
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))
- Background: div.platforms-content -> linear-gradient(rgb(255, 255, 255), rgb(235, 248, 249) 40%, rgb(203, 240, 241))

## Text Content (verbatim)
Present on Top Creative Platforms10+ Projects Live5+ Projects LiveTop Worldwide42+ Badges450+ Reviews43+ Reviews52+ Reviews5+ Projects Live

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

