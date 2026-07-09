"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ATLAS_FAQ } from "@/lib/atlas-homepage-data";

export function AtlasFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-[120px] bg-[#f3f4f6]">
      <div className="mx-auto px-[30px] max-w-[1460px]">
        {/* Two-column grid: left 550px, right remaining, gap 100px */}
        <div className="grid gap-[100px]" style={{ gridTemplateColumns: "550px 1fr" }}>
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col gap-[60px]">
            {/* Heading group */}
            <div className="flex flex-col gap-4">
              <div>
                <h2
                  className="m-0 text-[72px] font-medium leading-[1.1] tracking-[-0.03em] text-black"
                >
                  {ATLAS_FAQ.heading}
                </h2>
                <h2
                  className="m-0 text-[56px] font-normal leading-[1.1] tracking-[-0.039em] italic font-ivyoradisplay text-black"
                >
                  {ATLAS_FAQ.italicHeading}
                </h2>
              </div>
              <p className="text-[20px] leading-[1.5] tracking-[-0.011em] text-black m-0">
                {ATLAS_FAQ.description}
              </p>
            </div>

            {/* CTA Card */}
            <div
              className="rounded-[32px] p-[32px] flex flex-col gap-[52px]"
              style={{
                background:
                  "linear-gradient(rgba(255,255,255,0.5) 50%, rgba(218,250,251,0.7)), url('https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6996adbb6c5e54d0c23d9112_faq-cta-bg.svg') no-repeat center bottom / 100% 100%",
              }}
            >
              {/* Top: avatar + heading + button */}
              <div className="flex flex-col gap-[28px]">
                {/* Avatar */}
                <img
                  src={ATLAS_FAQ.cta.profileImage}
                  alt="Atlas Studio founder"
                  className="w-[56px] h-[56px] rounded-full object-cover"
                />
                {/* Title + subtitle */}
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-[28px] font-medium leading-[1.2] text-black">
                    {ATLAS_FAQ.cta.title}
                  </h3>
                  <p className="m-0 text-[16px] leading-[1.2] text-black/70">
                    {ATLAS_FAQ.cta.subtitle}
                  </p>
                </div>
                {/* Button */}
                <Link
                  href={ATLAS_FAQ.cta.buttonHref}
                  className="inline-flex items-center gap-4 bg-black rounded-full no-underline w-fit"
                >
                  <div className="flex items-center gap-4 py-2 pl-6 pr-2">
                    <span className="text-[16px] text-white font-normal">
                      {ATLAS_FAQ.cta.buttonText}
                    </span>
                    <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 13L13 3M13 3H7M13 3V9"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom: email */}
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H19M1 1V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V1M1 1L10 9L19 1"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] text-black/70">
                    {ATLAS_FAQ.cta.emailLabel}
                  </span>
                  <a
                    href={`mailto:${ATLAS_FAQ.cta.email}`}
                    className="text-[20px] font-medium text-black no-underline hover:underline"
                  >
                    {ATLAS_FAQ.cta.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: FAQ Accordion ─── */}
          <div className="flex flex-col">
            {ATLAS_FAQ.items.map((item, i) => {
              const isOpen = openIndex === i;
              const isLast = i === ATLAS_FAQ.items.length - 1;
              return (
                <motion.div
                  key={i}
                  className={`${!isLast ? "border-b border-[#e8e8e8]" : ""}`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between text-left py-[10px] pb-[20px] pt-[10px] bg-transparent border-0 cursor-pointer"
                  >
                    <span className="text-[16px] text-[#222222] font-normal leading-[1.5]">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-4"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1V17M1 9H17"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[16px] leading-[1.5] text-black pb-4 m-0">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
