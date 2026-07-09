import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const ROOT = process.cwd();
const TARGET_URL = "https://www.orbix.studio/";
const OUTPUT_DIR = path.join(ROOT, "docs", "research", "orbix.studio");
const COMPONENTS_DIR = path.join(ROOT, "docs", "research", "components");
const DESIGN_DIR = path.join(ROOT, "docs", "design-references", "orbix.studio");
const BROWSER_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const viewports = [
  { label: "desktop", width: 1440, height: 1800 },
  { label: "tablet", width: 768, height: 1600 },
  { label: "mobile", width: 390, height: 1400 },
];

const sectionClassNames = [
  "home-hero-section",
  "video-section",
  "logo-section",
  "trusted-section",
  "our-projects-section",
  "our-service-track",
  "workflow-section",
  "pricing-section",
  "testimoanials-section",
  "awards-section",
  "membership-section",
  "faq-area",
  "platforms-sections",
  "footer-primary",
  "popup-wrapper",
];

const styleProps = [
  "display",
  "position",
  "width",
  "maxWidth",
  "minHeight",
  "padding",
  "margin",
  "gap",
  "background",
  "backgroundColor",
  "border",
  "borderRadius",
  "boxShadow",
  "color",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "textTransform",
  "transition",
  "opacity",
  "transform",
];

await fs.mkdir(OUTPUT_DIR, { recursive: true });
await fs.mkdir(COMPONENTS_DIR, { recursive: true });
await fs.mkdir(DESIGN_DIR, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: BROWSER_PATH,
});

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mdList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
  });
  await page.goto(TARGET_URL, { waitUntil: "networkidle" });
  await page.screenshot({
    path: path.join(DESIGN_DIR, `home-${viewport.label}.png`),
    fullPage: true,
  });
  await page.close();
}

const page = await browser.newPage({
  viewport: { width: 1440, height: 1800 },
});
await page.goto(TARGET_URL, { waitUntil: "networkidle" });

const report = await page.evaluate(
  ({ sectionClassNames, styleProps }) => {
    const clean = (text) => (text || "").replace(/\s+/g, " ").trim();
    const unique = (items) => [...new Set(items.filter(Boolean))];

    const getStyles = (el) => {
      const cs = getComputedStyle(el);
      const styles = {};
      for (const prop of styleProps) {
        const value = cs[prop];
        if (
          value &&
          value !== "none" &&
          value !== "normal" &&
          value !== "auto" &&
          value !== "rgba(0, 0, 0, 0)" &&
          value !== "0px"
        ) {
          styles[prop] = value;
        }
      }
      return styles;
    };

    const fonts = unique(
      [...document.querySelectorAll("body, h1, h2, h3, p, a, button")].map(
        (el) => getComputedStyle(el).fontFamily,
      ),
    );

    const colors = unique(
      [...document.querySelectorAll("body, section, div, h1, h2, h3, p, a, button")]
        .slice(0, 400)
        .flatMap((el) => {
          const cs = getComputedStyle(el);
          return [cs.color, cs.backgroundColor, cs.borderColor];
        })
        .filter((value) => value && value !== "rgba(0, 0, 0, 0)"),
    );

    const scripts = [...document.scripts].map((script) => script.src).filter(Boolean);
    const stylesheets = [...document.querySelectorAll('link[rel="stylesheet"]')]
      .map((link) => link.href)
      .filter(Boolean);
    const favicons = [...document.querySelectorAll('link[rel*="icon"]')].map((link) => ({
      href: link.href,
      rel: link.rel,
    }));

    const sections = sectionClassNames
      .map((className) => {
        const selector = `.${className.split(" ").join(".")}`;
        const section = document.querySelector(selector);
        if (!section) return null;

        const heading = section.querySelector("h1, h2, h3, h4, h5, h6");
        const links = [...section.querySelectorAll("a")]
          .map((link) => ({
            text: clean(link.textContent),
            href: link.href,
          }))
          .filter((link) => link.text || link.href);
        const images = [...section.querySelectorAll("img")]
          .map((img) => ({
            src: img.currentSrc || img.src,
            alt: img.alt,
            width: img.naturalWidth,
            height: img.naturalHeight,
          }))
          .filter((img) => img.src);

        const backgroundImages = [...section.querySelectorAll("*")]
          .map((el) => ({
            element: `${el.tagName.toLowerCase()}.${clean(el.className).split(" ")[0] || ""}`,
            backgroundImage: getComputedStyle(el).backgroundImage,
          }))
          .filter((item) => item.backgroundImage && item.backgroundImage !== "none");

        const textContent = clean(section.textContent).slice(0, 3200);
        const rootStyles = getStyles(section);
        const headingStyles = heading ? getStyles(heading) : {};

        const hoverables = [...section.querySelectorAll("a, button")]
          .slice(0, 12)
          .map((el) => ({
            tag: el.tagName.toLowerCase(),
            text: clean(el.textContent).slice(0, 120),
            transition: getComputedStyle(el).transition,
          }));

        return {
          className,
          selector,
          heading: clean(heading?.textContent),
          textContent,
          rootStyles,
          headingStyles,
          links,
          images,
          backgroundImages,
          hoverables,
        };
      })
      .filter(Boolean);

    return {
      title: document.title,
      url: location.href,
      fonts,
      colors,
      scripts,
      stylesheets,
      favicons,
      htmlClassName: document.documentElement.className,
      bodyClassName: document.body.className,
      sections,
    };
  },
  { sectionClassNames, styleProps },
);

await fs.writeFile(
  path.join(OUTPUT_DIR, "site-report.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

const topologyLines = [
  "# PAGE_TOPOLOGY",
  "",
  `- Target URL: ${TARGET_URL}`,
  `- Page title: ${report.title}`,
  `- HTML classes: ${report.htmlClassName || "N/A"}`,
  `- Body classes: ${report.bodyClassName || "N/A"}`,
  "",
  "## Visual Order",
  ...report.sections.map(
    (section, index) =>
      `${index + 1}. \`${section.className}\` - ${
        section.heading || section.textContent.slice(0, 80)
      }`,
  ),
  "",
  "## Notes",
  "- Fixed/sticky overlay: `.navbar-primary.w-nav` sits above the page content.",
  "- Motion stack: Webflow interactions plus Lenis smooth scrolling and tab rotation script.",
  "- Primary interaction models are hover-driven nav/dropdowns, autoplay video/media, dropdown FAQ items, and pricing/service CTAs.",
  "",
];

await fs.writeFile(
  path.join(OUTPUT_DIR, "PAGE_TOPOLOGY.md"),
  `${topologyLines.join("\n")}\n`,
);

const behaviorLines = [
  "# BEHAVIORS",
  "",
  `- Fonts detected: ${report.fonts.join(", ")}`,
  `- Stylesheets: ${report.stylesheets.join(", ")}`,
  `- Scripts: ${report.scripts.join(", ")}`,
  `- Favicon assets: ${report.favicons.map((item) => item.href).join(", ")}`,
  "",
  "## Global Behaviors",
  "- Lenis smooth scrolling is loaded from `unpkg.com/lenis@1.3.4/dist/lenis.min.js`.",
  "- Webflow runtime powers dropdowns, nav interactions, and animation timing.",
  "- `@flowbase-co/boosters-tab-rotation-webflow` indicates automated tab/pill cycling behavior.",
  "- Hero and media sections include autoplay/loop visual content.",
  "",
  "## Responsive References",
  "- Desktop screenshot: `docs/design-references/orbix.studio/home-desktop.png`",
  "- Tablet screenshot: `docs/design-references/orbix.studio/home-tablet.png`",
  "- Mobile screenshot: `docs/design-references/orbix.studio/home-mobile.png`",
  "",
];

await fs.writeFile(
  path.join(OUTPUT_DIR, "BEHAVIORS.md"),
  `${behaviorLines.join("\n")}\n`,
);

for (const section of report.sections) {
  const componentName = section.className
    .split(" ")
    .map((part) =>
      part
        .split("-")
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(""),
    )
    .join("");
  const specPath = path.join(
    COMPONENTS_DIR,
    `${slugify(section.className)}.spec.md`,
  );

  const spec = `# ${componentName} Specification

## Overview
- **Target file:** \`src/components/${componentName}.tsx\`
- **Screenshot:** \`docs/design-references/orbix.studio/home-desktop.png\`
- **Interaction model:** hover-driven / Webflow runtime

## DOM Structure
- Root selector: \`${section.selector}\`
- Heading: ${section.heading || "N/A"}
- Link count: ${section.links.length}
- Image count: ${section.images.length}
- Background image layers: ${section.backgroundImages.length}

## Computed Styles (exact values from getComputedStyle)

### Container
${mdList(
  Object.entries(section.rootStyles).map(([key, value]) => `${key}: ${value}`),
)}

### Primary Heading
${
  Object.keys(section.headingStyles).length
    ? mdList(
        Object.entries(section.headingStyles).map(
          ([key, value]) => `${key}: ${value}`,
        ),
      )
    : "- N/A"
}

## States & Behaviors
- Webflow and Lenis scripts handle page motion and smooth scroll.
- Hover targets: ${
    section.hoverables.length
      ? section.hoverables
          .map((item) => `${item.tag} "${item.text}" (${item.transition || "no transition"})`)
          .join("; ")
      : "N/A"
  }

## Per-State Content (if applicable)
- N/A in extracted static report. Dynamic behavior comes from Webflow runtime and downloaded scripts.

## Assets
${
  section.images.length
    ? mdList(
        section.images.map(
          (img) => `Image: \`${img.src}\` alt="${img.alt || ""}" ${img.width}x${img.height}`,
        ),
      )
    : "- N/A"
}
${
  section.backgroundImages.length
    ? mdList(
        section.backgroundImages.map(
          (item) => `Background: ${item.element} -> ${item.backgroundImage}`,
        ),
      )
    : ""
}

## Text Content (verbatim)
${section.textContent || "N/A"}

## Responsive Behavior
- **Desktop (1440px):** captured in \`home-desktop.png\`
- **Tablet (768px):** captured in \`home-tablet.png\`
- **Mobile (390px):** captured in \`home-mobile.png\`
- **Breakpoint:** follow downloaded Webflow CSS media queries
`;

  await fs.writeFile(specPath, `${spec}\n`);
}

await browser.close();
console.log(`Saved Orbix extraction artifacts to ${OUTPUT_DIR}`);
