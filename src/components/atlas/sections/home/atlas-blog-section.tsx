"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ATLAS_BLOG_SECTION } from "@/lib/atlas-homepage-data";

export function AtlasBlogSection() {
  return (
    <section className="py-[120px] bg-[#F3F4F6] overflow-hidden">
      <div className="max-w-[1410px] mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center gap-[32px] mb-[80px]">
          <div className="flex items-center justify-start py-1 pr-[14px] pl-1 gap-3 rounded-full bg-white">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EFEFEF]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.5L6.75 12.75L3 9" stroke="#090909" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-base font-normal tracking-normal uppercase text-black">
              RESOURCES
            </span>
          </div>

          <h2 className="m-0 text-[44px] leading-[1.4] tracking-[-0.01em] font-medium text-center text-black">
            Get Deeper Insights, Tips,{" "}
            <span className="font-ivyoradisplay italic font-normal">And Real</span><br />
            <span className="font-ivyoradisplay italic font-normal">Talk</span> From The Blog.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {ATLAS_BLOG_SECTION.items.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link href={post.href} className="group flex flex-col gap-4 text-inherit no-underline">
                <div className="w-full rounded-[12px] overflow-hidden aspect-[1.5/1]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-row gap-2 mt-1">
                  <span className="text-[12px] leading-none text-black/80">{post.category}</span>
                  <span className="text-[12px] leading-none text-black/80">{post.readTime}</span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="m-0 text-[22px] leading-[1.2] font-medium tracking-[0.03em] text-black">
                    {post.title}
                  </h3>
                  <div className="text-base leading-[1.4] text-black/80">
                    {/* @ts-ignore - description added in data file */}
                    {post.description}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
