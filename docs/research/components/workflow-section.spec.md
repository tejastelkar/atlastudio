# WorkflowSection Specification

## Overview
- **Target file:** `src/components/WorkflowSection.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.workflow-section`
- Heading: A Faster Way To Design And Build SaaS Products
- Link count: 0
- Image count: 6
- Background image layers: 3

## Computed Styles (exact values from getComputedStyle)

### Container
- display: block
- position: static
- width: 1440px
- padding: 100px 0px 0px
- background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box
- backgroundColor: rgb(255, 255, 255)
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
- border: 0px none rgb(0, 0, 0)
- color: rgb(0, 0, 0)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 64px
- fontWeight: 500
- lineHeight: 76.8px
- letterSpacing: -0.64px
- textTransform: capitalize
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: N/A

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6986ec9c8bef78c279167aad_Vector%20(6).svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69981769482f9ff059a59204_Frame%202147240698.avif` alt="Smiling man with beard waving during a video call interface on screen." 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6986ec9c8bef78c279167aad_Vector%20(6).svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6986e32fc2181b2141e1584b_Frame%202147240613.avif` alt="Website homepage showing food delivery app with tagline 'Fast, Fresh & Delivered To Your Door' and app interface on mobile phones." 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6986ec9c8bef78c279167aad_Vector%20(6).svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6986e32fcb670b10281f4be4_Frame%202147240612%20(1).avif` alt="Dashboard interface on a tablet showing user welcome message, compliance score gauge at 94%, financial metrics, and usage statistics." 0x0
- Background: div.timeline_progress-line -> linear-gradient(rgb(255, 46, 46) 50%, rgba(218, 218, 218, 0))
- Background: div.timeline_line -> linear-gradient(rgb(218, 218, 218) 42%, rgb(255, 255, 255))
- Background: div.timeline_fade-overlay-bottom -> linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255) 70%)

## Text Content (verbatim)
Our ProcessA Faster Way To Design And Build SaaS ProductsWe simplify the product creation process for SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.Step 1PlanDefine the Product GoalWe start by understanding your product idea and the most important features you need first.Step 2StructureCreate Product ExperienceWe plan the screens, user flows, and product structure before moving into development.Step 3BuildDesign & Develop togetherOur designers and dev work together to turn the product into a launch-ready experience.

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

