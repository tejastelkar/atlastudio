import type { Metadata } from "next";

import { AboutPage as AtlasAboutPage } from "@/components/atlas/pages/about-page";

export const metadata: Metadata = {
  title: "About | Atlas Studio",
  description:
    "Learn how Atlas Studio works as a founder-led, AI-assisted studio focused on custom websites, Shopify builds, web apps, and SEO execution.",
};

export default function AboutPage() {
  return <AtlasAboutPage />;
}
