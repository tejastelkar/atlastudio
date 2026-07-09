import Link from "next/link";
import { ATLAS_WHATSAPP_LINK } from "@/lib/atlas-site-data";

function NavChevron() {
  return (
    <span className="text-atlas-muted-text text-[16px]" aria-hidden="true">
      ↘
    </span>
  );
}

export function AtlasHeader() {
  return (
    <header className="navbar-primary fixed top-[18px] left-0 w-full z-[1000] px-4">
      <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center gap-6 w-[min(1280px,calc(100%-32px))] min-h-[80px] mx-auto py-3 px-6 pl-7 border border-atlas-border rounded-full bg-white/94 backdrop-blur-[18px] shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
        <Link href="/" className="inline-flex items-center gap-[14px]" aria-label="Atlas Studio home">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#090909] text-white text-xl font-medium">A</span>
          <span className="text-[26px] tracking-[-0.04em] leading-none font-medium">
            Atlas <span className="font-ivyoradisplay">Studio</span>
          </span>
        </Link>

        <nav className="flex items-center justify-center gap-[42px]" aria-label="Primary">
          <div className="nav-dropdown" data-services-dropdown="true">
            <button type="button" className="inline-flex items-center gap-2 border-0 bg-transparent text-atlas-text text-[19px] leading-[1.1] cursor-pointer p-0">
              <span>Services</span>
              <NavChevron />
            </button>
          </div>

          <div className="nav-dropdown" data-case-studies-dropdown="true">
            <button type="button" className="inline-flex items-center gap-2 border-0 bg-transparent text-atlas-text text-[19px] leading-[1.1] cursor-pointer p-0">
              <span>Case Studies</span>
              <span className="text-atlas-muted-text text-[16px]">(42)</span>
            </button>
          </div>

          <div className="nav-dropdown" data-pricing-dropdown="true">
            <button type="button" className="inline-flex items-center gap-2 border-0 bg-transparent text-atlas-text text-[19px] leading-[1.1] cursor-pointer p-0">
              <span>Pricing</span>
            </button>
          </div>

          <Link href="/about" className="inline-flex items-center gap-2 border-0 bg-transparent text-atlas-text text-[19px] leading-[1.1] cursor-pointer p-0">
            About Us
          </Link>

          <div className="nav-dropdown" data-blog-dropdown="true">
            <button type="button" className="inline-flex items-center gap-2 border-0 bg-transparent text-atlas-text text-[19px] leading-[1.1] cursor-pointer p-0">
              <span>Blog</span>
            </button>
          </div>
        </nav>

        <a
          href={ATLAS_WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 min-h-[56px] px-6 rounded-full border border-transparent text-lg leading-none font-medium transition-transform duration-150 hover:-translate-y-px bg-[#090909] text-white min-w-[212px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)]"
        >
          <span>Contact Us</span>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}
