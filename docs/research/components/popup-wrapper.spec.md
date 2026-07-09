# PopupWrapper Specification

## Overview
- **Target file:** `src/components/PopupWrapper.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.popup-wrapper`
- Heading: Ready to build your next SaaS product?
- Link count: 2
- Image count: 8
- Background image layers: 0

## Computed Styles (exact values from getComputedStyle)

### Container
- position: fixed
- width: 100%
- padding: 40px
- background: rgba(0, 0, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box
- backgroundColor: rgba(0, 0, 0, 0.1)
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
- border: 0px none rgb(255, 255, 255)
- color: rgb(255, 255, 255)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 44px
- fontWeight: 500
- lineHeight: 52.8px
- letterSpacing: -0.44px
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "Prefer Email?" (all); a "Book A Call Directly" (all)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a4657905640415e2b55477e_Star%203.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a465bef4be5fbc863103e9c_Frame%202147238542.png` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a465bef46280e1f689d5aec_Frame%202147238541.png` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a465befe7bf20d48d85c5df_Frame%202147238546.png` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a465e0566875a8bd50ccb07_Frame%202147238504.png` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a465befbb8176173fb71550_Frame%202147238544.png` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a465185907d1a90a2fc562a_Home%20Page%20(1).png` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a4758be3e0c6abd6f34ab7a_plus.svg` alt="" 0x0


## Text Content (verbatim)
Ready to build your next SaaS product?Whether you're starting with an idea or improving an existing product, we'll help you find the best way to move forwardTrusted by 80+ SaaS startups & product teamsBook a Free Discovery CallFull Name*Email*How did you find us*Project budget*Select range...Under $2K$2K – $5K$5K – $10K$10K – $25K$25K+What are you building*What do you need help with?UI/UX DesignSaaS DesignMVP Development Mobile AppsWeb DevelopmentWebflowAI ProductsPrefer Email?Book A Call Directly .ms-pill-radio:checked ~.ms-pill-label { background-color: #000; color: #fff; } .ms-select-button input:checked ~ .ms-cb-label { background-color: #000; color: #fff; } .w-checkbox-input, .w-checkbox-input:focus, .w-checkbox-input.w--redirected-focus, .w-checkbox-input.w--redirected-focus-visible { box-shadow: none !important; outline: none !important; } .ms-select-button, .ms-select-button:focus, .ms-select-button:focus-within { outline: none !important; box-shadow: none !important; } Thank you! Your submission has been received!Oops! Something went wrong while submitting the form.

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

