# Atlas Component Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current clone-driven public pages with proper Atlas React components, standardize the heading/spacing system, and remove the Orbix clone runtime.

**Architecture:** Introduce a shared Atlas shell and page-section component system under `src/components/atlas/`, migrate public pages to render from typed React components instead of injected HTML, then delete the clone/runtime layer once all affected routes are off that path.

**Tech Stack:** Next.js App Router, React Server Components, Tailwind CSS v4, TypeScript, Framer Motion

## Global Constraints

- Keep the website visually close to the current live Atlas direction while improving spacing consistency.
- Do not reintroduce Orbix copy or Orbix brand naming.
- Use Atlas-focused naming for files, classes, props, and exported functions.
- All page hero titles must follow the two-font, two-line styling system.
- Preserve the current service focus: custom websites, Shopify design and development, custom web apps, and SEO.
- Avoid raw page HTML injection for the migrated pages.
- Remove the clone runtime once all migrated pages no longer depend on it.

---

### Task 1: Build The Shared Atlas Shell

**Files:**
- Create: `src/components/atlas/layout/atlas-header.tsx`
- Create: `src/components/atlas/layout/atlas-footer.tsx`
- Create: `src/components/atlas/layout/atlas-page-shell.tsx`
- Create: `src/components/atlas/heroes/split-hero-title.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `ServicesMegaMenu`, `CaseStudiesMegaMenu`, `PricingMegaMenu`, `BlogMegaMenu`
- Produces: `AtlasHeader(): JSX.Element`, `AtlasFooter(): JSX.Element`, `AtlasPageShell(props: { children: React.ReactNode; footer?: boolean; className?: string }): JSX.Element`, `SplitHeroTitle(props: { firstLine: string; secondLine: string; align?: "left" | "center"; className?: string }): JSX.Element`

- [ ] **Step 1: Create the shared split title component**

```tsx
type SplitHeroTitleProps = {
  firstLine: string;
  secondLine: string;
  align?: "left" | "center";
  className?: string;
};

export function SplitHeroTitle({
  firstLine,
  secondLine,
  align = "center",
  className = "",
}: SplitHeroTitleProps) {
  return (
    <h1 className={`atlas-split-title atlas-split-title--${align} ${className}`.trim()}>
      <span className="atlas-split-title__line atlas-split-title__line--primary">{firstLine}</span>
      <span className="atlas-split-title__line atlas-split-title__line--accent font-ivyoradisplay">
        {secondLine}
      </span>
    </h1>
  );
}
```

- [ ] **Step 2: Create the shared Atlas header**

```tsx
import Link from "next/link";

export function AtlasHeader() {
  return (
    <header className="atlas-header-shell">
      <div className="atlas-header-pill">
        <Link href="/" className="atlas-brand">Atlas Studio</Link>
        <nav className="atlas-nav">
          <Link href="/services/saas-design">Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </nav>
        <a href="https://wa.me/919321573724" className="atlas-header-cta">Contact Us</a>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create the shared Atlas footer**

```tsx
import Link from "next/link";

export function AtlasFooter() {
  return (
    <footer className="atlas-footer">
      <div className="atlas-footer__top">
        <div className="atlas-footer__brand-block">
          <div className="atlas-footer__brand">Atlas Studio</div>
          <p className="atlas-footer__copy">
            Founder-led website, Shopify, web-app, and SEO execution for ambitious brands.
          </p>
        </div>
        <div className="atlas-footer__links">
          <Link href="/services/saas-design">Custom Websites</Link>
          <Link href="/services/shopify-agency">Shopify</Link>
          <Link href="/services/mvp-development">Web Apps</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
      <div className="atlas-footer__bottom">
        <span>© 2023-2026, Atlas Studio | All Rights Reserved.</span>
        <div className="atlas-footer__legal-links">
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Create the shared page shell**

```tsx
import type { ReactNode } from "react";
import { AtlasFooter } from "@/components/atlas/layout/atlas-footer";
import { AtlasHeader } from "@/components/atlas/layout/atlas-header";

type AtlasPageShellProps = {
  children: ReactNode;
  footer?: boolean;
  className?: string;
};

export function AtlasPageShell({
  children,
  footer = true,
  className = "",
}: AtlasPageShellProps) {
  return (
    <div className={`atlas-page ${className}`.trim()}>
      <AtlasHeader />
      <main className="atlas-page__main">{children}</main>
      {footer ? <AtlasFooter /> : null}
    </div>
  );
}
```

- [ ] **Step 5: Wire the shell styling into `globals.css`**

```css
.atlas-page {
  min-height: 100vh;
  background: #fff;
  color: #090909;
}

.atlas-page__main {
  padding-top: 132px;
}

.atlas-header-shell {
  position: fixed;
  top: 18px;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 16px;
}

.atlas-header-pill {
  width: min(1280px, 100%);
  margin: 0 auto;
  min-height: 118px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(18px);
}

.atlas-split-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.atlas-split-title--center {
  text-align: center;
  align-items: center;
}

.atlas-split-title--left {
  text-align: left;
  align-items: flex-start;
}

.atlas-split-title__line--primary {
  font-size: clamp(44px, 7vw, 96px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 500;
}

.atlas-split-title__line--accent {
  font-size: clamp(44px, 7vw, 96px);
  line-height: 0.95;
}
```

- [ ] **Step 6: Update the root layout to use only global providers and mega menus**

```tsx
<html lang="en" className="h-full antialiased">
  <body className="min-h-full bg-white text-black">
    <ServicesMegaMenu />
    <CaseStudiesMegaMenu />
    <PricingMegaMenu />
    <BlogMegaMenu />
    {children}
  </body>
</html>
```

- [ ] **Step 7: Run type/build verification for the shell**

Run: `npm run build`
Expected: Next.js build completes successfully with no missing component import errors.

- [ ] **Step 8: Commit**

```bash
git add src/components/atlas/layout src/components/atlas/heroes src/app/layout.tsx src/app/globals.css
git commit -m "feat: add shared atlas page shell"
```

### Task 2: Migrate Legal Pages To The Atlas Shell

**Files:**
- Create: `src/components/atlas/heroes/legal-hero.tsx`
- Create: `src/components/atlas/sections/legal-content.tsx`
- Modify: `src/app/legal-page.tsx`
- Modify: `src/app/terms-of-service/page.tsx`
- Modify: `src/app/privacy-policy/page.tsx`
- Modify: `src/app/refund-policy/page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `AtlasPageShell`, `SplitHeroTitle`
- Produces: `LegalHero(props: { title: string; summary: string; effectiveDate: string }): JSX.Element`, `LegalContent(props: { sections: LegalSection[] }): JSX.Element`

- [ ] **Step 1: Extract the legal hero into a reusable component**

```tsx
import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";

type LegalHeroProps = {
  title: string;
  summary: string;
  effectiveDate: string;
};

export function LegalHero({ title, summary, effectiveDate }: LegalHeroProps) {
  const words = title.split(" ");
  return (
    <section className="atlas-legal-hero">
      <div className="atlas-container atlas-legal-hero__grid">
        <div>
          <SplitHeroTitle
            firstLine={words.slice(0, Math.ceil(words.length / 2)).join(" ")}
            secondLine={words.slice(Math.ceil(words.length / 2)).join(" ")}
            align="left"
          />
          <p className="atlas-legal-hero__summary">{summary}</p>
        </div>
        <div className="atlas-legal-hero__meta">
          <div>Effective Date: {effectiveDate}</div>
          <div>Last Updated: {effectiveDate}</div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Extract the legal body renderer**

```tsx
type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="atlas-legal-content">
      <div className="atlas-container">
        {sections.map((section) => (
          <article key={section.title} className="atlas-legal-block">
            <h2 className="atlas-legal-block__title">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="atlas-legal-block__text">{paragraph}</p>
            ))}
            {section.bullets?.map((bullet) => (
              <p key={bullet} className="atlas-legal-block__text">• {bullet}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update `legal-page.tsx` to use the Atlas shell**

```tsx
import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { LegalContent } from "@/components/atlas/sections/legal-content";
import { LegalHero } from "@/components/atlas/heroes/legal-hero";

export default async function LegalPage(props: LegalPageProps) {
  return (
    <AtlasPageShell>
      <LegalHero
        title={props.title}
        summary={props.summary}
        effectiveDate={props.effectiveDate}
      />
      <LegalContent sections={props.sections} />
    </AtlasPageShell>
  );
}
```

- [ ] **Step 4: Add Atlas legal spacing and typography rules**

```css
.atlas-container {
  width: min(1344px, calc(100% - 64px));
  margin: 0 auto;
}

.atlas-legal-hero {
  padding: 72px 0 52px;
}

.atlas-legal-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 56px;
  align-items: center;
}

.atlas-legal-hero__summary {
  margin-top: 28px;
  max-width: 920px;
  font-size: 28px;
  line-height: 1.35;
  color: rgba(9, 9, 9, 0.72);
}

.atlas-legal-content {
  padding: 32px 0 96px;
}

.atlas-legal-block {
  padding: 34px 0;
  border-top: 1px solid rgba(9, 9, 9, 0.08);
}

.atlas-legal-block__title {
  font-size: 30px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 22px;
}
```

- [ ] **Step 5: Run build verification for legal pages**

Run: `npm run build`
Expected: Legal routes build cleanly and no `getOrbixHeaderMarkup`/`getOrbixFooterMarkup` imports remain in `src/app/legal-page.tsx`.

- [ ] **Step 6: Commit**

```bash
git add src/components/atlas/heroes/legal-hero.tsx src/components/atlas/sections/legal-content.tsx src/app/legal-page.tsx src/app/terms-of-service/page.tsx src/app/privacy-policy/page.tsx src/app/refund-policy/page.tsx src/app/globals.css
git commit -m "refactor: migrate legal pages to atlas shell"
```

### Task 3: Migrate The Shopify Service Page

**Files:**
- Create: `src/components/atlas/heroes/marketing-hero.tsx`
- Create: `src/components/atlas/sections/logo-strip.tsx`
- Create: `src/components/atlas/sections/service-highlights.tsx`
- Modify: `src/app/services/shopify-agency/page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `AtlasPageShell`, `SplitHeroTitle`
- Produces: `MarketingHero(props: { eyebrow?: string; firstLine: string; secondLine: string; summary: string; primaryCtaLabel: string; primaryCtaHref: string; secondaryCtaLabel?: string; secondaryCtaHref?: string; centered?: boolean }): JSX.Element`

- [ ] **Step 1: Build a reusable marketing hero component**

```tsx
import Link from "next/link";
import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";

type MarketingHeroProps = {
  eyebrow?: string;
  firstLine: string;
  secondLine: string;
  summary: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  centered?: boolean;
};

export function MarketingHero({
  eyebrow,
  firstLine,
  secondLine,
  summary,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  centered = true,
}: MarketingHeroProps) {
  return (
    <section className={`atlas-marketing-hero ${centered ? "atlas-marketing-hero--centered" : ""}`}>
      <div className="atlas-container atlas-marketing-hero__inner">
        {eyebrow ? <div className="atlas-eyebrow">{eyebrow}</div> : null}
        <SplitHeroTitle firstLine={firstLine} secondLine={secondLine} align={centered ? "center" : "left"} />
        <p className="atlas-marketing-hero__summary">{summary}</p>
        <div className="atlas-marketing-hero__actions">
          <Link href={primaryCtaHref} className="atlas-button atlas-button--dark">{primaryCtaLabel}</Link>
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link href={secondaryCtaHref} className="atlas-button atlas-button--light">{secondaryCtaLabel}</Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rebuild `shopify-agency/page.tsx` with React composition**

```tsx
import { AtlasPageShell } from "@/components/atlas/layout/atlas-page-shell";
import { MarketingHero } from "@/components/atlas/heroes/marketing-hero";

export default function ShopifyAgencyPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="Shopify Design & Development"
        firstLine="Shopify Stores Built"
        secondLine="For Growing Brands"
        summary="Atlas Studio designs, develops, and improves Shopify storefronts with performance, clearer buying journeys, and ecommerce SEO baked in from the start."
        primaryCtaLabel="Schedule A Demo"
        primaryCtaHref="/contact"
        centered
      />
    </AtlasPageShell>
  );
}
```

- [ ] **Step 3: Add Shopify page spacing and hero cleanup styles**

```css
.atlas-marketing-hero {
  padding: 88px 0 72px;
  background: #f4f4f7;
}

.atlas-marketing-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.atlas-marketing-hero__summary {
  max-width: 920px;
  margin: 0;
  font-size: 28px;
  line-height: 1.4;
  color: rgba(9, 9, 9, 0.72);
}
```

- [ ] **Step 4: Run build verification for the Shopify page**

Run: `npm run build`
Expected: `/services/shopify-agency` builds with no imports from `@/lib/orbix-clone`.

- [ ] **Step 5: Commit**

```bash
git add src/components/atlas/heroes/marketing-hero.tsx src/app/services/shopify-agency/page.tsx src/app/globals.css
git commit -m "refactor: migrate shopify service page to atlas components"
```

### Task 4: Migrate The Remaining Marketing Pages

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/blogs/page.tsx`
- Modify: `src/app/services/saas-design/page.tsx`
- Modify: `src/app/services/mvp-development/page.tsx`
- Create: `src/components/atlas/sections/home-sections.tsx`
- Create: `src/components/atlas/sections/blog-sections.tsx`
- Create: `src/components/atlas/sections/about-sections.tsx`
- Create: `src/components/atlas/sections/service-sections.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `AtlasPageShell`, `MarketingHero`, `SplitHeroTitle`
- Produces: page-specific React section compositions with no clone markup

- [ ] **Step 1: Rebuild the homepage from Atlas sections**

```tsx
export default function Home() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="Teams Across Pune, India & Beyond"
        firstLine="Custom Websites, Web Apps & SEO"
        secondLine="For SaaS And B2B Brands"
        summary="Atlas Studio helps founders and B2B teams launch better websites, focused web apps, and SEO-ready digital experiences without traditional agency drag."
        primaryCtaLabel="Book A Free 30-Min Call"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Chat On WhatsApp"
        secondaryCtaHref="https://wa.me/919321573724"
      />
    </AtlasPageShell>
  );
}
```

- [ ] **Step 2: Rebuild the About page from Atlas sections**

```tsx
export default function AboutPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="About Atlas Studio"
        firstLine="A Pune-Based Studio"
        secondLine="For Serious Website Work"
        summary="Atlas Studio is founder-led and AI-assisted, focused on building fast, well-structured websites, ecommerce experiences, and custom web apps for ambitious businesses."
        primaryCtaLabel="Start A Project"
        primaryCtaHref="/contact"
      />
    </AtlasPageShell>
  );
}
```

- [ ] **Step 3: Rebuild the Blogs page from Atlas sections**

```tsx
export default function BlogsPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="Our Blogs"
        firstLine="Insights On Websites,"
        secondLine="Shopify, SEO And Web Apps"
        summary="Practical breakdowns on websites, ecommerce, conversion structure, performance, and SEO-minded execution."
        primaryCtaLabel="Read The Blog"
        primaryCtaHref="/blogs"
      />
    </AtlasPageShell>
  );
}
```

- [ ] **Step 4: Rebuild the remaining service pages with the same hero system**

```tsx
export default function CustomWebsitesPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="Custom Website Design"
        firstLine="Custom Websites Built"
        secondLine="For B2B And SaaS Brands"
        summary="Clear messaging, faster load times, better structure, and serious frontend execution for brands that need a better-performing website."
        primaryCtaLabel="Book A Discovery Call"
        primaryCtaHref="/contact"
      />
    </AtlasPageShell>
  );
}
```

```tsx
export default function CustomWebAppsPage() {
  return (
    <AtlasPageShell>
      <MarketingHero
        eyebrow="Custom Web Apps"
        firstLine="Focused Web Apps"
        secondLine="Built Fast And Clearly"
        summary="Atlas Studio builds internal tools, dashboards, portals, and client-facing web experiences with clear scope and practical execution."
        primaryCtaLabel="Discuss Your Build"
        primaryCtaHref="/contact"
      />
    </AtlasPageShell>
  );
}
```

- [ ] **Step 5: Run full build verification**

Run: `npm run build`
Expected: Home, about, blogs, and remaining service routes build without `OrbixClonePage` or `getOrbixMarkup`.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/app/about/page.tsx src/app/blogs/page.tsx src/app/services/saas-design/page.tsx src/app/services/mvp-development/page.tsx src/components/atlas/sections src/app/globals.css
git commit -m "refactor: migrate marketing pages to atlas components"
```

### Task 5: Remove The Clone Layer And Atlas-Rename The Surface

**Files:**
- Delete: `src/lib/orbix-clone.tsx`
- Delete: `src/app/orbix-page-runtime.tsx`
- Delete: `src/content/orbix-about.html`
- Delete: `src/content/orbix-blogs.html`
- Delete: `src/content/orbix-home.html`
- Delete: `src/content/orbix-mvp-development.html`
- Delete: `src/content/orbix-saas-design.html`
- Delete: `src/content/orbix-shopify-agency.html`
- Delete: unused Orbix helper files in `src/content/` after import cleanup
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: migrated component pages from Tasks 1-4
- Produces: public routes with no clone/runtime dependency

- [ ] **Step 1: Remove clone imports from the app tree**

Run: `rg -n "orbix|OrbixClonePage|getOrbixMarkup|orbix-page-runtime" src/app src/components src/lib src/content`
Expected: only intentional historical or asset references remain before deletion.

- [ ] **Step 2: Delete the unused clone/runtime files**

Run: `rm -f src/lib/orbix-clone.tsx src/app/orbix-page-runtime.tsx src/content/orbix-about.html src/content/orbix-blogs.html src/content/orbix-home.html src/content/orbix-mvp-development.html src/content/orbix-saas-design.html src/content/orbix-shopify-agency.html`
Expected: files are removed from the working tree.

- [ ] **Step 3: Remove leftover Orbix stylesheet/script hooks from the root layout**

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-black">
        <ServicesMegaMenu />
        <CaseStudiesMegaMenu />
        <PricingMegaMenu />
        <BlogMegaMenu />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Remove obsolete Orbix-only CSS rules**

Run: `rg -n "orbix-clone-page|orbix-legal|orbix-about-page" src/app/globals.css`
Expected: delete or replace those selectors with Atlas-owned class names.

- [ ] **Step 5: Run final verification**

Run: `npm run build`
Expected: build passes and `rg -n "orbix|Orbix" src/app src/components src/lib src/content` returns no active public-page implementation hits.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: remove orbix clone architecture"
```
