import React from 'react';
import { ATLAS_WEBFLOW_PAGE_DATA } from '@/lib/atlas-webflow-page-data';

export default function WebflowLogoTicker() {
  const data = ATLAS_WEBFLOW_PAGE_DATA.ticker;

  return (
    <section className="w-full border-b border-atlas-border overflow-hidden bg-white py-12 md:py-16">
      <div className="atlas-container">
        <div className="relative w-full flex overflow-hidden">
          {/* First set of logos */}
          <div className="flex w-max animate-[marquee-left_30s_linear_infinite] shrink-0 items-center gap-12 md:gap-24 pr-12 md:pr-24">
            {data.logos.map((logo) => (
              <img
                key={`logo-1-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain max-w-[150px] md:max-w-[180px] filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

          {/* Duplicated set of logos for seamless looping */}
          <div className="flex w-max animate-[marquee-left_30s_linear_infinite] shrink-0 items-center gap-12 md:gap-24 pr-12 md:pr-24">
            {data.logos.map((logo) => (
              <img
                key={`logo-2-${logo.id}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain max-w-[150px] md:max-w-[180px] filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
