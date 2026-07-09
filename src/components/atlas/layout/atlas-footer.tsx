"use client";

import Link from "next/link";
import { ATLAS_FOOTER_DATA } from "@/lib/atlas-footer-data";
import { motion } from "framer-motion";

export function AtlasFooter() {
  return (
    <footer className="bg-[#f5f5f7]">
      {/* Top half */}
      <div className="atlas-container">
        <div className="flex flex-col lg:flex-row gap-16 py-16 lg:py-20 border-b border-black/[0.08]">
          <div className="lg:w-[32%] flex flex-col items-start gap-8">
            <Link href="/" className="inline-block">
              <img
                src={ATLAS_FOOTER_DATA.company.logo}
                alt={ATLAS_FOOTER_DATA.company.name}
                className="h-[34px] object-contain"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-medium leading-none tracking-tight">
                {ATLAS_FOOTER_DATA.company.name}
              </h3>
              <p className="text-[17px] text-[#4f4f4f] max-w-[280px] leading-[1.4] mt-1">
                {ATLAS_FOOTER_DATA.company.description}
              </p>
            </div>
            <Link
              href={ATLAS_FOOTER_DATA.company.deckLink}
              target="_blank"
              className="group relative inline-flex items-center gap-3 px-[30px] py-[15px] rounded-full bg-[#010101] text-white hover:bg-[#1a1a1a] transition-colors overflow-hidden mt-2"
            >
              <span className="relative z-10 font-medium text-[15px] tracking-wide">
                {ATLAS_FOOTER_DATA.company.deckText}
              </span>
              <img
                src="https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg"
                alt=""
                className="w-[18px] h-[18px] relative z-10 invert group-hover:rotate-45 transition-transform duration-300"
              />
            </Link>

            {/* Contact Info (Moved from bottom tier) */}
            <div className="flex flex-col gap-8 mt-4 pt-8 border-t border-black/[0.08] w-full">
              <div className="flex flex-col gap-3">
                <h5 className="text-[#8e8e8e] text-[12px] tracking-[0.06em] uppercase font-medium">
                  Email us
                </h5>
                <a
                  href={`mailto:${ATLAS_FOOTER_DATA.contact.email}`}
                  className="text-[20px] font-medium tracking-[-0.02em] hover:opacity-70 transition-opacity w-fit"
                >
                  {ATLAS_FOOTER_DATA.contact.email}
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-[#8e8e8e] text-[12px] tracking-[0.06em] uppercase font-medium">
                  Call Us
                </h5>
                <div className="flex items-center gap-3">
                  <a
                    href={ATLAS_FOOTER_DATA.contact.whatsappLink}
                    target="_blank"
                    className="text-[20px] font-medium tracking-[-0.02em] hover:opacity-70 transition-opacity"
                  >
                    {ATLAS_FOOTER_DATA.contact.phone}
                  </a>
                  <img
                    src={ATLAS_FOOTER_DATA.contact.whatsappIcon}
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[68%] grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12 lg:pl-10">
            {ATLAS_FOOTER_DATA.links.map((col, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col gap-6 ${col.isTwoCol ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {col.title ? (
                  <h4 className="font-ivyoradisplay text-[24px] italic tracking-wide text-[#010101]">
                    {col.title}
                  </h4>
                ) : (
                  <div className="h-[28px] hidden md:block" />
                )}
                
                {/* Links container */}
                <div className={`grid ${col.isTwoCol ? 'grid-cols-2 gap-x-4' : 'grid-cols-1'} gap-y-3`}>
                  {col.items.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="text-[17px] text-[#4f4f4f] hover:text-[#010101] transition-colors duration-300 w-fit leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Bottom strip */}
      <div className="w-full bg-[#090909] text-white">
        <div className="atlas-container flex flex-col md:flex-row justify-between items-center min-h-[80px] py-6 md:py-0 text-[14px] text-white/60">
          <div>{ATLAS_FOOTER_DATA.legal.copyright}</div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 md:mt-0">
            {ATLAS_FOOTER_DATA.legal.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
