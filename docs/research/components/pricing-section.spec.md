# PricingSection Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.pricing-section`
- Heading: Monthly Product Support For SaaS Teams
- Link count: 2
- Image count: 5
- Background image layers: 0

## Computed Styles (exact values from getComputedStyle)

### Container
- position: static
- padding: 80px 0px 120px
- background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box
- backgroundColor: rgb(243, 244, 246)
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
- background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- border: 0px none rgb(0, 0, 0)
- color: rgb(0, 0, 0)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 72px
- fontWeight: 500
- lineHeight: 79.2px
- letterSpacing: -0.72px
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "Start Your Project" (all); a "Discuss Your Custom Plan" (all)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f41aab76f4b3ded8977a_6970f585-caea-4ec9-8e2e-d651028a2659.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg` alt="" 240x240
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c5fc3c5404032e748d68_pricing-image-1.avif` alt="Webflow" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg` alt="" 240x240
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6960c5fc3c5404032e748d6c_pricing-image-2.avif` alt="Design Agency" 0x0


## Text Content (verbatim)
Pause or Cancel AnytimeMonthly Product Support For SaaS TeamsGet ongoing design and development support for your SaaS product with flexible monthly plans built for fast-moving teams.Startup - $2,999Perfect for early-stage teams moving from idea to launch.MVP design and build supportHigh-converting landing pagesInvestor-ready pitch decksUnlimited design requestsFast turnaround in 48 hours or lessStart Your Projectenterprise - $5,499Built for SaaS and AI teams scaling products fast.Product design and development supportDesign systems and UI librariesParallel workflows across multiple tasksSenior UX strategy and product thinkingDirect Slack access to your teamDiscuss Your Custom Plan

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

