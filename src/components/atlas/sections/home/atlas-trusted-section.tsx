"use client";
import React from "react";
import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";
import { ATLAS_CAL_LINK } from "@/lib/atlas-site-data";
import { ATLAS_TRUST_SECTION } from "@/lib/atlas-homepage-data";

export function AtlasTrustedSection() {
  return (
    <section className="py-[120px]">
      <div className="atlas-container grid grid-cols-1 xl:grid-cols-[6fr_4fr] gap-[80px] items-start">
        <div className="flex flex-col">
          <SplitHeroTitle
            firstLine={ATLAS_TRUST_SECTION.firstLine}
            secondLine={ATLAS_TRUST_SECTION.secondLine}
            align="left"
            className="!text-[40px] md:!text-[54px] !leading-[1.1] !tracking-[-0.02em] text-black"
          />
          <p className="text-lg leading-[1.6] text-black mt-8 mb-12 max-w-[90%]">{ATLAS_TRUST_SECTION.summary}</p>
          <a
            href={ATLAS_CAL_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[50px] pl-6 pr-2 rounded-full bg-[#090909] text-white text-base font-medium transition-colors no-underline hover:bg-black/80 w-fit shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)]"
          >
            <span>{ATLAS_TRUST_SECTION.actionLabel}</span>
            <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="flex flex-col">
          {ATLAS_TRUST_SECTION.valuePoints.map((point, i) => (
            <div key={point} className="flex items-center gap-4 py-6 text-base leading-[1.5] font-normal text-black border-b border-black/10">
              <img src="https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02e5294c7e5a3b0f092cb6_c19e8168-0ed9-4f0e-b697-48454f24cfde.svg" alt="" className="w-[14px] h-[14px] shrink-0" />
              <div className="text-[17px] font-normal text-black">{point}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="atlas-container mt-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {ATLAS_TRUST_SECTION.capabilityCards.map((card, index) => {
            const borderClass = index === 0 ? 'border-b border-black/10 md:border-r' :
                                index === 1 ? 'border-b border-black/10' :
                                index === 2 ? 'border-b border-black/10 md:border-b-0 md:border-r' :
                                '';
            return (
              <div key={card.title} className={`relative flex flex-col items-center justify-center text-center py-12 px-6 bg-transparent ${borderClass}`}>
                <div className="px-3.5 py-1.5 rounded-full inline-block mb-6" style={{ backgroundColor: card.tagBg }}>
                  <span className="text-[13px] font-medium tracking-[0.02em]" style={{ color: card.tagColor }}>{card.label}</span>
                </div>
                <img src={card.icon} alt="" className="w-8 h-auto mb-4" />
                <div>
                  <h3 className="text-[36px] font-medium tracking-[-0.01em] text-black m-0 mb-2">{card.title}</h3>
                  <div>
                    <p className="text-lg leading-[1.5] font-normal text-black m-0 mt-0 max-w-[500px] mx-auto">{card.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
