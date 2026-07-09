"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ATLAS_BLOG_SECTION } from "@/lib/atlas-homepage-data";

export function AtlasBlogSection() {
  return (
    <section className="py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[48px] md:text-[64px] leading-[1.1] text-center font-medium tracking-tight mb-[60px] md:mb-[80px] text-black">
          {ATLAS_BLOG_SECTION.firstLine}
          <span className="font-ivyoradisplay italic font-normal">
            {" "}{ATLAS_BLOG_SECTION.italicLine}
          </span>
          <br />
          {ATLAS_BLOG_SECTION.secondLine}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATLAS_BLOG_SECTION.items.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link href={post.href} className="group flex flex-col text-inherit no-underline">
                <div className="w-full rounded-2xl overflow-hidden aspect-[1.5/1] mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-4 text-[13px] opacity-60 mb-3">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="m-0 text-2xl leading-[1.3] font-medium tracking-tight text-black">{post.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
