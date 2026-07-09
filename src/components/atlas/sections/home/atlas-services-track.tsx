"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ATLAS_SERVICES_TRACK } from "@/lib/atlas-homepage-data";

export function AtlasServicesTrack() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative">
      {ATLAS_SERVICES_TRACK.services.map((service, i) => {
        const targetScale = 1 - (ATLAS_SERVICES_TRACK.services.length - i) * 0.05;
        return (
          <ServiceCard
            key={service.title}
            i={i}
            service={service}
            progress={scrollYProgress}
            range={[i * (1 / ATLAS_SERVICES_TRACK.services.length), 1]}
            targetScale={targetScale}
            total={ATLAS_SERVICES_TRACK.services.length}
          />
        );
      })}
    </section>
  );
}

function ServiceCard({ i, service, progress, range, targetScale, total }: any) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen w-full sticky top-0 overflow-hidden">
      <motion.div
        style={{
          scale,
          backgroundColor: service.bgColor,
          top: `0px`
        }}
        className="w-full h-screen absolute top-0 left-0 flex flex-col p-10 text-white origin-top rounded-t-[40px] overflow-hidden"
      >
        <div className="flex justify-between items-center text-xl font-normal mb-6">
          <div>
            ({service.number})
          </div>
          <div>
            Explore services
          </div>
        </div>
        
        <h2 className="text-center text-[clamp(60px,10vw,140px)] font-medium leading-none m-0 mb-10 tracking-tight">
          {service.title} <span className="font-ivyoradisplay font-normal italic">{service.subtitle}</span>
        </h2>

        <div className="flex-1 w-full max-w-[1000px] mx-auto relative flex justify-center items-center">
          <img src={service.image} alt={service.title} className="w-full h-auto max-h-full object-contain" />
        </div>
      </motion.div>
    </div>
  );
}
