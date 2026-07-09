import React from 'react';
import { motion } from 'framer-motion';
import { ATLAS_WEBFLOW_PAGE_DATA } from '@/lib/atlas-webflow-page-data';

export default function WebflowOverview() {
  const data = ATLAS_WEBFLOW_PAGE_DATA.overview;

  return (
    <section className="w-full bg-[#f6f6f6] py-24 md:py-32 overflow-hidden">
      <div className="atlas-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-[#e5e5e5]"
            >
              <img src={data.badge.icon} alt="" className="w-5 h-5 object-contain" />
              <span className="text-[14px] font-medium text-[#111]">{data.badge.text}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.03em]"
            >
              <span className="font-medium text-[#111]">{data.heading.regular}</span>
              <span className="font-ivyoradisplay font-normal italic">{data.heading.italic}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] md:text-[20px] leading-[1.4] text-[#111] max-w-[500px]"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={data.cta.url}
                className="group flex items-center gap-4 bg-black text-white rounded-[100px] pl-7 pr-2 py-2 hover:scale-105 transition-transform duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.15)] mt-4"
              >
                <span className="text-[16px] font-medium leading-none mb-0.5">{data.cta.text}</span>
                <div className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative w-full rounded-[32px] overflow-hidden">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
