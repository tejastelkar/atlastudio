"use client";
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";

import { useHoverDropdown } from "@/app/use-hover-dropdown";

const CDN = "https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/";
const ARROW_ICON = `${CDN}6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg`;
const FONT_FAMILY = "var(--font-neue-montreal)";

type ServiceCard = {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  tags: string[];
};

type ServiceLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Custom Websites",
    subtitle: "Fast, polished sites for B2B brands",
    href: "/services/saas-design",
    icon: `${CDN}6a045c9a208170b3cee3217a_4addb6e2-4014-4eac-be6d-be3696494c9e.svg`,
    tags: ["Positioning", "UX Strategy", "Website Design", "SEO-ready Build", "Performance", "Conversion Flow"],
  },
  {
    title: "Shopify Development",
    subtitle: "Stores built for growth and SEO",
    href: "/services/shopify-agency",
    icon: `${CDN}6a0440a36751803df826bba6_fee3a487-310b-4a95-aea9-1ab94453ab28.svg`,
    tags: ["Theme Development", "Storefront UX", "Landing Pages", "Technical SEO", "Retention Flows"],
  },
  {
    title: "Custom Web Apps",
    subtitle: "Portals, dashboards, and internal tools",
    href: "/services/mvp-development",
    icon: `${CDN}6a045a807a53f0d34b72b9d7_afbe0c74-7925-4fbd-b245-988aa029d58c.svg`,
    tags: ["Client Portals", "Dashboards", "Workflows", "Automation", "Scalable Frontend"],
  },
  {
    title: "SEO & Optimisation",
    subtitle: "Technical improvements that help sites scale",
    href: "/services/saas-design",
    icon: `${CDN}6a04417269d169749ec138ec_26438157-5bc4-470e-b7a7-ec3e5fd30acd.svg`,
    tags: ["Technical SEO", "Core Web Vitals", "On-page SEO", "Conversion Fixes", "Ongoing Support"],
  },
];

const SERVICE_LINKS: ServiceLink[] = [
  {
    title: "Website Strategy",
    subtitle: "Clear structure before we build",
    href: "/about",
    icon: `${CDN}6a461504bb21bc46d381451c_5b024f6b-deba-4df2-83cd-b37d8fd22d53.svg`,
  },
  {
    title: "Growth Resources",
    subtitle: "Practical insights on SEO and websites",
    href: "/blogs",
    icon: `${CDN}6a46159d9b3443292ca16766_0460f9ee-0ef9-4c2c-880c-1b0136282ea5.svg`,
  },
  {
    title: "Shopify Support",
    subtitle: "Refinements after launch",
    href: "/services/shopify-agency",
    icon: `${CDN}6a4616ff0e8cdd3fccaa6f65_39efb708-26b9-430e-b5aa-07a5ca9dbe47.svg`,
  },
  {
    title: "Build Support",
    subtitle: "Reliable development for serious projects",
    href: "/services/mvp-development",
    icon: `${CDN}6a045c9a208170b3cee3217a_4addb6e2-4014-4eac-be6d-be3696494c9e.svg`,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function ArrowBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white ${className}`}
    >
      <img src={ARROW_ICON} alt="" className="h-4 w-4 -rotate-45" />
    </span>
  );
}

function IconBadge({ src, size = 36 }: { src: string; size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-white"
      style={{ width: size, height: size }}
    >
      <img src={src} alt="" className="h-4 w-4" />
    </span>
  );
}

export default function ServicesMegaMenu() {
  const { open, top, keepOpen, scheduleClose } = useHoverDropdown("data-services-dropdown");

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
            maxHeight: `calc(100vh - ${top}px - 16px)`,
            zIndex: 1001,
          }}
          className="overflow-hidden rounded-[36px] border border-black/[0.08] bg-white/[0.98] p-2 shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
        >
          <div
            className="grid grid-cols-[minmax(0,1fr)_320px] items-start gap-3 overflow-auto rounded-[28px] bg-white p-3"
            style={{ maxHeight: `calc(100vh - ${top}px - 28px)` }}
          >
            <div className="grid grid-cols-2 items-start gap-3">
              {SERVICE_CARDS.map((card, i) => (
                <motion.a
                  key={`${card.href}-${card.title}`}
                  href={card.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2, ease: EASE }}
                  className="group relative flex min-h-[188px] flex-col justify-between gap-5 rounded-[22px] border border-black/[0.05] p-4 pr-11 transition-colors"
                  style={{ backgroundColor: "#f3f3f3" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ecebe8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f3f3f3";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <IconBadge src={card.icon} size={38} />
                    <div className="flex max-w-[250px] flex-col gap-1">
                      <div
                        className="text-[20px] font-medium leading-[1.08] tracking-[-0.4px]"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {card.title}
                      </div>
                      <div className="text-[14px] leading-[1.35] tracking-[-0.14px] text-black/64">
                        {card.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag, tagIndex) => (
                      <span
                        key={`${tag}-${tagIndex}`}
                        className="rounded-full border border-black/[0.04] bg-white px-3 py-1.5 text-[12px] leading-none tracking-[-0.1px] text-black/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowBadge className="absolute right-3 top-3" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: SERVICE_CARDS.length * 0.03, duration: 0.2, ease: EASE }}
              className="self-stretch rounded-[24px] border border-black/[0.05] px-5 py-2"
              style={{ backgroundColor: "#f3f3f3" }}
            >
              {SERVICE_LINKS.map((link, i) => (
                <div
                  key={`${link.href}-${link.title}`}
                  className={i === SERVICE_LINKS.length - 1 ? "" : "border-b border-black/[0.08]"}
                >
                  <a
                    href={link.href}
                    className="group relative flex items-start gap-3 py-5 pr-10 transition-colors hover:text-black/80"
                  >
                    <IconBadge src={link.icon} size={38} />
                    <div className="flex flex-col gap-1">
                      <div
                        className="text-[19px] font-medium leading-[1.1] tracking-[-0.35px]"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {link.title}
                      </div>
                      <div className="max-w-[190px] text-[14px] leading-[1.35] tracking-[-0.14px] text-black/64">
                        {link.subtitle}
                      </div>
                    </div>
                    <ArrowBadge className="absolute right-0 top-1/2 -translate-y-1/2" />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
