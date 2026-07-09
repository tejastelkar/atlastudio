"use client";

import { ATLAS_HOME_LOGOS } from "@/lib/atlas-homepage-data";

export function AtlasLogoStrip() {
  return (
    <section className="pt-[100px] pb-5 bg-white overflow-hidden">
      <div className="atlas-container">
        <div className="flex flex-col gap-[72px] items-center">
          <div className="m-0 text-center text-xl font-normal tracking-[-0.2px] text-black">{ATLAS_HOME_LOGOS.heading}</div>
          
          <div className="relative flex flex-col gap-[42px] w-[100vw] left-1/2 -translate-x-1/2">
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(270deg,#fff,transparent_15%,transparent_85%,#fff)]"></div>
            {/* Track 1 - moving left */}
            <div className="flex items-center w-max animate-marquee-left">
              {/* Duplicate list twice for seamless infinite scroll */}
              <div className="flex items-center justify-between">
                {ATLAS_HOME_LOGOS.track1.map((image, i) => (
                  <div key={`t1-a-${i}`} className="flex items-center justify-center h-7 mx-5">
                    <img src={image} alt="" className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between" aria-hidden="true">
                {ATLAS_HOME_LOGOS.track1.map((image, i) => (
                  <div key={`t1-b-${i}`} className="flex items-center justify-center h-7 mx-5">
                    <img src={image} alt="" className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 - moving right */}
            <div className="flex items-center w-max animate-marquee-right">
              <div className="flex items-center justify-between">
                {ATLAS_HOME_LOGOS.track2.map((image, i) => (
                  <div key={`t2-a-${i}`} className="flex items-center justify-center h-7 mx-5">
                    <img src={image} alt="" className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between" aria-hidden="true">
                {ATLAS_HOME_LOGOS.track2.map((image, i) => (
                  <div key={`t2-b-${i}`} className="flex items-center justify-center h-7 mx-5">
                    <img src={image} alt="" className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
