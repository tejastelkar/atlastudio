import Image from "next/image";
import { ATLAS_PLATFORMS } from "@/lib/atlas-homepage-data";

export function AtlasPlatformsSection() {
  return (
    <section className="bg-[#010101] pt-[122px] pb-[142px] flex flex-col items-center">
      <h2 className="text-white text-[56px] font-medium leading-[1.1] m-0 mb-[60px] text-center tracking-normal">
        {ATLAS_PLATFORMS.heading}
      </h2>
      
      <div className="mx-auto px-[30px] max-w-[1460px] w-full">
        <div className="grid grid-cols-4 gap-[16px] w-full">
          {ATLAS_PLATFORMS.items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex items-center justify-center bg-[rgba(9,9,9,0.2)] border border-[#202020] h-[84px] overflow-hidden"
            >
              {/* Yellow Accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[18px] bg-[#ecfba9] z-10" />
              
              {/* Animated Content Wrapper */}
              <div className="relative w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                {/* Logo Container */}
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                  <Image
                    src={item.logo}
                    alt={item.hoverText}
                    width={item.width}
                    height={item.height}
                    className="w-auto h-auto"
                    unoptimized
                  />
                </div>
                
                {/* Hover Content Panel */}
                <div className="absolute top-full left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#ebf8f9] to-[#cbf0f1] text-black">
                  <span className="text-[22px] font-medium leading-[1.2] tracking-[-0.01em]">{item.hoverText}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
