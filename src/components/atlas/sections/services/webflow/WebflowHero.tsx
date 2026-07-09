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
    <section className="relative w-full border-b border-atlas-border overflow-hidden pt-12 md:pt-20 lg:pt-24 pb-16 lg:pb-24">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#00000014] -translate-x-1/2" />
        <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-[#00000014] -translate-y-1/2" />
        <div className="absolute top-[48%] left-1/2 w-3.5 h-3.5 rounded-full bg-black -translate-x-1/2 -translate-y-1/2" />
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

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[40px] leading-[0.95] md:text-[80px] lg:text-[110px] xl:text-[140px] tracking-[-0.04em] mb-16 lg:mb-24 flex flex-col items-center"
        >
          <span className="font-medium text-[#111]">{data.heading.regular}</span>
          <span className="font-ivyoradisplay font-normal italic ml-0 md:ml-32 lg:ml-48">{data.heading.italic}</span>
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-16 lg:gap-24"
        >
          <a
            href={data.cta.url}
            className="group flex items-center gap-4 bg-black text-white rounded-[100px] pl-8 pr-2.5 py-2.5 hover:scale-105 transition-transform duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
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
