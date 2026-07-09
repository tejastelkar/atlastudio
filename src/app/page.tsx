import type { Metadata } from "next";

import { HomePage } from "@/components/atlas/pages/home-page";

export const metadata: Metadata = {
  title: "Atlas Studio",
  description:
    "Atlas Studio builds custom websites, Shopify storefronts, focused web apps, and SEO-ready digital experiences for SaaS, ecommerce, and B2B brands.",
};

export default function Home() {
  return <HomePage />;
}
