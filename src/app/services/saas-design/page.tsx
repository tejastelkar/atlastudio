import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/atlas/pages/service-page-template";

export const metadata: Metadata = {
  title: "Custom Website Design | Atlas Studio",
  description:
    "Atlas Studio designs and builds custom websites for SaaS, B2B, and service brands that need clearer positioning, better performance, and SEO-ready execution.",
};

export default function SaasDesignPage() {
  return (
    <ServicePageTemplate
      eyebrow="Custom Website Design"
      firstLine="Custom Websites Built"
      secondLine="For B2B And SaaS Brands"
      summary="Atlas Studio builds clear, fast, conversion-minded websites for SaaS teams and B2B brands that need a stronger digital front door."
      audience="Best for companies that have outgrown a generic marketing site and need sharper positioning, stronger structure, and more reliable frontend execution."
      deliverables={[
        "Messaging and page-structure planning",
        "Homepage and service-page design",
        "High-quality custom frontend build",
        "Performance and responsiveness pass",
        "SEO-minded technical setup",
        "Launch support and refinement",
      ]}
      process={[
        {
          title: "Positioning before polish",
          text: "We align the website around what the business actually sells, who it serves, and what the visitor should do next.",
        },
        {
          title: "Design around clarity",
          text: "The layout, typography, and page flow are shaped to reduce friction and make the offer easier to understand.",
        },
        {
          title: "Build with speed in mind",
          text: "The site is developed to feel modern, responsive, and maintainable instead of visually heavy or over-engineered.",
        },
      ]}
      outcomes={[
        {
          title: "Clearer positioning",
          text: "Visitors understand the business faster, which improves the quality of conversations the site starts.",
        },
        {
          title: "Better page performance",
          text: "The finished site is cleaner, more responsive, and easier to build SEO on top of after launch.",
        },
        {
          title: "A stronger sales asset",
          text: "The site becomes something the team can actually use in growth, outreach, and trust-building instead of just having online.",
        },
      ]}
    />
  );
}
