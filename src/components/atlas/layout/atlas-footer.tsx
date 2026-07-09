import Link from "next/link";

import {
  ATLAS_EMAIL,
  ATLAS_PHONE_NUMBER,
  ATLAS_PRIMARY_SERVICES,
  ATLAS_QUICK_LINKS,
  ATLAS_SOCIAL_LINKS,
  ATLAS_WHATSAPP_LINK,
} from "@/lib/atlas-site-data";

export function AtlasFooter() {
  return (
    <footer className="bg-white pt-10">
      <div className="w-[min(1400px,calc(100%-48px))] mx-auto grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-14 py-11 lg:pb-12 border-t border-black/6">
        <div className="flex flex-col gap-[22px]">
          <div className="inline-flex items-center gap-[14px]">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#090909] text-white text-xl font-medium">A</span>
            <span className="text-[26px] tracking-[-0.04em] leading-none font-medium">
              Atlas <span className="font-ivyoradisplay italic font-normal">Studio</span>
            </span>
          </div>
          <p className="m-0 text-xl leading-[1.5] text-atlas-muted-text">
            Founder-led website, Shopify, web-app, and SEO execution for serious SaaS,
            ecommerce, and B2B brands.
          </p>
          <div className="flex flex-col gap-2.5 text-atlas-muted-text">
            <a href={`mailto:${ATLAS_EMAIL}`}>{ATLAS_EMAIL}</a>
            <a href={ATLAS_WHATSAPP_LINK} target="_blank" rel="noreferrer">
              {ATLAS_PHONE_NUMBER}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="flex flex-col gap-4">
            <div className="text-[28px] leading-none font-ivyoradisplay italic font-normal">Services</div>
            {ATLAS_PRIMARY_SERVICES.map((service) => (
              <Link key={`${service.href}-${service.title}`} href={service.href} className="text-atlas-muted-text text-lg leading-[1.3]">
                {service.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[28px] leading-none font-ivyoradisplay italic font-normal">Quick Links</div>
            {ATLAS_QUICK_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-atlas-muted-text text-lg leading-[1.3]">
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[28px] leading-none font-ivyoradisplay italic font-normal">Follow Us</div>
            {ATLAS_SOCIAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-atlas-muted-text text-lg leading-[1.3]">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] bg-[#090909]">
        <div className="w-[min(1400px,calc(100%-48px))] mx-auto flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-6 min-h-[104px] py-6 md:py-0 text-white">
          <span>© 2023-2026, Atlas Studio | All Rights Reserved.</span>
          <div className="flex flex-wrap gap-6">
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
