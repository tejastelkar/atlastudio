"use client";

import { motion } from "framer-motion";
import { ATLAS_MEMBERSHIP_BENEFITS } from "@/lib/atlas-homepage-data";

export function AtlasMembershipBenefitsSection() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container mx-auto px-4 md:px-[60px] max-w-[1500px]">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium"
          >
            {ATLAS_MEMBERSHIP_BENEFITS.tag}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="m-0 text-[64px] leading-[1.2] tracking-[-0.01em] font-medium text-black max-w-[1200px]"
          >
            {ATLAS_MEMBERSHIP_BENEFITS.firstLine}{" "}
            {ATLAS_MEMBERSHIP_BENEFITS.secondLine}
            <span className="font-ivyoradisplay italic font-normal">
              {ATLAS_MEMBERSHIP_BENEFITS.italicLine}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] leading-[1.6] text-black max-w-[680px]"
          >
            {ATLAS_MEMBERSHIP_BENEFITS.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ATLAS_MEMBERSHIP_BENEFITS.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center gap-12 p-8 ${
                i % 3 !== 2 ? "lg:border-r border-[#E6E6E6]" : ""
              } ${i < 3 ? "lg:border-b border-[#E6E6E6]" : ""} ${
                i % 2 !== 1 ? "md:max-lg:border-r border-[#E6E6E6]" : ""
              } ${i < 4 ? "md:max-lg:border-b border-[#E6E6E6]" : ""} ${
                i < 5 ? "max-md:border-b border-[#E6E6E6]" : ""
              }`}
            >
              <img src={item.icon} alt={item.title} className="w-[60px] h-[60px] object-contain" />
              <div className="flex flex-col items-center gap-[14px]">
                <h3 className="text-[32px] font-medium text-black m-0 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[16px] leading-[24px] text-black m-0 whitespace-pre-line">
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
