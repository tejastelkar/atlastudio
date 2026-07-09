"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ATLAS_WEBFLOW_PAGE_DATA } from '@/lib/atlas-webflow-page-data';

export default function WebflowProcess() {
  const data = ATLAS_WEBFLOW_PAGE_DATA.process;

  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="atlas-container relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] max-w-[900px] mb-8"
          >
            <span className="font-semibold text-[#111]">{data.heading.regular}</span>
            <span className="font-ivyoradisplay font-normal italic">{data.heading.italic}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[18px] md:text-[22px] leading-[1.5] text-[#444] max-w-[800px]"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="max-w-[1380px] mx-auto relative px-4 md:px-8 pb-16">
          
          {/* Global Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-[256px] lg:left-[432px] top-[40px] bottom-0 w-px bg-[#e5e5e5] z-0" />
          <div className="hidden md:block absolute left-[256px] lg:left-[432px] top-[40px] h-[55%] w-px bg-[#eb4126] z-0" />

          {data.steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_32px_1fr] lg:grid-cols-[360px_32px_1fr] gap-8 md:gap-10 lg:gap-14 mb-16 md:mb-24 last:mb-0 relative z-10 items-start">
              
              {/* Left Column: Step Label & Title */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full flex md:flex-col items-center md:items-end justify-start gap-4 md:gap-4 md:text-right"
              >
                <div className="px-4 py-1.5 bg-[#f5f5f5] rounded-full inline-block">
                  <span className="text-[14px] font-medium text-[#111]">{step.stepLabel}</span>
                </div>
                <h3 className="font-ivyoradisplay font-normal italic text-[36px] md:text-[42px] lg:text-[48px] text-[#111] leading-none">
                  {step.stepTitle}
                </h3>
              </motion.div>

              {/* Middle Column: Icon/Circle (Desktop only) */}
              <div className="hidden md:flex flex-col items-center justify-start relative h-full pt-1">
                {/* Active circle overrides the line visually */}
                {index === 1 ? (
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#fceceb] flex items-center justify-center absolute inset-0 z-0" />
                    <div className="w-8 h-8 rounded-full bg-[#eb4126] flex items-center justify-center relative z-10 shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 0V12M7 12L1 6M7 12L13 6"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center relative z-10 shrink-0">
                    <div className="w-8 h-8 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center relative z-10 shrink-0">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 0V12M7 12L1 6M7 12L13 6"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Content & Image */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12"
              >
                <div className="flex-1 flex flex-col justify-start">
                  <h4 className="text-[24px] md:text-[28px] font-semibold text-[#111] leading-[1.2] tracking-[-0.01em] mb-4">
                    {step.heading}
                  </h4>
                  <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#333]">
                    {step.text}
                  </p>
                </div>

                <div className="flex-1 shrink-0">
                  <div className="rounded-[24px] overflow-hidden bg-[#eef0f3] border border-[#e5e5e5] aspect-[1.3] flex items-center justify-center relative">
                    <img 
                      src={step.image} 
                      alt={step.heading}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
