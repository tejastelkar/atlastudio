"use client";

import { ATLAS_CASE_STUDIES } from "@/lib/atlas-homepage-data";

export function AtlasCaseStudiesSection() {
  return (
    <section className="pt-[108px] pb-24 bg-white">
      <div className="atlas-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <h2 className="m-0 text-[48px] md:text-[72px] font-medium tracking-tight leading-none text-black">
            {ATLAS_CASE_STUDIES.firstLine}{" "}
            <span className="font-ivyoradisplay font-normal italic">{ATLAS_CASE_STUDIES.secondLine}</span>
          </h2>
          <a href={ATLAS_CASE_STUDIES.actionHref} className="inline-flex items-center justify-center gap-3 min-h-[50px] px-8 rounded-full bg-[#090909] text-white text-base font-medium transition-colors no-underline">
            <span>{ATLAS_CASE_STUDIES.actionLabel}</span>
            <span className="flex items-center justify-center w-10 h-10 -mr-4 rounded-full bg-white text-black" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-6">
          {ATLAS_CASE_STUDIES.cards.map((card) => (
            <a key={card.title} href={card.href} className="group flex flex-col gap-4 text-black no-underline">
              <div className="relative w-full aspect-square min-h-[280px] rounded-2xl overflow-hidden bg-[#f4f4f4]">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-between p-8 bg-black/50 backdrop-blur-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                  <p className="m-0 text-xl leading-[1.5] font-normal text-white/90">{card.text}</p>
                  <div className="flex items-center gap-3 text-lg font-medium">
                    View Project <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div className="text-[28px] md:text-xl xl:text-[28px] leading-[1.4] font-medium tracking-tight">{card.title}</div>
                <div className="mt-1 text-base text-atlas-soft-text">{card.category}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
