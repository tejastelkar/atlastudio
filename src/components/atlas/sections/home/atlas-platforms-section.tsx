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
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[18px] bg-[#ecfba9]" />
              
              {/* Animated Content Wrapper */}
              <div className="relative w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-[42px]">
                {/* Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
                  <Image
                    src={item.logo}
                    alt={item.hoverText}
                    width={item.width}
                    height={item.height}
                    className="w-auto h-auto"
                    unoptimized
                  />
                </div>
                
                {/* Hover Text */}
                <div className="absolute top-[82px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white text-[16px]">
                  <span className="whitespace-nowrap">{item.hoverText}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
