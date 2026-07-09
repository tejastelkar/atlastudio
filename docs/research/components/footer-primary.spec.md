# FooterPrimary Specification

## Overview
- **Target file:** `src/components/FooterPrimary.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.footer-primary`
- Heading: Orbix Studio
- Link count: 37
- Image count: 19
- Background image layers: 6

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex
- position: static
- width: 1440px
- gap: 70px
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
- width: 318px
- background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- border: 0px none rgb(0, 0, 0)
- color: rgb(0, 0, 0)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 26px
- fontWeight: 500
- lineHeight: 31.2px
- letterSpacing: -0.26px
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "" (all); a "Company Deck" (all); a "hello@orbix.studio" (0.3s); a "+1 (646) 598-7983" (0.3s); a "UI/UX Design" (0.3s); a "Web Development" (0.3s); a "AI Creative Production" (0.3s); a "Webflow" (0.3s); a "MVP Development" (0.3s); a "SaaS Design" (0.3s); a "Custom Illustration" (0.3s); a "Mobile App" (0.3s)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69ca209eb0215dfdd42df1e6_Group%202147225542.avif` alt="Orbix Studio" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg` alt="" 240x240
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f7dd49b52eddc98dba32_eca28097-61f6-41d2-b3e5-08c65c91274c.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f7dd49b52eddc98dba32_eca28097-61f6-41d2-b3e5-08c65c91274c.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14c_fi_14009732.svg` alt="flug" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a152_Group.avif` alt="Shape" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a149_fi_14009803.svg` alt="flug" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14f_fi_14009803.avif` alt="Shape" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14a_fi_14009735.svg` alt="flug" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14d_fi_14009735.avif` alt="Shape" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14b_fi_16569446.svg` alt="flug" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a154_fi_16569446.avif` alt="Shape" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14c_fi_14009732.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a149_fi_14009803.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14a_fi_14009735.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14b_fi_16569446.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14f_fi_14009803.avif` alt="Shape" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a14d_fi_14009735.avif` alt="Shape" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69608f9dfb7367650626a154_fi_16569446.avif` alt="Shape" 0x0
- Background: div.footer-divider -> linear-gradient(90deg, rgba(102, 102, 102, 0.04), rgba(0, 0, 0, 0.18) 50%, rgba(102, 102, 102, 0.04))
- Background: div.location-divider -> linear-gradient(rgba(102, 102, 102, 0.04), rgba(0, 0, 0, 0.15) 50%, rgba(102, 102, 102, 0.04))
- Background: div.location-divider -> linear-gradient(rgba(102, 102, 102, 0.04), rgba(0, 0, 0, 0.15) 50%, rgba(102, 102, 102, 0.04))
- Background: div.location-divider -> linear-gradient(rgba(102, 102, 102, 0.04), rgba(0, 0, 0, 0.15) 50%, rgba(102, 102, 102, 0.04))
- Background: div.location-divider -> linear-gradient(rgba(102, 102, 102, 0.04), rgba(0, 0, 0, 0.15) 50%, rgba(102, 102, 102, 0.04))
- Background: div.location-divider -> linear-gradient(rgba(102, 102, 102, 0.04), rgba(0, 0, 0, 0.15) 50%, rgba(102, 102, 102, 0.04))

## Text Content (verbatim)
Orbix StudioWe design and build scalable digital products that support complex workflows and business-critical systems.Company DeckDrop Us a Linehello@orbix.studioCall Us+1 (646) 598-7983ServicesUI/UX DesignWeb DevelopmentAI Creative ProductionWebflowMVP DevelopmentFramerSaaS DesignCustom IllustrationMobile AppMotion DesignBrandingCreative MarketingQuick LinksCase StudiesAboutPricingCareersBlogContactFollow UsFacebookLinkedInInstagram(X) TwitterPinterestDribbbleBehanceEmail ushello@orbix.studioCall Us+1 (646) 598-7983Limited Liability Company Based InNEW YORK88-12 Francis Lewis Blvd, Queens Village, NY 11427, United StatesKSAالأمير سعود بن محمد بن مقرن, Al Falah, Riyadh 13314, Saudi ArabiaDUBAI35 35A St - Al Qusais - Al Twar Fourth - Dubai - United Arab EmiratesDHAKAOPL Ayub Tower, Dhaka 1216NEW YORK88-12 Francis Lewis Blvd, Queens Village, NY 11427, United StatesKSAالأمير سعود بن محمد بن مقرن, Al Falah, Riyadh 13314, Saudi ArabiaDUBAI35 35A St - Al Qusais - Al Twar Fourth - Dubai,United Arab EmiratesDHAKAOPL Ayub Tower, Dhaka 1216,Bangladesh© 2023-2026, Orbix Studio | All Rights Reserved.Terms of ServicesPrivacy PolicyRefund Policy

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

