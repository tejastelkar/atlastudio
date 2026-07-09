"use client";
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";

import { useHoverDropdown } from "@/app/use-hover-dropdown";

const CDN = "https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/";
const ARROW_ICON = `${CDN}6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg`;
const FONT_FAMILY = "var(--font-neue-montreal)";
const EASE = [0.22, 1, 0.36, 1] as const;

type ContentCard = {
  title: string;
  href: string;
  image: string;
  aspect: number;
  description?: string;
  bullets?: string[];
  buttonLabel: string;
  buttonHref: string;
  external?: boolean;
};

type ContentMenuData = {
  heading: string;
  headingMaxWidth: number;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  cards: ContentCard[];
  columns: 2 | 3;
};

function ArrowBadge({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={ARROW_ICON} alt="" className="h-4 w-4 -rotate-45" />
    </span>
  );
}

function ActionButton({ label, href, external }: { label: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-3 self-start rounded-full py-2 pl-6 pr-2 shadow-[-1px_2px_4px_rgba(0,0,0,0.16),-16px_27px_12px_rgba(0,0,0,0.02)]"
      style={{ backgroundColor: "#010101", color: "#ffffff" }}
    >
      <span className="text-[18px] font-medium">{label}</span>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "#ffffff" }}
      >
        <img src={ARROW_ICON} alt="" className="h-4 w-4 -rotate-45" />
      </span>
    </a>
  );
}

function Card({ card, index }: { card: ContentCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.2, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-[22px]"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div className="flex flex-col gap-4 px-4 pt-5 pb-2">
        <div
          className="text-[20px] font-medium leading-[1.2]"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {card.title}
        </div>
        {card.description && (
          <p className="text-[15px] leading-[1.6] text-black/70">{card.description}</p>
        )}
        {card.bullets && (
          <ul className="list-disc pl-5 text-[14px] leading-[1.6] text-black/70">
            {card.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ActionButton label={card.buttonLabel} href={card.buttonHref} external={card.external} />
        </div>
      </div>
      <a href={card.href} className="mt-2 block w-full overflow-hidden" style={{ aspectRatio: card.aspect }}>
        <img src={card.image} alt={card.title} className="h-full w-full object-cover object-bottom" />
      </a>
    </motion.div>
  );
}

function ContentMegaMenuPanel({ data }: { data: ContentMenuData }) {
  return (
    <div className="flex gap-10 overflow-hidden rounded-[28px] bg-white p-3">
      <div
        className="flex flex-none flex-col gap-8 p-5"
        style={{ maxWidth: data.headingMaxWidth }}
      >
        <div className="flex flex-col gap-6">
          <div
            className="text-[40px] font-medium leading-[1.1] tracking-[-1.6px]"
            style={{ fontFamily: FONT_FAMILY }}
          >
            {data.heading}
          </div>
          <p className="text-[16px] leading-[1.6] text-black/70">{data.description}</p>
        </div>
        <a href={data.ctaHref} className="inline-flex items-center gap-3 text-[16px] font-medium">
          {data.ctaLabel}
          <ArrowBadge size={40} />
        </a>
      </div>
      <div
        className="grid flex-1 items-start gap-3 py-1 pr-1"
        style={{ gridTemplateColumns: `repeat(${data.columns}, minmax(0, 1fr))` }}
      >
        {data.cards.map((card, i) => (
          <Card key={card.title} card={card} index={i} />
        ))}
      </div>
    </div>
  );
}

function useContentMegaMenu(triggerAttr: string, data: ContentMenuData) {
  const { open, top, keepOpen, scheduleClose } = useHoverDropdown(triggerAttr);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="menu"
          initial={{ opacity: 0, x: "-50%", y: -12, scale: 0.985 }}
          animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
          exit={{ opacity: 0, x: "-50%", y: -12, scale: 0.985 }}
          transition={{ duration: 0.24, ease: EASE }}
          onMouseEnter={keepOpen}
          onMouseLeave={scheduleClose}
          style={{
            position: "fixed",
            top,
            left: "50%",
            width: "min(1280px, calc(100vw - 32px))",
            zIndex: 1001,
          }}
          className="rounded-[36px] border border-black/[0.08] bg-white/[0.98] p-2 shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
        >
          <ContentMegaMenuPanel data={data} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const CASE_STUDIES_DATA: ContentMenuData = {
  heading: "Selected B2B Website And Ecommerce Work",
  headingMaxWidth: 280,
  description:
    "Project visuals are being refreshed. For now, this gives a snapshot of the kind of Shopify, website, and web-app work Atlas Studio takes on.",
  ctaLabel: "Start A Project Conversation",
  ctaHref: "/about",
  columns: 3,
  cards: [
    {
      title: "B2B Website Revamp",
      href: "/services/saas-design",
      image: `${CDN}69608fb3d5702c9bd03d8042_Group%202087325295.avif`,
      aspect: 780 / 742,
      description:
        "Clear messaging, strong positioning, and a faster website experience designed to support better lead quality.",
      buttonLabel: "Project Details Soon",
      buttonHref: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      external: true,
    },
    {
      title: "Shopify Growth Storefront",
      href: "/services/shopify-agency",
      image: `${CDN}69608fb3d5702c9bd03d8046_Group%202087325296.avif`,
      aspect: 780 / 740,
      description:
        "Performance-minded ecommerce work focused on storefront clarity, cleaner funnels, and SEO-friendly structure.",
      buttonLabel: "Project Details Soon",
      buttonHref: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      external: true,
    },
    {
      title: "Custom Client Portal",
      href: "/services/mvp-development",
      image: `${CDN}69608fb3d5702c9bd03d804a_Group%202087325297.avif`,
      aspect: 780 / 744,
      description:
        "Focused web-app execution for internal workflows, client access, and operations that need to run more smoothly.",
      buttonLabel: "Project Details Soon",
      buttonHref: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      external: true,
    },
  ],
};

const BLOG_DATA: ContentMenuData = {
  heading: "Website, Shopify, And SEO Insights",
  headingMaxWidth: 280,
  description:
    "Atlas Studio shares practical breakdowns on website performance, ecommerce growth, technical SEO, and better client-facing experiences.",
  ctaLabel: "Browse All Articles",
  ctaHref: "/blogs",
  columns: 3,
  cards: [
    {
      title: "Shopify SEO Playbook",
      href: "/blogs",
      image: `${CDN}6a47975e43ef407353b56763_Blog-Image-26%202%20(1).png`,
      aspect: 390 / 285,
      description:
        "Technical structure, collection pages, performance, and on-page improvements that help ecommerce stores rank and convert better.",
      buttonLabel: "Browse Articles",
      buttonHref: "/blogs",
    },
    {
      title: "Website Redesign Checklist",
      href: "/blogs",
      image: `${CDN}6a478ef5471cc3f8d15e89d1_Blog-Image-26%202.png`,
      aspect: 390 / 285,
      description:
        "A practical framework for restructuring underperforming websites without losing speed, clarity, or search visibility.",
      buttonLabel: "Browse Articles",
      buttonHref: "/blogs",
    },
    {
      title: "B2B Website Conversion Fixes",
      href: "/blogs",
      image: `${CDN}6a4795a0c82337eb6df77d51_Blog-Image-57%201%20(2).png`,
      aspect: 390 / 285,
      description:
        "Positioning, offer clarity, CTA structure, and trust-building details that can improve how a serious B2B website performs.",
      buttonLabel: "Browse Articles",
      buttonHref: "/blogs",
    },
  ],
};

const PRICING_DATA: ContentMenuData = {
  heading: "Ready To Scale Your Conversions?",
  headingMaxWidth: 320,
  description:
    "We design and build scalable digital products that support complex workflows and business-critical systems.",
  ctaLabel: "Explore Pricing",
  ctaHref: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
  columns: 2,
  cards: [
    {
      title: "Startup",
      href: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      image: `${CDN}69608fb3d5702c9bd03d8063_Group%202087325309.avif`,
      aspect: 842 / 663,
      bullets: [
        "High-converting website in 2 weeks",
        "Investor-ready pitch deck",
        "Brand identity in 10 days",
        "App, Website & MVP product",
        "100 Hours per month",
      ],
      buttonLabel: "Book a Discovery Call",
      buttonHref: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      external: true,
    },
    {
      title: "Enterprise",
      href: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      image: `${CDN}69608fb3d5702c9bd03d805d_Group%202087325310.avif`,
      aspect: 842 / 668,
      bullets: [
        "World-class pod-based engagement",
        "Multiple pods in parallel",
        "Design system rollout",
        "WCAG 2.2 AA Compliance",
        "200 Hours per month",
      ],
      buttonLabel: "Book a Discovery Call",
      buttonHref: "https://cal.com/atlastudio/free-ux-strategy-book-now-call",
      external: true,
    },
  ],
};

export function CaseStudiesMegaMenu() {
  return useContentMegaMenu("data-case-studies-dropdown", CASE_STUDIES_DATA);
}

export function BlogMegaMenu() {
  return useContentMegaMenu("data-blog-dropdown", BLOG_DATA);
}

export function PricingMegaMenu() {
  return useContentMegaMenu("data-pricing-dropdown", PRICING_DATA);
}
