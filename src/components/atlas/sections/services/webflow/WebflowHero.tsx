"use client";

import { motion } from "framer-motion";

type WebflowHeroProps = {
  data: {
    badge: {
      text: string;
      icon: string;
    };
    heading: {
      regular: string;
      italic: string;
    };
    cta: {
      text: string;
      url: string;
    };
    trustText: string;
  };
};

export function WebflowHero({ data }: WebflowHeroProps) {
  return (
    <section className="relative w-full min-h-screen border-b border-[#eaeaea] overflow-hidden flex flex-col items-center justify-center -mt-[230px] md:-mt-[190px] lg:-mt-[132px] pt-[230px] md:pt-[190px] lg:pt-[132px]">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#00000014] -translate-x-1/2" />
      </div>

      <div className="atlas-container relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full border border-[#e5e5e5] mb-12 lg:mb-16 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
        >
          <img src={data.badge.icon} alt="" className="w-[18px] h-[18px] object-contain" />
          <span className="text-[13px] leading-none font-medium text-[#2d2d2d]">{data.badge.text}</span>
        </motion.div>

        {/* Heading with crosshair exactly between the two lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative text-[40px] leading-[1.1] md:text-[56px] lg:text-[72px] tracking-[-0.01em] mb-10 flex flex-col items-center w-full"
        >
          {/* Horizontal crosshair line — anchored to the BOTTOM of first span (= TOP of second span) */}
          <span className="font-medium text-[#111] relative">
            {data.heading.regular}
            {/* Line and dot sit at the bottom edge of this span, which is the gap between lines */}
            <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-black z-10" />
            <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[200vw] h-[1px] bg-[#00000014] -translate-x-1/2 z-0" />
          </span>
          <span className="font-ivyoradisplay font-normal italic ml-0 md:ml-12 lg:ml-16">{data.heading.italic}</span>
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-12 lg:gap-16"
        >
          <a
            href={data.cta.url}
            className="group flex items-center gap-4 bg-black text-white rounded-[100px] pl-8 pr-2.5 py-2.5 hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          >
            <span className="text-[17px] font-medium leading-none mb-0.5">{data.cta.text}</span>
            <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          <p className="text-[20px] text-atlas-text">{data.trustText}</p>
        </motion.div>
      </div>
    </section>
  );
}
