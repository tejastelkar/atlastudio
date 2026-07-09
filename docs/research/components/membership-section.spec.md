# MembershipSection Specification

## Overview
- **Target file:** `src/components/MembershipSection.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.membership-section`
- Heading: Monthly Product Support as You Grow
- Link count: 0
- Image count: 6
- Background image layers: 0

## Computed Styles (exact values from getComputedStyle)

### Container
- display: block
- position: static
- width: 1440px
- padding: 120px 0px
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
- width: 680px
- maxWidth: 820px
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
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e736894d7813af3c2f780e_1c845db0-b6c1-4c65-b880-35ab97c7d353.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e61f54dc1aea3ca6fab885_system-regular-33-speed.svg` alt="" 500x500
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e737621a3e451517427b51_63b1e15b-0914-498e-84a5-ec7ca99cd15c.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e737cac5d00fc52bf6fe23_9a9e454a-e17c-4d28-b328-de0ae138ad84.svg` alt="" 500x500
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e738231a1e94efb6a54ce4_bb9026a0-4b4a-40d3-9016-78ca006ea580.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e738aa1eea406d0967c09c_a80cec11-cf74-4cb4-be9b-4355f05c5996.svg` alt="" 0x0


## Text Content (verbatim)
membership benefitsMonthly Product Support as You GrowWe plug into your team with ongoing design support that helps you move faster, handle new priorities, and improve the product as you grow.Fixed Monthly RatePay one predictable flat fee every month.Fast DeliveryExperience rapid turnaroundtimes on every request.Premium QualityGet senior-level design output on every task.Scalable & FlexibleAdapt your design capacity toyour current roadmapUnique & CustomEvery interface is built from the ground up specifically for your product. Strategic Design BoardManage your entire design queue in one place.

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

