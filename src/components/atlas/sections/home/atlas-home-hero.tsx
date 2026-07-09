"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ATLAS_CAL_LINK, ATLAS_WHATSAPP_LINK } from "@/lib/atlas-site-data";
import { ATLAS_HOME_HERO } from "@/lib/atlas-homepage-data";

const EYEBROW_SLIDES = [
  {
    icon: "https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f305ffadcfde93cd5a3f_3821d647-6136-40ed-a1a7-3db0a9de28b7.svg",
    text: "Teams across India, UAE, UK & USA",
  },
  {
    icon: "https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f2a36e51440522dad1ef_6e6284c1-902a-48e2-91a7-0c6f564d9108.svg",
    text: "Top Featured on Behance & Dribbble",
  },
  {
    icon: "https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6a02f3a21f1ea0a16e91f375_305cb7e1-5210-430a-9f2e-4687ba1a990a.svg",
    text: "42+ Successful Projects Delivered",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

const slideVariants = {
  enter: { opacity: 0, x: 20 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" as any },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.6, ease: "easeInOut" as any },
  },
};

export function AtlasHomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % EYEBROW_SLIDES.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="pt-16 pb-12 lg:pt-[88px] lg:pb-16 bg-white overflow-hidden">
      <div className="atlas-container">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center gap-[18px]">
            {/* Rotating eyebrow slider */}
            <motion.div className="flex items-center gap-[14px]" variants={itemVariants}>
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="inline-flex items-center gap-3 min-h-[36px] lg:min-h-10 p-0 rounded-full bg-transparent text-black whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center w-[50px] h-10 rounded-full bg-white shrink-0">
                      <img
                        src={EYEBROW_SLIDES[activeSlide].icon}
                        alt=""
                        className="w-[26px] h-[26px] object-cover"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="text-lg leading-[25.2px] font-normal tracking-[-0.2px]">
                      {EYEBROW_SLIDES[activeSlide].text}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Headline — mixed font, centered */}
            <motion.h1 className="m-0 text-[48px] leading-[1.1] md:text-[64px] md:leading-[70.4px] font-medium tracking-[-1.25px] text-black" variants={itemVariants}>
              Product Design &amp; Dev Agency for
              <br />
              B2B{" "}
              <span className="font-ivyoradisplay font-normal italic">
                SaaS Companies
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p className="m-0 max-w-[620px] text-lg leading-[27px] text-black" variants={itemVariants}>
              We help SaaS companies turn ideas into modern digital products through fast product design and development processes completed in as little as 2–4 weeks.
            </motion.p>
          </div>

          {/* Bottom row: Clutch rating + CTA buttons */}
          <div className="flex flex-col items-center gap-8">
            {/* Clutch rating widget */}
            <motion.a
              href={ATLAS_HOME_HERO.reviewHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[65px] py-2.5 px-[22px] rounded-full border border-black/8 bg-white no-underline"
              variants={itemVariants}
            >
              <img
                src={ATLAS_HOME_HERO.reviewIcon}
                alt="Clutch"
                className="w-[90px] h-10 object-cover shrink-0"
              />
              <div className="flex flex-col gap-[3px] items-start">
                <img
                  src={ATLAS_HOME_HERO.reviewBadge}
                  alt="5 Stars"
                  className="w-[100px] h-[21px] object-cover shrink-0"
                />
                <span className="text-base font-medium text-black/70 leading-6">
                  42+ Reviews
                </span>
              </div>
            </motion.a>

            {/* CTAs */}
            <motion.div className="flex flex-wrap items-center justify-center gap-5 w-full lg:w-auto" variants={itemVariants}>
              <motion.a
                href={ATLAS_CAL_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full lg:w-auto gap-2.5 min-h-[60px] p-0 rounded-full bg-[#090909] text-white text-base font-normal leading-6 no-underline whitespace-nowrap shadow-[0px_0px_0px_0px_rgba(0,0,0,0),-1.1px_1.2px_0.1px_0px_rgba(0,0,0,0.01),-2.2px_2.4px_0.3px_0px_rgba(0,0,0,0.02),-3.3px_3.7px_0.5px_0px_rgba(0,0,0,0.02),-4.6px_5.1px_0.7px_0px_rgba(0,0,0,0.03),-6px_6.6px_0.9px_0px_rgba(0,0,0,0.03),-7.6px_8.4px_1.3px_0px_rgba(0,0,0,0.03),-9.5px_10.5px_1.8px_0px_rgba(0,0,0,0.03),-11.8px_13px_2.4px_0px_rgba(0,0,0,0.03),-14.7px_16.2px_3.2px_0px_rgba(0,0,0,0.03),-18.3px_20.2px_4.4px_0px_rgba(0,0,0,0.04),-23px_25.4px_6px_0px_rgba(0,0,0,0.04),-29.3px_32.3px_8.2px_0px_rgba(0,0,0,0.04),-37.8px_41.8px_11.3px_0px_rgba(0,0,0,0.04),-49.9px_55.1px_15.9px_0px_rgba(0,0,0,0.04)]"
                id="hero-cta-call"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center justify-between gap-4 py-2 pr-2 pl-6">
                  <span className="block">
                    Get in touch today
                  </span>
                  <img
                    src="https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/6760058ec1bbec32381e4db9_6745ef31cb304a91f5342a3a_memoji%25204%25201.avif"
                    alt="Tejas"
                    className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-white/20"
                    width={44}
                    height={44}
                  />
                </div>
              </motion.a>
              <motion.a
                href={ATLAS_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center lg:justify-start gap-4 min-h-[60px] py-4 px-6 w-full lg:w-auto rounded-full bg-white text-black text-base font-normal leading-6 no-underline border border-[#090909]/10 whitespace-nowrap"
                id="hero-cta-whatsapp"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <img
                  src="https://cdn.prod.website-files.com/67449b182ce17a6b86b1d726/676007e997a9f7380da1d6cc_Whatsapp-icon-logo-vector-transparent-1.svg"
                  alt="WhatsApp"
                  className="w-[22px] h-[22px] object-contain shrink-0"
                  width={24}
                  height={24}
                />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
