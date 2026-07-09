# HomeHeroSection Specification

## Overview
- **Target file:** `src/components/HomeHeroSection.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.home-hero-section`
- Heading: Product Design & Dev Agency for B2B SaaS Companies
- Link count: 3
- Image count: 8
- Background image layers: 0

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex
- position: static
- width: 1440px
- padding: 180px 0px 80px
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
- width: 1024px
- background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- border: 0px none rgb(0, 0, 0)
- color: rgb(0, 0, 0)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 64px
- fontWeight: 500
- lineHeight: 70.4px
- letterSpacing: -1.25px
- textTransform: capitalize
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "43+ Reviews" (all); a "Book a Free 30-Min CallBook a Call" (all); a "Chat on WhatsAppChat Now" (all)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f305ffadcfde93cd5a3f_3821d647-6136-40ed-a1a7-3db0a9de28b7.svg` alt="" 430x430
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f2a36e51440522dad1ef_6e6284c1-902a-48e2-91a7-0c6f564d9108.svg` alt="" 430x430
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f3a21f1ea0a16e91f375_305cb7e1-5210-430a-9f2e-4687ba1a990a.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6985b1531190ecd6f7bcf791_59a0e1fda90934c3aa1dc32065ae59dc_image%206346494.avif` alt="Clutch five-star rating with 5.0 score and text reviewed on Clutch." 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/689ae6aa8be7a3ad64dbaa7b_clutch-icon.svg` alt="Icon" 90x40
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/689ae6aad18898956f9bcfdd_clutch-reveiw.svg` alt="Icon" 100x21
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608fc97d4efea9927bfde4_button-image.avif` alt="" 56x56
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6985ae462866c8eeb0b1b9c4_Frame%20(17).svg` alt="" 28x28


## Text Content (verbatim)
Teams Across USA, UAE & KSATop Featured on Behance120+ SaaS Projects DeliveredProduct Design & Dev Agency for B2B SaaS CompaniesProduct Design & Development Agency for SaaS CompaniesWe help SaaS companies turn ideas into modern digital products through fast product design and development processes completed in as little as 2–4 weeks.43+ ReviewsBook a Free 30-Min CallBook a CallChat on WhatsAppChat Now

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

