import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/atlas/pages/service-page-template";

export const metadata: Metadata = {
  title: "Shopify Design & Development | Atlas Studio",
  description:
    "Atlas Studio designs and develops Shopify storefronts for growing ecommerce brands, with technical SEO and conversion clarity built in.",
};

export default function ShopifyAgencyPage() {
  return (
    <ServicePageTemplate
      eyebrow="Shopify Design & Development"
      firstLine="Shopify Stores Built"
      secondLine="For Growing Brands"
      summary="Atlas Studio designs, develops, and improves Shopify storefronts with cleaner buying journeys, faster performance, and ecommerce SEO built in from day one."
      audience="Best for ecommerce brands that need a sharper storefront, better structure, and dependable implementation without agency drag."
      deliverables={[
        "Theme design and development",
        "Custom sections and landing pages",
        "Collection, PDP, and conversion structure",
        "Technical SEO and performance cleanup",
        "Retention-focused storefront improvements",
        "Post-launch refinement support",
      ]}
      process={[
        {
          title: "Store audit and growth goals",
          text: "We start by understanding what is hurting clarity, speed, discoverability, or conversion inside the current storefront.",
        },
        {
          title: "Design and build execution",
          text: "Pages, sections, and customer journeys are rebuilt around the real buying flow, not generic Shopify patterns.",
        },
        {
          title: "Launch, QA, and refinement",
          text: "Before launch we tighten the experience, test the build carefully, and leave the store easier to scale after go-live.",
        },
      ]}
      outcomes={[
        {
          title: "Cleaner storefront logic",
          text: "Shoppers reach the right category, product, and action faster because the information flow is easier to follow.",
        },
        {
          title: "Performance-aware implementation",
          text: "The build is shaped around practical speed, maintainability, and technical SEO instead of visual polish alone.",
        },
        {
          title: "Founder-friendly delivery",
          text: "You get direct communication, faster iteration loops, and a lean execution model that stays close to the business goal.",
        },
      ]}
    />
  );
}
