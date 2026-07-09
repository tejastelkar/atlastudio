"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ATLAS_WEBFLOW_PAGE_DATA } from '@/lib/atlas-webflow-page-data';

export default function WebflowServicesGrid() {
  const data = ATLAS_WEBFLOW_PAGE_DATA.servicesGrid;

  return (
    <section className="w-full bg-[#f6f6f6] py-24 md:py-32">
      <div className="atlas-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-white rounded-full border border-[#e5e5e5] mb-8 inline-block"
          >
            <span className="text-[14px] font-medium text-[#111] uppercase tracking-wider">{data.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] max-w-[900px] mb-8"
          >
            <span className="font-semibold text-[#111]">{data.heading.regular}</span>
            <span className="font-ivyoradisplay font-normal italic">{data.heading.italic}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] md:text-[22px] leading-[1.5] text-[#444] max-w-[800px]"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
              className="rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col relative aspect-[4/3] group border border-[#eaeaea] transition-transform duration-500 ease-out hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              <div className="absolute top-0 left-0 w-full p-6 md:p-8 lg:p-10 flex flex-col gap-3 md:gap-4 z-10 pointer-events-none">
                <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#111] leading-[1.2] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-[17px] leading-[1.5] text-[#333] max-w-[90%] md:max-w-[85%]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
