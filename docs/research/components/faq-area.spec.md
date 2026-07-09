# FaqArea Specification

## Overview
- **Target file:** `src/components/FaqArea.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.faq-area`
- Heading: Got Questions?
- Link count: 4
- Image count: 6
- Background image layers: 2

## Computed Styles (exact values from getComputedStyle)

### Container
- display: block
- position: static
- width: 1440px
- padding: 120px 0px
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
- width: 456.484px
- background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box
- border: 0px none rgb(0, 0, 0)
- color: rgb(0, 0, 0)
- fontFamily: "Neue Montreal", Arial, sans-serif
- fontSize: 72px
- fontWeight: 500
- lineHeight: 79.2px
- letterSpacing: -2.17px
- transition: all
- opacity: 1

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "Book a Free Call" (all); a "hello@orbix.studio" (all); a "Book a Free Call" (all); a "hello@orbix.studio" (all)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996b43a6e125a1553a3ba75_Ellipse%201455.avif` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg` alt="" 240x240
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996b298cab22eb04295ea37_mail-02.svg` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996b43a6e125a1553a3ba75_Ellipse%201455.avif` alt="" 0x0
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg` alt="" 240x240
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996b298cab22eb04295ea37_mail-02.svg` alt="" 0x0
- Background: div.faq-cta-card -> linear-gradient(rgba(255, 255, 255, 0.5) 50%, rgba(218, 250, 251, 0.7)), url("https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996adbb6c5e54d0c23d9112_faq-cta-bg.svg")
- Background: div.faq-cta-card -> linear-gradient(rgba(255, 255, 255, 0.5) 50%, rgba(218, 250, 251, 0.7)), url("https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996adbb6c5e54d0c23d9112_faq-cta-bg.svg")

## Text Content (verbatim)
Got Questions?We’ve Got AnswersIf you’re unsure where to start or want to see how we can help, reach out, and we’ll walk you through it.Book an Intro CallLet’s talk through your goals, your timeline, and how Orbix Studio can support your team.Book a Free CallPrefer Email Instead?hello@orbix.studioWhat kind of companies do you work with?We mainly work with B2B, SaaS, and growing teams that need strong design, fast execution, and a creative partner that understands digital products.What is your starting price?Our projects typically start at $2,999, depending on the scope, timeline, and level of support you need.How long does a project usually take?Most projects take between 2 to 4 weeks, depending on the size of the work. Smaller engagements can move faster, while larger product or brand projects may take longer.Do you only do design, or development too?We do both. Alongside UI/UX and brand design, we also support product builds and development so ideas can move from concept to launch without the usual handoff delays.How do you communicate during projects?We keep communication simple and clear through shared channels, regular updates, and quick check-ins so you always know what’s happening and what’s next.What services does Orbix Studio offer?Orbix Studio offers product design, UI/UX, branding, creative marketing, AI design support, and development. We help teams with websites, web and mobile apps, design systems, prototypes, brand identity, pitch materials, and full product experiences from strategy to launch.Do you work with teams in different time zones?Yes. We work with clients across different time zones and build our process to keep communication smooth, responsive, and easy to manage.Why Hire A UI/UX Design Agency Instead Of A Freelancer?A UI/UX design agency like Orbix Studio provides a dedicated team covering strategy, design, and development ensuring faster delivery, consistent quality, and scalable support. Unlike freelancers, an agency offers structured processes, cross-functional collaboration, and accountability, making it the smarter choice for businesses building products that convert.Can you redesign an existing product?Yes. We can improve an existing product’s UX, refresh the visual design, and help bring the experience up to a higher standard without starting from scratch.What makes Orbix Studio different?We combine high-quality design, fast execution, and flexible support in one team, so you can move from idea to launch without the usual delays and handoff issues.Book an Intro CallLet’s talk through your goals, your timeline, and how Orbix Studio can support your team.Book a Free CallPrefer Email Instead?hello@orbix.studio

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

