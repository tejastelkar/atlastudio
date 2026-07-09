"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ATLAS_WEBFLOW_PAGE_DATA } from '@/lib/atlas-webflow-page-data';

export default function WebflowStats() {
  const data = ATLAS_WEBFLOW_PAGE_DATA.stats;

  return (
    <section className="w-full bg-[#050505] text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="atlas-container">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 md:mb-28 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-[48px] md:text-[64px] lg:text-[72px] leading-[1] tracking-[-0.03em] m-0"
          >
            <span className="font-semibold">{data.heading.regular}</span>
            <span className="font-ivyoradisplay font-normal italic">{data.heading.italic}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-1/2 text-[18px] md:text-[20px] leading-[1.5] text-[#b3b3b3] max-w-[580px] pt-2"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 py-12 ${
                index === 0 || index === 2 ? 'md:pr-16 md:border-r border-[#222]' : 'md:pl-16'
              } ${index < 2 ? 'border-b border-[#222]' : ''}`}
            >
              <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#b3b3b3] max-w-[320px]">
                {item.text}
              </p>
              <h3 className="text-[64px] md:text-[80px] lg:text-[96px] leading-[1] font-ivyoradisplay font-normal italic tracking-[-0.02em] m-0">
                {item.number}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
