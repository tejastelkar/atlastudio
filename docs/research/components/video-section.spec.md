# VideoSection Specification

## Overview
- **Target file:** `src/components/VideoSection.tsx`
- **Screenshot:** `docs/design-references/orbix.studio/home-desktop.png`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: `.video-section`
- Heading: N/A
- Link count: 1
- Image count: 2
- Background image layers: 0

## Computed Styles (exact values from getComputedStyle)

### Container
- display: block
- position: static
- width: 1440px
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
- N/A

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: a "{ "items": [ { "url": "https://player.vimeo.com/video/1172844179?autoplay=1&muted=1&loop=1&background=1&controls=0&title" (all)

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69f87fbe989895dce4ec3368_Showreel%20Thumb.avif` alt="Showreel Image " 1920x1080
- Image: `https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/69e216a24a00271c017086f4_Group%202147225597.svg` alt="" 202x202


## Text Content (verbatim)
{ "items": [ { "url": "https://player.vimeo.com/video/1172844179?autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0", "originalUrl": "https://player.vimeo.com/video/1172844179?autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0", "width": 940, "height": 529, "thumbnailUrl": "https://i.vimeocdn.com/video/2132813853-aba79d7dd89951d4dc5f3badbcffd6ad3770114a966cb965df1b1eb1e3e05ed4-d_1280?region=us", "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F1172844179%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F1172844179&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F2132813853-aba79d7dd89951d4dc5f3badbcffd6ad3770114a966cb965df1b1eb1e3e05ed4-d_1280%3Fregion%3Dus&autoplay=1&type=text%2Fhtml&schema=vimeo\" width=\"940\" height=\"529\" scrolling=\"no\" title=\"Vimeo embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>", "type": "video" } ], "group": "" }

## Responsive Behavior
- **Desktop (1440px):** captured in `home-desktop.png`
- **Tablet (768px):** captured in `home-tablet.png`
- **Mobile (390px):** captured in `home-mobile.png`
- **Breakpoint:** follow downloaded Webflow CSS media queries

