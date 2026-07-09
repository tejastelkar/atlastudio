"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ATLAS_REVIEWS } from "@/lib/atlas-homepage-data";
import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";

const items = ATLAS_REVIEWS.items;
const total = items.length;

// Stack positions: 0 = front card, 1 = mid card, 2 = back card
const STACK_CONFIG = [
  { scale: 1,    y: 0,   zIndex: 10, opacity: 1 },   // position 0: front
  { scale: 0.94, y: -22, zIndex: 2,  opacity: 1 },    // position 1: mid
  { scale: 0.88, y: -44, zIndex: 1,  opacity: 1 },    // position 2: back
];

export function AtlasReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10">
        <SplitHeroTitle
          firstLine={ATLAS_REVIEWS.firstLine}
          secondLine={ATLAS_REVIEWS.secondLine}
          align="center"
          className="mb-[120px]"
        />

        <div className="relative flex justify-center items-end min-h-[545px] pt-[60px]">
          <div className="relative z-10 w-[1080px] h-[485px] overflow-visible">
            {items.map((review, i) => {
              const stackPos = (i - activeIndex + total) % total;
              const config = STACK_CONFIG[stackPos] || STACK_CONFIG[2];
              
              const isDark = review.theme === "dark";
              const isFiverr = review.logoSrc.includes("fiverr");
              const logoFilterClass = isDark && !isFiverr ? "brightness-0 invert" : "";

              return (
                <motion.div
                  key={review.clientName}
                  initial={false}
                  animate={{ 
                    opacity: config.opacity, 
                    y: config.y, 
                    scale: config.scale,
                    zIndex: config.zIndex
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl p-12 flex flex-col justify-between will-change-transform ${
                    isDark 
                      ? "bg-[#010101] text-white" 
                      : "bg-[#f1f1f1] text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-8">
                      <div>
                        <img src={review.logoSrc} alt="Company Logo" className={`h-7 ${logoFilterClass}`} />
                      </div>
                      <div className="flex items-center gap-4">
                        {review.categories.map((cat, idx) => (
                          <span key={idx} className="flex items-center gap-4">
                            <span className="text-[15px] opacity-70">{cat}</span>
                            {idx < review.categories.length - 1 && (
                              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center my-10 max-w-[900px]">
                    <p className="text-4xl font-normal leading-[1.35] tracking-tight m-0">"{review.text}"</p>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-medium">{review.clientName}</span>
                      <span className="text-[15px] opacity-60">
                        — {review.clientInfo}
                      </span>
                    </div>
                    
                    {review.results && (
                      <div className="flex gap-20">
                        {review.results.map((result, idx) => (
                          <div key={idx} className="flex flex-col gap-2">
                            <div className="text-[32px] font-ivyoradisplay italic font-normal">{result.title}</div>
                            <div className="text-[13px] opacity-60">{result.text}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
