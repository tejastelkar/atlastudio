"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitHeroTitle } from "@/components/atlas/heroes/split-hero-title";
import { ATLAS_WORKFLOW } from "@/lib/atlas-homepage-data";

export function AtlasWorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-[140px] bg-white overflow-x-hidden">
      <div className="atlas-container">
        <div className="flex flex-col gap-[18px] items-center text-center max-w-[900px] mx-auto">
          <div className="inline-flex items-center min-h-[40px] px-4 rounded-full bg-[#f1f1f1] text-base">{ATLAS_WORKFLOW.eyebrow}</div>
          <SplitHeroTitle
            firstLine={ATLAS_WORKFLOW.firstLine}
            secondLine={ATLAS_WORKFLOW.secondLine}
            align="center"
            className="![&_span]:text-[clamp(40px,6vw,84px)] ![&_span]:leading-[1.1]"
          />
          <p className="mt-6 mx-auto mb-0 text-xl leading-[1.5] text-atlas-muted-text max-w-[680px]">{ATLAS_WORKFLOW.summary}</p>
        </div>

        <div className="relative mt-[100px] flex justify-center" ref={containerRef}>
          <div className="flex flex-col gap-20 md:gap-[160px] w-full max-w-[1324px] mx-auto relative z-20">
            {/* Vertical Track placed inside the grid container so it aligns exactly */}
            <div className="hidden md:block absolute top-[38px] bottom-0 left-[484px] -translate-x-1/2 w-[2px] bg-[#e5e5e5] z-10 lg:left-[216px] xl:left-[484px]">
              <motion.div
                className="w-full h-full bg-[#ef3422]"
                style={{ scaleY, transformOrigin: "top" }}
              />
            </div>

            {ATLAS_WORKFLOW.steps.map((step, index) => {
              const stepProgressStart = index / ATLAS_WORKFLOW.steps.length;
              return (
                <WorkflowStep 
                  key={step.title} 
                  step={step} 
                  progress={scrollYProgress}
                  activationPoint={stepProgressStart}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowStep({ step, progress, activationPoint }: any) {
  const circleBg = useTransform(
    progress,
    [Math.max(0, activationPoint - 0.08), activationPoint],
    ["rgba(255,255,255,1)", "rgba(239,52,34,1)"]
  );

  const wrapperBg = useTransform(
    progress,
    [Math.max(0, activationPoint - 0.08), activationPoint],
    ["rgba(239,52,34,0)", "rgba(239,52,34,0.12)"]
  );

  const circleBorder = useTransform(
    progress,
    [Math.max(0, activationPoint - 0.08), activationPoint],
    ["1.5px solid #d0d0d0", "1.5px solid transparent"]
  );

  const iconColor = useTransform(
    progress,
    [Math.max(0, activationPoint - 0.08), activationPoint],
    ["#b0b0b0", "#ffffff"]
  );

  return (
    <article className="relative flex flex-col px-5 md:px-0 md:grid md:grid-cols-[412px_32px_minmax(0,1fr)] lg:grid-cols-[200px_32px_minmax(0,1fr)] xl:grid-cols-[412px_32px_minmax(0,1fr)] gap-8 md:gap-[56px] lg:gap-8 xl:gap-[56px]">
      {/* Left side: Timeline marker and short step info */}
      <div className="flex flex-col items-start md:items-end text-left md:text-right pt-1 mb-6 md:mb-0 relative z-20">
        <div className="inline-flex items-center min-h-[28px] px-[14px] rounded-full bg-[#f1f1f1] text-sm font-medium mb-[6px]">{step.step}</div>
        <div className="font-ivyoradisplay text-[56px] font-normal leading-none tracking-tight italic">{step.label}</div>
      </div>

      {/* Center timeline dot */}
      <div className="hidden md:flex flex-col items-center relative mt-2.5 w-8">
        <motion.div 
          className="p-2 rounded-full flex items-center justify-center relative z-20"
          style={{ backgroundColor: wrapperBg }}
        >
          <motion.div 
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: circleBg, border: circleBorder }}
          >
            <motion.svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: iconColor }}
            className="relative z-20"
          >
            <path
              d="M13 1.00005C13 1.00005 8.58107 6.99999 6.99995 7C5.41884 7.00001 1 1 1 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side: Image and details */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[88px] items-start">
        <div className="flex-1 lg:min-w-[320px]">
          <h3 className="text-[28px] font-medium tracking-tight leading-[1.2] m-0 mb-3">{step.title}</h3>
          <p className="text-lg leading-[1.5] text-atlas-muted-text m-0 mb-8 max-w-[440px]">{step.text}</p>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden bg-[#e9eaf0] p-3 w-full">
          <img src={step.image} alt={step.title} className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]" />
        </div>
      </div>
    </article>
  );
}
